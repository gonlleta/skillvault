// Catálogo de Cursos Completos con Módulos Profundos, Checkpoints Obligatorios por Clase y Examen Final Múltiple:
// - Puntos Estándar (PTS): Los ganan todos los alumnos tras superar cada checkpoint y lograr 100% en el examen final.
// - Puntos Exclusivos VIP (👑 VP): SOLO los ganan los alumnos con Membresía VIP PRO activa.
const DEFAULT_SKILLS = [
  {
    id: 'py-automation',
    title: 'Python desde Cero: Automatización de Procesos y Datos',
    category: 'Programación',
    priceUSD: 0,
    pointsReward: 150,
    vipPointsReward: 45,
    xp: 200,
    duration: 35,
    secretCourse: false,
    description: 'Domina tipos de datos, estructuras condicionales, listas, diccionarios, funciones modulares y manejo de errores para automatizar tareas reales en Python.',
    lessons: [
      {
        heading: 'Módulo 1: Variables, Tipado Dinámico y Operadores Aritméticos',
        readTime: '8 min de lectura',
        paragraphs: [
          'Python es un lenguaje de programación interpretado y de tipado dinámico. Esto significa que no necesitas declarar explícitamente si una variable es un número entero (int), un decimal (float) o una cadena de texto (str); el intérprete asigna el tipo en tiempo de ejecución según el valor almacenado.',
          'En entornos empresariales, las variables se utilizan para parametrizar reportes financieros, calcular márgenes e inyectar valores dinámicos usando f-strings (cadenas formateadas con el prefijo f antes de las comillas).'
        ],
        keyPoints: [
          'Usa nombres descriptivos en formato snake_case (ej. costo_unitario, tasa_impuesto).',
          'El operador // realiza división entera (descarta decimales) y ** calcula potencias.',
          'Las f-strings permiten evaluar expresiones directamente dentro de llaves {}.'
        ],
        code: `# Cálculo automatizado de rentabilidad neta mensual
ingresos_brutos = 4850.75
costo_servidor = 120.00
comision_pasarela = 0.035  # 3.5% por transacción

descuento_pasarela = ingresos_brutos * comision_pasarela
utilidad_neta = ingresos_brutos - costo_servidor - descuento_pasarela
margen_porcentual = (utilidad_neta / ingresos_brutos) * 100

print(f"Utilidad Neta: \${utilidad_neta:.2f} USD ({margen_porcentual:.1f}% de margen)")`,
        warning: '⚠️ Error común: Sumar un string "100" con un entero 50 lanzará un TypeError. Convierte siempre entradas de texto con int() o float() antes de operar.',
        checkpoint: {
          question: '¿Qué sintaxis en Python permite insertar variables directamente dentro de un texto formateado y redondear a 2 decimales?',
          options: [
            '"Total: " + valor.round(2)',
            'f"Total: {valor:.2f}"',
            'print(%d valor)',
            'string.format_auto(valor)'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 2: Estructuras de Control Condicional (if / elif / else) y Lógica Booleana',
        readTime: '9 min de lectura',
        paragraphs: [
          'Para que un script tome decisiones autónomas —como aprobar un pago, bloquear un intento sospechoso o aplicar un descuento por volumen— utilizamos bloques condicionales combinados con operadores lógicos (and, or, not).',
          'Python evalúa las condiciones de arriba hacia abajo. En cuanto una condición if o elif resulta verdadera (True), ejecuta ese bloque e ignora el resto de la estructura.'
        ],
        keyPoints: [
          'La indentación (4 espacios) no es estética: define qué líneas pertenecen al bloque condicional.',
          'Usa == para comparar igualdad de valores y != para verificar desigualdad.',
          'El operador "and" exige que ambas condiciones sean verdaderas simultáneamente.'
        ],
        code: `def clasificar_cliente(compras_anuales_usd, tiene_deuda):
    if tiene_deuda:
        return "⛔ Cuenta suspendida hasta regularizar saldo"
    elif compras_anuales_usd >= 5000:
        return "👑 Cliente Corporativo VIP (20% Descuento)"
    elif compras_anuales_usd >= 1000:
        return "⭐ Cliente Frecuente (10% Descuento)"
    else:
        return "👤 Cliente Estándar (Sin descuento)"

print(clasificar_cliente(6200, False))`,
        warning: '⚠️ Nunca uses "=" (asignación) dentro de un "if"; para comparar igualdad debes escribir siempre doble signo igual "==".',
        checkpoint: {
          question: 'En la función anterior, ¿qué devolverá clasificar_cliente(8000, True)?',
          options: [
            '👑 Cliente Corporativo VIP, porque 8000 es mayor a 5000',
            'Un error de sintaxis',
            '⛔ Cuenta suspendida hasta regularizar saldo, porque el primer if evalúa tiene_deuda antes del monto',
            '👤 Cliente Estándar'
          ],
          correctIndex: 2
        }
      },
      {
        heading: 'Módulo 3: Listas, Diccionarios e Iteración Eficiente con Bucles For',
        readTime: '10 min de lectura',
        paragraphs: [
          'En automatización real rara vez procesas un solo dato; trabajas con colecciones de cientos o miles de registros (clientes, facturas, pedidos). Las listas [] almacenan secuencias ordenadas, mientras que los diccionarios {} guardan pares clave-valor ideales para representar objetos tipo JSON.',
          'Combinar una lista de diccionarios con un bucle "for" o una "list comprehension" te permite filtrar, transformar y auditar bases de datos enteras en milisegundos.'
        ],
        keyPoints: [
          'lista.append(item) agrega un elemento al final de la lista.',
          'diccionario.get("clave", valor_por_defecto) evita errores KeyError si la clave no existe.',
          'Las comprensiones de listas [x for x in datos if condicion] son más rápidas y legibles.'
        ],
        code: `facturas = [
    {"id": "F-101", "cliente": "Acme Corp", "monto": 1200, "pagada": True},
    {"id": "F-102", "cliente": "Beta LLC",  "monto": 850,  "pagada": False},
    {"id": "F-103", "cliente": "Nova Tech", "monto": 2300, "pagada": False},
]

pendientes = [f for f in facturas if not f["pagada"]]
total_por_cobrar = sum(f["monto"] for f in pendientes)

for fac in pendientes:
    print(f"Enviar recordatorio a {fac['cliente']} por \${fac['monto']} USD")
print(f"Total pendiente de cobro: \${total_por_cobrar} USD")`,
        warning: '⚠️ Modificar el tamaño de una lista mientras la estás recorriendo en el mismo bucle for puede saltar elementos. Crea siempre una lista nueva filtrada.',
        checkpoint: {
          question: '¿Por qué es más seguro usar factura.get("descuento", 0) en lugar de factura["descuento"]?',
          options: [
            'Porque si la clave "descuento" no existe en el diccionario, devuelve 0 en vez de detener el programa con KeyError',
            'Porque borra el diccionario automáticamente',
            'Porque convierte todos los números en texto',
            'No hay ninguna diferencia'
          ],
          correctIndex: 0
        }
      },
      {
        heading: 'Módulo 4: Funciones Modulares y Manejo Robusto de Errores (try / except)',
        readTime: '8 min de lectura',
        paragraphs: [
          'Un script profesional que corre en un servidor no puede colapsar a mitad de la noche porque un archivo venía vacío o una API tardó en responder. Para eso encapsulamos la lógica en funciones reutilizables con "def" y protegemos las operaciones críticas con bloques try / except.',
          'Cuando ocurre una excepción dentro del bloque "try", Python salta inmediatamente al bloque "except", registra el incidente y permite que el resto de los registros continúen procesándose sin interrupción.'
        ],
        keyPoints: [
          'Toda función debe tener una única responsabilidad clara y devolver un resultado con "return".',
          'Captura excepciones específicas como ValueError, ZeroDivisionError o KeyError.',
          'El bloque "finally" se ejecuta siempre, ocurra o no un error (útil para cerrar conexiones).'
        ],
        code: `def calcular_ticket_promedio(total_ventas, cantidad_clientes):
    try:
        promedio = total_ventas / cantidad_clientes
        return round(promedio, 2)
    except ZeroDivisionError:
        print("⚠️ Alerta: Día sin clientes registrados. Retornando 0.0")
        return 0.0
    except TypeError:
        print("❌ Error: Los valores ingresados deben ser numéricos.")
        return None

print(calcular_ticket_promedio(1500, 0))  # No rompe el programa: devuelve 0.0`,
        warning: '⚠️ Evita usar un "except:" vacío sin especificar el error, ya que ocultará errores de programación que deberías detectar.',
        checkpoint: {
          question: '¿Qué bloque se utiliza en Python para interceptar una división por cero sin que el script se detenga abruptamente?',
          options: [
            'if error == Zero: stop()',
            'ignore_errors(True)',
            'catch(DivisionException)',
            'try: ... except ZeroDivisionError: ...'
          ],
          correctIndex: 3
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Qué resultado produce la expresión `17 // 5` en Python?',
          options: [
            '3.4',
            '3 (división entera que descarta la parte decimal)',
            '2 (el resto de la división)',
            'Error de tipos'
          ],
          correctIndex: 1
        },
        {
          question: '2. ¿Cuál es la forma recomendada de acceder a una clave opcional en un diccionario sin arriesgar un `KeyError`?',
          options: [
            'Usando corchetes directos `diccionario["clave"]`',
            'Convirtiendo el diccionario en un número entero',
            'Usando el método `.get("clave", valor_por_defecto)`',
            'Usando un bucle infinito `while True`'
          ],
          correctIndex: 2
        },
        {
          question: '3. ¿Qué devuelve la comprensión `[x * 2 for x in [1, 2, 3, 4] if x > 2]`?',
          options: [
            '[6, 8]',
            '[2, 4, 6, 8]',
            '[3, 4]',
            '[8]'
          ],
          correctIndex: 0
        },
        {
          question: '4. ¿Por qué es fundamental usar bloques `try / except` en scripts de automatización?',
          options: [
            'Para que el código ocupe menos líneas en el archivo',
            'Porque Python no permite crear funciones sin un bloque try',
            'Para acelerar la velocidad del procesador un 500%',
            'Para capturar errores esperables (datos corruptos, divisiones por cero, caídas de red) y permitir que el proceso continúe sin colapsar'
          ],
          correctIndex: 3
        }
      ]
    }
  },
  {
    id: 'ai-agents-pro',
    title: 'Ingeniería de Prompts Avanzada & Arquitectura de Agentes IA',
    category: 'Inteligencia Artificial',
    priceUSD: 14.99,
    pointsReward: 260,
    vipPointsReward: 85,
    xp: 320,
    duration: 45,
    secretCourse: false,
    description: 'Domina el framework R-C-T-R-F, Few-Shot Prompting, Chain-of-Thought, salidas estructuradas JSON y diseño de agentes autónomos con herramientas.',
    lessons: [
      {
        heading: 'Módulo 1: Arquitectura R-C-T-R-F y Delimitadores Estructurales',
        readTime: '10 min de lectura',
        paragraphs: [
          'La diferencia entre una respuesta genérica y un entregable de nivel consultoría senior radica en cómo acotas el espacio de búsqueda probabilístico del modelo de lenguaje (LLM). El framework R-C-T-R-F estructura el prompt en 5 capas obligatorias: Rol, Contexto, Tarea, Restricciones y Formato de Salida.',
          'Además, el uso de delimitadores claros (como etiquetas XML <contexto>...</contexto> o bloques Markdown ###) evita que el modelo confunda las instrucciones del sistema con los datos de entrada que debe analizar (previniendo ataques de Prompt Injection).'
        ],
        keyPoints: [
          'Rol: Define el perfil técnico, años de experiencia y criterio de evaluación.',
          'Restricciones negativas: Especifica qué NO debe hacer (ej. "No uses jerga genérica, no inventes métricas").',
          'Delimitadores XML: Separan limpiamente las reglas de negocio de los textos del usuario.'
        ],
        code: `<rol>
Actúa como Auditor Senior de Ciberseguridad especializado en aplicaciones SaaS B2B.
</rol>
<contexto>
Nuestra API recibe formularios públicos de clientes y los guarda en PostgreSQL.
</contexto>
<tarea>
Analiza el código adjunto en <codigo_fuente> y detecta las 3 vulnerabilidades más críticas.
</tarea>
<restricciones>
- No incluyas introducciones ni saludos.
- Basa cada hallazgo en el estándar OWASP Top 10.
</restricciones>
<formato_salida>
Tabla Markdown con columnas: [Severidad | Línea | Vulnerabilidad | Parche de Código].
</formato_salida>`,
        warning: '⚠️ Nunca mezcles instrucciones y datos no confiables del usuario en el mismo párrafo sin delimitadores; un usuario podría escribir "Ignora lo anterior" y secuestrar el prompt.',
        checkpoint: {
          question: '¿Para qué sirven las etiquetas tipo XML como `<contexto>` o `<datos_usuario>` dentro de un prompt profesional?',
          options: [
            'Para separar claramente las instrucciones del sistema de los datos a procesar y prevenir confusiones o inyecciones de prompt',
            'Para cambiar el color de la fuente en la pantalla',
            'Porque los modelos solo entienden código HTML',
            'Para reducir el costo de internet'
          ],
          correctIndex: 0
        }
      },
      {
        heading: 'Módulo 2: Few-Shot Prompting y Calibración de Tono/Estructura',
        readTime: '11 min de lectura',
        paragraphs: [
          'Cuando necesitas que un modelo clasifique tickets de soporte, extraiga entidades o redacte con un estilo muy específico, explicar las reglas en abstracto (Zero-Shot) suele fallar en casos borde. La técnica Few-Shot consiste en inyectar de 2 a 5 pares de ejemplo (Entrada -> Salida ideal) antes de pedirle que resuelva el caso real.',
          'Los ejemplos actúan como anclas de formato y criterio: el modelo imita exactamente la longitud, estructura y lógica de clasificación demostrada en los ejemplos previos.'
        ],
        keyPoints: [
          'Incluye casos borde (edge cases) dentro de tus ejemplos Few-Shot.',
          'Mantén exactamente el mismo esquema de etiquetas en todos los ejemplos.',
          '3 ejemplos bien diversos superan a 20 párrafos de explicación teórica.'
        ],
        code: `Clasifica el sentimiento y la urgencia del mensaje del cliente:

Ejemplo 1:
Entrada: "Llevo 3 días sin poder facturar y mi tienda está frenada, necesito ayuda ya."
Salida: {"sentimiento": "negativo", "urgencia": "critica", "area": "facturacion"}

Ejemplo 2:
Entrada: "Me encanta la nueva función de reportes, ¿planean agregar exportación a Excel?"
Salida: {"sentimiento": "positivo", "urgencia": "baja", "area": "producto"}

Caso Real:
Entrada: "El cobro de este mes vino duplicado en mi tarjeta Visa terminada en 4412."
Salida:`,
        warning: '⚠️ Si tus ejemplos Few-Shot tienen formatos inconsistentes entre sí, el modelo replicará esa misma inconsistencia en producción.',
        checkpoint: {
          question: '¿En qué consiste el enfoque Few-Shot Prompting frente al Zero-Shot?',
          options: [
            'En hacerle 100 preguntas distintas al mismo tiempo',
            'En proveer ejemplos concretos de Entrada y Salida esperada dentro del prompt para fijar el patrón exacto de respuesta',
            'En no darle ningún contexto al modelo',
            'En limitar la respuesta a una sola letra'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 3: Chain-of-Thought (Cadena de Pensamiento) y Auto-Verificación',
        readTime: '12 min de lectura',
        paragraphs: [
          'Los LLMs generan texto token por token. Si les pides que den directamente el resultado final de un problema matemático, financiero o arquitectónico complejo, tienen alta probabilidad de alucinar porque intentan "adivinar" la respuesta antes de procesar los pasos intermedios.',
          'Con Chain-of-Thought (CoT) obligamos al modelo a descomponer el problema paso a paso dentro de un bloque <razonamiento> antes de emitir su <respuesta_final>. De este modo, los tokens del razonamiento sirven como memoria de trabajo para llegar a una conclusión exacta.'
        ],
        keyPoints: [
          'Exige que el modelo valide sus propios cálculos antes de dar el veredicto.',
          'Usa etiquetas <analisis_paso_a_paso> y luego <veredicto_final> para poder ocultar el borrador en tu app.',
          'Reduce drásticamente los errores lógicos en auditoría de código y finanzas.'
        ],
        code: `Resuelve el siguiente caso financiero siguiendo estrictamente estos pasos:
1. En <calculo_paso_a_paso>, desglosa los ingresos, resta costos variables (15%) y costos fijos ($1,200).
2. En <verificacion>, comprueba si la suma de partes coincide con el total bruto.
3. En <resultado_json>, entrega únicamente el objeto JSON final con la utilidad neta.`,
        warning: '⚠️ Si pides primero el resultado JSON y después la explicación, el modelo ya habrá comprometido un número posiblemente erróneo y solo inventará una justificación.',
        checkpoint: {
          question: '¿Por qué el bloque de razonamiento debe generarse ANTES de la respuesta final en Chain-of-Thought?',
          options: [
            'Por una cuestión meramente decorativa',
            'Porque los servidores leen el texto de abajo hacia arriba',
            'Porque el modelo genera token por token y necesita procesar los pasos intermedios primero para condicionar correctamente el resultado final',
            'Para gastar menos memoria RAM'
          ],
          correctIndex: 2
        }
      },
      {
        heading: 'Módulo 4: Agentes Autónomos, Uso de Herramientas (Tool Calling) y JSON Schema',
        readTime: '12 min de lectura',
        paragraphs: [
          'Un Agente de IA se diferencia de un simple chatbot porque funciona en un ciclo autónomo (Observación -> Pensamiento -> Acción -> Observación) y tiene acceso a herramientas externas (consultar bases de datos SQL, llamar APIs de pagos, enviar correos).',
          'Para conectar un LLM con código real en JavaScript o Python, configuramos salidas estructuradas (Structured Outputs / JSON Schema) garantizando que la respuesta nunca contenga texto libre fuera del JSON válido.'
        ],
        keyPoints: [
          'El ciclo ReAct (Reason + Act) permite al agente decidir qué herramienta invocar y con qué parámetros.',
          'Valida siempre los argumentos que el agente envía a una herramienta antes de ejecutar acciones destructivas.',
          'Define temperaturas bajas (0.0 a 0.2) para tareas de extracción de datos y agentes.'
        ],
        code: `// Definición de herramienta (Tool) para un Agente de Soporte
const tools = [{
  name: "consultar_estado_pedido",
  description: "Obtiene el estado logístico y fecha de entrega de una orden por su ID.",
  parameters: {
    type: "object",
    properties: {
      order_id: { type: "string", pattern: "^ORD-[0-9]{5}$" }
    },
    required: ["order_id"]
  }
}];`,
        warning: '⚠️ Nunca permitas que un agente ejecute reembolsos o borrado de datos en producción sin una validación determinista o confirmación humana (Human-in-the-Loop).',
        checkpoint: {
          question: '¿Qué parámetro de configuración del modelo conviene usar (ej. 0.0 - 0.2) cuando necesitamos respuestas deterministas en formato JSON para un agente?',
          options: [
            'Temperatura baja (0.0 a 0.2) para minimizar la aleatoriedad y asegurar precisión estructural',
            'Temperatura máxima (2.0) para que invente campos creativos',
            'Sin límite de temperatura',
            'Modo poético activado'
          ],
          correctIndex: 0
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Cuáles son los 5 componentes del framework R-C-T-R-F en Ingeniería de Prompts?',
          options: [
            'Rol, Contexto, Tarea, Restricciones y Formato de Salida',
            'Red, Código, Texto, Resumen y Final',
            'Rápido, Corto, Técnico, Real y Fácil',
            'Respuesta, Consulta, Tiempo, Regla y Función'
          ],
          correctIndex: 0
        },
        {
          question: '2. ¿Por qué ocurre un fallo lógico si le pides a un LLM que dé primero la respuesta numérica y recién al final explique el procedimiento?',
          options: [
            'Porque el modelo no sabe escribir números al principio de una oración',
            'Porque al predecir el primer token sin haber calculado los pasos intermedios, el modelo adivina el número y luego racionaliza su error',
            'Porque se borra el historial del navegador',
            'No ocurre ningún fallo, da exactamente igual el orden'
          ],
          correctIndex: 1
        },
        {
          question: '3. ¿Qué diferencia fundamental tiene un Agente de IA respecto a un prompt conversacional simple?',
          options: [
            'El agente solo puede responder con emojis',
            'El agente no utiliza modelos de lenguaje',
            'El agente razona en bucle (ReAct), decide qué herramientas externas o APIs invocar y actúa según los resultados obtenidos',
            'El agente funciona sin electricidad'
          ],
          correctIndex: 2
        },
        {
          question: '4. ¿Qué medida de seguridad es indispensable al integrar un Agente con herramientas que modifican bases de datos o pagos?',
          options: [
            'Validar estrictamente el esquema de parámetros (JSON Schema) y exigir confirmación (Human-in-the-Loop) en acciones críticas',
            'Darle permisos de superadministrador sin restricciones a la base de datos',
            'Subir la temperatura del modelo a 1.9',
            'Confiar ciegamente en cualquier texto enviado por el usuario'
          ],
          correctIndex: 0
        }
      ]
    }
  },
  {
    id: 'fin-crypto-invest',
    title: 'Finanzas Digitales, Flujo de Caja, Interés Compuesto y Gestión de Riesgo',
    category: 'Finanzas',
    priceUSD: 12.00,
    pointsReward: 220,
    vipPointsReward: 70,
    xp: 280,
    duration: 40,
    secretCourse: false,
    description: 'Aprende arquitectura de flujo de caja, matemática del interés compuesto, fondo de liquidez, diversificación asimétrica y control de riesgo.',
    lessons: [
      {
        heading: 'Módulo 1: Arquitectura del Flujo de Caja y Regla 50 / 30 / 20 Automatizada',
        readTime: '9 min de lectura',
        paragraphs: [
          'El error financiero #1 de profesionales y freelancers es ahorrar "lo que sobra a fin de mes". La ley de Parkinson aplicada al dinero demuestra que los gastos siempre se expanden hasta consumir todo el ingreso disponible si no existe una separación previa automática.',
          'En un sistema de flujo de caja blindado, apenas ingresa el capital se divide en 3 conductos automáticos: 50% máximo para costos fijos de vida, 20% mínimo que se transfiere el día 1 a cuentas de inversión/activos, y 30% para estilo de vida libre de culpa.'
        ],
        keyPoints: [
          'Págate a ti mismo primero: el 20% de inversión sale el mismo día que cobras.',
          'Diferencia un Activo (pone dinero en tu bolsillo) de un Pasivo (extrae flujo de caja cada mes).',
          'Si tus costos fijos superan el 60%, tu prioridad no es invertir en activos volátiles sino reducir estructura o aumentar ingresos.'
        ],
        code: `Ingreso Neto Mensual: $2,500 USD
├─ 🏦 20% Inversión Automática Día 1:  $500 USD -> Cartera Indexada / Liquidez
├─ 🏠 50% Costos Fijos Operativos:    $1,250 USD -> Vivienda, Servicios, Herramientas
└─ 🎯 30% Estilo de Vida & Ocio:      $750 USD -> Salidas, Gustos sin endeudarse`,
        warning: '⚠️ Financiar gastos de estilo de vida con tarjeta de crédito pagando solo el "pago mínimo" genera tasas compuestas en tu contra de más del 60% al 120% anual.',
        checkpoint: {
          question: 'Según el principio de "pagarte a ti mismo primero", ¿en qué momento debe separarse el porcentaje destinado a inversión?',
          options: [
            'El mismo día en que ingresa el dinero, antes de gastar en estilo de vida',
            'El último día del mes si quedó algún sobrante',
            'Solo una vez cada 5 años',
            'Después de pagar intereses de tarjetas de crédito atrasadas'
          ],
          correctIndex: 0
        }
      },
      {
        heading: 'Módulo 2: Fondo de Emergencia y Liquidez vs. Rentabilidad',
        readTime: '10 min de lectura',
        paragraphs: [
          'Antes de invertir en renta variable, acciones tecnológicas o criptoactivos, todo inversor profesional construye su "foso defensivo": un Fondo de Reserva equivalente a entre 3 y 6 meses de sus costos fijos básicos.',
          'El objetivo de este fondo NO es hacerse rico, sino evitar que una urgencia médica, rotura de equipo de trabajo o caída temporal de clientes te obligue a malvender tus inversiones a largo plazo en el peor momento del mercado.'
        ],
        keyPoints: [
          'El fondo de emergencia debe estar en instrumentos de liquidez inmediata y riesgo casi nulo (Money Market, cuentas remuneradas en moneda dura o letras del tesoro a corto plazo).',
          'Si tus costos fijos son $1,000 USD/mes, tu escudo completo es de $3,000 a $6,000 USD.',
          'Nunca inviertas tu fondo de emergencia en activos que puedan caer un 40% en una semana.'
        ],
        code: `Cálculo del Escudo de Liquidez Personal:
Costos Fijos Mensuales = $900 USD
Meta Mínima (3 meses)  = $2,700 USD (En cuenta remunerada disponible 24/7)
Meta Óptima (6 meses)  = $5,400 USD (Cobertura total ante imprevistos)`,
        warning: '⚠️ Mantener el fondo de emergencia en efectivo físico sin rendimiento pierde entre 3% y 5% anual de poder adquisitivo incluso en dólares por la inflación.',
        checkpoint: {
          question: '¿Cuál es la función principal del Fondo de Emergencia de 3 a 6 meses?',
          options: [
            'Dar liquidez inmediata ante imprevistos para no tener que endeudarse ni malvender inversiones de largo plazo en pérdidas',
            'Multiplicar el dinero por 10 en una semana apostando en activos de alto riesgo',
            'Comprar bienes de lujo a crédito',
            'Pagar comisiones bancarias innecesarias'
          ],
          correctIndex: 0
        }
      },
      {
        heading: 'Módulo 3: Matemática del Interés Compuesto y la Regla del 72',
        readTime: '11 min de lectura',
        paragraphs: [
          'En el interés simple solo ganas rendimientos sobre tu capital inicial. En el interés compuesto, las ganancias de cada período se suman al capital base, de modo que en el siguiente ciclo ganas intereses sobre los intereses previos, formando una curva exponencial: Capital_Final = Capital_Inicial * (1 + r)^n.',
          'Un atajo mental usado por banqueros e inversores es la "Regla del 72": si divides el número 72 entre la tasa de rendimiento anual esperada, obtienes cuántos años tardará tu capital en duplicarse sin aportar un dólar extra.'
        ],
        keyPoints: [
          'Regla del 72: Al 8% anual, tu dinero se duplica cada 9 años (72 / 8 = 9).',
          'Al 12% anual, tu dinero se duplica cada 6 años (72 / 12 = 6).',
          'La variable más poderosa de la fórmula exponencial no es el monto inicial, sino el exponente "n" (el tiempo de permanencia sin interrumpir el proceso).'
        ],
        code: `Simulación de $300 USD/mes invertidos al 10% anual compuesto:
- Año 5:   Aportado: $18,000  | Valor Cartera: ~$23,231 USD
- Año 15:  Aportado: $54,000  | Valor Cartera: ~$124,341 USD
- Año 25:  Aportado: $90,000  | Valor Cartera: ~$398,050 USD (¡$308,050 son puro interés compuesto!)`,
        warning: '⚠️ Las comisiones anuales de administración superiores al 2% parecen pequeñas, pero en 20 años pueden devorar hasta el 30% de tu beneficio compuesto.',
        checkpoint: {
          question: 'Aplicando la Regla del 72, ¿cuántos años tardará aproximadamente en duplicarse un capital invertido al 9% anual compuesto?',
          options: [
            '8 años (72 dividido 9)',
            '72 años',
            '2 años',
            '18 años'
          ],
          correctIndex: 0
        }
      },
      {
        heading: 'Módulo 4: Gestión de Riesgo, DCA (Dollar-Cost Averaging) y Cartera Núcleo-Satélite',
        readTime: '10 min de lectura',
        paragraphs: [
          'Intentar adivinar el piso y el techo exacto del mercado ("Market Timing") hace que el 90% de los inversores minoristas compren caro por euforia (FOMO) y vendan barato por pánico. La estrategia institucional probada es el DCA (Dollar-Cost Averaging): invertir una suma fija todos los meses sin importar las noticias.',
          'Combina el DCA con una arquitectura de cartera "Core-Satellite" (Núcleo-Satélite): el 80% de tu portafolio en el Núcleo (ETFs indexados globales como S&P 500, bonos y liquidez) y solo un 10% a 20% máximo en Satélites de alto riesgo/asimetría (acciones individuales o Bitcoin).'
        ],
        keyPoints: [
          'Con DCA, cuando el mercado baja tu cuota mensual compra automáticamente más unidades a precio de descuento.',
          'Nunca arriesgues más del 1% al 2% de tu patrimonio total en una sola operación especulativa.',
          'Una pérdida del 50% en un activo exige una ganancia del +100% posterior solo para volver a quedar empatado.'
        ],
        code: `Asimetría Matemática de las Pérdidas:
- Si pierdes 10% -> Necesitas ganar +11.1% para recuperar tu capital.
- Si pierdes 25% -> Necesitas ganar +33.3% para recuperar tu capital.
- Si pierdes 50% -> Necesitas ganar +100.0% para recuperar tu capital.
- Si pierdes 80% -> Necesitas ganar +400.0% para recuperar tu capital.`,
        warning: '⚠️ Si un proyecto promete "rentabilidades garantizadas del 10% mensual en dólares sin riesgo", aléjate: matemáticamente es un esquema Ponzi.',
        checkpoint: {
          question: 'Si una inversión de $1,000 USD cae un 50% (quedando en $500 USD), ¿qué porcentaje de ganancia necesita lograr desde esos $500 para volver a $1,000 USD?',
          options: [
            '+100% de ganancia (duplicar de $500 a $1,000)',
            '+50% de ganancia ($750)',
            '+25% de ganancia',
            '+10% de ganancia'
          ],
          correctIndex: 0
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. En la regla presupuestaria 50/30/20, ¿a qué se destina el 20% prioritario?',
          options: [
            'A ahorro estratégico, fondo de liquidez e inversión de largo plazo separado apenas se cobra',
            'A pagar multas por mora de tarjetas',
            'A compras impulsivas de fin de semana',
            'A gastos fijos de alquiler'
          ],
          correctIndex: 0
        },
        {
          question: '2. ¿Para qué sirve aplicar la estrategia DCA (Dollar-Cost Averaging)?',
          options: [
            'Para invertir un monto fijo de forma periódica, promediando el precio de compra y eliminando las decisiones emocionales por euforia o pánico',
            'Para pedir préstamos bancarios todos los días',
            'Para vender todas las inversiones cada vez que sale una noticia negativa',
            'Para operar únicamente con apalancamiento 100x'
          ],
          correctIndex: 0
        },
        {
          question: '3. Según la Regla del 72, si una inversión rinde un 12% anual compuesto, ¿en cuántos años duplicará su valor?',
          options: [
            'En 6 años (72 / 12 = 6)',
            'En 12 años',
            'En 24 años',
            'En 1 año'
          ],
          correctIndex: 0
        },
        {
          question: '4. En una cartera con estructura "Núcleo-Satélite" (Core-Satellite), ¿qué activos componen el 80% del Núcleo?',
          options: [
            'Activos diversificados y sólidos de largo plazo (ej. ETFs indexados como S&P 500, bonos y reserva líquida)',
            'Monedas meme creadas hace 24 horas',
            'Billetes de lotería',
            'Únicamente una sola acción de una empresa endeudada'
          ],
          correctIndex: 0
        }
      ]
    }
  },
  {
    id: 'ux-growth-convert',
    title: 'Diseño UI/UX & Psicología de Conversión (CRO) para Productos Digitales',
    category: 'Diseño & Marketing',
    priceUSD: 19.00,
    pointsReward: 310,
    vipPointsReward: 95,
    xp: 350,
    duration: 45,
    secretCourse: false,
    description: 'Domina leyes de UX (Fitts, Hick, Jakob), arquitectura de Landing Pages de alta conversión, prueba social, reducción de fricción y pruebas A/B.',
    lessons: [
      {
        heading: 'Módulo 1: Las 3 Leyes Cognitivas del Diseño UI/UX (Hick, Fitts y Jakob)',
        readTime: '10 min de lectura',
        paragraphs: [
          'El buen diseño de interfaces no se basa en gustos subjetivos, sino en cómo el cerebro humano procesa información visual y toma decisiones en milisegundos. Tres leyes científicas gobiernan toda interfaz rentable:',
          '1) Ley de Hick: El tiempo que tarda un usuario en decidir aumenta logarítmicamente con el número de opciones disponibles. 2) Ley de Fitts: El tiempo para tocar un objetivo (como el botón de compra) depende de su tamaño y cercanía al pulgar/cursor. 3) Ley de Jakob: Los usuarios pasan la mayor parte de su tiempo en otras webs, por lo que prefieren que tu sitio funcione con patrones familiares.'
        ],
        keyPoints: [
          'No pongas 8 botones distintos en el encabezado; deja 1 única acción primaria destacada.',
          'En pantallas móviles, los botones de conversión deben medir al menos 48px de alto y estar al alcance del pulgar.',
          'Usa iconos y flujos de carrito estándar para no obligar al usuario a "aprender" a usar tu web.'
        ],
        code: `Auditoría UX Rápida:
❌ Menú con 12 links + 4 popups + 6 planes de precios -> Parálisis por análisis (Ley de Hick).
✅ Propuesta clara + 2 planes comparables (1 recomendado) + 1 CTA contrastante -> Alta conversión.`,
        warning: '⚠️ Reinventar la ubicación del botón de cierre o del carrito de compras por "originalidad artística" destruye la tasa de conversión.',
        checkpoint: {
          question: '¿Qué explica la Ley de Hick aplicada a una página de precios o registro?',
          options: [
            'Que cuantas más opciones y distracciones simultáneas le presentes al usuario, más tardará en decidir y mayor será la probabilidad de que abandone sin comprar',
            'Que mientras más pequeño sea un botón, más clics recibe',
            'Que los usuarios leen absolutamente todas las palabras de una página web',
            'Que el color negro está prohibido en internet'
          ],
          correctIndex: 0
        }
      },
      {
        heading: 'Módulo 2: Anatomía del "Above the Fold" y Botones de Llamado a la Acción (CTA)',
        readTime: '11 min de lectura',
        paragraphs: [
          'La sección "Above the Fold" (lo que el visitante ve en los primeros 4 segundos sin hacer scroll) determina si se queda o cierra la pestaña. Debe responder instantáneamente tres preguntas: ¿Qué es esto?, ¿Qué gano yo hoy? y ¿Qué debo hacer ahora?',
          'El botón de acción (CTA) nunca debe describir el trámite burocrático ("Enviar", "Registrarse", "Pagar"), sino el beneficio inmediato que el usuario obtiene al hacer clic ("Desbloquear mi Acceso VIP", "Crear mi Cuenta Gratis en 30s").'
        ],
        keyPoints: [
          'Titular orientado a resultados: "[Resultado concreto] en [Tiempo] sin [Objeción principal]".',
          'Micro-copy debajo del CTA: Reduce la ansiedad aclarando "Acceso inmediato • Garantía de 14 días".',
          'Contraste visual: El CTA primario debe usar un color de acento que no compita con el fondo.'
        ],
        code: `Estructura Hero de Alta Conversión:
[Etiqueta de Autoridad]: ⭐ Usado por +4,200 desarrolladores y creadores
[Titular H1]: Domina las habilidades más rentables con proyectos reales paso a paso.
[Subtítulo]: Sin teoría de relleno. Aprende en módulos prácticos y certifica tu nivel.
[Botón CTA Primario]: 🚀 Comenzar Curso Ahora ->
[Reductor de Fricción]: 🔒 Pago 100% seguro • Acceso vitalicio inmediato`,
        warning: '⚠️ Un botón que dice "Enviar formulario" convierte hasta un 35% menos que un botón orientado al beneficio real del usuario.',
        checkpoint: {
          question: '¿Cuál de los siguientes textos de botón CTA aplica mejor la psicología de conversión?',
          options: [
            '"🚀 Desbloquear mi Acceso Instantáneo"',
            '"Enviar datos"',
            '"Botón 1"',
            '"Procesar solicitud de formulario"'
          ],
          correctIndex: 0
        }
      },
      {
        heading: 'Módulo 3: Fricción en el Checkout, Efecto Señuelo (Decoy) y Prueba Social',
        readTime: '12 min de lectura',
        paragraphs: [
          'Cada campo adicional que pides en un formulario de pago o registro reduce la tasa de conversión entre un 7% y un 12%. Si para vender un curso digital pides código postal, teléfono fijo, empresa y fecha de nacimiento, estás regalando la mitad de tus ventas.',
          'Al presentar precios, el "Efecto Anclaje y Señuelo" muestra cómo un plan intermedio o VIP bien estructurado —que incluye bonos de alto valor percibido por poca diferencia de precio respecto a comprar por separado— guía naturalmente al 70% de los compradores hacia la opción más rentable.'
        ],
        keyPoints: [
          'Pide solo lo indispensable en el checkout (Email + Método de pago).',
          'La Prueba Social específica ("Martín G. aumentó sus ventas un 34% en 2 semanas") vence a los elogios vagos ("Muy buena página").',
          'Destaca visualmente el plan recomendado con un borde contrastante y etiqueta de "Más Elegido".'
        ],
        code: `Comparativa de Conversión en Formularios de Checkout:
- Formulario de 9 campos (Nombre, Apellido, DNI, Dirección, Ciudad, CP, Teléfono, Email, Clave): 2.1% conversión.
- Checkout Express de 2 pasos (Email + Pago con 1 clic): 6.8% conversión (+223% más ventas con el mismo tráfico).`,
        warning: '⚠️ Nunca uses testimonios falsos ni contadores de escasez que se reinician al refrescar la página: destruyen la confianza de marca de forma irreversible.',
        checkpoint: {
          question: '¿Qué impacto tiene eliminar campos innecesarios (como dirección física o teléfono fijo) al vender un producto 100% digital?',
          options: [
            'Reduce la fricción cognitiva y el abandono del carrito, aumentando significativamente el porcentaje de ventas completadas',
            'Hace que los usuarios compren menos',
            'Bloquea las tarjetas de crédito',
            'No cambia absolutamente nada'
          ],
          correctIndex: 0
        }
      },
      {
        heading: 'Módulo 4: Métricas de Embudo (Funnel) y Experimentación con Tests A/B',
        readTime: '12 min de lectura',
        paragraphs: [
          'En Growth y UX todo cambio se valida con datos. El embudo de conversión mide qué porcentaje de visitantes pasa de una etapa a la siguiente: Visitas -> Clic en el Curso -> Inicio de Checkout -> Compra Confirmada.',
          'En una prueba A/B dividimos el tráfico en dos grupos simultáneos (50% ve la Versión A original y 50% ve la Versión B con un único cambio, por ejemplo un nuevo titular) para medir científicamente cuál genera más ingresos por visitante (RPV).'
        ],
        keyPoints: [
          'Cambia una sola variable clave por experimento A/B para saber exactamente qué causó la mejora.',
          'Mide siempre la tasa de conversión a pago real, no solo los clics superficiales.',
          'Si el 40% inicia el checkout pero solo el 5% termina pagando, el problema está en los métodos de pago o costos sorpresa.'
        ],
        code: `Cálculo de Impacto CRO (Conversion Rate Optimization):
Tráfico mensual: 10,000 visitas | Ticket promedio: $29 USD
- Antes (Conversión 1.5%):  150 ventas = $4,350 USD / mes
- Después (Conversión 3.0%): 300 ventas = $8,700 USD / mes
👉 ¡Duplicaste la facturación sin gastar $1 dólar extra en publicidad!`,
        warning: '⚠️ No des por ganador un Test A/B con apenas 20 visitas; necesitas una muestra representativa para que el resultado no sea puro azar.',
        checkpoint: {
          question: 'Si una página con 10,000 visitas mensuales sube su tasa de conversión del 1% al 2% manteniendo el mismo tráfico, ¿qué ocurre con las ventas?',
          options: [
            'Se duplican (pasan de 100 a 200 ventas mensuales) sin haber tenido que pagar por más tráfico',
            'Suben apenas un 1%',
            'Se reducen a la mitad',
            'Quedan exactamente iguales'
          ],
          correctIndex: 0
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Qué establece la Ley de Fitts en el diseño de interfaces interactivas?',
          options: [
            'Que cuanto más grande y cercano al cursor o pulgar sea un botón interactivo, más rápido y fácil será accionarlo',
            'Que todos los botones deben ser invisibles hasta pasar el mouse',
            'Que una página debe tardar más de 10 segundos en cargar',
            'Que solo se debe usar tipografía cursiva'
          ],
          correctIndex: 0
        },
        {
          question: '2. ¿Qué elementos no pueden faltar en el "Above the Fold" (primera pantalla sin scroll) de una Landing Page?',
          options: [
            'Propuesta de valor clara orientada al beneficio, subtítulo explicativo, llamado a la acción (CTA) contrastante y prueba social/confianza',
            'La biografía de 40 párrafos de los fundadores sin ningún botón',
            'Un formulario de 25 preguntas obligatorias',
            'Cinco videos reproduciéndose con sonido al mismo tiempo'
          ],
          correctIndex: 0
        },
        {
          question: '3. Al realizar un Test A/B para optimizar una página de ventas, ¿cuál es la regla metodológica clave?',
          options: [
            'Probar una hipótesis aislando el cambio entre la versión Control (A) y la Variante (B) con tráfico simultáneo hasta tener volumen suficiente',
            'Cambiar 15 cosas al azar cada 10 minutos',
            'Mostrar la versión A en enero y la versión B en diciembre',
            'Guiarse únicamente por la opinión personal sin mirar las métricas'
          ],
          correctIndex: 0
        },
        {
          question: '4. ¿Dónde está el cuello de botella si tienes un alto porcentaje de clics en "Comprar", pero el 90% abandona en la pantalla final de pago?',
          options: [
            'En la fricción del checkout (exceso de campos, falta de medios de pago locales, cargos ocultos o falta de garantías visibles)',
            'En el logotipo de la marca',
            'En el pie de página del blog',
            'No existe ningún cuello de botella'
          ],
          correctIndex: 0
        }
      ]
    }
  },
  {
    id: 'fullstack-apis-sql',
    title: 'Arquitectura Web Full-Stack: APIs REST, Autenticación JWT y SQL',
    category: 'Programación',
    priceUSD: 16.99,
    pointsReward: 290,
    vipPointsReward: 90,
    xp: 340,
    duration: 50,
    secretCourse: false,
    description: 'Construye backends profesionales: verbos y códigos HTTP, diseño relacional SQL con claves foráneas, consultas JOIN y seguridad con JWT y hashing.',
    lessons: [
      {
        heading: 'Módulo 1: Diseño de APIs RESTful, Verbos HTTP y Códigos de Estado',
        readTime: '12 min de lectura',
        paragraphs: [
          'Una API REST es el contrato de comunicación entre el Frontend (navegador o app móvil) y el Backend (servidor y base de datos). En REST, las URLs representan recursos en plural (ej. /api/v1/cursos) y la acción a realizar se define mediante el verbo HTTP.',
          'Un backend profesional responde siempre con el código de estado HTTP semántico correcto para que el cliente sepa exactamente qué ocurrió sin tener que adivinar.'
        ],
        keyPoints: [
          'GET (leer recursos), POST (crear nuevo), PUT/PATCH (actualizar), DELETE (eliminar).',
          'Códigos 2xx = Éxito (200 OK, 201 Created). Códigos 4xx = Error del cliente (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found).',
          'Códigos 5xx = Fallo interno del servidor (500 Internal Server Error).'
        ],
        code: `// Ejemplo de Endpoint REST en Node.js / Express
app.post('/api/v1/courses', authenticateAdmin, async (req, res) => {
  const { title, priceUSD } = req.body;
  if (!title || priceUSD < 0) {
    return res.status(400).json({ error: "Título obligatorio y precio válido." });
  }
  const newCourse = await db.courses.create({ title, priceUSD });
  return res.status(201).json({ data: newCourse });
});`,
        warning: '⚠️ Nunca uses una petición GET para borrar datos o realizar cobros; las peticiones GET deben ser idempotentes y de solo lectura.',
        checkpoint: {
          question: '¿Qué código de estado HTTP debe devolver una API cuando un usuario intenta acceder a una ruta privada sin haber iniciado sesión?',
          options: [
            '401 Unauthorized',
            '200 OK',
            '500 Internal Server Error',
            '301 Moved Permanently'
          ],
          correctIndex: 0
        }
      },
      {
        heading: 'Módulo 2: Modelado de Bases de Datos Relacionales SQL e Índices',
        readTime: '13 min de lectura',
        paragraphs: [
          'En una base de datos relacional (PostgreSQL, MySQL), la información se organiza en tablas normalizadas para evitar duplicar datos. Cada fila tiene una Clave Primaria única (Primary Key) y se relaciona con otras tablas mediante Claves Foráneas (Foreign Keys).',
          'Cuando una tabla crece a cientos de miles de filas, buscar por email o por usuario sin un Índice (INDEX) obliga al motor a escanear toda la tabla fila por fila (Full Table Scan). Un índice B-Tree reduce esa búsqueda de segundos a menos de 1 milisegundo.'
        ],
        keyPoints: [
          'Usa restricciones NOT NULL y UNIQUE en campos críticos como el email.',
          'Las transacciones ACID garantizan que un pago y la entrega del curso se guarden juntos o se reviertan ambos si algo falla.',
          'Usa consultas parametrizadas ($1, $2) para impedir al 100% ataques de Inyección SQL.'
        ],
        code: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  is_vip BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id VARCHAR(64) NOT NULL,
  amount_paid NUMERIC(10, 2) NOT NULL
);

CREATE INDEX idx_enrollments_user ON enrollments(user_id);`,
        warning: '⚠️ Jamás concatenes variables del usuario directamente en un string SQL (`"SELECT * FROM users WHERE email = \'" + input + "\'"`); usa siempre parámetros preparados.',
        checkpoint: {
          question: '¿Para qué sirve crear un `INDEX` sobre la columna `user_id` o `email` en una base de datos SQL?',
          options: [
            'Para acelerar drásticamente las búsquedas y filtros sin tener que escanear todas las filas de la tabla una por una',
            'Para borrar la tabla cada medianoche',
            'Para permitir contraseñas vacías',
            'Para duplicar los registros automáticamente'
          ],
          correctIndex: 0
        }
      },
      {
        heading: 'Módulo 3: Consultas Avanzadas con INNER JOIN, LEFT JOIN y Agregaciones',
        readTime: '12 min de lectura',
        paragraphs: [
          'Para generar reportes de negocio —como saber cuánto ha facturado cada curso o qué alumnos VIP tienen más compras— combinamos tablas usando cláusulas JOIN y funciones de agregación (SUM, COUNT, AVG) agrupadas con GROUP BY.',
          'La diferencia clave entre INNER JOIN y LEFT JOIN es que INNER JOIN solo devuelve filas que tienen coincidencia en ambas tablas, mientras que LEFT JOIN conserva todos los registros de la tabla izquierda aunque tengan 0 compras en la tabla derecha.'
        ],
        keyPoints: [
          'WHERE filtra filas individuales ANTES de agrupar; HAVING filtra grupos DESPUÉS del GROUP BY.',
          'COALESCE(SUM(monto), 0) convierte valores nulos en 0 para reportes limpios.',
          'Selecciona solo las columnas necesarias en lugar de hacer SELECT * en producción.'
        ],
        code: `-- Reporte de ingresos totales por alumno (incluyendo alumnos con $0 en compras)
SELECT 
  u.email,
  u.is_vip,
  COUNT(e.id) AS cursos_comprados,
  COALESCE(SUM(e.amount_paid), 0) AS total_invertido_usd
FROM users u
LEFT JOIN enrollments e ON u.id = e.user_id
GROUP BY u.id, u.email, u.is_vip
ORDER BY total_invertido_usd DESC;`,
        warning: '⚠️ Hacer un JOIN sin especificar la condición "ON" genera un producto cartesiano que multiplica todas las filas contra todas y puede colgar el servidor.',
        checkpoint: {
          question: 'Si quieres listar TODOS los usuarios registrados junto con sus compras, incluyendo a los que todavía no compraron nada, ¿qué JOIN debes usar?',
          options: [
            'LEFT JOIN desde la tabla users hacia enrollments',
            'INNER JOIN',
            'DROP TABLE',
            'DELETE JOIN'
          ],
          correctIndex: 0
        }
      },
      {
        heading: 'Módulo 4: Hashing de Contraseñas con Bcrypt/Argon2 y Sesiones con JWT',
        readTime: '13 min de lectura',
        paragraphs: [
          'En ningún sistema serio se guardan contraseñas en texto plano ni con algoritmos reversibles. Las contraseñas se procesan con funciones de hashing criptográfico lento con "Salt" (como Argon2id o Bcrypt), de modo que ni siquiera el administrador de la base de datos pueda leer la clave original.',
          'Una vez autenticado el usuario, el servidor puede emitir un JSON Web Token (JWT) firmado digitalmente con una clave secreta. En cada petición futura, el backend verifica la firma criptográfica del token antes de autorizar el acceso.'
        ],
        keyPoints: [
          'El "Salt" agrega datos aleatorios únicos a cada contraseña antes de hashearla para inutilizar tablas Rainbow.',
          'Un JWT consta de 3 partes separadas por puntos: Header.Payload.Signature.',
          'El Payload de un JWT está codificado en Base64 (cualquiera puede leerlo), pero nadie puede modificarlo sin invalidar la Firma (Signature).'
        ],
        code: `// Verificación segura de contraseña y emisión de JWT
const isValid = await bcrypt.compare(plainPassword, user.password_hash);
if (!isValid) return res.status(401).json({ error: "Credenciales inválidas" });

const token = jwt.sign(
  { sub: user.id, role: user.is_vip ? "vip" : "standard" },
  process.env.JWT_SECRET,
  { expiresIn: "2h" }
);`,
        warning: '⚠️ Nunca guardes secretos privados ni contraseñas dentro del Payload de un JWT, porque Base64 NO es cifrado: es solo codificación legible.',
        checkpoint: {
          question: '¿Qué impide que un usuario malintencionado abra su JWT, cambie `role: "standard"` por `role: "vip"` y el servidor lo acepte?',
          options: [
            'La firma criptográfica (Signature) del JWT: al alterar el Payload sin poseer la clave secreta del servidor, la firma deja de coincidir y el token es rechazado',
            'Nada lo impide',
            'El color del navegador',
            'Que el archivo pesa demasiado'
          ],
          correctIndex: 0
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Qué combinación de verbo HTTP y código de estado corresponde a la creación exitosa de un nuevo recurso en una API REST?',
          options: [
            'Verbo POST y código de estado 201 Created',
            'Verbo GET y código 404 Not Found',
            'Verbo DELETE y código 500',
            'Verbo GET y código 401'
          ],
          correctIndex: 0
        },
        {
          question: '2. ¿Cómo se previene de forma definitiva un ataque de Inyección SQL (SQL Injection)?',
          options: [
            'Utilizando consultas parametrizadas (Prepared Statements) donde el motor trata los datos del usuario estrictamente como valores y nunca como comandos ejecutables',
            'Ocultando el botón de login con CSS',
            'Cambiando el nombre de la tabla cada semana',
            'Permitiendo solo contraseñas de 4 letras'
          ],
          correctIndex: 0
        },
        {
          question: '3. ¿Cuál es la diferencia entre `WHERE` y `HAVING` en una consulta SQL?',
          options: [
            'WHERE filtra filas individuales antes de agrupar, mientras que HAVING filtra los grupos resultantes de funciones de agregación (como SUM o COUNT) después del GROUP BY',
            'Son exactamente sinónimos',
            'HAVING solo sirve para borrar columnas',
            'WHERE solo funciona los fines de semana'
          ],
          correctIndex: 0
        },
        {
          question: '4. ¿Por qué se utiliza `Bcrypt` o `Argon2` con Salt para almacenar contraseñas en lugar de guardarlas en texto plano?',
          options: [
            'Porque generan un hash irreversible y único por usuario, protegiendo las claves incluso si la base de datos llegara a filtrarse',
            'Para poder enviarle su contraseña original por correo al usuario cuando la olvida',
            'Para que el texto ocupe menos caracteres',
            'Porque las bases de datos no aceptan letras comunes'
          ],
          correctIndex: 0
        }
      ]
    }
  },
  {
    id: 'secret-saas-masterclass',
    title: '🔒 [CURSO SECRETO VIP] Cómo Lanzar y Escalar un Micro-SaaS Rentable en 7 Días',
    category: 'Curso Secreto VIP',
    priceUSD: 0,
    pointsReward: 500,
    vipPointsReward: 180,
    xp: 600,
    duration: 60,
    secretCourse: true,
    requiredRewardId: 'vip-rw-secret-saas',
    description: 'Masterclass Élite exclusiva para miembros VIP: validación sin código, arquitectura MVP en 72h, métricas SaaS (MRR, Churn, LTV/CAC) y adquisición de los primeros 50 clientes recurrentes.',
    lessons: [
      {
        heading: 'Módulo 1: Validación de Dolor Agudo B2B antes de Escribir Código',
        readTime: '14 min de lectura',
        paragraphs: [
          'El 85% de los desarrolladores fracasa al lanzar un SaaS porque pasa 6 meses encerrado programando funciones que nadie pidió. La regla de oro del Micro-SaaS rentable es: no busques "ideas geniales", busca procesos aburridos, manuales y costosos que las empresas ya estén pagando por resolver hoy en hojas de cálculo.',
          'Antes de construir el producto completo, creas una Landing Page de validación con una oferta concreta y un flujo de pre-registro o pre-venta. Si nadie está dispuesto a dejar su tarjeta o agendar una demo de 15 minutos, ahorraste meses de tu vida.'
        ],
        keyPoints: [
          'Enfócate en nichos B2B (empresas y profesionales): tienen presupuesto y pagan por ahorrar tiempo o ganar más dinero.',
          'Vende un "analgésico" (resuelve un problema urgente hoy), no una "vitamina" (algo que sería lindo tener algún día).',
          'Meta de validación: conseguir 5 a 10 compromisos reales en 72 horas.'
        ],
        code: `Matriz de Evaluación de Ideas Micro-SaaS:
1. ¿El cliente objetivo pierde >5 horas/semana o >$500/mes por este problema? -> SÍ
2. ¿Puedo construir la función central (Core Loop) en un fin de semana?        -> SÍ
3. ¿Existe un canal claro donde encontrar a 100 de estos clientes hoy mismo?   -> SÍ`,
        warning: '⚠️ Que tus amigos te digan "qué buena idea" no es validación. La única validación real en los negocios es una transacción o un compromiso concreto.',
        checkpoint: {
          question: '¿Por qué los Micro-SaaS orientados a negocios/profesionales (B2B) suelen ser mucho más rentables que los orientados a consumidores gratuitos (B2C)?',
          options: [
            'Porque las empresas pagan con gusto suscripciones de $29 a $199/mes si el software les ahorra horas de trabajo o les genera más ventas',
            'Porque las empresas no revisan si el software funciona',
            'Porque en B2B no hace falta programar nada',
            'Porque no tienen competencia en el mundo'
          ],
          correctIndex: 0
        }
      },
      {
        heading: 'Módulo 2: Construcción del MVP (Producto Mínimo Viable) en 72 Horas',
        readTime: '15 min de lectura',
        paragraphs: [
          'Un MVP no es un producto lleno de errores, sino un producto que hace UNA sola cosa extraordinariamente bien. Para lanzar en 7 días, apóyate en un stack moderno o plantilla base (Boilerplate) que ya resuelva autenticación, cobros con Stripe/MercadoPago y base de datos.',
          'Elimina todo lo secundario en la versión 1.0: no programes modo claro/oscuro, sistema de afiliados, 14 idiomas ni paneles de configuración complejos. Construye únicamente el "Core Value Loop" por el que el cliente saca la tarjeta.'
        ],
        keyPoints: [
          'Día 1-2: Base de datos y flujo principal (Core Feature).',
          'Día 3-4: Interfaz limpia y conexión con pasarela de suscripciones.',
          'Día 5-7: Onboarding guiado en menos de 2 minutos hasta el "Momento Aha!" (cuando el usuario recibe el primer resultado).'
        ],
        code: `Recorte Radical de Alcance (Scope Cutting) para lanzar en 7 días:
✅ INCLUIR EN V1.0: Login mágico + Función principal automatizada + Cobro de suscripción.
❌ POSPONER A V2.0: App móvil nativa, API pública, multi-idioma, sub-cuentas de equipo.`,
        warning: '⚠️ Si el usuario tarda más de 3 minutos después de registrarse en experimentar el valor real de tu herramienta, el 80% abandonará y no volverá a entrar.',
        checkpoint: {
          question: '¿Qué es el "Momento Aha!" (Time-to-Value) en el onboarding de un SaaS?',
          options: [
            'El instante exacto en que el usuario nuevo obtiene su primer resultado valioso real dentro de la aplicación',
            'Cuando el usuario cierra su cuenta',
            'La página de términos y condiciones legales',
            'El mensaje de error 404'
          ],
          correctIndex: 0
        }
      },
      {
        heading: 'Módulo 3: Las 4 Métricas Financieras que Gobiernan un SaaS (MRR, Churn, LTV y CAC)',
        readTime: '16 min de lectura',
        paragraphs: [
          'El valor de un negocio de software por suscripción (que suele venderse por múltiplos de 3x a 5x su facturación anual ARR) depende de cuatro indicadores matemáticos: MRR (Monthly Recurring Revenue), Churn Rate (tasa de cancelación mensual), CAC (Costo de Adquisición de Cliente) y LTV (Valor de Vida del Cliente).',
          'Si tu Churn mensual es del 20%, significa que cada 5 meses pierdes toda tu base de clientes y corres en una cinta sin avanzar. En cambio, con un Churn menor al 5% mensual y un ratio LTV / CAC mayor a 3, tienes una máquina predecible de flujo de caja.'
        ],
        keyPoints: [
          'MRR = Cantidad de clientes activos × Ticket promedio mensual (ARPU).',
          'LTV (Lifetime Value) = Ticket mensual promedio / Tasa de Churn mensual.',
          'Regla de salud SaaS: El LTV debe ser al menos 3 veces mayor que lo que te cuesta adquirir al cliente (LTV >= 3 × CAC).'
        ],
        code: `Ejemplo Real de Economía Unitaria SaaS:
- Precio Suscripción (ARPU): $30 USD / mes
- Churn Mensual (Cancelaciones): 5% (0.05) -> El cliente promedio se queda 20 meses.
- LTV (Valor total por cliente): $30 / 0.05 = $600 USD.
- Si tu CAC (costo de adquirir 1 cliente) es $80 USD -> Ratio LTV/CAC = 7.5x (¡Altamente rentable!)`,
        warning: '⚠️ Nunca ofrezcas solo un plan barato de $3/mes: atrae a los clientes que más soporte exigen y más rápido cancelan. Posiciona planes desde $19-$49/mes con opción anual (2 meses gratis).',
        checkpoint: {
          question: 'Si un SaaS cobra $40 USD al mes y tiene una tasa de cancelación (Churn) del 5% mensual (0.05), ¿cuál es el LTV (Valor de Vida) estimado de cada cliente?',
          options: [
            '$800 USD ($40 dividido 0.05, equivalente a 20 meses de permanencia promedio)',
            '$40 USD',
            '$2 USD',
            '$5,000 USD'
          ],
          correctIndex: 0
        }
      },
      {
        heading: 'Módulo 4: Estrategia de Distribución y Adquisición de los Primeros 100 Clientes',
        readTime: '15 min de lectura',
        paragraphs: [
          '"Constrúyelo y vendrán solos" es un mito. En las primeras semanas, el crecimiento proviene de canales de alcance directo y demostraciones de valor en público: prospección personalizada con loom/video corto, herramientas gratuitas satélite (Engineering as Marketing) y comunidades del nicho.',
          'Además, implementar cobro anual con descuento (ej. "Paga 10 meses, lleva 12") inyecta flujo de caja inmediato el día 1 que te permite financiar nuevas funciones y publicidad con el propio dinero de las ventas.'
        ],
        keyPoints: [
          'Engineering as Marketing: Crea una calculadora o micro-herramienta gratuita que atraiga tráfico orgánico y derive hacia tu SaaS principal.',
          'Contacto directo: Envía 20 mensajes personalizados por día mostrando cómo resolviste un caso específico de su negocio.',
          'Integra un bucle viral o sello "Powered by [Tu SaaS]" en los reportes o páginas que tus usuarios compartan.'
        ],
        code: `Meta Financiera de un Micro-SaaS Independiente:
- 35 clientes en Plan Pro ($29/mes)   = $1,015 USD / mes
- 15 clientes en Plan Élite ($79/mes) = $1,185 USD / mes
- Total MRR = $2,200 USD / mes ($26,400 USD / año de ingreso recurrente con 92% de margen neto)`,
        warning: '⚠️ No gastes miles de dólares en anuncios pagados antes de haber cerrado tus primeros 15 clientes de forma directa y haber pulido las objeciones de venta.',
        checkpoint: {
          question: '¿En qué consiste la táctica "Engineering as Marketing" para atraer clientes a un SaaS sin pagar publicidad?',
          options: [
            'En publicar una micro-herramienta, plantilla o calculadora gratuita muy útil para el nicho que capte usuarios y les ofrezca el SaaS completo como siguiente paso natural',
            'En enviar spam masivo sin contexto a millones de correos',
            'En ocultar el precio del producto',
            'En contratar 50 vendedores telefónicos el primer día'
          ],
          correctIndex: 0
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Cuál es el paso correcto antes de dedicar meses a programar un software completo?',
          options: [
            'Detectar un problema costoso en un nicho específico y validar la intención real de pago mediante una oferta o pre-venta',
            'Diseñar 50 logotipos distintos y alquilar una oficina costosa',
            'Programar primero 30 funciones secundarias y pensar a quién venderle el año que viene',
            'Pedir un préstamo bancario sin tener ningún cliente'
          ],
          correctIndex: 0
        },
        {
          question: '2. ¿Qué mide exactamente el `MRR` en una empresa SaaS?',
          options: [
            'El Ingreso Recurrente Mensual predecible generado por todas las suscripciones activas',
            'La cantidad de visitas anónimas del blog',
            'El costo del servidor dividido por la memoria RAM',
            'Las ventas únicas que no se vuelven a repetir'
          ],
          correctIndex: 0
        },
        {
          question: '3. ¿Por qué reducir el `Churn` (tasa de cancelación mensual) es tan importante como conseguir clientes nuevos?',
          options: [
            'Porque si el Churn es alto, pierdes clientes al mismo ritmo que entran y el crecimiento compuesto del MRR se estanca',
            'Porque el Churn no tiene relación con los ingresos',
            'Porque las pasarelas de pago prohíben tener clientes por más de 2 meses',
            'Solo por una cuestión estética en los gráficos'
          ],
          correctIndex: 0
        },
        {
          question: '4. ¿Qué ventaja financiera tiene ofrecer un Plan Anual (ej. 2 meses bonificados al pagar el año) desde el lanzamiento?',
          options: [
            'Adelanta 10-12 meses de flujo de caja en el día 1, elimina el Churn mensual durante todo un año y financia el crecimiento del negocio',
            'Hace que la empresa gane menos dinero',
            'Aumenta las cancelaciones al día siguiente',
            'Obliga a cerrar el producto a los 3 meses'
          ],
          correctIndex: 0
        }
      ]
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
    costVIPPoints: 180,
    description: 'Solo para poseedores de Puntos Exclusivos VIP (VP). Habilita el curso secreto completo de 4 módulos intensivos en el catálogo.',
    deliverable: '¡Curso Secreto desbloqueado con tus Puntos VIP! Ya puedes cursarlo en el Catálogo.'
  },
  {
    id: 'vip-rw-black-cert',
    type: 'Exclusivo VIP • Certificado Black-Gold',
    icon: '🏆',
    title: 'Certificado "Master Black-Gold" con Sello de Honor VIP',
    costVIPPoints: 260,
    description: 'El diploma de mayor prestigio de la academia, reservado únicamente para miembros VIP que superaron los exámenes rigurosos.',
    deliverable: 'Diploma Black-Gold emitido: #SV-VIP-BLACKGOLD-001 (Prioridad en bolsa de empleo).'
  },
  {
    id: 'vip-rw-saas-source',
    type: 'Exclusivo VIP • Código Fuente Completo',
    icon: '💻',
    title: 'Plantilla Full-Stack SaaS Lista para Clonar y Vender',
    costVIPPoints: 350,
    description: 'Repositorio completo con autenticación, pasarela de pagos y dashboard listo para lanzar tu propio negocio.',
    deliverable: 'Acceso al repositorio privado VIP: github.com/skillvault-elite/saas-boilerplate-vip'
  },
  {
    id: 'vip-rw-mentoria-1a1',
    type: 'Exclusivo VIP • Sesión Privada',
    icon: '👑',
    title: 'Mentoría 1 a 1 en Vivo + Acceso al Club Fundadores',
    costVIPPoints: 500,
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
    costPoints: 450,
    description: 'Emite tu diploma digital verificable para añadir a tu LinkedIn y CV.',
    deliverable: 'Código de Certificado Verificado: #SV-2026-STD-9941'
  },
  {
    id: 'rw-vip-badge',
    type: 'Multiplicador PTS',
    icon: '⚡',
    title: 'Insignia "Estudiante Constante" (+25% Puntos PTS Extra)',
    costPoints: 700,
    description: 'Todos los futuros cursos que completes te darán +25% más Puntos Estándar (PTS).',
    deliverable: 'Multiplicador permanente +25% PTS activado en tu cuenta.'
  },
  {
    id: 'rw-tool-prompts',
    type: 'Herramienta Descargable',
    icon: '🧰',
    title: 'Pack Descargable: +200 Mega-Prompts & Plantillas Notion',
    costPoints: 380,
    description: 'Biblioteca de plantillas listas para copiar y pegar en tus proyectos.',
    deliverable: 'Enlace desbloqueado: notion.so/skillvault-200-megaprompts'
  },
  {
    id: 'rw-tool-uikit',
    type: 'Herramienta Descargable',
    icon: '🎨',
    title: 'UI Kit: 50 Componentes Web Modernos (HTML/CSS)',
    costPoints: 520,
    description: 'Código fuente de tarjetas, dashboards y tablas de precios.',
    deliverable: 'Descarga habilitada: github.com/skillvault/ui-kit-components'
  }
];

const STORAGE_KEY = 'skillvault_academy_v4';

let state = loadState();
let activeFilter = 'all';
let currentSkill = null;
let currentStepIndex = 0;
let passedCheckpoints = {}; // { stepIndex: true }
let selectedCheckAnswers = {}; // { stepIndex: optionIdx }
let examAnswers = {}; // { questionIdx: optionIdx }

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
    points: 100,        // Puntos estándar iniciales (PTS)
    vipPoints: 0,       // Puntos Exclusivos VIP (👑 VP)
    xp: 100,
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

function getSkillQuestions(skill) {
  if (skill.quiz && Array.isArray(skill.quiz.questions)) {
    return skill.quiz.questions;
  }
  if (skill.quiz && skill.quiz.question) {
    return [skill.quiz];
  }
  return [];
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
  const qCount = getSkillQuestions(nextSkill).length;

  box.innerHTML = `
    <div class="card-top">
      <span class="skill-cat-tag">⭐ CURSO DESTACADO • ${nextSkill.lessons.length} MÓDULOS</span>
      <div style="display:flex; gap:6px;">
        <span class="points-pill">+${nextSkill.pointsReward} PTS</span>
        <span class="vip-points-pill">👑 +${nextSkill.vipPointsReward || 50} VP</span>
      </div>
    </div>
    <h3 style="margin-bottom: 8px; font-size: 18px;">${nextSkill.title}</h3>
    <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">${nextSkill.description}</p>
    <div class="vip-bonus-banner">
      <span>📚 ${nextSkill.lessons.length} Clases con Reto + Examen (${qCount} preg.)</span>
      <span>👑 <strong>+${nextSkill.vipPointsReward || 50} VP</strong></span>
    </div>
    ${
      unlocked
        ? `<button class="btn-start-skill" onclick="openSkillModal('${nextSkill.id}')">
            ${completed ? '✅ Repasar Módulos' : `▶ Cursar ${nextSkill.lessons.length} Módulos (+${nextSkill.pointsReward} PTS ${state.isProMember ? `y +${nextSkill.vipPointsReward} VP` : ''})`}
           </button>`
        : `<button class="btn-start-skill buy-btn" onclick="buyCourse('${nextSkill.id}')">
            🔓 Comprar Curso Completo por $${nextSkill.priceUSD.toFixed(2)} USD
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
      const vpAmount = skill.vipPointsReward || 50;
      const qCount = getSkillQuestions(skill).length;

      let actionButton = '';
      if (skill.secretCourse && !unlocked) {
        actionButton = `<button class="btn-start-skill gold-btn" onclick="document.querySelector('[data-tab=rewards]').click()">👑 Desbloquear con ${EXCLUSIVE_VIP_REWARDS[0].costVIPPoints} VP en Bóveda VIP</button>`;
      } else if (unlocked) {
        actionButton = `<button class="btn-start-skill ${completed ? 'done' : ''}" onclick="openSkillModal('${skill.id}')">
          ${completed ? '✅ Completado (Repasar Módulos)' : `🎓 Cursar ${skill.lessons.length} Módulos (+${skill.pointsReward} PTS ${state.isProMember ? `+ ${vpAmount} VP` : ''})`}
        </button>`;
      } else {
        actionButton = `<button class="btn-start-skill buy-btn" onclick="buyCourse('${skill.id}')">
          💳 Desbloquear Curso por $${skill.priceUSD.toFixed(2)} USD
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
              <span>📚 <b>${skill.lessons.length} Módulos</b> + 📝 <b>Examen (${qCount} preg.)</b></span>
              <span>👑 <b>+${vpAmount} VP</b></span>
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
  state.points += 250;
  state.vipPoints += 100; // Bono inicial de bienvenida VIP
  state.ownerBalanceUSD += price;
  state.ownerSubsCount += 1;

  state.ownerTransactions.unshift({
    id: 'otx-pro-' + Date.now(),
    title: `👑 Nueva Suscripción: Pase VIP PRO (+100 VP entregados al alumno)`,
    date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    amount: price,
    type: 'positive'
  });

  saveState();
  renderHeaderAndStats();
  renderSkillsGrid();
  showToast(`👑 ¡Recibiste +$29.00 USD! El alumno ahora es VIP y recibió +100 VP Exclusivos + 250 PTS.`);
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

// Aula Interactiva Completa y Examen Multietapa
window.openSkillModal = function (skillId) {
  const skill = getAllSkills().find(s => s.id === skillId);
  if (!skill) return;

  currentSkill = skill;
  currentStepIndex = 0;
  passedCheckpoints = {};
  selectedCheckAnswers = {};
  examAnswers = {};

  const mult = getPointsMultiplier();
  const finalPoints = Math.round(skill.pointsReward * mult);
  const vpAmount = skill.vipPointsReward || 50;
  const questions = getSkillQuestions(skill);

  document.getElementById('modal-category').textContent = `${skill.category} • ${skill.lessons.length} Módulos + Examen (${questions.length} preguntas)`;
  document.getElementById('modal-points').textContent = `💎 +${finalPoints} PTS`;
  document.getElementById('modal-vip-points').textContent = state.isProMember
    ? `👑 +${vpAmount} VP (VIP Activo)`
    : `🔒 +${vpAmount} VP (Solo VIP)`;
  document.getElementById('modal-title').textContent = skill.title;
  document.getElementById('modal-subtitle').textContent =
    'Debes resolver la comprobación práctica de cada módulo para avanzar y aprobar el 100% del examen final para cobrar los puntos.';

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
    const hasCheckpoint = Boolean(lesson.checkpoint);
    const checkpointSolved = !hasCheckpoint || Boolean(passedCheckpoints[currentStepIndex]);
    const chosenIdx = selectedCheckAnswers[currentStepIndex];

    const paragraphsHtml = Array.isArray(lesson.paragraphs)
      ? lesson.paragraphs.map(p => `<p>${p}</p>`).join('')
      : `<p>${lesson.text || ''}</p>`;

    const keyPointsHtml = Array.isArray(lesson.keyPoints) && lesson.keyPoints.length > 0
      ? `
        <div class="lesson-keypoints">
          <h5>📌 Conceptos Clave del Módulo</h5>
          <ul>
            ${lesson.keyPoints.map(kp => `<li>${kp}</li>`).join('')}
          </ul>
        </div>
      `
      : '';

    const warningHtml = lesson.warning
      ? `<div class="lesson-Warning">${lesson.warning}</div>`
      : '';

    const checkpointHtml = hasCheckpoint
      ? `
        <div class="checkpoint-box">
          <div class="checkpoint-title">
            <span>🧪 Verificación Obligatoria del Módulo ${currentStepIndex + 1}</span>
            <span style="margin-left:auto;">${checkpointSolved ? '✅ Superado' : '🔒 Responde para avanzar'}</span>
          </div>
          <div class="checkpoint-question">${lesson.checkpoint.question}</div>
          <div class="checkpoint-options">
            ${lesson.checkpoint.options
              .map((opt, idx) => {
                let statusClass = '';
                if (chosenIdx === idx) {
                  statusClass = idx === lesson.checkpoint.correctIndex ? 'correct' : 'wrong';
                }
                return `
                  <button class="checkpoint-btn ${statusClass}" onclick="answerLessonCheckpoint(${idx})">
                    <strong>${String.fromCharCode(65 + idx)})</strong> ${opt}
                  </button>
                `;
              })
              .join('')}
          </div>
        </div>
      `
      : '';

    body.innerHTML = `
      <div class="lesson-box">
        <div class="lesson-header-bar">
          <span class="lesson-module-badge">Módulo ${currentStepIndex + 1} de ${currentSkill.lessons.length}</span>
          <span class="lesson-read-time">⏱️ ${lesson.readTime || '10 min de estudio'}</span>
        </div>
        <h4>${lesson.heading}</h4>
        <div class="lesson-paragraphs">${paragraphsHtml}</div>
        ${keyPointsHtml}
        ${lesson.code ? `<pre class="lesson-code">${lesson.code}</pre>` : ''}
        ${warningHtml}
        ${checkpointHtml}
      </div>
    `;

    footer.innerHTML = `
      <button class="btn-secondary" ${currentStepIndex === 0 ? 'disabled style="opacity:0.4"' : ''} onclick="prevLessonStep()">⬅ Módulo Anterior</button>
      <button class="btn-primary-full" style="max-width: 310px; ${!checkpointSolved ? 'opacity: 0.5;' : ''}" onclick="nextLessonStep()">
        ${
          !checkpointSolved
            ? '🔒 Responde el reto del módulo para avanzar'
            : currentStepIndex === currentSkill.lessons.length - 1
            ? 'Ir al Examen Final de Certificación 🎯'
            : 'Siguiente Módulo ➡'
        }
      </button>
    `;
  } else {
    const questions = getSkillQuestions(currentSkill);
    const finalPoints = Math.round(currentSkill.pointsReward * getPointsMultiplier());
    const vpAmount = currentSkill.vipPointsReward || 50;

    body.innerHTML = `
      <div class="lesson-box">
        <div class="lesson-header-bar">
          <span class="lesson-module-badge" style="background: rgba(251, 191, 36, 0.2); color: #fde68a;">📝 Examen Final de Certificación</span>
          <span class="lesson-read-time">Requisito: ${questions.length} de ${questions.length} correctas (100%)</span>
        </div>
        <h4>Demuestra lo aprendido en los ${currentSkill.lessons.length} módulos</h4>
        <p style="font-size: 13.5px; color: var(--text-muted); margin-bottom: 16px;">
          Para acreditar tus <strong>+${finalPoints} PTS</strong> ${state.isProMember ? `y <strong>+${vpAmount} VP</strong>` : ''}, responde correctamente todas las preguntas del examen.
        </p>

        ${questions
          .map(
            (q, qIdx) => `
            <div class="exam-question-card">
              <h5>${q.question}</h5>
              <div class="quiz-options">
                ${q.options
                  .map(
                    (opt, optIdx) => `
                    <button class="quiz-option-btn ${examAnswers[qIdx] === optIdx ? 'selected' : ''}" onclick="selectExamAnswer(${qIdx}, ${optIdx})">
                      <strong>${String.fromCharCode(65 + optIdx)})</strong> ${opt}
                    </button>
                  `
                  )
                  .join('')}
              </div>
            </div>
          `
          )
          .join('')}
      </div>
    `;

    footer.innerHTML = `
      <button class="btn-secondary" onclick="prevLessonStep()">⬅ Repasar Módulos</button>
      <button class="btn-primary-full" style="max-width: 340px;" onclick="submitFinalExam()">
        ✅ Evaluar Examen y Reclamar +${finalPoints} PTS ${state.isProMember ? `+ ${vpAmount} VP` : ''}
      </button>
    `;
  }
}

window.answerLessonCheckpoint = function (optionIdx) {
  const lesson = currentSkill.lessons[currentStepIndex];
  if (!lesson || !lesson.checkpoint) return;

  selectedCheckAnswers[currentStepIndex] = optionIdx;
  if (optionIdx === lesson.checkpoint.correctIndex) {
    passedCheckpoints[currentStepIndex] = true;
    showToast(`✅ ¡Correcto! Módulo ${currentStepIndex + 1} verificado. Ya puedes avanzar.`);
  } else {
    passedCheckpoints[currentStepIndex] = false;
    showToast('❌ Respuesta incorrecta. Revisa la explicación del módulo e inténtalo de nuevo.');
  }
  renderModalStep();
};

window.prevLessonStep = function () {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    renderModalStep();
    document.getElementById('modal-body').scrollTop = 0;
  }
};

window.nextLessonStep = function () {
  const lesson = currentSkill.lessons[currentStepIndex];
  if (lesson && lesson.checkpoint && !passedCheckpoints[currentStepIndex]) {
    showToast('⚠️ Debes responder correctamente la verificación del módulo antes de pasar al siguiente.');
    return;
  }
  currentStepIndex++;
  renderModalStep();
  document.getElementById('modal-body').scrollTop = 0;
};

window.selectExamAnswer = function (qIdx, optIdx) {
  examAnswers[qIdx] = optIdx;
  renderModalStep();
};

window.submitFinalExam = function () {
  const questions = getSkillQuestions(currentSkill);
  const answeredCount = Object.keys(examAnswers).length;

  if (answeredCount < questions.length) {
    showToast(`⚠️ Responde las ${questions.length} preguntas del examen antes de enviar (${answeredCount}/${questions.length} respondidas).`);
    return;
  }

  let correctCount = 0;
  let firstWrongNumber = null;
  questions.forEach((q, idx) => {
    if (examAnswers[idx] === q.correctIndex) {
      correctCount++;
    } else if (firstWrongNumber === null) {
      firstWrongNumber = idx + 1;
    }
  });

  if (correctCount < questions.length) {
    showToast(`❌ Obtuviste ${correctCount}/${questions.length} aciertos. Revisa la pregunta #${firstWrongNumber} (se requiere 100% para cobrar los puntos).`);
    return;
  }

  const alreadyDone = state.completedCourses.includes(currentSkill.id);
  if (!alreadyDone) {
    const earnedPoints = Math.round(currentSkill.pointsReward * getPointsMultiplier());
    const earnedVIPPoints = state.isProMember ? (currentSkill.vipPointsReward || 50) : 0;

    state.completedCourses.push(currentSkill.id);
    state.points += earnedPoints;
    state.vipPoints += earnedVIPPoints;
    state.xp += currentSkill.xp;

    saveState();
    renderHeaderAndStats();
    renderSkillsGrid();

    if (state.isProMember) {
      showToast(`👑 ¡Examen superado (${correctCount}/${questions.length})! Ganaste +${earnedPoints} PTS y +${earnedVIPPoints} Puntos Exclusivos VIP (VP).`);
    } else {
      showToast(`🎉 ¡Examen superado (${correctCount}/${questions.length})! Ganaste +${earnedPoints} PTS. (Activa VIP para ganar también Puntos VIP).`);
    }
  } else {
    showToast(`✅ ¡Examen repasado con éxito (${correctCount}/${questions.length})!`);
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
        <p style="color:var(--text-muted); margin: 8px 0 16px;">Completa todos los módulos y exámenes de los cursos para ganar Puntos Estándar (PTS) o hazte miembro VIP para ganar Puntos Exclusivos VIP (👑 VP).</p>
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

    const paragraphs = content
      .split(/\n+/)
      .map(s => s.trim())
      .filter(Boolean);

    const newCourse = {
      id: 'course-' + Date.now(),
      title,
      category,
      priceUSD,
      pointsReward,
      vipPointsReward,
      xp: 250,
      duration: 30,
      secretCourse: false,
      description: content.slice(0, 120) + (content.length > 120 ? '...' : ''),
      lessons: [
        {
          heading: 'Módulo 1: Fundamentos y Conceptos Centrales',
          readTime: '10 min de lectura',
          paragraphs: paragraphs.length > 0 ? paragraphs : [content],
          keyPoints: [
            'Analiza detenidamente cada concepto antes de pasar a la evaluación.',
            'Supera la verificación del módulo para desbloquear el examen final.'
          ],
          checkpoint: {
            question: question,
            options: [answer, 'Ninguna de las anteriores', 'Omitir validación'],
            correctIndex: 0
          }
        }
      ],
      quiz: {
        questions: [
          {
            question: `1. ${question}`,
            options: [answer, 'Opción incorrecta A', 'Opción incorrecta B'],
            correctIndex: 0
          }
        ]
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
