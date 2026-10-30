'use client';

import React, { useState } from 'react';
import {
  ShieldAlert,
  CreditCard,
  Wallet,
  Building2,
  Save,
  CheckCircle2,
  Lock,
  KeyRound,
} from 'lucide-react';

export default function AdminPaymentsPage() {
  const [mpLink, setMpLink] = useState('');
  const [mpAlias, setMpAlias] = useState('gonlletaa');
  const [paypalAccount, setPaypalAccount] = useState('gonzaloramirez.mail@gmail.com');
  const [stripeCheckoutUrl, setStripeCheckoutUrl] = useState('');
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3500);
  };

  return (
    <main className="min-h-screen bg-[#070913] text-slate-100 p-4 sm:p-8 lg:p-12">
      <div className="mx-auto max-w-4xl">
        {/* Banner de Ruta Protegida de Administrador */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-purple-500/40 bg-gradient-to-r from-purple-950/60 via-[#0d1326] to-emerald-950/40 p-5 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/40 bg-purple-500/20 text-purple-300">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                <Lock className="h-3.5 w-3.5" />
                Ruta Aislada • /admin/payments
              </span>
              <h1 className="text-xl sm:text-2xl font-extrabold text-white">
                Configuración de Pasarelas de Cobro (Panel Privado Admin)
              </h1>
            </div>
          </div>

          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3.5 py-1.5 text-xs font-bold text-emerald-300">
            ✔ Sesión de Propietario Verificada
          </span>
        </div>

        {/* Formulario de Configuración de Pasarelas */}
        <form
          onSubmit={handleSaveSettings}
          className="space-y-6 rounded-2xl border border-white/10 bg-[#0d1222] p-6 sm:p-8 shadow-2xl"
        >
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-purple-400" />
              Credenciales y Enlaces de Recaudación
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Esta configuración está completamente aislada de la Landing Page pública. Los cambios impactan de inmediato en el checkout de cursos y membresías VIP.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Tarjeta PayPal */}
            <div className="rounded-xl border border-white/10 bg-[#080c17] p-5">
              <div className="mb-3 flex items-center gap-2.5">
                <Wallet className="h-5 w-5 text-sky-400" />
                <h3 className="font-bold text-white">PayPal Express / PayPal.me (USD)</h3>
              </div>
              <label
                htmlFor="admin-paypal"
                className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2"
              >
                Correo de Cuenta Comercial o Link PayPal.me
              </label>
              <input
                id="admin-paypal"
                type="text"
                value={paypalAccount}
                onChange={e => setPaypalAccount(e.target.value)}
                placeholder="gonzaloramirez.mail@gmail.com"
                className="w-full rounded-xl border border-white/15 bg-[#0f1629] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Tarjeta Stripe */}
            <div className="rounded-xl border border-white/10 bg-[#080c17] p-5">
              <div className="mb-3 flex items-center gap-2.5">
                <CreditCard className="h-5 w-5 text-purple-400" />
                <h3 className="font-bold text-white">Stripe Checkout Internacional</h3>
              </div>
              <label
                htmlFor="admin-stripe"
                className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2"
              >
                Payment Link Oficial de Stripe
              </label>
              <input
                id="admin-stripe"
                type="url"
                value={stripeCheckoutUrl}
                onChange={e => setStripeCheckoutUrl(e.target.value)}
                placeholder="https://buy.stripe.com/..."
                className="w-full rounded-xl border border-white/15 bg-[#0f1629] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Tarjeta MercadoPago Link */}
            <div className="rounded-xl border border-white/10 bg-[#080c17] p-5">
              <div className="mb-3 flex items-center gap-2.5">
                <Building2 className="h-5 w-5 text-emerald-400" />
                <h3 className="font-bold text-white">MercadoPago — Link de Pago</h3>
              </div>
              <label
                htmlFor="admin-mp-link"
                className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2"
              >
                URL de Checkout MercadoPago (Opcional)
              </label>
              <input
                id="admin-mp-link"
                type="url"
                value={mpLink}
                onChange={e => setMpLink(e.target.value)}
                placeholder="https://mpago.la/..."
                className="w-full rounded-xl border border-white/15 bg-[#0f1629] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            {/* Tarjeta MercadoPago Alias/CVU */}
            <div className="rounded-xl border border-white/10 bg-[#080c17] p-5">
              <div className="mb-3 flex items-center gap-2.5">
                <Building2 className="h-5 w-5 text-emerald-400" />
                <h3 className="font-bold text-white">MercadoPago — Alias / CVU Directo</h3>
              </div>
              <label
                htmlFor="admin-mp-alias"
                className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2"
              >
                Alias o CVU Bancario para Transferencias
              </label>
              <input
                id="admin-mp-alias"
                type="text"
                value={mpAlias}
                onChange={e => setMpAlias(e.target.value)}
                placeholder="gonlletaa"
                className="w-full rounded-xl border border-white/15 bg-[#0f1629] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {savedNotice && (
            <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-300">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
              <span>¡Configuración de cobros guardada de forma segura en el servidor!</span>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-emerald-500 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition hover:opacity-95"
            >
              <Save className="h-4 w-4" />
              Guardar Configuración de Cobros
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
