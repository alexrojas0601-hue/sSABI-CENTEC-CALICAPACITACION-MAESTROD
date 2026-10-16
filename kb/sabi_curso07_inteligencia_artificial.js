window.SABI_KB = {
  curso: "C07",
  titulo: "Inteligencia artificial para docentes",
  dot: "Dot_EducacionDigital_IA",
  objetivos: [
    "Al finalizar, el docente podrá explicar qué es y qué no es la inteligencia artificial, diferenciando aprendizaje automático, aprendizaje profundo e IA generativa.",
    "Al finalizar, el docente podrá redactar instrucciones (prompts) con rol, tarea, contexto y formato, y verificar los resultados antes de usarlos en clase.",
    "Al finalizar, el docente podrá rediseñar una evaluación para que exija contexto propio, proceso visible y sustentación oral.",
    "Al finalizar, el docente podrá analizar con sus estudiantes riesgos éticos de la IA: sesgos, privacidad, desinformación y cambios en el trabajo."
  ],
  intuitiva: "Un modelo de IA generativa se parece al autocompletar del celular, pero entrenado con una cantidad gigantesca de textos: no consulta una enciclopedia, sino que calcula qué palabras suelen seguir a otras. Por eso puede redactar una rúbrica en segundos y, con la misma seguridad, inventar una cita o una ley que no existe. Es como un practicante muy rápido y muy leído que nunca dice «no sé»: sirve muchísimo para hacer borradores, pero alguien con criterio debe revisar todo. En el aula, el docente pone el propósito pedagógico, el contexto de sus estudiantes y la verificación; la IA pone velocidad y variedad. La decisión final siempre es humana.",
  glosario: [
    { w: "ALGORITMO", t: "Algoritmo", d: "Secuencia finita y ordenada de instrucciones para resolver un problema o realizar una tarea; base de cualquier programa, incluidos los sistemas de IA." },
    { w: "APRENDIZAJE", t: "Aprendizaje automático", d: "Rama de la IA (machine learning) en la que los sistemas mejoran su desempeño en una tarea a partir de datos, sin ser programados regla por regla." },
    { w: "NEURONAL", t: "Red neuronal", d: "Modelo computacional de capas de unidades interconectadas que ajustan pesos numéricos durante el entrenamiento; con muchas capas se habla de aprendizaje profundo." },
    { w: "GENERATIVA", t: "IA generativa", d: "Tipo de IA que produce contenido nuevo (texto, imagen, audio, código) a partir de los patrones aprendidos en sus datos de entrenamiento." },
    { w: "TRANSFORMER", t: "Transformer", d: "Arquitectura de red neuronal presentada en 2017 (Vaswani y otros, «Attention Is All You Need») que es la base de los grandes modelos de lenguaje actuales." },
    { w: "PROMPT", t: "Prompt", d: "Instrucción que el usuario escribe a un modelo de IA; su calidad depende de precisar rol, tarea, contexto y formato esperado de la respuesta." },
    { w: "ALUCINACION", t: "Alucinación", d: "Respuesta de un modelo de IA que suena segura y coherente pero es falsa o inventada, como citas, datos o referencias inexistentes." },
    { w: "SESGO", t: "Sesgo algorítmico", d: "Error sistemático por el que un sistema de IA favorece o perjudica a ciertos grupos, a menudo porque reproduce desigualdades presentes en sus datos." },
    { w: "DEEPFAKE", t: "Deepfake", d: "Video, audio o imagen sintéticos generados con IA que imitan de forma realista a una persona real diciendo o haciendo algo que no ocurrió." },
    { w: "TOKEN", t: "Token", d: "Fragmento de texto (palabra, parte de palabra o signo) que un modelo de lenguaje procesa como unidad para calcular la continuación más probable." },
    { w: "VERIFICACION", t: "Verificación", d: "Contraste de la información producida por la IA con fuentes primarias y con el criterio docente antes de usarla con estudiantes." },
    { w: "SUSTENTACION", t: "Sustentación oral", d: "Defensa breve en la que el estudiante explica y justifica su trabajo; evidencia si comprendió, independientemente de las herramientas que usó." },
    { w: "AUTENTICA", t: "Evaluación auténtica", d: "Evaluación que pide aplicar el aprendizaje en tareas con contexto real y específico, con proceso visible, difícil de resolver solo copiando una respuesta de IA." },
    { w: "PRIVACIDAD", t: "Privacidad", d: "Derecho a controlar la propia información personal; en Colombia lo protege la Ley 1581 de 2012 y exige cuidado al ingresar datos de estudiantes en herramientas de IA." }
  ],
  flashcards: [
    { q: "¿Qué propuso Alan Turing en 1950?", a: "El «juego de la imitación», hoy llamado prueba de Turing, en su artículo «Computing Machinery and Intelligence»." },
    { q: "¿Dónde y cuándo se acuñó el término «inteligencia artificial»?", a: "En la propuesta del taller de Dartmouth (1955-1956), liderado por John McCarthy." },
    { q: "¿Qué hizo Deep Blue de IBM en 1997?", a: "Venció al campeón mundial de ajedrez Garri Kaspárov en un encuentro a seis partidas." },
    { q: "¿Qué arquitectura se publicó en 2017 y es base de los modelos de lenguaje?", a: "El Transformer, en el artículo «Attention Is All You Need»." },
    { q: "¿Qué es una alucinación de IA?", a: "Información falsa generada con apariencia de certeza." },
    { q: "Cuatro elementos de un buen prompt", a: "Rol, tarea, contexto y formato." },
    { q: "¿Qué documento CONPES fijó la política colombiana de transformación digital e IA en 2019?", a: "El CONPES 3975 de 2019." },
    { q: "¿Qué recomendación internacional sobre ética de la IA adoptó la UNESCO en 2021?", a: "La Recomendación sobre la Ética de la Inteligencia Artificial." },
    { q: "Tres capas de una evaluación auténtica frente a la IA", a: "Contexto específico, proceso visible y componente oral o de sustentación." },
    { q: "Regla de oro del uso docente de la IA", a: "La IA propone un borrador; el docente verifica y decide." }
  ],
  timeline: {
    titulo: "Hitos de la inteligencia artificial",
    items: [
      { y: "1950", e: "Alan Turing publica «Computing Machinery and Intelligence» y propone el juego de la imitación." },
      { y: "1956", e: "Taller de Dartmouth: se consolida el campo de la «inteligencia artificial»." },
      { y: "1997", e: "Deep Blue de IBM vence al campeón mundial de ajedrez Garri Kaspárov." },
      { y: "2012", e: "AlexNet gana el reto ImageNet e impulsa el aprendizaje profundo." },
      { y: "2017", e: "Investigadores de Google publican la arquitectura Transformer." },
      { y: "2019", e: "Colombia aprueba el CONPES 3975, política de transformación digital e inteligencia artificial." },
      { y: "2021", e: "La UNESCO adopta la Recomendación sobre la Ética de la Inteligencia Artificial." },
      { y: "2022", e: "OpenAI lanza ChatGPT al público y masifica la IA generativa." }
    ]
  },
  w5h1: {
    quien: "Docentes de CENTEC de todas las áreas, con estudiantes de básica secundaria y media como usuarios guiados.",
    que: "Usar la IA generativa como asistente para planear, diferenciar y retroalimentar, y enseñar a los estudiantes a usarla con criterio ético.",
    cuando: "Desde la planeación de cada unidad, siguiendo una implementación gradual de cuatro semanas: explorar, adaptar, introducir y reflexionar.",
    donde: "En la planeación docente, en actividades de aula con guía explícita y en la revisión de evaluaciones de cada área.",
    porque: "Porque los estudiantes ya usan IA, y sin formación crítica quedan expuestos a errores, sesgos, desinformación y evaluaciones que no miden su aprendizaje.",
    como: "Con prompts bien estructurados, verificación sistemática de cada resultado, protección de datos personales y evaluaciones con proceso y sustentación."
  },
  flujo: {
    titulo: "Procedimiento para usar IA en la preparación de una clase",
    pasos: [
      "Definir el objetivo de aprendizaje y el grupo destinatario",
      "Redactar el prompt con rol, tarea, contexto y formato",
      "No ingresar datos personales de estudiantes",
      "Verificar hechos, nivel de dificultad y sesgos del resultado",
      "Ajustar el borrador al contexto de CENTEC y de Cali",
      "Aplicar en clase y registrar qué funcionó"
    ]
  },
  mapa: {
    centro: "IA en el aula",
    ramas: [
      { n: "Fundamentos", h: ["Aprendizaje automático", "Redes neuronales", "Modelos de lenguaje"] },
      { n: "Uso docente", h: ["Prompt: rol, tarea, contexto", "Borradores de rúbricas", "Material diferenciado"] },
      { n: "Verificación", h: ["Alucinaciones", "Contraste con fuentes", "Pertinencia al contexto"] },
      { n: "Evaluación", h: ["Contexto propio", "Proceso visible", "Sustentación oral"] },
      { n: "Ética", h: ["Sesgos algorítmicos", "Privacidad de datos", "Deepfakes y democracia"] }
    ]
  },
  errores: [
    { caso: "Un docente pide a la IA un taller con citas de autores y lo entrega a los estudiantes sin revisarlo.", error: "Los modelos pueden inventar citas, datos o referencias (alucinaciones); el docente transmite errores con su autoridad.", correccion: "Verificar cada cita y dato en la fuente original, y eliminar lo que no se pueda comprobar." },
    { caso: "Una docente pega en un chatbot público la lista de su grupo con notas y diagnósticos para que le sugiera adaptaciones.", error: "Expone datos personales y sensibles de menores sin autorización, en contra de la Ley 1581 de 2012.", correccion: "Describir perfiles de aprendizaje de forma anónima y general, sin nombres ni diagnósticos identificables." },
    { caso: "Un docente asigna un ensayo genérico para la casa y luego usa un detector de IA para calificarlo.", error: "Los detectores de texto generado no son confiables y pueden acusar injustamente; además la tarea no exige contexto ni proceso.", correccion: "Rediseñar la tarea con contexto local, borradores fechados y una sustentación oral breve." },
    { caso: "Una docente prohíbe toda mención de la IA en clase para evitar trampas.", error: "Ignora que los estudiantes ya la usan y pierde la oportunidad de formar su criterio ético y crítico.", correccion: "Definir usos permitidos y no permitidos por actividad, enseñar a verificar y pedir que declaren cómo usaron la IA." }
  ],
  recuperacion: [
    { p: "Explica por qué un modelo de IA generativa puede dar respuestas falsas con total seguridad.", modelo: "Porque no consulta una base de hechos verificados: calcula, a partir de patrones aprendidos en sus datos de entrenamiento, qué texto es más probable dada la instrucción. Si la respuesta probable suena bien pero no corresponde a la realidad, la produce igual. A eso se le llama alucinación. Por eso todo resultado debe verificarse con fuentes primarias antes de usarlo." },
    { p: "Escribe un prompt completo para preparar una actividad de tu área y señala sus cuatro partes.", modelo: "Rol: «Actúa como docente experto en ciencias naturales en Colombia». Tarea: «Diseña cinco preguntas de análisis sobre fotosíntesis». Contexto: «para grado 8, grupo de 30 estudiantes, dos con dificultades lectoras, sin laboratorio». Formato: «tabla con pregunta, nivel de Bloom y respuesta esperada». Luego reviso exactitud, nivel y lenguaje antes de usarlo." },
    { p: "¿Cómo rediseñarías una tarea para que mida aprendizaje y no solo acceso a la IA?", modelo: "Le agregaría tres capas. Primero, contexto específico: datos del barrio, del colegio o de una experiencia vivida en clase. Segundo, proceso visible: borradores, notas de investigación o bitácora con fechas. Tercero, sustentación: cinco minutos para explicar decisiones y responder preguntas. Si el estudiante comprende, puede justificar su trabajo; si no, la brecha aparece enseguida." },
    { p: "¿Qué es un sesgo algorítmico y cómo lo trabajarías con estudiantes?", modelo: "Es un error sistemático que hace que un sistema de IA favorezca o perjudique a ciertos grupos, porque aprende de datos que reflejan desigualdades históricas. Con estudiantes, pediría imágenes o descripciones de profesiones a una IA, analizaríamos qué estereotipos de género o etnia aparecen, y discutiríamos quién se perjudica y cómo se podría corregir." }
  ],
  caso: {
    titulo: "Caso CENTEC",
    contexto: "En grado 10, el profesor Andrés de Lenguaje recibe 28 ensayos sobre la violencia en la literatura colombiana. Varios tienen una redacción impecable, pero similar, y dos citan un libro que él no logra encontrar. Algunos colegas le sugieren pagar un detector de IA; otros, prohibir el celular. Andrés decide revisar su diseño de evaluación. Para el siguiente periodo quiere que los estudiantes puedan usar IA para generar ideas, pero que el ensayo final demuestre pensamiento propio. La coordinación académica le pide una propuesta concreta para compartir con el área, con criterios de uso ético de la IA y una rúbrica.",
    preguntas: [
      "¿Por qué no es confiable basar la calificación en un detector de IA?",
      "¿Qué tres capas incluiría en la nueva tarea para que mida aprendizaje real?",
      "¿Qué criterios agregaría a la rúbrica y qué usos de la IA permitiría declarar?"
    ]
  },
  dominar: {
    memorizar: ["Los cuatro elementos de un prompt: rol, tarea, contexto y formato", "Hitos: Turing 1950, Dartmouth 1956, Transformer 2017, ChatGPT 2022"],
    comprender: ["Por qué la IA generativa predice texto en lugar de verificar hechos", "Cómo los datos de entrenamiento producen sesgos algorítmicos"],
    ejecutar: ["Verificar un resultado de IA con un protocolo de cinco preguntas", "Rediseñar una evaluación con contexto, proceso y sustentación"],
    decidir: ["Qué tareas puede apoyar la IA y cuáles requieren juicio docente exclusivo", "Qué información nunca ingresar a una herramienta de IA"]
  },
  bloom: [
    { n: "N1 Recordar", i: "Define IA generativa, alucinación y sesgo algorítmico." },
    { n: "N2 Comprender", i: "Explica con una analogía cómo un modelo de lenguaje produce texto." },
    { n: "N3 Aplicar", i: "Redacta un prompt con rol, tarea, contexto y formato para su área." },
    { n: "N4 Analizar", i: "Identifica errores, sesgos y datos inventados en un texto generado por IA." },
    { n: "N5 Evaluar", i: "Juzga si una evaluación existente puede resolverse con IA sin aprender, con criterios explícitos." },
    { n: "N6 Crear", i: "Diseña una política de aula sobre uso de IA y una tarea auténtica con rúbrica." }
  ],
  fuentes: [
    "UNESCO (2021). Recomendación sobre la Ética de la Inteligencia Artificial",
    "UNESCO (2023). Guía para el uso de IA generativa en educación e investigación",
    "Departamento Nacional de Planeación (2019). Documento CONPES 3975: Política Nacional para la Transformación Digital e Inteligencia Artificial",
    "Turing, A. M. (1950). Computing Machinery and Intelligence. Mind, 59(236)",
    "Vaswani, A. y otros (2017). Attention Is All You Need. Advances in Neural Information Processing Systems",
    "Ley 1581 de 2012 — Régimen general de protección de datos personales (Colombia)"
  ]
};
