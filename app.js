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
          question: '¿Qué sintaxis de f-string en Python evalúa la variable `utilidad_neta` y formatea su salida numérica exactamente con 2 decimales fijos?',
          options: [
            'f"Utilidad: ${round(utilidad_neta, 2):d} USD"',
            'f"Utilidad: ${utilidad_neta:.2f} USD"',
            'f"Utilidad: ${utilidad_neta:2.0f} USD"',
            '"Utilidad: ${utilidad_neta:.2f} USD".format()'
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
          question: 'En la función `clasificar_cliente(8000, True)`, ¿qué valor se retorna exactamente y por qué?',
          options: [
            '"👑 Cliente Corporativo VIP (20% Descuento)", porque 8000 supera el umbral de 5000 en el primer elif.',
            'Ambos mensajes ("⛔ Cuenta suspendida..." y "👑 Cliente Corporativo VIP"), ya que ambas condiciones se cumplen.',
            '"⛔ Cuenta suspendida hasta regularizar saldo", porque el bloque if inicial se evalúa como True y cortocircuita todos los elif siguientes.',
            'Lanza un ValueError porque no se puede combinar un parámetro entero con un booleano sin usar el operador and.'
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
          question: 'Al procesar diccionarios JSON externos, ¿qué ventaja técnica ofrece `factura.get("descuento", 0)` frente a `factura["descuento"]`?',
          options: [
            'Modifica el diccionario original insertando permanentemente la clave "descuento" con valor 0 en la base de datos.',
            'Convierte automáticamente cualquier valor de texto a número flotante antes de realizar la lectura.',
            'Retorna el valor por defecto 0 si la clave no está presente, evitando que la ejecución aborte con una excepción KeyError.',
            'Es la única forma permitida por Python para leer claves dentro de una comprensión de listas.'
          ],
          correctIndex: 2
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
          question: '¿Por qué es una mala práctica usar un bloque `except:` genérico vacío en lugar de capturar `ZeroDivisionError` o `TypeError` explícitamente?',
          options: [
            'Porque en Python 3 un bloque except sin especificar el tipo de excepción produce un SyntaxError al iniciar el script.',
            'Porque un except genérico solo captura errores aritméticos e ignora por completo los errores de tipos o de claves.',
            'Porque obliga al intérprete a ejecutar el bloque finally dos veces seguidas consumiendo el doble de memoria.',
            'Porque silencia errores inesperados de lógica o nombres de variables mal escritos (NameError), dificultando depurar fallos reales.'
          ],
          correctIndex: 3
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Cuál es la diferencia exacta entre los operadores `17 / 5`, `17 // 5` y `17 % 5` en Python?',
          options: [
            '`/` devuelve 3 (entero), `//` devuelve 3.4 (flotante) y `%` calcula el 5% de 17.',
            '`/` devuelve 3.4 (división flotante), `//` devuelve 3 (cociente entero truncado) y `%` devuelve 2 (el resto de la división).',
            '`/` y `//` devuelven ambos 3.4, mientras que `%` redondea al entero superior más cercano (4).',
            '`//` eleva 17 a la quinta potencia y `%` divide el resultado entre 100.'
          ],
          correctIndex: 1
        },
        {
          question: '2. Dado `datos = [{"v": 10}, {"v": 25}, {"v": 40}]`, ¿qué retorna `[d["v"] * 2 for d in datos if d.get("v", 0) >= 25]`?',
          options: [
            '[20, 50, 80]',
            '[25, 40]',
            '[50, 80]',
            '[{"v": 50}, {"v": 80}]'
          ],
          correctIndex: 2
        },
        {
          question: '3. ¿Qué ocurre si eliminas elementos de una lista con `.remove()` mientras iteras sobre esa misma lista en un bucle `for`?',
          options: [
            'Python bloquea la lista automáticamente y lanza un RuntimeError antes de borrar el primer elemento.',
            'Los elementos se borran en orden inverso pero el bucle recorre exactamente todas las posiciones sin inconvenientes.',
            'El bucle se reinicia automáticamente desde el índice 0 cada vez que se elimina un elemento.',
            'Los índices restantes se desplazan hacia la izquierda mientras el contador avanza, provocando que el bucle se saltee elementos sin evaluarlos.'
          ],
          correctIndex: 3
        },
        {
          question: '4. En una estructura `try / except / finally`, ¿cuándo se ejecuta el código contenido dentro del bloque `finally`?',
          options: [
            'Únicamente cuando se dispara una excepción que no fue capturada por ningún bloque except.',
            'Solo cuando el bloque try finaliza sin ningún error y no existe sentencia return.',
            'Siempre al finalizar la estructura, tanto si el bloque try tuvo éxito como si ocurrió una excepción o hubo un return.',
            'Solamente si el usuario cancela manualmente la ejecución del script por teclado.'
          ],
          correctIndex: 2
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
          question: '¿Qué vulnerabilidad específica mitiga el uso de delimitadores estructurales (`<datos_usuario>...</datos_usuario>`) en el prompt del sistema?',
          options: [
            'Evita que el modelo supere el límite máximo de tokens de salida configurado en la API.',
            'Encripta el contenido en tránsito mediante SHA-256 antes de enviarlo al proveedor del modelo.',
            'Aísla semánticamente el texto externo no confiable para evitar que instrucciones maliciosas dentro del input sobrescriban las reglas del sistema (Prompt Injection).',
            'Reduce la latencia de inferencia al comprimir las etiquetas XML en un solo token.'
          ],
          correctIndex: 2
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
          question: 'Al diseñar un prompt Few-Shot para producción, ¿cuál es el criterio clave para seleccionar los ejemplos incluidos?',
          options: [
            'Incluir al menos 50 ejemplos idénticos para forzar el ajuste de pesos neuronales (Fine-Tuning) en tiempo real.',
            'Proveer entre 2 y 5 pares de Entrada/Salida diversos (incluyendo casos borde) que respeten de forma idéntica el esquema de salida esperado.',
            'Escribir únicamente ejemplos con salidas vacías para que el modelo deduzca por sí mismo los nombres de las claves JSON.',
            'Alternar distintos formatos de salida (uno en CSV, otro en Markdown y otro en JSON) dentro del mismo prompt para darle flexibilidad.'
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
          question: 'Desde el punto de vista del funcionamiento autorregresivo de un LLM, ¿por qué falla pedir el veredicto JSON primero y la justificación después?',
          options: [
            'Porque el analizador sintáctico de JSON rechaza cualquier texto que aparezca después de una llave de cierre.',
            'Porque el modelo consume el doble de ventana de contexto cuando el bloque JSON se coloca al principio.',
            'Porque cada token generado condiciona a los siguientes: si emite primero el veredicto sin haber calculado los pasos previos, compromete un valor prematuro y luego solo racionaliza ese error.',
            'Porque los modelos autorregresivos leen el prompt desde el final hacia el principio antes de generar el primer token.'
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
          question: 'En la arquitectura de un Agente con Tool Calling, ¿quién ejecuta realmente el código de la función `consultar_estado_pedido`?',
          options: [
            'El propio modelo de lenguaje ejecuta la consulta SQL dentro de los servidores de la GPU del proveedor de IA.',
            'El navegador del usuario final ejecuta directamente el acceso a la base de datos sin pasar por el backend.',
            'El modelo nunca ejecuta código por sí mismo: solo devuelve un objeto estructurado indicando qué herramienta llamar y con qué argumentos, y tu servidor backend ejecuta la función real.',
            'La base de datos se conecta por su cuenta al modelo para leer la conversación en texto plano.'
          ],
          correctIndex: 2
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Qué función cumple la capa de "Restricciones" dentro del framework R-C-T-R-F?',
          options: [
            'Define la personalidad histórica del autor que el modelo debe imitar.',
            'Limita el tamaño del archivo de código fuente que se puede adjuntar en la petición HTTP.',
            'Acota explícitamente las conductas prohibidas, supuestos no permitidos y límites de alcance para evitar alucinaciones o relleno.',
            'Sustituye la necesidad de especificar un formato de salida estructurado.'
          ],
          correctIndex: 2
        },
        {
          question: '2. ¿Cuándo es preferible usar temperatura `0.0 - 0.2` frente a temperatura `0.8 - 1.0` en una integración con IA?',
          options: [
            'Cuando buscamos lluvias de ideas publicitarias con alta variedad léxica y metáforas originales.',
            'Cuando necesitamos extracción determinista de datos, clasificación JSON o invocación precisa de herramientas (Tool Calling).',
            'Cuando queremos que el modelo responda en menos de 50 milisegundos sin evaluar probabilidades.',
            'Cuando el prompt no incluye ninguna instrucción de sistema.'
          ],
          correctIndex: 1
        },
        {
          question: '3. ¿Cómo opera un agente basado en el patrón ReAct (Reason + Act) ante una consulta compleja de múltiples pasos?',
          options: [
            'Responde toda la consulta en un único paso sin verificar los datos devueltos por las APIs externas.',
            'Entrena una nueva red neuronal desde cero por cada mensaje que envía el usuario.',
            'Alterna iterativamente entre razonar sobre el estado actual, solicitar la ejecución de una herramienta, observar el resultado devuelto por el entorno y decidir el siguiente paso.',
            'Ejecuta simultáneamente todas las herramientas disponibles en el catálogo sin filtrar sus parámetros.'
          ],
          correctIndex: 2
        },
        {
          question: '4. ¿Qué control de seguridad es crítico antes de que el backend ejecute una herramienta destructiva (ej. emitir un reembolso) solicitada por un Agente?',
          options: [
            'Aumentar el parámetro top_p a 1.0 para que el modelo esté más seguro de su decisión.',
            'Pedirle al mismo modelo en el prompt que prometa no equivocarse.',
            'Ocultar el nombre de la función usando un alias de dos letras.',
            'Validar los argumentos contra un esquema estricto (JSON Schema / reglas de negocio) y exigir confirmación humana (Human-in-the-Loop) si supera cierto umbral.'
          ],
          correctIndex: 3
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
          question: 'Si tus ingresos netos son de $2,500 USD/mes y tus costos fijos operativos alcanzan $1,750 USD (70%), ¿qué diagnóstico aplica según la arquitectura 50/30/20?',
          options: [
            'La estructura es óptima siempre y cuando el 30% restante ($750 USD) se destine íntegramente a gastos de ocio.',
            'Debes apalancarte con deuda rotativa de corto plazo para cubrir el 20% de inversión sin tocar tus costos fijos.',
            'Tu estructura fija está sobredimensionada (+20% por encima del límite saludable), por lo que debes renegociar costos fijos o expandir ingresos antes de asumir riesgo volátil.',
            'Debes suspender por completo el fondo de liquidez e invertir el 70% en renta variable de alto riesgo.'
          ],
          correctIndex: 2
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
          question: '¿Dónde debe alojarse el Fondo de Emergencia de 3 a 6 meses para cumplir su función técnica sin perder poder adquisitivo?',
          options: [
            'En acciones de crecimiento tecnológico (Growth Stocks) que históricamente rinden más del 15% anual pero tienen alta volatilidad.',
            'En instrumentos de liquidez inmediata y muy baja volatilidad (Money Market o letras del tesoro a corto plazo) que preserven el capital nominal y devenguen tasa real.',
            'En un plazo fijo bancario bloqueado a 24 meses sin cláusula de cancelación anticipada para obtener un 1% extra de tasa.',
            'En efectivo físico guardado en caja de seguridad para evitar cualquier fluctuación de tasas de interés.'
          ],
          correctIndex: 1
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
          question: 'Según la Regla del 72, si tienes $10,000 USD invertidos al 9% anual compuesto sin realizar nuevos aportes, ¿cuánto tendrás aproximadamente al cabo de 16 años?',
          options: [
            '~$20,000 USD, ya que al 9% anual el capital tarda 16 años en duplicarse una sola vez.',
            '~$24,400 USD, porque el 9% anual genera exactamente $900 USD lineales por cada año transcurrido.',
            '~$30,000 USD, porque el capital suma un 100% del monto original cada 8 años de forma lineal.',
            '~$40,000 USD, porque al 9% anual se duplica cada 8 años (72/9 = 8): pasa a $20,000 en el año 8 y vuelve a duplicarse a $40,000 en el año 16.'
          ],
          correctIndex: 3
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
          question: 'Por la asimetría matemática de las pérdidas, si un activo cae un 25% desde $100 a $75 USD, ¿qué rentabilidad porcentual necesita lograr desde $75 para volver a $100 USD?',
          options: [
            'Necesita subir exactamente un +25.0% para compensar el 25% perdido.',
            'Necesita subir un +50.0% debido al descuento acumulado de volatilidad.',
            'Necesita subir un +33.3% (ganar $25 sobre una base reducida de $75 USD).',
            'Necesita subir un +20.0% si se mantiene durante dos trimestres.'
          ],
          correctIndex: 2
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Cuál es la diferencia patrimonial entre adquirir un Activo Productivo y un Pasivo de Consumo?',
          options: [
            'El Activo exige mantenimiento mensual sin retorno, mientras que el Pasivo se revaloriza siempre por encima de la inflación.',
            'El Activo genera flujo de caja positivo o apreciación de capital a largo plazo, mientras que el Pasivo deprecia su valor y drena flujo de caja mensual.',
            'Cualquier compra realizada al contado sin cuotas se considera técnicamente un Activo Productivo.',
            'Los Pasivos son únicamente las deudas bancarias hipotecarias mayores a 10 años.'
          ],
          correctIndex: 1
        },
        {
          question: '2. ¿Qué efecto mecánico produce el DCA (Dollar-Cost Averaging) durante los meses en que el mercado bursátil sufre una corrección bajista?',
          options: [
            'Suspende automáticamente las compras mensuales hasta que el índice recupere su máximo histórico previo.',
            'Vende el 20% del portafolio para proteger el capital en efectivo.',
            'Mantiene constante la cantidad de acciones compradas reduciendo el aporte en dólares de ese mes.',
            'Con la misma cuota fija en dólares adquiere una mayor cantidad de participaciones/unidades a menor precio, reduciendo el costo promedio ponderado.'
          ],
          correctIndex: 3
        },
        {
          question: '3. En la fórmula de interés compuesto `CF = CI * (1 + r)^n`, ¿por qué duplicar el horizonte temporal `n` impacta mucho más que duplicar el capital inicial `CI`?',
          options: [
            'Porque `CI` se divide por la inflación anual mientras que `n` está exento de comisiones.',
            'Porque `CI` actúa como un multiplicador lineal, mientras que `n` es el exponente que multiplica los rendimientos reinvertidos de forma geométrica.',
            'Porque la tasa `r` se duplica automáticamente cada 5 años de permanencia.',
            'No hay diferencia: duplicar `CI` o duplicar `n` arroja exactamente el mismo monto final.'
          ],
          correctIndex: 1
        },
        {
          question: '4. Si una cartera sufre una caída severa (Drawdown) del 80% en una posición especulativa, ¿qué retorno necesita generar el capital sobreviviente para recuperar el punto de equilibrio?',
          options: [
            '+80% de rentabilidad acumulada.',
            '+160% de rentabilidad acumulada.',
            '+400% de rentabilidad (multiplicar por 5 el 20% restante para volver al 100% original).',
            '+200% de rentabilidad acumulada.'
          ],
          correctIndex: 2
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
          question: '¿Cómo se diferencian técnicamente la Ley de Hick y la Ley de Fitts al auditar una interfaz de conversión?',
          options: [
            'La Ley de Hick mide el contraste cromático del botón y la Ley de Fitts mide la velocidad de carga del servidor.',
            'La Ley de Hick establece que el tiempo de decisión crece con el número de opciones presentadas; la Ley de Fitts establece que el tiempo para alcanzar un objetivo depende de su tamaño y distancia al cursor/pulgar.',
            'La Ley de Hick recomienda usar menús de más de 10 categorías y la Ley de Fitts recomienda colocar los botones primarios en el pie de página.',
            'Ambas leyes se refieren exclusivamente al tamaño de la tipografía en pantallas de escritorio.'
          ],
          correctIndex: 1
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
          question: '¿Cuál es la función psicológica del "micro-copy reductor de fricción" ubicado inmediatamente debajo del botón CTA primario?',
          options: [
            'Reemplazar por completo al titular H1 para ahorrar espacio vertical en dispositivos móviles.',
            'Aumentar la densidad de palabras clave para el posicionamiento SEO orgánico en buscadores.',
            'Neutralizar la objeción o ansiedad de último segundo (ej. cargos ocultos, permanencia forzosa o demora en el acceso) justo en el punto de clic.',
            'Obligar al usuario a leer los términos legales completos antes de habilitar el botón.'
          ],
          correctIndex: 2
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
          question: '¿Cómo funciona el "Efecto Anclaje y Señuelo" (Decoy Pricing) en una tabla comparativa de planes?',
          options: [
            'Consiste en ocultar los precios de todos los planes hasta que el usuario agende una llamada telefónica de ventas.',
            'Consiste en ofrecer únicamente un plan gratuito ilimitado y esperar donaciones voluntarias.',
            'Consiste en cambiar el precio dinámicamente cada 5 minutos según la batería del dispositivo del visitante.',
            'Establece un punto de referencia de valor que hace que el plan objetivo (ej. Pase VIP completo) luzca significativamente más conveniente frente a comprar elementos sueltos.'
          ],
          correctIndex: 3
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
          question: 'En un experimento A/B, ¿por qué es un error metodológico modificar simultáneamente el titular, el precio, el diseño del checkout y el color del botón?',
          options: [
            'Porque los navegadores modernos bloquean las páginas que cambian más de un elemento CSS.',
            'Porque al alterar múltiples variables a la vez sin un diseño multivariable controlado, resulta imposible atribuir qué cambio específico causó la subida o caída en las ventas.',
            'Porque el tráfico siempre debe dividirse 99% a la versión A y 1% a la versión B.',
            'Porque las pruebas A/B solo permiten evaluar cambios en imágenes y nunca en textos o precios.'
          ],
          correctIndex: 1
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. Según la Ley de Jakob en UX, ¿por qué los usuarios prefieren interfaces que respetan convenciones visuales conocidas?',
          options: [
            'Porque los motores de búsqueda penalizan cualquier sitio que utilice hojas de estilo personalizadas.',
            'Porque los usuarios pasan la mayor parte del tiempo en otros sitios y transfieren sus modelos mentales previos, esperando que la navegación y el checkout funcionen de forma predecible.',
            'Porque todos los sitios web están obligados por ley a usar la misma plantilla HTML.',
            'Porque el ojo humano solo distingue tres colores primarios en pantallas digitales.'
          ],
          correctIndex: 1
        },
        {
          question: '2. ¿Por qué un testimonio como "Aumenté mi tasa de cierre del 1.8% al 4.2% en 14 días aplicando el módulo 3" convierte mucho más que "Excelente curso, muy recomendable"?',
          options: [
            'Porque utiliza números decimales que activan el filtro de spam del navegador.',
            'Porque es más largo y ocupa más píxeles en la tarjeta.',
            'Porque aporta especificidad cuantificable, plazo temporal concreto y atribuye el resultado a un mecanismo verificable del producto.',
            'Porque los testimonios breves están prohibidos en páginas de tecnología.'
          ],
          correctIndex: 2
        },
        {
          question: '3. Si una Landing Page recibe 20,000 visitas/mes, tiene un ticket de $25 USD y mejora su conversión del 1.2% al 2.4%, ¿cuál es el impacto en facturación mensual?',
          options: [
            'Sube de $2,400 USD a $3,600 USD mensuales (+50%).',
            'Sube de $4,000 USD a $5,200 USD mensuales (+30%).',
            'Sube de $6,000 USD (240 ventas) a $12,000 USD (480 ventas) mensuales (+100% de ingresos con el mismo tráfico).',
            'Se mantiene en $6,000 USD porque el tráfico total no aumentó.'
          ],
          correctIndex: 2
        },
        {
          question: '4. ¿Qué métrica es más confiable para declarar ganadora a una variante en un Test A/B de comercio electrónico o venta de cursos?',
          options: [
            'El tiempo promedio de permanencia en la página de inicio (Time on Page).',
            'La tasa de clics en el botón superior (CTR) aunque no completen el pago.',
            'La cantidad de usuarios que hacen scroll hasta el pie de página.',
            'El Ingreso por Visitante (RPV) y la tasa de conversión a pago efectivo con significancia estadística.'
          ],
          correctIndex: 3
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
          question: '¿Cuál es la diferencia semántica entre los códigos HTTP `401 Unauthorized` y `403 Forbidden` en una API REST?',
          options: [
            '`401` indica que el servidor se cayó por exceso de tráfico; `403` indica que la ruta URL no existe.',
            '`401` se usa solo en peticiones GET y `403` se usa exclusivamente en peticiones POST o DELETE.',
            '`401` indica falta de autenticación válida (no inició sesión o token expirado); `403` indica que el usuario sí está autenticado pero su rol no tiene permisos para ese recurso.',
            'Ambos significan exactamente lo mismo y se eligen según el navegador del cliente.'
          ],
          correctIndex: 2
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
          question: 'En la definición `user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE`, ¿qué efecto tiene la cláusula `ON DELETE CASCADE`?',
          options: [
            'Impide borrar cualquier inscripción (`enrollment`) a menos que antes se elimine toda la tabla `users`.',
            'Si se elimina un registro padre en la tabla `users`, el motor elimina automáticamente todas las filas hijas asociadas a ese `user_id` en `enrollments`, manteniendo la integridad referencial.',
            'Si se borra una inscripción en `enrollments`, se borra también la cuenta del usuario en `users`.',
            'Crea una copia de respaldo automática en otra base de datos antes de ejecutar cualquier `DELETE`.'
          ],
          correctIndex: 1
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
          question: 'En la consulta anterior, ¿por qué se utiliza `COALESCE(SUM(e.amount_paid), 0)` al hacer un `LEFT JOIN` entre `users` y `enrollments`?',
          options: [
            'Porque la función SUM() en SQL devuelve un error de sintaxis si no está envuelta dentro de COALESCE.',
            'Porque para los usuarios sin compras el LEFT JOIN genera valores NULL en `e.amount_paid`, y COALESCE reemplaza ese NULL resultante por 0.00.',
            'Para redondear los decimales al número entero más cercano antes de ordenar con ORDER BY.',
            'Para excluir del reporte a todos los usuarios cuya suma de compras sea igual a cero.'
          ],
          correctIndex: 1
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
          question: '¿Por qué es peligroso guardar datos sensibles (como una clave privada o número de tarjeta) dentro del Payload de un JWT estándar?',
          options: [
            'Porque el navegador borra automáticamente cualquier JWT cuyo tamaño supere los 128 bytes.',
            'Porque el Payload de un JWT estándar (JWS) solo está codificado en Base64Url para transporte (no está cifrado), por lo que cualquiera que intercepte o lea el token puede decodificar su contenido en texto claro.',
            'Porque la firma HMAC-SHA256 publica automáticamente el Payload en los encabezados DNS.',
            'Porque el servidor no puede leer ningún campo incluido dentro del Payload una vez emitido.'
          ],
          correctIndex: 1
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Qué propiedad diferencia a los verbos HTTP `PUT` y `GET` (idempotentes) frente al verbo `POST` (no idempotente)?',
          options: [
            '`PUT` y `GET` encriptan el cuerpo de la petición, mientras que `POST` envía los datos en texto plano por la URL.',
            '`POST` solo permite enviar hasta 255 caracteres, mientras que `GET` no tiene límite de tamaño.',
            'Ejecutar la misma petición `GET` o `PUT` múltiples veces produce el mismo estado en el servidor que ejecutarla una sola vez, mientras que repetir un `POST` suele crear múltiples recursos duplicados.',
            '`GET` modifica registros en la base de datos y `POST` se utiliza únicamente para consultas de solo lectura.'
          ],
          correctIndex: 2
        },
        {
          question: '2. ¿Qué costo o contrapartida técnica tiene agregar demasiados índices (`CREATE INDEX`) en todas las columnas de una tabla SQL?',
          options: [
            'Impide realizar consultas con `LEFT JOIN` sobre esa tabla.',
            'Acelera las lecturas (`SELECT`), pero penaliza el rendimiento de las escrituras (`INSERT`, `UPDATE`, `DELETE`) y consume más espacio en disco porque cada índice B-Tree debe actualizarse en cada cambio.',
            'Obliga a reiniciar el motor de base de datos cada vez que se inserta una fila nueva.',
            'Limita la tabla a un máximo de 10,000 registros en total.'
          ],
          correctIndex: 1
        },
        {
          question: '3. Si necesitas filtrar una consulta agrupada para mostrar únicamente los alumnos cuya suma total de compras supere los $100 USD (`SUM(e.amount_paid) > 100`), ¿dónde debe ir esa condición?',
          options: [
            'Dentro de la cláusula `WHERE`, antes del `GROUP BY`.',
            'Dentro de la cláusula `ORDER BY` al final de la consulta.',
            'Dentro de la cláusula `ON` del `LEFT JOIN`.',
            'Dentro de la cláusula `HAVING`, después del `GROUP BY`, ya que `WHERE` no puede evaluar funciones de agregación como `SUM()`.'
          ],
          correctIndex: 3
        },
        {
          question: '4. ¿Qué función específica cumple el "Salt" aleatorio que algoritmos como Bcrypt o Argon2 agregan a cada contraseña antes de hashearla?',
          options: [
            'Permite desencriptar la contraseña más rápido cuando el usuario solicita recuperarla por email.',
            'Comprime la longitud de la contraseña para que ocupe solo 8 bits en la columna VARCHAR.',
            'Garantiza que dos usuarios con la misma contraseña produzcan hashes completamente distintos e inutiliza ataques con tablas precalculadas (Rainbow Tables).',
            'Reemplaza la necesidad de usar conexiones HTTPS/TLS entre el navegador y el servidor.'
          ],
          correctIndex: 2
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
          question: 'En validación de producto, ¿por qué las encuestas de opinión ("¿Usarías una app que haga X?") suelen dar falsos positivos frente a un test de pre-venta ("Smoke Test")?',
          options: [
            'Porque las encuestas online tardan más de 6 meses en recolectar 10 respuestas.',
            'Porque decir "sí, me gusta la idea" no tiene costo para el encuestado (sesgo de cortesía), mientras que intentar comprar o dejar un pago/reserva exige compromiso real ante un dolor prioritario.',
            'Porque los formularios de encuesta no funcionan en dispositivos móviles.',
            'Porque en B2B está prohibido entrevistar a potenciales clientes antes de registrar la marca.'
          ],
          correctIndex: 1
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
          question: 'Al diseñar el onboarding de un MVP SaaS, ¿cómo impacta reducir el "Time-to-Value" (tiempo hasta el Momento Aha!) de 15 minutos a menos de 90 segundos?',
          options: [
            'Aumenta el costo de los servidores en un 300% sin afectar la retención.',
            'Reduce el precio mensual que puedes cobrar por la suscripción.',
            'Incrementa drásticamente la tasa de activación y retención del día 1, evitando que el usuario abandone antes de experimentar el beneficio central.',
            'Obliga a eliminar la pasarela de pagos del producto.'
          ],
          correctIndex: 2
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
          question: 'Si un Micro-SaaS tiene un ARPU de $50 USD/mes, un Churn mensual del 4% (0.04) y un CAC de $250 USD, ¿cuál es su LTV y su ratio LTV/CAC?',
          options: [
            'LTV = $200 USD y ratio LTV/CAC = 0.8x (modelo deficitario).',
            'LTV = $500 USD y ratio LTV/CAC = 2.0x.',
            'LTV = $2,000 USD y ratio LTV/CAC = 8.0x.',
            'LTV = $1,250 USD ($50 / 0.04) y ratio LTV/CAC = 5.0x ($1,250 / $250), superando holgadamente el umbral saludable de 3.0x.'
          ],
          correctIndex: 3
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
          question: '¿Por qué es un error escalar campañas de anuncios pagados (Paid Ads) antes de haber cerrado los primeros 15-20 clientes de forma directa?',
          options: [
            'Porque las plataformas publicitarias no permiten anunciar productos con menos de 1 año de antigüedad.',
            'Porque sin haber validado antes el mensaje de ventas, el onboarding y la retención inicial con clientes reales, quemarás presupuesto enviando tráfico caro a un embudo con fugas.',
            'Porque los clientes que llegan por publicidad pagan únicamente en efectivo.',
            'Porque el CAC en publicidad pagada siempre es igual a cero.'
          ],
          correctIndex: 1
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Qué diferencia a un producto "Analgésico" de una "Vitamina" al elegir un nicho para un Micro-SaaS B2B?',
          options: [
            'El Analgésico requiere 50 desarrolladores para construirse y la Vitamina solo requiere 1.',
            'La Vitamina se cobra por suscripción mensual y el Analgésico solo se puede ofrecer gratis.',
            'El Analgésico resuelve un problema urgente y cuantificable (ahorro directo de horas o dinero hoy), por lo que tiene presupuesto inmediato; la Vitamina es una mejora opcional que las empresas posponen.',
            'Ambos tienen exactamente la misma velocidad de cierre comercial en frío.'
          ],
          correctIndex: 2
        },
        {
          question: '2. Si tu SaaS cuenta con 60 clientes en el plan de $30/mes y este mes se suman 10 clientes nuevos pero cancelan 4 clientes, ¿cuál es tu nuevo MRR neto?',
          options: [
            '$1,800 USD de MRR.',
            '$1,980 USD de MRR (66 clientes activos × $30 USD, sumando +$180 USD de Net New MRR).',
            '$2,100 USD de MRR (porque las cancelaciones no se descuentan del MRR hasta fin de año).',
            '$1,680 USD de MRR.'
          ],
          correctIndex: 1
        },
        {
          question: '3. Si mejoras la retención de tu SaaS reduciendo el Churn mensual del 10% al 2.5% manteniendo el mismo precio mensual, ¿qué ocurre matemáticamente con el LTV de cada cliente?',
          options: [
            'El LTV se reduce una cuarta parte.',
            'El LTV aumenta apenas un 7.5%.',
            'El LTV permanece sin cambios porque el precio mensual no subió.',
            'El LTV se multiplica por 4 (la vida media del cliente pasa de 10 meses a 40 meses).'
          ],
          correctIndex: 3
        },
        {
          question: '4. ¿Cómo funciona un "Bucle Viral de Producto" (Product-Led Growth Loop) como el sello "Creado con [Tu SaaS]" en reportes o widgets compartibles?',
          options: [
            'Obliga a cada usuario a invitar a 10 amigos antes de dejarle iniciar sesión por primera vez.',
            'Bloquea las funciones del software si el usuario no publica en redes sociales todos los días.',
            'Convierte el uso normal de cada cliente en un canal de distribución orgánico: cada vez que comparte un entregable con sus propios clientes o colegas, expone la marca a nuevos usuarios calificados a costo CAC $0.',
            'Reemplaza el servidor backend por almacenamiento local en el navegador.'
          ],
          correctIndex: 2
        }
      ]
    }
  },
  {
    id: 'cybersec-ethical-web',
    title: 'Ciberseguridad Web, OWASP Top 10 & Blindaje de Aplicaciones',
    category: 'Programación',
    priceUSD: 18.99,
    pointsReward: 300,
    vipPointsReward: 95,
    xp: 360,
    duration: 50,
    secretCourse: false,
    description: 'Aprende a detectar y mitigar ataques XSS, CSRF, SSRF, configuración de cabeceras CSP, cookies HttpOnly y Rate Limiting en producción.',
    lessons: [
      {
        heading: 'Módulo 1: Cross-Site Scripting (XSS) y Sanitización del DOM',
        readTime: '12 min de lectura',
        paragraphs: [
          'El ataque Cross-Site Scripting (XSS) ocurre cuando una aplicación web renderiza datos ingresados por un usuario directamente en el navegador de otros usuarios sin escaparlos ni validarlos. Si un atacante inyecta una etiqueta <script> dentro de un comentario o perfil y tu frontend usa innerHTML, el navegador ejecutará ese código con los permisos de la víctima.',
          'Existen tres variantes principales: Stored XSS (el payload queda guardado en la base de datos), Reflected XSS (viaja en un parámetro de la URL) y DOM-based XSS (ocurre íntegramente en el cliente al manipular el DOM de forma insegura).'
        ],
        keyPoints: [
          'Usa textContent en lugar de innerHTML siempre que insertes texto proveniente de usuarios.',
          'Si necesitas renderizar HTML enriquecido, sanitiza antes con librerías auditadas como DOMPurify.',
          'Configura la cabecera Content-Security-Policy (CSP) para prohibir la ejecución de scripts inline no autorizados.'
        ],
        code: `// ❌ VULNERABLE A XSS:
comentarioDiv.innerHTML = "<p>Usuario dijo: " + inputDelUsuario + "</p>";

// ✅ SEGURO CONTRA XSS:
const p = document.createElement("p");
p.textContent = \`Usuario dijo: \${inputDelUsuario}\`;
comentarioDiv.appendChild(p);`,
        warning: '⚠️ Validar solo con JavaScript en el formulario del navegador no protege tu servidor: el atacante puede enviar el payload directo por cURL o Postman.',
        checkpoint: {
          question: '¿Por qué asignar datos de usuario mediante `elemento.textContent` previene la ejecución de un ataque XSS frente a `elemento.innerHTML`?',
          options: [
            'Porque textContent cifra el texto con AES-256 antes de mostrarlo en la pantalla.',
            'Porque textContent interpreta los caracteres especiales como `<` y `>` estrictamente como nodos de texto literal y nunca los parsea como etiquetas HTML ni ejecuta scripts.',
            'Porque textContent borra automáticamente cualquier palabra que contenga la sílaba "script".',
            'Porque textContent solo funciona cuando el usuario tiene permisos de administrador.'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 2: Ataques CSRF, Cookies HttpOnly / SameSite y Tokens Anti-CSRF',
        readTime: '13 min de lectura',
        paragraphs: [
          'En un ataque CSRF (Cross-Site Request Forgery), el atacante engaña al navegador de un usuario que ya tiene sesión abierta en tu web (por ejemplo, un banco o panel de pagos) para que envíe una petición oculta hacia tu servidor desde otro sitio malicioso.',
          'Como los navegadores adjuntan automáticamente las cookies de sesión del dominio destino, si no configuras el atributo SameSite=Strict o SameSite=Lax ni verificas un Token Anti-CSRF único por formulario, el servidor creerá que la acción fue voluntaria.'
        ],
        keyPoints: [
          'HttpOnly impide que scripts en JavaScript (document.cookie) puedan leer o robar la cookie de sesión en caso de XSS.',
          'Secure obliga a que la cookie viaje únicamente sobre conexiones cifradas HTTPS.',
          'SameSite=Strict o Lax bloquea el envío automático de cookies en peticiones originadas desde sitios externos.'
        ],
        code: `// Configuración blindada de Cookie de Sesión en el Servidor
res.cookie('session_token', tokenFirmado, {
  httpOnly: true,     // Invisible para document.cookie (Mitiga robo por XSS)
  secure: true,       // Solo se transmite por HTTPS
  sameSite: 'strict', // No se adjunta en peticiones cross-site (Mitiga CSRF)
  maxAge: 3600000     // Expira en 1 hora
});`,
        warning: '⚠️ Guardar tokens de sesión sensibles en localStorage los deja 100% expuestos si ocurre cualquier vulnerabilidad XSS en tu página o en una librería de terceros.',
        checkpoint: {
          question: '¿Qué combinación específica de atributos en una cookie de sesión protege simultáneamente contra el robo del token vía JavaScript (XSS) y contra peticiones forjadas desde otros dominios (CSRF)?',
          options: [
            '`Domain=*` combinado con `Max-Age=0`.',
            '`Path=/admin` combinado con codificación Base64.',
            '`HttpOnly` (bloquea lectura desde `document.cookie`) combinado con `SameSite=Strict` y `Secure`.',
            'Guardar la cookie en `sessionStorage` sin utilizar encabezados HTTP.'
          ],
          correctIndex: 2
        }
      },
      {
        heading: 'Módulo 3: CORS (Cross-Origin Resource Sharing) y Cabeceras de Seguridad HTTP',
        readTime: '12 min de lectura',
        paragraphs: [
          'La Política del Mismo Origen (Same-Origin Policy) de los navegadores impide que un script alojado en un dominio malicioso lea las respuestas de tu API. CORS es el mecanismo mediante el cual tu servidor declara explícitamente qué orígenes externos tienen permiso para consumir sus respuestas.',
          'Un error crítico en producción es configurar Access-Control-Allow-Origin: * junto con credenciales activas, lo cual expone los endpoints privados de tus usuarios a cualquier web de internet.'
        ],
        keyPoints: [
          'Define una lista blanca (Whitelist) estricta de dominios permitidos en CORS.',
          'Las peticiones complejas (PUT, DELETE o con JSON) disparan antes una petición Preflight con el verbo OPTIONS.',
          'Añade X-Content-Type-Options: nosniff y X-Frame-Options: DENY (para evitar Clickjacking con iframes ocultos).'
        ],
        code: `// Configuración segura de CORS con lista blanca de orígenes
const allowedOrigins = ['https://skillvault.app', 'https://admin.skillvault.app'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) callback(null, true);
    else callback(new Error('Origen bloqueado por política CORS'));
  },
  credentials: true
}));`,
        warning: '⚠️ Recuerda que CORS lo aplica el navegador: no sustituye la autenticación en el backend contra ataques directos desde servidores externos.',
        checkpoint: {
          question: '¿Con qué amenaza específica de interfaz gráfica se relaciona la cabecera `X-Frame-Options: DENY` (o `frame-ancestors \'none\'` en CSP)?',
          options: [
            'Evita ataques de fuerza bruta sobre el puerto SSH del servidor Linux.',
            'Comprime las imágenes PNG para reducir el ancho de banda.',
            'Impide que un sitio externo incruste tu página dentro de un `<iframe>` transparente para engañar al usuario y hacerle pulsar botones sin saberlo (Clickjacking).',
            'Desactiva el autocompletado de contraseñas del navegador.'
          ],
          correctIndex: 2
        }
      },
      {
        heading: 'Módulo 4: Rate Limiting, Fuerza Bruta y Prevención de SSRF',
        readTime: '13 min de lectura',
        paragraphs: [
          'Sin un limitador de tasa de peticiones (Rate Limiting), un atacante puede probar 50,000 combinaciones de contraseñas por minuto en tu endpoint de login (Credential Stuffing) o agotar el saldo de tu API de Inteligencia Artificial en segundos.',
          'Asimismo, cuando tu backend recibe una URL proporcionada por el usuario para descargar una imagen o webhook, debes validar que no apunte a direcciones internas privadas (como 127.0.0.1 o 169.254.169.254 de metadatos cloud) para prevenir ataques SSRF (Server-Side Request Forgery).'
        ],
        keyPoints: [
          'Aplica Rate Limiting por IP y por ID de usuario (ej. máximo 5 intentos de login fallidos cada 15 minutos).',
          'Devuelve el código HTTP 429 Too Many Requests cuando se supere el umbral permitido.',
          'En SSRF, bloquea rangos de IPs locales/privadas (127.0.0.0/8, 10.0.0.0/8, 192.168.0.0/16, 169.254.169.254).'
        ],
        code: `// Rate Limiter para proteger el endpoint de Autenticación
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Ventana de 15 minutos
  max: 5,                   // Máximo 5 intentos por IP
  statusCode: 429,
  message: { error: "Demasiados intentos. Espera 15 minutos." }
});
app.post('/api/v1/auth/login', loginLimiter, loginController);`,
        warning: '⚠️ Si tu servidor está detrás de Cloudflare o un proxy inverso (Nginx), configura "trust proxy" para leer la IP real del cliente y no bloquear la IP del propio proxy.',
        checkpoint: {
          question: '¿Qué ocurre si implementas Rate Limiting por IP detrás de un balanceador de carga o proxy inverso sin configurar correctamente `trust proxy`?',
          options: [
            'El limitador se desactiva automáticamente y permite tráfico infinito.',
            'El servidor verá todas las peticiones de todos los usuarios como provenientes de la misma IP del proxy y terminará bloqueando globalmente a todos los clientes legítimos con error 429.',
            'Las contraseñas dejarán de hashearse en la base de datos.',
            'El proxy inverso cambiará el puerto HTTP 80 al puerto 21.'
          ],
          correctIndex: 1
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Cuál es la diferencia fundamental entre un ataque `Stored XSS` y un `Reflected XSS`?',
          options: [
            'Stored XSS solo afecta a bases de datos SQL y Reflected XSS solo afecta a bases NoSQL.',
            'En Stored XSS el script malicioso se persiste en el servidor (ej. en un comentario o perfil) y se ejecuta en cada visitante que carga esa vista; en Reflected XSS el payload viaja en la propia petición/URL y se refleja de inmediato.',
            'Reflected XSS requiere acceso físico a la computadora de la víctima y Stored XSS no.',
            'Stored XSS se soluciona únicamente cambiando el puerto del servidor web.'
          ],
          correctIndex: 1
        },
        {
          question: '2. ¿Por qué almacenar un JWT de larga duración en `localStorage` representa un riesgo mayor ante una vulnerabilidad XSS que usar una cookie `HttpOnly`?',
          options: [
            'Porque localStorage envía su contenido automáticamente a todos los sitios web que el usuario visita en otras pestañas.',
            'Porque localStorage tiene un límite de 2 bytes y trunca la firma criptográfica del token.',
            'Porque cualquier script inyectado (o dependencia NPM comprometida) que corra en el navegador tiene acceso total de lectura a `window.localStorage`, mientras que una cookie `HttpOnly` es inaccesible desde JavaScript.',
            'Porque localStorage borra los datos cada vez que el usuario recarga la pestaña con F5.'
          ],
          correctIndex: 2
        },
        {
          question: '3. ¿En qué consiste una vulnerabilidad `SSRF` (Server-Side Request Forgery) y cuál es su objetivo típico en entornos Cloud?',
          options: [
            'Consiste en saturar de estilos CSS el navegador del cliente para congelar su tarjeta gráfica.',
            'Consiste en inducir al servidor backend a realizar peticiones HTTP hacia recursos internos no expuestos a internet (como redes privadas o el endpoint `169.254.169.254` de credenciales IAM en la nube).',
            'Consiste en adivinar la contraseña del usuario probando palabras del diccionario desde el navegador.',
            'Consiste en modificar el archivo hosts de la computadora local del visitante.'
          ],
          correctIndex: 1
        },
        {
          question: '4. ¿Qué código de estado HTTP estándar devuelve un servidor cuando un cliente supera el umbral configurado en el `Rate Limiter`?',
          options: [
            '400 Bad Request',
            '403 Forbidden',
            '502 Bad Gateway',
            '429 Too Many Requests'
          ],
          correctIndex: 3
        }
      ]
    }
  },
  {
    id: 'ai-rag-embeddings',
    title: 'Sistemas RAG, Bases de Datos Vectoriales & Búsqueda Semántica con IA',
    category: 'Inteligencia Artificial',
    priceUSD: 21.00,
    pointsReward: 330,
    vipPointsReward: 105,
    xp: 390,
    duration: 55,
    secretCourse: false,
    description: 'Construye sistemas de IA conectados a documentos privados: Embeddings, similitud coseno, Chunking con solapamiento, búsqueda híbrida y control de alucinaciones.',
    lessons: [
      {
        heading: 'Módulo 1: Qué es RAG (Retrieval-Augmented Generation) vs. Fine-Tuning',
        readTime: '13 min de lectura',
        paragraphs: [
          'Un LLM base no conoce los documentos privados de tu empresa, tus contratos en PDF ni el stock actualizado hace 5 minutos. Muchos principiantes creen que deben reentrenar el modelo (Fine-Tuning) cada vez que cambia un precio, lo cual es lento, costoso y propenso a que el modelo igual invente datos.',
          'La arquitectura RAG (Generación Aumentada por Recuperación) resuelve esto en dos fases: primero busca los fragmentos relevantes en tu base documental verificada y luego se los inyecta en el prompt al modelo exigiéndole que responda basándose exclusivamente en esa evidencia.'
        ],
        keyPoints: [
          'Fine-Tuning enseña estilo, tono o formato; RAG inyecta hechos dinámicos, privados y actualizables al instante.',
          'Con RAG puedes controlar permisos por usuario (qué documentos tiene permiso de consultar cada rol) y citar la página exacta de la fuente.',
          'Si revocas o actualizas un documento en la base vectorial, el cambio se refleja en el próximo segundo sin reentrenar nada.'
        ],
        code: `Flujo de una Consulta en Arquitectura RAG:
1. Usuario pregunta: "¿Cuál es la política de reembolso para planes anuales?"
2. Retriever busca en Base Vectorial -> Recupera Top 3 fragmentos del Manual Legal 2026.
3. Prompt Aumentado = [Instrucción: Responde SOLO usando este contexto] + [Top 3 fragmentos] + [Pregunta].
4. LLM genera respuesta precisa citando el Artículo 4.2 del documento.`,
        warning: '⚠️ El Fine-Tuning NUNCA debe usarse como reemplazo de una base de datos para hechos que cambian con frecuencia (precios, inventario, normativas).',
        checkpoint: {
          question: '¿Por qué la arquitectura RAG es superior al Fine-Tuning cuando un asistente de IA debe responder sobre precios, stock o políticas internas que se actualizan semanalmente?',
          options: [
            'Porque el Fine-Tuning no funciona con textos en español.',
            'Porque RAG permite actualizar, auditar o eliminar documentos en tiempo real en la base de conocimiento y exigir citas textuales, sin costo ni demora de reentrenamiento de pesos neuronales.',
            'Porque RAG no utiliza ningún modelo de lenguaje para redactar la respuesta final.',
            'Porque el Fine-Tuning reduce la velocidad del navegador del usuario.'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 2: Embeddings Vectoriales y Matemática de Similitud Coseno',
        readTime: '14 min de lectura',
        paragraphs: [
          'La búsqueda tradicional por palabras clave (como LIKE en SQL) falla si el usuario busca "cancelar suscripción" pero el documento dice "baja de membresía". Los modelos de Embeddings transforman cualquier oración o párrafo en un vector numérico de alta dimensión (ej. una lista de 768 o 1536 números flotantes) que captura su significado semántico.',
          'En ese espacio multidimensional, dos textos que hablan del mismo concepto quedan ubicados muy cerca entre sí (forman un ángulo pequeño), aunque no compartan ni una sola palabra exacta.'
        ],
        keyPoints: [
          'La Similitud Coseno mide el coseno del ángulo entre dos vectores: 1.0 significa dirección idéntica, 0 ortogonal/sin relación.',
          'Debes usar exactamente el mismo modelo de Embeddings tanto para indexar tus documentos como para vectorizar la pregunta del usuario.',
          'Bases vectoriales populares: pgvector (en PostgreSQL), Pinecone, Qdrant y Weaviate.'
        ],
        code: `-- Consulta de búsqueda semántica con pgvector en PostgreSQL
-- El operador <=> calcula la distancia coseno entre el vector de la pregunta y los documentos
SELECT id, titulo, contenido_chunk,
       1 - (embedding <=> $1::vector) AS similitud_coseno
FROM documentos_chunks
WHERE 1 - (embedding <=> $1::vector) > 0.78
ORDER BY embedding <=> $1::vector ASC
LIMIT 4;`,
        warning: '⚠️ Si indexas tus documentos con un modelo de embeddings (ej. 1536 dimensiones) y luego vectorizas las consultas con otro modelo distinto, los vectores serán incompatibles y devolverán basura.',
        checkpoint: {
          question: '¿Qué ocurre si cambias el modelo de Embeddings en tu servidor de consultas sin volver a re-indexar los vectores almacenados previamente en tu base de datos vectorial?',
          options: [
            'La base de datos traduce automáticamente los vectores antiguos al nuevo espacio geométrico sin pérdida de precisión.',
            'Los vectores de consulta y los de los documentos pertenecerán a espacios latentes incompatibles (o tendrán distinta dimensión), destruyendo la relevancia de la búsqueda por similitud.',
            'Solo se perderán los acentos ortográficos de los documentos.',
            'Las consultas tardarán el doble pero devolverán los mismos resultados.'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 3: Estrategias de Chunking (Fragmentación) y Solapamiento (Overlap)',
        readTime: '14 min de lectura',
        paragraphs: [
          'No puedes convertir un libro PDF de 300 páginas en un único vector, porque el significado específico de cada párrafo se diluiría en un promedio general inútil. Tampoco conviene cortar por palabras sueltas porque pierden todo su contexto. El proceso de dividir documentos en bloques semánticos óptimos se denomina "Chunking".',
          'La práctica profesional consiste en dividir en bloques de entre 300 y 600 tokens respetando límites de párrafos o encabezados Markdown, aplicando un "Chunk Overlap" (solapamiento del 10% al 20% entre el final de un bloque y el comienzo del siguiente) para que ninguna idea quede cortada por la mitad.'
        ],
        keyPoints: [
          'Chunks demasiado grandes -> Introducen ruido en el vector y consumen demasiados tokens en el prompt.',
          'Chunks demasiado pequeños -> Una frase como "El costo es de $45" queda separada del párrafo anterior que decía a qué producto se refería.',
          'Enriquece cada Chunk con metadatos (título del documento, sección, fecha) antes de vectorizarlo.'
        ],
        code: `// Ejemplo de configuración de Recursive Character Text Splitter
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,       // Tamaño objetivo por fragmento
  chunkOverlap: 80,     // 80 caracteres compartidos con el fragmento contiguo
  separators: ["\\n## ", "\\n\\n", "\\n", ". ", " "]
});`,
        warning: '⚠️ Cortar tablas financieras o bloques de código por conteo fijo de caracteres sin respetar saltos de línea rompe las filas y hace que el LLM lea números cruzados.',
        checkpoint: {
          question: '¿Cuál es el propósito técnico del parámetro `chunkOverlap` (solapamiento entre fragmentos consecutivos) al indexar documentos para RAG?',
          options: [
            'Duplicar el tamaño de la base de datos para cobrar más almacenamiento.',
            'Evitar que una oración o idea clave que cae justo en la frontera entre dos fragmentos pierda su contexto antecedente o consecuente al ser recuperada.',
            'Eliminar todas las vocales repetidas del documento original.',
            'Cifrar los fragmentos pares con la clave de los fragmentos impares.'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 4: Búsqueda Híbrida (BM25 + Vectorial), Re-Ranking y Control de Alucinaciones',
        readTime: '14 min de lectura',
        paragraphs: [
          'La búsqueda puramente vectorial es excelente para conceptos semánticos, pero puede fallar cuando el usuario busca un código de pieza exacto ("SKU-9941-X"), un número de ley o un apellido específico. Por eso los sistemas RAG de nivel industrial implementan Búsqueda Híbrida: combinan búsqueda léxica exacta (BM25 / Full-Text Search) + búsqueda vectorial semántica.',
          'Finalmente, para reducir las alucinaciones a casi cero, se instruye al modelo con una cláusula de abstención explícita: si la respuesta no se encuentra en los fragmentos recuperados, debe responder "No cuento con información verificada en la documentación sobre ese punto" en lugar de adivinar.'
        ],
        keyPoints: [
          'Reciprocal Rank Fusion (RRF) combina los rankings de BM25 (palabras exactas) y de Embeddings (significado).',
          'Un modelo Cross-Encoder (Re-Ranker) reordena los Top 15 candidatos para quedarse con los 4 más relevantes.',
          'Pide siempre que el modelo devuelva el ID del fragmento citado junto a cada afirmación.'
        ],
        code: `Prompt de Sistema Anti-Alucinación para RAG:
"Responde a la consulta del usuario utilizando ÚNICAMENTE los fragmentos provistos en <documentos>.
- Si los fragmentos no contienen el dato exacto para responder, di explícitamente: 'Esa información no figura en la documentación oficial.'
- PROHIBIDO extrapolar, asumir o usar conocimiento externo.
- Al final de cada oración, cita la fuente entre corchetes, ej: [Doc-14]."` ,
        warning: '⚠️ Pasar 30 fragmentos irrelevantes al prompt empeora la respuesta por el fenómeno "Lost in the Middle" (los modelos prestan menos atención a la mitad de contextos gigantes). Es mejor filtrar los 4 o 5 mejores.',
        checkpoint: {
          question: '¿Por qué un sistema RAG en producción combina búsqueda vectorial con búsqueda léxica `BM25` (Búsqueda Híbrida)?',
          options: [
            'Porque BM25 es obligatoria para traducir textos del inglés al español.',
            'Porque los embeddings vectoriales capturan bien el significado conceptual, pero BM25 garantiza precisión exacta al buscar códigos alfanuméricos, SKUs, acrónimos o números de serie.',
            'Porque la búsqueda vectorial solo funciona con documentos de menos de 10 palabras.',
            'Para reducir a la mitad el tamaño de la memoria RAM del navegador.'
          ],
          correctIndex: 1
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Qué problema resuelve la arquitectura RAG que el modelo de lenguaje base no puede resolver por sí solo?',
          options: [
            'Permite que el modelo funcione sin necesidad de procesadores ni servidores.',
            'Conecta al modelo en tiempo de consulta con fuentes de datos privadas, actualizadas y verificables, reduciendo las alucinaciones y permitiendo citar la fuente documental.',
            'Aumenta la velocidad de escritura del teclado del usuario.',
            'Traduce automáticamente el código fuente de Python a lenguaje ensamblador.'
          ],
          correctIndex: 1
        },
        {
          question: '2. ¿Qué ocurre si divides tus documentos en Chunks extremadamente pequeños (ej. 15 caracteres sin solapamiento)?',
          options: [
            'Cada vector tendrá el contexto completo de todo el capítulo y la respuesta será perfecta.',
            'Los fragmentos recuperados carecerán de contexto semántico suficiente (frases truncadas sin sujeto ni referencia), impidiendo que el LLM construya una respuesta coherente.',
            'El modelo de lenguaje se reentrenará automáticamente en cada consulta.',
            'La similitud coseno dará siempre exactamente 1.0 en todos los documentos.'
          ],
          correctIndex: 1
        },
        {
          question: '3. ¿En qué consiste el fenómeno "Lost in the Middle" al construir el prompt de contexto en un sistema RAG?',
          options: [
            'En que los paquetes de red TCP/IP se pierden a mitad de camino entre el cliente y el servidor.',
            'En que cuando inyectas decenas de fragmentos largos y ruidosos, el LLM tiende a prestar mayor atención al inicio y al final del contexto, pasando por alto datos ubicados en el medio.',
            'En que la base de datos borra la mitad de las tablas cuando llega al 50% de disco.',
            'En que los vectores pierden sus decimales al dividirse por dos.'
          ],
          correctIndex: 1
        },
        {
          question: '4. ¿Cuál es el mecanismo más efectivo en el prompt de un sistema RAG para impedir que el modelo invente políticas o precios cuando el dato no aparece en los chunks recuperados?',
          options: [
            'Subir la temperatura a 1.5 para que busque respuestas alternativas.',
            'Eliminar todas las restricciones del prompt de sistema.',
            'Aplicar un umbral mínimo de similitud en el Retriever e incluir una instrucción explícita de abstención que obligue al modelo a declarar que el dato no consta en los documentos provistos.',
            'Pedirle que responda en menos de 10 palabras.'
          ],
          correctIndex: 2
        }
      ]
    }
  },
  {
    id: 'js-react-modern',
    title: 'JavaScript Asíncrono, Event Loop & Estado en Aplicaciones Web Modernas',
    category: 'Programación',
    priceUSD: 15.99,
    pointsReward: 270,
    vipPointsReward: 85,
    xp: 330,
    duration: 45,
    secretCourse: false,
    description: 'Domina el Event Loop, Promesas, concurrencia con Promise.all vs secuencial, Closures, inmutabilidad de estado y optimización de renderizado.',
    lessons: [
      {
        heading: 'Módulo 1: El Event Loop, Call Stack, Microtasks y Macrotasks',
        readTime: '11 min de lectura',
        paragraphs: [
          'JavaScript se ejecuta en un único hilo principal (Single-Threaded), pero puede manejar miles de operaciones de red y temporizadores sin congelar la interfaz gracias al Event Loop (Bucle de Eventos) del navegador o de Node.js.',
          'Cuando el Call Stack (pila de ejecución síncrona) queda vacío, el Event Loop procesa primero TODA la cola de Microtareas (como callbacks de Promesas .then y async/await) antes de pasar a ejecutar la siguiente Macrotarea (como setTimeout o setInterval).'
        ],
        keyPoints: [
          'El código síncrono bloqueante (ej. un bucle while pesado) congela el renderizado de la página.',
          'Las Microtasks (Promesas) tienen prioridad estricta sobre las Macrotasks (setTimeout, incluso con 0ms).',
          'Un setTimeout(fn, 0) no se ejecuta en 0ms exactos, sino recién cuando el Call Stack y la cola de Microtasks terminan.'
        ],
        code: `console.log("1. Inicio síncrono");

setTimeout(() => {
  console.log("4. Macrotask (setTimeout 0ms)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask (Promise.then)");
});

console.log("2. Fin síncrono");
// Orden exacto impreso en consola: 1 -> 2 -> 3 -> 4`,
        warning: '⚠️ Si encolas microtareas recursivas infinitas, bloquearás el hilo principal igual que con un bucle infinito síncrono.',
        checkpoint: {
          question: 'En el código anterior, ¿por qué `"3. Microtask (Promise.then)"` se imprime antes que `"4. Macrotask (setTimeout 0ms)"` aunque el timeout tenga 0 milisegundos?',
          options: [
            'Porque setTimeout siempre espera un mínimo obligatorio de 10 segundos en todos los navegadores.',
            'Porque al vaciarse el Call Stack síncrono, el Event Loop vacía primero por completo la cola de Microtareas (Promesas) antes de tomar la primera tarea de la cola de Macrotareas (Timers).',
            'Porque Promise.resolve() se ejecuta en una tarjeta gráfica separada antes que console.log("1").',
            'Porque el orden depende de qué línea esté escrita más abajo en el archivo.'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 2: Async / Await en Serie vs. Concurrencia Paralela con Promise.all',
        readTime: '12 min de lectura',
        paragraphs: [
          'Uno de los cuellos de botella más frecuentes en aplicaciones web es usar múltiples "await" en serie para peticiones HTTP independientes entre sí. Si pides el perfil del usuario (400ms), luego las notificaciones (400ms) y luego el catálogo (400ms) uno detrás de otro, el usuario esperará 1,200ms en blanco.',
          'Cuando las peticiones no dependen una del resultado de la anterior, dispararlas en paralelo con Promise.all() o Promise.allSettled() reduce el tiempo total al de la petición más lenta (400ms), triplicando la velocidad de carga.'
        ],
        keyPoints: [
          'Promise.all([p1, p2, p3]) resuelve cuando todas terminan, o rechaza inmediatamente si una sola falla.',
          'Promise.allSettled([p1, p2, p3]) espera a todas y te informa cuáles tuvieron éxito (fulfilled) y cuáles fallaron (rejected) sin abortar las demás.',
          'Usa await secuencial solo cuando la petición B necesita un dato devuelto por la petición A.'
        ],
        code: `// ❌ LENTO (En serie: 400ms + 400ms + 400ms = 1200ms)
const perfil = await fetchPerfil();
const cursos = await fetchCursos();
const avisos = await fetchAvisos();

// ✅ RÁPIDO (En paralelo con Promise.all: ~400ms en total)
const [perfil, cursos, avisos] = await Promise.all([
  fetchPerfil(),
  fetchCursos(),
  fetchAvisos()
]);`,
        warning: '⚠️ Si una de las 3 promesas dentro de Promise.all() falla y no es una función crítica (ej. cargar un banner secundario), usa Promise.allSettled() para no romper toda la pantalla.',
        checkpoint: {
          question: '¿Cuándo conviene utilizar `Promise.allSettled()` en lugar de `Promise.all()` al cargar un dashboard con 4 llamadas a distintas APIs?',
          options: [
            'Cuando queremos que las 4 llamadas se ejecuten estrictamente una por una en orden secuencial.',
            'Cuando queremos que si una API secundaria falla, las otras 3 respuestas exitosas se puedan mostrar igualmente sin que todo el bloque salte al catch.',
            'Cuando necesitamos cancelar automáticamente las 4 peticiones a mitad de camino.',
            'Cuando las funciones son 100% síncronas y no devuelven promesas.'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 3: Inmutabilidad de Estado, Referencias en Memoria y Efectos Secundarios',
        readTime: '11 min de lectura',
        paragraphs: [
          'En JavaScript, los tipos primitivos (number, string, boolean) se copian por valor, pero los Objetos y Arrays se asignan y comparan por referencia en memoria. Si haces const copia = estadoOriginal y luego modificas copia.puntos = 900, estarás mutando también el objeto original.',
          'Los frameworks reactivos modernos detectan si deben actualizar la pantalla comparando referencias (prevState !== nextState). Si mutas un array con .push() sobre la misma referencia en lugar de crear una copia nueva con el operador spread [...items, nuevo], los componentes pueden no enterarse del cambio.'
        ],
        keyPoints: [
          'Para agregar sin mutar: const nuevaLista = [...listaActual, nuevoItem].',
          'Para eliminar sin mutar: const filtrada = listaActual.filter(item => item.id !== idABorrar).',
          'El operador spread {...obj} hace una copia superficial (Shallow Copy); para objetos anidados profundos usa structuredClone(obj).'
        ],
        code: `// Actualización inmutable de un ítem dentro de un array de estado
function marcarCursoCompletado(cursos, idCurso) {
  return cursos.map(curso =>
    curso.id === idCurso
      ? { ...curso, completado: true, fechaFin: Date.now() }
      : curso
  );
}`,
        warning: '⚠️ Hacer `{ ...usuario }` no clona los sub-objetos internos (`usuario.configuracion`); para clonar toda la jerarquía en navegadores modernos usa `structuredClone(usuario)`.',
        checkpoint: {
          question: '¿Qué diferencia existe entre copiar un objeto con `{ ...objeto }` (Spread) y usar `structuredClone(objeto)`?',
          options: [
            'El operador spread copia también los métodos privados del prototipo y structuredClone solo copia números.',
            'El operador spread realiza una copia superficial (los objetos o arrays anidados en niveles internos siguen compartiendo la misma referencia en memoria), mientras que structuredClone realiza una copia profunda independiente.',
            'structuredClone muta y vacía el objeto original después de copiarlo.',
            'No existe ninguna diferencia técnica entre ambos.'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 4: Debouncing, Throttling y Prevención de Fugas de Memoria (Memory Leaks)',
        readTime: '11 min de lectura',
        paragraphs: [
          'Si conectas un campo de búsqueda directamente a un endpoint del servidor en el evento "input", un usuario que escriba "curso de python" (15 letras) disparará 15 peticiones HTTP seguidas en 2 segundos, saturando tu backend y provocando condiciones de carrera (Race Conditions) donde una respuesta vieja pisa a una nueva.',
          'La técnica de "Debounce" pospone la ejecución de la función hasta que el usuario deje de teclear durante un intervalo determinado (ej. 300ms), enviando una única petición limpia.'
        ],
        keyPoints: [
          'Debounce: Espera a que cese la ráfaga de eventos (ideal para buscadores en vivo y autoguardado).',
          'Throttle: Garantiza que la función se ejecute como máximo 1 vez cada X milisegundos (ideal para eventos de scroll o resize).',
          'Usa AbortController para cancelar peticiones fetch en vuelo si el usuario cambia de pestaña o vuelve a escribir.'
        ],
        code: `function debounce(fn, delayMs = 300) {
  let timerId = null;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delayMs);
  };
}

const buscarEnServidor = debounce((texto) => fetch(\`/api/search?q=\${texto}\`), 300);`,
        warning: '⚠️ Olvidar limpiar intervalos (clearInterval) o EventListeners globales cuando un componente se destruye causa Memory Leaks que degradan el navegador.',
        checkpoint: {
          question: 'Si un usuario escribe 8 letras seguidas (una cada 100ms) en un buscador que tiene aplicado un `debounce` de `300ms`, ¿cuántas peticiones HTTP se enviarán al servidor?',
          options: [
            '8 peticiones en total, pero espaciadas cada 300ms una de otra.',
            '2 peticiones: una en la primera letra y otra en la última.',
            '1 única petición, que se ejecutará 300ms después de que el usuario haya presionado la octava y última tecla.',
            'Ninguna petición, porque clearTimeout bloquea permanentemente la función.'
          ],
          correctIndex: 2
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. Si necesitas ejecutar 3 llamadas `fetch` independientes que tardan `500ms` cada una, ¿cuánto tardará aproximadamente resolverlas con `Promise.all()` frente a usar 3 `await` secuenciales?',
          options: [
            '~1,500ms con Promise.all() y ~500ms con await secuenciales.',
            '~500ms con Promise.all() (concurrencia paralela limitada por la más lenta) frente a ~1,500ms con 3 await secuenciales (suma de las tres).',
            'Ambas opciones tardarán exactamente 1,500ms porque JavaScript tiene un solo hilo.',
            'Promise.all() tardará 0ms porque no espera la respuesta de la red.'
          ],
          correctIndex: 1
        },
        {
          question: '2. ¿Qué ocurre en el siguiente código: `const a = { puntos: 100 }; const b = a; b.puntos = 250; console.log(a.puntos);`?',
          options: [
            'Imprime `100`, porque `b` es una copia independiente de `a`.',
            'Lanza un `TypeError` porque `a` fue declarada con `const` y sus propiedades no pueden cambiar.',
            'Imprime `250`, porque `a` y `b` apuntan a la misma referencia de objeto en memoria y `const` solo impide reasignar la referencia de la variable, no mutar sus propiedades internas.',
            'Imprime `undefined`.'
          ],
          correctIndex: 2
        },
        {
          question: '3. ¿Cuál es la diferencia práctica entre aplicar `Debounce` y aplicar `Throttle` a un evento de interfaz?',
          options: [
            'Debounce solo funciona con eventos de teclado y Throttle solo funciona con clics del mouse.',
            'Debounce agrupa una ráfaga continua y ejecuta la función recién cuando el usuario se detiene por X ms; Throttle ejecuta la función a un ritmo periódico máximo (ej. 1 vez cada 200ms) mientras dura el movimiento.',
            'Throttle cancela las promesas pendientes y Debounce recarga la página.',
            'Son dos nombres distintos para exactamente el mismo algoritmo.'
          ],
          correctIndex: 1
        },
        {
          question: '4. ¿Para qué se utiliza la interfaz `AbortController` junto con `fetch()` en aplicaciones web modernas?',
          options: [
            'Para cerrar la sesión del usuario cuando expira su cookie.',
            'Para cancelar activamente una petición HTTP en curso (por ejemplo, si el usuario cambió de filtro antes de que llegara la respuesta anterior), evitando condiciones de carrera.',
            'Para encriptar las cabeceras HTTP desde el navegador.',
            'Para aumentar el límite de conexiones simultáneas del servidor.'
          ],
          correctIndex: 1
        }
      ]
    }
  },
  {
    id: 'fin-b2b-pricing',
    title: 'Unit Economics, Punto de Equilibrio & Estrategia de Precios (Pricing)',
    category: 'Finanzas',
    priceUSD: 16.00,
    pointsReward: 260,
    vipPointsReward: 80,
    xp: 310,
    duration: 45,
    secretCourse: false,
    description: 'Domina Margen Bruto vs. Margen de Contribución, cálculo de Punto de Equilibrio (Break-Even), Value-Based Pricing y elasticidad de precios.',
    lessons: [
      {
        heading: 'Módulo 1: Costos Fijos, Costos Variables y Margen de Contribución Unitario',
        readTime: '11 min de lectura',
        paragraphs: [
          'Muchos emprendedores confunden facturación con ganancia y quiebran vendiendo mucho. Para entender la rentabilidad real de cada venta debes separar los Costos Variables (aquellos que sólo existen cuando vendes una unidad adicional: comisión de pasarela de pago, costo de mercadería, tokens de API por usuario) de los Costos Fijos (alquiler, sueldos fijos, servidores base que pagas vendas 0 o 1,000 unidades).',
          'El Margen de Contribución Unitario es el Precio de Venta menos el Costo Variable Unitario. Ese dinero es lo que "contribuye" cada venta individual a pagar tus Costos Fijos mensuales; una vez cubiertos los costos fijos, cada dólar de margen de contribución adicional es utilidad neta pura.'
        ],
        keyPoints: [
          'Margen de Contribución ($) = Precio de Venta Unitario - Costo Variable Unitario.',
          'Razón de Contribución (%) = (Margen de Contribución / Precio de Venta) × 100.',
          'Si tu Margen de Contribución es negativo, pierdes más dinero cuantas más unidades vendes.'
        ],
        code: `Análisis Unitario de un Producto Digital de $50 USD:
- Precio de Venta:                     $50.00 USD
- Costo Variable Pasarela (4% + $0.5): -$2.50 USD
- Costo Variable Soporte/API por uso:  -$3.50 USD
-------------------------------------------------
= Margen de Contribución Unitario:     $44.00 USD (88% de margen de contribución)`,
        warning: '⚠️ Hacer un descuento del 30% sobre el precio final NO reduce tu ganancia un 30%: si tu margen era del 40%, un descuento del 30% destruye el 75% de tu ganancia por unidad.',
        checkpoint: {
          question: 'Si vendes un servicio a $100 USD y tienes costos variables de $60 USD por cada cliente atendido (Margen de Contribución de $40 USD), ¿qué ocurre con tu ganancia unitaria si ofreces un descuento del 20% (precio final $80 USD)?',
          options: [
            'Tu ganancia por venta baja un 20% (pasa de $40 a $32 USD).',
            'Tu ganancia por venta cae un 50% (pasa de $40 a $20 USD, porque los $60 USD de costo variable siguen siendo fijos por unidad).',
            'Tu ganancia por venta sube porque los costos variables también bajan un 20% automáticamente.',
            'Tu margen de contribución pasa a ser $80 USD.'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 2: Cálculo del Punto de Equilibrio (Break-Even Point)',
        readTime: '11 min de lectura',
        paragraphs: [
          'El Punto de Equilibrio (Break-Even) indica exactamente cuántas unidades necesitas vender en un mes para que tu utilidad operativa sea $0 (ni ganas ni pierdes: cubres el 100% de tus costos fijos y variables).',
          'La fórmula es: Punto de Equilibrio (en unidades) = Costos Fijos Mensuales Totales / Margen de Contribución Unitario. A partir de la unidad siguiente al punto de equilibrio, la empresa entra en zona de ganancias reales.'
        ],
        keyPoints: [
          'Break-Even (Unidades) = Costos Fijos Totales / (Precio Unitario - Costo Variable Unitario).',
          'Para bajar tu punto de equilibrio tienes 3 palancas: reducir costos fijos, subir el precio o bajar el costo variable.',
          'En software y educación digital, el alto margen de contribución (>85%) permite alcanzar el punto de equilibrio con muy pocas ventas.'
        ],
        code: `Cálculo de Punto de Equilibrio Mensual:
- Costos Fijos Mensuales (Herramientas, Servidores, Sueldo base): $2,200 USD
- Margen de Contribución por Curso Vendido:                       $44 USD
👉 Punto de Equilibrio = $2,200 / $44 = 50 ventas al mes.
(De la venta #1 a la #50 pagas la estructura; desde la venta #51 ganas $44 limpios por cada venta).`,
        warning: '⚠️ Nunca dividas los Costos Fijos por el Precio Bruto de venta olvidando restar antes los Costos Variables, o subestimarás cuántas ventas necesitas.',
        checkpoint: {
          question: 'Una empresa tiene Costos Fijos de $3,000 USD/mes. Su producto se vende a $50 USD y tiene un Costo Variable de $20 USD por unidad. ¿Cuántas unidades debe vender al mes para alcanzar el Punto de Equilibrio?',
          options: [
            '60 unidades ($3,000 dividido el precio de venta de $50).',
            '150 unidades ($3,000 dividido el costo variable de $20).',
            '100 unidades ($3,000 dividido el margen de contribución unitario de $30).',
            '42 unidades.'
          ],
          correctIndex: 2
        }
      },
      {
        heading: 'Módulo 3: Cost-Plus Pricing vs. Value-Based Pricing (Precio Basado en Valor)',
        readTime: '12 min de lectura',
        paragraphs: [
          'Fijar precios sumando tus horas o costos más un 20% (Cost-Plus Pricing) es la peor estrategia en servicios profesionales y tecnología: te castiga por volverte más rápido y eficiente. Al cliente corporativo no le importa cuántas horas tardaste en escribir un script; le importa cuánto dinero le hace ganar o ahorrar ese script.',
          'Con Value-Based Pricing (Precio Basado en Valor), primero cuantificas el impacto económico anual que el problema le genera al cliente (ej. pierde $24,000 USD/año en tareas manuales y errores) y posicionas tu solución como una fracción de ese retorno (ej. $2,400 USD, ofreciendo un ROI de 10x).'
        ],
        keyPoints: [
          'Nunca des un presupuesto sin antes diagnosticar cuánto le cuesta hoy el problema al cliente.',
          'Ancla tu precio contra el costo de la inacción (lo que perderá en los próximos 12 meses si no lo resuelve).',
          'Presenta 3 opciones escalonadas (Esencial, Profesional, Élite) para que el cliente compare tus planes entre sí y no contra la competencia.'
        ],
        code: `Conversación de Anclaje de Valor B2B:
- Impacto detectado: El equipo pierde 40 hs/mes cargando facturas ($1,500 USD/mes = $18,000 USD/año).
- Propuesta de Automatización Llave en Mano: $1,800 USD pago único.
- Argumento financiero: "El sistema se paga solo en los primeros 36 días y les ahorra $16,200 USD netos este año."`,
        warning: '⚠️ Competir por ser "el más barato del mercado" atrae a los clientes más conflictivos y te deja sin margen para ofrecer un servicio de excelencia.',
        checkpoint: {
          question: '¿Por qué el modelo de cobro por hora (o Cost-Plus) penaliza a los profesionales y empresas tecnológicas más experimentadas?',
          options: [
            'Porque es ilegal facturar por proyecto cerrado en empresas de software.',
            'Porque cuanto más experto y automatizado eres, menos horas tardas en resolver un problema crítico, por lo que cobrando por hora ganas menos dinero entregando un resultado superior y más rápido.',
            'Porque los clientes prefieren que un proyecto tarde 12 meses en lugar de 1 semana.',
            'Porque el cobro por hora obliga a tener al menos 50 empleados.'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 4: Psicología de Precios, Upsells, Cross-Sells y Maximización del Ticket Promedio (AOV)',
        readTime: '11 min de lectura',
        paragraphs: [
          'El costo más difícil y caro de cualquier negocio es conseguir que un desconocido saque la tarjeta por primera vez (CAC). Una vez que el cliente confía y está comprando, aumentar el Ticket Promedio de Orden (AOV) mediante un Order Bump o un Upsell complementario multiplica el margen neto de forma inmediata.',
          'Un "Order Bump" es un complemento de bajo costo y alta utilidad que se añade con 1 solo clic en el checkout (ej. "+$9 USD por las plantillas listas para usar"), mientras que un "Upsell" ofrece la versión acelerada o membresía completa justo después de la compra.'
        ],
        keyPoints: [
          'AOV (Average Order Value) = Ingresos Totales / Número Total de Pedidos.',
          'Si el 30% de tus compradores añade un Order Bump de $15 USD, tu ingreso sube sin gastar $1 más en marketing.',
          'El complemento debe ahorrar tiempo o acelerar la implementación del producto principal.'
        ],
        code: `Impacto de un Order Bump en la Rentabilidad Neta:
- 100 ventas de curso a $20 USD (CAC $12 USD) -> Utilidad sin Bump: $800 USD.
- Añades Order Bump de $15 USD (35% lo acepta = +$525 USD puros sin costo publicitario extra).
👉 La utilidad neta salta de $800 a $1,325 USD (+65.6% más ganancia neta).`,
        warning: '⚠️ El Order Bump debe entenderse en una sola oración; si requiere 5 párrafos de explicación, distraerá al comprador de completar la compra principal.',
        checkpoint: {
          question: '¿Por qué incrementar el Ticket Promedio (AOV) mediante un Order Bump o paquete VIP impacta de forma desproporcionada en la utilidad neta final?',
          options: [
            'Porque los ingresos de un Order Bump están exentos de pasarelas de pago.',
            'Porque el Costo de Adquisición del Cliente (CAC) ya fue absorbido por la venta principal, por lo que el margen del complemento va casi íntegro a ganancia neta.',
            'Porque obliga a todos los visitantes a comprar aunque no quieran el producto principal.',
            'Porque reduce el precio del producto base a cero.'
          ],
          correctIndex: 1
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Qué indica que un negocio tenga alta facturación mensual pero un Margen de Contribución Unitario negativo?',
          options: [
            'Que alcanzará el punto de equilibrio automáticamente cuando duplique sus ventas.',
            'Que el costo directo de producir y entregar cada unidad supera su precio de venta, por lo que cuantas más unidades venda, mayores serán sus pérdidas operativas.',
            'Que sus costos fijos de alquiler son demasiado bajos.',
            'Que tiene un exceso de liquidez en caja.'
          ],
          correctIndex: 1
        },
        {
          question: '2. Si tus Costos Fijos son $4,000 USD/mes, tu precio de venta es $100 USD y tu costo variable unitario es $20 USD, ¿cuál es tu utilidad neta en un mes en que vendes 70 unidades?',
          options: [
            '+$7,000 USD de utilidad neta.',
            '+$3,000 USD de utilidad neta.',
            '+$1,600 USD de utilidad neta (50 unidades cubren los $4,000 de costos fijos, y las 20 unidades restantes aportan $80 USD de margen limpio cada una).',
            '$0 USD (queda exactamente en punto de equilibrio).'
          ],
          correctIndex: 2
        },
        {
          question: '3. En `Value-Based Pricing`, ¿cuál es el factor determinante para fijar el precio de una solución o consultoría B2B?',
          options: [
            'La cantidad de líneas de código multiplicada por el costo de la electricidad.',
            'El retorno económico cuantificable (ahorro de costos, reducción de errores o incremento de ingresos) que la solución genera para el negocio del cliente.',
            'Cobrar exactamente un 10% menos que el competidor más barato del mercado.',
            'El salario mínimo dividido por la cantidad de horas del mes.'
          ],
          correctIndex: 1
        },
        {
          question: '4. ¿Qué característica debe tener un `Order Bump` en la pantalla de pago para maximizar la conversión sin generar abandono del carrito?',
          options: [
            'Ser un producto de otra industria completamente distinta y costar 5 veces más que el producto principal.',
            'Ser un acelerador o complemento natural del producto principal (ej. plantillas o scripts listos para usar), de bajo precio relativo y comprensible en una sola línea.',
            'Exigir que el usuario llene un segundo formulario de 10 campos antes de marcar la casilla.',
            'Ocultar su precio hasta después de haber cobrado la tarjeta.'
          ],
          correctIndex: 1
        }
      ]
    }
  },
  {
    id: 'mkt-copywriting-funnels',
    title: 'Copywriting Científico, Psicología de Objeciones & Embudos de Venta',
    category: 'Diseño & Marketing',
    priceUSD: 14.50,
    pointsReward: 250,
    vipPointsReward: 80,
    xp: 300,
    duration: 40,
    secretCourse: false,
    description: 'Domina los 5 Niveles de Consciencia de Schwartz, frameworks PAS y AIDA, desarme de objeciones, inversión de riesgo y secuencias de conversión.',
    lessons: [
      {
        heading: 'Módulo 1: Los 5 Niveles de Consciencia del Mercado (Eugene Schwartz)',
        readTime: '10 min de lectura',
        paragraphs: [
          'El error más común al redactar una página de ventas o un anuncio es escribir igual para todo el mundo. Eugene Schwartz demostró en "Breakthrough Advertising" que todo comprador potencial se encuentra en uno de 5 niveles de consciencia, y el titular debe adaptarse exactamente a ese nivel:',
          '1) Inconsciente (no sabe que tiene un problema), 2) Consciente del Problema (siente el dolor pero no conoce soluciones), 3) Consciente de la Solución (sabe que existen métodos pero no conoce tu producto), 4) Consciente del Producto (conoce tu oferta pero duda si es para él), 5) Totalmente Consciente (solo necesita el precio y un disparador para comprar hoy).'
        ],
        keyPoints: [
          'A un público Consciente del Problema se le entra por el síntoma concreto y el costo de no resolverlo.',
          'A un público Consciente de la Solución se le demuestra por qué tu mecanismo único supera a las alternativas tradicionales.',
          'Al público Totalmente Consciente no le des 10 páginas de introducción: dale la oferta directa, el bono y el botón.'
        ],
        code: `Adaptación del Titular según el Nivel de Consciencia:
- Nivel 2 (Consciente del Problema): "¿Pierdes 2 horas al día conciliando pagos a mano en Excel?"
- Nivel 3 (Consciente de la Solución): "Cómo automatizar tu facturación en 5 minutos sin contratar programadores."
- Nivel 5 (Totalmente Consciente): "Pase Anual SkillVault PRO — Activa hoy tu acceso con +100 VP de bono."`,
        warning: '⚠️ Hablar de características técnicas y descuentos en la primera línea a un usuario que aún no entiende qué problema resuelves genera rechazo inmediato.',
        checkpoint: {
          question: 'Según la escala de Eugene Schwartz, ¿qué enfoque de titular debe usarse cuando te diriges a una audiencia en el Nivel 3 ("Consciente de la Solución" pero que aún no conoce tu producto)?',
          options: [
            'Mostrar únicamente el logotipo de la marca y el botón de pago sin ningún texto explicativo.',
            'Presentar el resultado deseado y explicar el "Mecanismo Único" por el cual tu método logra ese resultado de forma más rápida o segura que las opciones genéricas.',
            'Evitar mencionar el resultado o beneficio hasta el final de los términos legales.',
            'Hablar de temas generales de entretenimiento que no tengan relación con la industria.'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 2: Frameworks de Persuasión Estructurada (PAS y AIDA)',
        readTime: '10 min de lectura',
        paragraphs: [
          'Los grandes copywriters no escriben por "inspiración", sino ensamblando bloques lógicos probados. El framework más efectivo para páginas de aterrizaje, correos y guiones de video es P-A-S: Problema -> Agitación -> Solución.',
          'Primero describes el Problema con las mismas palabras que usa el cliente en su mente; luego Agitas mostrando las consecuencias reales (tiempo perdido, dinero desperdiciado, frustración) si todo sigue igual dentro de 6 meses; y finalmente presentas tu producto como el puente lógico e inevitable hacia la Solución.'
        ],
        keyPoints: [
          'Característica vs. Beneficio: "Tiene 4 módulos en texto" es una característica; "Aprende a tu ritmo en 40 minutos y aplícalo hoy mismo" es el beneficio.',
          'Usa la prueba del "¿Y qué con eso?": después de cada afirmación técnica, traduce cómo mejora la vida o el bolsillo del lector.',
          'Mantén párrafos cortos de 2 a 3 líneas para facilitar la lectura escaneable (Skimming).'
        ],
        code: `Aplicación Práctica del Framework P-A-S:
[P - Problema]: Tienes visitantes entrando a tu web todos los días, pero el 98% se va sin comprar.
[A - Agitación]: Cada semana que pasa con un embudo roto estás pagando tráfico y esfuerzo para regalarle clientes a tu competencia.
[S - Solución]: Con el sistema de conversión de 4 pasos optimizarás tus titulares y tu checkout hoy mismo para duplicar tus cierres.`,
        warning: '⚠️ Agitar el problema no significa exagerar con promesas irreales; significa cuantificar con realismo el costo de seguir posponiendo la solución.',
        checkpoint: {
          question: 'Al redactar propuestas de valor, ¿cuál es la diferencia entre una "Característica Técnica" y un "Beneficio Transformacional"?',
          options: [
            'La característica es una opinión subjetiva y el beneficio es el código fuente del programa.',
            'La característica describe qué tiene o cómo está construido el producto (ej. "Base de datos indexada B-Tree"); el beneficio traduce qué gana o ahorra el usuario gracias a eso (ej. "Encuentra cualquier factura de tus clientes en 0.1 segundos").',
            'Los beneficios solo se usan en productos gratuitos y las características en productos pagos.',
            'Son exactamente lo mismo escrito con distinta tipografía.'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 3: Matriz de Desarme de Objeciones e Inversión de Riesgo (Risk Reversal)',
        readTime: '10 min de lectura',
        paragraphs: [
          'En el instante previo a comprar, todo cliente tiene 4 objeciones universales silenciosas: 1) "¿Funcionará para mi caso específico?", 2) "¿Tengo el tiempo/capacidad para implementarlo?", 3) "¿Vale lo que cuesta?", y 4) "¿Qué pasa si me arrepiento?".',
          'En lugar de ignorar esas dudas, una página de alta conversión las responde proactivamente mediante casos de estudio, demostración del producto por dentro y una Garantía de Inversión de Riesgo (Risk Reversal) que transfiere el riesgo del comprador hacia el vendedor.'
        ],
        keyPoints: [
          'Una sección de Preguntas Frecuentes (FAQ) estratégica no es para relleno: sirve para derribar las 5 objeciones principales de compra.',
          'Muestra capturas o vistas previas reales de lo que recibirá adentro inmediatamente tras pagar.',
          'Cuanto menor sea el riesgo percibido por el comprador, mayor será la tasa de cierre.'
        ],
        code: `Desarme de las 3 Objeciones Clásicas en la Página de Ventas:
1. Objeción de Tiempo -> "Módulos directos al grano de 10 minutos con plantillas copiables."
2. Objeción de Nivel  -> "Explicado desde cero paso a paso, sin requerir conocimientos previos."
3. Objeción de Valor  -> "Incluye acceso a la Bóveda de Herramientas y Certificados Verificados."`,
        warning: '⚠️ Si ocultas qué incluye exactamente el producto o cómo es por dentro, la incertidumbre frena la compra.',
        checkpoint: {
          question: '¿Cuál es el objetivo estratégico de la sección de Preguntas Frecuentes (FAQ) ubicada justo debajo de la tabla de precios?',
          options: [
            'Aumentar la longitud del texto únicamente para que la barra de scroll sea más pequeña.',
            'Explicar la historia del lenguaje HTML desde 1991.',
            'Anticipar y resolver racionalmente las objeciones finales de compra (tiempo, nivel requerido, soporte, garantía y métodos de acceso) sin que el usuario tenga que abandonar la página.',
            'Reemplazar el botón de compra por un formulario postal.'
          ],
          correctIndex: 2
        }
      },
      {
        heading: 'Módulo 4: Secuencias de Email Automatizadas y Entregabilidad (SPF, DKIM y DMARC)',
        readTime: '10 min de lectura',
        paragraphs: [
          'Más del 70% de las personas que visitan una oferta por primera vez no compran en esa primera sesión. Si capturas su contacto ofreciendo un recurso o curso introductorio gratuito (Lead Magnet), puedes activar una secuencia automatizada de correos que aporte valor real y convierta a lo largo de los días siguientes.',
          'Para que tus correos lleguen a la bandeja principal y no a la carpeta de Spam, tu dominio de envío debe tener configurados en sus registros DNS tres protocolos de autenticación criptográfica: SPF, DKIM y DMARC.'
        ],
        keyPoints: [
          'SPF declara qué servidores tienen permiso para enviar correos en nombre de tu dominio.',
          'DKIM añade una firma criptográfica al encabezado de cada correo para probar que no fue alterado en tránsito.',
          'Secuencia ideal de 4 correos: 1) Entrega inmediata de valor, 2) Caso práctico + error común, 3) Resolución de objeción principal, 4) Invitación clara a pasar al nivel VIP.'
        ],
        code: `Arquitectura de Secuencia Automatizada Post-Registro (4 Días):
- Día 0 (Inmediato): Entrega del acceso gratuito + Victoria rápida en 5 minutos.
- Día 1 (Educativo): "El error que comete el 80% al intentar [Habilidad] y cómo evitarlo."
- Día 2 (Prueba):    Caso real desglosado paso a paso + Presentación del Pase VIP.
- Día 4 (Cierre):    Resumen de beneficios + Bono de puntos por activación.`,
        warning: '⚠️ Enviar correos masivos desde una cuenta gratuita (@gmail.com) o desde un dominio sin registros SPF y DKIM hará que Gmail y Outlook bloqueen tus envíos.',
        checkpoint: {
          question: '¿Qué función técnica cumplen los registros DNS `SPF`, `DKIM` y `DMARC` en una estrategia de email marketing o notificaciones transaccionales?',
          options: [
            'Cambian automáticamente el diseño gráfico del correo a modo oscuro.',
            'Autentican criptográficamente la identidad del dominio remitente ante proveedores como Gmail/Outlook, evitando la suplantación de identidad (Spoofing) y asegurando que los correos lleguen a la bandeja principal en vez de Spam.',
            'Traducen el asunto del correo al idioma del destinatario.',
            'Permiten enviar archivos adjuntos de más de 50 GB por correo.'
          ],
          correctIndex: 1
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Qué ocurre si le muestras un anuncio centrado únicamente en un "15% de descuento hoy" a una audiencia que se encuentra en el Nivel 1 o 2 de Consciencia (apenas consciente del problema y que no te conoce)?',
          options: [
            'Tendrá la tasa de conversión más alta posible porque a todo el mundo le gustan los descuentos.',
            'Fracasará porque el usuario aún no comprende cómo tu mecanismo resuelve su problema ni confía en tu autoridad; el descuento solo funciona en los niveles finales de consciencia (Nivel 4 y 5).',
            'El navegador bloqueará el anuncio automáticamente.',
            'Convertirá exactamente igual que con cualquier otro mensaje.'
          ],
          correctIndex: 1
        },
        {
          question: '2. En el framework de copywriting `P-A-S`, ¿qué objetivo cumple específicamente la etapa intermedia de "Agitación"?',
          options: [
            'Usar signos de exclamación en todas las palabras del texto.',
            'Hacer tangible y cuantificable el costo real (en tiempo, dinero o estrés) de dejar el problema sin resolver, elevando la prioridad de tomar acción ahora.',
            'Explicar la biografía académica de los programadores de la empresa.',
            'Ocultar la solución para que el usuario tenga que adivinarla.'
          ],
          correctIndex: 1
        },
        {
          question: '3. ¿Cuál de las siguientes oraciones está redactada como un "Beneficio claro orientado a resultados" en lugar de una mera característica técnica?',
          options: [
            '"Curso grabado en formato MP4 con códec H.264 a 60 cuadros por segundo."',
            '"Plataforma alojada en servidores Linux con 16 GB de memoria RAM."',
            '"Domina la creación de bots de automatización en una tarde y ahorra 8 horas de carga manual cada semana."',
            '"Incluye un archivo PDF de 42 páginas con fuente tamaño 12."'
          ],
          correctIndex: 2
        },
        {
          question: '4. ¿Por qué es fundamental combinar un curso o recurso introductorio gratuito con una secuencia de nutrición posterior?',
          options: [
            'Porque el 100% de los visitantes compra el plan más caro en los primeros 3 segundos de entrar a una web.',
            'Porque permite demostrar primero la calidad pedagógica de tu academia, generar una victoria rápida real en el alumno y construir la confianza necesaria para que un alto porcentaje decida adquirir los cursos pagos o la Membresía VIP.',
            'Porque los buscadores prohíben tener páginas sin cursos gratuitos.',
            'Para llenar la base de datos de usuarios inactivos sin ofrecerles nunca ningún producto.'
          ],
          correctIndex: 1
        }
      ]
    }
  },
  {
    id: 'secret-high-ticket-agency',
    title: '🔒 [CURSO SECRETO VIP] Agencia de Automatización IA & Ventas B2B High-Ticket ($2,000+ USD)',
    category: 'Curso Secreto VIP',
    priceUSD: 0,
    pointsReward: 550,
    vipPointsReward: 200,
    xp: 650,
    duration: 65,
    secretCourse: true,
    requiredRewardId: 'vip-rw-secret-agency',
    description: 'Masterclass Secreta VIP: cómo empaquetar tus habilidades de programación e IA en servicios B2B de $1,500 a $4,000 USD con abono recurrente de mantenimiento.',
    lessons: [
      {
        heading: 'Módulo 1: Selección de Nicho Rentable y Empaquetado de Oferta "Productized Service"',
        readTime: '16 min de lectura',
        paragraphs: [
          'Vender "desarrollo a medida general" te obliga a presupuestar desde cero cada vez, lidiar con alcances infinitos y competir por precio con miles de freelancers. El modelo de alta rentabilidad es el "Servicio Productizado" (Productized Service): resolver UN problema específico para UN tipo de empresa con un alcance fijo, plazo fijo y precio fijo.',
          'Los mejores nichos B2B para automatización e IA son aquellos con alto valor por cliente y cuellos de botella operativos: clínicas privadas, estudios jurídicos/contables, inmobiliarias, e-commerce medianos y empresas de logística.'
        ],
        keyPoints: [
          'No vendas "horas de programación en Python o IA"; vende "Sistema de Respuesta, Calificación y Agendamiento Automático 24/7".',
          'Al estandarizar el 80% de la arquitectura técnica, entregas en 5 días lo que a otro le toma 2 meses.',
          'Tu margen bruto supera el 85% porque reutilizas tus propios módulos y plantillas probadas.'
        ],
        code: `Comparativa de Posicionamiento Comercial:
❌ Freelancer Genérico: "Hago scripts en Python, páginas web y chatbots a $15/hora."
✅ Oferta B2B Productizada: "Implementamos en 7 días un Agente de IA + CRM que califica consultas y agenda reuniones en automático para Clínicas Dentales — Garantizando 0 leads perdidos fuera de horario."`,
        warning: '⚠️ Nunca aceptes clientes de 10 industrias distintas en tu primer trimestre; al enfocarte en 1 vertical puedes reutilizar exactamente el mismo sistema y casos de éxito.',
        checkpoint: {
          question: '¿Cuál es la ventaja operativa central de un "Servicio Productizado" (Productized Service) frente a una agencia tradicional a medida?',
          options: [
            'Permite cobrar menos de $20 USD por proyecto trabajando 80 horas semanales.',
            'Estandariza la solución para un dolor específico de un nicho, permitiendo reutilizar el 80% de la infraestructura técnica, entregar en días en vez de meses y escalar márgenes sin depender de horas hombre.',
            'Obliga a escribir todo el código desde cero en cada nuevo cliente sin reutilizar funciones.',
            'Elimina la necesidad de firmar acuerdos de alcance con el cliente.'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 2: Auditoría Diagnóstica y Cálculo de ROI en la Llamada de Descubrimiento',
        readTime: '17 min de lectura',
        paragraphs: [
          'En ventas High-Ticket ($1,500 a $4,000 USD) nunca se envía un PDF con precios por chat en frío. El proceso profesional consta de una llamada diagnóstica de 20 minutos estructurada como la consulta de un médico: antes de recetar tu solución, cuantificas con los propios números del cliente cuánto dinero pierde cada mes por su proceso actual.',
          'Haces tres preguntas financieras clave: 1) ¿Cuántas consultas o pedidos reciben al mes?, 2) ¿Cuántos se pierden o demoran por falta de seguimiento inmediato?, y 3) ¿Cuál es el valor promedio de cada cliente cerrado (LTV)?'
        ],
        keyPoints: [
          'Si el cliente pierde 10 ventas al mes de $300 USD por responder tarde, su problema le cuesta $3,000 USD/mes ($36,000 USD/año).',
          'Cuando el propio prospecto dice en voz alta que pierde $36,000 USD al año, una inversión de $2,000 USD por resolverlo se percibe como una ganga absoluta.',
          'Vende siempre contra el costo comprobado del problema, nunca contra tu costo de vida.'
        ],
        code: `Guion de Cuantificación de ROI en Vivo:
1. "Me comentas que reciben 300 consultas mensuales y tardan 6 horas en responder."
2. "Si recuperar solo el 5% de esas consultas representa 15 ventas nuevas a $200 USD cada una, hablamos de $3,000 USD extra cada mes ($36,000 al año)."
3. "Nuestro sistema de implementación completa tiene una inversión única de $1,800 USD: con el primer mes de mejora queda 100% amortizado."`,
        warning: '⚠️ Si pasas los primeros 15 minutos de la reunión hablando de APIs, vectores, JSON y servidores en vez de hablar del negocio del cliente, perderás la venta.',
        checkpoint: {
          question: 'Durante una llamada de diagnóstico B2B, ¿por qué es indispensable que el propio cliente calcule junto a ti cuánto dinero pierde al mes por el problema antes de revelarle tu precio?',
          options: [
            'Para alargar la reunión artificialmente a más de 3 horas.',
            'Porque establece un ancla financiera objetiva (ej. $30,000 USD/año de pérdida) contra la cual tu honorario de implementación ($2,000 USD) se evalúa como una inversión de alto retorno y no como un gasto.',
            'Para cobrarle una multa impositiva al finalizar la llamada.',
            'Porque los clientes B2B solo compran si les explicas primero cómo funciona el Event Loop de JavaScript.'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 3: Estructura de Cobro Híbrida: Setup Inicial + Iguala Mensual Recurrente (Retainer)',
        readTime: '16 min de lectura',
        paragraphs: [
          'El secreto para que una agencia o consultora tecnológica construya riqueza predecible es no quedarse únicamente con el pago único de instalación (Setup Fee). Toda implementación de software, bots o automatizaciones requiere monitoreo de APIs, actualizaciones de prompts, servidores y optimización mensual.',
          'Por eso estructuramos cada contrato en dos partes: 1) Pago de Implementación Inicial (ej. $1,800 USD, 50% al iniciar y 50% contra entrega en 7 días) + 2) Abono de Mantenimiento, Soporte y Optimización Continua (ej. $250 a $400 USD/mes recurrentes).'
        ],
        keyPoints: [
          'Con solo 10 clientes activos en abono de $300 USD/mes, tienes $3,000 USD/mes de ingreso base recurrente antes de vender un solo proyecto nuevo.',
          'Define claramente un SLA (Acuerdo de Nivel de Servicio) y qué incluye el abono mensual (monitoreo, reportes, consumo de API hasta X volumen).',
          'Ofrece bonificar el primer mes de mantenimiento si abonan el 100% del Setup al contado.'
        ],
        code: `Economía de una Cartera de 8 Clientes B2B en 6 Meses:
- Ingresos por Setup Inicial (8 × $1,800 USD):     $14,400 USD
- Ingreso Recurrente Mensual (8 × $300 USD/mes):    $2,400 USD / mes ($28,800 USD/año ARR)
- Tiempo operativo de mantenimiento con plantillas: ~4 horas totales a la semana.`,
        warning: '⚠️ Nunca incluyas "desarrollo ilimitado de nuevas funciones" dentro del abono básico mensual; el abono cubre mantenimiento, hosting y optimización del flujo contratado.',
        checkpoint: {
          question: '¿Qué riesgo protege definir claramente el alcance del Abono Mensual (Retainer) separando el "Mantenimiento y Monitoreo" del "Desarrollo de Nuevos Módulos"?',
          options: [
            'Evita tener que emitir facturas por el servicio.',
            'Previene el "Scope Creep" (expansión descontrolada de alcance), garantizando que el soporte mensual sea altamente rentable y que cualquier nuevo sistema adicional se cotice como un nuevo proyecto.',
            'Impide que el cliente pueda usar el software los fines de semana.',
            'Obliga al cliente a programar sus propias actualizaciones.'
          ],
          correctIndex: 1
        }
      },
      {
        heading: 'Módulo 4: Prospección B2B con Demos Personalizadas y Cierre de Contratos',
        readTime: '16 min de lectura',
        paragraphs: [
          'Los dueños de empresas reciben decenas de correos genéricos copiados y pegados que borran sin leer. La forma de lograr tasas de respuesta superiores al 25% es enviar una micro-demostración personalizada de 90 segundos (en video Loom o prototipo funcional) usando el nombre y caso real de su empresa.',
          'Cuando un dueño de clínica o inmobiliaria ve un prototipo funcionando con su propio logo que responde en 2 segundos una consulta real de sus servicios, la barrera de escepticismo desaparece y pide agendar la llamada de implementación.'
        ],
        keyPoints: [
          'Investiga 3 minutos antes de contactar: detecta si tardan en responder en WhatsApp/Web o si su formulario es lento.',
          'Mensaje de 4 líneas: 1) Observación específica de su web, 2) Costo de ese cuello de botella, 3) Link a demo de 90s armada para ellos, 4) Invitación sin presión.',
          'Pide referidos a cada cliente satisfecho a los 30 días de entrega a cambio de 1 mes de abono bonificado.'
        ],
        code: `Plantilla de Prospección B2B de Alta Respuesta:
"Hola [Nombre], ayer probé hacer una consulta desde la web de [Empresa] y noté que no tienen calificación automática fuera de horario.
Armé un prototipo rápido de 60 segundos entrenado con los servicios reales de [Empresa] para mostrarte cómo podría agendar esas consultas en automático en tu calendario: [Link Video 60s].
¿Te sirve si te muestro el jueves en 15 min cómo conectarlo a su flujo actual?"`,
        warning: '⚠️ No envíes propuestas de 15 páginas y déjalas "para que lo piensen"; revisa siempre la propuesta en vivo en una llamada de 15 minutos para resolver dudas en el momento.',
        checkpoint: {
          question: '¿Por qué enviar un video o prototipo personalizado de 60-90 segundos aplicado al negocio real del prospecto supera por amplio margen a los mensajes masivos de texto?',
          options: [
            'Porque los servidores de correo dan prioridad a los mensajes que no contienen vocales.',
            'Porque aplica el principio de reciprocidad y "demostración sobre afirmación": prueba tu competencia técnica de inmediato y le permite visualizar el sistema funcionando en su propio negocio antes de pagar.',
            'Porque obliga al prospecto a descargar un archivo ejecutable .exe en su computadora.',
            'Porque permite cobrar el servicio sin hablar nunca con el cliente.'
          ],
          correctIndex: 1
        }
      }
    ],
    quiz: {
      questions: [
        {
          question: '1. ¿Por qué especializarse en un único nicho B2B al iniciar tu agencia de automatización es mucho más rentable que aceptar proyectos de cualquier rubro?',
          options: [
            'Porque las leyes fiscales solo permiten facturar a un rubro por año.',
            'Porque te permite hablar el mismo lenguaje financiero del cliente, mostrar casos de éxito idénticos a su negocio y reutilizar el 80% de tu código y flujos con márgenes superiores al 85%.',
            'Porque en un nicho específico no hace falta que el software funcione correctamente.',
            'Porque reduce el precio que puedes cobrar a la mitad.'
          ],
          correctIndex: 1
        },
        {
          question: '2. Si durante el diagnóstico descubres que una empresa pierde $4,000 USD/mes por demoras operativas, ¿cómo debes estructurar y presentar tu precio de $2,000 USD?',
          options: [
            'Disculpándote por el precio y ofreciéndoles un 70% de descuento antes de que hablen.',
            'Explicando que cobras $2,000 USD porque necesitas comprarte una computadora nueva.',
            'Contrastando la inversión única de $2,000 USD frente a los $48,000 USD anuales que hoy pierden, demostrando que el sistema se amortiza en apenas 15 días de operación.',
            'Enviando solo el número "$2,000" por mensaje de texto sin contexto.'
          ],
          correctIndex: 2
        },
        {
          question: '3. ¿Cuál es la ventaja financiera de combinar un `Setup Fee` (pago inicial de implementación) con un `Retainer` (abono mensual de mantenimiento y optimización)?',
          options: [
            'El Setup Fee financia el flujo de caja inmediato y el margen de instalación, mientras que el Retainer construye un ingreso recurrente mensual (MRR) acumulativo que cubre tus costos fijos y valoriza tu negocio.',
            'Permite cobrar el Setup Fee y luego apagar el servidor al día siguiente sin dar soporte.',
            'Obliga al cliente a pagar el doble de impuestos bancarios.',
            'Reemplaza la necesidad de entregar el proyecto funcionando.'
          ],
          correctIndex: 0
        },
        {
          question: '4. ¿Qué error comercial debes evitar al presentar una propuesta B2B High-Ticket?',
          options: [
            'Mostrar casos de éxito cuantificables de clientes anteriores.',
            'Enviar un PDF con el presupuesto en frío por correo sin revisarlo en vivo en una llamada corta donde puedas despejar objeciones de alcance o forma de pago en el acto.',
            'Ofrecer un acuerdo de nivel de servicio (SLA) claro por escrito.',
            'Dividir el pago de implementación en 50% al iniciar y 50% contra entrega.'
          ],
          correctIndex: 1
        }
      ]
    }
  }
];

// Recompensas EXCLUSIVAS VIP (Solo se pueden comprar con Puntos Exclusivos VIP `VP`)
const EXCLUSIVE_VIP_REWARDS = [
  {
    id: 'vip-rw-secret-saas',
    type: 'Exclusivo VIP • Curso Secreto #1',
    icon: '🗝️',
    title: 'Desbloquear Masterclass Oculta: "Lanza un Micro-SaaS en 7 Días"',
    costVIPPoints: 180,
    description: 'Solo para poseedores de Puntos Exclusivos VIP (VP). Habilita el curso secreto completo de Micro-SaaS en el catálogo.',
    deliverable: '¡Curso Secreto #1 desbloqueado con tus Puntos VIP! Ya puedes cursarlo en el Catálogo.'
  },
  {
    id: 'vip-rw-secret-agency',
    type: 'Exclusivo VIP • Curso Secreto #2',
    icon: '💼',
    title: 'Desbloquear Masterclass Oculta: "Agencia IA & Ventas B2B High-Ticket ($2,000+)"',
    costVIPPoints: 220,
    description: 'Habilita la masterclass secreta de 4 módulos sobre cómo vender implementaciones de IA y automatización a empresas por +$2,000 USD.',
    deliverable: '¡Curso Secreto #2 desbloqueado con tus Puntos VIP! Ya puedes cursarlo en el Catálogo.'
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
        const reqRw = EXCLUSIVE_VIP_REWARDS.find(r => r.id === skill.requiredRewardId) || EXCLUSIVE_VIP_REWARDS[0];
        actionButton = `<button class="btn-start-skill gold-btn" onclick="document.querySelector('[data-tab=rewards]').click()">👑 Desbloquear con ${reqRw.costVIPPoints} VP en Bóveda VIP</button>`;
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

// Mezclador inteligente de opciones para que la respuesta correcta NUNCA sea siempre la primera (A)
function shuffleQuestionOptions(qObj, avoidIndex = null) {
  if (!qObj || !Array.isArray(qObj.options) || qObj.options.length < 2) return qObj;
  const correctText = qObj.options[qObj.correctIndex];
  const items = [...qObj.options];

  // Mezcla aleatoria Fisher-Yates
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  let newCorrectIdx = items.indexOf(correctText);

  // Si queremos evitar que caiga en el mismo índice que la pregunta anterior o en la primera opción repetidamente
  if (avoidIndex !== null && newCorrectIdx === avoidIndex && items.length > 1) {
    const swapTarget = (newCorrectIdx + 1 + Math.floor(Math.random() * (items.length - 1))) % items.length;
    [items[newCorrectIdx], items[swapTarget]] = [items[swapTarget], items[newCorrectIdx]];
    newCorrectIdx = swapTarget;
  }

  return {
    ...qObj,
    options: items,
    correctIndex: newCorrectIdx
  };
}

// Aula Interactiva Completa y Examen Multietapa
window.openSkillModal = function (skillId) {
  const baseSkill = getAllSkills().find(s => s.id === skillId);
  if (!baseSkill) return;

  // Clonamos el curso y mezclamos las opciones de todos los checkpoints y del examen final
  const skillClone = JSON.parse(JSON.stringify(baseSkill));
  let lastCheckpointIdx = 0; // Empezamos evitando que la primera sea siempre 0 (A)
  skillClone.lessons = skillClone.lessons.map(lesson => {
    if (lesson.checkpoint) {
      lesson.checkpoint = shuffleQuestionOptions(lesson.checkpoint, lastCheckpointIdx);
      lastCheckpointIdx = lesson.checkpoint.correctIndex;
    }
    return lesson;
  });

  if (skillClone.quiz && Array.isArray(skillClone.quiz.questions)) {
    let lastExamIdx = 0; // Evita que la primera pregunta del examen sea siempre A y que dos seguidas tengan la misma letra
    skillClone.quiz.questions = skillClone.quiz.questions.map(q => {
      const shuffled = shuffleQuestionOptions(q, lastExamIdx);
      lastExamIdx = shuffled.correctIndex;
      return shuffled;
    });
  } else if (skillClone.quiz && skillClone.quiz.question) {
    skillClone.quiz = shuffleQuestionOptions(skillClone.quiz, 0);
  }

  currentSkill = skillClone;
  currentStepIndex = 0;
  passedCheckpoints = {};
  selectedCheckAnswers = {};
  examAnswers = {};

  const mult = getPointsMultiplier();
  const finalPoints = Math.round(currentSkill.pointsReward * mult);
  const vpAmount = currentSkill.vipPointsReward || 50;
  const questions = getSkillQuestions(currentSkill);

  document.getElementById('modal-category').textContent = `${currentSkill.category} • ${currentSkill.lessons.length} Módulos + Examen (${questions.length} preguntas)`;
  document.getElementById('modal-points').textContent = `💎 +${finalPoints} PTS`;
  document.getElementById('modal-vip-points').textContent = state.isProMember
    ? `👑 +${vpAmount} VP (VIP Activo)`
    : `🔒 +${vpAmount} VP (Solo VIP)`;
  document.getElementById('modal-title').textContent = currentSkill.title;
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
    showToast(`❌ Obtuviste ${correctCount}/${questions.length} aciertos. Revisa bien tus respuestas: necesitas 100% (${questions.length}/${questions.length}) para aprobar.`);
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
