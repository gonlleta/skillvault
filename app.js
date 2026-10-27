// Catálogo de Cursos:
// - Puntos Estándar (PTS): Los ganan todos los alumnos al aprobar.
// - Puntos Exclusivos VIP (👑 VP): SOLO los ganan los alumnos que tengan Membresía VIP PRO activa.
const DEFAULT_SKILLS = [
  {
    id: 'py-automation',
    title: 'Python desde Cero: Automatización de Tareas',
    category: 'Programación',
    priceUSD: 0,
    pointsReward: 300,
    vipPointsReward: 80, // Puntos Exclusivos VIP
    xp: 200,
    duration: 8,
    secretCourse: false,
    description: 'Curso introductorio gratuito. Aprende variables, listas y automatización en Python.',
    lessons: [
      {
        heading: '1. Variables y Cálculos Automáticos en Python',
        text: 'Python permite automatizar reportes, bots y finanzas en pocas líneas de código sin declarar tipos complejos.',
        code: 'clientes = 15\nsuscripcion_usd = 29\ningreso_mensual = clientes * suscripcion_usd\nprint(f"Ingresos: ${ingreso_mensual} USD")'
      },
      {
        heading: '2. Recorriendo datos con bucles For',
        text: 'Con un ciclo "for" puedes procesar cientos de archivos o registros en milisegundos.',
        code: 'tareas = ["Enviar factura", "Actualizar base", "Respaldar"]\nfor t in tareas:\n    print("Completado:", t)'
      }
    ],
    quiz: {
      question: '¿Qué imprimirá el código: a = 5; b = 4; print(a * b) en Python?',
      options: ['20', '54', 'a * b', 'Error'],
      correctIndex: 0
    }
  },
  {
    id: 'ai-agents-pro',
    title: 'Ingeniería de Prompts & Creación de Agentes IA',
    category: 'Inteligencia Artificial',
    priceUSD: 14.99,
    pointsReward: 550,
    vipPointsReward: 150,
    xp: 300,
    duration: 12,
    secretCourse: false,
    description: 'Domina la estructura Rol + Contexto + Restricciones + Formato para construir asistentes de IA avanzados.',
    lessons: [
      {
        heading: '1. La Arquitectura R-C-T-F de un Prompt Experto',
        text: 'Para obtener respuestas de nivel consultor, define siempre: Rol experto, Contexto del negocio, Tarea específica y Formato de salida.',
        code: 'ROL: Arquitecto de Software.\nTAREA: Diseña la base de datos de una app de cursos.\nFORMATO: Esquema SQL comentado.'
      },
      {
        heading: '2. Few-Shot Prompting',
        text: 'Incluir 2 ejemplos previos dentro de tu instrucción mejora la precisión del modelo en más de un 70%.'
      }
    ],
    quiz: {
      question: '¿Para qué sirve la técnica Few-Shot Prompting?',
      options: [
        'Darle ejemplos de entrada y salida al modelo para guiar el formato exacto de su respuesta',
        'Apagar el servidor de IA',
        'Escribir prompts de una sola palabra',
        'Traducir texto sin contexto'
      ],
      correctIndex: 0
    }
  },
  {
    id: 'fin-crypto-invest',
    title: 'Finanzas Digitales, Interés Compuesto y Gestión de Capital',
    category: 'Finanzas',
    priceUSD: 12.00,
    pointsReward: 450,
    vipPointsReward: 120,
    xp: 250,
    duration: 10,
    secretCourse: false,
    description: 'Aprende cómo funciona el flujo de caja, la regla 50/30/20 y cómo escalar tus ingresos digitales.',
    lessons: [
      {
        heading: '1. La Regla 50 / 30 / 20',
        text: 'Asigna el 50% a costos fijos, 30% a estilo de vida y separa primero el 20% para inversión y crecimiento compuesto.',
        code: 'Ingreso: $2,000 -> $400 directo a cartera de inversión.'
      }
    ],
    quiz: {
      question: '¿Qué ocurre con el interés compuesto a largo plazo?',
      options: [
        'Los intereses generados se reinvierten y producen nuevos intereses de forma exponencial',
        'El capital disminuye cada año',
        'Siempre da 0% de retorno',
        'Solo funciona los días lunes'
      ],
      correctIndex: 0
    }
  },
  {
    id: 'ux-growth-convert',
    title: 'Diseño UI/UX & Psicología de Ventas para Landing Pages',
    category: 'Diseño & Marketing',
    priceUSD: 19.00,
    pointsReward: 650,
    vipPointsReward: 200,
    xp: 350,
    duration: 14,
    secretCourse: false,
    description: 'Cómo diseñar interfaces modernas que convierten visitantes en clientes de pago.',
    lessons: [
      {
        heading: '1. Jerarquía Visual y Botones de Acción (CTA)',
        text: 'El botón de compra debe destacar con un color de alto contraste y expresar el beneficio directo para el usuario.',
        code: '✅ "Desbloquear Acceso Instantáneo"\n❌ "Enviar formulario"'
      }
    ],
    quiz: {
      question: '¿Cuál es una buena práctica para aumentar las ventas en una página de registro?',
      options: [
        'Reducir los campos innecesarios y usar un botón de llamado a la acción claro y contrastante',
        'Poner 35 preguntas obligatorias',
        'Ocultar el botón de compra',
        'Usar texto gris sobre fondo gris'
      ],
      correctIndex: 0
    }
  },
  {
    id: 'secret-saas-masterclass',
    title: '🔒 [CURSO SECRETO VIP] Cómo Lanzar un Micro-SaaS Rentable en 7 Días',
    category: 'Curso Secreto VIP',
    priceUSD: 0,
    pointsReward: 1000,
    vipPointsReward: 350,
    xp: 600,
    duration: 20,
    secretCourse: true,
    requiredRewardId: 'vip-rw-secret-saas',
    description: 'Masterclass exclusiva para miembros VIP que la desbloquearon con sus Puntos Exclusivos VIP (VP).',
    lessons: [
      {
        heading: '1. Validación antes de programar',
        text: 'El secreto de los fundadores exitosos es vender la solución con una landing page antes de escribir miles de líneas de código.',
        code: 'Paso 1: Landing Page -> Paso 2: Botón de Pre-venta -> Paso 3: Construir el MVP en 72 horas.'
      },
      {
        heading: '2. Automatización de Cobros Recurrentes',
        text: 'Las suscripciones mensuales (MRR) te dan previsibilidad financiera todos los meses.'
      }
    ],
    quiz: {
      question: '¿Qué significa MRR en un negocio de suscripciones digitales?',
      options: [
        'Monthly Recurring Revenue (Ingreso Recurrente Mensual)',
        'Modo Rápido de Reinicio',
        'Memoria RAM Reducida',
        'Margen de Riesgo Relativo'
      ],
      correctIndex: 0
    }
  }
];

// Recompensas EXCLUSIVAS VIP (Solo se pueden comprar con Puntos Exclusivos VIP `VP`)
const EXCLUSIVE_VIP_REWARDS = [
  {
    id: 'vip-rw-secret-saas',
    type: 'Exclusivo VIP • Curso Secreto',
    icon: '🗝️',
    title: 'Desbloquear Masterclass Oculta: "Lanza un Micro-SaaS en 7 Días"',
    costVIPPoints: 150,
    description: 'Solo para poseedores de Puntos Exclusivos VIP (VP). Habilita el curso secreto en el catálogo.',
    deliverable: '¡Curso Secreto desbloqueado con tus Puntos VIP! Ya puedes cursarlo en el Catálogo.'
  },
  {
    id: 'vip-rw-black-cert',
    type: 'Exclusivo VIP • Certificado Black-Gold',
    icon: '🏆',
    title: 'Certificado "Master Black-Gold" con Sello de Honor VIP',
    costVIPPoints: 220,
    description: 'El diploma de mayor prestigio de la academia, reservado únicamente para miembros VIP que acumularon VP.',
    deliverable: 'Diploma Black-Gold emitido: #SV-VIP-BLACKGOLD-001 (Prioridad en bolsa de empleo).'
  },
  {
    id: 'vip-rw-saas-source',
    type: 'Exclusivo VIP • Código Fuente Completo',
    icon: '💻',
    title: 'Plantilla Full-Stack SaaS Lista para Clonar y Vender',
    costVIPPoints: 300,
    description: 'Repositorio completo con autenticación, pasarela de pagos y dashboard listo para lanzar tu propio negocio.',
    deliverable: 'Acceso al repositorio privado VIP: github.com/skillvault-elite/saas-boilerplate-vip'
  },
  {
    id: 'vip-rw-mentoria-1a1',
    type: 'Exclusivo VIP • Sesión Privada',
    icon: '👑',
    title: 'Mentoría 1 a 1 en Vivo + Acceso al Club Fundadores',
    costVIPPoints: 450,
    description: 'Sesión privada de estrategia y acceso vitalicio al grupo privado de miembros VIP.',
    deliverable: 'Enlace de reserva VIP desbloqueado: cal.com/skillvault-founder/vip-1on1'
  }
];

// Recompensas Estándar (Se compran con Puntos Normales `PTS`)
const STANDARD_REWARDS = [
  {
    id: 'rw-cert-fullstack',
    type: 'Certificado Estándar',
    icon: '📜',
    title: 'Certificado de Finalización en Tecnología & IA',
    costPoints: 400,
    description: 'Emite tu diploma digital verificable para añadir a tu LinkedIn y CV.',
    deliverable: 'Código de Certificado Verificado: #SV-2026-STD-9941'
  },
  {
    id: 'rw-vip-badge',
    type: 'Multiplicador PTS',
    icon: '⚡',
    title: 'Insignia "Estudiante Constante" (+25% Puntos PTS Extra)',
    costPoints: 600,
    description: 'Todos los futuros cursos que completes te darán +25% más Puntos Estándar (PTS).',
    deliverable: 'Multiplicador permanente +25% PTS activado en tu cuenta.'
  },
  {
    id: 'rw-tool-prompts',
    type: 'Herramienta Descargable',
    icon: '🧰',
    title: 'Pack Descargable: +200 Mega-Prompts & Plantillas Notion',
    costPoints: 350,
    description: 'Biblioteca de plantillas listas para copiar y pegar en tus proyectos.',
    deliverable: 'Enlace desbloqueado: notion.so/skillvault-200-megaprompts'
  },
  {
    id: 'rw-tool-uikit',
    type: 'Herramienta Descargable',
    icon: '🎨',
    title: 'UI Kit: 50 Componentes Web Modernos (HTML/CSS)',
    costPoints: 450,
    description: 'Código fuente de tarjetas, dashboards y tablas de precios.',
    deliverable: 'Descarga habilitada: github.com/skillvault/ui-kit-components'
  }
];

const STORAGE_KEY = 'skillvault_academy_v3';

let state = loadState();
let activeFilter = 'all';
let currentSkill = null;
let currentStepIndex = 0;
let selectedQuizOption = null;

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
  }
  return {
    points: 450,        // Puntos estándar (PTS)
    vipPoints: 0,       // Puntos Exclusivos VIP (👑 VP)
    xp: 200,
    streak: 4,
    isProMember: false, // Cuando es true, el usuario es VIP y gana VP
    ownedCourses: ['py-automation'],
    completedCourses: [],
    unlockedRewards: [],
    customSkills: [],
    ownerBalanceUSD: 348.00,
    ownerSalesCount: 14,
    ownerSubsCount: 8,
    ownerTransactions: [
      {
        id: 'otx-1',
        title: '👑 Suscripción Pase VIP PRO — Alumno: Martín G.',
        date: 'Hace 2 horas',
        amount: 29.00,
        type: 'positive'
      },
      {
        id: 'otx-2',
        title: '🎓 Compra Curso "Ingeniería de Prompts IA" — Alumna: Lucía P.',
        date: 'Hace 5 horas',
        amount: 14.99,
        type: 'positive'
      },
      {
        id: 'otx-3',
        title: '👑 Suscripción Pase VIP PRO — Alumno: Diego R.',
        date: 'Ayer',
        amount: 29.00,
        type: 'positive'
      }
    ]
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getAllSkills() {
  return [...DEFAULT_SKILLS, ...(state.customSkills || [])];
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4500);
}

function getLevelInfo() {
  const level = Math.floor(state.xp / 500) + 1;
  const xpInLevel = state.xp % 500;
  const ranks = [
    'Estudiante Bronce',
    'Analista Plata',
    'Especialista Oro',
    'Maestro Platino',
    'Leyenda Diamante'
  ];
  const rankTitle = state.isProMember
    ? '👑 Miembro VIP PRO'
    : ranks[Math.min(level - 1, ranks.length - 1)];
  return { level, xpInLevel, nextXp: 500, rankTitle };
}

function hasAccessToCourse(skill) {
  if (skill.secretCourse) {
    return state.unlockedRewards.includes(skill.requiredRewardId);
  }
  if (skill.priceUSD === 0 || state.isProMember || state.ownedCourses.includes(skill.id)) {
    return true;
  }
  return false;
}

function getPointsMultiplier() {
  let mult = 1;
  if (state.isProMember) mult += 0.5;
  if (state.unlockedRewards.includes('rw-vip-badge')) mult += 0.25;
  return mult;
}

// Actualizar UI general
function renderHeaderAndStats() {
  const lvl = getLevelInfo();
  document.getElementById('user-level').textContent = lvl.level;
  document.getElementById('user-rank-title').textContent = lvl.rankTitle;
  document.getElementById('user-streak').textContent = state.streak;
  document.getElementById('user-xp').textContent = lvl.xpInLevel;
  document.getElementById('user-next-xp').textContent = lvl.nextXp;
  document.getElementById('xp-bar-fill').style.width = `${(lvl.xpInLevel / lvl.nextXp) * 100}%`;

  document.getElementById('vip-status-tag').textContent = state.isProMember
    ? '👑 VIP Activo (+VP)'
    : 'Cuenta Estándar';

  document.getElementById('user-points').innerHTML = `${state.points} <small>PTS</small>`;
  document.getElementById('user-vip-points').innerHTML = `${state.vipPoints} <small>VP</small>`;
  document.getElementById('top-owner-usd').innerHTML = `$${state.ownerBalanceUSD.toFixed(2)} <small>USD</small>`;
  document.getElementById('owner-revenue-pill').textContent = `$${Math.round(state.ownerBalanceUSD)}`;

  document.getElementById('stat-completed').textContent = state.completedCourses.length;
  document.getElementById('stat-total-points').textContent = `${state.points} PTS`;
  document.getElementById('stat-vip-points').textContent = `${state.vipPoints} VP`;

  document.getElementById('owner-main-usd').innerHTML = `$${state.ownerBalanceUSD.toFixed(2)} <span>USD</span>`;
  document.getElementById('owner-sales-count').textContent = `${state.ownerSalesCount} ventas`;
  document.getElementById('owner-subs-count').textContent = `${state.ownerSubsCount} miembros`;

  const buyProBtn = document.getElementById('buy-pro-btn');
  if (state.isProMember) {
    buyProBtn.textContent = '👑 Membresía VIP PRO Activa (Ganas Puntos Exclusivos VP)';
    buyProBtn.disabled = true;
  }

  renderFeaturedSkill();
  renderRewardsVault();
  renderUnlockedItems();
  renderOwnerTransactions();
}

function renderFeaturedSkill() {
  const all = getAllSkills();
  const nextSkill = all.find(s => !state.completedCourses.includes(s.id) && !s.secretCourse) || all[0];
  const box = document.getElementById('featured-skill-box');
  const unlocked = hasAccessToCourse(nextSkill);
  const completed = state.completedCourses.includes(nextSkill.id);

  box.innerHTML = `
    <div class="card-top">
      <span class="skill-cat-tag">⭐ CURSO DESTACADO</span>
      <div style="display:flex; gap:6px;">
        <span class="points-pill">+${nextSkill.pointsReward} PTS</span>
        <span class="vip-points-pill">👑 +${nextSkill.vipPointsReward || 100} VP</span>
      </div>
    </div>
    <h3 style="margin-bottom: 8px; font-size: 18px;">${nextSkill.title}</h3>
    <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">${nextSkill.description}</p>
    <div class="vip-bonus-banner">
      <span>👑 Bono Exclusivo VIP: <strong>+${nextSkill.vipPointsReward || 100} VP</strong></span>
      <span>${state.isProMember ? '✅ Habilitado' : '🔒 Requiere VIP'}</span>
    </div>
    ${
      unlocked
        ? `<button class="btn-start-skill" onclick="openSkillModal('${nextSkill.id}')">
            ${completed ? '✅ Repasar Lección' : `▶ Estudiar (+${nextSkill.pointsReward} PTS ${state.isProMember ? `y +${nextSkill.vipPointsReward} VP` : ''})`}
           </button>`
        : `<button class="btn-start-skill buy-btn" onclick="buyCourse('${nextSkill.id}')">
            🔓 Comprar Curso por $${nextSkill.priceUSD.toFixed(2)} USD
           </button>`
    }
  `;
}

// Catálogo de Cursos
function renderSkillsGrid() {
  const searchQuery = document.getElementById('search-input').value.toLowerCase().trim();
  const sortMode = document.getElementById('sort-select').value;
  const grid = document.getElementById('skills-grid');

  let skills = getAllSkills().filter(skill => {
    const matchesCat = activeFilter === 'all' || skill.category === activeFilter;
    const matchesSearch =
      skill.title.toLowerCase().includes(searchQuery) ||
      skill.description.toLowerCase().includes(searchQuery) ||
      skill.category.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  if (sortMode === 'points-desc') {
    skills.sort((a, b) => b.pointsReward - a.pointsReward);
  } else if (sortMode === 'price-asc') {
    skills.sort((a, b) => a.priceUSD - b.priceUSD);
  } else if (sortMode === 'time-asc') {
    skills.sort((a, b) => a.duration - b.duration);
  }

  grid.innerHTML = skills
    .map(skill => {
      const unlocked = hasAccessToCourse(skill);
      const completed = state.completedCourses.includes(skill.id);
      const vpAmount = skill.vipPointsReward || 100;

      let actionButton = '';
      if (skill.secretCourse && !unlocked) {
        actionButton = `<button class="btn-start-skill gold-btn" onclick="document.querySelector('[data-tab=rewards]').click()">👑 Desbloquear con ${ EXCLUSIVE_VIP_REWARDS[0].costVIPPoints } VP en Bóveda VIP</button>`;
      } else if (unlocked) {
        actionButton = `<button class="btn-start-skill ${completed ? 'done' : ''}" onclick="openSkillModal('${skill.id}')">
          ${completed ? '✅ Completado (Repasar)' : `🎓 Aprender (+${skill.pointsReward} PTS ${state.isProMember ? `+ ${vpAmount} VP` : ''})`}
        </button>`;
      } else {
        actionButton = `<button class="btn-start-skill buy-btn" onclick="buyCourse('${skill.id}')">
          💳 Desbloquear por $${skill.priceUSD.toFixed(2)} USD
        </button>`;
      }

      return `
        <article class="skill-card ${skill.secretCourse ? 'vip-exclusive-card' : ''}">
          <div>
            <div class="card-top">
              <span class="skill-cat-tag ${skill.secretCourse ? 'gold-tag' : ''}">${skill.category}</span>
              <div style="display:flex; gap:6px;">
                <span class="points-pill">+${skill.pointsReward} PTS</span>
                <span class="vip-points-pill" title="Puntos Exclusivos solo para miembros VIP">👑 +${vpAmount} VP</span>
              </div>
            </div>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
          </div>
          <div>
            <div class="vip-bonus-banner">
              <span>👑 Puntos Exclusivos VIP: <b>+${vpAmount} VP</b></span>
              <span>${state.isProMember ? '✅ Activo' : '🔒 Solo VIP'}</span>
            </div>
            <div class="skill-meta">
              <span>⏱️ ${skill.duration} min • ⚡ +${skill.xp} XP</span>
              <span class="price-badge">
                ${
                  skill.secretCourse
                    ? '👑 Exclusivo VIP'
                    : unlocked
                    ? '🔓 Desbloqueado'
                    : `$${skill.priceUSD.toFixed(2)} USD`
                }
              </span>
            </div>
            ${actionButton}
          </div>
        </article>
      `;
    })
    .join('');
}

// Compra de un curso individual -> Dinero para ti
window.buyCourse = function (skillId) {
  const skill = getAllSkills().find(s => s.id === skillId);
  if (!skill) return;

  state.ownedCourses.push(skill.id);
  state.ownerBalanceUSD += skill.priceUSD;
  state.ownerSalesCount += 1;

  state.ownerTransactions.unshift({
    id: 'otx-' + Date.now(),
    title: `🎓 Venta de Curso: "${skill.title}"`,
    date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    amount: skill.priceUSD,
    type: 'positive'
  });

  saveState();
  renderHeaderAndStats();
  renderSkillsGrid();
  showToast(`💰 ¡Recibiste +$${skill.priceUSD.toFixed(2)} USD por la venta del curso!`);
};

// Suscripción al Pase VIP PRO -> Dinero para ti ($29 USD) + Habilita los Puntos Exclusivos VIP (VP)
window.purchaseProMembership = function () {
  if (state.isProMember) return;
  const price = 29.00;
  state.isProMember = true;
  state.points += 500;
  state.vipPoints += 150; // Bono inicial de 150 Puntos Exclusivos VIP
  state.ownerBalanceUSD += price;
  state.ownerSubsCount += 1;

  state.ownerTransactions.unshift({
    id: 'otx-pro-' + Date.now(),
    title: `👑 Nueva Suscripción: Pase VIP PRO (+150 VP entregados al alumno)`,
    date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    amount: price,
    type: 'positive'
  });

  saveState();
  renderHeaderAndStats();
  renderSkillsGrid();
  showToast(`👑 ¡Recibiste +$29.00 USD! El alumno ahora es VIP y recibió +150 VP Exclusivos + 500 PTS.`);
};

window.simulateStudentPurchase = function () {
  const names = ['Valentina S.', 'Nicolás M.', 'Camila T.', 'Facundo B.', 'Julián K.'];
  const randomStudent = names[Math.floor(Math.random() * names.length)];
  const isVipSub = Math.random() > 0.4;

  const amount = isVipSub ? 29.00 : 14.99;
  const label = isVipSub
    ? `👑 Suscripción Pase VIP PRO de ${randomStudent}`
    : `💳 Compra de Curso por ${randomStudent}`;

  state.ownerBalanceUSD += amount;
  if (isVipSub) state.ownerSubsCount += 1;
  else state.ownerSalesCount += 1;

  state.ownerTransactions.unshift({
    id: 'otx-sim-' + Date.now(),
    title: label,
    date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    amount: amount,
    type: 'positive'
  });

  saveState();
  renderHeaderAndStats();
  showToast(`🔔 ¡Nuevo pago para ti! ${randomStudent} abonó +$${amount.toFixed(2)} USD.`);
};

// Aula Interactiva y Examen
window.openSkillModal = function (skillId) {
  const skill = getAllSkills().find(s => s.id === skillId);
  if (!skill) return;

  currentSkill = skill;
  currentStepIndex = 0;
  selectedQuizOption = null;

  const mult = getPointsMultiplier();
  const finalPoints = Math.round(skill.pointsReward * mult);
  const vpAmount = skill.vipPointsReward || 100;

  document.getElementById('modal-category').textContent = skill.category;
  document.getElementById('modal-points').textContent = `💎 +${finalPoints} PTS`;
  document.getElementById('modal-vip-points').textContent = state.isProMember
    ? `👑 +${vpAmount} VP (VIP Activo)`
    : `🔒 +${vpAmount} VP (Solo VIP)`;
  document.getElementById('modal-title').textContent = skill.title;
  document.getElementById('modal-subtitle').textContent = state.isProMember
    ? `¡Eres Miembro VIP! Al aprobar ganarás +${finalPoints} PTS y +${vpAmount} Puntos Exclusivos VIP (VP).`
    : `Cuenta Estándar: Ganarás +${finalPoints} PTS. (Hazte VIP para ganar también los +${vpAmount} VP exclusivos).`;

  renderModalStep();
  document.getElementById('lesson-modal').classList.add('open');
};

function renderModalStep() {
  const totalSteps = currentSkill.lessons.length + 1;
  const stepper = document.getElementById('lesson-stepper');
  const body = document.getElementById('modal-body');
  const footer = document.getElementById('modal-footer');

  stepper.innerHTML = Array.from({ length: totalSteps })
    .map((_, idx) => `<div class="step-dot ${idx <= currentStepIndex ? 'active' : ''}"></div>`)
    .join('');

  if (currentStepIndex < currentSkill.lessons.length) {
    const lesson = currentSkill.lessons[currentStepIndex];
    body.innerHTML = `
      <div class="lesson-box">
        <h4>Lección ${currentStepIndex + 1} de ${currentSkill.lessons.length}: ${lesson.heading}</h4>
        <p>${lesson.text}</p>
        ${lesson.code ? `<pre class="lesson-code">${lesson.code}</pre>` : ''}
      </div>
    `;

    footer.innerHTML = `
      <button class="btn-secondary" ${currentStepIndex === 0 ? 'disabled style="opacity:0.4"' : ''} onclick="prevLessonStep()">⬅ Anterior</button>
      <button class="btn-primary-full" style="max-width: 260px;" onclick="nextLessonStep()">
        ${currentStepIndex === currentSkill.lessons.length - 1 ? 'Ir al Examen Final 🎯' : 'Siguiente Lección ➡'}
      </button>
    `;
  } else {
    const quiz = currentSkill.quiz;
    const finalPoints = Math.round(currentSkill.pointsReward * getPointsMultiplier());
    const vpAmount = currentSkill.vipPointsReward || 100;

    body.innerHTML = `
      <div class="lesson-box">
        <h4>📝 Examen de Verificación</h4>
        <p style="font-weight: 600; color: #fff; margin-bottom: 10px;">${quiz.question}</p>
        <div class="quiz-options">
          ${quiz.options
            .map(
              (opt, idx) => `
              <button class="quiz-option-btn ${selectedQuizOption === idx ? 'selected' : ''}" onclick="selectQuizAnswer(${idx})">
                ${String.fromCharCode(65 + idx)}) ${opt}
              </button>
            `
            )
            .join('')}
        </div>
      </div>
    `;

    footer.innerHTML = `
      <button class="btn-secondary" onclick="prevLessonStep()">⬅ Repasar Lección</button>
      <button class="btn-primary-full" style="max-width: 310px;" onclick="submitQuizAnswer()">
        ✅ Reclamar +${finalPoints} PTS ${state.isProMember ? `y +${vpAmount} VP` : ''}
      </button>
    `;
  }
}

window.prevLessonStep = function () {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    renderModalStep();
  }
};

window.nextLessonStep = function () {
  currentStepIndex++;
  renderModalStep();
};

window.selectQuizAnswer = function (idx) {
  selectedQuizOption = idx;
  renderModalStep();
};

window.submitQuizAnswer = function () {
  if (selectedQuizOption === null) {
    showToast('⚠️ Selecciona una opción antes de verificar.');
    return;
  }
  if (selectedQuizOption !== currentSkill.quiz.correctIndex) {
    showToast('❌ Respuesta incorrecta. Revisa la lección e inténtalo de nuevo.');
    return;
  }

  const alreadyDone = state.completedCourses.includes(currentSkill.id);
  if (!alreadyDone) {
    const earnedPoints = Math.round(currentSkill.pointsReward * getPointsMultiplier());
    const earnedVIPPoints = state.isProMember ? (currentSkill.vipPointsReward || 100) : 0;

    state.completedCourses.push(currentSkill.id);
    state.points += earnedPoints;
    state.vipPoints += earnedVIPPoints;
    state.xp += currentSkill.xp;

    saveState();
    renderHeaderAndStats();
    renderSkillsGrid();

    if (state.isProMember) {
      showToast(`👑 ¡Aprobado! Ganaste +${earnedPoints} PTS y +${earnedVIPPoints} Puntos Exclusivos VIP (VP).`);
    } else {
      showToast(`🎉 ¡Aprobado! Ganaste +${earnedPoints} PTS. (Activa el Pase VIP para ganar también Puntos VIP).`);
    }
  } else {
    showToast('✅ ¡Curso repasado con éxito!');
  }

  document.getElementById('lesson-modal').classList.remove('open');
};

// Renderizar Bóveda de Canje (Separada en Exclusivos VIP con `VP` y Estándar con `PTS`)
function renderRewardsVault() {
  const vipGrid = document.getElementById('vip-exclusive-rewards-grid');
  const stdGrid = document.getElementById('rewards-grid');

  // 1. Recompensas Exclusivas VIP (Solo con VP)
  vipGrid.innerHTML = EXCLUSIVE_VIP_REWARDS.map(rw => {
    const unlocked = state.unlockedRewards.includes(rw.id);
    const canAfford = state.vipPoints >= rw.costVIPPoints && state.isProMember;

    return `
      <article class="skill-card vip-exclusive-card">
        <div>
          <div class="card-top">
            <span class="skill-cat-tag gold-tag">${rw.icon} ${rw.type}</span>
            <span class="vip-points-pill">👑 ${rw.costVIPPoints} VP</span>
          </div>
          <h3>${rw.title}</h3>
          <p>${rw.description}</p>
        </div>
        <div>
          ${
            unlocked
              ? `<button class="btn-start-skill done" onclick="document.querySelector('[data-tab=certificates]').click()">✅ Desbloqueado (Ver en Mis Certificados & VIP)</button>`
              : !state.isProMember
              ? `<button class="btn-start-skill gold-btn" onclick="document.querySelector('[data-tab=plans]').click()">👑 Hazte Miembro VIP para Desbloquear (${rw.costVIPPoints} VP)</button>`
              : `<button class="btn-start-skill gold-btn" style="${!canAfford ? 'opacity:0.65' : ''}" onclick="redeemVIPReward('${rw.id}')">
                  👑 Canjear con ${rw.costVIPPoints} Puntos VIP (VP)
                 </button>`
          }
        </div>
      </article>
    `;
  }).join('');

  // 2. Recompensas Estándar (Con PTS)
  stdGrid.innerHTML = STANDARD_REWARDS.map(rw => {
    const unlocked = state.unlockedRewards.includes(rw.id);
    const canAfford = state.points >= rw.costPoints;

    return `
      <article class="skill-card">
        <div>
          <div class="card-top">
            <span class="skill-cat-tag">${rw.icon} ${rw.type}</span>
            <span class="points-pill">${rw.costPoints} PTS</span>
          </div>
          <h3>${rw.title}</h3>
          <p>${rw.description}</p>
        </div>
        <div>
          ${
            unlocked
              ? `<button class="btn-start-skill done" onclick="document.querySelector('[data-tab=certificates]').click()">✅ Desbloqueado (Ver en Mis Certificados & VIP)</button>`
              : `<button class="btn-start-skill" style="${!canAfford ? 'opacity:0.65' : ''}" onclick="redeemStandardReward('${rw.id}')">
                  🔓 Canjear por ${rw.costPoints} PTS
                 </button>`
          }
        </div>
      </article>
    `;
  }).join('');
}

// Canjear recompensa Exclusiva VIP usando `VP`
window.redeemVIPReward = function (rewardId) {
  const rw = EXCLUSIVE_VIP_REWARDS.find(r => r.id === rewardId);
  if (!rw || state.unlockedRewards.includes(rewardId)) return;

  if (!state.isProMember) {
    showToast('👑 Esta recompensa es exclusiva para miembros VIP PRO.');
    return;
  }
  if (state.vipPoints < rw.costVIPPoints) {
    showToast(`⚠️ Necesitas ${rw.costVIPPoints} Puntos Exclusivos VIP (VP). Tienes ${state.vipPoints} VP.`);
    return;
  }

  state.vipPoints -= rw.costVIPPoints;
  state.unlockedRewards.push(rw.id);
  saveState();
  renderHeaderAndStats();
  renderSkillsGrid();
  showToast(`👑 ¡Recompensa Élite "${rw.title}" desbloqueada con tus Puntos VIP!`);
};

// Canjear recompensa Estándar usando `PTS`
window.redeemStandardReward = function (rewardId) {
  const rw = STANDARD_REWARDS.find(r => r.id === rewardId);
  if (!rw || state.unlockedRewards.includes(rewardId)) return;

  if (state.points < rw.costPoints) {
    showToast(`⚠️ Necesitas ${rw.costPoints} PTS (tienes ${state.points} PTS).`);
    return;
  }

  state.points -= rw.costPoints;
  state.unlockedRewards.push(rw.id);
  saveState();
  renderHeaderAndStats();
  renderSkillsGrid();
  showToast(`💎 ¡Desbloqueaste "${rw.title}" con tus puntos PTS!`);
};

function renderUnlockedItems() {
  const container = document.getElementById('unlocked-list');
  const allRewards = [...EXCLUSIVE_VIP_REWARDS, ...STANDARD_REWARDS];

  if (state.unlockedRewards.length === 0) {
    container.innerHTML = `
      <div class="certificate-card" style="grid-column: 1/-1;">
        <h3>Aún no has canjeado recompensas</h3>
        <p style="color:var(--text-muted); margin: 8px 0 16px;">Completa cursos para ganar Puntos Estándar (PTS) o hazte miembro VIP para ganar Puntos Exclusivos VIP (👑 VP) y desbloquear premios únicos.</p>
        <button class="btn-secondary" onclick="document.querySelector('[data-tab=rewards]').click()">Ir a la Bóveda de Canje 💎</button>
      </div>
    `;
    return;
  }

  container.innerHTML = state.unlockedRewards
    .map(id => {
      const rw = allRewards.find(r => r.id === id);
      if (!rw) return '';
      const isVip = Boolean(rw.costVIPPoints);
      return `
        <div class="certificate-card ${isVip ? 'gold-cert' : ''}">
          <div class="card-top">
            <span class="skill-cat-tag ${isVip ? 'gold-tag' : ''}">${rw.icon} ${rw.type}</span>
            <span class="price-badge">${isVip ? '👑 ÉLITE VIP' : '✅ ACTIVO'}</span>
          </div>
          <h3 style="margin-bottom:8px;">${rw.title}</h3>
          <p style="font-size:13px; color:var(--text-muted); margin-bottom:14px;">${rw.description}</p>
          <div class="lesson-code" style="margin-top:0;">${rw.deliverable}</div>
        </div>
      `;
    })
    .join('');
}

function renderOwnerTransactions() {
  const list = document.getElementById('owner-tx-list');
  list.innerHTML = state.ownerTransactions
    .map(
      tx => `
      <div class="tx-item">
        <div>
          <div class="tx-title">${tx.title}</div>
          <div class="tx-date">${tx.date}</div>
        </div>
        <div class="tx-amount ${tx.type}">
          ${tx.type === 'positive' ? '+' : '-'}$${tx.amount.toFixed(2)} USD
        </div>
      </div>
    `
    )
    .join('');
}

// Eventos principales
document.addEventListener('DOMContentLoaded', () => {
  renderHeaderAndStats();
  renderSkillsGrid();

  const navButtons = document.querySelectorAll('.nav-item');
  const views = document.querySelectorAll('.tab-view');

  function switchTab(tabName) {
    navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabName));
    views.forEach(v => v.classList.toggle('active', v.id === `view-${tabName}`));
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  document.getElementById('go-rewards-btn').addEventListener('click', () => switchTab('rewards'));
  document.getElementById('top-points-btn').addEventListener('click', () => switchTab('rewards'));
  document.getElementById('top-vip-points-btn').addEventListener('click', () => switchTab('rewards'));
  document.getElementById('top-owner-btn').addEventListener('click', () => switchTab('owner'));

  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.cat;
      renderSkillsGrid();
    });
  });

  document.getElementById('search-input').addEventListener('input', renderSkillsGrid);
  document.getElementById('sort-select').addEventListener('change', renderSkillsGrid);

  document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('lesson-modal').classList.remove('open');
  });

  document.querySelectorAll('.method-option').forEach(label => {
    label.addEventListener('click', () => {
      document.querySelectorAll('.method-option').forEach(l => l.classList.remove('active'));
      label.classList.add('active');
    });
  });

  document.getElementById('owner-withdraw-form').addEventListener('submit', e => {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('owner-withdraw-amount').value);
    const dest = document.getElementById('owner-withdraw-dest').value.trim();
    const method = document.querySelector('input[name="payout-method"]:checked').value;

    if (isNaN(amount) || amount < 10) {
      showToast('⚠️ El retiro mínimo es de $10.00 USD.');
      return;
    }
    if (amount > state.ownerBalanceUSD) {
      showToast('⚠️ Saldo insuficiente para retirar ese monto.');
      return;
    }

    state.ownerBalanceUSD -= amount;
    state.ownerTransactions.unshift({
      id: 'otx-wd-' + Date.now(),
      title: `💸 Retiro de ganancias a tu cuenta ${method} (${dest})`,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      amount,
      type: 'negative'
    });

    saveState();
    renderHeaderAndStats();
    document.getElementById('owner-withdraw-dest').value = '';
    showToast(`✅ Retiraste $${amount.toFixed(2)} USD hacia ${method}`);
  });

  document.getElementById('create-skill-form').addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('custom-title').value.trim();
    const category = document.getElementById('custom-category').value;
    const priceUSD = parseFloat(document.getElementById('custom-price').value);
    const pointsReward = parseInt(document.getElementById('custom-points').value, 10);
    const vipPointsReward = parseInt(document.getElementById('custom-vip-points').value, 10);
    const content = document.getElementById('custom-content').value.trim();
    const question = document.getElementById('custom-question').value.trim();
    const answer = document.getElementById('custom-answer').value.trim();

    const newCourse = {
      id: 'course-' + Date.now(),
      title,
      category,
      priceUSD,
      pointsReward,
      vipPointsReward,
      xp: 250,
      duration: 10,
      secretCourse: false,
      description: content.slice(0, 120) + (content.length > 120 ? '...' : ''),
      lessons: [
        {
          heading: 'Lección Principal',
          text: content
        }
      ],
      quiz: {
        question,
        options: [answer, 'Opción incorrecta A', 'Opción incorrecta B'],
        correctIndex: 0
      }
    };

    state.customSkills.push(newCourse);
    saveState();
    renderSkillsGrid();
    renderHeaderAndStats();
    e.target.reset();
    switchTab('explore');
    showToast(`🚀 Curso "${title}" publicado (+${pointsReward} PTS y 👑 +${vipPointsReward} VP para VIPs).`);
  });
});
