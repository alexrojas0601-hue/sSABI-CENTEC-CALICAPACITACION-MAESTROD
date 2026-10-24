// SABI CENTEC · Paquete de conocimiento · Curso 28 · Alfabetización de datos y estadística para enseñar y decidir
// Estado: en revisión (lo aprueba el docente responsable del área de matemáticas y el equipo académico).
// Datos de ejemplo ficticios; cálculos verificados con Python. DOI verificados en Crossref (2026-10-24).
window.SABI_KB = {
  curso: "C28",
  titulo: "Alfabetización de datos y estadística para enseñar y decidir",
  dot: "Dot_Matematicas_Estrategica",
  objetivos: [
    "Al finalizar, el docente podrá diseñar con su grupo una investigación estadística completa siguiendo el ciclo PPDAC (problema, plan, datos, análisis y conclusiones).",
    "Al finalizar, el docente podrá construir tablas y gráficos honestos y calcular e interpretar media, mediana, moda, rango y desviación estándar según el tipo de variable.",
    "Al finalizar, el docente podrá detectar ejes truncados, muestras sesgadas, saltos de la correlación a la causalidad y riesgos relativos presentados sin el riesgo absoluto.",
    "Al finalizar, el docente podrá usar datos de evaluación formativa y reportes Saber para tomar decisiones de aula, protegiendo la privacidad de los estudiantes conforme a la Ley 1581 de 2012."
  ],
  intuitiva: "Piensa en los datos como en las huellas que deja un grupo al caminar por la arena: muestran por dónde pasó la mayoría, quién se alejó del camino y hacia dónde va el grupo. Leer datos es aprender a leer esas huellas sin inventar historias. Un promedio es como señalar el centro de las huellas; la dispersión dice qué tan separadas están; un gráfico es la foto desde lo alto. Pero la foto puede engañar si se toma con un lente que agranda una parte, y las huellas de unos pocos no cuentan lo que hicieron todos. La alfabetización de datos es mirar con curiosidad y con sospecha razonable a la vez: preguntar, medir con cuidado, mostrar con honestidad y concluir con humildad.",
  glosario: [
    { w: "VARIABLE", t: "Variable", d: "Característica que cambia de una persona u objeto a otro y que se observa o mide, como el medio de transporte o los minutos de lectura." },
    { w: "NOMINAL", t: "Variable nominal", d: "Variable cualitativa cuyas categorías no tienen orden, como el deporte favorito; se resume con frecuencias y moda, nunca con promedio." },
    { w: "FRECUENCIA", t: "Frecuencia", d: "Número de veces que aparece un valor o categoría; la frecuencia relativa es ese número dividido entre el total de datos." },
    { w: "MEDIA", t: "Media (promedio)", d: "Suma de todos los datos dividida entre el número de datos; usa todos los valores y es sensible a los valores atípicos." },
    { w: "MEDIANA", t: "Mediana", d: "Valor central de los datos ordenados; deja la mitad por debajo y la mitad por encima y resiste los valores extremos." },
    { w: "MODA", t: "Moda", d: "Valor o categoría que más se repite en un conjunto de datos; es la única medida de centro útil para variables nominales." },
    { w: "RANGO", t: "Rango", d: "Diferencia entre el valor máximo y el mínimo; es la medida de dispersión más sencilla y depende mucho de los extremos." },
    { w: "DISPERSION", t: "Dispersión", d: "Grado en que los datos se separan entre sí o del centro; se describe con el rango, los cuartiles o la desviación estándar." },
    { w: "MUESTRA", t: "Muestra", d: "Parte de la población que se observa para sacar conclusiones sobre ella; debe elegirse de forma que represente a la población." },
    { w: "SESGO", t: "Sesgo", d: "Error sistemático que empuja los resultados en una dirección, por ejemplo al preguntar solo a un grupo particular o con preguntas tendenciosas." },
    { w: "CORRELACION", t: "Correlación", d: "Tendencia de dos variables a variar juntas; por sí sola no demuestra que una sea la causa de la otra." },
    { w: "PERCENTIL", t: "Percentil", d: "Posición de un puntaje frente a los demás evaluados: indica qué porcentaje de personas obtuvo un puntaje menor." },
    { w: "INFLACION", t: "Inflación", d: "Aumento generalizado y sostenido de los precios; reduce el poder adquisitivo si los ingresos crecen menos que los precios." },
    { w: "INTERES", t: "Interés compuesto", d: "Interés que se suma al capital y genera a su vez nuevos intereses; el valor final se calcula como capital por (1 + tasa) elevado al número de periodos." }
  ],
  flashcards: [
    { q: "¿Qué significan las letras del ciclo PPDAC?", a: "Problema, Plan, Datos, Análisis y Conclusiones (Wild y Pfannkuch, 1999)." },
    { q: "¿Qué medida de centro sirve para una variable nominal?", a: "La moda, acompañada de frecuencias y porcentajes." },
    { q: "Media y mediana de 10, 15, 15, 20, 20, 20, 25, 30, 90", a: "Media ≈ 27,2 (245 / 9); mediana = 20." },
    { q: "¿Por qué el eje de un gráfico de barras empieza en cero?", a: "Porque la longitud de la barra representa la cantidad; truncar el eje exagera las diferencias." },
    { q: "¿Qué tres explicaciones revisar antes de afirmar causalidad?", a: "Variable de confusión, causalidad inversa y azar." },
    { q: "Margen de error aproximado al 95 % con n = 100 (muestreo aleatorio)", a: "Cerca de ±10 puntos porcentuales (1/√100); no corrige el sesgo." },
    { q: "El riesgo pasa de 2 a 3 por cada 1.000: ¿aumento relativo y absoluto?", a: "Relativo 50 %; absoluto 1 por cada 1.000 (0,1 puntos porcentuales)." },
    { q: "1.000.000 al 1 % mensual compuesto durante 12 meses", a: "1.000.000 × 1,01^12 ≈ 1.126.825 pesos." },
    { q: "Ingreso +5 % y precios +8 %: ¿cambio del poder adquisitivo?", a: "1,05 / 1,08 − 1 ≈ −2,8 %." },
    { q: "Escalas de Saber 11 según el MEN", a: "Puntaje global de 0 a 500; cada prueba de 0 a 100; además percentil y niveles de desempeño." }
  ],
  timeline: {
    titulo: "Hitos de la educación estadística y la alfabetización de datos",
    items: [
      { y: "1995", e: "Gigerenzer y Hoffrage muestran que las frecuencias naturales mejoran el razonamiento probabilístico (Psychological Review)." },
      { y: "1998", e: "Black y Wiliam publican su revisión sobre evaluación formativa (Assessment in Education)." },
      { y: "1999", e: "Wild y Pfannkuch describen el pensamiento estadístico en la investigación empírica y el ciclo PPDAC (International Statistical Review)." },
      { y: "2002", e: "Iddo Gal propone un modelo de alfabetización estadística de los adultos (International Statistical Review)." },
      { y: "2006", e: "El MEN publica los Estándares Básicos de Competencias, con el pensamiento aleatorio y sistemas de datos en matemáticas." },
      { y: "2012", e: "Colombia expide la Ley 1581 de 2012 sobre protección de datos personales." },
      { y: "2020", e: "La American Statistical Association y el NCTM publican GAISE II para preescolar a grado 12." }
    ]
  },
  w5h1: {
    quien: "Docentes de todas las áreas de CENTEC y sus estudiantes, desde primaria hasta 11.°, con apoyo del área de matemáticas.",
    que: "Formular preguntas, recoger datos con ética, representarlos con honestidad, interpretarlos y decidir con ellos, incluida la estadística financiera básica.",
    cuando: "En proyectos de aula de una a tres semanas, en boletos de salida semanales y al analizar resultados de periodo o de pruebas Saber.",
    donde: "En el aula, en la sala de sistemas con hojas de cálculo gratuitas y en reuniones de área y de comisión de evaluación.",
    porque: "Porque los estudiantes y sus familias toman decisiones con números todos los días y necesitan detectar engaños y proteger sus datos.",
    como: "Con el ciclo PPDAC, ejemplos resueltos y verificados, gráficos con lista de chequeo, análisis de distractores y datos anónimos o agregados."
  },
  flujo: {
    titulo: "Procedimiento para una investigación estadística en el aula",
    pasos: [
      "Formular una pregunta que espere variabilidad",
      "Planear: variables, a quién preguntar y cómo",
      "Recoger datos anónimos y revisar que cuadren los totales",
      "Organizar en tablas y elegir el gráfico según la variable",
      "Calcular centro y dispersión e interpretar",
      "Concluir con alcance justo y reconocer límites",
      "Comunicar y decidir una acción"
    ]
  },
  mapa: {
    centro: "Alfabetización de datos",
    ramas: [
      { n: "Ciclo PPDAC", h: ["Pregunta estadística", "Plan y variables", "Conclusiones con límites"] },
      { n: "Representar", h: ["Tablas de frecuencia", "Gráficos honestos", "Eje desde cero en barras"] },
      { n: "Resumir", h: ["Media, mediana y moda", "Rango y desviación", "Valores atípicos"] },
      { n: "Leer críticamente", h: ["Correlación no es causa", "Muestras y sesgo", "Riesgo relativo y absoluto"] },
      { n: "Decidir en el aula", h: ["Análisis de distractores", "Reportes Saber", "Ley 1581 de 2012"] }
    ]
  },
  errores: [
    { caso: "Un docente informa a la comisión de evaluación solo el promedio de notas del grupo y concluye que «todos van bien».", error: "La media sola oculta la dispersión: puede haber estudiantes en riesgo compensados por notas muy altas.", correccion: "Reportar centro y dispersión (mediana, rango o desviación) y mirar la distribución con un diagrama de puntos." },
    { caso: "Una docente comparte en el grupo de WhatsApp de familias la lista de notas con nombres para «motivar».", error: "Expone datos personales de menores de edad, contrario a los principios de la Ley 1581 de 2012, y puede generar burlas.", correccion: "Compartir datos agregados y entregar los resultados individuales en privado a cada estudiante y su familia." },
    { caso: "Un docente presenta en una reunión un gráfico de barras con el eje desde 80 para mostrar una gran mejora de 82 % a 86 %.", error: "El eje truncado hace ver la diferencia tres veces mayor de lo que es; las barras deben empezar en cero.", correccion: "Graficar con el eje desde cero, informar la diferencia real (4 puntos) y el tamaño de cada grupo." },
    { caso: "Tras un refuerzo aplicado solo a los 10 estudiantes con peores resultados, se afirma que el programa «funcionó» porque subieron.", error: "Ignora la regresión a la media: los extremos tienden a acercarse al centro en una nueva medición sin intervención.", correccion: "Usar un grupo de comparación o datos de varias mediciones antes de atribuir la mejora al programa." }
  ],
  recuperacion: [
    { p: "Explica con tus palabras por qué la mediana puede describir mejor lo típico que la media.", modelo: "La media suma todos los valores, así que un dato extremo la arrastra hacia él. La mediana es el valor del centro de los datos ordenados y casi no cambia con un extremo. En datos asimétricos, como tiempos de lectura, ingresos o precios, la mediana representa mejor al estudiante o al hogar típico. Lo ideal es reportar ambas y una medida de dispersión." },
    { p: "¿Qué preguntas harías ante un gráfico de una noticia antes de creerle?", modelo: "Preguntaría de dónde salen los datos, a quiénes se les preguntó y cuántos eran; si el eje de las barras empieza en cero; si los intervalos de tiempo son iguales; si muestran riesgo relativo sin el absoluto; y si de una correlación están concluyendo una causa sin descartar otras explicaciones." },
    { p: "Describe el ciclo PPDAC con un ejemplo de tu área.", modelo: "Problema: formular una pregunta con variabilidad, por ejemplo cuánto leen mis estudiantes. Plan: definir la variable, a quién preguntar y cómo. Datos: recogerlos de forma anónima y revisar totales. Análisis: tabla, gráfico, mediana y rango. Conclusiones: responder la pregunta, reconocer límites y decidir una acción para el aula." },
    { p: "¿Cómo usarías un boleto de salida para decidir qué hacer mañana?", modelo: "Aplicaría dos o tres preguntas con distractores que representen errores reales, revisaría el porcentaje de acierto por ítem y qué distractor eligieron más. Si muchos comparten el mismo error, reenseño ese punto con otro ejemplo; si es un grupo pequeño, formo un grupo de apoyo; y compruebo después con una pregunta nueva." }
  ],
  caso: {
    titulo: "Caso CENTEC: la reunión de resultados de 9.°",
    contexto: "En una reunión de área (caso ficticio), el profesor Andrés muestra que el promedio del 9.°B en la prueba interna de matemáticas subió de 3,4 a 3,8 frente al 9.° del año anterior, en un gráfico de barras con el eje desde 3,0. Propone extender a todo el colegio la estrategia de juegos que usó. La coordinadora Marcela pide ver los datos. El grupo tiene 26 estudiantes, la prueba cambió de un año a otro y tres estudiantes nuevos llegaron con un nivel alto. Además, Andrés tiene la lista de notas con nombres en su celular personal para mostrarla en la pantalla.",
    preguntas: [
      "¿Qué problemas de lectura de datos identificas (gráfico, cohortes, tamaño del grupo, cambio de prueba)?",
      "¿Qué datos adicionales pedirías antes de decidir extender la estrategia y cómo los compararías?",
      "¿Cómo debería presentar Andrés los resultados para respetar la privacidad de los estudiantes?"
    ]
  },
  dominar: {
    memorizar: ["Las cinco etapas del ciclo PPDAC", "Tipos de variables: nominal, ordinal, discreta y continua", "Fórmulas: media, rango, capital × (1 + tasa)^n"],
    comprender: ["Por qué el centro siempre va acompañado de la dispersión", "Por qué una correlación no prueba causalidad", "Por qué una muestra grande puede estar sesgada"],
    ejecutar: ["Construir tablas de frecuencia y gráficos honestos", "Calcular interés compuesto e ingreso real", "Analizar distractores con CONTAR.SI en una hoja de cálculo"],
    decidir: ["Qué conclusión permiten realmente unos datos", "Qué datos recoger y cómo protegerlos según la Ley 1581 de 2012"]
  },
  bloom: [
    { n: "N1 Recordar", i: "Identifica el tipo de cada variable de una encuesta de aula." },
    { n: "N2 Comprender", i: "Explica qué mide la media, qué mide la mediana y cuándo difieren." },
    { n: "N3 Aplicar", i: "Construye una tabla de frecuencias y un gráfico de barras con la lista de chequeo de honestidad." },
    { n: "N4 Analizar", i: "Detecta ejes truncados, sesgos de selección y saltos de correlación a causalidad en un gráfico real." },
    { n: "N5 Evaluar", i: "Juzga si un reporte de resultados permite la conclusión que se propone y argumenta sus límites." },
    { n: "N6 Crear", i: "Diseña y lleva a cabo con su grupo un proyecto PPDAC con datos anónimos y una decisión de aula." }
  ],
  fuentes: [
    "Wild, C. J. y Pfannkuch, M. (1999). Statistical Thinking in Empirical Enquiry. International Statistical Review, 67(3), 223-248. DOI 10.1111/j.1751-5823.1999.tb00442.x",
    "Gal, I. (2002). Adults' Statistical Literacy: Meanings, Components, Responsibilities. International Statistical Review, 70(1), 1-25. DOI 10.1111/j.1751-5823.2002.tb00336.x",
    "Bargagliotti, A., Franklin, C., Arnold, P., Gould, R., Johnson, S., Perez, L. y Spangler, D. A. (2020). Pre-K–12 Guidelines for Assessment and Instruction in Statistics Education II (GAISE II). American Statistical Association y NCTM.",
    "Gigerenzer, G. y Hoffrage, U. (1995). How to improve Bayesian reasoning without instruction: Frequency formats. Psychological Review, 102(4), 684-704. DOI 10.1037/0033-295X.102.4.684",
    "Gigerenzer, G., Gaissmaier, W., Kurz-Milcke, E., Schwartz, L. M. y Woloshin, S. (2007). Helping Doctors and Patients Make Sense of Health Statistics. Psychological Science in the Public Interest, 8(2), 53-96. DOI 10.1111/j.1539-6053.2008.00033.x",
    "Black, P. y Wiliam, D. (1998). Assessment and Classroom Learning. Assessment in Education: Principles, Policy & Practice, 5(1), 7-74. DOI 10.1080/0969595980050102",
    "Hattie, J. y Timperley, H. (2007). The Power of Feedback. Review of Educational Research, 77(1), 81-112. DOI 10.3102/003465430298487",
    "Ministerio de Educación Nacional (2006). Estándares Básicos de Competencias en Lenguaje, Matemáticas, Ciencias y Ciudadanas; Ley 1581 de 2012 — Protección de datos personales (Colombia)."
  ]
};
