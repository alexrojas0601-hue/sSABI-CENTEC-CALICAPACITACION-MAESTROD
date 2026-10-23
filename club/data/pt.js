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
    }
  ]
};
