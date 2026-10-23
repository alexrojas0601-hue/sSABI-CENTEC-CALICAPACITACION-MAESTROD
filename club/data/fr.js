/* Club de Diálogo SABI CENTEC · Francés (fr-FR) · 10 escenarios A1 → C1 */
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
    }
  ]
};
