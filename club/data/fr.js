/* Club de Diálogo SABI CENTEC · Francés (fr-FR) · 30 escenarios A1 → C1 */
window.SABI_CLUB = window.SABI_CLUB || {};
window.SABI_CLUB.fr = {
  escenarios: [
    /* ───────────── 1 · A1 · Saludo y presentación docente ───────────── */
    {
      id: "fr-01", titulo: "Me presento en el colegio aliado", nivel: "A1",
      tema: "Saludo y presentación docente",
      contexto: "Llegas a un colegio aliado en Lyon para una semana de intercambio. Te presentas a la directora y le cuentas quién eres.",
      rol: "Mme Claire Dubois, directora del colegio, cordial y elegante",
      turnos: [
        { bot: "Bonjour et bienvenue ! Je suis Claire Dubois, la directrice. Comment vous appelez-vous ?", es: "¡Buenos días y bienvenida! Soy Claire Dubois, la directora. ¿Cómo se llama usted?",
          opciones: [
            { t: "Bonjour, je m'appelle Luisa. Enchantée.", es: "Buenos días, me llamo Luisa. Mucho gusto.", ok: true },
            { t: "Bonjour, madame. Je m'appelle Luisa Gómez. Je suis ravie de vous rencontrer.", es: "Buenos días, señora. Me llamo Luisa Gómez. Estoy encantada de conocerla.", ok: true },
            { t: "Bonjour, je m'appelle Luisa. Enchantée de te connaître, Claire.", es: "Buenos días, me llamo Luisa. Encantada de conocerte, Claire.", ok: false,
              fix: "Con una directora a la que acabas de conocer se usa «vous» y el apellido: «Enchantée de vous rencontrer, madame». Tutear sería demasiado familiar." }
          ],
          clave: ["je m'appelle", "enchanté"],
          tip: "Si eres mujer escribe «enchantée»; si eres hombre, «enchanté». Se pronuncian igual: /ɑ̃ʃɑ̃te/." },
        { bot: "Enchantée. Vous venez d'où ?", es: "Mucho gusto. ¿De dónde viene?",
          opciones: [
            { t: "Je viens de Colombie, de Cali.", es: "Vengo de Colombia, de Cali.", ok: true },
            { t: "Je viens de Cali, une ville du sud-ouest de la Colombie.", es: "Vengo de Cali, una ciudad del suroccidente de Colombia.", ok: true },
            { t: "Je viens de la Colombie, de Cali.", es: "Vengo de Colombia, de Cali.", ok: false,
              fix: "Con países femeninos, después de «venir de» no va artículo: «Je viens de Colombie»." }
          ],
          clave: ["viens de Colombie", "viens de Cali"],
          tip: "Pero con el artículo sí se dice «la Colombie est belle». Solo desaparece tras «de» de origen." },
        { bot: "Cali ! Quelle chance. Et qu'est-ce que vous enseignez ?", es: "¡Cali! Qué suerte. ¿Y qué enseña usted?",
          opciones: [
            { t: "J'enseigne les mathématiques.", es: "Enseño matemáticas.", ok: true },
            { t: "J'enseigne les mathématiques et les sciences à des élèves de dix ans.", es: "Enseño matemáticas y ciencias a estudiantes de diez años.", ok: true },
            { t: "Je suis professeure de les mathématiques.", es: "Soy profesora de matemáticas.", ok: false,
              fix: "Después de «professeur(e) de» la asignatura va sin artículo: «Je suis professeure de mathématiques»." }
          ],
          clave: ["j'enseigne", "enseigne les"],
          tip: "Con el verbo «enseigner» la materia lleva artículo: «j'enseigne les maths». Con «professeur de», no." },
        { bot: "Très bien ! Vous êtes enseignante depuis combien de temps ?", es: "¡Muy bien! ¿Desde hace cuánto es docente?",
          opciones: [
            { t: "Depuis huit ans.", es: "Desde hace ocho años.", ok: true },
            { t: "J'enseigne depuis huit ans, et j'adore mon métier.", es: "Enseño desde hace ocho años y me encanta mi profesión.", ok: true },
            { t: "J'enseigne pour huit ans.", es: "Enseño desde hace ocho años.", ok: false,
              fix: "Para algo que empezó en el pasado y continúa se usa «depuis»: «J'enseigne depuis huit ans». «Pour» indica una duración prevista." }
          ],
          clave: ["depuis", "métier"],
          tip: "En francés se usa el presente con «depuis»: «j'enseigne depuis…», igual que «enseño desde hace…»." },
        { bot: "Et vos élèves, ils ont quel âge ?", es: "¿Y sus estudiantes qué edad tienen?",
          opciones: [
            { t: "Ils ont dix et onze ans.", es: "Tienen diez y once años.", ok: true },
            { t: "J'ai trente élèves ; ils ont entre dix et onze ans.", es: "Tengo treinta estudiantes; tienen entre diez y once años.", ok: true },
            { t: "Ils sont dix et onze ans.", es: "Tienen diez y once años.", ok: false,
              fix: "La edad se expresa con «avoir», como en español: «Ils ont dix ans», no «ils sont»." }
          ],
          clave: ["ils ont", "ont entre"],
          tip: "La palabra «ans» es obligatoria: «il a dix ans», nunca solo «il a dix»." },
        { bot: "Parfait. Vous avez des questions ?", es: "Perfecto. ¿Tiene alguna pregunta?",
          opciones: [
            { t: "Oui, où est la salle des professeurs ?", es: "Sí, ¿dónde está la sala de profesores?", ok: true },
            { t: "Oui, s'il vous plaît. Pourriez-vous me montrer la salle des professeurs et ma salle de classe ?", es: "Sí, por favor. ¿Podría mostrarme la sala de profesores y mi salón?", ok: true },
            { t: "Oui, où est la salle de les professeurs ?", es: "Sí, ¿dónde está la sala de los profesores?", ok: false,
              fix: "«De + les» se contrae siempre en «des»: «la salle des professeurs»." }
          ],
          clave: ["salle des", "pourriez-vous"],
          tip: "«Pourriez-vous…?» es la forma más cortés de pedir algo. En Francia la cortesía formal es muy valorada." }
      ],
      cierre: { bot: "Bien sûr, suivez-moi. Bienvenue dans notre établissement !", es: "Claro, sígame. ¡Bienvenida a nuestro colegio!" },
      vocab: [
        { t: "la directrice", es: "la directora, rectora" },
        { t: "enchanté(e)", es: "mucho gusto" },
        { t: "venir de", es: "venir de, ser de" },
        { t: "enseigner", es: "enseñar" },
        { t: "depuis", es: "desde hace" },
        { t: "avoir … ans", es: "tener … años" },
        { t: "la salle des professeurs", es: "la sala de profesores" }
      ]
    },

    /* ───────────── 2 · A2 · Instrucciones de clase ───────────── */
    {
      id: "fr-02", titulo: "Instrucciones claras en el aula", nivel: "A2",
      tema: "Instrucciones de clase (langage de classe)",
      contexto: "Diriges una clase de francés en cuarto de primaria. Das instrucciones sencillas al grupo y resuelves las preguntas de un niño.",
      rol: "Léo, niño de 9 años (CM1), curioso y un poco distraído",
      turnos: [
        { bot: "Bonjour, maîtresse ! On commence maintenant ?", es: "¡Buenos días, profe! ¿Ya empezamos?",
          opciones: [
            { t: "Bonjour, Léo. Oui, assieds-toi, s'il te plaît.", es: "Buenos días, Léo. Sí, siéntate, por favor.", ok: true },
            { t: "Bonjour à tous ! Oui, asseyez-vous et sortez vos cahiers, s'il vous plaît.", es: "¡Buenos días a todos! Sí, siéntense y saquen sus cuadernos, por favor.", ok: true },
            { t: "Bonjour. Oui, assis-toi, s'il te plaît.", es: "Buenos días. Sí, siéntate, por favor.", ok: false,
              fix: "El imperativo de «s'asseoir» es «assieds-toi» (tú) o «asseyez-vous» (ustedes). «Assis» es el participio." }
          ],
          clave: ["assieds-toi", "asseyez-vous"],
          tip: "Con un niño se usa «tu»; con el grupo, «vous». Por eso: «s'il te plaît» / «s'il vous plaît»." },
        { bot: "D'accord ! On travaille sur quelle page ?", es: "¡Listo! ¿En qué página trabajamos?",
          opciones: [
            { t: "Ouvrez vos livres à la page vingt.", es: "Abran sus libros en la página veinte.", ok: true },
            { t: "Prenez vos livres et ouvrez-les à la page vingt, s'il vous plaît.", es: "Tomen sus libros y ábranlos en la página veinte, por favor.", ok: true },
            { t: "Ouvrez vos livres dans la page vingt.", es: "Abran sus libros en la página veinte.", ok: false,
              fix: "Con páginas se usa «à»: «à la page vingt», no «dans la page»." }
          ],
          clave: ["à la page", "prenez"],
          tip: "El imperativo de «vous» es igual al presente sin sujeto: «vous ouvrez» → «Ouvrez»." },
        { bot: "Maîtresse, j'ai oublié mon livre...", es: "Profe, se me olvidó el libro…",
          opciones: [
            { t: "Ce n'est pas grave. Regarde avec ton voisin.", es: "No pasa nada. Mira con tu compañero.", ok: true },
            { t: "Pas de problème. Tu peux suivre avec Inès aujourd'hui, mais apporte-le demain.", es: "No hay problema. Hoy puedes seguir con Inès, pero tráelo mañana.", ok: true },
            { t: "Pas de problème. Regarde avec ton compagnon.", es: "No hay problema. Mira con tu compañero.", ok: false,
              fix: "«Compañero de clase» es «camarade» o «voisin» (el de al lado). «Compagnon» suele significar pareja o acompañante." }
          ],
          clave: ["voisin", "pas grave", "suivre", "pas de problème"],
          tip: "«Ce n'est pas grave» = no pasa nada. Calma al niño y mantiene el ritmo de la clase." },
        { bot: "Merci. Et maintenant, on fait quoi ?", es: "Gracias. ¿Y ahora qué hacemos?",
          opciones: [
            { t: "Lisez le texte et répondez aux questions.", es: "Lean el texto y respondan las preguntas.", ok: true },
            { t: "Lisez l'histoire en silence, puis répondez aux questions une à cinq dans votre cahier.", es: "Lean el cuento en silencio y luego respondan las preguntas de la uno a la cinco en el cuaderno.", ok: true },
            { t: "Lisez le texte et répondez les questions.", es: "Lean el texto y respondan las preguntas.", ok: false,
              fix: "«Répondre» lleva siempre «à»: «répondre aux questions» (à + les = aux)." }
          ],
          clave: ["aux questions", "en silence"],
          tip: "Secuenciadores útiles: «d'abord», «puis», «ensuite», «enfin». Ordenan la tarea para los niños." },
        { bot: "Maîtresse, comment on dit « borrador » en français ?", es: "Profe, ¿cómo se dice «borrador» en francés?",
          opciones: [
            { t: "On dit « gomme ».", es: "Se dice «gomme».", ok: true },
            { t: "Bonne question ! On dit « une gomme ». Tu peux répéter ?", es: "¡Buena pregunta! Se dice «une gomme». ¿Puedes repetirlo?", ok: true },
            { t: "On dit « un gomme ».", es: "Se dice «un borrador».", ok: false,
              fix: "«Gomme» es femenino: «une gomme». El género no siempre coincide con el español; apréndelo siempre con su artículo." }
          ],
          clave: ["« gomme »", "une gomme"],
          tip: "«On dit…» = se dice… El pronombre «on» es muy frecuente en el francés oral." },
        { bot: "J'ai fini ! Je peux aller aux toilettes ?", es: "¡Terminé! ¿Puedo ir al baño?",
          opciones: [
            { t: "Oui, vas-y. Reviens vite.", es: "Sí, ve. Vuelve rápido.", ok: true },
            { t: "Bravo ! Oui, tu peux y aller, mais reviens dans deux minutes.", es: "¡Muy bien! Sí, puedes ir, pero vuelve en dos minutos.", ok: true },
            { t: "Oui, mais retourne vite.", es: "Sí, pero vuelve rápido.", ok: false,
              fix: "Para volver al lugar donde estás tú se usa «revenir»: «Reviens vite». «Retourner» es volver a otro lugar." }
          ],
          clave: ["reviens", "vas-y", "y aller"],
          tip: "«Vas-y» lleva -s ante «y» para facilitar la pronunciación: /va.zi/." },
        { bot: "Je suis revenu ! Qu'est-ce qu'on fait maintenant ?", es: "¡Ya volví! ¿Qué hacemos ahora?",
          opciones: [
            { t: "Maintenant, travaillez par deux et comparez vos réponses.", es: "Ahora trabajen en parejas y comparen sus respuestas.", ok: true },
            { t: "Maintenant, mettez-vous par deux, comparez vos réponses et levez la main si vous avez une question.", es: "Ahora hagan parejas, comparen sus respuestas y levanten la mano si tienen una pregunta.", ok: true },
            { t: "Maintenant, travaillez en couples et comparez vos réponses.", es: "Ahora trabajen en parejas y comparen sus respuestas.", ok: false,
              fix: "Trabajar en parejas es «travailler par deux» o «en binômes». «Couple» se usa para parejas sentimentales." }
          ],
          clave: ["par deux", "levez la main"],
          tip: "Acompaña cada consigna con un gesto: muestra dos dedos para «par deux» y levanta la mano al decir «levez la main»." }
      ],
      cierre: { bot: "D'accord, maîtresse ! C'est trop bien !", es: "¡Listo, profe! ¡Esto está buenísimo!" },
      vocab: [
        { t: "asseyez-vous", es: "siéntense" },
        { t: "sortez vos cahiers", es: "saquen sus cuadernos" },
        { t: "à la page…", es: "en la página…" },
        { t: "le voisin, la voisine", es: "el compañero de al lado" },
        { t: "une gomme", es: "un borrador" },
        { t: "revenir", es: "volver" },
        { t: "par deux", es: "en parejas" },
        { t: "lever la main", es: "levantar la mano" }
      ]
    },

    /* ───────────── 3 · A2 · Viaje / vida cotidiana ───────────── */
    {
      id: "fr-03", titulo: "Llegada al hotel en Marsella", nivel: "A2",
      tema: "Viaje y vida cotidiana",
      contexto: "Llegas de noche a Marsella para una pasantía docente. Haces el registro en el hotel y preguntas cómo llegar al colegio al día siguiente.",
      rol: "M. Julien Roux, recepcionista del hotel, amable y eficiente",
      turnos: [
        { bot: "Bonsoir et bienvenue à l'hôtel du Vieux-Port. Que puis-je faire pour vous ?", es: "Buenas noches y le damos la bienvenida al hotel del Puerto Viejo. ¿En qué puedo servirle?",
          opciones: [
            { t: "Bonsoir, j'ai une réservation.", es: "Buenas noches, tengo una reserva.", ok: true },
            { t: "Bonsoir. J'ai réservé une chambre au nom de Rodríguez.", es: "Buenas noches. Reservé una habitación a nombre de Rodríguez.", ok: true },
            { t: "Bonsoir, j'ai une réserve au nom de Rodríguez.", es: "Buenas noches, tengo una reserva a nombre de Rodríguez.", ok: false,
              fix: "La reserva de hotel es «une réservation». «Une réserve» es una provisión o una reserva natural." }
          ],
          clave: ["une réservation", "j'ai réservé"],
          tip: "Después de las 18 h se saluda con «Bonsoir». «Au nom de…» = a nombre de…" },
        { bot: "Un instant... Oui, trois nuits. Votre passeport, s'il vous plaît ?", es: "Un momento… Sí, tres noches. ¿Su pasaporte, por favor?",
          opciones: [
            { t: "Oui, le voici.", es: "Sí, aquí está.", ok: true },
            { t: "Bien sûr, voici mon passeport.", es: "Claro, aquí tiene mi pasaporte.", ok: true },
            { t: "Oui, ici vous avez.", es: "Sí, aquí tiene.", ok: false,
              fix: "«Aquí tiene» no se traduce palabra por palabra. Se dice «Voici» o «Tenez»: «Le voici»." }
          ],
          clave: ["voici", "passeport"],
          tip: "«Le voici» = aquí está (él). El pronombre va antes de «voici»: «la voici», «les voici»." },
        { bot: "Merci. Vous préférez une chambre côté mer ou côté cour ?", es: "Gracias. ¿Prefiere una habitación con vista al mar o hacia el patio interior?",
          opciones: [
            { t: "Côté mer, s'il vous plaît.", es: "Con vista al mar, por favor.", ok: true },
            { t: "Côté cour, s'il vous plaît ; je préfère une chambre calme.", es: "Hacia el patio, por favor; prefiero una habitación tranquila.", ok: true },
            { t: "Côté mer, s'il vous plaît. Je suis très fatiguée de le voyage.", es: "Con vista al mar, por favor. Estoy muy cansada del viaje.", ok: false,
              fix: "«De + le» se contrae obligatoriamente en «du»: «fatigué(e) du voyage»." }
          ],
          clave: ["côté", "s'il vous plaît"],
          tip: "Contracciones obligatorias: de + le = du, de + les = des, à + le = au, à + les = aux." },
        { bot: "C'est noté. Voici votre carte : chambre 412, au quatrième étage. Vous avez des questions ?", es: "Anotado. Aquí está su tarjeta: habitación 412, en el cuarto piso (quinto nivel, contando la planta baja). ¿Tiene alguna pregunta?",
          opciones: [
            { t: "À quelle heure est le petit-déjeuner ?", es: "¿A qué hora es el desayuno?", ok: true },
            { t: "Oui : le petit-déjeuner est servi à quelle heure, et le wifi est gratuit ?", es: "Sí: ¿a qué hora sirven el desayuno y el wifi es gratis?", ok: true },
            { t: "Oui. Le déjeuner est à quelle heure ?", es: "Sí. ¿A qué hora es el desayuno?", ok: false,
              fix: "En Francia «le déjeuner» es el almuerzo del mediodía. El desayuno es «le petit-déjeuner»." }
          ],
          clave: ["petit-déjeuner", "wifi"],
          tip: "En Francia, el «étage» se cuenta desde el primer piso sobre la calle: el «rez-de-chaussée» es la planta baja." },
        { bot: "Le petit-déjeuner est servi de 7 h à 10 h, et le wifi est gratuit. Autre chose ?", es: "El desayuno se sirve de 7 a 10, y el wifi es gratis. ¿Algo más?",
          opciones: [
            { t: "Comment je peux aller au collège Jean-Moulin demain ?", es: "¿Cómo puedo ir mañana al colegio Jean-Moulin?", ok: true },
            { t: "Oui. Quel est le meilleur moyen d'aller au collège Jean-Moulin demain matin ?", es: "Sí. ¿Cuál es la mejor forma de llegar al colegio Jean-Moulin mañana por la mañana?", ok: true },
            { t: "Oui. Je peux aller au collège Jean-Moulin en pied ?", es: "Sí. ¿Puedo ir a pie al colegio Jean-Moulin?", ok: false,
              fix: "«A pie» es «à pied», no «en pied». Con vehículos sí va «en»: en bus, en voiture." }
          ],
          clave: ["comment je peux", "meilleur moyen"],
          tip: "En Francia el «collège» es la secundaria básica (11 a 15 años), no la universidad." },
        { bot: "C'est à vingt minutes en bus ou à trente minutes à pied. L'arrêt est juste devant l'hôtel. Vous voulez un plan du quartier ?", es: "Queda a veinte minutos en bus o a treinta a pie. La parada está justo enfrente del hotel. ¿Quiere un mapa del barrio?",
          opciones: [
            { t: "Oui, merci beaucoup.", es: "Sí, muchas gracias.", ok: true },
            { t: "Volontiers, c'est très gentil. Merci pour tout !", es: "Con gusto, es muy amable. ¡Gracias por todo!", ok: true },
            { t: "Oui, merci. Vous êtes très aimable. Merci pour tous.", es: "Sí, gracias. Es muy amable. Gracias por todo.", ok: false,
              fix: "«Por todo» se dice «pour tout» (singular, invariable aquí), no «pour tous»." }
          ],
          clave: ["merci beaucoup", "merci pour tout"],
          tip: "«Volontiers» es una forma elegante de aceptar un ofrecimiento: «con mucho gusto»." }
      ],
      cierre: { bot: "Avec plaisir. Bonne soirée et bon séjour à Marseille !", es: "Con gusto. ¡Buena noche y que disfrute su estadía en Marsella!" },
      vocab: [
        { t: "une réservation", es: "una reserva" },
        { t: "voici", es: "aquí está, aquí tiene" },
        { t: "côté mer", es: "con vista al mar" },
        { t: "l'étage", es: "el piso (nivel)" },
        { t: "le petit-déjeuner", es: "el desayuno" },
        { t: "à pied", es: "a pie" },
        { t: "l'arrêt de bus", es: "la parada del bus" },
        { t: "bon séjour", es: "buena estadía" }
      ]
    },

    /* ───────────── 4 · B1 · Sala de profesores ───────────── */
    {
      id: "fr-04", titulo: "Café en la sala de profesores", nivel: "B1",
      tema: "Sala de profesores",
      contexto: "Llevas una semana en un colegio de Toulouse con un programa de intercambio. En el descanso conversas con un colega que te propone pasar al «tú».",
      rol: "M. Antoine Lefèvre, profesor de Historia y Geografía, veterano y bromista",
      turnos: [
        { bot: "Alors, cette première semaine, ça se passe bien ? Vous survivez ?", es: "Entonces, ¿cómo va esta primera semana? ¿Sobrevive?",
          opciones: [
            { t: "Oui, ça se passe bien, merci. Tout le monde est très sympa.", es: "Sí, va bien, gracias. Todos son muy amables.", ok: true },
            { t: "Plutôt bien, merci ! C'est intense, mais l'équipe est vraiment accueillante.", es: "¡Bastante bien, gracias! Es intenso, pero el equipo es muy acogedor.", ok: true },
            { t: "Oui, merci. Tout le monde sont très gentils.", es: "Sí, gracias. Todos son muy amables.", ok: false,
              fix: "«Tout le monde» es singular en francés: «tout le monde est gentil», aunque en español digamos «todos son»." }
          ],
          clave: ["ça se passe", "bien"],
          tip: "«Sympa» (de «sympathique») es muy usado en conversación informal: amable, buena gente." },
        { bot: "Tant mieux. Un café ? Je vous préviens, il est horrible.", es: "Qué bien. ¿Un café? Le advierto: es horrible.",
          opciones: [
            { t: "Volontiers, merci.", es: "Con gusto, gracias.", ok: true },
            { t: "Avec plaisir, je prends le risque ! En Colombie, on est assez exigeants en matière de café.", es: "¡Con mucho gusto, me arriesgo! En Colombia somos bastante exigentes con el café.", ok: true },
            { t: "Oui, merci. Mais je le préfère sans sucre et avec de la lait.", es: "Sí, gracias. Pero lo prefiero sin azúcar y con leche.", ok: false,
              fix: "«Lait» es masculino en francés: «du lait» (de + le = du)." }
          ],
          clave: ["volontiers", "avec plaisir"],
          tip: "Falsos géneros frecuentes: le lait, le sang, le nez (masculinos); la mer, la dent (femeninos)." },
        { bot: "Ha ! Au fait, en Colombie, les classes sont différentes ?", es: "¡Ja! A propósito, ¿en Colombia las clases son diferentes?",
          opciones: [
            { t: "Oui, les classes sont plus grandes. On a souvent trente-cinq élèves.", es: "Sí, los grupos son más grandes. A menudo tenemos treinta y cinco estudiantes.", ok: true },
            { t: "Assez, oui. Nos classes sont plus chargées, environ trente-cinq élèves, donc on fait beaucoup de travail en groupe.", es: "Bastante, sí. Nuestros grupos son más numerosos, unos treinta y cinco estudiantes, así que trabajamos mucho en grupo.", ok: true },
            { t: "Oui, les classes sont plus grandes, avec trente-cinq étudiants.", es: "Sí, los grupos son más grandes, con treinta y cinco estudiantes.", ok: false,
              fix: "En el colegio se dice «élèves». «Étudiants» se reserva para la universidad." }
          ],
          clave: ["élèves", "plus chargées"],
          tip: "«Une classe chargée» = un grupo con muchos estudiantes. «On» reemplaza a «nous» en el habla cotidiana." },
        { bot: "Trente-cinq ! Et comment vous faites ?", es: "¡Treinta y cinco! ¿Y cómo hace?",
          opciones: [
            { t: "On utilise des routines claires et des rôles dans chaque groupe.", es: "Usamos rutinas claras y roles en cada grupo.", ok: true },
            { t: "Surtout grâce aux routines : chaque groupe a des rôles, comme un responsable et un gardien du temps.", es: "Sobre todo gracias a las rutinas: cada grupo tiene roles, como un líder y un guardián del tiempo.", ok: true },
            { t: "Ça dépend du groupe, mais en général on use des routines.", es: "Depende del grupo, pero en general usamos rutinas.", ok: false,
              fix: "«Usar» es «utiliser». «User» significa desgastar." }
          ],
          clave: ["utilise", "grâce aux routines", "rôles"],
          tip: "«Grâce à» introduce una causa positiva; «à cause de», una negativa." },
        { bot: "Malin. Moi, j'ai du mal avec mes quatrièmes cette année, ils sont très bavards. Au fait, on peut se tutoyer ?", es: "Muy astuto. Yo estoy batallando con mis estudiantes de octavo este año, hablan muchísimo. A propósito, ¿nos podemos tutear?",
          opciones: [
            { t: "Bien sûr ! Tu pourrais essayer de leur donner des rôles.", es: "¡Claro! Podrías intentar darles roles.", ok: true },
            { t: "Avec plaisir ! Essaie peut-être un minuteur et des rôles, ça les aide à rester concentrés.", es: "¡Con gusto! Prueba tal vez un temporizador y roles, eso les ayuda a mantenerse concentrados.", ok: true },
            { t: "Bien sûr ! Vous pourriez essayer des rôles.", es: "¡Claro! Podría intentar con roles.", ok: false,
              fix: "Si aceptas tutear, sé coherente y pasa al «tu»: «Tu pourrais essayer…». Seguir con «vous» sonaría distante." }
          ],
          clave: ["tu pourrais", "essaie"],
          tip: "En Francia, quien propone el «tu» suele ser la persona de más edad o antigüedad. Aceptar es lo habitual." },
        { bot: "Bonne idée, je vais tester. Dis, vendredi, on va manger une pizza après les cours avec quelques collègues. Tu viens ?", es: "Buena idea, voy a probar. Oye, el viernes vamos a comer pizza después de clases con algunos colegas. ¿Vienes?",
          opciones: [
            { t: "Oui, avec plaisir !", es: "¡Sí, con gusto!", ok: true },
            { t: "Super, je viens volontiers ! Vous partez à quelle heure ?", es: "¡Genial, voy con mucho gusto! ¿A qué hora salen?", ok: true },
            { t: "Oui ! Je suis très excitée de découvrir la ville.", es: "¡Sí! Estoy muy emocionada de conocer la ciudad.", ok: false,
              fix: "«Excité(e)» puede tener connotación sexual o de agitación. Di «J'ai hâte de découvrir la ville» o «Je suis ravie»." }
          ],
          clave: ["avec plaisir", "volontiers"],
          tip: "«J'ai hâte de…» = tengo muchas ganas de… Es la forma natural de expresar entusiasmo." }
      ],
      cierre: { bot: "Génial ! On part vers dix-sept heures. À vendredi !", es: "¡Genial! Salimos hacia las cinco de la tarde. ¡Nos vemos el viernes!" },
      vocab: [
        { t: "ça se passe bien", es: "va bien" },
        { t: "volontiers", es: "con gusto" },
        { t: "je vous préviens", es: "le advierto" },
        { t: "une classe chargée", es: "un grupo numeroso" },
        { t: "avoir du mal avec", es: "tener dificultades con" },
        { t: "bavard", es: "conversador, que habla mucho" },
        { t: "se tutoyer", es: "tutearse" },
        { t: "avoir hâte de", es: "tener muchas ganas de" }
      ]
    },

    /* ───────────── 5 · B1 · Reunión con familia ───────────── */
    {
      id: "fr-05", titulo: "Reunión con una madre preocupada", nivel: "B1",
      tema: "Reunión con familia",
      contexto: "En un colegio francés recibes a la madre de un estudiante de sexto cuyas notas de matemáticas bajaron. Quieren acordar un plan juntos.",
      rol: "Mme Nathalie Martin, madre de Hugo (6e), preocupada y algo ansiosa",
      turnos: [
        { bot: "Bonjour, merci de me recevoir. Je suis la mère d'Hugo. Je suis un peu inquiète pour ses notes.", es: "Buenos días, gracias por recibirme. Soy la mamá de Hugo. Estoy un poco preocupada por sus notas.",
          opciones: [
            { t: "Bonjour, madame Martin. Merci d'être venue. Asseyez-vous, je vous en prie.", es: "Buenos días, señora Martin. Gracias por venir. Siéntese, por favor.", ok: true },
            { t: "Bonjour, madame. Je suis contente que vous soyez venue ; voyons ensemble comment aider Hugo.", es: "Buenos días, señora. Me alegra que haya venido; veamos juntos cómo ayudar a Hugo.", ok: true },
            { t: "Bonjour, madame Martin. Merci pour venir.", es: "Buenos días, señora Martin. Gracias por venir.", ok: false,
              fix: "Tras «merci» con un verbo se usa «de» + infinitivo pasado: «Merci d'être venue». «Merci pour» va con sustantivos: «merci pour votre visite»." }
          ],
          clave: ["d'être venue", "soyez venue"],
          tip: "«Je vous en prie» es muy cortés. Empieza con calidez y un objetivo común: ayudar a Hugo." },
        { bot: "Sa moyenne en maths a baissé ce trimestre. Qu'est-ce qui se passe ?", es: "Su promedio en matemáticas bajó este trimestre. ¿Qué está pasando?",
          opciones: [
            { t: "Il ne rend pas certains devoirs.", es: "No entrega algunas tareas.", ok: true },
            { t: "Ses résultats aux contrôles sont corrects, mais il n'a pas rendu plusieurs devoirs ces derniers temps.", es: "Sus resultados en las evaluaciones están bien, pero últimamente no ha entregado varias tareas.", ok: true },
            { t: "Il ne fait pas ses tâches.", es: "No hace sus tareas.", ok: false,
              fix: "La tarea escolar es «les devoirs». «Une tâche» es una labor u oficio en general." }
          ],
          clave: ["devoirs", "rend"],
          tip: "«Rendre un devoir» = entregar una tarea. «Un contrôle» = una evaluación escrita en clase." },
        { bot: "Je ne savais pas. Il me dit toujours qu'il a tout fini au collège.", es: "No lo sabía. Él siempre me dice que terminó todo en el colegio.",
          opciones: [
            { t: "Je comprends. Regardons son agenda ensemble.", es: "Entiendo. Revisemos juntos su agenda.", ok: true },
            { t: "Je vois. On pourrait travailler ensemble : vous vérifiez son agenda chaque soir.", es: "Ya veo. Podríamos trabajar en equipo: usted revisa su agenda cada noche.", ok: true },
            { t: "Je comprends. Il doit écrire ses devoirs dans la agenda.", es: "Entiendo. Él debe anotar sus tareas en la agenda.", ok: false,
              fix: "«Agenda» es masculino en francés, y ante vocal hay elisión: «dans l'agenda», «son agenda»." }
          ],
          clave: ["son agenda", "ensemble"],
          tip: "Evita culpar. «Ensemble» y «on» transmiten corresponsabilidad entre familia y colegio." },
        { bot: "D'accord. Mais je travaille tard le mardi et le jeudi.", es: "De acuerdo. Pero trabajo hasta tarde los martes y los jueves.",
          opciones: [
            { t: "Pas de souci. Je peux vous envoyer un e-mail chaque semaine.", es: "No se preocupe. Puedo enviarle un correo cada semana.", ok: true },
            { t: "Aucun problème. Je vous enverrai un court message chaque vendredi avec le travail à rendre.", es: "Ningún problema. Le enviaré un mensaje corto cada viernes con los trabajos por entregar.", ok: true },
            { t: "Pas de problème. Je peux vous envoyer un e-mail chaque vendredi avec les devoirs pendants.", es: "No hay problema. Puedo enviarle un correo cada viernes con las tareas pendientes.", ok: false,
              fix: "Calco del español: «pendant» significa «durante». Las tareas pendientes son «les devoirs à rendre» o «les devoirs en retard»." }
          ],
          clave: ["chaque semaine", "à rendre"],
          tip: "Para días que se repiten se usa «le» + día en singular: «le mardi» = los martes." },
        { bot: "Ça m'aiderait beaucoup. Il y a autre chose que je devrais savoir ?", es: "Eso me ayudaría mucho. ¿Hay algo más que deba saber?",
          opciones: [
            { t: "Oui : il participe beaucoup en classe. Il est très créatif.", es: "Sí: participa mucho en clase. Es muy creativo.", ok: true },
            { t: "Oui, et c'est positif : Hugo est l'un des élèves les plus créatifs de la classe, et ses camarades le respectent beaucoup.", es: "Sí, y es positivo: Hugo es uno de los estudiantes más creativos del grupo y sus compañeros lo respetan mucho.", ok: true },
            { t: "Oui, il est un élève très créatif et respecté.", es: "Sí, es un estudiante muy creativo y respetado.", ok: false,
              fix: "Con un sustantivo precedido de artículo se usa «c'est»: «C'est un élève très créatif». «Il est» va con adjetivos: «il est créatif»." }
          ],
          clave: ["participe", "l'un des"],
          tip: "Cierra la parte difícil con una fortaleza real del estudiante: la familia escucha mejor el plan." },
        { bot: "Ça fait plaisir à entendre. Alors, on fait comment ?", es: "Qué alegría escuchar eso. Entonces, ¿cómo hacemos?",
          opciones: [
            { t: "Hugo note ses devoirs, et je vous écris chaque vendredi.", es: "Hugo anota sus tareas y yo le escribo cada viernes.", ok: true },
            { t: "Mettons-nous d'accord sur trois points : il note ses devoirs, je vous écris le vendredi, et on se revoit dans un mois.", es: "Acordemos tres puntos: él anota sus tareas, yo le escribo los viernes y nos volvemos a ver en un mes.", ok: true },
            { t: "On se revoit en un mois pour voir ses progrès.", es: "Nos volvemos a ver en un mes para revisar sus avances.", ok: false,
              fix: "«En un mes» (a partir de ahora) se dice «dans un mois». «En un mois» indica cuánto tarda algo en hacerse." }
          ],
          clave: ["devoirs", "vendredi"],
          tip: "Resume acuerdos concretos y con fecha. «Se mettre d'accord sur» = ponerse de acuerdo en." }
      ],
      cierre: { bot: "Merci beaucoup, je suis rassurée. À dans un mois !", es: "Muchas gracias, ya estoy más tranquila. ¡Hasta dentro de un mes!" },
      vocab: [
        { t: "la moyenne", es: "el promedio" },
        { t: "le trimestre", es: "el trimestre, periodo" },
        { t: "rendre un devoir", es: "entregar una tarea" },
        { t: "un contrôle", es: "una evaluación escrita" },
        { t: "l'agenda (m.)", es: "la agenda escolar" },
        { t: "se mettre d'accord", es: "ponerse de acuerdo" },
        { t: "dans un mois", es: "dentro de un mes" },
        { t: "rassuré(e)", es: "tranquilo(a), aliviado(a)" }
      ]
    },

    /* ───────────── 6 · B1 · Estudiante que no participa ───────────── */
    {
      id: "fr-06", titulo: "El estudiante que no participa", nivel: "B1",
      tema: "Manejo de un estudiante que no participa",
      contexto: "Después de clase hablas a solas con un estudiante que nunca participa. Quieres entender qué le pasa y acordar un primer paso.",
      rol: "Nathan, estudiante de noveno (3e), tímido y callado",
      turnos: [
        { bot: "Vous vouliez me parler ? J'ai fait une bêtise ?", es: "¿Quería hablar conmigo? ¿Hice algo malo?",
          opciones: [
            { t: "Non, pas du tout. Je voulais juste discuter.", es: "No, para nada. Solo quería conversar.", ok: true },
            { t: "Pas du tout, Nathan. Je voulais simplement savoir comment ça se passe pour toi en cours.", es: "Para nada, Nathan. Solo quería saber cómo te va en clase.", ok: true },
            { t: "Non, non. Ne sois pas préoccupé, je veux juste parler.", es: "No, no. No te preocupes, solo quiero hablar.", ok: false,
              fix: "Calco del español. Lo natural es «Ne t'inquiète pas». «Préoccupé» existe, pero suena forzado en esta situación." }
          ],
          clave: ["pas du tout", "voulais"],
          tip: "El estudiante te trata de «vous» y tú a él de «tu»: es lo normal en el colegio francés." },
        { bot: "Ah. Euh... ça va, je crois.", es: "Ah. Eh… estoy bien, creo.",
          opciones: [
            { t: "J'ai remarqué que tu parles peu en classe.", es: "Noté que hablas poco en clase.", ok: true },
            { t: "J'ai remarqué que tu es très discret en classe. Tout va bien ?", es: "He notado que eres muy reservado en clase. ¿Todo está bien?", ok: true },
            { t: "J'ai remarqué que tu ne participes pas jamais.", es: "He notado que nunca participas.", ok: false,
              fix: "«Jamais» reemplaza a «pas»; no se combinan: «tu ne participes jamais»." }
          ],
          clave: ["parles peu", "discret"],
          tip: "Describe lo que observas sin juzgar. «J'ai remarqué que…» abre la conversación mejor que «Pourquoi tu ne… ?»." },
        { bot: "Je stresse. Et si je dis une bêtise et que tout le monde rigole ?", es: "Me estreso. ¿Y si digo una tontería y todos se ríen?",
          opciones: [
            { t: "C'est normal. Les erreurs nous aident à apprendre.", es: "Es normal. Los errores nos ayudan a aprender.", ok: true },
            { t: "Je comprends. Tout le monde se trompe, moi aussi. Dans cette classe, l'erreur fait partie de l'apprentissage.", es: "Te entiendo. Todos nos equivocamos, yo también. En esta clase, el error es parte del aprendizaje.", ok: true },
            { t: "Je comprends. C'est normal, tu ne dois pas avoir de la peur.", es: "Te entiendo. Es normal, no debes tener miedo.", ok: false,
              fix: "«Avoir peur» es una expresión fija sin artículo: «tu ne dois pas avoir peur»." }
          ],
          clave: ["erreur", "apprendre", "apprentissage"],
          tip: "Expresiones sin artículo con «avoir»: avoir peur, avoir faim, avoir raison, avoir besoin." },
        { bot: "Peut-être... mais parler devant tout le monde, ça me fait peur.", es: "Puede ser… pero hablar delante de todos me da miedo.",
          opciones: [
            { t: "Et si tu partageais d'abord avec un camarade ?", es: "¿Y si primero lo compartes con un compañero?", ok: true },
            { t: "Je te propose quelque chose : tu en parles d'abord avec un camarade, puis tu partages son idée avec la classe.", es: "Te propongo algo: primero lo hablas con un compañero y luego compartes su idea con la clase.", ok: true },
            { t: "Je te propose parler d'abord avec un camarade.", es: "Te propongo hablar primero con un compañero.", ok: false,
              fix: "«Proposer» pide «de» antes del infinitivo: «Je te propose de parler d'abord avec un camarade». En español no va preposición; en francés, sí." }
          ],
          clave: ["et si tu", "propose quelque chose"],
          tip: "«Et si + imperfecto ?» = ¿y si…? Es una forma suave de sugerir: «Et si on essayait ?»." },
        { bot: "Ça, ça a l'air plus facile. Je pense que je peux le faire.", es: "Eso sí parece más fácil. Creo que puedo hacerlo.",
          opciones: [
            { t: "Super. Je te donnerai aussi du temps pour réfléchir.", es: "Súper. También te daré tiempo para pensar.", ok: true },
            { t: "Parfait ! Et je donnerai à tout le monde une minute pour noter ses idées avant de parler.", es: "¡Perfecto! Y les daré a todos un minuto para anotar sus ideas antes de hablar.", ok: true },
            { t: "Parfait. Avant de parler, je te laisserai un minute pour réfléchir.", es: "Perfecto. Antes de hablar, te dejaré un minuto para pensar.", ok: false,
              fix: "«Minute» es femenino en francés: «une minute»." }
          ],
          clave: ["du temps", "une minute"],
          tip: "El tiempo de espera (temps de réflexion) de unos segundos mejora la calidad de las respuestas." },
        { bot: "Merci. Je peux vous demander un truc ? Vous pensez vraiment que je suis bon dans cette matière ?", es: "Gracias. ¿Le puedo preguntar algo? ¿De verdad cree que soy bueno en esta materia?",
          opciones: [
            { t: "Oui, tes travaux écrits sont excellents.", es: "Sí, tus trabajos escritos son excelentes.", ok: true },
            { t: "Absolument. Tes rédactions montrent une vraie réflexion, et j'aimerais que la classe entende tes idées.", es: "Totalmente. Tus redacciones muestran una reflexión profunda, y me gustaría que la clase escuchara tus ideas.", ok: true },
            { t: "Bien sûr ! Tes rédactions sont excellentes, je te le assure.", es: "¡Claro! Tus redacciones son excelentes, te lo aseguro.", ok: false,
              fix: "Ante vocal, «le» se elide obligatoriamente: «je te l'assure»." }
          ],
          clave: ["oui", "excellents", "absolument", "vraie réflexion"],
          tip: "Elogia con evidencia concreta («tes rédactions montrent…»): motiva más que un simple «tu es intelligent»." }
      ],
      cierre: { bot: "D'accord. J'essaierai demain. Merci d'avoir pris le temps.", es: "Bueno. Mañana lo intento. Gracias por tomarse el tiempo." },
      vocab: [
        { t: "faire une bêtise", es: "hacer algo malo, una tontería" },
        { t: "discret, discrète", es: "reservado(a), callado(a)" },
        { t: "se tromper", es: "equivocarse" },
        { t: "rigoler", es: "reírse (coloquial)" },
        { t: "proposer de + infinitif", es: "proponer + infinitivo" },
        { t: "réfléchir", es: "pensar, reflexionar" },
        { t: "une rédaction", es: "una redacción, composición" }
      ]
    },

    /* ───────────── 7 · B1 · Videollamada con colega extranjero ───────────── */
    {
      id: "fr-07", titulo: "Videollamada con una colega de Burdeos", nivel: "B1",
      tema: "Entrevista o videollamada con colega extranjero",
      contexto: "Tienes una videollamada con una docente de Burdeos para planear un intercambio virtual entre sus estudiantes y los tuyos.",
      rol: "Mme Sophie Bernard, profesora de francés en Burdeos, entusiasta y organizada",
      turnos: [
        { bot: "Bonjour ! Vous m'entendez bien ? Ma connexion est un peu lente.", es: "¡Buenos días! ¿Me escucha bien? Mi conexión está un poco lenta.",
          opciones: [
            { t: "Oui, je vous entends bien.", es: "Sí, la escucho bien.", ok: true },
            { t: "Oui, parfaitement. Merci d'avoir pris le temps d'organiser cet appel.", es: "Sí, perfectamente. Gracias por sacar tiempo para organizar esta llamada.", ok: true },
            { t: "Oui, je vous écoute bien.", es: "Sí, la escucho bien.", ok: false,
              fix: "Percibir el sonido es «entendre». «Écouter» es escuchar con atención: «Je vous entends bien»." }
          ],
          clave: ["je vous entends", "parfaitement"],
          tip: "Ojo: «entendre» = oír; «comprendre» = entender. «Je vous entends» no significa «le entiendo»." },
        { bot: "Super ! Alors, parlez-moi un peu de vos élèves.", es: "¡Súper! Entonces, hábleme un poco de sus estudiantes.",
          opciones: [
            { t: "J'ai des élèves de douze et treize ans. Ils sont très curieux.", es: "Tengo estudiantes de doce y trece años. Son muy curiosos.", ok: true },
            { t: "J'ai deux classes de septième année, l'équivalent de la cinquième chez vous. Ils sont curieux et très motivés.", es: "Tengo dos grupos de séptimo, el equivalente a la cinquième de ustedes. Son curiosos y muy motivados.", ok: true },
            { t: "Actuellement, j'ai deux groupes de septième ; mes élèves ont douze et treize années.", es: "Actualmente tengo dos grupos de séptimo; mis estudiantes tienen doce y trece años.", ok: false,
              fix: "La edad se dice siempre con «ans»: «ils ont douze et treize ans». «Année» es el año como período: «une bonne année», «la septième année»." }
          ],
          clave: ["ans", "ils sont", "classes"],
          tip: "Los cursos franceses cuentan al revés: la «sixième» es el primer año del collège y la «troisième», el último." },
        { bot: "Parfait, les miens ont le même âge ! Vous avez quel projet en tête ?", es: "¡Perfecto, los míos tienen la misma edad! ¿Qué proyecto tiene en mente?",
          opciones: [
            { t: "Ils pourraient échanger des vidéos sur leurs villes.", es: "Podrían intercambiar videos sobre sus ciudades.", ok: true },
            { t: "Je pensais à de courtes vidéos sur leurs villes ; ensuite, ils se poseraient des questions.", es: "Pensaba en videos cortos sobre sus ciudades; luego se harían preguntas entre ellos.", ok: true },
            { t: "Je pensais en un projet de vidéos sur leurs villes.", es: "Pensaba en un proyecto de videos sobre sus ciudades.", ok: false,
              fix: "«Pensar en» se dice «penser à»: «Je pensais à un projet vidéo»." }
          ],
          clave: ["pourraient échanger", "pensais à"],
          tip: "El condicional («ils pourraient», «ils se poseraient») suaviza las propuestas y suena colaborativo." },
        { bot: "J'adore ! On se réunit en ligne à quelle fréquence ?", es: "¡Me encanta! ¿Cada cuánto nos reunimos en línea?",
          opciones: [
            { t: "Une fois par mois, ça me semble bien.", es: "Una vez al mes me parece bien.", ok: true },
            { t: "Pourquoi pas une fois par mois ? Nos calendriers sont très différents, ça paraît réaliste.", es: "¿Por qué no una vez al mes? Nuestros calendarios son muy distintos; parece realista.", ok: true },
            { t: "Chaque quinze jours, ce serait bien.", es: "Cada quince días estaría bien.", ok: false,
              fix: "«Cada quince días» se dice «tous les quinze jours». «Chaque» no se usa así con números." }
          ],
          clave: ["fois", "mois"],
          tip: "Frecuencias: une fois par semaine, deux fois par mois, tous les quinze jours, tous les jours." },
        { bot: "Bonne idée. Et avec le décalage horaire, quelle heure vous conviendrait ?", es: "Buena idea. Y con la diferencia horaria, ¿qué hora le convendría?",
          opciones: [
            { t: "Le matin, chez moi, vers huit heures.", es: "En la mañana, en mi país, hacia las ocho.", ok: true },
            { t: "Le mardi matin, vers huit heures chez moi. Ça vous conviendrait ?", es: "Los martes en la mañana, hacia las ocho en mi país. ¿Le convendría?", ok: true },
            { t: "Le matin, à les huit heures plus ou moins.", es: "En la mañana, a eso de las ocho.", ok: false,
              fix: "La hora aproximada es «vers huit heures» o «à huit heures environ». «À les» siempre se contrae en «aux», y con horas no va artículo." }
          ],
          clave: ["vers huit", "chez moi"],
          tip: "«Chez moi» = en mi casa o en mi país. Muy útil para hablar de husos horarios." },
        { bot: "Ici, ce sera l'après-midi, c'est parfait pour mes élèves. Vous pouvez m'envoyer un e-mail pour confirmer ?", es: "Aquí será por la tarde, es perfecto para mis estudiantes. ¿Me puede enviar un correo para confirmar?",
          opciones: [
            { t: "Bien sûr, je vous l'envoie aujourd'hui.", es: "Claro, se lo envío hoy.", ok: true },
            { t: "Avec plaisir. Je vous enverrai un e-mail cet après-midi avec un brouillon du projet.", es: "Con gusto. Le enviaré un correo esta tarde con un borrador del proyecto.", ok: true },
            { t: "Bien sûr, je vous envoie un e-mail ce après-midi.", es: "Claro, le envío un correo esta tarde.", ok: false,
              fix: "Ante sustantivo masculino que empieza por vocal o h muda, «ce» pasa a «cet»: «cet après-midi»." }
          ],
          clave: ["bien sûr", "l'envoie", "plaisir", "enverrai"],
          tip: "Orden de pronombres: «je vous l'envoie» (a usted + lo). Primero «vous», luego «le»." }
      ],
      cierre: { bot: "Parfait ! Ça va être génial. À bientôt !", es: "¡Perfecto! Va a quedar genial. ¡Hasta pronto!" },
      vocab: [
        { t: "entendre", es: "oír" },
        { t: "écouter", es: "escuchar" },
        { t: "avoir en tête", es: "tener en mente" },
        { t: "penser à", es: "pensar en" },
        { t: "tous les quinze jours", es: "cada quince días" },
        { t: "le décalage horaire", es: "la diferencia horaria" },
        { t: "convenir", es: "convenir, servir" },
        { t: "un brouillon", es: "un borrador" }
      ]
    },

    /* ───────────── 8 · B2 · Dar retroalimentación ───────────── */
    {
      id: "fr-08", titulo: "Retroalimentación a un practicante", nivel: "B2",
      tema: "Dar retroalimentación",
      contexto: "Observaste la clase de ciencias de un docente practicante. Le das retroalimentación constructiva: fortalezas, un aspecto a mejorar y una meta.",
      rol: "Thomas Girard, practicante de 24 años, entusiasta pero inseguro",
      turnos: [
        { bot: "Alors... comment ça s'est passé ? Dites-moi franchement, je peux l'entendre.", es: "Entonces… ¿cómo me fue? Dígamelo con franqueza, lo puedo aceptar.",
          opciones: [
            { t: "Dans l'ensemble, c'était une bonne séance. Commençons par ce qui a bien marché.", es: "En general, fue una buena sesión. Empecemos por lo que funcionó bien.", ok: true },
            { t: "Globalement, c'était très réussi. Commençons par vos points forts, puis on verra un axe d'amélioration.", es: "En general, salió muy bien. Empecemos por sus fortalezas y luego veremos un aspecto por mejorar.", ok: true },
            { t: "En général, c'était une bonne classe. Commençons par le positif.", es: "En general, fue una buena clase. Empecemos por lo positivo.", ok: false,
              fix: "La sesión de clase es «un cours» o «une séance». «La classe» designa el grupo de estudiantes o el aula." }
          ],
          clave: ["séance", "bien marché", "points forts", "axe"],
          tip: "Empieza por las fortalezas: la persona queda más abierta a escuchar lo que debe mejorar." },
        { bot: "Ouf, ça me rassure. Qu'est-ce qui a bien fonctionné, selon vous ?", es: "Uf, qué alivio. Según usted, ¿qué funcionó bien?",
          opciones: [
            { t: "Votre accroche au début était excellente. Les élèves étaient impliqués.", es: "Su gancho al inicio fue excelente. Los estudiantes estaban involucrados.", ok: true },
            { t: "L'expérience du début était une excellente accroche : les élèves ont été captivés dès la première minute.", es: "El experimento del inicio fue un gancho excelente: los estudiantes quedaron cautivados desde el primer minuto.", ok: true },
            { t: "L'expérience était très intéressante ; les élèves ont fait beaucoup d'attention.", es: "El experimento fue muy interesante; los estudiantes prestaron mucha atención.", ok: false,
              fix: "«Faire attention» no admite «beaucoup de». Di «ils ont été très attentifs» o «ils ont fait très attention»." }
          ],
          clave: ["accroche", "impliqués", "captivés"],
          tip: "Sé específico: nombra la acción concreta («l'expérience du début») para que pueda repetirla." },
        { bot: "Merci, j'y ai beaucoup travaillé. Et qu'est-ce que je dois améliorer ?", es: "Gracias, le dediqué mucho trabajo. ¿Y qué debo mejorar?",
          opciones: [
            { t: "Vos consignes pourraient être plus claires. Certains élèves étaient perdus.", es: "Sus instrucciones podrían ser más claras. Algunos estudiantes estaban perdidos.", ok: true },
            { t: "Je travaillerais sur les consignes : quelques élèves ne savaient pas quoi faire, vous pourriez donc modéliser la première étape.", es: "Yo trabajaría en las instrucciones: algunos estudiantes no sabían qué hacer, así que podría modelar el primer paso.", ok: true },
            { t: "Vous devez améliorer les instructions ; beaucoup d'élèves n'ont pas compris rien.", es: "Debe mejorar las instrucciones; muchos estudiantes no entendieron nada.", ok: false,
              fix: "«Rien» reemplaza a «pas»; no se combinan: «ils n'ont rien compris». En el aula se habla de «consignes» más que de «instructions»." }
          ],
          clave: ["consignes", "claires"],
          tip: "El condicional («je travaillerais», «vous pourriez») suaviza la crítica y suena a apoyo." },
        { bot: "Oui, j'ai remarqué. Vous avez des stratégies concrètes ?", es: "Sí, lo noté. ¿Tiene estrategias concretas?",
          opciones: [
            { t: "Donnez les consignes une étape à la fois.", es: "Dé las instrucciones un paso a la vez.", ok: true },
            { t: "Une stratégie : donner les consignes par petites étapes, puis demander à un élève de les reformuler pour la classe.", es: "Una estrategia: dar las instrucciones por pasos pequeños y luego pedirle a un estudiante que las reformule para la clase.", ok: true },
            { t: "Vous pourriez vérifier s'ils ont compris en les demandant de répéter.", es: "Podría verificar si entendieron pidiéndoles que repitan.", ok: false,
              fix: "«Demander» rige «à» + persona: «demander à quelqu'un de…». Por eso el pronombre es «leur»: «en leur demandant de répéter»." }
          ],
          clave: ["consignes", "étape"],
          tip: "Pedir que un estudiante reformule la consigna comprueba la comprensión antes de empezar la tarea." },
        { bot: "C'est logique. Pour être honnête, j'ai aussi eu l'impression de manquer de temps à la fin.", es: "Tiene lógica. Para ser honesto, también sentí que me faltó tiempo al final.",
          opciones: [
            { t: "Oui, la conclusion était précipitée. Un minuteur pourrait aider.", es: "Sí, el cierre fue apresurado. Un temporizador podría ayudar.", ok: true },
            { t: "C'est vrai. Vous pourriez prévoir cinq minutes de synthèse et utiliser un minuteur visible pour ne pas la sauter.", es: "Es cierto. Podría planear cinco minutos de síntesis y usar un temporizador visible para no saltársela.", ok: true },
            { t: "Oui, c'est vrai. Vous avez perdu le temps pendant l'expérience.", es: "Sí, es cierto. Perdió tiempo durante el experimento.", ok: false,
              fix: "Se dice «perdre du temps» (partitivo): «Vous avez perdu du temps». «Perdre le temps» no es natural." }
          ],
          clave: ["minuteur", "synthèse"],
          tip: "«Manquer de temps» = faltar tiempo. «La synthèse» = el cierre en el que se consolida lo aprendido." },
        { bot: "Bonne idée. Alors, quel est mon objectif principal pour la semaine prochaine ?", es: "Buena idea. Entonces, ¿cuál es mi meta principal para la próxima semana?",
          opciones: [
            { t: "Modéliser la première étape et vérifier la compréhension avant le travail en groupe.", es: "Modelar el primer paso y verificar la comprensión antes del trabajo en grupo.", ok: true },
            { t: "Votre objectif est double : modéliser clairement la première étape et préserver les cinq dernières minutes pour la synthèse.", es: "Su meta es doble: modelar con claridad el primer paso y preservar los últimos cinco minutos para la síntesis.", ok: true },
            { t: "L'objectif, c'est que vous donnez des consignes plus claires.", es: "La meta es que dé instrucciones más claras.", ok: false,
              fix: "Tras «l'objectif est que» se usa subjuntivo: «que vous donniez». Más simple: «L'objectif, c'est de donner des consignes plus claires»." }
          ],
          clave: ["modéliser", "première étape"],
          tip: "Una o dos metas concretas y observables funcionan mejor que una lista larga de mejoras." },
        { bot: "Compris. Merci pour votre bienveillance. Vous pourrez revenir m'observer la semaine prochaine ?", es: "Entendido. Gracias por su amabilidad. ¿Podrá volver a observarme la próxima semana?",
          opciones: [
            { t: "Bien sûr. Je viendrai jeudi.", es: "Claro. Vendré el jueves.", ok: true },
            { t: "Avec plaisir. J'assisterai à votre cours de jeudi et on fera un débriefing juste après.", es: "Con gusto. Asistiré a su clase del jueves y la comentaremos justo después.", ok: true },
            { t: "Bien sûr. J'assisterai votre cours jeudi.", es: "Claro. Asistiré a su clase el jueves.", ok: false,
              fix: "«Asistir a» un evento es «assister à»: «J'assisterai à votre cours». Sin «à», «assister quelqu'un» significa ayudarlo." }
          ],
          clave: ["viendrai", "assisterai à"],
          tip: "«La bienveillance» (amabilidad, buena voluntad) es un valor central en la pedagogía francesa actual." }
      ],
      cierre: { bot: "Parfait. Je vous remercie vraiment. À jeudi !", es: "Perfecto. De verdad se lo agradezco. ¡Hasta el jueves!" },
      vocab: [
        { t: "une séance", es: "una sesión de clase" },
        { t: "un axe d'amélioration", es: "un aspecto por mejorar" },
        { t: "une accroche", es: "un gancho, actividad de enganche" },
        { t: "les consignes", es: "las instrucciones de una tarea" },
        { t: "modéliser", es: "modelar, mostrar cómo se hace" },
        { t: "la synthèse", es: "el cierre, la síntesis" },
        { t: "perdre du temps", es: "perder tiempo" },
        { t: "la bienveillance", es: "la amabilidad, buena voluntad" }
      ]
    },

    /* ───────────── 9 · B2 · Conferencia o capacitación ───────────── */
    {
      id: "fr-09", titulo: "Pregunta a una ponente en un congreso", nivel: "B2",
      tema: "Conferencia o capacitación",
      contexto: "En un congreso en París, al terminar una conferencia sobre evaluación formativa, te acercas a la ponente para hacerle una pregunta y establecer contacto.",
      rol: "Dra. Hélène Moreau, ponente experta en evaluación formativa, cercana y precisa",
      turnos: [
        { bot: "Bonjour ! La séance vous a plu ?", es: "¡Buenos días! ¿Le gustó la sesión?",
          opciones: [
            { t: "Oui, beaucoup. C'était très concret.", es: "Sí, mucho. Fue muy concreta.", ok: true },
            { t: "Énormément. Vos exemples de tickets de sortie étaient vraiment concrets.", es: "Muchísimo. Sus ejemplos de tickets de salida fueron muy concretos.", ok: true },
            { t: "Oui ! Votre conférence a été très intéressant.", es: "¡Sí! Su conferencia fue muy interesante.", ok: false,
              fix: "«Conférence» es femenino, así que el adjetivo concuerda: «très intéressante»." }
          ],
          clave: ["concret", "beaucoup", "énormément"],
          tip: "«Ça vous a plu ?» = ¿le gustó? El verbo «plaire» funciona como «gustar»: la cosa es el sujeto." },
        { bot: "Merci ! Vous venez d'où ?", es: "¡Gracias! ¿De dónde viene?",
          opciones: [
            { t: "Je viens de Colombie. J'enseigne dans un établissement à Cali.", es: "Vengo de Colombia. Enseño en un colegio de Cali.", ok: true },
            { t: "De Cali, en Colombie. Je coordonne un programme de formation des enseignants dans une école privée.", es: "De Cali, en Colombia. Coordino un programa de formación docente en un colegio privado.", ok: true },
            { t: "De Colombie. Je travaille comme professeur à Cali depuis il y a dix ans.", es: "De Colombia. Trabajo como profesor en Cali desde hace diez años.", ok: false,
              fix: "«Desde hace» se dice solo «depuis»: «depuis dix ans». «Il y a» significa «hace» (pasado puntual): «il y a dix ans»." }
          ],
          clave: ["j'enseigne", "je coordonne"],
          tip: "«Un établissement» (scolaire) es el término formal para cualquier institución educativa." },
        { bot: "Formidable ! Qu'est-ce qui vous a semblé le plus pertinent pour votre contexte ?", es: "¡Formidable! ¿Qué le pareció lo más pertinente para su contexto?",
          opciones: [
            { t: "L'idée de vérifier rapidement la compréhension à chaque cours.", es: "La idea de verificar rápidamente la comprensión en cada clase.", ok: true },
            { t: "Sans hésiter, les vérifications rapides de la compréhension. Avec des classes chargées, ça peut tout changer.", es: "Sin dudarlo, las verificaciones rápidas de comprensión. Con grupos numerosos, eso puede cambiarlo todo.", ok: true },
            { t: "La partie sur la rétroalimentation, parce que nos classes sont très chargées.", es: "La parte sobre la retroalimentación, porque nuestros grupos son muy numerosos.", ok: false,
              fix: "«Retroalimentación» se dice «le retour», «la rétroaction» o «le feedback». «Rétroalimentation» no existe en francés." }
          ],
          clave: ["compréhension", "vérifier"],
          tip: "«Ça peut tout changer» = eso puede cambiarlo todo. Útil para argumentar con énfasis." },
        { bot: "Les classes chargées, c'est un vrai défi. Vous avez une question ?", es: "Los grupos numerosos son un verdadero reto. ¿Tiene alguna pregunta?",
          opciones: [
            { t: "Oui. Comment donner un retour rapide à quarante élèves ?", es: "Sí. ¿Cómo dar retroalimentación rápida a cuarenta estudiantes?", ok: true },
            { t: "Oui : comment adapteriez-vous les tickets de sortie à des classes de quarante sans surcharger les enseignants ?", es: "Sí: ¿cómo adaptaría los tickets de salida a grupos de cuarenta sin sobrecargar a los docentes?", ok: true },
            { t: "Oui. Comment nous pouvons donner un retour à quarante élèves sans passer des heures ?", es: "Sí. ¿Cómo podemos dar retroalimentación a cuarenta estudiantes sin pasar horas?", ok: false,
              fix: "En una pregunta formal con «comment» se invierte el sujeto: «Comment pouvons-nous…?», o se usa «Comment est-ce qu'on peut…?»." }
          ],
          clave: ["comment donner", "adapteriez-vous"],
          tip: "En un congreso, la inversión («adapteriez-vous») suena más formal y elegante que la entonación sola." },
        { bot: "Excellente question. Je conseille de trier les tickets en trois piles au lieu de les noter, puis de regrouper les élèves pour la séance suivante.", es: "Excelente pregunta. Aconsejo clasificar los tickets en tres montones en lugar de calificarlos, y luego agrupar a los estudiantes para la sesión siguiente.",
          opciones: [
            { t: "C'est très utile. Donc vous ne les notez pas du tout ?", es: "Muy útil. ¿Entonces no los califica para nada?", ok: true },
            { t: "C'est brillant. L'objectif est donc d'ajuster l'enseignement plutôt que de mettre une note ?", es: "Brillante. ¿Entonces el objetivo es ajustar la enseñanza más que poner una nota?", ok: true },
            { t: "Très utile. Donc vous ne les qualifiez pas ?", es: "Muy útil. ¿Entonces no los califica?", ok: false,
              fix: "«Calificar» trabajos es «noter» o «évaluer». «Qualifier» significa describir o calificar de (adjetivo): «qualifier de difficile»." }
          ],
          clave: ["notez pas", "mettre une note"],
          tip: "Parafrasear («L'objectif est donc… ?») demuestra escucha activa y confirma que entendiste." },
        { bot: "Exactement. L'évaluation formative sert à ajuster l'enseignement, pas à remplir le carnet de notes. Autre chose ?", es: "Exacto. La evaluación formativa sirve para ajustar la enseñanza, no para llenar la planilla de notas. ¿Algo más?",
          opciones: [
            { t: "Est-ce que je pourrais vous contacter pour partager nos résultats ?", es: "¿Podría contactarla para compartir nuestros resultados?", ok: true },
            { t: "Me permettriez-vous de vous écrire dans quelques mois pour vous raconter comment ça se passe chez nous ?", es: "¿Me permitiría escribirle dentro de unos meses para contarle cómo nos va?", ok: true },
            { t: "Je peux contacter avec vous plus tard ?", es: "¿Puedo contactarme con usted más adelante?", ok: false,
              fix: "«Contacter» es transitivo directo: «vous contacter», sin «avec»." }
          ],
          clave: ["vous contacter", "vous écrire"],
          tip: "El condicional («pourrais», «permettriez») es la clave de la cortesía en francés profesional." },
        { bot: "Avec grand plaisir ! Voici ma carte.", es: "¡Con mucho gusto! Aquí tiene mi tarjeta.",
          opciones: [
            { t: "Merci beaucoup, c'était un plaisir de vous rencontrer.", es: "Muchas gracias, fue un placer conocerla.", ok: true },
            { t: "Merci ! Je vous écrirai bientôt. Ce fut un vrai plaisir d'échanger avec vous.", es: "¡Gracias! Le escribiré pronto. Fue un verdadero placer conversar con usted.", ok: true },
            { t: "Merci ! Je reste à l'attente de vos nouvelles.", es: "¡Gracias! Quedo atento a sus noticias.", ok: false,
              fix: "Se dice «dans l'attente de vos nouvelles» o «au plaisir d'échanger à nouveau». «À l'attente de» no es correcto." }
          ],
          clave: ["plaisir", "rencontrer", "échanger"],
          tip: "«Au plaisir !» es una despedida cordial y profesional, muy usada en Francia." }
      ],
      cierre: { bot: "Le plaisir était partagé. Bonne chance pour votre projet à Cali !", es: "El placer fue mutuo. ¡Mucha suerte con su proyecto en Cali!" },
      vocab: [
        { t: "la séance", es: "la sesión" },
        { t: "un ticket de sortie", es: "un ticket de salida" },
        { t: "vérifier la compréhension", es: "verificar la comprensión" },
        { t: "une classe chargée", es: "un grupo numeroso" },
        { t: "le retour, la rétroaction", es: "la retroalimentación" },
        { t: "noter", es: "calificar" },
        { t: "le carnet de notes", es: "la planilla de notas" },
        { t: "dans l'attente de", es: "a la espera de" }
      ]
    },

    /* ───────────── 10 · C1 · Contar una experiencia pedagógica ───────────── */
    {
      id: "fr-10", titulo: "Panel: la experiencia que cambió mi práctica", nivel: "C1",
      tema: "Contar una experiencia pedagógica",
      contexto: "Participas como panelista en un foro virtual francófono de innovación educativa. Cuentas una experiencia de aula que transformó tu práctica y respondes preguntas exigentes del moderador.",
      rol: "M. François Garnier, moderador del panel, incisivo y curioso",
      turnos: [
        { bot: "Bienvenue sur ce panel. Pourriez-vous nous raconter une expérience qui a transformé votre pratique ?", es: "Le damos la bienvenida a este panel. ¿Podría contarnos una experiencia que haya transformado su práctica?",
          opciones: [
            { t: "Bien sûr. Il y a quelques années, j'ai lancé un projet d'éducation financière avec mes élèves de dix ans.", es: "Claro. Hace algunos años lancé un proyecto de educación financiera con mis estudiantes de diez años.", ok: true },
            { t: "Volontiers. Il y a quelques années, j'ai lancé un projet d'éducation financière avec des élèves de dix ans, et il a profondément transformé ma façon d'enseigner les maths.", es: "Con gusto. Hace algunos años lancé un proyecto de educación financiera con estudiantes de diez años, y transformó profundamente mi forma de enseñar matemáticas.", ok: true },
            { t: "Bien sûr. Il y a quelques années, j'ai commencé un projet d'éducation financière avec mes élèves de cinquième grade.", es: "Claro. Hace algunos años empecé un proyecto de educación financiera con mis estudiantes de quinto grado.", ok: false,
              fix: "«Cinquième grade» no existe en francés. Di «mes élèves de dix ans» o usa el equivalente francés: «mes élèves de CM2»." }
          ],
          clave: ["élèves de dix ans", "lancé"],
          tip: "Los grados no se traducen literalmente: indica la edad o el equivalente local para que el público entienda." },
        { bot: "Intéressant. Qu'est-ce qui vous a donné envie de vous lancer ?", es: "Interesante. ¿Qué le dio ganas de lanzarse?",
          opciones: [
            { t: "Mes élèves avaient du mal avec les pourcentages et ne voyaient pas l'utilité des maths.", es: "Mis estudiantes tenían dificultades con los porcentajes y no veían la utilidad de las matemáticas.", ok: true },
            { t: "Franchement, pour mes élèves, les pourcentages n'avaient aucun sens. Je voulais qu'ils voient les maths comme un outil pour prendre de vraies décisions.", es: "Francamente, para mis estudiantes los porcentajes no tenían ningún sentido. Quería que vieran las matemáticas como una herramienta para tomar decisiones reales.", ok: true },
            { t: "Mes élèves avaient des problèmes avec les pourcentages et ils ne trouvaient pas le sens.", es: "Mis estudiantes tenían problemas con los porcentajes y no les encontraban el sentido.", ok: false,
              fix: "«Encontrarle sentido» se dice «y trouver du sens» o «en voir l'intérêt». «Trouver le sens» no es natural aquí." }
          ],
          clave: ["avaient du mal", "aucun sens"],
          tip: "Tras «je voulais que» va subjuntivo: «qu'ils voient». Es una marca de nivel avanzado." },
        { bot: "Concrètement, en quoi consistait le projet ?", es: "En concreto, ¿en qué consistía el proyecto?",
          opciones: [
            { t: "Ils géraient une petite boutique à l'école et suivaient leurs bénéfices.", es: "Administraban una pequeña tienda en el colegio y llevaban el control de sus ganancias.", ok: true },
            { t: "Pendant six semaines, les élèves ont tenu une petite boutique : ils fixaient les prix, suivaient les dépenses et calculaient leur marge.", es: "Durante seis semanas, los estudiantes atendieron una pequeña tienda: fijaban los precios, registraban los gastos y calculaban su margen.", ok: true },
            { t: "Ils ont géré une boutique et ont fixé les prix eux-mêmes, ce qui les a beaucoup plu.", es: "Administraron una tienda y fijaron ellos mismos los precios, lo que les gustó mucho.", ok: false,
              fix: "«Plaire» rige complemento indirecto («plaire à quelqu'un»): «ce qui leur a beaucoup plu», no «les»." }
          ],
          clave: ["petite boutique", "bénéfices", "marge"],
          tip: "El imperfecto («fixaient», «suivaient») describe acciones repetidas durante el proyecto." },
        { bot: "Et quels résultats avez-vous observés ? Des données, ou plutôt une impression ?", es: "¿Y qué resultados observó? ¿Datos o más bien una impresión?",
          opciones: [
            { t: "Leurs résultats sur les pourcentages se sont améliorés, et ils participaient davantage.", es: "Sus resultados en porcentajes mejoraron y participaban más.", ok: true },
            { t: "Les deux. Leurs scores aux problèmes de pourcentages ont nettement progressé, même si la prudence s'impose : nous n'avions pas de groupe témoin.", es: "Ambas cosas. Sus puntajes en problemas de porcentajes mejoraron notablemente, aunque hay que ser prudentes: no teníamos grupo de control.", ok: true },
            { t: "Les deux. Les résultats ont été notoires : les notes ont beaucoup augmenté.", es: "Ambas cosas. Los resultados fueron notorios: las notas subieron mucho.", ok: false,
              fix: "«Notoire» significa «conocido por todos» (y a menudo es negativo). Para «notorio, evidente» usa «nets» o «remarquables»." }
          ],
          clave: ["améliorés", "progressé"],
          tip: "Matizar la evidencia («la prudence s'impose») aumenta tu credibilidad ante un público académico." },
        { bot: "C'est une nuance honnête. Quel a été le plus grand défi ?", es: "Es un matiz honesto. ¿Cuál fue el mayor reto?",
          opciones: [
            { t: "Le temps. Le projet a duré plus longtemps que prévu.", es: "El tiempo. El proyecto duró más de lo previsto.", ok: true },
            { t: "La gestion du temps, sans aucun doute : le projet a pris deux fois plus de temps que prévu, et j'ai dû sacrifier d'autres contenus.", es: "La gestión del tiempo, sin ninguna duda: el proyecto tomó el doble de lo previsto y tuve que sacrificar otros contenidos.", ok: true },
            { t: "Le temps. Le projet a duré plus que je pensais, et j'ai dû éliminer d'autres contenus.", es: "El tiempo. El proyecto duró más de lo que pensaba y tuve que eliminar otros contenidos.", ok: false,
              fix: "Con duraciones se usa «plus longtemps que». Lo correcto: «plus longtemps que prévu» o «plus longtemps que je ne le pensais»." }
          ],
          clave: ["que prévu", "plus longtemps", "deux fois plus"],
          tip: "«Deux fois plus de… que» = el doble de… que. Estructura precisa para comparar cantidades." },
        { bot: "Si un collègue voulait reproduire l'expérience, que lui conseilleriez-vous ?", es: "Si un colega quisiera replicar la experiencia, ¿qué le aconsejaría?",
          opciones: [
            { t: "De commencer petit et de relier chaque activité à un objectif clair.", es: "Empezar en pequeño y vincular cada actividad con un objetivo claro.", ok: true },
            { t: "Je lui conseillerais de commencer modestement, d'aligner chaque tâche sur des compétences précises et d'impliquer les familles dès le premier jour.", es: "Le aconsejaría empezar de forma modesta, alinear cada tarea con competencias precisas e involucrar a las familias desde el primer día.", ok: true },
            { t: "Je lui conseillerais qu'il commence petit et qu'il implique les familles.", es: "Le aconsejaría que empezara en pequeño y que involucrara a las familias.", ok: false,
              fix: "«Conseiller à quelqu'un de + infinitivo»: «Je lui conseillerais de commencer petit et d'impliquer les familles»." }
          ],
          clave: ["commencer", "objectif"],
          tip: "Verbos con «à quelqu'un de + infinitivo»: conseiller, demander, proposer, permettre, dire." },
        { bot: "Avec le recul, qu'est-ce que cette expérience vous a appris sur votre métier ?", es: "En retrospectiva, ¿qué le enseñó esta experiencia sobre su profesión?",
          opciones: [
            { t: "Que les élèves apprennent mieux quand le contenu a du sens pour eux.", es: "Que los estudiantes aprenden mejor cuando el contenido tiene sentido para ellos.", ok: true },
            { t: "Que la pertinence n'est pas un luxe, c'est le moteur de l'apprentissage. Et que les erreurs, les miennes comprises, sont l'endroit où l'on grandit.", es: "Que la pertinencia no es un lujo: es el motor del aprendizaje. Y que los errores, incluidos los míos, son el lugar donde crecemos.", ok: true },
            { t: "Que si les élèves verraient l'utilité, ils apprendraient plus.", es: "Que si los estudiantes vieran la utilidad, aprenderían más.", ok: false,
              fix: "Después de «si» nunca va condicional: «si les élèves voyaient l'utilité, ils apprendraient davantage»." }
          ],
          clave: ["a du sens", "apprennent mieux", "pertinence", "moteur"],
          tip: "Cierra con una idea memorable y breve: el público recuerda la última frase más que los datos." }
      ],
      cierre: { bot: "Merci. C'était à la fois inspirant et d'une honnêteté rafraîchissante.", es: "Gracias. Fue a la vez inspirador y de una honestidad refrescante." },
      vocab: [
        { t: "se lancer", es: "lanzarse, animarse" },
        { t: "avoir du mal avec", es: "tener dificultades con" },
        { t: "tenir une boutique", es: "atender una tienda" },
        { t: "le bénéfice", es: "la ganancia" },
        { t: "un groupe témoin", es: "un grupo de control" },
        { t: "une nuance", es: "un matiz" },
        { t: "conseiller à qqn de", es: "aconsejar a alguien que" },
        { t: "avec le recul", es: "en retrospectiva" }
      ]
    },
    /* ───────────── 11 · A1 · Pedir direcciones ───────────── */
    {
      id: "fr-11", titulo: "¿Cómo llego a la biblioteca?", nivel: "A1",
      tema: "Viaje y vida cotidiana: pedir direcciones",
      contexto: "Estás en Toulouse para una capacitación y buscas la biblioteca municipal. Le preguntas el camino a un vecino en la calle.",
      rol: "M. Rémi Faure, vecino del barrio, amable y paciente",
      turnos: [
        { bot: "Bonjour ! Vous cherchez quelque chose ?", es: "¡Buenos días! ¿Busca algo?",
          opciones: [
            { t: "Oui, excusez-moi. Où est la bibliothèque, s'il vous plaît ?", es: "Sí, disculpe. ¿Dónde queda la biblioteca, por favor?", ok: true },
            { t: "Oui, excusez-moi, monsieur. Je cherche la bibliothèque municipale. C'est loin d'ici ?", es: "Sí, disculpe, señor. Busco la biblioteca municipal. ¿Queda lejos de aquí?", ok: true },
            { t: "Oui, je cherche la librairie municipale.", es: "Sí, busco la biblioteca municipal.", ok: false,
              fix: "Falso amigo: «la librairie» es la librería (donde se compran libros). La biblioteca es «la bibliothèque»." }
          ],
          clave: ["bibliothèque", "où est", "je cherche"],
          tip: "«Excusez-moi» abre cualquier pregunta a un desconocido. En Francia, saludar con «bonjour» antes de preguntar es casi obligatorio." },
        { bot: "La bibliothèque ? C'est à dix minutes. Vous êtes à pied ou en voiture ?", es: "¿La biblioteca? Queda a diez minutos. ¿Va a pie o en carro?",
          opciones: [
            { t: "Je suis à pied.", es: "Voy a pie.", ok: true },
            { t: "À pied. J'aime bien marcher pour découvrir la ville.", es: "A pie. Me gusta caminar para conocer la ciudad.", ok: true },
            { t: "Je suis en pied.", es: "Voy a pie.", ok: false,
              fix: "Se dice «à pied», como «à vélo». Con los vehículos en los que vas adentro se usa «en»: «en voiture», «en bus»." }
          ],
          clave: ["à pied", "marcher"],
          tip: "Regla práctica: «en» si vas dentro (en bus, en métro); «à» si vas encima o caminando (à vélo, à pied)." },
        { bot: "Alors, allez tout droit jusqu'au feu, puis tournez à gauche.", es: "Entonces, siga derecho hasta el semáforo y luego gire a la izquierda.",
          opciones: [
            { t: "Tout droit, puis à gauche. D'accord.", es: "Derecho y luego a la izquierda. De acuerdo.", ok: true },
            { t: "Donc je vais tout droit jusqu'au feu et je tourne à gauche, c'est ça ?", es: "Entonces voy derecho hasta el semáforo y giro a la izquierda, ¿cierto?", ok: true },
            { t: "D'accord : à droite jusqu'au feu, puis à gauche.", es: "De acuerdo: derecho hasta el semáforo y luego a la izquierda.", ok: false,
              fix: "«Tout droit» significa derecho, de frente; «à droite» significa a la derecha. Confundirlos cambia toda la ruta." }
          ],
          clave: ["tout droit", "à gauche", "feu"],
          tip: "Repetir las indicaciones en voz alta («donc… c'est ça ?») es la mejor forma de confirmar que entendiste." },
        { bot: "C'est ça. Ensuite, c'est la deuxième rue à droite. La bibliothèque est en face de la poste.", es: "Eso es. Después, es la segunda calle a la derecha. La biblioteca queda frente al correo.",
          opciones: [
            { t: "La deuxième rue à droite, en face de la poste. Merci !", es: "La segunda calle a la derecha, frente al correo. ¡Gracias!", ok: true },
            { t: "D'accord, en face de la poste. C'est un grand bâtiment ?", es: "De acuerdo, frente al correo. ¿Es un edificio grande?", ok: true },
            { t: "D'accord. En face à la poste ?", es: "De acuerdo. ¿Frente al correo?", ok: false,
              fix: "La expresión es «en face de»: «en face de la poste». Es un calco de «frente a» del español." }
          ],
          clave: ["en face de", "deuxième rue"],
          tip: "Otras ubicaciones útiles: «à côté de» (al lado de), «près de» (cerca de), «au coin de» (en la esquina de)." },
        { bot: "Oui, un bâtiment blanc avec une grande porte bleue. Vous ne pouvez pas le rater.", es: "Sí, un edificio blanco con una gran puerta azul. No tiene pérdida.",
          opciones: [
            { t: "Super. Il y a un arrêt de bus près d'ici ?", es: "Súper. ¿Hay una parada de bus cerca de aquí?", ok: true },
            { t: "Merci. Et pour revenir à l'hôtel, il y a un arrêt de bus près de la bibliothèque ?", es: "Gracias. Y para volver al hotel, ¿hay una parada de bus cerca de la biblioteca?", ok: true },
            { t: "Merci. Il y a une arrêt de bus près d'ici ?", es: "Gracias. ¿Hay una parada de bus cerca de aquí?", ok: false,
              fix: "«Arrêt» es masculino: «un arrêt de bus». Aunque «parada» sea femenino en español, el género cambia en francés." }
          ],
          clave: ["arrêt de bus", "près d'ici"],
          tip: "«Il y a…?» sirve para preguntar si existe algo cerca: «Il y a une pharmacie près d'ici ?»." },
        { bot: "Oui, juste devant la bibliothèque. Bonne visite !", es: "Sí, justo delante de la biblioteca. ¡Buena visita!",
          opciones: [
            { t: "Merci beaucoup, monsieur. Bonne journée !", es: "Muchas gracias, señor. ¡Que tenga buen día!", ok: true },
            { t: "Merci infiniment pour votre aide. Bonne journée à vous !", es: "Muchísimas gracias por su ayuda. ¡Que tenga muy buen día!", ok: true },
            { t: "Merci beaucoup. Bonjour !", es: "Muchas gracias. ¡Que tenga buen día!", ok: false,
              fix: "«Bonjour» solo sirve para saludar al llegar. Para despedirse deseando un buen día se dice «Bonne journée !»." }
          ],
          clave: ["merci", "bonne journée"],
          tip: "«Bonne journée» de día y «bonne soirée» al final de la tarde. «Bonjour» y «bonsoir» son saludos de llegada." }
      ],
      cierre: { bot: "Avec plaisir. Bon séjour à Toulouse !", es: "Con gusto. ¡Que disfrute su estadía en Toulouse!" },
      vocab: [
        { t: "tout droit", es: "derecho, de frente" },
        { t: "à gauche / à droite", es: "a la izquierda / a la derecha" },
        { t: "le feu", es: "el semáforo" },
        { t: "en face de", es: "frente a" },
        { t: "à pied", es: "a pie" },
        { t: "un arrêt de bus", es: "una parada de bus" },
        { t: "la bibliothèque", es: "la biblioteca (≠ la librairie, la librería)" }
      ]
    },

    /* ───────────── 12 · A2 · Casa de cambio ───────────── */
    {
      id: "fr-12", titulo: "Cambio de dinero en París", nivel: "A2",
      tema: "Viaje y vida cotidiana: banco o casa de cambio",
      contexto: "Llegas a París para un curso de formación docente y vas a una casa de cambio para cambiar dólares por euros.",
      rol: "M. Julien Petit, empleado de la casa de cambio, rápido pero amable",
      turnos: [
        { bot: "Bonjour. Je peux vous aider ?", es: "Buenos días. ¿Le puedo ayudar?",
          opciones: [
            { t: "Bonjour. Je voudrais changer des dollars en euros, s'il vous plaît.", es: "Buenos días. Quisiera cambiar dólares a euros, por favor.", ok: true },
            { t: "Bonjour, monsieur. Je voudrais changer des dollars américains en euros. C'est possible ici ?", es: "Buenos días, señor. Quisiera cambiar dólares estadounidenses a euros. ¿Es posible aquí?", ok: true },
            { t: "Bonjour. Je veux changer des dollars à euros.", es: "Buenos días. Quiero cambiar dólares a euros.", ok: false,
              fix: "Una moneda se cambia «en» otra: «changer des dollars en euros». Además, «je voudrais» suena más cortés que «je veux»." }
          ],
          clave: ["je voudrais", "changer", "en euros"],
          tip: "«Je voudrais» (condicional) es la fórmula cortés para pedir algo en tiendas, bancos y restaurantes." },
        { bot: "Très bien. Combien voulez-vous changer ?", es: "Muy bien. ¿Cuánto quiere cambiar?",
          opciones: [
            { t: "Deux cents dollars, s'il vous plaît.", es: "Doscientos dólares, por favor.", ok: true },
            { t: "Deux cents dollars. Quel est le taux de change aujourd'hui ?", es: "Doscientos dólares. ¿Cuál es la tasa de cambio hoy?", ok: true },
            { t: "Deux cent dollars, s'il vous plaît.", es: "Doscientos dólares, por favor.", ok: false,
              fix: "«Cent» lleva -s cuando va multiplicado y no le sigue otra cifra: «deux cents dollars», pero «deux cent cinquante»." }
          ],
          clave: ["deux cents", "taux de change"],
          tip: "«Le taux de change» es la tasa de cambio. Pregúntala siempre antes de entregar el dinero." },
        { bot: "Le taux est affiché sur l'écran, juste là. Il y a aussi une commission de service.", es: "La tasa aparece en la pantalla, justo ahí. También hay una comisión de servicio.",
          opciones: [
            { t: "D'accord. La commission est comprise dans le total ?", es: "De acuerdo. ¿La comisión está incluida en el total?", ok: true },
            { t: "Je vois. Pourriez-vous me dire combien je vais recevoir au total, commission comprise ?", es: "Ya veo. ¿Podría decirme cuánto voy a recibir en total, con la comisión incluida?", ok: true },
            { t: "D'accord. Combien je vais recevoir en total ?", es: "De acuerdo. ¿Cuánto voy a recibir en total?", ok: false,
              fix: "En francés se dice «au total»: «Combien je vais recevoir au total ?». «En total» es un calco del español." }
          ],
          clave: ["au total", "commission", "comprise"],
          tip: "«Commission comprise» = comisión incluida. El participio concuerda con el sustantivo: «taxe comprise», «service compris»." },
        { bot: "Vous recevez le montant indiqué sur ce reçu. Je peux voir une pièce d'identité, s'il vous plaît ?", es: "Usted recibe el monto indicado en este recibo. ¿Puedo ver un documento de identidad, por favor?",
          opciones: [
            { t: "Oui, voici mon passeport.", es: "Sí, aquí está mi pasaporte.", ok: true },
            { t: "Bien sûr, voici mon passeport. Vous avez besoin d'autre chose ?", es: "Claro, aquí está mi pasaporte. ¿Necesita algo más?", ok: true },
            { t: "Oui, voici mon passeport. Vous nécessitez autre chose ?", es: "Sí, aquí está mi pasaporte. ¿Necesita algo más?", ok: false,
              fix: "«Nécessiter» significa «requerir» y se usa con cosas: «ce travail nécessite du temps». Para personas se dice «avoir besoin de»: «Vous avez besoin d'autre chose ?»." }
          ],
          clave: ["voici", "passeport", "besoin"],
          tip: "«Voici» presenta algo que entregas: «voici mon passeport». En la conversación diaria también se oye «voilà»." },
        { bot: "Merci. Vous préférez des petites ou des grosses coupures ?", es: "Gracias. ¿Prefiere billetes pequeños o grandes?",
          opciones: [
            { t: "Des petites coupures, s'il vous plaît.", es: "Billetes pequeños, por favor.", ok: true },
            { t: "Plutôt des petites coupures : c'est plus pratique pour le bus et les petits achats.", es: "Mejor billetes pequeños: es más práctico para el bus y las compras pequeñas.", ok: true },
            { t: "Des billets petits, s'il vous plaît.", es: "Billetes pequeños, por favor.", ok: false,
              fix: "Algunos adjetivos cortos y frecuentes van antes del sustantivo: «des petits billets» o «des petites coupures»." }
          ],
          clave: ["petites coupures", "pratique"],
          tip: "En banca, «une coupure» es un billete. Petit, grand, bon, beau, jeune y vieux suelen ir antes del sustantivo." },
        { bot: "Voilà vos euros et votre reçu. Vérifiez bien, s'il vous plaît.", es: "Aquí tiene sus euros y su recibo. Verifique bien, por favor.",
          opciones: [
            { t: "Merci. Je vais compter, un instant.", es: "Gracias. Voy a contar, un momento.", ok: true },
            { t: "J'ai compté : tout est correct. Merci beaucoup pour votre aide.", es: "Ya conté: todo está correcto. Muchas gracias por su ayuda.", ok: true },
            { t: "Merci. Je vais conter l'argent, un instant.", es: "Gracias. Voy a contar el dinero, un momento.", ok: false,
              fix: "El español «contar» tiene dos verbos en francés: «compter» (números, dinero) y «conter» (narrar una historia). Aquí: «Je vais compter l'argent»." }
          ],
          clave: ["compter", "correct", "merci"],
          tip: "Contar el dinero en la ventanilla antes de irte es normal; nadie lo toma como desconfianza." }
      ],
      cierre: { bot: "Je vous en prie. Bon séjour à Paris !", es: "Con mucho gusto. ¡Que disfrute su estadía en París!" },
      vocab: [
        { t: "le bureau de change", es: "la casa de cambio" },
        { t: "le taux de change", es: "la tasa de cambio" },
        { t: "la commission", es: "la comisión" },
        { t: "au total", es: "en total" },
        { t: "une pièce d'identité", es: "un documento de identidad" },
        { t: "une coupure", es: "un billete (en banca)" },
        { t: "le reçu", es: "el recibo" },
        { t: "compter", es: "contar (números, dinero)" }
      ]
    },

    /* ───────────── 13 · A2 · Restaurante con restricciones ───────────── */
    {
      id: "fr-13", titulo: "Cena sin riesgos en Nantes", nivel: "A2",
      tema: "Viaje y vida cotidiana: restaurante con restricciones alimentarias",
      contexto: "Cenas con colegas franceses después de una jornada de capacitación. No comes carne y eres alérgico(a) al maní: debes explicarlo bien al pedir.",
      rol: "Mme Sophie Garnier, mesera de una brasserie, atenta y profesional",
      turnos: [
        { bot: "Bonsoir ! Vous avez choisi ?", es: "¡Buenas noches! ¿Ya escogió?",
          opciones: [
            { t: "Bonsoir. Pas encore. Vous avez des plats sans viande ?", es: "Buenas noches. Todavía no. ¿Tienen platos sin carne?", ok: true },
            { t: "Bonsoir. Avant de commander, j'ai une question : quels plats sont végétariens, s'il vous plaît ?", es: "Buenas noches. Antes de pedir, tengo una pregunta: ¿qué platos son vegetarianos, por favor?", ok: true },
            { t: "Bonsoir. Je ne mange pas de la viande.", es: "Buenas noches. No como carne.", ok: false,
              fix: "Después de una negación, el partitivo se reduce a «de»: «Je ne mange pas de viande»." }
          ],
          clave: ["sans viande", "végétariens", "plats"],
          tip: "Tras negación, «du / de la / des» se vuelven «de»: «je mange de la viande» → «je ne mange pas de viande»." },
        { bot: "Il y a le risotto aux champignons et la salade de chèvre chaud.", es: "Está el risotto de champiñones y la ensalada de queso de cabra caliente.",
          opciones: [
            { t: "Le risotto, s'il vous plaît. Mais je suis allergique aux cacahuètes.", es: "El risotto, por favor. Pero soy alérgico(a) al maní.", ok: true },
            { t: "Le risotto a l'air délicieux. Mais attention : je suis allergique aux cacahuètes et aux fruits à coque.", es: "El risotto se ve delicioso. Pero cuidado: soy alérgico(a) al maní y a los frutos secos.", ok: true },
            { t: "Le risotto, oui. Mais je suis allergique à les cacahuètes.", es: "El risotto, sí. Pero soy alérgico(a) al maní.", ok: false,
              fix: "«À + les» se contrae siempre en «aux»: «allergique aux cacahuètes»." }
          ],
          clave: ["allergique aux", "cacahuètes"],
          tip: "«Les fruits à coque» son los frutos secos (nueces, almendras, avellanas). Es el término que aparece en las cartas." },
        { bot: "D'accord, je vais demander au chef. C'est une allergie grave ?", es: "De acuerdo, le voy a preguntar al chef. ¿Es una alergia grave?",
          opciones: [
            { t: "Oui, c'est grave. Même une petite quantité est dangereuse.", es: "Sí, es grave. Incluso una pequeña cantidad es peligrosa.", ok: true },
            { t: "Oui, assez grave. Est-ce que le chef peut aussi vérifier les sauces et l'huile ?", es: "Sí, bastante grave. ¿El chef puede revisar también las salsas y el aceite?", ok: true },
            { t: "Oui, très grave. Je n'en peux pas manger, même un peu.", es: "Sí, muy grave. No puedo comerlo, ni siquiera un poco.", ok: false,
              fix: "Con verbo + infinitivo, el pronombre va justo antes del infinitivo: «Je ne peux pas en manger, même un peu»." }
          ],
          clave: ["grave", "quantité", "vérifier"],
          tip: "Con «pouvoir, vouloir, devoir» + infinitivo, el pronombre acompaña al infinitivo: «je veux le voir», «je ne peux pas en manger»." },
        { bot: "Le chef confirme : le risotto ne contient pas de cacahuètes. Et comme boisson ?", es: "El chef confirma: el risotto no contiene maní. ¿Y de beber?",
          opciones: [
            { t: "Une carafe d'eau, s'il vous plaît.", es: "Una jarra de agua, por favor.", ok: true },
            { t: "Merci d'avoir vérifié. Je vais prendre une carafe d'eau et un verre de jus de pomme.", es: "Gracias por verificar. Voy a pedir una jarra de agua y un vaso de jugo de manzana.", ok: true },
            { t: "Merci. Un vase d'eau, s'il vous plaît.", es: "Gracias. Un vaso de agua, por favor.", ok: false,
              fix: "Falso amigo: «un vase» es un florero. El vaso para beber es «un verre»: «un verre d'eau»." }
          ],
          clave: ["carafe d'eau", "verre", "je vais prendre"],
          tip: "En Francia la «carafe d'eau» (agua de la llave) es gratuita en los restaurantes. Pídela con confianza." },
        { bot: "Très bien. Vous voulez un dessert après ?", es: "Muy bien. ¿Quiere un postre después?",
          opciones: [
            { t: "Oui, mais sans fruits à coque. Qu'est-ce que vous me conseillez ?", es: "Sí, pero sin frutos secos. ¿Qué me recomienda?", ok: true },
            { t: "Avec plaisir, si le chef peut me conseiller un dessert sans fruits à coque.", es: "Con gusto, si el chef me puede recomendar un postre sin frutos secos.", ok: true },
            { t: "Oui, mais léger : je suis un peu constipé.", es: "Sí, pero ligero: estoy un poco resfriado.", ok: false,
              fix: "¡Cuidado! «Constipé» significa estreñido. Resfriado se dice «enrhumé(e)»: «je suis un peu enrhumé»." }
          ],
          clave: ["dessert", "conseillez", "sans"],
          tip: "«Qu'est-ce que vous me conseillez ?» es la forma natural de pedir una recomendación al personal." },
        { bot: "Je vous propose une crème brûlée, sans fruits à coque. Ça vous va ?", es: "Le propongo una crème brûlée, sin frutos secos. ¿Le parece bien?",
          opciones: [
            { t: "Oui, parfait. Et l'addition, s'il vous plaît.", es: "Sí, perfecto. Y la cuenta, por favor.", ok: true },
            { t: "Parfait, merci pour votre attention. Vous pourrez nous apporter l'addition après le dessert ?", es: "Perfecto, gracias por su atención. ¿Nos podrá traer la cuenta después del postre?", ok: true },
            { t: "Parfait. Et le compte, s'il vous plaît.", es: "Perfecto. Y la cuenta, por favor.", ok: false,
              fix: "En el restaurante la cuenta es «l'addition». «Le compte» es una cuenta bancaria." }
          ],
          clave: ["l'addition", "parfait"],
          tip: "En Francia el mesero no trae la cuenta hasta que la pides: llevarla antes sería como apurarte." }
      ],
      cierre: { bot: "Avec plaisir. Bon appétit et bonne soirée !", es: "Con gusto. ¡Buen provecho y feliz noche!" },
      vocab: [
        { t: "sans viande", es: "sin carne" },
        { t: "être allergique à", es: "ser alérgico(a) a" },
        { t: "les cacahuètes", es: "el maní" },
        { t: "les fruits à coque", es: "los frutos secos" },
        { t: "une carafe d'eau", es: "una jarra de agua (de la llave)" },
        { t: "un verre", es: "un vaso (≠ un vase, un florero)" },
        { t: "enrhumé(e)", es: "resfriado(a) (≠ constipé, estreñido)" },
        { t: "l'addition", es: "la cuenta (en el restaurante)" }
      ]
    },

    /* ───────────── 14 · A2 · Cita médica ───────────── */
    {
      id: "fr-14", titulo: "En el consultorio médico", nivel: "A2",
      tema: "Viaje y vida cotidiana: cita médica",
      contexto: "Durante un intercambio en Ruan te duele la garganta. Vas al médico general y describes tus síntomas.",
      rol: "Dr Antoine Lefèvre, médico general, tranquilo y claro",
      turnos: [
        { bot: "Bonjour, entrez. Qu'est-ce qui vous amène ?", es: "Buenos días, siga. ¿Qué lo trae por aquí?",
          opciones: [
            { t: "Bonjour, docteur. J'ai mal à la gorge.", es: "Buenos días, doctor. Me duele la garganta.", ok: true },
            { t: "Bonjour, docteur. J'ai mal à la gorge et à la tête depuis deux jours.", es: "Buenos días, doctor. Me duelen la garganta y la cabeza desde hace dos días.", ok: true },
            { t: "Bonjour, docteur. J'ai mal de gorge.", es: "Buenos días, doctor. Tengo dolor de garganta.", ok: false,
              fix: "Se dice «avoir mal à» + parte del cuerpo: «j'ai mal à la gorge», «j'ai mal au dos»." }
          ],
          clave: ["j'ai mal", "gorge", "depuis"],
          tip: "«À + le» = «au»: «j'ai mal au ventre». «À + les» = «aux»: «j'ai mal aux pieds»." },
        { bot: "Vous avez de la fièvre ?", es: "¿Tiene fiebre?",
          opciones: [
            { t: "Oui, un peu. Hier soir, j'avais trente-huit.", es: "Sí, un poco. Anoche tenía treinta y ocho.", ok: true },
            { t: "Je crois que oui : hier soir, j'ai eu de la fièvre et j'avais très froid.", es: "Creo que sí: anoche tuve fiebre y tenía mucho frío.", ok: true },
            { t: "Oui, je suis eu de la fièvre hier soir.", es: "Sí, tuve fiebre anoche.", ok: false,
              fix: "El passé composé de «avoir» se forma con «avoir»: «j'ai eu de la fièvre». Solo unos pocos verbos (de movimiento, pronominales) usan «être»." }
          ],
          clave: ["fièvre", "j'ai eu", "j'avais"],
          tip: "En Francia la temperatura se dice sin «grados»: «j'avais trente-huit» o «38 de fièvre»." },
        { bot: "Vous toussez ? Vous avez le nez qui coule ?", es: "¿Tiene tos? ¿Le gotea la nariz?",
          opciones: [
            { t: "Oui, je tousse un peu, surtout la nuit.", es: "Sí, toso un poco, sobre todo por la noche.", ok: true },
            { t: "Je tousse surtout la nuit, et le matin j'ai le nez bouché.", es: "Toso sobre todo por la noche, y por la mañana tengo la nariz tapada.", ok: true },
            { t: "Oui, je tousse beaucoup à la nuit.", es: "Sí, toso mucho por la noche.", ok: false,
              fix: "«Por la noche» se dice «la nuit» o «pendant la nuit», sin «à»: «je tousse beaucoup la nuit»." }
          ],
          clave: ["je tousse", "la nuit", "nez"],
          tip: "«Le nez qui coule» = nariz que gotea; «le nez bouché» = nariz tapada. Vocabulario clave en la consulta." },
        { bot: "Vous prenez des médicaments en ce moment ? Vous avez des allergies ?", es: "¿Está tomando medicamentos en este momento? ¿Tiene alergias?",
          opciones: [
            { t: "Non, je ne prends rien, et je n'ai pas d'allergies.", es: "No, no tomo nada y no tengo alergias.", ok: true },
            { t: "Je prends seulement du paracétamol depuis hier. Et je suis allergique à la pénicilline.", es: "Solo tomo acetaminofén desde ayer. Y soy alérgico(a) a la penicilina.", ok: true },
            { t: "Non, je ne prends pas des médicaments.", es: "No, no tomo medicamentos.", ok: false,
              fix: "Después de una negación, «des» se vuelve «de»: «je ne prends pas de médicaments»." }
          ],
          clave: ["je prends", "allergique", "médicaments"],
          tip: "Menciona siempre tus alergias a medicamentos, aunque no te pregunten. El «paracétamol» francés es nuestro acetaminofén." },
        { bot: "Bon, c'est une angine virale. Reposez-vous et buvez beaucoup d'eau. Je vous prescris un sirop.", es: "Bueno, es una infección viral de garganta. Descanse y tome mucha agua. Le receto un jarabe.",
          opciones: [
            { t: "D'accord. Je dois le prendre combien de fois par jour ?", es: "De acuerdo. ¿Cuántas veces al día lo debo tomar?", ok: true },
            { t: "Merci. Combien de fois par jour dois-je prendre le sirop, et pendant combien de jours ?", es: "Gracias. ¿Cuántas veces al día debo tomar el jarabe y durante cuántos días?", ok: true },
            { t: "D'accord. Je dois le prendre combien de fois au jour ?", es: "De acuerdo. ¿Cuántas veces al día lo debo tomar?", ok: false,
              fix: "Para la frecuencia se usa «par»: «trois fois par jour», «une fois par semaine». «Au jour» es un calco de «al día»." }
          ],
          clave: ["fois par jour", "combien"],
          tip: "Frecuencias útiles: «une fois par jour», «matin et soir», «toutes les huit heures»." },
        { bot: "Trois fois par jour, pendant cinq jours. Voici votre ordonnance pour la pharmacie.", es: "Tres veces al día, durante cinco días. Aquí tiene su fórmula médica para la farmacia.",
          opciones: [
            { t: "Merci beaucoup, docteur.", es: "Muchas gracias, doctor.", ok: true },
            { t: "Merci, docteur. Et si ça ne va pas mieux dans trois jours, je reviens vous voir ?", es: "Gracias, doctor. Y si no mejoro en tres días, ¿vuelvo a verlo?", ok: true },
            { t: "Merci. Je vais à la pharmacie avec la recette.", es: "Gracias. Voy a la farmacia con la fórmula médica.", ok: false,
              fix: "Falso amigo: «la recette» es una receta de cocina. La fórmula del médico es «l'ordonnance»." }
          ],
          clave: ["ordonnance", "pharmacie", "merci"],
          tip: "La farmacia francesa se reconoce por su cruz verde. Allí te entregan el medicamento al mostrar «l'ordonnance»." }
      ],
      cierre: { bot: "Je vous en prie. Reposez-vous bien, et bon rétablissement !", es: "Con mucho gusto. Descanse bien, ¡y que se mejore pronto!" },
      vocab: [
        { t: "avoir mal à", es: "doler (algo a alguien)" },
        { t: "la gorge", es: "la garganta" },
        { t: "la fièvre", es: "la fiebre" },
        { t: "tousser", es: "toser" },
        { t: "le nez bouché", es: "la nariz tapada" },
        { t: "l'ordonnance (f.)", es: "la fórmula médica (≠ la recette)" },
        { t: "fois par jour", es: "veces al día" },
        { t: "bon rétablissement", es: "que se mejore pronto" }
      ]
    },

    /* ───────────── 15 · A2 · Celebrar logros ───────────── */
    {
      id: "fr-15", titulo: "¡Celebramos el libro de cuentos!", nivel: "A2",
      tema: "Celebrar logros con estudiantes",
      contexto: "Tu grupo de quinto terminó un libro de cuentos escrito por los niños. Una estudiante viene feliz a contártelo y planean juntos una celebración.",
      rol: "Inès, niña de 10 años (CM2), entusiasta y conversadora",
      turnos: [
        { bot: "Maîtresse, maîtresse ! On a fini le livre de contes ! Vous l'avez vu ?", es: "¡Profe, profe! ¡Terminamos el libro de cuentos! ¿Lo vio?",
          opciones: [
            { t: "Oui, je l'ai vu ! Bravo, Inès !", es: "¡Sí, lo vi! ¡Bravo, Inès!", ok: true },
            { t: "Oui, je l'ai lu hier soir. Bravo à toute la classe, c'est un travail magnifique !", es: "Sí, lo leí anoche. ¡Felicitaciones a todo el grupo, es un trabajo magnífico!", ok: true },
            { t: "Oui ! Je suis très orgueilleuse de vous !", es: "¡Sí! ¡Estoy muy orgullosa de ustedes!", ok: false,
              fix: "Falso amigo: «orgueilleux / orgueilleuse» significa soberbio, arrogante. «Orgullosa de» se dice «fière de»: «Je suis très fière de vous !»." }
          ],
          clave: ["bravo", "je l'ai", "travail"],
          tip: "Felicita el esfuerzo concreto, no solo el talento: «vous avez beaucoup travaillé» motiva más que «vous êtes doués»." },
        { bot: "Qu'est-ce que vous avez préféré dans le livre ?", es: "¿Qué fue lo que más le gustó del libro?",
          opciones: [
            { t: "J'ai adoré les dessins et les histoires.", es: "Me encantaron los dibujos y las historias.", ok: true },
            { t: "Ce que j'ai préféré, c'est que chaque conte parle de notre quartier, avec beaucoup d'imagination.", es: "Lo que más me gustó es que cada cuento habla de nuestro barrio, con mucha imaginación.", ok: true },
            { t: "Le que j'ai préféré, c'est les dessins.", es: "Lo que más me gustó son los dibujos.", ok: false,
              fix: "«Lo que» se dice «ce que» en francés: «Ce que j'ai préféré, c'est…»." }
          ],
          clave: ["j'ai adoré", "ce que", "préféré"],
          tip: "«Ce que j'ai préféré, c'est…» es una estructura muy útil para destacar algo positivo." },
        { bot: "Moi, j'ai eu du mal avec la fin de mon conte. Mais j'ai réussi !", es: "Yo tuve dificultades con el final de mi cuento. ¡Pero lo logré!",
          opciones: [
            { t: "Oui, et tu n'as pas abandonné. Bravo !", es: "Sí, y no te rendiste. ¡Bravo!", ok: true },
            { t: "Je sais, et c'est ça le plus important : tu as fait des erreurs, tu as corrigé et tu as réussi.", es: "Lo sé, y eso es lo más importante: cometiste errores, corregiste y lo lograste.", ok: true },
            { t: "Oui, tu as eu du mal, mais tu es réussi !", es: "Sí, tuviste dificultades, ¡pero lo lograste!", ok: false,
              fix: "«Réussir» se conjuga con «avoir» en passé composé: «tu as réussi»." }
          ],
          clave: ["tu as réussi", "erreurs", "abandonné"],
          tip: "Nombra el proceso: «tu as corrigé, tu as recommencé». Así el error se vuelve parte del aprendizaje, no un fracaso." },
        { bot: "On peut faire une fête pour célébrer ?", es: "¿Podemos hacer una fiesta para celebrar?",
          opciones: [
            { t: "Bonne idée ! On peut faire une petite fête vendredi.", es: "¡Buena idea! Podemos hacer una pequeña fiesta el viernes.", ok: true },
            { t: "Bonne idée ! Vendredi, on invite les familles et chacun lit un extrait de son conte.", es: "¡Buena idea! El viernes invitamos a las familias y cada uno lee un fragmento de su cuento.", ok: true },
            { t: "Bonne idée ! On va faire une fête en vendredi.", es: "¡Buena idea! Vamos a hacer una fiesta el viernes.", ok: false,
              fix: "Con los días de la semana no se usa preposición: «vendredi» (este viernes) o «le vendredi» (todos los viernes)." }
          ],
          clave: ["vendredi", "fête", "familles"],
          tip: "«Vendredi» = este viernes; «le vendredi» = los viernes, como hábito. Ninguno de los dos lleva «en»." },
        { bot: "Trop bien ! Je peux lire mon conte devant tout le monde ?", es: "¡Qué chévere! ¿Puedo leer mi cuento delante de todos?",
          opciones: [
            { t: "Bien sûr ! Tu veux lire en premier ?", es: "¡Claro! ¿Quieres leer de primera?", ok: true },
            { t: "Avec plaisir ! Tu veux t'entraîner avec moi avant, pour être plus à l'aise ?", es: "¡Con gusto! ¿Quieres ensayar conmigo antes, para sentirte más cómoda?", ok: true },
            { t: "Bien sûr ! Tu es prêt ?", es: "¡Claro! ¿Estás lista?", ok: false,
              fix: "Inès es una niña, así que el adjetivo va en femenino: «Tu es prête ?». En femenino la «t» final sí se pronuncia." }
          ],
          clave: ["bien sûr", "t'entraîner", "à l'aise"],
          tip: "«Être à l'aise» = sentirse cómodo. Ensayar antes reduce los nervios de hablar en público." },
        { bot: "Merci, maîtresse ! C'est le plus beau projet de l'année !", es: "¡Gracias, profe! ¡Es el proyecto más lindo del año!",
          opciones: [
            { t: "Merci à vous ! Je suis très fière de toute la classe.", es: "¡Gracias a ustedes! Estoy muy orgullosa de todo el grupo.", ok: true },
            { t: "C'est grâce à vous tous : vous avez travaillé en équipe et vous vous êtes entraidés. Bravo !", es: "Es gracias a todos ustedes: trabajaron en equipo y se ayudaron entre sí. ¡Bravo!", ok: true },
            { t: "C'est grâce à vous tous : vous vous avez entraidés.", es: "Es gracias a todos ustedes: se ayudaron entre sí.", ok: false,
              fix: "Los verbos pronominales forman el passé composé con «être»: «vous vous êtes entraidés»." }
          ],
          clave: ["fière", "grâce à", "équipe"],
          tip: "Cierra reconociendo lo colectivo: «grâce à vous tous». Celebrar juntos fortalece el sentido de comunidad del grupo." }
      ],
      cierre: { bot: "Vive la classe ! À vendredi, maîtresse !", es: "¡Viva el grupo! ¡Hasta el viernes, profe!" },
      vocab: [
        { t: "bravo", es: "bravo, felicitaciones" },
        { t: "être fier / fière de", es: "estar orgulloso(a) de (≠ orgueilleux)" },
        { t: "avoir du mal avec", es: "tener dificultades con" },
        { t: "réussir", es: "lograr, tener éxito" },
        { t: "une fête", es: "una fiesta" },
        { t: "s'entraîner", es: "ensayar, practicar" },
        { t: "être à l'aise", es: "sentirse cómodo(a)" },
        { t: "grâce à", es: "gracias a" }
      ]
    },
    /* ───────────── 16 · A2 · Simulacro de evacuación ───────────── */
    {
      id: "fr-16", titulo: "El simulacro de evacuación", nivel: "A2",
      tema: "Seguridad escolar: simulacro de evacuación",
      contexto: "Haces un intercambio en un colegio de Lille. Hoy hay simulacro y el coordinador te explica qué hacer con tu grupo.",
      rol: "M. Karim Benali, coordinador de seguridad del colegio, claro y metódico",
      turnos: [
        { bot: "Bonjour ! Ce matin, à dix heures, il y a un exercice d'évacuation. Vous êtes au courant ?", es: "¡Buenos días! Esta mañana, a las diez, hay un simulacro de evacuación. ¿Está enterado(a)?",
          opciones: [
            { t: "Non, je ne savais pas. Qu'est-ce que je dois faire ?", es: "No, no sabía. ¿Qué debo hacer?", ok: true },
            { t: "Oui, la directrice me l'a dit hier. Vous pouvez me rappeler les consignes ?", es: "Sí, la directora me lo dijo ayer. ¿Me puede recordar las instrucciones?", ok: true },
            { t: "Non, je ne savais pas. Il y a un simulacre ?", es: "No, no sabía. ¿Hay un simulacro?", ok: false,
              fix: "Falso amigo: «un simulacre» es una farsa, una apariencia engañosa. El simulacro escolar es «un exercice d'évacuation» o «un exercice incendie»." }
          ],
          clave: ["consignes", "exercice", "je dois"],
          tip: "«Les consignes» son las instrucciones oficiales. Es una palabra clave en cualquier colegio francés." },
        { bot: "Quand l'alarme sonne, les élèves se mettent en rang et sortent calmement, sans courir.", es: "Cuando suena la alarma, los estudiantes se forman en fila y salen con calma, sin correr.",
          opciones: [
            { t: "D'accord : en rang, calmement, sans courir.", es: "De acuerdo: en fila, con calma, sin correr.", ok: true },
            { t: "Compris. Et est-ce qu'ils doivent prendre leurs affaires ?", es: "Entendido. ¿Y deben llevar sus cosas?", ok: true },
            { t: "D'accord. Et ils doivent prendre ses sacs ?", es: "De acuerdo. ¿Y deben llevar sus maletas?", ok: false,
              fix: "Para «de ellos» se usa «leur / leurs»: «leurs sacs». «Ses» significa «de él» o «de ella» (un solo dueño)." }
          ],
          clave: ["en rang", "sans courir", "affaires"],
          tip: "«Sans» va seguido de infinitivo, como en español: «sans courir», «sans parler»." },
        { bot: "Non, ils laissent tout dans la salle. Vous fermez la porte, mais pas à clé.", es: "No, dejan todo en el salón. Usted cierra la puerta, pero no con llave.",
          opciones: [
            { t: "D'accord, je ferme la porte, mais pas à clé.", es: "De acuerdo, cierro la puerta, pero no con llave.", ok: true },
            { t: "Entendu. Et les fenêtres, je les ferme aussi ?", es: "Entendido. ¿Y las ventanas también las cierro?", ok: true },
            { t: "D'accord. Je ferme la porte avec clé ?", es: "De acuerdo. ¿Cierro la puerta con llave?", ok: false,
              fix: "«Cerrar con llave» se dice «fermer à clé». La preposición «avec» es un calco del español." }
          ],
          clave: ["je ferme", "la porte", "fenêtres"],
          tip: "Cerrar la puerta ayuda a frenar el humo; no ponerle llave permite que los equipos de emergencia entren." },
        { bot: "Ensuite, vous allez au point de rassemblement, dans la cour, et vous faites l'appel.", es: "Luego va al punto de encuentro, en el patio, y llama a lista.",
          opciones: [
            { t: "Je fais l'appel avec la liste de la classe.", es: "Llamo a lista con la lista del grupo.", ok: true },
            { t: "D'accord. Je prends la liste de la classe pour faire l'appel au point de rassemblement.", es: "De acuerdo. Llevo la lista del grupo para llamar a lista en el punto de encuentro.", ok: true },
            { t: "D'accord. Je vais au point de rassemblement dans le patio.", es: "De acuerdo. Voy al punto de encuentro en el patio.", ok: false,
              fix: "En el colegio, el patio es «la cour» (de récréation). «Le patio» en francés es un patio interior de una casa." }
          ],
          clave: ["l'appel", "liste", "rassemblement"],
          tip: "«Faire l'appel» = llamar a lista. Es lo primero que se hace al llegar al punto de encuentro." },
        { bot: "Imaginons que l'alarme sonne. Qu'est-ce que vous dites aux élèves ?", es: "Imaginemos que suena la alarma. ¿Qué les dice a los estudiantes?",
          opciones: [
            { t: "Mettez-vous en rang, on sort calmement !", es: "¡Hagan la fila, salimos con calma!", ok: true },
            { t: "Laissez vos affaires, mettez-vous en rang et suivez-moi. Ne courez pas !", es: "Dejen sus cosas, hagan la fila y síganme. ¡No corran!", ok: true },
            { t: "Mettez-vous en rang et suivez-moi. Non courez pas !", es: "Hagan la fila y síganme. ¡No corran!", ok: false,
              fix: "La negación francesa rodea al verbo con «ne… pas»: «Ne courez pas !». «Non» no se pone delante de un verbo." }
          ],
          clave: ["en rang", "suivez-moi", "ne courez pas"],
          tip: "Da instrucciones cortas, en imperativo y con voz tranquila: la calma del adulto se contagia al grupo." },
        { bot: "Parfait. Et si un élève manque à l'appel ?", es: "Perfecto. ¿Y si falta un estudiante al llamar a lista?",
          opciones: [
            { t: "Je vous préviens tout de suite.", es: "Le aviso de inmediato.", ok: true },
            { t: "Je ne retourne pas dans le bâtiment : je vous préviens immédiatement et je vous donne son nom.", es: "No vuelvo a entrar al edificio: le aviso de inmediato y le doy su nombre.", ok: true },
            { t: "Je vous avise tout de suite.", es: "Le aviso de inmediato.", ok: false,
              fix: "«Aviser» existe, pero es administrativo y poco usado. Para «avisar a alguien» lo natural es «prévenir»: «je vous préviens tout de suite»." }
          ],
          clave: ["je vous préviens", "son nom", "bâtiment"],
          tip: "Nunca se regresa al edificio a buscar a alguien: se informa al coordinador, que alerta a los servicios de emergencia." }
      ],
      cierre: { bot: "Exactement. Merci, et à tout à l'heure, à dix heures !", es: "Exacto. Gracias, ¡y nos vemos más tarde, a las diez!" },
      vocab: [
        { t: "un exercice d'évacuation", es: "un simulacro de evacuación (≠ un simulacre)" },
        { t: "les consignes (f.)", es: "las instrucciones" },
        { t: "se mettre en rang", es: "hacer la fila" },
        { t: "fermer à clé", es: "cerrar con llave" },
        { t: "le point de rassemblement", es: "el punto de encuentro" },
        { t: "la cour", es: "el patio del colegio" },
        { t: "faire l'appel", es: "llamar a lista" },
        { t: "prévenir", es: "avisar" }
      ]
    },

    /* ───────────── 17 · B1 · Explicar una rúbrica ───────────── */
    {
      id: "fr-17", titulo: "La rúbrica explicada a un estudiante", nivel: "B1",
      tema: "Evaluación: explicar una rúbrica",
      contexto: "En un liceo aliado, un estudiante no entiende cómo se va a calificar su exposición oral. Le explicas la rúbrica con calma.",
      rol: "Lucas, estudiante de 15 años (seconde), algo desconfiado de las notas",
      turnos: [
        { bot: "Madame, je ne comprends pas la grille d'évaluation de l'exposé. C'est quoi, exactement ?", es: "Profe, no entiendo la rúbrica de la exposición. ¿Qué es exactamente?",
          opciones: [
            { t: "C'est un tableau qui montre ce que j'évalue et à quel niveau.", es: "Es una tabla que muestra lo que evalúo y en qué nivel.", ok: true },
            { t: "C'est une grille qui décrit chaque critère et ce qu'il faut faire pour atteindre chaque niveau. Je te l'explique ?", es: "Es una tabla que describe cada criterio y lo que hay que hacer para alcanzar cada nivel. ¿Te la explico?", ok: true },
            { t: "C'est une rubrique avec les critères de l'exposé.", es: "Es una rúbrica con los criterios de la exposición.", ok: false,
              fix: "Falso amigo: «une rubrique» es una sección de un periódico o un apartado. La rúbrica de evaluación es «une grille d'évaluation»." }
          ],
          clave: ["grille", "critère", "niveau"],
          tip: "En Francia la rúbrica se llama «grille d'évaluation». Compartirla antes de la tarea hace la evaluación más transparente." },
        { bot: "Oui, s'il vous plaît. Il y a combien de critères ?", es: "Sí, por favor. ¿Cuántos criterios hay?",
          opciones: [
            { t: "Il y a quatre critères : le contenu, l'organisation, l'expression orale et les supports visuels.", es: "Hay cuatro criterios: el contenido, la organización, la expresión oral y los apoyos visuales.", ok: true },
            { t: "Quatre : le contenu, l'organisation, l'oral et les supports. Ils ont tous le même poids.", es: "Cuatro: el contenido, la organización, la parte oral y los apoyos. Todos tienen el mismo peso.", ok: true },
            { t: "Il y a quatre critères, et chaque critère vaut le même.", es: "Hay cuatro criterios, y cada criterio vale lo mismo.", ok: false,
              fix: "«Valer lo mismo» no se traduce palabra por palabra. Se dice «chaque critère compte autant» o «a le même poids»." }
          ],
          clave: ["quatre critères", "contenu", "organisation"],
          tip: "Pocos criterios bien descritos funcionan mejor que una lista larga: el estudiante puede recordarlos mientras trabaja." },
        { bot: "Et la différence entre « satisfaisant » et « très bien », c'est quoi ?", es: "¿Y cuál es la diferencia entre «satisfactorio» y «muy bien»?",
          opciones: [
            { t: "Pour « très bien », tu dois expliquer avec tes propres mots et donner des exemples.", es: "Para «muy bien», debes explicar con tus propias palabras y dar ejemplos.", ok: true },
            { t: "Au niveau « satisfaisant », tu présentes les idées correctement. Pour « très bien », tu les relies entre elles et tu les illustres avec des exemples concrets.", es: "En el nivel «satisfactorio», presentas las ideas correctamente. Para «muy bien», las relacionas entre sí y las ilustras con ejemplos concretos.", ok: true },
            { t: "Pour « très bien », il faut que tu donnes exemples.", es: "Para «muy bien», tienes que dar ejemplos.", ok: false,
              fix: "En francés el sustantivo casi nunca va sin determinante: «il faut que tu donnes des exemples»." }
          ],
          clave: ["exemples", "propres mots", "très bien"],
          tip: "Describe los niveles con verbos observables (relier, illustrer, justifier): así el estudiante sabe qué hacer." },
        { bot: "D'accord. Mais l'année dernière, j'ai eu une mauvaise note et je ne savais pas pourquoi.", es: "De acuerdo. Pero el año pasado saqué una mala nota y no sabía por qué.",
          opciones: [
            { t: "Je comprends. Avec la grille, tu sauras exactement ce qui te manque.", es: "Entiendo. Con la rúbrica sabrás exactamente qué te falta.", ok: true },
            { t: "Je comprends que ce soit frustrant. Cette fois, je te rendrai la grille annotée : tu verras où tu en es pour chaque critère.", es: "Entiendo que sea frustrante. Esta vez te devolveré la rúbrica con anotaciones: verás en qué punto estás en cada criterio.", ok: true },
            { t: "Je comprends. Avec la grille, tu vas savoir ce que te manque.", es: "Entiendo. Con la rúbrica vas a saber qué te falta.", ok: false,
              fix: "Cuando «lo que» es sujeto del verbo se usa «ce qui»: «ce qui te manque». «Ce que» es para el complemento: «ce que tu dois faire»." }
          ],
          clave: ["je comprends", "grille", "ce qui"],
          tip: "Valida la emoción antes de explicar: «je comprends que ce soit frustrant». Luego ofrece una herramienta concreta." },
        { bot: "Je peux utiliser la grille pour préparer mon exposé ?", es: "¿Puedo usar la rúbrica para preparar mi exposición?",
          opciones: [
            { t: "Bien sûr ! C'est fait pour ça.", es: "¡Claro! Para eso está hecha.", ok: true },
            { t: "Absolument. Tu peux même t'autoévaluer avant de présenter, et on en parle ensemble.", es: "Por supuesto. Incluso puedes autoevaluarte antes de presentar y lo hablamos juntos.", ok: true },
            { t: "Bien sûr ! Et si tu as des questions, tu peux me les faire.", es: "¡Claro! Y si tienes preguntas, me las puedes hacer.", ok: false,
              fix: "Las preguntas se «posent», no se «font»: «tu peux me les poser». «Faire une question» es un calco de «hacer una pregunta»." }
          ],
          clave: ["bien sûr", "t'autoévaluer", "poser"],
          tip: "Invitar a la autoevaluación convierte la rúbrica en una herramienta para aprender, no solo para calificar." },
        { bot: "Et si je ne suis pas d'accord avec ma note ?", es: "¿Y si no estoy de acuerdo con mi nota?",
          opciones: [
            { t: "On en parle ensemble, avec la grille.", es: "Lo hablamos juntos, con la rúbrica.", ok: true },
            { t: "Tu viens me voir et on regarde ensemble chaque critère. Si je me suis trompée, je corrige.", es: "Vienes a verme y revisamos juntos cada criterio. Si me equivoqué, corrijo.", ok: true },
            { t: "On en parle ensemble. Si je me suis équivoquée, je corrige.", es: "Lo hablamos juntos. Si me equivoqué, corrijo.", ok: false,
              fix: "«S'équivoquer» no existe en francés. Equivocarse se dice «se tromper»: «si je me suis trompée»." }
          ],
          clave: ["ensemble", "critère", "trompée"],
          tip: "Reconocer que tú también puedes equivocarte modela la pedagogía del error y le da confianza al estudiante." }
      ],
      cierre: { bot: "Ah, d'accord. C'est beaucoup plus clair maintenant. Merci, madame !", es: "Ah, de acuerdo. Ahora está mucho más claro. ¡Gracias, profe!" },
      vocab: [
        { t: "la grille d'évaluation", es: "la rúbrica (≠ la rubrique)" },
        { t: "un critère", es: "un criterio" },
        { t: "un exposé", es: "una exposición oral" },
        { t: "le poids", es: "el peso" },
        { t: "s'autoévaluer", es: "autoevaluarse" },
        { t: "poser une question", es: "hacer una pregunta" },
        { t: "se tromper", es: "equivocarse" },
        { t: "annoté(e)", es: "con anotaciones" }
      ]
    },

    /* ───────────── 18 · B1 · Permiso de salida pedagógica ───────────── */
    {
      id: "fr-18", titulo: "Permiso para la salida pedagógica", nivel: "B1",
      tema: "Reunión con familia: autorización de salida",
      contexto: "Organizas una salida a una granja pedagógica con un grupo de séptimo en un colegio francés. Un padre te llama con dudas antes de firmar el permiso.",
      rol: "M. Olivier Rousseau, padre de Chloé (5e), prudente y detallista",
      turnos: [
        { bot: "Allô, bonjour. J'ai reçu l'autorisation de sortie pour Chloé, mais j'ai quelques questions.", es: "Aló, buenos días. Recibí el permiso de salida de Chloé, pero tengo algunas preguntas.",
          opciones: [
            { t: "Bonjour, monsieur Rousseau. Bien sûr, je vous écoute.", es: "Buenos días, señor Rousseau. Claro, lo escucho.", ok: true },
            { t: "Bonjour, monsieur. Merci de m'appeler ; je suis là pour répondre à toutes vos questions.", es: "Buenos días, señor. Gracias por llamarme; estoy aquí para responder todas sus preguntas.", ok: true },
            { t: "Bonjour, monsieur Rousseau. Bien sûr, je vous entends.", es: "Buenos días, señor Rousseau. Claro, lo escucho.", ok: false,
              fix: "«Entendre» es oír (percibir el sonido). Para invitar a alguien a hablar se dice «je vous écoute»." }
          ],
          clave: ["je vous écoute", "questions"],
          tip: "«Je vous écoute» es la fórmula profesional para dar la palabra, sobre todo por teléfono." },
        { bot: "La sortie, c'est où exactement, et comment les enfants vont y aller ?", es: "¿La salida es a dónde exactamente, y cómo van a ir los niños?",
          opciones: [
            { t: "On va dans une ferme pédagogique, près de la ville. On y va en car.", es: "Vamos a una granja pedagógica, cerca de la ciudad. Vamos en bus.", ok: true },
            { t: "Nous allons visiter une ferme pédagogique. Le trajet se fait en car, avec un départ du collège à huit heures et demie.", es: "Vamos a visitar una granja pedagógica. El trayecto se hace en bus, con salida desde el colegio a las ocho y media.", ok: true },
            { t: "On y va en car. Le départ est à huit heures et demi.", es: "Vamos en bus. La salida es a las ocho y media.", ok: false,
              fix: "Después de «heures» (femenino), «demi» concuerda: «huit heures et demie». Pero «midi et demi», porque «midi» es masculino." }
          ],
          clave: ["ferme pédagogique", "en car", "départ"],
          tip: "En Francia «le car» es el bus de viaje o escolar; «le bus», el urbano. «Car» no tiene nada que ver con un carro." },
        { bot: "Et qui accompagne les élèves ? Il y aura assez d'adultes ?", es: "¿Y quién acompaña a los estudiantes? ¿Habrá suficientes adultos?",
          opciones: [
            { t: "Oui : deux enseignants et deux parents volontaires.", es: "Sí: dos docentes y dos padres de familia voluntarios.", ok: true },
            { t: "Oui, il y aura deux enseignants et deux parents accompagnateurs, et chaque adulte sera responsable d'un petit groupe.", es: "Sí, habrá dos docentes y dos padres acompañantes, y cada adulto estará a cargo de un grupo pequeño.", ok: true },
            { t: "Oui, il y aura deux professeurs et deux pères volontaires.", es: "Sí, habrá dos profesores y dos padres de familia voluntarios.", ok: false,
              fix: "«Les pères» son solo los papás. Para «padres de familia» en general se dice «les parents»: «deux parents volontaires»." }
          ],
          clave: ["parents", "accompagnateurs", "groupe"],
          tip: "«Les parents» incluye a mamás y papás. «Les pères» se refiere solo a los hombres." },
        { bot: "Chloé a de l'asthme. Elle doit prendre son inhalateur ?", es: "Chloé tiene asma. ¿Debe llevar su inhalador?",
          opciones: [
            { t: "Oui, absolument. Mettez-le dans son sac, avec son nom.", es: "Sí, por supuesto. Póngalo en su maleta, marcado con su nombre.", ok: true },
            { t: "Oui, c'est indispensable. Pourriez-vous aussi indiquer sur la fiche sanitaire ce qu'il faut faire en cas de crise ?", es: "Sí, es indispensable. ¿Podría indicar también en la ficha de salud qué hay que hacer en caso de crisis?", ok: true },
            { t: "Oui, il faut qu'elle le prend avec elle.", es: "Sí, es necesario que lo lleve consigo.", ok: false,
              fix: "«Il faut que» va siempre con subjuntivo: «il faut qu'elle le prenne avec elle»." }
          ],
          clave: ["inhalateur", "fiche sanitaire", "crise"],
          tip: "«Il faut que» siempre pide subjuntivo: «qu'elle prenne», «qu'il fasse», «que vous signiez»." },
        { bot: "Et pour le repas ? Elle doit apporter quelque chose ?", es: "¿Y para el almuerzo? ¿Debe llevar algo?",
          opciones: [
            { t: "Oui, un pique-nique et une bouteille d'eau.", es: "Sí, un almuerzo empacado y una botella de agua.", ok: true },
            { t: "Oui, il faut prévoir un pique-nique, une bouteille d'eau et des vêtements adaptés à la météo.", es: "Sí, hay que llevar un almuerzo empacado, una botella de agua y ropa adecuada para el clima.", ok: true },
            { t: "Oui, un pique-nique et des vêtements commodes.", es: "Sí, un almuerzo empacado y ropa cómoda.", ok: false,
              fix: "Falso amigo: «commode» significa práctico (y «une commode» es un mueble). Ropa cómoda se dice «des vêtements confortables»." }
          ],
          clave: ["pique-nique", "bouteille d'eau", "vêtements"],
          tip: "«Il faut prévoir…» (hay que llevar, tener previsto) es la frase típica de las circulares escolares francesas." },
        { bot: "Très bien. Je signe l'autorisation et je la rends quand ?", es: "Muy bien. Firmo el permiso y ¿cuándo lo entrego?",
          opciones: [
            { t: "Avant vendredi, s'il vous plaît, dans le cahier de liaison.", es: "Antes del viernes, por favor, en el cuaderno de comunicaciones.", ok: true },
            { t: "Si possible avant vendredi : vous pouvez la glisser dans le cahier de liaison de Chloé. Merci pour votre confiance.", es: "Si es posible, antes del viernes: puede meterlo en el cuaderno de comunicaciones de Chloé. Gracias por su confianza.", ok: true },
            { t: "Avant vendredi, s'il vous plaît. Merci pour votre confidence.", es: "Antes del viernes, por favor. Gracias por su confianza.", ok: false,
              fix: "Falso amigo: «une confidence» es un secreto que se le cuenta a alguien. Confianza se dice «la confiance»." }
          ],
          clave: ["avant vendredi", "cahier de liaison", "confiance"],
          tip: "«Le cahier de liaison» es el cuaderno de comunicaciones entre colegio y familia, muy usado en Francia." }
      ],
      cierre: { bot: "Parfait, je suis rassuré. Merci pour toutes ces précisions, et bonne journée !", es: "Perfecto, quedo tranquilo. Gracias por todas estas precisiones, ¡y que tenga buen día!" },
      vocab: [
        { t: "une sortie scolaire", es: "una salida pedagógica" },
        { t: "l'autorisation de sortie", es: "el permiso de salida" },
        { t: "le car", es: "el bus de viaje o escolar" },
        { t: "un accompagnateur", es: "un acompañante" },
        { t: "la fiche sanitaire", es: "la ficha de salud" },
        { t: "prévoir", es: "prever, llevar previsto" },
        { t: "le cahier de liaison", es: "el cuaderno de comunicaciones" },
        { t: "la confiance", es: "la confianza (≠ une confidence)" }
      ]
    },

    /* ───────────── 19 · B1 · Problemas técnicos en clase virtual ───────────── */
    {
      id: "fr-19", titulo: "Clase virtual con fallas técnicas", nivel: "B1",
      tema: "Clase virtual: resolver problemas técnicos",
      contexto: "Codiriges una clase virtual entre estudiantes de Cali y de Grenoble. Empiezan los problemas técnicos y debes resolverlos sin perder la clase.",
      rol: "Camille Roux, docente francesa que codirige la clase contigo, tranquila y resolutiva",
      turnos: [
        { bot: "Allô ? Tu m'entends ? Ton micro coupe toutes les deux secondes.", es: "¿Aló? ¿Me oyes? Tu micrófono se corta cada dos segundos.",
          opciones: [
            { t: "Oui, je t'entends. Attends, je vérifie mon micro.", es: "Sí, te oigo. Espera, reviso mi micrófono.", ok: true },
            { t: "Moi, je t'entends bien, mais toi, apparemment non. Je débranche mon casque et je le rebranche.", es: "Yo te oigo bien, pero tú a mí, al parecer, no. Desconecto mis audífonos y los vuelvo a conectar.", ok: true },
            { t: "Oui, je t'écoute bien. Je vérifie mon micro.", es: "Sí, te oigo bien. Reviso mi micrófono.", ok: false,
              fix: "Para la calidad del sonido se usa «entendre» (oír): «je t'entends bien». «Écouter» es prestar atención a algo." }
          ],
          clave: ["je t'entends", "micro", "vérifie"],
          tip: "Frases de oro en videollamadas: «Tu m'entends ?», «Tu me vois ?», «Ça coupe»." },
        { bot: "C'est mieux. Mais les élèves disent qu'ils ne voient pas ton écran.", es: "Mejor. Pero los estudiantes dicen que no ven tu pantalla.",
          opciones: [
            { t: "Ah, j'ai oublié de partager mon écran. Je le fais maintenant.", es: "Ah, se me olvidó compartir la pantalla. Lo hago ya.", ok: true },
            { t: "Pardon, je n'avais pas activé le partage d'écran. Voilà : est-ce que vous voyez la présentation ?", es: "Perdón, no había activado la opción de compartir pantalla. Listo: ¿ven la presentación?", ok: true },
            { t: "Ah, je me suis oublié de partager l'écran.", es: "Ah, se me olvidó compartir la pantalla.", ok: false,
              fix: "«Oublier» no es pronominal: «j'ai oublié de partager l'écran». El «se me» de «se me olvidó» no pasa al francés." }
          ],
          clave: ["partager", "écran", "présentation"],
          tip: "«Partager l'écran» = compartir pantalla. «J'ai oublié de…» se dice sin pronombre reflexivo." },
        { bot: "Oui, on la voit. Par contre, deux élèves de Cali ont été déconnectés.", es: "Sí, la vemos. En cambio, dos estudiantes de Cali se desconectaron.",
          opciones: [
            { t: "Je leur envoie le lien encore une fois dans le chat.", es: "Les envío el enlace otra vez por el chat.", ok: true },
            { t: "Je leur renvoie le lien par message. En attendant, tu peux commencer l'activité avec les autres ?", es: "Les reenvío el enlace por mensaje. Mientras tanto, ¿puedes empezar la actividad con los demás?", ok: true },
            { t: "Je les envoie le lien dans le chat.", es: "Les envío el enlace por el chat.", ok: false,
              fix: "Con «envoyer quelque chose à quelqu'un», la persona es complemento indirecto: «je leur envoie le lien». «Les» sería el objeto enviado." }
          ],
          clave: ["leur", "lien", "en attendant"],
          tip: "«Renvoyer» = volver a enviar. El prefijo re- funciona como en español: refaire, relire, reconnecter." },
        { bot: "D'accord. Ah, ils sont revenus, mais la connexion est très lente de leur côté.", es: "De acuerdo. Ah, volvieron, pero la conexión de ellos está muy lenta.",
          opciones: [
            { t: "On peut leur demander de couper leur caméra.", es: "Podemos pedirles que apaguen la cámara.", ok: true },
            { t: "Proposons-leur de désactiver la caméra : ça devrait améliorer le son. Et je mettrai l'enregistrement en ligne après.", es: "Propongámosles desactivar la cámara: eso debería mejorar el sonido. Y después subo la grabación.", ok: true },
            { t: "On peut leur demander qu'ils coupent la caméra.", es: "Podemos pedirles que apaguen la cámara.", ok: false,
              fix: "La estructura natural es «demander à quelqu'un de + infinitivo»: «leur demander de couper leur caméra»." }
          ],
          clave: ["caméra", "couper", "enregistrement"],
          tip: "«Couper» sirve para cámara y micrófono: «coupe ton micro, s'il te plaît». Apagar la cámara libera conexión." },
        { bot: "Bonne idée. Tu as prévu un plan B si la plateforme plante complètement ?", es: "Buena idea. ¿Tienes un plan B si la plataforma se cae por completo?",
          opciones: [
            { t: "Oui, j'ai un document avec les activités. Je peux l'envoyer par e-mail.", es: "Sí, tengo un documento con las actividades. Lo puedo enviar por correo.", ok: true },
            { t: "Oui : si tout plante, j'envoie le document de travail par e-mail et on reprend la séance demain à la même heure.", es: "Sí: si todo se cae, envío el documento de trabajo por correo y retomamos la sesión mañana a la misma hora.", ok: true },
            { t: "Oui. Si la plateforme se tombe, j'envoie les activités par e-mail.", es: "Sí. Si la plataforma se cae, envío las actividades por correo.", ok: false,
              fix: "«Tomber» no es pronominal, y para un programa se dice «planter» o «tomber en panne»: «si la plateforme plante»." }
          ],
          clave: ["plan B", "plante", "e-mail"],
          tip: "«Planter» (coloquial) = colgarse o caerse un programa. Tener un plan B escrito evita perder la clase entera." },
        { bot: "Parfait. On reprend ? Les élèves attendent.", es: "Perfecto. ¿Seguimos? Los estudiantes están esperando.",
          opciones: [
            { t: "Oui, on reprend. Merci pour ta patience !", es: "Sí, seguimos. ¡Gracias por tu paciencia!", ok: true },
            { t: "On reprend. Pardon pour ces problèmes techniques, et merci à tous pour votre patience !", es: "Seguimos. Perdón por estos problemas técnicos, ¡y gracias a todos por su paciencia!", ok: true },
            { t: "Oui, on reprend. Pardon de te molester avec tout ça.", es: "Sí, seguimos. Perdón por molestarte con todo esto.", ok: false,
              fix: "Falso amigo grave: «molester» significa maltratar o agredir. «Molestar» se dice «déranger»: «pardon de te déranger»." }
          ],
          clave: ["on reprend", "patience", "pardon"],
          tip: "Ojo con «molester»: es un falso amigo serio. Para molestar o interrumpir, usa siempre «déranger»." }
      ],
      cierre: { bot: "Pas de souci, ça arrive à tout le monde. Allez, on y va !", es: "Tranquilo, le pasa a cualquiera. ¡Vamos, arrancamos!" },
      vocab: [
        { t: "le micro", es: "el micrófono" },
        { t: "ça coupe", es: "se corta" },
        { t: "partager l'écran", es: "compartir pantalla" },
        { t: "le lien", es: "el enlace" },
        { t: "planter", es: "colgarse, caerse (un programa)" },
        { t: "l'enregistrement (m.)", es: "la grabación" },
        { t: "reprendre", es: "retomar, seguir" },
        { t: "déranger", es: "molestar (≠ molester)" }
      ]
    },

    /* ───────────── 20 · B1 · Club de lectura ───────────── */
    {
      id: "fr-20", titulo: "El club de lectura docente", nivel: "B1",
      tema: "Club de lectura",
      contexto: "Participas en el club de lectura de docentes de un colegio aliado en Lyon. Hoy comentan la novela del mes y proponen la siguiente.",
      rol: "M. Bastien Morel, bibliotecario del colegio que anima el club, curioso y conversador",
      turnos: [
        { bot: "Bienvenue au club ! Alors, vous avez aimé « La Maison aux volets bleus » ?", es: "¡Bienvenido(a) al club! Entonces, ¿le gustó «La casa de los postigos azules»?",
          opciones: [
            { t: "Oui, beaucoup. Je l'ai lu en une semaine.", es: "Sí, mucho. Lo leí en una semana.", ok: true },
            { t: "Oui, énormément. Je n'arrivais plus à le lâcher : je l'ai lu en trois soirées.", es: "Sí, muchísimo. No podía soltarlo: lo leí en tres noches.", ok: true },
            { t: "Oui, je l'ai aimé beaucoup.", es: "Sí, me gustó mucho.", ok: false,
              fix: "En los tiempos compuestos, «beaucoup» va entre el auxiliar y el participio: «je l'ai beaucoup aimé»." }
          ],
          clave: ["je l'ai", "beaucoup", "lu"],
          tip: "«Beaucoup, bien, déjà, trop» se colocan entre el auxiliar y el participio: «je l'ai beaucoup aimé», «j'ai bien dormi»." },
        { bot: "Quel personnage vous a le plus marqué ?", es: "¿Qué personaje lo(a) marcó más?",
          opciones: [
            { t: "La grand-mère, parce qu'elle garde la mémoire de la famille.", es: "La abuela, porque guarda la memoria de la familia.", ok: true },
            { t: "Sans hésiter, la grand-mère : c'est elle qui transmet l'histoire familiale, sans jamais faire la morale.", es: "Sin dudarlo, la abuela: es ella quien transmite la historia familiar, sin sermonear nunca.", ok: true },
            { t: "La grand-mère, parce qu'elle se rappelle de tout.", es: "La abuela, porque se acuerda de todo.", ok: false,
              fix: "«Se rappeler» no lleva «de»: «elle se rappelle tout». Con «de» se usa «se souvenir»: «elle se souvient de tout»." }
          ],
          clave: ["personnage", "parce qu'", "grand-mère"],
          tip: "«Se souvenir de» lleva «de»; «se rappeler», no. Si dudas, usa «se souvenir de»." },
        { bot: "Intéressant. Et la fin, vous l'avez trouvée comment ?", es: "Interesante. ¿Y el final qué le pareció?",
          opciones: [
            { t: "Un peu triste, mais logique.", es: "Un poco triste, pero lógico.", ok: true },
            { t: "Je l'ai trouvée ouverte : l'autrice laisse le lecteur imaginer la suite, et ça m'a fait réfléchir.", es: "Me pareció abierto: la autora deja que el lector imagine lo que sigue, y eso me hizo reflexionar.", ok: true },
            { t: "La fin ? Je l'ai trouvé un peu triste.", es: "¿El final? Me pareció un poco triste.", ok: false,
              fix: "Con «avoir», el participio concuerda con el complemento directo que va antes: «la fin, je l'ai trouvée triste». Ojo: «la fin» es femenino." }
          ],
          clave: ["trouvée", "fin", "réfléchir"],
          tip: "En «trouvée» la concordancia no se oye, pero sí en «prise» o «faite»: «cette décision, je l'ai prise»." },
        { bot: "Est-ce que vous pourriez utiliser ce livre avec vos élèves ?", es: "¿Podría usar este libro con sus estudiantes?",
          opciones: [
            { t: "Oui, avec les plus grands, pour parler de la mémoire et de la famille.", es: "Sí, con los más grandes, para hablar de la memoria y la familia.", ok: true },
            { t: "Je pense que oui, avec des élèves de quatorze ou quinze ans : on pourrait comparer la famille du roman avec les histoires de leurs grands-parents.", es: "Creo que sí, con estudiantes de catorce o quince años: podríamos comparar la familia de la novela con las historias de sus abuelos.", ok: true },
            { t: "Oui, mais le roman est un peu large pour des enfants.", es: "Sí, pero la novela es un poco larga para niños.", ok: false,
              fix: "Falso amigo: «large» significa ancho. Largo (extenso) se dice «long»: «le roman est un peu long»." }
          ],
          clave: ["élèves", "comparer", "grands-parents"],
          tip: "Conectar la lectura con la historia familiar del estudiante convierte el libro en una experiencia significativa." },
        { bot: "Excellente idée. Et pour le mois prochain, vous avez une suggestion de lecture ?", es: "Excelente idea. ¿Y para el próximo mes tiene alguna sugerencia de lectura?",
          opciones: [
            { t: "Oui, un roman colombien traduit en français, si possible.", es: "Sí, una novela colombiana traducida al francés, si es posible.", ok: true },
            { t: "Pourquoi pas un roman d'une autrice colombienne traduit en français ? Ce serait l'occasion de découvrir une autre culture.", es: "¿Por qué no una novela de una autora colombiana traducida al francés? Sería la ocasión de descubrir otra cultura.", ok: true },
            { t: "Je suggère que nous lisons un roman colombien.", es: "Sugiero que leamos una novela colombiana.", ok: false,
              fix: "«Suggérer que» pide subjuntivo, igual que en español: «je suggère que nous lisions un roman colombien»." }
          ],
          clave: ["roman", "colombien", "traduit"],
          tip: "Los verbos de sugerencia o deseo (suggérer, proposer, vouloir que) piden subjuntivo: «que nous lisions»." },
        { bot: "J'adore l'idée. Vous pourriez nous le présenter à la prochaine séance ?", es: "Me encanta la idea. ¿Nos lo podría presentar en la próxima sesión?",
          opciones: [
            { t: "Avec plaisir. Je prépare une courte présentation.", es: "Con gusto. Preparo una presentación corta.", ok: true },
            { t: "Avec grand plaisir. Je préparerai une petite présentation de l'autrice et du contexte, avec quelques extraits.", es: "Con mucho gusto. Prepararé una pequeña presentación de la autora y del contexto, con algunos fragmentos.", ok: true },
            { t: "Avec plaisir. Je vais le présenter en la prochaine séance.", es: "Con gusto. Lo voy a presentar en la próxima sesión.", ok: false,
              fix: "«En la próxima sesión» se dice «à la prochaine séance». Con reuniones y eventos se usa «à»." }
          ],
          clave: ["avec plaisir", "présentation", "extraits"],
          tip: "«À la prochaine séance», «à la prochaine réunion». Y «À la prochaine !» también sirve como despedida." }
      ],
      cierre: { bot: "Merci ! Notre club de lecture devient vraiment international. À la prochaine !", es: "¡Gracias! Nuestro club de lectura se está volviendo realmente internacional. ¡Hasta la próxima!" },
      vocab: [
        { t: "un club de lecture", es: "un club de lectura" },
        { t: "un personnage", es: "un personaje" },
        { t: "se souvenir de", es: "acordarse de" },
        { t: "la fin", es: "el final" },
        { t: "long / longue", es: "largo(a) (≠ large, ancho)" },
        { t: "un extrait", es: "un fragmento" },
        { t: "l'autrice (f.)", es: "la autora" },
        { t: "la séance", es: "la sesión" }
      ]
    },
    /* ───────────── 21 · B1 · Presentar Cali y el Pacífico ───────────── */
    {
      id: "fr-21", titulo: "Cali y la cultura del Pacífico", nivel: "B1",
      tema: "Presentar tu ciudad y tu cultura",
      contexto: "En un encuentro de docentes en Montpellier, una colega te pide que le presentes Cali y la cultura del Pacífico colombiano.",
      rol: "Mme Élodie Marchand, profesora de geografía, curiosa y entusiasta",
      turnos: [
        { bot: "Alors, comment décririez-vous Cali en quelques mots ?", es: "Entonces, ¿cómo describiría Cali en pocas palabras?",
          opciones: [
            { t: "C'est une ville chaleureuse, où la musique est partout.", es: "Es una ciudad cálida, donde la música está en todas partes.", ok: true },
            { t: "C'est une ville chaleureuse et multiculturelle, qu'on surnomme souvent la capitale mondiale de la salsa.", es: "Es una ciudad cálida y multicultural, a la que a menudo apodan la capital mundial de la salsa.", ok: true },
            { t: "C'est une ville qui se trouve au sud-ouest de Colombie.", es: "Es una ciudad que queda en el suroccidente de Colombia.", ok: false,
              fix: "Aquí «de» acompaña a una ubicación geográfica, no indica origen, así que el país lleva artículo: «au sud-ouest de la Colombie». Se dice «je viens de Colombie», pero «le sud-ouest de la Colombie»." }
          ],
          clave: ["chaleureuse", "salsa", "musique"],
          tip: "«Chaleureux / chaleureuse» = cálido(a), acogedor(a), para personas y lugares. «Chaud» se refiere solo a la temperatura." },
        { bot: "La salsa, je connais un peu. Mais vous parlez aussi de la culture du Pacifique. C'est quoi, exactement ?", es: "La salsa la conozco un poco. Pero usted también habla de la cultura del Pacífico. ¿Qué es exactamente?",
          opciones: [
            { t: "C'est la culture afro-colombienne de la côte pacifique, très présente à Cali.", es: "Es la cultura afrocolombiana de la costa pacífica, muy presente en Cali.", ok: true },
            { t: "C'est l'héritage des communautés afro-colombiennes de la côte pacifique : la musique, la cuisine, les traditions orales. Beaucoup de familles de Cali ont leurs racines là-bas.", es: "Es la herencia de las comunidades afrocolombianas de la costa pacífica: la música, la cocina, las tradiciones orales. Muchas familias de Cali tienen sus raíces allá.", ok: true },
            { t: "C'est la culture afro-colombienne de la côte. Elle est très présente en Cali.", es: "Es la cultura afrocolombiana de la costa. Está muy presente en Cali.", ok: false,
              fix: "Con nombres de ciudad se usa «à»: «très présente à Cali». «En» se usa con países femeninos: «en Colombie»." }
          ],
          clave: ["afro-colombienne", "côte pacifique", "racines"],
          tip: "Ciudades con «à» (à Cali, à Lyon); países femeninos con «en» (en Colombie); masculinos con «au» (au Pérou)." },
        { bot: "Et la musique du Pacifique, elle ressemble à quoi ?", es: "¿Y cómo es la música del Pacífico?",
          opciones: [
            { t: "On joue de la marimba et des tambours, et on chante beaucoup.", es: "Se toca la marimba y los tambores, y se canta mucho.", ok: true },
            { t: "Elle repose sur la marimba de chonta, des tambours comme le cununo et des chants traditionnels. La musique de marimba et les chants traditionnels du Pacifique Sud colombien sont inscrits au patrimoine culturel immatériel de l'UNESCO.", es: "Se basa en la marimba de chonta, tambores como el cununo y cantos tradicionales. La música de marimba y los cantos tradicionales del Pacífico Sur colombiano están inscritos en el patrimonio cultural inmaterial de la UNESCO.", ok: true },
            { t: "On joue la marimba et les tambours.", es: "Se toca la marimba y los tambores.", ok: false,
              fix: "Para instrumentos se dice «jouer de»: «on joue de la marimba, des tambours». «Jouer à» es para juegos y deportes." }
          ],
          clave: ["marimba", "tambours", "chants"],
          tip: "«Jouer de la guitare» (instrumento), pero «jouer au football» (deporte). La preposición cambia según la actividad." },
        { bot: "Fascinant. Il y a un événement où on peut découvrir tout ça ?", es: "Fascinante. ¿Hay algún evento donde se pueda conocer todo eso?",
          opciones: [
            { t: "Oui, le festival Petronio Álvarez, chaque année à Cali.", es: "Sí, el festival Petronio Álvarez, cada año en Cali.", ok: true },
            { t: "Oui, le festival Petronio Álvarez, qui a lieu chaque année à Cali, en général au mois d'août. Il réunit des groupes de toute la côte pacifique.", es: "Sí, el festival Petronio Álvarez, que se realiza cada año en Cali, por lo general en agosto. Reúne grupos de toda la costa pacífica.", ok: true },
            { t: "Oui, le festival Petronio Álvarez tient lieu chaque année à Cali.", es: "Sí, el festival Petronio Álvarez tiene lugar cada año en Cali.", ok: false,
              fix: "Calco peligroso: «tenir lieu de» significa «hacer las veces de». «Tener lugar» se dice «avoir lieu»: «le festival a lieu chaque année»." }
          ],
          clave: ["festival", "a lieu", "chaque année"],
          tip: "«Avoir lieu» = tener lugar, realizarse. Ojo: «tenir lieu de» significa reemplazar, hacer las veces de." },
        { bot: "Et côté cuisine, qu'est-ce que je devrais goûter à Cali ?", es: "¿Y en cuanto a comida, qué debería probar en Cali?",
          opciones: [
            { t: "Le pandebono, un petit pain au fromage, et la lulada, une boisson au lulo.", es: "El pandebono, un panecito de queso, y la lulada, una bebida de lulo.", ok: true },
            { t: "Je vous conseille le pandebono, un petit pain au fromage, et, pour la cuisine du Pacifique, les plats à base de noix de coco et de fruits de mer.", es: "Le recomiendo el pandebono, un panecito de queso, y, de la cocina del Pacífico, los platos a base de coco y mariscos.", ok: true },
            { t: "Le pandebono, un petit pain de fromage.", es: "El pandebono, un panecito de queso.", ok: false,
              fix: "Para el ingrediente que da sabor se usa «à + artículo»: «un pain au fromage», «une boisson au lulo». «Pain de fromage» sonaría a pan hecho solo de queso." }
          ],
          clave: ["pandebono", "au fromage", "noix de coco"],
          tip: "«À la / au / aux» indica el ingrediente que caracteriza el plato: «tarte aux pommes», «riz à la noix de coco»." },
        { bot: "Vous me donnez vraiment envie d'y aller ! Et vos élèves, ils connaissent bien cette culture ?", es: "¡De verdad me dan ganas de ir! ¿Y sus estudiantes conocen bien esta cultura?",
          opciones: [
            { t: "Oui, beaucoup ont de la famille sur la côte pacifique.", es: "Sí, muchos tienen familia en la costa pacífica.", ok: true },
            { t: "Oui, et c'est une richesse pour la classe : beaucoup d'élèves ont des racines dans le Pacifique, et nous travaillons cette mémoire en cours.", es: "Sí, y es una riqueza para el grupo: muchos estudiantes tienen raíces en el Pacífico, y trabajamos esa memoria en clase.", ok: true },
            { t: "Oui, beaucoup d'eux ont de la famille sur la côte.", es: "Sí, muchos de ellos tienen familia en la costa.", ok: false,
              fix: "«Muchos de ellos» se dice «beaucoup d'entre eux»: «beaucoup d'entre eux ont de la famille sur la côte»." }
          ],
          clave: ["famille", "racines", "richesse"],
          tip: "«Beaucoup d'entre eux / d'entre nous» = muchos de ellos / de nosotros. «Beaucoup d'eux» no existe." }
      ],
      cierre: { bot: "Merci pour ce voyage ! Un jour, je viendrai écouter la marimba à Cali.", es: "¡Gracias por este viaje! Algún día iré a escuchar la marimba en Cali." },
      vocab: [
        { t: "chaleureux / chaleureuse", es: "cálido(a), acogedor(a)" },
        { t: "la côte pacifique", es: "la costa pacífica" },
        { t: "les racines (f.)", es: "las raíces" },
        { t: "jouer de", es: "tocar (un instrumento)" },
        { t: "un tambour", es: "un tambor" },
        { t: "avoir lieu", es: "tener lugar (≠ tenir lieu de)" },
        { t: "goûter", es: "probar (comida)" },
        { t: "le patrimoine immatériel", es: "el patrimonio inmaterial" }
      ]
    },

    /* ───────────── 22 · B1 · Disculparse y reparar ───────────── */
    {
      id: "fr-22", titulo: "Me equivoqué: disculpa y reparación", nivel: "B1",
      tema: "Disculparse y reparar un error",
      contexto: "Durante tu intercambio en un colegio de Dijon publicaste por error una nota equivocada. El estudiante viene a preguntarte y tú reconoces el error y lo reparas.",
      rol: "Yanis, estudiante de 14 años (4e), sorprendido pero respetuoso",
      turnos: [
        { bot: "Madame, j'ai vu ma note en ligne : 8 sur 20 ? Pourtant, je croyais que mon contrôle s'était bien passé…", es: "Profe, vi mi nota en línea: ¿8 sobre 20? Y yo que creía que la evaluación me había ido bien…",
          opciones: [
            { t: "Oui, Yanis, c'est une erreur de ma part. Je suis désolée.", es: "Sí, Yanis, es un error mío. Lo siento.", ok: true },
            { t: "Tu as bien fait de venir me voir. J'ai vérifié : c'est moi qui me suis trompée en saisissant les notes. Je te présente mes excuses.", es: "Hiciste bien en venir a verme. Lo revisé: fui yo quien se equivocó al ingresar las notas. Te pido disculpas.", ok: true },
            { t: "Oui, c'est une erreur. Je m'excuse, c'est ma culpe.", es: "Sí, es un error. Discúlpame, es mi culpa.", ok: false,
              fix: "«Es mi culpa» se dice «c'est ma faute». «Culpe» no existe en francés." }
          ],
          clave: ["erreur", "désolée", "excuses"],
          tip: "Una disculpa completa tiene tres partes: reconocer («c'est ma faute»), lamentar («je suis désolée») y reparar." },
        { bot: "Ah bon ? Alors c'est quoi, ma vraie note ?", es: "¿Ah, sí? ¿Entonces cuál es mi verdadera nota?",
          opciones: [
            { t: "Tu as eu 15 sur 20. Bravo !", es: "Sacaste 15 sobre 20. ¡Felicitaciones!", ok: true },
            { t: "Ta vraie note est 15 sur 20 : j'avais inversé ta note avec celle d'un autre élève. Ton travail était très solide.", es: "Tu verdadera nota es 15 sobre 20: había intercambiado tu nota con la de otro estudiante. Tu trabajo fue muy sólido.", ok: true },
            { t: "Tu as sorti 15 sur 20.", es: "Sacaste 15 sobre 20.", ok: false,
              fix: "«Sacar una nota» se dice «avoir» u «obtenir»: «tu as eu 15 sur 20». «Sortir» no se usa con notas." }
          ],
          clave: ["tu as eu", "sur 20", "vraie note"],
          tip: "En Francia se califica sobre 20. «Avoir la moyenne» significa sacar al menos 10 sobre 20." },
        { bot: "Ouf ! Mais mes parents l'ont vue, ils étaient fâchés hier soir.", es: "¡Uf! Pero mis papás la vieron, estaban bravos anoche.",
          opciones: [
            { t: "Je comprends. Je vais leur écrire aujourd'hui pour expliquer.", es: "Entiendo. Les voy a escribir hoy para explicarles.", ok: true },
            { t: "Je suis vraiment désolée pour ce moment difficile. J'écris à tes parents dès aujourd'hui pour leur expliquer que l'erreur vient de moi.", es: "Lamento mucho ese momento difícil. Hoy mismo les escribo a tus papás para explicarles que el error fue mío.", ok: true },
            { t: "Je vais leur écrire pour expliquer que c'était ma erreur.", es: "Les voy a escribir para explicar que fue mi error.", ok: false,
              fix: "Ante vocal, «ma» se convierte en «mon», aunque el sustantivo sea femenino: «c'était mon erreur»." }
          ],
          clave: ["écrire", "parents", "expliquer"],
          tip: "Ante vocal o h muda, «ma, ta, sa» pasan a «mon, ton, son»: «mon erreur», «son amie», «ton histoire»." },
        { bot: "Merci. Et ma note, elle sera corrigée quand ?", es: "Gracias. ¿Y cuándo van a corregir mi nota?",
          opciones: [
            { t: "Je la corrige tout de suite, devant toi.", es: "La corrijo ya mismo, delante de ti.", ok: true },
            { t: "Je la corrige maintenant, et tu peux vérifier avec moi sur l'ordinateur que tout est en ordre.", es: "La corrijo ahora y puedes verificar conmigo en el computador que todo quede en orden.", ok: true },
            { t: "Je la corrige tout de suite. Je te le promets que ça n'arrivera plus.", es: "La corrijo ya mismo. Te prometo que no volverá a pasar.", ok: false,
              fix: "Con «promettre que» no se repite el pronombre «le»: «je te promets que ça n'arrivera plus». El «te lo prometo» del español no se calca." }
          ],
          clave: ["je la corrige", "tout de suite", "vérifier"],
          tip: "Reparar delante de la persona afectada genera confianza: muestra que la disculpa no se queda en palabras." },
        { bot: "D'accord. Mais comment ça a pu arriver ?", es: "Bueno. ¿Pero cómo pudo pasar eso?",
          opciones: [
            { t: "J'ai saisi les notes trop vite et je n'ai pas vérifié.", es: "Ingresé las notas demasiado rápido y no las revisé.", ok: true },
            { t: "J'ai saisi les notes trop vite, sans relire. Désormais, je vérifierai chaque liste deux fois avant de la publier.", es: "Ingresé las notas demasiado rápido, sin releer. De ahora en adelante revisaré cada lista dos veces antes de publicarla.", ok: true },
            { t: "J'ai saisi les notes trop rapide.", es: "Ingresé las notas demasiado rápido.", ok: false,
              fix: "«Rapide» es adjetivo. Para modificar un verbo se usa el adverbio: «trop vite» o «trop rapidement»." }
          ],
          clave: ["trop vite", "vérifier", "désormais"],
          tip: "Explicar la causa y el cambio concreto («désormais, je vérifierai…») convierte el error en aprendizaje." },
        { bot: "Vous voyez, même les profs se trompent !", es: "¿Sí ve? ¡Hasta los profes se equivocan!",
          opciones: [
            { t: "Exactement ! Tout le monde se trompe. L'important, c'est de corriger.", es: "¡Exacto! Todo el mundo se equivoca. Lo importante es corregir.", ok: true },
            { t: "Tout à fait. L'erreur ne nous arrête pas : elle nous apprend quelque chose. Merci d'être venu me le dire avec respect.", es: "Totalmente. El error no nos detiene: nos enseña algo. Gracias por venir a decírmelo con respeto.", ok: true },
            { t: "Exactement ! L'important, c'est de s'en rendre compte et réparer.", es: "¡Exacto! Lo importante es darse cuenta y reparar.", ok: false,
              fix: "En francés se repite «de» delante de cada infinitivo coordinado: «c'est de s'en rendre compte et de réparer»." }
          ],
          clave: ["se trompe", "corriger", "l'erreur"],
          tip: "«L'erreur ne nous arrête pas : elle nous apprend.» Reconocer tus errores enseña más que cualquier sermón." }
      ],
      cierre: { bot: "Merci, madame. Je vais le dire à mes parents ce soir !", es: "Gracias, profe. ¡Se lo voy a contar a mis papás esta noche!" },
      vocab: [
        { t: "c'est ma faute", es: "es mi culpa" },
        { t: "présenter ses excuses", es: "pedir disculpas" },
        { t: "saisir les notes", es: "ingresar las notas" },
        { t: "avoir 15 sur 20", es: "sacar 15 sobre 20" },
        { t: "fâché(e)", es: "bravo(a), enojado(a)" },
        { t: "désormais", es: "de ahora en adelante" },
        { t: "se rendre compte", es: "darse cuenta" },
        { t: "réparer", es: "reparar" }
      ]
    },

    /* ───────────── 23 · B1 · Negociar un plazo ───────────── */
    {
      id: "fr-23", titulo: "Negociar un nuevo plazo", nivel: "B1",
      tema: "Negociar un plazo",
      contexto: "Debes entregar el informe de un proyecto de intercambio, pero te faltan datos. El coordinador francés te llama y negocias una nueva fecha.",
      rol: "M. Denis Caron, coordinador del programa de intercambio, exigente pero razonable",
      turnos: [
        { bot: "Bonjour ! Je vous appelle pour le rapport du projet. Vous pourrez me l'envoyer vendredi, comme prévu ?", es: "¡Buenos días! Lo(a) llamo por el informe del proyecto. ¿Me lo podrá enviar el viernes, como estaba previsto?",
          opciones: [
            { t: "Bonjour, monsieur Caron. Justement, je voulais vous en parler : j'aurais besoin d'un peu plus de temps.", es: "Buenos días, señor Caron. Justamente quería hablarle de eso: necesitaría un poco más de tiempo.", ok: true },
            { t: "Bonjour. Pour être honnête, ce sera difficile pour vendredi. Est-ce qu'on pourrait discuter d'un nouveau délai ?", es: "Buenos días. Para ser honesto(a), va a ser difícil para el viernes. ¿Podríamos hablar de un nuevo plazo?", ok: true },
            { t: "Bonjour. Justement, je vous voulais en parler.", es: "Buenos días. Justamente quería hablarle de eso.", ok: false,
              fix: "Con verbo + infinitivo, los pronombres van delante del infinitivo: «je voulais vous en parler»." }
          ],
          clave: ["plus de temps", "délai", "vous en parler"],
          tip: "Avisar antes de que venza el plazo, y no después, es clave en la cultura profesional francesa: muestra seriedad." },
        { bot: "Ah. Qu'est-ce qui se passe ?", es: "Ah. ¿Qué pasa?",
          opciones: [
            { t: "J'attends encore les résultats des élèves de deux classes.", es: "Todavía espero los resultados de los estudiantes de dos grupos.", ok: true },
            { t: "Il me manque encore les données de deux classes : les évaluations finales ont été repoussées d'une semaine au collège.", es: "Todavía me faltan los datos de dos grupos: las evaluaciones finales se aplazaron una semana en el colegio.", ok: true },
            { t: "Il me manquent encore les données de deux classes.", es: "Todavía me faltan los datos de dos grupos.", ok: false,
              fix: "«Il manque» es impersonal y el verbo queda en singular: «il me manque encore les données». También se puede decir «les données me manquent»." }
          ],
          clave: ["il me manque", "données", "repoussées"],
          tip: "«Il me manque…» es impersonal: el verbo no concuerda con lo que falta, aunque sea plural." },
        { bot: "Je vois. Il vous faudrait combien de temps en plus ?", es: "Ya veo. ¿Cuánto tiempo más necesitaría?",
          opciones: [
            { t: "Une semaine, jusqu'au vendredi suivant.", es: "Una semana, hasta el viernes siguiente.", ok: true },
            { t: "Une semaine supplémentaire me suffirait : je pourrais vous l'envoyer le vendredi suivant au plus tard.", es: "Una semana más me bastaría: se lo podría enviar el viernes siguiente a más tardar.", ok: true },
            { t: "Une semaine de plus. Je vous l'envoierai le vendredi suivant.", es: "Una semana más. Se lo enviaré el viernes siguiente.", ok: false,
              fix: "El futuro de «envoyer» es irregular: «je vous l'enverrai»." }
          ],
          clave: ["une semaine", "au plus tard", "suivant"],
          tip: "Propón tú una fecha concreta y realista: le facilita a la otra persona decir que sí." },
        { bot: "Hmm, une semaine, c'est beaucoup. Le comité se réunit le mercredi d'après.", es: "Mmm, una semana es mucho. El comité se reúne el miércoles siguiente.",
          opciones: [
            { t: "Je comprends. Je peux vous l'envoyer lundi, alors ?", es: "Entiendo. ¿Se lo puedo enviar el lunes, entonces?", ok: true },
            { t: "Je comprends la contrainte. Et si je vous envoyais lundi une version complète, sans les annexes, et les annexes mardi ?", es: "Entiendo la limitación. ¿Y si le envío el lunes una versión completa, sin los anexos, y los anexos el martes?", ok: true },
            { t: "Je comprends. Et si je vous enverrais lundi une première version ?", es: "Entiendo. ¿Y si le envío el lunes una primera versión?", ok: false,
              fix: "Después de «si» nunca va condicional. Para proponer algo se usa el imperfecto: «Et si je vous envoyais lundi…?»." }
          ],
          clave: ["lundi", "version", "et si"],
          tip: "«Et si + imperfecto?» es la forma elegante de proponer una alternativa: «Et si on se voyait demain ?»." },
        { bot: "Ça pourrait marcher. Mais vous pouvez vraiment tenir ce délai ?", es: "Eso podría funcionar. ¿Pero de verdad puede cumplir ese plazo?",
          opciones: [
            { t: "Oui, je m'y engage. Je vous tiendrai au courant.", es: "Sí, me comprometo. Lo(a) mantendré informado(a).", ok: true },
            { t: "Oui, je m'y engage. Et s'il y a le moindre problème, je vous préviens dès jeudi, pour que vous ne soyez pas pris au dépourvu.", es: "Sí, me comprometo. Y si hay el menor problema, le aviso desde el jueves, para que no lo tome por sorpresa.", ok: true },
            { t: "Oui, je m'y compromets.", es: "Sí, me comprometo.", ok: false,
              fix: "Falso amigo: «se compromettre» significa exponerse, perjudicar la propia reputación. «Comprometerse a» se dice «s'engager à»: «je m'y engage»." }
          ],
          clave: ["je m'y engage", "au courant", "délai"],
          tip: "«Tenir un délai» = cumplir un plazo. «Le délai» es el plazo; un retraso es «un retard»." },
        { bot: "Très bien, on fait comme ça : je compte sur votre envoi lundi.", es: "Muy bien, hagámoslo así: cuento con su envío el lunes.",
          opciones: [
            { t: "Parfait. Merci beaucoup pour votre compréhension.", es: "Perfecto. Muchas gracias por su comprensión.", ok: true },
            { t: "C'est noté. Merci pour votre souplesse ; je vous confirme tout cela par e-mail tout de suite.", es: "Anotado. Gracias por su flexibilidad; le confirmo todo esto por correo de inmediato.", ok: true },
            { t: "Parfait. Je vous envoie un e-mail pour confirmer ce que nous avons accordé.", es: "Perfecto. Le envío un correo para confirmar lo que acordamos.", ok: false,
              fix: "Falso amigo: «accorder» significa conceder u otorgar. «Lo que acordamos» se dice «ce dont nous avons convenu» o, más simple, «ce qu'on a décidé»." }
          ],
          clave: ["merci", "compréhension", "confirme"],
          tip: "Confirmar por escrito lo acordado por teléfono es una práctica muy valorada: evita malentendidos." }
      ],
      cierre: { bot: "Parfait. Bon courage pour la fin du rapport, et à lundi !", es: "Perfecto. ¡Ánimo con el final del informe, y hasta el lunes!" },
      vocab: [
        { t: "le délai", es: "el plazo (≠ le retard, el retraso)" },
        { t: "tenir un délai", es: "cumplir un plazo" },
        { t: "il me manque", es: "me falta(n)" },
        { t: "repousser / reporter", es: "aplazar" },
        { t: "au plus tard", es: "a más tardar" },
        { t: "s'engager à", es: "comprometerse a (≠ se compromettre)" },
        { t: "tenir au courant", es: "mantener informado" },
        { t: "convenir de", es: "acordar" }
      ]
    },

    /* ───────────── 24 · B1 · Mentoría a un docente nuevo ───────────── */
    {
      id: "fr-24", titulo: "Mentora de un docente nuevo", nivel: "B1",
      tema: "Mentoría a un docente nuevo",
      contexto: "En el colegio aliado de Estrasburgo te asignan como tutora de un docente recién llegado. Hablan de su mayor dificultad y acuerdan un primer paso.",
      rol: "Théo Blanc, docente de 24 años en su primer año, motivado pero nervioso",
      turnos: [
        { bot: "Salut ! Merci d'avoir accepté d'être ma tutrice. Honnêtement, je suis un peu stressé.", es: "¡Hola! Gracias por aceptar ser mi mentora. Honestamente, estoy un poco estresado.",
          opciones: [
            { t: "C'est normal au début. On va y aller étape par étape.", es: "Es normal al principio. Vamos a ir paso a paso.", ok: true },
            { t: "Avec plaisir ! C'est tout à fait normal d'être stressé la première année. On va avancer ensemble, étape par étape.", es: "¡Con gusto! Es completamente normal estar estresado el primer año. Vamos a avanzar juntos, paso a paso.", ok: true },
            { t: "C'est normal. Moi aussi, j'étais stressée en mes débuts.", es: "Es normal. Yo también estaba estresada en mis inicios.", ok: false,
              fix: "«En mis inicios» se dice «à mes débuts» o «au début»: «moi aussi, j'étais stressée à mes débuts»." }
          ],
          clave: ["normal", "étape par étape", "ensemble"],
          tip: "Normalizar la emoción («c'est normal») baja la ansiedad y abre la conversación. Entre colegas en Francia es habitual tutearse." },
        { bot: "Mon plus gros problème, c'est la gestion de classe. Ils parlent tout le temps.", es: "Mi mayor problema es el manejo del grupo. Hablan todo el tiempo.",
          opciones: [
            { t: "D'accord. Est-ce que tes règles sont claires dès le début du cours ?", es: "De acuerdo. ¿Tus reglas son claras desde el inicio de la clase?", ok: true },
            { t: "Je vois. Commençons par les routines : comment entrent-ils en classe, et que font-ils pendant les cinq premières minutes ?", es: "Ya veo. Empecemos por las rutinas: ¿cómo entran al salón y qué hacen durante los primeros cinco minutos?", ok: true },
            { t: "Je vois. Ça me passait aussi au début.", es: "Ya veo. A mí también me pasaba al principio.", ok: false,
              fix: "«Me pasaba» se dice «ça m'arrivait»: «ça m'arrivait aussi au début». «Passer» no se usa con ese sentido." }
          ],
          clave: ["règles", "routines", "début"],
          tip: "Las rutinas de entrada (saludo, tarea inicial corta) reducen mucho el desorden de los primeros minutos." },
        { bot: "Euh… ils entrent, ils s'assoient où ils veulent et je commence quand c'est calme.", es: "Eh… entran, se sientan donde quieren y empiezo cuando hay calma.",
          opciones: [
            { t: "Essaie de les accueillir à la porte et de leur donner une petite tâche dès qu'ils s'assoient.", es: "Intenta recibirlos en la puerta y darles una tarea corta apenas se sienten.", ok: true },
            { t: "Je te propose un essai : tu les accueilles à la porte, ils s'assoient à une place fixe et une question est déjà au tableau. On en reparle dans une semaine ?", es: "Te propongo un ensayo: los recibes en la puerta, se sientan en un puesto fijo y ya hay una pregunta en el tablero. ¿Lo volvemos a hablar en una semana?", ok: true },
            { t: "Essaie de les accueillir dans la porte.", es: "Intenta recibirlos en la puerta.", ok: false,
              fix: "«En la puerta» se dice «à la porte»: «les accueillir à la porte». «Dans la porte» sería «dentro de la puerta»." }
          ],
          clave: ["accueillir", "à la porte", "tâche"],
          tip: "Propón un cambio pequeño y concreto, y acuerda cuándo revisarlo: así la mentoría se vuelve acompañamiento real." },
        { bot: "D'accord, j'essaierai. Et tu pourrais venir observer un de mes cours ?", es: "De acuerdo, lo intentaré. ¿Y podrías venir a observar una de mis clases?",
          opciones: [
            { t: "Oui, avec plaisir. Jeudi, ça te va ?", es: "Sí, con gusto. ¿El jueves te sirve?", ok: true },
            { t: "Bien sûr. Je viendrai jeudi, et on choisit ensemble un seul point à observer, pour que ce soit vraiment utile.", es: "Claro. Vengo el jueves, y escogemos juntos un solo aspecto para observar, para que sea realmente útil.", ok: true },
            { t: "Bien sûr. Jeudi, ça te va ? Je vais me sentir au fond de la salle.", es: "Claro. ¿El jueves te sirve? Me voy a sentar al fondo del salón.", ok: false,
              fix: "Falso amigo: «sentir» significa sentir u oler. Sentarse es «s'asseoir»: «je vais m'asseoir au fond de la salle»." }
          ],
          clave: ["jeudi", "observer", "ça te va"],
          tip: "Una observación con un solo foco acordado (por ejemplo, las transiciones) es más útil y menos amenazante que una evaluación general." },
        { bot: "Et si ça se passe mal pendant que tu es là ? J'ai peur que tu me juges.", es: "¿Y si sale mal mientras estás ahí? Me da miedo que me juzgues.",
          opciones: [
            { t: "Je ne suis pas là pour te juger, mais pour t'aider.", es: "No estoy ahí para juzgarte, sino para ayudarte.", ok: true },
            { t: "Je viens pour apprendre avec toi, pas pour te juger. Et si ça se passe mal, tant mieux : on aura du concret à analyser ensemble.", es: "Voy para aprender contigo, no para juzgarte. Y si sale mal, mejor: tendremos algo concreto para analizar juntos.", ok: true },
            { t: "Je ne viens pas à te juger.", es: "No voy a juzgarte.", ok: false,
              fix: "Tras «venir», la finalidad va con infinitivo directo o con «pour»: «je ne viens pas te juger» o «je ne viens pas pour te juger»." }
          ],
          clave: ["juger", "aider", "ensemble"],
          tip: "Separar observación y evaluación genera la confianza necesaria para que el docente nuevo se arriesgue a mejorar." },
        { bot: "Merci, ça me rassure vraiment. Je peux t'écrire si j'ai une question avant jeudi ?", es: "Gracias, eso me tranquiliza mucho. ¿Te puedo escribir si tengo alguna pregunta antes del jueves?",
          opciones: [
            { t: "Bien sûr, écris-moi quand tu veux.", es: "Claro, escríbeme cuando quieras.", ok: true },
            { t: "Évidemment. Écris-moi quand tu veux ; et n'oublie pas : tout le monde a été débutant un jour.", es: "Por supuesto. Escríbeme cuando quieras; y no olvides: todos fuimos principiantes alguna vez.", ok: true },
            { t: "Bien sûr, écris-moi quand tu veuilles.", es: "Claro, escríbeme cuando quieras.", ok: false,
              fix: "Después de «quand» va indicativo, no subjuntivo: «quand tu veux». En español sí decimos «cuando quieras», por eso el error es tan frecuente." }
          ],
          clave: ["écris-moi", "quand tu veux", "débutant"],
          tip: "Tras «quand» siempre va indicativo: «quand tu veux», «quand tu pourras». Es un error muy típico de hispanohablantes." }
      ],
      cierre: { bot: "Génial. Merci, vraiment. À jeudi !", es: "Genial. De verdad, gracias. ¡Hasta el jueves!" },
      vocab: [
        { t: "le tuteur / la tutrice", es: "el mentor / la mentora" },
        { t: "la gestion de classe", es: "el manejo del grupo" },
        { t: "une routine", es: "una rutina" },
        { t: "accueillir", es: "recibir, dar la bienvenida" },
        { t: "s'asseoir", es: "sentarse (≠ sentir)" },
        { t: "ça m'arrive", es: "me pasa" },
        { t: "juger", es: "juzgar" },
        { t: "un débutant / une débutante", es: "un(a) principiante" }
      ]
    },

    /* ───────────── 25 · B2 · Mediar un conflicto ───────────── */
    {
      id: "fr-25", titulo: "Mediación entre dos estudiantes", nivel: "B2",
      tema: "Mediar un conflicto entre estudiantes",
      contexto: "En un colegio aliado de Burdeos, una estudiante está herida porque una compañera contó un secreto suyo. Acompañas una mediación entre las dos.",
      rol: "Nora, estudiante de 14 años (4e), dolida y a la defensiva",
      turnos: [
        { bot: "Je ne veux pas parler avec Jade. Elle a raconté à tout le monde ce que je lui avais confié.", es: "No quiero hablar con Jade. Le contó a todo el mundo lo que yo le había confiado.",
          opciones: [
            { t: "Je comprends que tu sois blessée. Tu veux m'expliquer ce qui s'est passé ?", es: "Entiendo que estés dolida. ¿Quieres explicarme qué pasó?", ok: true },
            { t: "Je t'entends, et je comprends que tu te sentes trahie. Personne ne va t'obliger à lui parler tout de suite ; commençons par toi, si tu veux bien.", es: "Te escucho, y entiendo que te sientas traicionada. Nadie te va a obligar a hablarle ya; empecemos por ti, si te parece.", ok: true },
            { t: "Je comprends. Raconte-moi qu'est-ce qui s'est passé.", es: "Entiendo. Cuéntame qué pasó.", ok: false,
              fix: "En una pregunta indirecta no se usa «qu'est-ce qui», sino «ce qui»: «Raconte-moi ce qui s'est passé»." }
          ],
          clave: ["ce qui s'est passé", "blessée", "trahie"],
          tip: "En una mediación primero se reconoce la emoción y después se habla de los hechos. Nunca minimices («ce n'est pas grave»)." },
        { bot: "Je lui avais dit que mes parents divorçaient, et le lendemain, toute la classe le savait.", es: "Le había contado que mis papás se estaban divorciando, y al día siguiente todo el grupo lo sabía.",
          opciones: [
            { t: "C'est très difficile à vivre. Tu as eu raison de venir m'en parler.", es: "Es muy difícil de vivir. Hiciste bien en venir a contármelo.", ok: true },
            { t: "Ce que tu vis est déjà lourd, et apprendre que ton secret a circulé, c'est une deuxième blessure. Merci de me faire confiance.", es: "Lo que estás viviendo ya es pesado, y enterarte de que tu secreto circuló es una segunda herida. Gracias por confiar en mí.", ok: true },
            { t: "C'est très dur. Tu as eu la raison de venir m'en parler.", es: "Es muy duro. Tuviste razón en venir a contármelo.", ok: false,
              fix: "«Tener razón» se dice «avoir raison», sin artículo: «tu as eu raison de venir m'en parler»." }
          ],
          clave: ["raison", "confiance", "difficile"],
          tip: "Agradecer la confianza refuerza la idea de que pedir ayuda a un adulto es una buena decisión." },
        { bot: "Jade dit qu'elle ne voulait pas me faire de mal, qu'elle l'a juste dit à une amie. Mais je ne la crois pas.", es: "Jade dice que no quería hacerme daño, que solo se lo contó a una amiga. Pero no le creo.",
          opciones: [
            { t: "Il est possible qu'elle n'ait pas mesuré les conséquences. Tu accepterais de l'écouter ?", es: "Es posible que no haya medido las consecuencias. ¿Aceptarías escucharla?", ok: true },
            { t: "Il se peut qu'elle n'ait pas voulu te blesser, et pourtant tu as été blessée : les deux peuvent être vrais. Tu serais prête à entendre sa version, en ma présence ?", es: "Puede que no haya querido herirte y, sin embargo, te hirió: las dos cosas pueden ser ciertas. ¿Estarías dispuesta a escuchar su versión, conmigo presente?", ok: true },
            { t: "Il est possible qu'elle n'a pas mesuré les conséquences.", es: "Es posible que no haya medido las consecuencias.", ok: false,
              fix: "«Il est possible que» exige subjuntivo, igual que en español: «il est possible qu'elle n'ait pas mesuré les conséquences»." }
          ],
          clave: ["il se peut", "écouter", "version"],
          tip: "«Il est possible que / il se peut que» piden subjuntivo porque expresan duda: «qu'elle n'ait pas voulu»." },
        { bot: "Bon… d'accord. Mais si elle ne s'excuse pas, je pars.", es: "Bueno… está bien. Pero si no se disculpa, me voy.",
          opciones: [
            { t: "D'accord. On fixe des règles : chacune parle à son tour, sans interrompre.", es: "De acuerdo. Fijamos unas reglas: cada una habla en su turno, sin interrumpir.", ok: true },
            { t: "C'est légitime. Avant de commencer, mettons-nous d'accord sur trois règles : on parle à tour de rôle, on parle de soi et pas de l'autre, et chacune peut demander une pause.", es: "Es legítimo. Antes de empezar, acordemos tres reglas: hablamos por turnos, hablamos de nosotras y no de la otra, y cada una puede pedir una pausa.", ok: true },
            { t: "D'accord. Les règles : on parle par tours, sans interrompre.", es: "De acuerdo. Las reglas: hablamos por turnos, sin interrumpir.", ok: false,
              fix: "«Por turnos» se dice «à tour de rôle» o «chacun son tour». «Par tours» no es idiomático." }
          ],
          clave: ["à tour de rôle", "règles", "interrompre"],
          tip: "Hablar en primera persona («je me suis sentie…») en lugar de acusar («tu as…») baja la tensión en una mediación." },
        { bot: "Jade s'est excusée… mais j'ai encore du mal à lui faire confiance.", es: "Jade se disculpó… pero todavía me cuesta confiar en ella.",
          opciones: [
            { t: "C'est normal. La confiance se reconstruit avec le temps.", es: "Es normal. La confianza se reconstruye con el tiempo.", ok: true },
            { t: "C'est tout à fait normal : des excuses ouvrent une porte, mais la confiance se reconstruit petit à petit, par des actes.", es: "Es completamente normal: una disculpa abre una puerta, pero la confianza se reconstruye poco a poco, con hechos.", ok: true },
            { t: "C'est normal. La confiance ne revient pas de la nuit au jour.", es: "Es normal. La confianza no vuelve de la noche a la mañana.", ok: false,
              fix: "La expresión francesa es «du jour au lendemain»: «la confiance ne revient pas du jour au lendemain»." }
          ],
          clave: ["confiance", "petit à petit", "temps"],
          tip: "«Du jour au lendemain» = de la noche a la mañana. Las expresiones idiomáticas casi nunca se traducen palabra por palabra." },
        { bot: "Et maintenant, qu'est-ce qu'on fait ?", es: "¿Y ahora qué hacemos?",
          opciones: [
            { t: "On se revoit toutes les trois la semaine prochaine pour faire le point.", es: "Nos volvemos a ver las tres la próxima semana para hacer un balance.", ok: true },
            { t: "Je vous propose un suivi : on se retrouve toutes les trois dans une semaine pour faire le point et, d'ici là, tu peux venir me voir à tout moment.", es: "Les propongo un seguimiento: nos reunimos las tres en una semana para hacer un balance y, mientras tanto, puedes venir a verme cuando quieras.", ok: true },
            { t: "On se revoit les trois la semaine prochaine.", es: "Nos volvemos a ver las tres la próxima semana.", ok: false,
              fix: "«Las tres» como grupo se dice «toutes les trois» (o «tous les trois» en masculino): «on se revoit toutes les trois»." }
          ],
          clave: ["faire le point", "suivi", "toutes les trois"],
          tip: "Una mediación no termina con la disculpa: el seguimiento acordado es lo que consolida la reparación." }
      ],
      cierre: { bot: "D'accord. Merci de ne pas avoir pris parti. Ça m'a aidée.", es: "Está bien. Gracias por no tomar partido. Eso me ayudó." },
      vocab: [
        { t: "confier", es: "confiar (un secreto)" },
        { t: "se sentir trahi(e)", es: "sentirse traicionado(a)" },
        { t: "blesser", es: "herir" },
        { t: "à tour de rôle", es: "por turnos" },
        { t: "s'excuser", es: "disculparse" },
        { t: "du jour au lendemain", es: "de la noche a la mañana" },
        { t: "faire le point", es: "hacer un balance" },
        { t: "prendre parti", es: "tomar partido" }
      ]
    },
    /* ───────────── 26 · B2 · Proyecto STEAM internacional ───────────── */
    {
      id: "fr-26", titulo: "Proyecto STEAM entre Cali y Clermont-Ferrand", nivel: "B2",
      tema: "Proyecto STEAM con un colega extranjero",
      contexto: "Diseñas por videollamada un proyecto STEAM con un colega francés. Deben acordar tema, papel del arte, organización, evaluación y reparto de tareas.",
      rol: "Mathieu Girard, profesor de tecnología en Clermont-Ferrand, entusiasta y práctico",
      turnos: [
        { bot: "Alors, pour notre projet commun, tu as pensé à une thématique ?", es: "Entonces, para nuestro proyecto conjunto, ¿pensaste en algún tema?",
          opciones: [
            { t: "Oui : l'eau. Les élèves pourraient mesurer la pluie dans leurs deux villes.", es: "Sí: el agua. Los estudiantes podrían medir la lluvia en sus dos ciudades.", ok: true },
            { t: "J'ai pensé à l'eau : nos élèves construiraient des pluviomètres, compareraient les données de Cali et de Clermont et réfléchiraient à la gestion de cette ressource.", es: "Pensé en el agua: nuestros estudiantes construirían pluviómetros, compararían los datos de Cali y de Clermont y reflexionarían sobre la gestión de ese recurso.", ok: true },
            { t: "Oui, l'eau. C'est un sujet qui nous affecte à tous.", es: "Sí, el agua. Es un tema que nos afecta a todos.", ok: false,
              fix: "«Affecter» lleva complemento directo, sin «à»: «un sujet qui nous concerne tous» o «qui nous touche tous»." }
          ],
          clave: ["l'eau", "mesurer", "comparer"],
          tip: "Un tema STEAM funciona mejor cuando parte de un problema real que los estudiantes pueden medir en su entorno." },
        { bot: "J'aime bien. Mais comment on intègre le « A » de STEAM, l'art ?", es: "Me gusta. ¿Pero cómo integramos la «A» de STEAM, el arte?",
          opciones: [
            { t: "Les élèves pourraient créer des infographies avec leurs données.", es: "Los estudiantes podrían crear infografías con sus datos.", ok: true },
            { t: "On pourrait leur demander de transformer leurs données en œuvre visuelle : une infographie, ou même une fresque collective sur le cycle de l'eau.", es: "Podríamos pedirles que transformen sus datos en una obra visual: una infografía, o incluso un mural colectivo sobre el ciclo del agua.", ok: true },
            { t: "Les élèves pourraient réaliser des infographies et des murales.", es: "Los estudiantes podrían hacer infografías y murales.", ok: false,
              fix: "El mural como obra de arte se dice «une fresque» o «une peinture murale». «Murale» es solo un adjetivo." }
          ],
          clave: ["infographie", "fresque", "données"],
          tip: "En STEAM el arte no es decoración: comunica datos y genera preguntas. Una buena infografía exige comprender los números." },
        { bot: "Super. Par contre, avec le décalage horaire, comment on organise les échanges entre les élèves ?", es: "Súper. Eso sí, con la diferencia horaria, ¿cómo organizamos los intercambios entre los estudiantes?",
          opciones: [
            { t: "On peut travailler surtout en asynchrone, avec des vidéos courtes.", es: "Podemos trabajar sobre todo de forma asincrónica, con videos cortos.", ok: true },
            { t: "Je propose un mélange : la plupart des échanges en asynchrone, avec des capsules vidéo, et une visioconférence en direct par mois, le matin chez nous et l'après-midi chez vous.", es: "Propongo una mezcla: la mayoría de los intercambios de forma asincrónica, con cápsulas de video, y una videoconferencia en vivo al mes, por la mañana para nosotros y por la tarde para ustedes.", ok: true },
            { t: "On pourrait faire une visio par mois, en la matinée pour nous.", es: "Podríamos hacer una videollamada al mes, en la mañana para nosotros.", ok: false,
              fix: "«En la mañana» se dice «le matin» o «dans la matinée»: «une visio par mois, le matin pour nous»." }
          ],
          clave: ["asynchrone", "visioconférence", "décalage"],
          tip: "«Le décalage horaire» = la diferencia horaria. Combinar trabajo asincrónico y encuentros en vivo hace viable la colaboración internacional." },
        { bot: "Et pour l'évaluation ? Nos systèmes de notation sont très différents.", es: "¿Y la evaluación? Nuestros sistemas de calificación son muy distintos.",
          opciones: [
            { t: "On peut créer une grille commune, et chacun l'adapte à son système.", es: "Podemos crear una rúbrica común, y cada uno la adapta a su sistema.", ok: true },
            { t: "Pourquoi pas une grille critériée commune, centrée sur les compétences, que chacun convertit ensuite selon son barème national ?", es: "¿Por qué no una rúbrica común por criterios, centrada en las competencias, que cada uno convierte luego según su escala nacional?", ok: true },
            { t: "Bien que nos systèmes sont différents, une grille commune est possible.", es: "Aunque nuestros sistemas son distintos, una rúbrica común es posible.", ok: false,
              fix: "«Bien que» va siempre con subjuntivo, aunque el hecho sea real: «bien que nos systèmes soient différents»." }
          ],
          clave: ["grille commune", "compétences", "barème"],
          tip: "«Le barème» = la escala de calificación. Evaluar por competencias permite comparar sin forzar las notas de cada país." },
        { bot: "Il y a quand même un risque : que les élèves fassent les mesures n'importe comment.", es: "Igual hay un riesgo: que los estudiantes hagan las mediciones de cualquier manera.",
          opciones: [
            { t: "On peut leur donner un protocole de mesure très précis.", es: "Podemos darles un protocolo de medición muy preciso.", ok: true },
            { t: "C'est vrai. Il faudrait un protocole commun, testé d'abord par nous deux, et une fiche où les élèves notent les conditions de chaque mesure.", es: "Es cierto. Haría falta un protocolo común, probado primero por nosotros dos, y una ficha donde los estudiantes anoten las condiciones de cada medición.", ok: true },
            { t: "C'est vrai. Sans protocole commun, les résultats ne seront pas confiables.", es: "Es cierto. Sin un protocolo común, los resultados no serán confiables.", ok: false,
              fix: "«Confiable» no existe en francés. Se dice «fiable»: «les résultats ne seront pas fiables»." }
          ],
          clave: ["protocole", "fiables", "mesure"],
          tip: "Un protocolo compartido es lo que hace que los datos de dos países sean realmente comparables." },
        { bot: "Bon, je crois qu'on tient quelque chose. Qui rédige la première version du projet ?", es: "Bueno, creo que tenemos algo bueno. ¿Quién redacta la primera versión del proyecto?",
          opciones: [
            { t: "Je peux m'en charger, et tu la relis.", es: "Me puedo encargar yo, y tú la revisas.", ok: true },
            { t: "Je m'en charge pour lundi : je rédige la première version, tu la complètes avec la partie technique, et on la présente ensemble à nos directions.", es: "Me encargo para el lunes: redacto la primera versión, tú la completas con la parte técnica, y la presentamos juntos a nuestras directivas.", ok: true },
            { t: "Je m'en charge. Je rédacte la première version.", es: "Me encargo. Redacto la primera versión.", ok: false,
              fix: "El verbo es «rédiger»: «je rédige la première version». «Rédacter» no existe, aunque sí el sustantivo «la rédaction»." }
          ],
          clave: ["je m'en charge", "première version", "relis"],
          tip: "«Se charger de» = encargarse de. Repartir tareas con fecha al cerrar evita que el proyecto se quede en buenas ideas." }
      ],
      cierre: { bot: "Parfait. J'ai hâte de voir nos élèves travailler ensemble !", es: "Perfecto. ¡Ya quiero ver a nuestros estudiantes trabajando juntos!" },
      vocab: [
        { t: "un projet commun", es: "un proyecto conjunto" },
        { t: "un pluviomètre", es: "un pluviómetro" },
        { t: "une fresque", es: "un mural" },
        { t: "le décalage horaire", es: "la diferencia horaria" },
        { t: "en asynchrone", es: "de forma asincrónica" },
        { t: "le barème", es: "la escala de calificación" },
        { t: "fiable", es: "confiable" },
        { t: "se charger de", es: "encargarse de" }
      ]
    },

    /* ───────────── 27 · B2 · Jurado de feria de ciencias ───────────── */
    {
      id: "fr-27", titulo: "Jurado en la feria de ciencias", nivel: "B2",
      tema: "Jurado de feria de ciencias",
      contexto: "Eres jurado invitado en la feria de ciencias de un liceo de Poitiers. Una estudiante presenta su experimento y tú haces preguntas y das retroalimentación.",
      rol: "Lina, estudiante de 16 años (première), nerviosa pero bien preparada",
      turnos: [
        { bot: "Bonjour ! Je m'appelle Lina. Mon projet étudie l'effet du sel sur la germination des graines de radis.", es: "¡Buenos días! Me llamo Lina. Mi proyecto estudia el efecto de la sal en la germinación de semillas de rábano.",
          opciones: [
            { t: "Bonjour, Lina. Quelle était votre hypothèse de départ ?", es: "Buenos días, Lina. ¿Cuál era su hipótesis inicial?", ok: true },
            { t: "Bonjour, Lina, et merci. Avant d'entrer dans les détails, pouvez-vous nous rappeler votre question de recherche et votre hypothèse ?", es: "Buenos días, Lina, y gracias. Antes de entrar en detalles, ¿puede recordarnos su pregunta de investigación y su hipótesis?", ok: true },
            { t: "Bonjour. Expliquez-nous votre expérience. Quelle était la hypothèse ?", es: "Buenos días. Explíquenos su experimento. ¿Cuál era la hipótesis?", ok: false,
              fix: "«Hypothèse» empieza por h muda, así que el artículo se elide: «l'hypothèse»." }
          ],
          clave: ["hypothèse", "question", "recherche"],
          tip: "Como jurado, empieza con preguntas abiertas: muestran si el estudiante entiende de verdad su propio proyecto." },
        { bot: "Je pensais que plus il y aurait de sel, moins les graines germeraient.", es: "Pensaba que cuanta más sal hubiera, menos semillas germinarían.",
          opciones: [
            { t: "Et comment avez-vous testé cette hypothèse ?", es: "¿Y cómo puso a prueba esa hipótesis?", ok: true },
            { t: "Très clair. Comment avez-vous organisé l'expérience : combien de concentrations, combien de graines par lot, et quel groupe témoin ?", es: "Muy claro. ¿Cómo organizó el experimento: cuántas concentraciones, cuántas semillas por lote y qué grupo de control?", ok: true },
            { t: "Et comment avez-vous prouvé cette hypothèse ?", es: "¿Y cómo comprobó esa hipótesis?", ok: false,
              fix: "«Prouver» significa demostrar, y una hipótesis no se demuestra de antemano: se pone a prueba. Se dice «tester» o «mettre à l'épreuve» una hipótesis." }
          ],
          clave: ["testé", "groupe témoin", "expérience"],
          tip: "«Plus il y a de sel, moins elles germent»: así se dice «cuanto más…, menos…», sin artículo." },
        { bot: "J'ai utilisé quatre concentrations de sel, avec vingt graines dans chaque boîte, et un lot témoin avec de l'eau sans sel.", es: "Usé cuatro concentraciones de sal, con veinte semillas en cada caja, y un lote de control con agua sin sal.",
          opciones: [
            { t: "Très bien. Et pourquoi vingt graines par boîte ?", es: "Muy bien. ¿Y por qué veinte semillas por caja?", ok: true },
            { t: "C'est rigoureux. Pourquoi avoir choisi vingt graines par boîte, et avez-vous répété l'expérience plusieurs fois ?", es: "Es riguroso. ¿Por qué escogió veinte semillas por caja, y repitió el experimento varias veces?", ok: true },
            { t: "C'est rigoureux. Vous avez répété l'expérience, ou vous l'avez fait une seule fois ?", es: "Es riguroso. ¿Repitió el experimento o lo hizo una sola vez?", ok: false,
              fix: "El participio concuerda con el complemento directo antepuesto: «l'» reemplaza a «l'expérience» (femenino), así que se dice «vous l'avez faite une seule fois»." }
          ],
          clave: ["répété", "pourquoi", "graines"],
          tip: "Preguntar por las repeticiones enseña una idea clave de la ciencia: un solo ensayo no basta para concluir." },
        { bot: "Je l'ai répétée trois fois. Et à la plus forte concentration, presque aucune graine n'a germé.", es: "La repetí tres veces. Y con la concentración más alta, casi ninguna semilla germinó.",
          opciones: [
            { t: "Intéressant. Comment expliquez-vous ce résultat ?", es: "Interesante. ¿Cómo explica ese resultado?", ok: true },
            { t: "Intéressant. Quelle explication scientifique proposez-vous ? Selon vous, que se passe-t-il pour l'eau autour de la graine ?", es: "Interesante. ¿Qué explicación científica propone? Según usted, ¿qué pasa con el agua alrededor de la semilla?", ok: true },
            { t: "Intéressant. Vous avez une théorie sur ce qui arrive avec l'eau ?", es: "Interesante. ¿Tiene alguna teoría sobre lo que pasa con el agua?", ok: false,
              fix: "«Lo que le pasa a algo» se dice «ce qui arrive à» o «ce qui se passe avec»: «ce qui arrive à l'eau». «Arriver avec» es un calco." }
          ],
          clave: ["explication", "résultat", "l'eau"],
          tip: "Una buena pregunta de jurado guía sin dar la respuesta: aquí orienta hacia la ósmosis sin nombrarla." },
        { bot: "Je pense que le sel empêche la graine d'absorber l'eau. C'est l'osmose, non ?", es: "Creo que la sal impide que la semilla absorba el agua. Es la ósmosis, ¿no?",
          opciones: [
            { t: "Oui, c'est une bonne piste. Vous pourriez l'expliquer avec un schéma.", es: "Sí, es una buena pista. Podría explicarlo con un esquema.", ok: true },
            { t: "C'est une excellente piste. Pour la rendre convaincante, ajoutez un schéma qui montre le déplacement de l'eau, et citez une source scientifique.", es: "Es una excelente pista. Para que convenza, agregue un esquema que muestre el movimiento del agua y cite una fuente científica.", ok: true },
            { t: "Oui. Pour être plus convaincante, vous devriez ajouter une esquisse qui explique l'osmose.", es: "Sí. Para ser más convincente, debería agregar un esquema que explique la ósmosis.", ok: false,
              fix: "Falso amigo: «une esquisse» es un boceto. Un esquema explicativo es «un schéma»." }
          ],
          clave: ["piste", "schéma", "source"],
          tip: "Reconoce lo que está bien y propón una mejora concreta: es la base de una retroalimentación útil." },
        { bot: "Merci ! Est-ce que vous avez un dernier conseil pour la finale ?", es: "¡Gracias! ¿Tiene un último consejo para la final?",
          opciones: [
            { t: "Oui : parlez aussi des limites de votre expérience.", es: "Sí: hable también de los límites de su experimento.", ok: true },
            { t: "Oui : présentez honnêtement les limites, par exemple le nombre de répétitions, et proposez l'expérience que vous feriez ensuite. Le jury appréciera votre esprit critique.", es: "Sí: presente con honestidad los límites, por ejemplo el número de repeticiones, y proponga el experimento que haría después. El jurado valorará su espíritu crítico.", ok: true },
            { t: "Oui : présentez les limites de votre expérience, ça démontre de la maturité.", es: "Sí: presente los límites de su experimento, eso demuestra madurez.", ok: false,
              fix: "«Demostrar una cualidad» se dice «faire preuve de»: «vous ferez ainsi preuve de maturité», o más simple, «ça montre votre maturité». «Démontrer» se usa sobre todo para probar algo, como un teorema." }
          ],
          clave: ["limites", "esprit critique", "expérience"],
          tip: "«Faire preuve de» = demostrar una cualidad: «faire preuve de rigueur, de maturité, de curiosité»." }
      ],
      cierre: { bot: "Merci beaucoup pour vos conseils. Je vais ajouter un schéma dès ce soir !", es: "Muchas gracias por sus consejos. ¡Esta misma noche agrego un esquema!" },
      vocab: [
        { t: "le jury", es: "el jurado" },
        { t: "une hypothèse", es: "una hipótesis" },
        { t: "un groupe témoin", es: "un grupo de control" },
        { t: "germer", es: "germinar" },
        { t: "mettre à l'épreuve", es: "poner a prueba" },
        { t: "une piste", es: "una pista, una línea de trabajo" },
        { t: "un schéma", es: "un esquema (≠ une esquisse, un boceto)" },
        { t: "faire preuve de", es: "demostrar (una cualidad)" }
      ]
    },

    /* ───────────── 28 · B2 · Ajustes razonables ───────────── */
    {
      id: "fr-28", titulo: "Ajustes razonables para Malo", nivel: "B2",
      tema: "Inclusión: ajustes razonables para un estudiante con discapacidad",
      contexto: "En un colegio de Nancy, la madre de un estudiante con baja visión pide una reunión. Acuerdan juntos ajustes razonables que respeten su dignidad.",
      rol: "Mme Hélène Perrin, madre de Malo (6e), comprometida y algo inquieta",
      turnos: [
        { bot: "Bonjour. Je voulais vous parler de Malo. Avec sa déficience visuelle, il a du mal à suivre ce qui est écrit au tableau.", es: "Buenos días. Quería hablarle de Malo. Con su discapacidad visual, le cuesta seguir lo que se escribe en el tablero.",
          opciones: [
            { t: "Bonjour, madame Perrin. Merci d'être venue. Qu'est-ce qui l'aide le plus à la maison ?", es: "Buenos días, señora Perrin. Gracias por venir. ¿Qué es lo que más le ayuda en casa?", ok: true },
            { t: "Merci d'être venue. Je veux que Malo puisse apprendre dans les mêmes conditions que les autres ; dites-moi ce qui fonctionne déjà pour lui.", es: "Gracias por venir. Quiero que Malo pueda aprender en las mismas condiciones que los demás; cuénteme qué le funciona ya.", ok: true },
            { t: "Bonjour, madame. Oui, je connais la discapacité de Malo.", es: "Buenos días, señora. Sí, conozco la discapacidad de Malo.", ok: false,
              fix: "«Discapacité» no existe. Se dice «le handicap» o, mejor, se habla de «un élève en situation de handicap»; aquí, «sa déficience visuelle»." }
          ],
          clave: ["l'aide", "fonctionne", "conditions"],
          tip: "En Francia se prefiere «élève en situation de handicap»: pone primero a la persona y no la reduce a su condición." },
        { bot: "À la maison, il utilise une tablette qui agrandit les textes. Et il a besoin de plus de temps pour lire.", es: "En casa usa una tableta que amplía los textos. Y necesita más tiempo para leer.",
          opciones: [
            { t: "Je pourrais lui donner les documents en grands caractères et plus de temps aux évaluations.", es: "Podría darle los documentos en letra grande y más tiempo en las evaluaciones.", ok: true },
            { t: "Très bien. Je peux lui fournir les supports en version numérique, pour qu'il les agrandisse sur sa tablette, et prévoir un tiers-temps aux évaluations.", es: "Muy bien. Puedo darle los materiales en versión digital, para que los amplíe en su tableta, y prever un tercio de tiempo adicional en las evaluaciones.", ok: true },
            { t: "Je pourrais lui donner les documents agrandis et plus de temps dans les évaluations.", es: "Podría darle los documentos ampliados y más tiempo en las evaluaciones.", ok: false,
              fix: "«En las evaluaciones» se dice «aux évaluations» o «pendant les évaluations». «Dans les évaluations» es un calco del español." }
          ],
          clave: ["agrandir", "tiers-temps", "supports"],
          tip: "«Le tiers-temps» es un tercio de tiempo adicional en las evaluaciones, un ajuste muy común en Francia." },
        { bot: "Et au tableau ? Il ne veut pas qu'on le place devant tout le monde, il a peur qu'on se moque de lui.", es: "¿Y con el tablero? No quiere que lo sienten adelante delante de todos; le da miedo que se burlen de él.",
          opciones: [
            { t: "Je comprends. On peut chercher avec lui la place qui lui convient le mieux.", es: "Entiendo. Podemos buscar con él el puesto que mejor le convenga.", ok: true },
            { t: "C'est important de respecter ça. Je propose de choisir sa place avec lui, discrètement, et de projeter aussi le tableau sur sa tablette : ainsi, il n'aura pas besoin d'être au premier rang.", es: "Es importante respetar eso. Propongo escoger su puesto con él, con discreción, y proyectar también el tablero en su tableta: así no tendrá que estar en la primera fila.", ok: true },
            { t: "Je comprends. On va chercher avec lui la place qui lui convient le meilleur.", es: "Entiendo. Vamos a buscar con él el puesto que mejor le convenga.", ok: false,
              fix: "Con un verbo, el superlativo es el adverbio «le mieux», no el adjetivo «le meilleur»: «la place qui lui convient le mieux»." }
          ],
          clave: ["avec lui", "place", "discrètement"],
          tip: "Un ajuste razonable se decide con el estudiante, no solo para él: su dignidad forma parte del ajuste." },
        { bot: "Vous ne pensez pas que ces aménagements vont le rendre trop différent des autres ?", es: "¿No cree que estos ajustes lo van a hacer demasiado diferente de los demás?",
          opciones: [
            { t: "Non. L'équité, ce n'est pas donner la même chose à tous, c'est donner à chacun ce dont il a besoin.", es: "No. La equidad no es dar lo mismo a todos, es dar a cada uno lo que necesita.", ok: true },
            { t: "Je ne le crois pas. Beaucoup de ces outils profitent à toute la classe : des documents plus lisibles aident tout le monde. Malo ne sera pas une exception, mais un élève parmi les autres.", es: "No lo creo. Muchas de estas herramientas benefician a todo el grupo: documentos más legibles ayudan a todos. Malo no será una excepción, sino un estudiante entre los demás.", ok: true },
            { t: "Non. L'équité, c'est donner à chacun ce qu'il a besoin.", es: "No. La equidad es dar a cada uno lo que necesita.", ok: false,
              fix: "«Avoir besoin de» exige el relativo «dont»: «donner à chacun ce dont il a besoin»." }
          ],
          clave: ["équité", "ce dont", "besoin"],
          tip: "«Ce dont» reemplaza a un complemento introducido por «de»: «ce dont il a besoin», «ce dont je parle»." },
        { bot: "Et les autres enseignants, ils seront au courant ?", es: "¿Y los demás docentes van a estar enterados?",
          opciones: [
            { t: "Oui, avec votre accord, j'en parlerai à l'équipe pédagogique.", es: "Sí, con su autorización, lo hablaré con el equipo docente.", ok: true },
            { t: "Seulement avec votre accord. Je proposerai de formaliser ces aménagements dans son projet personnalisé, pour que tous les enseignants les appliquent de la même façon.", es: "Solo con su autorización. Propondré formalizar estos ajustes en su plan individual, para que todos los docentes los apliquen de la misma manera.", ok: true },
            { t: "Oui, si vous êtes d'accord, je vais informer à l'équipe pédagogique.", es: "Sí, si usted está de acuerdo, voy a informar al equipo docente.", ok: false,
              fix: "«Informer» lleva complemento directo, sin «à»: «informer l'équipe pédagogique»." }
          ],
          clave: ["accord", "équipe pédagogique", "aménagements"],
          tip: "La información sobre la salud de un estudiante se comparte solo con el consentimiento de la familia y con quien la necesita." },
        { bot: "Merci. Je me sens vraiment écoutée. On fait le point dans un mois ?", es: "Gracias. Me siento de verdad escuchada. ¿Hacemos un balance en un mes?",
          opciones: [
            { t: "Oui, bien sûr. Et n'hésitez pas à m'écrire avant si besoin.", es: "Sí, claro. Y no dude en escribirme antes si hace falta.", ok: true },
            { t: "Avec plaisir. On fera le point dans un mois, avec Malo s'il le souhaite : son avis est le plus important pour ajuster.", es: "Con gusto. Haremos el balance en un mes, con Malo si él quiere: su opinión es la más importante para ajustar.", ok: true },
            { t: "Oui. Et n'hésitez pas de m'écrire avant.", es: "Sí. Y no dude en escribirme antes.", ok: false,
              fix: "«Hésiter» va con «à» + infinitivo: «n'hésitez pas à m'écrire»." }
          ],
          clave: ["faire le point", "n'hésitez pas", "Malo"],
          tip: "Revisar los ajustes con el propio estudiante permite mantener lo que funciona y cambiar lo que no." }
      ],
      cierre: { bot: "Merci infiniment. Je vais lui dire qu'on a construit ça ensemble.", es: "Muchísimas gracias. Le voy a decir que construimos esto juntos." },
      vocab: [
        { t: "un élève en situation de handicap", es: "un estudiante con discapacidad" },
        { t: "une déficience visuelle", es: "una discapacidad visual" },
        { t: "un aménagement", es: "un ajuste (razonable)" },
        { t: "le tiers-temps", es: "tiempo adicional (un tercio) en evaluaciones" },
        { t: "agrandir", es: "ampliar" },
        { t: "l'équité (f.)", es: "la equidad" },
        { t: "ce dont", es: "lo que (con verbos que llevan «de»)" },
        { t: "l'équipe pédagogique", es: "el equipo docente" }
      ]
    },

    /* ───────────── 29 · C1 · Reunión de área sobre resultados ───────────── */
    {
      id: "fr-29", titulo: "Reunión de área: leer los resultados", nivel: "C1",
      tema: "Reunión de área sobre resultados",
      contexto: "En la reunión del área de matemáticas de un colegio aliado se analizan unos resultados diagnósticos decepcionantes. Propones un plan y respondes a un jefe de área escéptico.",
      rol: "M. Laurent Vidal, jefe del área de matemáticas, experimentado y escéptico",
      turnos: [
        { bot: "Bon, les résultats de l'évaluation diagnostique sont décevants, surtout en résolution de problèmes. Des idées ?", es: "Bueno, los resultados de la evaluación diagnóstica son decepcionantes, sobre todo en resolución de problemas. ¿Ideas?",
          opciones: [
            { t: "Avant de proposer quoi que ce soit, j'aimerais qu'on regarde les erreurs les plus fréquentes.", es: "Antes de proponer cualquier cosa, me gustaría que miráramos los errores más frecuentes.", ok: true },
            { t: "Avant de chercher des solutions, je propose qu'on analyse les copies : savoir quel type d'erreur domine nous évitera de traiter un symptôme plutôt que la cause.", es: "Antes de buscar soluciones, propongo que analicemos las pruebas: saber qué tipo de error predomina nos evitará tratar un síntoma en lugar de la causa.", ok: true },
            { t: "Avant tout, je propose qu'on analyse les erreurs les plus fréquents.", es: "Antes que nada, propongo que analicemos los errores más frecuentes.", ok: false,
              fix: "«Erreur» es femenino en francés, aunque «error» sea masculino en español: «les erreurs les plus fréquentes»." }
          ],
          clave: ["erreurs", "analyse", "copies"],
          tip: "Analizar el tipo de error antes de actuar es el corazón de la pedagogía del error: el error es un dato, no un fracaso." },
        { bot: "On les connaît déjà, les erreurs : ils ne lisent pas l'énoncé. Le problème, c'est la lecture, pas les maths.", es: "Los errores ya los conocemos: no leen el enunciado. El problema es la lectura, no las matemáticas.",
          opciones: [
            { t: "C'est possible, mais il faudrait le vérifier avant de conclure.", es: "Es posible, pero habría que verificarlo antes de concluir.", ok: true },
            { t: "C'est une hypothèse plausible, mais je ne voudrais pas qu'on tire des conclusions hâtives : certains élèves comprennent l'énoncé et échouent quand même sur la modélisation.", es: "Es una hipótesis plausible, pero no quisiera que sacáramos conclusiones apresuradas: algunos estudiantes entienden el enunciado y aun así fallan en la modelación.", ok: true },
            { t: "C'est possible, mais il ne faut pas sauter aux conclusions.", es: "Es posible, pero no hay que sacar conclusiones apresuradas.", ok: false,
              fix: "«Sauter aux conclusions» es un calco del inglés que también circula en español. En francés: «tirer des conclusions hâtives»." }
          ],
          clave: ["vérifier", "conclusions", "hypothèse"],
          tip: "Matizar sin confrontar: «c'est une hypothèse plausible, mais…» reconoce la idea del otro antes de cuestionarla." },
        { bot: "Et vous proposez quoi, concrètement ?", es: "¿Y usted qué propone, en concreto?",
          opciones: [
            { t: "Je propose des ateliers de résolution de problèmes une fois par semaine, en petits groupes.", es: "Propongo talleres de resolución de problemas una vez por semana, en grupos pequeños.", ok: true },
            { t: "Une piste concrète : une séance hebdomadaire de « problème ouvert », où les élèves explicitent leur démarche à voix haute et où l'on analyse collectivement une erreur anonymisée.", es: "Una propuesta concreta: una sesión semanal de «problema abierto», donde los estudiantes explican su razonamiento en voz alta y donde se analiza colectivamente un error anónimo.", ok: true },
            { t: "Une séance hebdomadaire où les élèves explicitent leur démarche. Ça leur aiderait beaucoup.", es: "Una sesión semanal en la que los estudiantes expliquen su razonamiento. Eso les ayudaría mucho.", ok: false,
              fix: "«Aider» lleva complemento directo: «ça les aiderait beaucoup». En español «les ayudaría» usa indirecto, de ahí el error." }
          ],
          clave: ["démarche", "hebdomadaire", "erreur"],
          tip: "«Aider quelqu'un» es directo: «je les aide», «ça l'aidera». Es un error muy frecuente por influencia del español." },
        { bot: "Encore un dispositif de plus… On n'a pas le temps. Le programme est déjà chargé.", es: "Otro dispositivo más… No tenemos tiempo. El programa ya está muy cargado.",
          opciones: [
            { t: "Je comprends. On pourrait l'intégrer au cours, sans ajouter d'heures.", es: "Entiendo. Podríamos integrarlo a la clase, sin agregar horas.", ok: true },
            { t: "Je l'entends, et c'est une contrainte réelle. Justement, l'idée n'est pas d'ajouter quoi que ce soit, mais de remplacer une partie des exercices d'application : on resterait à volume horaire constant.", es: "Lo entiendo, y es una limitación real. Precisamente, la idea no es agregar nada, sino reemplazar parte de los ejercicios de aplicación: mantendríamos la misma intensidad horaria.", ok: true },
            { t: "Je comprends. Mais à la fin du jour, c'est une question de priorités.", es: "Entiendo. Pero, al fin y al cabo, es una cuestión de prioridades.", ok: false,
              fix: "«À la fin du jour» es un calco del inglés «at the end of the day». En francés: «en fin de compte» o «au bout du compte»." }
          ],
          clave: ["intégrer", "contrainte", "remplacer"],
          tip: "Ante una objeción, primero reconócela («je l'entends») y luego reformula tu propuesta para responder a ella." },
        { bot: "Admettons. Mais comment saura-t-on si ça marche ?", es: "Supongamos. ¿Pero cómo sabremos si funciona?",
          opciones: [
            { t: "On refait une évaluation en fin de trimestre et on compare.", es: "Repetimos una evaluación al final del trimestre y comparamos.", ok: true },
            { t: "Je propose qu'on se fixe un indicateur simple : la part d'élèves capables d'expliciter leur démarche, mesurée avec la même grille en début et en fin de trimestre. Si rien ne bouge, on ajuste.", es: "Propongo que nos fijemos un indicador sencillo: la proporción de estudiantes capaces de explicar su razonamiento, medida con la misma rúbrica al comienzo y al final del trimestre. Si nada cambia, ajustamos.", ok: true },
            { t: "On évaluera au début et à la fin du trimestre. Comme ça, on aura des évidences.", es: "Evaluaremos al comienzo y al final del trimestre. Así tendremos evidencias.", ok: false,
              fix: "Falso amigo: «une évidence» es algo obvio. «Evidencias» (pruebas, datos) se dice «des preuves» o «des données probantes»." }
          ],
          clave: ["indicateur", "grille", "comparer"],
          tip: "«Des données probantes» = evidencia. «C'est une évidence» significa «es obvio»." },
        { bot: "Bon. Je reste sceptique, mais je veux bien qu'on essaie sur un trimestre.", es: "Bueno. Sigo escéptico, pero acepto que lo intentemos durante un trimestre.",
          opciones: [
            { t: "Merci. Je prépare une proposition écrite pour la prochaine réunion.", es: "Gracias. Preparo una propuesta escrita para la próxima reunión.", ok: true },
            { t: "Merci pour votre ouverture. Votre scepticisme nous oblige à être rigoureux, et c'est une bonne chose. Je vous fais parvenir une proposition écrite avant la prochaine réunion.", es: "Gracias por su apertura. Su escepticismo nos obliga a ser rigurosos, y eso es bueno. Le hago llegar una propuesta escrita antes de la próxima reunión.", ok: true },
            { t: "Merci pour votre ouverture. Je prépare la proposition et je vous la fais arriver avant la réunion.", es: "Gracias por su apertura. Preparo la propuesta y se la hago llegar antes de la reunión.", ok: false,
              fix: "«Hacer llegar» se dice «faire parvenir»: «je vous la fais parvenir avant la réunion». «Faire arriver» significa provocar que algo ocurra." }
          ],
          clave: ["proposition", "rigoureux", "merci"],
          tip: "Agradecer al escéptico y convertir su duda en criterio de rigor transforma la resistencia en colaboración." }
      ],
      cierre: { bot: "Très bien. Faites-nous parvenir ça, et on en reparlera à la prochaine réunion d'équipe.", es: "Muy bien. Háganos llegar eso y lo volvemos a hablar en la próxima reunión de equipo." },
      vocab: [
        { t: "l'évaluation diagnostique", es: "la evaluación diagnóstica" },
        { t: "l'énoncé (m.)", es: "el enunciado" },
        { t: "la démarche", es: "el razonamiento, el procedimiento" },
        { t: "tirer des conclusions hâtives", es: "sacar conclusiones apresuradas" },
        { t: "une contrainte", es: "una limitación, una restricción" },
        { t: "à volume horaire constant", es: "con la misma intensidad horaria" },
        { t: "des données probantes", es: "evidencia (≠ une évidence, algo obvio)" },
        { t: "faire parvenir", es: "hacer llegar" }
      ]
    },

    /* ───────────── 30 · C1 · Entrevista para intercambio docente ───────────── */
    {
      id: "fr-30", titulo: "Entrevista para el intercambio docente", nivel: "C1",
      tema: "Entrevista para intercambio docente",
      contexto: "Te postulaste a un programa de intercambio docente entre Colombia y Francia. La responsable te entrevista por videollamada para evaluar tu candidatura.",
      rol: "Mme Isabelle Fournier, responsable del programa de intercambio, cordial pero exigente",
      turnos: [
        { bot: "Bonjour et merci d'être là. Pour commencer, qu'est-ce qui motive votre candidature ?", es: "Buenos días y gracias por estar aquí. Para empezar, ¿qué motiva su candidatura?",
          opciones: [
            { t: "Je voudrais découvrir d'autres pratiques pédagogiques et les partager avec mon école.", es: "Quisiera conocer otras prácticas pedagógicas y compartirlas con mi colegio.", ok: true },
            { t: "Ce qui me motive, c'est la possibilité de confronter ma pratique à un autre système éducatif, et de rapporter à mon collège de Cali des pistes concrètes à partager avec mes collègues.", es: "Lo que me motiva es la posibilidad de contrastar mi práctica con otro sistema educativo, y llevar a mi colegio en Cali propuestas concretas para compartir con mis colegas.", ok: true },
            { t: "Ce qui me motive, c'est la possibilité de m'actualiser professionnellement.", es: "Lo que me motiva es la posibilidad de actualizarme profesionalmente.", ok: false,
              fix: "«Actualizarse» (profesionalmente) se dice «me mettre à jour» o «me former». «S'actualiser» no se usa con ese sentido." }
          ],
          clave: ["motive", "pratique", "partager"],
          tip: "En una entrevista, conecta tu motivación personal con un beneficio para tu institución: muestra visión, no solo interés." },
        { bot: "Et concrètement, qu'est-ce que vous apporteriez à l'établissement d'accueil ?", es: "Y en concreto, ¿qué le aportaría al colegio que lo(a) reciba?",
          opciones: [
            { t: "Mon expérience avec des élèves de milieux très divers, et un projet d'éducation financière.", es: "Mi experiencia con estudiantes de contextos muy diversos, y un proyecto de educación financiera.", ok: true },
            { t: "J'apporterais une solide expérience auprès d'élèves issus de quartiers populaires, ainsi qu'un projet d'éducation financière que nous avons conçu et ajusté au fil des années ; je serais ravie de le co-animer avec une équipe française.", es: "Aportaría una sólida experiencia con estudiantes de barrios populares, así como un proyecto de educación financiera que diseñamos y ajustamos a lo largo de los años; me encantaría codirigirlo con un equipo francés.", ok: true },
            { t: "J'aimerais contribuer avec un projet d'éducation financière.", es: "Me gustaría contribuir con un proyecto de educación financiera.", ok: false,
              fix: "«Contribuer» va con «à» (contribuer à un projet). «Contribuir con algo» se dice «apporter quelque chose»: «j'aimerais apporter un projet d'éducation financière»." }
          ],
          clave: ["apporterais", "expérience", "projet"],
          tip: "Usa el condicional («j'apporterais», «je pourrais») para hablar de tu aporte: suena seguro sin ser presuntuoso." },
        { bot: "Parlez-moi d'une difficulté professionnelle que vous avez surmontée.", es: "Hábleme de una dificultad profesional que haya superado.",
          opciones: [
            { t: "Une année, un groupe avait beaucoup de conflits. J'ai mis en place des cercles de parole, et le climat s'est amélioré.", es: "Un año, un grupo tenía muchos conflictos. Implementé círculos de diálogo y el ambiente mejoró.", ok: true },
            { t: "Il y a quelques années, j'ai hérité d'un groupe très conflictuel. Plutôt que de multiplier les sanctions, j'ai instauré des cercles de parole hebdomadaires ; au bout de quelques mois, le climat de classe avait nettement changé.", es: "Hace algunos años recibí un grupo muy conflictivo. En lugar de multiplicar las sanciones, instauré círculos de diálogo semanales; al cabo de unos meses, el ambiente del grupo había cambiado claramente.", ok: true },
            { t: "Un groupe était très conflictuel. J'ai implémenté des cercles de parole.", es: "Un grupo era muy conflictivo. Implementé círculos de diálogo.", ok: false,
              fix: "«Implémenter» se usa en informática. Para una práctica o un proyecto se dice «mettre en place» o «instaurer»." }
          ],
          clave: ["mis en place", "climat", "groupe"],
          tip: "Estructura tu respuesta en situación, acción y resultado. Alterna el imparfait (contexto) y el passé composé (acciones)." },
        { bot: "Comment envisagez-vous l'adaptation à un système scolaire très différent du vôtre ?", es: "¿Cómo ve su adaptación a un sistema escolar muy diferente del suyo?",
          opciones: [
            { t: "Avec humilité : j'observerais beaucoup avant de proposer.", es: "Con humildad: observaría mucho antes de proponer.", ok: true },
            { t: "Avec humilité et curiosité. Je commencerais par observer et poser des questions, sans juger ; ce n'est qu'ensuite que je proposerais des échanges de pratiques.", es: "Con humildad y curiosidad. Empezaría por observar y hacer preguntas, sin juzgar; solo después propondría intercambios de prácticas.", ok: true },
            { t: "Avec humilité. Je pense que je m'adapterais bien, parce que j'ai beaucoup de expérience.", es: "Con humildad. Creo que me adaptaría bien, porque tengo mucha experiencia.", ok: false,
              fix: "Ante vocal o h muda, «de» se elide: «beaucoup d'expérience». La elisión es obligatoria, también en el registro formal." }
          ],
          clave: ["humilité", "observer", "sans juger"],
          tip: "«Ce n'est qu'ensuite que…» (solo después…) le da precisión y elegancia a una secuencia de acciones." },
        { bot: "Et si, au bout d'un mois, vous vous sentiez isolée ou en difficulté ?", es: "¿Y si, al cabo de un mes, se sintiera aislada o con dificultades?",
          opciones: [
            { t: "Je demanderais de l'aide à mon tuteur ou à mes collègues.", es: "Le pediría ayuda a mi tutor o a mis colegas.", ok: true },
            { t: "J'en parlerais tôt, sans attendre que la situation s'aggrave : à mon tuteur, à l'équipe, et je m'appuierais sur le réseau des enseignants en échange. Demander de l'aide fait partie du métier.", es: "Lo hablaría pronto, sin esperar a que la situación empeore: con mi tutor, con el equipo, y me apoyaría en la red de docentes de intercambio. Pedir ayuda es parte de la profesión.", ok: true },
            { t: "J'en parlerais tôt, et je m'appuierais en mes collègues.", es: "Lo hablaría pronto y me apoyaría en mis colegas.", ok: false,
              fix: "«Apoyarse en» se dice «s'appuyer sur»: «je m'appuierais sur mes collègues»." }
          ],
          clave: ["aide", "m'appuierais", "collègues"],
          tip: "Mostrar que sabes pedir ayuda es una fortaleza en una entrevista: indica madurez profesional." },
        { bot: "Dernière question : dans cinq ans, quel impact aimeriez-vous que cet échange ait eu ?", es: "Última pregunta: dentro de cinco años, ¿qué impacto le gustaría que hubiera tenido este intercambio?",
          opciones: [
            { t: "J'aimerais que mon école ait adopté de nouvelles pratiques grâce à cet échange.", es: "Me gustaría que mi colegio hubiera adoptado nuevas prácticas gracias a este intercambio.", ok: true },
            { t: "J'aimerais que cet échange ait laissé une trace durable : un partenariat vivant entre nos deux établissements, et des pratiques que mes collègues se seraient appropriées, bien au-delà de mon séjour.", es: "Me gustaría que este intercambio hubiera dejado una huella duradera: una alianza viva entre nuestros dos colegios y prácticas que mis colegas hubieran hecho suyas, mucho más allá de mi estadía.", ok: true },
            { t: "J'aimerais que mon collège a adopté de nouvelles pratiques.", es: "Me gustaría que mi colegio hubiera adoptado nuevas prácticas.", ok: false,
              fix: "«Aimer que» pide subjuntivo; para un resultado ya cumplido se usa el subjuntivo pasado: «que mon collège ait adopté»." }
          ],
          clave: ["j'aimerais que", "ait", "durable"],
          tip: "«J'aimerais que + subjuntivo pasado» proyecta un resultado ya cumplido en el futuro: muy útil para hablar de impacto." }
      ],
      cierre: { bot: "Merci beaucoup. Vos réponses sont claires et réfléchies. Nous vous recontacterons très prochainement.", es: "Muchas gracias. Sus respuestas son claras y reflexivas. Lo(a) volveremos a contactar muy pronto." },
      vocab: [
        { t: "une candidature", es: "una postulación, candidatura" },
        { t: "l'établissement d'accueil", es: "la institución que recibe" },
        { t: "apporter", es: "aportar" },
        { t: "surmonter", es: "superar" },
        { t: "mettre en place", es: "implementar (≠ implémenter)" },
        { t: "envisager", es: "contemplar, ver (a futuro)" },
        { t: "s'appuyer sur", es: "apoyarse en" },
        { t: "laisser une trace", es: "dejar huella" }
      ]
    }
  ]
};
