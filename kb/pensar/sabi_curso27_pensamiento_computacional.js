// SABI CENTEC · SABI Pensamiento · Curso 27 · Pensamiento computacional y programación para todas las áreas
// Estado: en revisión (lo aprueba el docente de Tecnología e Informática y el equipo STEAM). Esquema: kb/pensar/_ESQUEMA_PENSAR.md
// Basado solo en lo que enseña el curso y en sus fuentes con DOI verificado (docs/revision/curso27.md). Nombres ficticios.
Object.assign(window.SABI_KB = window.SABI_KB || {}, { pensar: {
  escalera: [
    { n: "N4", verbo: "Analizar",
      tarea: "En 6.° de CENTEC, Valentina quiere dibujar un triángulo equilátero en Scratch con este código: repetir (3) [mover 60 pasos, girar 60 grados]. La figura no cierra y ella dice: «Scratch está dañado». Analiza el error: compara el resultado esperado con el obtenido, ubica la parte del código donde nace el fallo, explica la idea matemática equivocada y describe cómo la llevarías a descubrirlo sin tomar el teclado.",
      criterios: [
        "Distingue el resultado esperado (figura cerrada de tres lados) del obtenido (la figura no cierra)",
        "Ubica el fallo en el bloque de giro y no en el de movimiento ni en la repetición",
        "Explica que el giro corresponde al ángulo exterior (360 ÷ 3 = 120 grados) y no al interior de 60 grados",
        "Describe pasos de la rutina del detective del error sin corregir el código por la estudiante"
      ],
      modelo: "Esperado: un triángulo cerrado. Obtenido: tres trazos que no se unen. La repetición (3) y los 60 pasos están bien; el fallo nace en «girar 60 grados». Valentina confundió el ángulo interior del triángulo equilátero (60 grados) con el giro que hace el lápiz, que es el ángulo exterior: 360 ÷ 3 = 120 grados, porque la suma de los giros para volver a la dirección inicial es 360. No tomaría el teclado. Le pediría reproducir el error, leer el código en voz alta bloque por bloque «como si fuera la máquina» y caminar ella misma el recorrido en el piso del salón, girando 60 grados en cada esquina. Al ver que no vuelve al punto de partida, cambia una sola cosa, el giro, y prueba de nuevo. Cierra en su bitácora: «El error era…, lo encontré porque…»."
    },
    { n: "N5", verbo: "Evaluar",
      tarea: "En la reunión de familias de 5.°, tres docentes proponen qué decir sobre el nuevo proyecto de programación. A: «Aprender a programar subirá las notas en todas las materias». B: «Programar no sirve para nada fuera de la informática». C: «Programar puede ayudar en algunas habilidades, como matemáticas y razonamiento, si enseñamos las conexiones de forma explícita; en lectoescritura el efecto es menor». Juzga las tres afirmaciones con la evidencia del curso y elige cuál comunicar.",
      criterios: [
        "Juzga cada afirmación contra lo que encontró el metaanálisis de Scherer, Siddiq y Sánchez Viveros (2019)",
        "Distingue transferencia cercana (a tareas de programación parecidas) de transferencia lejana (a otras habilidades)",
        "Elige una afirmación y justifica por qué es honesta con las familias",
        "Reconoce un límite de la evidencia (efectos variables según el diseño de los estudios)"
      ],
      modelo: "La A exagera: el metaanálisis de Scherer y colaboradores (2019) encontró un efecto moderado en promedio, y el rendimiento escolar general y la lectoescritura fueron los que menos se beneficiaron; prometer mejores notas en todo crea expectativas falsas. La B también es falsa: el efecto fue mayor en la transferencia cercana (a tareas de programación parecidas a las practicadas) y, aunque menor, también hubo transferencia lejana a otras habilidades, con efectos en pensamiento creativo, matemáticas, metacognición, razonamiento y habilidades espaciales. La C es la más honesta: reconoce beneficios posibles, dice dónde son menores y pone la condición clave, enseñar las conexiones de forma explícita. Elijo la C. Agregaría un límite: los efectos fueron mayores en algunos tipos de estudios, así que en CENTEC evaluaremos lo que pase con nuestra propia rúbrica y les contaremos los resultados, sin prometer más de lo que sabemos."
    },
    { n: "N6", verbo: "Crear",
      tarea: "Diseña una sesión PRIMM de 50 minutos para tu grado y área, con un programa corto de Scratch, ScratchJr o MakeCode. Escribe el programa o descríbelo bloque por bloque, y redacta la consigna de cada uno de los cinco momentos, una pregunta de predicción concreta y una pregunta de salida para comprobar qué aprendieron. Indica cómo trabajarán si hay menos computadores que estudiantes.",
      criterios: [
        "Incluye los cinco momentos de PRIMM en orden, con una consigna concreta para cada uno",
        "La pregunta de predicción obliga a leer el código antes de ejecutarlo",
        "Conecta un concepto computacional con un concepto del área",
        "Prevé el trabajo en parejas con roles que rotan y una pregunta de salida que verifica el aprendizaje"
      ],
      modelo: "5.°, Matemáticas, Scratch. Programa: al hacer clic en la bandera, repetir (4) [mover 80 pasos, girar 90 grados]. Predecir (8 min): «Sin ejecutarlo, dibuja en tu cuaderno lo que hará el lápiz. ¿Cuántos lados tendrá la figura y por qué?». Ejecutar (5 min): las parejas comparan su dibujo con lo que aparece. Investigar (12 min): «¿Qué pasa si quitas el bloque de giro? ¿Qué bloque decide cuántos lados hay?». Modificar (12 min): «Cambia dos números para dibujar un triángulo cerrado». Crear (8 min): «Dibuja un polígono que elijas y explica qué regla usaste para el giro». Conceptos: repetición y ángulo exterior (360 ÷ n). Parejas con conductor y guía que cambian a mitad de la clase. Salida (5 min): «¿Qué giro necesita un hexágono? Explica cómo lo sabes»."
    }
  ],
  lectura: {
    titulo: "Leer código antes de escribirlo",
    base: "Sentance, S., Waite, J. y Kallia, M. (2019). Teaching computer programming with PRIMM: A sociocultural perspective. Computer Science Education, 29(2-3), 136-176. DOI: 10.1080/08993408.2019.1608781. Texto elaborado por SABI CENTEC a partir del módulo 2 del curso.",
    parrafos: [
      "Cuando un docente empieza a enseñar programación, la tentación es abrir la pantalla en blanco y decir: «Ahora creen su propio juego». La intención es buena, porque crear motiva. Sin embargo, un estudiante novato frente a una pantalla vacía no sabe por dónde empezar. Muchos se frustran, otros copian sin entender y unos pocos avanzan solos, lo que hace crecer la distancia entre ellos.",
      "Sentance, Waite y Kallia propusieron una secuencia distinta, llamada PRIMM. Tiene cinco momentos: predecir qué hará un código, ejecutarlo para comprobar, investigarlo línea por línea, modificarlo con una intención y, al final, crear un programa propio. La clave está en el orden. Leer y explicar código antecede a escribirlo, y el apoyo se retira poco a poco.",
      "Esta lógica no es exclusiva de la informática. En matemáticas, un estudiante novato aprende mejor cuando primero estudia ejemplos resueltos y luego resuelve problemas con menos ayuda. PRIMM aplica la misma idea a los programas: el código que funciona es el ejemplo resuelto. Además, la predicción tiene un efecto valioso, porque obliga al estudiante a comprometerse con una respuesta antes de ver el resultado, y el error queda a la vista como información.",
      "En una clase de CENTEC, esto cambia la primera pregunta. En lugar de «¿qué quieres programar?», el docente pregunta «¿qué crees que hará este programa?». Las parejas discuten, ejecutan, comparan y se sorprenden. Después cambian un número o un bloque para lograr algo nuevo. Cuando llega el momento de crear, ya no parten de cero, sino de un código que entienden. Crear sigue siendo la meta, pero se llega a ella por una escalera."
    ],
    literal: [
      { q: "¿Cuántos momentos tiene la secuencia PRIMM?", oracion: "Tiene cinco momentos: predecir qué hará un código, ejecutarlo para comprobar, investigarlo línea por línea, modificarlo con una intención y, al final, crear un programa propio." },
      { q: "¿Qué le pasa a un estudiante novato frente a una pantalla vacía?", oracion: "Sin embargo, un estudiante novato frente a una pantalla vacía no sabe por dónde empezar." },
      { q: "Según el texto, ¿qué es el ejemplo resuelto cuando se aplica PRIMM?", oracion: "PRIMM aplica la misma idea a los programas: el código que funciona es el ejemplo resuelto." },
      { q: "¿Qué pregunta hace el docente en lugar de «¿qué quieres programar?»?", oracion: "En lugar de «¿qué quieres programar?», el docente pregunta «¿qué crees que hará este programa?»." }
    ],
    inferencia: {
      q: "¿Qué se puede concluir sobre el papel del error en una clase organizada con PRIMM?",
      o: [
        "Que el error se evita por completo, porque el estudiante nunca escribe código propio.",
        "Que el error debe corregirlo el docente de inmediato para que la clase no se detenga.",
        "Que el error solo aparece en el momento de crear, cuando se retiran todos los apoyos.",
        "Que una predicción equivocada se convierte en una oportunidad para entender cómo funciona el código."
      ],
      c: 3,
      fb: "El párrafo 3 dice que la predicción obliga a comprometerse con una respuesta y que «el error queda a la vista como información», y el párrafo 4 muestra a las parejas que comparan y se sorprenden. No dice que el error se evite ni que lo corrija el docente; se usa para aprender."
    },
    contexto: {
      palabra: "antecede",
      q: "En el párrafo 2, «Leer y explicar código antecede a escribirlo», la palabra «antecede» significa…",
      o: [
        "reemplaza por completo.",
        "va antes de.",
        "es más difícil que.",
        "ocurre al mismo tiempo que."
      ],
      c: 1,
      fb: "La pista está en la oración anterior: «La clave está en el orden». Si el texto habla de orden y PRIMM deja crear para el final, «antecede» indica que leer y explicar va primero. Además, el prefijo «ante-» significa «antes», como en «anteayer»."
    },
    donde: {
      afirmacion: "Empezar con una pantalla en blanco puede aumentar las diferencias entre los estudiantes de un mismo grupo.",
      parrafo: 0,
      fb: "El párrafo 1 (índice 0) dice que «unos pocos avanzan solos, lo que hace crecer la distancia entre ellos»."
    },
    orden: {
      q: "Ordena los momentos de PRIMM del primero al último.",
      pasos: [
        "Predecir qué hará el código.",
        "Ejecutar el código para comprobar la predicción.",
        "Investigar el código línea por línea y modificarlo con una intención.",
        "Crear un programa propio."
      ],
      fb: "El orden importa: leer y explicar antecede a escribir, y crear es el último momento, cuando el estudiante ya parte de un código que entiende (párrafo 2)."
    },
    argumenta: {
      q: "¿Deberían todas las clases de programación de CENTEC empezar con un código para predecir, aun con estudiantes que ya programan con soltura? Toma una posición y defiéndela.",
      criterios: [
        "Plantea una tesis clara",
        "Da al menos dos razones",
        "Cita una evidencia del texto",
        "Considera una objeción o un límite (por ejemplo, el retiro gradual del apoyo con estudiantes más avanzados)"
      ]
    }
  }
}});
