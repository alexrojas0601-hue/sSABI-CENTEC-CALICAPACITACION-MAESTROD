// SABI CENTEC · Curso 27 · Pensamiento computacional y programación para todas las áreas
// Estado: contenido en revisión (lo aprueba el docente responsable del área de tecnología e informática y el equipo STEAM).
// DOI verificados contra Crossref el 2026-10-24; el informe del JRC se verificó en el repositorio de publicaciones del JRC.
window.SABI_KB = {
  curso: "C27",
  titulo: "Pensamiento computacional y programación para todas las áreas",
  dot: "Dot_EducacionDigital_IA",
  objetivos: [
    "Al finalizar, el docente podrá explicar los componentes del pensamiento computacional (descomposición, patrones, abstracción, algoritmos y depuración) con ejemplos de su área.",
    "Al finalizar, el docente podrá diseñar una actividad desconectada y una secuencia de programación por bloques (ScratchJr, Scratch o MakeCode) adecuadas al grado que enseña.",
    "Al finalizar, el docente podrá aplicar rutinas de depuración y la secuencia PRIMM para tratar el error como información en el aula.",
    "Al finalizar, el docente podrá evaluar un proyecto STEAM con programación mediante una rúbrica de proceso y producto, cuidando la inclusión, la privacidad y el uso crítico de la IA."
  ],
  intuitiva: "Piensa en cómo le explicas a alguien que nunca ha venido a tu casa cómo llegar desde la estación del MIO. Primero divides el recorrido en tramos, luego te quedas con lo importante (la esquina de la panadería, no el color de cada casa), das instrucciones en orden y, si la persona se pierde, revisas en qué paso falló la indicación. Eso es pensamiento computacional: descomponer, abstraer, crear un algoritmo y depurar. No necesitas computador para enseñarlo, aunque programar en Scratch o en micro:bit permite comprobar si las instrucciones funcionan, porque la máquina hace exactamente lo que dices, ni más ni menos. Por eso sirve en matemáticas, ciencias, lenguaje o arte: enseña a pensar con orden y a aprender del error.",
  glosario: [
    { w: "ALGORITMO", t: "Algoritmo", d: "Secuencia finita de instrucciones precisas y ordenadas que resuelve un problema o realiza una tarea; puede ejecutarla una persona o una máquina." },
    { w: "DEPURACION", t: "Depuración", d: "Proceso de encontrar, entender y corregir errores en un algoritmo o programa, comparando lo que debía pasar con lo que pasó realmente." },
    { w: "ABSTRACCION", t: "Abstracción", d: "Seleccionar la información esencial para un propósito y dejar de lado los detalles que no afectan la solución del problema." },
    { w: "DESCOMPONER", t: "Descomposición", d: "Dividir un problema complejo en subproblemas más pequeños que se pueden resolver, probar por separado y luego integrar." },
    { w: "PATRON", t: "Patrón", d: "Regularidad que se repite en datos, figuras o procesos; reconocerla permite generalizar una regla y reutilizar soluciones." },
    { w: "BUCLE", t: "Bucle", d: "Estructura de programación que repite un conjunto de instrucciones un número de veces o mientras se cumpla una condición." },
    { w: "CONDICIONAL", t: "Condicional", d: "Instrucción que ejecuta unas acciones u otras según si una condición es verdadera o falsa; en Scratch, el bloque «si… entonces»." },
    { w: "VARIABLE", t: "Variable", d: "Espacio con nombre que guarda un dato que puede cambiar durante la ejecución del programa, como un puntaje o un contador." },
    { w: "EVENTO", t: "Evento", d: "Suceso que pone en marcha una parte del programa, como hacer clic en la bandera verde o presionar una tecla o un botón." },
    { w: "SCRATCH", t: "Scratch", d: "Lenguaje de programación por bloques, gratuito, creado por el grupo Lifelong Kindergarten del MIT Media Lab y lanzado en 2007." },
    { w: "MICROBIT", t: "micro:bit", d: "Placa programable de bajo costo con luces LED, botones y sensores; se programa con el editor gratuito MakeCode, que incluye un simulador." },
    { w: "DESCONECTADO", t: "Actividad desconectada", d: "Actividad para aprender conceptos de computación sin computador, con tarjetas, papel, juegos o el propio cuerpo." },
    { w: "TRANSFERENCIA", t: "Transferencia", d: "Uso de lo aprendido en una tarea o área distinta de aquella en que se aprendió; puede ser cercana o lejana." },
    { w: "PRIMM", t: "PRIMM", d: "Secuencia didáctica para enseñar programación: predecir, ejecutar, investigar, modificar y crear (Sentance, Waite y Kallia, 2019)." }
  ],
  flashcards: [
    { q: "¿Quién planteó en 2006 que el pensamiento computacional es una habilidad para todas las personas?", a: "Jeannette Wing, en Communications of the ACM." },
    { q: "Nombra cinco componentes del pensamiento computacional.", a: "Descomposición, reconocimiento de patrones, abstracción, algoritmos y depuración." },
    { q: "¿Qué tres dimensiones propone el marco de Brennan y Resnick (2012)?", a: "Conceptos, prácticas y perspectivas computacionales." },
    { q: "¿Qué significan las letras de PRIMM?", a: "Predecir, ejecutar (Run), investigar, modificar y crear (Make)." },
    { q: "¿Qué herramienta gratuita sirve para programar con bloques entre los 5 y los 7 años?", a: "ScratchJr." },
    { q: "¿Cómo se programa la micro:bit si el colegio no tiene placas?", a: "Con MakeCode, que es gratuito y trae un simulador en pantalla." },
    { q: "¿Cuánto debe girar la tortuga de Scratch en cada vértice de un polígono regular de n lados?", a: "360 / n grados (el ángulo exterior)." },
    { q: "¿Qué encontró el metaanálisis de Scherer y colegas (2019) sobre la transferencia?", a: "Un efecto moderado en promedio, mayor en transferencia cercana que lejana; menor en lectoescritura y rendimiento general." },
    { q: "¿Qué ley colombiana protege los datos personales de los estudiantes en proyectos digitales?", a: "La Ley 1581 de 2012." },
    { q: "¿Cuál es el primer paso de la rutina de depuración?", a: "Preguntar qué debía pasar y compararlo con lo que pasó en realidad." }
  ],
  timeline: {
    titulo: "Hitos del pensamiento computacional en la educación",
    items: [
      { y: "1967", e: "Wally Feurzeig, Seymour Papert y Cynthia Solomon crean el lenguaje Logo para que los niños programen." },
      { y: "1980", e: "Seymour Papert publica «Mindstorms», sobre niños que aprenden construyendo y depurando programas con la tortuga de Logo." },
      { y: "2006", e: "Jeannette Wing publica «Computational thinking» en Communications of the ACM." },
      { y: "2007", e: "El MIT Media Lab lanza Scratch, lenguaje de programación por bloques gratuito." },
      { y: "2012", e: "Brennan y Resnick proponen el marco de conceptos, prácticas y perspectivas computacionales." },
      { y: "2014", e: "Se lanza ScratchJr, versión de Scratch para niños de 5 a 7 años." },
      { y: "2016", e: "El Centro Común de Investigación de la Comisión Europea publica el informe de Bocconi y colegas sobre pensamiento computacional en la educación obligatoria." },
      { y: "2019", e: "Scherer, Siddiq y Sánchez Viveros publican un metaanálisis sobre la transferencia de aprender a programar." }
    ]
  },
  w5h1: {
    quien: "Docentes de CENTEC de Transición a 11.°, de todas las áreas, con apoyo del área de tecnología e informática.",
    que: "Enseñar a descomponer, abstraer, crear algoritmos y depurar, con y sin computador, conectado con el contenido del área.",
    cuando: "En secuencias cortas dentro de las unidades del periodo y en proyectos STEAM interdisciplinarios.",
    donde: "En el aula, el patio (actividades desconectadas) y la sala de sistemas, con ScratchJr, Scratch o MakeCode.",
    porque: "Porque ayuda a resolver problemas con orden, a tratar el error como información y a comprender la tecnología que usamos.",
    como: "Con actividades desconectadas, la secuencia PRIMM, la rutina de depuración, rúbricas de proceso y reglas de privacidad."
  },
  flujo: {
    titulo: "Procedimiento para planear una clase con pensamiento computacional",
    pasos: [
      "Elegir el aprendizaje del área que se quiere lograr",
      "Plantear un problema que se resuelva por pasos",
      "Abrir con una actividad desconectada o de predicción",
      "Programar con PRIMM: predecir, ejecutar, investigar, modificar",
      "Depurar con la rutina: esperado, obtenido, diferencia",
      "Crear un producto propio y explicar el código",
      "Evaluar con rúbrica y conectar con el contenido del área"
    ]
  },
  mapa: {
    centro: "Pensamiento computacional",
    ramas: [
      { n: "Componentes", h: ["Descomposición y patrones", "Abstracción y algoritmos", "Depuración"] },
      { n: "Sin pantallas", h: ["Robot literal", "Tarjetas binarias", "Laberinto con flechas"] },
      { n: "Herramientas gratuitas", h: ["ScratchJr y Scratch", "MakeCode y micro:bit", "Python en grados altos"] },
      { n: "Integración STEAM", h: ["Geometría con la tortuga", "Sensores y datos", "Historias interactivas"] },
      { n: "Evaluar y cuidar", h: ["Rúbrica de proceso", "Roles rotativos (DUA)", "Privacidad: Ley 1581"] }
    ]
  },
  errores: [
    { caso: "Un docente reserva la sala de sistemas y dice al grupo «jueguen con Scratch» durante toda la clase, sin consigna.", error: "Sin una meta de aprendizaje, la actividad se queda en exploración superficial y no se sabe qué aprendió cada estudiante.", correccion: "Definir un concepto del área y uno computacional, usar PRIMM con un programa corto y cerrar con una pregunta de salida." },
    { caso: "Cuando el programa de un estudiante falla, la docente toma el teclado y lo arregla para avanzar rápido.", error: "Le quita al estudiante la oportunidad de aprender a depurar, que es una de las prácticas centrales al programar.", correccion: "Aplicar la rutina del detective: reproducir el error, leer el código en voz alta, aislar la parte y cambiar una sola cosa." },
    { caso: "En reunión de padres se promete que aprender a programar «subirá las notas en todas las materias».", error: "La evidencia muestra transferencia moderada y variable, mayor a tareas cercanas y menor en lectoescritura y rendimiento general.", correccion: "Comunicar los beneficios con matices y enseñar de forma explícita las conexiones con cada área, evaluándolas." },
    { caso: "Un grupo publica en internet un juego con fotos y nombres completos de sus compañeros.", error: "Expone datos personales de menores sin autorización, en contra de la Ley 1581 de 2012.", correccion: "Usar dibujos propios y seudónimos, cuentas de clase administradas por el docente y revisar la privacidad antes de compartir." }
  ],
  recuperacion: [
    { p: "Explica con tus palabras qué es el pensamiento computacional y por qué no es lo mismo que manejar programas de oficina.", modelo: "Es una forma de plantear y resolver problemas para que una persona o una máquina pueda ejecutar la solución paso a paso. Incluye descomponer, reconocer patrones, abstraer, diseñar algoritmos y depurar. Manejar ofimática es usar herramientas ya hechas; el pensamiento computacional consiste en formular el problema y la solución, y puede enseñarse incluso sin computador." },
    { p: "Describe los cinco momentos de PRIMM y por qué crear desde cero va al final.", modelo: "Predecir qué hará un código, ejecutarlo para comprobar, investigarlo línea por línea, modificarlo con una intención y, por último, crear uno propio. Crear va al final porque los novatos necesitan primero leer y comprender programas que funcionan; así se reduce la frustración y la copia sin comprensión, y el apoyo se retira de forma gradual." },
    { p: "¿Qué dice la evidencia sobre la transferencia de aprender a programar a otras áreas?", modelo: "El metaanálisis de Scherer y colegas (2019) encontró un efecto moderado en promedio, mayor para tareas cercanas que lejanas. Hubo beneficios en creatividad, matemáticas, metacognición, razonamiento y habilidades espaciales, y menos en lectoescritura y rendimiento general. Los efectos dependieron del diseño de los estudios, así que la transferencia debe enseñarse y evaluarse." },
    { p: "Menciona tres decisiones para que un proyecto de programación sea inclusivo y seguro.", modelo: "Rotar los roles de conductor y guía en parejas para que todos programen; ofrecer versiones desconectadas o táctiles y temas elegidos por los estudiantes, siguiendo el DUA; y proteger la privacidad con seudónimos, dibujos propios y cuentas de clase, sin publicar fotos ni nombres reales, como exige la Ley 1581 de 2012." }
  ],
  caso: {
    titulo: "Caso CENTEC: la sala de sistemas que nadie usaba",
    contexto: "En un colegio de la Comuna 15, la sala de sistemas tiene quince computadores que casi solo se usan para transcribir trabajos. La coordinadora pide a los docentes de 5.° que integren el pensamiento computacional. La profe Gloria, de Matemáticas, teme no saber programar; el profe Iván, de Ciencias, quiere comprar robots costosos; y varios estudiantes no tienen computador en casa. Hay 38 estudiantes por grupo y dos horas semanales de tecnología. Las familias preguntan si esto mejorará las notas de sus hijos.",
    preguntas: [
      "¿Qué actividades desconectadas y qué herramientas gratuitas propondrías para empezar sin comprar equipos?",
      "¿Cómo organizarías a 38 estudiantes en quince computadores para que todos programen?",
      "¿Qué responderías a las familias sobre el efecto en las notas, según la evidencia?"
    ]
  },
  dominar: {
    memorizar: ["Los cinco componentes: descomposición, patrones, abstracción, algoritmos y depuración", "Las letras de PRIMM y las tres dimensiones de Brennan y Resnick"],
    comprender: ["Por qué la máquina ejecuta exactamente lo que dice el código y eso hace visible el error", "Por qué la transferencia a otras áreas es moderada y debe enseñarse de forma explícita"],
    ejecutar: ["Dirigir una actividad desconectada y una sesión PRIMM con un programa corto", "Aplicar la rutina de depuración sin tomar el teclado del estudiante"],
    decidir: ["Qué herramienta y qué nivel de la progresión convienen a cada grado", "Cuándo un proyecto con IA o publicación en línea pone en riesgo la privacidad"]
  },
  bloom: [
    { n: "N1 Recordar", i: "Nombra los componentes del pensamiento computacional y tres herramientas gratuitas para programar." },
    { n: "N2 Comprender", i: "Explica con un ejemplo de su área la diferencia entre descomponer y abstraer." },
    { n: "N3 Aplicar", i: "Dirige una sesión PRIMM con un programa corto de Scratch o MakeCode." },
    { n: "N4 Analizar", i: "Localiza el error de un programa comparando el resultado esperado con el obtenido." },
    { n: "N5 Evaluar", i: "Valora un proyecto con una rúbrica de proceso y producto y juzga la evidencia sobre transferencia." },
    { n: "N6 Crear", i: "Diseña un proyecto STEAM con programación, inclusivo y seguro, para su grado." }
  ],
  fuentes: [
    "Wing, J. M. (2006). Computational thinking. Communications of the ACM, 49(3), 33-35. · DOI: 10.1145/1118178.1118215",
    "Papert, S. (1980). Mindstorms: Children, Computers, and Powerful Ideas. Basic Books.",
    "Brennan, K. y Resnick, M. (2012). New frameworks for studying and assessing the development of computational thinking. Reunión anual de la American Educational Research Association (AERA), Vancouver.",
    "Grover, S. y Pea, R. (2013). Computational thinking in K–12: A review of the state of the field. Educational Researcher, 42(1), 38-43. · DOI: 10.3102/0013189X12463051",
    "Bocconi, S., Chioccariello, A., Dettori, G., Ferrari, A., Engelhardt, K., Kampylis, P. y Punie, Y. (2016). Developing computational thinking in compulsory education: Implications for policy and practice. Centro Común de Investigación (JRC), Comisión Europea, EUR 28295 EN. · DOI: 10.2791/792158",
    "Scherer, R., Siddiq, F. y Sánchez Viveros, B. (2019). The cognitive benefits of learning computer programming: A meta-analysis of transfer effects. Journal of Educational Psychology, 111(5), 764-792. · DOI: 10.1037/edu0000314",
    "Sentance, S., Waite, J. y Kallia, M. (2019). Teaching computer programming with PRIMM: A sociocultural perspective. Computer Science Education, 29(2-3), 136-176. · DOI: 10.1080/08993408.2019.1608781"
  ]
};
