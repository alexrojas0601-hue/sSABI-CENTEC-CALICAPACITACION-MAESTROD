window.SABI_CLUB = window.SABI_CLUB || {};
window.SABI_CLUB.pt = {
  escenarios: [
    {
      id: "pt-01", titulo: "Primer día en una escuela brasileña", nivel: "A1",
      tema: "Saludo y presentación docente",
      contexto: "Llegas a una escuela de Belo Horizonte para un intercambio docente. La coordinadora te recibe en la entrada y quiere conocerte.",
      rol: "Mariana Souza, coordinadora pedagógica, sonriente y muy acogedora",
      turnos: [
        { bot: "Bom dia! Boas-vindas à Escola Monteiro Lobato. Eu sou a Mariana, a coordenadora. Qual é o seu nome?", es: "¡Buenos días! Bienvenido(a) a la Escuela Monteiro Lobato. Soy Mariana, la coordinadora. ¿Cuál es su nombre?",
          opciones: [
            { t: "Bom dia, Mariana! Meu nome é Carlos.", es: "¡Buenos días, Mariana! Mi nombre es Carlos.", ok: true },
            { t: "Bom dia! Muito prazer, eu me chamo Carlos. Sou professor de Matemática.", es: "¡Buenos días! Mucho gusto, me llamo Carlos. Soy profesor de Matemáticas.", ok: true },
            { t: "Bom dia! Eu me llamo Carlos.", es: "¡Buenos días! Me llamo Carlos.", ok: false,
              fix: "«Llamo» es español. En portugués es «Eu me chamo Carlos» (la «ch» suena como «sh»)." }
          ],
          clave: ["Bom dia", "nome", "chamo"],
          tip: "En Brasil: «Bom dia» hasta el mediodía, «Boa tarde» hasta que oscurece y «Boa noite» después." },
        { bot: "Muito prazer! De onde você é?", es: "¡Mucho gusto! ¿De dónde es usted?",
          opciones: [
            { t: "Eu sou da Colômbia, de Cali.", es: "Soy de Colombia, de Cali.", ok: true },
            { t: "Sou colombiano, de Cali, a capital da salsa!", es: "Soy colombiano, de Cali, ¡la capital de la salsa!", ok: true },
            { t: "Eu sou de Colômbia.", es: "Soy de Colombia.", ok: false,
              fix: "Colômbia lleva artículo en portugués: de + a = «da». Se dice «sou da Colômbia», igual que «do Brasil»." }
          ],
          clave: ["da Colômbia", "colombiano"],
          tip: "Muchos países llevan artículo: «o Brasil», «a Colômbia», «a Argentina». Por eso: «do Brasil», «da Colômbia»." },
        { bot: "Que legal! E o que você ensina?", es: "¡Qué chévere! ¿Y qué enseña usted?",
          opciones: [
            { t: "Eu ensino Matemática.", es: "Enseño Matemáticas.", ok: true },
            { t: "Sou professor de Matemática e trabalho com o sexto ano.", es: "Soy profesor de Matemáticas y trabajo con sexto grado.", ok: true },
            { t: "Eu enseño Matemática.", es: "Enseño Matemáticas.", ok: false,
              fix: "El verbo es «ensinar»: eu ensino, você ensina. «Enseño» es español." }
          ],
          clave: ["ensino", "professor", "Matemática"],
          tip: "«Legal» en Brasil significa «chévere», no solo «conforme a la ley». Lo escucharás todo el tiempo." },
        { bot: "Há quanto tempo você é professor?", es: "¿Hace cuánto tiempo es usted profesor?",
          opciones: [
            { t: "Há dez anos.", es: "Hace diez años.", ok: true },
            { t: "Sou professor há dez anos e adoro o meu trabalho.", es: "Soy profesor desde hace diez años y me encanta mi trabajo.", ok: true },
            { t: "Sou professor desde dez anos.", es: "Soy profesor desde diez años.", ok: false,
              fix: "Para una duración se usa «há»: «sou professor há dez anos». «Desde» va con una fecha: «desde 2015»." }
          ],
          clave: ["há dez anos", "professor há"],
          tip: "«Há» (del verbo haver) indica tiempo transcurrido: «há dez anos» = hace diez años. La h no suena." },
        { bot: "Ótimo! E você gostou da escola?", es: "¡Excelente! ¿Y le gustó la escuela?",
          opciones: [
            { t: "Sim, gostei muito! A escola é linda.", es: "¡Sí, me gustó mucho! La escuela es preciosa.", ok: true },
            { t: "Gostei muito! As salas são bonitas e as pessoas são muito simpáticas.", es: "¡Me gustó mucho! Los salones son bonitos y la gente es muy amable.", ok: true },
            { t: "Sim, a escola é muito esquisita.", es: "(Quiso decir: Sí, la escuela es muy exquisita).", ok: false,
              fix: "Falso amigo: «esquisito» significa «raro, extraño». Para elogiar diga «linda», «bonita» u «ótima»." }
          ],
          clave: ["gostei", "linda", "bonita"],
          tip: "«Gostar» siempre lleva «de»: «gostei da escola». La persona es el sujeto: «eu gosto», no «me gusta»." },
        { bot: "Que bom! Agora vou te apresentar os outros professores. Vamos?", es: "¡Qué bien! Ahora le voy a presentar a los demás profesores. ¿Vamos?",
          opciones: [
            { t: "Vamos, sim! Obrigado, Mariana.", es: "¡Sí, vamos! Gracias, Mariana.", ok: true },
            { t: "Claro, vamos! Muito obrigado pela recepção.", es: "¡Claro, vamos! Muchas gracias por el recibimiento.", ok: true },
            { t: "Vamos! Muito obrigado por la recepção.", es: "¡Vamos! Muchas gracias por el recibimiento.", ok: false,
              fix: "«Por la» es español. En portugués «por + a» se contrae: «obrigado pela recepção»." }
          ],
          clave: ["vamos", "obrigad"],
          tip: "Los hombres dicen «obrigado» y las mujeres «obrigada»: concuerda con quien habla, no con quien escucha." }
      ],
      cierre: { bot: "Venha comigo. Tenho certeza de que você vai gostar muito daqui!", es: "Venga conmigo. ¡Estoy segura de que le va a gustar mucho estar aquí!" },
      vocab: [
        { t: "muito prazer", es: "mucho gusto" },
        { t: "eu me chamo", es: "me llamo" },
        { t: "ensinar", es: "enseñar" },
        { t: "há dez anos", es: "hace diez años" },
        { t: "legal", es: "chévere" },
        { t: "esquisito", es: "raro, extraño (falso amigo)" },
        { t: "obrigado / obrigada", es: "gracias (lo dice un hombre / una mujer)" }
      ]
    },
    {
      id: "pt-02", titulo: "Instrucciones claras en el aula", nivel: "A2",
      tema: "Instrucciones de clase",
      contexto: "Das una clase de Lengua Portuguesa a un 6.º año en São Paulo. Un estudiante te hace preguntas y tú das instrucciones claras.",
      rol: "Lucas, 11 años, curioso, conversador y un poco distraído",
      turnos: [
        { bot: "Professor, o que a gente vai fazer hoje?", es: "Profe, ¿qué vamos a hacer hoy?",
          opciones: [
            { t: "Hoje vamos ler um texto e responder perguntas.", es: "Hoy vamos a leer un texto y responder preguntas.", ok: true },
            { t: "Hoje a gente vai ler um texto curto e depois trabalhar em dupla.", es: "Hoy vamos a leer un texto corto y después trabajar en parejas.", ok: true },
            { t: "Hoje vamos a ler um texto.", es: "Hoy vamos a leer un texto.", ok: false,
              fix: "En portugués «ir + infinitivo» no lleva «a»: «vamos ler», no «vamos a ler»." }
          ],
          clave: ["vamos ler", "vai ler"],
          tip: "«A gente» (= nosotros) es lo más común en Brasil. Va con verbo en 3.ª persona: «a gente vai»." },
        { bot: "Legal! Preciso pegar o livro?", es: "¡Chévere! ¿Tengo que sacar el libro?",
          opciones: [
            { t: "Sim, abra o livro na página vinte.", es: "Sí, abre el libro en la página veinte.", ok: true },
            { t: "Sim, pegue o livro e abra na página vinte, por favor.", es: "Sí, saca el libro y ábrelo en la página veinte, por favor.", ok: true },
            { t: "Sim, abra o livro em a página vinte.", es: "Sí, abre el libro en la página veinte.", ok: false,
              fix: "«Em + a» se contrae siempre: «na página». Igual: no (em + o), nos, nas." }
          ],
          clave: ["na página", "pegue o livro"],
          tip: "«Pegar» en Brasil significa «coger, tomar», no «golpear». «Pegar o livro» = sacar el libro." },
        { bot: "Professor, posso ir ao banheiro?", es: "Profe, ¿puedo ir al baño?",
          opciones: [
            { t: "Pode, sim, mas volte rápido.", es: "Sí, puedes, pero vuelve rápido.", ok: true },
            { t: "Pode, mas primeiro termine o exercício, tá bom?", es: "Puedes, pero primero termina el ejercicio, ¿listo?", ok: true },
            { t: "Sim, puedes ir.", es: "Sí, puedes ir.", ok: false,
              fix: "«Puedes» es español. Con «poder»: «você pode». Para responder basta «Pode, sim»." }
          ],
          clave: ["pode", "volte", "termine"],
          tip: "Para responder «sí» en portugués se repite el verbo: «Posso?» – «Pode!». Suena más natural que un simple «sim»." },
        { bot: "Obrigado! Ah, professor, não entendi o exercício dois. Pode explicar de novo?", es: "¡Gracias! Ah, profe, no entendí el ejercicio dos. ¿Puede explicar otra vez?",
          opciones: [
            { t: "Claro. Leia o texto e sublinhe os verbos.", es: "Claro. Lee el texto y subraya los verbos.", ok: true },
            { t: "Claro! Primeiro leia o texto com atenção, depois sublinhe os verbos com lápis.", es: "¡Claro! Primero lee el texto con atención, después subraya los verbos con lápiz.", ok: true },
            { t: "Claro. Leia o texto e subraye os verbos.", es: "Claro. Lee el texto y subraya los verbos.", ok: false,
              fix: "«Subrayar» es español. En portugués es «sublinhar»: «sublinhe os verbos»." }
          ],
          clave: ["sublinhe", "com atenção"],
          tip: "Instrucciones claras: un verbo por paso y conectores como «primeiro», «depois», «no final»." },
        { bot: "Entendi! Posso fazer com o Pedro?", es: "¡Entendí! ¿Puedo hacerlo con Pedro?",
          opciones: [
            { t: "Pode, sim. Trabalhem em dupla.", es: "Sí, puedes. Trabajen en parejas.", ok: true },
            { t: "Pode. Façam em dupla e falem baixo, por favor.", es: "Puedes. Háganlo en parejas y hablen bajito, por favor.", ok: true },
            { t: "Pode. Trabalhem em pareja.", es: "Puedes. Trabajen en pareja.", ok: false,
              fix: "«Pareja» no existe en portugués. En el aula se dice «em dupla»." }
          ],
          clave: ["em dupla", "falem baixo"],
          tip: "«Falem baixo» = hablen bajito. «Silêncio, por favor» suena más fuerte; úselo solo si hace falta." },
        { bot: "Quanto tempo a gente tem?", es: "¿Cuánto tiempo tenemos?",
          opciones: [
            { t: "Vocês têm quinze minutos.", es: "Tienen quince minutos.", ok: true },
            { t: "Vocês têm quinze minutos. Depois vamos corrigir juntos.", es: "Tienen quince minutos. Después corregimos juntos.", ok: true },
            { t: "Vocês tienem quinze minutos.", es: "Tienen quince minutos.", ok: false,
              fix: "El verbo «ter»: você tem, vocês têm (con acento circunflejo en plural). «Tienem» no existe." }
          ],
          clave: ["vocês têm", "corrigir"],
          tip: "«Você tem» y «vocês têm» suenan casi igual; el circunflejo marca el plural en la escritura." }
      ],
      cierre: { bot: "Beleza, professor! Vamos começar agora.", es: "¡Listo, profe! Vamos a empezar ya." },
      vocab: [
        { t: "a gente", es: "nosotros (coloquial)" },
        { t: "pegar o livro", es: "sacar el libro" },
        { t: "sublinhar", es: "subrayar" },
        { t: "em dupla", es: "en parejas" },
        { t: "de novo", es: "otra vez" },
        { t: "banheiro", es: "baño" },
        { t: "corrigir", es: "corregir" },
        { t: "beleza", es: "listo, de acuerdo (coloquial)" }
      ]
    },
    {
      id: "pt-03", titulo: "Almuerzo en Florianópolis", nivel: "A2",
      tema: "Viaje y vida cotidiana",
      contexto: "Viajaste a Florianópolis para un congreso de educación. Entras a un restaurante y quieres pedir comida y pagar sin problemas.",
      rol: "Seu Antônio, mesero bromista de un restaurante de mariscos",
      turnos: [
        { bot: "Boa tarde! Mesa para quantas pessoas?", es: "¡Buenas tardes! ¿Mesa para cuántas personas?",
          opciones: [
            { t: "Para uma pessoa, por favor.", es: "Para una persona, por favor.", ok: true },
            { t: "Boa tarde! Só para mim, por favor.", es: "¡Buenas tardes! Solo para mí, por favor.", ok: true },
            { t: "Para una pessoa, por favor.", es: "Para una persona, por favor.", ok: false,
              fix: "En portugués el femenino de «um» es «uma» (con m): uma pessoa, uma mesa." }
          ],
          clave: ["uma pessoa", "para mim"],
          tip: "La terminación «-ão» es nasal: «não», «pão», «mão». Practique «não» dejando salir aire por la nariz." },
        { bot: "Fique à vontade. Aqui está o cardápio. Vai beber alguma coisa?", es: "Siéntase como en casa. Aquí está la carta. ¿Va a tomar algo?",
          opciones: [
            { t: "Quero um suco de maracujá, por favor.", es: "Quiero un jugo de maracuyá, por favor.", ok: true },
            { t: "Vou querer uma água com gás e um suco de maracujá.", es: "Voy a querer un agua con gas y un jugo de maracuyá.", ok: true },
            { t: "Quero um jugo de maracujá.", es: "Quiero un jugo de maracuyá.", ok: false,
              fix: "En portugués «jugo» es «suco»: «um suco de maracujá»." }
          ],
          clave: ["suco", "quero", "água"],
          tip: "«Cardápio» = carta o menú. «Fique à vontade» = siéntase cómodo, como en su casa." },
        { bot: "Perfeito. E para comer? Hoje a moqueca está ótima.", es: "Perfecto. ¿Y para comer? Hoy la moqueca está buenísima.",
          opciones: [
            { t: "Vou querer a moqueca, então.", es: "Entonces voy a querer la moqueca.", ok: true },
            { t: "Então vou experimentar a moqueca. Parece deliciosa!", es: "Entonces voy a probar la moqueca. ¡Se ve deliciosa!", ok: true },
            { t: "Quero a moqueca. Ela é esquisita?", es: "(Quiso decir: Quiero la moqueca. ¿Es exquisita?)", ok: false,
              fix: "«Esquisita» significa «rara». Para elogiar la comida: «deliciosa» o «gostosa»." }
          ],
          clave: ["moqueca", "querer", "experimentar"],
          tip: "«Experimentar» en portugués también significa «probar» comida. «Provar» se usa igual." },
        { bot: "Boa escolha! Você está de férias aqui em Floripa?", es: "¡Buena elección! ¿Está de vacaciones aquí en Floripa?",
          opciones: [
            { t: "Não, estou aqui para um congresso de educação.", es: "No, estoy aquí por un congreso de educación.", ok: true },
            { t: "Não, vim para um congresso de professores, mas quero conhecer as praias.", es: "No, vine a un congreso de profesores, pero quiero conocer las playas.", ok: true },
            { t: "Não, estou trabajando num congresso.", es: "No, estoy trabajando en un congreso.", ok: false,
              fix: "«Trabajar» en portugués es «trabalhar»: «estou trabalhando». La «lh» suena parecido a «li» en «Italia»." }
          ],
          clave: ["congresso", "estou aqui", "vim para"],
          tip: "«Férias» siempre va en plural: «estou de férias» = estoy de vacaciones." },
        { bot: "Que legal! Aqui está a moqueca. Cuidado, está quente.", es: "¡Qué chévere! Aquí está la moqueca. Cuidado, está caliente.",
          opciones: [
            { t: "Obrigado! Está com uma cara ótima.", es: "¡Gracias! Tiene una pinta buenísima.", ok: true },
            { t: "Muito obrigado! O cheiro está maravilhoso.", es: "¡Muchas gracias! El olor está maravilloso.", ok: true },
            { t: "Obrigado! Está muito buena.", es: "¡Gracias! Está muy buena.", ok: false,
              fix: "«Buena» es español. En portugués es «boa»; mejor aún para comida: «está gostosa»." }
          ],
          clave: ["obrigado", "cara", "cheiro"],
          tip: "«Estar com uma cara boa» = tener buena pinta. «Quente» es caliente; «calor» se usa para el clima." },
        { bot: "E aí, gostou? Quer uma sobremesa?", es: "¿Y qué, le gustó? ¿Quiere postre?",
          opciones: [
            { t: "Gostei muito! Não, obrigado. Pode trazer a conta?", es: "¡Me gustó mucho! No, gracias. ¿Me puede traer la cuenta?", ok: true },
            { t: "Estava deliciosa! Só um cafezinho e a conta, por favor.", es: "¡Estaba deliciosa! Solo un tintico y la cuenta, por favor.", ok: true },
            { t: "Gostei muito! Me traz la cuenta?", es: "¡Me gustó mucho! ¿Me trae la cuenta?", ok: false,
              fix: "«La cuenta» es español. En portugués: «a conta». Forma amable: «Pode trazer a conta, por favor?»." }
          ],
          clave: ["conta", "gostei", "cafezinho", "deliciosa"],
          tip: "El «cafezinho» al final de la comida es casi un ritual en Brasil; a veces es cortesía de la casa." }
      ],
      cierre: { bot: "Já trago! Foi um prazer. Volte sempre!", es: "¡Ya se la traigo! Fue un placer. ¡Vuelva pronto!" },
      vocab: [
        { t: "cardápio", es: "carta, menú" },
        { t: "suco", es: "jugo" },
        { t: "garçom", es: "mesero" },
        { t: "gostoso / gostosa", es: "rico, delicioso" },
        { t: "sobremesa", es: "postre" },
        { t: "a conta", es: "la cuenta" },
        { t: "Fique à vontade", es: "siéntase como en casa" },
        { t: "esquisito", es: "raro (falso amigo)" }
      ]
    },
    {
      id: "pt-04", titulo: "Un favor en la sala de profesores", nivel: "B1",
      tema: "Sala de profesores",
      contexto: "Estás en la sala de profesores en una escuela de Recife. Una colega te pide ayuda con la corrección de exámenes y conversan sobre noticias del colegio.",
      rol: "Renata, profesora de Historia, veterana, siempre de afán y muy generosa",
      turnos: [
        { bot: "Oi! Tudo bem? Você tem um minutinho? Estou atrasada com as provas.", es: "¡Hola! ¿Todo bien? ¿Tienes un minutico? Estoy atrasada con los exámenes.",
          opciones: [
            { t: "Tudo bem, e você? Tenho, sim. Em que posso ajudar?", es: "Todo bien, ¿y tú? Sí, tengo. ¿En qué te puedo ayudar?", ok: true },
            { t: "Oi, Renata! Claro, tenho uns minutos. O que você precisa?", es: "¡Hola, Renata! Claro, tengo unos minutos. ¿Qué necesitas?", ok: true },
            { t: "Claro! Estou libre agora.", es: "¡Claro! Estoy libre ahora.", ok: false,
              fix: "En portugués se escribe y pronuncia con v: «livre». «Estou livre agora»." }
          ],
          clave: ["tenho", "ajudar", "precisa"],
          tip: "«Prova» es examen; «provar» es probar. «Corrigir provas» = calificar exámenes." },
        { bot: "Preciso que alguém corrija as provas do oitavo B comigo amanhã. Você poderia?", es: "Necesito que alguien corrija conmigo los exámenes de octavo B mañana. ¿Podrías?",
          opciones: [
            { t: "Posso, sim. A que horas?", es: "Sí, puedo. ¿A qué hora?", ok: true },
            { t: "Com certeza. Que horário fica melhor para você?", es: "Por supuesto. ¿Qué horario te queda mejor?", ok: true },
            { t: "Sim, posso. A que hora?", es: "Sí, puedo. ¿A qué hora?", ok: false,
              fix: "En portugués la hora se pregunta en plural: «A que horas?». También: «São três horas»." }
          ],
          clave: ["posso", "que horas", "horário", "com certeza"],
          tip: "«Com certeza» = por supuesto. Es mucho más común que «certamente» en el habla diaria." },
        { bot: "Às dez, no intervalo. Ah, você viu o e-mail da direção sobre a reunião?", es: "A las diez, en el recreo. Ah, ¿viste el correo de la dirección sobre la reunión?",
          opciones: [
            { t: "Vi, sim. É na sexta, não é?", es: "Sí, lo vi. Es el viernes, ¿no?", ok: true },
            { t: "Vi. A reunião vai ser na sexta-feira, depois das aulas, né?", es: "Lo vi. La reunión va a ser el viernes, después de clases, ¿no?", ok: true },
            { t: "Vi, sim. É no viernes, não é?", es: "Sí, lo vi. Es el viernes, ¿no?", ok: false,
              fix: "Los días en portugués: segunda, terça, quarta, quinta, sexta(-feira), sábado y domingo. «Na sexta»." }
          ],
          clave: ["vi", "sexta", "reunião"],
          tip: "La semana empieza con «segunda-feira» (lunes). En la conversación se omite «-feira»: «na terça», «na sexta»." },
        { bot: "Isso. E você sabia que a Juliana vai ter bebê? Ela sai de licença em março.", es: "Eso. ¿Y sabías que Juliana va a tener un bebé? Sale a licencia en marzo.",
          opciones: [
            { t: "Que notícia boa! Ela está grávida de quantos meses?", es: "¡Qué buena noticia! ¿De cuántos meses está embarazada?", ok: true },
            { t: "Que maravilha! Estou muito feliz por ela.", es: "¡Qué maravilla! Me alegro mucho por ella.", ok: true },
            { t: "Que bom! Ela está embaraçada de quantos meses?", es: "(Quiso decir: ¡Qué bien! ¿De cuántos meses está embarazada?)", ok: false,
              fix: "Falso amigo: «embaraçada» significa «avergonzada» o «confundida». «Embarazada» en portugués es «grávida»." }
          ],
          clave: ["grávida", "notícia", "maravilha", "feliz"],
          tip: "«Licença-maternidade» = licencia de maternidad. En Brasil dura de 120 a 180 días según el empleador." },
        { bot: "Pois é, ela já está de cinco meses. A escola vai precisar de alguém para substituí-la nas aulas de Inglês. Você conhece algum professor bom?", es: "Sí, ya tiene cinco meses. La escuela va a necesitar a alguien que la reemplace en las clases de Inglés. ¿Conoces a algún buen profesor?",
          opciones: [
            { t: "Conheço, sim. Posso passar o contato dele.", es: "Sí, conozco a uno. Te puedo pasar su contacto.", ok: true },
            { t: "Acho que sim. Tenho um amigo que dá aula de Inglês; posso falar com ele.", es: "Creo que sí. Tengo un amigo que da clases de Inglés; puedo hablar con él.", ok: true },
            { t: "Conheço um, sim. Posso passar o contato de ele.", es: "Sí, conozco a uno. Te puedo pasar su contacto.", ok: false,
              fix: "«De + ele» se contrae obligatoriamente: «dele». Igual: dela, deles, delas." }
          ],
          clave: ["contato dele", "conheço", "amigo", "falar com ele"],
          tip: "En Brasil «dele/dela» reemplaza muchas veces a «seu/sua» para evitar ambigüedad: «o contato dele» = el contacto de él." },
        { bot: "Seria ótimo! Está difícil achar professor disponível este ano.", es: "¡Sería excelente! Está difícil encontrar profesor disponible este año.",
          opciones: [
            { t: "É verdade. Vou mandar o número dele hoje mesmo.", es: "Es verdad. Te mando su número hoy mismo.", ok: true },
            { t: "É mesmo, tem poucos professores disponíveis. Hoje à noite eu te mando o contato.", es: "Así es, hay pocos profesores disponibles. Esta noche te mando el contacto.", ok: true },
            { t: "É verdade, hay poucos professores. Mando o contato hoje.", es: "Es verdad, hay pocos profesores. Te mando el contacto hoy.", ok: false,
              fix: "«Hay» no existe en portugués. Se usa «há» (formal) o «tem» (coloquial en Brasil): «tem poucos professores»." }
          ],
          clave: ["mandar", "número", "te mando", "disponíveis"],
          tip: "En Brasil «tem» reemplaza a «há» en el habla diaria: «tem café na cozinha» = hay café en la cocina." },
        { bot: "Você é um anjo! Obrigada mesmo. Amanhã às dez, então?", es: "¡Eres un ángel! De verdad, gracias. ¿Mañana a las diez, entonces?",
          opciones: [
            { t: "Combinado! Até amanhã.", es: "¡Listo! Hasta mañana.", ok: true },
            { t: "Fechado! Às dez, na sala dos professores. Até amanhã!", es: "¡Trato hecho! A las diez, en la sala de profesores. ¡Hasta mañana!", ok: true },
            { t: "Combinado! Hasta amanhã.", es: "¡Listo! Hasta mañana.", ok: false,
              fix: "«Hasta» en portugués es «até»: «até amanhã», «até logo», «até mais»." }
          ],
          clave: ["combinado", "fechado", "até amanhã"],
          tip: "«Combinado» y «fechado» cierran un acuerdo, como nuestro «listo» o «trato hecho»." }
      ],
      cierre: { bot: "Até amanhã! E boa aula!", es: "¡Hasta mañana! ¡Y que te vaya bien en clase!" },
      vocab: [
        { t: "sala dos professores", es: "sala de profesores" },
        { t: "corrigir provas", es: "calificar exámenes" },
        { t: "intervalo", es: "recreo, descanso" },
        { t: "grávida", es: "embarazada" },
        { t: "embaraçado(a)", es: "avergonzado, confundido (falso amigo)" },
        { t: "dele / dela", es: "de él / de ella" },
        { t: "tem (coloquial)", es: "hay" },
        { t: "combinado / fechado", es: "listo, trato hecho" }
      ]
    },
    {
      id: "pt-05", titulo: "Reunión con una mamá preocupada", nivel: "B1",
      tema: "Reunión con familia",
      contexto: "Atiendes a la mamá de un estudiante de 4.º año en una escuela de Curitiba. Las notas del niño bajaron y quieres acordar un plan juntos.",
      rol: "Dona Cláudia, mamá de Gabriel (9 años), preocupada y algo nerviosa",
      turnos: [
        { bot: "Boa tarde, professor. Desculpe o atraso, o trânsito estava horrível.", es: "Buenas tardes, profesor. Disculpe la demora, el tráfico estaba horrible.",
          opciones: [
            { t: "Boa tarde, dona Cláudia. Não se preocupe, sente-se, por favor.", es: "Buenas tardes, doña Cláudia. No se preocupe, siéntese, por favor.", ok: true },
            { t: "Boa tarde! Imagina, fique tranquila. Obrigado por ter vindo.", es: "¡Buenas tardes! Tranquila, no se preocupe. Gracias por venir.", ok: true },
            { t: "Boa tarde. Não se preocupe, siéntese, por favor.", es: "Buenas tardes. No se preocupe, siéntese, por favor.", ok: false,
              fix: "El verbo es «sentar-se»: «sente-se, por favor» (con e). «Siéntese» es español." }
          ],
          clave: ["boa tarde", "sente-se", "tranquila"],
          tip: "«Dona» + nombre es la forma respetuosa y cálida de dirigirse a una señora en Brasil." },
        { bot: "Eu estou preocupada com o Gabriel. As notas dele caíram muito, não é?", es: "Estoy preocupada por Gabriel. Sus notas bajaron mucho, ¿verdad?",
          opciones: [
            { t: "Sim, caíram um pouco, mas ele tem muito potencial.", es: "Sí, bajaron un poco, pero él tiene mucho potencial.", ok: true },
            { t: "É verdade, as notas de Matemática baixaram, mas juntos podemos ajudá-lo.", es: "Es verdad, las notas de Matemáticas bajaron, pero juntos podemos ayudarlo.", ok: true },
            { t: "Sim, mas não se preocupe, ele tem muitas ganas.", es: "Sí, pero no se preocupe, él tiene muchas ganas.", ok: false,
              fix: "«Ganas» no existe en portugués. Se dice «vontade»: «ele tem muita vontade de aprender»." }
          ],
          clave: ["potencial", "caíram", "juntos", "ajudá-lo"],
          tip: "Empiece por una fortaleza del estudiante antes de hablar del problema: la familia escucha mejor." },
        { bot: "Em casa ele passa horas no celular. Eu não sei mais o que fazer.", es: "En la casa se pasa horas en el celular. Ya no sé qué hacer.",
          opciones: [
            { t: "Entendo. Que tal combinar um horário fixo para o celular?", es: "Entiendo. ¿Qué tal acordar un horario fijo para el celular?", ok: true },
            { t: "Isso é muito comum. Uma sugestão é criar uma rotina: primeiro a lição de casa, depois o celular.", es: "Eso es muy común. Una sugerencia es crear una rutina: primero la tarea, después el celular.", ok: true },
            { t: "Entendo. A senhora pode quitar o celular durante a semana.", es: "(Quiso decir: Entiendo. Usted puede quitarle el celular entre semana).", ok: false,
              fix: "«Quitar» en portugués es saldar una deuda. Para «quitar» se dice «tirar»: «tirar o celular»." }
          ],
          clave: ["celular", "horário", "rotina"],
          tip: "«Lição de casa» o «dever de casa» = tarea. «Tarefa» también se usa, pero es más general." },
        { bot: "Boa ideia. E na escola, ele se comporta bem?", es: "Buena idea. ¿Y en la escuela se porta bien?",
          opciones: [
            { t: "Sim, ele é educado, mas às vezes conversa muito.", es: "Sí, es educado, pero a veces conversa mucho.", ok: true },
            { t: "Em geral, sim. É respeitoso com todos, só se distrai com os colegas.", es: "En general, sí. Es respetuoso con todos, solo se distrae con los compañeros.", ok: true },
            { t: "Sim, ele é educado, mas às vezes está distraído em clase.", es: "Sí, es educado, pero a veces está distraído en clase.", ok: false,
              fix: "Para la clase como lección se dice «aula»: «distraído na aula». «Clase» con s no existe en portugués (es «classe»)." }
          ],
          clave: ["educado", "conversa", "respeitoso", "colegas"],
          tip: "«Conversar muito» en la escuela significa «hablar demasiado en clase»; es una forma suave de decirlo." },
        { bot: "E o que eu posso fazer para ajudar?", es: "¿Y qué puedo hacer yo para ayudar?",
          opciones: [
            { t: "A senhora pode ler com ele vinte minutos por dia.", es: "Usted puede leer con él veinte minutos al día.", ok: true },
            { t: "Seria ótimo se a senhora acompanhasse a lição de casa e lesse com ele todos os dias.", es: "Sería excelente que usted acompañara la tarea y leyera con él todos los días.", ok: true },
            { t: "A senhora pode leer com ele todos os dias.", es: "Usted puede leer con él todos los días.", ok: false,
              fix: "«Leer» en portugués es «ler» (una sola e): eu leio, você lê." }
          ],
          clave: ["ler", "vinte minutos", "lição de casa", "todos os dias"],
          tip: "«A senhora» es el trato de respeto (usted) para una mujer adulta; para un hombre, «o senhor»." },
        { bot: "Vou fazer isso. Podemos conversar de novo daqui a um mês?", es: "Voy a hacerlo. ¿Podemos hablar otra vez dentro de un mes?",
          opciones: [
            { t: "Claro. Vamos marcar para o dia quinze.", es: "Claro. Cuadremos para el día quince.", ok: true },
            { t: "Com certeza. Vou mandar um recado na agenda para marcarmos.", es: "Por supuesto. Le mando una nota en la agenda para cuadrar la fecha.", ok: true },
            { t: "Claro. Podemos fazer uma cita no dia quinze.", es: "Claro. Podemos hacer una cita el día quince.", ok: false,
              fix: "«Cita» no existe en portugués. Se dice «marcar uma reunião» o «marcar um horário»." }
          ],
          clave: ["marcar", "dia quinze", "recado"],
          tip: "«Marcarmos» es infinitivo personal, muy típico del portugués: «para marcarmos» = para que (nosotros) fijemos." }
      ],
      cierre: { bot: "Muito obrigada, professor. Saio daqui bem mais tranquila.", es: "Muchas gracias, profesor. Salgo de aquí mucho más tranquila." },
      vocab: [
        { t: "dona", es: "doña (trato respetuoso)" },
        { t: "lição de casa", es: "tarea" },
        { t: "vontade", es: "ganas" },
        { t: "tirar", es: "quitar" },
        { t: "aula", es: "clase (lección)" },
        { t: "marcar uma reunião", es: "programar una reunión" },
        { t: "recado", es: "nota, mensaje" },
        { t: "acompanhar", es: "acompañar, hacer seguimiento" }
      ]
    },
    {
      id: "pt-06", titulo: "La estudiante que no habla en clase", nivel: "B1",
      tema: "Estudiante que no participa",
      contexto: "Al final de la clase hablas a solas con una estudiante de 9.º año que nunca participa. Quieres entenderla y proponerle otra forma de participar.",
      rol: "Beatriz (Bia), 14 años, tímida, le encanta dibujar y casi no habla en clase",
      turnos: [
        { bot: "Oi, professor... O senhor queria falar comigo?", es: "Hola, profe... ¿Usted quería hablar conmigo?",
          opciones: [
            { t: "Oi, Beatriz. Queria, sim. Fica tranquila, não é nada grave.", es: "Hola, Beatriz. Sí. Tranquila, no es nada grave.", ok: true },
            { t: "Oi, Bia! Sim, só quero conversar um pouquinho. Está tudo bem?", es: "¡Hola, Bia! Sí, solo quiero conversar un ratico. ¿Todo bien?", ok: true },
            { t: "Oi, Beatriz. Sim, não te preocupes, não é nada grave.", es: "Hola, Beatriz. Sí, no te preocupes, no es nada grave.", ok: false,
              fix: "«Não te preocupes» suena a Portugal. En Brasil, con «você»: «não se preocupe» o, coloquial, «fica tranquila»." }
          ],
          clave: ["fica tranquila", "nada grave", "conversar", "tudo bem"],
          tip: "Abra con calma y sin juicio: «não é nada grave» baja la ansiedad antes de hablar del tema." },
        { bot: "Tá bom... É que eu nunca falo na aula. Fico com vergonha.", es: "Bueno... Es que nunca hablo en clase. Me da pena.",
          opciones: [
            { t: "Eu entendo. Muita gente sente isso.", es: "Te entiendo. A mucha gente le pasa.", ok: true },
            { t: "É normal sentir vergonha. Eu também ficava nervoso na sua idade.", es: "Es normal sentir pena. Yo también me ponía nervioso a tu edad.", ok: true },
            { t: "Entendo. Você está muito avergonhada?", es: "Entiendo. ¿Estás muy avergonzada?", ok: false,
              fix: "El sustantivo es «vergonha» y el adjetivo «envergonhada». «Avergonhada» no existe." }
          ],
          clave: ["entendo", "muita gente", "sentir vergonha", "normal"],
          tip: "Ojo: nuestra «pena» colombiana (vergüenza) en portugués es «vergonha». «Pena» en portugués es lástima." },
        { bot: "Tenho medo de errar e todo mundo rir de mim.", es: "Me da miedo equivocarme y que todo el mundo se ría de mí.",
          opciones: [
            { t: "Errar faz parte de aprender. Ninguém vai rir de você.", es: "Equivocarse hace parte de aprender. Nadie se va a reír de ti.", ok: true },
            { t: "Na nossa sala, o erro não é motivo de riso: é uma forma de aprender.", es: "En nuestro salón, el error no es motivo de risa: es una forma de aprender.", ok: true },
            { t: "Errar faz parte de aprender. Ninguém vai se reír de você.", es: "Equivocarse hace parte de aprender. Nadie se va a reír de ti.", ok: false,
              fix: "En portugués es «rir» y no es pronominal: «ninguém vai rir de você»." }
          ],
          clave: ["errar", "rir de você", "motivo de riso", "forma de aprender"],
          tip: "«Errar» en portugués es equivocarse, sin la carga negativa: «errar faz parte»." },
        { bot: "Mas eu gosto da matéria... só não gosto de falar na frente de todos.", es: "Pero me gusta la materia... solo que no me gusta hablar delante de todos.",
          opciones: [
            { t: "Que tal começar escrevendo suas ideias num papel?", es: "¿Qué tal si empiezas escribiendo tus ideas en un papel?", ok: true },
            { t: "Podemos tentar outra forma: você me mostra suas respostas por escrito ou em desenho.", es: "Podemos intentar otra forma: me muestras tus respuestas por escrito o en dibujo.", ok: true },
            { t: "Que tal começar escribiendo suas ideias?", es: "¿Qué tal si empiezas escribiendo tus ideas?", ok: false,
              fix: "«Escribir» en portugués es «escrever» (con v): «escrevendo»." }
          ],
          clave: ["escrevendo", "ideias", "por escrito", "desenho"],
          tip: "Ofrecer varias vías de participación (oral, escrita, gráfica) es una estrategia inclusiva muy eficaz." },
        { bot: "Por escrito eu consigo. E... posso fazer desenhos também? Eu adoro desenhar.", es: "Por escrito sí puedo. Y... ¿puedo hacer dibujos también? Me encanta dibujar.",
          opciones: [
            { t: "Claro! Seus desenhos podem explicar muito bem o conteúdo.", es: "¡Claro! Tus dibujos pueden explicar muy bien el tema.", ok: true },
            { t: "Pode, sim! Na próxima aula, você pode mostrar um mapa mental desenhado.", es: "¡Sí, puedes! En la próxima clase puedes mostrar un mapa mental dibujado.", ok: true },
            { t: "Claro! Você é muito talentosa e espabilada.", es: "¡Claro! Eres muy talentosa y despierta.", ok: false,
              fix: "«Espabilada» no existe en portugués. Se dice «esperta» o «inteligente»." }
          ],
          clave: ["desenhos", "explicar", "mapa mental", "próxima aula"],
          tip: "«Esperto» en portugués es «listo, avispado», un elogio. No confundir con «experto» (= «especialista»)." },
        { bot: "E se um dia eu tiver que falar?", es: "¿Y si algún día tengo que hablar?",
          opciones: [
            { t: "Primeiro você pode falar só com uma colega, em dupla.", es: "Primero puedes hablar solo con una compañera, en pareja.", ok: true },
            { t: "Vamos devagar: primeiro em dupla, depois num grupo pequeno. Você decide quando estiver pronta.", es: "Vamos despacio: primero en pareja, después en un grupo pequeño. Tú decides cuando estés lista.", ok: true },
            { t: "Vamos devagar. Primeiro em dupla e depois quando você está pronta.", es: "Vamos despacio. Primero en pareja y después cuando estés lista.", ok: false,
              fix: "Con «quando» referido al futuro se usa el futuro del subjuntivo: «quando você estiver pronta»." }
          ],
          clave: ["colega", "falar só", "estiver pronta", "grupo pequeno"],
          tip: "El futuro del subjuntivo (quando você estiver, se você quiser) es muy común en portugués y casi desapareció del español." },
        { bot: "Combinado. Obrigada, professor. Ninguém nunca tinha conversado assim comigo.", es: "Listo. Gracias, profe. Nadie nunca había hablado así conmigo.",
          opciones: [
            { t: "Eu é que agradeço pela confiança, Bia.", es: "Soy yo quien te agradece la confianza, Bia.", ok: true },
            { t: "Obrigado a você por confiar em mim. Estou aqui sempre que precisar.", es: "Gracias a ti por confiar en mí. Aquí estoy siempre que lo necesites.", ok: true },
            { t: "De nada. Estou aqui sempre que precisas.", es: "De nada. Aquí estoy siempre que lo necesites.", ok: false,
              fix: "Con «você» y sentido futuro: «sempre que você precisar» (futuro del subjuntivo). «Precisas» es la forma de «tu»." }
          ],
          clave: ["confiança", "agradeço", "confiar em mim", "precisar"],
          tip: "«Eu é que agradeço» es una fórmula cálida: «soy yo quien agradece». Muy usada en Brasil." }
      ],
      cierre: { bot: "Até amanhã! Vou trazer meu caderno de desenhos.", es: "¡Hasta mañana! Voy a traer mi cuaderno de dibujos." },
      vocab: [
        { t: "vergonha / envergonhado", es: "vergüenza, pena / avergonzado" },
        { t: "errar", es: "equivocarse" },
        { t: "rir de", es: "reírse de" },
        { t: "devagar", es: "despacio" },
        { t: "desenhar", es: "dibujar" },
        { t: "esperto", es: "listo, avispado" },
        { t: "quando estiver pronta", es: "cuando estés lista" },
        { t: "mapa mental", es: "mapa mental" }
      ]
    },
    {
      id: "pt-07", titulo: "Retroalimentación a un profesor novato", nivel: "B1",
      tema: "Dar retroalimentación",
      contexto: "Observaste la clase de un profesor recién graduado en Porto Alegre. Ahora le das retroalimentación: reconoces lo bueno y propones una mejora concreta.",
      rol: "Felipe, profesor recién graduado, entusiasta pero inseguro",
      turnos: [
        { bot: "E aí? O que você achou da minha aula? Pode ser sincero.", es: "¿Y qué? ¿Qué te pareció mi clase? Puedes ser sincero.",
          opciones: [
            { t: "Gostei muito! Os alunos participaram bastante.", es: "¡Me gustó mucho! Los estudiantes participaron bastante.", ok: true },
            { t: "Achei a aula muito boa. Você tem uma ótima relação com a turma.", es: "La clase me pareció muy buena. Tienes una excelente relación con el grupo.", ok: true },
            { t: "Me gustou muito! Os alunos participaram.", es: "¡Me gustó mucho! Los estudiantes participaron.", ok: false,
              fix: "«Gostar» funciona distinto: el sujeto es la persona y lleva «de»: «Eu gostei da aula». «Me gustou» no existe." }
          ],
          clave: ["gostei", "participaram", "achei", "turma"],
          tip: "«Achar» = opinar, parecer: «O que você achou?» = ¿Qué te pareció? «Turma» = el grupo de estudiantes." },
        { bot: "Que alívio! Mas tem alguma coisa que eu posso melhorar?", es: "¡Qué alivio! Pero ¿hay algo que pueda mejorar?",
          opciones: [
            { t: "Sim, talvez dar mais tempo para os alunos pensarem.", es: "Sí, tal vez dar más tiempo para que los estudiantes piensen.", ok: true },
            { t: "Uma sugestão: depois de fazer uma pergunta, espere uns cinco segundos antes de chamar alguém.", es: "Una sugerencia: después de hacer una pregunta, espera unos cinco segundos antes de llamar a alguien.", ok: true },
            { t: "Sim, você pode dar mais tempo para que os alunos pensam.", es: "Sí, puedes dar más tiempo para que los estudiantes piensen.", ok: false,
              fix: "Después de «para que» va subjuntivo: «para que os alunos pensem». También: «para os alunos pensarem»." }
          ],
          clave: ["tempo", "pensarem", "espere", "pergunta"],
          tip: "Retroalimentación eficaz: una sola mejora, concreta y aplicable mañana mismo." },
        { bot: "Mais tempo? Mas eu fico com medo do silêncio na sala.", es: "¿Más tiempo? Pero a mí me da miedo el silencio en el salón.",
          opciones: [
            { t: "É normal. Mas o silêncio ajuda os alunos a organizarem as ideias.", es: "Es normal. Pero el silencio ayuda a los estudiantes a organizar sus ideas.", ok: true },
            { t: "Eu entendo, mas as pesquisas mostram que esperar alguns segundos melhora a qualidade das respostas.", es: "Te entiendo, pero las investigaciones muestran que esperar unos segundos mejora la calidad de las respuestas.", ok: true },
            { t: "É normal, mas o silêncio ajuda os alunos a organizar seus ideias.", es: "Es normal, pero el silencio ayuda a los estudiantes a organizar sus ideas.", ok: false,
              fix: "«Ideia» es femenino en portugués: «suas ideias»." }
          ],
          clave: ["organizarem", "silêncio", "pesquisas", "respostas"],
          tip: "El «tiempo de espera» (wait time) fue estudiado por Mary Budd Rowe: esperar 3 a 5 segundos mejora las respuestas." },
        { bot: "Faz sentido. E sobre o final da aula?", es: "Tiene sentido. ¿Y sobre el final de la clase?",
          opciones: [
            { t: "O fechamento foi um pouco rápido.", es: "El cierre fue un poco rápido.", ok: true },
            { t: "Achei que o fechamento ficou corrido; faltou tempo para retomar o objetivo.", es: "Me pareció que el cierre quedó a las carreras; faltó tiempo para retomar el objetivo.", ok: true },
            { t: "O fechamento foi um pouco rápido. Faltou tempo para fazer um resumen.", es: "El cierre fue un poco rápido. Faltó tiempo para hacer un resumen.", ok: false,
              fix: "«Resumen» en portugués es «resumo»: «fazer um resumo»." }
          ],
          clave: ["fechamento", "rápido", "objetivo"],
          tip: "«Corrido» = hecho a las carreras. «Fechamento» = cierre de la clase." },
        { bot: "Verdade, o sinal tocou e eu me perdi. Como você faz?", es: "Es cierto, sonó el timbre y me perdí. ¿Tú cómo haces?",
          opciones: [
            { t: "Eu reservo os últimos cinco minutos para uma pergunta de saída.", es: "Reservo los últimos cinco minutos para una pregunta de salida.", ok: true },
            { t: "Eu sempre deixo cinco minutos no fim: cada aluno escreve num papelzinho o que aprendeu.", es: "Siempre dejo cinco minutos al final: cada estudiante escribe en un papelito lo que aprendió.", ok: true },
            { t: "Eu sempre deixo os últimos cinco minutos para uma pregunta de saída.", es: "Siempre dejo los últimos cinco minutos para una pregunta de salida.", ok: false,
              fix: "En portugués es «pergunta» (la r va después de la e): «uma pergunta de saída»." }
          ],
          clave: ["reservo", "pergunta de saída", "papelzinho", "aprendeu"],
          tip: "El diminutivo «-inho/-zinho» suaviza y da cercanía: «papelzinho», «minutinho», «cafezinho»." },
        { bot: "Adorei! Vou testar amanhã mesmo. Obrigado pelo feedback.", es: "¡Me encantó! Lo voy a probar mañana mismo. Gracias por la retroalimentación.",
          opciones: [
            { t: "Imagina! Você está no caminho certo.", es: "¡Con gusto! Vas por buen camino.", ok: true },
            { t: "Por nada! Você tem muito talento. Depois me conta como foi.", es: "¡De nada! Tienes mucho talento. Después me cuentas cómo te fue.", ok: true },
            { t: "De nada! Depois me contas como foi.", es: "¡De nada! Después me cuentas cómo te fue.", ok: false,
              fix: "En el portugués de Brasil, con «você»: «depois me conta como foi». «Contas» corresponde a «tu»." }
          ],
          clave: ["imagina", "caminho certo", "talento", "me conta"],
          tip: "«Imagina!» es una respuesta muy brasileña a «obrigado»: equivale a «¡con gusto!, ¡no faltaba más!»." }
      ],
      cierre: { bot: "Pode deixar! Na semana que vem você vem assistir à minha aula de novo?", es: "¡Cuenta con eso! ¿La próxima semana vienes a observar mi clase otra vez?" },
      vocab: [
        { t: "achar", es: "opinar, parecer" },
        { t: "turma", es: "grupo, curso" },
        { t: "fechamento", es: "cierre" },
        { t: "corrido", es: "a las carreras" },
        { t: "pergunta de saída", es: "pregunta de salida" },
        { t: "devolutiva / feedback", es: "retroalimentación" },
        { t: "para que + subjuntivo", es: "para que + subjuntivo" },
        { t: "Imagina!", es: "¡Con gusto! ¡No faltaba más!" }
      ]
    },
    {
      id: "pt-08", titulo: "Videollamada para un intercambio escolar", nivel: "B2",
      tema: "Videollamada con colega extranjero",
      contexto: "Tienes una videollamada con el director de una escuela de Porto Alegre para proponer un proyecto de intercambio entre estudiantes.",
      rol: "Prof. Ricardo Almeida, director escolar, formal, directo y exigente",
      turnos: [
        { bot: "Boa tarde! Está me ouvindo bem? A conexão aqui está um pouco instável.", es: "¡Buenas tardes! ¿Me escucha bien? La conexión aquí está un poco inestable.",
          opciones: [
            { t: "Boa tarde, professor Ricardo. Estou ouvindo perfeitamente.", es: "Buenas tardes, profesor Ricardo. Lo escucho perfectamente.", ok: true },
            { t: "Boa tarde! Estou ouvindo bem, sim, mas a imagem trava de vez em quando.", es: "¡Buenas tardes! Sí, lo escucho bien, pero la imagen se congela de vez en cuando.", ok: true },
            { t: "Boa tarde! Sim, te escuto perfectamente.", es: "¡Buenas tardes! Sí, te escucho perfectamente.", ok: false,
              fix: "«Perfectamente» es «perfeitamente». Y en registro formal se evita el «te»: «Estou ouvindo o senhor perfeitamente»." }
          ],
          clave: ["ouvindo", "perfeitamente", "imagem"],
          tip: "«Travar» = congelarse (una imagen, un computador). Muy útil en videollamadas." },
        { bot: "Ótimo. Gostaria que você apresentasse brevemente a sua escola.", es: "Excelente. Me gustaría que presentara brevemente su escuela.",
          opciones: [
            { t: "O CENTEC é uma escola particular em Cali, com ênfase em inglês e STEAM.", es: "CENTEC es un colegio privado en Cali, con énfasis en inglés y STEAM.", ok: true },
            { t: "Claro. Somos uma escola particular de Cali, do pré-escolar ao último ano, com ênfase em STEAM e inglês.", es: "Claro. Somos un colegio privado de Cali, de preescolar a último grado, con énfasis en STEAM e inglés.", ok: true },
            { t: "Claro. Somos uma escola em Cali. Embora somos pequenos, temos ênfase em STEAM.", es: "Claro. Somos un colegio en Cali. Aunque somos pequeños, tenemos énfasis en STEAM.", ok: false,
              fix: "«Embora» exige subjuntivo siempre: «embora sejamos pequenos»." }
          ],
          clave: ["escola particular", "último ano"],
          tip: "En Brasil, colegio privado se dice «escola particular». «Colégio» también se usa, sobre todo en nombres propios." },
        { bot: "Interessante. E qual seria o objetivo do intercâmbio para vocês?", es: "Interesante. ¿Y cuál sería el objetivo del intercambio para ustedes?",
          opciones: [
            { t: "Queremos que nossos alunos pratiquem português com jovens brasileiros.", es: "Queremos que nuestros estudiantes practiquen portugués con jóvenes brasileños.", ok: true },
            { t: "Nosso objetivo é que os alunos desenvolvam projetos colaborativos e conheçam outra cultura.", es: "Nuestro objetivo es que los estudiantes desarrollen proyectos colaborativos y conozcan otra cultura.", ok: true },
            { t: "Queremos que nossos alunos percam a pena de falar português.", es: "(Quiso decir: Queremos que nuestros estudiantes pierdan la pena de hablar portugués).", ok: false,
              fix: "En portugués «pena» es lástima (o pluma), no vergüenza. Diga «percam o medo de falar». ¡Ojo! «sem-vergonha» = sinvergüenza." }
          ],
          clave: ["objetivo", "alunos", "pratiquem"],
          tip: "«Querer que» y «o objetivo é que» exigen subjuntivo: pratiquem, desenvolvam, conheçam." },
        { bot: "Entendo. Como vocês pretendem organizar os encontros, considerando o fuso horário?", es: "Entiendo. ¿Cómo piensan organizar los encuentros, teniendo en cuenta la diferencia horaria?",
          opciones: [
            { t: "A diferença é de duas horas, então podemos fazer os encontros pela manhã.", es: "La diferencia es de dos horas, así que podemos hacer los encuentros en la mañana.", ok: true },
            { t: "Como são só duas horas de diferença, sugiro encontros quinzenais às dez da manhã aqui, meio-dia aí.", es: "Como son solo dos horas de diferencia, sugiero encuentros quincenales a las diez de la mañana aquí, mediodía allá.", ok: true },
            { t: "A diferença é só de duas horas; podemos reunirmos às terças.", es: "La diferencia es solo de dos horas; podemos reunirnos los martes.", ok: false,
              fix: "Con «podemos» va el infinitivo simple: «podemos nos reunir». El infinitivo personal («reunirmos») no va tras un verbo modal." }
          ],
          clave: ["encontros", "pela manhã", "quinzenais"],
          tip: "«Fuso horário» = huso horario. Cali (UTC−5) y Porto Alegre (UTC−3) tienen dos horas de diferencia." },
        { bot: "Parece viável. E como vocês avaliariam o impacto do projeto?", es: "Parece viable. ¿Y cómo evaluarían el impacto del proyecto?",
          opciones: [
            { t: "Com uma rubrica de competências e um portfólio digital de cada aluno.", es: "Con una rúbrica de competencias y un portafolio digital de cada estudiante.", ok: true },
            { t: "Pensamos em três indicadores: participação nos encontros, produtos finais e uma pesquisa de satisfação.", es: "Pensamos en tres indicadores: participación en los encuentros, productos finales y una encuesta de satisfacción.", ok: true },
            { t: "Vamos avaliar com uma rubrica e uma encuesta aos alunos.", es: "Vamos a evaluar con una rúbrica y una encuesta a los estudiantes.", ok: false,
              fix: "«Encuesta» en portugués es «pesquisa» o «questionário»: «uma pesquisa com os alunos»." }
          ],
          clave: ["rubrica", "portfólio", "pesquisa", "indicadores"],
          tip: "«Rubrica» va sin tilde en portugués, pero se pronuncia «ru-BRI-ca», con fuerza en la «bri»." },
        { bot: "Muito bem. Antes de encerrarmos, há alguma dúvida da sua parte?", es: "Muy bien. Antes de terminar, ¿tiene alguna duda?",
          opciones: [
            { t: "Sim: quando poderíamos começar?", es: "Sí: ¿cuándo podríamos empezar?", ok: true },
            { t: "Só uma: qual seria o próximo passo para formalizarmos a parceria?", es: "Solo una: ¿cuál sería el siguiente paso para formalizar la alianza?", ok: true },
            { t: "Sim. Ficaria muito agradecido se o senhor me envia um e-mail com os próximos passos.", es: "Sí. Le agradecería mucho si me envía un correo con los próximos pasos.", ok: false,
              fix: "Con condicional («ficaria») se usa imperfecto de subjuntivo: «se o senhor me enviasse um e-mail»." }
          ],
          clave: ["quando", "começar", "próximo passo", "parceria"],
          tip: "«Parceria» = alianza, convenio de colaboración. «Parceiro» = socio, aliado." },
        { bot: "Vou enviar a minuta do convênio até sexta. Podemos marcar uma nova chamada para o dia vinte?", es: "Le envío el borrador del convenio antes del viernes. ¿Podemos agendar una nueva llamada para el día veinte?",
          opciones: [
            { t: "Perfeito, o dia vinte está ótimo para mim.", es: "Perfecto, el día veinte me queda muy bien.", ok: true },
            { t: "Combinado. Fico no aguardo da minuta e confirmo o horário por e-mail.", es: "De acuerdo. Quedo atento al borrador y confirmo la hora por correo.", ok: true },
            { t: "Perfeito. Fico no aguardo e confirmo o horário depois de que eu ler a minuta.", es: "Perfecto. Quedo atento y confirmo la hora después de que lea el borrador.", ok: false,
              fix: "En portugués no se dice «depois de que». Use «depois que eu ler» o «depois de ler a minuta»." }
          ],
          clave: ["dia vinte", "ótimo", "aguardo da minuta", "por e-mail"],
          tip: "«Fico no aguardo» es la fórmula profesional para «quedo atento»; muy usada en correos." }
      ],
      cierre: { bot: "Excelente. Foi um prazer conversar com você. Até o dia vinte!", es: "Excelente. Fue un placer conversar con usted. ¡Hasta el día veinte!" },
      vocab: [
        { t: "fuso horário", es: "huso horario" },
        { t: "parceria", es: "alianza, colaboración" },
        { t: "minuta do convênio", es: "borrador del convenio" },
        { t: "encerrar", es: "terminar, cerrar" },
        { t: "fico no aguardo", es: "quedo atento" },
        { t: "pena", es: "lástima (falso amigo)" },
        { t: "embora + subjuntivo", es: "aunque + subjuntivo" },
        { t: "travar", es: "congelarse (imagen, equipo)" }
      ]
    },
    {
      id: "pt-09", titulo: "Pregunta en un congreso de educación", nivel: "B2",
      tema: "Conferencia o capacitación",
      contexto: "Asistes a una conferencia sobre evaluación formativa en São Paulo. En la ronda de preguntas levantas la mano y compartes tu experiencia.",
      rol: "Dra. Helena Prado, conferencista, entusiasta y provocadora",
      turnos: [
        { bot: "Bom, vamos abrir para perguntas. Sim, você aí no fundo!", es: "Bueno, abrimos el espacio de preguntas. ¡Sí, usted allá atrás!",
          opciones: [
            { t: "Obrigado, doutora. Gostei muito da sua palestra.", es: "Gracias, doctora. Me gustó mucho su conferencia.", ok: true },
            { t: "Boa tarde! Primeiro, parabéns pela palestra; foi muito inspiradora.", es: "¡Buenas tardes! Primero, felicitaciones por la conferencia; fue muy inspiradora.", ok: true },
            { t: "Obrigado. Felicitações pela palestra!", es: "Gracias. ¡Felicitaciones por la conferencia!", ok: false,
              fix: "Para felicitar en Brasil se dice «Parabéns!». «Felicitações» existe, pero suena rígido y poco natural." }
          ],
          clave: ["doutora", "gostei", "parabéns", "inspiradora"],
          tip: "«Palestra» = charla o conferencia. «Conferência» suele ser el evento completo o una charla muy formal." },
        { bot: "Muito obrigada! Qual é a sua pergunta?", es: "¡Muchas gracias! ¿Cuál es su pregunta?",
          opciones: [
            { t: "Como aplicar a avaliação formativa em turmas de quarenta alunos?", es: "¿Cómo aplicar la evaluación formativa en grupos de cuarenta estudiantes?", ok: true },
            { t: "Eu queria saber como dar feedback individual quando a turma é muito grande, com uns quarenta alunos.", es: "Quisiera saber cómo dar retroalimentación individual cuando el grupo es muy grande, de unos cuarenta estudiantes.", ok: true },
            { t: "Como aplicar a avaliação formativa se tenho quarenta alunos em cada salão?", es: "¿Cómo aplicar la evaluación formativa si tengo cuarenta estudiantes en cada salón?", ok: false,
              fix: "«Salão» es salón de eventos o de belleza. El aula es «sala de aula» y el grupo, «turma»." }
          ],
          clave: ["turma", "feedback", "avaliação formativa"],
          tip: "«Eu queria saber...» (imperfecto) es una forma cortés de preguntar, como nuestro «quisiera saber»." },
        { bot: "Ótima pergunta. Uma estratégia é usar cartões de resposta: todos mostram ao mesmo tempo. Você já tentou algo parecido?", es: "Excelente pregunta. Una estrategia es usar tarjetas de respuesta: todos muestran al mismo tiempo. ¿Ya intentó algo parecido?",
          opciones: [
            { t: "Já tentei com miniquadros brancos e funcionou bem.", es: "Ya lo intenté con minitableros blancos y funcionó bien.", ok: true },
            { t: "Ainda não, mas uso o polegar para cima ou para baixo para checar a compreensão.", es: "Todavía no, pero uso el pulgar arriba o abajo para verificar la comprensión.", ok: true },
            { t: "Sim, já tentei com pizarras pequenas.", es: "Sí, ya lo intenté con tableros pequeños.", ok: false,
              fix: "«Pizarra» no existe en portugués. Se dice «quadro» o «lousa»: «miniquadros» o «lousas pequenas»." }
          ],
          clave: ["tentei", "quadros", "compreensão", "polegar"],
          tip: "En el habla brasileña el pronombre «o/a» de objeto casi desaparece: «já tentei» en vez de «já o tentei»." },
        { bot: "Isso! E depois de ver as respostas, o que você faz com essa informação?", es: "¡Eso! ¿Y después de ver las respuestas, qué hace con esa información?",
          opciones: [
            { t: "Se muitos erram, eu explico de novo de outra forma.", es: "Si muchos se equivocan, explico otra vez de otra manera.", ok: true },
            { t: "Se mais da metade erra, retomo o conceito com outro exemplo; se a maioria acerta, avanço.", es: "Si más de la mitad se equivoca, retomo el concepto con otro ejemplo; si la mayoría acierta, avanzo.", ok: true },
            { t: "Se muitos erram, eu volto a explicar. Mas me demoro muito.", es: "Si muchos se equivocan, vuelvo a explicar. Pero me demoro mucho.", ok: false,
              fix: "Para «tardar» en portugués se usa «demorar» sin pronombre: «mas eu demoro muito»." }
          ],
          clave: ["erram", "explico", "exemplo", "retomo"],
          tip: "«Acertar» = acertar, responder bien; «errar» = equivocarse. Son la pareja básica de la evaluación." },
        { bot: "Perfeito, isso é avaliação formativa na prática. E como você registra esses dados?", es: "Perfecto, eso es evaluación formativa en la práctica. ¿Y cómo registra esos datos?",
          opciones: [
            { t: "Anoto numa planilha simples depois de cada aula.", es: "Lo anoto en una hoja de cálculo sencilla después de cada clase.", ok: true },
            { t: "Tenho uma planilha no celular: marco quem acertou, quem errou e quem precisa de apoio.", es: "Tengo una hoja de cálculo en el celular: marco quién acertó, quién se equivocó y quién necesita apoyo.", ok: true },
            { t: "Anoto numa folha de cálculo depois de cada aula.", es: "Lo anoto en una hoja de cálculo después de cada clase.", ok: false,
              fix: "En Brasil «hoja de cálculo» es «planilha». «Folha de cálculo» se entiende, pero no se usa." }
          ],
          clave: ["planilha", "anoto", "apoio"],
          tip: "«Planilha» = hoja de cálculo (Excel). «Planejamento» = planeación de clase." },
        { bot: "Excelente. Você gostaria de compartilhar essa planilha com os colegas aqui?", es: "Excelente. ¿Le gustaría compartir esa hoja de cálculo con los colegas aquí presentes?",
          opciones: [
            { t: "Com prazer! Posso deixar o link no grupo do congresso.", es: "¡Con gusto! Puedo dejar el enlace en el grupo del congreso.", ok: true },
            { t: "Claro! Se quiserem, envio o modelo por e-mail depois da sessão.", es: "¡Claro! Si quieren, envío la plantilla por correo después de la sesión.", ok: true },
            { t: "Claro! Se vocês querem, envio o modelo depois.", es: "¡Claro! Si ustedes quieren, envío la plantilla después.", ok: false,
              fix: "Con «se» referido al futuro se usa el futuro del subjuntivo: «se vocês quiserem»." }
          ],
          clave: ["link", "prazer", "modelo", "quiserem"],
          tip: "«Compartilhar» = compartir (en Portugal, «partilhar»). «Modelo» aquí significa plantilla." }
      ],
      cierre: { bot: "Maravilha! Uma salva de palmas para nosso colega da Colômbia!", es: "¡Maravilloso! ¡Un aplauso para nuestro colega de Colombia!" },
      vocab: [
        { t: "palestra", es: "charla, conferencia" },
        { t: "palestrante", es: "conferencista" },
        { t: "parabéns", es: "felicitaciones" },
        { t: "turma", es: "grupo de estudiantes" },
        { t: "quadro / lousa", es: "tablero" },
        { t: "planilha", es: "hoja de cálculo" },
        { t: "retomar", es: "retomar, volver sobre" },
        { t: "se quiserem", es: "si quieren" }
      ]
    },
    {
      id: "pt-10", titulo: "Mi historia en un pódcast educativo", nivel: "C1",
      tema: "Contar una experiencia pedagógica",
      contexto: "Te invitaron a un pódcast brasileño de educación para contar la experiencia que transformó tu manera de enseñar.",
      rol: "Thiago Rezende, presentador del pódcast «Sala Aberta», curioso y muy cálido",
      turnos: [
        { bot: "Que alegria ter você no Sala Aberta! Para começar, conta pra gente: por que você escolheu a docência?", es: "¡Qué alegría tenerte en Sala Aberta! Para empezar, cuéntanos: ¿por qué escogiste la docencia?",
          opciones: [
            { t: "Escolhi a docência porque tive uma professora que mudou a minha vida.", es: "Escogí la docencia porque tuve una profesora que me cambió la vida.", ok: true },
            { t: "Acho que foi por causa de uma professora do fundamental que acreditou em mim quando ninguém acreditava.", es: "Creo que fue por una profesora de primaria que creyó en mí cuando nadie lo hacía.", ok: true },
            { t: "Escolhi a docência porque uma professora me deixou uma huella muito forte.", es: "Escogí la docencia porque una profesora me dejó una huella muy fuerte.", ok: false,
              fix: "«Huella» en portugués es «marca»: «deixou uma marca». Más natural aún: «uma professora me marcou muito»." }
          ],
          clave: ["mudou", "vida", "acreditou", "ninguém"],
          tip: "«Ensino fundamental» en Brasil abarca del 1.º al 9.º año; «ensino médio», los tres últimos años." },
        { bot: "Que bonito. E qual foi a experiência que transformou a sua prática?", es: "Qué bonito. ¿Y cuál fue la experiencia que transformó tu práctica?",
          opciones: [
            { t: "Foi quando um aluno me disse que odiava Matemática por medo de errar.", es: "Fue cuando un estudiante me dijo que odiaba las Matemáticas por miedo a equivocarse.", ok: true },
            { t: "Teve um ano em que um aluno me confessou que tinha pavor de errar; aquilo me fez repensar tudo.", es: "Hubo un año en que un estudiante me confesó que le aterraba equivocarse; eso me hizo replantearlo todo.", ok: true },
            { t: "Foi quando um aluno me disse que odiava Matemática porque tinha medo a errar.", es: "Fue cuando un estudiante me dijo que odiaba las Matemáticas porque tenía miedo a equivocarse.", ok: false,
              fix: "En portugués «medo» rige «de»: «medo de errar», «medo do escuro»." }
          ],
          clave: ["medo de", "odiava", "pavor de", "repensar"],
          tip: "«Aquilo» señala algo lejano en el tiempo o en el discurso: «aquilo me fez repensar» = eso me hizo replantear." },
        { bot: "Nossa... E o que você fez a partir disso?", es: "Uy... ¿Y qué hiciste a partir de eso?",
          opciones: [
            { t: "Comecei a tratar o erro como parte do processo.", es: "Empecé a tratar el error como parte del proceso.", ok: true },
            { t: "Criei o «mural do erro»: toda semana analisávamos juntos um erro comum e descobríamos o raciocínio por trás dele.", es: "Creé el «mural del error»: cada semana analizábamos juntos un error común y descubríamos el razonamiento detrás de él.", ok: true },
            { t: "Comecei a tratar o erro como parte do processo, ainda que isso supunha mudar tudo.", es: "Empecé a tratar el error como parte del proceso, aunque eso supusiera cambiarlo todo.", ok: false,
              fix: "«Ainda que» exige subjuntivo. El imperfecto de subjuntivo de «supor» es «supusesse»: «ainda que isso supusesse mudar tudo»." }
          ],
          clave: ["erro", "processo", "mural"],
          tip: "«Raciocínio» = razonamiento. «Por trás» = detrás (en sentido figurado)." },
        { bot: "E como os alunos reagiram no começo?", es: "¿Y cómo reaccionaron los estudiantes al principio?",
          opciones: [
            { t: "No começo ficaram desconfiados, mas aos poucos se soltaram.", es: "Al principio desconfiaban, pero poco a poco se soltaron.", ok: true },
            { t: "Houve resistência, claro; alguns achavam que era pegadinha. Mas em um mês já disputavam quem apresentaria o erro da semana.", es: "Hubo resistencia, claro; algunos creían que era una trampa. Pero en un mes ya peleaban por quién presentaría el error de la semana.", ok: true },
            { t: "No começo houveram muitas resistências, mas depois eles se soltaram.", es: "Al principio hubo mucha resistencia, pero después se soltaron.", ok: false,
              fix: "«Haver» con sentido de existir es impersonal y va en singular: «houve muitas resistências», nunca «houveram»." }
          ],
          clave: ["desconfiados", "aos poucos", "resistência", "disputavam"],
          tip: "«Pegadinha» = trampa, pregunta capciosa o broma. Muy usada por estudiantes brasileños." },
        { bot: "E os resultados? Você percebeu mudanças concretas?", es: "¿Y los resultados? ¿Notaste cambios concretos?",
          opciones: [
            { t: "Sim, a participação aumentou e as notas melhoraram.", es: "Sí, la participación aumentó y las notas mejoraron.", ok: true },
            { t: "Sem dúvida. Os alunos passaram a perguntar mais e a média da turma subiu, mas o que mais me marcou foi a confiança deles.", es: "Sin duda. Los estudiantes empezaron a preguntar más y el promedio del grupo subió, pero lo que más me marcó fue su confianza.", ok: true },
            { t: "Sim. Os alunos ficaram mais seguros a medida que avançávamos.", es: "Sí. Los estudiantes se volvieron más seguros a medida que avanzábamos.", ok: false,
              fix: "En portugués la expresión lleva crase (acento grave): «à medida que avançávamos»." }
          ],
          clave: ["participação", "notas", "média", "confiança"],
          tip: "«Passar a + infinitivo» = empezar a hacer algo de forma habitual: «passaram a perguntar mais»." },
        { bot: "Que conselho você daria para um professor que está começando?", es: "¿Qué consejo le darías a un profesor que está empezando?",
          opciones: [
            { t: "Que escute os seus alunos antes de tudo.", es: "Que escuche a sus estudiantes antes que nada.", ok: true },
            { t: "Que não tenha medo de errar na frente dos alunos: o exemplo vale mais que qualquer discurso.", es: "Que no tenga miedo de equivocarse delante de los estudiantes: el ejemplo vale más que cualquier discurso.", ok: true },
            { t: "Que escute os alunos. É importante que a gente sabe ouvir.", es: "Que escuche a los estudiantes. Es importante que sepamos escuchar.", ok: false,
              fix: "«É importante que» exige subjuntivo: «é importante que a gente saiba ouvir»." }
          ],
          clave: ["escute", "antes de tudo", "medo", "exemplo"],
          tip: "«Escutar» y «ouvir» se usan casi igual en Brasil; «ouvir» es oír y «escutar», prestar atención." },
        { bot: "Pra fechar: como você resumiria a sua filosofia em uma frase?", es: "Para cerrar: ¿cómo resumirías tu filosofía en una frase?",
          opciones: [
            { t: "O erro não nos detém: nos ensina.", es: "El error no nos detiene: nos enseña.", ok: true },
            { t: "O erro não nos detém; ele nos ensina, nos fortalece e nos faz crescer.", es: "El error no nos detiene; nos enseña, nos fortalece y nos hace crecer.", ok: true },
            { t: "O erro não nos detém: nos enseña e nos faz crescer.", es: "El error no nos detiene: nos enseña y nos hace crecer.", ok: false,
              fix: "«Enseñar» en portugués es «ensinar»: «nos ensina»." }
          ],
          clave: ["ensina", "detém", "fortalece"],
          tip: "Empezar una frase con pronombre («nos ensina») es normal en el habla brasileña; la norma escrita prefiere «ensina-nos»." }
      ],
      cierre: { bot: "Que frase! Obrigado por compartilhar essa história com a gente. Até a próxima!", es: "¡Qué frase! Gracias por compartir esta historia con nosotros. ¡Hasta la próxima!" },
      vocab: [
        { t: "docência", es: "docencia" },
        { t: "medo de", es: "miedo de / a" },
        { t: "pegadinha", es: "trampa, pregunta capciosa" },
        { t: "à medida que", es: "a medida que" },
        { t: "houve", es: "hubo" },
        { t: "ainda que + subjuntivo", es: "aunque + subjuntivo" },
        { t: "soltar-se", es: "soltarse, desinhibirse" },
        { t: "marcar alguém", es: "dejarle huella a alguien" }
      ]
    },
    {
      id: "pt-11", titulo: "¿Dónde queda la escuela?", nivel: "A1",
      tema: "Pedir direcciones",
      contexto: "Estás en Salvador (Bahía) y vas a visitar una escuela pública, pero te perdiste. Le preguntas el camino a una señora que atiende un puesto de periódicos.",
      rol: "Dona Cida, vendedora de un puesto de periódicos, amable y conversadora",
      turnos: [
        { bot: "Oi! Posso ajudar? Você parece perdido.", es: "¡Hola! ¿Le puedo ayudar? Parece perdido.",
          opciones: [
            { t: "Oi! Sim, por favor. Estou procurando a Escola Estadual Castro Alves.", es: "¡Hola! Sí, por favor. Estoy buscando la Escuela Estatal Castro Alves.", ok: true },
            { t: "Pode, sim! Com licença, onde fica a Escola Estadual Castro Alves?", es: "¡Sí, claro! Disculpe, ¿dónde queda la Escuela Estatal Castro Alves?", ok: true },
            { t: "Sim, por favor. Onde queda a Escola Castro Alves?", es: "Sí, por favor. ¿Dónde queda la Escuela Castro Alves?", ok: false,
              fix: "«Quedar» no se usa así en portugués. Para la ubicación de un lugar se usa «ficar»: «Onde fica a escola?»." }
          ],
          clave: ["onde fica", "procurando", "escola"],
          tip: "Para lugares fijos se usa «ficar»: «Onde fica o banheiro?». «Com licença» es la forma cortés de abordar a alguien." },
        { bot: "Ah, a escola fica perto daqui. Você vai a pé ou de ônibus?", es: "Ah, la escuela queda cerca de aquí. ¿Va a pie o en bus?",
          opciones: [
            { t: "Vou a pé.", es: "Voy a pie.", ok: true },
            { t: "Prefiro ir a pé. É longe?", es: "Prefiero ir a pie. ¿Es lejos?", ok: true },
            { t: "Vou a pé ou talvez em ônibus.", es: "Voy a pie o tal vez en bus.", ok: false,
              fix: "Con medios de transporte se usa «de»: «de ônibus», «de carro», «de metrô». Solo «a pé» lleva «a»." }
          ],
          clave: ["a pé", "de ônibus", "longe"],
          tip: "«Ônibus» es el bus y «ponto de ônibus», el paradero. «Perto» = cerca; «longe» = lejos." },
        { bot: "É pertinho. Siga reto nesta rua e vire à direita no segundo semáforo.", es: "Es cerquita. Siga derecho por esta calle y gire a la derecha en el segundo semáforo.",
          opciones: [
            { t: "Sigo reto e viro à direita no segundo semáforo. Certo?", es: "Sigo derecho y giro a la derecha en el segundo semáforo. ¿Cierto?", ok: true },
            { t: "Então: reto nesta rua e, no segundo semáforo, à direita. É isso?", es: "Entonces: derecho por esta calle y, en el segundo semáforo, a la derecha. ¿Es así?", ok: true },
            { t: "Sigo reto e viro à derecha no segundo semáforo.", es: "Sigo derecho y giro a la derecha en el segundo semáforo.", ok: false,
              fix: "«Derecha» es español. En portugués es «direita» (y «esquerda» = izquierda): «vire à direita»." }
          ],
          clave: ["direita", "reto", "semáforo"],
          tip: "«Esquerda» (izquierda) no se parece al español. «À direita» lleva tilde grave porque une a + a." },
        { bot: "Isso! Depois você passa pela padaria e a escola fica em frente à praça.", es: "¡Eso! Después pasa por la panadería y la escuela queda frente a la plaza.",
          opciones: [
            { t: "Em frente à praça. Entendi!", es: "Frente a la plaza. ¡Entendí!", ok: true },
            { t: "Entendi: depois da padaria, em frente à praça. Muito obrigado!", es: "Entendí: después de la panadería, frente a la plaza. ¡Muchas gracias!", ok: true },
            { t: "Entendi, a escola fica em frente de a praça.", es: "Entendí, la escuela queda frente a la plaza.", ok: false,
              fix: "«De a» siempre se contrae: «em frente da praça». También se dice «em frente à praça»." }
          ],
          clave: ["em frente", "praça", "padaria"],
          tip: "La «padaria» es el corazón del barrio brasileño: allí se desayuna pan con café y se pregunta todo." },
        { bot: "Se você se perder, pergunte para alguém na praça. Todo mundo conhece a escola.", es: "Si se pierde, pregúntele a alguien en la plaza. Todo el mundo conoce la escuela.",
          opciones: [
            { t: "Está bem, obrigado pela ajuda!", es: "¡Está bien, gracias por la ayuda!", ok: true },
            { t: "Combinado! A senhora foi muito gentil.", es: "¡Listo! Usted fue muy amable.", ok: true },
            { t: "Está bem! Muito obrigado pelo ajuda.", es: "¡Está bien! Muchas gracias por la ayuda.", ok: false,
              fix: "«Ajuda» es femenino: por + a = «pela ajuda»." }
          ],
          clave: ["obrigad", "ajuda", "gentil"],
          tip: "«Todo mundo» = todo el mundo, todos. «Combinado!» = ¡listo, de acuerdo!" },
        { bot: "De nada! E de onde você é? O seu sotaque é bonito.", es: "¡De nada! ¿Y de dónde es usted? Su acento es bonito.",
          opciones: [
            { t: "Obrigado! Sou colombiano. Estou aqui para visitar a escola.", es: "¡Gracias! Soy colombiano. Estoy aquí para visitar la escuela.", ok: true },
            { t: "Que gentileza! Sou de Cali, na Colômbia. Vim conhecer um projeto da escola.", es: "¡Qué amabilidad! Soy de Cali, en Colombia. Vine a conocer un proyecto de la escuela.", ok: true },
            { t: "Obrigado! Sou de Cali. É a minha primeira vez em o Brasil.", es: "¡Gracias! Soy de Cali. Es mi primera vez en Brasil.", ok: false,
              fix: "«Em + o» se contrae siempre: «no Brasil». Igual: na Colômbia, nos Estados Unidos." }
          ],
          clave: ["sou", "Colômbia", "Cali"],
          tip: "«Sotaque» es el acento al hablar. «Acento» en portugués es la tilde escrita o el acento de la sílaba." }
      ],
      cierre: { bot: "Seja bem-vindo à Bahia! Boa visita!", es: "¡Bienvenido a Bahía! ¡Que le vaya bien en la visita!" },
      vocab: [
        { t: "onde fica…?", es: "¿dónde queda…?" },
        { t: "seguir reto", es: "seguir derecho" },
        { t: "virar à direita / à esquerda", es: "girar a la derecha / a la izquierda" },
        { t: "em frente a", es: "frente a" },
        { t: "a pé / de ônibus", es: "a pie / en bus" },
        { t: "pertinho", es: "cerquita" },
        { t: "padaria", es: "panadería" },
        { t: "sotaque", es: "acento (al hablar)" }
      ]
    },
    {
      id: "pt-12", titulo: "Cambiar dinero al llegar", nivel: "A1",
      tema: "Banco o casa de cambio",
      contexto: "Acabas de llegar a Río de Janeiro para un intercambio. En la casa de cambio del aeropuerto quieres cambiar dólares por reales.",
      rol: "Rafael, empleado de la casa de cambio, rápido y formal",
      turnos: [
        { bot: "Boa tarde! Próximo, por favor. Em que posso ajudar?", es: "¡Buenas tardes! El siguiente, por favor. ¿En qué le puedo ayudar?",
          opciones: [
            { t: "Boa tarde! Quero trocar dólares por reais.", es: "¡Buenas tardes! Quiero cambiar dólares por reales.", ok: true },
            { t: "Boa tarde! Eu gostaria de trocar dólares por reais, por favor.", es: "¡Buenas tardes! Me gustaría cambiar dólares por reales, por favor.", ok: true },
            { t: "Boa tarde! Quero mudar dólares por reais.", es: "¡Buenas tardes! Quiero cambiar dólares por reales.", ok: false,
              fix: "«Mudar» es cambiar de lugar o transformar (mudar de casa). Para dinero se dice «trocar»: «quero trocar dólares por reais». El lugar se llama «casa de câmbio»." }
          ],
          clave: ["trocar", "dólares", "reais"],
          tip: "El plural de «real» (la moneda de Brasil) es «reais». Se escribe R$." },
        { bot: "Pois não. Quanto o senhor quer trocar?", es: "Con gusto. ¿Cuánto quiere cambiar el señor?",
          opciones: [
            { t: "Trezentos dólares.", es: "Trescientos dólares.", ok: true },
            { t: "Trezentos dólares, por favor. Qual é a cotação de hoje?", es: "Trescientos dólares, por favor. ¿Cuál es la tasa de hoy?", ok: true },
            { t: "Trescentos dólares, por favor.", es: "Trescientos dólares, por favor.", ok: false,
              fix: "300 en portugués es «trezentos», con z. Igual: duzentos (200), quatrocentos (400)." }
          ],
          clave: ["trezentos", "cotação"],
          tip: "«Pois não» significa «claro, con gusto»: ¡no es una negación! Es la fórmula clásica de atención al cliente." },
        { bot: "A cotação está no painel. Preciso do seu passaporte, por favor.", es: "La tasa está en el tablero. Necesito su pasaporte, por favor.",
          opciones: [
            { t: "Claro, aqui está.", es: "Claro, aquí está.", ok: true },
            { t: "Aqui está o meu passaporte. Tem alguma taxa de serviço?", es: "Aquí está mi pasaporte. ¿Hay alguna comisión?", ok: true },
            { t: "Claro, aqui está o meu pasaporte.", es: "Claro, aquí está mi pasaporte.", ok: false,
              fix: "En portugués se escribe con doble s: «passaporte». La «ss» suena como s; una sola s entre vocales suena como z." }
          ],
          clave: ["aqui está", "passaporte", "taxa"],
          tip: "«Cotação» es el valor del dólar hoy; «taxa» puede ser la comisión. Pregunte siempre: «Tem alguma taxa?»." },
        { bot: "Tem uma taxa de serviço, sim. Está tudo neste recibo. Pode conferir?", es: "Sí, hay una comisión. Todo está en este recibo. ¿Puede revisarlo?",
          opciones: [
            { t: "Posso, sim. Está certo.", es: "Sí, puedo. Está bien.", ok: true },
            { t: "Vou conferir... Está tudo certo, obrigado.", es: "Voy a revisar... Todo está bien, gracias.", ok: true },
            { t: "Sim, vou chequear o recibo.", es: "Sí, voy a chequear el recibo.", ok: false,
              fix: "«Chequear» no existe en portugués. Se dice «conferir» o «verificar»: «vou conferir o recibo»." }
          ],
          clave: ["conferir", "certo"],
          tip: "«Conferir» = revisar, verificar. Lo usará en bancos, tiendas y documentos." },
        { bot: "O senhor prefere notas grandes ou pequenas?", es: "¿El señor prefiere billetes grandes o pequeños?",
          opciones: [
            { t: "Pequenas, por favor.", es: "Pequeños, por favor.", ok: true },
            { t: "Algumas notas pequenas, por favor, para o táxi e o lanche.", es: "Algunos billetes pequeños, por favor, para el taxi y la merienda.", ok: true },
            { t: "Billetes pequenos, por favor.", es: "Billetes pequeños, por favor.", ok: false,
              fix: "El billete de dinero es «nota» (o «cédula») y es femenino: «notas pequenas»." }
          ],
          clave: ["notas", "pequenas"],
          tip: "«Trocado» es el sencillo o menudo: «Você tem trocado?» = ¿tiene sencillo?" },
        { bot: "Aqui está o seu dinheiro. Mais alguma coisa?", es: "Aquí está su dinero. ¿Algo más?",
          opciones: [
            { t: "Não, só isso. Obrigado!", es: "No, solo eso. ¡Gracias!", ok: true },
            { t: "Não, é só isso. Muito obrigado e bom trabalho!", es: "No, es todo. ¡Muchas gracias y que le vaya bien en el trabajo!", ok: true },
            { t: "Não, nada más. Obrigado!", es: "No, nada más. ¡Gracias!", ok: false,
              fix: "«Más» se dice «mais»; «mas» sin tilde significa «pero». Diga «nada mais» o «só isso»." }
          ],
          clave: ["só isso", "obrigad"],
          tip: "Despedirse con «bom trabalho!» de quien atiende es una cortesía muy brasileña." }
      ],
      cierre: { bot: "Por nada. Boa viagem e aproveite o Rio!", es: "De nada. ¡Buen viaje y disfrute Río!" },
      vocab: [
        { t: "trocar dinheiro", es: "cambiar dinero" },
        { t: "casa de câmbio", es: "casa de cambio" },
        { t: "cotação", es: "tasa de cambio del día" },
        { t: "taxa de serviço", es: "comisión" },
        { t: "nota / cédula", es: "billete" },
        { t: "trocado", es: "sencillo, menudo" },
        { t: "pois não", es: "claro, con gusto" },
        { t: "conferir", es: "revisar, verificar" }
      ]
    },
    {
      id: "pt-13", titulo: "Cena sin maní, por favor", nivel: "A2",
      tema: "Restaurante con restricciones alimentarias",
      contexto: "Cenas en un restaurante de Porto Alegre durante un congreso. Eres alérgico al maní y tu colega es vegetariana: debes pedir con cuidado.",
      rol: "Juliana, mesera atenta y paciente",
      turnos: [
        { bot: "Boa noite! Mesa para quantas pessoas?", es: "¡Buenas noches! ¿Mesa para cuántas personas?",
          opciones: [
            { t: "Para duas pessoas, por favor.", es: "Para dos personas, por favor.", ok: true },
            { t: "Boa noite! Para duas pessoas. Pode ser perto da janela?", es: "¡Buenas noches! Para dos personas. ¿Puede ser cerca de la ventana?", ok: true },
            { t: "Para dos pessoas, por favor.", es: "Para dos personas, por favor.", ok: false,
              fix: "«Dos» es español. En portugués el 2 cambia de género: «duas pessoas», «dois pratos»." }
          ],
          clave: ["duas pessoas", "mesa"],
          tip: "Los números 1 y 2 tienen género: um/uma, dois/duas. «Duas pessoas», «dois cafés»." },
        { bot: "Aqui está o cardápio. Já sabem o que vão pedir?", es: "Aquí está la carta. ¿Ya saben qué van a pedir?",
          opciones: [
            { t: "Ainda não. Antes, uma pergunta: eu tenho alergia a amendoim.", es: "Todavía no. Antes, una pregunta: tengo alergia al maní.", ok: true },
            { t: "Quase. Mas preciso avisar: sou alérgico a amendoim. Algum prato tem amendoim?", es: "Casi. Pero debo avisar: soy alérgico al maní. ¿Algún plato tiene maní?", ok: true },
            { t: "Ainda não. Eu tenho alergia a maní.", es: "Todavía no. Tengo alergia al maní.", ok: false,
              fix: "«Maní» no se usa en Brasil: se dice «amendoim». «Tenho alergia a amendoim»." }
          ],
          clave: ["alergia", "amendoim", "avisar"],
          tip: "«Cardápio» = carta o menú. Avisar de una alergia al comienzo es normal y bien recibido." },
        { bot: "Obrigada por avisar. O molho do frango tem amendoim, mas o peixe grelhado não tem.", es: "Gracias por avisar. La salsa del pollo tiene maní, pero el pescado a la plancha no.",
          opciones: [
            { t: "Então vou pedir o peixe grelhado.", es: "Entonces voy a pedir el pescado a la plancha.", ok: true },
            { t: "Perfeito, vou querer o peixe grelhado. Pode confirmar com a cozinha, por favor?", es: "Perfecto, voy a querer el pescado a la plancha. ¿Puede confirmar con la cocina, por favor?", ok: true },
            { t: "Então eu quero o pescado grelhado.", es: "Entonces quiero el pescado a la plancha.", ok: false,
              fix: "El pescado como comida se dice «peixe». «Pescado» casi no se usa en el menú brasileño." }
          ],
          clave: ["peixe", "vou querer", "confirmar"],
          tip: "Para pedir con amabilidad: «vou querer…» o «eu queria…». «Me vê…» es muy coloquial." },
        { bot: "Claro, vou confirmar. E para a sua colega?", es: "Claro, voy a confirmar. ¿Y para su colega?",
          opciones: [
            { t: "Ela é vegetariana. Tem alguma opção sem carne?", es: "Ella es vegetariana. ¿Hay alguna opción sin carne?", ok: true },
            { t: "Ela é vegetariana. Vocês têm algum prato sem carne, frango nem peixe?", es: "Ella es vegetariana. ¿Tienen algún plato sin carne, pollo ni pescado?", ok: true },
            { t: "Ela é vegetariana. Tem alguma opção sim carne?", es: "(Quiso decir: Ella es vegetariana. ¿Hay alguna opción sin carne?)", ok: false,
              fix: "«Sin» es «sem»; «sim» significa «sí». Diga «sem carne»." }
          ],
          clave: ["sem carne", "vegetariana"],
          tip: "Cuidado con la nasal: «sem» (sin) y «sim» (sí) suenan parecido para el oído hispanohablante." },
        { bot: "Temos risoto de legumes e uma salada completa. Também posso tirar o queijo, se ela quiser.", es: "Tenemos risotto de verduras y una ensalada completa. También puedo quitar el queso, si ella quiere.",
          opciones: [
            { t: "O risoto de legumes, por favor.", es: "El risotto de verduras, por favor.", ok: true },
            { t: "O risoto parece ótimo. E para beber, um suco de laranja sem açúcar.", es: "El risotto se ve excelente. Y para tomar, un jugo de naranja sin azúcar.", ok: true },
            { t: "O risoto, por favor. E um suco de naranja.", es: "El risotto, por favor. Y un jugo de naranja.", ok: false,
              fix: "Naranja en portugués es «laranja»: «suco de laranja»." }
          ],
          clave: ["risoto", "suco", "sem açúcar"],
          tip: "«Legumes» son hortalizas como zanahoria o calabacín, no solo legumbres. «Suco» = jugo." },
        { bot: "Tudo certo! A cozinha confirmou: o peixe não tem amendoim. Vão querer sobremesa depois?", es: "¡Todo listo! La cocina confirmó: el pescado no tiene maní. ¿Van a querer postre después?",
          opciones: [
            { t: "Talvez depois, obrigado.", es: "Tal vez después, gracias.", ok: true },
            { t: "Vamos ver depois do prato. Muito obrigado pelo cuidado com a alergia.", es: "Vemos después del plato. Muchas gracias por el cuidado con la alergia.", ok: true },
            { t: "Sim, depois queremos um postre.", es: "Sí, después queremos un postre.", ok: false,
              fix: "Falso amigo: el postre es «sobremesa». En español «sobremesa» es la charla después de comer." }
          ],
          clave: ["sobremesa", "obrigad", "depois"],
          tip: "Para pagar: «A conta, por favor». Revise si la «taxa de serviço» (propina) ya viene incluida." }
      ],
      cierre: { bot: "Imagina! Já volto com os pratos. Bom apetite!", es: "¡Con mucho gusto! Ya vuelvo con los platos. ¡Buen provecho!" },
      vocab: [
        { t: "cardápio", es: "carta, menú" },
        { t: "ter alergia a", es: "tener alergia a" },
        { t: "amendoim", es: "maní" },
        { t: "sem / sim", es: "sin / sí" },
        { t: "peixe grelhado", es: "pescado a la plancha" },
        { t: "legumes", es: "hortalizas, verduras" },
        { t: "sobremesa", es: "postre (falso amigo)" },
        { t: "a conta", es: "la cuenta" }
      ]
    },
    {
      id: "pt-14", titulo: "Una cita con la médica", nivel: "A2",
      tema: "Cita médica",
      contexto: "Durante un intercambio en Curitiba amaneces enfermo. Vas a consulta y debes explicar tus síntomas y entender las indicaciones.",
      rol: "Dra. Fernanda Lima, médica general, tranquila y clara",
      turnos: [
        { bot: "Bom dia! Pode se sentar. O que o senhor está sentindo?", es: "¡Buenos días! Siéntese. ¿Qué siente el señor?",
          opciones: [
            { t: "Estou com dor de garganta e febre.", es: "Tengo dolor de garganta y fiebre.", ok: true },
            { t: "Bom dia, doutora. Estou com dor de garganta, febre e muito cansaço.", es: "Buenos días, doctora. Tengo dolor de garganta, fiebre y mucho cansancio.", ok: true },
            { t: "Bom dia. Tengo dor de garganta.", es: "Buenos días. Tengo dolor de garganta.", ok: false,
              fix: "«Tengo» es español. Para síntomas se usa «estar com»: «estou com dor de garganta», «estou com febre»." }
          ],
          clave: ["dor de garganta", "febre", "estou com"],
          tip: "Síntomas con «estar com»: estou com dor de cabeça, com tosse, com febre. Es lo más natural." },
        { bot: "Desde quando o senhor está assim?", es: "¿Desde cuándo está así?",
          opciones: [
            { t: "Desde ontem à noite.", es: "Desde anoche.", ok: true },
            { t: "Desde ontem à noite. Hoje de manhã piorou.", es: "Desde anoche. Esta mañana empeoró.", ok: true },
            { t: "Desde anoche, doutora.", es: "Desde anoche, doctora.", ok: false,
              fix: "«Anoche» se dice «ontem à noite» en portugués." }
          ],
          clave: ["ontem", "noite", "piorou"],
          tip: "«Ontem» = ayer; «anteontem» = anteayer; «hoje de manhã» = esta mañana." },
        { bot: "O senhor tem alergia a algum remédio?", es: "¿Tiene alergia a algún medicamento?",
          opciones: [
            { t: "Não, nenhuma.", es: "No, a ninguno.", ok: true },
            { t: "Que eu saiba, não. E não tomo nenhum remédio todos os dias.", es: "Que yo sepa, no. Y no tomo ningún medicamento a diario.", ok: true },
            { t: "Não, não tenho alergia a nenhuma medicina.", es: "No, no tengo alergia a ningún medicamento.", ok: false,
              fix: "«Medicina» es la ciencia médica. El medicamento se dice «remédio» o «medicamento»." }
          ],
          clave: ["remédio", "alergia", "nenhum"],
          tip: "«Remédio» = medicamento. La farmacia en Brasil también se llama «drogaria», sin ningún sentido negativo." },
        { bot: "Vou examinar a sua garganta. Abra a boca, por favor.", es: "Voy a examinarle la garganta. Abra la boca, por favor.",
          opciones: [
            { t: "Claro.", es: "Claro.", ok: true },
            { t: "Claro. Dói um pouco quando eu engulo.", es: "Claro. Me duele un poco cuando trago.", ok: true },
            { t: "Claro. Me duele quando engulo.", es: "Claro. Me duele cuando trago.", ok: false,
              fix: "El verbo es «doer»: «dói quando eu engulo». «Duele» es español." }
          ],
          clave: ["dói", "engulo"],
          tip: "«Doer» va como «doler»: «dói a garganta», «doem as costas». «Engolir» = tragar." },
        { bot: "A garganta está inflamada. Vou passar um remédio. O senhor precisa descansar e beber bastante água.", es: "La garganta está inflamada. Le voy a recetar un medicamento. Necesita descansar y tomar bastante agua.",
          opciones: [
            { t: "Entendi. Posso dar aula amanhã?", es: "Entendí. ¿Puedo dar clase mañana?", ok: true },
            { t: "Entendi, doutora. Preciso de um atestado para a escola?", es: "Entendí, doctora. ¿Necesito una incapacidad para la escuela?", ok: true },
            { t: "Entendi. Preciso de um certificado de incapacidade para a escola?", es: "Entendí. ¿Necesito una incapacidad para la escuela?", ok: false,
              fix: "En Brasil la excusa o incapacidad médica se llama «atestado médico». «Certificado» se usa para cursos y diplomas." }
          ],
          clave: ["atestado", "descansar", "aula"],
          tip: "«Passar um remédio» = recetar. «Receita» es la fórmula médica (y también la receta de cocina)." },
        { bot: "Vou dar um atestado de dois dias. Tome o remédio de oito em oito horas.", es: "Le voy a dar una incapacidad de dos días. Tome el medicamento cada ocho horas.",
          opciones: [
            { t: "De oito em oito horas. Obrigado, doutora!", es: "Cada ocho horas. ¡Gracias, doctora!", ok: true },
            { t: "Entendi, de oito em oito horas. E se eu não melhorar, volto aqui?", es: "Entendí, cada ocho horas. ¿Y si no mejoro, vuelvo aquí?", ok: true },
            { t: "Cada ocho horas. Obrigado, doutora!", es: "Cada ocho horas. ¡Gracias, doctora!", ok: false,
              fix: "«Ocho» es español. Se dice «de oito em oito horas» o «a cada oito horas»." }
          ],
          clave: ["oito em oito", "melhorar", "obrigad"],
          tip: "«Melhorar» = mejorar; «piorar» = empeorar. «Melhoras!» equivale a «¡que se mejore!»." }
      ],
      cierre: { bot: "Isso mesmo: se piorar, volte. Melhoras!", es: "Así es: si empeora, vuelva. ¡Que se mejore!" },
      vocab: [
        { t: "estar com dor de…", es: "tener dolor de…" },
        { t: "febre", es: "fiebre" },
        { t: "remédio", es: "medicamento" },
        { t: "passar um remédio", es: "recetar un medicamento" },
        { t: "atestado médico", es: "incapacidad o excusa médica" },
        { t: "engolir", es: "tragar" },
        { t: "de oito em oito horas", es: "cada ocho horas" },
        { t: "melhoras!", es: "¡que se mejore!" }
      ]
    },
    {
      id: "pt-15", titulo: "¡Suena la alarma! Simulacro de evacuación", nivel: "A2",
      tema: "Simulacro de evacuación",
      contexto: "Eres docente visitante en una escuela de Recife. Suena la alarma del simulacro y una niña de tu grupo se asusta. Debes guiarla con calma.",
      rol: "Ana Clara, 9 años, nerviosa por el ruido de la alarma",
      turnos: [
        { bot: "Professor, que barulho é esse? Estou com medo!", es: "Profe, ¿qué ruido es ese? ¡Tengo miedo!",
          opciones: [
            { t: "Calma, Ana Clara. É um simulado de evacuação.", es: "Calma, Ana Clara. Es un simulacro de evacuación.", ok: true },
            { t: "Fica tranquila. É só um treino: um simulado para aprender a sair com segurança.", es: "Tranquila. Es solo una práctica: un simulacro para aprender a salir con seguridad.", ok: true },
            { t: "Calma, é só um simulacro.", es: "Calma, es solo un simulacro.", ok: false,
              fix: "En Brasil se dice «simulado de evacuação». «Simulacro» existe, pero significa imitación o apariencia falsa." }
          ],
          clave: ["calma", "simulado", "tranquila"],
          tip: "«Barulho» = ruido. «Estou com medo» = tengo miedo: otra vez la estructura «estar com»." },
        { bot: "E o que a gente faz agora?", es: "¿Y qué hacemos ahora?",
          opciones: [
            { t: "Deixe o material na carteira e faça fila na porta.", es: "Deja los útiles en el pupitre y haz fila en la puerta.", ok: true },
            { t: "Deixe tudo na carteira, levante devagar e venha para a fila, sem correr.", es: "Deja todo en el pupitre, levántate despacio y ven a la fila, sin correr.", ok: true },
            { t: "Deixe tudo e saia corriendo.", es: "Deja todo y sal corriendo.", ok: false,
              fix: "«Corriendo» es español («correndo»), y en un simulacro no se corre: «saia andando, sem correr»." }
          ],
          clave: ["fila", "sem correr", "devagar"],
          tip: "«Carteira» es el pupitre en la escuela (y también la billetera). «Devagar» = despacio." },
        { bot: "Posso levar a minha mochila?", es: "¿Puedo llevar mi morral?",
          opciones: [
            { t: "Não, deixe a mochila aqui.", es: "No, deja el morral aquí.", ok: true },
            { t: "Não precisa. Numa emergência, a gente sai rápido e não leva nada.", es: "No hace falta. En una emergencia, salimos rápido y no llevamos nada.", ok: true },
            { t: "Não, deixe a mochila acá.", es: "No, deja el morral acá.", ok: false,
              fix: "«Acá» es español. En portugués se dice «aqui»: «deixe a mochila aqui»." }
          ],
          clave: ["mochila", "aqui", "não precisa"],
          tip: "«Numa» = em + uma. Las contracciones con artículo indefinido son comunes en el habla: num, numa." },
        { bot: "Por onde a gente sai?", es: "¿Por dónde salimos?",
          opciones: [
            { t: "Pela escada. Sigam as setas verdes.", es: "Por la escalera. Sigan las flechas verdes.", ok: true },
            { t: "Pela escada da esquerda, segurando no corrimão e sem empurrar.", es: "Por la escalera de la izquierda, agarrados del pasamanos y sin empujar.", ok: true },
            { t: "Pelo ascensor não; pela escada.", es: "Por el ascensor no; por la escalera.", ok: false,
              fix: "El ascensor en portugués es «elevador»: «pelo elevador, não»." }
          ],
          clave: ["escada", "setas", "sem empurrar"],
          tip: "«Seta» es la flecha de señalización. «Saída de emergência» = salida de emergencia." },
        { bot: "Chegamos no pátio! E agora?", es: "¡Llegamos al patio! ¿Y ahora?",
          opciones: [
            { t: "Agora vamos ficar juntos no ponto de encontro.", es: "Ahora nos quedamos juntos en el punto de encuentro.", ok: true },
            { t: "Agora fiquem em fila no ponto de encontro. Vou contar todo mundo.", es: "Ahora quédense en fila en el punto de encuentro. Voy a contarlos a todos.", ok: true },
            { t: "Agora vamos contar. Ninguém pode se ir.", es: "Ahora vamos a contar. Nadie puede irse.", ok: false,
              fix: "«Irse» se dice «ir embora»: «ninguém pode ir embora»." }
          ],
          clave: ["ponto de encontro", "contar", "fila"],
          tip: "En el punto de encuentro el docente cuenta a su grupo y reporta a coordinación: nadie se va sin permiso." },
        { bot: "Professor, eu fiz tudo certo?", es: "Profe, ¿hice todo bien?",
          opciones: [
            { t: "Fez, sim! Você foi muito corajosa.", es: "¡Sí! Fuiste muy valiente.", ok: true },
            { t: "Fez tudo certinho! Você ficou calma e ajudou os colegas. Parabéns!", es: "¡Hiciste todo muy bien! Te mantuviste tranquila y ayudaste a los compañeros. ¡Felicitaciones!", ok: true },
            { t: "Fez, sim! Você foi muito corajoso.", es: "¡Sí! Fuiste muy valiente.", ok: false,
              fix: "Ana Clara es niña: el adjetivo concuerda en femenino, «corajosa»." }
          ],
          clave: ["parabéns", "certinho", "corajosa"],
          tip: "Responder repitiendo el verbo («Fez, sim!») es muy brasileño. «Certinho» = bien hecho, sin errores." }
      ],
      cierre: { bot: "Oba! No próximo simulado eu vou ajudar os menores!", es: "¡Qué bien! ¡En el próximo simulacro voy a ayudar a los más pequeños!" },
      vocab: [
        { t: "simulado de evacuação", es: "simulacro de evacuación" },
        { t: "barulho", es: "ruido" },
        { t: "fazer fila", es: "hacer fila" },
        { t: "carteira (escolar)", es: "pupitre" },
        { t: "escada / elevador", es: "escalera / ascensor" },
        { t: "ponto de encontro", es: "punto de encuentro" },
        { t: "ir embora", es: "irse" },
        { t: "devagar", es: "despacio" }
      ]
    },
    {
      id: "pt-16", titulo: "¡Lo logramos! Celebrar con el grupo", nivel: "A2",
      tema: "Celebrar logros con estudiantes",
      contexto: "Tu grupo de 5.º año en Fortaleza terminó la huerta escolar después de varios intentos. Un estudiante corre a mostrarte los resultados.",
      rol: "Gabriel, 10 años, orgulloso y emocionado",
      turnos: [
        { bot: "Professor, a horta ficou pronta! Olha os tomates!", es: "¡Profe, la huerta quedó lista! ¡Mire los tomates!",
          opciones: [
            { t: "Que lindo, Gabriel! Vocês trabalharam muito.", es: "¡Qué lindo, Gabriel! Ustedes trabajaron mucho.", ok: true },
            { t: "Que maravilha! Estou muito orgulhoso de vocês.", es: "¡Qué maravilla! Estoy muy orgulloso de ustedes.", ok: true },
            { t: "Que lindo! Estou muito orgulloso de vocês.", es: "¡Qué lindo! Estoy muy orgulloso de ustedes.", ok: false,
              fix: "En portugués se escribe «orgulhoso», con «lh» (suena como «li» rápido): «estou orgulhoso de vocês»." }
          ],
          clave: ["orgulhoso", "que lindo", "trabalharam"],
          tip: "«Horta» = huerta. «Ficar pronto» = quedar listo. «Olha!» = ¡mire!" },
        { bot: "Foi difícil! No começo as plantas morreram.", es: "¡Fue difícil! Al comienzo las plantas se murieron.",
          opciones: [
            { t: "É verdade, mas vocês não desistiram.", es: "Es verdad, pero ustedes no se rindieron.", ok: true },
            { t: "Eu lembro! Mas vocês aprenderam com o erro e tentaram de novo.", es: "¡Me acuerdo! Pero aprendieron del error y lo intentaron otra vez.", ok: true },
            { t: "Sim, mas vocês aprenderam do erro.", es: "Sí, pero aprendieron del error.", ok: false,
              fix: "En portugués se aprende «com» el error: «aprenderam com o erro»." }
          ],
          clave: ["não desistiram", "com o erro", "de novo"],
          tip: "«Desistir» = rendirse, abandonar. «Não desista!» es una frase de ánimo muy común." },
        { bot: "O que a gente fez de diferente da segunda vez?", es: "¿Qué hicimos diferente la segunda vez?",
          opciones: [
            { t: "Vocês regaram as plantas todos os dias.", es: "Regaron las plantas todos los días.", ok: true },
            { t: "Vocês observaram a terra, regaram com cuidado e anotaram tudo no caderno.", es: "Observaron la tierra, regaron con cuidado y anotaron todo en el cuaderno.", ok: true },
            { t: "Vocês regaram as plantas todos os días.", es: "Regaron las plantas todos los días.", ok: false,
              fix: "«Días» es español. En portugués es «dias», sin tilde: «todos os dias»." }
          ],
          clave: ["regaram", "todos os dias", "anotaram"],
          tip: "Nombrar la estrategia concreta («anotaram tudo») ayuda al niño a entender por qué funcionó." },
        { bot: "Podemos fazer uma festa para comemorar?", es: "¿Podemos hacer una fiesta para celebrar?",
          opciones: [
            { t: "Podemos! Vamos fazer um lanche com a turma.", es: "¡Podemos! Vamos a hacer una merienda con el grupo.", ok: true },
            { t: "Claro! Vamos comemorar e convidar as famílias para ver a horta.", es: "¡Claro! Vamos a celebrar e invitar a las familias a ver la huerta.", ok: true },
            { t: "Claro! Vamos celebrar com uma fiesta.", es: "¡Claro! Vamos a celebrar con una fiesta.", ok: false,
              fix: "«Fiesta» es «festa» en portugués. Y para celebrar lo más usado es «comemorar»." }
          ],
          clave: ["comemorar", "festa", "turma"],
          tip: "Falso amigo: «comemorar» = celebrar, festejar. «Turma» = el grupo o curso." },
        { bot: "E eu posso falar na festa? Quero contar como a gente fez.", es: "¿Y yo puedo hablar en la fiesta? Quiero contar cómo lo hicimos.",
          opciones: [
            { t: "Pode, sim! Você explica para as famílias.", es: "¡Sí, puedes! Tú les explicas a las familias.", ok: true },
            { t: "Seria ótimo! Prepare três frases: o problema, a solução e o que você aprendeu.", es: "¡Sería excelente! Prepara tres frases: el problema, la solución y lo que aprendiste.", ok: true },
            { t: "Pode! Vai ser muito exitoso.", es: "¡Puedes! Va a ser muy exitoso.", ok: false,
              fix: "«Exitoso» casi no se usa en Brasil. Lo natural es «bem-sucedido» o, más simple, «vai ser um sucesso»." }
          ],
          clave: ["pode", "aprendeu", "famílias"],
          tip: "Falso amigo: «sucesso» = éxito. «Suceso» (hecho, acontecimiento) se dice «acontecimento»." },
        { bot: "Obrigado, professor! O senhor ajudou muito a gente.", es: "¡Gracias, profe! Usted nos ayudó mucho.",
          opciones: [
            { t: "O mérito é de vocês. Parabéns, turma!", es: "El mérito es de ustedes. ¡Felicitaciones, grupo!", ok: true },
            { t: "Eu só ajudei; quem fez foram vocês. Parabéns pelo esforço!", es: "Yo solo ayudé; los que lo hicieron fueron ustedes. ¡Felicitaciones por el esfuerzo!", ok: true },
            { t: "De nada! Felicidades pelo esforço.", es: "¡De nada! Felicitaciones por el esfuerzo.", ok: false,
              fix: "«Felicidades» se usa para buenos deseos (cumpleaños, fin de año). Para un logro se dice «Parabéns!»." }
          ],
          clave: ["parabéns", "esforço", "mérito"],
          tip: "Felicitar el esfuerzo y la estrategia, no solo el talento, ayuda a que el niño siga intentándolo." }
      ],
      cierre: { bot: "Oba! Vou contar para a minha mãe hoje mesmo!", es: "¡Qué bien! ¡Le voy a contar a mi mamá hoy mismo!" },
      vocab: [
        { t: "horta", es: "huerta" },
        { t: "comemorar", es: "celebrar, festejar" },
        { t: "parabéns!", es: "¡felicitaciones!" },
        { t: "orgulhoso", es: "orgulloso" },
        { t: "desistir", es: "rendirse, abandonar" },
        { t: "turma", es: "grupo, curso" },
        { t: "esforço", es: "esfuerzo" },
        { t: "sucesso", es: "éxito (falso amigo)" }
      ]
    },
    {
      id: "pt-17", titulo: "¿Para qué sirve la rúbrica?", nivel: "B1",
      tema: "Explicar una rúbrica",
      contexto: "En una escuela de Campinas, una estudiante de 9.º año no entiende la rúbrica de la exposición oral. Se la explicas para que la use antes de presentar.",
      rol: "Beatriz, 14 años, responsable y preocupada por la nota",
      turnos: [
        { bot: "Professor, eu não entendi essa tabela da avaliação. Pra que serve?", es: "Profe, no entendí esta tabla de la evaluación. ¿Para qué sirve?",
          opciones: [
            { t: "É uma rubrica: mostra os critérios e os níveis de desempenho da apresentação.", es: "Es una rúbrica: muestra los criterios y los niveles de desempeño de la exposición.", ok: true },
            { t: "Serve para você saber, antes de começar, como o seu trabalho vai ser avaliado.", es: "Sirve para que sepas, antes de empezar, cómo se va a evaluar tu trabajo.", ok: true },
            { t: "É uma rúbrica para calificar a apresentação.", es: "Es una rúbrica para calificar la exposición.", ok: false,
              fix: "En portugués es «rubrica», sin tilde y con acento en «bri». El verbo es «avaliar» o «dar nota», no «calificar»." }
          ],
          clave: ["rubrica", "critérios", "avaliar"],
          tip: "«Rubrica» se pronuncia ru-BRI-ca. «Nota» = calificación; «avaliação» = evaluación." },
        { bot: "E o que são esses quatro critérios aqui em cima?", es: "¿Y qué son estos cuatro criterios aquí arriba?",
          opciones: [
            { t: "São os aspectos que contam: conteúdo, organização, linguagem e apresentação oral.", es: "Son los aspectos que cuentan: contenido, organización, lenguaje y expresión oral.", ok: true },
            { t: "São as partes do trabalho que eu vou observar: o que você diz, como organiza, como usa a língua e como se apresenta.", es: "Son las partes del trabajo que voy a observar: lo que dices, cómo lo organizas, cómo usas la lengua y cómo te presentas.", ok: true },
            { t: "São os aspectos que contam: contenido, organização e linguagem.", es: "Son los aspectos que cuentan: contenido, organización y lenguaje.", ok: false,
              fix: "«Contenido» es «conteúdo» en portugués, con tilde en la ú." }
          ],
          clave: ["conteúdo", "organização", "critérios"],
          tip: "«Em cima» = arriba; «embaixo» = abajo. Útil para señalar partes de una tabla." },
        { bot: "E essas colunas: “iniciante”, “em desenvolvimento”, “proficiente” e “avançado”?", es: "¿Y estas columnas: «inicial», «en desarrollo», «competente» y «avanzado»?",
          opciones: [
            { t: "São os níveis. Cada coluna descreve o que você faz em cada nível.", es: "Son los niveles. Cada columna describe lo que haces en cada nivel.", ok: true },
            { t: "São os níveis de desempenho. A descrição diz exatamente o que falta para subir de nível.", es: "Son los niveles de desempeño. La descripción dice exactamente qué falta para subir de nivel.", ok: true },
            { t: "São os níveis. Você pode subir de nível se se esforça.", es: "Son los niveles. Puedes subir de nivel si te esfuerzas.", ok: false,
              fix: "Con «se» referido al futuro se usa el futuro de subjuntivo: «se você se esforçar»." }
          ],
          clave: ["níveis", "desempenho", "descrição"],
          tip: "Una buena rúbrica describe conductas observables en cada nivel, no solo adjetivos como «bom» o «ruim»." },
        { bot: "Hum... Então no ano passado eu tirei nota baixa porque fiquei em “em desenvolvimento” na organização?", es: "Mmm... ¿Entonces el año pasado saqué nota baja porque quedé en «en desarrollo» en organización?",
          opciones: [
            { t: "Provavelmente. Vamos ver juntos o que você pode melhorar.", es: "Probablemente. Veamos juntos qué puedes mejorar.", ok: true },
            { t: "Pode ser. A boa notícia é que a rubrica mostra o caminho: vamos olhar o nível seguinte.", es: "Puede ser. La buena noticia es que la rúbrica muestra el camino: miremos el nivel siguiente.", ok: true },
            { t: "Pode ser. Mas não é nada grave, não te preocupes.", es: "Puede ser. Pero no es nada grave, no te preocupes.", ok: false,
              fix: "«Não te preocupes» es español. En Brasil se dice «não se preocupe» (o, coloquial, «não se preocupa»)." }
          ],
          clave: ["melhorar", "nível seguinte", "juntos"],
          tip: "«Tirar nota» = sacar nota. «Tirei dez» = me saqué la nota máxima." },
        { bot: "E o que eu preciso fazer pra chegar no “avançado” em organização?", es: "¿Y qué necesito hacer para llegar a «avanzado» en organización?",
          opciones: [
            { t: "Ter uma introdução, um desenvolvimento claro e uma conclusão.", es: "Tener una introducción, un desarrollo claro y una conclusión.", ok: true },
            { t: "Planejar antes: uma introdução que apresente o tema, partes bem conectadas e uma conclusão que retome a ideia principal.", es: "Planear antes: una introducción que presente el tema, partes bien conectadas y una conclusión que retome la idea principal.", ok: true },
            { t: "Ter uma introdução, um desarrollo e uma conclusão.", es: "Tener una introducción, un desarrollo y una conclusión.", ok: false,
              fix: "«Desarrollo» es «desenvolvimento» en portugués." }
          ],
          clave: ["introdução", "desenvolvimento", "conclusão"],
          tip: "Conectores para organizar: «em primeiro lugar», «além disso», «por outro lado», «por fim»." },
        { bot: "Posso usar a rubrica pra me autoavaliar antes de apresentar?", es: "¿Puedo usar la rúbrica para autoevaluarme antes de presentar?",
          opciones: [
            { t: "Pode e deve! Marque onde você acha que está.", es: "¡Puedes y debes! Marca dónde crees que estás.", ok: true },
            { t: "Excelente ideia! Faça a autoavaliação, depois um colega te avalia e a gente compara.", es: "¡Excelente idea! Haz la autoevaluación, después un compañero te evalúa y comparamos.", ok: true },
            { t: "Claro! Assim você corrige tudo antes de exponer.", es: "¡Claro! Así corriges todo antes de exponer.", ok: false,
              fix: "«Exponer» es español. Para una exposición oral se dice «apresentar»: «antes de apresentar»." }
          ],
          clave: ["autoavaliação", "pode", "apresentar"],
          tip: "Autoevaluarse y coevaluar con la rúbrica convierte la evaluación en una herramienta para aprender, no solo para calificar." }
      ],
      cierre: { bot: "Valeu, professor! Agora a tabela faz sentido. Vou marcar o meu nível hoje mesmo.", es: "¡Gracias, profe! Ahora la tabla tiene sentido. Voy a marcar mi nivel hoy mismo." },
      vocab: [
        { t: "rubrica", es: "rúbrica" },
        { t: "critério", es: "criterio" },
        { t: "nível de desempenho", es: "nivel de desempeño" },
        { t: "avaliar / avaliação", es: "evaluar / evaluación" },
        { t: "tirar nota", es: "sacar nota" },
        { t: "autoavaliação", es: "autoevaluación" },
        { t: "desenvolvimento", es: "desarrollo" },
        { t: "em cima / embaixo", es: "arriba / abajo" }
      ]
    },
    {
      id: "pt-18", titulo: "La autorización para la salida", nivel: "B1",
      tema: "Permiso de salida pedagógica con una familia",
      contexto: "Organizas una visita de 7.º año a un museo de ciencias en São Paulo. El papá de un estudiante no ha firmado la autorización y lo llamas para resolver sus dudas.",
      rol: "Seu Antônio, papá de Miguel, protector y algo desconfiado",
      turnos: [
        { bot: "Alô? Quem fala?", es: "¿Aló? ¿Quién habla?",
          opciones: [
            { t: "Boa tarde, seu Antônio. Aqui é o professor Carlos, da escola do Miguel.", es: "Buenas tardes, don Antonio. Habla el profesor Carlos, del colegio de Miguel.", ok: true },
            { t: "Boa tarde! Falo com o seu Antônio? Sou o professor de Ciências do Miguel.", es: "¡Buenas tardes! ¿Hablo con don Antonio? Soy el profesor de Ciencias de Miguel.", ok: true },
            { t: "Boa tarde. Habla o professor Carlos.", es: "Buenas tardes. Habla el profesor Carlos.", ok: false,
              fix: "Al teléfono se dice «Aqui é o professor Carlos» o «Quem fala é o professor Carlos». «Habla» es español." }
          ],
          clave: ["aqui é", "professor", "Miguel"],
          tip: "«Seu» + nombre es un trato respetuoso para un señor («seu Antônio»); para una señora, «dona» («dona Maria»)." },
        { bot: "Ah, sim. Aconteceu alguma coisa com o Miguel?", es: "Ah, sí. ¿Le pasó algo a Miguel?",
          opciones: [
            { t: "Não, está tudo bem. Estou ligando por causa da saída pedagógica de sexta-feira.", es: "No, todo está bien. Llamo por la salida pedagógica del viernes.", ok: true },
            { t: "Não se preocupe, ele está ótimo. Estou ligando sobre a visita ao museu de ciências na sexta-feira.", es: "No se preocupe, él está muy bien. Llamo por la visita al museo de ciencias el viernes.", ok: true },
            { t: "Não, tudo bem. Estou chamando pela excursão de sexta.", es: "No, todo bien. Llamo por la excursión del viernes.", ok: false,
              fix: "Llamar por teléfono es «ligar»: «estou ligando sobre a saída». «Chamar» es llamar a alguien en voz alta o nombrar." }
          ],
          clave: ["ligando", "saída", "museu"],
          tip: "«Ligar» = llamar por teléfono; «chamar» = llamar a alguien. «Sexta-feira» = viernes." },
        { bot: "Eu vi o bilhete, mas não assinei. Fico preocupado com ônibus, rua, essas coisas.", es: "Vi la nota, pero no la firmé. Me preocupan el bus, la calle, esas cosas.",
          opciones: [
            { t: "Entendo a sua preocupação. Os alunos vão estar acompanhados por professores o tempo todo.", es: "Entiendo su preocupación. Los estudiantes van a estar acompañados por profesores todo el tiempo.", ok: true },
            { t: "É natural se preocupar. A escola contratou um ônibus só para a turma, e vários professores vão junto.", es: "Es natural preocuparse. El colegio contrató un bus solo para el grupo, y van varios profesores.", ok: true },
            { t: "Entendo, mas fique tranquilo: a escola contrató um ônibus.", es: "Entiendo, pero quédese tranquilo: el colegio contrató un bus.", ok: false,
              fix: "El pretérito de «contratar» es «contratou». La terminación española -ó corresponde a -ou en portugués." }
          ],
          clave: ["entendo", "acompanhados", "preocupação"],
          tip: "«Bilhete» es la nota que va a casa (y también el tiquete). «Assinar» = firmar." },
        { bot: "E se ele passar mal lá no museu?", es: "¿Y si él se siente mal allá en el museo?",
          opciones: [
            { t: "Levamos um kit de primeiros socorros e temos o contato de todas as famílias.", es: "Llevamos un botiquín de primeros auxilios y tenemos el contacto de todas las familias.", ok: true },
            { t: "Uma professora tem formação em primeiros socorros, e se algo acontecer ligamos para o senhor na hora.", es: "Una profesora tiene formación en primeros auxilios, y si pasa algo lo llamamos de inmediato.", ok: true },
            { t: "Levamos um botiquim e temos o contato de todas as famílias.", es: "Llevamos un botiquín y tenemos el contacto de todas las familias.", ok: false,
              fix: "«Botiquín» se dice «kit» o «caixa de primeiros socorros». ¡Ojo! «Botequim» es un bar." }
          ],
          clave: ["primeiros socorros", "contato", "na hora"],
          tip: "«Passar mal» = sentirse mal de repente. «Na hora» = en el momento, de inmediato." },
        { bot: "E quanto custa? A gente está meio apertado este mês.", es: "¿Y cuánto cuesta? Estamos un poco cortos de plata este mes.",
          opciones: [
            { t: "Entendo. A escola tem um fundo de apoio; ninguém fica de fora por causa de dinheiro.", es: "Entiendo. El colegio tiene un fondo de apoyo; nadie se queda por fuera por plata.", ok: true },
            { t: "Não se preocupe com isso: a escola cobre os custos para quem precisar, com toda a discrição.", es: "No se preocupe por eso: el colegio cubre los costos de quien lo necesite, con toda discreción.", ok: true },
            { t: "Não se preocupe. Se precisar, a escola tem uma beca para ajudar.", es: "No se preocupe. Si lo necesita, el colegio tiene una beca para ayudar.", ok: false,
              fix: "Falso amigo: «beca» en portugués es la toga de graduación. El apoyo económico es «bolsa» o «auxílio»." }
          ],
          clave: ["discrição", "apoio", "custos"],
          tip: "«Estar apertado» = estar corto de dinero. Hablar de plata con discreción protege la dignidad de la familia." },
        { bot: "Bom, assim fico mais tranquilo. Até quando preciso devolver a autorização?", es: "Bueno, así quedo más tranquilo. ¿Hasta cuándo debo devolver la autorización?",
          opciones: [
            { t: "Até quarta-feira, por favor. O Miguel pode trazer na mochila.", es: "Hasta el miércoles, por favor. Miguel la puede traer en el morral.", ok: true },
            { t: "Até quarta-feira. Se preferir, assine, mande uma foto pela agenda digital da escola e depois envie o papel.", es: "Hasta el miércoles. Si prefiere, fírmela, envíe una foto por la agenda digital del colegio y después mande el papel.", ok: true },
            { t: "Hasta quarta-feira, por favor.", es: "Hasta el miércoles, por favor.", ok: false,
              fix: "«Hasta» es «até» en portugués: «até quarta-feira»." }
          ],
          clave: ["até", "quarta-feira", "autorização"],
          tip: "Días: segunda, terça, quarta, quinta y sexta-feira; sábado y domingo. ¡El lunes es «segunda»!" }
      ],
      cierre: { bot: "Combinado, professor. Obrigado por ligar e explicar tudo com calma.", es: "De acuerdo, profesor. Gracias por llamar y explicar todo con calma." },
      vocab: [
        { t: "saída pedagógica", es: "salida pedagógica" },
        { t: "ligar (para alguém)", es: "llamar por teléfono" },
        { t: "bilhete", es: "nota escrita, circular" },
        { t: "assinar", es: "firmar" },
        { t: "primeiros socorros", es: "primeros auxilios" },
        { t: "passar mal", es: "sentirse mal" },
        { t: "estar apertado", es: "estar corto de dinero" },
        { t: "bolsa", es: "beca (falso amigo de «beca»)" }
      ]
    },
    {
      id: "pt-19", titulo: "Todo falla en la clase virtual", nivel: "B1",
      tema: "Problemas técnicos en clase virtual",
      contexto: "Das una clase virtual a un grupo brasileño de un colegio aliado. Micrófono, pantalla, conexión y enlaces fallan; debes resolver con calma y en portugués.",
      rol: "Larissa, 15 años, estudiante atenta que avisa de cada problema",
      turnos: [
        { bot: "Professor, a gente não está ouvindo nada! O seu microfone está no mudo.", es: "¡Profe, no estamos escuchando nada! Su micrófono está silenciado.",
          opciones: [
            { t: "Desculpem! E agora, estão me ouvindo?", es: "¡Disculpen! ¿Y ahora me escuchan?", ok: true },
            { t: "Opa, foi mal! Liguei o microfone. Agora dá para ouvir?", es: "¡Uy, perdón! Encendí el micrófono. ¿Ahora sí se escucha?", ok: true },
            { t: "Perdão! Prendi o microfone. Agora me escutam?", es: "¡Perdón! Prendí el micrófono. ¿Ahora me escuchan?", ok: false,
              fix: "Falso amigo: «prender» en portugués es arrestar o sujetar. Encender es «ligar» o «ativar»: «liguei o microfone»." }
          ],
          clave: ["ouvindo", "microfone", "liguei"],
          tip: "«Ligar» también es encender (la luz, el computador) y «desligar», apagar. «Foi mal» = perdón, informal." },
        { bot: "Agora sim! Mas a sua tela está toda preta.", es: "¡Ahora sí! Pero su pantalla está toda negra.",
          opciones: [
            { t: "Vou compartilhar a tela de novo. Um momento.", es: "Voy a compartir pantalla otra vez. Un momento.", ok: true },
            { t: "Obrigado por avisar. Vou parar e compartilhar a apresentação de novo; me avisem quando aparecer.", es: "Gracias por avisar. Voy a detener y compartir la presentación otra vez; avísenme cuando aparezca.", ok: true },
            { t: "Vou compartir a pantalha de novo.", es: "Voy a compartir la pantalla otra vez.", ok: false,
              fix: "Se dice «compartilhar a tela». En portugués «tela» = pantalla; «compartir» y «pantalla» son español." }
          ],
          clave: ["compartilhar", "tela", "de novo"],
          tip: "«Tela» = pantalla. «De novo» = otra vez. «Preto» = negro (no «negro» para colores)." },
        { bot: "Apareceu! Mas o João saiu da chamada. Acho que a internet dele caiu.", es: "¡Apareció! Pero João se salió de la llamada. Creo que se le cayó el internet.",
          opciones: [
            { t: "Sem problema. Quando ele voltar, eu explico o que ele perdeu.", es: "No hay problema. Cuando vuelva, le explico lo que se perdió.", ok: true },
            { t: "Obrigado, Larissa. Vou gravar a aula; assim ele pode ver depois o que perdeu.", es: "Gracias, Larissa. Voy a grabar la clase; así él puede ver después lo que se perdió.", ok: true },
            { t: "Tudo bem. Vou grabar a aula para ele.", es: "Bueno. Voy a grabar la clase para él.", ok: false,
              fix: "«Grabar» es «gravar» en portugués: «vou gravar a aula»." }
          ],
          clave: ["gravar", "quando ele voltar", "perdeu"],
          tip: "«Quando ele voltar»: futuro de subjuntivo, típico después de «quando» y «se» con valor futuro." },
        { bot: "Professor, o link do formulário que o senhor mandou no chat não abre.", es: "Profe, el enlace del formulario que mandó al chat no abre.",
          opciones: [
            { t: "Vou mandar o link de novo. Tentem agora.", es: "Voy a mandar el enlace otra vez. Intenten ahora.", ok: true },
            { t: "Desculpem, acho que copiei errado. Vou colar o link certo no chat; me digam se funcionou.", es: "Disculpen, creo que lo copié mal. Voy a pegar el enlace correcto en el chat; díganme si funcionó.", ok: true },
            { t: "Desculpem, vou enviar o enlace de novo.", es: "Disculpen, voy a enviar el enlace otra vez.", ok: false,
              fix: "En Brasil se dice «link». «Enlace» se usa para una boda o una unión, no para internet." }
          ],
          clave: ["link", "chat", "funcionou"],
          tip: "«Copiar e colar» = copiar y pegar. ¡Ojo! «Pegar» en portugués es tomar o agarrar." },
        { bot: "Funcionou! Mas o tempo está acabando e a gente não terminou o exercício.", es: "¡Funcionó! Pero se está acabando el tiempo y no terminamos el ejercicio.",
          opciones: [
            { t: "Terminem como tarefa e me mandem até quinta-feira.", es: "Termínenlo de tarea y mándenmelo hasta el jueves.", ok: true },
            { t: "Não tem problema. Terminem em casa; na próxima aula começamos corrigindo juntos.", es: "No hay problema. Termínenlo en casa; en la próxima clase empezamos corrigiendo juntos.", ok: true },
            { t: "Não tem problema. Terminem como tarea.", es: "No hay problema. Termínenlo de tarea.", ok: false,
              fix: "«Tarea» es español. En Brasil se dice «tarefa» o «lição de casa»: «terminem como tarefa»." }
          ],
          clave: ["tarefa", "próxima aula", "em casa"],
          tip: "Ante fallas técnicas, un plan B (grabar, tarea, retomar) mantiene el aprendizaje sin culpar a nadie." },
        { bot: "Professor, apesar dos problemas, a aula foi boa!", es: "¡Profe, a pesar de los problemas, la clase estuvo buena!",
          opciones: [
            { t: "Obrigado, Larissa! E obrigado pela paciência de todos.", es: "¡Gracias, Larissa! Y gracias a todos por la paciencia.", ok: true },
            { t: "Que bom! Vocês ajudaram muito avisando cada problema. Errar faz parte; o importante é resolver juntos.", es: "¡Qué bien! Ustedes ayudaron mucho avisando cada problema. Equivocarse es parte; lo importante es resolver juntos.", ok: true },
            { t: "Obrigado! E desculpem as moléstias.", es: "¡Gracias! Y disculpen las molestias.", ok: false,
              fix: "Falso amigo: «moléstia» significa enfermedad. Diga «desculpem o transtorno» o «desculpem os problemas»." }
          ],
          clave: ["obrigad", "paciência", "juntos"],
          tip: "«Desculpe o transtorno» es la fórmula estándar en Brasil para disculparse por una molestia." }
      ],
      cierre: { bot: "Imagina! Até a próxima aula, professor. E não esquece de tirar o mudo, hein!", es: "¡Para nada! Hasta la próxima clase, profe. ¡Y no olvide quitar el silencio, eh!" },
      vocab: [
        { t: "estar no mudo", es: "estar silenciado" },
        { t: "ligar / desligar", es: "encender / apagar" },
        { t: "compartilhar a tela", es: "compartir pantalla" },
        { t: "gravar", es: "grabar" },
        { t: "a internet caiu", es: "se cayó el internet" },
        { t: "copiar e colar", es: "copiar y pegar" },
        { t: "tarefa / lição de casa", es: "tarea" },
        { t: "desculpe o transtorno", es: "disculpe la molestia" }
      ]
    },
    {
      id: "pt-20", titulo: "Club de lectura entre docentes", nivel: "B1",
      tema: "Club de lectura",
      contexto: "Participas en un club de lectura de docentes en Niterói. Hoy comentan «Vidas Secas», de Graciliano Ramos, y te piden tu opinión.",
      rol: "Prof.ª Helena, moderadora del club, cálida y curiosa",
      turnos: [
        { bot: "Boa noite, gente! Hoje vamos conversar sobre “Vidas Secas”, de Graciliano Ramos. O que vocês acharam?", es: "¡Buenas noches a todos! Hoy vamos a conversar sobre «Vidas secas», de Graciliano Ramos. ¿Qué les pareció?",
          opciones: [
            { t: "Eu gostei muito. É um livro triste, mas muito bonito.", es: "Me gustó mucho. Es un libro triste, pero muy bonito.", ok: true },
            { t: "Achei impressionante. A linguagem é seca, como o próprio sertão, e isso me tocou muito.", es: "Me pareció impresionante. El lenguaje es seco, como el propio sertón, y eso me tocó mucho.", ok: true },
            { t: "Eu gostei muito. É uma novela muito forte.", es: "Me gustó mucho. Es una novela muy fuerte.", ok: false,
              fix: "Falso amigo: «novela» en Brasil es telenovela. La obra narrativa extensa es «romance»: «é um romance muito forte»." }
          ],
          clave: ["achei", "romance", "gostei"],
          tip: "«O que vocês acharam?» = ¿qué les pareció? «Achar» significa opinar, además de encontrar." },
        { bot: "Qual personagem chamou mais a sua atenção?", es: "¿Qué personaje le llamó más la atención?",
          opciones: [
            { t: "A cachorra Baleia. Ela parece mais humana que muitas pessoas.", es: "La perra Baleia. Parece más humana que muchas personas.", ok: true },
            { t: "O Fabiano, porque ele quase não consegue falar, e isso mostra como a miséria tira até as palavras.", es: "Fabiano, porque casi no logra hablar, y eso muestra cómo la miseria quita hasta las palabras.", ok: true },
            { t: "A perra Baleia me emocionou muito.", es: "La perra Baleia me emocionó mucho.", ok: false,
              fix: "«Perra» se dice «cachorra» (o «cadela»). Ojo: en Brasil «cachorro» es cualquier perro; la cría es «filhote»." }
          ],
          clave: ["personagem", "Baleia", "Fabiano"],
          tip: "«Conseguir» + infinitivo = lograr: «ele não consegue falar» = no logra hablar." },
        { bot: "E como vocês relacionam o livro com a escola de hoje?", es: "¿Y cómo relacionan el libro con la escuela de hoy?",
          opciones: [
            { t: "Muitos alunos também vivem situações difíceis e precisam ser ouvidos.", es: "Muchos estudiantes también viven situaciones difíciles y necesitan ser escuchados.", ok: true },
            { t: "O Fabiano sente vergonha de não saber se expressar. Na escola, a gente precisa dar voz a quem tem dificuldade com as palavras.", es: "Fabiano siente vergüenza de no saber expresarse. En la escuela tenemos que dar voz a quien tiene dificultad con las palabras.", ok: true },
            { t: "A leitura é importante para que os alunos se expressam melhor.", es: "La lectura es importante para que los estudiantes se expresen mejor.", ok: false,
              fix: "«Para que» exige subjuntivo, igual que en español: «para que os alunos se expressem melhor»." }
          ],
          clave: ["alunos", "voz", "expressar"],
          tip: "«Dar voz» = permitir que alguien se exprese. Conectar la lectura con la vida real profundiza la comprensión." },
        { bot: "Alguém achou a leitura difícil?", es: "¿Alguien encontró difícil la lectura?",
          opciones: [
            { t: "Eu achei, por causa das palavras regionais. Usei um dicionário.", es: "Yo sí, por las palabras regionales. Usé un diccionario.", ok: true },
            { t: "Um pouco. Algumas palavras do sertão eu não conhecia, mas entendi pelo contexto.", es: "Un poco. Algunas palabras del sertón no las conocía, pero las entendí por el contexto.", ok: true },
            { t: "Sim, no começo. Mas depois fui me acostumbrando.", es: "Sí, al comienzo. Pero después me fui acostumbrando.", ok: false,
              fix: "«Acostumbrarse» es «acostumar-se» en portugués: «fui me acostumando»." }
          ],
          clave: ["contexto", "palavras", "dicionário"],
          tip: "Inferir el significado por el contexto es una estrategia clave; el diccionario sirve para confirmar la hipótesis." },
        { bot: "Que livro vocês sugerem para o próximo encontro?", es: "¿Qué libro sugieren para el próximo encuentro?",
          opciones: [
            { t: "Que tal um autor colombiano traduzido? Por exemplo, Gabriel García Márquez.", es: "¿Qué tal un autor colombiano traducido? Por ejemplo, Gabriel García Márquez.", ok: true },
            { t: "Sugiro um autor latino-americano de outro país, para a gente comparar com a realidade brasileira.", es: "Sugiero un autor latinoamericano de otro país, para comparar con la realidad brasileña.", ok: true },
            { t: "Sugiro que lemos um autor colombiano.", es: "Sugiero que leamos un autor colombiano.", ok: false,
              fix: "«Sugerir que» pide subjuntivo: «sugiro que a gente leia» o «sugiro que leiamos»." }
          ],
          clave: ["sugiro", "que tal", "autor"],
          tip: "«Que tal…?» sirve para proponer con suavidad: «Que tal ler um autor colombiano?»." },
        { bot: "Ótima ideia! Você pode trazer um trecho marcante para abrir a próxima conversa?", es: "¡Excelente idea! ¿Puede traer un fragmento que lo haya marcado para abrir la próxima conversación?",
          opciones: [
            { t: "Posso, sim. Vou escolher um trecho especial.", es: "Sí, puedo. Voy a escoger un fragmento especial.", ok: true },
            { t: "Com prazer! Vou trazer um trecho curto e uma pergunta para a gente discutir.", es: "¡Con gusto! Voy a traer un fragmento corto y una pregunta para discutir.", ok: true },
            { t: "Com prazer! Vou trazer um trecho e uma pregunta para discutir.", es: "¡Con gusto! Voy a traer un fragmento y una pregunta para discutir.", ok: false,
              fix: "«Pregunta» es «pergunta» en portugués: la r va antes de la g." }
          ],
          clave: ["trecho", "pergunta", "com prazer"],
          tip: "«Trecho» = fragmento de un texto. «Marcante» = que deja huella, memorable." }
      ],
      cierre: { bot: "Combinado! Então nos vemos no próximo encontro. Boa leitura a todos!", es: "¡Listo! Entonces nos vemos en el próximo encuentro. ¡Buena lectura a todos!" },
      vocab: [
        { t: "romance", es: "novela (obra literaria)" },
        { t: "novela", es: "telenovela (falso amigo)" },
        { t: "achar", es: "opinar, parecerle a uno" },
        { t: "personagem", es: "personaje" },
        { t: "cachorro / filhote", es: "perro / cachorro (cría)" },
        { t: "trecho", es: "fragmento" },
        { t: "que tal…?", es: "¿qué tal si…?" },
        { t: "marcante", es: "memorable" }
      ]
    },
    {
      id: "pt-21", titulo: "Mentor de un profesor recién llegado", nivel: "B1",
      tema: "Mentoría a un docente nuevo",
      contexto: "Un profesor brasileño acaba de llegar a CENTEC para enseñar portugués y tú eres su mentor durante el primer mes. Hoy es su primera reunión contigo.",
      rol: "Thiago Ribeiro, 26 años, profesor novato, entusiasta pero inseguro",
      turnos: [
        { bot: "Oi! Me disseram que você vai ser o meu mentor. Confesso que estou um pouco nervoso.", es: "¡Hola! Me dijeron que vas a ser mi mentor. Confieso que estoy un poco nervioso.",
          opciones: [
            { t: "Oi, Thiago! Bem-vindo. É normal ficar nervoso na primeira semana.", es: "¡Hola, Thiago! Bienvenido. Es normal estar nervioso la primera semana.", ok: true },
            { t: "Seja bem-vindo! Todo mundo fica nervoso no começo; eu também fiquei. Vamos caminhar juntos.", es: "¡Bienvenido! Todo el mundo se pone nervioso al comienzo; yo también. Vamos a caminar juntos.", ok: true },
            { t: "Bem-vindo! É normal estar nervioso.", es: "¡Bienvenido! Es normal estar nervioso.", ok: false,
              fix: "«Nervioso» es «nervoso» en portugués, sin i." }
          ],
          clave: ["bem-vindo", "normal", "nervoso"],
          tip: "«Ficar nervoso» = ponerse nervioso. En Brasil es normal empezar la frase con el pronombre: «Me disseram…»." },
        { bot: "O que eu devo priorizar nesta primeira semana?", es: "¿Qué debo priorizar en esta primera semana?",
          opciones: [
            { t: "Conhecer os alunos e aprender os nomes deles.", es: "Conocer a los estudiantes y aprender sus nombres.", ok: true },
            { t: "Primeiro, conhecer os alunos e as rotinas da escola. O conteúdo vem depois, com mais segurança.", es: "Primero, conocer a los estudiantes y las rutinas del colegio. El contenido viene después, con más seguridad.", ok: true },
            { t: "Conhecer os alunos e aprender os nombres.", es: "Conocer a los estudiantes y aprender los nombres.", ok: false,
              fix: "«Nombres» es «nomes» en portugués: «aprender os nomes»." }
          ],
          clave: ["conhecer", "alunos", "rotinas"],
          tip: "Aprender pronto los nombres crea vínculo y facilita el manejo del grupo." },
        { bot: "E sobre o planejamento? Eu fico horas preparando cada aula.", es: "¿Y sobre la planeación? Me paso horas preparando cada clase.",
          opciones: [
            { t: "Use um modelo simples: objetivo, atividade e fechamento.", es: "Usa un formato sencillo: objetivo, actividad y cierre.", ok: true },
            { t: "Vou te mostrar o modelo que eu uso: objetivo, atividade principal, verificação e fechamento. Economiza muito tempo.", es: "Te voy a mostrar el formato que uso: objetivo, actividad principal, verificación y cierre. Ahorra mucho tiempo.", ok: true },
            { t: "Eu te passo a minha plantilla de planejamento.", es: "Te paso mi plantilla de planeación.", ok: false,
              fix: "«Plantilla» se dice «modelo» en portugués. Ojo: «planilha» es una hoja de cálculo." }
          ],
          clave: ["modelo", "objetivo", "fechamento"],
          tip: "«Fechamento» = cierre de la clase. «Planilha» = hoja de cálculo, no plantilla." },
        { bot: "Ontem um aluno me desafiou na frente de todos. Eu não soube o que fazer.", es: "Ayer un estudiante me desafió delante de todos. No supe qué hacer.",
          opciones: [
            { t: "Isso acontece. O melhor é conversar com ele em particular.", es: "Eso pasa. Lo mejor es hablar con él en privado.", ok: true },
            { t: "Acontece com todo mundo. Mantenha a calma na hora e converse com ele depois, em particular, sem plateia.", es: "Le pasa a todo el mundo. Mantén la calma en el momento y habla con él después, en privado, sin público.", ok: true },
            { t: "Acontece. O melhor é falar com ele a solas.", es: "Pasa. Lo mejor es hablar con él a solas.", ok: false,
              fix: "«A solas» es español. En portugués se dice «a sós» o «em particular»." }
          ],
          clave: ["em particular", "calma", "conversar"],
          tip: "Corregir en privado y reconocer en público protege la dignidad del estudiante y la relación." },
        { bot: "Posso assistir a uma aula sua para ver como você faz?", es: "¿Puedo observar una clase tuya para ver cómo lo haces?",
          opciones: [
            { t: "Claro! Venha na quinta, no terceiro horário.", es: "¡Claro! Ven el jueves, a tercera hora.", ok: true },
            { t: "Pode, sim! Depois a gente conversa sobre o que você observou e o que quer experimentar.", es: "¡Sí, claro! Después hablamos de lo que observaste y de lo que quieres probar.", ok: true },
            { t: "Claro! E traga um caderno para tomar apuntes.", es: "¡Claro! Y trae un cuaderno para tomar apuntes.", ok: false,
              fix: "«Apuntes» se dice «anotações»: «para fazer anotações» o simplemente «para anotar»." }
          ],
          clave: ["pode", "observou", "anotações"],
          tip: "«Assistir a uma aula» = asistir a una clase u observarla. También es ver: «assistir a um filme»." },
        { bot: "Obrigado! Mais alguma dica para eu não me esgotar?", es: "¡Gracias! ¿Algún otro consejo para no agotarme?",
          opciones: [
            { t: "Separe um tempo para descansar e não leve todo o trabalho para casa.", es: "Aparta tiempo para descansar y no te lleves todo el trabajo a casa.", ok: true },
            { t: "Cuide de você: defina um horário para parar de corrigir e peça ajuda quando precisar. Ninguém dá conta de tudo sozinho.", es: "Cuídate: define una hora para dejar de corregir y pide ayuda cuando la necesites. Nadie puede con todo solo.", ok: true },
            { t: "Não tenha vergonha de pedir ajuda. Aqui somos um equipo.", es: "No te dé pena pedir ayuda. Aquí somos un equipo.", ok: false,
              fix: "«Equipo» es «equipe» en portugués, y es femenino: «somos uma equipe»." }
          ],
          clave: ["descansar", "pedir ajuda", "equipe"],
          tip: "«Dar conta de» = poder con algo. «Esgotar-se» = agotarse. El bienestar docente también se planifica." }
      ],
      cierre: { bot: "Valeu mesmo! Já estou me sentindo mais seguro. Até quinta!", es: "¡Mil gracias! Ya me siento más seguro. ¡Hasta el jueves!" },
      vocab: [
        { t: "mentor / mentora", es: "mentor / mentora" },
        { t: "planejamento", es: "planeación" },
        { t: "fechamento", es: "cierre (de la clase)" },
        { t: "em particular / a sós", es: "en privado / a solas" },
        { t: "assistir a uma aula", es: "asistir a / observar una clase" },
        { t: "anotações", es: "apuntes" },
        { t: "dar conta de", es: "poder con algo" },
        { t: "equipe", es: "equipo (de personas)" }
      ]
    },
    {
      id: "pt-22", titulo: "Mediar después del recreo", nivel: "B1",
      tema: "Mediar un conflicto entre estudiantes",
      contexto: "En una escuela de Goiânia, una estudiante de 8.º año llega furiosa después del recreo porque un compañero se burló de ella. Tú medias para que hablen y lleguen a un acuerdo.",
      rol: "Vitória, 13 años, dolida y muy enojada",
      turnos: [
        { bot: "Professor, o Pedro é um idiota! Ele riu de mim na frente de todo mundo!", es: "¡Profe, Pedro es un idiota! ¡Se burló de mí delante de todos!",
          opciones: [
            { t: "Vitória, respira. Vamos conversar com calma.", es: "Vitória, respira. Hablemos con calma.", ok: true },
            { t: "Estou vendo que você está com muita raiva. Vamos sentar e você me conta o que aconteceu, tá?", es: "Veo que estás muy enojada. Sentémonos y me cuentas qué pasó, ¿sí?", ok: true },
            { t: "Calma, Vitória. Você está muito enojada.", es: "(Quiso decir: Calma, Vitória. Estás muy enojada).", ok: false,
              fix: "Falso amigo: «enojado» en portugués significa asqueado. Enojado se dice «com raiva», «bravo» o «irritado»." }
          ],
          clave: ["calma", "raiva", "conversar"],
          tip: "Nombrar la emoción («você está com raiva») ayuda a regularla. «Rir de alguém» = burlarse de alguien." },
        { bot: "Eu errei uma resposta e ele disse que eu sou burra. Todo mundo riu.", es: "Me equivoqué en una respuesta y él dijo que soy bruta. Todos se rieron.",
          opciones: [
            { t: "Isso deve ter doído muito.", es: "Eso te debió doler mucho.", ok: true },
            { t: "Que situação chata. Ser chamada de burra na frente da turma machuca, e faz sentido você ficar chateada.", es: "Qué situación tan desagradable. Que te llamen bruta delante del grupo duele, y tiene sentido que estés disgustada.", ok: true },
            { t: "Que chato. Isso deve ter te molestado muito.", es: "(Quiso decir: Qué pena. Eso te debió molestar mucho).", ok: false,
              fix: "Falso amigo grave: «molestar» en portugués se asocia con acoso o abuso sexual. Diga «isso te incomodou» o «isso te machucou»." }
          ],
          clave: ["doído", "machuca", "chateada"],
          tip: "«Chato» = fastidioso; «chateado» = disgustado. Validar la emoción no es darle la razón en todo." },
        { bot: "E agora ele está dizendo que eu empurrei ele no recreio. Mas foi sem querer!", es: "Y ahora él dice que yo lo empujé en el recreo. ¡Pero fue sin querer!",
          opciones: [
            { t: "Vamos ouvir as duas versões, com calma e com respeito.", es: "Vamos a escuchar las dos versiones, con calma y con respeto.", ok: true },
            { t: "Vou conversar com vocês dois juntos. Cada um fala na sua vez, sem ser interrompido, e o outro escuta.", es: "Voy a hablar con ustedes dos juntos. Cada uno habla en su turno, sin interrupciones, y el otro escucha.", ok: true },
            { t: "Vou falar com os dois. Cada um vai ter o seu turno para falar.", es: "Voy a hablar con los dos. Cada uno va a tener su turno para hablar.", ok: false,
              fix: "El turno para hablar es «vez»: «cada um na sua vez». «Turno» es la jornada (manhã, tarde) o el horario de trabajo." }
          ],
          clave: ["vez", "os dois", "ouvir"],
          tip: "«Sem querer» = sin querer, por accidente. «Empurrar» = empujar." },
        { bot: "Tá bom... mas eu não vou pedir desculpa primeiro.", es: "Bueno... pero yo no voy a pedir perdón primero.",
          opciones: [
            { t: "Ninguém precisa pedir desculpa agora. Primeiro, vamos entender o que aconteceu.", es: "Nadie tiene que pedir perdón ahora. Primero entendamos qué pasó.", ok: true },
            { t: "Você não é obrigada. Mas pensa: o que você gostaria que o Pedro entendesse sobre como você se sentiu?", es: "No estás obligada. Pero piensa: ¿qué te gustaría que Pedro entendiera sobre cómo te sentiste?", ok: true },
            { t: "Tudo bem, ninguém te obriga. Mas pensa no que você quer que ele entende.", es: "Está bien, nadie te obliga. Pero piensa en lo que quieres que él entienda.", ok: false,
              fix: "«Querer que» pide subjuntivo, como en español: «o que você quer que ele entenda»." }
          ],
          clave: ["entender", "sentiu", "desculpa"],
          tip: "Las preguntas abiertas («o que você gostaria…?») invitan a pensar en lugar de defenderse." },
        { bot: "Eu queria que ele entendesse que não é legal rir de quem erra.", es: "Quisiera que él entendiera que no está bien burlarse de quien se equivoca.",
          opciones: [
            { t: "Ótimo. Você pode dizer isso a ele com essas palavras.", es: "Muy bien. Se lo puedes decir con esas palabras.", ok: true },
            { t: "Isso é muito maduro. Você pode começar com «eu me senti…», em vez de xingar. Quer tentar?", es: "Eso es muy maduro. Puedes empezar con «yo me sentí…», en lugar de insultar. ¿Quieres intentarlo?", ok: true },
            { t: "Muito bem. Mas tem que falar sem xingar, vale?", es: "Muy bien. Pero tienes que hablar sin insultar, ¿vale?", ok: false,
              fix: "«¿Vale?» es español de España; en portugués «vale» significa «vale la pena» o «tiene valor». Para pedir confirmación se dice «combinado?» o «tá bom?»." }
          ],
          clave: ["eu me senti", "xingar", "dizer"],
          tip: "Los mensajes en primera persona («eu me senti…») bajan la defensividad del otro. «Xingar» = insultar." },
        { bot: "E se ele pedir desculpa, o que eu faço?", es: "¿Y si él pide perdón, qué hago?",
          opciones: [
            { t: "Você pode aceitar e propor um acordo para os dois.", es: "Puedes aceptar y proponer un acuerdo para los dos.", ok: true },
            { t: "Você decide se aceita. E juntos vocês combinam um acordo: por exemplo, ninguém ri do erro de ninguém na turma.", es: "Tú decides si aceptas. Y juntos hacen un acuerdo: por ejemplo, nadie se burla del error de nadie en el grupo.", ok: true },
            { t: "Você pode aceitar e fazer um compromisso com ele.", es: "Puedes aceptar y hacer un acuerdo con él.", ok: false,
              fix: "Para un pacto entre personas lo natural es «um acordo» o el verbo «combinar». «Compromisso» suele ser una cita o una obligación." }
          ],
          clave: ["acordo", "aceitar", "combinam"],
          tip: "Cerrar con un acuerdo concreto y verificable convierte el conflicto en aprendizaje para todo el grupo." }
      ],
      cierre: { bot: "Tá. Vamos lá. Mas fica perto, professor, tá?", es: "Bueno. Vamos. Pero quédese cerca, profe, ¿sí?" },
      vocab: [
        { t: "estar com raiva", es: "estar enojado" },
        { t: "enojado", es: "asqueado (falso amigo)" },
        { t: "chateado", es: "disgustado, molesto" },
        { t: "rir de alguém", es: "burlarse de alguien" },
        { t: "sem querer", es: "sin querer" },
        { t: "cada um na sua vez", es: "cada uno en su turno" },
        { t: "xingar", es: "insultar" },
        { t: "acordo", es: "acuerdo" }
      ]
    },
    {
      id: "pt-23", titulo: "Una semana más, por favor", nivel: "B1",
      tema: "Negociar un plazo",
      contexto: "Haces un semestre de intercambio en una escuela de Vitória (Espírito Santo). La semana cultural retrasó las exposiciones de un grupo y necesitas negociar con la coordinadora la entrega de notas.",
      rol: "Cláudia Martins, coordinadora académica, ocupada y práctica",
      turnos: [
        { bot: "Oi, pode entrar. Tenho só dez minutos. Do que você precisa?", es: "Hola, siga. Tengo solo diez minutos. ¿Qué necesita?",
          opciones: [
            { t: "Obrigado, Cláudia. Quero falar sobre o prazo das notas.", es: "Gracias, Cláudia. Quiero hablar sobre el plazo de las notas.", ok: true },
            { t: "Serei breve. Queria conversar sobre o prazo de entrega das notas e do relatório do projeto.", es: "Seré breve. Quería hablar sobre el plazo de entrega de las notas y del informe del proyecto.", ok: true },
            { t: "Obrigado. Quero falar sobre o plazo do informe.", es: "Gracias. Quiero hablar sobre el plazo del informe.", ok: false,
              fix: "«Plazo» es «prazo» en portugués, y el informe escrito suele llamarse «relatório»." }
          ],
          clave: ["prazo", "notas", "entrega"],
          tip: "«Prazo» = plazo, fecha límite. «Relatório» = informe. «Queria» suena más cortés que «quero»." },
        { bot: "O prazo é sexta-feira. Qual é o problema?", es: "El plazo es el viernes. ¿Cuál es el problema?",
          opciones: [
            { t: "Por causa da semana cultural, a turma B ainda não fez as apresentações.", es: "Por la semana cultural, el grupo B todavía no hizo las exposiciones.", ok: true },
            { t: "A semana cultural ocupou as aulas da turma B, e eles ainda precisam apresentar. Sem isso, a nota não seria justa.", es: "La semana cultural ocupó las clases del grupo B, y todavía tienen que presentar. Sin eso, la nota no sería justa.", ok: true },
            { t: "Por causa da semana cultural, faltan as apresentações da turma B.", es: "Por la semana cultural, faltan las exposiciones del grupo B.", ok: false,
              fix: "«Faltan» es español. En portugués el verbo es «faltar»: «faltam as apresentações da turma B»." }
          ],
          clave: ["semana cultural", "apresentações", "justa"],
          tip: "Explicar la causa con hechos concretos hace que la solicitud suene profesional y no como una excusa." },
        { bot: "Entendo, mas eu preciso das notas para o conselho de classe.", es: "Entiendo, pero necesito las notas para la comisión de evaluación.",
          opciones: [
            { t: "Entendo. Quando vai ser o conselho de classe?", es: "Entiendo. ¿Cuándo va a ser la comisión de evaluación?", ok: true },
            { t: "Entendo perfeitamente. Posso entregar as notas das outras turmas na sexta e só a da turma B depois?", es: "Lo entiendo perfectamente. ¿Puedo entregar las notas de los otros grupos el viernes y solo la del grupo B después?", ok: true },
            { t: "Entendo. Posso entregar as outras notas na sexta e a da turma B después?", es: "Entiendo. ¿Puedo entregar las otras notas el viernes y la del grupo B después?", ok: false,
              fix: "«Después» es español. En portugués se dice «depois»: «e a da turma B depois»." }
          ],
          clave: ["conselho de classe", "entregar", "turma B"],
          tip: "«Conselho de classe» = reunión de docentes que analiza el desempeño de cada grupo al cierre del periodo." },
        { bot: "O conselho é na quarta que vem. Até quando você entregaria a nota da turma B?", es: "La comisión es el próximo miércoles. ¿Hasta cuándo entregaría la nota del grupo B?",
          opciones: [
            { t: "Até segunda-feira de manhã, sem falta.", es: "Hasta el lunes en la mañana, sin falta.", ok: true },
            { t: "Posso entregar na segunda-feira de manhã; assim você tem dois dias para organizar tudo antes do conselho.", es: "Puedo entregar el lunes en la mañana; así usted tiene dos días para organizar todo antes de la comisión.", ok: true },
            { t: "Até o lunes, sem falta.", es: "Hasta el lunes, sin falta.", ok: false,
              fix: "«Lunes» es «segunda-feira» en portugués: «até segunda-feira, sem falta»." }
          ],
          clave: ["segunda-feira", "sem falta", "até"],
          tip: "Proponer una fecha concreta y mostrar el beneficio para la otra persona facilita el «sí»." },
        { bot: "Segunda está bom. Mas e o relatório do projeto?", es: "El lunes está bien. ¿Pero y el informe del proyecto?",
          opciones: [
            { t: "O relatório eu entrego na sexta, como combinado.", es: "El informe lo entrego el viernes, como acordamos.", ok: true },
            { t: "O relatório fica pronto na sexta, como combinado. Só a nota da turma B muda.", es: "El informe queda listo el viernes, como acordamos. Solo cambia la nota del grupo B.", ok: true },
            { t: "O relatório eu entrego na sexta. Isso é seguro.", es: "El informe lo entrego el viernes. Eso es seguro.", ok: false,
              fix: "Para expresar certeza se dice «com certeza». «Seguro» en portugués significa sobre todo «sin peligro» o «póliza de seguro»." }
          ],
          clave: ["como combinado", "sexta", "pronto"],
          tip: "Separar lo que se negocia de lo que se cumple tal como estaba genera confianza." },
        { bot: "Combinado, então. Você me manda isso por e-mail para ficar registrado?", es: "De acuerdo, entonces. ¿Me lo manda por correo para que quede registrado?",
          opciones: [
            { t: "Claro, mando ainda hoje.", es: "Claro, lo mando hoy mismo.", ok: true },
            { t: "Claro. Mando hoje um e-mail resumindo o que combinamos: relatório na sexta e notas da turma B na segunda.", es: "Claro. Hoy le mando un correo resumiendo lo que acordamos: informe el viernes y notas del grupo B el lunes.", ok: true },
            { t: "Claro, te mando um correio hoje.", es: "Claro, te mando un correo hoy.", ok: false,
              fix: "En Brasil el correo electrónico es «e-mail». «Correio» es el servicio postal." }
          ],
          clave: ["e-mail", "ainda hoje", "combinamos"],
          tip: "«Ainda hoje» = hoy mismo. Dejar por escrito lo acordado evita malentendidos." }
      ],
      cierre: { bot: "Perfeito. Obrigada por avisar com antecedência; isso faz toda a diferença.", es: "Perfecto. Gracias por avisar con anticipación; eso hace toda la diferencia." },
      vocab: [
        { t: "prazo", es: "plazo" },
        { t: "relatório", es: "informe" },
        { t: "entregar", es: "entregar" },
        { t: "conselho de classe", es: "comisión de evaluación" },
        { t: "sem falta", es: "sin falta" },
        { t: "com certeza", es: "con seguridad, sin duda" },
        { t: "combinado", es: "acordado, de acuerdo" },
        { t: "ainda hoje", es: "hoy mismo" }
      ]
    },
    {
      id: "pt-24", titulo: "Me equivoqué con tu nota", nivel: "B1",
      tema: "Disculparse y reparar un error",
      contexto: "En un colegio de Santos, un estudiante de 1.º de secundaria te muestra que su nota en el sistema está mal. Revisas y el error fue tuyo: debes disculparte y repararlo.",
      rol: "Henrique, 16 años, molesto pero respetuoso",
      turnos: [
        { bot: "Professor, a minha nota de Física saiu baixa, mas eu acertei quase tudo na prova.", es: "Profe, mi nota de Física salió baja, pero acerté casi todo en el examen.",
          opciones: [
            { t: "Vamos ver juntos a sua prova agora.", es: "Veamos juntos tu examen ahora.", ok: true },
            { t: "Obrigado por vir falar comigo. Vamos conferir a prova e a planilha juntos.", es: "Gracias por venir a hablar conmigo. Revisemos juntos el examen y la hoja de cálculo.", ok: true },
            { t: "Tranquilo, vamos ver. Você trouxe o examen?", es: "Tranquilo, veamos. ¿Trajiste el examen?", ok: false,
              fix: "«Examen» se escribe «exame» en portugués; en la escuela lo más común es «prova»." }
          ],
          clave: ["prova", "conferir", "juntos"],
          tip: "«Prova» = examen escrito. «Acertar» = responder bien; «errar» = equivocarse." },
        { bot: "Aqui está. Olha: eu tirei oito, mas no sistema aparece quatro.", es: "Aquí está. Mire: me saqué ocho, pero en el sistema aparece cuatro.",
          opciones: [
            { t: "Você tem razão. Eu cometi um erro ao passar as notas.", es: "Tienes razón. Cometí un error al pasar las notas.", ok: true },
            { t: "Você tem toda a razão: eu errei ao lançar a nota no sistema. Peço desculpas.", es: "Tienes toda la razón: me equivoqué al registrar la nota en el sistema. Te pido disculpas.", ok: true },
            { t: "Você tem razão. Lo siento muito, foi um erro meu.", es: "Tienes razón. Lo siento mucho, fue un error mío.", ok: false,
              fix: "«Lo siento» es español. En portugués se dice «sinto muito» o «me desculpe»: «sinto muito, foi um erro meu»." }
          ],
          clave: ["razão", "erro", "desculpas"],
          tip: "«Lançar a nota» = registrar la calificación. Reconocer el error sin excusas repara la confianza." },
        { bot: "Mas e agora? Os meus pais já viram a nota e ficaram bravos comigo.", es: "¿Pero y ahora? Mis papás ya vieron la nota y se enojaron conmigo.",
          opciones: [
            { t: "Eu corrijo hoje no sistema e escrevo para os seus pais explicando o erro.", es: "Hoy lo corrijo en el sistema y les escribo a tus papás explicando el error.", ok: true },
            { t: "Vou corrigir agora mesmo e mandar uma mensagem para os seus pais dizendo que o erro foi meu, não seu.", es: "Lo voy a corregir ahora mismo y les voy a mandar un mensaje a tus papás diciendo que el error fue mío, no tuyo.", ok: true },
            { t: "Vou corregir hoje mesmo, não se preocupe.", es: "Lo voy a corregir hoy mismo, no te preocupes.", ok: false,
              fix: "«Corregir» es «corrigir» en portugués: «vou corrigir hoje mesmo»." }
          ],
          clave: ["corrigir", "seus pais", "o erro foi meu"],
          tip: "«Ficar bravo» = enojarse. Reparar significa actuar: corregir y avisar a quien resultó afectado." },
        { bot: "Tá. Mas isso pode ter acontecido com outros alunos também, né?", es: "Bueno. Pero esto también le pudo pasar a otros estudiantes, ¿no?",
          opciones: [
            { t: "É verdade. Vou revisar as notas de toda a turma.", es: "Es verdad. Voy a revisar las notas de todo el grupo.", ok: true },
            { t: "Boa observação. Vou revisar as notas da turma inteira e, a partir de agora, conferir duas vezes antes de publicar.", es: "Buena observación. Voy a revisar las notas de todo el grupo y, de ahora en adelante, verificar dos veces antes de publicar.", ok: true },
            { t: "É verdade. Vou revisar tudo com calma, sem me apurar.", es: "(Quiso decir: Es verdad. Voy a revisar todo con calma, sin apurarme).", ok: false,
              fix: "Falso amigo: «apurar» en portugués es averiguar o verificar. Apurarse se dice «apressar-se» o «correr»: «sem pressa»." }
          ],
          clave: ["revisar", "turma", "conferir"],
          tip: "Una disculpa completa tiene tres partes: reconocer, reparar y evitar que se repita." },
        { bot: "Valeu, professor. Achei que o senhor ia dizer que eu estava errado.", es: "Gracias, profe. Pensé que usted iba a decir que yo estaba equivocado.",
          opciones: [
            { t: "Quando eu erro, também preciso reconhecer.", es: "Cuando me equivoco, también tengo que reconocerlo.", ok: true },
            { t: "Todo mundo erra, inclusive os professores. O importante é reconhecer e consertar. Obrigado por ter vindo com respeito.", es: "Todos nos equivocamos, incluso los profesores. Lo importante es reconocer y arreglar. Gracias por venir con respeto.", ok: true },
            { t: "Todo mundo erra. O importante é reconhecer o erro e arreglar.", es: "Todos nos equivocamos. Lo importante es reconocer el error y arreglarlo.", ok: false,
              fix: "«Arreglar» es «consertar» o «corrigir» en portugués: «reconhecer o erro e consertar»." }
          ],
          clave: ["reconhecer", "consertar", "erra"],
          tip: "Mostrar cómo se repara un error enseña más que cualquier discurso: el error no nos detiene, nos enseña." },
        { bot: "Posso contar isso para os meus pais hoje?", es: "¿Puedo contarles esto a mis papás hoy?",
          opciones: [
            { t: "Pode, sim. E eu mando a mensagem antes do fim do dia.", es: "Sí, claro. Y yo mando el mensaje antes de que termine el día.", ok: true },
            { t: "Claro. E, se eles quiserem conversar comigo, estou à disposição.", es: "Claro. Y si quieren hablar conmigo, estoy a su disposición.", ok: true },
            { t: "Claro. Diga a eles que estou a disposição deles.", es: "Claro. Diles que estoy a su disposición.", ok: false,
              fix: "Lleva acento grave por la contracción a + a: «estou à disposição deles»." }
          ],
          clave: ["pode", "à disposição", "mensagem"],
          tip: "«Estou à disposição» es la fórmula cortés para ofrecer ayuda o una reunión." }
      ],
      cierre: { bot: "Beleza! Obrigado, professor. Até amanhã.", es: "¡Listo! Gracias, profe. Hasta mañana." },
      vocab: [
        { t: "prova", es: "examen" },
        { t: "lançar a nota", es: "registrar la nota" },
        { t: "errar", es: "equivocarse" },
        { t: "sinto muito", es: "lo siento" },
        { t: "pedir desculpas", es: "pedir disculpas" },
        { t: "consertar", es: "arreglar, reparar" },
        { t: "ficar bravo", es: "enojarse" },
        { t: "à disposição", es: "a disposición" }
      ]
    },
    {
      id: "pt-25", titulo: "Ríos de Cali y Manaos: proyecto STEAM", nivel: "B2",
      tema: "Proyecto STEAM con un colega extranjero",
      contexto: "Diseñas con una profesora de Manaos un proyecto STEAM conjunto: estudiantes de Cali y de Manaos investigarán los ríos de sus ciudades. Hoy definen el enfoque en una reunión virtual.",
      rol: "Prof.ª Raquel Nogueira, docente de Física en Manaos, creativa y organizada",
      turnos: [
        { bot: "Que bom finalmente conversar! Eu pensei num projeto sobre a água: os rios das nossas cidades. O que você acha?", es: "¡Qué bueno por fin conversar! Pensé en un proyecto sobre el agua: los ríos de nuestras ciudades. ¿Qué opinas?",
          opciones: [
            { t: "Acho uma ótima ideia. Em Cali, vários rios atravessam a cidade.", es: "Me parece una idea excelente. En Cali, varios ríos atraviesan la ciudad.", ok: true },
            { t: "Adorei! Os alunos poderiam comparar o rio Cali com um igarapé de Manaus.", es: "¡Me encantó! Los estudiantes podrían comparar el río Cali con un igarapé de Manaos.", ok: true },
            { t: "Adorei! E podemos estudar a contaminação do água.", es: "¡Me encantó! Y podemos estudiar la contaminación del agua.", ok: false,
              fix: "«Água» es femenino en portugués: «da água». En español se dice «el agua», pero en portugués siempre «a água»." }
          ],
          clave: ["ótima ideia", "rios", "água"],
          tip: "«Igarapé» es un arroyo amazónico, palabra de origen tupí. «Água» siempre es femenina: «a água»." },
        { bot: "Como a gente poderia integrar as áreas do STEAM de verdade, e não só no papel?", es: "¿Cómo podríamos integrar las áreas STEAM de verdad, y no solo en el papel?",
          opciones: [
            { t: "Ciências para analisar a água, Matemática para os dados e Arte para comunicar os resultados.", es: "Ciencias para analizar el agua, Matemáticas para los datos y Arte para comunicar los resultados.", ok: true },
            { t: "Proponho que cada área entregue um produto necessário: análises em Ciências, gráficos em Matemática, um sensor simples em Tecnologia e uma campanha em Arte.", es: "Propongo que cada área entregue un producto necesario: análisis en Ciencias, gráficas en Matemáticas, un sensor sencillo en Tecnología y una campaña en Arte.", ok: true },
            { t: "Proponho que os alunos fazem medições e depois apresentam os dados em gráficos.", es: "Propongo que los estudiantes hagan mediciones y después presenten los datos en gráficas.", ok: false,
              fix: "«Propor que» pide subjuntivo, igual que en español: «proponho que os alunos façam medições e apresentem os dados»." }
          ],
          clave: ["dados", "gráficos", "integrar"],
          tip: "La integración STEAM es real cuando cada área aporta algo indispensable para resolver el mismo problema." },
        { bot: "Gostei. Mas os nossos horários são diferentes e as turmas não vão poder se encontrar ao vivo sempre.", es: "Me gustó. Pero nuestros horarios son distintos y los grupos no van a poder encontrarse en vivo siempre.",
          opciones: [
            { t: "Podemos trabalhar de forma assíncrona, com um mural compartilhado.", es: "Podemos trabajar de forma asincrónica, con un mural compartido.", ok: true },
            { t: "Podemos marcar poucos encontros ao vivo e, no resto do tempo, trabalhar de forma assíncrona, com vídeos curtos e um mural compartilhado.", es: "Podemos programar pocos encuentros en vivo y, el resto del tiempo, trabajar de forma asincrónica, con videos cortos y un mural compartido.", ok: true },
            { t: "Podemos usar vídeos gravados. Assim ninguém se queda de fora.", es: "Podemos usar videos grabados. Así nadie se queda por fuera.", ok: false,
              fix: "«Quedarse» se dice «ficar»: «assim ninguém fica de fora»." }
          ],
          clave: ["assíncrona", "ao vivo", "compartilhado"],
          tip: "Revise el «fuso horário» (huso horario): Manaos está una hora adelante de Cali." },
        { bot: "E como vamos avaliar? Eu não quero só uma nota final.", es: "¿Y cómo vamos a evaluar? No quiero solo una nota final.",
          opciones: [
            { t: "Podemos usar uma rubrica comum e um diário de bordo de cada grupo.", es: "Podemos usar una rúbrica común y una bitácora por grupo.", ok: true },
            { t: "Sugiro uma avaliação formativa: diário de bordo, autoavaliação e uma rubrica compartilhada que os alunos conheçam desde o início.", es: "Sugiero una evaluación formativa: bitácora, autoevaluación y una rúbrica compartida que los estudiantes conozcan desde el inicio.", ok: true },
            { t: "Podemos acordar uma rubrica comum entre as duas escolas.", es: "(Quiso decir: Podemos acordar una rúbrica común entre los dos colegios).", ok: false,
              fix: "Falso amigo: en Brasil «acordar» se entiende casi siempre como despertarse. Para «acordar algo» diga «combinar» o «definir juntos»: «combinar uma rubrica comum»." }
          ],
          clave: ["avaliação formativa", "diário de bordo", "rubrica"],
          tip: "«Diário de bordo» = bitácora del proyecto: registra hipótesis, decisiones, errores y aprendizajes." },
        { bot: "E o idioma? Os seus alunos falam pouco português, e os meus, pouco espanhol.", es: "¿Y el idioma? Tus estudiantes hablan poco portugués, y los míos, poco español.",
          opciones: [
            { t: "Isso é uma oportunidade: cada turma pode ensinar um pouco da sua língua à outra.", es: "Es una oportunidad: cada grupo puede enseñarle un poco de su lengua al otro.", ok: true },
            { t: "Vejo isso como uma vantagem: grupos mistos, glossários bilíngues feitos pelos próprios alunos e muito apoio visual.", es: "Lo veo como una ventaja: grupos mixtos, glosarios bilingües hechos por los propios estudiantes y mucho apoyo visual.", ok: true },
            { t: "Isso é uma vantagem, sobretudo para os alunos tímidos, que vão ganhar seguridade.", es: "Es una ventaja, sobre todo para los estudiantes tímidos, que van a ganar seguridad.", ok: false,
              fix: "La confianza en uno mismo se dice «segurança»: «vão ganhar segurança». «Seguridade» se usa casi solo en «seguridade social»." }
          ],
          clave: ["oportunidade", "bilíngues", "mistos"],
          tip: "Los glosarios hechos por los estudiantes aprovechan los cognados y alertan sobre los falsos amigos." },
        { bot: "Perfeito. Qual seria o próximo passo concreto?", es: "Perfecto. ¿Cuál sería el siguiente paso concreto?",
          opciones: [
            { t: "Eu escrevo um rascunho do projeto e te mando até sexta.", es: "Yo escribo un borrador del proyecto y te lo mando antes del viernes.", ok: true },
            { t: "Proponho que eu escreva o rascunho dos objetivos e você, o cronograma. Na próxima reunião, a gente ajusta tudo junto.", es: "Propongo que yo escriba el borrador de los objetivos y tú, el cronograma. En la próxima reunión ajustamos todo juntos.", ok: true },
            { t: "Eu escrevo um borrador do projeto e te mando até sexta.", es: "Yo escribo un borrador del proyecto y te lo mando antes del viernes.", ok: false,
              fix: "«Borrador» se dice «rascunho» en portugués: «um rascunho do projeto»." }
          ],
          clave: ["rascunho", "próximo passo", "cronograma"],
          tip: "Cerrar una reunión con responsable, tarea y fecha convierte una buena idea en un plan real." }
      ],
      cierre: { bot: "Combinado! Fico esperando o rascunho. Vai ser um projeto lindo.", es: "¡Listo! Quedo esperando el borrador. Va a ser un proyecto precioso." },
      vocab: [
        { t: "igarapé", es: "arroyo amazónico" },
        { t: "dados", es: "datos" },
        { t: "de forma assíncrona", es: "de forma asincrónica" },
        { t: "ao vivo", es: "en vivo" },
        { t: "fuso horário", es: "huso horario" },
        { t: "diário de bordo", es: "bitácora" },
        { t: "combinar / acordar", es: "acordar / despertarse (falso amigo)" },
        { t: "rascunho", es: "borrador" }
      ]
    },
    {
      id: "pt-26", titulo: "Cali y el Pacífico en Salvador", nivel: "B2",
      tema: "Presentar Cali y la cultura del Pacífico",
      contexto: "En una feria cultural de una escuela de Salvador (Bahía) te piden presentar Cali y la cultura del Pacífico colombiano a un grupo de docentes.",
      rol: "Prof. Jorge Bastos, docente de Historia, curioso por las raíces africanas que comparten Bahía y el Pacífico",
      turnos: [
        { bot: "Seja bem-vindo! Conta pra gente: como é Cali?", es: "¡Bienvenido! Cuéntenos: ¿cómo es Cali?",
          opciones: [
            { t: "Cali é uma cidade alegre e calorosa, conhecida pela salsa.", es: "Cali es una ciudad alegre y cálida, conocida por la salsa.", ok: true },
            { t: "Cali é uma cidade quente, no vale do rio Cauca, muito alegre e que muitos chamam de capital mundial da salsa.", es: "Cali es una ciudad de clima cálido, en el valle del río Cauca, muy alegre y a la que muchos llaman la capital mundial de la salsa.", ok: true },
            { t: "Cali é muito alegre, e as pessoas são muito calientes.", es: "(Quiso decir: Cali es muy alegre y la gente es muy cálida).", ok: false,
              fix: "«Caliente» es español, y aplicado a personas puede sonar sexual. Para la gente diga «calorosas» o «acolhedoras»." }
          ],
          clave: ["calorosa", "salsa", "cidade"],
          tip: "«Caloroso» = cálido, afectuoso (personas). «Quente» = caliente, para el clima: «Cali é quente»." },
        { bot: "E essa tal de cultura do Pacífico? Aqui na Bahia a gente também tem muita influência africana.", es: "¿Y esa tal cultura del Pacífico? Aquí en Bahía también tenemos mucha influencia africana.",
          opciones: [
            { t: "O Pacífico colombiano tem uma forte herança africana, assim como a Bahia.", es: "El Pacífico colombiano tiene una fuerte herencia africana, igual que Bahía.", ok: true },
            { t: "Justamente: a cultura do Pacífico é afro-colombiana, e Cali recebe muita gente dessa região. Acho que temos muito em comum com a Bahia.", es: "Justamente: la cultura del Pacífico es afrocolombiana, y Cali recibe a mucha gente de esa región. Creo que tenemos mucho en común con Bahía.", ok: true },
            { t: "Sim! A cultura do Pacífico tem raízes africanas, igual que a Bahia.", es: "¡Sí! La cultura del Pacífico tiene raíces africanas, igual que Bahía.", ok: false,
              fix: "«Igual que» es español. En portugués: «assim como a Bahia» o «igual à Bahia»." }
          ],
          clave: ["herança africana", "afro-colombiana", "em comum"],
          tip: "«Herança» = herencia; «raízes» = raíces. «Essa tal de…» expresa curiosidad, no desprecio." },
        { bot: "E a música? Qual é o instrumento mais típico?", es: "¿Y la música? ¿Cuál es el instrumento más típico?",
          opciones: [
            { t: "A marimba de chonta, feita com madeira de palmeira.", es: "La marimba de chonta, hecha con madera de palma.", ok: true },
            { t: "A marimba de chonta, com tambores e vozes. As músicas de marimba e os cantos tradicionais do Pacífico Sul colombiano foram reconhecidos pela UNESCO como patrimônio cultural imaterial.", es: "La marimba de chonta, con tambores y voces. Las músicas de marimba y los cantos tradicionales del Pacífico Sur colombiano fueron reconocidos por la UNESCO como patrimonio cultural inmaterial.", ok: true },
            { t: "A marimba de chonta, com tambores e cantos. É lindíssima de escuchar.", es: "La marimba de chonta, con tambores y cantos. Es bellísima de escuchar.", ok: false,
              fix: "«Escuchar» es «escutar» u «ouvir» en portugués: «é lindíssima de ouvir»." }
          ],
          clave: ["marimba", "tambores", "patrimônio"],
          tip: "«Patrimônio imaterial» = patrimonio inmaterial. En Brasil «patrimônio» lleva tilde circunfleja." },
        { bot: "Tem algum festival onde dá para conhecer essa música?", es: "¿Hay algún festival donde se pueda conocer esa música?",
          opciones: [
            { t: "Sim, o Festival Petronio Álvarez, em Cali, dedicado à música do Pacífico.", es: "Sí, el Festival Petronio Álvarez, en Cali, dedicado a la música del Pacífico.", ok: true },
            { t: "O mais importante é o Festival Petronio Álvarez, que acontece todo ano em Cali e reúne grupos de toda a região do Pacífico.", es: "El más importante es el Festival Petronio Álvarez, que se hace cada año en Cali y reúne grupos de toda la región del Pacífico.", ok: true },
            { t: "Sim, o Petronio Álvarez. Vale muito a pena: a gente dança toda la noche.", es: "Sí, el Petronio Álvarez. Vale mucho la pena: uno baila toda la noche.", ok: false,
              fix: "«Toda la noche» es español. En portugués: «a noite toda» o «a noite inteira». Y para bailar lo cotidiano en Brasil es «dançar»." }
          ],
          clave: ["festival", "Petronio Álvarez", "todo ano"],
          tip: "«Vale a pena» = vale la pena. «Baile» sí se usa para la fiesta, pero el verbo es «dançar»." },
        { bot: "E a comida? Estou curioso.", es: "¿Y la comida? Tengo curiosidad.",
          opciones: [
            { t: "Tem muito peixe, coco e banana-da-terra. E o chontaduro, o fruto de uma palmeira.", es: "Hay mucho pescado, coco y plátano. Y el chontaduro, el fruto de una palma.", ok: true },
            { t: "No Pacífico se come muito peixe com leite de coco, e em Cali é muito comum comer chontaduro, que aqui vocês chamam de pupunha.", es: "En el Pacífico se come mucho pescado con leche de coco, y en Cali es muy común comer chontaduro, que aquí ustedes llaman pupunha.", ok: true },
            { t: "Muito pescado com coco. E o chontaduro é uma fruta muito rica.", es: "Mucho pescado con coco. Y el chontaduro es una fruta muy rica.", ok: false,
              fix: "Para comida se dice «gostosa» o «deliciosa»; «rica» en portugués se refiere sobre todo al dinero. Y el pescado como plato es «peixe»." }
          ],
          clave: ["peixe", "coco", "pupunha"],
          tip: "El chontaduro colombiano es la «pupunha» brasileña: la misma palma, cultivada también en la Amazonía." },
        { bot: "Que riqueza! E como você trabalharia essa cultura com os alunos?", es: "¡Qué riqueza! ¿Y cómo trabajaría esa cultura con los estudiantes?",
          opciones: [
            { t: "Com projetos de música, culinária e história afro-colombiana.", es: "Con proyectos de música, cocina e historia afrocolombiana.", ok: true },
            { t: "Eu faria um projeto comparando a Bahia e o Pacífico: ritmos, receitas e histórias de resistência, com os alunos entrevistando as próprias famílias.", es: "Haría un proyecto comparando Bahía y el Pacífico: ritmos, recetas e historias de resistencia, con los estudiantes entrevistando a sus propias familias.", ok: true },
            { t: "Faria um projeto comparativo, com entrevistas dos alunos aos seus avôs e avós.", es: "(Quiso decir: Haría un proyecto comparativo, con entrevistas de los estudiantes a sus abuelos).", ok: false,
              fix: "Para «abuelos» en general basta «os avós». «Avôs» (ô cerrada) son solo abuelos varones; «avós» (ó abierta), abuelas o abuelos en general." }
          ],
          clave: ["projeto", "famílias", "comparando"],
          tip: "Investigar la propia cultura entrevistando a las familias conecta la escuela con la comunidad." }
      ],
      cierre: { bot: "Que lindo! Quem sabe a gente não faz esse projeto juntos, Salvador e Cali?", es: "¡Qué bonito! ¿Y si hacemos ese proyecto juntos, Salvador y Cali?" },
      vocab: [
        { t: "caloroso / quente", es: "cálido (persona) / caliente (clima)" },
        { t: "herança", es: "herencia" },
        { t: "raízes", es: "raíces" },
        { t: "marimba de chonta", es: "marimba de chonta" },
        { t: "patrimônio imaterial", es: "patrimonio inmaterial" },
        { t: "vale a pena", es: "vale la pena" },
        { t: "pupunha", es: "chontaduro" },
        { t: "os avós", es: "los abuelos" }
      ]
    },
    {
      id: "pt-27", titulo: "Jurado en la feria de ciencias", nivel: "B2",
      tema: "Jurado de feria de ciencias",
      contexto: "Eres jurado en la feria de ciencias de una escuela de Campina Grande. Una estudiante presenta un filtro de agua casero y debes evaluar con rigor y con respeto.",
      rol: "Isabela, 15 años, expositora nerviosa pero bien preparada",
      turnos: [
        { bot: "Boa tarde! O meu projeto é um filtro de água caseiro, feito com areia, carvão e pedrinhas.", es: "¡Buenas tardes! Mi proyecto es un filtro de agua casero, hecho con arena, carbón y piedritas.",
          opciones: [
            { t: "Boa tarde, Isabela! Qual foi a sua pergunta de pesquisa?", es: "¡Buenas tardes, Isabela! ¿Cuál fue tu pregunta de investigación?", ok: true },
            { t: "Boa tarde! Que interessante. Antes de tudo, que problema você queria resolver?", es: "¡Buenas tardes! Qué interesante. Antes que nada, ¿qué problema querías resolver?", ok: true },
            { t: "Boa tarde! Que interesante. Qual era o objetivo?", es: "¡Buenas tardes! Qué interesante. ¿Cuál era el objetivo?", ok: false,
              fix: "En portugués se escribe con doble s: «interessante». Una sola s entre vocales suena como z." }
          ],
          clave: ["pergunta", "problema", "pesquisa"],
          tip: "«Pesquisa» = investigación. «Pergunta de pesquisa» = pregunta de investigación." },
        { bot: "Eu queria saber se dá para limpar a água do córrego perto da minha casa com materiais baratos.", es: "Quería saber si se puede limpiar el agua de la quebrada cerca de mi casa con materiales baratos.",
          opciones: [
            { t: "E qual era a sua hipótese?", es: "¿Y cuál era tu hipótesis?", ok: true },
            { t: "Ótima pergunta, ligada à sua realidade. E o que você esperava que acontecesse?", es: "Excelente pregunta, conectada con tu realidad. ¿Y qué esperabas que pasara?", ok: true },
            { t: "Muito bom. E qual era a sua hipótesis?", es: "Muy bien. ¿Y cuál era tu hipótesis?", ok: false,
              fix: "En portugués es «hipótese»: las palabras en -esis del español terminan en -ese (análise, síntese)." }
          ],
          clave: ["hipótese", "esperava"],
          tip: "«Córrego» = quebrada, arroyo. «Dá para…» = se puede…, muy coloquial y frecuente." },
        { bot: "Eu achava que a água ia sair limpa. E saiu bem mais clara, olha as fotos!", es: "Yo creía que el agua iba a salir limpia. ¡Y salió mucho más clara, mire las fotos!",
          opciones: [
            { t: "A turbidez diminuiu bastante. Mas a água ficou potável?", es: "La turbidez bajó bastante. ¿Pero el agua quedó potable?", ok: true },
            { t: "As fotos mostram que a turbidez caiu. Mas «clara» quer dizer «segura para beber»? Como você poderia verificar isso?", es: "Las fotos muestran que la turbidez bajó. ¿Pero «clara» quiere decir «segura para beber»? ¿Cómo podrías verificarlo?", ok: true },
            { t: "Muito bem! Então a água já está lista para beber.", es: "¡Muy bien! Entonces el agua ya está lista para tomar.", ok: false,
              fix: "Dos problemas: «lista» es español (en portugués, «pronta») y, sobre todo, un filtro casero no garantiza agua potable: los datos no permiten concluir eso." }
          ],
          clave: ["turbidez", "potável", "verificar"],
          tip: "Un buen jurado separa lo que los datos muestran (menos turbidez) de lo que no demuestran (potabilidad)." },
        { bot: "Hum... eu não testei bactérias. O filtro não tira os micróbios?", es: "Mmm... no hice pruebas de bacterias. ¿El filtro no quita los microbios?",
          opciones: [
            { t: "Não necessariamente. Para isso a água precisa ser fervida ou desinfetada.", es: "No necesariamente. Para eso el agua necesita hervirse o desinfectarse.", ok: true },
            { t: "Um filtro de areia e carvão melhora a aparência, mas não garante a remoção de micróbios. Seria preciso ferver ou desinfetar a água, e isso pode entrar nas suas conclusões.", es: "Un filtro de arena y carbón mejora la apariencia, pero no garantiza que se eliminen los microbios. Habría que hervir o desinfectar el agua, y eso puede entrar en tus conclusiones.", ok: true },
            { t: "Não. Para isso tem que hervir a água.", es: "No. Para eso hay que hervir el agua.", ok: false,
              fix: "«Hervir» es «ferver» en portugués: «tem que ferver a água»." }
          ],
          clave: ["ferver", "desinfetar", "micróbios"],
          tip: "Reconocer los límites de un experimento es señal de rigor científico, no de fracaso." },
        { bot: "Então o meu projeto deu errado?", es: "¿Entonces mi proyecto salió mal?",
          opciones: [
            { t: "Não! Você descobriu um limite importante. Isso também é ciência.", es: "¡No! Descubriste un límite importante. Eso también es ciencia.", ok: true },
            { t: "De jeito nenhum. O filtro cumpriu parte do objetivo, e você identificou o que falta. É exatamente isso que um cientista faz.", es: "De ninguna manera. El filtro cumplió parte del objetivo, y tú identificaste lo que falta. Eso es exactamente lo que hace un científico.", ok: true },
            { t: "Não! É um resultado parcial, mas isso não te quita mérito.", es: "¡No! Es un resultado parcial, pero eso no te quita mérito.", ok: false,
              fix: "«Quitar» es «tirar» en portugués: «isso não tira o seu mérito»." }
          ],
          clave: ["ciência", "limite", "descobriu"],
          tip: "«Deu errado» = salió mal; «deu certo» = salió bien. Expresiones muy frecuentes en Brasil." },
        { bot: "Se eu continuar o projeto, o que o senhor sugere?", es: "Si continúo el proyecto, ¿qué me sugiere?",
          opciones: [
            { t: "Repita o teste com mais amostras e analise também as bactérias.", es: "Repite la prueba con más muestras y analiza también las bacterias.", ok: true },
            { t: "Sugiro repetir o experimento com várias amostras, registrar tudo numa tabela e, se possível, pedir apoio a um laboratório para analisar as bactérias.", es: "Te sugiero repetir el experimento con varias muestras, registrar todo en una tabla y, si es posible, pedir apoyo a un laboratorio para analizar las bacterias.", ok: true },
            { t: "Sugiro que você repete o teste com mais muestras.", es: "Te sugiero que repitas la prueba con más muestras.", ok: false,
              fix: "«Sugerir que» pide subjuntivo («que você repita») y «muestras» se dice «amostras»." }
          ],
          clave: ["amostras", "repetir", "laboratório"],
          tip: "«Amostra» = muestra. Repetir mediciones con varias muestras hace más confiables los resultados." }
      ],
      cierre: { bot: "Obrigada pela dica! No ano que vem eu volto com o filtro 2.0!", es: "¡Gracias por el consejo! ¡El próximo año vuelvo con el filtro 2.0!" },
      vocab: [
        { t: "pesquisa", es: "investigación" },
        { t: "hipótese", es: "hipótesis" },
        { t: "córrego", es: "quebrada, arroyo" },
        { t: "turbidez", es: "turbidez" },
        { t: "água potável", es: "agua potable" },
        { t: "ferver", es: "hervir" },
        { t: "amostra", es: "muestra" },
        { t: "dar certo / dar errado", es: "salir bien / salir mal" }
      ]
    },
    {
      id: "pt-28", titulo: "Ajustes razonables para Davi", nivel: "C1",
      tema: "Ajustes razonables para un estudiante con discapacidad",
      contexto: "En un colegio de Porto Alegre, Davi, de 12 años y con baja visión, entra a tu grupo. Su mamá pide una reunión para saber cómo garantizarán que aprenda en igualdad de condiciones.",
      rol: "Dona Sônia Carvalho, mamá de Davi, exigente, bien informada y cansada de promesas",
      turnos: [
        { bot: "Professor, o Davi começa na sua turma na segunda. Eu quero saber como vocês vão garantir que ele aprenda como os outros.", es: "Profesor, Davi empieza en su grupo el lunes. Quiero saber cómo van a garantizar que aprenda como los demás.",
          opciones: [
            { t: "Obrigado por vir, dona Sônia. Quero ouvir a senhora primeiro: o que funciona melhor para o Davi?", es: "Gracias por venir, doña Sônia. Quiero escucharla primero: ¿qué le funciona mejor a Davi?", ok: true },
            { t: "Agradeço muito a sua vinda. Antes de propor qualquer coisa, gostaria de entender, pela sua experiência, o que ajuda o Davi a aprender.", es: "Le agradezco mucho que haya venido. Antes de proponer nada, quisiera entender, desde su experiencia, qué le ayuda a Davi a aprender.", ok: true },
            { t: "Obrigado por vir. A escola tem experiência com alunos com discapacidade.", es: "Gracias por venir. El colegio tiene experiencia con estudiantes con discapacidad.", ok: false,
              fix: "En portugués se dice «deficiência»: «alunos com deficiência» o «pessoas com deficiência». «Discapacidade» no se usa en Brasil." }
          ],
          clave: ["ouvir", "funciona", "Davi"],
          tip: "La familia conoce al estudiante mejor que nadie: empezar escuchando construye confianza y mejores ajustes." },
        { bot: "Ele tem baixa visão. Lê com letra bem ampliada e se cansa rápido olhando para a lousa.", es: "Él tiene baja visión. Lee con letra bien ampliada y se cansa rápido mirando el tablero.",
          opciones: [
            { t: "Então vou entregar o material em fonte ampliada e enviar os slides antes da aula.", es: "Entonces voy a entregar el material en letra ampliada y enviar las diapositivas antes de la clase.", ok: true },
            { t: "Entendi. Posso enviar os materiais com antecedência em formato digital, para ele ampliar como precisar, e deixá-lo perto da lousa, com boa iluminação.", es: "Entiendo. Puedo enviar los materiales con anticipación en formato digital, para que él los amplíe como necesite, y ubicarlo cerca del tablero, con buena iluminación.", ok: true },
            { t: "Entendi. Vou sentá-lo adelante, perto da lousa.", es: "Entiendo. Lo voy a sentar adelante, cerca del tablero.", ok: false,
              fix: "«Adelante» es español. En portugués se dice «na frente» o «nas primeiras carteiras»: «vou sentá-lo na frente»." }
          ],
          clave: ["ampliada", "antecedência", "lousa"],
          tip: "«Lousa» o «quadro» = tablero. Los ajustes parten de necesidades concretas, no del diagnóstico en abstracto." },
        { bot: "E nas provas? No ano passado deram mais tempo, mas a prova vinha com a mesma letra miudinha.", es: "¿Y en los exámenes? El año pasado le dieron más tiempo, pero el examen venía con la misma letra diminuta.",
          opciones: [
            { t: "Nas provas, ele vai ter fonte ampliada e tempo adicional.", es: "En los exámenes va a tener letra ampliada y tiempo adicional.", ok: true },
            { t: "Os ajustes precisam valer também na avaliação: prova ampliada ou digital, tempo adicional e, se ele preferir, leitura em voz alta dos enunciados longos. O objetivo é avaliar o que ele sabe, não a visão dele.", es: "Los ajustes también deben aplicarse en la evaluación: examen ampliado o digital, tiempo adicional y, si él prefiere, lectura en voz alta de los enunciados largos. El objetivo es evaluar lo que sabe, no su visión.", ok: true },
            { t: "Nas provas, vamos assegurar que ele tenha tempo adicional e que a letra está ampliada.", es: "En los exámenes vamos a asegurar que tenga tiempo adicional y que la letra esté ampliada.", ok: false,
              fix: "«Assegurar que» pide subjuntivo en las dos oraciones: «que ele tenha tempo adicional e que a letra esteja ampliada»." }
          ],
          clave: ["fonte ampliada", "tempo adicional", "avaliar"],
          tip: "La Lei Brasileira de Inclusão habla de «adaptações razoáveis»: cambian el acceso, no la exigencia del aprendizaje." },
        { bot: "Eu não quero que ele seja tratado como coitadinho, nem que fique isolado.", es: "No quiero que lo traten como a un pobrecito, ni que quede aislado.",
          opciones: [
            { t: "Concordo. Ele vai participar de todas as atividades com os colegas.", es: "Estoy de acuerdo. Va a participar en todas las actividades con sus compañeros.", ok: true },
            { t: "Concordo plenamente. A ideia é que ele participe de tudo, com os ajustes necessários e sem chamar atenção desnecessária. Inclusão não é favor; é direito.", es: "Estoy totalmente de acuerdo. La idea es que participe en todo, con los ajustes necesarios y sin llamar la atención innecesariamente. La inclusión no es un favor; es un derecho.", ok: true },
            { t: "Concordo. Ninguém aqui vai ter lástima dele.", es: "Estoy de acuerdo. Aquí nadie le va a tener lástima.", ok: false,
              fix: "En Brasil se dice «ter pena de»: «ninguém vai ter pena dele». «Lástima» casi solo aparece en «que lástima!»." }
          ],
          clave: ["participe", "direito", "inclusão"],
          tip: "«Coitadinho» = pobrecito. Evitar la lástima y la sobreprotección también es un ajuste: de actitud." },
        { bot: "E os professores das outras matérias? Não adianta só o senhor fazer isso.", es: "¿Y los profesores de las otras materias? No sirve de nada que solo usted lo haga.",
          opciones: [
            { t: "Tem razão. Vou levar o caso para a reunião de professores esta semana.", es: "Tiene razón. Voy a llevar el caso a la reunión de profesores esta semana.", ok: true },
            { t: "A senhora tem toda a razão. Proponho registrarmos esses ajustes num plano individual, compartilhado com todos os professores e revisado a cada bimestre.", es: "Tiene toda la razón. Propongo que registremos estos ajustes en un plan individual, compartido con todos los profesores y revisado cada bimestre.", ok: true },
            { t: "Tem razão. Vou falar com o resto de professores.", es: "Tiene razón. Voy a hablar con el resto de profesores.", ok: false,
              fix: "La preposición se contrae con el artículo: «com o resto dos professores», o mejor, «com os demais professores»." }
          ],
          clave: ["plano individual", "todos os professores", "revisado"],
          tip: "«Não adianta» = no sirve de nada. En Brasil se habla de PEI: Plano de Ensino Individualizado." },
        { bot: "E se alguma coisa não funcionar?", es: "¿Y si algo no funciona?",
          opciones: [
            { t: "A senhora me avisa e ajustamos juntos.", es: "Usted me avisa y ajustamos juntos.", ok: true },
            { t: "Combinamos um retorno daqui a algumas semanas para avaliar o que funcionou, ouvindo também o Davi. Ele precisa ter voz nesse processo.", es: "Acordemos un seguimiento dentro de unas semanas para evaluar qué funcionó, escuchando también a Davi. Él tiene que tener voz en este proceso.", ok: true },
            { t: "Qualquer coisa, a senhora me avisa e o arranjamos.", es: "(Quiso decir: Cualquier cosa, usted me avisa y lo arreglamos).", ok: false,
              fix: "«Arranjar» en portugués es sobre todo conseguir. Para «lo arreglamos» diga «a gente resolve» o «ajustamos juntos»." }
          ],
          clave: ["ajustamos", "juntos", "voz"],
          tip: "Escuchar al propio estudiante es parte del ajuste: él sabe qué le sirve y qué lo expone." }
      ],
      cierre: { bot: "Assim eu fico mais tranquila. Obrigada por me ouvir, professor.", es: "Así quedo más tranquila. Gracias por escucharme, profesor." },
      vocab: [
        { t: "pessoa com deficiência", es: "persona con discapacidad" },
        { t: "baixa visão", es: "baja visión" },
        { t: "adaptação razoável", es: "ajuste razonable" },
        { t: "fonte ampliada", es: "letra ampliada" },
        { t: "tempo adicional", es: "tiempo adicional" },
        { t: "coitadinho", es: "pobrecito" },
        { t: "não adianta", es: "no sirve de nada" },
        { t: "ter pena de", es: "tenerle lástima a" }
      ]
    },
    {
      id: "pt-29", titulo: "Leer los resultados sin culpar a nadie", nivel: "C1",
      tema: "Reunión de área sobre resultados",
      contexto: "En la reunión del área de Matemáticas de un colegio de São Paulo analizan una evaluación diagnóstica interna. El jefe de área tiene una explicación rápida; tú propones mirar los datos con más cuidado.",
      rol: "Prof. Marcelo Tavares, jefe de área, analítico y algo escéptico",
      turnos: [
        { bot: "Bom, pessoal, chegaram os resultados da avaliação diagnóstica. Em frações, o desempenho caiu em relação ao ano passado. Alguma leitura?", es: "Bueno, colegas, llegaron los resultados de la evaluación diagnóstica. En fracciones, el desempeño bajó con respecto al año pasado. ¿Alguna interpretación?",
          opciones: [
            { t: "Antes de interpretar, precisamos olhar quais questões os alunos erraram.", es: "Antes de interpretar, tenemos que mirar qué preguntas fallaron los estudiantes.", ok: true },
            { t: "Eu sugeriria olharmos os itens um a um: uma queda geral pode esconder um problema bem específico.", es: "Yo sugeriría que miremos los ítems uno por uno: una caída general puede esconder un problema muy específico.", ok: true },
            { t: "Antes de interpretar, hay que ver quais questões eles erraram.", es: "Antes de interpretar, hay que ver qué preguntas fallaron.", ok: false,
              fix: "«Hay que» es español. En Brasil se dice «é preciso» o «temos que»: «é preciso ver quais questões…»." }
          ],
          clave: ["itens", "questões", "erraram"],
          tip: "«Questão» = pregunta de una prueba. «Leitura» aquí significa interpretación de los datos." },
        { bot: "Pode ser. Mas eu acho que o problema é que os alunos não estudam mais.", es: "Puede ser. Pero yo creo que el problema es que los estudiantes ya no estudian.",
          opciones: [
            { t: "Talvez, mas os dados não mostram isso diretamente.", es: "Tal vez, pero los datos no muestran eso directamente.", ok: true },
            { t: "Entendo a hipótese, mas proponho testá-la antes de concluirmos. Se os erros se concentram num tipo de questão, a causa pode estar na forma como ensinamos o tema.", es: "Entiendo la hipótesis, pero propongo ponerla a prueba antes de concluir. Si los errores se concentran en un tipo de pregunta, la causa puede estar en cómo enseñamos el tema.", ok: true },
            { t: "Pode ser, mas não podemos culpar os alunos sem evidências, por suposto.", es: "Puede ser, pero no podemos culpar a los estudiantes sin evidencia, por supuesto.", ok: false,
              fix: "«Por supuesto» se dice «é claro» o «com certeza». «Por suposto» no existe en portugués." }
          ],
          clave: ["hipótese", "dados", "evidências"],
          tip: "Pasar de «no estudian» a «qué patrón muestran los errores» es el núcleo del análisis pedagógico." },
        { bot: "Tá, olhando os itens: a maioria errou as questões de comparar frações com denominadores diferentes.", es: "Bueno, mirando los ítems: la mayoría falló las preguntas de comparar fracciones con denominadores distintos.",
          opciones: [
            { t: "Então é um problema conceitual, não só de cálculo.", es: "Entonces es un problema conceptual, no solo de cálculo.", ok: true },
            { t: "Isso sugere uma concepção equivocada clássica: achar que 1/8 é maior que 1/6 porque 8 é maior que 6. É conceitual, não falta de esforço.", es: "Eso sugiere una concepción errónea clásica: creer que 1/8 es mayor que 1/6 porque 8 es mayor que 6. Es conceptual, no falta de esfuerzo.", ok: true },
            { t: "Então os alunos acham que a fração com o denominador mais grande é a maior.", es: "Entonces los estudiantes creen que la fracción con el denominador más grande es la mayor.", ok: false,
              fix: "En portugués «mais grande» es incorrecto: se dice «maior». «A fração com o denominador maior»." }
          ],
          clave: ["conceitual", "denominador", "comparar"],
          tip: "Identificar la concepción errónea exacta permite diseñar una intervención precisa, no un repaso general." },
        { bot: "E o que você propõe? Não temos tempo para refazer o bimestre inteiro.", es: "¿Y qué propone? No tenemos tiempo para rehacer todo el bimestre.",
          opciones: [
            { t: "Uma intervenção curta, focada em comparar frações com material concreto e reta numérica.", es: "Una intervención corta, enfocada en comparar fracciones con material concreto y recta numérica.", ok: true },
            { t: "Proponho uma sequência curta, com tiras de frações e a reta numérica, intercalada com o conteúdo atual. Não é refazer o bimestre; é atacar o ponto exato.", es: "Propongo una secuencia corta, con tiras de fracciones y la recta numérica, intercalada con el contenido actual. No es rehacer el bimestre; es atacar el punto exacto.", ok: true },
            { t: "Proponho umas aulas com material concreto, sem que isso significa atrasar o programa.", es: "Propongo unas clases con material concreto, sin que eso signifique atrasar el programa.", ok: false,
              fix: "«Sem que» exige subjuntivo, como en español: «sem que isso signifique atrasar o programa»." }
          ],
          clave: ["reta numérica", "intervenção", "material concreto"],
          tip: "«Reta numérica» = recta numérica. Intercalar la práctica con otros temas favorece la retención a largo plazo." },
        { bot: "E como vamos saber se funcionou?", es: "¿Y cómo vamos a saber si funcionó?",
          opciones: [
            { t: "Aplicando itens parecidos antes e depois da intervenção.", es: "Aplicando ítems parecidos antes y después de la intervención.", ok: true },
            { t: "Definimos agora o critério: itens equivalentes antes e depois, comparados turma por turma. Se não houver melhora, revemos a estratégia, sem procurar culpados.", es: "Definamos ahora el criterio: ítems equivalentes antes y después, comparados grupo por grupo. Si no hay mejora, revisamos la estrategia, sin buscar culpables.", ok: true },
            { t: "Teríamos que tomar dados antes e depois da intervenção.", es: "Tendríamos que tomar datos antes y después de la intervención.", ok: false,
              fix: "«Tomar datos» es un calco: en portugués se dice «coletar dados» o «levantar dados»." }
          ],
          clave: ["antes e depois", "critério", "comparados"],
          tip: "Definir antes cómo se medirá el éxito evita leer los datos según lo que queremos ver." },
        { bot: "Ok, me convenceu. Você pode coordenar essa proposta e trazer na próxima reunião?", es: "Bueno, me convenció. ¿Puede coordinar esa propuesta y traerla a la próxima reunión?",
          opciones: [
            { t: "Posso, sim. Trago a sequência e os itens na próxima reunião.", es: "Sí, puedo. Traigo la secuencia y los ítems a la próxima reunión.", ok: true },
            { t: "Com prazer. Trago um rascunho da sequência e dos itens, e peço que cada colega revise antes de aplicarmos.", es: "Con gusto. Traigo un borrador de la secuencia y de los ítems, y pido que cada colega lo revise antes de aplicarlo.", ok: true },
            { t: "Com prazer. Elaboro a proposta e trago na próxima junta.", es: "Con gusto. Elaboro la propuesta y la traigo a la próxima reunión.", ok: false,
              fix: "«Junta» no se usa para una reunión de trabajo en Brasil: diga «na próxima reunião»." }
          ],
          clave: ["próxima reunião", "proposta", "revise"],
          tip: "Pedir revisión a los colegas antes de aplicar mejora el material y reparte la responsabilidad." }
      ],
      cierre: { bot: "Fechado. Obrigado por trazer essa outra leitura dos dados; foi uma discussão produtiva.", es: "Trato hecho. Gracias por traer esa otra lectura de los datos; fue una discusión productiva." },
      vocab: [
        { t: "avaliação diagnóstica", es: "evaluación diagnóstica" },
        { t: "desempenho", es: "desempeño" },
        { t: "questão / item", es: "pregunta / ítem" },
        { t: "concepção equivocada", es: "concepción errónea" },
        { t: "reta numérica", es: "recta numérica" },
        { t: "coletar dados", es: "recolectar datos" },
        { t: "é claro / com certeza", es: "por supuesto" },
        { t: "fechado!", es: "¡trato hecho!" }
      ]
    },
    {
      id: "pt-30", titulo: "Entrevista para el intercambio docente", nivel: "C1",
      tema: "Entrevista para intercambio docente",
      contexto: "Llegaste a la entrevista final de un programa de intercambio docente de un semestre en Brasil. El comité evalúa tu motivación, tu reflexión profesional y tu portugués.",
      rol: "Prof.ª Dra. Lúcia Andrade, presidenta del comité de selección, exigente y cordial",
      turnos: [
        { bot: "Boa tarde. Para começar, por que você se candidatou a este programa de intercâmbio?", es: "Buenas tardes. Para empezar, ¿por qué se postuló a este programa de intercambio?",
          opciones: [
            { t: "Porque quero conhecer outras práticas pedagógicas e levá-las para a minha escola.", es: "Porque quiero conocer otras prácticas pedagógicas y llevarlas a mi colegio.", ok: true },
            { t: "Porque acredito que a formação docente se aprofunda quando saímos da zona de conforto. Quero observar como as escolas brasileiras trabalham e adaptar o que for pertinente à realidade de Cali.", es: "Porque creo que la formación docente se profundiza cuando salimos de la zona de confort. Quiero observar cómo trabajan los colegios brasileños y adaptar lo que sea pertinente a la realidad de Cali.", ok: true },
            { t: "Porque quero conhecer outras práticas e aportar à minha escola.", es: "Porque quiero conocer otras prácticas y aportarle a mi colegio.", ok: false,
              fix: "Falso amigo: «aportar» en portugués es llegar a puerto. Diga «contribuir com» o «levar para a minha escola»." }
          ],
          clave: ["práticas", "contribuir", "escola"],
          tip: "«O que for pertinente»: futuro de subjuntivo, propio de un registro cuidado. «Candidatar-se» = postularse." },
        { bot: "O que você considera o seu maior ponto forte como professor?", es: "¿Qué considera su mayor fortaleza como profesor?",
          opciones: [
            { t: "A capacidade de transformar o erro em oportunidade de aprendizagem.", es: "La capacidad de convertir el error en oportunidad de aprendizaje.", ok: true },
            { t: "Diria que é criar um clima em que os alunos se sintam seguros para errar. No CENTEC trabalhamos com a ideia de que o erro nos ensina e nos fortalece.", es: "Diría que es crear un clima en el que los estudiantes se sientan seguros para equivocarse. En CENTEC trabajamos con la idea de que el error nos enseña y nos fortalece.", ok: true },
            { t: "Sou muito responsável: nunca falto as aulas.", es: "Soy muy responsable: nunca falto a clases.", ok: false,
              fix: "«Faltar» rige «a», que se une al artículo «as»: «nunca falto às aulas», con acento grave." }
          ],
          clave: ["ponto forte", "erro", "clima"],
          tip: "Responda con una fortaleza y un ejemplo concreto; los adjetivos solos («responsável») convencen poco." },
        { bot: "E um ponto fraco?", es: "¿Y una debilidad?",
          opciones: [
            { t: "Às vezes tenho dificuldade de delegar, mas estou aprendendo a confiar mais na equipe.", es: "A veces me cuesta delegar, pero estoy aprendiendo a confiar más en el equipo.", ok: true },
            { t: "Costumo querer abraçar coisas demais. Tenho aprendido a priorizar: hoje planejo por objetivos e digo «não» com mais tranquilidade.", es: "Suelo querer abarcar demasiadas cosas. He ido aprendiendo a priorizar: hoy planeo por objetivos y digo «no» con más tranquilidad.", ok: true },
            { t: "Às vezes sou perfeccionista e me cuesta delegar.", es: "A veces soy perfeccionista y me cuesta delegar.", ok: false,
              fix: "«Me cuesta» es español. En portugués lo natural es «tenho dificuldade de delegar»." }
          ],
          clave: ["dificuldade", "delegar", "aprendendo"],
          tip: "«Tenho aprendido» indica algo que se repite y continúa hasta hoy, no una acción terminada." },
        { bot: "Como você pretende compartilhar o que aprender aqui quando voltar para a Colômbia?", es: "¿Cómo piensa compartir lo que aprenda aquí cuando vuelva a Colombia?",
          opciones: [
            { t: "Vou organizar oficinas para os colegas da minha escola.", es: "Voy a organizar talleres para los colegas de mi colegio.", ok: true },
            { t: "Pretendo criar um ciclo de oficinas para docentes e documentar as práticas num repositório aberto, para que outras escolas de Cali também se beneficiem.", es: "Pienso crear un ciclo de talleres para docentes y documentar las prácticas en un repositorio abierto, para que otros colegios de Cali también se beneficien.", ok: true },
            { t: "Vou organizar talleres para os meus colegas.", es: "Voy a organizar talleres para mis colegas.", ok: false,
              fix: "«Taller» se dice «oficina» en portugués. Y la oficina de trabajo es «escritório»." }
          ],
          clave: ["oficinas", "compartilhar", "colegas"],
          tip: "Falso amigo doble: «oficina» = taller; «escritório» = oficina." },
        { bot: "Suponha que, no meio do semestre, você perceba que a escola anfitriã tem uma visão pedagógica muito diferente da sua. O que faria?", es: "Suponga que, a mitad del semestre, se da cuenta de que el colegio anfitrión tiene una visión pedagógica muy distinta de la suya. ¿Qué haría?",
          opciones: [
            { t: "Procuraria entender as razões antes de julgar.", es: "Trataría de entender las razones antes de juzgar.", ok: true },
            { t: "Primeiro, procuraria entender o contexto por trás dessa visão; o intercâmbio existe justamente para isso. Depois, proporia um diálogo respeitoso, sem impor o meu modelo.", es: "Primero, trataría de entender el contexto detrás de esa visión; el intercambio existe justamente para eso. Después, propondría un diálogo respetuoso, sin imponer mi modelo.", ok: true },
            { t: "Trataria de entender o contexto antes de criticar.", es: "Trataría de entender el contexto antes de criticar.", ok: false,
              fix: "«Tratar de» + infinitivo (intentar) es un calco del español; en portugués se dice «procurar» o «tentar»: «procuraria entender»." }
          ],
          clave: ["entender", "contexto", "diálogo"],
          tip: "El condicional (faria, procuraria, proporia) es clave para responder preguntas hipotéticas." },
        { bot: "Uma última questão: o programa exige um relatório final. Você se sente preparado para escrever em português acadêmico?", es: "Una última pregunta: el programa exige un informe final. ¿Se siente preparado para escribir en portugués académico?",
          opciones: [
            { t: "Sim. Estou estudando escrita acadêmica e vou pedir revisão quando precisar.", es: "Sí. Estoy estudiando escritura académica y voy a pedir revisión cuando lo necesite.", ok: true },
            { t: "Sinto-me preparado, mas reconheço que ainda tenho o que aprender. Por isso, já faço um curso de escrita acadêmica e pretendo pedir a um colega que revise o texto antes da entrega.", es: "Me siento preparado, pero reconozco que todavía tengo cosas por aprender. Por eso ya hago un curso de escritura académica y pienso pedirle a un colega que revise el texto antes de la entrega.", ok: true },
            { t: "Sim, embora ainda cometo alguns erros.", es: "Sí, aunque todavía cometo algunos errores.", ok: false,
              fix: "«Embora» exige subjuntivo: «embora ainda cometa alguns erros». También se puede decir «apesar de ainda cometer alguns erros»." }
          ],
          clave: ["escrita acadêmica", "revisão", "preparado"],
          tip: "Reconocer un límite y mostrar un plan para superarlo transmite madurez profesional." },
        { bot: "Agradecemos a sua participação. Tem alguma pergunta para o comitê?", es: "Le agradecemos su participación. ¿Tiene alguna pregunta para el comité?",
          opciones: [
            { t: "Sim: quando será divulgado o resultado da seleção?", es: "Sí: ¿cuándo se publicará el resultado de la selección?", ok: true },
            { t: "Tenho, sim: como os bolsistas costumam ser acompanhados pela escola anfitriã durante o semestre?", es: "Sí: ¿cómo suele acompañar el colegio anfitrión a los becarios durante el semestre?", ok: true },
            { t: "Sim: quando vão publicar a lista de becados?", es: "Sí: ¿cuándo van a publicar la lista de becados?", ok: false,
              fix: "Falso amigo: el becario es «bolsista» y la beca, «bolsa». «Beca» en portugués es la toga de graduación." }
          ],
          clave: ["resultado", "bolsistas", "divulgado"],
          tip: "Cerrar con una pregunta sobre el acompañamiento muestra interés genuino por aprender, no solo por el beneficio." }
      ],
      cierre: { bot: "Excelente pergunta. O resultado será divulgado no site do programa. Boa sorte!", es: "Excelente pregunta. El resultado se publicará en el sitio web del programa. ¡Buena suerte!" },
      vocab: [
        { t: "candidatar-se", es: "postularse" },
        { t: "ponto forte / ponto fraco", es: "fortaleza / debilidad" },
        { t: "oficina", es: "taller (falso amigo)" },
        { t: "escritório", es: "oficina" },
        { t: "aportar", es: "llegar a puerto (falso amigo)" },
        { t: "procurar + infinitivo", es: "tratar de, intentar" },
        { t: "bolsa / bolsista", es: "beca / becario" },
        { t: "relatório final", es: "informe final" }
      ]
    }
  ]
};
