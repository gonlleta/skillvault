// ============================================================================
// VERCEL SERVERLESS API: /api/payment-webhook
// Receptor oficial de Webhooks (MercadoPago / PayPal) + Verificación de Pagos
// Activa automáticamente la membresía VIP o el curso comprado en Supabase.
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

  const mpAccessToken = process.env.MP_ACCESS_TOKEN || '';

  async function recordPurchaseAndUpgradeUser({
    userEmail,
    itemType = 'vip',
    itemId = 'monthly',
    amountUSD = 49,
    gateway = 'MercadoPago',
    externalPaymentId = '',
    rawPayload = {}
  }) {
    if (!supabaseUrl || !supabaseKey || !userEmail) {
      return { syncedToCloud: false };
    }

    const cleanEmail = String(userEmail).trim().toLowerCase();
    const sbHeaders = {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation'
    };

    const purchaseId = externalPaymentId ? `pay_${externalPaymentId}` : `pay_${Date.now()}`;

    // 1. Registrar en skillvault_purchases
    await fetch(`${supabaseUrl}/rest/v1/skillvault_purchases?on_conflict=id`, {
      method: 'POST',
      headers: {
        ...sbHeaders,
        Prefer: 'resolution=merge-duplicates'
      },
      body: JSON.stringify({
        id: purchaseId,
        user_email: cleanEmail,
        item_type: itemType,
        item_id: itemId,
        amount_usd: Number(amountUSD || 0),
        gateway,
        external_payment_id: String(externalPaymentId || ''),
        status: 'approved',
        raw_payload: rawPayload,
        created_at: new Date().toISOString()
      })
    });

    // 2. Obtener usuario existente en skillvault_users y activar membresía / curso
    const userRes = await fetch(
      `${supabaseUrl}/rest/v1/skillvault_users?email=eq.${encodeURIComponent(cleanEmail)}&select=*&limit=1`,
      { headers: sbHeaders }
    );
    const rows = userRes.ok ? await userRes.json() : [];
    const existing = Array.isArray(rows) && rows.length > 0 ? rows[0] : null;

    if (existing) {
      const profile = existing.profile || {};
      const now = new Date();
      if (itemType === 'vip') {
        const periodDays = itemId === 'annual' || itemId === 'founder' ? 365 : 30;
        const periodEnd = new Date(now.getTime() + periodDays * 24 * 60 * 60 * 1000).toISOString();
        profile.isProMember = true;
        profile.subscription = {
          tier: itemId === 'annual' ? 'annual' : 'monthly',
          planName: itemId === 'annual' ? 'Pase VIP Founder (Anual)' : 'Pase VIP PRO (Mensual)',
          priceUSD: Number(amountUSD || (itemId === 'annual' ? 129 : 49)),
          currency: 'USD',
          paymentMethod: gateway,
          status: 'active',
          startedAt: now.toISOString(),
          currentPeriodEnd: periodEnd,
          autoRenew: true
        };
      } else if (itemType === 'course' && itemId) {
        const owned = Array.isArray(profile.ownedCourses) ? profile.ownedCourses : [];
        if (!owned.includes(itemId)) owned.push(itemId);
        profile.ownedCourses = owned;
      }

      await fetch(`${supabaseUrl}/rest/v1/skillvault_users?email=eq.${encodeURIComponent(cleanEmail)}`, {
        method: 'PATCH',
        headers: sbHeaders,
        body: JSON.stringify({
          is_pro_member: Boolean(profile.isProMember),
          subscription: profile.subscription || existing.subscription,
          profile,
          updated_at: now.toISOString()
        })
      });
    }

    return { syncedToCloud: true, purchaseId };
  }

  try {
    if (req.method === 'GET') {
      return res.status(200).json({
        ok: true,
        webhookActive: true,
        mpConfigured: Boolean(mpAccessToken),
        supabaseConfigured: Boolean(supabaseUrl && supabaseKey),
        endpoint: '/api/payment-webhook'
      });
    }

    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};

      // A) Registro directo de compra verificada desde cliente o retorno de pasarela
      if (body.action === 'record_purchase') {
        const result = await recordPurchaseAndUpgradeUser({
          userEmail: body.userEmail,
          itemType: body.itemType || 'vip',
          itemId: body.itemId || 'monthly',
          amountUSD: body.amountUSD || 49,
          gateway: body.gateway || 'MercadoPago',
          externalPaymentId: body.externalPaymentId || '',
          rawPayload: body
        });
        return res.status(200).json({ ok: true, ...result });
      }

      // B) Creación dinámica de Preferencia Oficial de MercadoPago (si MP_ACCESS_TOKEN está configurado)
      if (body.action === 'create_mp_preference' && mpAccessToken) {
        const { title, priceUSD, userEmail, itemType, itemId, originUrl } = body;
        const baseUrl = (originUrl || 'https://skillvault-umber.vercel.app').replace(/\/$/, '');
        const prefRes = await fetch('https://api.mercadopago.com/checkout/preferences', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${mpAccessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            items: [
              {
                title: title || 'SkillVault Academy VIP',
                quantity: 1,
                currency_id: 'USD',
                unit_price: Number(priceUSD || 49)
              }
            ],
            payer: userEmail ? { email: userEmail } : undefined,
            metadata: {
              user_email: userEmail || '',
              item_type: itemType || 'vip',
              item_id: itemId || 'monthly'
            },
            back_urls: {
              success: `${baseUrl}/?pago_exitoso=approved`,
              failure: `${baseUrl}/`,
              pending: `${baseUrl}/`
            },
            auto_return: 'approved',
            notification_url: `${baseUrl}/api/payment-webhook`
          })
        });
        const prefData = await prefRes.json();
        if (prefRes.ok && prefData.init_point) {
          return res.status(200).json({ ok: true, init_point: prefData.init_point, id: prefData.id });
        }
        return res.status(200).json({ ok: false, error: prefData });
      }

      // C) Webhook IPN de MercadoPago (type === 'payment' o data.id)
      const paymentId = body?.data?.id || req.query?.['data.id'] || req.query?.id;
      const topic = body?.type || req.query?.type || req.query?.topic;

      if (paymentId && (topic === 'payment' || body?.action?.startsWith('payment.')) && mpAccessToken) {
        const mpRes = await fetch(`https://api.mercadopago.com/v1/payments/${encodeURIComponent(paymentId)}`, {
          headers: { Authorization: `Bearer ${mpAccessToken}` }
        });
        if (mpRes.ok) {
          const mpPayment = await mpRes.json();
          if (mpPayment.status === 'approved') {
            const payerEmail = mpPayment.metadata?.user_email || mpPayment.payer?.email || '';
            const itemType = mpPayment.metadata?.item_type || 'vip';
            const itemId = mpPayment.metadata?.item_id || 'monthly';
            const amountUSD = mpPayment.transaction_amount || 49;
            await recordPurchaseAndUpgradeUser({
              userEmail: payerEmail,
              itemType,
              itemId,
              amountUSD,
              gateway: 'MercadoPago Webhook',
              externalPaymentId: String(paymentId),
              rawPayload: mpPayment
            });
          }
        }
        return res.status(200).json({ received: true });
      }

      // D) Webhook de PayPal (CHECKOUT.ORDER.APPROVED / PAYMENT.SALE.COMPLETED)
      if (body?.event_type && body?.resource) {
        const resObj = body.resource;
        const payerEmail = resObj?.payer?.email_address || resObj?.custom_id || '';
        const amountUSD = resObj?.amount?.value || resObj?.purchase_units?.[0]?.amount?.value || 49;
        if (payerEmail) {
          await recordPurchaseAndUpgradeUser({
            userEmail: payerEmail,
            itemType: 'vip',
            itemId: Number(amountUSD) >= 100 ? 'annual' : 'monthly',
            amountUSD: Number(amountUSD),
            gateway: 'PayPal Webhook',
            externalPaymentId: resObj.id || '',
            rawPayload: body
          });
        }
        return res.status(200).json({ received: true });
      }

      return res.status(200).json({ received: true });
    }

    return res.status(405).json({ ok: false, error: 'Método no permitido' });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}

