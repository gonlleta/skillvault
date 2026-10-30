import React from 'react';
import Link from 'next/link';
import { Zap, ShieldCheck, Lock, HelpCircle, Users, FileText, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-white/10 bg-[#060811] text-slate-300"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Grid Mobile-First de Columnas Claras */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Identidad de Marca */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-emerald-500 text-white shadow-[0_0_18px_rgba(168,85,247,0.45)]">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white">
                  Skill<span className="text-purple-400">Vault</span>
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  Academia Gamificada &amp; Club VIP
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Domina Programación, Inteligencia Artificial y Finanzas superando misiones prácticas, subiendo de rango y canjeando puntos{' '}
              <strong className="text-white">PTS</strong> y{' '}
              <strong className="text-amber-300">👑 VP</strong> por recompensas reales.
            </p>
          </div>

          {/* Columna 2: Quiénes somos y Preguntas frecuentes */}
          <nav aria-label="Sobre la academia" className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Academia &amp; Comunidad
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="#instructors-authority-section"
                  className="inline-flex items-center gap-2 text-slate-400 transition hover:text-purple-300"
                >
                  <Users className="h-4 w-4 text-purple-400" />
                  <span>Quiénes somos</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#landing-faq-section"
                  className="inline-flex items-center gap-2 text-slate-400 transition hover:text-purple-300"
                >
                  <HelpCircle className="h-4 w-4 text-emerald-400" />
                  <span>Preguntas frecuentes</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Columna 3: Contacto y soporte */}
          <nav aria-label="Contacto y soporte" className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Contacto y soporte
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:gonzaloramirez.mail@gmail.com"
                  className="inline-flex items-center gap-2 text-slate-400 transition hover:text-emerald-300"
                >
                  <Mail className="h-4 w-4 text-emerald-400" />
                  <span>Contacto y soporte 24/7</span>
                </a>
              </li>
              <li className="text-xs text-slate-500">
                Atención directa al estudiante y soporte prioritario para miembros VIP PRO.
              </li>
            </ul>
          </nav>

          {/* Columna 4: Legal (Política de privacidad y Términos y condiciones) */}
          <nav aria-label="Información legal" className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Legal y Transparencia
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 text-slate-400 transition hover:text-purple-300"
                >
                  <Lock className="h-4 w-4 text-purple-400" />
                  <span>Política de privacidad</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-2 text-slate-400 transition hover:text-purple-300"
                >
                  <FileText className="h-4 w-4 text-emerald-400" />
                  <span>Términos y condiciones</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Barra Inferior de Seguridad y Derechos */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Pagos y autenticación 100% protegidos con encriptación SSL 256-Bit.</span>
          </div>
          <p>© 2026 SkillVault Academy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
