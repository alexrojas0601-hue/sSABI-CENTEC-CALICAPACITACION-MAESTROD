/* SABI Taller · Lectura · Grado 01 (1.°, 6–7 años) · Textos originales SABI CENTEC */
(function (T) {
  T.lectura = T.lectura || {};
  T.lectura["01"] = [
    {
      id: "LC01-1",
      titulo: "El tambor de Nicolás",
      tipo: "narrativo",
      dba: "DBA Lenguaje 1.°, n.º 4: interpreta textos literarios como parte de su iniciación en la comprensión de textos",
      parrafos: [
        ["Nicolás vive en Buenaventura, cerca del mar.", "Su abuelo le regaló un tambor de madera."],
        ["Nicolás tocaba el tambor todo el día.", "Pum, pum, pum, sonaba en la casa.", "Su hermanita no podía dormir la siesta."],
        ["La mamá le dijo: «Nicolás, busquemos un buen momento para tocar»."],
        ["Desde entonces, Nicolás toca en la tarde, en el patio.", "Los vecinos salen a bailar currulao.", "Y su hermanita duerme tranquila."]
      ],
      literal: [
        { p: "¿Dónde vive Nicolás?", r: "en Buenaventura, cerca del mar", s: [0, 0] },
        { p: "¿De qué está hecho el tambor?", r: "de madera", s: [0, 1] },
        { p: "¿Quién no podía dormir la siesta?", r: "Su hermanita", s: [1, 2] },
        { p: "¿Qué bailan los vecinos?", r: "currulao", s: [3, 1] }
      ],
      entrelineas: [
        { p: "¿Por qué la hermanita no podía dormir?", op: ["Porque tenía hambre", "Por el ruido del tambor", "Porque hacía calor", "Porque quería jugar"], c: 1, s: [1, 1], ex: "El tambor sonaba «pum, pum, pum» en la casa todo el día; con ese ruido no se puede dormir." },
        { p: "¿Cómo resolvió la familia el problema?", op: ["Botaron el tambor", "La hermanita se fue a otra casa", "Nicolás eligió otra hora y otro lugar para tocar"], c: 2, s: [3, 0], ex: "Ahora toca en la tarde y en el patio: así no molesta y sigue tocando." }
      ],
      contexto: [
        { w: "siesta", s: [1, 2], op: ["Una fiesta grande", "Un sueño corto durante el día", "Un tipo de tambor"], c: 1, ex: "La oración dice «dormir la siesta»: es dormir un rato de día." },
        { w: "currulao", s: [3, 1], op: ["Un baile y música del Pacífico", "Una comida de mar", "Un juego de pelota"], c: 0, ex: "Los vecinos «salen a bailar» cuando suena el tambor: el currulao es un baile." }
      ],
      dondelopone: [
        { a: "El tambor fue un regalo del abuelo.", s: [0, 1] },
        { a: "Ahora Nicolás toca en un lugar donde no molesta.", s: [3, 0] }
      ],
      orden: ["El abuelo le regaló un tambor a Nicolás.", "Nicolás tocaba todo el día.", "La hermanita no podía dormir.", "La mamá habló con Nicolás.", "Nicolás toca en el patio y los vecinos bailan."],
      causas: [
        { causa: "Nicolás tocaba el tambor todo el día", efecto: "su hermanita no podía dormir la siesta" },
        { causa: "Nicolás toca en la tarde, en el patio", efecto: "los vecinos bailan y la hermanita duerme tranquila" }
      ],
      argumenta: [
        { p: "¿Qué harías tú si tu juego molesta a alguien de tu casa? ¿Por qué?", criterios: ["Propone una solución", "Piensa en la otra persona", "Se parece a lo que hizo Nicolás"] },
        { p: "¿La mamá dio un buen consejo? ¿Por qué?", criterios: ["Dice sí o no", "Usa una razón del cuento", "Explica con sus palabras"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LC01-2",
      titulo: "Lía y la perrita Luna",
      tipo: "narrativo",
      dba: "DBA Lenguaje 1.°, n.º 4: interpreta textos literarios como parte de su iniciación en la comprensión de textos",
      parrafos: [
        ["Lía iba al colegio con su papá.", "En la esquina vio una perrita café con un collar azul."],
        ["La perrita estaba sola y tenía la cola entre las patas.", "En el collar decía: «Me llamo Luna»."],
        ["Lía y su papá vieron un número en el collar.", "El papá llamó por teléfono."],
        ["Muy pronto llegó un niño corriendo.", "«¡Luna, Luna!», gritó feliz.", "La perrita movió la cola y saltó a sus brazos."],
        ["Ese día, Lía llegó tarde al colegio, pero llegó contenta."]
      ],
      literal: [
        { p: "¿Con quién iba Lía al colegio?", r: "con su papá", s: [0, 0] },
        { p: "¿De qué color era el collar?", r: "azul", s: [0, 1] },
        { p: "¿Cómo se llamaba la perrita?", r: "Luna", s: [1, 1] },
        { p: "¿Qué hizo la perrita cuando vio al niño?", r: "movió la cola y saltó a sus brazos", s: [3, 2] }
      ],
      entrelineas: [
        { p: "¿Cómo se sentía la perrita en la esquina?", op: ["Alegre", "Asustada y triste", "Con ganas de correr", "Dormida"], c: 1, s: [1, 0], ex: "Estaba sola y con la cola entre las patas: así se ve un perro con miedo." },
        { p: "¿Quién era el niño?", op: ["El dueño de Luna", "Un amigo de Lía", "El profesor de Lía"], c: 0, s: [3, 1], ex: "El niño llega después de la llamada, la llama por su nombre y la perrita salta a sus brazos." },
        { p: "¿Por qué Lía llegó contenta, aunque llegó tarde?", op: ["Porque no tuvo clase", "Porque le regalaron la perrita", "Porque ayudó a que Luna volviera con su dueño"], c: 2, s: [4, 0], ex: "Lía se demoró ayudando a Luna; ayudar la hizo sentir bien." }
      ],
      contexto: [
        { w: "esquina", s: [0, 1], op: ["El centro de la cancha", "El lugar donde se juntan dos calles", "Adentro del salón"], c: 1, ex: "Lía iba por la calle camino al colegio; allí vio a la perrita." },
        { w: "collar", s: [0, 1], op: ["Una correa que se pone en el cuello", "Un juguete de goma", "Un plato de comida"], c: 0, ex: "El collar tenía escrito el nombre y un número: lo lleva el perro puesto." }
      ],
      dondelopone: [
        { a: "El papá de Lía llamó al dueño.", s: [2, 1] },
        { a: "Por ayudar, Lía no llegó a tiempo al colegio.", s: [4, 0] }
      ],
      orden: ["Lía vio una perrita en la esquina.", "Leyeron el nombre en el collar.", "El papá llamó por teléfono.", "Llegó un niño corriendo.", "Lía llegó tarde, pero contenta."],
      causas: [
        { causa: "Había un número en el collar", efecto: "el papá pudo llamar por teléfono" },
        { causa: "Lía y su papá ayudaron a Luna", efecto: "Lía llegó tarde al colegio" }
      ],
      argumenta: [
        { p: "¿Qué harías tú si encuentras un perrito perdido? ¿Por qué?", criterios: ["Dice una acción segura (avisar a un adulto)", "Explica por qué", "Usa una idea del cuento"] },
        { p: "¿Es importante que las mascotas tengan collar con nombre? ¿Por qué?", criterios: ["Da una opinión", "Usa lo que pasó en el cuento como razón", "Escucha a otros"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LC01-3",
      titulo: "El sapo Toño y el charco",
      tipo: "fabula",
      dba: "DBA Lenguaje 1.°, n.º 3: reconoce en los textos literarios la posibilidad de desarrollar su capacidad creativa y lúdica; n.º 4: interpreta textos literarios",
      parrafos: [
        ["Después de la lluvia, se formó un charco grande.", "El sapo Toño dijo: «Este charco es solo mío»."],
        ["La rana, el pato y la lagartija querían jugar.", "Toño no los dejó entrar."],
        ["Salió el sol y el charco se hizo pequeño.", "Toño se quedó solo y aburrido."],
        ["Al otro día volvió a llover.", "Esta vez, Toño gritó: «¡Vengan todos, hay espacio para jugar!»."],
        ["Compartir es más divertido que jugar solo."]
      ],
      literal: [
        { p: "¿Cuándo se formó el charco?", r: "Después de la lluvia", s: [0, 0] },
        { p: "¿Cómo se llama el sapo?", r: "Toño", s: [0, 1] },
        { p: "¿Quiénes querían jugar en el charco?", r: "La rana, el pato y la lagartija", s: [1, 0] },
        { p: "¿Cómo se quedó Toño?", r: "solo y aburrido", s: [2, 1] }
      ],
      entrelineas: [
        { p: "¿Por qué el charco se hizo pequeño?", op: ["Porque el pato se tomó el agua", "Porque el sol secó parte del agua", "Porque Toño lo tapó"], c: 1, s: [2, 0], ex: "El charco se achica justo cuando sale el sol: el calor seca el agua." },
        { p: "¿Qué aprendió Toño?", op: ["Que compartir hace el juego más divertido", "Que es mejor jugar solo", "Que los charcos son peligrosos"], c: 0, s: [4, 0], ex: "Al final invita a todos; la última oración dice la enseñanza." }
      ],
      contexto: [
        { w: "charco", s: [0, 0], op: ["Un río muy grande", "Un vaso de agua", "Agua que queda en el suelo después de llover"], c: 2, ex: "Se formó «después de la lluvia» y luego el sol lo secó: es agua en el suelo." },
        { w: "aburrido", s: [2, 1], op: ["Muy feliz", "Sin nada divertido que hacer", "Cansado de correr"], c: 1, ex: "Toño estaba solo, sin amigos para jugar." }
      ],
      dondelopone: [
        { a: "Toño no quería compartir el charco.", s: [0, 1] },
        { a: "Toño invitó a todos a jugar.", s: [3, 1] }
      ],
      orden: ["Se formó un charco grande.", "Toño dijo que el charco era solo suyo.", "El sol secó el charco y Toño se quedó solo.", "Volvió a llover y Toño invitó a todos."],
      causas: [
        { causa: "Toño no dejó entrar a nadie", efecto: "se quedó solo y aburrido" },
        { causa: "Salió el sol", efecto: "el charco se hizo pequeño" }
      ],
      argumenta: [
        { p: "¿Qué harías tú si fueras Toño el primer día? ¿Por qué?", criterios: ["Dice qué haría distinto", "Da una razón", "Usa la enseñanza de la fábula"] },
        { p: "¿Estás de acuerdo con que compartir es más divertido? ¿Por qué?", criterios: ["Toma una posición", "Da una razón", "Cuenta un ejemplo de su vida"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LC01-4",
      titulo: "El colibrí",
      tipo: "informativo",
      dba: "DBA Lenguaje 1.°, n.º 6: interpreta diversos textos a partir de la lectura de palabras sencillas y de las imágenes que contienen",
      parrafos: [
        ["El colibrí es un ave muy pequeña.", "Algunos colibríes son del tamaño de un dedo."],
        ["Mueve sus alas tan rápido que casi no se ven.", "Puede volar hacia atrás."],
        ["Tiene un pico largo y delgado.", "Con el pico toma el néctar de las flores."],
        ["Colombia es uno de los países con más clases de colibríes.", "Si siembras flores, los colibríes visitarán tu casa."]
      ],
      literal: [
        { p: "¿Cómo es el colibrí?", r: "un ave muy pequeña", s: [0, 0] },
        { p: "¿Hacia dónde puede volar el colibrí?", r: "hacia atrás", s: [1, 1] },
        { p: "¿Cómo es su pico?", r: "largo y delgado", s: [2, 0] },
        { p: "¿Qué toma de las flores?", r: "el néctar", s: [2, 1] }
      ],
      entrelineas: [
        { p: "¿Por qué casi no vemos las alas del colibrí?", op: ["Porque se mueven muy rápido", "Porque son transparentes", "Porque las esconde"], c: 0, s: [1, 0], ex: "El texto dice que las mueve «tan rápido que casi no se ven»." },
        { p: "¿Para qué visita el colibrí las flores?", op: ["Para dormir en ellas", "Para esconderse de la lluvia", "Para alimentarse del néctar"], c: 2, s: [2, 1], ex: "Con el pico toma el néctar: ese es su alimento." }
      ],
      contexto: [
        { w: "néctar", s: [2, 1], op: ["Semillas duras", "Líquido dulce de las flores", "Hojas secas"], c: 1, ex: "El colibrí lo toma con su pico largo dentro de las flores." },
        { w: "delgado", s: [2, 0], op: ["Fino, no grueso", "Muy corto", "De color rojo"], c: 0, ex: "Va junto a «largo»: un pico largo y fino entra en la flor." }
      ],
      dondelopone: [
        { a: "En Colombia hay muchos tipos de colibríes.", s: [3, 0] },
        { a: "El colibrí puede volar en reversa.", s: [1, 1] }
      ],
      orden: ["El tamaño del colibrí.", "Cómo mueve las alas.", "Cómo es su pico y qué come.", "Los colibríes en Colombia."],
      causas: [
        { causa: "Mueve las alas muy rápido", efecto: "casi no se ven" },
        { causa: "Siembras flores", efecto: "los colibríes visitan tu casa" }
      ],
      argumenta: [
        { p: "¿Qué harías tú para que lleguen colibríes a tu casa o al colegio? ¿Por qué?", criterios: ["Propone una acción", "Usa un dato del texto", "Explica la razón"] },
        { p: "¿Por qué crees que debemos cuidar a los colibríes?", criterios: ["Da al menos una razón", "Relaciona con las flores o con Colombia", "Se expresa con claridad"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LC01-5",
      titulo: "Arepas con queso",
      tipo: "instructivo",
      dba: "DBA Lenguaje 1.°, n.º 6: interpreta diversos textos a partir de la lectura de palabras sencillas y de las imágenes que contienen",
      parrafos: [
        ["Vamos a preparar arepas con queso para el desayuno."],
        ["Necesitas: harina de maíz, agua tibia, sal y queso."],
        ["Primero, lávate las manos.", "Luego, mezcla la harina, el agua y la sal en un tazón.", "Amasa hasta que la masa quede suave.", "Haz bolitas y aplástalas con las manos.", "Un adulto asa las arepas en la estufa.", "Por último, pon queso encima y ¡a comer!"]
      ],
      literal: [
        { p: "¿Para qué comida son las arepas?", r: "para el desayuno", s: [0, 0] },
        { p: "¿Cómo debe estar el agua?", r: "tibia", s: [1, 0] },
        { p: "¿Dónde se mezclan la harina, el agua y la sal?", r: "en un tazón", s: [2, 1] },
        { p: "¿Quién asa las arepas?", r: "Un adulto", s: [2, 4] }
      ],
      entrelineas: [
        { p: "¿Por qué un adulto asa las arepas?", op: ["Porque la estufa quema y es peligrosa", "Porque los niños no comen arepa", "Porque el queso es caro"], c: 0, s: [2, 4], ex: "La estufa está caliente; por seguridad la usa un adulto." },
        { p: "¿Qué pasaría si no amasas bien?", op: ["La arepa saldría azul", "La masa no quedaría suave", "La arepa tendría más queso"], c: 1, s: [2, 2], ex: "El texto dice que se amasa «hasta que la masa quede suave»: sin amasar no queda suave." }
      ],
      contexto: [
        { w: "Amasa", s: [2, 2], op: ["Corta con tijeras", "Aprieta y mueve la masa con las manos", "Echa al agua"], c: 1, ex: "Se hace con la masa para que quede suave: se aprieta con las manos." },
        { w: "tibia", s: [1, 0], op: ["Congelada", "Hirviendo", "Ni muy caliente ni muy fría"], c: 2, ex: "Es agua para mezclar con las manos; no puede quemar ni estar helada." }
      ],
      dondelopone: [
        { a: "Las arepas se forman con bolitas aplastadas.", s: [2, 3] },
        { a: "El queso se pone al final.", s: [2, 5] }
      ],
      orden: ["Lavarse las manos.", "Mezclar harina, agua y sal.", "Amasar hasta que esté suave.", "Hacer bolitas y aplastarlas.", "Un adulto asa las arepas.", "Poner queso encima."],
      causas: [
        { causa: "Amasamos bien", efecto: "la masa queda suave" },
        { causa: "Un adulto usa la estufa", efecto: "las arepas se asan sin peligro para los niños" }
      ],
      argumenta: [
        { p: "¿Qué harías tú para ayudar en la cocina sin peligro? ¿Por qué?", criterios: ["Elige un paso seguro de la receta", "Explica por qué es seguro", "Menciona al adulto"] },
        { p: "¿Es importante seguir los pasos en orden? ¿Por qué?", criterios: ["Da una opinión", "Usa un ejemplo de la receta", "Explica qué pasaría si no"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LC01-6",
      titulo: "El Mohán del río",
      tipo: "leyenda",
      dba: "DBA Lenguaje 1.°, n.º 4: interpreta textos literarios como parte de su iniciación en la comprensión de textos",
      parrafos: [
        ["En los ríos de Colombia, los pescadores cuentan la historia del Mohán.", "El Mohán es un hombre grande, con barba larga y sombrero de paja."],
        ["Vive en una cueva debajo del agua.", "Le gusta tocar el tiple en la orilla del río."],
        ["Cuando alguien ensucia el río, el Mohán esconde sus anzuelos.", "Cuando alguien cuida el agua, le llena la red de peces."],
        ["Por eso, los pescadores dicen: «Cuida el río y el río te cuidará»."]
      ],
      literal: [
        { p: "¿Cómo es la barba del Mohán?", r: "barba larga", s: [0, 1] },
        { p: "¿Dónde vive el Mohán?", r: "en una cueva debajo del agua", s: [1, 0] },
        { p: "¿Qué instrumento toca?", r: "el tiple", s: [1, 1] },
        { p: "¿Qué esconde el Mohán cuando ensucian el río?", r: "sus anzuelos", s: [2, 0] }
      ],
      entrelineas: [
        { p: "¿Qué quiere enseñar esta leyenda?", op: ["Que pescar es aburrido", "Que hay que cuidar el agua de los ríos", "Que el tiple es difícil de tocar"], c: 1, s: [3, 0], ex: "El dicho final, «Cuida el río y el río te cuidará», resume la enseñanza." },
        { p: "¿Por qué el Mohán esconde los anzuelos?", op: ["Para castigar a quien ensucia el río", "Porque quiere pescar él solo", "Porque se le perdieron los suyos"], c: 0, s: [2, 0], ex: "Lo hace solo cuando alguien ensucia el río; a quien lo cuida, lo premia." }
      ],
      contexto: [
        { w: "orilla", s: [1, 1], op: ["El fondo del río", "Lo alto de la montaña", "El borde del río, junto al agua"], c: 2, ex: "Vive en el agua, pero toca el tiple afuera, al lado del río." },
        { w: "anzuelos", s: [2, 0], op: ["Ganchitos para pescar", "Zapatos de pescador", "Canciones del río"], c: 0, ex: "Son cosas de pescadores: si se esconden, no pueden pescar." }
      ],
      dondelopone: [
        { a: "El Mohán premia a quien cuida el agua.", s: [2, 1] },
        { a: "Al Mohán le gusta la música.", s: [1, 1] }
      ],
      orden: ["Los pescadores cuentan la historia del Mohán.", "El Mohán vive en una cueva bajo el agua.", "Si ensucian el río, esconde los anzuelos.", "Si cuidan el agua, llena la red de peces."],
      causas: [
        { causa: "Alguien ensucia el río", efecto: "el Mohán esconde sus anzuelos" },
        { causa: "Alguien cuida el agua", efecto: "el Mohán le llena la red de peces" }
      ],
      argumenta: [
        { p: "¿Qué harías tú para cuidar un río como el Cali o el Pance? ¿Por qué?", criterios: ["Dice una acción concreta", "Explica para qué sirve", "Usa la enseñanza de la leyenda"] },
        { p: "¿Crees que el Mohán es justo? ¿Por qué?", criterios: ["Toma una posición", "Usa lo que hace el Mohán en el texto", "Explica con sus palabras"] }
      ],
      autor: "Texto original SABI CENTEC (recreación de la leyenda de tradición oral colombiana)"
    }
  ];
})(window.SABI_TALLER = window.SABI_TALLER || {});
