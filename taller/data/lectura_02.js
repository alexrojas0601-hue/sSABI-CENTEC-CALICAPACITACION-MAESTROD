/* SABI Taller · Lectura · Grado 02 · Textos originales SABI CENTEC */
(function (T) {
  T.lectura = T.lectura || {};
  T.lectura["02"] = [
    {
      id: "LC02-1",
      titulo: "La cometa de Salomé",
      tipo: "narrativo",
      dba: "DBA Lenguaje 2.°, n.º 3: identifica elementos de los textos literarios como personajes, espacios y acciones",
      parrafos: [
        ["En agosto, el viento sopla fuerte en Cali.", "Salomé quería volar una cometa, pero no tenía una.", "Su abuelo Ernesto le dijo: «Hagamos una juntos»."],
        ["Buscaron palitos de guadua, papel de colores, hilo y engrudo.", "El abuelo cortó los palitos y Salomé pegó el papel con mucho cuidado.", "Al final le hicieron una cola larga con tiras de tela."],
        ["El sábado subieron a una loma cerca de la casa.", "La primera vez, la cometa dio vueltas y cayó en el pasto.", "Salomé frunció la boca y miró al suelo.", "«Las cometas también aprenden», dijo el abuelo, y le alargó la cola."],
        ["En el segundo intento, la cometa subió y subió hasta parecer un pájaro amarillo.", "Salomé soltaba hilo y se reía.", "Esa noche colgó la cometa en su cuarto y dijo: «Mañana le enseño a mi primo»."]
      ],
      literal: [
        { p: "¿Quién le propuso a Salomé hacer la cometa?", r: "Su abuelo Ernesto", s: [0, 2] },
        { p: "¿Qué materiales buscaron para la cometa?", r: "palitos de guadua, papel de colores, hilo y engrudo", s: [1, 0] },
        { p: "¿Qué le hicieron a la cometa al final?", r: "una cola larga con tiras de tela", s: [1, 2] },
        { p: "¿Dónde cayó la cometa la primera vez?", r: "cayó en el pasto", s: [2, 1] }
      ],
      entrelineas: [
        { p: "¿Cómo se sintió Salomé cuando la cometa cayó?", op: ["Triste y desanimada", "Muy feliz", "Con mucho sueño", "Brava con el abuelo"], c: 0, s: [2, 2], ex: "Fruncir la boca y mirar al suelo son gestos de tristeza. No se enojó con el abuelo: él no tuvo la culpa de la caída." },
        { p: "¿Qué quiso decir el abuelo con «Las cometas también aprenden»?", op: ["Que hay que intentarlo otra vez y mejorar", "Que la cometa estaba dañada para siempre", "Que las cometas van a la escuela"], c: 0, s: [2, 3], ex: "El abuelo arregla la cola y vuelven a intentarlo; equivocarse es parte de aprender. La cometa no estaba dañada, porque después voló." },
        { p: "¿Por qué Salomé quiere enseñarle a su primo?", op: ["Porque aprendió algo y quiere compartirlo", "Porque el primo le quitó la cometa", "Porque ya no quiere la cometa"], c: 0, s: [3, 2], ex: "Salomé está contenta, guarda la cometa en su cuarto y quiere compartir lo que aprendió. Si no la quisiera, no la colgaría en su cuarto." }
      ],
      contexto: [
        { w: "engrudo", s: [1, 0], op: ["Pegante casero para pegar papel", "Una clase de hilo", "Un palito delgado"], c: 0, ex: "En la oración siguiente Salomé «pegó el papel»: el engrudo es lo que se usa para pegar." },
        { w: "intento", s: [3, 0], op: ["Una vez que se prueba hacer algo", "Un tipo de viento", "Un regalo"], c: 0, ex: "Dice «segundo intento» porque es la segunda vez que prueban volar la cometa." }
      ],
      dondelopone: [
        { a: "La cometa no voló bien la primera vez.", s: [2, 1] },
        { a: "Salomé guardó la cometa en su habitación.", s: [3, 2] },
        { a: "En Cali hace mucho viento en el mes de agosto.", s: [0, 0] }
      ],
      orden: ["Salomé quería una cometa y no tenía.", "Salomé y su abuelo hicieron la cometa.", "La cometa cayó en el pasto.", "El abuelo le alargó la cola.", "La cometa subió como un pájaro amarillo."],
      causas: [
        { causa: "Salomé no tenía cometa", efecto: "el abuelo le propuso hacer una juntos" },
        { causa: "la cometa cayó la primera vez", efecto: "el abuelo le alargó la cola" },
        { causa: "la cometa por fin voló", efecto: "Salomé se reía" }
      ],
      argumenta: [
        { p: "¿Fue buena idea volver a intentarlo después de que la cometa cayó? Explica por qué.", criterios: ["Da una opinión clara (sí o no)", "Usa algo que pasó en el cuento", "Cuenta una vez en que él o ella volvió a intentar algo"] },
        { p: "¿Qué prefieres: comprar un juguete o hacerlo con alguien de tu familia? Da una razón.", criterios: ["Elige una opción", "Da al menos una razón", "Relaciona su respuesta con el cuento de Salomé"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LC02-2",
      titulo: "Los colores de Valentina",
      tipo: "narrativo",
      dba: "DBA Lenguaje 2.°, n.º 4: comprende diversos textos literarios a partir de sus propias vivencias",
      parrafos: [
        ["Matías llegó temprano al salón de segundo.", "Debajo de un pupitre vio una caja de colores nueva, con un nombre escrito: «Valentina»."],
        ["Los colores eran brillantes y olían a madera.", "Matías pensó: «Nadie me vio; podría quedármelos».", "Pero luego recordó la cara de su hermana el día que perdió su muñeca."],
        ["Cuando Valentina entró, tenía los ojos rojos y buscaba algo en su maleta.", "Matías se acercó y le entregó la caja.", "«¡Mis colores! Me los regaló mi tía», dijo ella, y lo abrazó."],
        ["En el descanso, Valentina le prestó el color verde para pintar un árbol.", "La profesora Luz Dary les dijo a todos: «Hoy Matías nos enseñó qué es la honestidad»."]
      ],
      literal: [
        { p: "¿Qué encontró Matías debajo del pupitre?", r: "una caja de colores nueva", s: [0, 1] },
        { p: "¿A qué olían los colores?", r: "olían a madera", s: [1, 0] },
        { p: "¿Quién le regaló los colores a Valentina?", r: "Me los regaló mi tía", s: [2, 2] },
        { p: "¿Qué color le prestó Valentina a Matías?", r: "el color verde", s: [3, 0] }
      ],
      entrelineas: [
        { p: "¿Cómo estaba Valentina cuando entró al salón?", op: ["Triste y preocupada porque había perdido algo", "Feliz porque era su cumpleaños", "Cansada porque llegó corriendo", "Brava con Matías"], c: 0, s: [2, 0], ex: "Tenía los ojos rojos de llorar y buscaba algo en su maleta: había perdido sus colores. No estaba brava con Matías; al final lo abrazó." },
        { p: "¿Por qué Matías se acordó de su hermana?", op: ["Porque recordó lo triste que se siente perder algo querido", "Porque su hermana también tenía colores", "Porque su hermana estudiaba en ese salón"], c: 0, s: [1, 2], ex: "Recordó la cara de su hermana cuando perdió su muñeca; así entendió cómo se sentiría Valentina." },
        { p: "¿Qué muestra que Valentina agradeció lo que hizo Matías?", op: ["Lo abrazó y le prestó un color", "Le pidió más colores", "Se fue sin hablarle"], c: 0, s: [3, 0], ex: "Ella lo abraza y luego comparte su color verde con él." }
      ],
      contexto: [
        { w: "pupitre", s: [0, 1], op: ["Mesa con silla donde el estudiante trabaja en el salón", "Una maleta grande", "El tablero del salón"], c: 0, ex: "Está en el salón y la caja estaba «debajo»: es el puesto de trabajo de un estudiante." },
        { w: "brillantes", s: [1, 0], op: ["Con colores vivos y llamativos", "Rotos y viejos", "Muy pesados"], c: 0, ex: "La caja era nueva; por eso sus colores se veían vivos y llamativos, no rotos." },
        { w: "honestidad", s: [3, 1], op: ["Actuar con la verdad y devolver lo que no es tuyo", "Ser el más rápido del salón", "Pintar muy bonito"], c: 0, ex: "La profesora usa esa palabra para lo que hizo Matías: devolver algo que no era suyo." }
      ],
      dondelopone: [
        { a: "Matías tuvo ganas de guardarse los colores.", s: [1, 1] },
        { a: "Matías le devolvió la caja a su dueña.", s: [2, 1] },
        { a: "La caja tenía el nombre de la dueña.", s: [0, 1] }
      ],
      orden: ["Matías llegó temprano al salón.", "Matías vio la caja de colores.", "Matías pensó en quedarse con los colores.", "Matías recordó a su hermana.", "Matías le entregó la caja a Valentina.", "Valentina le prestó el color verde."],
      causas: [
        { causa: "la caja tenía escrito «Valentina»", efecto: "Matías supo de quién era" },
        { causa: "Valentina había perdido sus colores", efecto: "tenía los ojos rojos" },
        { causa: "Matías devolvió la caja", efecto: "Valentina lo abrazó" }
      ],
      argumenta: [
        { p: "¿Hizo bien Matías al devolver los colores, aunque nadie lo vio? Explica.", criterios: ["Toma una posición clara", "Usa al menos una razón del cuento", "Explica qué significa ser honesto con sus palabras"] },
        { p: "¿Qué crees que habría pasado si Matías se quedaba con los colores?", criterios: ["Imagina una consecuencia posible", "Piensa en cómo se sentiría Valentina", "Relaciona con algo que le haya pasado"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LC02-3",
      titulo: "El colibrí y la tortuga Tula",
      tipo: "fabula",
      dba: "DBA Lenguaje 2.°, n.º 3: identifica elementos de los textos literarios como personajes, espacios y acciones",
      parrafos: [
        ["En un jardín del Valle vivía un colibrí muy veloz.", "Todas las mañanas pasaba zumbando junto a la tortuga Tula y le gritaba: «¡Lenta, lentísima!»."],
        ["Tula no respondía; seguía caminando despacio hacia el estanque.", "Una tarde cayó un aguacero tan fuerte que el colibrí no pudo volar.", "Tenía las alas empapadas y temblaba de frío entre las hojas."],
        ["Tula lo vio y le dijo: «Súbete a mi caparazón; yo conozco el camino a la cueva».", "Paso a paso, la tortuga llevó al colibrí hasta un lugar seco.", "Allí esperaron juntos a que saliera el sol."],
        ["Desde ese día, el colibrí visita a Tula y le cuenta lo que ve desde el cielo.", "Moraleja: nadie es mejor por ser más rápido; cada uno tiene algo valioso para dar."]
      ],
      literal: [
        { p: "¿Qué le gritaba el colibrí a la tortuga?", r: "¡Lenta, lentísima!", s: [0, 1] },
        { p: "¿Hacia dónde caminaba Tula?", r: "hacia el estanque", s: [1, 0] },
        { p: "¿Qué cayó una tarde?", r: "un aguacero tan fuerte", s: [1, 1] },
        { p: "¿Hasta dónde llevó Tula al colibrí?", r: "hasta un lugar seco", s: [2, 1] }
      ],
      entrelineas: [
        { p: "¿Cómo es la tortuga Tula?", op: ["Paciente y generosa", "Burlona y egoísta", "Miedosa y perezosa"], c: 0, s: [2, 0], ex: "No responde a las burlas (paciente) y ayuda al colibrí cuando lo necesita (generosa)." },
        { p: "¿Por qué el colibrí ahora visita a Tula?", op: ["Porque se hicieron amigos después de la ayuda", "Porque Tula le pagó", "Porque ya no puede volar"], c: 0, s: [3, 0], ex: "Después de que Tula lo salvó, la visita para contarle cosas. Sí puede volar: le cuenta lo que ve desde el cielo." },
        { p: "¿Qué aprendió el colibrí?", op: ["Que ser rápido no lo hace mejor que los demás", "Que debe volar más rápido", "Que las tortugas no saben caminar"], c: 0, s: [3, 1], ex: "La moraleja lo dice: nadie es mejor por ser más rápido. Cuando el colibrí no pudo volar, la tortuga lenta fue quien lo salvó." }
      ],
      contexto: [
        { w: "aguacero", s: [1, 1], op: ["Lluvia muy fuerte", "Un árbol grande", "Viento suave"], c: 0, ex: "Después dice que el colibrí tenía las alas empapadas: cayó mucha agua." },
        { w: "empapadas", s: [1, 2], op: ["Muy mojadas", "Muy limpias", "Muy pequeñas"], c: 0, ex: "Llovió fuerte y el colibrí temblaba de frío: sus alas estaban llenas de agua." }
      ],
      dondelopone: [
        { a: "El colibrí se burlaba de la tortuga.", s: [0, 1] },
        { a: "La tortuga sabía dónde podían protegerse de la lluvia.", s: [2, 0] },
        { a: "Se quedaron juntos hasta que dejó de llover.", s: [2, 2] }
      ],
      orden: ["El colibrí se burlaba de Tula cada mañana.", "Cayó un aguacero muy fuerte.", "El colibrí no pudo volar.", "Tula lo llevó en su caparazón a un lugar seco.", "El colibrí y Tula se hicieron amigos."],
      causas: [
        { causa: "cayó un aguacero muy fuerte", efecto: "el colibrí no pudo volar" },
        { causa: "Tula conocía el camino a la cueva", efecto: "pudo llevar al colibrí a un lugar seco" },
        { causa: "Tula ayudó al colibrí", efecto: "el colibrí la visita y le cuenta lo que ve" }
      ],
      argumenta: [
        { p: "¿Está bien burlarse de alguien porque hace las cosas de otra manera? ¿Por qué?", criterios: ["Da una opinión clara", "Usa lo que pasó en la fábula como razón", "Relaciona con una situación del colegio o la casa"] },
        { p: "¿Tula debía ayudar al colibrí aunque él se burlaba de ella? Explica.", criterios: ["Toma una posición", "Da al menos una razón", "Menciona la moraleja o un valor como el respeto"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LC02-4",
      titulo: "El oso de anteojos",
      tipo: "informativo",
      dba: "DBA Lenguaje 2.°, n.º 6: predice y analiza los contenidos y estructuras de diversos tipos de texto, a partir de sus conocimientos previos",
      parrafos: [
        ["El oso de anteojos es el único oso que vive en América del Sur.", "Se llama así porque tiene manchas claras alrededor de los ojos que parecen unas gafas.", "Cada oso tiene manchas distintas, como si fueran su huella."],
        ["Vive en los bosques fríos y húmedos de las montañas de los Andes.", "En Colombia se puede encontrar en las tres cordilleras."],
        ["Aunque es grande, come sobre todo plantas, como frutos y el corazón de las bromelias.", "Es un gran trepador: sube a los árboles y arma una especie de cama con ramas para descansar y comer."],
        ["Hoy hay pocos osos de anteojos porque se cortan los bosques donde viven.", "Cuidar los bosques de montaña es cuidar también a este oso."]
      ],
      literal: [
        { p: "¿Por qué se llama oso de anteojos?", r: "manchas claras alrededor de los ojos", s: [0, 1] },
        { p: "¿En qué tipo de bosques vive?", r: "en los bosques fríos y húmedos", s: [1, 0] },
        { p: "¿Qué come sobre todo?", r: "plantas, como frutos y el corazón de las bromelias", s: [2, 0] },
        { p: "¿Qué arma en los árboles?", r: "una especie de cama con ramas", s: [2, 1] }
      ],
      entrelineas: [
        { p: "Si cada oso tiene manchas distintas, ¿qué podemos concluir?", op: ["Que se puede reconocer a cada oso por sus manchas", "Que todos los osos son iguales", "Que las manchas se borran con el tiempo"], c: 0, s: [0, 2], ex: "Igual que nuestra huella, las manchas son diferentes en cada oso; por eso sirven para reconocerlo." },
        { p: "¿Por qué el texto dice «aunque es grande»?", op: ["Porque uno pensaría que un animal tan grande come mucha carne", "Porque los animales grandes no comen", "Porque es más pequeño que un gato"], c: 0, s: [2, 0], ex: "«Aunque» muestra algo que sorprende: es grande, pero come sobre todo plantas." },
        { p: "¿Para qué fue escrito este texto?", op: ["Para dar información sobre el oso de anteojos", "Para contar un cuento inventado de un oso", "Para enseñar a fabricar gafas"], c: 0, s: [0, 0], ex: "Da datos reales (dónde vive, qué come, por qué está en peligro): es un texto informativo, no un cuento." }
      ],
      contexto: [
        { w: "trepador", s: [2, 1], op: ["Que sube con facilidad", "Que nada muy rápido", "Que duerme mucho"], c: 0, ex: "La misma oración explica que «sube a los árboles»." },
        { w: "húmedos", s: [1, 0], op: ["Con mucha agua o humedad en el aire", "Muy secos", "Muy calientes"], c: 0, ex: "Dice «fríos y húmedos»: no son calientes ni secos, son bosques mojados de montaña." }
      ],
      dondelopone: [
        { a: "Este oso no vive en una sola montaña de Colombia.", s: [1, 1] },
        { a: "Si se tumban los árboles, los osos se quedan sin casa.", s: [3, 0] },
        { a: "Este oso descansa en lo alto de los árboles.", s: [2, 1] }
      ],
      orden: ["El texto explica por qué se llama oso de anteojos.", "El texto dice dónde vive.", "El texto cuenta qué come y cómo trepa.", "El texto explica por qué hay pocos osos."],
      causas: [
        { causa: "tiene manchas claras alrededor de los ojos", efecto: "se llama oso de anteojos" },
        { causa: "se cortan los bosques donde vive", efecto: "hoy hay pocos osos de anteojos" }
      ],
      argumenta: [
        { p: "¿Qué podemos hacer los niños para ayudar al oso de anteojos? Da dos ideas.", criterios: ["Propone al menos dos acciones", "Relaciona sus ideas con el cuidado de los bosques", "Las ideas son posibles para un niño"] },
        { p: "¿Crees que es importante aprender sobre los animales de Colombia? ¿Por qué?", criterios: ["Da una opinión clara", "Usa una razón", "Menciona algo del texto"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LC02-5",
      titulo: "Cómo preparar una lulada",
      tipo: "instructivo",
      dba: "DBA Lenguaje 2.°, n.º 6: predice y analiza los contenidos y estructuras de diversos tipos de texto, a partir de sus conocimientos previos",
      parrafos: [
        ["Ingredientes para dos vasos: 4 lulos maduros, 4 cucharadas de azúcar, el jugo de medio limón, 2 vasos de agua fría y hielo."],
        ["Paso 1: Lávate las manos y lava bien los lulos.", "Paso 2: Pide a un adulto que parta los lulos en mitades y los pique en cuadritos.", "Paso 3: Pon el lulo picado en una jarra y machácalo con una cuchara de palo, sin volverlo puré.", "Paso 4: Agrega el azúcar, el jugo de limón y el agua, y revuelve.", "Paso 5: Sirve en vasos con hielo y disfrútala bien fría."],
        ["Consejo: la lulada se toma con los trocitos de fruta, por eso no se licúa.", "Es una bebida típica del Valle del Cauca, ideal para los días calurosos de Cali."]
      ],
      literal: [
        { p: "¿Cuántos lulos se necesitan?", r: "4 lulos maduros", s: [0, 0] },
        { p: "¿Qué se hace en el paso 1?", r: "Lávate las manos", s: [1, 0] },
        { p: "¿A quién hay que pedirle que pique los lulos?", r: "Pide a un adulto", s: [1, 1] },
        { p: "¿Con qué se machaca el lulo?", r: "con una cuchara de palo", s: [1, 2] }
      ],
      entrelineas: [
        { p: "¿Por qué un adulto debe picar los lulos?", op: ["Porque se usa un cuchillo y puede ser peligroso", "Porque los niños no pueden tocar frutas", "Porque el lulo es muy pesado"], c: 0, s: [1, 1], ex: "Partir y picar se hace con cuchillo. Los niños sí pueden tocar la fruta: en el paso 1 ellos mismos la lavan." },
        { p: "¿Qué pasaría si licúas el lulo?", op: ["Ya no tendría trocitos y sería un jugo", "Quedaría más dulce", "El lulo se volvería azul"], c: 0, s: [2, 0], ex: "El consejo dice que la lulada lleva trocitos de fruta; licuarla los deshace." },
        { p: "¿Para qué sirven los números «Paso 1, Paso 2…»?", op: ["Para saber en qué orden se hacen las cosas", "Para contar los lulos", "Para saber cuánto cuesta"], c: 0, s: [1, 0], ex: "En un instructivo los números muestran el orden de las acciones." }
      ],
      contexto: [
        { w: "machácalo", s: [1, 2], op: ["Aplástalo con golpes suaves", "Cocínalo en la estufa", "Córtalo en tiras"], c: 0, ex: "Se hace con una cuchara de palo y «sin volverlo puré»: es aplastar un poco." },
        { w: "típica", s: [2, 1], op: ["Propia y tradicional de un lugar", "Muy cara", "Nueva y extraña"], c: 0, ex: "Dice que es «del Valle del Cauca»: es una bebida tradicional de nuestra región." }
      ],
      dondelopone: [
        { a: "La lulada lleva limón.", s: [1, 3] },
        { a: "Esta bebida es tradicional de nuestra región.", s: [2, 1] },
        { a: "La lulada se sirve fría.", s: [1, 4] }
      ],
      orden: ["Lavarse las manos y lavar los lulos.", "Un adulto parte y pica los lulos.", "Machacar el lulo en una jarra.", "Agregar azúcar, limón y agua.", "Servir con hielo."],
      causas: [
        { causa: "la lulada se toma con trocitos de fruta", efecto: "no se licúa" },
        { causa: "en Cali hay días calurosos", efecto: "una lulada bien fría es ideal" }
      ],
      argumenta: [
        { p: "¿Por qué es importante lavarse las manos antes de cocinar?", criterios: ["Da una razón relacionada con la salud", "Menciona el paso 1 del texto", "Lo explica con sus palabras"] },
        { p: "¿Qué prefieres: una lulada hecha en casa o un jugo de caja? Da dos razones.", criterios: ["Elige una opción", "Da dos razones", "Usa alguna información del texto"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LC02-6",
      titulo: "La Madremonte",
      tipo: "leyenda",
      dba: "DBA Lenguaje 2.°, n.º 3: identifica elementos de los textos literarios como personajes, espacios y acciones",
      parrafos: [
        ["Cuentan los abuelos que en lo más espeso del monte vive la Madremonte.", "Dicen que es una mujer alta, vestida de musgo y hojas, con un sombrero de ramas que le tapa la cara."],
        ["La Madremonte cuida los árboles, los ríos y los animales.", "Cuando alguien tala el bosque sin necesidad o ensucia las quebradas, ella se enoja.", "Entonces hace que el viajero se pierda entre los caminos y dé vueltas sin encontrar la salida."],
        ["En cambio, a quien respeta el monte, lo deja pasar tranquilo.", "Por eso, los campesinos piden permiso antes de entrar al bosque y no dejan basura."],
        ["Nadie sabe si la Madremonte existe de verdad.", "Pero su historia nos recuerda que la naturaleza es nuestra casa y hay que cuidarla."]
      ],
      literal: [
        { p: "¿De qué está vestida la Madremonte?", r: "vestida de musgo y hojas", s: [0, 1] },
        { p: "¿Qué cuida la Madremonte?", r: "los árboles, los ríos y los animales", s: [1, 0] },
        { p: "¿Qué le hace al que daña el bosque?", r: "hace que el viajero se pierda", s: [1, 2] },
        { p: "¿Qué hacen los campesinos antes de entrar al bosque?", r: "piden permiso", s: [2, 1] }
      ],
      entrelineas: [
        { p: "¿Por qué este texto es una leyenda?", op: ["Porque se cuenta de abuelos a nietos y nadie sabe si es verdad", "Porque es una noticia del periódico", "Porque explica cómo hacer una receta"], c: 0, s: [3, 0], ex: "Empieza con «Cuentan los abuelos» y dice que nadie sabe si existe: así son las leyendas." },
        { p: "¿Qué nos quieren enseñar con esta historia?", op: ["Que debemos respetar y cuidar la naturaleza", "Que nunca hay que ir al campo", "Que los sombreros de ramas son bonitos"], c: 0, s: [3, 1], ex: "La última oración lo dice: la naturaleza es nuestra casa. No prohíbe ir al campo: a quien respeta el monte lo deja pasar." },
        { p: "¿Por qué los campesinos no dejan basura en el bosque?", op: ["Para respetar el monte y que la Madremonte los deje pasar", "Porque no tienen basura", "Porque en el bosque hay canecas"], c: 0, s: [2, 1], ex: "La oración empieza con «Por eso»: lo hacen porque la Madremonte deja pasar a quien respeta el monte." }
      ],
      contexto: [
        { w: "tala", s: [1, 1], op: ["Corta árboles", "Siembra árboles", "Riega plantas"], c: 0, ex: "Es algo que hace enojar a la Madremonte, que cuida los árboles: es cortarlos." },
        { w: "quebradas", s: [1, 1], op: ["Ríos pequeños", "Ramas rotas", "Casas de campo"], c: 0, ex: "Se pueden ensuciar y la Madremonte cuida los ríos: son ríos pequeños del monte." }
      ],
      dondelopone: [
        { a: "La Madremonte no le hace daño a quien cuida la naturaleza.", s: [2, 0] },
        { a: "No se sabe si este personaje es real.", s: [3, 0] },
        { a: "No se le puede ver bien el rostro.", s: [0, 1] }
      ],
      orden: ["Alguien tala el bosque o ensucia la quebrada.", "La Madremonte se enoja.", "El viajero se pierde entre los caminos.", "El viajero da vueltas sin encontrar la salida."],
      causas: [
        { causa: "alguien tala el bosque sin necesidad", efecto: "la Madremonte se enoja" },
        { causa: "una persona respeta el monte", efecto: "la Madremonte la deja pasar tranquila" }
      ],
      argumenta: [
        { p: "¿Crees que hace falta una Madremonte para que la gente cuide la naturaleza? ¿Por qué?", criterios: ["Da una opinión clara", "Usa una razón del texto", "Propone otra forma de cuidar la naturaleza"] },
        { p: "Si la Madremonte visitara tu barrio, ¿qué le gustaría y qué no? Explica.", criterios: ["Menciona algo bueno y algo malo del barrio", "Relaciona con lo que cuida la Madremonte", "Usa ejemplos de su vida"] }
      ],
      autor: "Texto original SABI CENTEC (recreación de la leyenda colombiana de tradición oral)"
    }
  ];
})(window.SABI_TALLER = window.SABI_TALLER || {});
