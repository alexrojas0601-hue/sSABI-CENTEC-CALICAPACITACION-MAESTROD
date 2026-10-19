/* SABI Taller · Derechos Básicos de Aprendizaje · Matemáticas
   Fuente oficial: MEN (2016). Derechos Básicos de Aprendizaje V.2 · Matemáticas (Segunda versión de los DBA).
   Transición: MEN (2016). Derechos Básicos de Aprendizaje V.1 · Transición (DBA transversales; se incluyen los
   pertinentes al pensamiento matemático, con su número original).
   verificado: true  → enunciado leído en el PDF oficial de colombiaaprende.edu.co en esta sesión (transcripción literal).
   verificado: false → la extracción de texto del PDF oficial se corta en 6.°; para 7.°–11.° el enunciado se tomó de una
                       reproducción del documento del MEN (pubhtml5) y debe cotejarse con el PDF oficial. */
(function (T) {
  T.dba = T.dba || {};
  var OF = "https://www.colombiaaprende.edu.co/sites/default/files/files_public/2026-06/dba_matematicas-min.pdf";
  var TR = "https://colombiaaprende.edu.co/sites/default/files/files_public/2026-06/dba_transicion-min_0.pdf";
  var RP = "https://pubhtml5.com/idsa/sztd/basic/51-88";
  function v(n, texto) { return { n: n, texto: texto, verificado: true, url: OF }; }
  function nv(n, texto) { return { n: n, texto: texto, verificado: false, url: RP }; }

  T.dba.matematicas = {
    fuente: "Derechos Básicos de Aprendizaje V.2, Matemáticas, MEN 2016 · Transición: Derechos Básicos de Aprendizaje V.1, Transición, MEN 2016",
    urlOficial: OF,
    tr: [
      { n: 11, texto: "Crea situaciones y propone alternativas de solución a problemas cotidianos a partir de sus conocimientos e imaginación.", verificado: true, url: TR },
      { n: 14, texto: "Construye nociones de espacio, tiempo y medida a través de experiencias cotidianas.", verificado: true, url: TR },
      { n: 15, texto: "Compara, ordena, clasifica objetos e identifica patrones de acuerdo con diferentes criterios.", verificado: true, url: TR },
      { n: 16, texto: "Determina la cantidad de objetos que conforman una colección, al establecer relaciones de correspondencia y acciones de juntar y separar.", verificado: true, url: TR }
    ],
    "01": [
      v(1, "Identifica los usos de los números (como código, cardinal, medida, ordinal) y las operaciones (suma y resta) en contextos de juego, familiares, económicos, entre otros."),
      v(2, "Utiliza diferentes estrategias para contar, realizar operaciones (suma y resta) y resolver problemas aditivos."),
      v(3, "Utiliza las características posicionales del Sistema de Numeración Decimal (SND) para establecer relaciones entre cantidades y comparar números."),
      v(4, "Reconoce y compara atributos que pueden ser medidos en objetos y eventos (longitud, duración, rapidez, masa, peso, capacidad, cantidad de elementos de una colección, entre otros)."),
      v(5, "Realiza medición de longitudes, capacidades, peso, masa, entre otros, para ello utiliza instrumentos y unidades no estandarizadas y estandarizadas."),
      v(6, "Compara objetos del entorno y establece semejanzas y diferencias empleando características geométricas de las formas bidimensionales y tridimensionales (Curvo o recto, abierto o cerrado, plano o sólido, número de lados, número de caras, entre otros)."),
      v(7, "Describe y representa trayectorias y posiciones de objetos y personas para orientar a otros o a sí mismo en el espacio circundante."),
      v(8, "Describe cualitativamente situaciones para identificar el cambio y la variación usando gestos, dibujos, diagramas, medios gráficos y simbólicos."),
      v(9, "Reconoce el signo igual como una equivalencia entre expresiones con sumas y restas."),
      v(10, "Clasifica y organiza datos, los representa utilizando tablas de conteo y pictogramas sin escalas, y comunica los resultados obtenidos para responder preguntas sencillas.")
    ],
    "02": [
      v(1, "Interpreta, propone y resuelve problemas aditivos (de composición, transformación y relación) que involucren la cantidad en una colección, la medida de magnitudes (longitud, peso, capacidad y duración de eventos) y problemas multiplicativos sencillos."),
      v(2, "Utiliza diferentes estrategias para calcular (agrupar, representar elementos en colecciones, etc.) o estimar el resultado de una suma y resta, multiplicación o reparto equitativo."),
      v(3, "Utiliza el Sistema de Numeración Decimal para comparar, ordenar y establecer diferentes relaciones entre dos o más secuencias de números con ayuda de diferentes recursos."),
      v(4, "Compara y explica características que se pueden medir, en el proceso de resolución de problemas relativos a longitud, superficie, velocidad, peso o duración de los eventos, entre otros."),
      v(5, "Utiliza patrones, unidades e instrumentos convencionales y no convencionales en procesos de medición, cálculo y estimación de magnitudes como longitud, peso, capacidad y tiempo."),
      v(6, "Clasifica, describe y representa objetos del entorno a partir de sus propiedades geométricas para establecer relaciones entre las formas bidimensionales y tridimensionales."),
      v(7, "Describe desplazamientos y referencia la posición de un objeto mediante nociones de horizontalidad, verticalidad, paralelismo y perpendicularidad en la solución de problemas."),
      v(8, "Propone e identifica patrones y utiliza propiedades de los números y de las operaciones para calcular valores desconocidos en expresiones aritméticas."),
      v(9, "Opera sobre secuencias numéricas para encontrar números u operaciones faltantes y utiliza las propiedades de las operaciones en contextos escolares o extraescolares."),
      v(10, "Clasifica y organiza datos, los representa utilizando tablas de conteo, pictogramas con escalas y gráficos de puntos, comunica los resultados obtenidos para responder preguntas sencillas."),
      v(11, "Explica, a partir de la experiencia, la posibilidad de ocurrencia o no de un evento cotidiano y el resultado lo utiliza para predecir la ocurrencia de otros eventos.")
    ],
    "03": [
      v(1, "Interpreta, formula y resuelve problemas aditivos de composición, transformación y comparación en diferentes contextos; y multiplicativos, directos e inversos, en diferentes contextos."),
      v(2, "Propone, desarrolla y justifica estrategias para hacer estimaciones y cálculos con operaciones básicas en la solución de problemas."),
      v(3, "Establece comparaciones entre cantidades y expresiones que involucran operaciones y relaciones aditivas y multiplicativas y sus representaciones numéricas."),
      v(4, "Describe y argumenta posibles relaciones entre los valores del área y el perímetro de figuras planas (especialmente cuadriláteros)."),
      v(5, "Realiza estimaciones y mediciones de volumen, capacidad, longitud, área, peso de objetos o la duración de eventos como parte del proceso para resolver diferentes problemas."),
      v(6, "Describe y representa formas bidimensionales y tridimensionales de acuerdo con las propiedades geométricas."),
      v(7, "Formula y resuelve problemas que se relacionan con la posición, la dirección y el movimiento de objetos en el entorno."),
      v(8, "Describe y representa los aspectos que cambian y permanecen constantes en secuencias y en otras situaciones de variación."),
      v(9, "Argumenta sobre situaciones numéricas, geométricas y enunciados verbales en los que aparecen datos desconocidos para definir sus posibles valores según el contexto."),
      v(10, "Lee e interpreta información contenida en tablas de frecuencia, gráficos de barras y/o pictogramas con escala, para formular y resolver preguntas de situaciones de su entorno."),
      v(11, "Plantea y resuelve preguntas sobre la posibilidad de ocurrencia de situaciones aleatorias cotidianas y cuantifica la posibilidad de ocurrencia de eventos simples en una escala cualitativa (mayor, menor e igual).")
    ],
    "04": [
      v(1, "Interpreta las fracciones como razón, relación parte todo, cociente y operador en diferentes contextos."),
      v(2, "Describe y justifica diferentes estrategias para representar, operar y hacer estimaciones con números naturales y números racionales (fraccionarios), expresados como fracción o como decimal."),
      v(3, "Establece relaciones mayor que, menor que, igual que y relaciones multiplicativas entre números racionales en sus formas de fracción o decimal."),
      v(4, "Caracteriza y compara atributos medibles de los objetos (densidad, dureza, viscosidad, masa, capacidad de los recipientes, temperatura) con respecto a procedimientos, instrumentos y unidades de medición; y con respecto a las necesidades a las que responden."),
      v(5, "Elige instrumentos y unidades estandarizadas y no estandarizadas para estimar y medir longitud, área, volumen, capacidad, peso y masa, duración, rapidez, temperatura, y a partir de ellos hace los cálculos necesarios para resolver problemas."),
      v(6, "Identifica, describe y representa figuras bidimensionales y tridimensionales, y establece relaciones entre ellas."),
      v(7, "Identifica los movimientos realizados a una figura en el plano respecto a una posición o eje (rotación, traslación y simetría) y las modificaciones que pueden sufrir las formas (ampliación- reducción)."),
      v(8, "Identifica, documenta e interpreta variaciones de dependencia entre cantidades en diferentes fenómenos (en las matemáticas y en otras ciencias) y los representa por medio de gráficas."),
      v(9, "Identifica patrones en secuencias (aditivas o multiplicativas) y los utiliza para establecer generalizaciones aritméticas o algebraicas."),
      v(10, "Recopila y organiza datos en tablas de doble entrada y los representa en gráficos de barras agrupadas o gráficos de líneas, para dar respuesta a una pregunta planteada. Interpreta la información y comunica sus conclusiones."),
      v(11, "Comprende y explica, usando vocabulario adecuado, la diferencia entre una situación aleatoria y una determinística y predice, en una situación de la vida cotidiana, la presencia o no del azar.")
    ],
    "05": [
      v(1, "Interpreta y utiliza los números naturales y racionales en su representación fraccionaria para formular y resolver problemas aditivos, multiplicativos y que involucren operaciones de potenciación."),
      v(2, "Describe y desarrolla estrategias (algoritmos, propiedades de las operaciones básicas y sus relaciones) para hacer estimaciones y cálculos al solucionar problemas de potenciación."),
      v(3, "Compara y ordena números fraccionarios a través de diversas interpretaciones, recursos y representaciones."),
      v(4, "Justifica relaciones entre superficie y volumen, respecto a dimensiones de figuras y sólidos, y elige las unidades apropiadas según el tipo de medición (directa e indirecta), los instrumentos y los procedimientos."),
      v(5, "Explica las relaciones entre el perímetro y el área de diferentes figuras (variaciones en el perímetro no implican variaciones en el área y viceversa) a partir de mediciones, superposición de figuras, cálculo, entre otras."),
      v(6, "Identifica y describe propiedades que caracterizan un cuerpo en términos de la bidimensionalidad y la tridimensionalidad y resuelve problemas en relación con la composición y descomposición de las formas."),
      v(7, "Resuelve y propone situaciones en las que es necesario describir y localizar la posición y la trayectoria de un objeto con referencia al plano cartesiano."),
      v(8, "Describe e interpreta variaciones de dependencia entre cantidades y las representa por medio de gráficas."),
      v(9, "Utiliza operaciones no convencionales, encuentra propiedades y resuelve ecuaciones en donde están involucradas."),
      v(10, "Formula preguntas que requieren comparar dos grupos de datos, para lo cual recolecta, organiza y usa tablas de frecuencia, gráficos de barras, circulares, de línea, entre otros. Analiza la información presentada y comunica los resultados."),
      v(11, "Utiliza la media y la mediana para resolver problemas en los que se requiere presentar o resumir el comportamiento de un conjunto de datos."),
      v(12, "Predice la posibilidad de ocurrencia de un evento simple a partir de la relación entre los elementos del espacio muestral y los elementos del evento definido.")
    ],
    "06": [
      v(1, "Interpreta los números enteros y racionales (en sus representaciones de fracción y de decimal) con sus operaciones, en diferentes contextos, al resolver problemas de variación, repartos, particiones, estimaciones, etc. Reconoce y establece diferentes relaciones (de orden y equivalencia y las utiliza para argumentar procedimientos)."),
      v(2, "Utiliza las propiedades de los números enteros y racionales y las propiedades de sus operaciones para proponer estrategias y procedimientos de cálculo en la solución de problemas."),
      v(3, "Reconoce y establece diferentes relaciones (orden y equivalencia) entre elementos de diversos dominios numéricos y los utiliza para argumentar procedimientos sencillos."),
      v(4, "Utiliza y explica diferentes estrategias (desarrollo de la forma o plantillas) e instrumentos (regla, compás o software) para la construcción de figuras planas y cuerpos."),
      v(5, "Propone y desarrolla estrategias de estimación, medición y cálculo de diferentes cantidades (ángulos, longitudes, áreas, volúmenes, etc.) para resolver problemas."),
      v(6, "Representa y construye formas bidimensionales y tridimensionales con el apoyo en instrumentos de medida apropiados."),
      v(7, "Reconoce el plano cartesiano como un sistema bidimensional que permite ubicar puntos como sistema de referencia gráfico o geográfico."),
      v(8, "Identifica y analiza propiedades de covariación directa e inversa entre variables, en contextos numéricos, geométricos y cotidianos y las representa mediante gráficas (cartesianas de puntos, continuas, formadas por segmentos, etc.)."),
      v(9, "Opera sobre números desconocidos y encuentra las operaciones apropiadas al contexto para resolver problemas."),
      v(10, "Interpreta información estadística presentada en diversas fuentes de información, la analiza y la usa para plantear y resolver preguntas que sean de su interés."),
      v(11, "Compara características compartidas por dos o más poblaciones o características diferentes dentro de una misma población para lo cual seleccionan muestras, utiliza representaciones gráficas adecuadas y analiza los resultados obtenidos usando conjuntamente las medidas de tendencia central y el rango.")
    ],
    "07": [
      nv(1, "Comprende y resuelve problemas, que involucran los números racionales con las operaciones (suma, resta, multiplicación, división, potenciación, radicación) en contextos escolares y extraescolares."),
      nv(2, "Describe y utiliza diferentes algoritmos, convencionales y no convencionales, al realizar operaciones entre números racionales en sus diferentes representaciones (fracciones y decimales) y los emplea con sentido en la solución de problemas."),
      nv(3, "Utiliza diferentes relaciones, operaciones y representaciones en los números racionales para argumentar y solucionar problemas en los que aparecen cantidades desconocidas."),
      nv(4, "Utiliza escalas apropiadas para representar e interpretar planos, mapas y maquetas con diferentes unidades."),
      nv(5, "Observa objetos tridimensionales desde diferentes puntos de vista, los representa según su ubicación y los reconoce cuando se transforman mediante rotaciones, traslaciones y reflexiones."),
      nv(6, "Representa en el plano cartesiano la variación de magnitudes (áreas y perímetro) y con base en la variación explica el comportamiento de situaciones y fenómenos de la vida diaria."),
      nv(7, "Plantea y resuelve ecuaciones, las describe verbalmente y representa situaciones de variación de manera numérica, simbólica o gráfica."),
      nv(8, "Plantea preguntas para realizar estudios estadísticos en los que representa información mediante histogramas, polígonos de frecuencia, gráficos de línea entre otros; identifica variaciones, relaciones o tendencias para dar respuesta a las preguntas planteadas."),
      nv(9, "Usa el principio multiplicativo en situaciones aleatorias sencillas y lo representa con tablas o diagramas de árbol. Asigna probabilidades a eventos compuestos y los interpreta a partir de propiedades básicas de la probabilidad.")
    ],
    "08": [
      nv(1, "Reconoce la existencia de los números irracionales como números no racionales y los describe de acuerdo con sus características y propiedades."),
      nv(2, "Construye representaciones, argumentos y ejemplos de propiedades de los números racionales y no racionales."),
      nv(3, "Reconoce los diferentes usos y significados de las operaciones (convencionales y no convencionales) y del signo igual (relación de equivalencia e igualdad condicionada) y los utiliza para argumentar equivalencias entre expresiones algebraicas y resolver sistemas de ecuaciones."),
      nv(4, "Describe atributos medibles de diferentes sólidos y explica relaciones entre ellos por medio del lenguaje algebraico."),
      nv(5, "Utiliza y explica diferentes estrategias para encontrar el volumen de objetos regulares e irregulares en la solución de problemas en las matemáticas y en otras ciencias."),
      nv(6, "Identifica relaciones de congruencia y semejanza entre las formas geométricas que configuran el diseño de un objeto."),
      nv(7, "Identifica regularidades y argumenta propiedades de figuras geométricas a partir de teoremas y las aplica en situaciones reales."),
      nv(8, "Identifica y analiza relaciones entre propiedades de las gráficas y propiedades de expresiones algebraicas y relaciona la variación y covariación con los comportamientos gráficos, numéricos y características de las expresiones algebraicas en situaciones de modelación."),
      nv(9, "Propone, compara y usa procedimientos inductivos y lenguaje algebraico para formular y poner a prueba conjeturas en diversas situaciones o contextos."),
      nv(10, "Propone relaciones o modelos funcionales entre variables e identifica y analiza propiedades de covariación entre variables, en contextos numéricos, geométricos y cotidianos y las representa mediante gráficas (cartesianas de puntos, continuas, formadas por segmentos, etc.)."),
      nv(11, "Interpreta información presentada en tablas de frecuencia y gráficos cuyos datos están agrupados en intervalos y decide cuál es la medida de tendencia central que mejor representa el comportamiento de dicho conjunto."),
      nv(12, "Hace predicciones sobre la posibilidad de ocurrencia de un evento compuesto e interpreta la predicción a partir del uso de propiedades básicas de la probabilidad.")
    ],
    "09": [
      nv(1, "Utiliza los números reales (sus operaciones, relaciones y propiedades) para resolver problemas con expresiones polinómicas."),
      nv(2, "Propone y desarrolla expresiones algebraicas en el conjunto de los números reales y utiliza las propiedades de la igualdad y de orden para determinar el conjunto solución de relaciones entre tales expresiones."),
      nv(3, "Utiliza los números reales, sus operaciones, relaciones y representaciones para analizar procesos infinitos y resolver problemas."),
      nv(4, "Identifica y utiliza relaciones entre el volumen y la capacidad de algunos cuerpos redondos (cilindro, cono y esfera) con referencia a las situaciones escolares y extraescolares."),
      nv(5, "Utiliza teoremas, propiedades y relaciones geométricas (teorema de Thales y el teorema de Pitágoras) para proponer y justificar estrategias de medición y cálculo de longitudes."),
      nv(6, "Conjetura acerca de las regularidades de las formas bidimensionales y tridimensionales y realiza inferencias a partir de los criterios de semejanza, congruencia y teoremas básicos."),
      nv(7, "Interpreta el espacio de manera analítica a partir de relaciones geométricas que se establecen en las trayectorias y desplazamientos de los cuerpos en diferentes situaciones."),
      nv(8, "Utiliza expresiones numéricas, algebraicas o gráficas para hacer descripciones de situaciones concretas y tomar decisiones con base en su interpretación."),
      nv(9, "Utiliza procesos inductivos y lenguaje simbólico o algebraico para formular, proponer y resolver conjeturas en la solución de problemas numéricos, geométricos, métricos, en situaciones cotidianas y no cotidianas."),
      nv(10, "Propone un diseño estadístico adecuado para resolver una pregunta que indaga por la comparación sobre las distribuciones de dos grupos de datos, para lo cual usa comprensivamente diagramas de caja, medidas de tendencia central, de variación y de localización."),
      nv(11, "Encuentra el número de posibles resultados de experimentos aleatorios, con reemplazo y sin reemplazo, usando técnicas de conteo adecuadas, y argumenta la selección realizada en el contexto de la situación abordada. Encuentra la probabilidad de eventos aleatorios compuestos.")
    ],
    "10": [
      nv(1, "Utiliza las propiedades de los números reales para justificar procedimientos y diferentes representaciones de subconjuntos de ellos."),
      nv(2, "Utiliza las propiedades algebraicas de equivalencia y de orden de los números reales para comprender y crear estrategias que permitan compararlos y comparar subconjuntos de ellos (por ejemplo, intervalos)."),
      nv(3, "Resuelve problemas que involucran el significado de medidas de magnitudes relacionales (velocidad media, aceleración media) a partir de tablas, gráficas y expresiones algebraicas."),
      nv(4, "Comprende y utiliza funciones para modelar fenómenos periódicos y justifica las soluciones."),
      nv(5, "Explora y describe las propiedades de los lugares geométricos y de sus transformaciones."),
      nv(6, "Comprende y usa el concepto de razón de cambio para estudiar el cambio promedio y el cambio alrededor de un punto y lo reconoce en representaciones gráficas, numéricas y algebraicas."),
      nv(7, "Resuelve problemas mediante el uso de las propiedades de las funciones y usa representaciones tabulares, gráficas y algebraicas para estudiar la variación, la tendencia numérica y las razones de cambio entre magnitudes."),
      nv(8, "Selecciona muestras aleatorias en poblaciones grandes para inferir el comportamiento de las variables en estudio. Interpreta, valora y analiza críticamente los resultados y las inferencias presentadas en estudios estadísticos."),
      nv(9, "Comprende y explica el carácter relativo de las medidas de tendencias central y de dispersión, junto con algunas de sus propiedades, y la necesidad de complementar una medida con otra para obtener mejores lecturas de los datos."),
      nv(10, "Propone y realiza experimentos aleatorios en contextos de las ciencias naturales o sociales y predice la ocurrencia de eventos, para los cuales el espacio muestral es indeterminado.")
    ],
    "11": [
      nv(1, "Utiliza las propiedades de los números (naturales, enteros, racionales y reales) y sus relaciones y operaciones para construir y comparar los distintos sistemas numéricos."),
      nv(2, "Justifica la validez de las propiedades de orden de los números reales y las utiliza para resolver problemas analíticos que se modelen con inecuaciones."),
      nv(3, "Utiliza instrumentos, unidades de medida, sus relaciones y la noción de derivada como razón de cambio, para resolver problemas, estimar cantidades y juzgar la pertinencia de las soluciones de acuerdo al contexto."),
      nv(4, "Interpreta y diseña técnicas para hacer mediciones con niveles crecientes de precisión (uso de diferentes instrumentos para la misma medición, revisión de escalas y rangos de medida, estimaciones, verificaciones a través de mediciones indirectas)."),
      nv(5, "Interpreta la noción de derivada como razón de cambio y como valor de la pendiente de la tangente a una curva y desarrolla métodos para hallar las derivadas de algunas funciones básicas en contextos matemáticos y no matemáticos."),
      nv(6, "Modela objetos geométricos en diversos sistemas de coordenadas (cartesiano, polar, esférico) y realiza comparaciones y toma decisiones con respecto a los modelos."),
      nv(7, "Usa propiedades y modelos funcionales para analizar situaciones y para establecer relaciones funcionales entre variables que permiten estudiar la variación en situaciones intraescolares y extraescolares."),
      nv(8, "Encuentra derivadas de funciones, reconoce sus propiedades y las utiliza para resolver problemas."),
      nv(9, "Plantea y resuelve situaciones problemáticas del contexto real y/o matemático que implican la exploración de posibles asociaciones o correlaciones entre las variables estudiadas."),
      nv(10, "Plantea y resuelve problemas en los que se reconoce cuando dos eventos son o no independientes y usa la probabilidad condicional para comprobarlo.")
    ]
  };
})(window.SABI_TALLER = window.SABI_TALLER || {});
