// ============================================================================
// VERCEL SERVERLESS API: /api/cloud-sync
// Sincronización en la nube (Supabase PostgreSQL REST) para cuentas, progreso,
// billetera firmada de puntos (PTS/VP/XP) y tickets de soporte multi-dispositivo.
// ============================================================================

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

  if (!supabaseUrl || !supabaseKey) {
    return res.status(200).json({
      ok: false,
      cloudConfigured: false,
      mode: 'local_fallback',
      message: 'Variables SUPABASE_URL / SUPABASE_ANON_KEY no configuradas aún; operando en almacenamiento local seguro.'
    });
  }

  const sbHeaders = {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation'
  };

  try {
    // GET /api/cloud-sync?email=... o ?status=1
    if (req.method === 'GET') {
      const { email, status, tickets } = req.query || {};

      if (status === '1') {
        return res.status(200).json({
          ok: true,
          cloudConfigured: true,
          mode: 'supabase_cloud',
          supabaseUrl
        });
      }

      if (tickets === '1') {
        const tkRes = await fetch(
          `${supabaseUrl}/rest/v1/skillvault_support_tickets?select=*&order=created_at.desc&limit=100`,
          { headers: sbHeaders }
        );
        const tkData = tkRes.ok ? await tkRes.json() : [];
        return res.status(200).json({ ok: true, cloudConfigured: true, tickets: tkData });
      }

      if (!email) {
        return res.status(400).json({ ok: false, error: 'Parámetro email requerido' });
      }

      const cleanEmail = String(email).trim().toLowerCase();
      const userRes = await fetch(
        `${supabaseUrl}/rest/v1/skillvault_users?email=eq.${encodeURIComponent(cleanEmail)}&select=*&limit=1`,
        { headers: sbHeaders }
      );

      if (!userRes.ok) {
        const errText = await userRes.text();
        return res.status(200).json({ ok: false, cloudConfigured: true, error: errText });
      }

      const rows = await userRes.json();
      const userRow = Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
      return res.status(200).json({
        ok: true,
        cloudConfigured: true,
        user: userRow
          ? {
              email: userRow.email,
              name: userRow.name,
              provider: userRow.provider || 'Email',
              emailVerified: Boolean(userRow.email_verified),
              passwordHash: userRow.password_hash,
              createdAt: userRow.created_at,
              profile: userRow.profile || {}
            }
          : null
      });
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

        const upsertRes = await fetch(`${supabaseUrl}/rest/v1/skillvault_users?on_conflict=email`, {
          method: 'POST',
          headers: {
            ...sbHeaders,
            Prefer: 'resolution=merge-duplicates,return=representation'
          },
          body: JSON.stringify(payload)
        });

        if (!upsertRes.ok) {
          const errText = await upsertRes.text();
          return res.status(200).json({ ok: false, cloudConfigured: true, error: errText });
        }

        const savedRows = await upsertRes.json();
        return res.status(200).json({ ok: true, cloudConfigured: true, saved: savedRows?.[0] || payload });
      }

      // 2. Guardar o actualizar Ticket de Soporte en la nube
      if (action === 'upsert_ticket') {
        const tk = body.ticket;
        if (!tk || !tk.id || !tk.email) {
          return res.status(400).json({ ok: false, error: 'Datos de ticket incompletos' });
        }

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

        const tkRes = await fetch(`${supabaseUrl}/rest/v1/skillvault_support_tickets?on_conflict=id`, {
          method: 'POST',
          headers: {
            ...sbHeaders,
            Prefer: 'resolution=merge-duplicates,return=representation'
          },
          body: JSON.stringify(payload)
        });

        const savedTk = tkRes.ok ? await tkRes.json() : null;
        return res.status(200).json({ ok: tkRes.ok, cloudConfigured: true, ticket: savedTk?.[0] || payload });
      }

      // 3. Sincronización masiva desde Admin (migrar base local a Supabase)
      if (action === 'bulk_sync') {
        const usersObj = body.users || {};
        const ticketsArr = Array.isArray(body.tickets) ? body.tickets : [];
        const userRows = Object.values(usersObj)
          .filter(u => u && u.email)
          .map(acc => {
            const profile = acc.profile || {};
            return {
              email: String(acc.email).trim().toLowerCase(),
              name: acc.name || acc.email.split('@')[0],
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
          });

        if (userRows.length > 0) {
          await fetch(`${supabaseUrl}/rest/v1/skillvault_users?on_conflict=email`, {
            method: 'POST',
            headers: {
              ...sbHeaders,
              Prefer: 'resolution=merge-duplicates'
            },
            body: JSON.stringify(userRows)
          });
        }

        if (ticketsArr.length > 0) {
          const formattedTickets = ticketsArr.map(tk => ({
            id: tk.id,
            name: tk.name || 'Estudiante',
            email: String(tk.email || '').trim().toLowerCase(),
            category: tk.category || 'general',
            description: tk.description || '',
            status: tk.status || 'pendiente',
            admin_response: tk.adminResponse || null,
            created_at: tk.createdAt || new Date().toISOString(),
            updated_at: new Date().toISOString()
          }));
          await fetch(`${supabaseUrl}/rest/v1/skillvault_support_tickets?on_conflict=id`, {
            method: 'POST',
            headers: {
              ...sbHeaders,
              Prefer: 'resolution=merge-duplicates'
            },
            body: JSON.stringify(formattedTickets)
          });
        }

        return res.status(200).json({
          ok: true,
          cloudConfigured: true,
          syncedUsers: userRows.length,
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
