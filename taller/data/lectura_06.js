/* SABI Taller · Lectura · Grado 06 · Textos originales SABI CENTEC */
(function (T) {
  T.lectura = T.lectura || {};
  T.lectura["06"] = [
    {
      id: "LC06-1",
      titulo: "La billetera de la estación",
      tipo: "narrativo",
      dba: "DBA Lenguaje 6.°, n.º 3: reconoce las obras literarias como una posibilidad de circulación del conocimiento y de desarrollo de su imaginación.",
      parrafos: [
        ["Era lunes y Valentina Mosquera llegó corriendo a la estación del MIO de la calle Quinta.",
         "Tenía doce años, una mochila morada y una tarea de ciencias que todavía no había terminado.",
         "Mientras esperaba el bus, vio en el suelo una billetera café, gastada en las esquinas."],
        ["La abrió con cuidado y encontró una cédula, una foto de dos niños y ciento veinte mil pesos.",
         "En ese momento llegó su amigo Julián, que miró los billetes con los ojos muy abiertos.",
         "—Nadie te vio, Vale; con eso compramos los guayos que queremos —le dijo en voz baja.",
         "Valentina sintió que la billetera le pesaba más que la mochila."],
        ["Pensó en la foto de los niños y en su mamá, que trabajaba todo el día en una panadería de Ciudad Córdoba.",
         "Recordó también la vez que se le perdió el pasaje y una señora desconocida le prestó su tarjeta para que pudiera volver a casa.",
         "Sin decir nada, caminó hasta la taquilla y le entregó la billetera al guarda de seguridad.",
         "El guarda anotó su nombre y el de su colegio en un cuaderno azul."],
        ["Julián se fue molesto y no le habló durante toda la mañana.",
         "Dos días después, la coordinadora entró al salón de sexto acompañada de un hombre de overol.",
         "Era don Arnulfo Riascos, el dueño de la billetera, que había ido a buscar a la estudiante que se la devolvió.",
         "—Ahí estaba la plata del arriendo —dijo con la voz quebrada—; sin ella, mis hijos y yo no tendríamos dónde dormir este mes."],
        ["Don Arnulfo quiso darle una recompensa, pero Valentina le pidió que mejor les contara la historia a sus hijos.",
         "Esa tarde, en el recreo, Julián se sentó a su lado y le ofreció la mitad de su empanada.",
         "No dijo «perdón», pero Valentina entendió que era su manera de decirlo."]
      ],
      literal: [
        { p: "¿Qué vio Valentina en el suelo mientras esperaba el bus?", r: "una billetera café", s: [0, 2] },
        { p: "¿Qué encontró Valentina dentro de la billetera?", r: "una cédula, una foto de dos niños y ciento veinte mil pesos", s: [1, 0] },
        { p: "¿A quién le entregó Valentina la billetera?", r: "al guarda de seguridad", s: [2, 2] },
        { p: "Según don Arnulfo, ¿qué dinero estaba en la billetera?", r: "la plata del arriendo", s: [3, 3] }
      ],
      entrelineas: [
        { p: "¿Qué significa que la billetera «le pesaba más que la mochila»?",
          op: ["Que la billetera estaba llena de monedas y era muy pesada", "Que Valentina sentía el peso de decidir qué hacer con algo que no era suyo", "Que la mochila estaba vacía porque no había hecho la tarea", "Que estaba cansada de correr hasta la estación"],
          c: 1, s: [1, 3], ex: "Una billetera no pesa más que una mochila con útiles: es una expresión figurada. Aparece justo después de que Julián le propone quedarse con la plata, así que el «peso» es la presión de tomar una decisión correcta." },
        { p: "¿Por qué Valentina piensa en su mamá antes de decidir?",
          op: ["Porque quería llamarla para pedirle permiso", "Porque su mamá era la dueña de la billetera", "Porque se imagina lo difícil que es ganar ese dinero trabajando todo el día", "Porque debía llevarle pan de la panadería"],
          c: 2, s: [2, 0], ex: "El texto relaciona la foto de los niños con su mamá, que trabaja todo el día. Valentina se pone en el lugar de una familia trabajadora que perdería su dinero. La billetera era de don Arnulfo, no de la mamá." },
        { p: "¿Por qué Julián le ofrece la mitad de su empanada al final?",
          op: ["Porque no tenía hambre", "Porque quería pedirle plata prestada", "Porque la coordinadora se lo ordenó", "Porque reconoce que ella actuó bien y quiere hacer las paces"],
          c: 3, s: [4, 2], ex: "La última oración dice que Valentina entendió que era su manera de pedir perdón. Julián había estado molesto; compartir la comida muestra que cambió de actitud al conocer las consecuencias." }
      ],
      contexto: [
        { w: "gastada", s: [0, 2], op: ["desgastada por el uso", "comprada hace poco", "llena de dinero"], c: 0, ex: "Se dice «gastada en las esquinas»: las esquinas se ven viejas por el uso, como pasa con una billetera que se lleva mucho tiempo." },
        { w: "quebrada", s: [3, 3], op: ["entrecortada por la emoción", "fuerte y alegre", "ronca por una gripa"], c: 0, ex: "Don Arnulfo habla de que sus hijos no tendrían dónde dormir: está conmovido. La voz «quebrada» es la que se corta por la emoción; nada en el texto indica que esté enfermo." },
        { w: "recompensa", s: [4, 0], op: ["un regaño", "un premio en agradecimiento", "una multa"], c: 1, ex: "Don Arnulfo quiere agradecer que le devolvieron la plata; por eso ofrece algo a cambio, un premio. No tendría sentido regañarla ni multarla." }
      ],
      dondelopone: [
        { a: "Un amigo le propuso a Valentina quedarse con el dinero.", s: [1, 2] },
        { a: "Alguien había ayudado antes a Valentina cuando no tenía con qué pagar el transporte.", s: [2, 1] },
        { a: "El dueño de la billetera fue en persona al colegio.", s: [3, 2] }
      ],
      orden: [
        "Valentina encuentra una billetera en la estación del MIO.",
        "Julián le propone gastar el dinero en guayos.",
        "Valentina entrega la billetera al guarda de seguridad.",
        "Don Arnulfo visita el colegio para conocer a la estudiante.",
        "Julián comparte su empanada con Valentina."
      ],
      causas: [
        { causa: "El guarda anotó el nombre de Valentina y el de su colegio", efecto: "don Arnulfo pudo encontrarla dos días después" },
        { causa: "Valentina devolvió la billetera en lugar de comprar los guayos", efecto: "Julián se fue molesto y no le habló en toda la mañana" },
        { causa: "Valentina no se quedó con la plata del arriendo", efecto: "la familia de don Arnulfo no se quedó sin dónde dormir ese mes" }
      ],
      argumenta: [
        { p: "Julián dijo: «Nadie te vio». ¿Ser honesto depende de que alguien nos esté mirando? Escribe un párrafo argumentativo.",
          criterios: ["Tesis: expresa en una oración clara su posición", "Razones: presenta al menos dos razones distintas", "Evidencia del texto: cita o parafrasea un hecho de la historia (por ejemplo, la plata del arriendo o el recuerdo del pasaje)", "Contraargumento: reconoce lo que pensaría Julián y le responde con respeto"] },
        { p: "¿Hizo bien Valentina al no aceptar la recompensa? Defiende tu posición.",
          criterios: ["Tesis: dice si está de acuerdo o no con la decisión", "Razones: explica por qué, con al menos dos ideas", "Evidencia del texto: menciona lo que Valentina pidió a cambio", "Contraargumento: considera la opinión contraria (aceptar también podía ser correcto) y la responde"] }
      ],
      autor: "Texto original SABI CENTEC"
    },

    {
      id: "LC06-2",
      titulo: "Los manglares: bosques entre el río y el mar",
      tipo: "informativo",
      dba: "DBA Lenguaje 6.°, n.º 6: comprende diversos tipos de texto, a partir del análisis de sus contenidos, características formales e intenciones comunicativas.",
      parrafos: [
        ["En la costa pacífica colombiana, desde Nariño hasta el Chocó, crecen unos bosques muy especiales llamados manglares.",
         "Sus árboles viven donde el agua dulce de los ríos se mezcla con el agua salada del mar.",
         "A esa mezcla se le llama agua salobre, y muy pocas plantas pueden soportarla."],
        ["El mangle rojo es fácil de reconocer por sus raíces zancudas, que salen del tronco y bajan hasta el lodo como si fueran patas.",
         "Estas raíces sostienen al árbol cuando sube la marea y le ayudan a respirar, porque el lodo casi no tiene oxígeno.",
         "Otras especies de mangle eliminan parte de la sal que absorben a través de sus hojas."],
        ["Entre las raíces se esconden peces pequeños, camarones, cangrejos y la piangua, un molusco que las familias del Pacífico recolectan para cocinar y vender.",
         "Por eso se dice que el manglar es una sala cuna del mar: allí nacen y crecen muchas especies antes de salir a mar abierto.",
         "Las garzas y los pelícanos también llegan a buscar alimento."],
        ["Los manglares protegen a las comunidades de la costa.",
         "Sus raíces frenan la fuerza de las olas y disminuyen el daño de las tormentas y de los maremotos.",
         "También atrapan grandes cantidades de carbono en el lodo, lo que ayuda a reducir el calentamiento del planeta."],
        ["Sin embargo, estos bosques están amenazados por la tala para hacer carbón y construir viviendas, por la basura plástica y por la contaminación de los ríos.",
         "Cuando un manglar desaparece, la piangua escasea, la pesca disminuye y el mar avanza sobre la tierra.",
         "Cuidar el manglar es cuidar la comida, el trabajo y la seguridad de miles de personas."]
      ],
      literal: [
        { p: "¿Cómo se llama la mezcla de agua dulce y agua salada?", r: "agua salobre", s: [0, 2] },
        { p: "¿A qué se parecen las raíces del mangle rojo?", r: "como si fueran patas", s: [1, 0] },
        { p: "¿Qué tipo de animal es la piangua?", r: "un molusco", s: [2, 0] },
        { p: "¿Qué atrapan los manglares en el lodo?", r: "grandes cantidades de carbono", s: [3, 2] }
      ],
      entrelineas: [
        { p: "Si se tala el manglar cerca de Tumaco, ¿qué le pasaría probablemente a una familia que vive de recolectar piangua?",
          op: ["Ganaría más dinero porque habría más espacio", "Tendría menos piangua para comer y vender", "No le pasaría nada, porque la piangua vive en mar abierto", "Podría recolectar piangua con más facilidad"],
          c: 1, s: [4, 1], ex: "El texto dice que la piangua vive entre las raíces y que, cuando el manglar desaparece, la piangua escasea. Por lo tanto, la familia perdería parte de su alimento y de su ingreso." },
        { p: "¿Por qué muy pocas plantas logran vivir donde crecen los manglares?",
          op: ["Porque no soportan el agua salobre ni el lodo con poco oxígeno", "Porque los pelícanos se las comen", "Porque en la costa hace mucho frío", "Porque las familias las arrancan para sembrar mangle"],
          c: 0, s: [0, 2], ex: "El texto explica dos condiciones difíciles: el agua salobre, que pocas plantas soportan, y el lodo casi sin oxígeno. El mangle tiene adaptaciones (raíces zancudas, eliminación de sal) que otras plantas no tienen." },
        { p: "¿Cuál es la intención principal de este texto?",
          op: ["Vender productos del Pacífico", "Contar la vida de un pescador", "Explicar qué son los manglares y convencer al lector de su importancia", "Enseñar a construir casas en la costa"],
          c: 2, s: [4, 2], ex: "El texto informa (qué son, cómo son, qué animales albergan) y termina con una frase que invita a cuidarlos: «Cuidar el manglar es cuidar la comida, el trabajo y la seguridad»." }
      ],
      contexto: [
        { w: "zancudas", s: [1, 0], op: ["largas y elevadas, como patas", "llenas de mosquitos", "muy cortas y escondidas bajo el lodo"], c: 0, ex: "La misma oración dice que las raíces bajan hasta el lodo «como si fueran patas». En Colombia «zancudo» también es un mosquito, pero aquí el texto describe la forma de la raíz." },
        { w: "escasea", s: [4, 1], op: ["abunda", "se vuelve difícil de encontrar", "cambia de color"], c: 1, ex: "La oración enumera pérdidas: la pesca disminuye y el mar avanza. «Escasea» va en la misma línea: hay menos piangua." },
        { w: "amenazados", s: [4, 0], op: ["en peligro", "protegidos por la ley", "creciendo con rapidez"], c: 0, ex: "Después de «amenazados» se enumeran la tala, la basura y la contaminación: todos son peligros para el bosque." }
      ],
      dondelopone: [
        { a: "Los manglares ayudan a frenar el cambio climático.", s: [3, 2] },
        { a: "Algunas aves aprovechan el manglar para comer.", s: [2, 2] },
        { a: "Las raíces funcionan como una barrera contra el oleaje.", s: [3, 1] }
      ],
      orden: [
        "Dónde crecen los manglares y en qué tipo de agua viven.",
        "Cómo son las raíces del mangle rojo.",
        "Qué animales viven entre las raíces.",
        "Cómo protegen los manglares a las comunidades y al planeta.",
        "Qué amenazas sufren los manglares."
      ],
      causas: [
        { causa: "Las raíces del mangle frenan la fuerza de las olas", efecto: "las tormentas y los maremotos causan menos daño" },
        { causa: "Se talan manglares para hacer carbón y viviendas", efecto: "la piangua escasea y la pesca disminuye" },
        { causa: "Muchas especies nacen y crecen entre las raíces", efecto: "al manglar se le llama sala cuna del mar" }
      ],
      argumenta: [
        { p: "¿Debería prohibirse totalmente cortar mangle, aunque algunas familias lo usen para hacer carbón y ganarse la vida? Argumenta.",
          criterios: ["Tesis: toma una posición clara frente a la prohibición", "Razones: da al menos dos razones (ambientales, económicas o de seguridad)", "Evidencia del texto: usa un dato del texto (protección contra olas, piangua, carbono)", "Contraargumento: reconoce la necesidad de las familias y propone una respuesta o alternativa"] },
        { p: "El texto afirma que cuidar el manglar es cuidar la comida y el trabajo de miles de personas. ¿Le importa ese cuidado a un estudiante de Cali, lejos del mar? Defiende tu opinión.",
          criterios: ["Tesis: responde sí o no con una oración clara", "Razones: explica la relación entre Cali y el Pacífico (alimentos, clima, ríos)", "Evidencia del texto: cita una idea del texto que apoye su postura", "Contraargumento: responde a quien diga «eso no me afecta porque vivo lejos»"] }
      ],
      autor: "Texto original SABI CENTEC"
    },

    {
      id: "LC06-3",
      titulo: "Cómo hacer compost en un balde",
      tipo: "instructivo",
      dba: "DBA Lenguaje 6.°, n.º 6: comprende diversos tipos de texto, a partir del análisis de sus contenidos, características formales e intenciones comunicativas.",
      parrafos: [
        ["Cada día, en muchas casas de Cali se botan cáscaras de plátano, de papaya y de huevo que podrían convertirse en abono.",
         "Con un balde y un poco de paciencia, puedes transformar esos residuos en compost, una tierra oscura y nutritiva para las plantas."],
        ["Materiales: un balde de plástico con tapa, una puntilla gruesa, tierra de jardín, hojas secas o cartón picado y residuos orgánicos de la cocina."],
        ["Paso 1: pide a un adulto que haga ocho o diez huecos pequeños con la puntilla en la tapa y en los lados del balde, para que entre el aire.",
         "Paso 2: pon en el fondo una capa de tierra de cinco centímetros.",
         "Paso 3: agrega una capa de residuos de cocina picados en trozos pequeños y cúbrela con una capa de hojas secas o cartón.",
         "Paso 4: repite las capas cada vez que tengas residuos, alternando siempre lo húmedo con lo seco.",
         "Paso 5: una vez por semana, revuelve todo con un palo para que el aire llegue al centro."],
        ["No eches carne, huesos, lácteos, aceite ni excrementos de mascotas, porque producen mal olor y atraen moscas y ratones.",
         "Si la mezcla huele feo o está muy mojada, añade más hojas secas o cartón.",
         "Si está muy seca y no cambia, rocíala con un poco de agua.",
         "Lávate las manos con agua y jabón después de manipular el compost."],
        ["Entre dos y cuatro meses después, el compost estará listo cuando tenga color café oscuro, huela a tierra mojada y ya no se reconozcan los residuos.",
         "Puedes mezclarlo con la tierra de las matas de tu casa o de la huerta del colegio."]
      ],
      literal: [
        { p: "¿Qué se pone en el fondo del balde?", r: "una capa de tierra de cinco centímetros", s: [2, 1] },
        { p: "¿Cada cuánto se debe revolver la mezcla?", r: "una vez por semana", s: [2, 4] },
        { p: "¿Qué se debe añadir si la mezcla huele feo?", r: "más hojas secas o cartón", s: [3, 1] },
        { p: "¿Cuánto tiempo tarda el compost en estar listo?", r: "Entre dos y cuatro meses", s: [4, 0] }
      ],
      entrelineas: [
        { p: "¿Qué pasaría probablemente si nunca se revuelve la mezcla?",
          op: ["El compost estaría listo más rápido", "Al centro le faltaría aire y el proceso sería más lento o daría mal olor", "El balde se rompería", "Las hojas secas se volverían tierra en un día"],
          c: 1, s: [2, 4], ex: "El paso 5 dice que se revuelve «para que el aire llegue al centro». Si no se hace, el centro queda sin aire; los huecos del paso 1 también muestran que el aire es necesario para el proceso." },
        { p: "¿Qué función cumplen las hojas secas y el cartón en el compost?",
          op: ["Equilibran la humedad de los residuos de cocina", "Le dan sabor al compost", "Atraen a los ratones", "Impiden que entre el aire"],
          c: 0, s: [3, 1], ex: "Cuando la mezcla está muy mojada, el texto ordena añadir hojas secas o cartón; además, en el paso 4 se alterna «lo húmedo con lo seco». Por eso se deduce que lo seco compensa la humedad." },
        { p: "¿Por qué el paso 1 pide la ayuda de un adulto?",
          op: ["Porque los niños no saben contar hasta diez", "Porque el balde es muy pesado", "Porque perforar con una puntilla puede causar pinchazos o cortes", "Porque los adultos producen más residuos"],
          c: 2, s: [2, 0], ex: "El paso 1 es el único que usa una herramienta con punta. Los instructivos piden supervisión cuando hay riesgo; el balde vacío no es pesado y contar no tiene relación con la seguridad." }
      ],
      contexto: [
        { w: "nutritiva", s: [0, 1], op: ["que alimenta a las plantas", "que tiene mal olor", "que es de color claro"], c: 0, ex: "El compost se describe como una tierra «para las plantas» que sirve de abono: les da alimento. Además el texto dice que es oscura, no clara." },
        { w: "alternando", s: [2, 3], op: ["mezclando todo al mismo tiempo", "poniendo una cosa y luego la otra, por turnos", "eliminando lo que sobra"], c: 1, ex: "El texto habla de repetir «las capas»: una capa húmeda (residuos) y luego una seca (hojas). Alternar es intercalar por turnos." },
        { w: "manipular", s: [3, 3], op: ["engañar a alguien", "tocar o mover con las manos", "comprar en una tienda"], c: 1, ex: "La oración pide lavarse las manos después: se refiere a haber tocado el compost. «Manipular» también puede significar engañar, pero ese sentido no encaja aquí." }
      ],
      dondelopone: [
        { a: "Algunos alimentos no deben ir al compost porque atraen animales indeseados.", s: [3, 0] },
        { a: "Los restos de cocina se deben cortar antes de echarlos.", s: [2, 2] },
        { a: "El compost terminado se puede usar en la huerta escolar.", s: [4, 1] }
      ],
      orden: [
        "Hacer huecos en la tapa y en los lados del balde.",
        "Poner una capa de tierra en el fondo.",
        "Agregar residuos picados y cubrirlos con hojas secas.",
        "Repetir las capas alternando lo húmedo y lo seco.",
        "Revolver la mezcla cada semana.",
        "Usar el compost listo en las matas o en la huerta."
      ],
      causas: [
        { causa: "Se echan carne, huesos o aceite al balde", efecto: "aparecen mal olor, moscas y ratones" },
        { causa: "La mezcla queda muy mojada", efecto: "hay que añadir hojas secas o cartón" },
        { causa: "Se hacen huecos en el balde", efecto: "entra el aire a la mezcla" }
      ],
      argumenta: [
        { p: "¿Debería cada salón del colegio tener su propio balde de compost? Defiende tu posición.",
          criterios: ["Tesis: expresa con claridad si está a favor o en contra", "Razones: da al menos dos razones (ambiente, aprendizaje, huerta, olores, espacio)", "Evidencia del texto: usa una instrucción o cuidado del texto para apoyar su idea", "Contraargumento: responde a una objeción (por ejemplo, el mal olor) con información del texto"] },
        { p: "Un compañero dice: «Hacer compost es perder el tiempo; es más fácil botar todo a la basura». Respóndele con argumentos.",
          criterios: ["Tesis: fija una postura frente a la afirmación", "Razones: explica beneficios o costos con al menos dos ideas", "Evidencia del texto: menciona qué se obtiene del compost según el texto", "Contraargumento: reconoce que sí requiere tiempo y explica por qué vale o no vale la pena"] }
      ],
      autor: "Texto original SABI CENTEC"
    },

    {
      id: "LC06-4",
      titulo: "La Madremonte",
      tipo: "leyenda",
      dba: "DBA Lenguaje 6.°, n.º 5: interpreta obras de la tradición popular propias de su entorno.",
      parrafos: [
        ["Cuentan los abuelos de las montañas de Colombia que en lo más espeso del bosque vive la Madremonte.",
         "Dicen que es una mujer alta y fuerte, vestida de hojas y musgo, con un sombrero de ramas que le tapa la cara.",
         "Nadie la ha visto de frente, pero muchos aseguran haber oído sus gritos cuando el viento sacude los árboles."],
        ["Según la leyenda, la Madremonte es la guardiana de los bosques, los nacimientos de agua y los animales.",
         "Se enfurece con quienes queman el monte, ensucian las quebradas o cazan sin necesidad.",
         "También castiga a los que roban ganado o corren las cercas para quedarse con la tierra del vecino."],
        ["En esta versión de la leyenda, el protagonista es un leñador llamado Eusebio, que talaba más árboles de los que necesitaba para venderlos en el pueblo.",
         "Una tarde, mientras cortaba un cedro centenario, el cielo se oscureció y empezó a llover con fuerza.",
         "Eusebio quiso regresar a su casa, pero los caminos que conocía de memoria se borraron entre la neblina.",
         "Caminó toda la noche en círculos, oyendo risas y quejidos entre los guaduales."],
        ["Al amanecer, unos arrieros lo encontraron temblando junto a una quebrada, con la ropa enredada de bejucos.",
         "Desde ese día, Eusebio solo cortó la madera que necesitaba y sembró dos árboles por cada uno que tumbaba."],
        ["Quienes cuentan esta leyenda no buscan asustar a los niños, sino enseñarles a respetar la naturaleza.",
         "Para ellos, el monte tiene dueña, y quien lo cuida puede caminar por él sin miedo."]
      ],
      literal: [
        { p: "¿Cómo está vestida la Madremonte?", r: "vestida de hojas y musgo", s: [0, 1] },
        { p: "¿Qué árbol cortaba Eusebio cuando empezó a llover?", r: "un cedro centenario", s: [2, 1] },
        { p: "¿Dónde encontraron los arrieros a Eusebio?", r: "junto a una quebrada", s: [3, 0] },
        { p: "¿Cuántos árboles sembraba Eusebio por cada uno que tumbaba?", r: "dos árboles", s: [3, 1] }
      ],
      entrelineas: [
        { p: "Según la lógica de la leyenda, ¿por qué Eusebio se perdió en caminos que conocía de memoria?",
          op: ["Porque estaba viejo y se le olvidaron", "Porque la Madremonte lo castigó por talar más de lo necesario", "Porque un arriero le cambió las señales", "Porque se quedó dormido bajo el cedro"],
          c: 1, s: [2, 2], ex: "El párrafo anterior dice que la Madremonte castiga a quien daña el monte, y Eusebio talaba de más. Las risas y quejidos entre los guaduales sugieren su presencia. No se habla de vejez ni de sueño." },
        { p: "¿Qué enseñanza deja la leyenda?",
          op: ["Que no se debe salir de noche al bosque", "Que los leñadores son malas personas", "Que la lluvia es peligrosa", "Que quien respeta y cuida la naturaleza puede vivir en paz con ella"],
          c: 3, s: [4, 1], ex: "La última oración dice que quien cuida el monte puede caminar por él sin miedo. Eusebio no es castigado por ser leñador, sino por abusar; cuando cambia, sigue trabajando." },
        { p: "¿Para qué sirve decir que nadie ha visto a la Madremonte de frente?",
          op: ["Para mantener el misterio y hacer creíble un ser difícil de encontrar", "Para explicar que es invisible para los científicos", "Para decir que vive debajo del agua", "Para mostrar que no existe ninguna leyenda sobre ella"],
          c: 0, s: [0, 2], ex: "Las leyendas suelen mezclar lo que se oye con lo que no se ve. Que nadie la vea de frente, pero sí se oigan sus gritos, aumenta el misterio. El texto no habla de científicos ni de agua." }
      ],
      contexto: [
        { w: "centenario", s: [2, 1], op: ["muy pequeño", "de cien años o más", "que cuesta cien pesos"], c: 1, ex: "«Centenario» viene de «cien»; aplicado a un árbol indica su edad. Cortar un cedro tan viejo es un daño grande, lo que explica el castigo." },
        { w: "Se enfurece", s: [1, 1], op: ["se pone muy brava", "se pone feliz", "se queda dormida"], c: 0, ex: "Lo que sigue son acciones dañinas (quemar, ensuciar, cazar sin necesidad); la reacción lógica de una guardiana es la furia." },
        { w: "arrieros", s: [3, 0], op: ["personas que llevan carga con mulas por los caminos", "pescadores de río", "policías del pueblo"], c: 0, ex: "Los encuentran en el camino del monte al amanecer, que es por donde transitan los arrieros con sus mulas. Ninguna pista habla de pesca ni de policía." }
      ],
      dondelopone: [
        { a: "La Madremonte también protege el agua.", s: [1, 0] },
        { a: "Eusebio vendía la madera que cortaba.", s: [2, 0] },
        { a: "El propósito de la leyenda no es dar miedo.", s: [4, 0] }
      ],
      orden: [
        "Eusebio tala más árboles de los que necesita.",
        "Mientras corta un cedro, empieza a llover con fuerza.",
        "Los caminos se borran entre la neblina.",
        "Eusebio camina toda la noche en círculos.",
        "Unos arrieros lo encuentran al amanecer.",
        "Eusebio empieza a sembrar dos árboles por cada uno que corta."
      ],
      causas: [
        { causa: "Eusebio talaba más árboles de los necesarios", efecto: "la Madremonte lo castigó haciéndolo perder" },
        { causa: "Los caminos se borraron entre la neblina", efecto: "Eusebio caminó en círculos toda la noche" },
        { causa: "Eusebio vivió una noche de miedo en el bosque", efecto: "cambió su forma de trabajar y empezó a sembrar" }
      ],
      argumenta: [
        { p: "¿Sirven hoy leyendas como la de la Madremonte para cuidar el ambiente, o ya no funcionan? Argumenta.",
          criterios: ["Tesis: afirma con claridad si sirven o no", "Razones: da al menos dos razones (memoria cultural, valores, ciencia, tecnología)", "Evidencia del texto: cita la intención que el texto atribuye a quienes cuentan la leyenda", "Contraargumento: responde a quien diga que «son cuentos para asustar»"] },
        { p: "¿Fue justo el castigo que recibió Eusebio? Defiende tu posición.",
          criterios: ["Tesis: dice si fue justo o injusto", "Razones: explica su juicio con al menos dos ideas", "Evidencia del texto: menciona qué hacía Eusebio y cómo cambió", "Contraargumento: considera el punto de vista contrario y le responde"] }
      ],
      autor: "Texto original SABI CENTEC (recreación de la leyenda tradicional colombiana)"
    },

    {
      id: "LC06-5",
      titulo: "Estudiantes sacan 300 kilos de basura de un humedal",
      tipo: "noticia",
      dba: "DBA Lenguaje 6.°, n.º 1: utiliza la información ofrecida por los medios de comunicación, teniendo en cuenta el mensaje, los interlocutores, la intencionalidad y el contexto de producción.",
      parrafos: [
        ["Cali, 14 de marzo.",
         "Un grupo de cuarenta estudiantes de sexto grado sacó más de trescientos kilos de basura del humedal Los Guayacanes, en el oriente de la ciudad, durante una jornada de limpieza que duró seis horas."],
        ["La actividad comenzó a las siete de la mañana y fue organizada por el colegio de los jóvenes junto con la junta de acción comunal del barrio.",
         "Los estudiantes, equipados con guantes, botas de caucho y bolsas, recogieron botellas plásticas, icopor, llantas viejas y hasta un colchón.",
         "Los adultos se encargaron de sacar los objetos pesados y de vigilar las zonas de agua profunda."],
        ["«Nunca imaginé que hubiera tanta basura escondida entre los juncos», contó Samuel Angulo, de once años.",
         "Su compañera Isabella Cuero agregó que lo más triste fue encontrar una tortuga enredada en una bolsa, que fue liberada y entregada a un biólogo."],
        ["Los humedales son terrenos inundados que funcionan como esponjas: almacenan agua de lluvia y reducen las inundaciones en los barrios cercanos.",
         "Además, son refugio de garzas, iguanas, tortugas y peces.",
         "Según la junta comunal, el humedal había perdido casi la mitad de su espejo de agua en los últimos diez años por los rellenos y la basura."],
        ["La jornada terminó con la siembra de veinte árboles nativos, entre ellos guayacanes y chiminangos.",
         "Los estudiantes se comprometieron a regresar cada dos meses para revisar el estado del humedal y a enseñar a sus familias a no arrojar desechos en él."]
      ],
      literal: [
        { p: "¿Cuántos estudiantes participaron en la jornada?", r: "cuarenta estudiantes de sexto grado", s: [0, 1] },
        { p: "¿A qué hora comenzó la actividad?", r: "a las siete de la mañana", s: [1, 0] },
        { p: "¿Qué animal encontraron enredado en una bolsa?", r: "una tortuga", s: [2, 1] },
        { p: "¿Cuántos árboles sembraron al final?", r: "veinte árboles nativos", s: [4, 0] }
      ],
      entrelineas: [
        { p: "¿Por qué un humedal limpio beneficia a los barrios cercanos, aunque sus habitantes nunca lo visiten?",
          op: ["Porque atrae turistas que dejan dinero", "Porque almacena agua de lluvia y reduce las inundaciones", "Porque produce agua potable para todas las casas", "Porque allí se recicla la basura del barrio"],
          c: 1, s: [3, 0], ex: "El texto compara el humedal con una esponja: guarda el agua de lluvia y así evita inundaciones cercanas. No menciona turismo, agua potable ni reciclaje." },
        { p: "¿Para qué incluye el periodista las palabras de Samuel e Isabella?",
          op: ["Para mostrar cómo vivieron la jornada sus protagonistas y hacer la noticia más cercana", "Para demostrar que los niños estaban aburridos", "Porque ellos organizaron la jornada", "Para anunciar un producto"],
          c: 0, s: [2, 0], ex: "Las noticias incluyen testimonios de quienes vivieron el hecho. La jornada la organizaron el colegio y la junta, no los niños, y sus palabras expresan asombro y tristeza, no aburrimiento." },
        { p: "¿Qué se puede concluir sobre el origen de la basura del humedal?",
          op: ["Llegó sola desde el mar", "La dejaron los animales del humedal", "Fue arrojada por personas, porque hay objetos como llantas y un colchón", "La llevaron los estudiantes ese día"],
          c: 2, s: [1, 1], ex: "Llantas, icopor y un colchón son objetos de uso humano que alguien tuvo que botar allí. Además, los estudiantes se comprometen a enseñar a sus familias a «no arrojar desechos», lo que confirma que la basura la tira la gente." }
      ],
      contexto: [
        { w: "refugio", s: [3, 1], op: ["lugar donde se protegen y viven", "lugar peligroso", "tipo de comida"], c: 0, ex: "Las garzas, iguanas, tortugas y peces encuentran en el humedal un sitio para vivir y protegerse; por eso es su refugio." },
        { w: "espejo de agua", s: [3, 2], op: ["la superficie de agua visible del humedal", "un espejo que alguien botó", "el reflejo del sol en el agua"], c: 0, ex: "Se dice que el humedal «perdió casi la mitad» por los rellenos: lo que se pierde es la parte cubierta de agua, que brilla como un espejo." },
        { w: "nativos", s: [4, 0], op: ["traídos de otros países", "propios de la región", "fabricados en plástico"], c: 1, ex: "Los ejemplos son guayacanes y chiminangos, árboles típicos del Valle del Cauca; por eso son nativos." }
      ],
      dondelopone: [
        { a: "Los adultos cuidaron la seguridad de los estudiantes.", s: [1, 2] },
        { a: "El humedal se ha reducido con los años.", s: [3, 2] },
        { a: "Los estudiantes volverán al humedal.", s: [4, 1] }
      ],
      orden: [
        "El colegio y la junta comunal organizan la jornada.",
        "Los estudiantes llegan al humedal a las siete de la mañana.",
        "Recogen más de trescientos kilos de basura.",
        "Siembran veinte árboles nativos al final de la jornada.",
        "Se comprometen a regresar cada dos meses."
      ],
      causas: [
        { causa: "Los rellenos y la basura", efecto: "el humedal perdió casi la mitad de su espejo de agua" },
        { causa: "Los humedales almacenan agua de lluvia", efecto: "se reducen las inundaciones en los barrios cercanos" },
        { causa: "Una tortuga quedó enredada en una bolsa", efecto: "tuvo que ser liberada y entregada a un biólogo" }
      ],
      argumenta: [
        { p: "¿Es suficiente una jornada de limpieza para salvar un humedal? Argumenta tu respuesta.",
          criterios: ["Tesis: expresa una posición clara", "Razones: da al menos dos razones", "Evidencia del texto: usa un dato de la noticia (kilos, pérdida del espejo de agua, compromiso de volver)", "Contraargumento: reconoce el valor de la jornada o sus límites, según su postura, y responde"] },
        { p: "¿Deberían los colegios hacer obligatorias las salidas de servicio ambiental como esta? Defiende tu posición.",
          criterios: ["Tesis: toma partido a favor o en contra", "Razones: explica beneficios o riesgos con al menos dos ideas", "Evidencia del texto: menciona cómo se organizó la seguridad o qué aprendieron los estudiantes", "Contraargumento: responde a una objeción (riesgos, tiempo de clase, costos)"] }
      ],
      autor: "Texto original SABI CENTEC (noticia ficticia con fines didácticos)"
    },

    {
      id: "LC06-6",
      titulo: "Carta al rector: un recreo sin pantallas",
      tipo: "carta",
      dba: "DBA Lenguaje 6.°, n.º 6: comprende diversos tipos de texto, a partir del análisis de sus contenidos, características formales e intenciones comunicativas.",
      parrafos: [
        ["Cali, 2 de mayo.", "Señor rector:"],
        ["Le escribo en nombre de varios compañeros de sexto para pedirle que el colegio prohíba el uso del celular durante el recreo.",
         "Sabemos que esta propuesta puede parecer extraña viniendo de estudiantes, pero la hemos pensado mucho."],
        ["Nuestra primera razón es que el recreo sirve para descansar, jugar y conversar, y el celular nos está quitando eso.",
         "El mes pasado hicimos una encuesta en tres salones: de noventa estudiantes, sesenta dijeron que pasan casi todo el recreo mirando la pantalla.",
         "Varios contaron que antes jugaban fútbol o yermis, y que ahora ni siquiera saben qué les pasó a sus amigos durante el fin de semana."],
        ["La segunda razón es la convivencia.",
         "Muchas peleas empiezan por fotos o videos que se toman sin permiso en el recreo y se publican en los grupos de chat.",
         "Si no hay celulares en el patio, habrá menos burlas y más respeto."],
        ["Algunos dirán que el celular es necesario para hablar con la familia en caso de emergencia.",
         "Estamos de acuerdo, y por eso proponemos que los teléfonos se guarden en un casillero durante el recreo y que se puedan usar en la secretaría cuando haga falta.",
         "También sugerimos que el colegio preste balones, juegos de mesa y libros para que nadie se aburra."],
        ["Creemos que un recreo sin pantallas nos hará más felices y mejores compañeros.",
         "Agradecemos su atención y quedamos atentos a su respuesta.",
         "Atentamente, Mateo Hinestroza, representante de sexto B."]
      ],
      literal: [
        { p: "¿Qué le pide Mateo al rector?", r: "que el colegio prohíba el uso del celular durante el recreo", s: [1, 0] },
        { p: "¿Cuántos estudiantes dijeron que pasan casi todo el recreo mirando la pantalla?", r: "sesenta", s: [2, 1] },
        { p: "¿Dónde proponen que se pueda usar el celular cuando haga falta?", r: "en la secretaría", s: [4, 1] },
        { p: "¿Qué cargo tiene Mateo?", r: "representante de sexto B", s: [5, 2] }
      ],
      entrelineas: [
        { p: "¿Para qué menciona Mateo la encuesta?",
          op: ["Para dar un dato que respalde su primera razón", "Para presumir que sabe matemáticas", "Para pedir que compren más celulares", "Para criticar a los profesores"],
          c: 0, s: [2, 1], ex: "La encuesta aparece justo después de la primera razón (el celular quita el juego y la conversación) y la prueba con números: 60 de 90 estudiantes." },
        { p: "¿Por qué Mateo escribe «Algunos dirán que el celular es necesario...»?",
          op: ["Porque cambió de opinión a mitad de la carta", "Porque anticipa una objeción y la responde con una propuesta", "Porque quiere terminar la carta rápido", "Porque está de acuerdo con prohibir las llamadas a la familia"],
          c: 1, s: [4, 0], ex: "Mateo reconoce la objeción («estamos de acuerdo») y propone una solución (casillero y secretaría). Así fortalece su petición: no cambia de opinión." },
        { p: "¿Qué tono usa Mateo en la carta?",
          op: ["Agresivo y burlón", "Triste y desesperado", "Respetuoso y argumentado", "Chistoso e informal"],
          c: 2, s: [5, 1], ex: "Usa «Señor rector», da razones con datos y se despide agradeciendo la atención. No hay burlas, chistes ni quejas desesperadas." }
      ],
      contexto: [
        { w: "convivencia", s: [3, 0], op: ["la forma de vivir y relacionarse con otros en armonía", "una fiesta del colegio", "el uso de la tecnología"], c: 0, ex: "Las oraciones siguientes hablan de peleas, burlas y respeto: todo se refiere a cómo se relacionan las personas." },
        { w: "casillero", s: [4, 1], op: ["un compartimento para guardar cosas", "un castigo para quien use el celular", "un tipo de teléfono"], c: 0, ex: "Los teléfonos «se guarden en un casillero»: el verbo guardar indica que es un lugar para dejar objetos." },
        { w: "atentos", s: [5, 1], op: ["distraídos", "pendientes, esperando con interés", "molestos"], c: 1, ex: "Quedan atentos «a su respuesta»: esperan con interés lo que diga el rector. El tono amable descarta la molestia." }
      ],
      dondelopone: [
        { a: "Los estudiantes reunieron datos antes de escribir la carta.", s: [2, 1] },
        { a: "Algunos problemas entre compañeros nacen de publicaciones en redes.", s: [3, 1] },
        { a: "Los estudiantes proponen alternativas para que el recreo sea divertido.", s: [4, 2] }
      ],
      orden: [
        "Lugar, fecha y saludo.",
        "Presentación de la petición.",
        "Primera razón: el recreo es para jugar y conversar.",
        "Segunda razón: la convivencia.",
        "Respuesta a una objeción y propuestas.",
        "Conclusión, agradecimiento y firma."
      ],
      causas: [
        { causa: "Se toman fotos o videos sin permiso y se publican en los chats", efecto: "empiezan muchas peleas" },
        { causa: "Los estudiantes pasan el recreo mirando la pantalla", efecto: "ya no saben qué les pasó a sus amigos" },
        { causa: "Las familias pueden necesitar comunicarse en una emergencia", efecto: "proponen permitir el celular en la secretaría" }
      ],
      argumenta: [
        { p: "¿Estás de acuerdo con la propuesta de Mateo? Escribe tu propio párrafo de opinión.",
          criterios: ["Tesis: expresa su posición en la primera oración", "Razones: presenta al menos dos razones propias", "Evidencia del texto: retoma un dato o una idea de la carta (la encuesta, las peleas, la propuesta del casillero)", "Contraargumento: reconoce una idea contraria y la responde"] },
        { p: "Evalúa la carta: ¿es suficiente una encuesta en tres salones para pedir una norma para todo el colegio? Argumenta.",
          criterios: ["Tesis: valora si la evidencia es suficiente o no", "Razones: explica su juicio (tamaño de la muestra, otros grados, otros datos)", "Evidencia del texto: cita los números de la encuesta", "Contraargumento: reconoce el valor de la encuesta o sus límites y responde"] }
      ],
      autor: "Texto original SABI CENTEC"
    }
  ];
})(window.SABI_TALLER = window.SABI_TALLER || {});
