/* SABI Taller · Derechos Básicos de Aprendizaje · Lenguaje
   Fuente oficial 1.°–11.°: MEN (2016). Derechos Básicos de Aprendizaje V.2 · Lenguaje (el PDF vigente en Colombia Aprende
   es la segunda versión, "Presentación de la segunda Versión de los DBA, 2016"; no existe hoy un PDF oficial "V.1" de Lenguaje
   publicado en el portal). Enunciados principales (sin evidencias) leídos en el PDF oficial el 2026-10-20 y cotejados en
   una segunda lectura para los enunciados largos.
   verificado: true  → enunciado leído en el PDF oficial de colombiaaprende.edu.co en esta sesión (transcripción literal;
                       se conservan las erratas del original: "compresión" en 4.° DBA 6 y "atiendo" en 4.° DBA 8).
   verificado: false → Transición: el PDF oficial de DBA de Transición no pudo descargarse en esta sesión (permiso de acceso
                       no concedido); se deja una paráfrasis prudente, con numeración propia consecutiva (NO es el número
                       del DBA oficial). Debe cotejarse con el PDF de Transición y reemplazarse por el texto literal. */
(function (T) {
  T.dba = T.dba || {};
  var OF = "https://www.colombiaaprende.edu.co/sites/default/files/files_public/2022-06/DBA_Lenguaje-min.pdf";
  var TR = "https://colombiaaprende.edu.co/sites/default/files/files_public/2026-06/dba_transicion-min_0.pdf";
  function v(n, texto) { return { n: n, texto: texto, verificado: true, url: OF }; }
  function p(n, texto) { return { n: n, texto: texto, verificado: false, url: TR }; }

  T.dba.lenguaje = {
    fuente: "Derechos Básicos de Aprendizaje V.2, Lenguaje, MEN 2016 (1.° a 11.°) · Transición: paráfrasis no verificada de los DBA de Transición, MEN 2016 (dimensión comunicativa)",
    urlOficial: OF,
    tr: [
      p(1, "Paráfrasis prudente (no verificada; cotejar con el PDF de DBA de Transición): expresa ideas, emociones e intereses por medio del lenguaje oral, el dibujo y sus propias grafías o formas semejantes a las letras."),
      p(2, "Paráfrasis prudente (no verificada; cotejar con el PDF de DBA de Transición): reconoce sonidos y relaciones sonoras del lenguaje oral (rimas, sílabas, sonidos iniciales) en canciones, juegos y conversaciones."),
      p(3, "Paráfrasis prudente (no verificada; cotejar con el PDF de DBA de Transición): interpreta imágenes, letras, símbolos y personajes que encuentra en cuentos y otros textos que le leen, y expresa lo que comprende.")
    ],
    "01": [
      v(1, "Identifica los diferentes medios de comunicación como una posibilidad para informarse, participar y acceder al universo cultural que lo rodea."),
      v(2, "Relaciona códigos no verbales, como los movimientos corporales y los gestos de las manos o del rostro, con el significado que pueden tomar de acuerdo con el contexto."),
      v(3, "Reconoce en los textos literarios la posibilidad de desarrollar su capacidad creativa y lúdica."),
      v(4, "Interpreta textos literarios como parte de su iniciación en la comprensión de textos."),
      v(5, "Reconoce las temáticas presentes en los mensajes que escucha, a partir de la diferenciación de los sonidos que componen las palabras."),
      v(6, "Interpreta diversos textos a partir de la lectura de palabras sencillas y de las imágenes que contienen."),
      v(7, "Enuncia textos orales de diferente índole sobre temas de su interés o sugeridos por otros."),
      v(8, "Escribe palabras que le permiten comunicar sus ideas, preferencias y aprendizajes.")
    ],
    "02": [
      v(1, "Identifica las características de los medios de comunicación masiva a los que tiene acceso."),
      v(2, "Identifica la función que cumplen las señales y símbolos que aparecen en su entorno."),
      v(3, "Identifica algunos elementos constitutivos de textos literarios como personajes, espacios y acciones."),
      v(4, "Comprende diversos textos literarios a partir de sus propias vivencias."),
      v(5, "Identifica las palabras relevantes de un mensaje y las agrupa en unidades significativas: sonidos en palabras y palabras en oraciones."),
      v(6, "Predice y analiza los contenidos y estructuras de diversos tipos de texto, a partir de sus conocimientos previos."),
      v(7, "Expresa sus ideas atendiendo a las características del contexto comunicativo en que las enuncia (interlocutores, temas, lugares)."),
      v(8, "Produce diferentes tipos de textos para atender a un propósito comunicativo particular.")
    ],
    "03": [
      v(1, "Comprende las funciones que cumplen los medios de comunicación propios de su contexto."),
      v(2, "Comprende que algunos escritos y manifestaciones artísticas pueden estar compuestos por texto, sonido e imágenes."),
      v(3, "Reconoce algunas características de los textos narrativos, tales como el concepto de narrador y estructura narrativa, a partir de la recreación y disfrute de los mismos."),
      v(4, "Escribe textos literarios coherentes, atendiendo a las características textuales e integrando sus saberes e intereses."),
      v(5, "Identifica el papel del emisor y el receptor y sus propósitos comunicativos en una situación específica."),
      v(6, "Interpreta el contenido y la estructura del texto, respondiendo preguntas de orden inferencial y crítico."),
      v(7, "Produce textos orales breves de diferente tipo ajustando el volumen, el tono de la voz, los movimientos corporales y los gestos, al tema y a la situación comunicativa."),
      v(8, "Produce textos verbales y no verbales en los que tiene en cuenta aspectos gramaticales y ortográficos.")
    ],
    "04": [
      v(1, "Analiza la información presentada por los diferentes medios de comunicación con los cuales interactúa."),
      v(2, "Escribe textos a partir de información dispuesta en imágenes, fotografías, manifestaciones artísticas o conversaciones cotidianas."),
      v(3, "Crea textos literarios en los que articula lecturas previas e impresiones sobre un tema o situación."),
      v(4, "Construye textos poéticos, empleando algunas figuras literarias."),
      v(5, "Interpreta el tono del discurso de su interlocutor, a partir de las características de la voz, del ritmo, de las pausas y de la entonación."),
      v(6, "Organiza la información que encuentra en los textos que lee, utilizando técnicas para el procesamiento de la información que le facilitan el proceso de compresión e interpretación textual."),
      v(7, "Participa en espacios de discusión en los que adapta sus emisiones a los requerimientos de la situación comunicativa."),
      v(8, "Produce textos atiendo a elementos como el tipo de público al que va dirigido, el contexto de circulación, sus saberes previos y la diversidad de formatos de la que dispone para su presentación.")
    ],
    "05": [
      v(1, "Utiliza la información que recibe de los medios de comunicación para participar en espacios discursivos de opinión."),
      v(2, "Interpreta mensajes directos e indirectos en algunas imágenes, símbolos o gestos."),
      v(3, "Comprende los roles que asumen los personajes en las obras literarias y su relación con la temática y la época en las que estas se desarrollan."),
      v(4, "Reconoce en la lectura de los distintos géneros literarios diferentes posibilidades de recrear y ampliar su visión de mundo."),
      v(5, "Comprende el sentido global de los mensajes, a partir de la relación entre la información explícita e implícita."),
      v(6, "Identifica la intención comunicativa de los textos con los que interactúa a partir del análisis de su contenido y estructura."),
      v(7, "Construye textos orales atendiendo a los contextos de uso, a los posibles interlocutores y a las líneas temáticas pertinentes con el propósito comunicativo en el que se enmarca el discurso."),
      v(8, "Produce textos verbales y no verbales a partir de los planes textuales que elabora según la tipología a desarrollar.")
    ],
    "06": [
      v(1, "Utiliza la información ofrecida por los medios de comunicación, teniendo en cuenta el mensaje, los interlocutores, la intencionalidad y el contexto de producción, para participar en los procesos comunicativos de su entorno."),
      v(2, "Crea organizadores gráficos en los que integra signos verbales y no verbales para dar cuenta de sus conocimientos."),
      v(3, "Reconoce las obras literarias como una posibilidad de circulación del conocimiento y de desarrollo de su imaginación."),
      v(4, "Identifica algunas expresiones de diferentes regiones y contextos en las obras literarias."),
      v(5, "Interpreta obras de la tradición popular propias de su entorno."),
      v(6, "Comprende diversos tipos de texto, a partir del análisis de sus contenidos, características formales e intenciones comunicativas."),
      v(7, "Produce discursos orales y los adecúa a las circunstancias del contexto: el público, la intención comunicativa y el tema a desarrollar."),
      v(8, "Produce diversos tipos de texto atendiendo a los destinatarios, al medio en que se escribirá y a los propósitos comunicativos.")
    ],
    "07": [
      v(1, "Clasifica la información que circula en los medios de comunicación con los que interactúa y la retoma como referente para sus producciones discursivas."),
      v(2, "Reconoce las diferencias y semejanzas entre sistemas verbales y no verbales para utilizarlos en contextos escolares y sociales."),
      v(3, "Establece conexiones entre los elementos presentes en la literatura y los hechos históricos, culturales y sociales en los que se han producido."),
      v(4, "Clasifica las producciones literarias a partir del análisis de su contenido y estructura en diferentes géneros literarios."),
      v(5, "Comprende discursos orales producidos con un objetivo determinado en diversos contextos sociales y escolares."),
      v(6, "Interpreta textos informativos, expositivos, narrativos, líricos, argumentativos y descriptivos, y da cuenta de sus características formales y no formales."),
      v(7, "Construye narraciones orales, para lo cual retoma las características de los géneros que quiere relatar y los contextos de circulación de su discurso."),
      v(8, "Produce textos verbales y no verbales conforme a las características de una tipología seleccionada, a partir de un proceso de planificación textual.")
    ],
    "08": [
      v(1, "Caracteriza los discursos presentes en los medios de comunicación y otras fuentes de información, atendiendo al contenido, la intención comunicativa del autor y al contexto en que se producen."),
      v(2, "Relaciona las manifestaciones artísticas con las comunidades y culturas en las que se producen."),
      v(3, "Reconoce en las producciones literarias como cuentos, relatos cortos, fábulas y novelas, aspectos referidos a la estructura formal del género y a la identidad cultural que recrea."),
      v(4, "Comprende que el género lírico es una construcción mediada por la musicalidad, la rima y el uso de figuras retóricas, que permiten recrear una idea, un sentimiento o una situación."),
      v(5, "Escucha con atención a sus compañeros en diálogos informales y predice los contenidos de la comunicación."),
      v(6, "Infiere múltiples sentidos en los textos que lee y los relaciona con los conceptos macro del texto y con sus contextos de producción y circulación."),
      v(7, "Reconstruye en sus intervenciones el sentido de los textos desde la relación existente entre la temática, los interlocutores y el contexto histórico-cultural."),
      v(8, "Compone diferentes tipos de texto atendiendo a las características de sus ámbitos de uso: privado/público o cotidiano/científico.")
    ],
    "09": [
      v(1, "Confronta los discursos provenientes de los medios de comunicación con los que interactúa en el medio para afianzar su punto de vista particular."),
      v(2, "Incorpora símbolos de orden deportivo, cívico, político, religioso, científico o publicitario en los discursos que produce, teniendo claro su uso dentro del contexto."),
      v(3, "Analiza el lenguaje literario como una manifestación artística que permite crear ficciones y expresar pensamientos o emociones."),
      v(4, "Compara los formatos de obras literarias y de producciones audiovisuales con el propósito de analizar elementos propios de la narración."),
      v(5, "Comprende y respeta las opiniones en debates sobre temas de actualidad social."),
      v(6, "Interpreta textos atendiendo al funcionamiento de la lengua en situaciones de comunicación, a partir del uso de estrategias de lectura."),
      v(7, "Produce textos orales, a partir del empleo de diversas estrategias para exponer sus argumentos."),
      v(8, "Produce textos verbales y no verbales, a partir de los planes textuales que elabora, y siguiendo procedimientos sistemáticos de corrección lingüística.")
    ],
    "10": [
      v(1, "Asume una posición crítica y propositiva frente a los medios de comunicación masiva para analizar su influencia en la sociedad actual."),
      v(2, "Planea la producción de textos audiovisuales en los que articula elementos verbales y no verbales de la comunicación para desarrollar un tema o una historia."),
      v(3, "Caracteriza la literatura en un momento particular de la historia desde el acercamiento a sus principales exponentes, textos, temáticas y recursos estilísticos."),
      v(4, "Formula puntos de encuentro entre la literatura y las artes plásticas y visuales."),
      v(5, "Participa en discursos orales en los que evalúa aspectos relacionados con la progresión temática, manejo de la voz, tono, estilo y puntos de vista sobre temas sociales, culturales, políticos y científicos."),
      v(6, "Comprende diversos tipos de texto, asumiendo una actitud crítica y argumentando sus puntos de vista frente a lo leído."),
      v(7, "Produce textos orales como ponencias, comentarios, relatorías o entrevistas, atendiendo a la progresión temática, a los interlocutores, al propósito y a la situación comunicativa."),
      v(8, "Escribe textos que evidencian procedimientos sistemáticos de corrección lingüística y el uso de estrategias de producción textual.")
    ],
    "11": [
      v(1, "Participa en escenarios académicos, políticos y culturales; asumiendo una posición crítica y propositiva frente a los discursos que le presentan los distintos medios de comunicación y otras fuentes de información."),
      v(2, "Expresa, con sentido crítico, cómo se articulan los códigos verbales y no verbales en diversas manifestaciones humanas y da cuenta de sus implicaciones culturales, sociales e ideológicas."),
      v(3, "Determina los textos que desea leer y la manera en que abordará su comprensión, con base en sus experiencias de formación e inclinaciones literarias."),
      v(4, "Identifica, en las producciones literarias clásicas, diferentes temas que le permiten establecer comparaciones con las visiones de mundo de otras épocas."),
      v(5, "Comprende que los argumentos de sus interlocutores involucran procesos de comprensión, crítica y proposición."),
      v(6, "Compara diversos tipos de texto, con capacidad crítica y argumentativa para establecer relaciones entre temáticas, características y los múltiples contextos en los que fueron producidos."),
      v(7, "Expresa por medio de producciones orales el dominio de un tema, un texto o la obra de un autor."),
      v(8, "Produce textos académicos a partir de procedimientos sistemáticos de corrección lingüística, atendiendo al tipo de texto y al contexto comunicativo.")
    ]
  };
})(window.SABI_TALLER = window.SABI_TALLER || {});
