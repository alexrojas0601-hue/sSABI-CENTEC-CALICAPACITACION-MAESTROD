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
    }
  ]
};
