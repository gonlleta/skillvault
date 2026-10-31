// ============================================================================
// VERCEL SERVERLESS API: /api/send-email
// Despacho real de correos transaccionales mediante Resend API (https://resend.com)
// para verificación de cuenta, recuperación de contraseña, recibos VIP y soporte.
// ============================================================================

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-resend-key');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Método no permitido' });
  }

  const resendApiKey = process.env.RESEND_API_KEY || req.headers['x-resend-key'] || '';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'SkillVault Academy <onboarding@resend.dev>';

  if (!resendApiKey) {
    return res.status(200).json({
      ok: false,
      emailConfigured: false,
      mode: 'local_mailbox_only',
      message: 'RESEND_API_KEY no configurada aún; correo entregado en la Bandeja de Correos integrada.'
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const { to, subject, category, bodyHtml, ctaLabel, ctaUrl, originUrl } = body;

    if (!to || !subject) {
      return res.status(400).json({ ok: false, error: 'Destinatario y asunto son obligatorios' });
    }

    const baseUrl = originUrl || 'https://skillvault-umber.vercel.app';
    const fullCtaUrl =
      ctaUrl && !ctaUrl.startsWith('http')
        ? `${baseUrl.replace(/\/$/, '')}/${ctaUrl.replace(/^\//, '')}`
        : ctaUrl || '';

    const htmlTemplate = `
      <div style="font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif; background-color: #08090e; color: #f8fafc; padding: 36px 20px; border-radius: 16px; max-width: 580px; margin: 0 auto; border: 1px solid rgba(168, 85, 247, 0.3);">
        <div style="margin-bottom: 24px;">
          <span style="display: inline-block; background: rgba(168, 85, 247, 0.18); color: #c084fc; font-size: 11px; font-weight: 800; letter-spacing: 0.08em; padding: 5px 12px; border-radius: 999px; text-transform: uppercase;">
            ⚡ SkillVault • ${category || 'Notificación Oficial'}
          </span>
        </div>
        <h2 style="margin: 0 0 16px; font-size: 22px; color: #ffffff;">${subject}</h2>
        <div style="font-size: 15px; line-height: 1.65; color: #cbd5e1; margin-bottom: 26px;">
          ${bodyHtml || ''}
        </div>
        ${
          fullCtaUrl && ctaLabel
            ? `<div style="margin: 28px 0;">
                 <a href="${fullCtaUrl}" style="display: inline-block; background: linear-gradient(135deg, #a855f7, #6366f1); color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 13px 24px; border-radius: 12px;">
                   ${ctaLabel}
                 </a>
               </div>`
            : ''
        }
        <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 28px 0 16px;" />
        <p style="font-size: 12px; color: #64748b; margin: 0;">
          SkillVault — Academia Interactiva & Club VIP • Este es un correo automático de seguridad.
        </p>
      </div>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [to],
        subject,
        html: htmlTemplate
      })
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(200).json({ ok: false, emailConfigured: true, error: data });
    }

    return res.status(200).json({
      ok: true,
      emailConfigured: true,
      mode: 'resend_cloud',
      id: data.id
    });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
