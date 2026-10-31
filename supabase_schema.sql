-- ============================================================================
-- SKILLVAULT ACADEMY — ESQUEMA OFICIAL DE BASE DE DATOS EN LA NUBE (SUPABASE)
-- Ejecuta este script en el "SQL Editor" de tu proyecto en https://supabase.com
-- ============================================================================

-- 1. Tabla de Usuarios y Progreso Multi-Dispositivo
CREATE TABLE IF NOT EXISTS public.skillvault_users (
  email TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  provider TEXT DEFAULT 'Email',
  email_verified BOOLEAN DEFAULT FALSE,
  password_hash TEXT NOT NULL,
  is_pro_member BOOLEAN DEFAULT FALSE,
  points INTEGER DEFAULT 150,
  vip_points INTEGER DEFAULT 0,
  xp INTEGER DEFAULT 100,
  streak INTEGER DEFAULT 1,
  subscription JSONB DEFAULT NULL,
  profile JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabla de Compras y Suscripciones Verificadas por Webhook (MercadoPago / PayPal)
CREATE TABLE IF NOT EXISTS public.skillvault_purchases (
  id TEXT PRIMARY KEY,
  user_email TEXT NOT NULL,
  item_type TEXT NOT NULL, -- 'vip' | 'course'
  item_id TEXT NOT NULL,   -- 'monthly' | 'annual' | skillId
  amount_usd NUMERIC(10, 2) NOT NULL DEFAULT 0,
  gateway TEXT NOT NULL,   -- 'MercadoPago' | 'PayPal'
  external_payment_id TEXT,
  status TEXT NOT NULL DEFAULT 'approved',
  raw_payload JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_skillvault_purchases_email ON public.skillvault_purchases(user_email);

-- 3. Tabla de Tickets de Soporte del Centro de Ayuda
CREATE TABLE IF NOT EXISTS public.skillvault_support_tickets (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pendiente',
  admin_response TEXT DEFAULT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_skillvault_tickets_email ON public.skillvault_support_tickets(email);

-- 4. Habilitar Row Level Security (RLS) y políticas para API REST / Serverless
ALTER TABLE public.skillvault_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skillvault_purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skillvault_support_tickets ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Permitir acceso desde API SkillVault users" ON public.skillvault_users;
CREATE POLICY "Permitir acceso desde API SkillVault users"
  ON public.skillvault_users
  FOR ALL
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir acceso desde API SkillVault purchases" ON public.skillvault_purchases;
CREATE POLICY "Permitir acceso desde API SkillVault purchases"
  ON public.skillvault_purchases
  FOR ALL
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir acceso desde API SkillVault tickets" ON public.skillvault_support_tickets;
CREATE POLICY "Permitir acceso desde API SkillVault tickets"
  ON public.skillvault_support_tickets
  FOR ALL
  USING (true)
  WITH CHECK (true);
