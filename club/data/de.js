window.SABI_CLUB = window.SABI_CLUB || {};
window.SABI_CLUB.de = {
  escenarios: [
    {
      id: "de-01", titulo: "Primer día en una escuela alemana", nivel: "A1",
      tema: "Saludo y presentación docente",
      contexto: "Llegas a una escuela de Friburgo para un intercambio docente. La directora te recibe y quiere conocerte.",
      rol: "Frau Keller, directora de la escuela, amable, puntual y muy ordenada",
      turnos: [
        { bot: "Guten Morgen! Herzlich willkommen an der Lessing-Schule. Ich bin Frau Keller, die Schulleiterin. Wie heißen Sie?", es: "¡Buenos días! Bienvenido(a) a la Escuela Lessing. Soy la señora Keller, la directora. ¿Cómo se llama usted?",
          opciones: [
            { t: "Guten Morgen, Frau Keller! Ich heiße Carlos Gómez.", es: "¡Buenos días, señora Keller! Me llamo Carlos Gómez.", ok: true },
            { t: "Guten Morgen! Mein Name ist Carlos Gómez. Freut mich sehr, Sie kennenzulernen.", es: "¡Buenos días! Mi nombre es Carlos Gómez. Mucho gusto en conocerla.", ok: true },
            { t: "Guten Morgen! Ich heiße Carlos. Freut mich, dich kennenzulernen.", es: "¡Buenos días! Me llamo Carlos. Mucho gusto en conocerte.", ok: false,
              fix: "Con la directora se usa «Sie» (usted): «Freut mich, Sie kennenzulernen». «Dich» es tuteo, para amigos y niños." }
          ],
          clave: ["Sie kennenzulernen", "Frau Keller"],
          tip: "«Sie» (usted) se escribe siempre con mayúscula; «sie» en minúscula significa «ella» o «ellos»." },
        { bot: "Freut mich auch! Woher kommen Sie?", es: "¡El gusto es mío! ¿De dónde es usted?",
          opciones: [
            { t: "Ich komme aus Kolumbien, aus Cali.", es: "Soy de Colombia, de Cali.", ok: true },
            { t: "Ich komme aus Cali in Kolumbien. Das ist eine Stadt im Südwesten.", es: "Soy de Cali, en Colombia. Es una ciudad del suroccidente.", ok: true },
            { t: "Ich bin von Kolumbien.", es: "Soy de Colombia.", ok: false,
              fix: "Para el origen se usa «kommen aus»: «Ich komme aus Kolumbien». «Von» no se usa así." }
          ],
          clave: ["komme", "aus", "Kolumbien"],
          tip: "La «ch» de «ich» es un sonido suave, como un gato que bufa: no es «ij» ni «ik»." },
        { bot: "Schön! Und was unterrichten Sie?", es: "¡Qué bien! ¿Y qué enseña usted?",
          opciones: [
            { t: "Ich unterrichte Mathematik.", es: "Enseño Matemáticas.", ok: true },
            { t: "Ich bin Mathematiklehrer und unterrichte die sechste Klasse.", es: "Soy profesor de Matemáticas y enseño en sexto grado.", ok: true },
            { t: "Ich bin ein Lehrer von Mathematik.", es: "Soy un profesor de Matemáticas.", ok: false,
              fix: "La profesión va sin artículo y en palabra compuesta: «Ich bin Mathematiklehrer»." }
          ],
          clave: ["unterrichte", "Mathematiklehrer"],
          tip: "El alemán une sustantivos: Mathematik + Lehrer = Mathematiklehrer. El último decide el género: der Lehrer." },
        { bot: "Und wie alt sind Ihre Schüler?", es: "¿Y qué edad tienen sus estudiantes?",
          opciones: [
            { t: "Sie sind elf Jahre alt.", es: "Tienen once años.", ok: true },
            { t: "Meine Schüler sind zwischen elf und zwölf Jahre alt.", es: "Mis estudiantes tienen entre once y doce años.", ok: true },
            { t: "Sie haben elf Jahre.", es: "Tienen once años.", ok: false,
              fix: "La edad se dice con «sein», no con «haben»: «Sie sind elf (Jahre alt)». Si dices «Jahre», añade «alt»: nunca «Sie sind elf Jahre» a secas." }
          ],
          clave: ["sind", "Jahre", "alt"],
          tip: "Edad = sein + número + Jahre alt: «Ich bin 35 Jahre alt». Literalmente: «soy 35 años viejo»." },
        { bot: "Und seit wann sind Sie Lehrer?", es: "¿Y desde cuándo es usted profesor?",
          opciones: [
            { t: "Seit zehn Jahren.", es: "Desde hace diez años.", ok: true },
            { t: "Ich bin seit zehn Jahren Lehrer und liebe meinen Beruf.", es: "Soy profesor desde hace diez años y amo mi profesión.", ok: true },
            { t: "Ich bin Lehrer für zehn Jahre.", es: "Soy profesor por diez años.", ok: false,
              fix: "Para algo que empezó en el pasado y sigue hoy: «seit» + dativo y verbo en presente: «Ich bin seit zehn Jahren Lehrer»." }
          ],
          clave: ["seit", "Jahren"],
          tip: "Tras «seit» va dativo: por eso «Jahren» lleva -n al final." },
        { bot: "Toll! Wie finden Sie unsere Schule?", es: "¡Genial! ¿Qué le parece nuestra escuela?",
          opciones: [
            { t: "Die Schule ist sehr schön.", es: "La escuela es muy bonita.", ok: true },
            { t: "Ich finde die Schule sehr schön, und die Kollegen sind sehr nett.", es: "La escuela me parece muy bonita, y los colegas son muy amables.", ok: true },
            { t: "Die Schule ist sehr schöne.", es: "La escuela es muy bonita.", ok: false,
              fix: "Después de «sein» el adjetivo no se declina: «Die Schule ist sehr schön». Solo lleva terminación delante del sustantivo: «eine schöne Schule»." }
          ],
          clave: ["Schule", "schön", "finde"],
          tip: "Todos los sustantivos alemanes se escriben con mayúscula: die Schule, der Lehrer, das Buch." },
        { bot: "Das freut mich! Kommen Sie, ich zeige Ihnen das Lehrerzimmer.", es: "¡Me alegra! Venga, le muestro la sala de profesores.",
          opciones: [
            { t: "Gern! Vielen Dank, Frau Keller.", es: "¡Con gusto! Muchas gracias, señora Keller.", ok: true },
            { t: "Sehr gern! Vielen Dank für den freundlichen Empfang.", es: "¡Con mucho gusto! Muchas gracias por el amable recibimiento.", ok: true },
            { t: "Gern! Danke viel, Frau Keller.", es: "¡Con gusto! Muchas gracias, señora Keller.", ok: false,
              fix: "Se dice «Vielen Dank» o «Danke schön». «Danke viel» no existe." }
          ],
          clave: ["vielen Dank", "Empfang", "Frau Keller"],
          tip: "En Alemania se usa «Frau» o «Herr» + apellido hasta que la otra persona proponga tutearse." }
      ],
      cierre: { bot: "Hier entlang, bitte. Sie werden sich hier bestimmt wohlfühlen!", es: "Por aquí, por favor. ¡Seguro que se va a sentir muy bien aquí!" },
      vocab: [
        { t: "Guten Morgen", es: "buenos días" },
        { t: "Wie heißen Sie?", es: "¿Cómo se llama usted?" },
        { t: "Ich komme aus ...", es: "soy de ..." },
        { t: "unterrichten", es: "enseñar, dar clase" },
        { t: "seit zehn Jahren", es: "desde hace diez años" },
        { t: "... Jahre alt sein", es: "tener ... años" },
        { t: "die Schule", es: "la escuela" },
        { t: "Vielen Dank", es: "muchas gracias" }
      ]
    },
    {
      id: "de-02", titulo: "Instrucciones claras en el aula", nivel: "A2",
      tema: "Instrucciones de clase",
      contexto: "Das una clase en alemán a un grupo de 5.º grado en Hamburgo. Un estudiante te hace preguntas y tú das instrucciones claras.",
      rol: "Jonas, 11 años, curioso e inquieto, no se queda quieto en la silla",
      turnos: [
        { bot: "Was machen wir heute?", es: "¿Qué vamos a hacer hoy?",
          opciones: [
            { t: "Heute lesen wir einen Text über Tiere.", es: "Hoy leemos un texto sobre animales.", ok: true },
            { t: "Heute lesen wir zuerst einen Text, dann arbeitet ihr in Gruppen.", es: "Hoy primero leemos un texto y después trabajan en grupos.", ok: true },
            { t: "Heute wir lesen einen Text.", es: "Hoy leemos un texto.", ok: false,
              fix: "El verbo conjugado va siempre en segunda posición: «Heute lesen wir einen Text»." }
          ],
          clave: ["lesen wir", "arbeitet ihr"],
          tip: "Regla de oro: el verbo es el elemento número 2. Si la frase empieza con «heute», el sujeto va después del verbo." },
        { bot: "Cool! Brauche ich mein Buch?", es: "¡Chévere! ¿Necesito mi libro?",
          opciones: [
            { t: "Ja, öffne bitte dein Buch auf Seite zwanzig.", es: "Sí, abre por favor tu libro en la página veinte.", ok: true },
            { t: "Ja, nimm dein Buch und schlag Seite zwanzig auf.", es: "Sí, toma tu libro y ábrelo en la página veinte.", ok: true },
            { t: "Ja, öffne bitte dein Buch in der Seite zwanzig.", es: "Sí, abre por favor tu libro en la página veinte.", ok: false,
              fix: "Con páginas se usa «auf» y sin artículo: «auf Seite zwanzig». «In der Seite» es un calco de «en la página»." }
          ],
          clave: ["auf Seite", "schlag"],
          tip: "En Alemania los docentes tutean a los estudiantes hasta aproximadamente los 16 años." },
        { bot: "Darf ich auf die Toilette gehen?", es: "¿Puedo ir al baño?",
          opciones: [
            { t: "Ja, aber komm schnell zurück.", es: "Sí, pero vuelve rápido.", ok: true },
            { t: "Ja, aber mach zuerst die Aufgabe fertig, okay?", es: "Sí, pero primero termina la tarea, ¿listo?", ok: true },
            { t: "Ja, aber komm zurück schnell.", es: "Sí, pero vuelve rápido.", ok: false,
              fix: "El prefijo separable va al final de la frase: «Komm schnell zurück»." }
          ],
          clave: ["komm schnell zurück", "fertig"],
          tip: "Verbos separables: zurückkommen → «Komm schnell zurück!». El prefijo se va al final." },
        { bot: "Danke! Ich verstehe Aufgabe zwei nicht. Können Sie das noch mal erklären?", es: "¡Gracias! No entiendo el ejercicio dos. ¿Lo puede explicar otra vez?",
          opciones: [
            { t: "Klar. Lies den Text und unterstreiche die Verben.", es: "Claro. Lee el texto y subraya los verbos.", ok: true },
            { t: "Natürlich. Lies zuerst den Text genau, dann unterstreichst du alle Verben.", es: "Por supuesto. Primero lee el texto con atención, después subrayas todos los verbos.", ok: true },
            { t: "Klar. Lese den Text und unterstreiche die Verben.", es: "Claro. Lee el texto y subraya los verbos.", ok: false,
              fix: "El imperativo de «lesen» con du cambia la vocal: «Lies den Text!». Igual: «Sprich!», «Nimm!»." }
          ],
          clave: ["lies", "genau"],
          tip: "Verbos con cambio e→i/ie lo mantienen en el imperativo con du: lesen → lies, sprechen → sprich." },
        { bot: "Kann ich mit Mia arbeiten?", es: "¿Puedo trabajar con Mia?",
          opciones: [
            { t: "Ja, arbeitet zu zweit.", es: "Sí, trabajen en parejas.", ok: true },
            { t: "Ja, ihr könnt zu zweit arbeiten, aber bitte leise.", es: "Sí, pueden trabajar en parejas, pero en voz baja, por favor.", ok: true },
            { t: "Ja, aber ihr müsst sprechen leise.", es: "Sí, pero tienen que hablar bajito.", ok: false,
              fix: "Con un verbo modal (müssen, können...), el infinitivo va al final: «ihr müsst leise sprechen»." }
          ],
          clave: ["zu zweit", "bitte leise"],
          tip: "«Zu zweit» = en parejas; «zu dritt» = en tríos. Muy útil para organizar el trabajo en el aula." },
        { bot: "Wie viel Zeit haben wir?", es: "¿Cuánto tiempo tenemos?",
          opciones: [
            { t: "Ihr habt fünfzehn Minuten.", es: "Tienen quince minutos.", ok: true },
            { t: "Ihr habt fünfzehn Minuten, dann vergleichen wir zusammen.", es: "Tienen quince minutos y después comparamos juntos.", ok: true },
            { t: "Ihr habt fünfzehn Minuten, dann wir vergleichen zusammen.", es: "Tienen quince minutos y después comparamos juntos.", ok: false,
              fix: "«Dann» ocupa la posición 1, así que el verbo va justo después: «dann vergleichen wir zusammen»." }
          ],
          clave: ["habt", "Minuten"],
          tip: "«Ihr» es el «ustedes» informal, para un grupo de niños o amigos. Conjugación: ihr habt, ihr seid, ihr könnt." }
      ],
      cierre: { bot: "Okay! Komm, Mia, wir fangen an!", es: "¡Listo! ¡Ven, Mia, empecemos!" },
      vocab: [
        { t: "die Aufgabe", es: "la tarea, el ejercicio" },
        { t: "unterstreichen", es: "subrayar" },
        { t: "zu zweit", es: "en parejas" },
        { t: "leise", es: "en voz baja" },
        { t: "Lies!", es: "¡Lee!" },
        { t: "aufschlagen", es: "abrir (un libro en una página)" },
        { t: "zurückkommen", es: "volver" },
        { t: "vergleichen", es: "comparar" }
      ]
    },
    {
      id: "de-03", titulo: "Un café en Berlín", nivel: "A2",
      tema: "Viaje y vida cotidiana",
      contexto: "Estás en Berlín por un congreso educativo. Entras a un café para descansar, pedir algo y pagar como un local.",
      rol: "Herr Brandt, mesero de un café berlinés, seco pero con mucho humor",
      turnos: [
        { bot: "Guten Tag! Was darf es sein?", es: "¡Buenas tardes! ¿Qué le sirvo?",
          opciones: [
            { t: "Guten Tag! Einen Kaffee, bitte.", es: "¡Buenas tardes! Un café, por favor.", ok: true },
            { t: "Hallo! Ich hätte gern einen Cappuccino, bitte.", es: "¡Hola! Quisiera un capuchino, por favor.", ok: true },
            { t: "Guten Tag! Ich will ein Kaffee.", es: "¡Buenas tardes! Quiero un café.", ok: false,
              fix: "«Kaffee» es masculino y es objeto directo: «einen Kaffee». Además, «Ich hätte gern» es más cortés que «Ich will»." }
          ],
          clave: ["Kaffee", "bitte", "hätte gern"],
          tip: "«Ich hätte gern...» (quisiera) es la fórmula educada para pedir en cafés, tiendas y restaurantes." },
        { bot: "Gern. Möchten Sie auch etwas essen? Der Apfelkuchen ist heute ganz frisch.", es: "Con gusto. ¿Quiere comer algo también? La torta de manzana está fresquita hoy.",
          opciones: [
            { t: "Ja, ein Stück Apfelkuchen, bitte.", es: "Sí, un pedazo de torta de manzana, por favor.", ok: true },
            { t: "Oh, das klingt gut! Dann nehme ich ein Stück Apfelkuchen.", es: "¡Ay, suena bien! Entonces me como un pedazo de torta de manzana.", ok: true },
            { t: "Ja, ich nehme eine Apfelkuchen.", es: "Sí, me como una torta de manzana.", ok: false,
              fix: "«Kuchen» es masculino: «einen Apfelkuchen». En un café se pide mejor «ein Stück Apfelkuchen»." }
          ],
          clave: ["ein Stück", "klingt gut"],
          tip: "«Kaffee und Kuchen» (café y torta) por la tarde es una tradición muy alemana." },
        { bot: "Kommt sofort. Sind Sie im Urlaub in Berlin?", es: "Ya se lo traigo. ¿Está de vacaciones en Berlín?",
          opciones: [
            { t: "Nein, ich bin für eine Konferenz hier.", es: "No, estoy aquí por una conferencia.", ok: true },
            { t: "Nein, ich bin beruflich hier, für eine Bildungskonferenz.", es: "No, estoy aquí por trabajo, para un congreso de educación.", ok: true },
            { t: "Nein, ich bin hier für arbeiten.", es: "No, estoy aquí para trabajar.", ok: false,
              fix: "«Para + infinitivo» no es «für + infinitivo». Diga «Ich bin hier, um zu arbeiten» o, más natural, «Ich bin beruflich hier»." }
          ],
          clave: ["Konferenz", "beruflich"],
          tip: "«Beruflich» = por trabajo. «Privat» = por motivos personales." },
        { bot: "Und wie gefällt Ihnen Berlin?", es: "¿Y qué tal le parece Berlín?",
          opciones: [
            { t: "Berlin gefällt mir sehr gut, aber es ist so kalt!", es: "Berlín me gusta mucho, ¡pero hace tanto frío!", ok: true },
            { t: "Die Stadt gefällt mir sehr, nur das Wetter ist ein bisschen zu kalt für mich.", es: "La ciudad me gusta mucho, solo que el clima es un poco frío para mí.", ok: true },
            { t: "Berlin gefällt mir, aber ich bin sehr kalt.", es: "(Quiso decir: Berlín me gusta, pero tengo mucho frío).", ok: false,
              fix: "«Tengo frío» se dice «Mir ist kalt». «Ich bin kalt» significa «soy una persona fría»." }
          ],
          clave: ["so kalt", "Wetter"],
          tip: "Sensaciones con dativo: «Mir ist kalt» (tengo frío), «Mir ist warm» (tengo calor), «Mir ist schlecht» (me siento mal)." },
        { bot: "Ha, das hören wir oft! So, hier sind Ihr Kaffee und der Kuchen. Guten Appetit!", es: "¡Ja, eso lo oímos mucho! Bueno, aquí tiene su café y la torta. ¡Buen provecho!",
          opciones: [
            { t: "Danke schön! Das sieht lecker aus.", es: "¡Muchas gracias! Se ve delicioso.", ok: true },
            { t: "Vielen Dank! Der Kuchen riecht wunderbar.", es: "¡Muchas gracias! La torta huele de maravilla.", ok: true },
            { t: "Danke! Das sieht aus lecker.", es: "¡Gracias! Se ve delicioso.", ok: false,
              fix: "«Aussehen» es separable: el prefijo va al final: «Das sieht lecker aus»." }
          ],
          clave: ["lecker aus", "riecht"],
          tip: "«Lecker» = rico, delicioso. Es la palabra más usada para elogiar comida en Alemania." },
        { bot: "Hat es geschmeckt? Darf es noch etwas sein?", es: "¿Le gustó? ¿Le traigo algo más?",
          opciones: [
            { t: "Ja, sehr lecker! Nein danke, ich möchte zahlen, bitte.", es: "¡Sí, muy rico! No, gracias, quisiera pagar, por favor.", ok: true },
            { t: "Es war ausgezeichnet! Die Rechnung, bitte.", es: "¡Estuvo excelente! La cuenta, por favor.", ok: true },
            { t: "Ja, sehr lecker! Das Konto, bitte.", es: "¡Sí, muy rico! La cuenta, por favor.", ok: false,
              fix: "«Das Konto» es una cuenta bancaria. Para pagar se dice «Die Rechnung, bitte» o «Ich möchte zahlen»." }
          ],
          clave: ["zahlen", "Rechnung"],
          tip: "En Alemania el mesero no trae la cuenta solo: hay que pedirla. «Zahlen, bitte!» es lo más común." },
        { bot: "Das macht zusammen acht Euro fünfzig.", es: "Son ocho euros con cincuenta en total.",
          opciones: [
            { t: "Hier sind zehn Euro. Stimmt so.", es: "Aquí tiene diez euros. Quédese con el cambio.", ok: true },
            { t: "Machen Sie neun Euro, bitte.", es: "Cóbreme nueve euros, por favor.", ok: true },
            { t: "Hier sind zehn Euro. Behalten Sie den Wechsel.", es: "Aquí tiene diez euros. Quédese con el cambio.", ok: false,
              fix: "«Wechsel» no es el cambio de una compra. Para dejar propina se dice «Stimmt so» o se dice el total redondeado: «Neun Euro, bitte»." }
          ],
          clave: ["stimmt so", "neun"],
          tip: "La propina se da al pagar, diciendo cuánto quiere pagar en total; se suele redondear o dejar entre 5 y 10 %." }
      ],
      cierre: { bot: "Danke schön! Einen schönen Tag noch und viel Erfolg bei der Konferenz!", es: "¡Muchas gracias! ¡Que tenga un buen día y mucho éxito en la conferencia!" },
      vocab: [
        { t: "Was darf es sein?", es: "¿Qué le sirvo?" },
        { t: "Ich hätte gern ...", es: "quisiera ..." },
        { t: "ein Stück Kuchen", es: "un pedazo de torta" },
        { t: "Mir ist kalt.", es: "Tengo frío." },
        { t: "lecker", es: "rico, delicioso" },
        { t: "die Rechnung", es: "la cuenta" },
        { t: "Stimmt so.", es: "Quédese con el cambio." },
        { t: "beruflich", es: "por trabajo" }
      ]
    },
    {
      id: "de-04", titulo: "Un favor en la sala de profesores", nivel: "B1",
      tema: "Sala de profesores",
      contexto: "Es tu primera semana en un colegio de Colonia. En la sala de profesores, una colega veterana te saluda y te pide un reemplazo.",
      rol: "Sabine, profesora de Alemán con 20 años en el colegio, directa y muy servicial",
      turnos: [
        { bot: "Hallo! Du bist neu hier, oder? Ich bin Sabine. Wir duzen uns hier alle.", es: "¡Hola! Eres nuevo(a) aquí, ¿cierto? Soy Sabine. Aquí todos nos tuteamos.",
          opciones: [
            { t: "Ja, genau. Ich heiße Carlos. Freut mich, Sabine!", es: "Sí, exacto. Me llamo Carlos. ¡Mucho gusto, Sabine!", ok: true },
            { t: "Hallo Sabine! Ja, ich bin seit Montag hier. Schön, dich kennenzulernen.", es: "¡Hola, Sabine! Sí, estoy aquí desde el lunes. Qué bueno conocerte.", ok: true },
            { t: "Ja, ich bin neu. Freut mich, Sie kennenzulernen, Sabine.", es: "Sí, soy nuevo. Mucho gusto en conocerla, Sabine.", ok: false,
              fix: "Sabine propuso tutearse («Wir duzen uns»). Responda con «du»: «Schön, dich kennenzulernen»." }
          ],
          clave: ["heiße", "dich", "Sabine"],
          tip: "«Duzen» = tutear; «siezen» = tratar de usted. Entre colegas alemanes es común tutearse, pero espere a que se lo propongan." },
        { bot: "Wie läuft deine erste Woche?", es: "¿Cómo va tu primera semana?",
          opciones: [
            { t: "Gut, danke! Die Schüler sind sehr nett.", es: "¡Bien, gracias! Los estudiantes son muy amables.", ok: true },
            { t: "Ganz gut, aber ich muss mich noch an den Stundenplan gewöhnen.", es: "Bastante bien, pero todavía tengo que acostumbrarme al horario.", ok: true },
            { t: "Gut, aber ich muss noch an den Stundenplan mich gewöhnen.", es: "Bien, pero todavía tengo que acostumbrarme al horario.", ok: false,
              fix: "El pronombre reflexivo va pronto en la frase, justo después del verbo: «ich muss mich noch an den Stundenplan gewöhnen»." }
          ],
          clave: ["Schüler", "nett", "mich noch", "ganz gut"],
          tip: "«Sich gewöhnen an» + acusativo = acostumbrarse a. «Der Stundenplan» = el horario de clases." },
        { bot: "Das kenne ich. Sag mal, hast du morgen in der fünften Stunde frei? Ich bräuchte eine Vertretung.", es: "Te entiendo. Oye, ¿mañana tienes libre la quinta hora? Necesitaría un reemplazo.",
          opciones: [
            { t: "Ja, da habe ich frei. Welche Klasse ist das?", es: "Sí, a esa hora estoy libre. ¿Qué grupo es?", ok: true },
            { t: "Ich glaube schon. Um welche Klasse geht es denn?", es: "Creo que sí. ¿De qué grupo se trata?", ok: true },
            { t: "Ja, ich habe frei. Welche Klasse ist?", es: "Sí, estoy libre. ¿Qué grupo es?", ok: false,
              fix: "El alemán no omite el sujeto como el español: «Welche Klasse ist das?» o «Welche Klasse ist es?»." }
          ],
          clave: ["frei", "ist das", "glaube", "geht es"],
          tip: "«Die Vertretung» = reemplazo de un colega ausente. «Vertretungsplan» = cuadro de reemplazos." },
        { bot: "Die 7b. Ich muss zum Arzt, weil ich seit Tagen Rückenschmerzen habe.", es: "El 7b. Tengo que ir al médico porque llevo días con dolor de espalda.",
          opciones: [
            { t: "Kein Problem, ich übernehme die Stunde. Gute Besserung!", es: "No hay problema, yo tomo la clase. ¡Que te mejores!", ok: true },
            { t: "Klar, mache ich. Gute Besserung! Was sollen die Schüler machen?", es: "Claro, yo lo hago. ¡Que te mejores! ¿Qué deben hacer los estudiantes?", ok: true },
            { t: "Kein Problem. Ich übernehme, weil ich habe Zeit.", es: "No hay problema. Yo la tomo porque tengo tiempo.", ok: false,
              fix: "Con «weil» el verbo conjugado va al final: «weil ich Zeit habe»." }
          ],
          clave: ["Gute Besserung", "die Stunde", "mache ich"],
          tip: "«Gute Besserung!» es lo que se dice siempre a alguien enfermo: «¡Que te mejores!»." },
        { bot: "Danke, du rettest mich! Die Arbeitsblätter lege ich dir ins Fach. Übrigens, kommst du am Freitag zum Grillen?", es: "¡Gracias, me salvas! Te dejo las fotocopias en tu casillero. Por cierto, ¿vienes el viernes al asado?",
          opciones: [
            { t: "Gerne! Was soll ich mitbringen?", es: "¡Con gusto! ¿Qué debo llevar?", ok: true },
            { t: "Ja, sehr gern! Soll ich einen Salat mitbringen?", es: "¡Sí, con mucho gusto! ¿Llevo una ensalada?", ok: true },
            { t: "Gerne! Was soll ich bringen mit?", es: "¡Con gusto! ¿Qué debo llevar?", ok: false,
              fix: "Tras un verbo modal, el verbo separable va completo al final: «Was soll ich mitbringen?»." }
          ],
          clave: ["mitbringen", "Salat", "was soll"],
          tip: "En Alemania, a un «Grillen» entre colegas cada uno suele llevar algo: ensalada, pan o bebidas." },
        { bot: "Ein Salat wäre super! Wir fangen um sechs Uhr im Schulgarten an.", es: "¡Una ensalada sería genial! Empezamos a las seis en la huerta del colegio.",
          opciones: [
            { t: "Super, ich freue mich darauf!", es: "¡Genial, me hace mucha ilusión!", ok: true },
            { t: "Perfekt, dann bis Freitag um sechs. Ich freue mich schon!", es: "Perfecto, entonces hasta el viernes a las seis. ¡Ya me hace ilusión!", ok: true },
            { t: "Super, ich freue mich auf es.", es: "¡Genial, me hace ilusión!", ok: false,
              fix: "Con preposición referida a una cosa se usa «da(r) + preposición»: «Ich freue mich darauf». Nunca «auf es»." }
          ],
          clave: ["darauf", "schon"],
          tip: "«Sich freuen auf» = alegrarse por algo futuro; «sich freuen über» = alegrarse por algo que ya pasó." }
      ],
      cierre: { bot: "Schön! Und nochmal danke für morgen. Bis dann!", es: "¡Qué bien! Y otra vez gracias por lo de mañana. ¡Nos vemos!" },
      vocab: [
        { t: "duzen / siezen", es: "tutear / tratar de usted" },
        { t: "das Lehrerzimmer", es: "la sala de profesores" },
        { t: "die Vertretung", es: "el reemplazo" },
        { t: "übernehmen", es: "encargarse, asumir" },
        { t: "das Fach", es: "el casillero" },
        { t: "Gute Besserung!", es: "¡Que te mejores!" },
        { t: "mitbringen", es: "llevar, traer consigo" },
        { t: "sich freuen auf", es: "hacerle ilusión algo futuro" }
      ]
    },
    {
      id: "de-05", titulo: "Reunión con un papá preocupado", nivel: "B1",
      tema: "Reunión con familia",
      contexto: "Atiendes al papá de una estudiante de 4.º grado en una escuela de Múnich. Las notas de la niña bajaron y quieren acordar un plan.",
      rol: "Herr Yilmaz, papá de Elif (10 años), muy cortés pero preocupado",
      turnos: [
        { bot: "Guten Tag! Entschuldigen Sie die Verspätung, ich habe keinen Parkplatz gefunden.", es: "¡Buenas tardes! Disculpe la demora, no encontré parqueadero.",
          opciones: [
            { t: "Guten Tag, Herr Yilmaz. Kein Problem, nehmen Sie bitte Platz.", es: "Buenas tardes, señor Yilmaz. No hay problema, siéntese, por favor.", ok: true },
            { t: "Guten Tag! Das macht nichts. Danke, dass Sie gekommen sind.", es: "¡Buenas tardes! No pasa nada. Gracias por venir.", ok: true },
            { t: "Guten Tag! Kein Problem, setz dich bitte.", es: "¡Buenas tardes! No hay problema, siéntate, por favor.", ok: false,
              fix: "Con un padre de familia se usa «Sie»: «Setzen Sie sich bitte» o «Nehmen Sie bitte Platz»." }
          ],
          clave: ["nehmen Sie", "gekommen sind"],
          tip: "La puntualidad es muy valorada en Alemania; por eso el papá se disculpa aunque llegue pocos minutos tarde." },
        { bot: "Ich mache mir Sorgen um Elif. Ihre Noten sind schlechter geworden.", es: "Estoy preocupado por Elif. Sus notas han empeorado.",
          opciones: [
            { t: "Ja, in Mathe hat sie etwas nachgelassen, aber sie hat viel Potenzial.", es: "Sí, en Matemáticas ha bajado un poco, pero tiene mucho potencial.", ok: true },
            { t: "Das stimmt, aber ich bin sicher, dass wir ihr gemeinsam helfen können.", es: "Es cierto, pero estoy seguro de que juntos podemos ayudarla.", ok: true },
            { t: "Das stimmt, aber ich bin sicher, dass wir können ihr gemeinsam helfen.", es: "Es cierto, pero estoy seguro de que juntos podemos ayudarla.", ok: false,
              fix: "Con «dass» el verbo conjugado va al final: «dass wir ihr gemeinsam helfen können»." }
          ],
          clave: ["nachgelassen", "helfen können"],
          tip: "En Alemania la nota 1 es la mejor y la 6 la peor. ¡Al revés de nuestra escala!" },
        { bot: "Zu Hause sitzt sie stundenlang am Handy. Ich weiß nicht mehr, was ich machen soll.", es: "En la casa se pasa horas en el celular. Ya no sé qué hacer.",
          opciones: [
            { t: "Das verstehe ich. Vielleicht helfen feste Handyzeiten.", es: "Lo entiendo. Tal vez ayuden unos horarios fijos para el celular.", ok: true },
            { t: "Das ist sehr häufig. Eine Idee wäre eine Routine: erst die Hausaufgaben, dann das Handy.", es: "Eso es muy común. Una idea sería una rutina: primero las tareas y después el celular.", ok: true },
            { t: "Das ist normal. Sie sollte weniger Zeit mit dem Handy passieren.", es: "(Quiso decir: Es normal. Ella debería pasar menos tiempo con el celular).", ok: false,
              fix: "Falso amigo: «passieren» significa «ocurrir». «Pasar tiempo» es «Zeit verbringen»: «weniger Zeit am Handy verbringen»." }
          ],
          clave: ["Handyzeiten", "Routine"],
          tip: "En alemán el celular se llama «das Handy». Suena a inglés, pero los ingleses no lo usan." },
        { bot: "Und wie verhält sie sich im Unterricht?", es: "¿Y cómo se comporta en clase?",
          opciones: [
            { t: "Sie ist höflich, aber manchmal redet sie viel mit ihren Freundinnen.", es: "Es educada, pero a veces habla mucho con sus amigas.", ok: true },
            { t: "Im Allgemeinen gut. Sie ist respektvoll, lässt sich aber leicht ablenken.", es: "En general bien. Es respetuosa, pero se distrae con facilidad.", ok: true },
            { t: "Sie ist sehr höflich, aber sie spricht viel mit ihre Freundinnen.", es: "Es muy educada, pero habla mucho con sus amigas.", ok: false,
              fix: "«Mit» siempre rige dativo; en plural el posesivo termina en -en: «mit ihren Freundinnen»." }
          ],
          clave: ["höflich", "redet", "respektvoll", "ablenken"],
          tip: "Preposiciones que siempre van con dativo: aus, bei, mit, nach, seit, von, zu." },
        { bot: "Was kann ich zu Hause tun, um ihr zu helfen?", es: "¿Qué puedo hacer en la casa para ayudarla?",
          opciones: [
            { t: "Sie könnten jeden Tag zwanzig Minuten mit ihr lesen.", es: "Usted podría leer con ella veinte minutos todos los días.", ok: true },
            { t: "Es wäre toll, wenn Sie regelmäßig die Hausaufgaben anschauen und jeden Tag mit ihr lesen würden.", es: "Sería genial que usted revisara las tareas con regularidad y leyera con ella todos los días.", ok: true },
            { t: "Sie könnten jeden Tag mit ihr lesen zwanzig Minuten.", es: "Usted podría leer con ella veinte minutos todos los días.", ok: false,
              fix: "El infinitivo va al final de la frase: «Sie könnten jeden Tag zwanzig Minuten mit ihr lesen»." }
          ],
          clave: ["Minuten mit ihr lesen", "lesen würden"],
          tip: "«Sie könnten...» (Konjunktiv II) suena a sugerencia amable, no a orden." },
        { bot: "Gut, das machen wir. Können wir in einem Monat noch einmal sprechen?", es: "Bien, eso haremos. ¿Podemos hablar otra vez dentro de un mes?",
          opciones: [
            { t: "Natürlich. Passt Ihnen der fünfzehnte?", es: "Por supuesto. ¿Le queda bien el quince?", ok: true },
            { t: "Selbstverständlich. Ich schreibe Ihnen eine E-Mail, damit wir einen Termin vereinbaren.", es: "Desde luego. Le escribo un correo para que acordemos una cita.", ok: true },
            { t: "Natürlich. Ich schreibe Ihnen, um ein Date zu machen.", es: "(Quiso decir: Claro. Le escribo para fijar una cita).", ok: false,
              fix: "«Date» es una cita romántica. Con padres de familia se dice «einen Termin vereinbaren» o «einen Termin ausmachen»." }
          ],
          clave: ["Termin", "passt", "E-Mail", "fünfzehnte"],
          tip: "«Der Termin» = cita formal (médico, reunión). Los alemanes agendan casi todo con «Termin»." }
      ],
      cierre: { bot: "Vielen Dank für Ihre Zeit. Jetzt bin ich viel ruhiger.", es: "Muchas gracias por su tiempo. Ahora estoy mucho más tranquilo." },
      vocab: [
        { t: "das Elterngespräch", es: "la reunión con padres" },
        { t: "sich Sorgen machen um", es: "preocuparse por" },
        { t: "nachlassen", es: "bajar el rendimiento" },
        { t: "Zeit verbringen", es: "pasar tiempo" },
        { t: "sich ablenken lassen", es: "distraerse" },
        { t: "die Hausaufgaben", es: "las tareas" },
        { t: "einen Termin vereinbaren", es: "acordar una cita" },
        { t: "gemeinsam", es: "juntos" }
      ]
    },
    {
      id: "de-06", titulo: "La estudiante que no habla en clase", nivel: "B1",
      tema: "Estudiante que no participa",
      contexto: "Al final de la clase hablas a solas con una estudiante de 9.º grado que nunca participa. Quieres entenderla y ofrecerle otra forma de participar.",
      rol: "Lena, 14 años, tímida, dibuja muy bien y casi no habla en clase",
      turnos: [
        { bot: "Hallo... Sie wollten mit mir sprechen?", es: "Hola... ¿Usted quería hablar conmigo?",
          opciones: [
            { t: "Hallo Lena. Ja, keine Sorge, es ist nichts Schlimmes.", es: "Hola, Lena. Sí, tranquila, no es nada grave.", ok: true },
            { t: "Hallo Lena! Ja, ich möchte nur kurz mit dir reden. Alles in Ordnung?", es: "¡Hola, Lena! Sí, solo quiero hablar contigo un momento. ¿Todo bien?", ok: true },
            { t: "Hallo Lena. Ja, keine Sorge, es ist nichts schlimm.", es: "Hola, Lena. Sí, tranquila, no es nada grave.", ok: false,
              fix: "Tras «nichts» el adjetivo se sustantiva: mayúscula y terminación -es: «nichts Schlimmes»." }
          ],
          clave: ["keine Sorge", "Schlimmes", "reden", "Ordnung"],
          tip: "«Keine Sorge» = tranquilo, no te preocupes. Abra la conversación quitando tensión." },
        { bot: "Okay... Ich sage im Unterricht nie etwas. Ich schäme mich.", es: "Bueno... Nunca digo nada en clase. Me da pena.",
          opciones: [
            { t: "Das verstehe ich. Vielen geht es genauso.", es: "Te entiendo. A mucha gente le pasa lo mismo.", ok: true },
            { t: "Es ist ganz normal, sich zu schämen. Ich war in deinem Alter auch sehr nervös.", es: "Es muy normal sentir pena. A tu edad yo también me ponía muy nervioso.", ok: true },
            { t: "Das verstehe ich. Ich hatte auch Angst, als ich hatte 14 Jahre.", es: "Te entiendo. Yo también tenía miedo cuando tenía 14 años.", ok: false,
              fix: "La edad se dice con «sein» + «alt», y con «als» el verbo va al final: «als ich 14 Jahre alt war»." }
          ],
          clave: ["verstehe", "genauso", "normal", "Alter"],
          tip: "«Sich schämen» = sentir vergüenza. «Schüchtern» = tímido. Validar la emoción abre la puerta al cambio." },
        { bot: "Ich habe Angst, Fehler zu machen, und dass alle lachen.", es: "Me da miedo equivocarme y que todos se rían.",
          opciones: [
            { t: "Fehler gehören zum Lernen. Niemand wird dich auslachen.", es: "Los errores hacen parte del aprendizaje. Nadie se va a burlar de ti.", ok: true },
            { t: "In unserer Klasse sind Fehler kein Grund zum Lachen, sondern eine Chance zu lernen.", es: "En nuestro grupo los errores no son motivo de risa, sino una oportunidad para aprender.", ok: true },
            { t: "Fehler gehören zum Lernen. Niemand wird lachen von dir.", es: "Los errores hacen parte del aprendizaje. Nadie se va a reír de ti.", ok: false,
              fix: "«Reírse de alguien» es «über jemanden lachen» o «jemanden auslachen»: «Niemand wird dich auslachen»." }
          ],
          clave: ["auslachen", "niemand wird dich", "Chance", "Grund zum Lachen"],
          tip: "«Fehler machen» = cometer errores (literal: «hacer errores»). «Einen Fehler begehen» suena formal; en el aula se dice «machen»." },
        { bot: "Aber ich mag das Fach... Ich will nur nicht vor allen sprechen.", es: "Pero me gusta la materia... Solo que no quiero hablar delante de todos.",
          opciones: [
            { t: "Wie wäre es, wenn du deine Ideen zuerst aufschreibst?", es: "¿Qué tal si primero escribes tus ideas?", ok: true },
            { t: "Wir können es anders versuchen: Du zeigst mir deine Antworten schriftlich oder als Zeichnung.", es: "Podemos intentarlo de otra forma: me muestras tus respuestas por escrito o en un dibujo.", ok: true },
            { t: "Wie wäre es, wenn du schreibst zuerst deine Ideen auf?", es: "¿Qué tal si primero escribes tus ideas?", ok: false,
              fix: "Con «wenn» el verbo va al final y el separable se vuelve a unir: «wenn du deine Ideen zuerst aufschreibst»." }
          ],
          clave: ["aufschreibst", "Ideen", "schriftlich", "Zeichnung"],
          tip: "En oraciones subordinadas los verbos separables vuelven a juntarse: «..., wenn du aufschreibst»." },
        { bot: "Schriftlich geht. Darf ich auch zeichnen? Ich zeichne total gern.", es: "Por escrito sí puedo. ¿Puedo también dibujar? Me encanta dibujar.",
          opciones: [
            { t: "Klar! Deine Zeichnungen können den Inhalt sehr gut erklären.", es: "¡Claro! Tus dibujos pueden explicar muy bien el tema.", ok: true },
            { t: "Natürlich! Nächste Woche kannst du eine gezeichnete Mindmap vorstellen.", es: "¡Por supuesto! La próxima semana puedes presentar un mapa mental dibujado.", ok: true },
            { t: "Klar! Das ist eine tolle Idee, ich bin sehr stolz von dir.", es: "¡Claro! Es una idea genial, estoy muy orgulloso de ti.", ok: false,
              fix: "«Orgulloso de» se dice «stolz auf» + acusativo: «Ich bin stolz auf dich»." }
          ],
          clave: ["Zeichnungen", "klar", "Mindmap", "nächste Woche"],
          tip: "Muchas preposiciones alemanas no coinciden con el español: stolz auf, Angst vor, warten auf. Apréndalas en bloque." },
        { bot: "Und wenn ich irgendwann doch sprechen muss?", es: "¿Y si algún día tengo que hablar?",
          opciones: [
            { t: "Zuerst sprichst du nur mit einer Partnerin, zu zweit.", es: "Primero hablas solo con una compañera, en pareja.", ok: true },
            { t: "Wir machen es langsam: erst zu zweit, dann in einer kleinen Gruppe. Du entscheidest, wann du bereit bist.", es: "Vamos despacio: primero en pareja, después en un grupo pequeño. Tú decides cuándo estás lista.", ok: true },
            { t: "Zuerst sprichst du nur mit einer Partnerin. Du musst nicht vor alle sprechen.", es: "Primero hablas solo con una compañera. No tienes que hablar delante de todos.", ok: false,
              fix: "«Vor» indicando posición (sin movimiento) rige dativo: «vor allen sprechen»." }
          ],
          clave: ["zu zweit", "Partnerin", "Gruppe", "bereit"],
          tip: "Preposiciones de doble régimen: ¿dónde? → dativo («vor allen»); ¿hacia dónde? → acusativo («vor die Klasse treten»)." },
        { bot: "Okay. Danke. So hat noch nie jemand mit mir geredet.", es: "Bueno. Gracias. Nadie había hablado así conmigo.",
          opciones: [
            { t: "Ich danke dir für dein Vertrauen, Lena.", es: "Te agradezco tu confianza, Lena.", ok: true },
            { t: "Danke, dass du mir vertraust. Du kannst immer zu mir kommen.", es: "Gracias por confiar en mí. Siempre puedes venir a hablar conmigo.", ok: true },
            { t: "Danke für deine Konfidenz, Lena.", es: "Gracias por tu confianza, Lena.", ok: false,
              fix: "«Confianza» es «das Vertrauen». «Konfidenz» solo se usa en estadística (Konfidenzintervall)." }
          ],
          clave: ["Vertrauen", "vertraust", "danke"],
          tip: "«Zu mir kommen» = venir a hablar conmigo. Una frase sencilla que construye seguridad emocional." }
      ],
      cierre: { bot: "Bis morgen! Ich bringe mein Skizzenbuch mit.", es: "¡Hasta mañana! Voy a traer mi cuaderno de bocetos." },
      vocab: [
        { t: "sich schämen", es: "sentir vergüenza, pena" },
        { t: "Fehler machen", es: "equivocarse" },
        { t: "auslachen", es: "burlarse de" },
        { t: "schriftlich", es: "por escrito" },
        { t: "zeichnen", es: "dibujar" },
        { t: "stolz auf", es: "orgulloso de" },
        { t: "bereit", es: "listo, preparado" },
        { t: "das Vertrauen", es: "la confianza" }
      ]
    },
    {
      id: "de-07", titulo: "Retroalimentación a un docente en formación", nivel: "B1",
      tema: "Dar retroalimentación",
      contexto: "Observaste la clase de un docente en práctica en un colegio de Leipzig. Ahora le das retroalimentación: reconoces lo bueno y propones una mejora concreta.",
      rol: "Tobias, docente en formación (Referendar), motivado pero inseguro",
      turnos: [
        { bot: "Und? Wie fandest du meine Stunde? Sei ruhig ehrlich.", es: "¿Y? ¿Qué te pareció mi clase? Puedes ser sincero.",
          opciones: [
            { t: "Ich fand sie sehr gut! Die Schüler haben viel mitgemacht.", es: "¡Me pareció muy buena! Los estudiantes participaron mucho.", ok: true },
            { t: "Ehrlich gesagt war die Stunde richtig gut. Du hast eine tolle Beziehung zur Klasse.", es: "Sinceramente, la clase estuvo muy bien. Tienes una relación muy bonita con el grupo.", ok: true },
            { t: "Ich fand sie sehr gut! Die Schüler haben viel mitgemachen.", es: "¡Me pareció muy buena! Los estudiantes participaron mucho.", ok: false,
              fix: "El participio de «mitmachen» es regular: «mitgemacht». Los verbos regulares terminan en -t: gemacht, gesagt." }
          ],
          clave: ["mitgemacht", "sehr gut", "Beziehung", "richtig gut"],
          tip: "«Die Stunde» = la clase (la hora de clase). «Wie fandest du...?» = ¿Qué te pareció...?" },
        { bot: "Puh, was für eine Erleichterung! Gibt es trotzdem etwas, das ich verbessern kann?", es: "¡Uf, qué alivio! ¿Pero hay algo que pueda mejorar?",
          opciones: [
            { t: "Vielleicht könntest du den Schülern mehr Zeit zum Nachdenken geben.", es: "Tal vez podrías darles a los estudiantes más tiempo para pensar.", ok: true },
            { t: "Ein Tipp: Wenn du eine Frage stellst, warte ungefähr fünf Sekunden, bevor du jemanden aufrufst.", es: "Un consejo: cuando hagas una pregunta, espera unos cinco segundos antes de llamar a alguien.", ok: true },
            { t: "Ein Tipp: Wenn du stellst eine Frage, warte fünf Sekunden.", es: "Un consejo: cuando hagas una pregunta, espera cinco segundos.", ok: false,
              fix: "Con «wenn» el verbo conjugado va al final: «Wenn du eine Frage stellst, ...»." }
          ],
          clave: ["Zeit", "Nachdenken", "Frage stellst", "aufrufst"],
          tip: "«Eine Frage stellen» = hacer una pregunta. No se dice «eine Frage machen»." },
        { bot: "Mehr Zeit? Aber ich habe Angst vor der Stille in der Klasse.", es: "¿Más tiempo? Pero me da miedo el silencio en el salón.",
          opciones: [
            { t: "Das ist normal. Aber die Stille hilft den Schülern, ihre Gedanken zu ordnen.", es: "Es normal. Pero el silencio ayuda a los estudiantes a ordenar sus ideas.", ok: true },
            { t: "Verstehe ich, aber Studien zeigen, dass ein paar Sekunden Wartezeit die Antworten deutlich verbessern.", es: "Te entiendo, pero los estudios muestran que unos segundos de espera mejoran claramente las respuestas.", ok: true },
            { t: "Das ist normal. Aber die Stille hilft die Schüler, ihre Gedanken zu ordnen.", es: "Es normal. Pero el silencio ayuda a los estudiantes a ordenar sus ideas.", ok: false,
              fix: "«Helfen» rige dativo: «hilft den Schülern». En dativo plural el sustantivo suma -n." }
          ],
          clave: ["den Schülern", "Gedanken", "Wartezeit", "Studien"],
          tip: "El «tiempo de espera» (wait time) fue estudiado por Mary Budd Rowe: esperar de 3 a 5 segundos mejora las respuestas." },
        { bot: "Macht Sinn. Und was meinst du zum Ende der Stunde?", es: "Tiene sentido. ¿Y qué opinas del final de la clase?",
          opciones: [
            { t: "Der Abschluss war ein bisschen kurz.", es: "El cierre fue un poco corto.", ok: true },
            { t: "Ich fand den Abschluss etwas hektisch; es fehlte Zeit, um das Ziel der Stunde zu wiederholen.", es: "El cierre me pareció algo apresurado; faltó tiempo para repasar el objetivo de la clase.", ok: true },
            { t: "Das Ende war etwas schnell. Es fehlte Zeit, für das Ziel zu wiederholen.", es: "El final fue algo rápido. Faltó tiempo para repasar el objetivo.", ok: false,
              fix: "Para expresar finalidad con infinitivo se usa «um ... zu»: «um das Ziel zu wiederholen»." }
          ],
          clave: ["Abschluss", "kurz", "um das Ziel", "hektisch"],
          tip: "«Der Abschluss» = cierre de la clase. «Hektisch» = apresurado, a las carreras." },
        { bot: "Stimmt, es hat geklingelt und ich war total durcheinander. Wie machst du das?", es: "Es cierto, sonó el timbre y quedé totalmente desubicado. ¿Tú cómo lo haces?",
          opciones: [
            { t: "Ich plane immer die letzten fünf Minuten für eine Abschlussfrage ein.", es: "Siempre reservo los últimos cinco minutos para una pregunta de cierre.", ok: true },
            { t: "Ich lasse am Ende fünf Minuten frei: Jeder schreibt auf einen Zettel, was er gelernt hat.", es: "Dejo cinco minutos libres al final: cada uno escribe en un papelito lo que aprendió.", ok: true },
            { t: "Ich lasse am Ende fünf Minuten frei: Jeder schreibt auf einen Zettel, was er hat gelernt.", es: "Dejo cinco minutos libres al final: cada uno escribe en un papelito lo que aprendió.", ok: false,
              fix: "«Was» introduce una subordinada: el auxiliar va al final: «was er gelernt hat»." }
          ],
          clave: ["Abschlussfrage", "plane", "Zettel", "gelernt hat"],
          tip: "«Der Zettel» = papelito. El «Exit-Zettel» (boleto de salida) es muy usado en colegios alemanes." },
        { bot: "Super Idee! Das probiere ich gleich morgen aus. Danke für dein Feedback!", es: "¡Súper idea! La pruebo mañana mismo. ¡Gracias por tu retroalimentación!",
          opciones: [
            { t: "Gern geschehen! Du bist auf einem guten Weg.", es: "¡Con mucho gusto! Vas por buen camino.", ok: true },
            { t: "Sehr gern! Du hast echt Talent. Erzähl mir dann, wie es gelaufen ist.", es: "¡Con mucho gusto! De verdad tienes talento. Después me cuentas cómo te fue.", ok: true },
            { t: "Bitte! Du bist in einem guten Weg.", es: "¡De nada! Vas por buen camino.", ok: false,
              fix: "La expresión fija es «auf einem guten Weg sein»: «Du bist auf einem guten Weg»." }
          ],
          clave: ["gern", "Weg", "Talent"],
          tip: "«Gern geschehen» es la respuesta más amable a «Danke». También: «Gerne!» o «Kein Problem!»." }
      ],
      cierre: { bot: "Mach ich! Kommst du nächste Woche wieder zum Hospitieren?", es: "¡Así lo haré! ¿Vienes otra vez la próxima semana a observar la clase?" },
      vocab: [
        { t: "der Referendar", es: "el docente en formación" },
        { t: "mitmachen", es: "participar" },
        { t: "nachdenken", es: "reflexionar, pensar" },
        { t: "eine Frage stellen", es: "hacer una pregunta" },
        { t: "aufrufen", es: "llamar a alguien (en clase)" },
        { t: "der Abschluss", es: "el cierre" },
        { t: "der Zettel", es: "el papelito" },
        { t: "hospitieren", es: "observar una clase" }
      ]
    },
    {
      id: "de-08", titulo: "Videollamada para un intercambio escolar", nivel: "B2",
      tema: "Videollamada con colega extranjero",
      contexto: "Tienes una videollamada con la rectora de un colegio de Hamburgo para proponer un intercambio virtual entre estudiantes.",
      rol: "Dra. Katharina Vogel, rectora de un Gymnasium, objetiva, precisa y exigente",
      turnos: [
        { bot: "Guten Tag! Können Sie mich gut hören? Meine Verbindung ist heute etwas instabil.", es: "¡Buenas tardes! ¿Me escucha bien? Hoy mi conexión está algo inestable.",
          opciones: [
            { t: "Guten Tag, Frau Dr. Vogel. Ich höre Sie sehr gut.", es: "Buenas tardes, doctora Vogel. La escucho muy bien.", ok: true },
            { t: "Guten Tag! Ich höre Sie gut, nur das Bild friert ab und zu ein.", es: "¡Buenas tardes! La escucho bien, solo que la imagen se congela de vez en cuando.", ok: true },
            { t: "Guten Tag! Ja, ich höre dich perfekt.", es: "¡Buenas tardes! Sí, te escucho perfecto.", ok: false,
              fix: "Con una rectora se usa el registro formal: «Ich höre Sie sehr gut»." }
          ],
          clave: ["höre Sie", "Frau Dr.", "Bild"],
          tip: "En Alemania el título académico se usa en el trato formal: «Frau Dr. Vogel»." },
        { bot: "Schön. Würden Sie Ihre Schule bitte kurz vorstellen?", es: "Bien. ¿Podría presentar brevemente su colegio?",
          opciones: [
            { t: "Gern. Das CENTEC ist eine Privatschule in Cali mit Schwerpunkt auf Englisch und MINT.", es: "Con gusto. CENTEC es un colegio privado en Cali con énfasis en inglés y STEAM.", ok: true },
            { t: "Selbstverständlich. Wir sind eine Privatschule in Cali, vom Kindergarten bis zur elften Klasse, mit Schwerpunkt auf MINT und Englisch.", es: "Desde luego. Somos un colegio privado en Cali, de preescolar a grado once, con énfasis en STEAM e inglés.", ok: true },
            { t: "Gern. Obwohl wir sind eine kleine Schule, haben wir einen MINT-Schwerpunkt.", es: "Con gusto. Aunque somos un colegio pequeño, tenemos énfasis en STEAM.", ok: false,
              fix: "Con «obwohl» el verbo va al final: «Obwohl wir eine kleine Schule sind, haben wir...»." }
          ],
          clave: ["Privatschule", "Cali", "Englisch"],
          tip: "STEM/STEAM se dice en alemán «MINT»: Mathematik, Informatik, Naturwissenschaften y Technik." },
        { bot: "Interessant. Welches Ziel verfolgen Sie mit dem Austausch?", es: "Interesante. ¿Qué objetivo persiguen con el intercambio?",
          opciones: [
            { t: "Wir möchten, dass unsere Schüler mit Jugendlichen aus Hamburg Deutsch üben.", es: "Queremos que nuestros estudiantes practiquen alemán con jóvenes de Hamburgo.", ok: true },
            { t: "Unser Ziel ist, dass die Schüler gemeinsame Projekte entwickeln und eine andere Kultur kennenlernen.", es: "Nuestro objetivo es que los estudiantes desarrollen proyectos conjuntos y conozcan otra cultura.", ok: true },
            { t: "Wir möchten, dass unsere Schüler mit Jugendlichen aus Hamburg Deutsch praktizieren.", es: "Queremos que nuestros estudiantes practiquen alemán con jóvenes de Hamburgo.", ok: false,
              fix: "Practicar un idioma es «üben». «Praktizieren» se usa para profesiones (ein Arzt praktiziert) o religiones." }
          ],
          clave: ["Ziel", "üben", "Projekte", "Deutsch"],
          tip: "«Der Austausch» = el intercambio. «Die Partnerschule» = el colegio aliado." },
        { bot: "Verstehe. Wie wollen Sie die Treffen angesichts der Zeitverschiebung organisieren?", es: "Entiendo. ¿Cómo piensan organizar los encuentros teniendo en cuenta la diferencia horaria?",
          opciones: [
            { t: "Der Zeitunterschied beträgt sechs bis sieben Stunden, deshalb schlagen wir Treffen am Morgen in Cali vor.", es: "La diferencia es de seis a siete horas, por eso proponemos encuentros en la mañana de Cali.", ok: true },
            { t: "Da es bei uns sechs bis sieben Stunden früher ist, könnten wir uns um acht Uhr unserer Zeit treffen, also nachmittags bei Ihnen.", es: "Como acá son seis a siete horas más temprano, podríamos reunirnos a las ocho de nuestra hora, es decir, en la tarde para ustedes.", ok: true },
            { t: "Der Unterschied ist sechs Stunden, deshalb wir schlagen Treffen am Morgen vor.", es: "La diferencia es de seis horas, por eso proponemos encuentros en la mañana.", ok: false,
              fix: "«Deshalb» ocupa la posición 1, así que el verbo va justo después: «deshalb schlagen wir ... vor»." }
          ],
          clave: ["sieben Stunden", "schlagen wir", "könnten wir"],
          tip: "Cali está en UTC−5; Hamburgo en UTC+1 en invierno y UTC+2 en verano: 6 o 7 horas de diferencia." },
        { bot: "Das klingt machbar. Wie würden Sie die Wirkung des Projekts evaluieren?", es: "Suena viable. ¿Cómo evaluarían el impacto del proyecto?",
          opciones: [
            { t: "Mit einem Kompetenzraster und einem digitalen Portfolio für jeden Schüler.", es: "Con una rúbrica de competencias y un portafolio digital para cada estudiante.", ok: true },
            { t: "Wir denken an drei Indikatoren: Teilnahme an den Treffen, Endprodukte und eine Zufriedenheitsumfrage.", es: "Pensamos en tres indicadores: participación en los encuentros, productos finales y una encuesta de satisfacción.", ok: true },
            { t: "Mit einer Umfrage und einem Portfolio, was wir am Ende des Jahres analysieren.", es: "Con una encuesta y un portafolio que analizaremos al final del año.", ok: false,
              fix: "El relativo concuerda con el sustantivo: «das Portfolio» → «ein Portfolio, das wir am Ende des Jahres analysieren»." }
          ],
          clave: ["Kompetenzraster", "digitalen", "Indikatoren", "Zufriedenheit"],
          tip: "«Das Kompetenzraster» = rúbrica de competencias. «Die Umfrage» = la encuesta." },
        { bot: "Sehr gut. Haben Sie Ihrerseits noch Fragen, bevor wir zum Ende kommen?", es: "Muy bien. ¿Tiene alguna pregunta antes de terminar?",
          opciones: [
            { t: "Ja: Wann könnten wir beginnen?", es: "Sí: ¿cuándo podríamos empezar?", ok: true },
            { t: "Nur eine: Was wäre der nächste Schritt, um die Partnerschaft offiziell zu machen?", es: "Solo una: ¿cuál sería el siguiente paso para formalizar la alianza?", ok: true },
            { t: "Ja, eine: Wann wir könnten beginnen?", es: "Sí, una: ¿cuándo podríamos empezar?", ok: false,
              fix: "En preguntas con interrogativo, el verbo va en segunda posición: «Wann könnten wir beginnen?»." }
          ],
          clave: ["beginnen", "wann könnten", "Schritt", "Partnerschaft"],
          tip: "«Könnten» (Konjunktiv II) suaviza la pregunta y suena más diplomático que «können»." },
        { bot: "Ich schicke Ihnen den Vertragsentwurf bis Freitag. Können wir für den Zwanzigsten ein weiteres Gespräch ansetzen?", es: "Le envío el borrador del convenio antes del viernes. ¿Podemos programar otra conversación para el veinte?",
          opciones: [
            { t: "Perfekt, der Zwanzigste passt mir sehr gut.", es: "Perfecto, el veinte me queda muy bien.", ok: true },
            { t: "Einverstanden. Ich warte auf den Entwurf und bestätige die Uhrzeit per E-Mail.", es: "De acuerdo. Quedo atento al borrador y confirmo la hora por correo.", ok: true },
            { t: "Einverstanden. Ich warte den Entwurf und bestätige die Uhrzeit per E-Mail.", es: "De acuerdo. Espero el borrador y confirmo la hora por correo.", ok: false,
              fix: "«Warten» necesita la preposición «auf» + acusativo: «Ich warte auf den Entwurf»." }
          ],
          clave: ["passt", "Zwanzigste", "warte auf", "auf den Entwurf"],
          tip: "«Passt Ihnen ...?» = ¿le queda bien...? Es la forma más usada para acordar fechas." }
      ],
      cierre: { bot: "Ausgezeichnet. Es war mir eine Freude. Bis zum Zwanzigsten!", es: "Excelente. Fue un placer. ¡Hasta el veinte!" },
      vocab: [
        { t: "die Zeitverschiebung", es: "la diferencia horaria" },
        { t: "der Austausch", es: "el intercambio" },
        { t: "der Schwerpunkt", es: "el énfasis" },
        { t: "üben", es: "practicar" },
        { t: "der Vertragsentwurf", es: "el borrador del convenio" },
        { t: "ein Gespräch ansetzen", es: "programar una reunión" },
        { t: "warten auf", es: "esperar (algo)" },
        { t: "MINT", es: "STEM (matemáticas, informática, ciencias, técnica)" }
      ]
    },
    {
      id: "de-09", titulo: "Pregunta en un congreso de educación", nivel: "B2",
      tema: "Conferencia o capacitación",
      contexto: "Asistes a una conferencia sobre evaluación formativa en Viena. En la ronda de preguntas levantas la mano y compartes tu experiencia.",
      rol: "Prof. Dr. Martin Hofmann, conferencista, vivaz y provocador",
      turnos: [
        { bot: "So, jetzt haben wir Zeit für Fragen. Ja, Sie dort hinten!", es: "Bueno, ahora tenemos tiempo para preguntas. ¡Sí, usted allá atrás!",
          opciones: [
            { t: "Vielen Dank, Herr Professor Hofmann. Ihr Vortrag hat mir sehr gefallen.", es: "Muchas gracias, profesor Hofmann. Su conferencia me gustó mucho.", ok: true },
            { t: "Guten Tag! Zunächst herzlichen Glückwunsch zu Ihrem inspirierenden Vortrag.", es: "¡Buenas tardes! Primero, felicitaciones por su inspiradora conferencia.", ok: true },
            { t: "Danke! Ihre Konferenz war sehr interessant.", es: "¡Gracias! Su conferencia fue muy interesante.", ok: false,
              fix: "Una charla es «der Vortrag». «Die Konferenz» es el evento completo (congreso) o una reunión de trabajo." }
          ],
          clave: ["Vortrag", "Dank", "Glückwunsch"],
          tip: "«Herzlichen Glückwunsch» = felicitaciones. Se usa para logros, cumpleaños y buenas presentaciones." },
        { bot: "Danke schön! Was ist Ihre Frage?", es: "¡Muchas gracias! ¿Cuál es su pregunta?",
          opciones: [
            { t: "Wie kann man formative Beurteilung in Klassen mit vierzig Schülern umsetzen?", es: "¿Cómo se puede aplicar la evaluación formativa en grupos de cuarenta estudiantes?", ok: true },
            { t: "Ich würde gern wissen, wie man individuelles Feedback gibt, wenn die Klasse sehr groß ist, etwa vierzig Schüler.", es: "Me gustaría saber cómo dar retroalimentación individual cuando el grupo es muy grande, unos cuarenta estudiantes.", ok: true },
            { t: "Wie kann man formative Beurteilung in Klassen mit vierzig Schüler umsetzen?", es: "¿Cómo se puede aplicar la evaluación formativa en grupos de cuarenta estudiantes?", ok: false,
              fix: "Tras «mit» (dativo), el sustantivo plural lleva -n: «mit vierzig Schülern»." }
          ],
          clave: ["Schülern", "Feedback"],
          tip: "«Umsetzen» = llevar a la práctica, implementar. Palabra clave en cualquier capacitación docente." },
        { bot: "Gute Frage. Eine Strategie sind Antwortkarten: Alle zeigen gleichzeitig ihre Antwort. Haben Sie so etwas schon ausprobiert?", es: "Buena pregunta. Una estrategia son las tarjetas de respuesta: todos muestran su respuesta al mismo tiempo. ¿Ya ha probado algo así?",
          opciones: [
            { t: "Ja, ich habe es mit kleinen Whiteboards versucht, und es hat gut funktioniert.", es: "Sí, lo intenté con pequeños tableros blancos y funcionó bien.", ok: true },
            { t: "Noch nicht, aber ich benutze Daumen hoch oder runter, um das Verständnis zu prüfen.", es: "Todavía no, pero uso el pulgar arriba o abajo para verificar la comprensión.", ok: true },
            { t: "Ja, ich habe ausprobiert es mit kleinen Tafeln.", es: "Sí, lo probé con tableros pequeños.", ok: false,
              fix: "En los tiempos compuestos el participio va al final: «Ich habe es mit kleinen Tafeln ausprobiert»." }
          ],
          clave: ["versucht", "Whiteboards", "Daumen", "Verständnis"],
          tip: "Estructura «paréntesis»: el auxiliar en posición 2 y el participio al final; todo lo demás va en medio." },
        { bot: "Genau! Und was machen Sie dann mit diesen Informationen?", es: "¡Exacto! ¿Y qué hace después con esa información?",
          opciones: [
            { t: "Wenn viele Fehler machen, erkläre ich es noch einmal anders.", es: "Si muchos se equivocan, lo explico otra vez de otra manera.", ok: true },
            { t: "Wenn mehr als die Hälfte falsch liegt, greife ich das Thema mit einem neuen Beispiel auf; sonst gehe ich weiter.", es: "Si más de la mitad se equivoca, retomo el tema con un nuevo ejemplo; si no, sigo adelante.", ok: true },
            { t: "Wenn viele Fehler machen, ich erkläre es noch einmal.", es: "Si muchos se equivocan, lo explico otra vez.", ok: false,
              fix: "Cuando la frase empieza con una subordinada, el verbo principal va inmediatamente después: «..., erkläre ich es noch einmal»." }
          ],
          clave: ["erkläre ich", "anders", "Beispiel", "Hälfte"],
          tip: "La subordinada completa cuenta como posición 1: «Wenn ..., [verbo] [sujeto] ...»." },
        { bot: "Perfekt, das ist formative Beurteilung in der Praxis. Und wie dokumentieren Sie das?", es: "Perfecto, eso es evaluación formativa en la práctica. ¿Y cómo lo documenta?",
          opciones: [
            { t: "Ich notiere es nach jeder Stunde in einer einfachen Tabelle.", es: "Lo anoto después de cada clase en una tabla sencilla.", ok: true },
            { t: "Ich habe eine Tabelle auf dem Handy: Ich markiere, wer es verstanden hat und wer Unterstützung braucht.", es: "Tengo una tabla en el celular: marco quién entendió y quién necesita apoyo.", ok: true },
            { t: "Ich notiere es nach jeder Stunde in einem Kalkulationsblatt.", es: "Lo anoto después de cada clase en una hoja de cálculo.", ok: false,
              fix: "En alemán «hoja de cálculo» se dice «die Tabelle» o «die Excel-Tabelle»; «Kalkulationsblatt» no se usa." }
          ],
          clave: ["Tabelle", "notiere", "Unterstützung"],
          tip: "«Die Unterstützung» = el apoyo. «Förderbedarf» = necesidad de apoyo pedagógico." },
        { bot: "Hervorragend. Würden Sie die Tabelle mit den Kolleginnen und Kollegen hier teilen?", es: "Excelente. ¿Compartiría la tabla con las colegas y los colegas aquí presentes?",
          opciones: [
            { t: "Sehr gern! Ich kann den Link in die Konferenzgruppe stellen.", es: "¡Con mucho gusto! Puedo poner el enlace en el grupo del congreso.", ok: true },
            { t: "Natürlich! Wer möchte, dem schicke ich die Vorlage nach der Sitzung per E-Mail.", es: "¡Por supuesto! A quien quiera, le envío la plantilla por correo después de la sesión.", ok: true },
            { t: "Natürlich! Wer will, ich schicke die Vorlage per E-Mail.", es: "¡Por supuesto! Quien quiera, le envío la plantilla por correo.", ok: false,
              fix: "Tras la subordinada con «wer» va el pronombre en el caso correcto y el verbo: «Wer möchte, dem schicke ich die Vorlage»." }
          ],
          clave: ["Link", "sehr gern", "Vorlage", "dem schicke"],
          tip: "«Kolleginnen und Kollegen» es la forma inclusiva habitual en el ámbito educativo alemán." }
      ],
      cierre: { bot: "Wunderbar! Einen großen Applaus für unseren Gast aus Kolumbien!", es: "¡Maravilloso! ¡Un gran aplauso para nuestro invitado de Colombia!" },
      vocab: [
        { t: "der Vortrag", es: "la charla, conferencia" },
        { t: "der Referent / die Referentin", es: "el / la conferencista" },
        { t: "formative Beurteilung", es: "evaluación formativa" },
        { t: "umsetzen", es: "implementar" },
        { t: "die Antwortkarte", es: "la tarjeta de respuesta" },
        { t: "aufgreifen", es: "retomar (un tema)" },
        { t: "die Tabelle", es: "la tabla, hoja de cálculo" },
        { t: "die Vorlage", es: "la plantilla" }
      ]
    },
    {
      id: "de-10", titulo: "Mi historia en un pódcast educativo", nivel: "C1",
      tema: "Contar una experiencia pedagógica",
      contexto: "Te invitaron a un pódcast alemán de educación para contar la experiencia que transformó tu manera de enseñar.",
      rol: "Anna Berger, presentadora del pódcast «Klassenzimmer offen», curiosa y muy cálida",
      turnos: [
        { bot: "Schön, dass du da bist! Wir duzen uns hier im Podcast, okay? Erzähl mal: Warum hast du dich für den Lehrerberuf entschieden?", es: "¡Qué bien que estés aquí! En el pódcast nos tuteamos, ¿vale? Cuéntanos: ¿por qué escogiste la docencia?",
          opciones: [
            { t: "Gern! Ich habe mich dafür entschieden, weil eine Lehrerin mein Leben verändert hat.", es: "¡Con gusto! La escogí porque una profesora me cambió la vida.", ok: true },
            { t: "Klar! Ich glaube, es lag an einer Grundschullehrerin, die an mich geglaubt hat, als es sonst niemand tat.", es: "¡Claro! Creo que fue por una profesora de primaria que creyó en mí cuando nadie más lo hacía.", ok: true },
            { t: "Gern! Ich habe mich dafür entschieden, weil eine Lehrerin mich sehr markiert hat.", es: "¡Con gusto! La escogí porque una profesora me marcó mucho.", ok: false,
              fix: "«Marcar» en sentido emocional es «prägen»: «weil eine Lehrerin mich sehr geprägt hat». «Markieren» es señalar algo físicamente." }
          ],
          clave: ["Leben", "verändert", "geglaubt", "niemand"],
          tip: "«Es lag an ...» = se debió a ... Una forma natural de explicar causas en una narración." },
        { bot: "Wie schön. Und welche Erfahrung hat deine Praxis verändert?", es: "Qué bonito. ¿Y qué experiencia cambió tu práctica?",
          opciones: [
            { t: "Ein Schüler hat mir gesagt, dass er Mathe hasst, weil er Angst vor Fehlern hat.", es: "Un estudiante me dijo que odiaba las Matemáticas porque le daba miedo equivocarse.", ok: true },
            { t: "In einem Jahr hat mir ein Schüler gestanden, dass er panische Angst davor hatte, Fehler zu machen. Das hat mich alles überdenken lassen.", es: "Un año, un estudiante me confesó que le aterraba equivocarse. Eso me hizo replantearlo todo.", ok: true },
            { t: "Ein Schüler hat mir gesagt, dass er Mathe hasst, weil er Angst von Fehlern hat.", es: "Un estudiante me dijo que odiaba las Matemáticas porque le daba miedo equivocarse.", ok: false,
              fix: "«Miedo a/de» se dice «Angst vor» + dativo: «Angst vor Fehlern»." }
          ],
          clave: ["Angst vor", "Angst davor"],
          tip: "«Davor» anticipa una frase con «zu»: «Angst davor haben, Fehler zu machen»." },
        { bot: "Wow. Und was hast du daraufhin gemacht?", es: "Guau. ¿Y qué hiciste a partir de eso?",
          opciones: [
            { t: "Ich habe angefangen, Fehler als Teil des Lernprozesses zu behandeln.", es: "Empecé a tratar los errores como parte del proceso de aprendizaje.", ok: true },
            { t: "Ich habe eine «Fehlerwand» eingeführt: Jede Woche haben wir gemeinsam einen typischen Fehler analysiert und den Denkweg dahinter entdeckt.", es: "Creé un «muro del error»: cada semana analizábamos juntos un error típico y descubríamos el razonamiento detrás.", ok: true },
            { t: "Ich habe angefangen, Fehler als Teil des Lernprozesses behandeln.", es: "Empecé a tratar los errores como parte del proceso de aprendizaje.", ok: false,
              fix: "Tras «anfangen» el infinitivo lleva «zu»: «Ich habe angefangen, Fehler ... zu behandeln»." }
          ],
          clave: ["zu behandeln", "Fehlerwand"],
          tip: "Verbos como anfangen, versuchen o vergessen exigen «zu» + infinitivo." },
        { bot: "Und wie haben die Schülerinnen und Schüler am Anfang reagiert?", es: "¿Y cómo reaccionaron las y los estudiantes al principio?",
          opciones: [
            { t: "Am Anfang waren sie misstrauisch, aber nach und nach haben sie sich geöffnet.", es: "Al principio desconfiaban, pero poco a poco se abrieron.", ok: true },
            { t: "Natürlich gab es Widerstand; manche dachten, es sei ein Trick. Aber nach einem Monat stritten sie sich darum, wer den Fehler der Woche vorstellen durfte.", es: "Claro que hubo resistencia; algunos pensaban que era un truco. Pero al mes peleaban por quién podía presentar el error de la semana.", ok: true },
            { t: "Am Anfang waren sie sehr zurückhaltend, aber dann sind sie sich geöffnet.", es: "Al principio eran muy reservados, pero después se abrieron.", ok: false,
              fix: "Los verbos reflexivos forman el perfecto con «haben»: «dann haben sie sich geöffnet»." }
          ],
          clave: ["haben sie sich", "misstrauisch", "Widerstand", "Trick"],
          tip: "«Es sei ein Trick» usa el Konjunktiv I del discurso indirecto, típico en narraciones cuidadas." },
        { bot: "Und die Ergebnisse? Hast du konkrete Veränderungen bemerkt?", es: "¿Y los resultados? ¿Notaste cambios concretos?",
          opciones: [
            { t: "Ja, die Beteiligung ist gestiegen und die Noten haben sich verbessert.", es: "Sí, la participación aumentó y las notas mejoraron.", ok: true },
            { t: "Auf jeden Fall. Die Schüler fragen mehr, der Klassendurchschnitt ist gestiegen, aber am meisten hat mich ihr Selbstvertrauen beeindruckt.", es: "Definitivamente. Los estudiantes preguntan más, el promedio del grupo subió, pero lo que más me impresionó fue su autoconfianza.", ok: true },
            { t: "Ja, die Beteiligung hat gestiegen und die Noten haben sich verbessert.", es: "Sí, la participación aumentó y las notas mejoraron.", ok: false,
              fix: "«Steigen» expresa un cambio de estado y forma el perfecto con «sein»: «die Beteiligung ist gestiegen»." }
          ],
          clave: ["ist gestiegen", "verbessert", "Selbstvertrauen", "fragen mehr"],
          tip: "Verbos de movimiento o cambio de estado usan «sein»: ist gestiegen, ist gewachsen, ist geworden." },
        { bot: "Welchen Rat würdest du jemandem geben, der gerade anfängt?", es: "¿Qué consejo le darías a alguien que está empezando?",
          opciones: [
            { t: "Hör zuerst deinen Schülern zu.", es: "Primero escucha a tus estudiantes.", ok: true },
            { t: "Hab keine Angst, vor den Schülern Fehler zu machen: Ein Vorbild wirkt mehr als jede Rede.", es: "No tengas miedo de equivocarte delante de los estudiantes: un ejemplo pesa más que cualquier discurso.", ok: true },
            { t: "Hör zuerst deine Schüler zu.", es: "Primero escucha a tus estudiantes.", ok: false,
              fix: "«Zuhören» rige dativo: «Hör deinen Schülern zu»." }
          ],
          clave: ["deinen Schülern", "zuerst", "Vorbild", "keine Angst"],
          tip: "Verbos frecuentes con dativo: helfen, danken, zuhören, gefallen, gehören, antworten." },
        { bot: "Zum Schluss: Wie würdest du deine Philosophie in einem Satz zusammenfassen?", es: "Para terminar: ¿cómo resumirías tu filosofía en una frase?",
          opciones: [
            { t: "Der Fehler hält uns nicht auf: Er lehrt uns.", es: "El error no nos detiene: nos enseña.", ok: true },
            { t: "Der Fehler hält uns nicht auf; er lehrt uns, stärkt uns und lässt uns wachsen.", es: "El error no nos detiene; nos enseña, nos fortalece y nos hace crecer.", ok: true },
            { t: "Der Fehler hält uns nicht auf: Er lernt uns.", es: "El error no nos detiene: nos enseña.", ok: false,
              fix: "«Lernen» es aprender; enseñar es «lehren» o «beibringen»: «Er lehrt uns» / «Er bringt uns etwas bei»." }
          ],
          clave: ["Fehler", "lehrt", "wachsen"],
          tip: "Lernen (aprender) ≠ lehren (enseñar). En el aula: «Ich bringe euch das bei» = «Les enseño esto»." }
      ],
      cierre: { bot: "Was für ein Satz! Danke, dass du deine Geschichte mit uns geteilt hast. Bis zum nächsten Mal!", es: "¡Qué frase! Gracias por compartir tu historia con nosotros. ¡Hasta la próxima!" },
      vocab: [
        { t: "prägen", es: "marcar, dejar huella" },
        { t: "Angst vor", es: "miedo a" },
        { t: "einführen", es: "introducir, implementar" },
        { t: "misstrauisch", es: "desconfiado" },
        { t: "die Beteiligung", es: "la participación" },
        { t: "das Selbstvertrauen", es: "la autoconfianza" },
        { t: "zuhören (+ Dativ)", es: "escuchar a alguien" },
        { t: "lehren / lernen", es: "enseñar / aprender" }
      ]
    },
    {
      id: "de-11", titulo: "Perdido en Leipzig", nivel: "A1",
      tema: "Pedir direcciones",
      contexto: "Estás en Leipzig para un curso de formación docente. Buscas la biblioteca municipal, donde te espera un colega, y le pides ayuda a una señora en la calle.",
      rol: "Frau Schulz, señora jubilada que pasea a su perro, paciente y amable",
      turnos: [
        { bot: "Hallo! Kann ich Ihnen helfen? Sie sehen ein bisschen verloren aus.", es: "¡Hola! ¿Le puedo ayudar? Se ve un poco perdido(a).",
          opciones: [
            { t: "Ja, bitte! Wo ist die Stadtbibliothek?", es: "¡Sí, por favor! ¿Dónde queda la biblioteca municipal?", ok: true },
            { t: "Ja, gern! Entschuldigung, wie komme ich zur Stadtbibliothek?", es: "¡Sí, con gusto! Disculpe, ¿cómo llego a la biblioteca municipal?", ok: true },
            { t: "Ja, bitte! Wie komme ich nach der Stadtbibliothek?", es: "¡Sí, por favor! ¿Cómo llego a la biblioteca municipal?", ok: false,
              fix: "«Nach» se usa con ciudades y países (nach Leipzig). Para ir a un lugar o edificio se usa «zu»: «zur Stadtbibliothek»." }
          ],
          clave: ["wie komme ich", "zur", "Stadtbibliothek"],
          tip: "zu + der = zur (femenino); zu + dem = zum (masculino y neutro): zum Bahnhof, zur Schule." },
        { bot: "Zur Stadtbibliothek? Das ist nicht weit. Sind Sie zu Fuß?", es: "¿A la biblioteca municipal? No queda lejos. ¿Va usted a pie?",
          opciones: [
            { t: "Ja, ich bin zu Fuß.", es: "Sí, voy a pie.", ok: true },
            { t: "Ja, ich gehe zu Fuß. Ich habe hier kein Auto.", es: "Sí, voy caminando. Aquí no tengo carro.", ok: true },
            { t: "Ja, ich gehe mit Fuß.", es: "Sí, voy a pie.", ok: false,
              fix: "«A pie» es «zu Fuß»: «Ich gehe zu Fuß». «Mit» se usa con vehículos: mit dem Bus, mit dem Fahrrad." }
          ],
          clave: ["zu Fuß", "gehe"],
          tip: "Gehen = ir caminando; fahren = ir en un vehículo: «Ich fahre mit der Straßenbahn»." },
        { bot: "Gut. Gehen Sie hier geradeaus bis zur Ampel. Dort biegen Sie links ab.", es: "Bien. Siga derecho hasta el semáforo. Allí gire a la izquierda.",
          opciones: [
            { t: "Geradeaus bis zur Ampel, dann links. Verstanden!", es: "Derecho hasta el semáforo, luego a la izquierda. ¡Entendido!", ok: true },
            { t: "Also: geradeaus bis zur Ampel und dort links abbiegen. Richtig?", es: "O sea: derecho hasta el semáforo y allí girar a la izquierda. ¿Correcto?", ok: true },
            { t: "Also, ich biege an der Ampel links.", es: "O sea, giro a la izquierda en el semáforo.", ok: false,
              fix: "«Abbiegen» es un verbo separable: el prefijo «ab» va al final de la frase: «Ich biege an der Ampel links ab»." }
          ],
          clave: ["geradeaus", "Ampel", "links"],
          tip: "Links = izquierda; rechts = derecha. Truco: «rechts» y «derecha» comparten la r." },
        { bot: "Genau. Dann sehen Sie eine große Kirche. Die Bibliothek ist gegenüber der Kirche.", es: "Exacto. Luego verá una iglesia grande. La biblioteca queda frente a la iglesia.",
          opciones: [
            { t: "Gegenüber der Kirche. Ist das weit von hier?", es: "Frente a la iglesia. ¿Queda lejos de aquí?", ok: true },
            { t: "Ah, gegenüber der Kirche. Wie lange brauche ich zu Fuß?", es: "Ah, frente a la iglesia. ¿Cuánto me demoro a pie?", ok: true },
            { t: "Gegenüber von die Kirche?", es: "¿Frente a la iglesia?", ok: false,
              fix: "«Gegenüber» y «von» rigen dativo: «gegenüber der Kirche» o «gegenüber von der Kirche». Nunca «die» tras una preposición de dativo." }
          ],
          clave: ["gegenüber", "der Kirche", "wie lange"],
          tip: "Preposiciones que siempre llevan dativo: aus, bei, mit, nach, seit, von, zu y gegenüber." },
        { bot: "Ungefähr zehn Minuten. Haben Sie dort einen Termin?", es: "Unos diez minutos. ¿Tiene una cita allá?",
          opciones: [
            { t: "Ja, ich treffe dort einen Kollegen.", es: "Sí, me encuentro allí con un colega.", ok: true },
            { t: "Ja, um drei Uhr treffe ich dort einen Kollegen aus Kolumbien.", es: "Sí, a las tres me encuentro allí con un colega de Colombia.", ok: true },
            { t: "Ja, um drei Uhr ich treffe einen Kollegen.", es: "Sí, a las tres me encuentro con un colega.", ok: false,
              fix: "Si la frase empieza con «um drei Uhr», el verbo va en segunda posición y el sujeto después: «Um drei Uhr treffe ich einen Kollegen»." }
          ],
          clave: ["treffe", "Kollegen", "um drei Uhr"],
          tip: "Regla V2: el verbo conjugado va siempre en segunda posición, aunque la frase empiece con la hora o el lugar." },
        { bot: "Dann haben Sie genug Zeit. Und wenn Sie sich verlaufen, fragen Sie einfach noch mal!", es: "Entonces tiene tiempo suficiente. Y si se pierde, ¡simplemente vuelva a preguntar!",
          opciones: [
            { t: "Vielen Dank für Ihre Hilfe!", es: "¡Muchas gracias por su ayuda!", ok: true },
            { t: "Das mache ich. Vielen Dank, Sie sind sehr freundlich!", es: "Así lo haré. ¡Muchas gracias, es usted muy amable!", ok: true },
            { t: "Danke! Ich bin sehr dankbar mit Ihnen.", es: "¡Gracias! Le estoy muy agradecido(a).", ok: false,
              fix: "«Dankbar» no lleva «mit»: la persona va en dativo: «Ich bin Ihnen sehr dankbar». Más sencillo: «Vielen Dank für Ihre Hilfe»." }
          ],
          clave: ["vielen Dank", "Hilfe", "freundlich"],
          tip: "«Sich verlaufen» = perderse caminando; «sich verfahren» = perderse en carro o bus." }
      ],
      cierre: { bot: "Gern geschehen! Einen schönen Tag noch und viel Spaß in Leipzig!", es: "¡Con mucho gusto! ¡Que tenga un buen día y que disfrute Leipzig!" },
      vocab: [
        { t: "Wie komme ich zum/zur ...?", es: "¿cómo llego a ...?" },
        { t: "geradeaus", es: "derecho, de frente" },
        { t: "links / rechts abbiegen", es: "girar a la izquierda / derecha" },
        { t: "die Ampel", es: "el semáforo" },
        { t: "gegenüber (+ Dativ)", es: "frente a" },
        { t: "zu Fuß", es: "a pie" },
        { t: "sich verlaufen", es: "perderse (caminando)" },
        { t: "Gern geschehen!", es: "¡con mucho gusto! (respuesta a «gracias»)" }
      ]
    },
    {
      id: "de-12", titulo: "Cena sin carne y sin nueces", nivel: "A2",
      tema: "Restaurante con restricciones alimentarias",
      contexto: "Cenas con colegas alemanes en un restaurante de Múnich. Eres vegetariano(a) y alérgico(a) a las nueces, y necesitas explicárselo al mesero.",
      rol: "Herr Weber, mesero de un restaurante bávaro, atento y servicial",
      turnos: [
        { bot: "Guten Abend! Haben Sie schon gewählt?", es: "¡Buenas noches! ¿Ya eligió?",
          opciones: [
            { t: "Noch nicht. Haben Sie vegetarische Gerichte?", es: "Todavía no. ¿Tienen platos vegetarianos?", ok: true },
            { t: "Fast. Aber zuerst eine Frage: Welche Gerichte sind vegetarisch?", es: "Casi. Pero primero una pregunta: ¿qué platos son vegetarianos?", ok: true },
            { t: "Noch nicht. Haben Sie vegetarisch Gerichte?", es: "Todavía no. ¿Tienen platos vegetarianos?", ok: false,
              fix: "Delante del sustantivo, el adjetivo lleva terminación: «vegetarische Gerichte». Sin terminación solo después de «sein»: «Das Gericht ist vegetarisch»." }
          ],
          clave: ["vegetarische", "Gerichte", "Frage"],
          tip: "«Das Gericht» = el plato (de comida). «Der Teller» = el plato (el objeto)." },
        { bot: "Natürlich. Wir haben Käsespätzle und eine Gemüsesuppe. Sie essen also kein Fleisch?", es: "Claro. Tenemos Käsespätzle (pasta con queso) y una sopa de verduras. ¿Entonces usted no come carne?",
          opciones: [
            { t: "Nein, ich esse kein Fleisch. Ich bin Vegetarier.", es: "No, no como carne. Soy vegetariano.", ok: true },
            { t: "Genau, ich bin Vegetarierin. Fisch esse ich auch nicht.", es: "Exacto, soy vegetariana. Tampoco como pescado.", ok: true },
            { t: "Nein, ich esse nicht Fleisch.", es: "No, no como carne.", ok: false,
              fix: "Para negar un sustantivo sin artículo se usa «kein»: «Ich esse kein Fleisch»." }
          ],
          clave: ["kein Fleisch", "Vegetarier"],
          tip: "«Kein» niega sustantivos (kein Fleisch); «nicht» niega verbos, adjetivos y frases (Ich esse nicht gern scharf)." },
        { bot: "Kein Problem. Gibt es noch etwas, worauf die Küche achten muss?", es: "No hay problema. ¿Hay algo más que la cocina deba tener en cuenta?",
          opciones: [
            { t: "Ja, ich bin allergisch gegen Nüsse.", es: "Sí, soy alérgico(a) a las nueces.", ok: true },
            { t: "Ja, leider: Ich habe eine Nussallergie. Sind in den Käsespätzle Nüsse?", es: "Sí, lamentablemente: tengo alergia a las nueces. ¿Los Käsespätzle llevan nueces?", ok: true },
            { t: "Ja, ich bin allergisch zu Nüssen.", es: "Sí, soy alérgico(a) a las nueces.", ok: false,
              fix: "Se dice «allergisch gegen» + acusativo: «Ich bin allergisch gegen Nüsse»." }
          ],
          clave: ["allergisch gegen", "Nüsse", "Allergie"],
          tip: "Si tienes alergias, pregunta sin pena: «Gibt es eine Allergenliste?» (¿tienen una lista de alérgenos?)." },
        { bot: "Ich frage in der Küche nach ... So, die Käsespätzle sind ohne Nüsse. Möchten Sie die?", es: "Voy a preguntar en la cocina... Listo, los Käsespätzle no llevan nueces. ¿Los quiere?",
          opciones: [
            { t: "Ja, gern. Die Käsespätzle, bitte.", es: "Sí, con gusto. Los Käsespätzle, por favor.", ok: true },
            { t: "Perfekt, dann nehme ich die Käsespätzle und einen kleinen Salat dazu.", es: "Perfecto, entonces pido los Käsespätzle y una ensalada pequeña para acompañar.", ok: true },
            { t: "Ja, ich nehme die Käsespätzle mit einen Salat.", es: "Sí, pido los Käsespätzle con una ensalada.", ok: false,
              fix: "«Mit» siempre rige dativo: «mit einem Salat»." }
          ],
          clave: ["nehme", "Käsespätzle", "Salat"],
          tip: "Para pedir: «Ich nehme ...» o «Ich hätte gern ...». Ambas suenan más amables que «Ich will ...»." },
        { bot: "Sehr gern. Und was möchten Sie trinken?", es: "Con mucho gusto. ¿Y qué desea tomar?",
          opciones: [
            { t: "Ein Mineralwasser, bitte.", es: "Un agua con gas, por favor.", ok: true },
            { t: "Ich hätte gern eine große Apfelschorle, bitte.", es: "Me gustaría una Apfelschorle grande, por favor.", ok: true },
            { t: "Ich möchte ein Wasser mit Gas, bitte.", es: "Quisiera un agua con gas, por favor.", ok: false,
              fix: "Agua con gas es «Mineralwasser» o «Wasser mit Kohlensäure»; «Gas» suena a gas de cocina. Sin gas: «stilles Wasser»." }
          ],
          clave: ["Mineralwasser", "hätte gern", "bitte"],
          tip: "«Apfelschorle» = jugo de manzana mezclado con agua con gas, muy popular en Alemania." },
        { bot: "So, ich räume ab. Hat es Ihnen geschmeckt?", es: "Bueno, recojo los platos. ¿Le gustó la comida?",
          opciones: [
            { t: "Ja, sehr gut, danke!", es: "¡Sí, muy rica, gracias!", ok: true },
            { t: "Ja, es war ausgezeichnet. Und danke, dass Sie in der Küche nachgefragt haben!", es: "Sí, estuvo excelente. ¡Y gracias por preguntar en la cocina!", ok: true },
            { t: "Ja, ich habe sehr gut geschmeckt.", es: "Sí, me supo muy bien.", ok: false,
              fix: "«Schmecken» funciona como «gustar»: la comida es el sujeto y tú vas en dativo: «Es hat mir sehr gut geschmeckt»." }
          ],
          clave: ["geschmeckt", "sehr gut", "danke"],
          tip: "«Hat es geschmeckt?» es la pregunta típica del mesero cuando recoge los platos." },
        { bot: "Das freut mich. Zahlen Sie zusammen oder getrennt?", es: "Me alegra. ¿Pagan juntos o por separado?",
          opciones: [
            { t: "Getrennt, bitte.", es: "Por separado, por favor.", ok: true },
            { t: "Getrennt, bitte. Kann ich mit Karte zahlen?", es: "Por separado, por favor. ¿Puedo pagar con tarjeta?", ok: true },
            { t: "Getrennt, bitte. Ich möchte zahlen mit Karte.", es: "Por separado, por favor. Quiero pagar con tarjeta.", ok: false,
              fix: "Con un verbo modal, el infinitivo va al final: «Ich möchte mit Karte zahlen»." }
          ],
          clave: ["getrennt", "Karte", "zahlen"],
          tip: "En Alemania es normal pagar «getrennt» (cada uno lo suyo). La propina se suele dar redondeando al pagar." }
      ],
      cierre: { bot: "Sehr gern. Vielen Dank und noch einen schönen Abend!", es: "Con mucho gusto. ¡Muchas gracias y que tenga una linda noche!" },
      vocab: [
        { t: "die Speisekarte", es: "la carta, el menú" },
        { t: "das Gericht", es: "el plato (de comida)" },
        { t: "vegetarisch", es: "vegetariano" },
        { t: "allergisch gegen", es: "alérgico a" },
        { t: "Ich hätte gern ...", es: "me gustaría ..., quisiera ..." },
        { t: "Hat es geschmeckt?", es: "¿le gustó la comida?" },
        { t: "getrennt / zusammen zahlen", es: "pagar por separado / juntos" },
        { t: "die Rechnung", es: "la cuenta" }
      ]
    },
    {
      id: "de-13", titulo: "Cambiar dólares en Fráncfort", nivel: "A2",
      tema: "Banco o casa de cambio",
      contexto: "Acabas de llegar a Fráncfort para una pasantía docente y necesitas cambiar dólares a euros en una casa de cambio del centro.",
      rol: "Frau Nowak, cajera de la casa de cambio, rápida y precisa",
      turnos: [
        { bot: "Guten Tag. Was kann ich für Sie tun?", es: "Buenas tardes. ¿En qué le puedo servir?",
          opciones: [
            { t: "Guten Tag. Ich möchte Dollar in Euro wechseln.", es: "Buenas tardes. Quisiera cambiar dólares a euros.", ok: true },
            { t: "Guten Tag. Ich möchte gern US-Dollar in Euro umtauschen, bitte.", es: "Buenas tardes. Quisiera cambiar dólares estadounidenses a euros, por favor.", ok: true },
            { t: "Guten Tag. Ich möchte Dollar zu Euro wechseln.", es: "Buenas tardes. Quisiera cambiar dólares a euros.", ok: false,
              fix: "Se cambia una moneda «in» otra (acusativo): «Dollar in Euro wechseln»." }
          ],
          clave: ["wechseln", "Dollar", "in Euro"],
          tip: "«Geld wechseln» = cambiar dinero. «Das Wechselgeld» = las vueltas (el cambio que te devuelven)." },
        { bot: "Gern. Wie viel möchten Sie wechseln?", es: "Con gusto. ¿Cuánto quiere cambiar?",
          opciones: [
            { t: "Dreihundert Dollar, bitte.", es: "Trescientos dólares, por favor.", ok: true },
            { t: "Dreihundert Dollar. Wie ist der Kurs heute?", es: "Trescientos dólares. ¿Cómo está la tasa hoy?", ok: true },
            { t: "Dreihundert Dollars, bitte.", es: "Trescientos dólares, por favor.", ok: false,
              fix: "Con una cantidad, las monedas no llevan plural en alemán: «dreihundert Dollar», «zwanzig Euro»." }
          ],
          clave: ["dreihundert", "Dollar", "Kurs"],
          tip: "«Der Wechselkurs» o simplemente «der Kurs» = la tasa de cambio." },
        { bot: "Der aktuelle Kurs steht dort auf der Anzeige. Dazu kommt eine kleine Gebühr. Ist das in Ordnung?", es: "La tasa actual aparece allí en la pantalla. Además se cobra una pequeña comisión. ¿Le parece bien?",
          opciones: [
            { t: "Ja, das ist in Ordnung.", es: "Sí, está bien.", ok: true },
            { t: "Wie hoch ist die Gebühr genau? Dann entscheide ich.", es: "¿De cuánto es exactamente la comisión? Entonces decido.", ok: true },
            { t: "Wie hoch ist die Gebühr? Dann ich entscheide.", es: "¿De cuánto es la comisión? Entonces decido.", ok: false,
              fix: "«Dann» ocupa la primera posición, así que el verbo va justo después: «Dann entscheide ich»." }
          ],
          clave: ["in Ordnung", "Gebühr", "wie hoch"],
          tip: "«Wie hoch ist ...?» sirve para preguntar por tarifas, precios y sueldos: «Wie hoch ist die Gebühr?»." },
        { bot: "Die Gebühr steht auch auf der Anzeige, direkt unter dem Kurs. Möchten Sie große oder kleine Scheine?", es: "La comisión también aparece en la pantalla, justo debajo de la tasa. ¿Quiere billetes grandes o pequeños?",
          opciones: [
            { t: "Kleine Scheine, bitte.", es: "Billetes pequeños, por favor.", ok: true },
            { t: "Lieber kleine Scheine, bitte, und ein paar Münzen für den Bus.", es: "Mejor billetes pequeños, por favor, y unas monedas para el bus.", ok: true },
            { t: "Kleine Rechnungen, bitte.", es: "Billetes pequeños, por favor.", ok: false,
              fix: "«Die Rechnung» es la factura o la cuenta (calco del inglés «bills»). Los billetes son «die Scheine» o «die Geldscheine»." }
          ],
          clave: ["kleine Scheine", "Münzen", "bitte"],
          tip: "«Der Schein» = el billete; «die Münze» = la moneda; «das Kleingeld» = el sencillo." },
        { bot: "Hier, bitte. Zählen Sie bitte nach. Stimmt alles?", es: "Aquí tiene. Por favor, cuéntelo. ¿Está todo bien?",
          opciones: [
            { t: "Ja, es stimmt alles. Danke.", es: "Sí, todo está bien. Gracias.", ok: true },
            { t: "Einen Moment ... ja, alles stimmt. Ich brauche bitte eine Quittung für meine Schule.", es: "Un momento... sí, todo está bien. Necesito un recibo para mi colegio, por favor.", ok: true },
            { t: "Ja, alles stimmt. Ich brauche eine Quittung, weil ich muss die Kosten abrechnen.", es: "Sí, todo está bien. Necesito un recibo porque debo legalizar los gastos.", ok: false,
              fix: "Con «weil» el verbo conjugado va al final: «weil ich die Kosten abrechnen muss»." }
          ],
          clave: ["stimmt", "Quittung"],
          tip: "«Nachzählen» = volver a contar. Hazlo siempre en la ventanilla, antes de irte." },
        { bot: "Hier ist Ihre Quittung. Kann ich sonst noch etwas für Sie tun?", es: "Aquí está su recibo. ¿Le puedo ayudar en algo más?",
          opciones: [
            { t: "Nein, danke. Das ist alles.", es: "No, gracias. Eso es todo.", ok: true },
            { t: "Ja, eine letzte Frage: Wo ist hier der nächste Geldautomat?", es: "Sí, una última pregunta: ¿dónde queda el cajero automático más cercano?", ok: true },
            { t: "Nein, danke. Das ist alle.", es: "No, gracias. Eso es todo.", ok: false,
              fix: "«Todo» es «alles»: «Das ist alles». «Alle» significa «todos» (personas o cosas que se cuentan); en lenguaje coloquial, «alle sein» es «agotarse»." }
          ],
          clave: ["das ist alles", "Geldautomat"],
          tip: "«Der Geldautomat» = el cajero automático. «Geld abheben» = retirar dinero." }
      ],
      cierre: { bot: "Gern. Auf Wiedersehen und eine schöne Zeit in Frankfurt!", es: "Con gusto. ¡Hasta luego y que le vaya muy bien en Fráncfort!" },
      vocab: [
        { t: "Geld wechseln / umtauschen", es: "cambiar dinero" },
        { t: "der Wechselkurs", es: "la tasa de cambio" },
        { t: "die Gebühr", es: "la comisión, la tarifa" },
        { t: "der Schein", es: "el billete" },
        { t: "die Münze", es: "la moneda" },
        { t: "die Quittung", es: "el recibo" },
        { t: "nachzählen", es: "volver a contar" },
        { t: "der Geldautomat", es: "el cajero automático" }
      ]
    },
    {
      id: "de-14", titulo: "Donde el médico en Colonia", nivel: "A2",
      tema: "Cita médica",
      contexto: "Durante tu intercambio en Colonia amaneces enfermo(a) y vas al consultorio de un médico general para que te atienda.",
      rol: "Dr. Lukas Hartmann, médico general, tranquilo y muy claro",
      turnos: [
        { bot: "Guten Tag, nehmen Sie bitte Platz. Was fehlt Ihnen denn?", es: "Buenos días, siéntese, por favor. ¿Qué le pasa?",
          opciones: [
            { t: "Ich habe Halsschmerzen und Fieber.", es: "Tengo dolor de garganta y fiebre.", ok: true },
            { t: "Mir tut der Hals sehr weh, und ich glaube, ich habe Fieber.", es: "Me duele mucho la garganta y creo que tengo fiebre.", ok: true },
            { t: "Ich habe Schmerzen von Hals und Fieber.", es: "Tengo dolor de garganta y fiebre.", ok: false,
              fix: "Los dolores se forman con palabras compuestas: «Halsschmerzen», «Kopfschmerzen», «Bauchschmerzen»." }
          ],
          clave: ["Halsschmerzen", "Fieber", "tut weh"],
          tip: "«Was fehlt Ihnen?» es la pregunta típica del médico; literalmente: «¿Qué le falta?»." },
        { bot: "Seit wann haben Sie die Beschwerden?", es: "¿Desde cuándo tiene las molestias?",
          opciones: [
            { t: "Seit zwei Tagen.", es: "Desde hace dos días.", ok: true },
            { t: "Seit vorgestern. Gestern Abend ist es schlimmer geworden.", es: "Desde antier. Anoche empeoró.", ok: true },
            { t: "Seit zwei Tage.", es: "Desde hace dos días.", ok: false,
              fix: "Tras «seit» va dativo, y el dativo plural añade -n: «seit zwei Tagen»." }
          ],
          clave: ["seit", "Tagen", "schlimmer"],
          tip: "«Die Beschwerden» en el médico son las molestias o síntomas, no «quejas»." },
        { bot: "Haben Sie Fieber gemessen?", es: "¿Se tomó la temperatura?",
          opciones: [
            { t: "Ja, heute Morgen hatte ich 38,5 Grad.", es: "Sí, esta mañana tenía 38,5 grados.", ok: true },
            { t: "Ja, ich habe heute Morgen Fieber gemessen: 38,5 Grad. Und ich bin sehr müde.", es: "Sí, me tomé la temperatura esta mañana: 38,5 grados. Y estoy muy cansado(a).", ok: true },
            { t: "Ja, ich bin heute Morgen Fieber gemessen.", es: "Sí, me tomé la temperatura esta mañana.", ok: false,
              fix: "«Messen» forma el perfecto con «haben»: «Ich habe heute Morgen Fieber gemessen»." }
          ],
          clave: ["Grad", "gemessen", "müde"],
          tip: "El perfecto con «sein» es solo para movimiento o cambio de estado (gehen, fahren, werden); casi todo lo demás va con «haben»." },
        { bot: "Machen Sie bitte den Mund auf ... Der Hals ist stark gerötet. Nehmen Sie im Moment Medikamente?", es: "Abra la boca, por favor... La garganta está muy roja. ¿Está tomando medicamentos en este momento?",
          opciones: [
            { t: "Nein, ich nehme keine Medikamente.", es: "No, no tomo medicamentos.", ok: true },
            { t: "Nur ein Schmerzmittel von zu Hause, aber ich weiß den Namen auf Deutsch nicht.", es: "Solo un analgésico que traje de casa, pero no sé el nombre en alemán.", ok: true },
            { t: "Nein, ich nehme keine Drogen.", es: "No, no tomo medicamentos.", ok: false,
              fix: "Falso amigo: «Drogen» son drogas ilícitas. Medicamentos = «Medikamente» o «Arzneimittel»." }
          ],
          clave: ["keine Medikamente", "Schmerzmittel"],
          tip: "Los medicamentos se compran en la «Apotheke». La «Drogerie» vende productos de aseo y cosméticos, no remedios." },
        { bot: "Gut. Ich verschreibe Ihnen etwas gegen die Schmerzen. Sind Sie gegen ein Medikament allergisch?", es: "Bien. Le voy a formular algo para el dolor. ¿Es alérgico(a) a algún medicamento?",
          opciones: [
            { t: "Nein, ich habe keine Allergien.", es: "No, no tengo alergias.", ok: true },
            { t: "Nein, soweit ich weiß, bin ich gegen nichts allergisch.", es: "No, que yo sepa no soy alérgico(a) a nada.", ok: true },
            { t: "Nein, ich bin nicht allergisch zu nichts.", es: "No, no soy alérgico(a) a nada.", ok: false,
              fix: "Se dice «allergisch gegen», y el alemán no usa doble negación: «Ich bin gegen nichts allergisch»." }
          ],
          clave: ["allergisch", "gegen nichts", "keine Allergien"],
          tip: "En alemán una sola negación basta: «Ich habe nichts gesagt» (no dije nada), nunca «nicht nichts»." },
        { bot: "Hier ist Ihr Rezept. Bleiben Sie bitte zwei, drei Tage zu Hause. Brauchen Sie eine Krankmeldung für die Schule?", es: "Aquí está su fórmula. Quédese en casa dos o tres días, por favor. ¿Necesita una incapacidad para el colegio?",
          opciones: [
            { t: "Ja, bitte. Die Schule braucht eine.", es: "Sí, por favor. El colegio necesita una.", ok: true },
            { t: "Ja, bitte. Ich muss sie heute noch der Schulleitung schicken.", es: "Sí, por favor. Tengo que enviársela hoy mismo a la dirección del colegio.", ok: true },
            { t: "Ja, bitte. Ich muss schicken sie der Schulleitung.", es: "Sí, por favor. Tengo que enviársela a la dirección.", ok: false,
              fix: "Con un verbo modal, el infinitivo va al final: «Ich muss sie der Schulleitung schicken»." }
          ],
          clave: ["Krankmeldung", "Schulleitung", "schicken"],
          tip: "«Die Krankmeldung» es el certificado médico de incapacidad que se entrega al empleador." },
        { bot: "Dann bekommen Sie sie gleich vorne an der Anmeldung. Gute Besserung!", es: "Entonces se la entregan ahora mismo en la recepción. ¡Que se mejore!",
          opciones: [
            { t: "Vielen Dank, Herr Doktor!", es: "¡Muchas gracias, doctor!", ok: true },
            { t: "Danke schön, Herr Dr. Hartmann. Auf Wiedersehen!", es: "Muchas gracias, doctor Hartmann. ¡Hasta luego!", ok: true },
            { t: "Danke, Herr Hartmann. Gute Besserung auch!", es: "Gracias, señor Hartmann. ¡Que se mejore usted también!", ok: false,
              fix: "«Gute Besserung» se le desea al enfermo; el paciente solo responde «Danke». Y al médico se le dice «Herr Doktor» o «Herr Dr. Hartmann»." }
          ],
          clave: ["vielen Dank", "Herr Doktor", "Wiedersehen"],
          tip: "«Gute Besserung!» = ¡que te mejores! Se le dice a cualquier persona enferma." }
      ],
      cierre: { bot: "Auf Wiedersehen! Und trinken Sie viel Tee mit Honig.", es: "¡Hasta luego! Y tome mucho té con miel." },
      vocab: [
        { t: "Was fehlt Ihnen?", es: "¿qué le pasa?" },
        { t: "die Halsschmerzen", es: "el dolor de garganta" },
        { t: "das Fieber", es: "la fiebre" },
        { t: "die Beschwerden", es: "las molestias, los síntomas" },
        { t: "das Rezept", es: "la fórmula médica" },
        { t: "die Apotheke", es: "la farmacia, droguería" },
        { t: "die Krankmeldung", es: "la incapacidad médica" },
        { t: "Gute Besserung!", es: "¡que se mejore!" }
      ]
    },
    {
      id: "de-15", titulo: "¡Suena la alarma!", nivel: "A2",
      tema: "Simulacro de evacuación",
      contexto: "Das clase a 4.º grado en una escuela de Stuttgart durante tu intercambio. Suena la alarma de un simulacro y una niña nerviosa te hace preguntas mientras organizas al grupo.",
      rol: "Mia, 9 años, se asusta con el ruido de la alarma",
      turnos: [
        { bot: "Was ist das für ein Lärm? Brennt es?", es: "¿Qué es ese ruido? ¿Hay un incendio?",
          opciones: [
            { t: "Keine Angst, Mia. Das ist nur eine Übung.", es: "No tengas miedo, Mia. Es solo un simulacro.", ok: true },
            { t: "Keine Angst, Mia. Das ist ein Probealarm: Wir üben, was wir bei einem Feuer machen.", es: "No tengas miedo, Mia. Es una alarma de prueba: practicamos lo que hacemos en caso de incendio.", ok: true },
            { t: "Keine Angst, Mia. Das ist nur ein Simulakrum.", es: "No tengas miedo, Mia. Es solo un simulacro.", ok: false,
              fix: "Un simulacro se llama «Übung», «Probealarm» o «Räumungsübung». «Simulakrum» no se usa en este sentido." }
          ],
          clave: ["keine Angst", "Übung", "Probealarm"],
          tip: "Con un niño se usa «du»; con todo el grupo, «ihr»: «Habt keine Angst!»." },
        { bot: "Okay ... Was müssen wir jetzt machen?", es: "Bueno... ¿Qué tenemos que hacer ahora?",
          opciones: [
            { t: "Wir lassen alles liegen und gehen ruhig zur Tür.", es: "Dejamos todo y vamos con calma hacia la puerta.", ok: true },
            { t: "Alle lassen ihre Sachen liegen und stellen sich in einer Reihe an der Tür auf.", es: "Todos dejan sus cosas y se forman en fila en la puerta.", ok: true },
            { t: "Wir lassen alles liegen und gehen zu die Tür.", es: "Dejamos todo y vamos hacia la puerta.", ok: false,
              fix: "«Zu» siempre rige dativo: zu + der = «zur Tür»." }
          ],
          clave: ["liegen", "zur Tür", "Reihe"],
          tip: "En un simulacro no se recogen maletas ni objetos: «Alles liegen lassen!» (¡dejen todo!)." },
        { bot: "Darf ich meine Jacke mitnehmen? Draußen ist es kalt.", es: "¿Puedo llevarme mi chaqueta? Afuera hace frío.",
          opciones: [
            { t: "Ja, die Jacke darfst du schnell anziehen.", es: "Sí, puedes ponerte la chaqueta rápido.", ok: true },
            { t: "Nur wenn sie direkt an deinem Stuhl hängt. Sonst gehen wir ohne Jacke.", es: "Solo si está colgada en tu silla. Si no, salimos sin chaqueta.", ok: true },
            { t: "Ja, du kannst deine Jacke mitnimmst.", es: "Sí, puedes llevarte tu chaqueta.", ok: false,
              fix: "Después de un verbo modal, el otro verbo va en infinitivo al final: «Du kannst deine Jacke mitnehmen»." }
          ],
          clave: ["Jacke", "darfst", "schnell"],
          tip: "«Mitnehmen» es separable: «Ich nehme die Jacke mit». Con un modal queda unido al final: «Ich darf sie mitnehmen»." },
        { bot: "Müssen wir rennen?", es: "¿Tenemos que correr?",
          opciones: [
            { t: "Nein, nicht rennen. Wir gehen zügig, aber ruhig.", es: "No, no hay que correr. Caminamos rápido, pero con calma.", ok: true },
            { t: "Nein. Wir gehen schnell, aber wir rennen nicht und wir schubsen niemanden.", es: "No. Caminamos rápido, pero no corremos ni empujamos a nadie.", ok: true },
            { t: "Nein, wir gehen schnell und wir nicht rennen.", es: "No, caminamos rápido y no corremos.", ok: false,
              fix: "«Nicht» va después del verbo conjugado: «wir rennen nicht»." }
          ],
          clave: ["nicht rennen", "ruhig", "zügig"],
          tip: "«Zügig» = rápido pero ordenado. Es la palabra clave de los simulacros escolares." },
        { bot: "Und wohin gehen wir?", es: "¿Y para dónde vamos?",
          opciones: [
            { t: "Zum Sammelplatz auf dem Schulhof.", es: "Al punto de encuentro en el patio.", ok: true },
            { t: "Wir gehen die Treppe hinunter zum Sammelplatz. Den Aufzug benutzen wir nie bei Alarm.", es: "Bajamos por la escalera hasta el punto de encuentro. Nunca usamos el ascensor cuando hay alarma.", ok: true },
            { t: "Wir gehen zu der Sammelplatz.", es: "Vamos al punto de encuentro.", ok: false,
              fix: "«Der Sammelplatz» es masculino, así que en dativo es «dem»: zu + dem = «zum Sammelplatz»." }
          ],
          clave: ["Sammelplatz", "Treppe", "Schulhof"],
          tip: "En una evacuación nunca se usa el ascensor (der Aufzug), siempre la escalera (die Treppe)." },
        { bot: "Wir sind draußen! Und was jetzt?", es: "¡Ya estamos afuera! ¿Y ahora qué?",
          opciones: [
            { t: "Jetzt zähle ich, ob alle da sind.", es: "Ahora cuento si están todos.", ok: true },
            { t: "Jetzt bleiben alle zusammen, und ich zähle, ob alle da sind. Du hast das super gemacht, Mia!", es: "Ahora todos se quedan juntos y yo cuento si están todos. ¡Lo hiciste súper bien, Mia!", ok: true },
            { t: "Jetzt zähle ich, ob alle sind da.", es: "Ahora cuento si están todos.", ok: false,
              fix: "Con «ob» se forma una subordinada y el verbo va al final: «ob alle da sind»." }
          ],
          clave: ["zähle", "ob alle da sind", "super gemacht"],
          tip: "«Ob» = si (pregunta indirecta); «wenn» = si (condición): «Ich weiß nicht, ob er kommt»." }
      ],
      cierre: { bot: "Puh, das war gar nicht so schlimm! Beim nächsten Mal habe ich keine Angst mehr.", es: "¡Uf, no fue tan terrible! La próxima vez ya no voy a tener miedo." },
      vocab: [
        { t: "der Probealarm / die Übung", es: "el simulacro" },
        { t: "Keine Angst!", es: "¡no tengas miedo!" },
        { t: "alles liegen lassen", es: "dejar todo" },
        { t: "zügig", es: "rápido y ordenado" },
        { t: "der Sammelplatz", es: "el punto de encuentro" },
        { t: "die Treppe", es: "la escalera" },
        { t: "der Aufzug", es: "el ascensor" },
        { t: "rennen", es: "correr" }
      ]
    },
    {
      id: "de-16", titulo: "¡Lo logramos! Celebración en clase", nivel: "A2",
      tema: "Celebrar logros con estudiantes",
      contexto: "En tu intercambio en Bremen, tu grupo de 6.º grado acaba de terminar un proyecto difícil. Celebras el logro con la clase y planean juntos una pequeña fiesta.",
      rol: "Ben, 12 años, alegre y vocero del curso",
      turnos: [
        { bot: "Wir haben es geschafft! Unser Projekt ist fertig!", es: "¡Lo logramos! ¡Nuestro proyecto está terminado!",
          opciones: [
            { t: "Ja, ihr habt es geschafft! Ich bin sehr stolz auf euch.", es: "¡Sí, lo lograron! Estoy muy orgulloso(a) de ustedes.", ok: true },
            { t: "Herzlichen Glückwunsch! Ihr habt sehr hart gearbeitet, und das Ergebnis ist toll.", es: "¡Felicitaciones! Trabajaron muy duro y el resultado es genial.", ok: true },
            { t: "Ja! Ich bin sehr stolz von euch.", es: "¡Sí! Estoy muy orgulloso(a) de ustedes.", ok: false,
              fix: "«Stolz» va con «auf» + acusativo: «Ich bin stolz auf euch»." }
          ],
          clave: ["geschafft", "stolz auf euch", "Glückwunsch"],
          tip: "«Es schaffen» = lograrlo. «Wir haben es geschafft!» es la frase típica para celebrar." },
        { bot: "Was hat Ihnen am besten gefallen?", es: "¿Qué fue lo que más le gustó?",
          opciones: [
            { t: "Mir hat eure Teamarbeit am besten gefallen.", es: "Lo que más me gustó fue su trabajo en equipo.", ok: true },
            { t: "Am besten hat mir gefallen, wie ihr euch gegenseitig geholfen habt.", es: "Lo que más me gustó fue cómo se ayudaron unos a otros.", ok: true },
            { t: "Mir hat eure Teamarbeit am besten gefallt.", es: "Lo que más me gustó fue su trabajo en equipo.", ok: false,
              fix: "El participio de «gefallen» es irregular y se parece al infinitivo: «Mir hat eure Teamarbeit gefallen»." }
          ],
          clave: ["gefallen", "Teamarbeit", "geholfen"],
          tip: "En Alemania los estudiantes tratan de «Sie» al docente, y el docente los tutea a ellos." },
        { bot: "Können wir eine Party machen?", es: "¿Podemos hacer una fiesta?",
          opciones: [
            { t: "Ja, am Freitag machen wir eine kleine Feier.", es: "Sí, el viernes hacemos una pequeña celebración.", ok: true },
            { t: "Gute Idee! Am Freitag feiern wir in der letzten Stunde, und jeder bringt etwas mit.", es: "¡Buena idea! El viernes celebramos en la última hora y cada uno trae algo.", ok: true },
            { t: "Ja, wir machen eine Party in Freitag.", es: "Sí, hacemos una fiesta el viernes.", ok: false,
              fix: "Con los días de la semana se usa «am»: «am Freitag»." }
          ],
          clave: ["am Freitag", "Feier", "feiern"],
          tip: "Días, fechas y partes del día van con «am» (am Montag, am Abend); las horas, con «um» (um zehn Uhr)." },
        { bot: "Und bekommen wir auch Urkunden?", es: "¿Y también nos dan diplomas?",
          opciones: [
            { t: "Ja, jeder bekommt eine Urkunde.", es: "Sí, cada uno recibe un diploma.", ok: true },
            { t: "Ja, jede Gruppe bekommt eine Urkunde, und eure Plakate hängen wir im Flur auf.", es: "Sí, cada grupo recibe un diploma, y sus carteleras las colgamos en el pasillo.", ok: true },
            { t: "Ja, jeder bekommt ein Diplom.", es: "Sí, cada uno recibe un diploma.", ok: false,
              fix: "Falso amigo: «das Diplom» es un título universitario. Un diploma de reconocimiento en el colegio es «die Urkunde»." }
          ],
          clave: ["Urkunde", "bekommt", "Plakate"],
          tip: "Ojo: «bekommen» significa recibir, no «volverse». «Ich bekomme eine Urkunde» = recibo un diploma." },
        { bot: "Können wir auch die Eltern einladen?", es: "¿Podemos invitar también a los papás?",
          opciones: [
            { t: "Ja, wir schreiben zusammen eine Einladung.", es: "Sí, escribimos juntos una invitación.", ok: true },
            { t: "Klar! Wir laden die Eltern ein und zeigen ihnen unsere Ergebnisse.", es: "¡Claro! Invitamos a los papás y les mostramos nuestros resultados.", ok: true },
            { t: "Klar! Wir einladen die Eltern.", es: "¡Claro! Invitamos a los papás.", ok: false,
              fix: "«Einladen» es separable: en presente el prefijo va al final: «Wir laden die Eltern ein»." }
          ],
          clave: ["Eltern", "Einladung", "zeigen"],
          tip: "Verbos separables: el prefijo se va al final de la frase: einladen → «Wir laden euch ein»." },
        { bot: "Danke, dass Sie uns so viel geholfen haben!", es: "¡Gracias por ayudarnos tanto!",
          opciones: [
            { t: "Gern geschehen! Aber die Arbeit habt ihr gemacht.", es: "¡Con mucho gusto! Pero el trabajo lo hicieron ustedes.", ok: true },
            { t: "Sehr gern! Ich bin froh, dass ihr auch aus euren Fehlern so viel gelernt habt.", es: "¡Con mucho gusto! Me alegra que también hayan aprendido tanto de sus errores.", ok: true },
            { t: "Gern geschehen! Ich bin froh, dass ihr so viel habt gelernt.", es: "¡Con mucho gusto! Me alegra que hayan aprendido tanto.", ok: false,
              fix: "En la subordinada con «dass», el verbo conjugado va de último: «dass ihr so viel gelernt habt»." }
          ],
          clave: ["gern geschehen", "gelernt", "Fehlern"],
          tip: "«Aus Fehlern lernt man» = de los errores se aprende. El error no nos detiene: nos enseña." }
      ],
      cierre: { bot: "Sie sind super! Bis Freitag zur Feier!", es: "¡Usted es genial! ¡Nos vemos el viernes en la celebración!" },
      vocab: [
        { t: "es schaffen", es: "lograrlo" },
        { t: "stolz auf", es: "orgulloso de" },
        { t: "Herzlichen Glückwunsch!", es: "¡felicitaciones!" },
        { t: "die Feier", es: "la celebración" },
        { t: "die Urkunde", es: "el diploma (de reconocimiento)" },
        { t: "einladen", es: "invitar" },
        { t: "aus Fehlern lernen", es: "aprender de los errores" },
        { t: "Gern geschehen!", es: "¡con mucho gusto!" }
      ]
    },
    {
      id: "de-17", titulo: "¿Cómo me van a calificar?", nivel: "B1",
      tema: "Explicar una rúbrica",
      contexto: "En tu intercambio en un Gymnasium de Dresde, un estudiante de 9.º grado quiere entender la rúbrica con la que evaluarás su exposición oral.",
      rol: "Paul, 15 años, ambicioso, quiere sacar la mejor nota",
      turnos: [
        { bot: "Entschuldigung, wie genau wird unser Referat bewertet?", es: "Disculpe, ¿cómo exactamente se evalúa nuestra exposición?",
          opciones: [
            { t: "Mit einem Bewertungsraster. Ich zeige es dir.", es: "Con una rúbrica. Te la muestro.", ok: true },
            { t: "Gute Frage! Ich habe ein Bewertungsraster mit vier Kriterien vorbereitet. Schauen wir es uns zusammen an.", es: "¡Buena pregunta! Preparé una rúbrica con cuatro criterios. Mirémosla juntos.", ok: true },
            { t: "Mit einer Rubrik. Ich zeige sie dir.", es: "Con una rúbrica. Te la muestro.", ok: false,
              fix: "Falso amigo: «die Rubrik» es una sección de un periódico o de una tabla. La rúbrica de evaluación es «das Bewertungsraster» o «das Kompetenzraster»." }
          ],
          clave: ["Bewertungsraster", "Kriterien", "zeige"],
          tip: "«Das Referat» = la exposición oral de un estudiante. «Bewerten» = evaluar, calificar." },
        { bot: "Und welche Kriterien gibt es?", es: "¿Y qué criterios hay?",
          opciones: [
            { t: "Inhalt, Struktur, Sprache und Präsentation.", es: "Contenido, estructura, lenguaje y presentación.", ok: true },
            { t: "Es gibt vier Kriterien: den Inhalt, den Aufbau, die sprachliche Richtigkeit und die Frage, wie du präsentierst.", es: "Hay cuatro criterios: el contenido, la estructura, la corrección lingüística y cómo presentas.", ok: true },
            { t: "Es gibt vier: Inhalt, Aufbau, Sprache und wie präsentierst du.", es: "Hay cuatro: contenido, estructura, lenguaje y cómo presentas.", ok: false,
              fix: "En una pregunta indirecta el verbo va al final: «wie du präsentierst», no «wie präsentierst du»." }
          ],
          clave: ["Inhalt", "Struktur", "Kriterien"],
          tip: "Pregunta directa: «Wie präsentierst du?». Indirecta: «Mir ist wichtig, wie du präsentierst»." },
        { bot: "Und was zählt am meisten?", es: "¿Y qué es lo que más cuenta?",
          opciones: [
            { t: "Der Inhalt zählt am meisten.", es: "El contenido es lo que más cuenta.", ok: true },
            { t: "Der Inhalt hat das größte Gewicht, aber jedes Kriterium ist wichtig.", es: "El contenido tiene el mayor peso, pero cada criterio es importante.", ok: true },
            { t: "Der Inhalt zählt am meistens.", es: "El contenido es lo que más cuenta.", ok: false,
              fix: "El superlativo de «viel» es «am meisten». «Meistens» significa «casi siempre, la mayoría de las veces»." }
          ],
          clave: ["Inhalt", "am meisten", "Gewicht"],
          tip: "«Meistens» = la mayoría de las veces; «am meisten» = lo que más." },
        { bot: "Was muss ich machen, um beim Inhalt die beste Stufe zu erreichen?", es: "¿Qué tengo que hacer para alcanzar el nivel más alto en contenido?",
          opciones: [
            { t: "Du musst das Thema genau erklären und gute Quellen nennen.", es: "Tienes que explicar el tema con precisión y citar buenas fuentes.", ok: true },
            { t: "Du solltest das Thema mit eigenen Beispielen erklären und mindestens zwei verlässliche Quellen angeben.", es: "Deberías explicar el tema con ejemplos propios e indicar al menos dos fuentes confiables.", ok: true },
            { t: "Du musst das Thema mit Beispielen erklären, für dass alle es verstehen.", es: "Tienes que explicar el tema con ejemplos para que todos lo entiendan.", ok: false,
              fix: "«Para que» se dice «damit», con el verbo al final: «damit alle es verstehen». «Für dass» no existe." }
          ],
          clave: ["Quellen", "erklären", "Beispielen"],
          tip: "«Um ... zu» + infinitivo = para (mismo sujeto). «Damit» + verbo al final = para que (otro sujeto)." },
        { bot: "Und wenn ich bei der Präsentation total nervös bin? Bekomme ich dann eine schlechte Note?", es: "¿Y si me pongo muy nervioso en la presentación? ¿Me sacan una mala nota?",
          opciones: [
            { t: "Nein, Nervosität ist normal. Wichtig ist, dass du frei sprichst.", es: "No, los nervios son normales. Lo importante es que hables sin leer.", ok: true },
            { t: "Keine Sorge. Im Raster geht es um Klarheit, nicht um Perfektion. Wir können vorher auch eine Probe machen.", es: "Tranquilo. La rúbrica mide la claridad, no la perfección. También podemos hacer un ensayo antes.", ok: true },
            { t: "Keine Sorge. Wenn du bist nervös, ist das normal.", es: "Tranquilo. Si estás nervioso, eso es normal.", ok: false,
              fix: "En la subordinada con «wenn» el verbo conjugado va al final: «Wenn du nervös bist, ist das normal»." }
          ],
          clave: ["normal", "frei sprichst", "keine Sorge"],
          tip: "«Die Note» = la calificación. En Alemania la escala va de 1 (muy bien) a 6 (insuficiente)." },
        { bot: "Kann ich das Raster auch vorher für meine Vorbereitung benutzen?", es: "¿Puedo usar la rúbrica también antes, para prepararme?",
          opciones: [
            { t: "Ja, natürlich! Nutze es als Checkliste.", es: "¡Sí, claro! Úsala como lista de chequeo.", ok: true },
            { t: "Genau dafür ist es da: So kannst du dich selbst einschätzen, bevor du präsentierst.", es: "Justamente para eso está: así puedes autoevaluarte antes de presentar.", ok: true },
            { t: "Ja, natürlich! Benutze es wie eine Checkliste.", es: "¡Sí, claro! Úsala como lista de chequeo.", ok: false,
              fix: "Para decir «como» en el sentido de «en función de» se usa «als»: «Nutze es als Checkliste». «Wie» sirve para comparar." }
          ],
          clave: ["Checkliste", "selbst", "einschätzen"],
          tip: "«Als» = en calidad de (Ich arbeite als Lehrer); «wie» = parecido a (Er spricht wie ein Profi)." },
        { bot: "Super, jetzt weiß ich, worauf ich achten muss. Danke!", es: "¡Súper, ahora sé en qué debo fijarme! ¡Gracias!",
          opciones: [
            { t: "Gern! Und wenn du Fragen hast, komm einfach zu mir.", es: "¡Con gusto! Y si tienes preguntas, ven a buscarme.", ok: true },
            { t: "Sehr gern. Zeig mir nächste Woche deine Gliederung, dann gebe ich dir eine Rückmeldung.", es: "Con mucho gusto. Muéstrame tu esquema la próxima semana y te doy retroalimentación.", ok: true },
            { t: "Gern! Zeig mir deine Gliederung, dann gebe ich dir eine Feedback.", es: "¡Con gusto! Muéstrame tu esquema y te doy retroalimentación.", ok: false,
              fix: "«Das Feedback» es neutro y no se usa con «eine». Di «Feedback» sin artículo o, mejor, «eine Rückmeldung»." }
          ],
          clave: ["Fragen", "Rückmeldung", "Gliederung"],
          tip: "«Die Gliederung» = el esquema o índice de una exposición o un trabajo escrito." }
      ],
      cierre: { bot: "Mach ich! Dann fange ich heute schon mit der Recherche an.", es: "¡Listo! Entonces empiezo hoy mismo a investigar." },
      vocab: [
        { t: "das Referat", es: "la exposición oral" },
        { t: "das Bewertungsraster", es: "la rúbrica de evaluación" },
        { t: "das Kriterium (pl. Kriterien)", es: "el criterio" },
        { t: "bewerten", es: "evaluar, calificar" },
        { t: "die Note", es: "la calificación" },
        { t: "die Quelle", es: "la fuente" },
        { t: "sich selbst einschätzen", es: "autoevaluarse" },
        { t: "die Rückmeldung", es: "la retroalimentación" }
      ]
    },
    {
      id: "de-18", titulo: "El permiso para la salida al museo", nivel: "B1",
      tema: "Permiso de salida pedagógica con una familia",
      contexto: "Organizas una salida pedagógica a un museo de ciencias con tu curso en Núremberg. Una mamá te llama porque duda en firmar el permiso.",
      rol: "Frau Petrović, mamá de Luka (10 años), protectora y con muchas preguntas",
      turnos: [
        { bot: "Guten Tag, hier ist Petrović, die Mutter von Luka. Ich habe ein paar Fragen zum Ausflug ins Museum.", es: "Buenas tardes, habla Petrović, la mamá de Luka. Tengo algunas preguntas sobre la salida al museo.",
          opciones: [
            { t: "Guten Tag, Frau Petrović. Natürlich, fragen Sie gern.", es: "Buenas tardes, señora Petrović. Claro, pregunte con confianza.", ok: true },
            { t: "Guten Tag, Frau Petrović! Schön, dass Sie anrufen. Was möchten Sie wissen?", es: "¡Buenas tardes, señora Petrović! Qué bueno que llama. ¿Qué le gustaría saber?", ok: true },
            { t: "Guten Tag, Frau Petrović. Fragen Sie mich alles, was Sie wollen wissen.", es: "Buenas tardes, señora Petrović. Pregúnteme todo lo que quiera saber.", ok: false,
              fix: "En la oración con «was», el verbo conjugado va al final: «alles, was Sie wissen wollen»." }
          ],
          clave: ["Frau Petrović", "fragen", "wissen"],
          tip: "Al teléfono, los alemanes se presentan con el apellido: «Hier ist Petrović» o «Petrović am Apparat»." },
        { bot: "Wie kommen die Kinder denn zum Museum? Und wer passt auf sie auf?", es: "¿Cómo llegan los niños al museo? ¿Y quién los cuida?",
          opciones: [
            { t: "Wir fahren mit der Straßenbahn, und drei Erwachsene begleiten die Gruppe.", es: "Vamos en tranvía y tres adultos acompañan al grupo.", ok: true },
            { t: "Wir fahren gemeinsam mit der Straßenbahn. Außer mir begleiten uns eine Kollegin und ein Vater.", es: "Vamos juntos en tranvía. Además de mí, nos acompañan una colega y un papá.", ok: true },
            { t: "Wir fahren mit dem Straßenbahn, und drei Erwachsene begleiten die Gruppe.", es: "Vamos en tranvía y tres adultos acompañan al grupo.", ok: false,
              fix: "«Die Straßenbahn» es femenina; con «mit» (dativo) queda «mit der Straßenbahn»." }
          ],
          clave: ["Straßenbahn", "begleiten", "Erwachsene"],
          tip: "«Begleiten» = acompañar. «Die Begleitperson» = el adulto acompañante en una salida." },
        { bot: "Luka hat eine Laktoseintoleranz. Was ist mit dem Mittagessen?", es: "Luka es intolerante a la lactosa. ¿Qué pasa con el almuerzo?",
          opciones: [
            { t: "Am besten geben Sie ihm sein eigenes Essen mit.", es: "Lo mejor es que le empaque su propia comida.", ok: true },
            { t: "Danke für den Hinweis. Alle Kinder bringen ihr eigenes Essen mit, deshalb kann Luka ganz normal essen.", es: "Gracias por avisar. Todos los niños llevan su propia comida, por eso Luka puede comer con normalidad.", ok: true },
            { t: "Danke für den Hinweis. Alle Kinder bringen ihr Essen mit, deshalb Luka kann normal essen.", es: "Gracias por avisar. Todos los niños llevan su comida, por eso Luka puede comer con normalidad.", ok: false,
              fix: "«Deshalb» ocupa una posición y el verbo va enseguida: «deshalb kann Luka normal essen»." }
          ],
          clave: ["Hinweis", "Essen", "deshalb"],
          tip: "«Danke für den Hinweis» = gracias por avisar. Es la forma cortés de recibir una información importante." },
        { bot: "Und was machen die Kinder dort genau? Ist das nicht einfach nur ein Ausflug zum Spaß?", es: "¿Y qué hacen los niños allá exactamente? ¿No es simplemente un paseo para divertirse?",
          opciones: [
            { t: "Nein, sie machen dort Experimente zum Thema Licht.", es: "No, allá hacen experimentos sobre la luz.", ok: true },
            { t: "Nein, der Besuch gehört zu unserem Unterricht: Die Kinder lösen Aufgaben zu Licht und Schall und stellen sie danach in der Klasse vor.", es: "No, la visita hace parte de nuestra clase: los niños resuelven tareas sobre la luz y el sonido y luego las presentan en el salón.", ok: true },
            { t: "Nein, es ist eine pädagogische Exkursion: Die Kinder realisieren dort Experimente.", es: "No, es una salida pedagógica: los niños hacen allí experimentos.", ok: false,
              fix: "«Experimente realisieren» no se dice. Se usa «Experimente machen» o «durchführen». «Realisieren» se usa para proyectos o como «darse cuenta»." }
          ],
          clave: ["Experimente", "Unterricht", "Licht"],
          tip: "«Der Ausflug» = la excursión. Si tiene fin académico también se dice «die Exkursion» o «der Lerngang»." },
        { bot: "Gut. Und wenn etwas passiert? Wie kann ich Sie erreichen?", es: "Bien. ¿Y si pasa algo? ¿Cómo la/lo puedo localizar?",
          opciones: [
            { t: "Wenn etwas passiert, rufe ich Sie sofort an.", es: "Si pasa algo, la llamo de inmediato.", ok: true },
            { t: "An dem Tag habe ich das Diensthandy dabei; die Nummer steht im Elternbrief.", es: "Ese día llevo el celular del colegio; el número está en la circular para padres.", ok: true },
            { t: "Wenn etwas passiert, ich rufe Sie sofort an.", es: "Si pasa algo, la llamo de inmediato.", ok: false,
              fix: "Después de una subordinada con «wenn», el verbo principal va primero: «Wenn etwas passiert, rufe ich Sie sofort an»." }
          ],
          clave: ["erreichen", "rufe ich", "Elternbrief"],
          tip: "«Der Elternbrief» = la circular para padres. Ahí suele ir toda la información de la salida." },
        { bot: "Na gut, dann unterschreibe ich die Einverständniserklärung. Bis wann muss Luka sie abgeben?", es: "Bueno, entonces firmo el permiso. ¿Hasta cuándo tiene Luka para entregarlo?",
          opciones: [
            { t: "Bis Freitag, bitte.", es: "Hasta el viernes, por favor.", ok: true },
            { t: "Bis spätestens Freitag. Vielen Dank für Ihr Vertrauen, Frau Petrović.", es: "A más tardar el viernes. Muchas gracias por su confianza, señora Petrović.", ok: true },
            { t: "Bis Freitag, bitte. Danke für Ihre Vertrauen.", es: "Hasta el viernes, por favor. Gracias por su confianza.", ok: false,
              fix: "«Das Vertrauen» es neutro: «für Ihr Vertrauen» (sin -e)." }
          ],
          clave: ["bis Freitag", "Vertrauen", "spätestens"],
          tip: "«Die Einverständniserklärung» = el permiso firmado por la familia. «Unterschreiben» = firmar." }
      ],
      cierre: { bot: "Gut, dann wünsche ich Ihnen allen einen schönen Ausflug. Auf Wiederhören!", es: "Bien, entonces les deseo a todos una buena salida. ¡Hasta luego!" },
      vocab: [
        { t: "der Ausflug / die Exkursion", es: "la salida, la excursión" },
        { t: "die Einverständniserklärung", es: "el permiso firmado, el consentimiento" },
        { t: "unterschreiben", es: "firmar" },
        { t: "begleiten", es: "acompañar" },
        { t: "Danke für den Hinweis", es: "gracias por avisar" },
        { t: "Experimente durchführen", es: "hacer experimentos" },
        { t: "der Elternbrief", es: "la circular para padres" },
        { t: "Auf Wiederhören!", es: "¡hasta luego! (al teléfono)" }
      ]
    },
    {
      id: "de-19", titulo: "Mi primer club de lectura en alemán", nivel: "B1",
      tema: "Club de lectura",
      contexto: "Te uniste a un club de lectura de docentes en Heidelberg. Hoy comentan una novela juvenil sobre una niña que migra con su familia a otro país.",
      rol: "Claudia, moderadora del club y profesora de Literatura, entusiasta y curiosa",
      turnos: [
        { bot: "Schön, dass du da bist! Wir duzen uns hier alle. Wie hat dir der Roman gefallen?", es: "¡Qué bueno que viniste! Aquí todos nos tuteamos. ¿Qué te pareció la novela?",
          opciones: [
            { t: "Er hat mir sehr gut gefallen.", es: "Me gustó mucho.", ok: true },
            { t: "Er hat mir sehr gut gefallen, vor allem die Hauptfigur.", es: "Me gustó mucho, sobre todo la protagonista.", ok: true },
            { t: "Sie hat mir sehr gut gefallen.", es: "Me gustó mucho.", ok: false,
              fix: "«Der Roman» es masculino, así que el pronombre es «er»: «Er hat mir sehr gut gefallen». En español «novela» es femenino, en alemán no." }
          ],
          clave: ["gefallen", "Hauptfigur", "er hat"],
          tip: "El pronombre sigue el género gramatical: der Roman → er; die Geschichte → sie; das Buch → es." },
        { bot: "Was genau fandest du an der Hauptfigur so stark?", es: "¿Qué te pareció tan fuerte de la protagonista?",
          opciones: [
            { t: "Sie gibt nie auf, obwohl sie viele Probleme hat.", es: "Nunca se rinde, aunque tiene muchos problemas.", ok: true },
            { t: "Mich hat beeindruckt, dass sie trotz aller Schwierigkeiten ihren eigenen Weg geht.", es: "Me impresionó que, a pesar de todas las dificultades, siga su propio camino.", ok: true },
            { t: "Sie gibt nie auf, obwohl sie hat viele Probleme.", es: "Nunca se rinde, aunque tiene muchos problemas.", ok: false,
              fix: "«Obwohl» introduce una subordinada: el verbo va al final: «obwohl sie viele Probleme hat»." }
          ],
          clave: ["obwohl", "nie auf", "beeindruckt"],
          tip: "«Aufgeben» = rendirse. «Sie gibt nie auf» = nunca se rinde." },
        { bot: "Gab es auch etwas, das dir nicht gefallen hat?", es: "¿Hubo algo que no te gustara?",
          opciones: [
            { t: "Ja, das Ende war mir zu schnell.", es: "Sí, el final me pareció muy rápido.", ok: true },
            { t: "Ehrlich gesagt fand ich das Ende etwas zu offen; ich hätte gern mehr über ihre Familie erfahren.", es: "Para ser sincero(a), el final me pareció un poco abierto; me habría gustado saber más de su familia.", ok: true },
            { t: "Ja, das Finale war mir zu schnell.", es: "Sí, el final me pareció muy rápido.", ok: false,
              fix: "El final de una historia es «das Ende» o «der Schluss». «Das Finale» es la final de un torneo o el cierre de una obra musical." }
          ],
          clave: ["Ende", "ehrlich gesagt", "hätte gern"],
          tip: "Para criticar con tacto: «Ehrlich gesagt ...» o «Mir persönlich hat ... gefehlt»." },
        { bot: "Interessant. Glaubst du, dass deine Schüler in Cali das Buch mögen würden?", es: "Interesante. ¿Crees que a tus estudiantes en Cali les gustaría el libro?",
          opciones: [
            { t: "Ja, ich glaube, dass es ihnen gefallen würde.", es: "Sí, creo que les gustaría.", ok: true },
            { t: "Ich denke schon, weil das Thema Migration auch bei uns sehr präsent ist.", es: "Creo que sí, porque el tema de la migración también está muy presente entre nosotros.", ok: true },
            { t: "Ja, ich glaube, dass es würde ihnen gefallen.", es: "Sí, creo que les gustaría.", ok: false,
              fix: "Con «dass» todo el grupo verbal va al final y el verbo conjugado de último: «dass es ihnen gefallen würde»." }
          ],
          clave: ["glaube", "gefallen würde", "Migration"],
          tip: "«Bei uns» = en nuestro país, en nuestra ciudad, en nuestro colegio. Muy útil para comparar culturas." },
        { bot: "Wie würdest du das Buch im Unterricht einsetzen?", es: "¿Cómo usarías el libro en clase?",
          opciones: [
            { t: "Ich würde mit den Schülern ein Lesetagebuch führen.", es: "Llevaría un diario de lectura con los estudiantes.", ok: true },
            { t: "Ich würde Lesekreise bilden: Jede Gruppe liest ein Kapitel und stellt der Klasse Fragen dazu.", es: "Formaría círculos de lectura: cada grupo lee un capítulo y le hace preguntas a la clase.", ok: true },
            { t: "Ich würde mit den Schülern einen Lesetagebuch führen.", es: "Llevaría un diario de lectura con los estudiantes.", ok: false,
              fix: "«Das Tagebuch» es neutro, así que en acusativo es «ein Lesetagebuch». En los compuestos manda la última palabra." }
          ],
          clave: ["würde", "Lesetagebuch", "Kapitel"],
          tip: "«Ein Tagebuch führen» = llevar un diario. En el diario de lectura se anotan ideas, preguntas y emociones." },
        { bot: "Tolle Idee! Wer schlägt das Buch für nächsten Monat vor? Hast du vielleicht eine Idee?", es: "¡Gran idea! ¿Quién propone el libro del próximo mes? ¿Tienes alguna idea?",
          opciones: [
            { t: "Ich könnte einen Roman aus Kolumbien vorschlagen.", es: "Podría proponer una novela de Colombia.", ok: true },
            { t: "Gern! Ich schlage einen Roman aus Lateinamerika vor, der auch auf Deutsch erschienen ist.", es: "¡Con gusto! Propongo una novela latinoamericana que también se publicó en alemán.", ok: true },
            { t: "Gern! Ich vorschlage einen Roman aus Kolumbien.", es: "¡Con gusto! Propongo una novela de Colombia.", ok: false,
              fix: "«Vorschlagen» es separable: «Ich schlage einen Roman aus Kolumbien vor»." }
          ],
          clave: ["Roman", "vorschlagen", "Kolumbien"],
          tip: "«Erscheinen» = publicarse (un libro). «Das Buch ist 2020 erschienen» = el libro salió en 2020." }
      ],
      cierre: { bot: "Super, dann bist du nächsten Monat dran! Bis dann und viel Spaß beim Aussuchen.", es: "¡Súper, entonces el próximo mes te toca a ti! Hasta entonces y que disfrutes escogiendo." },
      vocab: [
        { t: "der Roman", es: "la novela" },
        { t: "die Hauptfigur", es: "el/la protagonista" },
        { t: "aufgeben", es: "rendirse" },
        { t: "das Ende / der Schluss", es: "el final" },
        { t: "ehrlich gesagt", es: "para ser sincero(a)" },
        { t: "ein Lesetagebuch führen", es: "llevar un diario de lectura" },
        { t: "das Kapitel", es: "el capítulo" },
        { t: "vorschlagen", es: "proponer" }
      ]
    },
    {
      id: "de-20", titulo: "Se cayó la conexión", nivel: "B1",
      tema: "Problemas técnicos en clase virtual",
      contexto: "Das una clase virtual de español a estudiantes de un colegio aliado en Kassel. Todo empieza con problemas técnicos y una estudiante te ayuda a resolverlos.",
      rol: "Emma, 16 años, estudiante práctica y paciente",
      turnos: [
        { bot: "Hallo? Ich kann Sie hören, aber Ihr Bild ist schwarz.", es: "¿Hola? La/lo escucho, pero su imagen está negra.",
          opciones: [
            { t: "Danke, Emma. Ich schalte die Kamera noch mal ein. Siehst du mich jetzt?", es: "Gracias, Emma. Vuelvo a prender la cámara. ¿Me ves ahora?", ok: true },
            { t: "Danke für den Hinweis! Moment, meine Kamera war wohl aus. Und jetzt?", es: "¡Gracias por avisar! Un momento, parece que mi cámara estaba apagada. ¿Y ahora?", ok: true },
            { t: "Danke, Emma. Ich schalte die Kamera ein. Siehst du mir jetzt?", es: "Gracias, Emma. Prendo la cámara. ¿Me ves ahora?", ok: false,
              fix: "«Sehen» rige acusativo: «Siehst du mich jetzt?». «Mir» es dativo." }
          ],
          clave: ["Kamera", "mich", "jetzt"],
          tip: "«Einschalten / anmachen» = prender; «ausschalten / ausmachen» = apagar." },
        { bot: "Ja, jetzt sehe ich Sie. Aber der Ton ist ziemlich abgehackt.", es: "Sí, ahora la/lo veo. Pero el sonido está bastante entrecortado.",
          opciones: [
            { t: "Vielleicht liegt es an meinem Internet. Ich gehe näher an den Router.", es: "Quizás es por mi internet. Me acerco al router.", ok: true },
            { t: "Das liegt wahrscheinlich an meiner Verbindung. Ich schalte das Video kurz aus, dann wird es vielleicht besser.", es: "Seguramente es por mi conexión. Apago el video un momento, quizás así mejora.", ok: true },
            { t: "Vielleicht liegt es an mein Internet.", es: "Quizás es por mi internet.", ok: false,
              fix: "«Liegen an» rige dativo: «an meinem Internet» (das Internet → dem/meinem)." }
          ],
          clave: ["liegt an", "Verbindung", "Router"],
          tip: "«Es liegt an ...» = se debe a ..., es por ... Muy útil para explicar la causa de un problema." },
        { bot: "Jetzt ist es besser. Ich kann übrigens den Link zum Arbeitsblatt nicht öffnen.", es: "Ahora está mejor. Por cierto, no puedo abrir el enlace de la guía.",
          opciones: [
            { t: "Ich schicke ihn dir gleich noch mal im Chat.", es: "Te lo vuelvo a mandar ya por el chat.", ok: true },
            { t: "Kein Problem, ich stelle ihn noch mal in den Chat. Sag mir Bescheid, ob er jetzt funktioniert.", es: "No hay problema, lo vuelvo a poner en el chat. Avísame si ahora funciona.", ok: true },
            { t: "Kein Problem, ich schicke es dir noch mal im Chat.", es: "No hay problema, te lo vuelvo a mandar por el chat.", ok: false,
              fix: "«Der Link» es masculino: en acusativo el pronombre es «ihn»: «Ich schicke ihn dir noch mal»." }
          ],
          clave: ["Link", "Chat", "Bescheid"],
          tip: "«Bescheid sagen» = avisar. «Sag mir Bescheid» = avísame." },
        { bot: "Ah, jetzt geht es. Aber drei Leute aus meiner Gruppe sind gerade rausgeflogen.", es: "Ah, ahora sí funciona. Pero a tres personas de mi grupo se les acaba de caer la conexión.",
          opciones: [
            { t: "Okay, wir warten kurz, bis alle wieder da sind.", es: "Bueno, esperamos un momento hasta que todos vuelvan.", ok: true },
            { t: "Danke, dass du Bescheid sagst. Wir warten kurz, bis alle wieder drin sind, und dann wiederhole ich die Aufgabe.", es: "Gracias por avisar. Esperamos un momento hasta que todos vuelvan a entrar y luego repito la tarea.", ok: true },
            { t: "Okay, wir warten kurz, bis alle sind wieder da.", es: "Bueno, esperamos un momento hasta que todos vuelvan.", ok: false,
              fix: "«Bis» (hasta que) introduce una subordinada: el verbo va al final: «bis alle wieder da sind»." }
          ],
          clave: ["warten", "bis alle", "wiederhole"],
          tip: "«Rausfliegen» (coloquial) = salirse o quedar desconectado de una reunión en línea." },
        { bot: "Alle sind wieder da. Sollen wir die Aufgabe jetzt in Gruppenräumen machen?", es: "Ya volvieron todos. ¿Hacemos la tarea ahora en salas de grupo?",
          opciones: [
            { t: "Ja, ich teile euch jetzt in Gruppenräume ein.", es: "Sí, ahora los reparto en salas de grupo.", ok: true },
            { t: "Genau. Ich öffne jetzt die Gruppenräume; ihr habt fünfzehn Minuten Zeit.", es: "Exacto. Abro ahora las salas de grupo; tienen quince minutos.", ok: true },
            { t: "Genau. Ich öffne jetzt die Gruppenräume; ihr habt fünfzehn Minuten von Zeit.", es: "Exacto. Abro ahora las salas de grupo; tienen quince minutos.", ok: false,
              fix: "Se dice «fünfzehn Minuten Zeit haben», sin «von». Calcar «de tiempo» no funciona en alemán." }
          ],
          clave: ["Gruppenräume", "Minuten", "Zeit"],
          tip: "«Der Gruppenraum» o «Breakout-Raum» = sala para trabajo en grupo en una videollamada." },
        { bot: "Und falls die Verbindung wieder abbricht, was machen wir dann?", es: "¿Y en caso de que la conexión se vuelva a caer, qué hacemos?",
          opciones: [
            { t: "Dann schreibt ihr mir eine Nachricht im Chat.", es: "Entonces me escriben un mensaje en el chat.", ok: true },
            { t: "Falls das passiert, arbeitet ihr im geteilten Dokument weiter, und ich melde mich per E-Mail.", es: "Si eso pasa, siguen trabajando en el documento compartido y yo me comunico por correo.", ok: true },
            { t: "Dann schickt ihr mir einen E-Mail.", es: "Entonces me mandan un correo.", ok: false,
              fix: "En Alemania «E-Mail» es femenino: «Schickt mir eine E-Mail»." }
          ],
          clave: ["Nachricht", "E-Mail", "Dokument"],
          tip: "«Falls» = en caso de que. Funciona como «wenn» y también manda el verbo al final." },
        { bot: "Alles klar. Danke, dass Sie trotz allem so ruhig geblieben sind!", es: "Listo. ¡Gracias por mantener la calma a pesar de todo!",
          opciones: [
            { t: "Gern! Technik macht eben manchmal Probleme.", es: "¡Con gusto! La tecnología a veces da problemas.", ok: true },
            { t: "Danke dir! Pannen passieren; wichtig ist, dass wir zusammen eine Lösung finden.", es: "¡Gracias a ti! Las fallas pasan; lo importante es que encontremos juntos una solución.", ok: true },
            { t: "Gern! Die Technik macht manchmal Problemen.", es: "¡Con gusto! La tecnología a veces da problemas.", ok: false,
              fix: "El plural de «das Problem» es «die Probleme». La -n solo se añade en dativo plural: «mit den Problemen»." }
          ],
          clave: ["Probleme", "Lösung", "Pannen"],
          tip: "«Die Panne» = la falla o avería. «Pannen passieren» = las fallas pasan: también es pedagogía del error." }
      ],
      cierre: { bot: "Bis gleich in den Gruppenräumen!", es: "¡Nos vemos ahora en las salas de grupo!" },
      vocab: [
        { t: "die Kamera einschalten / ausschalten", es: "prender / apagar la cámara" },
        { t: "der Ton", es: "el sonido" },
        { t: "abgehackt", es: "entrecortado" },
        { t: "Es liegt an ...", es: "se debe a ..., es por ..." },
        { t: "Bescheid sagen", es: "avisar" },
        { t: "der Gruppenraum", es: "la sala de grupo" },
        { t: "die Verbindung bricht ab", es: "se cae la conexión" },
        { t: "die Panne", es: "la falla, la avería" }
      ]
    },
    {
      id: "de-21", titulo: "Cali y el Pacífico en una noche intercultural", nivel: "B1",
      tema: "Presentar Cali y la cultura del Pacífico",
      contexto: "En una noche intercultural de una escuela de Hannover acabas de presentar Cali y la cultura del Pacífico colombiano. Un colega se acerca con muchas preguntas.",
      rol: "Herr Fischer, profesor de Música, curioso y viajero",
      turnos: [
        { bot: "Ihre Präsentation war super! Cali kannte ich bisher nur vom Namen. Wie würden Sie die Stadt beschreiben?", es: "¡Su presentación estuvo genial! Hasta ahora solo conocía Cali de nombre. ¿Cómo describiría la ciudad?",
          opciones: [
            { t: "Cali ist eine warme, fröhliche Stadt im Südwesten Kolumbiens.", es: "Cali es una ciudad cálida y alegre en el suroccidente de Colombia.", ok: true },
            { t: "Cali ist eine lebendige Stadt im Südwesten Kolumbiens, und man nennt sie die Welthauptstadt der Salsa.", es: "Cali es una ciudad llena de vida en el suroccidente de Colombia, y la llaman la capital mundial de la salsa.", ok: true },
            { t: "Cali ist eine Stadt sehr fröhlich im Südwesten Kolumbiens.", es: "Cali es una ciudad muy alegre en el suroccidente de Colombia.", ok: false,
              fix: "El adjetivo va antes del sustantivo y se declina: «eine sehr fröhliche Stadt»." }
          ],
          clave: ["Stadt", "Südwesten", "Salsa"],
          tip: "En alemán el adjetivo va antes del sustantivo: «eine fröhliche Stadt», nunca «eine Stadt fröhlich»." },
        { bot: "Welthauptstadt der Salsa? Tanzen Sie auch?", es: "¿Capital mundial de la salsa? ¿Usted también baila?",
          opciones: [
            { t: "Ja, ich tanze gern Salsa, aber nicht perfekt.", es: "Sí, me gusta bailar salsa, pero no perfecto.", ok: true },
            { t: "Natürlich! In Cali lernen viele Kinder schon sehr früh tanzen. Ich kann es Ihnen gern zeigen.", es: "¡Claro! En Cali muchos niños aprenden a bailar desde muy pequeños. Con gusto se lo muestro.", ok: true },
            { t: "Ja, Salsa tanzen gefällt mich sehr.", es: "Sí, me gusta mucho bailar salsa.", ok: false,
              fix: "«Gefallen» rige dativo: «mir», no «mich». Y para actividades lo más natural es verbo + «gern»: «Ich tanze sehr gern Salsa»." }
          ],
          clave: ["tanze gern", "Salsa", "zeigen"],
          tip: "Gustos con actividades: verbo + «gern»: «Ich tanze gern», «Ich lese gern». Lo contrario: «nicht gern»." },
        { bot: "Und was ist das Besondere an der Pazifikküste?", es: "¿Y qué tiene de especial la costa pacífica?",
          opciones: [
            { t: "Die Musik und die afrokolumbianische Kultur sind dort sehr stark.", es: "La música y la cultura afrocolombiana son muy fuertes allá.", ok: true },
            { t: "Die Region ist stark von der afrokolumbianischen Kultur geprägt, besonders in der Musik mit der Marimba und den traditionellen Gesängen.", es: "La región está muy marcada por la cultura afrocolombiana, sobre todo en la música, con la marimba y los cantos tradicionales.", ok: true },
            { t: "Die Region ist sehr reich an Kultur, vor allem in der afrokolumbianisch Musik.", es: "La región es muy rica en cultura, sobre todo en la música afrocolombiana.", ok: false,
              fix: "El adjetivo delante del sustantivo lleva terminación: «in der afrokolumbianischen Musik»." }
          ],
          clave: ["afrokolumbianische", "Marimba", "Musik"],
          tip: "«Geprägt von» = marcado por. «Die Region ist von der Musik geprägt» = la región está marcada por la música." },
        { bot: "Marimba? Das Instrument kenne ich aus der Musikschule. Wird diese Musik irgendwie geschützt?", es: "¿Marimba? Conozco el instrumento de la escuela de música. ¿Esa música está protegida de alguna forma?",
          opciones: [
            { t: "Ja, die Marimba-Musik gehört zum immateriellen Kulturerbe der UNESCO.", es: "Sí, la música de marimba hace parte del patrimonio cultural inmaterial de la UNESCO.", ok: true },
            { t: "Ja, die Marimba-Musik und die traditionellen Gesänge des Südpazifiks gehören zum immateriellen Kulturerbe der UNESCO.", es: "Sí, la música de marimba y los cantos tradicionales del Pacífico Sur hacen parte del patrimonio cultural inmaterial de la UNESCO.", ok: true },
            { t: "Ja, die Marimba-Musik ist Patrimonium der UNESCO.", es: "Sí, la música de marimba es patrimonio de la UNESCO.", ok: false,
              fix: "«Patrimonio cultural» se dice «das Kulturerbe». «Patrimonium» es un término histórico o jurídico que no se usa en este sentido." }
          ],
          clave: ["Kulturerbe", "UNESCO", "immateriellen"],
          tip: "«Das immaterielle Kulturerbe» = el patrimonio cultural inmaterial: música, fiestas, saberes y tradiciones orales." },
        { bot: "Spannend! Gibt es in Cali ein Fest, bei dem man diese Musik hören kann?", es: "¡Qué interesante! ¿Hay en Cali alguna fiesta donde se pueda escuchar esta música?",
          opciones: [
            { t: "Ja, das Festival Petronio Álvarez, meistens im August.", es: "Sí, el Festival Petronio Álvarez, por lo general en agosto.", ok: true },
            { t: "Ja, beim Festival Petronio Álvarez kommen jedes Jahr Musikgruppen aus der ganzen Pazifikregion nach Cali.", es: "Sí, al Festival Petronio Álvarez llegan cada año a Cali grupos musicales de toda la región pacífica.", ok: true },
            { t: "Ja, das Festival Petronio Álvarez, meistens in August.", es: "Sí, el Festival Petronio Álvarez, por lo general en agosto.", ok: false,
              fix: "Con los meses se usa «im» (in + dem): «im August»." }
          ],
          clave: ["Festival", "jedes Jahr", "im August"],
          tip: "Meses y estaciones van con «im»: im August, im Winter. Los días, con «am»: am Montag." },
        { bot: "Und was isst man dort? Ich koche nämlich sehr gern.", es: "¿Y qué se come allá? Es que me encanta cocinar.",
          opciones: [
            { t: "Man isst viel Fisch mit Kokosmilch.", es: "Se come mucho pescado con leche de coco.", ok: true },
            { t: "An der Küste kocht man viel mit Kokos, zum Beispiel Fisch in Kokossoße mit Reis und gebratenen Kochbananen.", es: "En la costa se cocina mucho con coco, por ejemplo pescado en salsa de coco con arroz y plátano frito.", ok: true },
            { t: "Man kocht viel Fisch mit Kokosmilch, was ist sehr lecker.", es: "Se cocina mucho pescado con leche de coco, lo cual es muy rico.", ok: false,
              fix: "«Was» (lo cual) introduce una subordinada: el verbo va al final: «..., was sehr lecker ist»." }
          ],
          clave: ["Fisch", "Kokos", "Kochbananen"],
          tip: "«Man» = «se» impersonal: «Man isst viel Fisch» = se come mucho pescado. El verbo va en tercera persona singular." },
        { bot: "Jetzt möchte ich unbedingt einmal nach Cali reisen!", es: "¡Ahora sí quiero viajar a Cali sin falta!",
          opciones: [
            { t: "Dann kommen Sie uns besuchen! Sie sind herzlich willkommen.", es: "¡Entonces venga a visitarnos! Es usted muy bienvenido.", ok: true },
            { t: "Sehr gern! Wenn Sie kommen, zeige ich Ihnen die Stadt, und wir gehen zusammen tanzen.", es: "¡Con mucho gusto! Si viene, le muestro la ciudad y vamos a bailar juntos.", ok: true },
            { t: "Sehr gern! Sie sind herzlich willkommen in mein Haus.", es: "¡Con mucho gusto! Es usted muy bienvenido en mi casa.", ok: false,
              fix: "«In» para un lugar donde se está rige dativo: «in meinem Haus». Más natural aún: «Sie sind bei mir herzlich willkommen»." }
          ],
          clave: ["herzlich willkommen", "zeige", "besuchen"],
          tip: "«Bei mir» = en mi casa. «Kommen Sie mich besuchen!» = ¡venga a visitarme!" }
      ],
      cierre: { bot: "Abgemacht! Und vorher nehme ich ein paar Salsastunden, versprochen.", es: "¡Trato hecho! Y antes tomo unas clases de salsa, lo prometo." },
      vocab: [
        { t: "im Südwesten", es: "en el suroccidente" },
        { t: "die Welthauptstadt der Salsa", es: "la capital mundial de la salsa" },
        { t: "geprägt von", es: "marcado por" },
        { t: "afrokolumbianisch", es: "afrocolombiano" },
        { t: "das immaterielle Kulturerbe", es: "el patrimonio cultural inmaterial" },
        { t: "die Kochbanane", es: "el plátano (para cocinar)" },
        { t: "die Kokosmilch", es: "la leche de coco" },
        { t: "herzlich willkommen", es: "muy bienvenido(a)" }
      ]
    },
    {
      id: "de-22", titulo: "Acompañar a un colega nuevo", nivel: "B1",
      tema: "Mentoría a un docente nuevo",
      contexto: "Llevas un semestre de intercambio en una escuela de Münster. La directora te pide acompañar durante sus primeras semanas a un docente recién llegado.",
      rol: "Jan, docente nuevo de Biología, 27 años, nervioso pero muy motivado",
      turnos: [
        { bot: "Hi! Danke, dass du mich in den ersten Wochen begleitest. Ich bin ehrlich gesagt ziemlich nervös.", es: "¡Hola! Gracias por acompañarme en las primeras semanas. Para serte sincero, estoy bastante nervioso.",
          opciones: [
            { t: "Das ist ganz normal. Mir ging es am Anfang genauso.", es: "Es completamente normal. Al principio a mí me pasó igual.", ok: true },
            { t: "Das mache ich gern. Am Anfang war ich auch nervös, das ist völlig normal.", es: "Lo hago con gusto. Al principio yo también estaba nervioso(a); es totalmente normal.", ok: true },
            { t: "Das ist ganz normal. Mich ging es am Anfang genauso.", es: "Es completamente normal. Al principio a mí me pasó igual.", ok: false,
              fix: "«Es geht» lleva a la persona en dativo: «Mir ging es genauso», no «mich»." }
          ],
          clave: ["normal", "genauso", "am Anfang"],
          tip: "«Mir geht es genauso» = a mí me pasa igual. Frase clave para mostrar empatía." },
        { bot: "Was ist das Wichtigste in der ersten Woche?", es: "¿Qué es lo más importante en la primera semana?",
          opciones: [
            { t: "Lern die Namen der Schüler so schnell wie möglich.", es: "Apréndete los nombres de los estudiantes lo más rápido posible.", ok: true },
            { t: "Ich würde zuerst Beziehungen aufbauen: Lern die Namen und erklär die Regeln von Anfang an klar.", es: "Yo primero construiría relaciones: apréndete los nombres y explica las reglas con claridad desde el principio.", ok: true },
            { t: "Lern die Namen von die Schüler so schnell wie möglich.", es: "Apréndete los nombres de los estudiantes lo más rápido posible.", ok: false,
              fix: "Tras «von» va dativo: «von den Schülern». Mejor aún, genitivo: «die Namen der Schüler»." }
          ],
          clave: ["Namen", "Regeln", "Beziehungen"],
          tip: "El imperativo con «du» pierde la terminación -st: du lernst → «Lern!»; du erklärst → «Erklär!»." },
        { bot: "Und wie gehe ich mit Störungen im Unterricht um?", es: "¿Y cómo manejo las interrupciones en clase?",
          opciones: [
            { t: "Bleib ruhig und sprich nach der Stunde mit dem Schüler.", es: "Mantén la calma y habla con el estudiante después de la clase.", ok: true },
            { t: "Am besten reagierst du ruhig und konsequent. Ein Blick oder deine Nähe hilft oft mehr als Schimpfen.", es: "Lo mejor es reaccionar con calma y coherencia. Una mirada o acercarte ayuda muchas veces más que regañar.", ok: true },
            { t: "Bleib ruhig und sprich nach der Klasse mit dem Schüler.", es: "Mantén la calma y habla con el estudiante después de la clase.", ok: false,
              fix: "Falso amigo: «die Klasse» es el grupo de estudiantes. La clase como sesión es «die Stunde» o «der Unterricht»: «nach der Stunde»." }
          ],
          clave: ["ruhig", "Stunde", "konsequent"],
          tip: "«Die Klasse» = el grupo; «die Stunde» o «der Unterricht» = la clase como sesión." },
        { bot: "Ich habe Angst, dass ich zu viel Zeit mit der Vorbereitung verbringe.", es: "Me da miedo pasar demasiado tiempo preparando clases.",
          opciones: [
            { t: "Du musst nicht alles neu erfinden. Ich teile meine Materialien mit dir.", es: "No tienes que inventarlo todo de nuevo. Te comparto mis materiales.", ok: true },
            { t: "Das kenne ich. Nutz die Materialien der Fachschaft und plan nur das Wichtigste neu.", es: "Lo conozco. Usa los materiales del área y planea de nuevo solo lo esencial.", ok: true },
            { t: "Du musst nicht alles neu erfinden. Ich teile meine Materialien mit dich.", es: "No tienes que inventarlo todo de nuevo. Te comparto mis materiales.", ok: false,
              fix: "«Mit» siempre rige dativo: «mit dir»." }
          ],
          clave: ["Materialien", "teile", "mit dir"],
          tip: "«Die Fachschaft» = el grupo de docentes de una misma asignatura (el área)." },
        { bot: "Darf ich dich auch mal in deinem Unterricht besuchen?", es: "¿Puedo visitarte alguna vez en tu clase?",
          opciones: [
            { t: "Ja, gern! Komm am Donnerstag in die sechste Stunde.", es: "¡Sí, con gusto! Ven el jueves a la sexta hora.", ok: true },
            { t: "Natürlich! Danach können wir uns zusammensetzen und darüber reden, was dir aufgefallen ist.", es: "¡Claro! Después podemos sentarnos a conversar sobre lo que te llamó la atención.", ok: true },
            { t: "Natürlich! Danach können wir reden darüber, was dir aufgefallen ist.", es: "¡Claro! Después podemos hablar sobre lo que te llamó la atención.", ok: false,
              fix: "Con un modal, el infinitivo cierra la oración principal: «Danach können wir darüber reden, was ...»." }
          ],
          clave: ["gern", "Stunde", "aufgefallen"],
          tip: "«Hospitieren» = observar la clase de un colega para aprender. Es muy común en la formación docente alemana." },
        { bot: "Und wenn mir mal ein Fehler passiert, zum Beispiel mit Eltern?", es: "¿Y si un día cometo un error, por ejemplo con unos papás?",
          opciones: [
            { t: "Dann sprichst du offen darüber. Fehler gehören dazu.", es: "Entonces lo hablas abiertamente. Los errores hacen parte.", ok: true },
            { t: "Dann sag es ehrlich und such eine Lösung. Bei uns gilt: Der Fehler hält uns nicht auf, er lässt uns wachsen.", es: "Entonces dilo con honestidad y busca una solución. Para nosotros vale esto: el error no nos detiene, nos hace crecer.", ok: true },
            { t: "Dann sprichst du offen darüber. Fehler gehören zu dem.", es: "Entonces lo hablas abiertamente. Los errores hacen parte.", ok: false,
              fix: "«Hacer parte» se dice «dazugehören»: «Fehler gehören dazu». «Zu dem» no se usa así." }
          ],
          clave: ["Fehler", "gehören dazu", "ehrlich"],
          tip: "«Das gehört dazu» = eso hace parte del proceso. Frase ideal para la pedagogía del error." },
        { bot: "Danke, das hilft mir wirklich. Wann können wir uns nächste Woche treffen?", es: "Gracias, de verdad me ayuda. ¿Cuándo nos podemos ver la próxima semana?",
          opciones: [
            { t: "Wie wäre es mit Montag nach der siebten Stunde?", es: "¿Qué tal el lunes después de la séptima hora?", ok: true },
            { t: "Lass uns jeden Montag kurz zusammensitzen, zum Beispiel in der großen Pause.", es: "Reunámonos un ratito cada lunes, por ejemplo en el descanso largo.", ok: true },
            { t: "Wie wäre es mit Montag nach der sieben Stunde?", es: "¿Qué tal el lunes después de la séptima hora?", ok: false,
              fix: "Los ordinales se forman con -te/-ten y se declinan: «nach der siebten Stunde»." }
          ],
          clave: ["Montag", "Pause", "wie wäre es"],
          tip: "«Die große Pause» = el descanso largo de la mañana en los colegios alemanes." }
      ],
      cierre: { bot: "Perfekt, das trage ich mir gleich ein. Danke für deine Unterstützung!", es: "Perfecto, ya mismo lo anoto. ¡Gracias por tu apoyo!" },
      vocab: [
        { t: "begleiten", es: "acompañar" },
        { t: "die Störung", es: "la interrupción, la indisciplina" },
        { t: "mit etwas umgehen", es: "manejar algo" },
        { t: "konsequent", es: "coherente, firme" },
        { t: "die Fachschaft", es: "el área (docentes de una asignatura)" },
        { t: "hospitieren", es: "observar la clase de un colega" },
        { t: "Das gehört dazu.", es: "eso hace parte." },
        { t: "die große Pause", es: "el descanso largo" }
      ]
    },
    {
      id: "de-23", titulo: "Pelea por un balón en el recreo", nivel: "B1",
      tema: "Mediar un conflicto entre estudiantes",
      contexto: "En el recreo de una escuela de Rostock, dos estudiantes de 7.º grado se pelearon por un balón. Primero escuchas a uno de ellos y luego medias entre los dos.",
      rol: "Leon, 13 años, enojado porque siente que le hicieron trampa",
      turnos: [
        { bot: "Das ist so unfair! Finn hat mir einfach den Ball weggenommen!", es: "¡Eso es muy injusto! ¡Finn me quitó el balón así no más!",
          opciones: [
            { t: "Okay, Leon. Erst mal tief durchatmen. Was ist passiert?", es: "Bueno, Leon. Primero respira profundo. ¿Qué pasó?", ok: true },
            { t: "Ich sehe, dass du wütend bist. Setz dich kurz hin und erzähl mir in Ruhe, was passiert ist.", es: "Veo que estás enojado. Siéntate un momento y cuéntame con calma qué pasó.", ok: true },
            { t: "Okay, Leon. Beruhig dich und erzähl mir alles von Anfang.", es: "Bueno, Leon. Cálmate y cuéntame todo desde el principio.", ok: false,
              fix: "«Desde el principio» se dice «von Anfang an»: «Erzähl mir alles von Anfang an»." }
          ],
          clave: ["passiert", "wütend", "in Ruhe"],
          tip: "Primero nombra la emoción: «Ich sehe, dass du wütend bist». Así el estudiante se siente escuchado." },
        { bot: "Wir haben Fußball gespielt, und er hat einfach den Ball genommen und ist weggelaufen.", es: "Estábamos jugando fútbol y él simplemente cogió el balón y salió corriendo.",
          opciones: [
            { t: "Und was hast du dann gemacht?", es: "¿Y qué hiciste tú entonces?", ok: true },
            { t: "Verstehe. Und wie hast du reagiert, als er den Ball genommen hat?", es: "Entiendo. ¿Y cómo reaccionaste cuando él cogió el balón?", ok: true },
            { t: "Verstehe. Und wie hast du reagiert, wenn er den Ball genommen hat?", es: "Entiendo. ¿Y cómo reaccionaste cuando él cogió el balón?", ok: false,
              fix: "Para un hecho único en el pasado, «cuando» es «als»: «als er den Ball genommen hat». «Wenn» es para el presente, el futuro o lo que se repite." }
          ],
          clave: ["reagiert", "als", "gemacht"],
          tip: "«Als» = cuando (una sola vez en el pasado). «Wenn» = cuando (presente, futuro o cada vez que)." },
        { bot: "Ich habe ihn geschubst. Aber nur ein bisschen!", es: "Lo empujé. ¡Pero solo un poquito!",
          opciones: [
            { t: "Danke, dass du ehrlich bist. Schubsen ist aber nicht in Ordnung.", es: "Gracias por ser honesto. Pero empujar no está bien.", ok: true },
            { t: "Gut, dass du das zugibst. Wut ist okay, aber Schubsen geht nicht, auch nicht ein bisschen.", es: "Qué bueno que lo admites. La rabia es válida, pero empujar no, ni siquiera un poquito.", ok: true },
            { t: "Danke, dass du ehrlich bist. Aber du darfst nicht ihn schubsen.", es: "Gracias por ser honesto. Pero no puedes empujarlo.", ok: false,
              fix: "«Nicht» va después del pronombre objeto: «Du darfst ihn nicht schubsen»." }
          ],
          clave: ["ehrlich", "in Ordnung", "Schubsen"],
          tip: "«Zugeben» = admitir. Reconocer la honestidad antes de corregir ayuda a que el estudiante no se cierre." },
        { bot: "Und was ist mit Finn? Der bekommt wieder keinen Ärger!", es: "¿Y qué pasa con Finn? ¡Otra vez a él no le dicen nada!",
          opciones: [
            { t: "Ich spreche auch mit Finn. Jeder darf seine Seite erzählen.", es: "También voy a hablar con Finn. Cada uno puede contar su versión.", ok: true },
            { t: "Mit Finn rede ich genauso. Danach setzen wir uns zu dritt zusammen und suchen gemeinsam eine Lösung.", es: "Con Finn hablo igual. Después nos sentamos los tres y buscamos juntos una solución.", ok: true },
            { t: "Mit Finn rede ich genauso. Danach setzen wir uns zu drei zusammen.", es: "Con Finn hablo igual. Después nos sentamos los tres.", ok: false,
              fix: "«Los tres juntos» se dice «zu dritt» (zu zweit, zu dritt, zu viert)." }
          ],
          clave: ["Finn", "Lösung", "zu dritt"],
          tip: "«Ärger bekommen» = meterse en problemas. Aquí «bekommen» es recibir, no «volverse»." },
        { bot: "Na gut ... Jetzt sind wir alle hier. Was sollen wir machen?", es: "Bueno... Ya estamos todos aquí. ¿Qué hacemos?",
          opciones: [
            { t: "Jeder sagt zuerst, wie er sich gefühlt hat.", es: "Primero cada uno dice cómo se sintió.", ok: true },
            { t: "Ich schlage vor: Jeder sagt, wie er sich gefühlt hat, und dann überlegt ihr zusammen eine Regel für den Ball.", es: "Propongo esto: cada uno dice cómo se sintió y luego piensan juntos una regla para el balón.", ok: true },
            { t: "Ich schlage vor, dass jeder sagt, wie er hat sich gefühlt.", es: "Propongo que cada uno diga cómo se sintió.", ok: false,
              fix: "En la subordinada el verbo conjugado va al final: «wie er sich gefühlt hat»." }
          ],
          clave: ["gefühlt", "Regel", "zusammen"],
          tip: "Mediación en tres pasos: cada uno cuenta, cada uno dice cómo se sintió y juntos acuerdan una regla." },
        { bot: "Okay ... Wir könnten abwechselnd mit dem Ball spielen. Jede Pause ist ein anderer dran.", es: "Bueno... Podríamos jugar con el balón por turnos. Cada recreo le toca a uno distinto.",
          opciones: [
            { t: "Das ist eine faire Lösung. Seid ihr beide einverstanden?", es: "Es una solución justa. ¿Están los dos de acuerdo?", ok: true },
            { t: "Super Idee, und sie kommt von euch! Wollt ihr euch darauf die Hand geben?", es: "¡Súper idea, y salió de ustedes! ¿Quieren darse la mano para cerrar el trato?", ok: true },
            { t: "Das ist eine faire Lösung. Habt ihr beide einverstanden?", es: "Es una solución justa. ¿Están los dos de acuerdo?", ok: false,
              fix: "«Estar de acuerdo» es «einverstanden sein», con «sein»: «Seid ihr beide einverstanden?»." }
          ],
          clave: ["faire Lösung", "einverstanden", "beide"],
          tip: "«Abwechselnd» = por turnos. Una solución propuesta por los propios estudiantes se cumple mucho mejor." }
      ],
      cierre: { bot: "Ja, einverstanden ... Sorry, Finn, dass ich dich geschubst habe.", es: "Sí, de acuerdo... Perdón, Finn, por haberte empujado." },
      vocab: [
        { t: "wütend", es: "enojado, furioso" },
        { t: "tief durchatmen", es: "respirar profundo" },
        { t: "schubsen", es: "empujar" },
        { t: "zugeben", es: "admitir" },
        { t: "Ärger bekommen", es: "meterse en problemas" },
        { t: "zu dritt", es: "los tres juntos" },
        { t: "einverstanden sein", es: "estar de acuerdo" },
        { t: "abwechselnd", es: "por turnos" }
      ]
    },
    {
      id: "de-24", titulo: "Jurado en la feria de ciencias", nivel: "B1",
      tema: "Jurado de feria de ciencias",
      contexto: "Eres jurado en la feria de ciencias de una escuela de Kiel. Una estudiante presenta un filtro de agua casero hecho con arena, grava y carbón.",
      rol: "Sophie, 14 años, presenta su proyecto con orgullo y un poco de nervios",
      turnos: [
        { bot: "Hallo! Möchten Sie unser Projekt sehen? Es geht um einen Wasserfilter.", es: "¡Hola! ¿Quiere ver nuestro proyecto? Se trata de un filtro de agua.",
          opciones: [
            { t: "Ja, gern! Erklär mir bitte, wie euer Filter funktioniert.", es: "¡Sí, con gusto! Explícame, por favor, cómo funciona su filtro.", ok: true },
            { t: "Sehr gern. Was war denn eure Forschungsfrage?", es: "Con mucho gusto. ¿Cuál era su pregunta de investigación?", ok: true },
            { t: "Sehr gern. Was war eure Investigationsfrage?", es: "Con mucho gusto. ¿Cuál era su pregunta de investigación?", ok: false,
              fix: "Investigar en ciencia es «forschen»; la pregunta de investigación es «die Forschungsfrage». «Investigation» se usa más para pesquisas policiales o periodísticas." }
          ],
          clave: ["Forschungsfrage", "funktioniert", "Filter"],
          tip: "«Forschen» = investigar en ciencia. «Die Forschung» = la investigación." },
        { bot: "Unsere Frage war: Kann man schmutziges Wasser mit Sand, Kies und Kohle reinigen?", es: "Nuestra pregunta era: ¿se puede limpiar agua sucia con arena, grava y carbón?",
          opciones: [
            { t: "Spannend! Und wie habt ihr den Filter gebaut?", es: "¡Interesante! ¿Y cómo construyeron el filtro?", ok: true },
            { t: "Eine gute Frage. Welche Hypothese hattet ihr am Anfang?", es: "Buena pregunta. ¿Qué hipótesis tenían al principio?", ok: true },
            { t: "Eine gute Frage. Welcher Hypothese hattet ihr am Anfang?", es: "Buena pregunta. ¿Qué hipótesis tenían al principio?", ok: false,
              fix: "«Die Hypothese» es femenino y aquí va en acusativo: «Welche Hypothese hattet ihr?»." }
          ],
          clave: ["Hypothese", "gebaut", "am Anfang"],
          tip: "Ciclo científico: Frage → Hypothese → Experiment → Beobachtung → Ergebnis." },
        { bot: "Wir dachten, dass das Wasser danach trinkbar ist. Wir haben es durch drei Schichten gefiltert.", es: "Pensábamos que después el agua sería potable. La filtramos a través de tres capas.",
          opciones: [
            { t: "Und war das Wasser danach wirklich sauber?", es: "¿Y el agua sí quedó limpia después?", ok: true },
            { t: "Interessant. Woran habt ihr gemerkt, ob das Wasser sauberer geworden ist?", es: "Interesante. ¿En qué notaron si el agua quedó más limpia?", ok: true },
            { t: "Interessant. Habt ihr kontrolliert, ob das Wasser klarer geworden?", es: "Interesante. ¿Revisaron si el agua quedó más clara?", ok: false,
              fix: "Falta el auxiliar al final de la subordinada: «ob das Wasser klarer geworden ist»." }
          ],
          clave: ["sauber", "geworden", "gemerkt"],
          tip: "«Woran habt ihr das gemerkt?» = ¿en qué lo notaron? Pregunta clave para pedir evidencia." },
        { bot: "Das Wasser war viel klarer. Wir haben vorher und nachher Fotos gemacht.", es: "El agua quedó mucho más clara. Tomamos fotos antes y después.",
          opciones: [
            { t: "Sehr gut dokumentiert! Aber klar heißt nicht automatisch trinkbar.", es: "¡Muy bien documentado! Pero clara no significa automáticamente potable.", ok: true },
            { t: "Eure Fotos zeigen das gut. Aber Vorsicht: Klares Wasser kann trotzdem Bakterien enthalten, deshalb ist es nicht automatisch trinkbar.", es: "Sus fotos lo muestran bien. Pero ojo: el agua clara puede tener bacterias, por eso no es automáticamente potable.", ok: true },
            { t: "Sehr gut dokumentiert! Aber klar bedeutet nicht automatisch potabel.", es: "¡Muy bien documentado! Pero clara no significa automáticamente potable.", ok: false,
              fix: "«Potable» se dice «trinkbar»; el agua potable es «das Trinkwasser». «Potabel» no existe en alemán." }
          ],
          clave: ["trinkbar", "Bakterien", "klar"],
          tip: "Un filtro casero quita partículas, pero no garantiza agua potable: los microbios pasan. Nunca se debe beber el agua filtrada." },
        { bot: "Oh ... das wussten wir nicht. Was könnten wir noch verbessern?", es: "Ay... eso no lo sabíamos. ¿Qué podríamos mejorar?",
          opciones: [
            { t: "Ihr könntet jedes Mal nur eine Variable ändern.", es: "Podrían cambiar una sola variable cada vez.", ok: true },
            { t: "Ihr könntet testen, was passiert, wenn ihr nur eine Variable ändert, zum Beispiel die Dicke der Sandschicht.", es: "Podrían probar qué pasa si cambian una sola variable, por ejemplo el grosor de la capa de arena.", ok: true },
            { t: "Ihr könntet nur eine Variable ändern, zum Beispiel die Dicke von der Sand.", es: "Podrían cambiar una sola variable, por ejemplo el grosor de la arena.", ok: false,
              fix: "«Der Sand» es masculino: «die Dicke des Sandes» o «vom Sand». Más preciso: «die Dicke der Sandschicht»." }
          ],
          clave: ["Variable", "ändern", "Sandschicht"],
          tip: "Un buen experimento cambia una sola variable a la vez: así se sabe qué causó el resultado." },
        { bot: "Und wie finden Sie unser Projekt insgesamt?", es: "¿Y qué le parece nuestro proyecto en general?",
          opciones: [
            { t: "Ihr habt sehr sorgfältig gearbeitet. Glückwunsch!", es: "Trabajaron con mucho cuidado. ¡Felicitaciones!", ok: true },
            { t: "Eure Präsentation war klar und ehrlich, und ihr zeigt, dass ihr aus euren Ergebnissen lernt. Das ist echte Wissenschaft.", es: "Su presentación fue clara y honesta, y muestran que aprenden de sus resultados. Eso es ciencia de verdad.", ok: true },
            { t: "Ihr habt sehr sorgfältig gearbeitet. Ich bin sehr impressioniert.", es: "Trabajaron con mucho cuidado. Estoy muy impresionado(a).", ok: false,
              fix: "«Impresionado» se dice «beeindruckt»: «Ich bin sehr beeindruckt». «Impressioniert» suena a calco y casi no se usa." }
          ],
          clave: ["sorgfältig", "beeindruckt", "Wissenschaft"],
          tip: "Retroalimentación útil: un elogio concreto y una mejora concreta. Evita quedarte en «gut» o «toll»." }
      ],
      cierre: { bot: "Vielen Dank! Dann probieren wir das mit der Sandschicht nächste Woche aus.", es: "¡Muchas gracias! Entonces la próxima semana probamos lo de la capa de arena." },
      vocab: [
        { t: "die Forschungsfrage", es: "la pregunta de investigación" },
        { t: "die Hypothese", es: "la hipótesis" },
        { t: "die Schicht", es: "la capa" },
        { t: "der Kies", es: "la grava" },
        { t: "trinkbar", es: "potable" },
        { t: "die Variable", es: "la variable" },
        { t: "sorgfältig", es: "cuidadoso, con esmero" },
        { t: "beeindruckt", es: "impresionado" }
      ]
    },
    {
      id: "de-25", titulo: "Un proyecto STEAM entre Cali y Aquisgrán", nivel: "B2",
      tema: "Proyecto STEAM con un colega extranjero",
      contexto: "Tienes una videollamada con una profesora de Aquisgrán (Aachen) para diseñar un proyecto STEAM conjunto entre sus estudiantes y los tuyos.",
      rol: "Dra. Julia Brenner, profesora de Física e Informática, pragmática y llena de ideas",
      turnos: [
        { bot: "Schön, dass es heute klappt! Sie hatten ja vorgeschlagen, ein gemeinsames MINT-Projekt zu machen. Woran haben Sie gedacht?", es: "¡Qué bueno que hoy sí se pudo! Usted había propuesto hacer un proyecto STEAM conjunto. ¿En qué había pensado?",
          opciones: [
            { t: "Ich habe an ein Projekt zur Luftqualität in unseren beiden Städten gedacht.", es: "Pensé en un proyecto sobre la calidad del aire en nuestras dos ciudades.", ok: true },
            { t: "Mir schwebt ein Projekt vor, bei dem unsere Schüler mit einfachen Sensoren die Luftqualität messen und die Daten vergleichen.", es: "Tengo en mente un proyecto en el que nuestros estudiantes midan la calidad del aire con sensores sencillos y comparen los datos.", ok: true },
            { t: "Ich habe an ein Projekt zur Luftqualität gedenkt.", es: "Pensé en un proyecto sobre la calidad del aire.", ok: false,
              fix: "El participio de «denken» es irregular: «Ich habe an ein Projekt gedacht»." }
          ],
          clave: ["Luftqualität", "Sensoren", "gedacht"],
          tip: "«Mir schwebt ... vor» = tengo en mente ... Suena natural y profesional en una reunión." },
        { bot: "Klingt gut. Aber wo bleibt bei Ihnen das A in STEAM, also die Kunst?", es: "Suena bien. ¿Pero dónde queda en su propuesta la A de STEAM, es decir, el arte?",
          opciones: [
            { t: "Die Schüler gestalten mit den Daten Infografiken und Plakate.", es: "Los estudiantes diseñan infografías y carteles con los datos.", ok: true },
            { t: "Die Schüler sollen ihre Ergebnisse künstlerisch darstellen, etwa als Datenvisualisierung oder als Wandbild für die Schule.", es: "Los estudiantes deben representar sus resultados de forma artística, por ejemplo como visualización de datos o como mural para el colegio.", ok: true },
            { t: "Die Schüler sollen ihre Ergebnisse in eine künstlerische Form präsentieren.", es: "Los estudiantes deben presentar sus resultados en forma artística.", ok: false,
              fix: "Aquí «in» indica el modo o estado, no una dirección: va con dativo: «in einer künstlerischen Form»." }
          ],
          clave: ["künstlerisch", "darstellen", "Infografiken"],
          tip: "En Alemania se dice «MINT»; «STEAM» se entiende en contextos internacionales. También se oye «MINT plus Kunst»." },
        { bot: "Gefällt mir. Und technisch gesehen: Welche Ausstattung bräuchten Ihre Schüler?", es: "Me gusta. Y desde lo técnico: ¿qué equipos necesitarían sus estudiantes?",
          opciones: [
            { t: "Wir bräuchten einfache Mikrocontroller und Feinstaubsensoren.", es: "Necesitaríamos microcontroladores sencillos y sensores de material particulado.", ok: true },
            { t: "Wir haben einen kleinen Makerspace, aber für die Sensoren müssten wir noch Mittel beantragen.", es: "Tenemos un pequeño espacio maker, pero para los sensores tendríamos que solicitar recursos.", ok: true },
            { t: "Wir haben einen kleinen Makerspace, aber für die Sensoren müssten wir noch Mittel solizitieren.", es: "Tenemos un pequeño espacio maker, pero para los sensores tendríamos que solicitar recursos.", ok: false,
              fix: "«Solicitar fondos» se dice «Mittel beantragen» o «einen Antrag stellen». «Solizitieren» no existe en alemán." }
          ],
          clave: ["Mikrocontroller", "Sensoren", "beantragen"],
          tip: "«Die Mittel» (plural) = los recursos, los fondos. «Der Antrag» = la solicitud formal." },
        { bot: "Und die Sprache? Unsere Schüler sprechen kaum Spanisch.", es: "¿Y el idioma? Nuestros estudiantes casi no hablan español.",
          opciones: [
            { t: "Wir könnten auf Englisch kommunizieren.", es: "Podríamos comunicarnos en inglés.", ok: true },
            { t: "Ich schlage Englisch als Arbeitssprache vor, und in jedem Treffen lernen beide Gruppen ein paar Sätze der anderen Sprache.", es: "Propongo el inglés como idioma de trabajo, y en cada encuentro ambos grupos aprenden unas frases del otro idioma.", ok: true },
            { t: "Wir könnten auf Englisch kommunizieren, und jede Gruppe lernt ein paar Sätze von der andere Sprache.", es: "Podríamos comunicarnos en inglés, y cada grupo aprende unas frases del otro idioma.", ok: false,
              fix: "Tras «von» va dativo y el adjetivo toma -en: «von der anderen Sprache». Más elegante, en genitivo: «ein paar Sätze der anderen Sprache»." }
          ],
          clave: ["Englisch", "Arbeitssprache", "Sätze"],
          tip: "«Auf Englisch» = en inglés (hablar, escribir). «Die Arbeitssprache» = el idioma de trabajo." },
        { bot: "Wie stellen Sie sicher, dass die Daten aus Cali und Aachen wirklich vergleichbar sind?", es: "¿Cómo garantiza que los datos de Cali y de Aquisgrán sean realmente comparables?",
          opciones: [
            { t: "Beide Schulen benutzen dieselben Sensoren und messen zur gleichen Uhrzeit.", es: "Ambos colegios usan los mismos sensores y miden a la misma hora.", ok: true },
            { t: "Wir sollten ein gemeinsames Messprotokoll erstellen: gleiche Sensoren, gleiche Höhe, gleiche Messzeiten. Sonst vergleichen wir Äpfel mit Birnen.", es: "Deberíamos elaborar un protocolo de medición común: mismos sensores, misma altura, mismos horarios. Si no, comparamos peras con manzanas.", ok: true },
            { t: "Beide Schulen benutzen die gleiche Sensoren und messen zur gleichen Uhrzeit.", es: "Ambos colegios usan los mismos sensores y miden a la misma hora.", ok: false,
              fix: "En plural, tras «die» el adjetivo termina en -en: «die gleichen Sensoren» (o «dieselben Sensoren»)." }
          ],
          clave: ["Messprotokoll", "dieselben", "vergleichbar"],
          tip: "«Äpfel mit Birnen vergleichen» = comparar peras con manzanas: datos que no son comparables." },
        { bot: "Ein gemeinsames Protokoll ist sinnvoll. Und wie würden wir das Projekt am Ende bewerten?", es: "Un protocolo común tiene sentido. ¿Y cómo evaluaríamos el proyecto al final?",
          opciones: [
            { t: "Mit einer gemeinsamen Präsentation und einem Bewertungsraster.", es: "Con una presentación conjunta y una rúbrica.", ok: true },
            { t: "Ich würde nicht nur das Produkt, sondern auch den Prozess bewerten, zum Beispiel mit einem Lerntagebuch.", es: "Yo evaluaría no solo el producto, sino también el proceso, por ejemplo con un diario de aprendizaje.", ok: true },
            { t: "Ich würde nicht nur das Produkt, aber auch den Prozess bewerten.", es: "Yo evaluaría no solo el producto, sino también el proceso.", ok: false,
              fix: "«No solo ..., sino también» es «nicht nur ..., sondern auch». Después de una negación, para corregir o ampliar, se usa «sondern», no «aber»." }
          ],
          clave: ["Prozess", "Produkt", "sondern auch"],
          tip: "«Sondern» corrige tras una negación: «nicht heute, sondern morgen». «Aber» solo contrasta: «klein, aber fein»." },
        { bot: "Einverstanden. Was wäre der nächste Schritt?", es: "De acuerdo. ¿Cuál sería el siguiente paso?",
          opciones: [
            { t: "Ich schicke Ihnen bis Freitag einen Entwurf des Projektplans.", es: "Le envío un borrador del plan del proyecto a más tardar el viernes.", ok: true },
            { t: "Ich entwerfe einen Zeitplan, und Sie prüfen, ob er zu Ihrem Schuljahr passt. Nächste Woche stimmen wir uns dann ab.", es: "Yo diseño un cronograma y usted revisa si encaja con su año escolar. La próxima semana nos coordinamos.", ok: true },
            { t: "Ich schicke Ihnen einen Entwurf, und Sie kontrollieren, ob er zu Ihrem Schuljahr passt.", es: "Le envío un borrador y usted revisa si encaja con su año escolar.", ok: false,
              fix: "«Revisar un documento» se dice «prüfen» o «durchsehen». «Kontrollieren» suena a vigilar o inspeccionar a alguien." }
          ],
          clave: ["Entwurf", "Zeitplan", "prüfen"],
          tip: "«Sich abstimmen» = coordinarse, ponerse de acuerdo. Se usa muchísimo en el trabajo en Alemania." }
      ],
      cierre: { bot: "Wunderbar. Ich freue mich auf die Zusammenarbeit über den Atlantik hinweg!", es: "¡Maravilloso! ¡Me alegra mucho esta colaboración a través del Atlántico!" },
      vocab: [
        { t: "Mir schwebt ... vor", es: "tengo en mente ..." },
        { t: "die Luftqualität", es: "la calidad del aire" },
        { t: "künstlerisch darstellen", es: "representar de forma artística" },
        { t: "Mittel beantragen", es: "solicitar recursos o fondos" },
        { t: "die Arbeitssprache", es: "el idioma de trabajo" },
        { t: "das Messprotokoll", es: "el protocolo de medición" },
        { t: "nicht nur ..., sondern auch", es: "no solo ..., sino también" },
        { t: "sich abstimmen", es: "coordinarse" }
      ]
    },
    {
      id: "de-26", titulo: "Dos semanas más, por favor", nivel: "B2",
      tema: "Negociar un plazo",
      contexto: "Tu colegio debe entregar el viernes un informe a una red de escuelas aliadas en Alemania. Estás en plena temporada de evaluaciones y necesitas negociar más tiempo con el coordinador.",
      rol: "Dr. Thomas Lindner, coordinador de la red de escuelas aliadas en Bonn, exigente pero razonable",
      turnos: [
        { bot: "Guten Tag! Ich wollte nur kurz nachfragen: Bekommen wir Ihren Projektbericht wie vereinbart bis Freitag?", es: "¡Buenas tardes! Solo quería confirmar: ¿recibimos su informe del proyecto el viernes, como acordamos?",
          opciones: [
            { t: "Guten Tag, Herr Dr. Lindner. Genau darüber wollte ich mit Ihnen sprechen.", es: "Buenas tardes, doctor Lindner. Justamente de eso quería hablar con usted.", ok: true },
            { t: "Guten Tag! Gut, dass Sie anrufen. Ich fürchte, den Freitag schaffen wir leider nicht ganz.", es: "¡Buenas tardes! Qué bueno que llama. Me temo que para el viernes no vamos a alcanzar del todo.", ok: true },
            { t: "Guten Tag! Ich fürchte, dass wir nicht können den Bericht bis Freitag fertigstellen.", es: "¡Buenas tardes! Me temo que no podemos terminar el informe para el viernes.", ok: false,
              fix: "En la subordinada con «dass» el verbo conjugado va de último: «dass wir den Bericht nicht bis Freitag fertigstellen können»." }
          ],
          clave: ["Freitag", "fürchte", "darüber"],
          tip: "«Ich fürchte, ...» = me temo que ... Suaviza una mala noticia en un contexto profesional." },
        { bot: "Oh. Woran liegt es denn?", es: "Ah. ¿Y a qué se debe?",
          opciones: [
            { t: "Wir sind gerade mitten in der Prüfungszeit.", es: "Estamos en plena temporada de evaluaciones.", ok: true },
            { t: "Bei uns läuft gerade die Phase der Abschlussprüfungen, und das ganze Kollegium ist stark eingebunden.", es: "En este momento estamos en los exámenes finales y todo el equipo docente está muy ocupado con eso.", ok: true },
            { t: "Wir sind gerade mitten in die Prüfungszeit.", es: "Estamos en plena temporada de evaluaciones.", ok: false,
              fix: "«Mitten in» para decir dónde o cuándo se está rige dativo: «Wir sind mitten in der Prüfungszeit». El acusativo «in die» indica dirección." }
          ],
          clave: ["Prüfungszeit", "mitten in", "eingebunden"],
          tip: "«Mitten in» = en pleno, en medio de. «Mitten in der Nacht» = en plena noche." },
        { bot: "Verstehe. Wie viel Zeit bräuchten Sie denn zusätzlich?", es: "Entiendo. ¿Cuánto tiempo adicional necesitarían?",
          opciones: [
            { t: "Wir bräuchten noch zwei Wochen.", es: "Necesitaríamos dos semanas más.", ok: true },
            { t: "Realistisch wären zwei zusätzliche Wochen. Dann könnten wir Ihnen einen vollständigen und sorgfältig geprüften Bericht schicken.", es: "Siendo realistas, dos semanas adicionales. Así podríamos enviarle un informe completo y revisado con cuidado.", ok: true },
            { t: "Wir würden zwei Wochen mehr brauchen, um einen vollständigen Bericht schicken.", es: "Necesitaríamos dos semanas más para enviar un informe completo.", ok: false,
              fix: "«Um» exige «zu» antes del infinitivo final: «um einen vollständigen Bericht zu schicken»." }
          ],
          clave: ["zwei Wochen", "bräuchten", "vollständigen"],
          tip: "«Bräuchten» (Konjunktiv II de «brauchen») suena más cortés que «brauchen» al pedir algo." },
        { bot: "Zwei Wochen sind schwierig. Der Bericht fließt in unsere Gesamtauswertung für den Förderer ein.", es: "Dos semanas es difícil. El informe hace parte de nuestra evaluación general para el financiador.",
          opciones: [
            { t: "Könnten wir dann zuerst die wichtigsten Teile schicken?", es: "¿Podríamos entonces enviar primero las partes más importantes?", ok: true },
            { t: "Ich verstehe. Wie wäre es, wenn wir Ihnen bis Freitag die Zusammenfassung und die Kerndaten schicken und den vollständigen Bericht eine Woche später?", es: "Entiendo. ¿Qué tal si le enviamos el viernes el resumen y los datos clave, y el informe completo una semana después?", ok: true },
            { t: "Ich verstehe. Wie wäre es, wenn wir Ihnen bis Freitag die Zusammenfassung schicken und der Rest eine Woche später?", es: "Entiendo. ¿Qué tal si le enviamos el viernes el resumen y el resto una semana después?", ok: false,
              fix: "«Der Rest» también es complemento directo de «schicken», así que va en acusativo: «... und den Rest eine Woche später»." }
          ],
          clave: ["Zusammenfassung", "wie wäre es", "eine Woche"],
          tip: "Negociar es ofrecer una alternativa: «Wie wäre es, wenn ...?» o «Ich könnte Ihnen anbieten, ...»." },
        { bot: "Das wäre ein Kompromiss. Aber kann ich mich darauf verlassen?", es: "Eso sería un punto medio. ¿Pero puedo contar con eso?",
          opciones: [
            { t: "Ja, darauf können Sie sich verlassen.", es: "Sí, puede contar con eso.", ok: true },
            { t: "Ja, das sichere ich Ihnen zu. Außerdem schicke ich Ihnen am Mittwoch einen kurzen Zwischenstand.", es: "Sí, se lo garantizo. Además, el miércoles le envío un breve reporte de avance.", ok: true },
            { t: "Ja, Sie können sich in mir verlassen.", es: "Sí, puede confiar en mí.", ok: false,
              fix: "«Contar con / confiar en alguien» es «sich auf jemanden verlassen» (auf + acusativo): «Sie können sich auf mich verlassen»." }
          ],
          clave: ["verlassen", "darauf", "Zwischenstand"],
          tip: "«Der Zwischenstand» = el reporte de avance. Ofrecerlo genera confianza en una negociación." },
        { bot: "Gut. Dann schreiben Sie mir bitte kurz eine E-Mail mit der neuen Vereinbarung.", es: "Bien. Entonces escríbame por favor un correo corto con el nuevo acuerdo.",
          opciones: [
            { t: "Mache ich noch heute. Vielen Dank für Ihr Verständnis.", es: "Lo hago hoy mismo. Muchas gracias por su comprensión.", ok: true },
            { t: "Selbstverständlich. Ich fasse die neuen Termine schriftlich zusammen und schicke sie Ihnen noch heute.", es: "Por supuesto. Resumo por escrito las nuevas fechas y se las envío hoy mismo.", ok: true },
            { t: "Mache ich noch heute. Danke für Ihr Verstehen.", es: "Lo hago hoy mismo. Gracias por su comprensión.", ok: false,
              fix: "«Comprensión» en el sentido de empatía es «das Verständnis»: «Danke für Ihr Verständnis»." }
          ],
          clave: ["Verständnis", "schriftlich", "heute"],
          tip: "En Alemania, tras un acuerdo verbal se espera confirmarlo por escrito: «etwas schriftlich festhalten»." },
        { bot: "Danke Ihnen. Und viel Erfolg bei den Prüfungen!", es: "Gracias a usted. ¡Y muchos éxitos con las evaluaciones!",
          opciones: [
            { t: "Danke! Ich melde mich am Mittwoch.", es: "¡Gracias! Me comunico con usted el miércoles.", ok: true },
            { t: "Vielen Dank, Herr Dr. Lindner. Ich melde mich wie besprochen am Mittwoch mit dem Zwischenstand.", es: "Muchas gracias, doctor Lindner. Como acordamos, el miércoles me comunico con el reporte de avance.", ok: true },
            { t: "Vielen Dank! Ich zurückmelde mich am Mittwoch mit dem Zwischenstand.", es: "¡Muchas gracias! El miércoles le respondo con el reporte de avance.", ok: false,
              fix: "«Zurückmelden» es separable y el prefijo cierra la oración: «Ich melde mich am Mittwoch mit dem Zwischenstand zurück»." }
          ],
          clave: ["melde mich", "Mittwoch", "besprochen"],
          tip: "«Wie besprochen» = como lo acordamos. Muy útil para cerrar llamadas y correos de trabajo." }
      ],
      cierre: { bot: "Gern. Auf Wiederhören!", es: "Con gusto. ¡Hasta luego!" },
      vocab: [
        { t: "nachfragen", es: "consultar, preguntar para confirmar" },
        { t: "Ich fürchte, ...", es: "me temo que ..." },
        { t: "mitten in", es: "en pleno, en medio de" },
        { t: "der Kompromiss", es: "el punto medio, el acuerdo" },
        { t: "sich verlassen auf", es: "contar con, confiar en" },
        { t: "der Zwischenstand", es: "el reporte de avance" },
        { t: "das Verständnis", es: "la comprensión" },
        { t: "wie besprochen", es: "como lo acordamos" }
      ]
    },
    {
      id: "de-27", titulo: "Me equivoqué contigo: te pido perdón", nivel: "B2",
      tema: "Disculparse y reparar un error",
      contexto: "En tu intercambio en Wurzburgo acusaste ayer, delante de toda la clase, a un estudiante de copiar en una prueba. Hoy sabes que no copió y quieres disculparte y reparar el daño.",
      rol: "Noah, 16 años, dolido y desconfiado después de lo que pasó",
      turnos: [
        { bot: "Sie wollten mich sprechen?", es: "¿Quería hablar conmigo?",
          opciones: [
            { t: "Ja, Noah. Ich möchte mich bei dir entschuldigen.", es: "Sí, Noah. Quiero pedirte perdón.", ok: true },
            { t: "Ja, danke, dass du gekommen bist. Ich schulde dir eine Entschuldigung.", es: "Sí, gracias por venir. Te debo una disculpa.", ok: true },
            { t: "Ja, Noah. Ich möchte dich entschuldigen.", es: "Sí, Noah. Quiero pedirte perdón.", ok: false,
              fix: "«Jemanden entschuldigen» es excusar a alguien (justificar su ausencia). Para pedir perdón: «sich bei jemandem entschuldigen»: «Ich möchte mich bei dir entschuldigen»." }
          ],
          clave: ["entschuldigen", "Entschuldigung", "bei dir"],
          tip: "«Sich entschuldigen bei + persona für + cosa»: «Ich entschuldige mich bei dir für meinen Fehler»." },
        { bot: "Wofür denn?", es: "¿Por qué?",
          opciones: [
            { t: "Ich habe dir gestern vorgeworfen, abgeschrieben zu haben. Das war falsch.", es: "Ayer te acusé de haber copiado. Eso estuvo mal.", ok: true },
            { t: "Ich habe dich gestern vor der ganzen Klasse beschuldigt, abgeschrieben zu haben, obwohl das nicht stimmte.", es: "Ayer te acusé delante de toda la clase de haber copiado, aunque no era cierto.", ok: true },
            { t: "Ich habe gestern vor der ganzen Klasse gesagt, dass du hast kopiert.", es: "Ayer dije delante de toda la clase que copiaste.", ok: false,
              fix: "Copiar en una prueba es «abschreiben» («kopieren» es fotocopiar o copiar archivos), y con «dass» el verbo va al final: «dass du abgeschrieben hast»." }
          ],
          clave: ["abgeschrieben", "vorgeworfen", "Klasse"],
          tip: "«Abschreiben» = copiar en un examen. «Jemandem etwas vorwerfen» = acusar o reprochar algo a alguien." },
        { bot: "Ja. Das war echt peinlich. Alle haben mich angeschaut.", es: "Sí. Fue muy vergonzoso. Todos me miraron.",
          opciones: [
            { t: "Das verstehe ich. Es tut mir wirklich leid.", es: "Lo entiendo. De verdad lo siento.", ok: true },
            { t: "Das kann ich gut nachvollziehen. Es tut mir aufrichtig leid, dass ich dich in diese Situation gebracht habe.", es: "Lo entiendo perfectamente. Siento sinceramente haberte puesto en esa situación.", ok: true },
            { t: "Das verstehe ich. Ich bin auch sehr peinlich.", es: "Lo entiendo. Yo también siento mucha vergüenza.", ok: false,
              fix: "«Ich bin peinlich» significa «yo hago pasar vergüenza a otros». Para decir que sientes vergüenza: «Es ist mir sehr peinlich» o «Ich schäme mich»." }
          ],
          clave: ["tut mir leid", "nachvollziehen", "peinlich"],
          tip: "Una disculpa completa reconoce el hecho, nombra el daño, pide perdón y repara. Sin «aber» al final." },
        { bot: "Warum haben Sie das überhaupt gedacht?", es: "¿Y por qué pensó eso?",
          opciones: [
            { t: "Eure Antworten waren sehr ähnlich, aber ich hätte zuerst mit dir reden müssen.", es: "Sus respuestas eran muy parecidas, pero yo debí hablar contigo primero.", ok: true },
            { t: "Deine Antworten ähnelten denen deines Nachbarn sehr, und ich habe vorschnell geurteilt. Das war unprofessionell.", es: "Tus respuestas se parecían mucho a las de tu compañero, y juzgué con demasiada prisa. Eso fue poco profesional.", ok: true },
            { t: "Eure Antworten waren sehr ähnlich, aber ich hätte zuerst mit dir müssen reden.", es: "Sus respuestas eran muy parecidas, pero yo debí hablar contigo primero.", ok: false,
              fix: "Con «hätte» + doble infinitivo, el modal va de último: «ich hätte zuerst mit dir reden müssen»." }
          ],
          clave: ["ähnlich", "reden müssen", "geurteilt"],
          tip: "«Ich hätte ... müssen» = debí haber ... Sirve para reconocer lo que se debió hacer." },
        { bot: "Und jetzt denken alle, dass ich ein Betrüger bin.", es: "Y ahora todos piensan que soy un tramposo.",
          opciones: [
            { t: "Deshalb möchte ich das morgen vor der Klasse richtigstellen.", es: "Por eso quiero aclararlo mañana delante de la clase.", ok: true },
            { t: "Das möchte ich ändern: Morgen sage ich der Klasse offen, dass ich mich geirrt habe, natürlich nur, wenn du einverstanden bist.", es: "Eso quiero cambiarlo: mañana le digo abiertamente a la clase que me equivoqué, claro, solo si estás de acuerdo.", ok: true },
            { t: "Morgen sage ich der Klasse, dass ich mich verwechselt habe.", es: "Mañana le digo a la clase que me equivoqué.", ok: false,
              fix: "Equivocarse es «sich irren»: «dass ich mich geirrt habe». «Verwechseln» es confundir una cosa o persona con otra." }
          ],
          clave: ["richtigstellen", "geirrt", "einverstanden"],
          tip: "«Etwas richtigstellen» = aclarar públicamente, corregir un malentendido." },
        { bot: "Okay ... Ja, das wäre mir wichtig.", es: "Bueno... Sí, eso sería importante para mí.",
          opciones: [
            { t: "Gut, dann machen wir das so. Und deine Note bleibt natürlich, wie sie ist.", es: "Bien, entonces lo hacemos así. Y tu nota, por supuesto, queda como está.", ok: true },
            { t: "Dann machen wir es so. Danke, dass du mir die Chance gibst, meinen Fehler wiedergutzumachen.", es: "Entonces lo hacemos así. Gracias por darme la oportunidad de reparar mi error.", ok: true },
            { t: "Dann machen wir es so. Danke, dass du mir die Chance gibst, um meinen Fehler zu reparieren.", es: "Entonces lo hacemos así. Gracias por darme la oportunidad de reparar mi error.", ok: false,
              fix: "Reparar un daño es «wiedergutmachen» («reparieren» es para objetos), y tras «die Chance» no va «um»: «die Chance, meinen Fehler wiedergutzumachen»." }
          ],
          clave: ["wiedergutzumachen", "Chance", "Note"],
          tip: "«Wiedergutmachen» = reparar un daño. «Reparieren» = arreglar un objeto." },
        { bot: "Danke, dass Sie sich entschuldigt haben. Das machen nicht viele Lehrer.", es: "Gracias por disculparse. Eso no lo hacen muchos profesores.",
          opciones: [
            { t: "Auch Lehrer machen Fehler. Wichtig ist, daraus zu lernen.", es: "Los profesores también cometemos errores. Lo importante es aprender de ellos.", ok: true },
            { t: "Fehler machen wir alle. Der Fehler hält uns nicht auf: Er lehrt uns etwas, und heute hast du auch mir etwas beigebracht.", es: "Todos cometemos errores. El error no nos detiene: nos enseña algo, y hoy tú también me enseñaste algo a mí.", ok: true },
            { t: "Auch Lehrer machen Fehler. Wichtig ist, von ihnen lernen.", es: "Los profesores también cometemos errores. Lo importante es aprender de ellos.", ok: false,
              fix: "Tras «Wichtig ist, ...» el infinitivo lleva «zu»: «Wichtig ist, daraus zu lernen»." }
          ],
          clave: ["Fehler", "lernen", "beigebracht"],
          tip: "Modelar una disculpa enseña más que cualquier sermón: los estudiantes aprenden cómo se repara un error." }
      ],
      cierre: { bot: "Bis morgen dann. Und ... danke.", es: "Hasta mañana, entonces. Y... gracias." },
      vocab: [
        { t: "sich entschuldigen bei", es: "pedir perdón a" },
        { t: "die Entschuldigung", es: "la disculpa" },
        { t: "abschreiben", es: "copiar (en una prueba)" },
        { t: "jemandem etwas vorwerfen", es: "acusar o reprochar algo a alguien" },
        { t: "peinlich", es: "vergonzoso" },
        { t: "sich irren", es: "equivocarse" },
        { t: "richtigstellen", es: "aclarar, rectificar" },
        { t: "wiedergutmachen", es: "reparar (un daño)" }
      ]
    },
    {
      id: "de-28", titulo: "Ajustes razonables para Lukas", nivel: "C1",
      tema: "Ajustes razonables para un estudiante con discapacidad",
      contexto: "En tu escuela aliada de Maguncia (Mainz) te reúnes con la educadora especial para acordar ajustes para un estudiante con baja visión de tu clase de Matemáticas.",
      rol: "Dra. Ines Albrecht, docente de educación especial (Sonderpädagogin), experta en inclusión, precisa y cálida",
      turnos: [
        { bot: "Schön, dass Sie sich Zeit nehmen. Es geht um Lukas aus Ihrer Mathegruppe. Was ist Ihnen bisher aufgefallen?", es: "Gracias por sacar el tiempo. Se trata de Lukas, de su grupo de Matemáticas. ¿Qué ha notado hasta ahora?",
          opciones: [
            { t: "Lukas arbeitet engagiert, aber er kann die Tafelbilder kaum erkennen.", es: "Lukas trabaja con compromiso, pero casi no logra distinguir lo que escribo en el tablero.", ok: true },
            { t: "Mir ist aufgefallen, dass Lukas sehr motiviert ist, aber bei Grafiken und kleiner Schrift an der Tafel schnell den Anschluss verliert.", es: "He notado que Lukas está muy motivado, pero con las gráficas y la letra pequeña del tablero se queda atrás rápidamente.", ok: true },
            { t: "Lukas ist sehr motiviert, aber er kann nicht gut sehen die Tafel.", es: "Lukas está muy motivado, pero no ve bien el tablero.", ok: false,
              fix: "Con un verbo modal, el infinitivo va al final: «Er kann die Tafel nicht gut sehen». Más preciso: «Er kann die Tafel schlecht erkennen»." }
          ],
          clave: ["aufgefallen", "Tafel", "erkennen"],
          tip: "«Mir ist aufgefallen, dass ...» = he notado que ... Describe lo observado sin juzgar." },
        { bot: "Das deckt sich mit unserer Diagnostik: Lukas hat eine Sehbehinderung. Welche Anpassungen könnten Sie sich im Unterricht vorstellen?", es: "Eso coincide con nuestro diagnóstico: Lukas tiene baja visión. ¿Qué ajustes se imagina en la clase?",
          opciones: [
            { t: "Ich könnte ihm Arbeitsblätter in vergrößerter Schrift geben.", es: "Podría darle guías con letra ampliada.", ok: true },
            { t: "Ich könnte ihm die Materialien vorab digital schicken, damit er sie auf dem Tablet vergrößern kann, und ihm einen Platz nah an der Tafel anbieten.", es: "Podría enviarle los materiales en digital con anticipación, para que los amplíe en la tableta, y ofrecerle un puesto cerca del tablero.", ok: true },
            { t: "Ich könnte die Arbeitsblätter für ihn in größere Schrift drucken.", es: "Podría imprimirle las guías en letra más grande.", ok: false,
              fix: "Aquí «in» indica el modo, no una dirección, así que va con dativo: «in größerer Schrift drucken»." }
          ],
          clave: ["vergrößerter", "digital", "Platz"],
          tip: "«Die Sehbehinderung» = la baja visión. Se nombra la condición sin definir a la persona por ella." },
        { bot: "Sehr gut. Wichtig ist uns aber auch, dass Lukas nicht ständig als Sonderfall wahrgenommen wird.", es: "Muy bien. Pero también nos importa que Lukas no sea visto todo el tiempo como un caso especial.",
          opciones: [
            { t: "Da stimme ich Ihnen zu. Die Anpassungen sollten möglichst unauffällig sein.", es: "Estoy de acuerdo con usted. Los ajustes deberían ser lo más discretos posible.", ok: true },
            { t: "Absolut. Vieles, was Lukas hilft, etwa eine klare Struktur und gut lesbare Materialien, nützt ohnehin der ganzen Klasse.", es: "Totalmente. Mucho de lo que ayuda a Lukas, como una estructura clara y materiales legibles, le sirve de todos modos a toda la clase.", ok: true },
            { t: "Absolut. Vieles, was Lukas hilft, nützt auch die ganze Klasse.", es: "Totalmente. Mucho de lo que ayuda a Lukas le sirve también a toda la clase.", ok: false,
              fix: "«Nützen» rige dativo, igual que «helfen»: «nützt auch der ganzen Klasse»." }
          ],
          clave: ["unauffällig", "ganzen Klasse", "Struktur"],
          tip: "Diseño universal para el aprendizaje: lo imprescindible para algunos suele ser útil para todos." },
        { bot: "Genau. Und bei Klassenarbeiten? Lukas hat Anspruch auf einen Nachteilsausgleich.", es: "Exacto. ¿Y en las evaluaciones escritas? Lukas tiene derecho a una compensación de desventajas.",
          opciones: [
            { t: "Dann bekommt er mehr Zeit und die Aufgaben in größerer Schrift.", es: "Entonces recibe más tiempo y las preguntas con letra más grande.", ok: true },
            { t: "Ich würde ihm eine Zeitverlängerung gewähren und die Klassenarbeit in vergrößertem Format vorbereiten, ohne die inhaltlichen Anforderungen zu verändern.", es: "Le concedería tiempo adicional y prepararía la evaluación en formato ampliado, sin cambiar las exigencias de contenido.", ok: true },
            { t: "Ich würde ihm mehr Zeit geben, aber die Anforderungen wären die gleichen als für die anderen.", es: "Le daría más tiempo, pero las exigencias serían las mismas que para los demás.", ok: false,
              fix: "Para expresar igualdad se usa «wie»: «die gleichen wie für die anderen». «Als» va con comparativos de desigualdad: «größer als»." }
          ],
          clave: ["Nachteilsausgleich", "Zeitverlängerung", "Anforderungen"],
          tip: "El «Nachteilsausgleich» ajusta las condiciones de la evaluación, no baja la exigencia del contenido. Es un ajuste razonable." },
        { bot: "Richtig. Wie würden Sie Lukas selbst in diese Entscheidungen einbeziehen?", es: "Correcto. ¿Cómo involucraría al propio Lukas en estas decisiones?",
          opciones: [
            { t: "Ich würde ihn fragen, was ihm am meisten hilft.", es: "Le preguntaría qué es lo que más le ayuda.", ok: true },
            { t: "Ich würde ein Gespräch mit ihm führen: Er weiß selbst am besten, was ihm hilft, und sollte mitentscheiden, welche Maßnahmen er nutzen möchte.", es: "Tendría una conversación con él: él mismo sabe mejor que nadie qué le ayuda y debería decidir con nosotros qué medidas quiere usar.", ok: true },
            { t: "Ich würde mit ihm eine Konversation haben, weil er am besten weiß, was ihm hilft.", es: "Tendría una conversación con él, porque él sabe mejor qué le ayuda.", ok: false,
              fix: "«Tener una conversación» se dice «ein Gespräch führen». «Konversation» suena a charla social o a clase de idiomas." }
          ],
          clave: ["Gespräch", "mitentscheiden", "hilft"],
          tip: "Principio de la inclusión: «Nichts über uns ohne uns». La persona participa en las decisiones que la afectan." },
        { bot: "Schön. In Kolumbien gibt es dafür ja auch rechtliche Vorgaben, oder?", es: "Muy bien. En Colombia también hay normas sobre esto, ¿verdad?",
          opciones: [
            { t: "Ja, bei uns regelt das Dekret 1421 von 2017 die inklusive Bildung.", es: "Sí, allá el Decreto 1421 de 2017 regula la educación inclusiva.", ok: true },
            { t: "Ja, das Dekret 1421 aus dem Jahr 2017 sieht für Schüler mit Behinderung einen individuellen Plan mit angemessenen Vorkehrungen vor, den sogenannten PIAR.", es: "Sí, el Decreto 1421 de 2017 establece para los estudiantes con discapacidad un plan individual de ajustes razonables, el llamado PIAR.", ok: true },
            { t: "Ja, das Dekret 1421 von 2017 sieht einen individuellen Plan mit vernünftigen Anpassungen vor.", es: "Sí, el Decreto 1421 de 2017 establece un plan individual de ajustes razonables.", ok: false,
              fix: "«Ajustes razonables» como término jurídico es «angemessene Vorkehrungen» (así lo traduce la Convención de la ONU). «Vernünftig» significa «sensato»." }
          ],
          clave: ["Dekret", "angemessene Vorkehrungen", "PIAR"],
          tip: "La Convención de la ONU sobre los Derechos de las Personas con Discapacidad es la base común de Alemania y Colombia." },
        { bot: "Dann sprechen wir ja dieselbe Sprache. Wollen wir in vier Wochen schauen, wie es läuft?", es: "Entonces hablamos el mismo idioma. ¿Revisamos en cuatro semanas cómo va?",
          opciones: [
            { t: "Ja, gern. Bis dahin dokumentiere ich, welche Maßnahmen wirken.", es: "Sí, con gusto. Hasta entonces documento qué medidas funcionan.", ok: true },
            { t: "Sehr gern. Bis dahin halte ich fest, welche Maßnahmen Lukas nutzt und wie sie wirken, damit wir datenbasiert nachsteuern können.", es: "Con mucho gusto. Hasta entonces registro qué medidas usa Lukas y cómo funcionan, para poder ajustar con base en datos.", ok: true },
            { t: "Sehr gern. Bis dahin halte ich fest, welche Maßnahmen wirken, und dann können wir nachsteuern basiert auf den Daten.", es: "Con mucho gusto. Hasta entonces registro qué medidas funcionan y luego podemos ajustar con base en los datos.", ok: false,
              fix: "«Con base en los datos» se dice «datenbasiert» o «auf Grundlage der Daten». El calco «basiert auf» pospuesto no funciona así." }
          ],
          clave: ["dokumentiere", "Maßnahmen", "wirken"],
          tip: "«Nachsteuern» = ajustar el rumbo sobre la marcha. Es muy usado en la gestión escolar alemana." }
      ],
      cierre: { bot: "Perfekt. Lukas hat Glück, dass Sie so offen sind. Bis in vier Wochen!", es: "Perfecto. Lukas tiene suerte de que usted sea tan abierto(a). ¡Nos vemos en cuatro semanas!" },
      vocab: [
        { t: "die Sehbehinderung", es: "la baja visión, discapacidad visual" },
        { t: "die Anpassung", es: "el ajuste, la adaptación" },
        { t: "unauffällig", es: "discreto" },
        { t: "der Nachteilsausgleich", es: "la compensación de desventajas (en evaluaciones)" },
        { t: "die Zeitverlängerung", es: "el tiempo adicional" },
        { t: "angemessene Vorkehrungen", es: "ajustes razonables" },
        { t: "ein Gespräch führen", es: "tener una conversación" },
        { t: "nachsteuern", es: "ajustar sobre la marcha" }
      ]
    },
    {
      id: "de-29", titulo: "Bajamos en geometría: ¿qué hacemos?", nivel: "C1",
      tema: "Reunión de área sobre resultados",
      contexto: "En la reunión del área de Matemáticas (Fachkonferenz) de tu escuela aliada en Bochum analizan una prueba estandarizada en la que los resultados de geometría bajaron. Tú propones un plan.",
      rol: "Dr. Markus Engel, jefe del área de Matemáticas, analítico y algo escéptico",
      turnos: [
        { bot: "Kommen wir zu den Ergebnissen der Vergleichsarbeit. In Geometrie sind wir deutlich schwächer als im Vorjahr. Wie deuten Sie das?", es: "Pasemos a los resultados de la prueba estandarizada. En geometría estamos claramente más bajos que el año pasado. ¿Cómo lo interpreta?",
          opciones: [
            { t: "Ich vermute, dass wir Geometrie zu wenig geübt haben.", es: "Sospecho que practicamos poco la geometría.", ok: true },
            { t: "Ich wäre vorsichtig, das einer einzigen Ursache zuzuschreiben. Auffällig ist aber, dass Geometrie bei uns oft erst am Ende des Schuljahres und unter Zeitdruck behandelt wird.", es: "Tendría cuidado de atribuirlo a una sola causa. Pero llama la atención que entre nosotros la geometría suele verse al final del año escolar y con afán.", ok: true },
            { t: "Ich wäre vorsichtig, das zu einer einzigen Ursache zuschreiben.", es: "Tendría cuidado de atribuirlo a una sola causa.", ok: false,
              fix: "«Zuschreiben» rige dativo sin preposición, y en infinitivo con «zu» este se intercala: «das einer einzigen Ursache zuzuschreiben»." }
          ],
          clave: ["Ursache", "Geometrie", "zuzuschreiben"],
          tip: "Las «Vergleichsarbeiten» (VERA) son pruebas estandarizadas alemanas; cumplen una función parecida a las pruebas Saber de grados intermedios." },
        { bot: "Das ist eine Hypothese. Aber haben wir dafür Belege?", es: "Es una hipótesis. ¿Pero tenemos pruebas de eso?",
          opciones: [
            { t: "Noch nicht, aber die Klassenbücher könnten es zeigen.", es: "Todavía no, pero los libros de clase podrían mostrarlo.", ok: true },
            { t: "Ein Blick in die Klassenbücher könnte das bestätigen: Rutscht Geometrie regelmäßig in die letzten Wochen, wäre das ein deutliches Indiz.", es: "Una revisión de los libros de clase podría confirmarlo: si la geometría queda siempre para las últimas semanas, sería un indicio claro.", ok: true },
            { t: "Wir haben Evidenzen in den Klassenbüchern.", es: "Tenemos evidencias en los libros de clase.", ok: false,
              fix: "«Evidencia» (prueba) se dice «Belege» o «Nachweise». «Die Evidenz» en alemán corriente significa «obviedad»; solo en ciencias se usa como evidencia empírica." }
          ],
          clave: ["Belege", "Klassenbücher", "Indiz"],
          tip: "«Der Beleg» = la prueba, el soporte. «Das Indiz» = el indicio. Un buen análisis distingue ambos." },
        { bot: "Angenommen, Sie haben recht. Was schlagen Sie konkret vor?", es: "Supongamos que tiene razón. ¿Qué propone en concreto?",
          opciones: [
            { t: "Wir sollten Geometrie über das ganze Jahr verteilen.", es: "Deberíamos distribuir la geometría a lo largo de todo el año.", ok: true },
            { t: "Ich schlage vor, Geometrie nicht mehr als Block zu unterrichten, sondern über das Jahr verteilt und mit anderen Themen gemischt zu üben.", es: "Propongo dejar de enseñar la geometría en bloque y practicarla distribuida durante el año y mezclada con otros temas.", ok: true },
            { t: "Ich schlage vor, Geometrie über das ganze Jahr zu verteilen, anstatt sie in einem Block unterrichten.", es: "Propongo distribuir la geometría a lo largo del año, en vez de enseñarla en bloque.", ok: false,
              fix: "«Anstatt» también exige «zu» con el infinitivo: «anstatt sie in einem Block zu unterrichten»." }
          ],
          clave: ["verteilen", "Block", "üben"],
          tip: "Práctica intercalada en matemáticas: Rohrer, Dedrick y Stershic (2015)." },
        { bot: "Das klingt nach Mehraufwand. Einige Kollegen sind jetzt schon am Limit.", es: "Eso suena a más trabajo. Algunos colegas ya están al límite.",
          opciones: [
            { t: "Das verstehe ich. Wir könnten die Aufgaben gemeinsam erstellen.", es: "Lo entiendo. Podríamos elaborar los ejercicios en conjunto.", ok: true },
            { t: "Das nehme ich ernst. Gerade deshalb sollten wir Materialien gemeinsam entwickeln und teilen, statt dass jeder für sich das Rad neu erfindet.", es: "Lo tomo en serio. Justamente por eso deberíamos desarrollar y compartir materiales en conjunto, en vez de que cada uno reinvente la rueda por su lado.", ok: true },
            { t: "Das nehme ich ernst. Wir sollten Materialien gemeinsam entwickeln, statt dass jeder erfindet das Rad neu.", es: "Lo tomo en serio. Deberíamos desarrollar materiales en conjunto, en vez de que cada uno reinvente la rueda.", ok: false,
              fix: "«Statt dass» introduce una subordinada: el verbo va al final: «statt dass jeder das Rad neu erfindet»." }
          ],
          clave: ["gemeinsam", "teilen", "ernst"],
          tip: "«Das Rad neu erfinden» = reinventar la rueda. «Am Limit sein» = estar al límite." },
        { bot: "Und woran würden wir merken, dass es wirkt?", es: "¿Y cómo nos daríamos cuenta de que funciona?",
          opciones: [
            { t: "An den Ergebnissen der nächsten Vergleichsarbeit.", es: "En los resultados de la próxima prueba estandarizada.", ok: true },
            { t: "Wir sollten nicht nur auf die nächste Vergleichsarbeit warten, sondern kurze Diagnosetests im Halbjahr einsetzen, um früher nachsteuern zu können.", es: "No deberíamos esperar solo la próxima prueba, sino aplicar pruebas diagnósticas cortas durante el semestre para poder ajustar antes.", ok: true },
            { t: "Wir sollten auch kurze Diagnosetests einsetzen, für früher reagieren zu können.", es: "También deberíamos aplicar pruebas diagnósticas cortas para poder reaccionar antes.", ok: false,
              fix: "«Para» + infinitivo se dice «um ... zu»: «um früher reagieren zu können». «Für» va con sustantivos, no con infinitivos." }
          ],
          clave: ["Diagnosetests", "nachsteuern", "Vergleichsarbeit"],
          tip: "Evaluación formativa: medir poco y seguido permite corregir el rumbo antes de la prueba externa." },
        { bot: "Gut. Ich bin noch nicht ganz überzeugt, aber bereit, es ein Jahr lang zu testen. Würden Sie die Arbeitsgruppe leiten?", es: "Bien. Todavía no estoy del todo convencido, pero estoy dispuesto a probarlo un año. ¿Usted coordinaría el grupo de trabajo?",
          opciones: [
            { t: "Ja, das übernehme ich gern.", es: "Sí, con gusto me encargo.", ok: true },
            { t: "Gern, unter einer Bedingung: dass wir nach einem Halbjahr gemeinsam Bilanz ziehen und offen sagen, was nicht funktioniert hat.", es: "Con gusto, con una condición: que a mitad de año hagamos balance juntos y digamos con franqueza qué no funcionó.", ok: true },
            { t: "Gern, unter einer Bedingung: dass wir nach einem Halbjahr gemeinsam eine Bilanz machen.", es: "Con gusto, con una condición: que a mitad de año hagamos balance juntos.", ok: false,
              fix: "La colocación fija es «Bilanz ziehen» (hacer balance), no «eine Bilanz machen»." }
          ],
          clave: ["übernehme", "Bilanz ziehen", "Bedingung"],
          tip: "Colocaciones fijas: «Bilanz ziehen», «eine Entscheidung treffen», «Verantwortung übernehmen». No se traducen palabra por palabra." }
      ],
      cierre: { bot: "Einverstanden. Dann halten wir das so im Protokoll fest. Danke für den konstruktiven Vorschlag.", es: "De acuerdo. Entonces lo dejamos así en el acta. Gracias por la propuesta constructiva." },
      vocab: [
        { t: "die Fachkonferenz", es: "la reunión de área" },
        { t: "die Vergleichsarbeit", es: "la prueba estandarizada (VERA)" },
        { t: "einer Sache etwas zuschreiben", es: "atribuir algo a algo" },
        { t: "der Beleg", es: "la prueba, el soporte" },
        { t: "das Indiz", es: "el indicio" },
        { t: "das Rad neu erfinden", es: "reinventar la rueda" },
        { t: "nachsteuern", es: "ajustar sobre la marcha" },
        { t: "Bilanz ziehen", es: "hacer balance" }
      ]
    },
    {
      id: "de-30", titulo: "Entrevista para un año de intercambio docente", nivel: "C1",
      tema: "Entrevista para intercambio docente",
      contexto: "Te presentas ante un comité de selección para una beca de intercambio docente de un año en una escuela alemana. La entrevista es exigente y en registro formal.",
      rol: "Prof. Dra. Henrike Sommer, presidenta del comité de selección, formal e incisiva",
      turnos: [
        { bot: "Guten Tag und willkommen. Warum möchten Sie ausgerechnet in Deutschland unterrichten?", es: "Buenos días y bienvenido(a). ¿Por qué quiere enseñar precisamente en Alemania?",
          opciones: [
            { t: "Weil mich das deutsche Bildungssystem sehr interessiert.", es: "Porque el sistema educativo alemán me interesa mucho.", ok: true },
            { t: "Mich interessiert besonders, wie das duale Ausbildungssystem Schule und Beruf verbindet; das ist für unsere Zusammenarbeit mit dem SENA sehr relevant.", es: "Me interesa en especial cómo el sistema de formación dual une escuela y trabajo; eso es muy relevante para nuestra articulación con el SENA.", ok: true },
            { t: "Ich interessiere mich besonders an dem dualen System.", es: "Me intereso especialmente por el sistema dual.", ok: false,
              fix: "«Interesarse por» es «sich interessieren für»: «Ich interessiere mich für das duale System». Solo el sustantivo lleva «an»: «Interesse an»." }
          ],
          clave: ["interessiert", "duale", "SENA"],
          tip: "«Sich interessieren für», pero «Interesse haben an»: la preposición cambia según la palabra." },
        { bot: "Was würden Sie unserer Partnerschule konkret mitbringen?", es: "¿Qué le aportaría concretamente a nuestra escuela aliada?",
          opciones: [
            { t: "Ich bringe viel Erfahrung mit Projektarbeit und Mehrsprachigkeit mit.", es: "Traigo mucha experiencia en trabajo por proyectos y multilingüismo.", ok: true },
            { t: "Neben meiner Erfahrung mit projektbasiertem Lernen kann ich eine Perspektive einbringen, die hier oft fehlt: den Umgang mit sehr heterogenen Lerngruppen bei knappen Ressourcen.", es: "Además de mi experiencia en aprendizaje basado en proyectos, puedo aportar una perspectiva que aquí a menudo falta: trabajar con grupos muy heterogéneos y con pocos recursos.", ok: true },
            { t: "Ich kann eine Perspektive einbringen, die hier oft mangelt.", es: "Puedo aportar una perspectiva que aquí a menudo falta.", ok: false,
              fix: "«Mangeln» es impersonal: «es mangelt an etwas». Di «eine Perspektive, an der es hier oft mangelt» o, más simple, «die hier oft fehlt»." }
          ],
          clave: ["Erfahrung", "einbringen", "heterogenen"],
          tip: "«Einbringen» = aportar (ideas, experiencia). «Mitbringen» = traer consigo. Ambos son separables." },
        { bot: "Heterogene Lerngruppen: Können Sie ein Beispiel aus Ihrer Praxis geben?", es: "Grupos heterogéneos: ¿puede dar un ejemplo de su práctica?",
          opciones: [
            { t: "In meiner Klasse arbeiten wir mit Lernstationen auf verschiedenen Niveaus.", es: "En mi clase trabajamos con estaciones de aprendizaje de distintos niveles.", ok: true },
            { t: "In einem Kurs mit sehr unterschiedlichem Vorwissen habe ich Lernstationen mit gestuften Hilfen eingeführt; so konnte jeder auf seinem Niveau arbeiten, ohne abgehängt zu werden.", es: "En un curso con conocimientos previos muy distintos implementé estaciones con apoyos graduados; así cada uno pudo trabajar a su nivel sin quedarse atrás.", ok: true },
            { t: "In einem Kurs habe ich Stationen eingeführt, sodass jeder auf seinem Niveau arbeiten konnte, ohne abgehängt werden.", es: "En un curso implementé estaciones para que cada uno trabajara a su nivel sin quedarse atrás.", ok: false,
              fix: "«Ohne» + infinitivo exige «zu»: «ohne abgehängt zu werden»." }
          ],
          clave: ["Lernstationen", "Niveau", "gestuften Hilfen"],
          tip: "«Gestufte Hilfen» = apoyos graduados: pistas de menor a mayor ayuda, como en una clase por estaciones." },
        { bot: "Und was war dabei Ihr größter Fehler?", es: "¿Y cuál fue su mayor error en eso?",
          opciones: [
            { t: "Am Anfang habe ich zu viele Stationen auf einmal geplant.", es: "Al principio planeé demasiadas estaciones a la vez.", ok: true },
            { t: "Anfangs habe ich die Stationen überladen. Erst als ich die Schüler um Rückmeldung gebeten habe, wurde mir klar, dass weniger mehr ist.", es: "Al principio sobrecargué las estaciones. Solo cuando les pedí retroalimentación a los estudiantes entendí que menos es más.", ok: true },
            { t: "Anfangs habe ich die Stationen überladen. Erst als ich die Schüler um Rückmeldung gefragt habe, wurde mir klar, dass weniger mehr ist.", es: "Al principio sobrecargué las estaciones. Solo cuando les pedí retroalimentación a los estudiantes entendí que menos es más.", ok: false,
              fix: "«Pedir algo» es «um etwas bitten»; «fragen» es preguntar: «als ich die Schüler um Rückmeldung gebeten habe»." }
          ],
          clave: ["Fehler", "Rückmeldung", "weniger mehr"],
          tip: "Pedir = bitten (um); preguntar = fragen (nach): «Ich bitte um Hilfe» / «Ich frage nach dem Weg»." },
        { bot: "Wie gehen Sie mit Kritik von Kolleginnen und Kollegen um, insbesondere in einer fremden Schulkultur?", es: "¿Cómo maneja las críticas de sus colegas, sobre todo en una cultura escolar ajena?",
          opciones: [
            { t: "Ich höre zuerst zu und frage nach, bevor ich reagiere.", es: "Primero escucho y pregunto antes de reaccionar.", ok: true },
            { t: "Ich versuche, Kritik als Information zu sehen, nicht als Angriff. Gerade in einer neuen Kultur frage ich lieber einmal zu viel nach, als vorschnell Schlüsse zu ziehen.", es: "Intento ver la crítica como información, no como ataque. Sobre todo en una cultura nueva, prefiero preguntar una vez de más que sacar conclusiones apresuradas.", ok: true },
            { t: "Ich versuche, Kritik als Information zu sehen und nicht als Attacke personal.", es: "Intento ver la crítica como información y no como un ataque personal.", ok: false,
              fix: "El adjetivo va antes del sustantivo y se declina: «als persönlichen Angriff». «Attacke» casi no se usa en este sentido." }
          ],
          clave: ["Kritik", "frage nach", "Angriff"],
          tip: "«Lieber ... als ...» = mejor ... que ...: «Ich frage lieber einmal zu viel nach, als Fehler zu riskieren»." },
        { bot: "Letzte Frage: Wie würden Sie sicherstellen, dass Ihre Erfahrungen nach der Rückkehr nicht einfach verpuffen?", es: "Última pregunta: ¿cómo garantizaría que su experiencia no se esfume simplemente al regresar?",
          opciones: [
            { t: "Ich würde meine Erfahrungen in Workshops an meiner Schule weitergeben.", es: "Compartiría mi experiencia en talleres en mi colegio.", ok: true },
            { t: "Ich würde eine Fortbildungsreihe für mein Kollegium aufbauen und eine dauerhafte Partnerschaft zwischen beiden Schulen anstoßen, damit der Austausch über meinen Aufenthalt hinaus wirkt.", es: "Armaría un ciclo de formación para mis colegas e impulsaría una alianza permanente entre los dos colegios, para que el intercambio tenga efecto más allá de mi estadía.", ok: true },
            { t: "Ich würde eine Fortbildungsreihe aufbauen, damit der Austausch hinaus meinen Aufenthalt wirkt.", es: "Armaría un ciclo de formación para que el intercambio tenga efecto más allá de mi estadía.", ok: false,
              fix: "«Más allá de» se dice «über ... hinaus», con el sustantivo en medio: «über meinen Aufenthalt hinaus»." }
          ],
          clave: ["Fortbildung", "Partnerschaft", "weitergeben"],
          tip: "«Verpuffen» = esfumarse sin efecto. Un comité valora un plan concreto para multiplicar lo aprendido al regresar." },
        { bot: "Vielen Dank. Haben Sie Ihrerseits noch Fragen an uns?", es: "Muchas gracias. ¿Tiene usted alguna pregunta para nosotros?",
          opciones: [
            { t: "Ja: Wann erfahre ich die Entscheidung?", es: "Sí: ¿cuándo conoceré la decisión?", ok: true },
            { t: "Ja, eine: Wie werden die Gastlehrkräfte in den ersten Wochen an der Partnerschule begleitet?", es: "Sí, una: ¿cómo se acompaña a los docentes invitados en las primeras semanas en la escuela aliada?", ok: true },
            { t: "Ja, eine: Wie werden die Gastlehrkräfte in den ersten Wochen akkompagniert?", es: "Sí, una: ¿cómo se acompaña a los docentes invitados en las primeras semanas?", ok: false,
              fix: "«Acompañar» a una persona es «begleiten» o «betreuen». «Akkompagnieren» solo se usa en música." }
          ],
          clave: ["Entscheidung", "begleitet", "Gastlehrkräfte"],
          tip: "Hacer una pregunta al final de una entrevista demuestra interés. Mejor si es sobre el trabajo y no solo sobre beneficios." }
      ],
      cierre: { bot: "Gute Frage: Jede Gastlehrkraft bekommt eine Mentorin oder einen Mentor. Wir melden uns in den nächsten Wochen bei Ihnen. Vielen Dank für das Gespräch!", es: "Buena pregunta: cada docente invitado recibe un mentor o mentora. Nos comunicaremos con usted en las próximas semanas. ¡Muchas gracias por la conversación!" },
      vocab: [
        { t: "ausgerechnet", es: "precisamente, justamente" },
        { t: "sich interessieren für", es: "interesarse por" },
        { t: "einbringen", es: "aportar" },
        { t: "heterogene Lerngruppen", es: "grupos heterogéneos" },
        { t: "gestufte Hilfen", es: "apoyos graduados" },
        { t: "um etwas bitten", es: "pedir algo" },
        { t: "über ... hinaus", es: "más allá de ..." },
        { t: "verpuffen", es: "esfumarse sin efecto" }
      ]
    }
  ]
};
