// SABI CENTEC · Curso 30 · Algoritmos y diagramas de flujo: enseñar a pensar y crear soluciones (Transición a 11°)
// Estado: contenido en revisión (lo aprueban coordinación académica, el docente responsable de tecnología e informática y el equipo STEAM).
// Fuentes tomadas de la investigación verificada del curso (29-oct-2026). Desde este entorno no se pudo reconsultar Crossref: el auditor debe confirmar los DOI y registrarlos en docs/VERIFICACION_DOI.md.
window.SABI_KB = {
  curso: "C30",
  titulo: "Algoritmos y diagramas de flujo: enseñar a pensar y crear soluciones",
  dot: "Dot_EducacionDigital_IA",
  objetivos: [
    "Al finalizar, el docente podrá construir y ejecutar a mano un algoritmo de su área aplicando el ciclo ENTIENDO, DIVIDO, ORDENO, PRUEBO, CORRIJO y MEJORO.",
    "Al finalizar, el docente podrá representar un algoritmo como diagrama de flujo correcto (inicio, fin, proceso, decisión con SÍ y NO, entrada y salida) y seguirlo con una tabla de traza.",
    "Al finalizar, el docente podrá enseñar el «Algoritmo de la semana» de su grado con modelado en voz alta, ejemplos resueltos con desvanecimiento, PRIMM y una rutina explícita de depuración.",
    "Al finalizar, el docente podrá evaluar algoritmos de estudiantes con una rúbrica de cuatro niveles y crear y compartir un algoritmo propio, cuidando la privacidad de los menores."
  ],
  intuitiva: "Piensa en la receta de la arepa que te enseñó alguien de tu familia. Si se la dictas a un vecino que nunca ha cocinado y él la sigue al pie de la letra, descubrirás enseguida los pasos que diste por obvios: cuánta agua, cuándo voltearla, cómo saber que está lista. Un algoritmo es exactamente eso: una receta tan precisa que cualquiera puede seguirla sin adivinar. Un diagrama de flujo es la misma receta dibujada: óvalos para empezar y terminar, cajas para las acciones, rombos para las preguntas de sí o no y flechas para el orden. Cuando un niño prueba su algoritmo con un compañero y algo falla, no fracasó: encontró un error que puede corregir. Por eso los algoritmos sirven en todas las áreas, de Transición a once: enseñan a pensar con orden, a probar y a mejorar.",
  glosario: [
    { w: "ALGORITMO", t: "Algoritmo", d: "Secuencia finita de pasos precisos y ordenados que resuelve un problema; recibe datos, produce un resultado y termina. Puede ejecutarlo una persona o una máquina." },
    { w: "DIAGRAMA", t: "Diagrama de flujo", d: "Representación gráfica de un algoritmo con símbolos estándar: óvalo para inicio y fin, rectángulo para procesos, rombo para decisiones, paralelogramo para entradas y salidas, y flechas para el orden." },
    { w: "SECUENCIA", t: "Secuencia", d: "Estructura en la que los pasos se ejecutan uno tras otro, en un orden fijo. Es el primer concepto que dominan los niños de Transición con tarjetas y rutinas." },
    { w: "CONDICIONAL", t: "Condicional", d: "Estructura de decisión del tipo SI… ENTONCES… SI NO…, que elige un camino según si una condición se cumple. En el diagrama se dibuja como un rombo con salidas SÍ y NO." },
    { w: "CICLO", t: "Ciclo", d: "Estructura que repite uno o varios pasos un número de veces o hasta que se cumple una condición. Todo ciclo necesita una salida para no repetirse para siempre." },
    { w: "VARIABLE", t: "Variable", d: "Nombre que guarda un valor que puede cambiar durante el algoritmo, como total, intento o contador. Debe tener un valor inicial antes de usarse." },
    { w: "CONTADOR", t: "Contador", d: "Variable que aumenta de uno en uno para contar cuántas veces ocurre algo, por ejemplo cuántas respiraciones o cuántos intentos. Suele empezar en cero." },
    { w: "ACUMULADOR", t: "Acumulador", d: "Variable que suma cantidades que pueden ser distintas en cada vuelta de un ciclo, como el total de dinero o la suma de centímetros. Empieza en cero." },
    { w: "TRAZA", t: "Tabla de traza", d: "Tabla con una columna por variable y una fila por paso que permite ejecutar un algoritmo a mano y ver dónde cambia un valor de forma inesperada." },
    { w: "DEPURACION", t: "Depuración", d: "Proceso de encontrar y corregir errores comparando lo que se esperaba con lo que pasó y ubicando el paso donde empezó la diferencia; cambiar una sola cosa y volver a probar." },
    { w: "PSEUDOCODIGO", t: "Pseudocódigo", d: "Forma de escribir un algoritmo en español sencillo y estructurado, con palabras como INICIO, LEER, SI, REPETIR HASTA QUE y FIN, sin la sintaxis estricta de un lenguaje de programación." },
    { w: "DESCONECTADO", t: "Actividad desconectada", d: "Actividad para aprender algoritmos sin computador, con tarjetas, cuadrículas en el piso o el propio cuerpo. Tiene evidencia sólida en primaria y sirve en aulas con pocos equipos." },
    { w: "PRIMM", t: "PRIMM", d: "Secuencia didáctica de cinco momentos: Predecir, Ejecutar, Investigar, Modificar y Crear. Se estudió con estudiantes de 11 a 14 años; en primaria es una adaptación razonable." },
    { w: "DESVANECER", t: "Desvanecimiento", d: "Retirar la ayuda de forma gradual: del ejemplo completamente resuelto al ejemplo con huecos y de ahí al problema independiente. Tiene evidencia sólida, sobre todo con principiantes." }
  ],
  flashcards: [
    { q: "¿Qué tres preguntas permiten saber si algo es un algoritmo?", a: "¿Cada paso es preciso?, ¿el orden importa y está claro?, ¿termina siempre?" },
    { q: "¿Cuáles son los seis pasos del ciclo de CENTEC?", a: "ENTIENDO, DIVIDO, ORDENO, PRUEBO, CORRIJO y MEJORO y COMPARTO." },
    { q: "¿Qué representa el rombo en un diagrama de flujo?", a: "Una decisión con dos salidas rotuladas: SÍ y NO." },
    { q: "¿Qué representa el paralelogramo?", a: "Una entrada de datos (leer) o una salida de resultados (mostrar)." },
    { q: "¿Por qué un ciclo puede volverse infinito?", a: "Porque la variable que se pregunta en la decisión nunca cambia dentro del ciclo." },
    { q: "¿Qué diferencia hay entre contador y acumulador?", a: "El contador suma de uno en uno; el acumulador suma cantidades que pueden variar." },
    { q: "¿Cuáles son las tres preguntas de la rutina de depuración?", a: "¿Qué esperaba?, ¿qué pasó?, ¿en qué paso empezó la diferencia?" },
    { q: "¿Qué significan las letras de PRIMM?", a: "Predecir, Ejecutar, Investigar, Modificar y Crear." },
    { q: "¿En qué grado llega el diagrama de flujo formal según la ruta CENTEC?", a: "En 3°, junto con los ciclos REPETIR HASTA QUE." },
    { q: "¿A quién se aplica la Ley 2626 de 2026?", a: "A las instituciones oficiales; las privadas, como CENTEC, pueden adoptar el modelo." }
  ],
  timeline: {
    titulo: "Hitos para enseñar algoritmos en la escuela",
    items: [
      { y: "1945", e: "George Pólya publica «How to Solve It», con cuatro fases para resolver problemas: comprender, planear, ejecutar y revisar." },
      { y: "2012", e: "Brennan y Resnick proponen un marco de conceptos, prácticas y perspectivas para estudiar y evaluar el pensamiento computacional." },
      { y: "2014", e: "Bers y colegas publican su estudio de robótica con niños de kínder: la secuenciación se logra pronto y los condicionales cuestan más." },
      { y: "2019", e: "Scherer, Siddiq y Sánchez Viveros publican un metaanálisis sobre la transferencia de aprender a programar; ese año también se publica el estudio de PRIMM de Sentance, Waite y Kallia." },
      { y: "2021", e: "Sun, Hu y Zhou publican un metaanálisis sobre actividades de programación en K-12, con efecto mayor al integrarlas con STEM." },
      { y: "2023", e: "Chen y colegas publican un metaanálisis que muestra efectos grandes de las actividades desconectadas, también en primaria." },
      { y: "2026", e: "Se expide en Colombia la Ley 2626 de 2026, Ley de Educación Digital, aplicable a instituciones oficiales y adoptable por las privadas." }
    ]
  },
  w5h1: {
    quien: "Todos los maestros de CENTEC, de Transición a 11°, de todas las áreas, con el acompañamiento de los directivos.",
    que: "Enseñar cada semana el «Algoritmo de la semana» del grado: secuencias, condicionales, ciclos, variables, diagramas de flujo y pseudocódigo según la ruta.",
    cuando: "En cada semana de la planeación 2027, unos 10 a 20 minutos dentro de la clase del tema, con repaso espaciado a los 2, 7 y 30 días.",
    donde: "En el aula, el patio y el lavamanos, con tarjetas, cuadrículas, diagramas en el piso y, cuando haya equipos, tabletas con ScratchJr o Scratch.",
    porque: "Porque la revisión de la planeación encontró pocos algoritmos en Transición y 1° y rectoría decidió que todos los niños aprendan a crear algoritmos de solución.",
    como: "Con el ciclo de seis pasos, modelado en voz alta, ejemplos resueltos con desvanecimiento, PRIMM, parejas que rotan roles y la rutina de depuración."
  },
  flujo: {
    titulo: "Procedimiento para enseñar el algoritmo de la semana",
    pasos: [
      "Leer el algoritmo de la semana y resolverlo yo primero",
      "Conectarlo con el tema y el producto de la semana",
      "Modelar en voz alta con un error a propósito",
      "Pedir a los estudiantes predecir antes de ejecutar",
      "Probar con un compañero-robot o con la tabla de traza",
      "Depurar: qué esperaba, qué pasó, en qué paso cambió",
      "Registrar datos de antes y después sin nombres"
    ]
  },
  mapa: {
    centro: "Algoritmos y diagramas",
    ramas: [
      { n: "Qué es un algoritmo", h: ["Pasos precisos y ordenados", "Entrada, proceso y salida", "Termina siempre"] },
      { n: "Ciclo de 6 pasos", h: ["Entiendo, divido, ordeno", "Pruebo y corrijo", "Mejoro y comparto"] },
      { n: "Diagrama de flujo", h: ["Óvalo, rectángulo, rombo", "Paralelogramo y flechas", "Decisión con SÍ y NO"] },
      { n: "Cómo enseñarlo", h: ["Modelado en voz alta", "Ejemplos con desvanecimiento", "PRIMM y depuración"] },
      { n: "Evaluar y crear", h: ["Rúbrica de cuatro niveles", "Algoritmo propio del área", "Privacidad: Ley 1581"] }
    ]
  },
  errores: [
    { caso: "En 3°, un docente entrega a sus estudiantes el diagrama de flujo «Reviso mi examen» ya terminado y les pide copiarlo en el cuaderno.", error: "Los estudiantes reproducen un dibujo, pero no diseñan, no prueban ni depuran: no aprenden a construir algoritmos.", correccion: "Modelar uno parecido en voz alta, dar una versión con huecos, pedir que lo prueben con una prueba de práctica y que corrijan el paso que se saltaron." },
    { caso: "Una docente de 4° dibuja un rombo «¿llegó a 60 segundos?» con una sola flecha marcada SÍ.", error: "Toda decisión necesita dos salidas; sin la rama NO, quien ejecuta no sabe qué hacer cuando la respuesta es negativa.", correccion: "Rotular las dos salidas SÍ y NO y comprobar con una lista de chequeo que cada rombo tenga ambas antes de ejecutar." },
    { caso: "Un docente corrige rápidamente el algoritmo de un estudiante para que la clase avance y nadie se frustre.", error: "Le quita al estudiante la oportunidad de encontrar su propio error, que es justamente lo que vino a aprender.", correccion: "Aplicar la rutina: ¿qué esperabas?, ¿qué pasó?, ¿en qué paso cambió? Luego decir la frase institucional del error cuando el estudiante lo encuentre." },
    { caso: "En una reunión con familias, un docente promete que aprender algoritmos mejorará la lectura de todos los niños.", error: "La evidencia muestra beneficios en pensamiento computacional y, en menor medida, en matemáticas, creatividad y metacognición; en lectoescritura casi no se observaron efectos.", correccion: "Explicar con honestidad lo que se espera lograr y enseñar la transferencia de forma explícita, sobre todo con matemáticas y ciencias." }
  ],
  recuperacion: [
    { p: "Explica con tus palabras qué es un algoritmo y da un ejemplo de tu área que no use computador.", modelo: "Un algoritmo es una secuencia finita de pasos precisos y ordenados que resuelve un problema y termina. Por ejemplo, en Ciencias, medir la altura de una planta cada día: tomar la regla, apoyarla en la base, leer el centímetro del tallo más alto, anotar en la tabla con la fecha y repetir al día siguiente. No necesita computador: lo ejecuta una persona." },
    { p: "Describe las reglas que debe cumplir un diagrama de flujo correcto.", modelo: "Un solo Inicio y al menos un Fin; cada caja tiene una salida; toda decisión tiene salida SÍ y salida NO; todo ciclo tiene una decisión que permite salir y la variable que se pregunta cambia dentro del ciclo; desde Inicio se llega a todos los bloques y desde cualquiera se puede llegar al Fin." },
    { p: "¿Cómo aplicarías PRIMM con el algoritmo de la semana de tu grado?", modelo: "Primero los estudiantes predicen por escrito qué hará el algoritmo; luego un compañero-robot lo ejecuta y comparan con la predicción; después investigan por qué pasó así; modifican un paso para obtener otro resultado; y finalmente crean uno propio. Es una adaptación, porque PRIMM se estudió con estudiantes de 11 a 14 años." },
    { p: "¿Qué cuidados de privacidad debe tener la evidencia del curso?", modelo: "Fotografiar solo productos (tarjetas, cuadernos, diagramas), sin rostros, nombres, voces ni listas de clase; reportar datos como conteos, sin nombres; no describir estudiantes con PIAR de forma identificable y no introducir datos de menores en herramientas de IA, según la Ley 1581 de 2012." }
  ],
  caso: {
    titulo: "Caso CENTEC: el ciclo que nunca termina",
    contexto: "La profesora Marcela, de 4°, pidió a sus estudiantes un diagrama de flujo para contar cuántas semanas cumplen su meta del período. Casi todos lo dibujaron bien, pero el grupo de Andrés y Sara dibujó un ciclo que vuelve a «reviso mi meta» sin cambiar nunca el número de semanas. Cuando un compañero-robot lo siguió en el piso, dio vueltas sin parar y el grupo se rió. Andrés dijo: «Nos salió mal, mejor lo borramos». Marcela tenía diez minutos de clase y treinta y dos estudiantes esperando su turno. Además, quería tomar una foto del trabajo para su evidencia del curso C30.",
    preguntas: [
      "¿Qué preguntas de depuración haría Marcela para que el grupo encuentre el error sin que ella lo señale?",
      "¿Cómo convertiría el error de este grupo en aprendizaje para toda la clase en pocos minutos?",
      "¿Qué debe cuidar Marcela al fotografiar el trabajo para su evidencia?"
    ]
  },
  dominar: {
    memorizar: ["Los seis pasos del ciclo: entiendo, divido, ordeno, pruebo, corrijo, mejoro", "Los cuatro símbolos del diagrama de flujo y su significado", "Las tres preguntas de la rutina de depuración"],
    comprender: ["Por qué toda decisión necesita salidas SÍ y NO", "Por qué un ciclo sin cambio en la variable no termina", "Qué dice y qué no dice la evidencia sobre la transferencia"],
    ejecutar: ["Construir y ejecutar un diagrama con tabla de traza", "Aplicar PRIMM con el algoritmo de la semana", "Registrar datos de antes y después sin nombres"],
    decidir: ["Qué representación corresponde a cada grado según la ruta", "Cuándo volver a un ejemplo resuelto antes de retirar la ayuda"]
  },
  bloom: [
    { n: "N1 Recordar", i: "Nombra los seis pasos del ciclo y los cuatro símbolos del diagrama de flujo." },
    { n: "N2 Comprender", i: "Explica con un ejemplo de su área la diferencia entre contador y acumulador." },
    { n: "N3 Aplicar", i: "Ejecuta un diagrama de flujo con una tabla de traza y obtiene el resultado correcto." },
    { n: "N4 Analizar", i: "Identifica en un diagrama la decisión sin rama, el bloque sin salida o el ciclo infinito y explica la causa." },
    { n: "N5 Evaluar", i: "Valora algoritmos de estudiantes con la rúbrica de cuatro niveles y justifica cada nivel." },
    { n: "N6 Crear", i: "Diseña un algoritmo propio para su área y grado, lo prueba con dos datos y lo comparte con colegas." }
  ],
  fuentes: [
    "Scherer, R., Siddiq, F. y Sánchez Viveros, B. (2019). The cognitive benefits of learning computer programming: A meta-analysis of transfer effects. Journal of Educational Psychology, 111(5), 764-792. DOI 10.1037/edu0000314",
    "Chen, P., Yang, D., Metwally, A. H. S., Lavonen, J. y Wang, X. (2023). Fostering computational thinking through unplugged activities: A systematic literature review and meta-analysis. International Journal of STEM Education, 10, 47. DOI 10.1186/s40594-023-00434-7",
    "Sentance, S., Waite, J. y Kallia, M. (2019). Teaching computer programming with PRIMM: A sociocultural perspective. Computer Science Education, 29(2-3), 136-176. DOI 10.1080/08993408.2019.1608781",
    "Sweller, J., van Merriënboer, J. J. G. y Paas, F. (2019). Cognitive architecture and instructional design: 20 years later. Educational Psychology Review, 31(2), 261-292. DOI 10.1007/s10648-019-09465-5",
    "Brennan, K. y Resnick, M. (2012). New frameworks for studying and assessing the development of computational thinking. Reunión anual de la American Educational Research Association (AERA)",
    "Pólya, G. (1945). How to Solve It. Princeton University Press",
    "Ley 1581 de 2012 — Protección de datos personales (Colombia); Ley 2626 de 2026 — Ley de Educación Digital (Colombia)"
  ]
};
