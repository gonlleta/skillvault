'use client';

import React, { useState } from 'react';
import { ShieldCheck, Sparkles, X, Lock } from 'lucide-react';
// Para producción con NextAuth / Auth.js, descomenta la siguiente línea:
// import { signIn } from 'next-auth/react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  callbackUrl?: string;
}

export default function LoginModal({
  isOpen,
  onClose,
  callbackUrl = '/dashboard',
}: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      // Integración oficial con NextAuth / Auth.js:
      // await signIn('google', { callbackUrl });
      window.location.href = `/api/auth/signin/google?callbackUrl=${encodeURIComponent(
        callbackUrl
      )}`;
    } catch (error) {
      console.error('Error al iniciar sesión con Google OAuth:', error);
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-purple-500/30 bg-[#0b0f1d] p-6 sm:p-8 text-slate-100 shadow-[0_0_50px_rgba(168,85,247,0.18)]">
        {/* Resplandor Neón Superior */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-44 w-72 -translate-x-1/2 rounded-full bg-purple-600/25 blur-3xl"
        />

        {/* Cabecera del Modal */}
        <div className="relative flex items-center justify-between mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-300">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            Acceso Oficial SkillVault
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de acceso"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Título y Propuesta de Valor */}
        <div className="relative text-center mb-7">
          <h2
            id="login-modal-title"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2"
          >
            Bienvenido a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">SkillVault</span>
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Inicia sesión con un solo clic para sincronizar tu rango, tus{' '}
            <strong className="text-slate-200">Puntos Estándar (PTS)</strong>,{' '}
            <strong className="text-amber-300">Puntos VIP (👑 VP)</strong> y certificados.
          </p>
        </div>

        {/* Único Botón de Autenticación: Continuar con Google (OAuth 2.0) */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="group relative flex w-full items-center justify-center gap-3.5 rounded-xl border border-white/15 bg-white px-5 py-4 text-sm sm:text-base font-extrabold text-slate-900 shadow-[0_10px_30px_rgba(255,255,255,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-[0_14px_34px_rgba(168,85,247,0.28)] active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none"
        >
          {/* Logo Oficial de Google */}
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#EA4335"
              d="M12 10.2v3.9h5.5c-.2 1.3-1.6 3.8-5.5 3.8-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.4 14.6 2.5 12 2.5 6.8 2.5 2.5 6.8 2.5 12s4.3 9.5 9.5 9.5c5.5 0 9.1-3.9 9.1-9.3 0-.6-.1-1.1-.2-1.6H12z"
            />
          </svg>
          <span>{isLoading ? 'Conectando de forma segura...' : 'Continuar con Google'}</span>
        </button>

        {/* Sello de Seguridad Obligatorio */}
        <div className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-center">
          <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
          <p className="text-xs font-semibold text-emerald-300">
            Acceso 100% seguro. Nunca veremos tu contraseña.
          </p>
        </div>

        {/* Nota técnica inferior */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
          <Lock className="h-3 w-3" />
          <span>Autenticación encriptada vía OAuth 2.0 (NextAuth / Auth.js)</span>
        </div>
      </div>
    </div>
  );
}

