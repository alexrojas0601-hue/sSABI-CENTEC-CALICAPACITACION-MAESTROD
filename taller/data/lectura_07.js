/* SABI Taller · Lectura · Grado 07 · Textos originales SABI CENTEC */
(function (T) {
  T.lectura = T.lectura || {};
  T.lectura["07"] = [
    {
      id: "LC07-1",
      titulo: "El pase de Kevin",
      tipo: "narrativo",
      dba: "EBC Lenguaje 6.°–7.° (Literatura): comprende obras literarias de diferentes géneros y desarrolla su capacidad crítica al analizar personajes, conflictos y cambios",
      parrafos: [
        ["En el barrio Potrero Grande, al oriente de Cali, todos conocían a Kevin Valencia por su zurda.",
         "Tenía trece años y en el torneo intercolegial había marcado once goles en cinco partidos.",
         "Sus compañeros del equipo de séptimo lo admiraban, aunque a veces se cansaban de correr detrás de un balón que casi nunca les llegaba."],
        ["El entrenador, el profesor Hernán Rentería, le había dicho varias veces que el fútbol se juega con once.",
         "Kevin asentía, pero en la cancha se le olvidaba: cuando recibía el balón, agachaba la cabeza y arrancaba solo hacia el arco.",
         "—Si la paso, la pierden —le explicaba después a su mamá, convencido de que tenía razón."],
        ["En la semifinal, contra un colegio de Jamundí, los rivales entendieron rápido el truco.",
         "Cada vez que Kevin tocaba el balón, dos defensas se le pegaban como sombras y se lo quitaban antes de llegar al área.",
         "Al terminar el primer tiempo perdían uno a cero, y en el camerino nadie le hablaba."],
        ["Fue Daniela Hurtado, la arquera, quien rompió el silencio.",
         "—Kevin, cuando dos te marcan a ti, alguien queda libre —le dijo sin rabia—; solo tienes que levantar la cabeza para verlo.",
         "Él quiso responder con una excusa, pero recordó que Esteban había estado solo, levantando la mano, en por lo menos tres jugadas."],
        ["En el segundo tiempo, Kevin recibió el balón cerca de la mitad de la cancha y, como siempre, los dos defensas corrieron hacia él.",
         "Esta vez no agachó la cabeza.",
         "Vio a Esteban libre por la derecha y le mandó un pase largo que cayó justo en su pie.",
         "Esteban empató, y diez minutos después devolvió el favor con un centro que Kevin cabeceó para el dos a uno."],
        ["Esa noche, en el grupo de chat del equipo, alguien publicó la foto del abrazo entre los dos.",
         "Kevin no escribió nada sobre sus goles; solo puso: «El mejor pase del partido fue el de Daniela»."]
      ],
      literal: [
        { p: "¿Cuántos goles había marcado Kevin en el torneo?", r: "once goles en cinco partidos", s: [0, 1] },
        { p: "¿Qué le había dicho varias veces el entrenador a Kevin?", r: "el fútbol se juega con once", s: [1, 0] },
        { p: "¿Contra quién jugaron la semifinal?", r: "contra un colegio de Jamundí", s: [2, 0] },
        { p: "¿A quién vio Kevin libre en el segundo tiempo?", r: "a Esteban", s: [4, 2] }
      ],
      entrelineas: [
        { p: "¿Por qué Kevin casi nunca pasaba el balón?",
          op: ["Porque no confiaba en que sus compañeros pudieran conservarlo", "Porque el entrenador le había ordenado jugar solo", "Porque no sabía hacer pases largos", "Porque sus compañeros nunca pedían el balón"],
          c: 0, s: [1, 2], ex: "Kevin dice «Si la paso, la pierden» y el narrador añade que estaba convencido de tener razón: desconfiaba de su equipo. El entrenador le pedía lo contrario, y en el segundo tiempo demuestra que sí sabía hacer pases largos. Además, Esteban sí pedía el balón levantando la mano." },
        { p: "¿Por qué la estrategia de los rivales funcionó en el primer tiempo?",
          op: ["Porque los rivales eran más altos", "Porque Kevin siempre hacía lo mismo y era fácil adivinar su jugada", "Porque Daniela no tapó bien los disparos", "Porque el árbitro favoreció al colegio de Jamundí"],
          c: 1, s: [2, 1], ex: "Los rivales «entendieron rápido el truco»: Kevin siempre arrancaba solo, así que bastaba con poner dos defensas sobre él. El texto no habla de estatura, del árbitro ni de errores de la arquera." },
        { p: "¿Qué quiere decir Kevin con «El mejor pase del partido fue el de Daniela»?",
          op: ["Que Daniela hizo una asistencia de gol desde el arco", "Que Daniela debería jugar de delantera", "Que el consejo de Daniela fue lo que cambió el partido", "Que estaba molesto porque nadie habló de sus goles"],
          c: 2, s: [5, 1], ex: "Daniela no hizo ninguna jugada de gol; lo que «pasó» fue una idea en el camerino. Kevin usa la palabra «pase» en sentido figurado para reconocer que su consejo cambió el juego. Él mismo decide no hablar de sus goles, así que no está molesto." }
      ],
      contexto: [
        { w: "asentía", s: [1, 1], op: ["decía que sí, mostrando acuerdo", "protestaba en voz alta", "se quedaba dormido"], c: 0, ex: "La oración dice «Kevin asentía, pero en la cancha se le olvidaba»: el «pero» muestra que aceptaba el consejo de palabra, aunque no lo cumplía." },
        { w: "como sombras", s: [2, 1], op: ["muy cerca, sin separarse de él", "vestidos de negro", "lentamente y con miedo"], c: 0, ex: "Una sombra sigue a una persona a todas partes. Los defensas «se le pegaban», es decir, no lo dejaban solo ni un momento." },
        { w: "camerino", s: [2, 2], op: ["el vestuario donde el equipo descansa entre tiempos", "la tribuna del público", "el bus que lleva al equipo"], c: 0, ex: "Es el lugar al que van «al terminar el primer tiempo» y donde Daniela habla con Kevin antes del segundo tiempo: es el vestuario." }
      ],
      dondelopone: [
        { a: "Algunos compañeros se sentían por fuera del juego.", s: [0, 2] },
        { a: "Daniela le habló a Kevin sin enojarse.", s: [3, 1] },
        { a: "Esteban había pedido el balón en varias jugadas anteriores.", s: [3, 2] }
      ],
      orden: [
        "Kevin marca once goles en los primeros cinco partidos.",
        "En la semifinal, dos defensas lo marcan cada vez que toca el balón.",
        "El equipo termina el primer tiempo perdiendo uno a cero.",
        "Daniela le aconseja a Kevin levantar la cabeza.",
        "Kevin le hace un pase largo a Esteban y llega el empate.",
        "Kevin cabecea un centro de Esteban para el dos a uno."
      ],
      causas: [
        { causa: "Kevin siempre arrancaba solo hacia el arco", efecto: "los rivales le pusieron dos defensas y le quitaban el balón" },
        { causa: "Dos defensas marcaban a Kevin", efecto: "un compañero quedaba libre" },
        { causa: "Kevin levantó la cabeza en lugar de agacharla", efecto: "vio a Esteban libre y el equipo empató" }
      ],
      argumenta: [
        { p: "¿Era egoísta Kevin o solo estaba equivocado? Defiende tu posición con razones del texto.",
          criterios: ["Tesis: expresa con claridad su posición", "Razones: presenta al menos dos razones distintas", "Evidencia del texto: cita o parafrasea un hecho (por ejemplo, «Si la paso, la pierden» o el mensaje final)", "Contraargumento: reconoce la opinión contraria y le responde con respeto"] },
        { p: "Daniela habló «sin rabia» en un momento de tensión. ¿Por qué crees que eso fue importante? Relaciónalo con una situación de tu curso.",
          criterios: ["Tesis: afirma qué efecto tuvo la forma de hablar de Daniela", "Razones: explica con al menos dos ideas por qué el tono importa", "Evidencia del texto: menciona cómo reaccionó Kevin", "Conexión: relaciona el cuento con una experiencia propia o de su colegio"] }
      ],
      autor: "Texto original SABI CENTEC"
    },

    {
      id: "LC07-2",
      titulo: "El mar que sube y baja: las mareas del Pacífico",
      tipo: "informativo",
      dba: "EBC Lenguaje 6.°–7.° (Comprensión e interpretación textual): comprende e interpreta diversos tipos de texto para establecer sus relaciones internas y su clasificación en una tipología textual",
      parrafos: [
        ["Quien visita Buenaventura o Tumaco por primera vez suele llevarse una sorpresa.",
         "En la mañana, las lanchas flotan junto a las casas; unas horas después, esas mismas lanchas descansan sobre el barro, y el mar parece haberse ido lejos.",
         "Ese ir y venir del agua se llama marea, y en la costa pacífica colombiana es tan notorio que organiza buena parte de la vida diaria."],
        ["La causa principal de las mareas es la Luna.",
         "Su fuerza de gravedad atrae el agua de los océanos y forma una especie de abultamiento en el lado de la Tierra que mira hacia ella, y otro en el lado opuesto.",
         "Como la Tierra gira sobre sí misma, cada costa pasa por esos abultamientos y por las zonas intermedias.",
         "Por eso, en lugares como el Pacífico colombiano, el mar sube y baja dos veces al día, aproximadamente."],
        ["Cuando el agua alcanza su punto más alto se habla de pleamar o marea alta; cuando llega al más bajo, de bajamar o marea baja.",
         "Entre una pleamar y la siguiente pasan un poco más de doce horas, por lo que las mareas se atrasan un poco cada día.",
         "El Sol también influye, aunque menos que la Luna, porque está mucho más lejos.",
         "Cuando el Sol y la Luna se alinean, en luna llena y en luna nueva, las mareas son más fuertes y se conocen como aguas vivas."],
        ["Las comunidades del Pacífico conocen estos ritmos desde hace generaciones.",
         "Las recolectoras de piangua salen en la bajamar, cuando el manglar deja al descubierto el barro donde vive ese molusco.",
         "Los pescadores calculan la hora de salir y de volver para no quedar varados, y muchas viviendas se construyen sobre pilotes de madera, llamados palafitos, para que la marea alta pase por debajo."],
        ["Conocer las mareas también salva vidas.",
         "Un bañista que se adentra caminando en una playa durante la bajamar puede quedar rodeado por el agua cuando la marea empieza a subir.",
         "Por eso las tablas de mareas, que anuncian a qué hora ocurrirán la pleamar y la bajamar, son tan útiles para turistas, pescadores y capitanes como el pronóstico del clima para un agricultor."]
      ],
      literal: [
        { p: "¿Cómo se llama el ir y venir del agua del mar?", r: "se llama marea", s: [0, 2] },
        { p: "¿Cuál es la causa principal de las mareas?", r: "la Luna", s: [1, 0] },
        { p: "¿Qué otro nombre recibe la pleamar?", r: "marea alta", s: [2, 0] },
        { p: "¿Cómo se llaman las viviendas construidas sobre pilotes de madera?", r: "palafitos", s: [3, 2] }
      ],
      entrelineas: [
        { p: "¿Por qué las lanchas que flotaban en la mañana aparecen sobre el barro unas horas después?",
          op: ["Porque sus dueños las sacaron del agua para repararlas", "Porque llegó la bajamar y el agua se retiró", "Porque el barro subió durante la noche", "Porque se hundieron por el peso de la pesca"],
          c: 1, s: [0, 1], ex: "El texto explica que el mar sube y baja dos veces al día: unas horas después de la marea alta llega la bajamar, el agua se retira y las lanchas quedan sobre el barro sin que nadie las mueva." },
        { p: "Si hoy la pleamar ocurrió a las 8:00 de la mañana, ¿a qué hora será, aproximadamente, la primera pleamar de mañana?",
          op: ["Un poco después de las 8:00 de la mañana", "Exactamente a las 8:00 de la mañana", "Un poco antes de las 8:00 de la mañana", "A las 8:00 de la noche y nunca en la mañana"],
          c: 0, s: [2, 1], ex: "Entre una pleamar y la siguiente pasan «un poco más de doce horas»: habrá otra en la noche, poco después de las 8:00 p. m., y la de la mañana siguiente llegará un poco después de las 8:00 a. m. Por eso el texto dice que las mareas «se atrasan un poco cada día»." },
        { p: "¿Cuál es la intención principal del texto?",
          op: ["Vender viajes turísticos a Tumaco", "Contar la historia de una familia de pescadores", "Convencer a los lectores de no bañarse nunca en el mar", "Explicar qué son las mareas y por qué son importantes para la vida en el Pacífico"],
          c: 3, s: [0, 2], ex: "El texto define la marea, explica su causa y sus tipos, y muestra cómo organiza la vida y la seguridad en la costa. No narra la vida de una familia ni prohíbe bañarse: aconseja conocer las tablas de mareas." }
      ],
      contexto: [
        { w: "notorio", s: [0, 2], op: ["muy evidente, fácil de notar", "secreto y escondido", "peligroso y violento"], c: 0, ex: "El fenómeno «organiza buena parte de la vida diaria» y las lanchas pasan de flotar a quedar en el barro: es algo que cualquiera nota." },
        { w: "abultamiento", s: [1, 1], op: ["una parte que sobresale o se levanta", "un hueco profundo", "una corriente de agua dulce"], c: 0, ex: "La Luna «atrae el agua», es decir, la levanta hacia ella; se forma un bulto de agua en ese lado de la Tierra." },
        { w: "varados", s: [3, 2], op: ["atascados en tierra o en el barro, sin poder navegar", "perdidos en mar abierto", "mareados por las olas"], c: 0, ex: "Los pescadores calculan la hora de volver: si se demoran, la bajamar deja las lanchas sobre el barro, igual que en el primer párrafo." }
      ],
      dondelopone: [
        { a: "Las mareas no ocurren todos los días a la misma hora.", s: [2, 1] },
        { a: "Hay casas diseñadas para que el agua pase por debajo de ellas.", s: [3, 2] },
        { a: "Caminar mar adentro con la marea baja puede ser peligroso.", s: [4, 1] }
      ],
      orden: [
        "Una escena de lanchas que flotan y luego quedan sobre el barro.",
        "La Luna como causa principal de las mareas.",
        "Los nombres de la marea alta y baja, y la influencia del Sol.",
        "Cómo las comunidades del Pacífico viven al ritmo de las mareas.",
        "La importancia de las tablas de mareas para la seguridad."
      ],
      causas: [
        { causa: "La gravedad de la Luna atrae el agua de los océanos", efecto: "se forman las mareas" },
        { causa: "El Sol y la Luna se alinean en luna llena y luna nueva", efecto: "las mareas son más fuertes" },
        { causa: "En la bajamar el manglar deja el barro al descubierto", efecto: "las recolectoras salen a buscar piangua" },
        { causa: "La marea sube y llega hasta las casas", efecto: "muchas viviendas se construyen sobre pilotes" }
      ],
      argumenta: [
        { p: "¿Deberían las playas del Pacífico tener avisos visibles con la hora de la pleamar y la bajamar? Defiende tu posición.",
          criterios: ["Tesis: toma una posición clara", "Razones: da al menos dos razones (seguridad, turismo, trabajo)", "Evidencia del texto: usa un dato del texto (el bañista rodeado por el agua, las tablas de mareas)", "Contraargumento: responde a una objeción (costo, que la gente no los lea)"] },
        { p: "El texto dice que las comunidades del Pacífico conocen las mareas «desde hace generaciones». ¿Vale tanto ese saber tradicional como el conocimiento científico? Argumenta.",
          criterios: ["Tesis: expresa una postura clara", "Razones: presenta al menos dos ideas", "Evidencia del texto: menciona cómo usan las mareas pescadores y recolectoras", "Contraargumento: reconoce el valor del otro tipo de conocimiento y responde"] }
      ],
      autor: "Texto original SABI CENTEC"
    },

    {
      id: "LC07-3",
      titulo: "Cómo construir un pluviómetro con una botella",
      tipo: "instructivo",
      dba: "EBC Lenguaje 6.°–7.° (Comprensión e interpretación textual): reconoce las características, la estructura y la intención de los textos instructivos y sigue sus pasos para resolver una tarea",
      parrafos: [
        ["En Cali hay temporadas de lluvia y temporadas más secas, y el mismo día puede llover mucho en un barrio y casi nada en otro.",
         "Los meteorólogos miden la lluvia con un instrumento llamado pluviómetro, y tú puedes construir uno sencillo para llevar el registro desde tu casa o tu colegio."],
        ["Materiales: una botella plástica transparente de paredes rectas, de unos dos litros; tijeras; cinta pegante; una regla; un marcador; un puñado de piedritas, y una libreta para anotar."],
        ["Paso 1: con ayuda de un adulto, corta la botella un poco por debajo del lugar donde empieza a estrecharse el cuello.",
         "Paso 2: pon las piedritas en el fondo para que el pluviómetro no se voltee con el viento, y agrega agua hasta cubrirlas.",
         "Paso 3: pega la regla por fuera con cinta, de modo que el cero quede justo a la altura del agua que agregaste.",
         "Paso 4: voltea la parte de arriba de la botella y encájala en la boca, como si fuera un embudo; así entrará la lluvia y se evaporará menos agua.",
         "Paso 5: ubica el pluviómetro en un lugar abierto, lejos de techos, árboles y paredes que puedan desviar o tapar la lluvia."],
        ["Paso 6: revisa el nivel todos los días a la misma hora y anota en la libreta cuántos milímetros subió el agua por encima del cero.",
         "Paso 7: después de cada lectura, saca el agua sobrante hasta que el nivel vuelva al cero."],
        ["Ten en cuenta que un milímetro de lluvia equivale a un litro de agua caída sobre cada metro cuadrado de suelo.",
         "Por ejemplo, si en una semana anotas cuarenta milímetros, sobre el techo de un salón de cincuenta metros cuadrados habrán caído unos dos mil litros.",
         "No dejes el agua quieta durante varios días, porque los zancudos que transmiten el dengue ponen sus huevos en recipientes con agua estancada."],
        ["Al cabo de un mes tendrás una tabla con tus propios datos.",
         "Podrás compararla con la de compañeros que vivan en otros barrios y descubrir que la lluvia, como tantas cosas en la ciudad, no cae igual en todas partes."]
      ],
      literal: [
        { p: "¿Cómo se llama el instrumento con que se mide la lluvia?", r: "un instrumento llamado pluviómetro", s: [0, 1] },
        { p: "¿Qué se pone en el fondo de la botella?", r: "las piedritas", s: [2, 1] },
        { p: "¿Lejos de qué se debe ubicar el pluviómetro?", r: "lejos de techos, árboles y paredes", s: [2, 4] },
        { p: "¿A cuánta agua equivale un milímetro de lluvia?", r: "a un litro de agua caída sobre cada metro cuadrado de suelo", s: [4, 0] }
      ],
      entrelineas: [
        { p: "¿Por qué el paso 3 pide que el cero de la regla quede a la altura del agua que se agregó?",
          op: ["Para que la regla no se moje", "Para que el agua de las piedritas no se cuente como lluvia", "Para que el pluviómetro se vea más bonito", "Para medir cuántas piedritas hay en el fondo"],
          c: 1, s: [2, 2], ex: "En el paso 2 se agrega agua que no es lluvia. Si el cero queda a esa altura, solo se mide lo que sube después, es decir, la lluvia. Por eso, en el paso 7, el nivel debe volver siempre al cero." },
        { p: "Si alguien pone el pluviómetro debajo del palo de mango del patio, ¿qué pasaría probablemente?",
          op: ["Las hojas protegerían el agua del sol y la medición sería más exacta", "La medición sería exactamente igual", "Las hojas taparían o desviarían parte de la lluvia y los datos no serían confiables", "El agua se evaporaría más rápido por el calor del sol"],
          c: 2, s: [2, 4], ex: "El paso 5 advierte que los árboles pueden «desviar o tapar la lluvia». Bajo un mango, parte del agua caería en las hojas o goteando desde ellas, así que la medición no sería confiable: podría registrar menos (o, por el goteo, más) de lo que cayó. Las hojas no hacen la medición más exacta, y la sombra no aumenta la evaporación." },
        { p: "¿Por qué el paso 7 pide sacar el agua después de cada lectura?",
          op: ["Para que cada lectura mida solo la lluvia caída desde la anterior", "Para que la botella pese menos", "Porque el agua de lluvia es peligrosa", "Para regar las plantas con esa agua todos los días"],
          c: 0, s: [3, 1], ex: "Las lecturas son diarias y se anota cuánto subió el agua «por encima del cero». Si no se vacía, el agua de varios días se sumaría. Además, el texto advierte después que el agua quieta atrae zancudos." }
      ],
      contexto: [
        { w: "estrecharse", s: [2, 0], op: ["volverse más angosto", "ponerse más duro", "cambiar de color"], c: 0, ex: "El cuello de una botella es la parte delgada: la botella «empieza a estrecharse» justo donde se vuelve más angosta." },
        { w: "desviar", s: [2, 4], op: ["cambiar la dirección de algo", "aumentar la cantidad", "limpiar el agua"], c: 0, ex: "Techos y paredes pueden hacer que la lluvia caiga hacia otro lado y no entre al embudo, es decir, la desvían." },
        { w: "estancada", s: [4, 2], op: ["quieta, que no corre ni se cambia", "limpia y fresca", "muy caliente"], c: 0, ex: "La misma oración habla de «agua quieta durante varios días»; el agua estancada es la que no se mueve ni se renueva." }
      ],
      dondelopone: [
        { a: "La forma de embudo ayuda a que el agua recogida no se pierda tan fácilmente.", s: [2, 3] },
        { a: "Las mediciones deben hacerse siempre en el mismo momento del día.", s: [3, 0] },
        { a: "Un recipiente con agua quieta puede convertirse en criadero de mosquitos.", s: [4, 2] }
      ],
      orden: [
        "Cortar la botella por debajo del cuello.",
        "Poner piedritas y agua en el fondo.",
        "Pegar la regla con el cero a la altura del agua.",
        "Encajar la parte de arriba como embudo.",
        "Ubicar el pluviómetro en un lugar abierto.",
        "Leer y anotar cada día los milímetros de lluvia."
      ],
      causas: [
        { causa: "Se ponen piedritas en el fondo", efecto: "el pluviómetro no se voltea con el viento" },
        { causa: "La parte de arriba se usa como embudo", efecto: "se evapora menos agua" },
        { causa: "Se deja agua estancada varios días", efecto: "los zancudos pueden poner sus huevos en ella" }
      ],
      argumenta: [
        { p: "¿Vale la pena medir la lluvia en el colegio si ya existen estaciones meteorológicas profesionales? Defiende tu posición.",
          criterios: ["Tesis: expresa con claridad si vale o no la pena", "Razones: presenta al menos dos razones (aprendizaje, datos del barrio, huerta, costo)", "Evidencia del texto: usa una idea del texto (la lluvia no cae igual en todas partes, el cálculo de litros)", "Contraargumento: responde a quien diga que los datos caseros no son precisos"] },
        { p: "Usa el ejemplo del texto: si el techo de tu colegio recoge miles de litros en una semana lluviosa, ¿debería el colegio guardar esa agua? Argumenta con cuidado del ambiente y de la salud.",
          criterios: ["Tesis: toma una posición clara", "Razones: explica beneficios y riesgos con al menos dos ideas", "Evidencia del texto: menciona el dato de los dos mil litros o la advertencia sobre el dengue", "Propuesta: plantea una condición o cuidado para hacerlo bien"] }
      ],
      autor: "Texto original SABI CENTEC"
    },

    {
      id: "LC07-4",
      titulo: "El guatín olvidadizo",
      tipo: "fabula",
      dba: "EBC Lenguaje 6.°–7.° (Literatura): reconoce la tradición oral y los géneros narrativos breves, como la fábula, e interpreta su enseñanza y sus recursos",
      parrafos: [
        ["En un bosque de la cordillera Occidental, cerca del río Pance, vivía un guatín llamado Saturnino.",
         "Como todos los de su especie, tenía patas delgadas, pelaje color canela y la costumbre de enterrar semillas para comérselas en tiempos de escasez."],
        ["El problema era que Saturnino olvidaba dónde las había enterrado.",
         "Cavaba aquí y allá, olfateaba bajo las hojas y, muchas veces, regresaba a su madriguera con el estómago vacío.",
         "—Ahí va el despistado —se burlaba la ardilla desde una rama—; trabaja todo el año para alimentar a la tierra.",
         "Los loros repetían el chiste a carcajadas, y hasta el armadillo, que casi nunca hablaba, sonreía con disimulo."],
        ["Saturnino se avergonzaba, pero no dejaba de hacer lo que sabía hacer.",
         "Cada temporada de cosecha recogía semillas de los árboles del monte y las escondía bajo la tierra húmeda, lejos del lugar donde habían caído."],
        ["Pasaron muchos años, y un verano largo y seco cayó sobre la montaña.",
         "Los frutos escasearon, la quebrada se convirtió en un hilo de agua, y la ardilla y los loros tuvieron que viajar lejos buscando comida.",
         "Cuando por fin encontraron un rincón verde y cargado de frutos, se quedaron mudos: eran árboles jóvenes que crecían, uno aquí y otro allá, justo en los lugares donde Saturnino había cavado durante años."],
        ["El armadillo, que lo había observado todo en silencio, fue el primero en hablar.",
         "—Estas son las semillas que olvidaste, Saturnino; mientras nos reíamos de ti, tú sembrabas el bosque que hoy nos alimenta.",
         "La ardilla bajó la cabeza y le ofreció al guatín el primer fruto del árbol más alto."],
        ["Moraleja: no todo lo que parece un error es inútil, y quien se burla del trabajo ajeno quizá un día dependa de él.",
         "Y, aunque esta es una fábula, los biólogos saben que los guatines de verdad ayudan a renovar los bosques, porque muchas de las semillas que entierran nunca vuelven a ser buscadas y terminan germinando."]
      ],
      literal: [
        { p: "¿Cómo era el pelaje de Saturnino?", r: "pelaje color canela", s: [0, 1] },
        { p: "¿Qué era lo que Saturnino olvidaba?", r: "olvidaba dónde las había enterrado", s: [1, 0] },
        { p: "¿Qué tipo de tiempo cayó sobre la montaña después de muchos años?", r: "un verano largo y seco", s: [3, 0] },
        { p: "¿Qué le ofreció la ardilla al guatín?", r: "el primer fruto del árbol más alto", s: [4, 2] }
      ],
      entrelineas: [
        { p: "¿Qué quería decir la ardilla con «trabaja todo el año para alimentar a la tierra»?",
          op: ["Que el guatín era un buen agricultor", "Que el trabajo del guatín no servía para nada, porque nunca encontraba sus semillas", "Que la tierra del bosque estaba enferma", "Que admiraba el esfuerzo del guatín"],
          c: 1, s: [1, 2], ex: "Es una burla: la ardilla lo llama «despistado» y los loros se ríen. Quiere decir que el guatín pierde su trabajo. Lo irónico es que, al final, la frase resulta cierta en un sentido que ella no imaginaba: sí alimentó la tierra." },
        { p: "¿Por qué crecían árboles jóvenes justo donde Saturnino había cavado?",
          op: ["Porque los loros los sembraron allí", "Porque el armadillo los regaba en secreto", "Porque las semillas que el guatín olvidó germinaron y se volvieron árboles", "Porque la sequía hizo crecer los árboles más rápido"],
          c: 2, s: [4, 1], ex: "El armadillo lo dice: son las semillas que Saturnino olvidó. La sequía, por el contrario, hizo escasear los frutos; nadie más aparece sembrando en el relato." },
        { p: "¿Qué muestra el gesto final de la ardilla?",
          op: ["Que reconoce su error y agradece al guatín", "Que quiere quedarse con el resto de los frutos", "Que todavía se burla del guatín", "Que está cansada del viaje"],
          c: 0, s: [4, 2], ex: "«Bajó la cabeza» es un gesto de vergüenza, y ofrecerle el primer fruto es una forma de agradecer y pedir perdón. Ya no hay burla en sus acciones." }
      ],
      contexto: [
        { w: "escasez", s: [0, 1], op: ["falta de lo necesario, poca comida", "abundancia de frutos", "temporada de fiestas"], c: 0, ex: "El guatín guarda semillas para comer en esos tiempos: se guarda comida para cuando falta. Más adelante el texto confirma la idea: «Los frutos escasearon»." },
        { w: "con disimulo", s: [1, 3], op: ["tratando de que no se notara", "a gritos", "con mucha tristeza"], c: 0, ex: "El armadillo «casi nunca hablaba»: no se ríe a carcajadas como los loros, sino que sonríe de forma discreta, intentando que no se note." },
        { w: "mudos", s: [3, 2], op: ["sin poder decir nada por la sorpresa", "sordos por el ruido", "enfermos por la sequía"], c: 0, ex: "Encuentran algo inesperado: árboles donde el guatín había cavado. Quedarse mudo es quedarse sin palabras por el asombro." }
      ],
      dondelopone: [
        { a: "A pesar de las burlas, el guatín siguió haciendo su trabajo.", s: [2, 0] },
        { a: "La sequía obligó a algunos animales a alejarse para conseguir alimento.", s: [3, 1] },
        { a: "En la vida real, los guatines cumplen una función importante en el bosque.", s: [5, 1] }
      ],
      orden: [
        "Saturnino entierra semillas y olvida dónde las dejó.",
        "La ardilla y los loros se burlan de él.",
        "Saturnino sigue escondiendo semillas cada cosecha.",
        "Un verano largo y seco hace escasear los frutos.",
        "Los animales encuentran árboles jóvenes cargados de frutos.",
        "El armadillo explica el origen de los árboles y la ardilla ofrece un fruto al guatín."
      ],
      causas: [
        { causa: "Saturnino olvidaba dónde enterraba las semillas", efecto: "muchas veces regresaba a su madriguera con hambre" },
        { causa: "Las semillas olvidadas germinaron", efecto: "crecieron árboles jóvenes que alimentaron a los animales en la sequía" },
        { causa: "Llegó un verano largo y seco", efecto: "la ardilla y los loros tuvieron que viajar lejos buscando comida" }
      ],
      argumenta: [
        { p: "La moraleja dice que «no todo lo que parece un error es inútil». ¿Estás de acuerdo? Da un ejemplo de tu vida escolar.",
          criterios: ["Tesis: expresa si está de acuerdo, en desacuerdo o en parte", "Razones: presenta al menos dos razones", "Evidencia del texto: usa lo que pasó con las semillas olvidadas", "Conexión: propone un ejemplo propio coherente con su postura"] },
        { p: "¿Cuál de los personajes cambia más en la fábula: Saturnino o la ardilla? Argumenta.",
          criterios: ["Tesis: elige un personaje", "Razones: compara cómo era al principio y cómo es al final", "Evidencia del texto: cita acciones o palabras del personaje", "Contraargumento: reconoce por qué alguien podría elegir al otro personaje y responde"] }
      ],
      autor: "Texto original SABI CENTEC"
    },

    {
      id: "LC07-5",
      titulo: "Estudiantes de séptimo miden el ruido de su barrio",
      tipo: "noticia",
      dba: "EBC Lenguaje 6.°–7.° (Medios de comunicación): caracteriza los medios de comunicación masiva y selecciona y clasifica la información que emiten; reconoce la estructura de la noticia",
      parrafos: [
        ["Cali, 9 de septiembre.",
         "Treinta y dos estudiantes de séptimo grado de un colegio del oriente de la ciudad midieron durante tres semanas el ruido en las calles que rodean su sede y presentaron los resultados a la junta de acción comunal del barrio."],
        ["El proyecto nació en la clase de ciencias naturales, cuando varios estudiantes se quejaron de que no podían concentrarse durante las evaluaciones.",
         "«Pensamos que era culpa nuestra, hasta que la profesora nos preguntó si alguna vez habíamos medido el ruido», contó Mariana Ocoró, de doce años.",
         "Con ayuda de la docente, los jóvenes instalaron en sus celulares una aplicación que mide el sonido en decibeles, la unidad que se usa para expresar qué tan fuerte es un sonido."],
        ["Los estudiantes se organizaron en grupos y tomaron mediciones tres veces al día en cinco puntos diferentes.",
         "Las cifras más altas aparecieron a la hora de salida del colegio, en la esquina donde se cruzan las rutas de buses y donde varios negocios ponen música a todo volumen.",
         "Según sus registros, allí el ruido superó con frecuencia los ochenta decibeles, mientras que en el parque del barrio, a la misma hora, rara vez pasó de sesenta."],
        ["El rector aclaró que las mediciones con celular no tienen la precisión de un equipo profesional, pero destacó que sirvieron para hacerse preguntas y buscar soluciones.",
         "Los especialistas en salud advierten que vivir expuesto durante mucho tiempo a ruidos fuertes puede afectar la audición, el sueño y la concentración."],
        ["En la reunión con la junta, los estudiantes propusieron tres medidas: pedir a los comerciantes que bajen el volumen en horario escolar, poner avisos que recuerden no pitar sin necesidad cerca del colegio y sembrar árboles en el separador de la avenida.",
         "El presidente de la junta, Wilson Arboleda, se comprometió a convocar a los comerciantes a una reunión en octubre.",
         "«Nos sorprendió que unos niños llegaran con datos y no solo con quejas», reconoció."],
        ["Los estudiantes repetirán las mediciones en noviembre para comprobar si algo cambió."]
      ],
      literal: [
        { p: "¿Cuántos estudiantes participaron en el proyecto?", r: "Treinta y dos estudiantes de séptimo grado", s: [0, 1] },
        { p: "¿En qué clase nació el proyecto?", r: "en la clase de ciencias naturales", s: [1, 0] },
        { p: "¿Cuántas veces al día tomaron mediciones?", r: "tres veces al día", s: [2, 0] },
        { p: "¿Cuándo será la reunión con los comerciantes?", r: "en octubre", s: [4, 1] }
      ],
      entrelineas: [
        { p: "¿Qué revela la frase de Mariana «Pensamos que era culpa nuestra»?",
          op: ["Que los estudiantes descubrieron que su falta de concentración podía tener una causa externa", "Que los estudiantes no estudiaban para las evaluaciones", "Que la profesora los regañó por quejarse", "Que Mariana organizó sola todo el proyecto"],
          c: 0, s: [1, 1], ex: "Antes creían que el problema era de ellos; la pregunta de la profesora los llevó a investigar el ruido, una causa que viene de afuera. La noticia dice que trabajaron en grupos, no que Mariana lo hiciera sola." },
        { p: "¿Por qué es importante que el rector aclare que las mediciones con celular no son de precisión profesional?",
          op: ["Porque quería desanimar a los estudiantes", "Porque así la noticia reconoce los límites de los datos sin quitarles valor", "Porque el colegio no permite usar celulares", "Porque los datos estaban equivocados por completo"],
          c: 1, s: [3, 0], ex: "El rector dice dos cosas: los datos no son de un equipo profesional, «pero» sirvieron para hacerse preguntas y buscar soluciones. Reconocer los límites hace la información más honesta, no la anula." },
        { p: "¿Qué se puede concluir de la reacción de Wilson Arboleda?",
          op: ["Que la junta no pensaba hacer nada", "Que no le gustan los niños", "Que presentar datos dio más fuerza a la petición de los estudiantes", "Que los comerciantes ya habían bajado el volumen"],
          c: 2, s: [4, 2], ex: "El presidente se compromete a convocar una reunión y dice que le sorprendió que llegaran «con datos y no solo con quejas»: la evidencia hizo que los tomaran en serio. Nada indica que el problema ya esté resuelto." }
      ],
      contexto: [
        { w: "decibeles", s: [1, 2], op: ["la unidad que expresa qué tan fuerte es un sonido", "un tipo de aplicación de celular", "una enfermedad del oído"], c: 0, ex: "La misma oración lo define: es «la unidad que se usa para expresar qué tan fuerte es un sonido»." },
        { w: "separador", s: [4, 0], op: ["la franja que divide los carriles de una avenida", "una pared entre dos salones", "una persona que separa peleas"], c: 0, ex: "Se habla de sembrar árboles «en el separador de la avenida»: es la zona del medio que divide los dos sentidos de la vía." },
        { w: "convocar", s: [4, 1], op: ["llamar a varias personas para que se reúnan", "multar a alguien", "cerrar un negocio"], c: 0, ex: "Se convoca «a una reunión»: el presidente va a llamar a los comerciantes para que asistan." }
      ],
      dondelopone: [
        { a: "En la esquina de los buses había más ruido que en el parque.", s: [2, 2] },
        { a: "El ruido constante puede perjudicar el descanso de las personas.", s: [3, 1] },
        { a: "El proyecto tendrá una segunda ronda de mediciones.", s: [5, 0] }
      ],
      orden: [
        "Los estudiantes se quejan de que no pueden concentrarse en las evaluaciones.",
        "Instalan en sus celulares una aplicación para medir el sonido.",
        "Toman mediciones durante tres semanas en cinco puntos.",
        "Presentan los resultados y tres propuestas a la junta de acción comunal.",
        "El presidente de la junta se compromete a reunirse con los comerciantes.",
        "Los estudiantes repetirán las mediciones en noviembre."
      ],
      causas: [
        { causa: "Los estudiantes no podían concentrarse en las evaluaciones", efecto: "la profesora les propuso medir el ruido" },
        { causa: "En la esquina se cruzan rutas de buses y hay música a todo volumen", efecto: "allí se registraron las cifras más altas" },
        { causa: "Los estudiantes llegaron a la junta con datos", efecto: "el presidente se comprometió a convocar a los comerciantes" }
      ],
      argumenta: [
        { p: "¿Tienen derecho los negocios a poner música a todo volumen cerca de un colegio? Defiende tu posición.",
          criterios: ["Tesis: toma una posición clara", "Razones: presenta al menos dos razones (salud, trabajo, convivencia, aprendizaje)", "Evidencia del texto: usa un dato de la noticia", "Contraargumento: reconoce el punto de vista de los comerciantes y responde con respeto"] },
        { p: "El presidente valoró que los niños llegaran «con datos y no solo con quejas». ¿Por qué los datos pueden convencer más que las quejas? Propón un problema de tu colegio que podrías medir.",
          criterios: ["Tesis: explica qué ventaja tienen los datos", "Razones: da al menos dos razones", "Evidencia del texto: menciona cómo respondió la junta", "Propuesta: plantea un problema medible y cómo lo mediría"] }
      ],
      autor: "Texto original SABI CENTEC (noticia ficticia con fines didácticos)"
    },

    {
      id: "LC07-6",
      titulo: "Carta a la junta: la cancha también es nuestra",
      tipo: "carta",
      dba: "EBC Lenguaje 6.°–7.° (Ética de la comunicación y producción textual): reconoce la tesis y los argumentos de textos de opinión y valora el respeto por la diversidad en situaciones comunicativas",
      parrafos: [
        ["Cali, 18 de agosto.",
         "Señores de la Junta de Acción Comunal de nuestro barrio:"],
        ["Mi nombre es Sara Lucumí, estudio séptimo grado y juego microfútbol desde los ocho años.",
         "Les escribo, con el apoyo de otras doce niñas del barrio, para pedirles que la cancha del parque tenga un horario fijo, dos tardes a la semana, reservado para equipos femeninos."],
        ["Hoy, en la práctica, la cancha tiene dueños.",
         "Todas las tardes, los mismos grupos de muchachos llegan primero y juegan hasta que oscurece.",
         "Cuando nosotras pedimos un turno, nos dicen que esperemos al siguiente partido, pero ese partido nunca llega.",
         "Durante las vacaciones llevamos la cuenta en un cuaderno: en veinte tardes, solo pudimos jugar dos veces.",
         "Las demás tardes nos quedamos sentadas en las gradas, con los guayos puestos, mirando jugar a otros."],
        ["Sabemos que nadie nos ha prohibido entrar, y que muchos de esos muchachos son nuestros vecinos y amigos.",
         "El problema no es una norma escrita, sino una costumbre: quien llega primero y es más grande se queda con el espacio.",
         "Una costumbre así parece justa porque «todos pueden ir», pero en realidad deja por fuera a quienes no se atreven a pelear por un turno."],
        ["Algunos dirán que reservar horarios divide a la comunidad.",
         "Nosotras pensamos lo contrario: un horario claro evita discusiones, porque todos saben de antemano cuándo les toca.",
         "Además, proponemos que los otros días se organicen partidos mixtos, para que niñas y niños aprendamos a jugar juntos y con respeto.",
         "Si la idea funciona, después de unos meses podríamos revisarla entre todos y ajustar lo que haga falta."],
        ["La cancha se construyó para todo el barrio, y el barrio también somos nosotras.",
         "Les agradecemos que lean esta carta en la próxima reunión y les pedimos que nos permitan presentar nuestra propuesta en persona.",
         "Atentamente, Sara Lucumí, en nombre del equipo Las Pumas del parque."]
      ],
      literal: [
        { p: "¿Desde cuándo juega Sara microfútbol?", r: "juego microfútbol desde los ocho años", s: [1, 0] },
        { p: "¿Cuántas tardes a la semana piden reservar para equipos femeninos?", r: "dos tardes a la semana", s: [1, 1] },
        { p: "¿Cuántas veces pudieron jugar las niñas durante las vacaciones?", r: "solo pudimos jugar dos veces", s: [2, 3] },
        { p: "¿Qué tipo de partidos proponen para los otros días?", r: "partidos mixtos", s: [4, 2] }
      ],
      entrelineas: [
        { p: "¿Qué quiere decir Sara con «la cancha tiene dueños»?",
          op: ["Que unos muchachos compraron la cancha", "Que algunos grupos la ocupan siempre, como si fuera solo de ellos", "Que la junta alquila la cancha", "Que la cancha tiene un celador que decide quién juega"],
          c: 1, s: [2, 0], ex: "Sara dice «en la práctica»: no hay dueños reales. Lo explica enseguida: los mismos grupos llegan primero y juegan hasta que oscurece, así que actúan como si la cancha fuera suya." },
        { p: "¿Para qué cuenta Sara que llevaron la cuenta en un cuaderno?",
          op: ["Para mostrar que son buenas en matemáticas", "Para presumir de lo organizadas que son", "Para respaldar su queja con un dato concreto", "Para pedir que les presten un cuaderno nuevo"],
          c: 2, s: [2, 3], ex: "El dato «en veinte tardes, solo pudimos jugar dos veces» convierte la queja en evidencia: muestra con números que el problema es real." },
        { p: "¿Por qué Sara aclara que nadie les ha prohibido entrar?",
          op: ["Para ser justa y explicar que el problema es una costumbre, no una regla", "Porque en realidad no tiene ningún problema", "Para acusar a la junta de mentir", "Porque quiere retirar su petición"],
          c: 0, s: [3, 1], ex: "Sara reconoce lo que es cierto (no hay prohibición, los muchachos son amigos) y luego precisa que el problema es «una costumbre». Así su argumento es más justo y más difícil de refutar; no retira la petición." }
      ],
      contexto: [
        { w: "costumbre", s: [3, 1], op: ["algo que se hace siempre igual, sin que sea una regla escrita", "una ley aprobada por la junta", "un uniforme deportivo"], c: 0, ex: "La oración contrapone «norma escrita» y «costumbre»: la costumbre es lo que se repite por hábito, aunque nadie la haya escrito." },
        { w: "de antemano", s: [4, 1], op: ["con anticipación, antes de que ocurra", "después del partido", "de mala gana"], c: 0, ex: "Un horario claro sirve porque todos saben «cuándo les toca» antes de llegar a la cancha: eso es saberlo de antemano." },
        { w: "mixtos", s: [4, 2], op: ["en los que juegan juntos niñas y niños", "solo para adultos", "con dos balones al mismo tiempo"], c: 0, ex: "La misma oración lo aclara: partidos «para que niñas y niños aprendamos a jugar juntos»." }
      ],
      dondelopone: [
        { a: "Las niñas registraron cuántas veces lograron usar la cancha.", s: [2, 3] },
        { a: "Sara reconoce que muchos de los jugadores son conocidos suyos.", s: [3, 0] },
        { a: "Sara quiere exponer la propuesta directamente ante la junta.", s: [5, 1] }
      ],
      orden: [
        "Lugar, fecha y saludo a la junta.",
        "Presentación de Sara y petición del horario.",
        "Descripción del problema con un dato del cuaderno.",
        "Explicación de que el problema es una costumbre.",
        "Respuesta a una objeción y propuesta de partidos mixtos.",
        "Conclusión, solicitud de audiencia y firma."
      ],
      causas: [
        { causa: "Los mismos muchachos llegan primero y juegan hasta que oscurece", efecto: "las niñas casi nunca pueden usar la cancha" },
        { causa: "Hay un horario claro para cada grupo", efecto: "se evitan discusiones, porque todos saben cuándo les toca" },
        { causa: "Se impone la costumbre de que quien llega primero se queda con el espacio", efecto: "quedan por fuera quienes no se atreven a pelear por un turno" }
      ],
      argumenta: [
        { p: "¿Debería la junta aprobar el horario reservado que pide Sara? Escribe un párrafo argumentativo.",
          criterios: ["Tesis: expresa su posición en la primera oración", "Razones: presenta al menos dos razones propias", "Evidencia del texto: retoma un dato o una idea de la carta (el cuaderno, la costumbre, los partidos mixtos)", "Contraargumento: responde a la objeción de que reservar horarios divide a la comunidad"] },
        { p: "Sara dice que una costumbre puede «parecer justa» y no serlo. Piensa en otro espacio de tu colegio o barrio donde pase algo parecido y argumenta qué cambiarías.",
          criterios: ["Tesis: identifica una situación y toma posición", "Razones: explica por qué esa costumbre deja a alguien por fuera", "Evidencia del texto: relaciona su caso con el argumento de Sara", "Propuesta: plantea una solución respetuosa y realista"] }
      ],
      autor: "Texto original SABI CENTEC"
    }
  ];
})(window.SABI_TALLER = window.SABI_TALLER || {});
