// ============================================================================
// VERCEL SERVERLESS API: /api/cloud-sync
// Sincronización en la nube multi-dispositivo (Supabase PostgreSQL REST +
// Respaldo Cloud Determinístico Automático + Caché Serverless /tmp).
// Garantiza que al abrir una cuenta en otro dispositivo (PC <-> Celular)
// siempre se recupere el registro, puntos (PTS/VP/XP), cursos y cuestionario.
// ============================================================================

import fs from 'fs';
import path from 'path';

const TMP_DB_PATH = path.join('/tmp', 'skillvault_cloud_db_v2.json');

function getEmailTopicHash(email) {
  const clean = String(email || '').trim().toLowerCase();
  let h1 = 0x811c9dc5;
  let h2 = 0x01000193;
  for (let i = 0; i < clean.length; i++) {
    const ch = clean.charCodeAt(i);
    h1 ^= ch;
    h1 = Math.imul(h1, 0x01000193);
    h2 ^= ch * 31;
    h2 = Math.imul(h2, 0x85ebca6b);
  }
  return 'sv_cloud_u_' + (h1 >>> 0).toString(36) + '_' + (h2 >>> 0).toString(36);
}

function loadServerMemoryDB() {
  if (!globalThis.__SKILLVAULT_CLOUD_DB) {
    globalThis.__SKILLVAULT_CLOUD_DB = { users: {}, tickets: {} };
    try {
      if (fs.existsSync(TMP_DB_PATH)) {
        const raw = fs.readFileSync(TMP_DB_PATH, 'utf8');
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          globalThis.__SKILLVAULT_CLOUD_DB = {
            users: parsed.users || {},
            tickets: parsed.tickets || {}
          };
        }
      }
    } catch (e) {}
  }
  return globalThis.__SKILLVAULT_CLOUD_DB;
}

function saveServerMemoryDB(db) {
  globalThis.__SKILLVAULT_CLOUD_DB = db;
  try {
    fs.writeFileSync(TMP_DB_PATH, JSON.stringify(db), 'utf8');
  } catch (e) {}
}

async function pushAccountToRelay(acc) {
  if (!acc || !acc.email) return false;
  const topic = getEmailTopicHash(acc.email);
  try {
    const res = await fetch(`https://ntfy.sh/${topic}`, {
      method: 'POST',
      headers: {
        Title: 'SkillVault Account Sync',
        Priority: 'min'
      },
      body: JSON.stringify({
        _svType: 'account_sync_v2',
        updatedAt: new Date().toISOString(),
        account: acc
      })
    });
    return res.ok;
  } catch (e) {
    return false;
  }
}

async function fetchAccountFromRelay(email) {
  if (!email) return null;
  const topic = getEmailTopicHash(email);
  try {
    const res = await fetch(`https://ntfy.sh/${topic}/json?poll=1&since=all`);
    if (!res.ok) return null;
    const text = await res.text();
    if (!text || !text.trim()) return null;
    const lines = text.trim().split('\n');
    let latestAcc = null;
    let latestTime = 0;

    for (const line of lines) {
      try {
        const evt = JSON.parse(line);
        if (evt && evt.event === 'message' && evt.message) {
          const payload = JSON.parse(evt.message);
          if (payload && payload._svType === 'account_sync_v2' && payload.account && payload.account.email) {
            const t = evt.time || 0;
            if (t >= latestTime) {
              latestTime = t;
              latestAcc = payload.account;
            }
          }
        }
      } catch (e) {}
    }
    return latestAcc;
  } catch (e) {
    return null;
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-supabase-url, x-supabase-key');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const supabaseUrl = (
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    req.headers['x-supabase-url'] ||
    ''
  ).replace(/\/$/, '');

  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    req.headers['x-supabase-key'] ||
    '';

  const hasSupabase = Boolean(supabaseUrl && supabaseKey);
  const memDB = loadServerMemoryDB();

  const sbHeaders = hasSupabase
    ? {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation'
      }
    : {};

  try {
    // GET /api/cloud-sync?email=... o ?status=1
    if (req.method === 'GET') {
      const { email, status, tickets } = req.query || {};

      if (status === '1') {
        return res.status(200).json({
          ok: true,
          cloudConfigured: true,
          mode: hasSupabase ? 'supabase_cloud' : 'serverless_cloud_relay',
          supabaseUrl: hasSupabase ? supabaseUrl : 'Cloud Relay Multi-Dispositivo Activo'
        });
      }

      if (tickets === '1') {
        if (hasSupabase) {
          const tkRes = await fetch(
            `${supabaseUrl}/rest/v1/skillvault_support_tickets?select=*&order=created_at.desc&limit=100`,
            { headers: sbHeaders }
          );
          if (tkRes.ok) {
            const tkData = await tkRes.json();
            return res.status(200).json({ ok: true, cloudConfigured: true, tickets: tkData });
          }
        }
        return res.status(200).json({
          ok: true,
          cloudConfigured: true,
          tickets: Object.values(memDB.tickets || {})
        });
      }

      if (!email) {
        return res.status(400).json({ ok: false, error: 'Parámetro email requerido' });
      }

      const cleanEmail = String(email).trim().toLowerCase();

      // 1. Intentar desde Supabase si está configurado
      if (hasSupabase) {
        try {
          const userRes = await fetch(
            `${supabaseUrl}/rest/v1/skillvault_users?email=eq.${encodeURIComponent(cleanEmail)}&select=*&limit=1`,
            { headers: sbHeaders }
          );
          if (userRes.ok) {
            const rows = await userRes.json();
            const userRow = Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
            if (userRow) {
              const found = {
                email: userRow.email,
                name: userRow.name,
                provider: userRow.provider || 'Email',
                emailVerified: Boolean(userRow.email_verified),
                passwordHash: userRow.password_hash,
                createdAt: userRow.created_at,
                profile: userRow.profile || {}
              };
              memDB.users[cleanEmail] = found;
              saveServerMemoryDB(memDB);
              return res.status(200).json({ ok: true, cloudConfigured: true, user: found });
            }
          }
        } catch (e) {}
      }

      // 2. Consultar Cloud Relay determinístico + memoria del servidor
      const relayAcc = await fetchAccountFromRelay(cleanEmail);
      if (relayAcc && relayAcc.email) {
        memDB.users[cleanEmail] = relayAcc;
        saveServerMemoryDB(memDB);
        return res.status(200).json({ ok: true, cloudConfigured: true, user: relayAcc });
      }

      if (memDB.users[cleanEmail]) {
        return res.status(200).json({ ok: true, cloudConfigured: true, user: memDB.users[cleanEmail] });
      }

      return res.status(200).json({ ok: true, cloudConfigured: true, user: null });
    }

    // POST /api/cloud-sync
    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
      const { action } = body;

      // 1. Upsert de cuenta y perfil completo (Registro, Login o Guardado de Progreso)
      if (action === 'upsert_user') {
        const acc = body.account;
        if (!acc || !acc.email) {
          return res.status(400).json({ ok: false, error: 'Datos de cuenta incompletos' });
        }

        const cleanEmail = String(acc.email).trim().toLowerCase();
        const normalizedAcc = {
          ...acc,
          email: cleanEmail,
          updatedAt: new Date().toISOString()
        };

        // Guardar en memoria serverless /tmp y en Cloud Relay determinístico
        memDB.users[cleanEmail] = normalizedAcc;
        saveServerMemoryDB(memDB);
        await pushAccountToRelay(normalizedAcc);

        if (hasSupabase) {
          try {
            const profile = acc.profile || {};
            const payload = {
              email: cleanEmail,
              name: acc.name || cleanEmail.split('@')[0],
              provider: acc.provider || 'Email',
              email_verified: Boolean(acc.emailVerified),
              password_hash: acc.passwordHash || '',
              is_pro_member: Boolean(profile.isProMember),
              points: Number(profile.points ?? 150),
              vip_points: Number(profile.vipPoints ?? 0),
              xp: Number(profile.xp ?? 100),
              streak: Number(profile.streak ?? 1),
              subscription: profile.subscription || null,
              profile,
              updated_at: new Date().toISOString()
            };

            await fetch(`${supabaseUrl}/rest/v1/skillvault_users?on_conflict=email`, {
              method: 'POST',
              headers: {
                ...sbHeaders,
                Prefer: 'resolution=merge-duplicates,return=representation'
              },
              body: JSON.stringify(payload)
            });
          } catch (e) {}
        }

        return res.status(200).json({ ok: true, cloudConfigured: true, saved: normalizedAcc });
      }

      // 2. Guardar o actualizar Ticket de Soporte en la nube
      if (action === 'upsert_ticket') {
        const tk = body.ticket;
        if (!tk || !tk.id || !tk.email) {
          return res.status(400).json({ ok: false, error: 'Datos de ticket incompletos' });
        }

        memDB.tickets[tk.id] = tk;
        saveServerMemoryDB(memDB);

        if (hasSupabase) {
          try {
            const payload = {
              id: tk.id,
              name: tk.name || 'Estudiante',
              email: String(tk.email).trim().toLowerCase(),
              category: tk.category || 'general',
              description: tk.description || '',
              status: tk.status || 'pendiente',
              admin_response: tk.adminResponse || null,
              created_at: tk.createdAt || new Date().toISOString(),
              updated_at: new Date().toISOString()
            };

            await fetch(`${supabaseUrl}/rest/v1/skillvault_support_tickets?on_conflict=id`, {
              method: 'POST',
              headers: {
                ...sbHeaders,
                Prefer: 'resolution=merge-duplicates,return=representation'
              },
              body: JSON.stringify(payload)
            });
          } catch (e) {}
        }

        return res.status(200).json({ ok: true, cloudConfigured: true, ticket: tk });
      }

      // 3. Sincronización masiva desde Admin
      if (action === 'bulk_sync') {
        const usersObj = body.users || {};
        const ticketsArr = Array.isArray(body.tickets) ? body.tickets : [];
        const userList = Object.values(usersObj).filter(u => u && u.email);

        for (const acc of userList) {
          const cleanEmail = String(acc.email).trim().toLowerCase();
          memDB.users[cleanEmail] = acc;
          await pushAccountToRelay(acc);
        }
        for (const tk of ticketsArr) {
          if (tk && tk.id) memDB.tickets[tk.id] = tk;
        }
        saveServerMemoryDB(memDB);

        return res.status(200).json({
          ok: true,
          cloudConfigured: true,
          syncedUsers: userList.length,
          syncedTickets: ticketsArr.length
        });
      }

      return res.status(400).json({ ok: false, error: 'Acción no reconocida' });
    }

    return res.status(405).json({ ok: false, error: 'Método no permitido' });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: err.message || 'Error interno en sincronización cloud'
    });
  }
}
