/* SABI Taller · Lectura · Grado 03 · Textos originales SABI CENTEC */
(function (T) {
  T.lectura = T.lectura || {};
  T.lectura["03"] = [
    {
      id: "LC03-1",
      titulo: "Las manos que hablan",
      tipo: "narrativo",
      dba: "DBA Lenguaje 3.°, n.º 3: reconoce algunas características de los textos narrativos, como el narrador y la estructura narrativa",
      parrafos: [
        ["Yeimi llegó a Cali desde Guapi cuando tenía seis años.", "De su pueblo trajo un cununo pequeño, un tambor de madera y cuero que le había regalado su abuela Eustaquia.", "Cada tarde lo tocaba en el patio, y los vecinos se asomaban por la ventana."],
        ["Un día, la profesora anunció que en la izada de bandera cada curso presentaría algo de su región.", "Los compañeros de Yeimi propusieron que ella tocara el cununo.", "Yeimi dijo que sí, pero esa noche no pudo dormir: le sudaban las manos solo de pensar en tanta gente mirándola."],
        ["Por teléfono, la abuela le dio un consejo: «Cuando toques, no mires al público; piensa en el mar de Guapi y deja que tus manos hablen»."],
        ["El día de la presentación, Yeimi cerró los ojos y empezó despacio.", "Pum, pum, pa… El ritmo creció como las olas.", "Sus compañeros empezaron a aplaudir al compás, y hasta el rector se puso a bailar.", "Cuando terminó, Yeimi abrió los ojos y vio a todos sonriendo."],
        ["Esa tarde llamó a su abuela.", "«Abuela, mis manos hablaron», le dijo, «y todo el colegio las entendió»."]
      ],
      literal: [
        { p: "¿De dónde llegó Yeimi a Cali?", r: "desde Guapi", s: [0, 0] },
        { p: "¿Quién le regaló el cununo?", r: "su abuela Eustaquia", s: [0, 1] },
        { p: "¿Qué propusieron los compañeros?", r: "que ella tocara el cununo", s: [1, 1] },
        { p: "¿Qué hizo el rector durante la presentación?", r: "hasta el rector se puso a bailar", s: [3, 2] }
      ],
      entrelineas: [
        { p: "¿Cómo se sentía Yeimi la noche antes de la presentación?", op: ["Nerviosa", "Aburrida", "Brava con sus compañeros", "Tranquila"], c: 0, s: [1, 2], ex: "No pudo dormir y le sudaban las manos al pensar en el público: son señales de nervios. No estaba tranquila ni brava; ella aceptó tocar." },
        { p: "¿Qué quiso decir Yeimi con «mis manos hablaron»?", op: ["Que con su música expresó lo que sentía y la gente lo comprendió", "Que sus manos aprendieron a decir palabras", "Que se lastimó las manos tocando"], c: 0, s: [4, 1], ex: "Es una forma de decir que la música comunica: todos aplaudieron, bailaron y sonrieron, o sea, «entendieron» su mensaje." },
        { p: "¿Por qué le sirvió el consejo de la abuela?", op: ["Porque al pensar en algo querido, sintió menos miedo", "Porque el público se fue del patio", "Porque la abuela tocó por ella"], c: 0, s: [3, 0], ex: "Yeimi cerró los ojos para no ver al público, como le dijo la abuela. El público no se fue: todos aplaudían." }
      ],
      contexto: [
        { w: "asomaban", s: [0, 2], op: ["Sacaban la cabeza para mirar", "Cerraban las puertas", "Se escondían debajo de la cama"], c: 0, ex: "Se asomaban «por la ventana» porque querían ver y oír el tambor." },
        { w: "compás", s: [3, 2], op: ["El ritmo de la música", "Un instrumento de cuerda", "Un paso de baile"], c: 0, ex: "Los compañeros aplaudían siguiendo el ritmo del tambor, al mismo tiempo." },
        { w: "cununo", s: [0, 1], op: ["Un tambor de madera y cuero", "Una flauta", "Un canasto de frutas"], c: 0, ex: "La misma oración lo explica después de la coma: «un tambor de madera y cuero»." }
      ],
      dondelopone: [
        { a: "Yeimi practicaba con su tambor todos los días.", s: [0, 2] },
        { a: "La abuela no estaba con Yeimi en Cali.", s: [2, 0] },
        { a: "Yeimi tocó sin ver al público.", s: [3, 0] }
      ],
      orden: ["Yeimi llegó a Cali desde Guapi.", "La profesora anunció la presentación.", "Yeimi no pudo dormir de los nervios.", "La abuela le dio un consejo por teléfono.", "Yeimi tocó con los ojos cerrados.", "Yeimi llamó a su abuela para contarle."],
      causas: [
        { causa: "Yeimi tocaba el cununo cada tarde en el patio", efecto: "los vecinos se asomaban por la ventana" },
        { causa: "pensaba en tanta gente mirándola", efecto: "no pudo dormir y le sudaban las manos" },
        { causa: "Yeimi siguió el consejo de la abuela", efecto: "pudo tocar sin miedo" }
      ],
      argumenta: [
        { p: "¿Es importante mostrar en el colegio las tradiciones de la región de donde venimos? Da dos razones.", criterios: ["Toma una posición clara", "Da dos razones", "Usa un ejemplo del cuento o de su familia"] },
        { p: "¿Qué opinas del consejo de la abuela? ¿Lo usarías si tuvieras miedo de hablar en público?", criterios: ["Valora el consejo", "Explica por qué funcionaría o no", "Relaciona con una experiencia propia"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LC03-2",
      titulo: "Las abejas, pequeñas jardineras",
      tipo: "informativo",
      dba: "DBA Lenguaje 3.°, n.º 6: interpreta el contenido y la estructura del texto, respondiendo preguntas de orden inferencial y crítico",
      parrafos: [
        ["Las abejas parecen pequeñas, pero hacen un trabajo enorme para el planeta.", "Cuando visitan una flor para tomar néctar, el polen se pega a los pelitos de su cuerpo."],
        ["Después vuelan a otra flor y dejan allí parte de ese polen.", "Ese viaje se llama polinización, y gracias a él las plantas pueden formar frutos y semillas.", "Frutas como la mora, la fresa y el aguacate dependen mucho de estas visitas."],
        ["En una colmena viven miles de abejas.", "La reina pone los huevos, y las obreras buscan alimento, limpian y cuidan a las crías.", "Con el néctar que recogen, las obreras fabrican la miel que guardan para los tiempos difíciles."],
        ["En Colombia también hay abejas nativas sin aguijón, como la angelita, que hace una miel muy apreciada."],
        ["Hoy las abejas están en peligro porque se usan venenos en los cultivos y se destruyen los lugares donde hay flores.", "Sembrar plantas con flores en el balcón o en el patio del colegio es una forma sencilla de ayudarlas."]
      ],
      literal: [
        { p: "¿Qué se pega a los pelitos del cuerpo de la abeja?", r: "el polen", s: [0, 1] },
        { p: "¿Cómo se llama el viaje del polen de flor en flor?", r: "polinización", s: [1, 1] },
        { p: "¿Qué hace la reina en la colmena?", r: "La reina pone los huevos", s: [2, 1] },
        { p: "¿Cómo se llama la abeja colombiana sin aguijón que menciona el texto?", r: "la angelita", s: [3, 0] }
      ],
      entrelineas: [
        { p: "¿Qué pasaría con las moras si no hubiera abejas?", op: ["Habría menos moras", "Habría más moras", "Las moras serían más grandes", "No cambiaría nada"], c: 0, s: [1, 2], ex: "La mora depende mucho de las visitas de las abejas; sin ellas se formarían menos frutos." },
        { p: "¿Por qué el texto dice que las abejas hacen «un trabajo enorme»?", op: ["Porque ayudan a que las plantas den frutos y semillas", "Porque construyen casas gigantes", "Porque cargan cosas muy pesadas"], c: 0, s: [1, 1], ex: "Su trabajo es grande por su efecto: gracias a la polinización hay frutos y semillas. Las abejas no cargan cosas pesadas." },
        { p: "¿Para qué les sirve la miel a las abejas?", op: ["Para alimentarse cuando hay poca comida", "Para pegar la colmena a un árbol", "Para atraer más flores"], c: 0, s: [2, 2], ex: "La guardan «para los tiempos difíciles», es decir, cuando escasea el alimento." }
      ],
      contexto: [
        { w: "nativas", s: [3, 0], op: ["Que son propias de este lugar", "Que vienen de otro país", "Que son muy pequeñas"], c: 0, ex: "Dice «en Colombia también hay abejas nativas»: son abejas que nacieron y viven aquí desde siempre." },
        { w: "crías", s: [2, 1], op: ["Abejas bebé que están creciendo", "Flores nuevas", "Gotas de miel"], c: 0, ex: "La reina pone huevos y las obreras «cuidan a las crías»: son las abejas que salen de esos huevos." }
      ],
      dondelopone: [
        { a: "Sin polinización, las plantas no forman frutos.", s: [1, 1] },
        { a: "Los químicos que se echan a los cultivos dañan a las abejas.", s: [4, 0] },
        { a: "Las obreras tienen varias tareas en la colmena.", s: [2, 1] }
      ],
      orden: ["La abeja visita una flor para tomar néctar.", "El polen se pega a su cuerpo.", "La abeja vuela a otra flor.", "La abeja deja allí parte del polen.", "La planta forma frutos y semillas."],
      causas: [
        { causa: "se usan venenos en los cultivos y se destruyen las flores", efecto: "las abejas están en peligro" },
        { causa: "la abeja deja polen en otra flor", efecto: "la planta puede formar frutos y semillas" },
        { causa: "las obreras recogen néctar", efecto: "pueden fabricar miel" }
      ],
      argumenta: [
        { p: "¿Vale la pena sembrar flores en el patio del colegio? Explica con información del texto.", criterios: ["Toma una posición clara", "Usa al menos un dato del texto", "Propone cómo hacerlo"] },
        { p: "Alguien dice: «Las abejas solo sirven para picar». ¿Estás de acuerdo? Responde con argumentos.", criterios: ["Acepta o rechaza la afirmación", "Da dos razones del texto", "Menciona la abeja sin aguijón o la polinización"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LC03-3",
      titulo: "Cómo hacer un germinador de fríjol",
      tipo: "instructivo",
      dba: "DBA Lenguaje 3.°, n.º 6: interpreta el contenido y la estructura del texto, respondiendo preguntas de orden inferencial y crítico",
      parrafos: [
        ["Con este experimento podrás ver cómo nace una planta día a día."],
        ["Materiales: un vaso transparente de plástico, algodón o servilletas de papel, tres fríjoles secos y un poco de agua."],
        ["Paso 1: Llena el vaso con algodón y humedécelo con agua, sin que quede encharcado.", "Paso 2: Coloca los fríjoles entre el algodón y la pared del vaso, para que puedas verlos.", "Paso 3: Pon el vaso cerca de una ventana donde llegue luz, pero no el sol fuerte todo el día.", "Paso 4: Cada dos días, revisa el algodón y agrega unas gotas de agua si está seco.", "Paso 5: Dibuja en tu cuaderno lo que observas y escribe la fecha."],
        ["Después de unos días verás que el fríjol se abre y sale una raíz blanca que crece hacia abajo.", "Más tarde aparece un tallo con hojas verdes que busca la luz."],
        ["Atención: no dejes el algodón empapado, porque las semillas pueden pudrirse."]
      ],
      literal: [
        { p: "¿Cuántos fríjoles se necesitan?", r: "tres fríjoles secos", s: [1, 0] },
        { p: "¿Dónde se pone el vaso?", r: "cerca de una ventana", s: [2, 2] },
        { p: "¿Cada cuánto se revisa el algodón?", r: "Cada dos días", s: [2, 3] },
        { p: "¿Hacia dónde crece la raíz?", r: "hacia abajo", s: [3, 0] }
      ],
      entrelineas: [
        { p: "¿Por qué el vaso debe ser transparente?", op: ["Para poder ver cómo crece la semilla", "Para que pese menos", "Para que el agua no se salga", "Porque es más barato"], c: 0, s: [2, 1], ex: "El paso 2 dice que los fríjoles van contra la pared del vaso «para que puedas verlos»; eso solo sirve si el vaso deja ver." },
        { p: "¿Para qué se escribe la fecha en el cuaderno?", op: ["Para saber cuántos días tarda la planta en cambiar", "Para que el cuaderno se vea bonito", "Para avisar que el experimento terminó"], c: 0, s: [2, 4], ex: "El propósito es ver cómo nace la planta «día a día»; con la fecha se compara qué cambió y cuándo." },
        { p: "Según el texto, ¿qué necesita la semilla para germinar y crecer?", op: ["Agua en la medida justa y luz", "Oscuridad total", "Mucha agua, hasta que se encharque"], c: 0, s: [3, 1], ex: "Se humedece el algodón y se pone el vaso donde llegue luz; el texto advierte que el exceso de agua pudre las semillas." }
      ],
      contexto: [
        { w: "humedécelo", s: [2, 0], op: ["Mójalo un poco", "Sécalo al sol", "Córtalo en pedazos"], c: 0, ex: "Se hace «con agua» y «sin que quede encharcado»: es mojarlo solo un poco." },
        { w: "pudrirse", s: [4, 0], op: ["Dañarse y descomponerse", "Crecer más rápido", "Volverse más dulces"], c: 0, ex: "Es una advertencia («Atención»): algo malo que pasa si hay demasiada agua." }
      ],
      dondelopone: [
        { a: "Demasiada agua puede dañar las semillas.", s: [4, 0] },
        { a: "El tallo crece hacia donde hay claridad.", s: [3, 1] },
        { a: "El vaso no debe quedar todo el día bajo el sol fuerte.", s: [2, 2] }
      ],
      orden: ["Llenar el vaso con algodón húmedo.", "Colocar los fríjoles contra la pared del vaso.", "Poner el vaso cerca de una ventana.", "Revisar el algodón y agregar agua si está seco.", "Ver salir la raíz blanca.", "Ver aparecer el tallo con hojas verdes."],
      causas: [
        { causa: "el algodón queda empapado", efecto: "las semillas pueden pudrirse" },
        { causa: "el algodón está seco", efecto: "hay que agregar unas gotas de agua" },
        { causa: "los fríjoles están contra la pared del vaso", efecto: "se puede ver cómo crecen" }
      ],
      argumenta: [
        { p: "¿Por qué crees que es mejor hacer el experimento y dibujarlo que solo leer cómo crece una planta?", criterios: ["Da una opinión clara", "Menciona la observación o el registro con fecha", "Usa un ejemplo de lo que se aprende al observar"] },
        { p: "Si quisieras saber si el fríjol necesita luz, ¿qué harías con dos vasos? Explica tu idea.", criterios: ["Propone comparar un vaso con luz y otro sin luz", "Mantiene igual lo demás (agua, algodón)", "Dice qué observaría para decidir"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LC03-4",
      titulo: "El samán de mi parque",
      tipo: "poema",
      dba: "DBA Lenguaje 3.°, n.º 6: interpreta el contenido y la estructura del texto, respondiendo preguntas de orden inferencial y crítico",
      parrafos: [
        ["En el parque de mi barrio", "vive un samán gigante;", "sus ramas son un paraguas", "verde, fresco y elegante."],
        ["Al mediodía, los perros", "se duermen bajo su sombra,", "y las hojas que se caen", "le tejen una alfombra."],
        ["En sus ramas cantan pájaros,", "azulejos y torcazas,", "que construyen allá arriba", "sus pequeñas casas."],
        ["Los niños, a la salida,", "juegan a la lleva en su suelo;", "él los mira, silencioso,", "con la copa tocando el cielo."],
        ["Cuando el cielo se nubla", "o cuando llega la noche,", "el samán dobla sus hojas", "como quien cierra un broche."],
        ["Si le pones el oído", "a su corteza arrugada,", "escucharás el murmullo", "de la brisa en la enramada."],
        ["Abuelo de tantos años,", "guardián de nuestro lugar,", "prometo cuidar tu tronco", "para que puedas durar."]
      ],
      literal: [
        { p: "¿A qué se parecen las ramas del samán?", r: "sus ramas son un paraguas", s: [0, 2] },
        { p: "¿Qué hacen los perros al mediodía?", r: "se duermen bajo su sombra", s: [1, 1] },
        { p: "¿Qué pájaros cantan en sus ramas?", r: "azulejos y torcazas", s: [2, 1] },
        { p: "¿Qué hace el samán cuando el cielo se nubla?", r: "el samán dobla sus hojas", s: [4, 2] }
      ],
      entrelineas: [
        { p: "¿Por qué el poema llama «abuelo» al samán?", op: ["Porque es un árbol muy viejo y querido", "Porque tiene barba blanca", "Porque es el papá del poeta"], c: 0, s: [6, 0], ex: "Dice «abuelo de tantos años»: lo llama así por su edad y por el cariño que le tiene." },
        { p: "¿Qué siente la voz del poema por el samán?", op: ["Cariño y admiración", "Miedo", "Aburrimiento"], c: 0, s: [6, 2], ex: "Lo describe como elegante y guardián, y promete cuidarlo: eso muestra cariño, no miedo." },
        { p: "¿Qué significa «las hojas que se caen le tejen una alfombra»?", op: ["Que las hojas caídas cubren el suelo como una alfombra", "Que alguien cose una alfombra con hilo", "Que los perros hacen una alfombra"], c: 0, s: [1, 3], ex: "Es una comparación: nadie teje de verdad; las hojas cubren el suelo como lo haría una alfombra." }
      ],
      contexto: [
        { w: "copa", s: [3, 3], op: ["La parte de arriba del árbol, con ramas y hojas", "Un vaso para tomar", "Un trofeo de fútbol"], c: 0, ex: "Habla del árbol «tocando el cielo»: la copa es su parte más alta." },
        { w: "corteza", s: [5, 1], op: ["La capa de afuera del tronco", "Una hoja seca", "La raíz del árbol"], c: 0, ex: "Es «arrugada» y se le puede poner el oído encima: es la piel del tronco." }
      ],
      dondelopone: [
        { a: "Los animales usan el árbol como hogar.", s: [2, 2] },
        { a: "El samán es muy alto.", s: [3, 3] },
        { a: "La voz del poema se compromete a proteger el árbol.", s: [6, 2] }
      ],
      orden: ["Las ramas del samán son como un paraguas.", "Los perros duermen bajo su sombra.", "Los pájaros hacen sus casas en las ramas.", "Los niños juegan bajo el árbol.", "El samán dobla sus hojas al llegar la noche.", "La voz del poema promete cuidar el árbol."],
      causas: [
        { causa: "el samán tiene ramas grandes como un paraguas", efecto: "da sombra en el parque" },
        { causa: "el cielo se nubla o llega la noche", efecto: "el samán dobla sus hojas" }
      ],
      argumenta: [
        { p: "¿Por qué los árboles grandes son importantes para un barrio? Usa versos del poema.", criterios: ["Da al menos dos razones", "Cita o menciona versos del poema", "Relaciona con su propio barrio"] },
        { p: "Si quisieran cortar el samán para hacer un parqueadero, ¿qué dirías? Escribe tu opinión.", criterios: ["Toma una posición clara", "Da razones con información del poema", "Propone una alternativa"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LC03-5",
      titulo: "Niños de tercero recuperan la huerta escolar",
      tipo: "noticia",
      dba: "DBA Lenguaje 3.°, n.º 1: comprende las funciones que cumplen los medios de comunicación propios de su contexto",
      parrafos: [
        ["Cali, 15 de marzo.", "Los estudiantes de tercer grado del colegio Nuevo Horizonte recuperaron la huerta escolar que había quedado abandonada durante las vacaciones."],
        ["Cuando volvieron a clases, los niños encontraron las matas secas y el terreno lleno de maleza y botellas plásticas.", "Entonces, con la ayuda de la profesora Marleny Castillo, organizaron grupos de trabajo."],
        ["Un grupo arrancó la maleza, otro recogió la basura y otro preparó abono con cáscaras de frutas del restaurante escolar.", "En dos semanas sembraron cilantro, tomate, cebolla larga y plantas aromáticas."],
        ["«Lo más difícil fue cargar el agua, porque la manguera no alcanzaba», contó Samuel, de ocho años.", "Para resolverlo, los padres de familia donaron una manguera más larga."],
        ["La huerta ya dio su primera cosecha de cilantro, que se usó en el almuerzo del colegio.", "Ahora los estudiantes quieren vender aromáticas en la feria escolar para comprar más semillas."]
      ],
      literal: [
        { p: "¿Qué recuperaron los estudiantes?", r: "la huerta escolar", s: [0, 1] },
        { p: "¿Con qué prepararon el abono?", r: "cáscaras de frutas del restaurante escolar", s: [2, 0] },
        { p: "¿Qué sembraron?", r: "cilantro, tomate, cebolla larga y plantas aromáticas", s: [2, 1] },
        { p: "¿Qué donaron los padres de familia?", r: "una manguera más larga", s: [3, 1] }
      ],
      entrelineas: [
        { p: "¿Por qué la huerta estaba abandonada?", op: ["Porque nadie la cuidó durante las vacaciones", "Porque la profesora la cerró", "Porque llovió demasiado"], c: 0, s: [0, 1], ex: "Quedó abandonada «durante las vacaciones» y las matas estaban secas; si hubiera llovido mucho, no estarían secas." },
        { p: "¿Qué valor mostraron los niños?", op: ["Trabajo en equipo", "Pereza", "Egoísmo"], c: 0, s: [2, 0], ex: "Se repartieron las tareas en grupos y cada uno hizo una parte." },
        { p: "¿Para qué sirve la línea «Cali, 15 de marzo»?", op: ["Dice dónde y cuándo se escribió la noticia", "Dice quién escribió la noticia", "Cuenta el final de la historia"], c: 0, s: [0, 0], ex: "Las noticias empiezan diciendo el lugar y la fecha; no dice el nombre de quien la escribió." }
      ],
      contexto: [
        { w: "maleza", s: [1, 0], op: ["Hierbas que crecen solas y estorban a lo sembrado", "Herramientas de jardín", "Flores de colores"], c: 0, ex: "Llenaba el terreno abandonado y después un grupo la «arrancó»: son hierbas que no se sembraron." },
        { w: "cosecha", s: [4, 0], op: ["Lo que se recoge de lo que se sembró", "El momento de regar", "Una semilla pequeña"], c: 0, ex: "El cilantro sembrado ya se recogió y se usó en el almuerzo." }
      ],
      dondelopone: [
        { a: "Las familias ayudaron al proyecto.", s: [3, 1] },
        { a: "Lo que cultivaron ya se comió en el colegio.", s: [4, 0] },
        { a: "Usaron restos de comida para alimentar la tierra.", s: [2, 0] }
      ],
      orden: ["La huerta quedó abandonada en vacaciones.", "Los niños encontraron las matas secas.", "Organizaron grupos de trabajo.", "Sembraron cilantro, tomate y otras plantas.", "Los padres donaron una manguera.", "La huerta dio su primera cosecha."],
      causas: [
        { causa: "la manguera no alcanzaba", efecto: "fue difícil cargar el agua" },
        { causa: "los padres donaron una manguera más larga", efecto: "se resolvió el problema del agua" },
        { causa: "quieren comprar más semillas", efecto: "planean vender aromáticas en la feria" }
      ],
      argumenta: [
        { p: "¿Debería cada colegio tener una huerta? Da dos razones.", criterios: ["Toma una posición clara", "Da dos razones", "Usa información de la noticia"] },
        { p: "¿Te parece buena idea vender aromáticas para comprar semillas? ¿Qué otra idea propondrías?", criterios: ["Valora la idea", "Explica por qué", "Propone una alternativa posible"] }
      ],
      autor: "Texto original SABI CENTEC (noticia ficticia con fines didácticos)"
    },
    {
      id: "LC03-6",
      titulo: "Una biblioteca en el recreo",
      tipo: "carta",
      dba: "DBA Lenguaje 3.°, n.º 5: identifica el papel del emisor y el receptor y sus propósitos comunicativos en una situación específica",
      parrafos: [
        ["Querido señor rector:"],
        ["Somos los estudiantes de tercero y le escribimos para pedirle algo importante: queremos una biblioteca en el patio durante el recreo."],
        ["Tenemos tres razones.", "Primero, muchos niños no tienen libros en su casa, y en el recreo podrían leer cuentos sin pagar nada.", "Segundo, algunos compañeros no juegan fútbol y se quedan solos; con los libros tendrían un lugar tranquilo para compartir.", "Tercero, cuando leemos más, aprendemos palabras nuevas y escribimos mejor."],
        ["Sabemos que los libros se pueden dañar con la lluvia o perder.", "Por eso proponemos guardarlos en un baúl con candado y nombrar cada semana a dos monitores que los cuiden."],
        ["Nosotros mismos podemos traer libros que ya leímos para regalarlos.", "Esperamos su respuesta y le agradecemos por escucharnos."],
        ["Con cariño,", "Los estudiantes de tercero B"]
      ],
      literal: [
        { p: "¿Qué piden los estudiantes?", r: "una biblioteca en el patio durante el recreo", s: [1, 0] },
        { p: "¿Cuántas razones dan?", r: "Tenemos tres razones", s: [2, 0] },
        { p: "¿Dónde guardarían los libros?", r: "en un baúl con candado", s: [3, 1] },
        { p: "¿Quiénes firman la carta?", r: "Los estudiantes de tercero B", s: [5, 1] }
      ],
      entrelineas: [
        { p: "¿Para qué escribieron esta carta?", op: ["Para convencer al rector de aprobar su idea", "Para contarle un cuento", "Para quejarse de un compañero"], c: 0, s: [1, 0], ex: "Hacen una petición y dan razones para que el rector diga que sí: es una carta para convencer." },
        { p: "¿Por qué los niños hablan de que los libros se pueden dañar?", op: ["Porque piensan que el rector podría preocuparse por eso y le dan una solución", "Porque no quieren que haya libros", "Porque ya se dañaron todos los libros"], c: 0, s: [3, 0], ex: "Enseguida proponen el baúl y los monitores: se adelantan a la preocupación del rector y la resuelven." },
        { p: "¿Qué muestra que los niños están dispuestos a ayudar?", op: ["Ofrecen traer libros y ser monitores", "Piden que el rector compre todo", "Quieren salir más temprano"], c: 0, s: [4, 0], ex: "Ellos mismos regalarían libros y cuidarían la biblioteca; no le piden al rector que lo haga todo." }
      ],
      contexto: [
        { w: "monitores", s: [3, 1], op: ["Estudiantes encargados de cuidar algo", "Pantallas de computador", "Profesores nuevos"], c: 0, ex: "Son personas («dos monitores que los cuiden») que se nombran cada semana entre los estudiantes." },
        { w: "proponemos", s: [3, 1], op: ["Damos una idea para que la tengan en cuenta", "Prohibimos algo", "Olvidamos algo"], c: 0, ex: "Después de la palabra viene una idea para solucionar el problema de los libros." }
      ],
      dondelopone: [
        { a: "Leer ayuda a mejorar la escritura.", s: [2, 3] },
        { a: "Leer en el recreo no les costaría dinero a los niños.", s: [2, 1] },
        { a: "Los niños regalarían libros que ya conocen.", s: [4, 0] }
      ],
      orden: ["Saludo al rector.", "Petición de la biblioteca en el recreo.", "Las tres razones.", "Un posible problema y su solución.", "El ofrecimiento de traer libros.", "Despedida y firma."],
      causas: [
        { causa: "muchos niños no tienen libros en su casa", efecto: "en el recreo podrían leer sin pagar" },
        { causa: "los libros se pueden dañar con la lluvia o perder", efecto: "proponen guardarlos en un baúl con candado" },
        { causa: "leemos más", efecto: "aprendemos palabras nuevas y escribimos mejor" }
      ],
      argumenta: [
        { p: "¿Cuál de las tres razones te parece más convincente? ¿Por qué?", criterios: ["Elige una razón de la carta", "Explica por qué convence", "Usa un ejemplo propio"] },
        { p: "Si fueras el rector, ¿qué responderías a la carta? Escribe tu respuesta con una razón.", criterios: ["Toma una decisión clara", "Da al menos una razón", "Responde a algo que dicen los niños"] },
        { p: "Escribe una cuarta razón para tener una biblioteca en el recreo.", criterios: ["La razón es nueva (no repite las de la carta)", "Es coherente con la petición", "Está bien redactada"] }
      ],
      autor: "Texto original SABI CENTEC"
    }
  ];
})(window.SABI_TALLER = window.SABI_TALLER || {});
