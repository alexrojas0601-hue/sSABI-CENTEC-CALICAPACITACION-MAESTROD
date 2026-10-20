/* SABI Taller · Lectura · Grado TR (Transición, 5 años) · Textos originales SABI CENTEC
   Textos para que el docente los lea en voz alta. Preguntas orales. */
(function (T) {
  T.lectura = T.lectura || {};
  T.lectura["tr"] = [
    {
      id: "LCTR-1",
      titulo: "El paraguas amarillo",
      tipo: "narrativo",
      dba: "DBA de Transición (MEN 2016, sin número verificado), dimensión comunicativa: establece relaciones e interpreta imágenes, letras, objetos y personajes que encuentra en distintos tipos de textos",
      parrafos: [
        ["Sofía tiene un paraguas amarillo.", "Su abuela se lo regaló."],
        ["Un día llovió mucho en el parque.", "Sofía vio un gatito mojado debajo de un banco.", "El gatito temblaba de frío."],
        ["Sofía abrió su paraguas y tapó al gatito.", "Ella se mojó un poquito, pero sonrió."],
        ["Cuando salió el sol, el gatito ronroneó.", "Desde ese día, el gatito camina con Sofía y su paraguas amarillo."]
      ],
      literal: [
        { p: "¿De qué color es el paraguas de Sofía?", r: "amarillo", s: [0, 0] },
        { p: "¿Quién le regaló el paraguas a Sofía?", r: "Su abuela", s: [0, 1] },
        { p: "¿Dónde estaba el gatito?", r: "debajo de un banco", s: [1, 1] },
        { p: "¿Qué hizo el gatito cuando salió el sol?", r: "ronroneó", s: [3, 0] }
      ],
      entrelineas: [
        { p: "¿Cómo es Sofía?", op: ["Peleona: no le gustan los gatos", "Generosa: cuida a los demás", "Perezosa: no quiere salir"], c: 1, s: [2, 0], ex: "Sofía usa su propio paraguas para tapar al gatito, aunque ella se moje. Eso es ser generosa." },
        { p: "¿Por qué ronroneó el gatito?", op: ["Porque estaba contento y ya no tenía frío", "Porque quería ir al agua", "Porque estaba bravo con Sofía"], c: 0, s: [3, 0], ex: "Los gatos ronronean cuando están tranquilos. Ya salió el sol y Sofía lo cuidó: ya no tiembla de frío." }
      ],
      contexto: [
        { w: "temblaba", s: [1, 2], op: ["Saltaba de alegría", "Se movía solito porque tenía frío", "Dormía tranquilo"], c: 1, ex: "La oración dice «temblaba de frío»: el cuerpo se mueve solito cuando tenemos mucho frío." },
        { w: "mojado", s: [1, 1], op: ["Lleno de agua por la lluvia", "Muy limpio y seco", "Muy grande"], c: 0, ex: "Estaba lloviendo mucho, por eso el gatito tenía agua encima." }
      ],
      dondelopone: [
        { a: "La abuela le dio el paraguas a Sofía.", s: [0, 1] },
        { a: "Sofía protegió al gatito de la lluvia.", s: [2, 0] }
      ],
      orden: ["Llovió mucho en el parque.", "Sofía vio un gatito mojado.", "Sofía tapó al gatito con su paraguas.", "Salió el sol y el gatito ronroneó."],
      causas: [
        { causa: "Llovió mucho en el parque", efecto: "el gatito quedó mojado y temblaba de frío" },
        { causa: "Sofía tapó al gatito con su paraguas", efecto: "ella se mojó un poquito" }
      ],
      argumenta: [
        { p: "¿Qué harías tú si ves un animalito con frío? ¿Por qué?", criterios: ["Dice una acción concreta (taparlo, avisar a un adulto…)", "Da una razón (para que no sufra, porque necesita ayuda)", "Relaciona con lo que hizo Sofía"] },
        { p: "Sofía se mojó un poquito por ayudar. ¿Hizo bien? ¿Por qué?", criterios: ["Dice sí o no con claridad", "Da una razón tomada del cuento", "Respeta la opinión de los compañeros"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LCTR-2",
      titulo: "La cometa de Simón",
      tipo: "narrativo",
      dba: "DBA de Transición (MEN 2016, sin número verificado), establece relaciones entre las causas y consecuencias de los acontecimientos que le suceden a él o a su alrededor",
      parrafos: [
        ["En agosto hace mucho viento en Cali.", "Simón y su papá hicieron una cometa roja."],
        ["La cometa subió alto, alto, hasta las nubes.", "De pronto, el viento la llevó a un árbol."],
        ["Simón se puso triste y quiso llorar.", "Su papá le dijo: «Pidamos ayuda»."],
        ["Un vecino trajo una escalera larga.", "Bajaron la cometa con cuidado.", "Simón le dio las gracias con un abrazo."]
      ],
      literal: [
        { p: "¿En qué mes hace mucho viento en Cali?", r: "En agosto", s: [0, 0] },
        { p: "¿De qué color era la cometa?", r: "roja", s: [0, 1] },
        { p: "¿A dónde llevó el viento la cometa?", r: "a un árbol", s: [1, 1] },
        { p: "¿Qué trajo el vecino?", r: "una escalera larga", s: [3, 0] }
      ],
      entrelineas: [
        { p: "¿Por qué Simón quiso llorar?", op: ["Porque su papá lo regañó", "Porque no le gusta el viento", "Porque su cometa quedó atrapada en el árbol"], c: 2, s: [2, 0], ex: "Justo antes, el viento llevó la cometa a un árbol. Simón pensó que la había perdido." },
        { p: "¿Cómo se sintió Simón al final?", op: ["Agradecido y feliz", "Bravo con el vecino", "Asustado"], c: 0, s: [3, 2], ex: "Simón da las gracias con un abrazo: así mostramos que estamos agradecidos y contentos." }
      ],
      contexto: [
        { w: "cuidado", s: [3, 1], op: ["Muy rápido y a la fuerza", "Despacio, para no dañarla", "Con los ojos cerrados"], c: 1, ex: "Querían recuperar la cometa sana, por eso la bajaron despacio, sin romperla." },
        { w: "escalera", s: [3, 0], op: ["Un juguete que vuela", "Una caja de herramientas", "Un objeto con escalones para subir"], c: 2, ex: "La cometa estaba arriba en el árbol; para alcanzarla había que subir." }
      ],
      dondelopone: [
        { a: "Simón y su papá fabricaron la cometa.", s: [0, 1] },
        { a: "El papá propuso buscar a alguien que les ayudara.", s: [2, 1] }
      ],
      orden: ["Simón y su papá hicieron una cometa.", "La cometa subió hasta las nubes.", "El viento llevó la cometa a un árbol.", "Un vecino trajo una escalera.", "Simón le dio un abrazo al vecino."],
      causas: [
        { causa: "El viento sopló muy fuerte", efecto: "la cometa quedó en el árbol" },
        { causa: "El vecino trajo una escalera", efecto: "pudieron bajar la cometa" }
      ],
      argumenta: [
        { p: "¿Qué harías tú si tu juguete queda en un lugar muy alto? ¿Por qué?", criterios: ["Propone una solución segura (pedir ayuda a un adulto)", "Explica por qué no debe subirse solo", "Se apoya en lo que pasó en el cuento"] },
        { p: "¿Es bueno pedir ayuda cuando tenemos un problema? ¿Por qué?", criterios: ["Da una opinión clara", "Da una razón", "Cuenta un ejemplo de su vida"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LCTR-3",
      titulo: "El colibrí y la tortuga",
      tipo: "fabula",
      dba: "DBA de Transición (MEN 2016, sin número verificado), demuestra consideración y respeto al relacionarse con otros; interpreta personajes en distintos tipos de textos",
      parrafos: [
        ["En un jardín vivían un colibrí muy rápido y una tortuga muy lenta.", "El colibrí se reía de la tortuga."],
        ["Un día, el colibrí se enredó en una telaraña.", "«¡Ayuda!», gritó asustado."],
        ["La tortuga llegó despacio, pero llegó.", "Con su boca rompió los hilos de la telaraña."],
        ["El colibrí le dijo: «Perdón por reírme de ti».", "Desde entonces son buenos amigos."],
        ["Todos somos diferentes y todos podemos ayudar."]
      ],
      literal: [
        { p: "¿Cómo era el colibrí?", r: "muy rápido", s: [0, 0] },
        { p: "¿En qué se enredó el colibrí?", r: "en una telaraña", s: [1, 0] },
        { p: "¿Con qué rompió la tortuga los hilos?", r: "Con su boca", s: [2, 1] },
        { p: "¿Qué le dijo el colibrí a la tortuga?", r: "Perdón por reírme de ti", s: [3, 0] }
      ],
      entrelineas: [
        { p: "¿Por qué el colibrí pidió perdón?", op: ["Porque la tortuga lo obligó", "Porque entendió que se burlaba de quien luego lo ayudó", "Porque quería volar más rápido"], c: 1, s: [3, 0], ex: "Antes se reía de la tortuga; después ella lo salvó. Entonces el colibrí se dio cuenta de que se había portado mal." },
        { p: "¿Qué nos enseña esta fábula?", op: ["Que todos podemos ayudar, aunque seamos diferentes", "Que ser rápido es lo único importante", "Que no hay que salir al jardín"], c: 0, s: [4, 0], ex: "La última oración dice la enseñanza: la tortuga lenta fue la que ayudó." }
      ],
      contexto: [
        { w: "enredó", s: [1, 0], op: ["Voló muy alto", "Comió flores", "Quedó atrapado entre hilos"], c: 2, ex: "Una telaraña está hecha de hilos que se pegan; el colibrí no podía salir." },
        { w: "despacio", s: [2, 0], op: ["Lentamente, sin correr", "Volando", "Muy rápido"], c: 0, ex: "La tortuga es lenta: llega despacio, pero llega." }
      ],
      dondelopone: [
        { a: "El colibrí se burlaba de la tortuga.", s: [0, 1] },
        { a: "La tortuga soltó al colibrí de la telaraña.", s: [2, 1] }
      ],
      orden: ["El colibrí se reía de la tortuga.", "El colibrí se enredó en una telaraña.", "La tortuga rompió los hilos.", "El colibrí pidió perdón y se hicieron amigos."],
      causas: [
        { causa: "El colibrí se enredó en la telaraña", efecto: "gritó «¡Ayuda!» asustado" },
        { causa: "La tortuga ayudó al colibrí", efecto: "el colibrí le pidió perdón" }
      ],
      argumenta: [
        { p: "¿Qué harías tú si alguien que se burló de ti necesita ayuda? ¿Por qué?", criterios: ["Dice qué haría", "Explica su razón", "Lo relaciona con lo que hizo la tortuga"] },
        { p: "¿Está bien reírse de alguien porque es diferente? ¿Por qué?", criterios: ["Toma una posición", "Da una razón sobre el respeto", "Usa un ejemplo del cuento"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LCTR-4",
      titulo: "La iguana del parque",
      tipo: "informativo",
      dba: "DBA de Transición (MEN 2016, sin número verificado), dimensión comunicativa: establece relaciones e interpreta imágenes, letras, objetos y personajes que encuentra en distintos tipos de textos",
      parrafos: [
        ["La iguana es un reptil de color verde.", "En Cali vive en los árboles de los parques."],
        ["La iguana tiene una cola muy larga.", "Le gusta tomar el sol en las ramas."],
        ["Come hojas, flores y frutas.", "No come carne."],
        ["Si la ves, mírala desde lejos.", "No la molestes ni la persigas."]
      ],
      literal: [
        { p: "¿De qué color es la iguana?", r: "verde", s: [0, 0] },
        { p: "¿Dónde vive la iguana en Cali?", r: "en los árboles de los parques", s: [0, 1] },
        { p: "¿Cómo es la cola de la iguana?", r: "muy larga", s: [1, 0] },
        { p: "¿Qué come la iguana?", r: "hojas, flores y frutas", s: [2, 0] }
      ],
      entrelineas: [
        { p: "¿Una iguana se comería un pescado?", op: ["Sí, porque vive cerca del agua", "No, porque no come carne", "Sí, porque tiene la cola larga"], c: 1, s: [2, 1], ex: "El texto dice que la iguana no come carne; el pescado es carne de animal." },
        { p: "¿Para qué sirve este texto?", op: ["Para contar un cuento de hadas", "Para darnos una receta", "Para enseñarnos cómo es la iguana"], c: 2, s: [0, 0], ex: "No tiene personajes ni receta: da datos reales de la iguana (color, comida, dónde vive)." }
      ],
      contexto: [
        { w: "ramas", s: [1, 1], op: ["Partes del árbol donde salen las hojas", "Piedras del río", "Charcos de agua"], c: 0, ex: "La iguana vive en los árboles; por eso toma el sol en sus ramas." },
        { w: "persigas", s: [3, 1], op: ["La alimentes", "Corras detrás de ella", "La dibujes"], c: 1, ex: "Va junto a «no la molestes»: perseguir es correr detrás de alguien para atraparlo." }
      ],
      dondelopone: [
        { a: "La iguana nunca se come a otros animales.", s: [2, 1] },
        { a: "A la iguana le gusta el calor del sol.", s: [1, 1] }
      ],
      orden: ["Cómo es la iguana y dónde vive.", "Cómo es su cola y qué le gusta.", "Qué come.", "Cómo debemos tratarla."],
      causas: [
        { causa: "A la iguana le gusta tomar el sol", efecto: "se sube a las ramas de los árboles" },
        { causa: "Si la perseguimos o la molestamos", efecto: "la asustamos (por eso hay que mirarla desde lejos)" }
      ],
      argumenta: [
        { p: "¿Qué harías tú si ves una iguana en el parque? ¿Por qué?", criterios: ["Dice una acción respetuosa", "Usa un consejo del texto", "Explica por qué"] },
        { p: "¿Es mejor que la iguana viva en el parque o en una casa? ¿Por qué?", criterios: ["Elige una opción", "Da una razón sobre lo que necesita la iguana", "Escucha otras opiniones"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LCTR-5",
      titulo: "Lulada para compartir",
      tipo: "instructivo",
      dba: "DBA de Transición (MEN 2016, sin número verificado), reconoce que es parte de una familia, comunidad y territorio con costumbres y tradiciones; hábitos de cuidado personal",
      parrafos: [
        ["Hoy vamos a preparar una lulada, una bebida del Valle del Cauca."],
        ["Necesitas: cuatro lulos, agua, azúcar y hielo."],
        ["Primero, lávate las manos.", "Segundo, un adulto parte los lulos por la mitad.", "Tercero, saca la pulpa con una cuchara.", "Cuarto, aplasta la pulpa en una jarra.", "Quinto, agrega agua, azúcar y hielo.", "Al final, revuelve y sirve en vasos."],
        ["¡Comparte tu lulada con tu familia!"]
      ],
      literal: [
        { p: "¿Cuántos lulos necesitas?", r: "cuatro lulos", s: [1, 0] },
        { p: "¿Qué haces primero?", r: "lávate las manos", s: [2, 0] },
        { p: "¿Quién parte los lulos?", r: "un adulto", s: [2, 1] },
        { p: "¿Con qué sacas la pulpa?", r: "con una cuchara", s: [2, 2] }
      ],
      entrelineas: [
        { p: "¿Por qué los lulos los parte un adulto?", op: ["Porque se usa un cuchillo y nos podemos cortar", "Porque los niños no comen lulo", "Porque el lulo pesa mucho"], c: 0, s: [2, 1], ex: "Para partir un lulo se necesita un cuchillo; por seguridad lo hace un adulto." },
        { p: "¿Qué clase de texto es este?", op: ["Un cuento con personajes", "Una receta que enseña a preparar algo", "Una carta para un amigo"], c: 1, s: [0, 0], ex: "Dice qué se necesita y da pasos en orden (primero, segundo…) para preparar una bebida." }
      ],
      contexto: [
        { w: "pulpa", s: [2, 2], op: ["La cáscara de afuera", "La parte de adentro del lulo que se come", "La hoja de la mata"], c: 1, ex: "Se saca con cuchara después de partir el lulo: es lo de adentro." },
        { w: "revuelve", s: [2, 5], op: ["Mueve con la cuchara para mezclar", "Bota la bebida", "Pon la jarra en la nevera"], c: 0, ex: "Ya pusimos pulpa, agua, azúcar y hielo; hay que mezclarlo todo antes de servir." }
      ],
      dondelopone: [
        { a: "La lulada es una bebida de nuestra región.", s: [0, 0] },
        { a: "Antes de servir hay que mezclar.", s: [2, 5] }
      ],
      orden: ["Lavarse las manos.", "Un adulto parte los lulos.", "Sacar la pulpa con una cuchara.", "Aplastar la pulpa en una jarra.", "Agregar agua, azúcar y hielo.", "Revolver y servir."],
      causas: [
        { causa: "Nos lavamos las manos", efecto: "la bebida queda limpia, sin mugre" },
        { causa: "Agregamos hielo", efecto: "la lulada queda fría" }
      ],
      argumenta: [
        { p: "¿Con quién compartirías tu lulada? ¿Por qué?", criterios: ["Nombra a una persona", "Da una razón (cariño, agradecimiento…)", "Relaciona con la última oración del texto"] },
        { p: "¿Qué harías tú si se te olvida lavarte las manos antes de cocinar? ¿Por qué es importante?", criterios: ["Propone lavarse antes de seguir", "Explica la razón de higiene", "Usa el primer paso de la receta"] }
      ],
      autor: "Texto original SABI CENTEC"
    },
    {
      id: "LCTR-6",
      titulo: "La Madremonte cuida el bosque",
      tipo: "leyenda",
      dba: "DBA de Transición (MEN 2016, sin número verificado), reconoce que es parte de una comunidad y un territorio con costumbres, valores y tradiciones; relaciona causas y consecuencias",
      parrafos: [
        ["Dicen los abuelos que en las montañas del Valle vive la Madremonte.", "Ella tiene un vestido de hojas y musgo."],
        ["La Madremonte cuida los árboles, los ríos y los animales.", "Cuando alguien tira basura en el bosque, ella sopla un viento fuerte."],
        ["Pero a los niños que cuidan las plantas, les regala el canto de los pájaros."],
        ["Por eso, cuando vayas al bosque, recoge tu basura y camina en silencio."]
      ],
      literal: [
        { p: "¿Dónde vive la Madremonte?", r: "en las montañas del Valle", s: [0, 0] },
        { p: "¿De qué es el vestido de la Madremonte?", r: "de hojas y musgo", s: [0, 1] },
        { p: "¿Qué cuida la Madremonte?", r: "los árboles, los ríos y los animales", s: [1, 0] },
        { p: "¿Qué les regala a los niños que cuidan las plantas?", r: "el canto de los pájaros", s: [2, 0] }
      ],
      entrelineas: [
        { p: "¿Por qué la Madremonte sopla un viento fuerte?", op: ["Porque tiene frío", "Porque se pone brava cuando ensucian el bosque", "Porque quiere jugar con las hojas"], c: 1, s: [1, 1], ex: "Sopla el viento justo cuando alguien tira basura: así muestra que no le gusta." },
        { p: "¿Quiénes cuentan esta historia?", op: ["Un periódico", "Un libro de ciencias", "Los abuelos, de boca en boca"], c: 2, s: [0, 0], ex: "Empieza con «Dicen los abuelos…»: las leyendas se cuentan de padres a hijos." }
      ],
      contexto: [
        { w: "musgo", s: [0, 1], op: ["Plantita verde y suave que crece en troncos y piedras", "Tela brillante de fiesta", "Arena del mar"], c: 0, ex: "Su vestido es de cosas del bosque, como las hojas; el musgo también es del bosque." },
        { w: "silencio", s: [3, 0], op: ["Gritando", "Sin hacer ruido", "Cantando muy duro"], c: 1, ex: "Para escuchar los pájaros y no asustar a los animales hay que caminar sin ruido." }
      ],
      dondelopone: [
        { a: "La Madremonte protege la naturaleza.", s: [1, 0] },
        { a: "Hay que llevarse la basura cuando salimos del bosque.", s: [3, 0] }
      ],
      orden: ["Los abuelos cuentan que la Madremonte vive en las montañas.", "La Madremonte cuida árboles, ríos y animales.", "Si alguien tira basura, sopla un viento fuerte.", "A los niños que cuidan las plantas les regala el canto de los pájaros."],
      causas: [
        { causa: "Alguien tira basura en el bosque", efecto: "la Madremonte sopla un viento fuerte" },
        { causa: "Los niños cuidan las plantas", efecto: "reciben el canto de los pájaros" }
      ],
      argumenta: [
        { p: "¿Qué harías tú para cuidar el bosque? ¿Por qué?", criterios: ["Dice una acción concreta", "Explica para qué sirve", "Usa un consejo de la leyenda"] },
        { p: "Si la Madremonte visitara tu colegio, ¿estaría contenta? ¿Por qué?", criterios: ["Responde sí o no", "Da una razón con algo que ve en su colegio", "Propone algo para mejorar"] }
      ],
      autor: "Texto original SABI CENTEC (recreación de la leyenda de tradición oral colombiana)"
    }
  ];
})(window.SABI_TALLER = window.SABI_TALLER || {});
