/* Club de Diálogo SABI CENTEC · Inglés (en-US) · 30 escenarios A1 → C1 */
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
    },

    /* ───────────── 11 · A1 · Pedir direcciones ───────────── */
    {
      id: "en-11", titulo: "¿Cómo llego a la biblioteca?", nivel: "A1",
      tema: "Vida cotidiana: pedir direcciones",
      contexto: "Durante tu intercambio caminas por el centro de la ciudad y no encuentras la biblioteca pública. Le pides indicaciones a un vecino.",
      rol: "Mr. Daniel Ross, un vecino que pasea a su perro, amable y paciente",
      turnos: [
        { bot: "Hi there! Are you looking for something? Can I help you?", es: "¡Hola! ¿Estás buscando algo? ¿Te puedo ayudar?",
          opciones: [
            { t: "Yes, please. Where is the public library?", es: "Sí, por favor. ¿Dónde queda la biblioteca pública?", ok: true },
            { t: "Yes, thank you. Excuse me, how do I get to the public library?", es: "Sí, gracias. Disculpe, ¿cómo llego a la biblioteca pública?", ok: true },
            { t: "Yes, please. Where is the library public?", es: "Sí, por favor. ¿Dónde queda la biblioteca pública?", ok: false,
              fix: "En inglés el adjetivo va antes del sustantivo: «the public library», no «the library public»." }
          ],
          clave: ["where", "library", "get to"],
          tip: "«How do I get to…?» es la forma más natural de preguntar cómo llegar a un lugar." },
        { bot: "The library? Sure. Go straight for two blocks, and then turn left on Oak Street.", es: "¿La biblioteca? Claro. Sigue derecho dos cuadras y luego gira a la izquierda en la calle Oak.",
          opciones: [
            { t: "Two blocks, then left. Thank you.", es: "Dos cuadras y luego a la izquierda. Gracias.", ok: true },
            { t: "So I go straight for two blocks and turn left on Oak Street, right?", es: "Entonces sigo derecho dos cuadras y giro a la izquierda en la calle Oak, ¿cierto?", ok: true },
            { t: "Okay, I go right two blocks and then left.", es: "Bien, sigo derecho dos cuadras y luego a la izquierda.", ok: false,
              fix: "«Right» significa «derecha». «Seguir derecho» se dice «go straight»: «I go straight for two blocks»." }
          ],
          clave: ["straight", "left", "blocks"],
          tip: "Confirma repitiendo la instrucción y agrega «right?» al final: equivale a «¿cierto?»." },
        { bot: "Exactly. The library is next to a big park. You can't miss it.", es: "Exacto. La biblioteca queda al lado de un parque grande. No tiene pérdida.",
          opciones: [
            { t: "Next to the park. Great!", es: "Al lado del parque. ¡Genial!", ok: true },
            { t: "Next to a big park? Perfect. Is it far from here?", es: "¿Al lado de un parque grande? Perfecto. ¿Queda lejos de aquí?", ok: true },
            { t: "Next of the park? Okay.", es: "¿Al lado del parque? Bien.", ok: false,
              fix: "«Al lado de» se dice «next to», no «next of»: «next to the park»." }
          ],
          clave: ["next to", "park", "far"],
          tip: "«You can't miss it» = «no tiene pérdida». Es muy común al dar indicaciones." },
        { bot: "And don't worry, it isn't far. It's about a ten-minute walk.", es: "Y tranquilo, no queda lejos. Son como diez minutos a pie.",
          opciones: [
            { t: "Ten minutes. That's fine.", es: "Diez minutos. Está bien.", ok: true },
            { t: "Great, a ten-minute walk is perfect. I like walking.", es: "Genial, una caminata de diez minutos es perfecta. Me gusta caminar.", ok: true },
            { t: "A ten minutes walk? Perfect.", es: "¿Una caminata de diez minutos? Perfecto.", ok: false,
              fix: "Cuando el número funciona como adjetivo, el sustantivo va en singular y con guion: «a ten-minute walk»." }
          ],
          clave: ["ten-minute", "walk", "fine"],
          tip: "«About» antes de una cantidad significa «aproximadamente»: about ten minutes." },
        { bot: "Are you visiting from another country?", es: "¿Estás de visita desde otro país?",
          opciones: [
            { t: "Yes, I'm from Colombia. I'm a teacher.", es: "Sí, soy de Colombia. Soy docente.", ok: true },
            { t: "Yes, I'm a teacher from Cali, Colombia. I'm here on a teacher exchange.", es: "Sí, soy docente de Cali, Colombia. Estoy aquí en un intercambio docente.", ok: true },
            { t: "Yes, I am teacher from Colombia.", es: "Sí, soy docente de Colombia.", ok: false,
              fix: "Antes de una profesión en singular va «a/an»: «I'm a teacher», «She's an engineer»." }
          ],
          clave: ["I'm a teacher", "from"],
          tip: "Las profesiones llevan artículo en inglés: «I'm a teacher», «He's a nurse». En español no se usa." },
        { bot: "How nice! Do you need anything else?", es: "¡Qué bien! ¿Necesitas algo más?",
          opciones: [
            { t: "No, thank you. You're very kind.", es: "No, gracias. Es usted muy amable.", ok: true },
            { t: "No, that's all. Thank you so much for your help!", es: "No, eso es todo. ¡Muchas gracias por su ayuda!", ok: true },
            { t: "No, thank you. You are very kindly.", es: "No, gracias. Es usted muy amable.", ok: false,
              fix: "Después de «to be» va un adjetivo: «You're very kind». «Kindly» es un adverbio." }
          ],
          clave: ["thank you", "kind", "help"],
          tip: "Para agradecer ayuda: «Thanks for your help» o «I really appreciate it»." }
      ],
      cierre: { bot: "You're welcome! Enjoy the library, and have a great day!", es: "¡Con gusto! Disfruta la biblioteca y que tengas un excelente día." },
      vocab: [
        { t: "How do I get to…?", es: "¿cómo llego a…?" },
        { t: "go straight", es: "seguir derecho" },
        { t: "turn left / turn right", es: "girar a la izquierda / a la derecha" },
        { t: "block", es: "cuadra" },
        { t: "next to", es: "al lado de" },
        { t: "You can't miss it", es: "no tiene pérdida" },
        { t: "a ten-minute walk", es: "diez minutos a pie" }
      ]
    },

    /* ───────────── 12 · A1 · Celebrar logros con estudiantes ───────────── */
    {
      id: "en-12", titulo: "Celebramos los logros del grupo", nivel: "A1",
      tema: "Aula: celebrar logros con estudiantes",
      contexto: "Es el último día del período en tu clase de inglés de tercer grado. Celebras con el grupo lo que aprendieron y destacas su esfuerzo.",
      rol: "Mia, estudiante de tercer grado, alegre y muy participativa",
      turnos: [
        { bot: "Teacher, why is the board so colorful today?", es: "Profe, ¿por qué el tablero está tan colorido hoy?",
          opciones: [
            { t: "Because today we celebrate!", es: "¡Porque hoy celebramos!", ok: true },
            { t: "Because today we're celebrating everything you learned this term!", es: "¡Porque hoy celebramos todo lo que aprendieron este período!", ok: true },
            { t: "Because today we celebrate all what you learned.", es: "Porque hoy celebramos todo lo que aprendieron.", ok: false,
              fix: "«Todo lo que» se dice «everything (that)» o «all (that)», nunca «all what»." }
          ],
          clave: ["celebrate", "learned", "everything"],
          tip: "«Term» = período académico. En EE. UU. también se usa «quarter» o «semester», según el calendario." },
        { bot: "Really? What did we learn?", es: "¿De verdad? ¿Qué aprendimos?",
          opciones: [
            { t: "You learned the days of the week and many new words.", es: "Aprendieron los días de la semana y muchas palabras nuevas.", ok: true },
            { t: "You learned to read short stories and to ask questions in English. That's a lot!", es: "Aprendieron a leer cuentos cortos y a hacer preguntas en inglés. ¡Eso es mucho!", ok: true },
            { t: "You learned to read stories and to make questions in English.", es: "Aprendieron a leer cuentos y a hacer preguntas en inglés.", ok: false,
              fix: "Las preguntas se «ask», no se «make»: «ask questions». Es una colocación fija." }
          ],
          clave: ["learned", "read", "ask questions"],
          tip: "Colocaciones clave: «ask a question», «make a mistake», «do homework». Apréndelas en bloque." },
        { bot: "But I made a lot of mistakes when I read...", es: "Pero yo cometí muchos errores cuando leía...",
          opciones: [
            { t: "That's okay. Mistakes help us learn.", es: "No pasa nada. Los errores nos ayudan a aprender.", ok: true },
            { t: "That's okay, Mia! Mistakes help us learn, and you read much better now.", es: "¡No pasa nada, Mia! Los errores nos ayudan a aprender y ahora lees mucho mejor.", ok: true },
            { t: "That's okay. You read more better now.", es: "No pasa nada. Ahora lees mucho mejor.", ok: false,
              fix: "«Better» ya es comparativo; no lleva «more». Para intensificar se usa «much»: «much better»." }
          ],
          clave: ["mistakes", "learn", "better"],
          tip: "El error nos enseña: nómbralo como parte del aprendizaje, nunca como un fracaso." },
        { bot: "Can we see our stars on the chart?", es: "¿Podemos ver nuestras estrellas en la cartelera?",
          opciones: [
            { t: "Yes! Look, everyone has stars.", es: "¡Sí! Miren, todos tienen estrellas.", ok: true },
            { t: "Of course! Look at the chart: everyone in the class earned stars this term.", es: "¡Claro! Miren la cartelera: todos en la clase ganaron estrellas este período.", ok: true },
            { t: "Of course! Look, everybody have stars.", es: "¡Claro! Miren, todos tienen estrellas.", ok: false,
              fix: "«Everybody/everyone» lleva el verbo en singular: «everyone has», no «everybody have»." }
          ],
          clave: ["everyone", "has", "stars"],
          tip: "Everyone, everybody, someone, nobody: siempre con verbo en tercera persona del singular." },
        { bot: "What is your favorite thing about our class?", es: "¿Qué es lo que más le gusta de nuestra clase?",
          opciones: [
            { t: "I love how you help each other.", es: "Me encanta cómo se ayudan entre ustedes.", ok: true },
            { t: "My favorite thing is how you help each other and never give up.", es: "Lo que más me gusta es cómo se ayudan entre ustedes y nunca se rinden.", ok: true },
            { t: "My favorite thing is how you help to each other.", es: "Lo que más me gusta es cómo se ayudan entre ustedes.", ok: false,
              fix: "«Help» no lleva «to» antes de la persona: «help each other», «help my students»." }
          ],
          clave: ["help each other", "favorite", "give up"],
          tip: "Elogia el esfuerzo y la actitud, no solo el resultado: «You worked so hard!»." },
        { bot: "Can I take my certificate home to show my mom?", es: "¿Puedo llevar mi diploma a la casa para mostrárselo a mi mamá?",
          opciones: [
            { t: "Yes, of course! Show it to your family.", es: "¡Sí, claro! Muéstraselo a tu familia.", ok: true },
            { t: "Of course! Your family will be very proud of you.", es: "¡Claro! Tu familia va a estar muy orgullosa de ti.", ok: true },
            { t: "Of course! Your family will be very proud for you.", es: "¡Claro! Tu familia va a estar muy orgullosa de ti.", ok: false,
              fix: "«Orgulloso de» se dice «proud of»: «proud of you». «Proud for» no es la forma habitual." }
          ],
          clave: ["proud of", "family", "show"],
          tip: "«Take it home» = llevarlo a la casa. Con «home» no se usa «to»." }
      ],
      cierre: { bot: "Yay! Thank you, teacher! This is the best day ever!", es: "¡Sí! ¡Gracias, profe! ¡Es el mejor día de todos!" },
      vocab: [
        { t: "term", es: "período académico" },
        { t: "celebrate", es: "celebrar" },
        { t: "make a mistake", es: "cometer un error" },
        { t: "earn stars", es: "ganar estrellas" },
        { t: "help each other", es: "ayudarse entre sí" },
        { t: "give up", es: "rendirse" },
        { t: "proud of", es: "orgulloso de" }
      ]
    },

    /* ───────────── 13 · A2 · Cita médica ───────────── */
    {
      id: "en-13", titulo: "Consulta con el médico", nivel: "A2",
      tema: "Vida cotidiana: cita médica",
      contexto: "Durante tu intercambio te sientes enfermo o enferma y vas a una clínica. Explicas tus síntomas y entiendes las indicaciones del médico.",
      rol: "Dr. Alan Brooks, médico general, tranquilo y amable",
      turnos: [
        { bot: "Good afternoon. I'm Dr. Brooks. What brings you in today?", es: "Buenas tardes. Soy el doctor Brooks. ¿Qué lo trae por aquí hoy?",
          opciones: [
            { t: "I feel sick. I have a sore throat.", es: "Me siento enfermo. Me duele la garganta.", ok: true },
            { t: "Good afternoon, doctor. I have a sore throat and a headache.", es: "Buenas tardes, doctor. Tengo dolor de garganta y dolor de cabeza.", ok: true },
            { t: "Good afternoon. I have pain of throat.", es: "Buenas tardes. Tengo dolor de garganta.", ok: false,
              fix: "«Dolor de garganta» se dice «a sore throat». Otros dolores: headache, stomachache, backache." }
          ],
          clave: ["sore throat", "headache", "feel sick"],
          tip: "Dolores comunes: headache (cabeza), stomachache (estómago), backache (espalda), sore throat (garganta)." },
        { bot: "I'm sorry to hear that. How long have you felt this way?", es: "Lamento oír eso. ¿Hace cuánto se siente así?",
          opciones: [
            { t: "Since yesterday.", es: "Desde ayer.", ok: true },
            { t: "Since Monday morning. It's getting worse.", es: "Desde el lunes por la mañana. Está empeorando.", ok: true },
            { t: "Since two days.", es: "Desde hace dos días.", ok: false,
              fix: "«Since» va con un punto de inicio (since Monday). Para una duración se usa «for»: «for two days»." }
          ],
          clave: ["since", "for", "days"],
          tip: "for two days (duración) · since Monday (punto de inicio). «Getting worse» = empeorando." },
        { bot: "Do you have a fever?", es: "¿Tiene fiebre?",
          opciones: [
            { t: "Yes, I think so. I feel very hot.", es: "Sí, creo que sí. Me siento muy caliente.", ok: true },
            { t: "Yes, I took my temperature this morning, and I had a fever.", es: "Sí, me tomé la temperatura esta mañana y tenía fiebre.", ok: true },
            { t: "Yes, I have fever.", es: "Sí, tengo fiebre.", ok: false,
              fix: "En inglés de EE. UU., «fever» lleva artículo: «I have a fever»." }
          ],
          clave: ["fever", "temperature"],
          tip: "En EE. UU. la temperatura se mide en grados Fahrenheit. Si no entiendes, pregunta: «In Celsius, please?»." },
        { bot: "Are you allergic to any medications?", es: "¿Es alérgico a algún medicamento?",
          opciones: [
            { t: "No, I'm not.", es: "No, no lo soy.", ok: true },
            { t: "Yes, I'm allergic to penicillin.", es: "Sí, soy alérgico a la penicilina.", ok: true },
            { t: "Yes, I'm allergic of penicillin.", es: "Sí, soy alérgico a la penicilina.", ok: false,
              fix: "«Alérgico a» se dice «allergic to»: «I'm allergic to penicillin»." }
          ],
          clave: ["allergic to", "not"],
          tip: "Informa siempre tus alergias. «I'm allergic to…» es una frase que conviene memorizar." },
        { bot: "Your throat is very red. It looks like an infection. I'm going to prescribe some medicine.", es: "Tiene la garganta muy roja. Parece una infección. Le voy a formular un medicamento.",
          opciones: [
            { t: "Okay. How often do I take it?", es: "Bien. ¿Cada cuánto lo tomo?", ok: true },
            { t: "Thank you. How often should I take it, and for how long?", es: "Gracias. ¿Cada cuánto debo tomarlo y por cuánto tiempo?", ok: true },
            { t: "Thank you. How many times I must take it?", es: "Gracias. ¿Cuántas veces debo tomarlo?", ok: false,
              fix: "En las preguntas se invierte el auxiliar: «How often should I take it?» o «How many times a day do I take it?»." }
          ],
          clave: ["how often", "take it", "how long"],
          tip: "«Prescribe» = formular o recetar. «Prescription» = la fórmula médica." },
        { bot: "Twice a day, after meals, for seven days. Please finish all of it.", es: "Dos veces al día, después de las comidas, durante siete días. Por favor, termínelo todo.",
          opciones: [
            { t: "Okay, twice a day for seven days.", es: "Bien, dos veces al día durante siete días.", ok: true },
            { t: "Got it: twice a day after meals, and I'll finish the whole treatment.", es: "Entendido: dos veces al día después de las comidas, y terminaré todo el tratamiento.", ok: true },
            { t: "Okay, two times for day, after the meals.", es: "Bien, dos veces al día, después de las comidas.", ok: false,
              fix: "«Al día» se dice «a day»: «twice a day» o «two times a day». No se usa «for»." }
          ],
          clave: ["twice a day", "after meals", "finish"],
          tip: "once (una vez), twice (dos veces), three times (tres veces) + a day / a week." },
        { bot: "Do you need a note for work?", es: "¿Necesita una constancia médica para el trabajo?",
          opciones: [
            { t: "Yes, please. I'm a teacher.", es: "Sí, por favor. Soy docente.", ok: true },
            { t: "Yes, please. I'm going to miss school tomorrow, so I need one for the principal.", es: "Sí, por favor. Mañana voy a faltar al colegio, así que necesito una para la rectora.", ok: true },
            { t: "Yes, please. I need an incapacity for the school.", es: "Sí, por favor. Necesito una incapacidad para el colegio.", ok: false,
              fix: "La incapacidad médica se llama «a doctor's note» o «a sick note». «Incapacity» significa falta de capacidad." }
          ],
          clave: ["note", "please", "school"],
          tip: "«Doctor's note» = constancia o incapacidad médica. Falso amigo: «incapacity» no tiene ese sentido." }
      ],
      cierre: { bot: "Here you go. Drink plenty of water and get some rest. Feel better soon!", es: "Aquí tiene. Tome mucha agua y descanse. ¡Que se mejore pronto!" },
      vocab: [
        { t: "sore throat", es: "dolor de garganta" },
        { t: "headache", es: "dolor de cabeza" },
        { t: "fever", es: "fiebre" },
        { t: "allergic to", es: "alérgico a" },
        { t: "prescribe", es: "formular, recetar" },
        { t: "twice a day", es: "dos veces al día" },
        { t: "doctor's note", es: "constancia o incapacidad médica" },
        { t: "Feel better soon!", es: "¡que te mejores pronto!" }
      ]
    },

    /* ───────────── 14 · A2 · Banco o casa de cambio ───────────── */
    {
      id: "en-14", titulo: "En la casa de cambio", nivel: "A2",
      tema: "Vida cotidiana: banco o casa de cambio",
      contexto: "Llegas al aeropuerto para tu intercambio y necesitas efectivo. En una casa de cambio cambias pesos colombianos por dólares y preguntas por la tasa y la comisión.",
      rol: "Ms. Rachel Kim, cajera de la casa de cambio, eficiente y cordial",
      turnos: [
        { bot: "Hi, how can I help you today?", es: "Hola, ¿en qué le puedo ayudar hoy?",
          opciones: [
            { t: "Hi. I want to change money, please.", es: "Hola. Quiero cambiar dinero, por favor.", ok: true },
            { t: "Hi. I'd like to exchange some Colombian pesos for dollars, please.", es: "Hola. Quisiera cambiar unos pesos colombianos por dólares, por favor.", ok: true },
            { t: "Hi. I want to change pesos in dollars.", es: "Hola. Quiero cambiar pesos en dólares.", ok: false,
              fix: "Una moneda se cambia «for» otra: «exchange pesos for dollars». No se usa «in»." }
          ],
          clave: ["exchange", "for dollars", "I'd like"],
          tip: "«I'd like to…» es más cortés que «I want to…» al pedir un servicio." },
        { bot: "Sure. Can I see your passport, please?", es: "Claro. ¿Me permite su pasaporte, por favor?",
          opciones: [
            { t: "Yes, here you are.", es: "Sí, aquí tiene.", ok: true },
            { t: "Of course. Here's my passport.", es: "Claro. Aquí está mi pasaporte.", ok: true },
            { t: "Yes, here is it.", es: "Sí, aquí está.", ok: false,
              fix: "En afirmaciones el orden es «Here it is» (sujeto antes del verbo). «Here is it» es incorrecto." }
          ],
          clave: ["here you are", "here it is", "passport"],
          tip: "Al entregar algo: «Here you are» o «Here you go». Ambas son naturales." },
        { bot: "Thank you. How much would you like to exchange?", es: "Gracias. ¿Cuánto desea cambiar?",
          opciones: [
            { t: "Five hundred thousand pesos, please.", es: "Quinientos mil pesos, por favor.", ok: true },
            { t: "Five hundred thousand pesos, please. What's the exchange rate today?", es: "Quinientos mil pesos, por favor. ¿Cuál es la tasa de cambio hoy?", ok: true },
            { t: "Five hundred thousand pesos. How much is the change today?", es: "Quinientos mil pesos. ¿A cuánto está el cambio hoy?", ok: false,
              fix: "La tasa de cambio es «exchange rate». «Change» significa el vuelto o las monedas sueltas." }
          ],
          clave: ["exchange rate", "pesos", "today"],
          tip: "«Change» = vuelto o monedas sueltas. «Exchange rate» = tasa de cambio." },
        { bot: "The rate is on the screen behind me. There's also a small service fee.", es: "La tasa está en la pantalla detrás de mí. También hay una pequeña comisión por el servicio.",
          opciones: [
            { t: "How much is the fee?", es: "¿Cuánto es la comisión?", ok: true },
            { t: "I see. How much is the fee, exactly?", es: "Entiendo. ¿Cuánto es la comisión exactamente?", ok: true },
            { t: "I see. How much costs the fee?", es: "Entiendo. ¿Cuánto cuesta la comisión?", ok: false,
              fix: "Con «how much» se usa «is» o el auxiliar «does»: «How much is the fee?» o «How much does it cost?»." }
          ],
          clave: ["how much", "fee"],
          tip: "«Fee» = tarifa o comisión por un servicio: service fee, ATM fee, late fee." },
        { bot: "It's on your receipt. Would you like large or small bills?", es: "Aparece en su recibo. ¿Quiere billetes grandes o pequeños?",
          opciones: [
            { t: "Small bills, please.", es: "Billetes pequeños, por favor.", ok: true },
            { t: "Some small bills, please. They're easier to use for taxis and snacks.", es: "Algunos billetes pequeños, por favor. Son más fáciles de usar para taxis y refrigerios.", ok: true },
            { t: "Small tickets, please.", es: "Billetes pequeños, por favor.", ok: false,
              fix: "El billete de dinero en EE. UU. es «bill». «Ticket» es boleta o tiquete." }
          ],
          clave: ["small bills", "please"],
          tip: "En EE. UU.: «bill» (billete) y «coin» (moneda). En el Reino Unido se dice «note»." },
        { bot: "Here's your money and your receipt. Please count it.", es: "Aquí tiene su dinero y su recibo. Por favor, cuéntelo.",
          opciones: [
            { t: "Thank you. It's correct.", es: "Gracias. Está correcto.", ok: true },
            { t: "Thanks. Let me count it... Yes, that's right.", es: "Gracias. Déjeme contarlo... Sí, está bien.", ok: true },
            { t: "Thanks. Let me to count it.", es: "Gracias. Déjeme contarlo.", ok: false,
              fix: "Después de «let me» va el verbo sin «to»: «Let me count it»." }
          ],
          clave: ["count", "correct", "let me"],
          tip: "Cuenta siempre el dinero frente al cajero. «That's right» confirma que todo está bien." }
      ],
      cierre: { bot: "You're all set. Have a safe trip!", es: "Todo listo. ¡Que tenga buen viaje!" },
      vocab: [
        { t: "exchange … for …", es: "cambiar … por …" },
        { t: "exchange rate", es: "tasa de cambio" },
        { t: "service fee", es: "comisión por el servicio" },
        { t: "receipt", es: "recibo" },
        { t: "bills", es: "billetes" },
        { t: "change", es: "vuelto, monedas sueltas" },
        { t: "Here you are", es: "aquí tiene" },
        { t: "You're all set", es: "todo listo" }
      ]
    },

    /* ───────────── 15 · A2 · Simulacro de evacuación ───────────── */
    {
      id: "en-15", titulo: "Simulacro de evacuación", nivel: "A2",
      tema: "Seguridad escolar: simulacro de evacuación",
      contexto: "En la escuela aliada suena la alarma de un simulacro. Apoyas al docente titular para sacar al grupo de quinto grado con calma y orden.",
      rol: "Mr. James Carter, docente titular y responsable del simulacro",
      turnos: [
        { bot: "That's the fire alarm. Don't worry, it's a drill. Can you help me with the line?", es: "Es la alarma de incendio. Tranquilo, es un simulacro. ¿Me ayudas con la fila?",
          opciones: [
            { t: "Yes, of course. What do I do?", es: "Sí, claro. ¿Qué hago?", ok: true },
            { t: "Sure. Should I stand at the front or at the back of the line?", es: "Claro. ¿Me hago adelante o al final de la fila?", ok: true },
            { t: "Yes. Where I go?", es: "Sí. ¿Para dónde voy?", ok: false,
              fix: "Las preguntas necesitan auxiliar: «Where do I go?» o «Where should I go?»." }
          ],
          clave: ["front", "back", "line", "should"],
          tip: "«Drill» = simulacro: fire drill, earthquake drill. «Line up» = hacer fila." },
        { bot: "Please stay at the back and make sure nobody is left behind.", es: "Por favor, quédate al final y asegúrate de que nadie se quede atrás.",
          opciones: [
            { t: "Okay. I'll check the room.", es: "Bien. Reviso el salón.", ok: true },
            { t: "Got it. I'll check the classroom and the bathroom before we leave.", es: "Entendido. Reviso el salón y el baño antes de salir.", ok: true },
            { t: "Okay. I'll check that nobody don't stay.", es: "Bien. Me aseguro de que nadie se quede.", ok: false,
              fix: "En inglés no hay doble negación: «I'll check that nobody stays behind». «Nobody» ya es negativo." }
          ],
          clave: ["check", "nobody", "leave"],
          tip: "«Left behind» = olvidado, que se quedó atrás. Es una expresión clave en evacuaciones." },
        { bot: "Students, walk, don't run! Can you remind them about talking?", es: "¡Estudiantes, caminen, no corran! ¿Les recuerdas lo de hablar?",
          opciones: [
            { t: "Everyone, please don't talk.", es: "Todos, por favor, no hablen.", ok: true },
            { t: "Everyone, no talking, please. We need to hear the instructions.", es: "Todos, sin hablar, por favor. Necesitamos oír las instrucciones.", ok: true },
            { t: "Everyone, silence, please. We need to listen the instructions.", es: "Todos, silencio, por favor. Necesitamos escuchar las instrucciones.", ok: false,
              fix: "«Listen» exige «to» antes del objeto: «listen to the instructions». Aquí también sirve «hear the instructions»." }
          ],
          clave: ["no talking", "hear", "listen to"],
          tip: "En seguridad, frases cortas y claras: «Walk, don't run», «No talking», «Stay together»." },
        { bot: "We're at the meeting point. Can you count the students?", es: "Llegamos al punto de encuentro. ¿Puedes contar a los estudiantes?",
          opciones: [
            { t: "Yes. Everyone is here.", es: "Sí. Están todos.", ok: true },
            { t: "Sure. I counted twenty-five students. That's everyone on the list.", es: "Claro. Conté veinticinco estudiantes. Están todos los de la lista.", ok: true },
            { t: "Sure. Are twenty-five. Are all.", es: "Claro. Son veinticinco. Están todos.", ok: false,
              fix: "En inglés el sujeto es obligatorio: «There are twenty-five. Everyone is here». No se puede omitir como en español." }
          ],
          clave: ["everyone is here", "counted", "list"],
          tip: "Nunca omitas el sujeto: «It's here», «They're here», «There are…»." },
        { bot: "Thanks. One student, Leo, is crying. He's scared of the alarm.", es: "Gracias. Un estudiante, Leo, está llorando. Le da miedo la alarma.",
          opciones: [
            { t: "I'll talk to him.", es: "Yo hablo con él.", ok: true },
            { t: "Let me stay with him. Leo, you're safe. It's only practice.", es: "Déjame quedarme con él. Leo, estás a salvo. Es solo una práctica.", ok: true },
            { t: "Leo, don't be scare. You are safe.", es: "Leo, no te asustes. Estás a salvo.", ok: false,
              fix: "El adjetivo es «scared» (asustado): «Don't be scared». «Scare» es el verbo asustar." }
          ],
          clave: ["safe", "scared", "practice"],
          tip: "Adjetivos en -ed: cómo se siente alguien (scared, bored). En -ing: lo que lo causa (scary, boring)." },
        { bot: "The drill is over. How did it go, in your opinion?", es: "Terminó el simulacro. En tu opinión, ¿cómo salió?",
          opciones: [
            { t: "It went well. The students were calm.", es: "Salió bien. Los estudiantes estuvieron tranquilos.", ok: true },
            { t: "It went well. The students were calm, but we can practice the route to the meeting point again.", es: "Salió bien. Los estudiantes estuvieron tranquilos, pero podemos practicar otra vez la ruta al punto de encuentro.", ok: true },
            { t: "It went well. The students were very quiets.", es: "Salió bien. Los estudiantes estuvieron muy callados.", ok: false,
              fix: "Los adjetivos no tienen plural en inglés: «very quiet», aunque el sustantivo sea plural." }
          ],
          clave: ["went well", "calm", "practice"],
          tip: "«How did it go?» se responde con «It went well». «Went» es el pasado de «go»." }
      ],
      cierre: { bot: "Agreed. Thanks for your help. Let's go back inside.", es: "De acuerdo. Gracias por tu ayuda. Volvamos adentro." },
      vocab: [
        { t: "fire alarm", es: "alarma de incendio" },
        { t: "drill", es: "simulacro" },
        { t: "line up", es: "hacer fila" },
        { t: "left behind", es: "que se quedó atrás" },
        { t: "meeting point", es: "punto de encuentro" },
        { t: "Walk, don't run", es: "caminen, no corran" },
        { t: "scared", es: "asustado" },
        { t: "It went well", es: "salió bien" }
      ]
    },

    /* ───────────── 16 · A2 · Restaurante con restricciones alimentarias ───────────── */
    {
      id: "en-16", titulo: "Almuerzo con restricciones alimentarias", nivel: "A2",
      tema: "Vida cotidiana: restaurante con restricciones alimentarias",
      contexto: "Almuerzas con colegas de la escuela aliada. No comes carne y tienes intolerancia a la lactosa, así que debes explicarlo al mesero y pedir cambios.",
      rol: "Tyler, mesero del restaurante, atento y rápido",
      turnos: [
        { bot: "Hi, welcome! Are you ready to order?", es: "¡Hola, bienvenidos! ¿Ya están listos para pedir?",
          opciones: [
            { t: "I'm ready, thanks. But I have a question about the menu.", es: "Ya estoy listo, gracias. Pero tengo una pregunta sobre el menú.", ok: true },
            { t: "Yes, I'm ready. But first, can I ask you something about the menu?", es: "Sí, ya estoy listo. Pero primero, ¿le puedo preguntar algo sobre el menú?", ok: true },
            { t: "Yes, I'm ready. But first I have a doubt about the menu.", es: "Sí, ya estoy listo. Pero primero tengo una duda sobre el menú.", ok: false,
              fix: "«Tengo una duda» (pregunta) se dice «I have a question». «Doubt» expresa desconfianza o incertidumbre." }
          ],
          clave: ["question", "menu", "ready"],
          tip: "Falso amigo frecuente: «tengo una duda» = «I have a question»." },
        { bot: "Sure, go ahead.", es: "Claro, dígame.",
          opciones: [
            { t: "I don't eat meat. Do you have vegetarian dishes?", es: "No como carne. ¿Tienen platos vegetarianos?", ok: true },
            { t: "I'm vegetarian. Which dishes don't have meat or chicken?", es: "Soy vegetariano. ¿Qué platos no tienen carne ni pollo?", ok: true },
            { t: "I don't eat meat. Do you have dishes vegetarians?", es: "No como carne. ¿Tienen platos vegetarianos?", ok: false,
              fix: "El adjetivo va antes del sustantivo y no lleva plural: «vegetarian dishes»." }
          ],
          clave: ["vegetarian", "dishes", "meat"],
          tip: "«Vegetarian» no come carne; «vegan» no consume ningún producto de origen animal." },
        { bot: "Yes, the vegetable pasta is very popular. It comes with a cream sauce.", es: "Sí, la pasta con verduras es muy pedida. Viene con salsa de crema.",
          opciones: [
            { t: "Oh, I can't have dairy. Is there another sauce?", es: "Ay, no puedo comer lácteos. ¿Hay otra salsa?", ok: true },
            { t: "Sorry, I'm lactose intolerant. Can I get it with tomato sauce instead?", es: "Lo siento, tengo intolerancia a la lactosa. ¿Me la pueden dar con salsa de tomate en lugar de esa?", ok: true },
            { t: "Sorry, I'm intolerant to the lactose.", es: "Lo siento, soy intolerante a la lactosa.", ok: false,
              fix: "Se dice «I'm lactose intolerant», sin «the» y con «lactose» antes del adjetivo." }
          ],
          clave: ["dairy", "lactose intolerant", "instead"],
          tip: "«Instead» = en lugar de eso. «Can I get it with… instead?» sirve para pedir cambios en un plato." },
        { bot: "No problem. We can make it with tomato sauce. Anything to drink?", es: "No hay problema. Se la preparamos con salsa de tomate. ¿Algo de tomar?",
          opciones: [
            { t: "Just water, please.", es: "Solo agua, por favor.", ok: true },
            { t: "A glass of water, please. And could I have some lemon with it?", es: "Un vaso de agua, por favor. ¿Y me podría traer un poco de limón?", ok: true },
            { t: "A water natural, please.", es: "Un agua natural, por favor.", ok: false,
              fix: "«Agua natural» no se traduce palabra por palabra. Basta con «water, please» o «a glass of water»." }
          ],
          clave: ["water", "glass", "please"],
          tip: "«Tap water» = agua de la llave. «Sparkling water» = agua con gas." },
        { bot: "Would you like to start with a salad or a soup?", es: "¿Quiere empezar con una ensalada o una sopa?",
          opciones: [
            { t: "A salad, please.", es: "Una ensalada, por favor.", ok: true },
            { t: "The salad sounds good. Does the dressing have any cheese?", es: "La ensalada suena bien. ¿El aderezo tiene queso?", ok: true },
            { t: "A salad, please. Without onion, I don't like.", es: "Una ensalada, por favor. Sin cebolla, no me gusta.", ok: false,
              fix: "«Like» necesita objeto: «I don't like it» o «I don't like onions». No se puede omitir." }
          ],
          clave: ["salad", "dressing", "without"],
          tip: "«Dressing» = aderezo. Si tienes restricciones, pregunta: «What's in the dressing?»." },
        { bot: "Here's your pasta with tomato sauce. Is everything okay?", es: "Aquí está su pasta con salsa de tomate. ¿Todo bien?",
          opciones: [
            { t: "Yes, it's delicious. Thank you.", es: "Sí, está deliciosa. Gracias.", ok: true },
            { t: "Yes, it's really good. Thank you for changing the sauce.", es: "Sí, está muy rica. Gracias por cambiar la salsa.", ok: true },
            { t: "Yes, is delicious. Thank you for changing the sauce.", es: "Sí, está deliciosa. Gracias por cambiar la salsa.", ok: false,
              fix: "En inglés el sujeto es obligatorio, aunque en español se omita: «It's delicious», no «is delicious»." }
          ],
          clave: ["delicious", "really good", "thank you"],
          tip: "Con adjetivos extremos (delicious, amazing, huge) suena más natural «really» o «absolutely» que «very»." },
        { bot: "Can I get you anything else? Maybe some dessert?", es: "¿Le traigo algo más? ¿Tal vez un postre?",
          opciones: [
            { t: "No, thanks. Just the check, please.", es: "No, gracias. Solo la cuenta, por favor.", ok: true },
            { t: "Not today, thanks. Could we have the check, please?", es: "Hoy no, gracias. ¿Nos trae la cuenta, por favor?", ok: true },
            { t: "No, thanks. The account, please.", es: "No, gracias. La cuenta, por favor.", ok: false,
              fix: "La cuenta del restaurante es «the check» en EE. UU. («the bill» en el Reino Unido). «Account» es una cuenta bancaria." }
          ],
          clave: ["check", "please"],
          tip: "En EE. UU. se acostumbra dejar propina (tip). Pregunta a tus colegas cuánto es lo habitual allí." }
      ],
      cierre: { bot: "Sure, I'll be right back with the check. Have a great afternoon!", es: "Claro, ya le traigo la cuenta. ¡Que tenga una excelente tarde!" },
      vocab: [
        { t: "Are you ready to order?", es: "¿ya están listos para pedir?" },
        { t: "I have a question", es: "tengo una duda (pregunta)" },
        { t: "vegetarian dishes", es: "platos vegetarianos" },
        { t: "dairy", es: "lácteos" },
        { t: "lactose intolerant", es: "intolerante a la lactosa" },
        { t: "instead", es: "en lugar de eso" },
        { t: "dressing", es: "aderezo" },
        { t: "the check", es: "la cuenta (restaurante)" }
      ]
    },

    /* ───────────── 17 · B1 · Explicar una rúbrica ───────────── */
    {
      id: "en-17", titulo: "Explico la rúbrica del proyecto", nivel: "B1",
      tema: "Evaluación: explicar una rúbrica",
      contexto: "En tu clase de inglés de noveno grado presentas la rúbrica de la exposición oral final. Un estudiante tiene dudas y está nervioso por la nota.",
      rol: "Daniel, estudiante de noveno grado, responsable pero ansioso",
      turnos: [
        { bot: "Teacher, what is this table? Is it a test?", es: "Profe, ¿qué es esta tabla? ¿Es un examen?",
          opciones: [
            { t: "No, it's a rubric. It shows how I'll grade your project.", es: "No, es una rúbrica. Muestra cómo voy a calificar su proyecto.", ok: true },
            { t: "No, it's not a test. It's a rubric: it describes what a strong project looks like and how it will be assessed.", es: "No, no es un examen. Es una rúbrica: describe cómo es un buen proyecto y cómo se va a evaluar.", ok: true },
            { t: "No, it's a rubric. It shows how I'm going to qualify your project.", es: "No, es una rúbrica. Muestra cómo voy a calificar su proyecto.", ok: false,
              fix: "«Calificar» se dice «grade» o «assess». «Qualify» significa clasificar o cumplir los requisitos para algo." }
          ],
          clave: ["rubric", "grade", "assess"],
          tip: "Falso amigo: «calificar» = grade; «qualify» = clasificar o tener los requisitos." },
        { bot: "Okay... but what do the columns mean?", es: "Bueno... ¿pero qué significan las columnas?",
          opciones: [
            { t: "Each column is a level: beginning, developing, proficient, and advanced.", es: "Cada columna es un nivel: inicial, en desarrollo, competente y avanzado.", ok: true },
            { t: "Each column shows a performance level, from beginning to advanced, and each row is one criterion.", es: "Cada columna muestra un nivel de desempeño, de inicial a avanzado, y cada fila es un criterio.", ok: true },
            { t: "Each column is a level, and each row is a criteria.", es: "Cada columna es un nivel y cada fila es un criterio.", ok: false,
              fix: "«Criteria» es plural; el singular es «criterion»: «each row is one criterion»." }
          ],
          clave: ["level", "row", "criterion"],
          tip: "Plurales irregulares de origen griego: criterion → criteria, phenomenon → phenomena." },
        { bot: "So what are the criteria?", es: "¿Entonces cuáles son los criterios?",
          opciones: [
            { t: "Content, organization, pronunciation, and vocabulary.", es: "Contenido, organización, pronunciación y vocabulario.", ok: true },
            { t: "There are four: content, organization, pronunciation, and how well you use the vocabulary we studied.", es: "Son cuatro: contenido, organización, pronunciación y qué tan bien usas el vocabulario que estudiamos.", ok: true },
            { t: "They are four: content, organization, pronunciation, and vocabulary.", es: "Son cuatro: contenido, organización, pronunciación y vocabulario.", ok: false,
              fix: "Para presentar una cantidad se usa «There are four». «They are four» es un calco de «son cuatro» y suena poco natural." }
          ],
          clave: ["there are", "content", "pronunciation"],
          tip: "«There is / there are» presenta lo que existe o la cantidad: There are four criteria." },
        { bot: "I'm nervous about pronunciation. Will I fail if I make mistakes?", es: "Me pone nervioso la pronunciación. ¿Voy a perder si cometo errores?",
          opciones: [
            { t: "No. Small mistakes are normal. I'm looking for clear communication.", es: "No. Los errores pequeños son normales. Lo que busco es una comunicación clara.", ok: true },
            { t: "Not at all. The rubric rewards clear communication, not perfection. Mistakes are part of learning.", es: "Para nada. La rúbrica valora la comunicación clara, no la perfección. Los errores son parte del aprendizaje.", ok: true },
            { t: "No. If you will practice, you will do well.", es: "No. Si practicas, te va a ir bien.", ok: false,
              fix: "En la cláusula con «if» se usa presente, no «will»: «If you practice, you'll do well»." }
          ],
          clave: ["mistakes", "clear communication", "not perfection"],
          tip: "La rúbrica evalúa el desempeño, no a la persona. Dilo explícitamente para bajar la ansiedad." },
        { bot: "How can I reach the advanced level in organization?", es: "¿Cómo puedo llegar al nivel avanzado en organización?",
          opciones: [
            { t: "Use a clear introduction, body, and conclusion.", es: "Usa una introducción, un desarrollo y una conclusión claros.", ok: true },
            { t: "Read the descriptor: you need a clear introduction, ideas connected with transition words, and a strong conclusion.", es: "Lee el descriptor: necesitas una introducción clara, ideas conectadas con conectores y una conclusión sólida.", ok: true },
            { t: "Read the descriptor carefully and put attention to the transitions.", es: "Lee el descriptor con cuidado y presta atención a los conectores.", ok: false,
              fix: "«Prestar atención» se dice «pay attention to»: «pay attention to the transitions»." }
          ],
          clave: ["descriptor", "introduction", "transition words", "conclusion"],
          tip: "El descriptor es la descripción de cada nivel. Pide a los estudiantes que lo usen como lista de chequeo." },
        { bot: "Can we use the rubric before we present?", es: "¿Podemos usar la rúbrica antes de presentar?",
          opciones: [
            { t: "Yes! Use it to check your work.", es: "¡Sí! Úsenla para revisar su trabajo.", ok: true },
            { t: "Yes, please do. You'll assess a partner's rehearsal with it, and then you can improve your own presentation.", es: "Sí, por favor. Van a evaluar el ensayo de un compañero con ella y luego pueden mejorar su propia exposición.", ok: true },
            { t: "Yes. You can use it for check your work.", es: "Sí. Pueden usarla para revisar su trabajo.", ok: false,
              fix: "El propósito se expresa con «to» + verbo: «use it to check your work», no «for check»." }
          ],
          clave: ["check", "partner", "improve", "rehearsal"],
          tip: "La coevaluación con la rúbrica ayuda a entender los criterios antes de la nota final." },
        { bot: "Okay, that makes sense. When is the presentation?", es: "Bueno, eso tiene sentido. ¿Cuándo es la exposición?",
          opciones: [
            { t: "Next Friday. You have a week to prepare.", es: "El próximo viernes. Tienes una semana para prepararte.", ok: true },
            { t: "Next Friday, so you have a week to practice. Let me know if you have any questions before then.", es: "El próximo viernes, así que tienes una semana para practicar. Avísame si tienes preguntas antes.", ok: true },
            { t: "The next Friday. You have one week for prepare.", es: "El próximo viernes. Tienes una semana para prepararte.", ok: false,
              fix: "Con «next» no se usa «the»: «next Friday». Y el propósito va con «to»: «a week to prepare»." }
          ],
          clave: ["next Friday", "prepare", "practice"],
          tip: "Con next, last y this no se usa «the»: next Friday, last week, this month." }
      ],
      cierre: { bot: "Thanks, teacher. Now I know what you expect. I feel less nervous!", es: "Gracias, profe. Ahora sé qué espera. ¡Me siento menos nervioso!" },
      vocab: [
        { t: "rubric", es: "rúbrica" },
        { t: "criterion / criteria", es: "criterio / criterios" },
        { t: "performance level", es: "nivel de desempeño" },
        { t: "descriptor", es: "descriptor" },
        { t: "grade / assess", es: "calificar / evaluar" },
        { t: "pay attention to", es: "prestar atención a" },
        { t: "rehearsal", es: "ensayo" },
        { t: "peer assessment", es: "coevaluación" }
      ]
    },

    /* ───────────── 18 · B1 · Permiso para salida pedagógica ───────────── */
    {
      id: "en-18", titulo: "Permiso para la salida pedagógica", nivel: "B1",
      tema: "Familias: permiso para salida pedagógica",
      contexto: "Organizas una salida al museo de ciencias con sexto grado. Llamas a un padre que todavía no ha firmado el permiso porque tiene inquietudes.",
      rol: "Mr. Robert Hayes, padre de Ava (sexto grado), cuidadoso y algo preocupado",
      turnos: [
        { bot: "Hello? This is Robert Hayes.", es: "¿Aló? Habla Robert Hayes.",
          opciones: [
            { t: "Hello, Mr. Hayes. This is Ava's science teacher. Do you have a minute?", es: "Hola, señor Hayes. Habla la docente de ciencias de Ava. ¿Tiene un minuto?", ok: true },
            { t: "Good afternoon, Mr. Hayes. This is Ava's science teacher. I'm calling about the field trip. Is this a good time?", es: "Buenas tardes, señor Hayes. Habla la docente de ciencias de Ava. Lo llamo por la salida pedagógica. ¿Es buen momento?", ok: true },
            { t: "Good afternoon, Mr. Hayes. I am the teacher of science of Ava.", es: "Buenas tardes, señor Hayes. Soy la docente de ciencias de Ava.", ok: false,
              fix: "Usa el posesivo y el sustantivo como adjetivo: «Ava's science teacher». Por teléfono se dice «This is…»." }
          ],
          clave: ["this is", "field trip", "good time"],
          tip: "Por teléfono uno se presenta con «This is…», no con «I am…»." },
        { bot: "Oh, yes. I got the form, but I haven't signed it yet. I have a few concerns.", es: "Ah, sí. Recibí el formato, pero aún no lo he firmado. Tengo algunas inquietudes.",
          opciones: [
            { t: "Of course. What would you like to know?", es: "Claro. ¿Qué le gustaría saber?", ok: true },
            { t: "I understand. I'm happy to answer any questions. What are you worried about?", es: "Entiendo. Con gusto respondo sus preguntas. ¿Qué le preocupa?", ok: true },
            { t: "I understand. Tell me, what are you worried?", es: "Entiendo. Dígame, ¿qué le preocupa?", ok: false,
              fix: "«Worried» necesita «about» con lo que preocupa, y la preposición va al final: «What are you worried about?»." }
          ],
          clave: ["questions", "worried about", "happy to"],
          tip: "En inglés la preposición suele ir al final de la pregunta: What are you worried about?" },
        { bot: "How are the kids getting there? And who's going to be with them?", es: "¿Cómo van a llegar los niños? ¿Y quién va a estar con ellos?",
          opciones: [
            { t: "They're going by school bus, with their teachers.", es: "Van en el bus del colegio, con sus docentes.", ok: true },
            { t: "We're taking the school bus, and each small group will have an adult in charge, including some parent volunteers.", es: "Vamos en el bus del colegio y cada grupo pequeño tendrá un adulto a cargo, incluidos algunos padres voluntarios.", ok: true },
            { t: "They go in the bus of the school, with the teachers.", es: "Van en el bus del colegio, con los docentes.", ok: false,
              fix: "«In the bus of the school» suena traducido. Di «by school bus» o «on the school bus»." }
          ],
          clave: ["school bus", "adult", "teachers"],
          tip: "«By bus» describe el medio; «on the bus» habla del vehículo concreto. «Chaperone» = adulto acompañante." },
        { bot: "Ava has asthma. I'm a little nervous about that.", es: "Ava tiene asma. Eso me pone un poco nervioso.",
          opciones: [
            { t: "Thank you for telling me. Please send her inhaler, and I'll keep it with me.", es: "Gracias por contarme. Por favor, envíe su inhalador y yo lo llevo conmigo.", ok: true },
            { t: "Thank you for letting me know. Please send her inhaler with clear instructions, and I'll keep it with me the whole day.", es: "Gracias por avisarme. Por favor, envíe su inhalador con instrucciones claras y lo llevaré conmigo todo el día.", ok: true },
            { t: "Thank you for tell me. Please send her inhaler.", es: "Gracias por contarme. Por favor, envíe su inhalador.", ok: false,
              fix: "Después de una preposición el verbo va en -ing: «Thank you for telling me»." }
          ],
          clave: ["inhaler", "letting me know", "keep it"],
          tip: "La información de salud es confidencial: solo la conocen los adultos responsables del grupo." },
        { bot: "That helps. What should she bring?", es: "Eso ayuda. ¿Qué debe llevar?",
          opciones: [
            { t: "A packed lunch, water, and comfortable shoes.", es: "Almuerzo empacado, agua y zapatos cómodos.", ok: true },
            { t: "A packed lunch, a water bottle, and comfortable shoes. She should also wear her school uniform.", es: "Almuerzo empacado, una botella de agua y zapatos cómodos. También debe ir con el uniforme.", ok: true },
            { t: "A packed lunch, water, and comfortable shoes. She must to wear the uniform.", es: "Almuerzo empacado, agua y zapatos cómodos. Debe ir con el uniforme.", ok: false,
              fix: "Los verbos modales no llevan «to»: «she must wear» o «she should wear»." }
          ],
          clave: ["packed lunch", "water", "uniform", "shoes"],
          tip: "Modales sin «to»: must, should, can, will + verbo base. «Have to» sí lo lleva." },
        { bot: "And what will they actually learn at the museum?", es: "¿Y qué van a aprender realmente en el museo?",
          opciones: [
            { t: "They'll learn about energy in a workshop.", es: "Van a aprender sobre la energía en un taller.", ok: true },
            { t: "It's connected to our unit on energy. They'll take part in a hands-on workshop and complete a short worksheet.", es: "Está conectado con nuestra unidad sobre energía. Van a participar en un taller práctico y a completar una ficha corta.", ok: true },
            { t: "It's connected with our unit of energy. They'll make a workshop.", es: "Está conectado con nuestra unidad de energía. Van a hacer un taller.", ok: false,
              fix: "Se dice «a unit on energy» y «take part in / do a workshop». «Make a workshop» sugiere que ellos lo diseñan." }
          ],
          clave: ["unit", "workshop", "hands-on", "learn"],
          tip: "Explicar el propósito curricular de la salida da confianza a las familias." },
        { bot: "Okay, I feel much better now. Can I send the form tomorrow?", es: "Bien, ya me siento mucho más tranquilo. ¿Puedo enviar el permiso mañana?",
          opciones: [
            { t: "Yes, tomorrow is fine. Thank you!", es: "Sí, mañana está bien. ¡Gracias!", ok: true },
            { t: "Of course. We need it by Friday, so tomorrow is perfect. Thank you for your trust.", es: "Claro. Lo necesitamos a más tardar el viernes, así que mañana es perfecto. Gracias por su confianza.", ok: true },
            { t: "Of course. You can send it until Friday.", es: "Claro. Puede enviarlo hasta el viernes.", ok: false,
              fix: "Para una fecha límite se usa «by»: «send it by Friday». «Until» indica una acción continua hasta ese momento." }
          ],
          clave: ["by Friday", "tomorrow", "thank you"],
          tip: "«By Friday» = a más tardar el viernes. «Until Friday» = de forma continua hasta el viernes." }
      ],
      cierre: { bot: "Great. Thanks for calling. Ava is really excited about the trip!", es: "Perfecto. Gracias por llamar. ¡Ava está muy emocionada con la salida!" },
      vocab: [
        { t: "field trip", es: "salida pedagógica" },
        { t: "permission slip", es: "autorización, permiso firmado" },
        { t: "concerns", es: "inquietudes" },
        { t: "chaperone", es: "adulto acompañante" },
        { t: "inhaler", es: "inhalador" },
        { t: "packed lunch", es: "almuerzo empacado" },
        { t: "hands-on workshop", es: "taller práctico" },
        { t: "by Friday", es: "a más tardar el viernes" }
      ]
    },

    /* ───────────── 19 · B1 · Problemas técnicos en clase virtual ───────────── */
    {
      id: "en-19", titulo: "Falla técnica en la clase virtual", nivel: "B1",
      tema: "Educación digital: problemas técnicos en clase virtual",
      contexto: "Das una clase virtual a undécimo grado. Se corta el audio, la pantalla compartida no se ve y algunos estudiantes se desconectan. Resuelves con calma.",
      rol: "Chloe, estudiante de undécimo grado, colaboradora y práctica",
      turnos: [
        { bot: "Teacher, we can't hear you very well. Your voice is breaking up.", es: "Profe, no lo escuchamos bien. Se le corta la voz.",
          opciones: [
            { t: "Sorry! Can you hear me now?", es: "¡Perdón! ¿Me escuchan ahora?", ok: true },
            { t: "Sorry about that. I'm going to switch to my headset. Can you hear me better now?", es: "Perdón por eso. Voy a cambiar a mis audífonos. ¿Me escuchan mejor ahora?", ok: true },
            { t: "Sorry! Do you listen me now?", es: "¡Perdón! ¿Me escuchan ahora?", ok: false,
              fix: "Para percibir un sonido se usa «hear»: «Can you hear me now?». «Listen» es prestar atención y lleva «to»." }
          ],
          clave: ["hear me", "now", "better"],
          tip: "«Breaking up» = la voz se corta. «You're on mute» = tienes el micrófono silenciado." },
        { bot: "Yes, much better! But we can't see your screen. It's black.", es: "¡Sí, mucho mejor! Pero no vemos su pantalla. Está en negro.",
          opciones: [
            { t: "Okay, let me share it again.", es: "Bien, déjenme compartirla otra vez.", ok: true },
            { t: "Thanks for telling me. Let me stop sharing and share my screen again. Give me a second.", es: "Gracias por avisarme. Voy a dejar de compartir y compartir la pantalla de nuevo. Denme un segundo.", ok: true },
            { t: "Okay, I'm going to share it again. Wait me a second.", es: "Bien, voy a compartirla otra vez. Espérenme un segundo.", ok: false,
              fix: "«Esperar a alguien» es «wait for someone»: «Wait for me». Aquí suena más natural «Give me a second»." }
          ],
          clave: ["share", "screen", "second"],
          tip: "«Give me a second» o «Bear with me» son formas amables de pedir paciencia." },
        { bot: "Now we can see it. But some classmates got disconnected.", es: "Ya la vemos. Pero algunos compañeros se desconectaron.",
          opciones: [
            { t: "No problem. They can use the same link to come back.", es: "No hay problema. Pueden usar el mismo enlace para volver.", ok: true },
            { t: "No problem. I'll post the link in the chat again so they can rejoin.", es: "No hay problema. Vuelvo a poner el enlace en el chat para que puedan reconectarse.", ok: true },
            { t: "No problem. I'll post the link so they can join to the class again.", es: "No hay problema. Pongo el enlace para que puedan entrar otra vez a la clase.", ok: false,
              fix: "«Join» no lleva preposición: «join the class», «rejoin the meeting»." }
          ],
          clave: ["link", "chat", "rejoin"],
          tip: "«Join» va sin preposición: join the class, join a meeting, join the team." },
        { bot: "Some students say their internet is really slow at home.", es: "Algunos estudiantes dicen que el internet de su casa está muy lento.",
          opciones: [
            { t: "I understand. They can turn off their cameras.", es: "Entiendo. Pueden apagar las cámaras.", ok: true },
            { t: "That's okay. They can turn off their cameras to save bandwidth, and I'll share the slides after class.", es: "Está bien. Pueden apagar las cámaras para ahorrar ancho de banda y yo comparto las diapositivas después de clase.", ok: true },
            { t: "That's okay. They can turn off their cameras, and I'll send the slides to they.", es: "Está bien. Pueden apagar las cámaras y yo les envío las diapositivas.", ok: false,
              fix: "Después de una preposición va el pronombre objeto: «to them», no «to they»." }
          ],
          clave: ["turn off", "cameras", "slides", "bandwidth"],
          tip: "Antes de grabar una clase con estudiantes, revisa la política del colegio y la autorización de las familias." },
        { bot: "Teacher, the audio is breaking up again. Maybe it's your connection.", es: "Profe, el audio se está cortando otra vez. Quizás es su conexión.",
          opciones: [
            { t: "You're right. I'll turn off my video.", es: "Tienes razón. Voy a apagar mi video.", ok: true },
            { t: "You're probably right. I'll turn off my video for a moment to see if the audio improves.", es: "Probablemente tienes razón. Voy a apagar mi video un momento para ver si mejora el audio.", ok: true },
            { t: "You have reason. I'll turn off my video.", es: "Tienes razón. Voy a apagar mi video.", ok: false,
              fix: "«Tener razón» se dice «to be right»: «You're right». «You have reason» es un calco del español." }
          ],
          clave: ["right", "turn off", "video", "improves"],
          tip: "Calcos frecuentes: «tener razón» = be right; «tener hambre» = be hungry; «tener frío» = be cold." },
        { bot: "Now it's perfect! Should we continue with the activity?", es: "¡Ahora está perfecto! ¿Seguimos con la actividad?",
          opciones: [
            { t: "Yes, let's continue where we left off.", es: "Sí, sigamos donde quedamos.", ok: true },
            { t: "Yes, let's pick up where we left off. I'll put you in small groups and visit each one.", es: "Sí, retomemos donde quedamos. Los voy a organizar en grupos pequeños y visitaré cada uno.", ok: true },
            { t: "Yes. Let's continue where we stayed.", es: "Sí. Sigamos donde quedamos.", ok: false,
              fix: "«Donde quedamos» se dice «where we left off». «Stay» significa permanecer, no tiene ese sentido." }
          ],
          clave: ["continue", "left off", "groups"],
          tip: "«Let's pick up where we left off» = retomemos donde quedamos." },
        { bot: "Thanks for being so patient, teacher.", es: "Gracias por tener tanta paciencia, profe.",
          opciones: [
            { t: "Thank you, too! You helped me a lot.", es: "¡Gracias a ti también! Me ayudaste mucho.", ok: true },
            { t: "Thank you for letting me know right away. That's teamwork!", es: "Gracias por avisarme de inmediato. ¡Eso es trabajo en equipo!", ok: true },
            { t: "Thanks! Without you, I wouldn't have realize the problem.", es: "¡Gracias! Sin ti no me habría dado cuenta del problema.", ok: false,
              fix: "Después de «would have» va el participio: «I wouldn't have noticed the problem». Para algo que se ve u oye, «notice» es más natural." }
          ],
          clave: ["thank you", "letting me know", "teamwork"],
          tip: "Agradecer la ayuda de los estudiantes modela la corresponsabilidad en el aula." }
      ],
      cierre: { bot: "See you next class! And good luck with the internet!", es: "¡Nos vemos la próxima clase! ¡Y suerte con el internet!" },
      vocab: [
        { t: "breaking up", es: "cortarse (la voz o el audio)" },
        { t: "on mute", es: "con el micrófono silenciado" },
        { t: "share the screen", es: "compartir la pantalla" },
        { t: "rejoin", es: "volver a conectarse" },
        { t: "turn off the camera", es: "apagar la cámara" },
        { t: "bandwidth", es: "ancho de banda" },
        { t: "Bear with me", es: "ténganme paciencia" },
        { t: "where we left off", es: "donde quedamos" }
      ]
    },

    /* ───────────── 20 · B1 · Club de lectura ───────────── */
    {
      id: "en-20", titulo: "El club de lectura de docentes", nivel: "B1",
      tema: "Desarrollo profesional: club de lectura",
      contexto: "Participas en un club de lectura virtual con docentes de escuelas aliadas. Comentan una novela juvenil que todos leyeron y piensan cómo usarla en clase.",
      rol: "Ms. Hannah Price, moderadora del club y docente de lengua",
      turnos: [
        { bot: "Welcome, everyone! So, what did you think of the novel?", es: "¡Bienvenidos todos! Bueno, ¿qué les pareció la novela?",
          opciones: [
            { t: "I really liked it.", es: "Me gustó mucho.", ok: true },
            { t: "I really enjoyed it. I couldn't put it down.", es: "La disfruté mucho. No podía dejar de leerla.", ok: true },
            { t: "I enjoyed a lot.", es: "La disfruté mucho.", ok: false,
              fix: "«Enjoy» necesita objeto: «I enjoyed it a lot». Si no hay objeto, se usa el reflexivo: «I enjoyed myself»." }
          ],
          clave: ["enjoyed it", "liked", "put it down"],
          tip: "«I couldn't put it down» = no podía dejar de leerlo. Muy usada al hablar de libros." },
        { bot: "What did you like most about it?", es: "¿Qué fue lo que más le gustó?",
          opciones: [
            { t: "The main character. She's very brave.", es: "La protagonista. Es muy valiente.", ok: true },
            { t: "The main character's growth. At the beginning she's afraid of everything, but by the end she stands up for her friends.", es: "La evolución de la protagonista. Al principio le teme a todo, pero al final defiende a sus amigos.", ok: true },
            { t: "The main character. She is very brave and she has much personality.", es: "La protagonista. Es muy valiente y tiene mucha personalidad.", ok: false,
              fix: "En afirmaciones se prefiere «a lot of» o un adjetivo: «a strong personality». «Much» se usa sobre todo en preguntas y negaciones." }
          ],
          clave: ["main character", "brave", "by the end"],
          tip: "«Stand up for someone» = defender a alguien. «By the end» = para el final." },
        { bot: "Was there anything you didn't like?", es: "¿Hubo algo que no le gustara?",
          opciones: [
            { t: "The middle was a bit slow.", es: "La parte del medio fue un poco lenta.", ok: true },
            { t: "Honestly, the middle was a bit slow, and some chapters felt repetitive.", es: "Sinceramente, la parte del medio fue un poco lenta y algunos capítulos se sintieron repetitivos.", ok: true },
            { t: "Honestly, the middle was a bit slow, and some chapters were too much long.", es: "Sinceramente, la parte del medio fue un poco lenta y algunos capítulos eran demasiado largos.", ok: false,
              fix: "Antes de un adjetivo se usa solo «too»: «too long». «Too much» va con sustantivos incontables: «too much time»." }
          ],
          clave: ["a bit slow", "repetitive", "chapters"],
          tip: "Para criticar con suavidad: «a bit», «slightly», «somewhat». Suena más respetuoso." },
        { bot: "Do you think it would work with your students?", es: "¿Cree que funcionaría con sus estudiantes?",
          opciones: [
            { t: "Yes, with eighth or ninth graders.", es: "Sí, con estudiantes de octavo o noveno.", ok: true },
            { t: "Yes, I think it would work with ninth graders, especially for discussing friendship and peer pressure.", es: "Sí, creo que funcionaría con noveno, sobre todo para hablar de la amistad y la presión de grupo.", ok: true },
            { t: "Yes, I think it would work with ninth graders, especially for discuss friendship.", es: "Sí, creo que funcionaría con noveno, sobre todo para hablar de la amistad.", ok: false,
              fix: "Después de una preposición el verbo va en -ing: «for discussing friendship»." }
          ],
          clave: ["would work", "ninth graders", "discussing"],
          tip: "«Peer pressure» = presión de grupo, un tema frecuente en la literatura juvenil." },
        { bot: "How would you use it in class?", es: "¿Cómo lo usaría en clase?",
          opciones: [
            { t: "I'd use reading circles with different roles.", es: "Usaría círculos de lectura con roles distintos.", ok: true },
            { t: "I'd set up reading circles, with roles like summarizer and question maker, and finish with a debate.", es: "Organizaría círculos de lectura, con roles como el que resume y el que formula preguntas, y cerraría con un debate.", ok: true },
            { t: "I would make reading circles and make a debate at the end.", es: "Haría círculos de lectura y un debate al final.", ok: false,
              fix: "Con «debate» se usa «have» o «hold»: «hold a debate». Para los círculos: «set up» u «organize reading circles»." }
          ],
          clave: ["reading circles", "roles", "debate"],
          tip: "En los círculos de lectura, rota los roles para que todos practiquen distintas habilidades." },
        { bot: "Great idea. Which book should we read next month?", es: "Excelente idea. ¿Qué libro deberíamos leer el próximo mes?",
          opciones: [
            { t: "Maybe a book by a Latin American author?", es: "¿Quizás un libro de un autor latinoamericano?", ok: true },
            { t: "How about a novel by a Colombian author? We could read it in translation and compare it with the original.", es: "¿Qué tal una novela de un autor colombiano? Podríamos leer la traducción y compararla con el original.", ok: true },
            { t: "I propose to read a book of a Colombian author.", es: "Propongo leer un libro de un autor colombiano.", ok: false,
              fix: "El autor de un libro se indica con «by»: «a book by a Colombian author». Para proponer suena más natural «How about…?» o «I suggest reading…»." }
          ],
          clave: ["how about", "by", "author"],
          tip: "Para proponer: «How about…?», «Why don't we…?», «I suggest reading…»." }
      ],
      cierre: { bot: "I love that idea. Let's vote on it next week. Thanks, everyone!", es: "Me encanta la idea. Votemos la próxima semana. ¡Gracias a todos!" },
      vocab: [
        { t: "I couldn't put it down", es: "no podía dejar de leerlo" },
        { t: "main character", es: "protagonista" },
        { t: "stand up for", es: "defender a" },
        { t: "a bit slow", es: "un poco lento" },
        { t: "peer pressure", es: "presión de grupo" },
        { t: "reading circles", es: "círculos de lectura" },
        { t: "hold a debate", es: "hacer un debate" },
        { t: "a book by…", es: "un libro de… (autor)" }
      ]
    },

    /* ───────────── 21 · B1 · Presentar Cali y la cultura del Pacífico ───────────── */
    {
      id: "en-21", titulo: "Presento Cali a los visitantes", nivel: "B1",
      tema: "Cultura: presentar Cali y la cultura del Pacífico",
      contexto: "Un grupo de docentes visitantes de EE. UU. llega a tu colegio en Cali. Les das la bienvenida y les presentas la ciudad y la cultura del Pacífico colombiano.",
      rol: "Mr. Kevin Walsh, docente visitante, curioso y muy abierto",
      turnos: [
        { bot: "Thank you for having us! So, what should we know about Cali?", es: "¡Gracias por recibirnos! Bueno, ¿qué deberíamos saber sobre Cali?",
          opciones: [
            { t: "Cali is famous for salsa. People here love to dance.", es: "Cali es famosa por la salsa. Aquí a la gente le encanta bailar.", ok: true },
            { t: "Cali is often called the world capital of salsa, and it's also a gateway to the culture of Colombia's Pacific coast.", es: "A Cali suelen llamarla la capital mundial de la salsa, y también es una puerta a la cultura del Pacífico colombiano.", ok: true },
            { t: "Cali is famous because of the salsa.", es: "Cali es famosa por la salsa.", ok: false,
              fix: "«Famoso por» se dice «famous for». Y los géneros musicales van sin «the»: «famous for salsa»." }
          ],
          clave: ["famous for", "salsa", "Pacific"],
          tip: "«Famous for» = famoso por. «Known as» o «often called» = conocido como." },
        { bot: "Salsa! Will we get to see some dancing while we're here?", es: "¡Salsa! ¿Vamos a poder ver algo de baile mientras estamos aquí?",
          opciones: [
            { t: "Yes! Our students will dance for you on Friday.", es: "¡Sí! Nuestros estudiantes van a bailar para ustedes el viernes.", ok: true },
            { t: "Absolutely. Our students prepared a short performance, and later we can take you to a salsa school, if you'd like.", es: "Claro que sí. Nuestros estudiantes prepararon una presentación corta y después podemos llevarlos a una escuela de salsa, si quieren.", ok: true },
            { t: "Yes! Our students are going to dance for you the Friday.", es: "¡Sí! Nuestros estudiantes van a bailar para ustedes el viernes.", ok: false,
              fix: "Con los días de la semana se usa «on» y no «the»: «on Friday»." }
          ],
          clave: ["dance", "on Friday", "performance"],
          tip: "Preposiciones de tiempo: on + día (on Friday), in + mes (in August), at + hora (at three)." },
        { bot: "I've also heard about Colombia's Pacific coast. What's the connection between Cali and the Pacific?", es: "También he oído hablar de la costa pacífica de Colombia. ¿Cuál es la relación entre Cali y el Pacífico?",
          opciones: [
            { t: "Many people in Cali have family from the Pacific coast.", es: "Mucha gente en Cali tiene familia de la costa pacífica.", ok: true },
            { t: "Cali has a large Afro-Colombian community, and many families come from the Pacific region, so its music, food, and traditions are part of the city's identity.", es: "Cali tiene una gran comunidad afrocolombiana y muchas familias vienen de la región Pacífica, así que su música, su comida y sus tradiciones son parte de la identidad de la ciudad.", ok: true },
            { t: "Many people in Cali have roots in the Pacific, and that culture is very present here since always.", es: "Mucha gente en Cali tiene raíces en el Pacífico, y esa cultura está muy presente aquí desde siempre.", ok: false,
              fix: "«Desde siempre» no es «since always». Usa present perfect: «That culture has always been very present here»." }
          ],
          clave: ["Afro-Colombian", "Pacific", "traditions", "family"],
          tip: "«Roots» = raíces (origen familiar). «Since always» es un calco del español." },
        { bot: "That's fascinating. What kind of music is typical of the Pacific?", es: "Fascinante. ¿Qué tipo de música es típica del Pacífico?",
          opciones: [
            { t: "Marimba music. The marimba is a wooden instrument.", es: "La música de marimba. La marimba es un instrumento de madera.", ok: true },
            { t: "The marimba de chonta is central. UNESCO recognizes the marimba music and traditional chants of the South Pacific as Intangible Cultural Heritage.", es: "La marimba de chonta es central. La UNESCO reconoce la música de marimba y los cantos tradicionales del Pacífico Sur como Patrimonio Cultural Inmaterial.", ok: true },
            { t: "The marimba. It's a instrument of wood.", es: "La marimba. Es un instrumento de madera.", ok: false,
              fix: "Antes de sonido vocálico va «an»: «an instrument». Y el material funciona como adjetivo: «a wooden instrument»." }
          ],
          clave: ["marimba", "wooden", "chants", "UNESCO"],
          tip: "«A» antes de sonido consonántico, «an» antes de sonido vocálico: an instrument, an hour, a university." },
        { bot: "Is there a festival we could attend someday?", es: "¿Hay algún festival al que pudiéramos asistir algún día?",
          opciones: [
            { t: "Yes, the Petronio Álvarez Festival.", es: "Sí, el Festival Petronio Álvarez.", ok: true },
            { t: "Yes! The Petronio Álvarez Pacific Music Festival takes place in Cali every year, usually in August. You'd love it.", es: "¡Sí! El Festival de Música del Pacífico Petronio Álvarez se realiza en Cali cada año, por lo general en agosto. Les encantaría.", ok: true },
            { t: "Yes, the Petronio Álvarez Festival. It realizes every year in Cali.", es: "Sí, el Festival Petronio Álvarez. Se realiza cada año en Cali.", ok: false,
              fix: "«Realize» significa «darse cuenta». Para un evento se dice «It takes place» o «It's held every year»." }
          ],
          clave: ["festival", "takes place", "every year"],
          tip: "Falso amigo: «realize» = darse cuenta. «Realizarse» (un evento) = take place / be held." },
        { bot: "And the food? What should we try?", es: "¿Y la comida? ¿Qué deberíamos probar?",
          opciones: [
            { t: "You should try sancocho and pandebono.", es: "Deberían probar el sancocho y el pandebono.", ok: true },
            { t: "You have to try sancocho, pandebono, and some Pacific dishes made with seafood and coconut.", es: "Tienen que probar el sancocho, el pandebono y algunos platos del Pacífico hechos con mariscos y coco.", ok: true },
            { t: "You should try sancocho. It's very rich.", es: "Deberían probar el sancocho. Es muy rico.", ok: false,
              fix: "«Rico» (comida) se dice «delicious» o «tasty». «Rich» significa adinerado o, en comida, pesado o con mucha grasa." }
          ],
          clave: ["try", "sancocho", "delicious", "tasty"],
          tip: "Falso amigo: «rico» (sabroso) = delicious, tasty. «Rich food» = comida pesada." },
        { bot: "What do you hope we take away from this visit?", es: "¿Qué esperas que nos llevemos de esta visita?",
          opciones: [
            { t: "That Cali is a warm and diverse city.", es: "Que Cali es una ciudad cálida y diversa.", ok: true },
            { t: "I hope you'll see that our diversity is our strength, and that our students are proud of where they come from.", es: "Espero que vean que nuestra diversidad es nuestra fortaleza y que nuestros estudiantes están orgullosos de su origen.", ok: true },
            { t: "I hope you go with a good image of Cali.", es: "Espero que se lleven una buena imagen de Cali.", ok: false,
              fix: "«Llevarse una buena imagen» se dice «leave with a good impression». «Go with» no transmite esa idea." }
          ],
          clave: ["diverse", "proud", "impression", "strength"],
          tip: "«Take away» = llevarse una idea o aprendizaje. «Key takeaway» = la idea principal." }
      ],
      cierre: { bot: "We'll definitely leave with a great impression. Thank you for your hospitality!", es: "Sin duda nos vamos con una excelente impresión. ¡Gracias por su hospitalidad!" },
      vocab: [
        { t: "known as / often called", es: "conocido como" },
        { t: "Afro-Colombian", es: "afrocolombiano" },
        { t: "roots", es: "raíces (origen)" },
        { t: "wooden", es: "de madera" },
        { t: "Intangible Cultural Heritage", es: "Patrimonio Cultural Inmaterial" },
        { t: "take place", es: "realizarse (un evento)" },
        { t: "tasty", es: "sabroso, rico" },
        { t: "leave with a good impression", es: "llevarse una buena impresión" }
      ]
    },

    /* ───────────── 22 · B1 · Disculparse por un error y repararlo ───────────── */
    {
      id: "en-22", titulo: "Me equivoqué y lo reparo", nivel: "B1",
      tema: "Convivencia: disculparse por un error y repararlo",
      contexto: "Registraste por error una nota equivocada en la plataforma. Una estudiante de décimo viene a reclamar. Reconoces el error, te disculpas y lo reparas.",
      rol: "Emma, estudiante de décimo grado, molesta pero respetuosa",
      turnos: [
        { bot: "Excuse me, teacher. Can I talk to you? I think there's a mistake with my grade.", es: "Disculpe, profe. ¿Puedo hablar con usted? Creo que hay un error en mi nota.",
          opciones: [
            { t: "Of course, Emma. Let's take a look.", es: "Claro, Emma. Revisemos.", ok: true },
            { t: "Of course, Emma. Thanks for coming to me. Let's look at it together.", es: "Claro, Emma. Gracias por venir a hablarme. Revisémoslo juntas.", ok: true },
            { t: "Of course. Let's see. Which is the problem?", es: "Claro. A ver. ¿Cuál es el problema?", ok: false,
              fix: "Para una pregunta abierta se usa «What»: «What's the problem?». «Which» es para elegir entre opciones conocidas." }
          ],
          clave: ["take a look", "together", "of course"],
          tip: "«What» para preguntas abiertas; «which» para elegir entre opciones concretas." },
        { bot: "My essay says sixty in the system, but on the paper you wrote eighty-five.", es: "En el sistema mi ensayo dice sesenta, pero en la hoja usted escribió ochenta y cinco.",
          opciones: [
            { t: "You're right. I made a mistake. I'm sorry.", es: "Tienes razón. Me equivoqué. Lo siento.", ok: true },
            { t: "You're absolutely right, and I apologize. I entered the wrong grade. That's my mistake.", es: "Tienes toda la razón y te pido disculpas. Registré la nota equivocada. El error es mío.", ok: true },
            { t: "You're right. I'm sorry, I committed an error.", es: "Tienes razón. Lo siento, cometí un error.", ok: false,
              fix: "«Cometer un error» se dice «make a mistake». «Commit» se usa con delitos o compromisos (commit a crime)." }
          ],
          clave: ["sorry", "mistake", "apologize"],
          tip: "Una disculpa sincera nombra el error y asume la responsabilidad: «That's my mistake»." },
        { bot: "I was really worried. My parents saw the grade last night.", es: "Estaba muy preocupada. Mis papás vieron la nota anoche.",
          opciones: [
            { t: "I understand. I'm sorry it caused you stress.", es: "Entiendo. Siento que te haya causado estrés.", ok: true },
            { t: "I completely understand, and I'm sorry it caused you and your family so much stress.", es: "Lo entiendo perfectamente y siento que te haya causado tanto estrés a ti y a tu familia.", ok: true },
            { t: "I understand. I'm sorry that it made you to worry.", es: "Entiendo. Siento que te haya hecho preocupar.", ok: false,
              fix: "Con «make» + persona, el verbo va sin «to»: «it made you worry»." }
          ],
          clave: ["understand", "sorry", "stress", "worry"],
          tip: "Valida la emoción antes de explicar: «I understand why you were worried»." },
        { bot: "Can you fix it today?", es: "¿Lo puede corregir hoy?",
          opciones: [
            { t: "Yes, I'll correct it right now.", es: "Sí, lo corrijo ya mismo.", ok: true },
            { t: "Yes. I'm correcting it right now, and I'll send a note to your parents explaining that it was my error.", es: "Sí. Lo estoy corrigiendo ahora mismo y les enviaré una nota a tus papás explicando que el error fue mío.", ok: true },
            { t: "Yes, I'll fix it now. And I'm going to explain your parents.", es: "Sí, lo corrijo ya. Y les voy a explicar a tus papás.", ok: false,
              fix: "«Explain» necesita «to» antes de la persona: «explain it to your parents» o «explain to your parents what happened»." }
          ],
          clave: ["correct", "right now", "parents"],
          tip: "«Explain» siempre lleva «to» antes de la persona: explain something to someone." },
        { bot: "Thank you. Could this happen to other students too?", es: "Gracias. ¿Esto les puede pasar también a otros estudiantes?",
          opciones: [
            { t: "I'll check all the grades today.", es: "Hoy reviso todas las notas.", ok: true },
            { t: "Good question. I'm going to double-check everyone's grades today, so that this doesn't happen to anyone else.", es: "Buena pregunta. Hoy voy a verificar las notas de todos para que no le pase a nadie más.", ok: true },
            { t: "Good question. I'm going to check all the grades today for that it doesn't happen again.", es: "Buena pregunta. Hoy voy a revisar todas las notas para que no vuelva a pasar.", ok: false,
              fix: "«Para que» se dice «so (that)»: «so that it doesn't happen again». «For that» no funciona así." }
          ],
          clave: ["double-check", "grades", "so that"],
          tip: "«So that» = para que. «Double-check» = verificar de nuevo, por segunda vez." },
        { bot: "Okay. I feel much better now.", es: "Bueno. Ya me siento mucho mejor.",
          opciones: [
            { t: "I'm glad. Thank you for telling me so respectfully.", es: "Me alegra. Gracias por decírmelo con tanto respeto.", ok: true },
            { t: "I'm glad. And thank you for speaking up so respectfully. Mistakes help us improve, mine too.", es: "Me alegra. Y gracias por hablar con tanto respeto. Los errores nos ayudan a mejorar, también los míos.", ok: true },
            { t: "I'm glad. You were very educated when you told me.", es: "Me alegra. Fuiste muy educada cuando me lo dijiste.", ok: false,
              fix: "«Educado» (cortés) se dice «polite». «Educated» significa que tiene estudios o formación académica." }
          ],
          clave: ["glad", "respectfully", "polite", "speaking up"],
          tip: "«Speak up» = hablar para decir algo importante. Reconoce a quien lo hace con respeto." }
      ],
      cierre: { bot: "Thank you, teacher. See you in class tomorrow!", es: "Gracias, profe. ¡Nos vemos mañana en clase!" },
      vocab: [
        { t: "make a mistake", es: "cometer un error" },
        { t: "apologize", es: "pedir disculpas" },
        { t: "enter a grade", es: "registrar una nota" },
        { t: "fix / correct", es: "corregir" },
        { t: "double-check", es: "verificar de nuevo" },
        { t: "so that", es: "para que" },
        { t: "speak up", es: "hablar, alzar la voz (con respeto)" },
        { t: "polite", es: "educado, cortés" }
      ]
    },

    /* ───────────── 23 · B1 · Jurado de feria de ciencias ───────────── */
    {
      id: "en-23", titulo: "Jurado en la feria de ciencias", nivel: "B1",
      tema: "STEAM: jurado de feria de ciencias",
      contexto: "Eres jurado en la feria de ciencias de la escuela aliada. Un estudiante de séptimo presenta un experimento sobre la luz y el crecimiento de las plantas.",
      rol: "Noah, estudiante de séptimo grado, presentador del proyecto, entusiasta",
      turnos: [
        { bot: "Hi! Welcome to our project. It's about how light affects plant growth.", es: "¡Hola! Bienvenido a nuestro proyecto. Trata de cómo la luz afecta el crecimiento de las plantas.",
          opciones: [
            { t: "Hi, Noah! What was your question?", es: "¡Hola, Noah! ¿Cuál era su pregunta?", ok: true },
            { t: "Hi, Noah. It looks great. What was your research question?", es: "Hola, Noah. Se ve muy bien. ¿Cuál fue su pregunta de investigación?", ok: true },
            { t: "Hi! It looks great. Which was your question of investigation?", es: "¡Hola! Se ve muy bien. ¿Cuál fue su pregunta de investigación?", ok: false,
              fix: "Se dice «research question». Y para una pregunta abierta se usa «What was…?», no «Which was…?»." }
          ],
          clave: ["research question", "what"],
          tip: "Vocabulario de feria: research question, hypothesis, variables, results, conclusion." },
        { bot: "Our question was: do plants grow taller with more hours of light?", es: "Nuestra pregunta fue: ¿las plantas crecen más con más horas de luz?",
          opciones: [
            { t: "Interesting. What was your hypothesis?", es: "Interesante. ¿Cuál era su hipótesis?", ok: true },
            { t: "That's a clear question. What did you predict before you started?", es: "Es una pregunta clara. ¿Qué predijeron antes de empezar?", ok: true },
            { t: "Interesting. What did you predicted?", es: "Interesante. ¿Qué predijeron?", ok: false,
              fix: "Con el auxiliar «did», el verbo va en forma base: «What did you predict?»." }
          ],
          clave: ["hypothesis", "predict"],
          tip: "Con «did», el verbo principal no va en pasado: did you predict, did it grow." },
        { bot: "We predicted that more light means more growth. We had three groups of plants.", es: "Predijimos que más luz significa más crecimiento. Tuvimos tres grupos de plantas.",
          opciones: [
            { t: "What did you change, and what stayed the same?", es: "¿Qué cambiaron y qué se mantuvo igual?", ok: true },
            { t: "Good. Which variable did you change, and how did you keep the other variables the same?", es: "Bien. ¿Qué variable cambiaron y cómo mantuvieron iguales las demás?", ok: true },
            { t: "Good. And which were the variables that you controlled them?", es: "Bien. ¿Y cuáles fueron las variables que controlaron?", ok: false,
              fix: "En una oración relativa no se repite el objeto: «the variables that you controlled», sin «them»." }
          ],
          clave: ["variable", "change", "same", "controlled"],
          tip: "Variable independiente (la que cambias), dependiente (la que mides) y controladas (las que mantienes iguales)." },
        { bot: "We changed the hours of light. We used the same soil, water, and type of seed.", es: "Cambiamos las horas de luz. Usamos la misma tierra, el mismo riego y el mismo tipo de semilla.",
          opciones: [
            { t: "Excellent. How did you measure the growth?", es: "Excelente. ¿Cómo midieron el crecimiento?", ok: true },
            { t: "Excellent control. How did you measure growth, and how often did you take measurements?", es: "Excelente control. ¿Cómo midieron el crecimiento y cada cuánto tomaron medidas?", ok: true },
            { t: "Excellent. How did you measure the grow?", es: "Excelente. ¿Cómo midieron el crecimiento?", ok: false,
              fix: "«Grow» es verbo (crecer). El sustantivo es «growth» (crecimiento)." }
          ],
          clave: ["measure", "growth", "how often"],
          tip: "Verbo y sustantivo: grow → growth, measure → measurement, observe → observation." },
        { bot: "We measured the height with a ruler every two days. Here's our graph.", es: "Medimos la altura con una regla cada dos días. Aquí está nuestra gráfica.",
          opciones: [
            { t: "Your graph is very clear. What does it show?", es: "Su gráfica es muy clara. ¿Qué muestra?", ok: true },
            { t: "The graph is easy to read. What pattern do you see, and does it support your hypothesis?", es: "La gráfica es fácil de leer. ¿Qué patrón ven y apoya su hipótesis?", ok: true },
            { t: "The graph is very clear. What tells us the graph?", es: "La gráfica es muy clara. ¿Qué nos dice la gráfica?", ok: false,
              fix: "En preguntas con «what» como objeto se usa auxiliar: «What does the graph tell us?»." }
          ],
          clave: ["graph", "pattern", "support", "show"],
          tip: "Pide evidencia: «What does the data show?», «Does it support your hypothesis?»." },
        { bot: "Plants with more light grew taller, but the ones with light all day and night had yellow leaves.", es: "Las plantas con más luz crecieron más, pero las que tuvieron luz día y noche tenían hojas amarillas.",
          opciones: [
            { t: "Interesting! Why do you think that happened?", es: "¡Interesante! ¿Por qué creen que pasó eso?", ok: true },
            { t: "That's an unexpected result. Why do you think that happened, and what would you test next?", es: "Es un resultado inesperado. ¿Por qué creen que pasó y qué probarían después?", ok: true },
            { t: "That's an unexpected result. What would you investigate after?", es: "Es un resultado inesperado. ¿Qué investigarían después?", ok: false,
              fix: "«Después» al final de la frase se dice «next» o «afterwards». «After» normalmente necesita un complemento (after the fair)." }
          ],
          clave: ["why", "unexpected", "next", "test"],
          tip: "Un resultado inesperado es una oportunidad: pide nuevas hipótesis, no respuestas perfectas." },
        { bot: "Maybe plants need some darkness too. Do you have any advice for us?", es: "Tal vez las plantas también necesitan algo de oscuridad. ¿Tiene algún consejo para nosotros?",
          opciones: [
            { t: "Repeat the experiment with more plants.", es: "Repitan el experimento con más plantas.", ok: true },
            { t: "Great thinking. Next time, use more plants in each group and repeat the experiment to make your results more reliable.", es: "Muy buen razonamiento. La próxima vez usen más plantas por grupo y repitan el experimento para que sus resultados sean más confiables.", ok: true },
            { t: "Great thinking. I give you an advice: use more plants.", es: "Muy buen razonamiento. Les doy un consejo: usen más plantas.", ok: false,
              fix: "«Advice» es incontable: «some advice» o «a piece of advice», nunca «an advice»." }
          ],
          clave: ["repeat", "more plants", "reliable", "advice"],
          tip: "«Advice» (sustantivo, incontable) y «advise» (verbo) se escriben distinto." }
      ],
      cierre: { bot: "Thank you so much! We'll try that next time.", es: "¡Muchas gracias! Lo intentaremos la próxima vez." },
      vocab: [
        { t: "research question", es: "pregunta de investigación" },
        { t: "hypothesis", es: "hipótesis" },
        { t: "independent variable", es: "variable independiente" },
        { t: "controlled variables", es: "variables controladas" },
        { t: "growth", es: "crecimiento" },
        { t: "measurement", es: "medición" },
        { t: "reliable", es: "confiable" },
        { t: "a piece of advice", es: "un consejo" }
      ]
    },

    /* ───────────── 24 · B1 · Planear un proyecto STEAM con un colega extranjero ───────────── */
    {
      id: "en-24", titulo: "Proyecto STEAM con un colega visitante", nivel: "B1",
      tema: "STEAM: planear un proyecto con un colega extranjero",
      contexto: "Un docente de ciencias de una escuela aliada en Canadá visita tu colegio. Se sientan a planear un proyecto STEAM conjunto entre sus grupos de octavo.",
      rol: "Mr. Liam Tremblay, docente de ciencias, práctico y creativo",
      turnos: [
        { bot: "So, what kind of project are you thinking about?", es: "Bueno, ¿en qué tipo de proyecto estás pensando?",
          opciones: [
            { t: "A project about water in our cities.", es: "Un proyecto sobre el agua en nuestras ciudades.", ok: true },
            { t: "I'd like our eighth graders to compare water quality in our two cities and design a simple filter.", es: "Me gustaría que nuestros estudiantes de octavo compararan la calidad del agua en nuestras dos ciudades y diseñaran un filtro sencillo.", ok: true },
            { t: "A project about water. The students will investigate about water quality.", es: "Un proyecto sobre el agua. Los estudiantes van a investigar sobre la calidad del agua.", ok: false,
              fix: "«Investigate» no lleva «about»: «investigate water quality». Lo mismo con «discuss» y «research» como verbos." }
          ],
          clave: ["water", "compare", "design", "filter"],
          tip: "«Investigate», «discuss» y «research» (verbo) van sin «about»." },
        { bot: "I love it. How would we divide the work?", es: "Me encanta. ¿Cómo dividiríamos el trabajo?",
          opciones: [
            { t: "Each class can collect data in its own city.", es: "Cada grupo puede recoger datos en su propia ciudad.", ok: true },
            { t: "Each class could collect data locally, and then we could share the results in a joint presentation.", es: "Cada grupo podría recoger datos localmente y luego podríamos compartir los resultados en una presentación conjunta.", ok: true },
            { t: "Each class can collect datas in its city.", es: "Cada grupo puede recoger datos en su ciudad.", ok: false,
              fix: "«Data» no lleva «s»: se usa como incontable («the data shows») o como plural («the data show»)." }
          ],
          clave: ["collect data", "share", "results"],
          tip: "Nunca «datas». «Joint» = conjunto, compartido entre dos o más partes." },
        { bot: "Where does the art part come in?", es: "¿Dónde entra la parte artística?",
          opciones: [
            { t: "Students can make infographics.", es: "Los estudiantes pueden hacer infografías.", ok: true },
            { t: "Students could design infographics or a short comic to explain their findings to the community.", es: "Los estudiantes podrían diseñar infografías o un cómic corto para explicar sus hallazgos a la comunidad.", ok: true },
            { t: "Students could design infographics to explain the results at the community.", es: "Los estudiantes podrían diseñar infografías para explicar los resultados a la comunidad.", ok: false,
              fix: "«Explicar a» se dice «explain to»: «explain the results to the community»." }
          ],
          clave: ["infographics", "design", "community", "findings"],
          tip: "En STEAM el arte sirve para diseñar y comunicar, no solo para decorar." },
        { bot: "Good. How long should the project last?", es: "Bien. ¿Cuánto debería durar el proyecto?",
          opciones: [
            { t: "About six weeks.", es: "Unas seis semanas.", ok: true },
            { t: "I think six weeks would be enough: two for research, two for building the filters, and two for presentations.", es: "Creo que seis semanas serían suficientes: dos para investigar, dos para construir los filtros y dos para las presentaciones.", ok: true },
            { t: "I think it should last during six weeks.", es: "Creo que debería durar seis semanas.", ok: false,
              fix: "Con «last» la duración va directa o con «for»: «It should last six weeks». «During» va con un sustantivo: during the project." }
          ],
          clave: ["weeks", "last", "research"],
          tip: "«During» + evento (during the project); «for» + duración (for six weeks)." },
        { bot: "Our schedules are different. When could our students meet online?", es: "Nuestros horarios son distintos. ¿Cuándo podrían reunirse en línea nuestros estudiantes?",
          opciones: [
            { t: "Maybe once a month, in the morning.", es: "Tal vez una vez al mes, por la mañana.", ok: true },
            { t: "Maybe we could schedule a call every two weeks. What time works best for you?", es: "Tal vez podríamos programar una llamada cada dos semanas. ¿Qué hora te sirve más?", ok: true },
            { t: "Maybe every two weeks. What hour is good for you?", es: "Tal vez cada dos semanas. ¿A qué hora te queda bien?", ok: false,
              fix: "«¿A qué hora?» se dice «What time…?». «Hour» es la duración de sesenta minutos." }
          ],
          clave: ["schedule", "what time", "works"],
          tip: "«What time works for you?» es la forma natural de cuadrar un horario." },
        { bot: "Tuesdays at ten work for me. How will we assess the project?", es: "Los martes a las diez me sirven. ¿Cómo vamos a evaluar el proyecto?",
          opciones: [
            { t: "With a shared rubric.", es: "Con una rúbrica compartida.", ok: true },
            { t: "Let's create a shared rubric with criteria for the science, the design, and the communication of results.", es: "Creemos una rúbrica compartida con criterios para la ciencia, el diseño y la comunicación de resultados.", ok: true },
            { t: "Let's create a rubric between both.", es: "Creemos una rúbrica entre ambos.", ok: false,
              fix: "«Between both» es un calco redundante de «entre ambos». Di «Let's create a rubric together» o «a shared rubric»." }
          ],
          clave: ["shared rubric", "criteria", "together"],
          tip: "«Entre los dos» = «together» o «between the two of us», no «between both»." },
        { bot: "Perfect. What's our next step?", es: "Perfecto. ¿Cuál es nuestro siguiente paso?",
          opciones: [
            { t: "I'll write a draft and send it to you.", es: "Yo escribo un borrador y te lo envío.", ok: true },
            { t: "I'll draft a one-page plan and email it to you by Friday, and you can add your ideas.", es: "Redacto un plan de una página y te lo envío por correo a más tardar el viernes, y tú agregas tus ideas.", ok: true },
            { t: "I'll send you a draft. We keep in contact.", es: "Te envío un borrador. Seguimos en contacto.", ok: false,
              fix: "«Seguimos en contacto» se dice «Let's keep in touch» o «We'll stay in touch»." }
          ],
          clave: ["draft", "send", "keep in touch"],
          tip: "Cierra cada reunión con acciones concretas: quién hace qué y para cuándo." }
      ],
      cierre: { bot: "Sounds great. I'm excited to work together. Talk soon!", es: "Suena muy bien. Me emociona trabajar juntos. ¡Hablamos pronto!" },
      vocab: [
        { t: "joint project", es: "proyecto conjunto" },
        { t: "collect data", es: "recoger datos" },
        { t: "findings", es: "hallazgos" },
        { t: "infographic", es: "infografía" },
        { t: "last", es: "durar" },
        { t: "What time works for you?", es: "¿qué hora te sirve?" },
        { t: "shared rubric", es: "rúbrica compartida" },
        { t: "keep in touch", es: "seguir en contacto" }
      ]
    },

    /* ───────────── 25 · B2 · Mentoría a un docente nuevo ───────────── */
    {
      id: "en-25", titulo: "Mentoría a una docente nueva", nivel: "B2",
      tema: "Desarrollo profesional: mentoría a un docente nuevo",
      contexto: "Acompañas como mentor o mentora a una docente que acaba de llegar a tu colegio. Su primera semana fue difícil por el manejo del grupo.",
      rol: "Ms. Olivia Grant, docente nueva, entusiasta pero agotada",
      turnos: [
        { bot: "Honestly, this first week has been overwhelming. I'm not sure I'm cut out for this.", es: "Sinceramente, esta primera semana ha sido abrumadora. No estoy segura de tener madera para esto.",
          opciones: [
            { t: "That's normal in the first week. Tell me what happened.", es: "Eso es normal en la primera semana. Cuéntame qué pasó.", ok: true },
            { t: "I hear you, and what you're feeling is completely normal. Most of us felt the same way at first. What's been the hardest part?", es: "Te entiendo, y lo que sientes es completamente normal. Casi todos nos sentimos así al principio. ¿Qué ha sido lo más difícil?", ok: true },
            { t: "Don't worry, it's normal. Tell me what passed.", es: "Tranquila, es normal. Cuéntame qué pasó.", ok: false,
              fix: "«¿Qué pasó?» (suceder) se dice «What happened?». «Pass» significa pasar por un lugar o aprobar." }
          ],
          clave: ["normal", "hardest part", "what happened"],
          tip: "«Be cut out for» = tener madera para. «I hear you» = te entiendo, valido lo que sientes." },
        { bot: "Classroom management. The students don't follow my instructions, and I end up raising my voice.", es: "El manejo del grupo. Los estudiantes no siguen mis instrucciones y termino alzando la voz.",
          opciones: [
            { t: "Do you give one instruction at a time?", es: "¿Das una instrucción a la vez?", ok: true },
            { t: "That's a common challenge. Can I ask how you give instructions? For example, do you check for understanding before they start?", es: "Es un reto común. ¿Puedo preguntarte cómo das las instrucciones? Por ejemplo, ¿verificas que entendieron antes de que empiecen?", ok: true },
            { t: "That's a common challenge. Do you give the instructions one for one?", es: "Es un reto común. ¿Das las instrucciones una por una?", ok: false,
              fix: "«Una por una» se dice «one at a time» o «one by one». «One for one» no tiene ese sentido." }
          ],
          clave: ["instructions", "check for understanding", "one at a time"],
          tip: "Pregunta antes de aconsejar: la buena mentoría parte de lo que el docente ya hace." },
        { bot: "I usually explain everything at once, and then they start. Maybe that's the problem.", es: "Normalmente explico todo de una vez y luego empiezan. Quizás ese es el problema.",
          opciones: [
            { t: "Possibly. Try breaking the instructions into steps.", es: "Puede ser. Intenta dividir las instrucciones en pasos.", ok: true },
            { t: "It might be. If you break the task into short steps, model the first one, and ask a student to repeat the instructions, you'll probably see a difference.", es: "Puede ser. Si divides la tarea en pasos cortos, modelas el primero y le pides a un estudiante que repita las instrucciones, probablemente notarás la diferencia.", ok: true },
            { t: "It might be. I suggest you to break the task into steps.", es: "Puede ser. Te sugiero dividir la tarea en pasos.", ok: false,
              fix: "«Suggest» no admite persona + «to»: «I suggest (that) you break the task…» o «I suggest breaking the task…»." }
          ],
          clave: ["break", "steps", "model", "repeat"],
          tip: "«Suggest» y «recommend» comparten patrón: «I suggest that you…» o «I suggest + -ing»." },
        { bot: "That makes sense. But what do I do when a few students keep talking while I'm explaining?", es: "Tiene sentido. ¿Pero qué hago cuando algunos estudiantes siguen hablando mientras explico?",
          opciones: [
            { t: "Use an attention signal and wait in silence.", es: "Usa una señal de atención y espera en silencio.", ok: true },
            { t: "Establish a clear attention signal, wait until everyone is with you, and talk privately with the students who keep interrupting, rather than calling them out in front of everyone.", es: "Establece una señal de atención clara, espera hasta que todos estén contigo y habla en privado con quienes siguen interrumpiendo, en lugar de llamarles la atención frente a todos.", ok: true },
            { t: "Use a signal and wait that everybody is quiet.", es: "Usa una señal y espera a que todos estén callados.", ok: false,
              fix: "«Esperar a que» se dice «wait until…» o «wait for everyone to be quiet». «Wait that» no existe." }
          ],
          clave: ["attention signal", "wait until", "privately"],
          tip: "Corrige en privado y reconoce en público: así proteges la dignidad del estudiante." },
        { bot: "I've been doing the opposite. I've been calling them out in front of the class.", es: "He estado haciendo lo contrario. Les he llamado la atención frente a todo el grupo.",
          opciones: [
            { t: "It's okay. Now you know, and you can change it.", es: "Está bien. Ahora lo sabes y puedes cambiarlo.", ok: true },
            { t: "Don't be too hard on yourself. Recognizing it is the first step. What matters is what you do from now on.", es: "No seas tan dura contigo misma. Reconocerlo es el primer paso. Lo que importa es lo que hagas de ahora en adelante.", ok: true },
            { t: "Don't be too hard with yourself. Now you know it.", es: "No seas tan dura contigo misma. Ahora ya lo sabes.", ok: false,
              fix: "«Ser duro con uno mismo» se dice «be hard on yourself», con «on»." }
          ],
          clave: ["hard on yourself", "first step", "from now on"],
          tip: "«From now on» = de ahora en adelante. El error no nos detiene: nos enseña." },
        { bot: "Would you mind observing one of my classes and giving me some feedback?", es: "¿Te molestaría observar una de mis clases y darme retroalimentación?",
          opciones: [
            { t: "Not at all. I'd be happy to.", es: "Para nada. Con mucho gusto.", ok: true },
            { t: "Not at all, I'd be glad to. Let's agree beforehand on what you'd like me to focus on.", es: "Para nada, con gusto. Acordemos antes en qué quieres que me fije.", ok: true },
            { t: "Yes, I would mind. I'll be happy to observe you.", es: "Sí, me molestaría. Con gusto te observo.", ok: false,
              fix: "«Would you mind…?» pregunta si te molesta. Para aceptar se responde «Not at all» o «No, of course not». «Yes, I would mind» significa que sí te molesta." }
          ],
          clave: ["not at all", "focus on", "happy to", "glad to"],
          tip: "Con «Would you mind…?», responder «No» significa «sí, con gusto». Cuidado con decir «Yes»." },
        { bot: "Thank you. I really needed this conversation.", es: "Gracias. Necesitaba mucho esta conversación.",
          opciones: [
            { t: "Anytime. We're a team.", es: "Cuando quieras. Somos un equipo.", ok: true },
            { t: "Anytime. Remember, nobody gets everything right in the first week. We learn from our mistakes, and we grow together.", es: "Cuando quieras. Recuerda que nadie hace todo bien en la primera semana. Aprendemos de los errores y crecemos juntos.", ok: true },
            { t: "Anytime. Count with me for whatever you need.", es: "Cuando quieras. Cuenta conmigo para lo que necesites.", ok: false,
              fix: "«Contar con alguien» se dice «count on someone»: «You can count on me»." }
          ],
          clave: ["count on", "anytime", "team"],
          tip: "«Count on someone» = contar con alguien. «Count with» es un calco del español." }
      ],
      cierre: { bot: "Thanks. I'll take you up on that! See you on Thursday for the observation.", es: "Gracias. ¡Te tomo la palabra! Nos vemos el jueves para la observación." },
      vocab: [
        { t: "overwhelming", es: "abrumador" },
        { t: "be cut out for", es: "tener madera para" },
        { t: "classroom management", es: "manejo del grupo" },
        { t: "check for understanding", es: "verificar la comprensión" },
        { t: "one at a time", es: "uno a la vez" },
        { t: "attention signal", es: "señal de atención" },
        { t: "call someone out", es: "llamarle la atención a alguien en público" },
        { t: "count on", es: "contar con" }
      ]
    },

    /* ───────────── 26 · B2 · Mediar un conflicto entre estudiantes ───────────── */
    {
      id: "en-26", titulo: "Mediación entre dos estudiantes", nivel: "B2",
      tema: "Convivencia: mediar un conflicto entre estudiantes",
      contexto: "Dos estudiantes de octavo discutieron en el descanso por un trabajo en grupo: uno siente que el otro no aportó. Los reúnes para mediar y llegar a un acuerdo.",
      rol: "Jacob, estudiante de octavo grado, molesto con su compañero Ryan",
      turnos: [
        { bot: "This is so unfair! Ryan didn't do anything for the project, and he's getting the same grade.", es: "¡Esto es muy injusto! Ryan no hizo nada en el proyecto y va a tener la misma nota.",
          opciones: [
            { t: "I can see you're upset. Let's talk about it calmly.", es: "Veo que estás molesto. Hablemos de esto con calma.", ok: true },
            { t: "I can see you're really frustrated, Jacob. Before we go any further, let's agree on some ground rules: one person speaks at a time, and we stay respectful.", es: "Veo que estás muy frustrado, Jacob. Antes de seguir, acordemos unas reglas: habla una persona a la vez y mantenemos el respeto.", ok: true },
            { t: "Calm down! You are very angry, and that is not correct.", es: "¡Cálmate! Estás muy bravo y eso no está bien.", ok: false,
              fix: "Ordenar «Calm down!» suele escalar el conflicto. Además, para conductas se dice «appropriate», no «correct». Mejor nombrar la emoción: «I can see you're upset»." }
          ],
          clave: ["upset", "frustrated", "ground rules", "one at a time"],
          tip: "Nombrar la emoción («I can see you're upset») desescala más que ordenar «Calm down»." },
        { bot: "Okay. But he never answers our messages, and we had to do his part.", es: "Bueno. Pero él nunca responde nuestros mensajes y tuvimos que hacer su parte.",
          opciones: [
            { t: "That sounds frustrating. How did that affect you?", es: "Suena frustrante. ¿Cómo te afectó eso?", ok: true },
            { t: "So you felt you had to carry the extra work. How did that affect you and the rest of the group?", es: "O sea que sentiste que tenías que cargar con el trabajo extra. ¿Cómo los afectó a ti y al resto del grupo?", ok: true },
            { t: "That sounds frustrating. How did that affect to you?", es: "Suena frustrante. ¿Cómo te afectó eso?", ok: false,
              fix: "«Affect» es transitivo y no lleva «to»: «How did that affect you?»." }
          ],
          clave: ["affect", "frustrating", "extra work"],
          tip: "Parafrasear («So you felt…») demuestra escucha activa y ayuda a que el otro se sienta comprendido." },
        { bot: "I was stressed, and I stayed up late to finish. And now he's acting like nothing happened.", es: "Estaba estresado y me trasnoché para terminar. Y ahora él actúa como si nada hubiera pasado.",
          opciones: [
            { t: "Thank you for explaining. Now let's hear Ryan's side.", es: "Gracias por explicarlo. Ahora escuchemos la versión de Ryan.", ok: true },
            { t: "Thank you for sharing that. It's important that we hear Ryan's side too, so let's give him the chance to explain without interrupting.", es: "Gracias por contarlo. Es importante escuchar también la versión de Ryan, así que démosle la oportunidad de explicar sin interrumpir.", ok: true },
            { t: "Thank you. Now we are going to listen the version of Ryan.", es: "Gracias. Ahora vamos a escuchar la versión de Ryan.", ok: false,
              fix: "«Listen» lleva «to», y la posesión se expresa con 's: «listen to Ryan's side» o «hear Ryan's version»." }
          ],
          clave: ["Ryan's side", "explain", "without interrupting"],
          tip: "«Both sides of the story» = las dos versiones. Mediar exige escuchar a ambas partes." },
        { bot: "Wait... I didn't know his phone was broken and that he had to take care of his little sister.", es: "Espere... No sabía que se le había dañado el celular y que tenía que cuidar a su hermanita.",
          opciones: [
            { t: "Sometimes we don't know what others are going through.", es: "A veces no sabemos lo que los demás están viviendo.", ok: true },
            { t: "That's an important point. Sometimes we judge before we know what someone is going through. How do you see the situation now?", es: "Es un punto importante. A veces juzgamos antes de saber lo que alguien está viviendo. ¿Cómo ves la situación ahora?", ok: true },
            { t: "That's important. Sometimes we judge without to know what the other person lives.", es: "Es importante. A veces juzgamos sin saber lo que vive la otra persona.", ok: false,
              fix: "Después de una preposición va -ing: «without knowing». «Lo que vive alguien» se dice «what someone is going through»." }
          ],
          clave: ["going through", "judge", "see the situation"],
          tip: "«Go through» = atravesar una situación difícil. Expresión clave para hablar de empatía." },
        { bot: "I guess I understand. But he still should have told us.", es: "Supongo que entiendo. Pero igual debió habernos dicho.",
          opciones: [
            { t: "That's fair. What could Ryan do differently next time?", es: "Es justo. ¿Qué podría hacer Ryan diferente la próxima vez?", ok: true },
            { t: "That's a fair point. Communication matters. What agreement could you two make so this doesn't happen again?", es: "Es un punto justo. La comunicación importa. ¿Qué acuerdo podrían hacer ustedes dos para que esto no vuelva a pasar?", ok: true },
            { t: "That's fair. He should have to communicate.", es: "Es justo. Él debió comunicarse.", ok: false,
              fix: "Para lo que habría sido mejor en el pasado se usa «should have» + participio: «He should have communicated»." }
          ],
          clave: ["fair", "agreement", "next time", "differently"],
          tip: "«Should have + participio» = lo que habría sido mejor hacer: should have told, should have asked." },
        { bot: "Maybe if he can't do something, he can tell us early, and we can split the work differently.", es: "Tal vez si él no puede hacer algo, nos avisa a tiempo y repartimos el trabajo de otra forma.",
          opciones: [
            { t: "That's a great agreement. Ryan, do you agree?", es: "Es un gran acuerdo. Ryan, ¿estás de acuerdo?", ok: true },
            { t: "That sounds like a fair and realistic agreement. Ryan, are you on board? Let's write it down so you both remember it.", es: "Suena como un acuerdo justo y realista. Ryan, ¿te comprometes? Escribámoslo para que ambos lo recuerden.", ok: true },
            { t: "That's a great agreement. Ryan, are you agree?", es: "Es un gran acuerdo. Ryan, ¿estás de acuerdo?", ok: false,
              fix: "«Agree» es un verbo, no un adjetivo: «Do you agree?». Nunca «are you agree» ni «I am agree»." }
          ],
          clave: ["agreement", "agree", "write it down"],
          tip: "«Be on board» = estar de acuerdo y comprometido con un plan." },
        { bot: "Ryan says yes. Sorry for yelling, teacher.", es: "Ryan dice que sí. Perdón por gritar, profe.",
          opciones: [
            { t: "Thank you for apologizing. I'm proud of how you both handled this.", es: "Gracias por disculparte. Estoy orgulloso de cómo lo manejaron los dos.", ok: true },
            { t: "Thank you for apologizing, Jacob. Conflicts happen; what matters is how we solve them, and you both did it with maturity.", es: "Gracias por disculparte, Jacob. Los conflictos pasan; lo que importa es cómo los resolvemos, y ustedes dos lo hicieron con madurez.", ok: true },
            { t: "Don't worry, it doesn't matter.", es: "Tranquilo, no importa.", ok: false,
              fix: "Restarle importancia («it doesn't matter») desvaloriza la disculpa. Mejor reconocerla: «Thank you for apologizing»." }
          ],
          clave: ["apologizing", "proud", "handled"],
          tip: "Cierra reconociendo el proceso: así aprenden a resolver conflictos sin depender del adulto." }
      ],
      cierre: { bot: "Thanks for helping us talk, teacher. We'll try our new agreement.", es: "Gracias por ayudarnos a hablar, profe. Vamos a probar nuestro nuevo acuerdo." },
      vocab: [
        { t: "ground rules", es: "reglas básicas" },
        { t: "upset", es: "molesto, alterado" },
        { t: "affect", es: "afectar" },
        { t: "both sides", es: "las dos versiones" },
        { t: "go through", es: "atravesar, vivir (algo difícil)" },
        { t: "a fair point", es: "un punto justo" },
        { t: "be on board", es: "estar de acuerdo y comprometido" },
        { t: "handle", es: "manejar (una situación)" }
      ]
    },

    /* ───────────── 27 · B2 · Ajustes razonables ───────────── */
    {
      id: "en-27", titulo: "Ajustes razonables para Sam", nivel: "B2",
      tema: "Inclusión: ajustes razonables para un estudiante con discapacidad",
      contexto: "En un colegio bilingüe te reúnes con la madre de un estudiante de sexto con baja visión que llega a tu clase. Acuerdan ajustes razonables para que aprenda en igualdad de condiciones.",
      rol: "Mrs. Laura Bennett, madre de Sam, comprometida y algo preocupada",
      turnos: [
        { bot: "Thank you for meeting with me. I want to make sure Sam has what he needs in your class.", es: "Gracias por reunirse conmigo. Quiero asegurarme de que Sam tenga lo que necesita en su clase.",
          opciones: [
            { t: "Thank you for coming. I want the same thing.", es: "Gracias por venir. Yo quiero lo mismo.", ok: true },
            { t: "Thank you for coming. I want the same thing. Could you tell me about Sam's strengths and what helps him learn best?", es: "Gracias por venir. Yo quiero lo mismo. ¿Podría contarme sobre las fortalezas de Sam y qué le ayuda a aprender mejor?", ok: true },
            { t: "Thank you for coming. Tell me about the problems of Sam.", es: "Gracias por venir. Cuénteme sobre los problemas de Sam.", ok: false,
              fix: "Usa el posesivo («Sam's») y empieza por las fortalezas: «Tell me about Sam's strengths». Hablar primero de «problems» enmarca al estudiante desde el déficit." }
          ],
          clave: ["strengths", "helps him", "learn best"],
          tip: "Empezar por las fortalezas comunica confianza y un enfoque inclusivo." },
        { bot: "He's very curious and has a great memory. He has low vision, so he struggles with small print and with reading the board.", es: "Es muy curioso y tiene muy buena memoria. Tiene baja visión, así que se le dificulta la letra pequeña y leer el tablero.",
          opciones: [
            { t: "Thank you. I can print his materials in large print.", es: "Gracias. Puedo imprimirle los materiales en letra grande.", ok: true },
            { t: "That's really helpful. I can provide enlarged materials and share my slides in advance so he can zoom in on his tablet.", es: "Eso me ayuda mucho. Puedo darle materiales ampliados y compartir mis diapositivas con anticipación para que las amplíe en su tableta.", ok: true },
            { t: "That's helpful. I can give him the materials in big letter.", es: "Eso me ayuda. Puedo darle los materiales en letra grande.", ok: false,
              fix: "«Letra grande» se dice «large print» o «a larger font». «Letter» es carta o letra del alfabeto." }
          ],
          clave: ["large print", "enlarged", "in advance", "slides"],
          tip: "«Large print» = letra grande (formato). «Font size» = tamaño de fuente." },
        { bot: "That would make a big difference. Where should he sit?", es: "Eso haría una gran diferencia. ¿Dónde debería sentarse?",
          opciones: [
            { t: "Near the board, if he's comfortable there.", es: "Cerca del tablero, si se siente cómodo ahí.", ok: true },
            { t: "Ideally near the front, away from the glare of the window. But I'd like to ask Sam where he feels most comfortable.", es: "Idealmente adelante, lejos del reflejo de la ventana. Pero me gustaría preguntarle a Sam dónde se siente más cómodo.", ok: true },
            { t: "Near of the board, so he can see better.", es: "Cerca del tablero, para que vea mejor.", ok: false,
              fix: "«Cerca de» se dice «near» (sin «of») o «close to»: «near the board»." }
          ],
          clave: ["near", "front", "glare", "comfortable"],
          tip: "Involucra al estudiante en las decisiones sobre sus ajustes: él sabe mejor qué le funciona." },
        { bot: "What about tests? He needs more time to read.", es: "¿Y las evaluaciones? Necesita más tiempo para leer.",
          opciones: [
            { t: "He can have extra time on tests.", es: "Puede tener tiempo adicional en las evaluaciones.", ok: true },
            { t: "Of course. He'll get extended time and a large-print version, and the test will assess the same learning goals as everyone else's.", es: "Claro. Tendrá tiempo extendido y una versión en letra grande, y la prueba evaluará las mismas metas de aprendizaje que la de los demás.", ok: true },
            { t: "Of course. He can have more time in the exams, and an easier exam.", es: "Claro. Puede tener más tiempo en los exámenes y un examen más fácil.", ok: false,
              fix: "Un ajuste razonable cambia el acceso, no la exigencia: tiempo extendido sí, examen más fácil no. Además, se dice «on tests» o «on exams»." }
          ],
          clave: ["extended time", "large-print", "learning goals"],
          tip: "En EE. UU. se habla de «accommodations»; en Colombia, de «ajustes razonables». Eliminan barreras; no reducen metas." },
        { bot: "I'm worried that the other kids will treat him differently.", es: "Me preocupa que los otros niños lo traten diferente.",
          opciones: [
            { t: "I understand. I'll work on inclusion with the whole class.", es: "Entiendo. Voy a trabajar la inclusión con todo el grupo.", ok: true },
            { t: "That's a valid concern. I'll work with the whole class on empathy and respect, and I'll make sure Sam has roles where he can shine.", es: "Es una preocupación válida. Voy a trabajar con todo el grupo la empatía y el respeto, y me aseguraré de que Sam tenga roles donde pueda brillar.", ok: true },
            { t: "That's a valid concern. I'll talk with the class so they don't discriminate him.", es: "Es una preocupación válida. Hablaré con el grupo para que no lo discriminen.", ok: false,
              fix: "«Discriminate» exige «against»: «so they don't discriminate against him»." }
          ],
          clave: ["concern", "whole class", "respect", "shine"],
          tip: "«Discriminate against someone» = discriminar a alguien. La preposición es obligatoria." },
        { bot: "How will we know if these adjustments are working?", es: "¿Cómo vamos a saber si estos ajustes están funcionando?",
          opciones: [
            { t: "Let's meet again in a month to review them.", es: "Reunámonos de nuevo en un mes para revisarlos.", ok: true },
            { t: "Let's schedule a review meeting in four weeks. I'll keep notes on what's working, and we can adjust the plan together, including Sam's input.", es: "Programemos una reunión de seguimiento en cuatro semanas. Tomaré notas de lo que funciona y ajustaremos el plan juntos, teniendo en cuenta la opinión de Sam.", ok: true },
            { t: "Let's meet again in one month to revise if it's working.", es: "Reunámonos otra vez en un mes para revisar si está funcionando.", ok: false,
              fix: "«Revisar» (evaluar cómo va algo) se dice «review»: «to review whether it's working». «Revise» significa modificar o corregir un texto o plan." }
          ],
          clave: ["review", "adjust", "together", "notes"],
          tip: "Falso amigo parcial: «review» = revisar, evaluar; «revise» = modificar, corregir." },
        { bot: "This makes me feel so much better. Thank you for taking this seriously.", es: "Esto me hace sentir mucho mejor. Gracias por tomárselo en serio.",
          opciones: [
            { t: "Thank you for trusting us. We'll do our best.", es: "Gracias por confiar en nosotros. Haremos lo mejor posible.", ok: true },
            { t: "Thank you for trusting us. Sam belongs in this classroom, and we'll work together to make sure he thrives.", es: "Gracias por confiar en nosotros. Sam pertenece a este salón y trabajaremos juntos para que le vaya muy bien.", ok: true },
            { t: "Thank you. We will do the possible.", es: "Gracias. Haremos lo posible.", ok: false,
              fix: "«Haremos lo posible» se dice «We'll do our best» o «We'll do everything we can». «Do the possible» es un calco." }
          ],
          clave: ["trusting", "belongs", "thrives", "our best"],
          tip: "«Thrive» = prosperar, florecer. Es una meta más alta que solo «cope» (arreglárselas)." }
      ],
      cierre: { bot: "I'm so glad. I'll tell Sam tonight. See you at the review meeting.", es: "Me alegra mucho. Esta noche se lo cuento a Sam. Nos vemos en la reunión de seguimiento." },
      vocab: [
        { t: "reasonable accommodations", es: "ajustes razonables" },
        { t: "low vision", es: "baja visión" },
        { t: "large print", es: "letra grande" },
        { t: "in advance", es: "con anticipación" },
        { t: "glare", es: "reflejo, encandilamiento" },
        { t: "extended time", es: "tiempo extendido" },
        { t: "discriminate against", es: "discriminar a" },
        { t: "thrive", es: "prosperar, florecer" }
      ]
    },

    /* ───────────── 28 · B2 · Negociar un plazo con coordinación ───────────── */
    {
      id: "en-28", titulo: "Negocio un plazo con coordinación", nivel: "B2",
      tema: "Gestión: negociar un plazo con coordinación",
      contexto: "Coordinación pide el informe de planeación del período para el viernes, pero esa semana calificas exámenes y organizas la feria de ciencias. Negocias un plazo realista.",
      rol: "Mr. Andrew Collins, coordinador académico, exigente pero razonable",
      turnos: [
        { bot: "Hi. Just a reminder that the term planning reports are due this Friday.", es: "Hola. Solo un recordatorio: los informes de planeación del período se entregan este viernes.",
          opciones: [
            { t: "Thanks for the reminder. Can I talk to you about that?", es: "Gracias por el recordatorio. ¿Puedo hablar con usted sobre eso?", ok: true },
            { t: "Thanks for the reminder. Actually, I was hoping to talk to you about the deadline. Do you have five minutes?", es: "Gracias por el recordatorio. De hecho, esperaba hablar con usted sobre el plazo. ¿Tiene cinco minutos?", ok: true },
            { t: "Thanks. Actually, I wanted to talk you about the deadline.", es: "Gracias. De hecho, quería hablarle sobre el plazo.", ok: false,
              fix: "«Talk» necesita «to» antes de la persona: «talk to you about the deadline»." }
          ],
          clave: ["deadline", "talk to you", "reminder"],
          tip: "«I was hoping to…» suaviza una petición: suena menos directo que «I want to…»." },
        { bot: "Sure. What's going on?", es: "Claro. ¿Qué pasa?",
          opciones: [
            { t: "This week I have exams and the science fair.", es: "Esta semana tengo exámenes y la feria de ciencias.", ok: true },
            { t: "This week I'm grading final exams and coordinating the science fair, so I'm concerned the report won't get the attention it deserves.", es: "Esta semana estoy calificando exámenes finales y coordinando la feria de ciencias, así que me preocupa que el informe no reciba la atención que merece.", ok: true },
            { t: "This week I'm very occupied with exams and the science fair.", es: "Esta semana estoy muy ocupado con los exámenes y la feria de ciencias.", ok: false,
              fix: "Una persona ocupada está «busy». «Occupied» se usa para lugares: «The bathroom is occupied»." }
          ],
          clave: ["grading", "science fair", "concerned", "busy"],
          tip: "Falso amigo: «ocupado» (persona) = busy. Justifica la petición sin quejarte." },
        { bot: "I understand, but we need the reports to plan the next term.", es: "Entiendo, pero necesitamos los informes para planear el próximo período.",
          opciones: [
            { t: "Could I send it on Tuesday instead?", es: "¿Podría enviarlo el martes en lugar del viernes?", ok: true },
            { t: "I completely understand. Would it be possible to submit it by Tuesday? That way you'd still have it before the planning meeting.", es: "Lo entiendo perfectamente. ¿Sería posible entregarlo a más tardar el martes? Así lo tendría antes de la reunión de planeación.", ok: true },
            { t: "I understand. Would it be possible that I send it on Tuesday?", es: "Entiendo. ¿Sería posible que lo envíe el martes?", ok: false,
              fix: "En inglés no se usa «possible that I…» como en español. Di «Would it be possible to send it on Tuesday?» o «Could I send it on Tuesday?»." }
          ],
          clave: ["by Tuesday", "possible", "submit", "instead"],
          tip: "Al negociar, ofrece una alternativa concreta y muestra cómo protege el objetivo del otro." },
        { bot: "Tuesday is tight. The planning meeting is Wednesday morning.", es: "El martes queda muy justo. La reunión de planeación es el miércoles por la mañana.",
          opciones: [
            { t: "I see. What if I send part of it on Friday?", es: "Entiendo. ¿Y si envío una parte el viernes?", ok: true },
            { t: "I see. What if I send you the sections you need most on Friday, and the complete report on Monday?", es: "Entiendo. ¿Qué tal si le envío el viernes las secciones que más necesita y el informe completo el lunes?", ok: true },
            { t: "I see. What if I would send the main parts on Friday?", es: "Entiendo. ¿Y si enviara las partes principales el viernes?", ok: false,
              fix: "Después de «What if» se usa presente o pasado simple: «What if I send…?» o «What if I sent…?», no «would»." }
          ],
          clave: ["what if", "sections", "Monday", "complete"],
          tip: "«What if…?» introduce propuestas: What if we try…? What if I send…?" },
        { bot: "That could work. Which sections would you send first?", es: "Eso podría funcionar. ¿Qué secciones enviaría primero?",
          opciones: [
            { t: "The learning goals and the assessment plan.", es: "Las metas de aprendizaje y el plan de evaluación.", ok: true },
            { t: "The learning goals and the assessment calendar, since that's what the team needs to coordinate dates.", es: "Las metas de aprendizaje y el calendario de evaluaciones, ya que eso es lo que el equipo necesita para coordinar fechas.", ok: true },
            { t: "The goals of learning and the calendar of evaluations.", es: "Las metas de aprendizaje y el calendario de evaluaciones.", ok: false,
              fix: "Usa el sustantivo como modificador antes del otro: «learning goals», «assessment calendar». La estructura «X of Y» suena traducida." }
          ],
          clave: ["learning goals", "assessment", "calendar"],
          tip: "En inglés el sustantivo modificador va primero: learning goals, assessment plan, science fair." },
        { bot: "Okay, I can accept that. But I really need the full report by Monday at noon.", es: "Bueno, puedo aceptarlo. Pero de verdad necesito el informe completo a más tardar el lunes al mediodía.",
          opciones: [
            { t: "Agreed. Monday at noon.", es: "De acuerdo. El lunes al mediodía.", ok: true },
            { t: "Agreed. You'll have the key sections on Friday and the full report by Monday at noon. I'll confirm by email.", es: "De acuerdo. Tendrá las secciones clave el viernes y el informe completo a más tardar el lunes al mediodía. Lo confirmo por correo.", ok: true },
            { t: "Deal. I compromise to send it on Monday.", es: "Trato hecho. Me comprometo a enviarlo el lunes.", ok: false,
              fix: "«Comprometerse a» se dice «commit to + -ing» o «promise to»: «I promise to send it on Monday». «Compromise» significa ceder para llegar a un punto medio." }
          ],
          clave: ["agreed", "by Monday", "confirm", "email"],
          tip: "Falso amigo: «compromise» = punto medio, concesión. «Comprometerse» = commit to / promise." },
        { bot: "Thanks for being proactive about this instead of just missing the deadline.", es: "Gracias por anticiparte en lugar de simplemente incumplir el plazo.",
          opciones: [
            { t: "Thank you for being flexible.", es: "Gracias por ser flexible.", ok: true },
            { t: "Thank you for being flexible. I'd rather ask early than deliver something rushed.", es: "Gracias por ser flexible. Prefiero preguntar a tiempo que entregar algo hecho a la carrera.", ok: true },
            { t: "Thank you for being flexible. I prefer to ask before than to deliver something bad.", es: "Gracias por ser flexible. Prefiero preguntar antes que entregar algo malo.", ok: false,
              fix: "«Prefiero… que…» se dice «I'd rather… than…»: «I'd rather ask early than deliver something rushed». «Before than» no existe." }
          ],
          clave: ["flexible", "rather", "rushed"],
          tip: "«I'd rather + verbo base + than + verbo base»: I'd rather ask than guess." }
      ],
      cierre: { bot: "Fair enough. I'll look for your email on Friday. Good luck with the fair!", es: "Me parece justo. Espero su correo el viernes. ¡Suerte con la feria!" },
      vocab: [
        { t: "due", es: "con fecha de entrega" },
        { t: "deadline", es: "plazo, fecha límite" },
        { t: "busy", es: "ocupado (persona)" },
        { t: "submit", es: "entregar, presentar" },
        { t: "tight", es: "justo, apretado (tiempo)" },
        { t: "What if…?", es: "¿y si…?, ¿qué tal si…?" },
        { t: "commit to", es: "comprometerse a" },
        { t: "I'd rather… than…", es: "prefiero… que…" }
      ]
    },

    /* ───────────── 29 · C1 · Entrevista para intercambio docente ───────────── */
    {
      id: "en-29", titulo: "Entrevista para un intercambio docente", nivel: "C1",
      tema: "Desarrollo profesional: entrevista para intercambio docente",
      contexto: "Tienes una entrevista virtual con el comité de un programa de intercambio docente en EE. UU. Debes mostrar tu trayectoria, tu motivación y lo que aportarías.",
      rol: "Dr. Margaret Ellis, directora del programa de intercambio, formal y perspicaz",
      turnos: [
        { bot: "Thank you for joining us. To start, could you tell us a bit about yourself and your current role?", es: "Gracias por acompañarnos. Para empezar, ¿podría contarnos un poco sobre usted y su cargo actual?",
          opciones: [
            { t: "Of course. I'm a math teacher at a school in Cali, and I've been teaching for ten years.", es: "Claro. Soy docente de matemáticas en un colegio de Cali y llevo diez años enseñando.", ok: true },
            { t: "Certainly. I currently teach mathematics and financial literacy to secondary students in Cali, and over the past decade I've focused on making math relevant to their daily lives.", es: "Por supuesto. Actualmente enseño matemáticas y educación financiera a estudiantes de secundaria en Cali, y durante la última década me he enfocado en que las matemáticas tengan sentido en su vida diaria.", ok: true },
            { t: "Of course. Actually, I work as a math teacher in a school of Cali.", es: "Claro. Actualmente trabajo como docente de matemáticas en un colegio de Cali.", ok: false,
              fix: "«Actually» significa «en realidad»; «actualmente» es «currently». Además: «a school in Cali», no «of Cali»." }
          ],
          clave: ["currently", "teach", "students", "focused on"],
          tip: "Falso amigo clásico: «actually» = en realidad; «actualmente» = currently, at present." },
        { bot: "Why are you interested in this exchange program specifically?", es: "¿Por qué le interesa específicamente este programa de intercambio?",
          opciones: [
            { t: "I want to learn new strategies and bring them back to my school.", es: "Quiero aprender nuevas estrategias y llevarlas a mi colegio.", ok: true },
            { t: "I'm eager to see how project-based learning works in practice, and to bring back ideas I can adapt to our context, rather than simply adopt.", es: "Tengo muchas ganas de ver cómo funciona en la práctica el aprendizaje basado en proyectos y llevar ideas que pueda adaptar a nuestro contexto, en lugar de simplemente adoptarlas.", ok: true },
            { t: "Because I want to know new methodologies and to apply them in my school.", es: "Porque quiero conocer nuevas metodologías y aplicarlas en mi colegio.", ok: false,
              fix: "«Conocer» algo nuevo se dice «learn about» o «become familiar with». «Know» indica que ya lo conoces." }
          ],
          clave: ["adapt", "bring back", "context", "learn about"],
          tip: "«Adapt, not adopt»: muestra criterio pedagógico y conciencia del contexto." },
        { bot: "Tell us about a challenge you've faced in your teaching and how you handled it.", es: "Cuéntenos sobre un reto que haya enfrentado en su enseñanza y cómo lo manejó.",
          opciones: [
            { t: "Many students were afraid of math. I used real-life problems, and their attitude improved.", es: "Muchos estudiantes le tenían miedo a las matemáticas. Usé problemas de la vida real y su actitud mejoró.", ok: true },
            { t: "A few years ago, many of my students saw math as irrelevant. I redesigned my units around real budgeting problems, and both participation and confidence noticeably improved.", es: "Hace unos años, muchos de mis estudiantes veían las matemáticas como algo irrelevante. Rediseñé mis unidades en torno a problemas reales de presupuesto y tanto la participación como la confianza mejoraron notablemente.", ok: true },
            { t: "Many students had fear to math. I used real problems, and they improved a lot their attitude.", es: "Muchos estudiantes le tenían miedo a las matemáticas. Usé problemas reales y mejoraron mucho su actitud.", ok: false,
              fix: "«Tener miedo a» se dice «be afraid of». Y el adverbio no va entre el verbo y el objeto: «improved their attitude a lot»." }
          ],
          clave: ["afraid of", "redesigned", "improved", "confidence"],
          tip: "Responde con la estructura STAR: situación, tarea, acción y resultado." },
        { bot: "How would you contribute to our host school during your stay?", es: "¿Cómo contribuiría a nuestra escuela anfitriona durante su estancia?",
          opciones: [
            { t: "I could share how we teach financial literacy.", es: "Podría compartir cómo enseñamos educación financiera.", ok: true },
            { t: "I could lead workshops on how we integrate financial literacy into math, and help build a lasting partnership between our students through virtual exchanges.", es: "Podría dirigir talleres sobre cómo integramos la educación financiera en matemáticas y ayudar a construir una alianza duradera entre nuestros estudiantes mediante intercambios virtuales.", ok: true },
            { t: "I could give workshops and make a partnership that stays in the time.", es: "Podría dar talleres y crear una alianza que perdure en el tiempo.", ok: false,
              fix: "«Que perdure en el tiempo» se dice «lasting» o «long-term»: «a lasting partnership». «Stays in the time» es una traducción literal." }
          ],
          clave: ["workshops", "financial literacy", "lasting", "partnership"],
          tip: "En una entrevista, conecta tu aporte con beneficios concretos para la institución que te recibe." },
        { bot: "Living abroad can be demanding. How do you deal with unfamiliar situations?", es: "Vivir en el exterior puede ser exigente. ¿Cómo maneja las situaciones desconocidas?",
          opciones: [
            { t: "I stay open and ask a lot of questions.", es: "Me mantengo abierto y hago muchas preguntas.", ok: true },
            { t: "I try to approach unfamiliar situations with curiosity rather than judgment. I ask questions, observe before acting, and see mistakes as part of the learning process.", es: "Intento enfrentar lo desconocido con curiosidad y no con juicio. Hago preguntas, observo antes de actuar y veo los errores como parte del aprendizaje.", ok: true },
            { t: "I adapt me easily to new situations.", es: "Me adapto fácilmente a situaciones nuevas.", ok: false,
              fix: "«Adaptarse» no lleva «me» en inglés: «I adapt easily to new situations» (o «I adapt myself», menos común)." }
          ],
          clave: ["curiosity", "observe", "adapt", "mistakes"],
          tip: "Muchos verbos reflexivos en español no lo son en inglés: adaptarse = adapt; quejarse = complain." },
        { bot: "Upon your return, how would you share what you've learned with your colleagues?", es: "A su regreso, ¿cómo compartiría lo aprendido con sus colegas?",
          opciones: [
            { t: "I would organize workshops for my colleagues.", es: "Organizaría talleres para mis colegas.", ok: true },
            { t: "I'd set up a professional learning community at my school, where we'd pilot one or two practices, gather evidence, and decide together what's worth scaling.", es: "Crearía una comunidad de aprendizaje profesional en mi colegio, donde pilotearíamos una o dos prácticas, recogeríamos evidencia y decidiríamos juntos qué vale la pena ampliar.", ok: true },
            { t: "I would do capacitations for the other teachers.", es: "Haría capacitaciones para los demás docentes.", ok: false,
              fix: "«Capacitación» se dice «training» o «professional development». «Capacitation» no se usa en inglés." }
          ],
          clave: ["professional learning community", "pilot", "evidence", "training"],
          tip: "«Training» y «professional development» son los términos habituales para la capacitación docente." },
        { bot: "Finally, is there anything you'd like to ask us?", es: "Por último, ¿hay algo que quiera preguntarnos?",
          opciones: [
            { t: "Yes. How are participants matched with host schools?", es: "Sí. ¿Cómo se asigna a los participantes a las escuelas anfitrionas?", ok: true },
            { t: "Yes, thank you. Could you tell me how participants are matched with host schools, and what kind of support is available during the first weeks?", es: "Sí, gracias. ¿Podría contarme cómo se asigna a los participantes a las escuelas anfitrionas y qué tipo de apoyo hay durante las primeras semanas?", ok: true },
            { t: "Yes. How do you match the participants with the schools hosts?", es: "Sí. ¿Cómo asignan a los participantes a las escuelas anfitrionas?", ok: false,
              fix: "«Host» funciona como modificador: va antes del sustantivo y sin plural: «host schools»." }
          ],
          clave: ["matched", "host schools", "support"],
          tip: "Cierra con una pregunta bien pensada: demuestra interés genuino y preparación." }
      ],
      cierre: { bot: "Excellent questions. We'll address them in our follow-up email. Thank you for a thoughtful interview.", es: "Excelentes preguntas. Las responderemos en nuestro correo de seguimiento. Gracias por una entrevista tan reflexiva." },
      vocab: [
        { t: "currently", es: "actualmente" },
        { t: "be eager to", es: "tener muchas ganas de" },
        { t: "adapt rather than adopt", es: "adaptar en lugar de adoptar" },
        { t: "host school", es: "escuela anfitriona" },
        { t: "lasting partnership", es: "alianza duradera" },
        { t: "approach", es: "abordar, enfrentar" },
        { t: "professional learning community", es: "comunidad de aprendizaje profesional" },
        { t: "training", es: "capacitación" }
      ]
    },

    /* ───────────── 30 · C1 · Reunión de área sobre resultados de evaluación ───────────── */
    {
      id: "en-30", titulo: "Reunión de área: resultados de evaluación", nivel: "C1",
      tema: "Gestión académica: reunión de área sobre resultados de evaluación",
      contexto: "En la reunión del área de matemáticas de un colegio bilingüe analizan una evaluación diagnóstica. Un colega culpa a los estudiantes; tú propones un análisis basado en evidencia y un plan concreto.",
      rol: "Mr. Brian Foster, jefe del área de matemáticas, directo y algo escéptico",
      turnos: [
        { bot: "Let's get started. As you've seen, our geometry results were noticeably lower than in the other strands. Thoughts?", es: "Empecemos. Como han visto, los resultados en geometría fueron notoriamente más bajos que en los otros componentes. ¿Qué opinan?",
          opciones: [
            { t: "I think we should look at which questions students missed.", es: "Creo que deberíamos ver qué preguntas fallaron los estudiantes.", ok: true },
            { t: "Before drawing conclusions, I think we should break the results down by question and by grade, to see exactly where students struggled.", es: "Antes de sacar conclusiones, creo que deberíamos desglosar los resultados por pregunta y por grado, para ver exactamente dónde tuvieron dificultades los estudiantes.", ok: true },
            { t: "Before taking conclusions, we should analyze the results question by question.", es: "Antes de sacar conclusiones, deberíamos analizar los resultados pregunta por pregunta.", ok: false,
              fix: "«Sacar conclusiones» se dice «draw conclusions» (o «reach conclusions»), no «take conclusions»." }
          ],
          clave: ["break down", "draw conclusions", "struggled", "by question"],
          tip: "Colocaciones de análisis: draw conclusions, break down data, identify patterns, raise concerns." },
        { bot: "Honestly, I think the students just didn't study. This group isn't very motivated.", es: "Sinceramente, creo que los estudiantes simplemente no estudiaron. Este grupo no está muy motivado.",
          opciones: [
            { t: "Maybe, but let's check the data first.", es: "Puede ser, pero revisemos primero los datos.", ok: true },
            { t: "That may be part of it, but I'd be cautious about that explanation. If the gap appears across all groups, it may say more about our teaching than about them.", es: "Puede ser parte, pero yo sería prudente con esa explicación. Si la brecha aparece en todos los grupos, quizá dice más de nuestra enseñanza que de ellos.", ok: true },
            { t: "It's possible, but I don't think it's only the students fault.", es: "Es posible, pero no creo que sea solo culpa de los estudiantes.", ok: false,
              fix: "Falta el posesivo plural: «the students' fault» (apóstrofo después de la s)." }
          ],
          clave: ["cautious", "data", "teaching", "fault"],
          tip: "Para discrepar con respeto: «I see your point, but…», «I'd be cautious about…», «That may not be the whole story»." },
        { bot: "Fair enough. So what does the item analysis show?", es: "Me parece justo. Entonces, ¿qué muestra el análisis por ítem?",
          opciones: [
            { t: "Most errors were on questions with diagrams.", es: "La mayoría de los errores estuvo en las preguntas con diagramas.", ok: true },
            { t: "Most of the errors cluster around items that required interpreting diagrams, not just calculating. That suggests a visualization problem rather than a computational one.", es: "La mayoría de los errores se concentra en ítems que exigían interpretar diagramas, no solo calcular. Eso sugiere un problema de visualización más que de cálculo.", ok: true },
            { t: "Most of the errors are in questions where they had to interpret diagrams, what suggests a problem of visualization.", es: "La mayoría de los errores está en preguntas donde debían interpretar diagramas, lo que sugiere un problema de visualización.", ok: false,
              fix: "Para referirse a toda la idea anterior se usa «which», no «what»: «…diagrams, which suggests a visualization problem»." }
          ],
          clave: ["cluster", "diagrams", "suggests", "visualization"],
          tip: "«Which» puede retomar toda una idea anterior: «…, which suggests that…» (= lo cual sugiere)." },
        { bot: "Interesting. But we covered all those topics in class.", es: "Interesante. Pero vimos todos esos temas en clase.",
          opciones: [
            { t: "Yes, but maybe not with enough visual practice.", es: "Sí, pero quizás no con suficiente práctica visual.", ok: true },
            { t: "We did cover them, but covering a topic isn't the same as students mastering it. We may need more practice with diagrams and less with isolated procedures.", es: "Sí los vimos, pero ver un tema no es lo mismo que los estudiantes lo dominen. Quizás necesitamos más práctica con diagramas y menos con procedimientos aislados.", ok: true },
            { t: "We covered them, but to cover a topic is not the same that students master it.", es: "Los vimos, pero ver un tema no es lo mismo que los estudiantes lo dominen.", ok: false,
              fix: "«No es lo mismo que» se dice «isn't the same as», no «the same that». Para empezar con la acción, mejor el gerundio: «covering a topic»." }
          ],
          clave: ["cover", "master", "practice", "diagrams"],
          tip: "«Cover» (ver un tema) no equivale a «master» (dominarlo). Distinción clave en evaluación." },
        { bot: "So what do you propose, concretely?", es: "Entonces, ¿qué propone concretamente?",
          opciones: [
            { t: "Short daily practice with diagrams and regular quick checks.", es: "Práctica diaria corta con diagramas y verificaciones rápidas periódicas.", ok: true },
            { t: "I'd propose a short cycle: six weeks of brief daily warm-ups with diagrams, a common formative check every two weeks, and then we compare results before scaling anything.", es: "Propondría un ciclo corto: seis semanas de calentamientos diarios breves con diagramas, una verificación formativa común cada dos semanas, y luego comparar resultados antes de ampliar algo.", ok: true },
            { t: "I'd propose to do warm-ups with diagrams and to evaluate each two weeks.", es: "Propondría hacer calentamientos con diagramas y evaluar cada dos semanas.", ok: false,
              fix: "«Cada dos semanas» se dice «every two weeks»; «each» no se usa así con números. Además, suena más natural «I'd propose doing…»." }
          ],
          clave: ["warm-ups", "formative", "every two weeks", "compare"],
          tip: "Propón ciclos cortos de mejora (probar, medir, ajustar): convencen más que un plan enorme." },
        { bot: "And how do we keep this from becoming just more work for everyone?", es: "¿Y cómo evitamos que esto se convierta en más trabajo para todos?",
          opciones: [
            { t: "We can share the materials and divide the work.", es: "Podemos compartir los materiales y dividir el trabajo.", ok: true },
            { t: "We could build a shared bank of warm-ups, with each of us contributing a few, so nobody has to start from scratch.", es: "Podríamos construir un banco compartido de calentamientos, en el que cada uno aporte algunos, para que nadie tenga que empezar de cero.", ok: true },
            { t: "We can share the materials so nobody has to begin from zero.", es: "Podemos compartir los materiales para que nadie tenga que empezar de cero.", ok: false,
              fix: "«Empezar de cero» se dice «start from scratch». «Begin from zero» es un calco del español." }
          ],
          clave: ["shared bank", "contributing", "from scratch"],
          tip: "«Start from scratch» = empezar de cero. «Reinvent the wheel» = reinventar la rueda." },
        { bot: "All right, I'm convinced. Can you summarize what we've agreed on?", es: "Bueno, me convenciste. ¿Puedes resumir lo que acordamos?",
          opciones: [
            { t: "We'll analyze the items, practice with diagrams, and review the results in six weeks.", es: "Analizaremos los ítems, practicaremos con diagramas y revisaremos los resultados en seis semanas.", ok: true },
            { t: "Sure. To sum up: we'll share the item analysis by grade, launch daily diagram warm-ups from a shared bank, run a common formative check every two weeks, and review the evidence together in six weeks.", es: "Claro. En resumen: compartiremos el análisis por ítem y por grado, empezaremos calentamientos diarios con diagramas desde un banco compartido, aplicaremos una verificación formativa común cada dos semanas y revisaremos juntos la evidencia en seis semanas.", ok: true },
            { t: "Sure. In resume, we will analyze the items and practice with diagrams.", es: "Claro. En resumen, analizaremos los ítems y practicaremos con diagramas.", ok: false,
              fix: "«En resumen» se dice «To sum up», «In summary» o «In short». «Resume» significa reanudar (y «résumé», hoja de vida)." }
          ],
          clave: ["to sum up", "review", "evidence", "six weeks"],
          tip: "Falso amigo: «resume» = reanudar; «résumé» = hoja de vida. «En resumen» = to sum up." }
      ],
      cierre: { bot: "Perfect. Let's put that in the minutes. Thank you all; this was a productive meeting.", es: "Perfecto. Dejémoslo en el acta. Gracias a todos; fue una reunión productiva." },
      vocab: [
        { t: "strand", es: "componente (de un área)" },
        { t: "item analysis", es: "análisis por ítem" },
        { t: "draw conclusions", es: "sacar conclusiones" },
        { t: "break down", es: "desglosar" },
        { t: "cover vs. master", es: "ver un tema vs. dominarlo" },
        { t: "warm-up", es: "actividad de calentamiento" },
        { t: "start from scratch", es: "empezar de cero" },
        { t: "minutes", es: "acta (de una reunión)" }
      ]
    }
  ]
};
