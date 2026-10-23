/* Club de Diálogo SABI CENTEC · Inglés (en-US) · 10 escenarios A1 → C1 */
window.SABI_CLUB = window.SABI_CLUB || {};
window.SABI_CLUB.en = {
  escenarios: [
    /* ───────────── 1 · A1 · Saludo y presentación docente ───────────── */
    {
      id: "en-01", titulo: "Me presento en el colegio aliado", nivel: "A1",
      tema: "Saludo y presentación docente",
      contexto: "Llegas a una escuela aliada en Texas para una semana de intercambio. Te presentas a la rectora y le cuentas quién eres.",
      rol: "Ms. Karen Miller, rectora de la escuela, amable y conversadora",
      turnos: [
        { bot: "Hi, welcome! I'm Karen Miller, the principal. What's your name?", es: "¡Hola, bienvenida! Soy Karen Miller, la rectora. ¿Cómo te llamas?",
          opciones: [
            { t: "Hi, I'm Luisa. Nice to meet you.", es: "Hola, soy Luisa. Mucho gusto.", ok: true },
            { t: "Hello, Ms. Miller. My name is Luisa Gómez. It's a pleasure to meet you.", es: "Hola, señora Miller. Me llamo Luisa Gómez. Es un placer conocerla.", ok: true },
            { t: "Hi, my name is Luisa. Nice to know you.", es: "Hola, me llamo Luisa. Mucho gusto en conocerte.", ok: false,
              fix: "Al conocer a alguien por primera vez se dice «Nice to meet you». «Nice to know you» es un calco de «conocer» y no se usa." }
          ],
          clave: ["I'm", "meet"],
          tip: "En EE. UU. se usa «Ms.» + apellido para cualquier mujer, sin importar su estado civil. Se pronuncia /mɪz/." },
        { bot: "Nice to meet you too! Where are you from?", es: "¡Mucho gusto también! ¿De dónde eres?",
          opciones: [
            { t: "I'm from Cali, Colombia.", es: "Soy de Cali, Colombia.", ok: true },
            { t: "I'm from Cali, a city in the southwest of Colombia.", es: "Soy de Cali, una ciudad del suroccidente de Colombia.", ok: true },
            { t: "I'm of Cali, Colombia.", es: "Soy de Cali, Colombia.", ok: false,
              fix: "Para el lugar de origen se usa «from», no «of»: «I'm from Cali»." }
          ],
          clave: ["I'm from", "from Cali"],
          tip: "«Where are you from?» lleva la preposición al final. Responde con «I'm from…» o «I come from…»." },
        { bot: "Cali! That sounds wonderful. So, what do you teach?", es: "¡Cali! Suena maravilloso. Y bueno, ¿qué enseñas?",
          opciones: [
            { t: "I teach math.", es: "Enseño matemáticas.", ok: true },
            { t: "I teach math and science to fifth graders.", es: "Enseño matemáticas y ciencias a estudiantes de quinto grado.", ok: true },
            { t: "I teach the mathematics.", es: "Enseño las matemáticas.", ok: false,
              fix: "Las asignaturas van sin artículo en inglés: «I teach math», no «the mathematics»." }
          ],
          clave: ["teach math", "fifth graders"],
          tip: "En EE. UU. se dice «math»; en el Reino Unido, «maths». «Fifth graders» = estudiantes de quinto." },
        { bot: "Great! How long have you been a teacher?", es: "¡Genial! ¿Hace cuánto eres docente?",
          opciones: [
            { t: "For eight years.", es: "Hace ocho años.", ok: true },
            { t: "I've been a teacher for eight years, and I love it.", es: "Soy docente desde hace ocho años y me encanta.", ok: true },
            { t: "I am a teacher since eight years.", es: "Soy docente desde hace ocho años.", ok: false,
              fix: "Para algo que empezó en el pasado y sigue hoy se usa present perfect + «for»: «I've been a teacher for eight years»." }
          ],
          clave: ["been", "for", "years"],
          tip: "«For» + cantidad de tiempo (for eight years); «since» + punto de inicio (since 2018)." },
        { bot: "Wonderful. And how many students do you have?", es: "Maravilloso. ¿Y cuántos estudiantes tienes?",
          opciones: [
            { t: "I have thirty students.", es: "Tengo treinta estudiantes.", ok: true },
            { t: "I have thirty students, and they are ten and eleven years old.", es: "Tengo treinta estudiantes y tienen diez y once años.", ok: true },
            { t: "I have thirty students. They have ten years.", es: "Tengo treinta estudiantes. Tienen diez años.", ok: false,
              fix: "La edad se expresa con el verbo «to be»: «They are ten (years old)», no «They have ten years»." }
          ],
          clave: ["have", "students"],
          tip: "Edad = to be: «I'm forty», «She's ten years old». Nunca «have» + años." },
        { bot: "Wow, that's a big class! Do you have any questions for me?", es: "¡Uy, es un grupo grande! ¿Tienes alguna pregunta para mí?",
          opciones: [
            { t: "Yes, where is the teachers' lounge?", es: "Sí, ¿dónde está la sala de profesores?", ok: true },
            { t: "Yes, please. Could you show me the teachers' lounge and my classroom?", es: "Sí, por favor. ¿Podría mostrarme la sala de profesores y mi salón?", ok: true },
            { t: "Yes. Where is the lounge of the teachers?", es: "Sí. ¿Dónde está la sala de los profesores?", ok: false,
              fix: "La posesión se expresa con 's o s': «the teachers' lounge». «The lounge of the teachers» suena traducido." }
          ],
          clave: ["where", "lounge"],
          tip: "«Could you…?» es una forma cortés de pedir algo. Suena más amable que «Can you…?»." }
      ],
      cierre: { bot: "Of course! Come with me. Welcome to our school!", es: "¡Claro! Ven conmigo. ¡Bienvenida a nuestra escuela!" },
      vocab: [
        { t: "principal", es: "rector(a)" },
        { t: "Nice to meet you", es: "mucho gusto" },
        { t: "Where are you from?", es: "¿de dónde eres?" },
        { t: "fifth graders", es: "estudiantes de quinto grado" },
        { t: "How long have you been…?", es: "¿hace cuánto eres/estás…?" },
        { t: "teachers' lounge", es: "sala de profesores" },
        { t: "classroom", es: "salón de clase" }
      ]
    },

    /* ───────────── 2 · A2 · Instrucciones de clase ───────────── */
    {
      id: "en-02", titulo: "Instrucciones claras en el aula", nivel: "A2",
      tema: "Instrucciones de clase (classroom language)",
      contexto: "Diriges una clase de inglés de cuarto grado. Das instrucciones sencillas y resuelves las preguntas de un estudiante.",
      rol: "Ethan, estudiante de cuarto grado, curioso y un poco distraído",
      turnos: [
        { bot: "Good morning, teacher! Are we starting now?", es: "¡Buenos días, profe! ¿Ya empezamos?",
          opciones: [
            { t: "Good morning, Ethan. Yes, please sit down.", es: "Buenos días, Ethan. Sí, siéntate, por favor.", ok: true },
            { t: "Good morning, everyone! Yes, please take your seats. We're starting now.", es: "¡Buenos días a todos! Sí, tomen asiento, por favor. Ya empezamos.", ok: true },
            { t: "Good morning. Yes, please take a sit.", es: "Buenos días. Sí, tomen asiento, por favor.", ok: false,
              fix: "«Sit» es el verbo; el sustantivo es «seat»: «take a seat» o simplemente «sit down»." }
          ],
          clave: ["sit down", "take your seats"],
          tip: "«Seat» /siːt/ tiene vocal larga; «sit» /sɪt/, corta. Alarga la vocal de «seat»." },
        { bot: "Okay! What do we need today, teacher?", es: "¡Listo! ¿Qué necesitamos hoy, profe?",
          opciones: [
            { t: "Open your books to page 20.", es: "Abran sus libros en la página 20.", ok: true },
            { t: "Please take out your books and open them to page 20.", es: "Por favor, saquen sus libros y ábranlos en la página 20.", ok: true },
            { t: "Open your books in the page 20.", es: "Abran sus libros en la página 20.", ok: false,
              fix: "Se dice «open your books to page 20» (o «turn to page 20»): preposición «to», no «in», y sin artículo antes de «page 20»." }
          ],
          clave: ["to page", "take out"],
          tip: "Imperativo = verbo sin sujeto: «Open», «Take out», «Listen». Añade «please» para suavizar." },
        { bot: "Sorry, teacher, I don't have my book.", es: "Perdón, profe, no tengo mi libro.",
          opciones: [
            { t: "That's okay. Share with your partner.", es: "Tranquilo. Comparte con tu compañero.", ok: true },
            { t: "No problem. You can share with Sofia today, but please bring it tomorrow.", es: "No hay problema. Hoy puedes compartir con Sofía, pero tráelo mañana, por favor.", ok: true },
            { t: "No problem. Share with your companion.", es: "No hay problema. Comparte con tu compañero.", ok: false,
              fix: "«Compañero de clase» es «partner» o «classmate». «Companion» significa acompañante." }
          ],
          clave: ["partner", "Sofia"],
          tip: "«Partner» = compañero de trabajo en pareja; «classmate» = compañero de curso." },
        { bot: "Okay. What do we do now?", es: "Bueno. ¿Y ahora qué hacemos?",
          opciones: [
            { t: "Read the text and answer the questions.", es: "Lean el texto y respondan las preguntas.", ok: true },
            { t: "Read the story quietly, and then answer questions one to five in your notebook.", es: "Lean el cuento en silencio y luego respondan las preguntas de la uno a la cinco en el cuaderno.", ok: true },
            { t: "Read the text and make the exercises.", es: "Lean el texto y hagan los ejercicios.", ok: false,
              fix: "Con ejercicios, tareas y actividades se usa «do», no «make»: «do the exercises»." }
          ],
          clave: ["answer the questions", "answer questions"],
          tip: "Usa secuenciadores: «first», «then», «after that». Ayudan a que los niños sigan el orden." },
        { bot: "Teacher, how do you say \"borrador\" in English?", es: "Profe, ¿cómo se dice «borrador» en inglés?",
          opciones: [
            { t: "It's \"eraser.\"", es: "Es «eraser».", ok: true },
            { t: "Good question! We say \"eraser.\" Can you repeat it?", es: "¡Buena pregunta! Decimos «eraser». ¿Puedes repetirlo?", ok: true },
            { t: "In English it says \"eraser.\"", es: "En inglés se dice «eraser».", ok: false,
              fix: "«Se dice» se traduce como «we say» o «it's», no «it says» (que significa «dice» un texto o letrero)." }
          ],
          clave: ["it's", "we say"],
          tip: "Celebra las preguntas: «Good question!» anima a los estudiantes a seguir preguntando en inglés." },
        { bot: "I finished! Can I go to the bathroom?", es: "¡Terminé! ¿Puedo ir al baño?",
          opciones: [
            { t: "Yes, you can. Come back quickly.", es: "Sí, puedes. Vuelve rápido.", ok: true },
            { t: "Great job! Yes, you may go, but please come back in two minutes.", es: "¡Muy bien! Sí, puedes ir, pero vuelve en dos minutos, por favor.", ok: true },
            { t: "Yes, but return back quickly.", es: "Sí, pero vuelve rápido.", ok: false,
              fix: "«Return back» es redundante: «return» ya significa volver. Di «come back» o «return»." }
          ],
          clave: ["come back", "you can", "you may"],
          tip: "En EE. UU. en la escuela se dice «bathroom» o «restroom»; «toilet» suena demasiado directo." },
        { bot: "I'm back! What's next?", es: "¡Ya volví! ¿Qué sigue?",
          opciones: [
            { t: "Now, work in pairs and check your answers.", es: "Ahora trabajen en parejas y revisen sus respuestas.", ok: true },
            { t: "Now, get into pairs, compare your answers, and raise your hand if you have questions.", es: "Ahora hagan parejas, comparen sus respuestas y levanten la mano si tienen preguntas.", ok: true },
            { t: "Now, work in couples and check your answers.", es: "Ahora trabajen en parejas y revisen sus respuestas.", ok: false,
              fix: "Para trabajo en parejas se dice «in pairs». «Couple» se usa para parejas sentimentales." }
          ],
          clave: ["pairs", "raise your hand"],
          tip: "Modela la instrucción con gestos: junta dos dedos al decir «pairs» y levanta la mano al decir «raise your hand»." }
      ],
      cierre: { bot: "Okay, teacher! This is fun!", es: "¡Listo, profe! ¡Esto es divertido!" },
      vocab: [
        { t: "take a seat", es: "tomar asiento" },
        { t: "open your books to page…", es: "abran sus libros en la página…" },
        { t: "share with your partner", es: "compartir con el compañero" },
        { t: "do the exercises", es: "hacer los ejercicios" },
        { t: "eraser", es: "borrador" },
        { t: "come back", es: "volver" },
        { t: "work in pairs", es: "trabajar en parejas" },
        { t: "raise your hand", es: "levantar la mano" }
      ]
    },

    /* ───────────── 3 · A2 · Viaje / vida cotidiana ───────────── */
    {
      id: "en-03", titulo: "Check-in en el hotel", nivel: "A2",
      tema: "Viaje y vida cotidiana",
      contexto: "Llegas de noche a Orlando para un intercambio docente. Haces el check-in y preguntas cómo llegar a la escuela al día siguiente.",
      rol: "Mike, recepcionista del hotel, joven y muy servicial",
      turnos: [
        { bot: "Good evening! Welcome to the Sunshine Hotel. How can I help you?", es: "¡Buenas noches! Le damos la bienvenida al hotel Sunshine. ¿En qué le puedo ayudar?",
          opciones: [
            { t: "Hi, I have a reservation.", es: "Hola, tengo una reserva.", ok: true },
            { t: "Good evening. I have a reservation under the name Rodríguez.", es: "Buenas noches. Tengo una reserva a nombre de Rodríguez.", ok: true },
            { t: "Good evening. I have a reserve for tonight.", es: "Buenas noches. Tengo una reserva para esta noche.", ok: false,
              fix: "La reserva de hotel es «reservation» (EE. UU.) o «booking». «Reserve» significa reserva natural o provisión." }
          ],
          clave: ["reservation", "name"],
          tip: "«Under the name…» = a nombre de… Deletrea tu apellido: practica el alfabeto en inglés." },
        { bot: "Let me check... Yes, here it is. Three nights, right? May I see your passport, please?", es: "Déjeme revisar… Sí, aquí está. Tres noches, ¿cierto? ¿Me permite su pasaporte, por favor?",
          opciones: [
            { t: "Sure, here you go.", es: "Claro, aquí tiene.", ok: true },
            { t: "Yes, three nights. Here's my passport.", es: "Sí, tres noches. Aquí está mi pasaporte.", ok: true },
            { t: "Yes, here you have.", es: "Sí, aquí tiene.", ok: false,
              fix: "«Aquí tiene» no se traduce palabra por palabra. Se dice «Here you go» o «Here you are»." }
          ],
          clave: ["here you go", "here's my passport"],
          tip: "Al entregar algo: «Here you go». Al recibirlo, la otra persona dice «Thank you» o «Thanks»." },
        { bot: "Thank you. Would you like a room with one bed or two?", es: "Gracias. ¿Quiere una habitación con una cama o con dos?",
          opciones: [
            { t: "One bed, please.", es: "Una cama, por favor.", ok: true },
            { t: "One bed is fine. Could I have a quiet room, please?", es: "Una cama está bien. ¿Me podría dar una habitación tranquila, por favor?", ok: true },
            { t: "One bed, please. I want a room more quiet.", es: "Una cama, por favor. Quiero una habitación más tranquila.", ok: false,
              fix: "Los adjetivos cortos forman el comparativo con -er y van antes del sustantivo: «a quieter room»." }
          ],
          clave: ["one bed", "please"],
          tip: "«Could I have…?» es más cortés que «I want…», que puede sonar brusco en un servicio." },
        { bot: "No problem. Here's your key card: room 412, on the fourth floor. Do you have any questions?", es: "Con gusto. Aquí está su tarjeta llave: habitación 412, en el cuarto piso. ¿Tiene alguna pregunta?",
          opciones: [
            { t: "What time is breakfast?", es: "¿A qué hora es el desayuno?", ok: true },
            { t: "Yes. What time is breakfast, and is the Wi-Fi free?", es: "Sí. ¿A qué hora es el desayuno y el wifi es gratis?", ok: true },
            { t: "Yes. At what hour is the breakfast?", es: "Sí. ¿A qué hora es el desayuno?", ok: false,
              fix: "Se pregunta «What time is breakfast?». «Hour» es un período de 60 minutos, y las comidas van sin «the»." }
          ],
          clave: ["what time", "Wi-Fi"],
          tip: "412 se lee «four twelve». Los números de habitación se dicen en grupos." },
        { bot: "Breakfast is from 6:30 to 10 a.m. in the lobby, and the Wi-Fi is free. The password is on your key card. Anything else?", es: "El desayuno es de 6:30 a 10 a. m. en el lobby, y el wifi es gratis. La clave está en su tarjeta. ¿Algo más?",
          opciones: [
            { t: "How can I get to Lincoln Elementary School tomorrow?", es: "¿Cómo puedo llegar mañana a la escuela Lincoln?", ok: true },
            { t: "Yes. What's the best way to get to Lincoln Elementary School in the morning?", es: "Sí. ¿Cuál es la mejor forma de llegar a la escuela Lincoln en la mañana?", ok: true },
            { t: "Yes. How I can go to Lincoln Elementary School?", es: "Sí. ¿Cómo puedo ir a la escuela Lincoln?", ok: false,
              fix: "En las preguntas, el auxiliar va antes del sujeto: «How can I get to…?», no «How I can…»." }
          ],
          clave: ["how can I", "best way"],
          tip: "«Get to» un lugar = llegar a. Es más natural que «arrive to», que además es incorrecto." },
        { bot: "It's about fifteen minutes by car. You can take a taxi or a rideshare from the entrance. Should I call a taxi for you in the morning?", es: "Son unos quince minutos en carro. Puede tomar un taxi o un carro por aplicación en la entrada. ¿Le pido un taxi en la mañana?",
          opciones: [
            { t: "Yes, please. Thank you!", es: "Sí, por favor. ¡Gracias!", ok: true },
            { t: "That would be great. Thanks for everything!", es: "Sería excelente. ¡Gracias por todo!", ok: true },
            { t: "Yes, please. You are very kind. Thanks for all.", es: "Sí, por favor. Es muy amable. Gracias por todo.", ok: false,
              fix: "«Gracias por todo» es «Thanks for everything», no «for all»." }
          ],
          clave: ["thank you", "thanks for everything"],
          tip: "«That would be great» es una forma amable y natural de aceptar un ofrecimiento." }
      ],
      cierre: { bot: "You're welcome! I'll take care of it. Have a good night, and enjoy Orlando!", es: "¡Con gusto! Yo me encargo. ¡Que pase buena noche y disfrute Orlando!" },
      vocab: [
        { t: "reservation", es: "reserva" },
        { t: "Here you go", es: "aquí tiene" },
        { t: "key card", es: "tarjeta llave" },
        { t: "floor", es: "piso (nivel de un edificio)" },
        { t: "lobby", es: "vestíbulo, lobby" },
        { t: "get to", es: "llegar a" },
        { t: "rideshare", es: "carro por aplicación" },
        { t: "Thanks for everything", es: "gracias por todo" }
      ]
    },

    /* ───────────── 4 · B1 · Sala de profesores ───────────── */
    {
      id: "en-04", titulo: "Café en la sala de profesores", nivel: "B1",
      tema: "Sala de profesores",
      contexto: "Llevas una semana en un programa de intercambio en Chicago. En el descanso conversas con un colega y comparas tu experiencia en Colombia.",
      rol: "Mr. David Clark, profesor de Historia, veterano y bromista",
      turnos: [
        { bot: "Hey, how's your first week going? Surviving so far?", es: "Oye, ¿cómo va tu primera semana? ¿Sobreviviendo hasta ahora?",
          opciones: [
            { t: "It's going well, thanks. Everyone is very friendly.", es: "Va bien, gracias. Todos son muy amables.", ok: true },
            { t: "Pretty well! It's been busy, but people here are really welcoming.", es: "¡Bastante bien! Ha sido agitada, pero la gente aquí es muy acogedora.", ok: true },
            { t: "Very good, thanks. The people here is very friendly.", es: "Muy bien, gracias. La gente aquí es muy amable.", ok: false,
              fix: "«People» es plural en inglés: «people are», no «people is»." }
          ],
          clave: ["going well", "friendly", "pretty well", "welcoming"],
          tip: "«Everyone» va en singular (everyone is), pero «people» va en plural (people are)." },
        { bot: "Glad to hear it. Coffee? Fair warning: it's terrible.", es: "Me alegra. ¿Un café? Te advierto: es malísimo.",
          opciones: [
            { t: "Sure, I'd love some.", es: "Claro, me encantaría.", ok: true },
            { t: "Thanks, I'll take the risk! We're pretty picky about coffee in Colombia, you know.", es: "¡Gracias, me arriesgo! En Colombia somos bastante exigentes con el café, ¿sabes?", ok: true },
            { t: "Yes, thanks. I'm agree with you, the coffee here is bad.", es: "Sí, gracias. Estoy de acuerdo contigo, el café aquí es malo.", ok: false,
              fix: "«Agree» es un verbo: «I agree with you». Nunca «I'm agree»." }
          ],
          clave: ["sure", "love", "thanks", "risk"],
          tip: "«I'd love some» es la forma natural de aceptar comida o bebida. «Picky» = exigente, quisquilloso." },
        { bot: "Ha! Speaking of Colombia, how are classes different over there?", es: "¡Ja! Hablando de Colombia, ¿en qué se diferencian las clases allá?",
          opciones: [
            { t: "Classes are bigger. We usually have thirty-five students.", es: "Los grupos son más grandes. Normalmente tenemos treinta y cinco estudiantes.", ok: true },
            { t: "Well, our groups are bigger, about thirty-five students, so we do a lot of group work.", es: "Pues nuestros grupos son más grandes, unos treinta y cinco estudiantes, así que trabajamos mucho en equipo.", ok: true },
            { t: "The classes are more big, with like thirty-five students.", es: "Los grupos son más grandes, como de treinta y cinco estudiantes.", ok: false,
              fix: "Los adjetivos de una sílaba forman el comparativo con -er: «bigger», no «more big»." }
          ],
          clave: ["bigger", "group work"],
          tip: "«Big» dobla la consonante: big → bigger, hot → hotter. Los largos usan «more»: more interesting." },
        { bot: "Thirty-five! Wow. How do you manage that?", es: "¡Treinta y cinco! Uf. ¿Cómo lo manejas?",
          opciones: [
            { t: "We use clear routines and roles in each group.", es: "Usamos rutinas claras y roles en cada grupo.", ok: true },
            { t: "Mostly with routines. Each group has roles, like a leader and a timekeeper, and that helps a lot.", es: "Sobre todo con rutinas. Cada grupo tiene roles, como líder y controlador del tiempo, y eso ayuda mucho.", ok: true },
            { t: "It depends of the group, but we use routines.", es: "Depende del grupo, pero usamos rutinas.", ok: false,
              fix: "En inglés se dice «depend on», no «depend of»: «It depends on the group»." }
          ],
          clave: ["roles", "timekeeper"],
          tip: "Preposiciones fijas: depend on, listen to, arrive at/in, think about. Apréndelas en bloque." },
        { bot: "Smart. I'm struggling with my eighth graders this semester. They're so chatty.", es: "Inteligente. Estoy batallando con mis estudiantes de octavo este semestre. Hablan muchísimo.",
          opciones: [
            { t: "Have you tried giving them roles?", es: "¿Has probado darles roles?", ok: true },
            { t: "Maybe you could try a timer and roles. It really helps them stay focused.", es: "Quizás podrías probar un temporizador y roles. De verdad les ayuda a mantenerse concentrados.", ok: true },
            { t: "You should to try roles. In my school it works.", es: "Deberías probar los roles. En mi colegio funciona.", ok: false,
              fix: "Después de los modales (should, can, must, could) va el verbo sin «to»: «You should try roles»." }
          ],
          clave: ["tried", "could try", "roles"],
          tip: "«Have you tried + -ing?» es una forma amable de sugerir sin sonar a orden." },
        { bot: "That's a good idea. I'll give it a shot. Hey, a few of us are going out for tacos on Friday. Want to join?", es: "Buena idea. Lo voy a intentar. Oye, varios vamos a salir a comer tacos el viernes. ¿Te unes?",
          opciones: [
            { t: "Sure, I'd love to!", es: "¡Claro, me encantaría!", ok: true },
            { t: "That sounds great! Count me in. What time?", es: "¡Suena genial! Cuenta conmigo. ¿A qué hora?", ok: true },
            { t: "Sure! I'm very excited to know the city.", es: "¡Claro! Me emociona mucho conocer la ciudad.", ok: false,
              fix: "«Conocer» un lugar no es «know» (saber). Di «to see the city» o «to explore the city»." }
          ],
          clave: ["love", "sounds"],
          tip: "«Count me in» = cuenta conmigo. Lo contrario es «count me out»." }
      ],
      cierre: { bot: "Awesome! We'll head out right after school, around four. See you then!", es: "¡Genial! Salimos justo después de clases, como a las cuatro. ¡Nos vemos!" },
      vocab: [
        { t: "Surviving so far?", es: "¿sobreviviendo hasta ahora?" },
        { t: "picky", es: "exigente, quisquilloso" },
        { t: "chatty", es: "conversador, que habla mucho" },
        { t: "timekeeper", es: "controlador del tiempo" },
        { t: "depend on", es: "depender de" },
        { t: "give it a shot", es: "intentarlo" },
        { t: "Count me in", es: "cuenta conmigo" }
      ]
    },

    /* ───────────── 5 · B1 · Reunión con familia ───────────── */
    {
      id: "en-05", titulo: "Reunión con una madre preocupada", nivel: "B1",
      tema: "Reunión con familia",
      contexto: "En un colegio bilingüe recibes a una madre que solo habla inglés. Su hijo bajó en matemáticas y quieren acordar un plan juntos.",
      rol: "Mrs. Patricia Lee, madre de Daniel (sexto grado), preocupada y algo ansiosa",
      turnos: [
        { bot: "Hello, thank you for meeting with me. I'm Daniel's mom. I'm a little worried about his grades.", es: "Hola, gracias por recibirme. Soy la mamá de Daniel. Estoy un poco preocupada por sus notas.",
          opciones: [
            { t: "Hello, Mrs. Lee. Thank you for coming. Please have a seat.", es: "Hola, señora Lee. Gracias por venir. Siga y siéntese, por favor.", ok: true },
            { t: "Good afternoon, Mrs. Lee. I'm glad you came. Let's talk about how we can support Daniel.", es: "Buenas tardes, señora Lee. Me alegra que haya venido. Hablemos de cómo podemos apoyar a Daniel.", ok: true },
            { t: "Hello, Mrs. Lee. Thank you for assist to the meeting.", es: "Hola, señora Lee. Gracias por asistir a la reunión.", ok: false,
              fix: "«Assist» significa ayudar. «Asistir a» es «attend» o «come to»: «Thank you for coming» o «for attending»." }
          ],
          clave: ["for coming", "glad you came"],
          tip: "Empieza con calidez y un objetivo común («support Daniel»). Baja la ansiedad antes de hablar de problemas." },
        { bot: "His math grade dropped this term. What's going on?", es: "Su nota de matemáticas bajó este periodo. ¿Qué está pasando?",
          opciones: [
            { t: "He's missing some homework assignments.", es: "Le faltan algunas tareas.", ok: true },
            { t: "His test scores are fine, but he hasn't turned in several assignments lately.", es: "Sus resultados en las pruebas están bien, pero últimamente no ha entregado varias tareas.", ok: true },
            { t: "He doesn't make his homeworks.", es: "Él no hace sus tareas.", ok: false,
              fix: "«Homework» es incontable (sin -s) y va con «do»: «He doesn't do his homework»." }
          ],
          clave: ["missing", "assignments", "turned in"],
          tip: "«Turn in» = entregar un trabajo. «Assignment» sí es contable: one assignment, two assignments." },
        { bot: "I had no idea. He always tells me he finished everything at school.", es: "No tenía idea. Él siempre me dice que terminó todo en el colegio.",
          opciones: [
            { t: "I understand. Let's check his planner together.", es: "Entiendo. Revisemos juntos su agenda.", ok: true },
            { t: "I see. Maybe we can work together, and you can check his planner every night.", es: "Ya veo. Quizás podemos trabajar en equipo y usted revisa su agenda cada noche.", ok: true },
            { t: "I understand. You should control his homework every night.", es: "Entiendo. Usted debería revisar sus tareas cada noche.", ok: false,
              fix: "«Control» implica dominar o restringir. Para «revisar» se usa «check» o «monitor»: «check his homework»." }
          ],
          clave: ["check", "planner"],
          tip: "Evita culpar. «Let's…» y «we» transmiten corresponsabilidad entre familia y colegio." },
        { bot: "Yes, I can do that. But I work late on Tuesdays and Thursdays.", es: "Sí, puedo hacerlo. Pero trabajo hasta tarde los martes y jueves.",
          opciones: [
            { t: "That's fine. I can send you a weekly email.", es: "No hay problema. Puedo enviarle un correo semanal.", ok: true },
            { t: "No problem. I'll send you a short email every Friday with any missing work.", es: "No hay problema. Le enviaré un correo corto cada viernes con lo que esté pendiente.", ok: true },
            { t: "No problem. I can send you an email each Friday with the pending works.", es: "No hay problema. Puedo enviarle un correo cada viernes con los trabajos pendientes.", ok: false,
              fix: "«Work» en el sentido de trabajo escolar es incontable: «pending work» o «missing assignments», no «works»." }
          ],
          clave: ["send", "weekly", "every"],
          tip: "Con días repetidos se usa plural sin artículo: «on Tuesdays» = los martes." },
        { bot: "That would really help. Is there anything else I should know?", es: "Eso me ayudaría mucho. ¿Hay algo más que deba saber?",
          opciones: [
            { t: "Yes, he participates a lot in class. He's very creative.", es: "Sí, participa mucho en clase. Es muy creativo.", ok: true },
            { t: "Yes, and it's good news: he's one of the most creative students in class, and his classmates really respect him.", es: "Sí, y es una buena noticia: es uno de los estudiantes más creativos del curso y sus compañeros lo respetan mucho.", ok: true },
            { t: "Yes, he is very sensible with his classmates and very creative.", es: "Sí, es muy sensible con sus compañeros y muy creativo.", ok: false,
              fix: "Falso amigo: «sensible» en inglés significa sensato. «Sensible» (emocional) es «sensitive»." }
          ],
          clave: ["participates", "creative", "most creative", "respect"],
          tip: "Cierra la parte difícil con una fortaleza real del estudiante: la familia escucha mejor el plan." },
        { bot: "That's so good to hear. So, what's the plan, then?", es: "Qué bueno escuchar eso. Entonces, ¿cuál es el plan?",
          opciones: [
            { t: "Daniel uses his planner, and I email you every Friday.", es: "Daniel usa su agenda y yo le escribo cada viernes.", ok: true },
            { t: "Let's agree on three things: he writes in his planner, I email you on Fridays, and we meet again in a month.", es: "Acordemos tres cosas: él anota en su agenda, yo le escribo los viernes y nos reunimos de nuevo en un mes.", ok: true },
            { t: "We meet again in one month for to see his progress.", es: "Nos reunimos otra vez en un mes para ver su progreso.", ok: false,
              fix: "Para expresar propósito se usa solo «to»: «to see his progress». «For to» no existe en inglés." }
          ],
          clave: ["planner", "email", "meet"],
          tip: "Resume acuerdos concretos y con fecha. «Let's agree on…» = acordemos…" }
      ],
      cierre: { bot: "Thank you so much. I feel much better now. See you in a month!", es: "Muchísimas gracias. Ya me siento mucho mejor. ¡Nos vemos en un mes!" },
      vocab: [
        { t: "grades", es: "notas, calificaciones" },
        { t: "term", es: "periodo académico" },
        { t: "turn in", es: "entregar (un trabajo)" },
        { t: "planner", es: "agenda escolar" },
        { t: "missing work", es: "trabajos pendientes" },
        { t: "attend", es: "asistir a" },
        { t: "sensitive", es: "sensible" },
        { t: "Let's agree on…", es: "acordemos…" }
      ]
    },

    /* ───────────── 6 · B1 · Estudiante que no participa ───────────── */
    {
      id: "en-06", titulo: "El estudiante que no participa", nivel: "B1",
      tema: "Manejo de un estudiante que no participa",
      contexto: "Después de clase hablas a solas con un estudiante que nunca participa. Quieres entender qué le pasa y acordar un primer paso.",
      rol: "Lucas, estudiante de noveno grado, tímido y callado",
      turnos: [
        { bot: "You wanted to talk to me? Am I in trouble?", es: "¿Quería hablar conmigo? ¿Estoy en problemas?",
          opciones: [
            { t: "No, not at all. I just want to chat.", es: "No, para nada. Solo quiero conversar.", ok: true },
            { t: "Not at all, Lucas. I just wanted to see how you're doing in my class.", es: "Para nada, Lucas. Solo quería saber cómo te va en mi clase.", ok: true },
            { t: "No, no. Don't be worry, I just want to talk.", es: "No, no. No te preocupes, solo quiero hablar.", ok: false,
              fix: "«Worry» es verbo: «Don't worry». Si usas «be», necesitas el adjetivo: «Don't be worried»." }
          ],
          clave: ["not at all", "chat", "how you're doing"],
          tip: "Un tono suave y una sonrisa bajan la defensa. «Not at all» = para nada." },
        { bot: "Oh. Okay. I'm fine, I guess.", es: "Ah. Bueno. Estoy bien, supongo.",
          opciones: [
            { t: "I noticed you don't speak much in class.", es: "Noté que no hablas mucho en clase.", ok: true },
            { t: "I've noticed you're very quiet in class. Is everything okay?", es: "He notado que eres muy callado en clase. ¿Todo está bien?", ok: true },
            { t: "I have noticed that you don't participate never.", es: "He notado que nunca participas.", ok: false,
              fix: "El inglés no usa doble negación: «you never participate» o «you don't ever participate»." }
          ],
          clave: ["noticed", "speak much", "quiet"],
          tip: "Describe lo que observas sin juzgar: «I've noticed…» abre la conversación mejor que «Why don't you…?»." },
        { bot: "I just get nervous. What if I say something wrong and everyone laughs?", es: "Es que me pongo nervioso. ¿Y si digo algo mal y todos se ríen?",
          opciones: [
            { t: "That's normal. Mistakes help us learn.", es: "Es normal. Los errores nos ayudan a aprender.", ok: true },
            { t: "I understand. Everyone makes mistakes, including me. In this class, mistakes are part of learning.", es: "Te entiendo. Todos cometemos errores, incluso yo. En esta clase, los errores son parte del aprendizaje.", ok: true },
            { t: "I understand. Everybody commit mistakes, it's normal.", es: "Te entiendo. Todos cometemos errores, es normal.", ok: false,
              fix: "Los errores se «make»: «make mistakes». Y «everybody» es singular: «everybody makes mistakes»." }
          ],
          clave: ["mistakes help", "makes mistakes", "learn"],
          tip: "Valida la emoción primero («I understand») y luego reencuadra: el error no nos detiene, nos enseña." },
        { bot: "Maybe... but it's still scary to talk in front of everybody.", es: "Puede ser… pero igual me da miedo hablar delante de todos.",
          opciones: [
            { t: "What if you share with a partner first?", es: "¿Y si primero lo compartes con un compañero?", ok: true },
            { t: "How about this: first you talk with a partner, and then you share your partner's idea with the class?", es: "¿Qué tal esto?: primero hablas con un compañero y luego compartes la idea de tu compañero con la clase.", ok: true },
            { t: "I propose you to speak first with a partner.", es: "Te propongo hablar primero con un compañero.", ok: false,
              fix: "«Propose» no funciona con objeto + «to». Di «I suggest (that) you talk with a partner first» o «How about…?»." }
          ],
          clave: ["what if", "how about", "partner"],
          tip: "La estrategia «think-pair-share» reduce la ansiedad: pensar solo, hablar en pareja y después con el grupo." },
        { bot: "That sounds easier. I think I could do that.", es: "Eso suena más fácil. Creo que podría hacerlo.",
          opciones: [
            { t: "Great. I'll also give you time to think.", es: "Genial. También te daré tiempo para pensar.", ok: true },
            { t: "Great! And I'll give everyone a minute to write down their ideas before speaking.", es: "¡Genial! Y les daré a todos un minuto para anotar sus ideas antes de hablar.", ok: true },
            { t: "Perfect. I'll give you time for think before.", es: "Perfecto. Te daré tiempo para pensar antes.", ok: false,
              fix: "Para expresar propósito con un verbo se usa «to»: «time to think», no «for think»." }
          ],
          clave: ["time to think", "a minute"],
          tip: "El tiempo de espera (wait time) de unos segundos aumenta la calidad y cantidad de respuestas." },
        { bot: "Thanks. Can I ask you something? Do you really think I'm good at this subject?", es: "Gracias. ¿Le puedo preguntar algo? ¿De verdad cree que soy bueno en esta materia?",
          opciones: [
            { t: "Yes, your written work is excellent.", es: "Sí, tus trabajos escritos son excelentes.", ok: true },
            { t: "Absolutely. Your essays show deep thinking, and I'd love for the class to hear your ideas.", es: "Totalmente. Tus ensayos muestran un pensamiento profundo y me encantaría que la clase escuchara tus ideas.", ok: true },
            { t: "Of course! You are very smart. I'm sure that you will success.", es: "¡Claro! Eres muy inteligente. Estoy seguro de que tendrás éxito.", ok: false,
              fix: "«Success» es sustantivo; el verbo es «succeed»: «you will succeed»." }
          ],
          clave: ["yes", "written work", "essays", "absolutely"],
          tip: "Elogia con evidencia concreta («your essays show…»), no solo con «you're smart»: motiva el esfuerzo." }
      ],
      cierre: { bot: "Okay. I'll try tomorrow. Thanks for talking with me.", es: "Bueno. Mañana lo intento. Gracias por hablar conmigo." },
      vocab: [
        { t: "Am I in trouble?", es: "¿estoy en problemas?" },
        { t: "notice", es: "notar, darse cuenta" },
        { t: "quiet", es: "callado" },
        { t: "make mistakes", es: "cometer errores" },
        { t: "How about…?", es: "¿qué tal si…?" },
        { t: "I suggest…", es: "sugiero…" },
        { t: "succeed", es: "tener éxito" }
      ]
    },

    /* ───────────── 7 · B1 · Videollamada con colega extranjero ───────────── */
    {
      id: "en-07", titulo: "Videollamada con una colega de Seattle", nivel: "B1",
      tema: "Entrevista o videollamada con colega extranjero",
      contexto: "Tienes una videollamada con una docente de Seattle para planear un intercambio virtual entre sus estudiantes y los tuyos.",
      rol: "Ms. Amanda Ross, profesora de Estudios Sociales en Seattle, entusiasta y organizada",
      turnos: [
        { bot: "Hi! Can you hear me okay? I think my connection is a little slow.", es: "¡Hola! ¿Me escuchas bien? Creo que mi conexión está un poco lenta.",
          opciones: [
            { t: "Yes, I can hear you fine.", es: "Sí, te escucho bien.", ok: true },
            { t: "Yes, I can hear you perfectly. Thanks for making time for this call.", es: "Sí, te escucho perfectamente. Gracias por sacar tiempo para esta llamada.", ok: true },
            { t: "Yes, I hear you good.", es: "Sí, te escucho bien.", ok: false,
              fix: "«Good» es adjetivo; con verbos se usa el adverbio «well». Lo más natural: «I can hear you fine/well»." }
          ],
          clave: ["can hear you", "fine", "perfectly"],
          tip: "En llamadas se usa «can» con verbos de percepción: «I can hear you», «I can see your screen»." },
        { bot: "Great! So, tell me a little about your students.", es: "¡Genial! Cuéntame un poco de tus estudiantes.",
          opciones: [
            { t: "I teach seventh grade. They're twelve and thirteen years old.", es: "Enseño en séptimo. Tienen doce y trece años.", ok: true },
            { t: "I currently have two seventh-grade groups. They're curious, energetic, and really excited about this project.", es: "Actualmente tengo dos grupos de séptimo. Son curiosos, enérgicos y están muy entusiasmados con este proyecto.", ok: true },
            { t: "Actually I have two groups of seventh grade.", es: "Actualmente tengo dos grupos de séptimo.", ok: false,
              fix: "Falso amigo: «actually» significa «en realidad». «Actualmente» es «currently»: «I currently have two seventh-grade groups»." }
          ],
          clave: ["seventh grade", "they're", "currently"],
          tip: "«Seventh-grade groups» lleva guion porque funciona como adjetivo antes del sustantivo." },
        { bot: "Perfect, mine are the same age! What kind of project do you have in mind?", es: "¡Perfecto, los míos tienen la misma edad! ¿Qué tipo de proyecto tienes en mente?",
          opciones: [
            { t: "Maybe they can exchange videos about their cities.", es: "Quizás pueden intercambiar videos sobre sus ciudades.", ok: true },
            { t: "I was thinking they could make short videos about their cities and then ask each other questions.", es: "Estaba pensando que podrían hacer videos cortos sobre sus ciudades y luego hacerse preguntas entre ellos.", ok: true },
            { t: "I was thinking in a project of videos about their cities.", es: "Estaba pensando en un proyecto de videos sobre sus ciudades.", ok: false,
              fix: "«Pensar en» se dice «think about» o «think of», no «think in». Además: «a video project»." }
          ],
          clave: ["exchange videos", "short videos"],
          tip: "«Each other» = entre ellos, mutuamente: «They ask each other questions»." },
        { bot: "I love that! How often should we meet online?", es: "¡Me encanta! ¿Cada cuánto deberíamos reunirnos en línea?",
          opciones: [
            { t: "Once a month is good.", es: "Una vez al mes está bien.", ok: true },
            { t: "How about once a month? Our schedules are very different, so that seems realistic.", es: "¿Qué tal una vez al mes? Nuestros horarios son muy distintos, así que parece realista.", ok: true },
            { t: "Each fifteen days could be good.", es: "Cada quince días podría estar bien.", ok: false,
              fix: "«Cada quince días» se dice «every two weeks». «Each» no se usa con números así." }
          ],
          clave: ["once", "month"],
          tip: "Frecuencias: once a week, twice a month, every two weeks. «How often…?» = ¿cada cuánto…?" },
        { bot: "Good point. There's a time difference, too. What time works for you?", es: "Buen punto. También hay diferencia horaria. ¿Qué hora te sirve?",
          opciones: [
            { t: "Mornings are best for me, around nine.", es: "Las mañanas son mejores para mí, como a las nueve.", ok: true },
            { t: "Tuesday mornings work best for me, at around nine. Is that too early for you?", es: "Los martes en la mañana me quedan mejor, como a las nueve. ¿Es muy temprano para ti?", ok: true },
            { t: "In the mornings, in the nine more or less.", es: "En las mañanas, a eso de las nueve.", ok: false,
              fix: "La hora aproximada se dice «at around nine» o «at about nine», no «in the nine more or less»." }
          ],
          clave: ["around nine", "work best"],
          tip: "«What time works for you?» = ¿qué hora te sirve? Responde con «… works for me»." },
        { bot: "With the time difference that's pretty early for me, but we can make it work. Can you send me an email to confirm?", es: "Con la diferencia horaria es bastante temprano para mí, pero lo podemos lograr. ¿Me envías un correo para confirmar?",
          opciones: [
            { t: "Sure, I'll send it today.", es: "Claro, lo envío hoy.", ok: true },
            { t: "Of course. I'll send you an email this afternoon with a draft of the plan.", es: "Por supuesto. Te envío un correo esta tarde con un borrador del plan.", ok: true },
            { t: "Of course, I send you an email this afternoon.", es: "Claro, te envío un correo esta tarde.", ok: false,
              fix: "Para promesas o decisiones del momento se usa «will»: «I'll send you an email». El presente simple no sirve aquí." }
          ],
          clave: ["I'll send", "send it today"],
          tip: "En español decimos «te envío» en presente; en inglés la promesa necesita «I'll»." }
      ],
      cierre: { bot: "Perfect! This is going to be amazing. Talk soon!", es: "¡Perfecto! Esto va a quedar increíble. ¡Hablamos pronto!" },
      vocab: [
        { t: "Can you hear me okay?", es: "¿me escuchas bien?" },
        { t: "currently", es: "actualmente" },
        { t: "actually", es: "en realidad" },
        { t: "each other", es: "entre ellos, mutuamente" },
        { t: "every two weeks", es: "cada quince días" },
        { t: "time difference", es: "diferencia horaria" },
        { t: "make it work", es: "lograr que funcione" },
        { t: "draft", es: "borrador" }
      ]
    },

    /* ───────────── 8 · B2 · Dar retroalimentación ───────────── */
    {
      id: "en-08", titulo: "Retroalimentación a un practicante", nivel: "B2",
      tema: "Dar retroalimentación",
      contexto: "Observaste la clase de ciencias de un docente practicante. Le das retroalimentación constructiva: fortalezas, un aspecto a mejorar y una meta.",
      rol: "Ryan Cooper, practicante de 24 años, entusiasta pero inseguro",
      turnos: [
        { bot: "So... how did I do? Be honest, I can take it.", es: "Entonces… ¿cómo me fue? Sea honesto, lo puedo aguantar.",
          opciones: [
            { t: "Overall, it was a good lesson. Let's start with what went well.", es: "En general, fue una buena clase. Empecemos por lo que salió bien.", ok: true },
            { t: "Overall, it was a solid lesson. Let's start with your strengths, and then we'll look at one area to work on.", es: "En general, fue una clase sólida. Empecemos por tus fortalezas y luego veremos un aspecto para trabajar.", ok: true },
            { t: "Overall, it was a good lesson. Let me give you some advices.", es: "En general, fue una buena clase. Déjame darte algunos consejos.", ok: false,
              fix: "«Advice» es incontable: «some advice» o «a piece of advice», nunca «advices»." }
          ],
          clave: ["went well", "strengths"],
          tip: "Empieza por las fortalezas: la persona queda más abierta a escuchar lo que debe mejorar." },
        { bot: "Okay, that's a relief. What do you think worked?", es: "Bueno, qué alivio. ¿Qué crees que funcionó?",
          opciones: [
            { t: "Your hook at the beginning was excellent. The students were engaged.", es: "Tu gancho al inicio fue excelente. Los estudiantes estaban enganchados.", ok: true },
            { t: "The hands-on experiment was a great hook. Students were engaged from the very first minute.", es: "El experimento práctico fue un gran gancho. Los estudiantes se engancharon desde el primer minuto.", ok: true },
            { t: "The experiment was very interesting. The students were very excited with it.", es: "El experimento fue muy interesante. Los estudiantes estaban muy entusiasmados con él.", ok: false,
              fix: "Se dice «excited about», no «excited with»: «The students were very excited about it»." }
          ],
          clave: ["hook", "engaged"],
          tip: "Sé específico: nombra la acción concreta («the hands-on experiment») para que pueda repetirla." },
        { bot: "Thanks! I worked hard on that. And what should I improve?", es: "¡Gracias! Me esforcé mucho en eso. ¿Y qué debería mejorar?",
          opciones: [
            { t: "Your instructions could be clearer. Some students were confused.", es: "Tus instrucciones podrían ser más claras. Algunos estudiantes estaban confundidos.", ok: true },
            { t: "I'd focus on your instructions. A few students weren't sure what to do, so you might model the first step before they start.", es: "Me enfocaría en tus instrucciones. Algunos estudiantes no sabían qué hacer, así que podrías modelar el primer paso antes de que empiecen.", ok: true },
            { t: "You must improve the instructions; many students didn't understood.", es: "Debes mejorar las instrucciones; muchos estudiantes no entendieron.", ok: false,
              fix: "Después de «didn't» va el verbo en forma base: «didn't understand». El pasado ya lo marca «did»." }
          ],
          clave: ["could be clearer", "I'd focus"],
          tip: "Suaviza con modales: «could», «might», «I'd focus on…» suenan a apoyo, no a orden." },
        { bot: "Yeah, I noticed some confusion. Any specific strategies?", es: "Sí, noté algo de confusión. ¿Alguna estrategia concreta?",
          opciones: [
            { t: "Try giving instructions one step at a time.", es: "Intenta dar las instrucciones paso a paso.", ok: true },
            { t: "One strategy is to give instructions in small chunks and then ask a student to repeat them for the class.", es: "Una estrategia es dar las instrucciones por partes y luego pedirle a un estudiante que las repita para la clase.", ok: true },
            { t: "You could to check comprehension asking a student.", es: "Podrías verificar la comprensión preguntándole a un estudiante.", ok: false,
              fix: "Tras «could» no va «to». Y para «preguntándole» se usa «by + -ing»: «You could check understanding by asking a student»." }
          ],
          clave: ["step", "instructions"],
          tip: "«Chunks» = partes pequeñas. Dividir la información reduce la carga cognitiva de los estudiantes." },
        { bot: "That makes sense. To be honest, I also felt I was running out of time at the end.", es: "Tiene sentido. Para ser sincero, también sentí que me quedaba sin tiempo al final.",
          opciones: [
            { t: "Yes, the closure was rushed. A timer could help.", es: "Sí, el cierre fue apresurado. Un temporizador podría ayudar.", ok: true },
            { t: "That's true. You might plan a five-minute closure and use a visible timer so you don't skip it.", es: "Es cierto. Podrías planear un cierre de cinco minutos y usar un temporizador visible para no saltártelo.", ok: true },
            { t: "Yes. You can eventually use a timer if you need it.", es: "Sí. Eventualmente puedes usar un temporizador si lo necesitas.", ok: false,
              fix: "Falso amigo: «eventually» significa «al final, con el tiempo». Para «eventualmente / si hace falta» di «if needed» u «occasionally»." }
          ],
          clave: ["timer", "closure", "rushed"],
          tip: "«Run out of time» = quedarse sin tiempo. «Closure» = cierre de la clase." },
        { bot: "Good idea. So, what's my main goal for next week?", es: "Buena idea. Entonces, ¿cuál es mi meta principal para la próxima semana?",
          opciones: [
            { t: "Model the first step and check understanding before group work.", es: "Modelar el primer paso y verificar la comprensión antes del trabajo en grupo.", ok: true },
            { t: "Your goal is twofold: model the first step clearly and protect the last five minutes for closure.", es: "Tu meta es doble: modelar con claridad el primer paso y proteger los últimos cinco minutos para el cierre.", ok: true },
            { t: "Your main goal is to give more clearly instructions.", es: "Tu meta principal es dar instrucciones más claras.", ok: false,
              fix: "El adjetivo va antes del sustantivo: «clearer instructions». O usa el adverbio después: «give instructions more clearly»." }
          ],
          clave: ["model the first step", "check understanding", "twofold"],
          tip: "Una o dos metas concretas y observables funcionan mejor que una lista larga de mejoras." },
        { bot: "Got it. Thanks for being so supportive. Can you observe me again next week?", es: "Entendido. Gracias por apoyarme tanto. ¿Puedes observarme otra vez la próxima semana?",
          opciones: [
            { t: "Of course. I'll come on Thursday.", es: "Claro. Iré el jueves.", ok: true },
            { t: "Absolutely. I'll observe your Thursday class, and we'll debrief afterward.", es: "Por supuesto. Observaré tu clase del jueves y la comentaremos después.", ok: true },
            { t: "Of course. We'll stay in contact for coordinate it.", es: "Claro. Estaremos en contacto para coordinarlo.", ok: false,
              fix: "«Para + verbo» es «to + verbo»: «to coordinate it». Además, lo natural es «keep in touch» o «stay in touch»." }
          ],
          clave: ["Thursday", "observe"],
          tip: "«Debrief» = conversación posterior para analizar lo que pasó. Muy usado en formación docente." }
      ],
      cierre: { bot: "Perfect. I really appreciate it. See you Thursday!", es: "Perfecto. De verdad lo agradezco. ¡Nos vemos el jueves!" },
      vocab: [
        { t: "overall", es: "en general" },
        { t: "advice", es: "consejo(s) (incontable)" },
        { t: "hook", es: "gancho, actividad de enganche" },
        { t: "engaged", es: "enganchado, comprometido" },
        { t: "model (v.)", es: "modelar, mostrar cómo se hace" },
        { t: "chunks", es: "partes pequeñas" },
        { t: "closure", es: "cierre de la clase" },
        { t: "debrief", es: "conversar después para analizar" }
      ]
    },

    /* ───────────── 9 · B2 · Conferencia o capacitación ───────────── */
    {
      id: "en-09", titulo: "Pregunta a una ponente en un congreso", nivel: "B2",
      tema: "Conferencia o capacitación",
      contexto: "En un congreso en Boston, al terminar una charla sobre evaluación formativa, te acercas a la ponente para hacerle una pregunta y establecer contacto.",
      rol: "Dr. Sarah Thompson, ponente experta en evaluación formativa, cercana y precisa",
      turnos: [
        { bot: "Hi there! Did you enjoy the session?", es: "¡Hola! ¿Le gustó la sesión?",
          opciones: [
            { t: "Yes, very much. It was very practical.", es: "Sí, mucho. Fue muy práctica.", ok: true },
            { t: "I really did. Your examples of exit tickets were incredibly practical.", es: "Muchísimo. Sus ejemplos de tickets de salida fueron increíblemente prácticos.", ok: true },
            { t: "Yes! Your conference was very interesting.", es: "¡Sí! Su conferencia fue muy interesante.", ok: false,
              fix: "En inglés, una charla es «talk», «presentation» o «session». «Conference» es el congreso completo." }
          ],
          clave: ["practical", "yes", "really"],
          tip: "«I really did» retoma el auxiliar de la pregunta («Did you…?») y suena muy natural." },
        { bot: "Thank you! Where are you joining us from?", es: "¡Gracias! ¿Desde dónde nos acompaña?",
          opciones: [
            { t: "I'm from Colombia. I teach at a school in Cali.", es: "Soy de Colombia. Enseño en un colegio de Cali.", ok: true },
            { t: "From Cali, Colombia. I coordinate a teacher training program at a K–11 school.", es: "De Cali, Colombia. Coordino un programa de formación docente en un colegio de transición a once.", ok: true },
            { t: "From Colombia. I work like a teacher in a school of Cali.", es: "De Colombia. Trabajo como docente en un colegio de Cali.", ok: false,
              fix: "Para la profesión se usa «as»: «I work as a teacher». «Like» compara («como si fuera»). Y mejor «a school in Cali»." }
          ],
          clave: ["at a", "school in", "coordinate"],
          tip: "«K–11» se lee «K through eleven» y describe los grados que ofrece un colegio." },
        { bot: "How wonderful! What did you find most relevant for your context?", es: "¡Qué maravilla! ¿Qué le pareció más pertinente para su contexto?",
          opciones: [
            { t: "The idea of quick checks for understanding in every class.", es: "La idea de verificar rápidamente la comprensión en cada clase.", ok: true },
            { t: "Definitely the quick checks for understanding. With large classes, that could make a huge difference.", es: "Sin duda, las verificaciones rápidas de comprensión. Con grupos grandes, eso podría marcar una gran diferencia.", ok: true },
            { t: "The part about feedback, because in Colombia we have very numerous groups.", es: "La parte de la retroalimentación, porque en Colombia tenemos grupos muy numerosos.", ok: false,
              fix: "«Numerous» significa «muchos» (numerous groups = muchos grupos), no grupos grandes. Di «large classes» o «big groups»." }
          ],
          clave: ["checks", "understanding"],
          tip: "«Make a huge difference» = marcar una gran diferencia. Muy útil para argumentar." },
        { bot: "Large classes are definitely a challenge. Do you have a question for me?", es: "Los grupos grandes sin duda son un reto. ¿Tiene alguna pregunta para mí?",
          opciones: [
            { t: "Yes. How can we give feedback to forty students quickly?", es: "Sí. ¿Cómo podemos dar retroalimentación rápida a cuarenta estudiantes?", ok: true },
            { t: "Yes. How would you adapt exit tickets for classes of forty without overwhelming teachers?", es: "Sí. ¿Cómo adaptaría los tickets de salida a grupos de cuarenta sin sobrecargar a los docentes?", ok: true },
            { t: "Yes. How we can give feedback to forty students without spend hours?", es: "Sí. ¿Cómo podemos dar retroalimentación a cuarenta estudiantes sin gastar horas?", ok: false,
              fix: "En la pregunta el auxiliar va antes del sujeto: «How can we…?». Y tras «without» va -ing: «without spending hours»." }
          ],
          clave: ["how can we", "how would you", "forty"],
          tip: "«Feedback» es incontable: «some feedback», «a piece of feedback», nunca «feedbacks»." },
        { bot: "Great question. I'd suggest sorting the tickets into three piles instead of grading them, and then grouping students for the next lesson.", es: "Excelente pregunta. Sugeriría clasificar los tickets en tres montones en lugar de calificarlos, y luego agrupar a los estudiantes para la clase siguiente.",
          opciones: [
            { t: "That's very useful. So you don't grade them at all?", es: "Muy útil. ¿Entonces no los califica para nada?", ok: true },
            { t: "That's brilliant. So the purpose is to inform instruction rather than to assign a grade?", es: "Brillante. ¿Entonces el propósito es orientar la enseñanza, más que asignar una nota?", ok: true },
            { t: "Very useful. So you don't qualify them?", es: "Muy útil. ¿Entonces no los califica?", ok: false,
              fix: "«Calificar» trabajos es «grade» (EE. UU.) o «mark». «Qualify» significa cumplir requisitos o clasificar(se)." }
          ],
          clave: ["grade", "so you", "purpose"],
          tip: "Parafrasear («So the purpose is…?») demuestra escucha activa y confirma que entendiste." },
        { bot: "Exactly. Formative assessment is about adjusting teaching, not filling the gradebook. Is there anything else?", es: "Exacto. La evaluación formativa se trata de ajustar la enseñanza, no de llenar la planilla de notas. ¿Algo más?",
          opciones: [
            { t: "Could I contact you to share our results?", es: "¿Podría contactarla para compartir nuestros resultados?", ok: true },
            { t: "Would you mind if I emailed you later this year to share how it works at our school?", es: "¿Le molestaría si le escribo más adelante este año para contarle cómo funciona en nuestro colegio?", ok: true },
            { t: "Do you mind if I contact with you later?", es: "¿Le molesta si me contacto con usted más adelante?", ok: false,
              fix: "«Contact» es transitivo: «contact you», sin «with». «Contactarse con» no se traduce literal." }
          ],
          clave: ["contact you", "share", "emailed"],
          tip: "«Would you mind if I + pasado…?» es muy cortés. Responder «Not at all» significa que no hay problema." },
        { bot: "Not at all, I'd love that! Here's my card.", es: "¡Para nada, me encantaría! Aquí tiene mi tarjeta.",
          opciones: [
            { t: "Thank you so much. It was a pleasure to meet you.", es: "Muchas gracias. Fue un placer conocerla.", ok: true },
            { t: "Thank you! I'll be in touch. It's been a real pleasure talking with you.", es: "¡Gracias! Estaré en contacto. Ha sido un verdadero placer hablar con usted.", ok: true },
            { t: "Thank you! I look forward to stay in touch.", es: "¡Gracias! Espero que sigamos en contacto.", ok: false,
              fix: "En «look forward to», «to» es preposición y va seguida de -ing: «I look forward to staying in touch»." }
          ],
          clave: ["pleasure", "meet", "talking"],
          tip: "«I'll be in touch» = estaré en contacto. Cierre profesional y amable para networking." }
      ],
      cierre: { bot: "Likewise. Good luck with your project in Cali!", es: "Igualmente. ¡Mucha suerte con su proyecto en Cali!" },
      vocab: [
        { t: "session / talk", es: "sesión, charla" },
        { t: "exit ticket", es: "ticket de salida" },
        { t: "check for understanding", es: "verificar la comprensión" },
        { t: "large classes", es: "grupos numerosos" },
        { t: "grade (v.)", es: "calificar" },
        { t: "inform instruction", es: "orientar la enseñanza" },
        { t: "gradebook", es: "planilla de notas" },
        { t: "look forward to + -ing", es: "esperar con gusto…" }
      ]
    },

    /* ───────────── 10 · C1 · Contar una experiencia pedagógica ───────────── */
    {
      id: "en-10", titulo: "Panel: la experiencia que cambió mi práctica", nivel: "C1",
      tema: "Contar una experiencia pedagógica",
      contexto: "Participas como panelista en un foro virtual de innovación educativa. Cuentas una experiencia de aula que transformó tu práctica y respondes preguntas exigentes del moderador.",
      rol: "Prof. Michael Grant, moderador del panel, incisivo y curioso",
      turnos: [
        { bot: "Welcome to the panel. Could you tell us about a teaching experience that changed your practice?", es: "Le damos la bienvenida al panel. ¿Podría contarnos una experiencia docente que haya cambiado su práctica?",
          opciones: [
            { t: "Sure. A few years ago, I started a financial literacy project with my fifth graders.", es: "Claro. Hace unos años empecé un proyecto de educación financiera con mis estudiantes de quinto.", ok: true },
            { t: "Gladly. A few years ago, I launched a financial literacy project with fifth graders, and it completely reshaped how I teach math.", es: "Con gusto. Hace unos años lancé un proyecto de educación financiera con estudiantes de quinto, y transformó por completo mi forma de enseñar matemáticas.", ok: true },
            { t: "Of course. Some years ago, I started a project of financial education with my students of fifth grade.", es: "Por supuesto. Hace algunos años empecé un proyecto de educación financiera con mis estudiantes de quinto grado.", ok: false,
              fix: "En inglés el modificador va antes del sustantivo: «a financial literacy project with my fifth graders», no «project of… students of fifth grade»." }
          ],
          clave: ["financial literacy", "fifth graders", "launched"],
          tip: "Abre con contexto breve (cuándo, con quién, qué) y anticipa el impacto: engancha a la audiencia." },
        { bot: "Interesting. What prompted you to try it?", es: "Interesante. ¿Qué motivó su decisión de intentarlo?",
          opciones: [
            { t: "My students struggled with percentages, and they didn't see why math mattered.", es: "Mis estudiantes tenían dificultades con los porcentajes y no veían por qué importaban las matemáticas.", ok: true },
            { t: "Frankly, my students saw percentages as meaningless. I wanted them to see math as a tool for real decisions.", es: "Francamente, para mis estudiantes los porcentajes no tenían sentido. Quería que vieran las matemáticas como una herramienta para decisiones reales.", ok: true },
            { t: "My students had problems with percentages, and they didn't find the sense.", es: "Mis estudiantes tenían problemas con los porcentajes y no les encontraban el sentido.", ok: false,
              fix: "«Encontrarle sentido» se dice «see the point» o «make sense of it». «Find the sense» no es natural en inglés." }
          ],
          clave: ["struggled", "why math mattered", "meaningless", "real decisions"],
          tip: "«Struggle with» = tener dificultades con. Suena más preciso y profesional que «have problems with»." },
        { bot: "So what did the project actually involve?", es: "¿Y en qué consistía realmente el proyecto?",
          opciones: [
            { t: "They ran a small school store and kept track of their profits.", es: "Administraron una pequeña tienda escolar y llevaron el registro de sus ganancias.", ok: true },
            { t: "For six weeks, students ran a small school store: they set prices, tracked expenses, and calculated their profit margins.", es: "Durante seis semanas, los estudiantes administraron una pequeña tienda escolar: fijaron precios, registraron gastos y calcularon sus márgenes de ganancia.", ok: true },
            { t: "They ran a little store in the school and did the accountability.", es: "Administraron una tiendita en el colegio y llevaron la contabilidad.", ok: false,
              fix: "Falso amigo: «accountability» es responsabilidad o rendición de cuentas. «Contabilidad» es «bookkeeping» o «accounting»." }
          ],
          clave: ["school store", "kept track", "tracked", "profit"],
          tip: "Usa verbos de acción en serie (set, tracked, calculated) para que el relato sea vívido y concreto." },
        { bot: "And what results did you see? Do you have evidence, or is it more of an impression?", es: "¿Y qué resultados vio? ¿Tiene evidencia o es más bien una impresión?",
          opciones: [
            { t: "Their scores on percentage problems improved, and they participated more.", es: "Sus resultados en problemas de porcentajes mejoraron y participaban más.", ok: true },
            { t: "Both. Their scores on percentage problems rose noticeably, although I'd be cautious, since we didn't have a control group.", es: "Ambas. Sus resultados en problemas de porcentajes subieron notablemente, aunque sería prudente, porque no teníamos grupo de control.", ok: true },
            { t: "Both. The results were notorious: the scores went up a lot.", es: "Ambas. Los resultados fueron notorios: las notas subieron mucho.", ok: false,
              fix: "Falso amigo: «notorious» significa «de mala fama». Para «notorio, evidente» usa «noticeable» o «remarkable»." }
          ],
          clave: ["improved", "rose", "percentage"],
          tip: "Matizar la evidencia («I'd be cautious…») aumenta tu credibilidad ante un público académico." },
        { bot: "That's an honest caveat. What was the biggest challenge along the way?", es: "Es una salvedad honesta. ¿Cuál fue el mayor reto en el camino?",
          opciones: [
            { t: "Time. The project took longer than I had planned.", es: "El tiempo. El proyecto tomó más de lo que había planeado.", ok: true },
            { t: "Time management, without a doubt. The project took twice as long as I had expected, so I had to cut other content.", es: "La gestión del tiempo, sin duda. El proyecto tomó el doble de lo esperado, así que tuve que recortar otros contenidos.", ok: true },
            { t: "The time. The project lasted more than I thought, and I had to eliminate other contents.", es: "El tiempo. El proyecto duró más de lo que pensé y tuve que eliminar otros contenidos.", ok: false,
              fix: "Los sustantivos en sentido general van sin «the» («Time»). Con duración se dice «lasted longer than», y «content» suele ser incontable." }
          ],
          clave: ["took", "longer", "twice as long", "planned"],
          tip: "«Twice as long as…» = el doble de lo que… Estructura útil para comparar con precisión." },
        { bot: "If a colleague wanted to replicate this, what would you advise them?", es: "Si un colega quisiera replicarlo, ¿qué le aconsejaría?",
          opciones: [
            { t: "Start small, and connect every activity to a clear learning goal.", es: "Empezar en pequeño y conectar cada actividad con una meta de aprendizaje clara.", ok: true },
            { t: "I'd advise them to start small, align each task with specific standards, and involve families from day one.", es: "Le aconsejaría empezar en pequeño, alinear cada tarea con estándares específicos e involucrar a las familias desde el primer día.", ok: true },
            { t: "I would recommend them to start small and to involve the families.", es: "Les recomendaría empezar en pequeño e involucrar a las familias.", ok: false,
              fix: "«Recommend» no admite objeto + «to». Di «I'd recommend that they start small» o «I'd recommend starting small»." }
          ],
          clave: ["start small", "goal", "standards", "advise"],
          tip: "«Advise someone to…» sí es correcto; «recommend someone to…» no. Son verbos con patrones distintos." },
        { bot: "Looking back, what did this experience teach you as an educator?", es: "En retrospectiva, ¿qué le enseñó esta experiencia como docente?",
          opciones: [
            { t: "That students learn more when the content is meaningful to them.", es: "Que los estudiantes aprenden más cuando el contenido tiene sentido para ellos.", ok: true },
            { t: "That relevance isn't a luxury; it's the engine of learning. And that mistakes, mine included, are where growth happens.", es: "Que la pertinencia no es un lujo: es el motor del aprendizaje. Y que los errores, incluidos los míos, son donde ocurre el crecimiento.", ok: true },
            { t: "That if students would see the point, they would learn more.", es: "Que si los estudiantes vieran el sentido, aprenderían más.", ok: false,
              fix: "En la cláusula con «if» no se usa «would»: «if students saw the point, they would learn more» o «if they see…, they learn…»." }
          ],
          clave: ["meaningful", "learn more when", "relevance", "mistakes"],
          tip: "Cierra con una idea memorable y breve: el público recuerda la última frase más que los datos." }
      ],
      cierre: { bot: "Thank you. That was both inspiring and refreshingly honest.", es: "Gracias. Fue a la vez inspirador y de una honestidad refrescante." },
      vocab: [
        { t: "financial literacy", es: "educación financiera" },
        { t: "reshape", es: "transformar, redefinir" },
        { t: "struggle with", es: "tener dificultades con" },
        { t: "bookkeeping", es: "contabilidad (registro)" },
        { t: "noticeable", es: "notorio, evidente" },
        { t: "caveat", es: "salvedad, advertencia" },
        { t: "control group", es: "grupo de control" },
        { t: "looking back", es: "en retrospectiva" }
      ]
    }
  ]
};
