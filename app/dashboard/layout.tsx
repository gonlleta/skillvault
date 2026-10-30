'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  GraduationCap,
  Gem,
  Award,
  User,
  Settings,
  Zap,
  Flame,
  Crown,
  Menu,
  X,
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const SIDEBAR_ITEMS = [
  {
    label: 'Mi aprendizaje',
    href: '/dashboard',
    icon: BookOpen,
    badge: 'En curso',
  },
  {
    label: 'Mis cursos',
    href: '/dashboard/courses',
    icon: GraduationCap,
    badge: '14',
  },
  {
    label: 'Mis puntos',
    href: '/dashboard/points',
    icon: Gem,
    badge: 'PTS & VP',
  },
  {
    label: 'Mis certificados',
    href: '/dashboard/certificates',
    icon: Award,
  },
  {
    label: 'Mi perfil',
    href: '/dashboard/profile',
    icon: User,
  },
  {
    label: 'Configuración',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-primary,#070913)] text-slate-100 flex flex-col lg:flex-row">
      {/* Header Compacto Mobile-First */}
      <header className="flex items-center justify-between border-b border-white/10 bg-[#0b0f1d] px-4 py-3.5 lg:hidden">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-emerald-500 text-white font-extrabold shadow-[0_0_16px_rgba(168,85,247,0.45)]">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-white">
              Skill<span className="text-purple-400">Vault</span>
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              Panel del Alumno
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú del panel"
          className="rounded-xl border border-white/15 bg-white/5 p-2 text-slate-200"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Sidebar Oscuro y Gamificado */}
      <aside
        className={`${
          mobileMenuOpen ? 'flex' : 'hidden'
        } lg:flex w-full lg:w-72 shrink-0 flex-col justify-between border-r border-white/10 bg-[#0b0f1d] p-5`}
        aria-label="Menú lateral del panel del alumno"
      >
        <div>
          {/* Logo Desktop */}
          <div className="hidden lg:flex items-center gap-3 mb-8 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-emerald-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Skill<span className="text-purple-400">Vault</span>
              </span>
              <span className="block text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                Academia &amp; Puntos VIP
              </span>
            </div>
          </div>

          {/* Navegación con las 6 secciones obligatorias */}
          <nav className="space-y-1.5" aria-label="Secciones del alumno">
            {SIDEBAR_ITEMS.map(item => {
              const IconComponent = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-bold transition-all ${
                    isActive
                      ? 'border border-purple-500/50 bg-gradient-to-r from-purple-600/25 to-emerald-500/10 text-white shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                      : 'border border-transparent text-slate-400 hover:border-white/10 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent
                      className={`h-4 w-4 transition-colors ${
                        isActive ? 'text-purple-400' : 'text-slate-400 group-hover:text-purple-300'
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className="rounded-full border border-purple-500/30 bg-purple-500/15 px-2 py-0.5 text-[10px] font-extrabold text-purple-300">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Tarjeta Gamificada de Rango y Experiencia (RPG HUD) */}
        <div className="mt-8 rounded-2xl border border-purple-500/30 bg-gradient-to-b from-[#131930] to-[#0a0e1c] p-4 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-300">
                Rango Alumno • Nivel 4
              </span>
              <h4 className="text-sm font-extrabold text-white">Especialista Oro</h4>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs font-extrabold text-amber-300">
              <Flame className="h-3.5 w-3.5 text-amber-400" /> 7d
            </span>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800 my-2.5">
            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-purple-500 to-emerald-400" />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
            <span>
              <strong className="text-white">750</strong> / 1000 XP
            </span>
            <span className="text-amber-300 font-bold flex items-center gap-1">
              <Crown className="h-3.5 w-3.5" /> Miembro VIP
            </span>
          </div>
        </div>
      </aside>

      {/* Contenido Dinámico del Dashboard */}
      <main className="flex-1 p-4 sm:p-8 lg:p-10 overflow-y-auto">{children}</main>
    </div>
  );
}
