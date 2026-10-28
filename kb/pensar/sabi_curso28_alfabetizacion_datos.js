// SABI CENTEC · SABI Pensamiento · Curso 28 · Alfabetización de datos y estadística para enseñar y decidir
// Estado: en revisión (lo aprueba el docente de Matemáticas y el equipo académico). Esquema: kb/pensar/_ESQUEMA_PENSAR.md
// Datos de ejemplo ficticios; todos los cálculos verificados con Python (2026-10-27):
// N4: [5,10,10,15,15,20,25,60] suma 160, media 20, mediana 15, 5 de 8 bajo 20, rango 55; sin el 60: media 100/7 ≈ 14,3, mediana 15.
// N5: 3,0 − 2,4 = 0,6; 2,9 − 2,5 = 0,4; diferencia 0,2. N6: 200 000 × 1,02^3 = 212 241,60; simple 212 000; un mes 204 000.
// Lectura: (3 − 2) / 2 = 0,5 (50 %); 1 de cada 1000 = 0,1 puntos porcentuales.
Object.assign(window.SABI_KB = window.SABI_KB || {}, { pensar: {
  escalera: [
    { n: "N4", verbo: "Analizar",
      tarea: "El profesor Óscar, de 8.°, pregunta a 8 estudiantes cuántos minutos tardan en llegar al colegio (datos ficticios): 5, 10, 10, 15, 15, 20, 25 y 60. En la reunión de padres dice: «En promedio tardan 20 minutos, así que la mayoría tarda unos 20 minutos». Analiza los datos: calcula media, mediana y rango, identifica qué hace el valor 60 y explica qué parte de la afirmación de Óscar no se sostiene.",
      criterios: [
        "Calcula bien la media (160 ÷ 8 = 20), la mediana (15) y el rango (60 − 5 = 55)",
        "Identifica el 60 como valor atípico y muestra su efecto sobre la media",
        "Muestra con los datos que la mayoría no tarda unos 20 minutos (5 de los 8 tardan menos)",
        "Propone cómo reportar los datos (mediana junto con la media y una medida de dispersión, con n = 8)"
      ],
      modelo: "La suma es 160 y la media, 160 ÷ 8 = 20 minutos. Ordenados, los dos valores centrales son 15 y 15, así que la mediana es 15. El rango es 60 − 5 = 55 minutos. El valor 60 es atípico: si se quita, la media de los 7 restantes baja a 100 ÷ 7 ≈ 14,3 minutos, mientras la mediana sigue en 15. La media es exacta, pero la conclusión de Óscar no: 5 de los 8 estudiantes tardan menos de 20 minutos, así que «la mayoría tarda unos 20» es falso. Un estudiante que tarda una hora arrastra el promedio. Yo reportaría: «En este grupo de 8 estudiantes, la mediana es 15 minutos: al menos la mitad tarda 15 minutos o menos; el rango va de 5 a 60 minutos y un estudiante tarda una hora». Además, son solo 8 estudiantes: no describen a todo el grado."
    },
    { n: "N5", verbo: "Evaluar",
      tarea: "Datos ficticios. Los 10 estudiantes de 10.°A con notas más bajas en un simulacro recibieron refuerzo; su promedio pasó de 2,4 a 3,0. En 10.°B, los 10 con notas más bajas no recibieron refuerzo y pasaron de 2,5 a 2,9. Tres conclusiones: A) «El refuerzo subió las notas 0,6 puntos». B) «El refuerzo no sirvió, porque 10.°B también subió». C) «La mejora que podría atribuirse al refuerzo es cercana a 0,2, con mucha incertidumbre». Juzga las tres y elige la más defendible.",
      criterios: [
        "Explica la regresión a la media y por qué afecta a quienes se eligieron por tener los resultados más bajos",
        "Usa el grupo de comparación y calcula bien las diferencias (0,6; 0,4; 0,2)",
        "Elige una conclusión y justifica por qué las otras dicen más de lo que permiten los datos",
        "Señala al menos un límite (grupos pequeños, grupos distintos, una sola medición)"
      ],
      modelo: "A atribuye toda la mejora al refuerzo, pero ignora la regresión a la media: quienes se eligen por tener los resultados más bajos tienden a acercarse al centro en una nueva medición, aunque no se haga nada. 10.°B lo muestra: sin refuerzo, subió 2,9 − 2,5 = 0,4. B comete el error contrario: que el otro grupo también suba no prueba que el refuerzo no sirva, porque 10.°A subió 3,0 − 2,4 = 0,6. C es la más defendible: la diferencia entre las dos mejoras es 0,6 − 0,4 = 0,2, y es lo que, como mucho, podría atribuirse al refuerzo. Aun así, la dice con prudencia: son grupos de 10 estudiantes, de cursos distintos y con una sola medición; 0,2 puntos pueden ser simple variación. Antes de extender el programa pediría más mediciones o grupos más grandes."
    },
    { n: "N6", verbo: "Crear",
      tarea: "Crea una pregunta de selección múltiple para un boleto de salida de 9.° sobre interés compuesto: una familia ahorra 200 000 pesos durante 3 meses a una tasa de ejemplo del 2 % mensual compuesto. Escribe la respuesta correcta (verificada) y tres distractores que representen errores reales, di qué error revela cada uno y define qué harás mañana según lo que elijan tus estudiantes.",
      criterios: [
        "La respuesta correcta está bien calculada: 200 000 × (1,02)³ = 212 241,60 pesos",
        "Cada distractor corresponde a un error conceptual identificable y lo nombra",
        "Define una regla de decisión concreta según los resultados por opción",
        "Incluye una comprobación posterior con un ítem nuevo, no con el mismo"
      ],
      modelo: "Pregunta: «Una familia ahorra 200 000 pesos durante 3 meses al 2 % mensual compuesto. ¿Cuánto tendrá al final?». A) 212 241,60 (correcta: 200 000 × 1,02³). B) 212 000: usa interés simple, 200 000 × 0,02 × 3 = 12 000, y olvida el «interés sobre el interés». C) 204 000: calcula solo un mes. D) 12 241,60: da solo el interés ganado y no el total. Decisión: con una hoja de cálculo cuento con CONTAR.SI cuántos eligieron cada opción. Si muchos eligen la misma opción incorrecta, sobre todo B, el error es compartido: mañana reenseño a todo el grupo con una tabla mes a mes (204 000; 208 080; 212 241,60). Si son pocos, formo un grupo de apoyo mientras los demás avanzan. Compruebo con un ítem nuevo, con otra tasa y otro plazo."
    }
  ],
  lectura: {
    titulo: "¿De cuánto a cuánto?",
    base: "Gigerenzer, G., Gaissmaier, W., Kurz-Milcke, E., Schwartz, L. M. y Woloshin, S. (2007). Helping Doctors and Patients Make Sense of Health Statistics. Psychological Science in the Public Interest, 8(2), 53-96. DOI: 10.1111/j.1539-6053.2008.00033.x. Texto elaborado por SABI CENTEC a partir del módulo 2 del curso; el ejemplo numérico es ficticio.",
    parrafos: [
      "Un titular anuncia con letras grandes: «¡Este hábito aumenta el riesgo en 50 %!». La cifra asusta y se comparte rápido en los grupos de familias. Pero antes de preocuparse, conviene hacer una pregunta sencilla que casi nadie hace: ¿de cuánto a cuánto?",
      "Supongamos, con datos ficticios, que el riesgo pasa de 2 de cada 1000 personas a 3 de cada 1000. El aumento relativo se calcula dividiendo la diferencia entre el valor inicial: (3 − 2) / 2 = 0,5, es decir, 50 %. El aumento absoluto, en cambio, es de una persona más por cada 1000, o sea 0,1 puntos porcentuales. Las dos cifras son verdaderas. Solo la segunda permite dimensionar el riesgo.",
      "Gigerenzer y sus colegas documentaron que esta forma de presentar los riesgos confunde a pacientes, a periodistas e incluso a profesionales de la salud. El problema no es que alguien mienta con los números, sino que muestra la mitad de la información. Un riesgo relativo sin el riesgo absoluto es como un precio en descuento sin el precio original: no permite saber si la oferta es grande o pequeña.",
      "Por eso esta pregunta merece un lugar en todas las áreas de CENTEC. Sirve para leer noticias de salud en Ciencias Naturales, promociones de supermercado en Matemáticas y rendimientos financieros en el proyecto de vida. Enseñarla no exige fórmulas difíciles; exige el hábito de no conformarse con un porcentaje suelto. Un estudiante que pregunta «¿de cada cuántas personas?» ya está pensando como un ciudadano con alfabetización estadística."
    ],
    literal: [
      { q: "¿Qué pregunta sencilla propone el texto antes de preocuparse por el titular?", oracion: "Pero antes de preocuparse, conviene hacer una pregunta sencilla que casi nadie hace: ¿de cuánto a cuánto?" },
      { q: "¿Cuál es el aumento absoluto en el ejemplo ficticio?", oracion: "El aumento absoluto, en cambio, es de una persona más por cada 1000, o sea 0,1 puntos porcentuales." },
      { q: "¿A quiénes confunde esta forma de presentar los riesgos, según Gigerenzer y sus colegas?", oracion: "Gigerenzer y sus colegas documentaron que esta forma de presentar los riesgos confunde a pacientes, a periodistas e incluso a profesionales de la salud." },
      { q: "¿Qué exige enseñar esta pregunta?", oracion: "Enseñarla no exige fórmulas difíciles; exige el hábito de no conformarse con un porcentaje suelto." }
    ],
    inferencia: {
      q: "Un volante dice: «¡Con este suplemento, el riesgo de enfermarse baja a la mitad!». ¿Qué se puede concluir a partir del texto?",
      o: [
        "Que el suplemento es muy eficaz, porque reducir algo a la mitad siempre es un cambio grande.",
        "Que el volante miente, porque los porcentajes relativos son siempre falsos.",
        "Que falta saber de cuánto a cuánto baja el riesgo para juzgar si el cambio importa.",
        "Que solo un profesional de la salud puede entender el volante, así que no vale la pena analizarlo."
      ],
      c: 2,
      fb: "«A la mitad» es un cambio relativo. El párrafo 2 muestra que la cifra relativa puede ser verdadera y aun así no permitir dimensionar el riesgo, y el párrafo 3 aclara que el problema no es mentir sino mostrar la mitad de la información. Sin el riesgo absoluto no se puede juzgar."
    },
    contexto: {
      palabra: "dimensionar",
      q: "En el párrafo 2, «Solo la segunda permite dimensionar el riesgo», la palabra «dimensionar» significa…",
      o: [
        "aumentar el riesgo para que se note más.",
        "calcular el riesgo con una fórmula más difícil.",
        "eliminar el riesgo de la información.",
        "apreciar el tamaño real del riesgo."
      ],
      c: 3,
      fb: "La palabra viene de «dimensión», que es el tamaño o la medida de algo. El párrafo contrasta el 50 % que asusta con «una persona más por cada 1000»: la segunda cifra deja ver qué tan grande es en realidad el cambio."
    },
    donde: {
      afirmacion: "La pregunta «¿de cuánto a cuánto?» es útil en varias asignaturas, no solo en Matemáticas.",
      parrafo: 3,
      fb: "El párrafo 4 (índice 3) dice que la pregunta sirve en Ciencias Naturales, en Matemáticas y en el proyecto de vida."
    },
    orden: {
      q: "Ordena los pasos para analizar el titular del texto, del primero al último.",
      pasos: [
        "Leer la cifra relativa que anuncia el titular (50 %).",
        "Preguntar de cuánto a cuánto cambia el riesgo (de 2 a 3 de cada 1000).",
        "Calcular el aumento absoluto (una persona más por cada 1000).",
        "Decidir si el cambio es importante teniendo en cuenta las dos cifras."
      ],
      fb: "Es el recorrido del texto: el titular (párrafo 1), la pregunta clave, los dos cálculos (párrafo 2) y el juicio que solo es posible con la información completa (párrafo 3)."
    },
    argumenta: {
      q: "¿Debería exigirse que toda noticia sobre riesgos presente también el riesgo absoluto? Toma una posición y defiéndela.",
      criterios: [
        "Plantea una tesis clara",
        "Da al menos dos razones",
        "Cita una evidencia del texto",
        "Considera una objeción o un límite (por ejemplo, si las cifras absolutas aburren o se entienden menos)"
      ]
    }
  }
}});
