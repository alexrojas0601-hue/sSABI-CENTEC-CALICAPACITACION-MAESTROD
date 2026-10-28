/* SABI Pensamiento · C07 Inteligencia artificial en educación · en revisión (aprueba coordinación académica / área de Tecnología) */
Object.assign(window.SABI_KB = window.SABI_KB || {}, { pensar: {
  escalera: [
    { n: "N4", verbo: "Analizar",
      tarea: "La profesora Lorena (Ciencias Sociales, grado 9) pidió a un chatbot «un taller sobre la Independencia con tres citas de historiadores». El resultado tiene buena redacción, pero una fecha no coincide con el libro de texto y una de las citas atribuye un libro que ella no encuentra. Analiza qué pasó: explica por qué el modelo produce esos errores, distingue qué partes del taller son aprovechables y qué partes exigen verificación, y señala qué faltó en la instrucción que escribió.",
      criterios: [
        "Explica el error como predicción de texto probable (alucinación), no como «mentira» ni como falla puntual",
        "Separa lo aprovechable (estructura, ideas de actividades) de lo que se debe verificar (fechas, citas, referencias)",
        "Identifica los elementos ausentes del prompt: rol, contexto y formato",
        "Propone una forma concreta de verificar la cita y la fecha"
      ],
      modelo: "El modelo no consultó una enciclopedia: calculó qué palabras suelen seguir a otras. Por eso puede producir una fecha equivocada y una cita con autor y libro verosímiles que no existen, con la misma seguridad que el resto; eso es una alucinación. Del taller sirven la estructura, la secuencia de actividades y algunas preguntas, que Lorena puede revisar con su criterio. Todo dato verificable (fechas, citas, títulos) es borrador hasta comprobarlo: la fecha, contra el libro de texto y una fuente institucional; la cita, buscando el libro en el catálogo de una biblioteca; si no aparece, se elimina. A la instrucción le faltaron el rol, el contexto de un grupo de noveno de CENTEC y un formato que pidiera marcar con «verificar» toda cita. Aun con mejor prompt, la revisión sigue siendo de ella." },
    { n: "N5", verbo: "Evaluar",
      tarea: "En CENTEC, tres docentes de grado 10 reciben ensayos con redacción muy parecida. Proponen: A) pagar un detector de IA y sancionar a quien supere cierto porcentaje; B) prohibir el celular y toda mención de la IA; C) rediseñar la evaluación con contexto propio, borradores fechados y una sustentación oral breve. Evalúa las tres opciones con criterios de justicia, validez y viabilidad, y recomienda una.",
      criterios: [
        "Declara los criterios antes de juzgar las opciones",
        "Usa la evidencia del curso sobre detectores (Weber-Wulff y otros, 2023; Liang y otros, 2023)",
        "Explica por qué prohibir no forma criterio en los estudiantes",
        "Reconoce un costo o un cuidado de la opción elegida (tiempo, ajustes razonables)"
      ],
      modelo: "Juzgo con tres criterios: justicia (no sancionar sin prueba), validez (que la evaluación muestre lo que el estudiante sabe) y viabilidad. A falla en justicia: Weber-Wulff y otros probaron catorce herramientas y concluyeron que no son precisas ni confiables, y Liang y otros encontraron que marcan con frecuencia textos en inglés escritos por personas cuya lengua materna no es el inglés; un porcentaje no es prueba. B es viable, pero ignora que los estudiantes ya usan la IA y renuncia a formar su criterio ético. C es la más válida: el contexto propio, el proceso visible y la sustentación muestran comprensión con o sin IA. Recomiendo C. Su costo es el tiempo de sustentar; se reduce con preguntas preparadas, una rúbrica corta y sustentación grupal con una pregunta individual, y con ajustes razonables para quien tenga ansiedad, según el Decreto 1421 de 2017." },
    { n: "N6", verbo: "Crear",
      tarea: "Crea, para tu área y un grado de CENTEC, una guía de práctica con IA de una semana que evite que la herramienta haga el trabajo del estudiante. Incluye: la instrucción (prompt) que los estudiantes usarán con rol, tarea, contexto y formato; dos reglas de uso; una prueba corta sin la herramienta; y el criterio para decidir si la práctica sirvió.",
      criterios: [
        "El prompt tiene rol, tarea, contexto y formato, y pide pistas en lugar de respuestas",
        "Incluye una evaluación del desempeño sin la herramienta",
        "Las reglas protegen datos personales (nada de nombres ni notas en chatbots públicos)",
        "Define un criterio observable para decidir si mantener, ajustar o suspender la práctica"
      ],
      modelo: "Matemáticas, grado 8, ecuaciones lineales. Prompt del estudiante: «Actúa como tutor de matemáticas de grado 8 en Cali. Voy a resolver ecuaciones lineales. No me des la respuesta: si me equivoco, dame una sola pista y pregúntame cuál es mi siguiente paso. Responde en máximo tres líneas». Reglas: 1) primero intento solo y escribo mi procedimiento en el cuaderno; 2) no escribo en el chat mi nombre, mis notas ni datos de compañeros. El viernes, prueba corta de cinco ecuaciones sin ninguna herramienta. Criterio: comparo esa prueba con el resultado de una semana sin IA; si el desempeño sin la herramienta no mejora o baja, ajusto o suspendo, porque Bastani y otros (2025) mostraron que practicar con IA sin salvaguardas puede mejorar la práctica y empeorar el examen." }
  ],
  lectura: {
    titulo: "Cuando la ayuda no se convierte en aprendizaje",
    base: "Bastani, H. y otros (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. PNAS, 122(26), e2422633122 · DOI: 10.1073/pnas.2422633122. Con apoyo en Weber-Wulff, D. y otros (2023), International Journal for Educational Integrity, 19, 26 · DOI: 10.1007/s40979-023-00146-z. Texto original elaborado por SABI CENTEC a partir del curso 07.",
    parrafos: [
      "Un estudiante que practica con un chatbot puede resolver más ejercicios en menos tiempo y sentir que avanza. La pregunta del docente debe ser otra: ¿qué puede hacer ese estudiante cuando la herramienta ya no está? Practicar con ayuda no es lo mismo que aprender.",
      "Bastani y su equipo estudiaron a casi mil estudiantes de secundaria que practicaban matemáticas. Con acceso libre a GPT-4, su desempeño en la práctica mejoró. Sin embargo, al retirar la herramienta, quienes la habían usado sin salvaguardas rindieron 17 % menos en el examen. Un tutor con salvaguardas, que daba pistas y no respuestas, mitigó en buena medida ese daño.",
      "Frente a este riesgo, algunos colegios responden con detectores de IA. La evidencia no los respalda: Weber-Wulff y otros probaron catorce herramientas y concluyeron que no son precisas ni confiables. Además, otros estudios muestran que marcan con frecuencia textos en inglés escritos por personas cuya lengua materna no es el inglés. Sancionar con un detector es arriesgarse a castigar a un inocente.",
      "La salida más sólida está en el diseño. Primero, la práctica con IA debe tener límites, como pistas en lugar de soluciones. Después, debe combinarse con práctica autónoma. Por último, el aprendizaje se comprueba con tareas cortas que el estudiante resuelve solo y con una sustentación en la que explica sus decisiones. La herramienta puede acompañar, pero el pensamiento tiene que seguir siendo del estudiante."
    ],
    literal: [
      { q: "¿Qué pregunta debe hacerse el docente según el primer párrafo?", oracion: "La pregunta del docente debe ser otra: ¿qué puede hacer ese estudiante cuando la herramienta ya no está?" },
      { q: "¿Qué ocurrió en el examen con quienes usaron la herramienta sin salvaguardas?", oracion: "Sin embargo, al retirar la herramienta, quienes la habían usado sin salvaguardas rindieron 17 % menos en el examen." },
      { q: "¿Qué concluyeron Weber-Wulff y otros sobre los detectores?", oracion: "La evidencia no los respalda: Weber-Wulff y otros probaron catorce herramientas y concluyeron que no son precisas ni confiables." },
      { q: "¿Con qué se comprueba el aprendizaje según el último párrafo?", oracion: "Por último, el aprendizaje se comprueba con tareas cortas que el estudiante resuelve solo y con una sustentación en la que explica sus decisiones." }
    ],
    inferencia: {
      q: "¿Qué se puede concluir del estudio de Bastani y su equipo?",
      o: [
        "Que la IA generativa siempre perjudica el aprendizaje de las matemáticas",
        "Que lo decisivo no es usar o no la IA, sino cómo está diseñada la práctica con ella",
        "Que los estudiantes que usan IA hacen trampa en los exámenes",
        "Que el examen sin herramienta es una forma injusta de evaluar"
      ],
      c: 1,
      fb: "El párrafo 2 muestra dos resultados distintos con la misma tecnología: sin salvaguardas hubo daño; con un tutor que daba pistas, el daño se mitigó. La diferencia está en el diseño. La opción A generaliza más allá de lo que dice el texto, y C confunde dependencia con trampa."
    },
    contexto: {
      palabra: "mitigó",
      q: "En el párrafo 2, «mitigó» significa…",
      o: [
        "Eliminó por completo",
        "Disminuyó o suavizó",
        "Ocultó a los investigadores",
        "Aumentó de forma notable"
      ],
      c: 1,
      fb: "La oración dice que el tutor «mitigó en buena medida ese daño»: «en buena medida» indica que lo redujo, no que lo eliminara del todo. Por eso A es un distractor cercano pero exagerado."
    },
    donde: {
      afirmacion: "Usar un detector como prueba puede llevar a sancionar a un estudiante que no usó IA.",
      parrafo: 2,
      fb: "El párrafo 3 presenta la evidencia sobre detectores y cierra con la idea de que sancionar con uno es «arriesgarse a castigar a un inocente»."
    },
    orden: {
      q: "Ordena, del primero al último, los pasos de diseño que propone el texto.",
      pasos: [
        "Poner límites a la práctica con IA, como pistas en lugar de soluciones",
        "Combinarla con práctica autónoma",
        "Comprobar con tareas cortas que el estudiante resuelve solo",
        "Pedir una sustentación en la que explique sus decisiones"
      ],
      fb: "El párrafo 4 los ordena con «Primero», «Después» y «Por último». Las tareas cortas y la sustentación cierran porque comprueban lo que quedó después de practicar."
    },
    argumenta: {
      q: "¿Debería CENTEC permitir el uso de IA en las tareas de práctica de matemáticas de bachillerato? Toma posición.",
      criterios: [
        "Plantea una tesis clara",
        "Da al menos dos razones",
        "Cita una evidencia del texto",
        "Considera una objeción o un límite (por ejemplo, la dependencia o el acceso desigual)"
      ]
    }
  }
}});
