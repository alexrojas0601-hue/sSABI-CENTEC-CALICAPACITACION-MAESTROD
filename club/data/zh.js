window.SABI_CLUB = window.SABI_CLUB || {};
window.SABI_CLUB.zh = {
  escenarios: [
    {
      id: "zh-01", titulo: "Primer día en una escuela china", nivel: "A1",
      tema: "Saludo y presentación docente",
      contexto: "Llegas a una escuela de Shanghái para un intercambio docente. La directora académica te recibe y quiere conocerte.",
      rol: "王老师 (Wáng lǎoshī), directora académica, amable y formal",
      turnos: [
        { bot: "你好！欢迎来到我们学校。我姓王。你叫什么名字？", py: "Nǐ hǎo! Huānyíng lái dào wǒmen xuéxiào. Wǒ xìng Wáng. Nǐ jiào shénme míngzi?", es: "¡Hola! Bienvenido(a) a nuestra escuela. Mi apellido es Wang. ¿Cómo te llamas?",
          opciones: [
            { t: "王老师好！我叫卡洛斯。", py: "Wáng lǎoshī hǎo! Wǒ jiào Kǎluòsī.", es: "¡Hola, profesora Wang! Me llamo Carlos.", ok: true },
            { t: "您好，王老师！我叫卡洛斯，很高兴认识您。", py: "Nín hǎo, Wáng lǎoshī! Wǒ jiào Kǎluòsī, hěn gāoxìng rènshi nín.", es: "¡Buenas, profesora Wang! Me llamo Carlos, mucho gusto en conocerla.", ok: true },
            { t: "你好！我是叫卡洛斯。", py: "Nǐ hǎo! Wǒ shì jiào Kǎluòsī.", es: "¡Hola! Me llamo Carlos.", ok: false,
              fix: "No se combinan 是 y 叫. Diga «我叫卡洛斯» (me llamo Carlos) o «我是卡洛斯» (soy Carlos)." }
          ],
          clave: ["王老师", "我叫", "认识"],
          tip: "Con superiores o personas mayores use 您 (nín), la forma respetuosa de 你 (nǐ)." },
        { bot: "你是哪国人？", py: "Nǐ shì nǎ guó rén?", es: "¿De qué país eres?",
          opciones: [
            { t: "我是哥伦比亚人。", py: "Wǒ shì Gēlúnbǐyà rén.", es: "Soy colombiano.", ok: true },
            { t: "我是哥伦比亚人，我来自卡利。", py: "Wǒ shì Gēlúnbǐyà rén, wǒ láizì Kǎlì.", es: "Soy colombiano, vengo de Cali.", ok: true },
            { t: "我是从哥伦比亚。", py: "Wǒ shì cóng Gēlúnbǐyà.", es: "Soy de Colombia.", ok: false,
              fix: "La nacionalidad se dice país + 人: «我是哥伦比亚人». 从 necesita un verbo: «我从哥伦比亚来»." }
          ],
          clave: ["哥伦比亚人", "卡利"],
          tip: "País + 人 (rén) = nacionalidad: 中国人 (chino), 哥伦比亚人 (colombiano)." },
        { bot: "你教什么？", py: "Nǐ jiāo shénme?", es: "¿Qué enseñas?",
          opciones: [
            { t: "我教数学。", py: "Wǒ jiāo shùxué.", es: "Enseño matemáticas.", ok: true },
            { t: "我是数学老师，教六年级。", py: "Wǒ shì shùxué lǎoshī, jiāo liù niánjí.", es: "Soy profesor de matemáticas, enseño en sexto grado.", ok: true },
            { t: "我是一个老师数学。", py: "Wǒ shì yí ge lǎoshī shùxué.", es: "Soy un profesor de matemáticas.", ok: false,
              fix: "En chino el modificador va antes del sustantivo: «数学老师» (profesor de matemáticas). Con profesiones se suele omitir 一个." }
          ],
          clave: ["教数学", "数学老师", "教"],
          tip: "La x de «xué» es una «s» suave con la punta de la lengua detrás de los dientes de abajo." },
        { bot: "你的学生几岁？", py: "Nǐ de xuésheng jǐ suì?", es: "¿Cuántos años tienen tus estudiantes?",
          opciones: [
            { t: "他们十一岁。", py: "Tāmen shíyī suì.", es: "Tienen once años.", ok: true },
            { t: "他们十一二岁。", py: "Tāmen shíyī-èr suì.", es: "Tienen once o doce años.", ok: true },
            { t: "他们有十一岁。", py: "Tāmen yǒu shíyī suì.", es: "Tienen once años.", ok: false,
              fix: "La edad se dice sin verbo: «他们十一岁». No se usa 有 (tener) como en «tienen once años»." }
          ],
          clave: ["他们十一", "十一二"],
          tip: "Dos números seguidos indican una aproximación: 十一二岁 = once o doce años." },
        { bot: "你觉得我们学校怎么样？", py: "Nǐ juéde wǒmen xuéxiào zěnmeyàng?", es: "¿Qué te parece nuestra escuela?",
          opciones: [
            { t: "很漂亮！", py: "Hěn piàoliang!", es: "¡Muy bonita!", ok: true },
            { t: "我觉得学校很大，也很漂亮。", py: "Wǒ juéde xuéxiào hěn dà, yě hěn piàoliang.", es: "Me parece que la escuela es grande y también muy bonita.", ok: true },
            { t: "学校是很漂亮。", py: "Xuéxiào shì hěn piàoliang.", es: "La escuela es muy bonita.", ok: false,
              fix: "Con adjetivos no se usa 是: «学校很漂亮». 很 hace de enlace entre el sujeto y el adjetivo." }
          ],
          clave: ["漂亮", "很"],
          tip: "觉得 (juéde) = parecer, opinar: «我觉得...» = me parece que..." },
        { bot: "谢谢！来，我带你去看看办公室。", py: "Xièxie! Lái, wǒ dài nǐ qù kànkan bàngōngshì.", es: "¡Gracias! Ven, te llevo a conocer la oficina.",
          opciones: [
            { t: "好的，谢谢王老师！", py: "Hǎo de, xièxie Wáng lǎoshī!", es: "¡Listo, gracias, profesora Wang!", ok: true },
            { t: "太好了！谢谢您！", py: "Tài hǎo le! Xièxie nín!", es: "¡Qué bien! ¡Muchas gracias!", ok: true },
            { t: "好的，谢谢你很多！", py: "Hǎo de, xièxie nǐ hěn duō!", es: "¡Listo, muchas gracias!", ok: false,
              fix: "«Muchas gracias» es «非常感谢» o «太谢谢您了». «谢谢你很多» es una traducción literal incorrecta." }
          ],
          clave: ["谢谢王老师", "谢谢您"],
          tip: "En chino «profesor(a)» se usa como título: apellido + 老师 (王老师). Se dice el apellido primero." }
      ],
      cierre: { bot: "走吧！欢迎你！", py: "Zǒu ba! Huānyíng nǐ!", es: "¡Vamos! ¡Bienvenido(a)!" },
      vocab: [
        { t: "你好", py: "nǐ hǎo", es: "hola" },
        { t: "您", py: "nín", es: "usted" },
        { t: "叫", py: "jiào", es: "llamarse" },
        { t: "哥伦比亚人", py: "Gēlúnbǐyà rén", es: "colombiano(a)" },
        { t: "老师", py: "lǎoshī", es: "profesor(a)" },
        { t: "数学", py: "shùxué", es: "matemáticas" },
        { t: "岁", py: "suì", es: "años (de edad)" },
        { t: "谢谢", py: "xièxie", es: "gracias" }
      ]
    },
    {
      id: "zh-02", titulo: "Instrucciones claras en el aula", nivel: "A1",
      tema: "Instrucciones de clase",
      contexto: "Das una clase en una escuela primaria de Pekín. Un niño te hace preguntas y tú das instrucciones cortas y claras.",
      rol: "小明 (Xiǎomíng), 10 años, curioso y preguntón",
      turnos: [
        { bot: "老师，今天我们做什么？", py: "Lǎoshī, jīntiān wǒmen zuò shénme?", es: "Profe, ¿qué hacemos hoy?",
          opciones: [
            { t: "今天我们读课文。", py: "Jīntiān wǒmen dú kèwén.", es: "Hoy leemos el texto.", ok: true },
            { t: "今天我们先读课文，然后做练习。", py: "Jīntiān wǒmen xiān dú kèwén, ránhòu zuò liànxí.", es: "Hoy primero leemos el texto y después hacemos ejercicios.", ok: true },
            { t: "我们读课文今天。", py: "Wǒmen dú kèwén jīntiān.", es: "Leemos el texto hoy.", ok: false,
              fix: "El tiempo va antes del verbo, nunca al final: «今天我们读课文» o «我们今天读课文»." }
          ],
          clave: ["今天我们", "先读"],
          tip: "Orden básico chino: tiempo + sujeto + verbo + objeto. Igual que «hoy nosotros leemos el texto»." },
        { bot: "要拿书吗？", py: "Yào ná shū ma?", es: "¿Hay que sacar el libro?",
          opciones: [
            { t: "要。请打开书，看第二十页。", py: "Yào. Qǐng dǎkāi shū, kàn dì èrshí yè.", es: "Sí. Abre el libro y mira la página veinte, por favor.", ok: true },
            { t: "要，请翻到第二十页。", py: "Yào, qǐng fān dào dì èrshí yè.", es: "Sí, pasa a la página veinte, por favor.", ok: true },
            { t: "要。请打开书，看页二十。", py: "Yào. Qǐng dǎkāi shū, kàn yè èrshí.", es: "Sí. Abre el libro, página veinte.", ok: false,
              fix: "El número va antes del sustantivo: «第二十页» (página veinte)." }
          ],
          clave: ["第二十页", "翻到"],
          tip: "第 (dì) + número forma ordinales: 第一 (primero), 第二十页 (página veinte)." },
        { bot: "老师，我可以去厕所吗？", py: "Lǎoshī, wǒ kěyǐ qù cèsuǒ ma?", es: "Profe, ¿puedo ir al baño?",
          opciones: [
            { t: "可以，快去快回。", py: "Kěyǐ, kuài qù kuài huí.", es: "Sí, ve y vuelve rápido.", ok: true },
            { t: "可以，不过先做完这个练习，好吗？", py: "Kěyǐ, búguò xiān zuò wán zhège liànxí, hǎo ma?", es: "Sí, pero primero termina este ejercicio, ¿listo?", ok: true },
            { t: "是，你可以。", py: "Shì, nǐ kěyǐ.", es: "Sí, puedes.", ok: false,
              fix: "En chino se responde «sí» repitiendo el verbo de la pregunta: «可以». 是 solo confirma identidades o hechos." }
          ],
          clave: ["可以", "快去快回", "先做完"],
          tip: "Para responder sí o no, repita el verbo: «可以吗？» → «可以» / «不可以»." },
        { bot: "第二题我不懂。", py: "Dì èr tí wǒ bù dǒng.", es: "No entiendo la pregunta dos.",
          opciones: [
            { t: "没关系。先读课文，再找动词。", py: "Méi guānxi. Xiān dú kèwén, zài zhǎo dòngcí.", es: "No pasa nada. Primero lee el texto y luego busca los verbos.", ok: true },
            { t: "我再说一遍：读课文，找出所有的动词。", py: "Wǒ zài shuō yí biàn: dú kèwén, zhǎo chū suǒyǒu de dòngcí.", es: "Lo repito: lee el texto y encuentra todos los verbos.", ok: true },
            { t: "没关系。我说再一遍。", py: "Méi guānxi. Wǒ shuō zài yí biàn.", es: "No pasa nada. Lo digo otra vez.", ok: false,
              fix: "再 (otra vez) va antes del verbo: «我再说一遍»." }
          ],
          clave: ["再", "读", "动词"],
          tip: "先……再…… (xiān... zài...) = primero... después... Perfecto para dar instrucciones por pasos." },
        { bot: "我可以和小红一起做吗？", py: "Wǒ kěyǐ hé Xiǎohóng yìqǐ zuò ma?", es: "¿Puedo hacerlo con Xiaohong?",
          opciones: [
            { t: "可以，两个人一组。", py: "Kěyǐ, liǎng ge rén yì zǔ.", es: "Sí, en grupos de dos.", ok: true },
            { t: "可以，你们一起做，但是要小声说话。", py: "Kěyǐ, nǐmen yìqǐ zuò, dànshì yào xiǎoshēng shuōhuà.", es: "Sí, háganlo juntos, pero hablen bajito.", ok: true },
            { t: "可以，二个人一组。", py: "Kěyǐ, èr ge rén yì zǔ.", es: "Sí, en grupos de dos.", ok: false,
              fix: "Antes de un clasificador se usa 两 (liǎng), no 二: «两个人»." }
          ],
          clave: ["可以", "两个人", "一起"],
          tip: "二 (èr) se usa al contar y en números (二十); 两 (liǎng) antes de clasificadores (两个, 两本)." },
        { bot: "我们有多少时间？", py: "Wǒmen yǒu duōshao shíjiān?", es: "¿Cuánto tiempo tenemos?",
          opciones: [
            { t: "你们有十五分钟。", py: "Nǐmen yǒu shíwǔ fēnzhōng.", es: "Tienen quince minutos.", ok: true },
            { t: "十五分钟。然后我们一起对答案。", py: "Shíwǔ fēnzhōng. Ránhòu wǒmen yìqǐ duì dá'àn.", es: "Quince minutos. Después revisamos las respuestas juntos.", ok: true },
            { t: "你们有十五分。", py: "Nǐmen yǒu shíwǔ fēn.", es: "Tienen quince minutos.", ok: false,
              fix: "Para una duración se dice 分钟: «十五分钟». 分 solo indica la hora (三点十五分) o puntos." }
          ],
          clave: ["分钟", "对答案"],
          tip: "Duración: 分钟 (minutos), 小时 (horas). Hora del reloj: 三点十五分 (las 3:15)." }
      ],
      cierre: { bot: "好的，谢谢老师！我们开始吧！", py: "Hǎo de, xièxie lǎoshī! Wǒmen kāishǐ ba!", es: "¡Listo, gracias, profe! ¡Empecemos!" },
      vocab: [
        { t: "课文", py: "kèwén", es: "texto (de la lección)" },
        { t: "打开", py: "dǎkāi", es: "abrir" },
        { t: "第……页", py: "dì... yè", es: "página ..." },
        { t: "可以", py: "kěyǐ", es: "poder (tener permiso)" },
        { t: "再说一遍", py: "zài shuō yí biàn", es: "decir otra vez" },
        { t: "两个人", py: "liǎng ge rén", es: "dos personas" },
        { t: "分钟", py: "fēnzhōng", es: "minuto(s)" },
        { t: "一起", py: "yìqǐ", es: "juntos" }
      ]
    },
    {
      id: "zh-03", titulo: "Comida en un restaurante de Pekín", nivel: "A1",
      tema: "Viaje y vida cotidiana",
      contexto: "Estás en Pekín por un congreso. Entras a un restaurante de empanaditas chinas (jiaozi) para pedir comida y pagar.",
      rol: "李阿姨 (Lǐ āyí), dueña del restaurante, cariñosa y conversadora",
      turnos: [
        { bot: "欢迎光临！几位？", py: "Huānyíng guānglín! Jǐ wèi?", es: "¡Bienvenido(a)! ¿Cuántas personas?",
          opciones: [
            { t: "一位。", py: "Yí wèi.", es: "Una.", ok: true },
            { t: "就我一个人。", py: "Jiù wǒ yí ge rén.", es: "Solo yo.", ok: true },
            { t: "一个位。", py: "Yí ge wèi.", es: "Una persona.", ok: false,
              fix: "位 ya es un clasificador (respetuoso, para personas): «一位». No se combina con 个." }
          ],
          clave: ["一位", "一个人"],
          tip: "位 (wèi) es el clasificador cortés para personas: 几位？ = ¿cuántas personas?" },
        { bot: "请坐。这是菜单。喝什么？", py: "Qǐng zuò. Zhè shì càidān. Hē shénme?", es: "Siéntese, por favor. Esta es la carta. ¿Qué va a tomar?",
          opciones: [
            { t: "我要一杯茶。", py: "Wǒ yào yì bēi chá.", es: "Quiero un té.", ok: true },
            { t: "请给我一杯绿茶，谢谢。", py: "Qǐng gěi wǒ yì bēi lǜchá, xièxie.", es: "Me da un té verde, por favor, gracias.", ok: true },
            { t: "我要一个茶。", py: "Wǒ yào yí ge chá.", es: "Quiero un té.", ok: false,
              fix: "Las bebidas usan el clasificador 杯 (taza, vaso): «一杯茶»." }
          ],
          clave: ["一杯", "绿茶"],
          tip: "Clasificadores de comida: 杯 (bēi) para bebidas, 碗 (wǎn) para tazones, 盘 (pán) para platos." },
        { bot: "吃什么？我们的饺子很好吃。", py: "Chī shénme? Wǒmen de jiǎozi hěn hǎochī.", es: "¿Qué va a comer? Nuestros jiaozi son muy ricos.",
          opciones: [
            { t: "那我要饺子。", py: "Nà wǒ yào jiǎozi.", es: "Entonces quiero jiaozi.", ok: true },
            { t: "好，我要一盘猪肉饺子。", py: "Hǎo, wǒ yào yì pán zhūròu jiǎozi.", es: "Bueno, quiero un plato de jiaozi de cerdo.", ok: true },
            { t: "我要饺子一盘。", py: "Wǒ yào jiǎozi yì pán.", es: "Quiero un plato de jiaozi.", ok: false,
              fix: "Número + clasificador van antes del sustantivo: «一盘饺子»." }
          ],
          clave: ["那我要", "猪肉饺子"],
          tip: "Orden fijo: número + clasificador + sustantivo: 一盘饺子, 两杯茶." },
        { bot: "你是来旅游的吗？", py: "Nǐ shì lái lǚyóu de ma?", es: "¿Vino de turismo?",
          opciones: [
            { t: "不是，我来开会。", py: "Bú shì, wǒ lái kāihuì.", es: "No, vine a una reunión.", ok: true },
            { t: "不是，我是来参加教育会议的。", py: "Bú shì, wǒ shì lái cānjiā jiàoyù huìyì de.", es: "No, vine a participar en un congreso de educación.", ok: true },
            { t: "没是，我来开会。", py: "Méi shì, wǒ lái kāihuì.", es: "No, vine a una reunión.", ok: false,
              fix: "是 se niega siempre con 不: «不是». 没 niega 有 y acciones pasadas." }
          ],
          clave: ["不是", "开会", "会议"],
          tip: "不 (bù) cambia a 2.º tono antes de un 4.º tono: 不是 se pronuncia «bú shì»." },
        { bot: "饺子来了！小心，很烫。", py: "Jiǎozi lái le! Xiǎoxīn, hěn tàng.", es: "¡Llegaron los jiaozi! Cuidado, están muy calientes.",
          opciones: [
            { t: "谢谢！看起来很好吃。", py: "Xièxie! Kàn qǐlai hěn hǎochī.", es: "¡Gracias! Se ven muy ricos.", ok: true },
            { t: "谢谢阿姨！好香啊！", py: "Xièxie āyí! Hǎo xiāng a!", es: "¡Gracias, señora! ¡Qué rico huele!", ok: true },
            { t: "谢谢！很好喝。", py: "Xièxie! Hěn hǎohē.", es: "¡Gracias! Muy rico.", ok: false,
              fix: "好喝 es para bebidas. Para comida se dice 好吃: «很好吃»." }
          ],
          clave: ["好吃", "好香"],
          tip: "阿姨 (āyí, «tía») es una forma cariñosa y respetuosa de llamar a una señora mayor." },
        { bot: "好吃吗？还要别的吗？", py: "Hǎochī ma? Hái yào bié de ma?", es: "¿Estaba rico? ¿Quiere algo más?",
          opciones: [
            { t: "很好吃！不要了，买单。", py: "Hěn hǎochī! Bú yào le, mǎidān.", es: "¡Muy rico! Nada más, la cuenta.", ok: true },
            { t: "太好吃了！不用了，谢谢。我想结账。", py: "Tài hǎochī le! Bú yòng le, xièxie. Wǒ xiǎng jiézhàng.", es: "¡Delicioso! No, gracias. Quisiera pagar.", ok: true },
            { t: "很好吃！不要了。我付钱多少？", py: "Hěn hǎochī! Bú yào le. Wǒ fù qián duōshao?", es: "¡Muy rico! Nada más. ¿Cuánto pago?", ok: false,
              fix: "Para preguntar el precio: «多少钱？». Para pedir la cuenta: «买单» o «结账»." }
          ],
          clave: ["买单", "结账", "好吃"],
          tip: "En China se paga mucho con el celular (WeChat Pay o Alipay); lleve también algo de efectivo." }
      ],
      cierre: { bot: "一共三十五块。谢谢，欢迎再来！", py: "Yígòng sānshíwǔ kuài. Xièxie, huānyíng zài lái!", es: "Son treinta y cinco yuanes en total. ¡Gracias, vuelva pronto!" },
      vocab: [
        { t: "几位", py: "jǐ wèi", es: "¿cuántas personas?" },
        { t: "菜单", py: "càidān", es: "carta, menú" },
        { t: "一杯茶", py: "yì bēi chá", es: "un té" },
        { t: "饺子", py: "jiǎozi", es: "jiaozi (empanaditas chinas)" },
        { t: "好吃", py: "hǎochī", es: "rico (comida)" },
        { t: "好喝", py: "hǎohē", es: "rico (bebida)" },
        { t: "买单", py: "mǎidān", es: "pedir la cuenta" },
        { t: "多少钱", py: "duōshao qián", es: "¿cuánto cuesta?" }
      ]
    },
    {
      id: "zh-04", titulo: "Café en la sala de profesores", nivel: "A1",
      tema: "Sala de profesores",
      contexto: "Es tu primera semana en una escuela de Cantón. En la sala de profesores, un colega joven te ofrece café y te cuenta de la reunión de la tarde.",
      rol: "张老师 (Zhāng lǎoshī), profesor de inglés, joven y bromista",
      turnos: [
        { bot: "你好！你是新来的老师吧？", py: "Nǐ hǎo! Nǐ shì xīn lái de lǎoshī ba?", es: "¡Hola! Tú eres el profesor nuevo, ¿cierto?",
          opciones: [
            { t: "是的，我是新来的。", py: "Shì de, wǒ shì xīn lái de.", es: "Sí, soy el nuevo.", ok: true },
            { t: "对，我上个星期来的。很高兴认识你！", py: "Duì, wǒ shàng ge xīngqī lái de. Hěn gāoxìng rènshi nǐ!", es: "Sí, llegué la semana pasada. ¡Mucho gusto en conocerte!", ok: true },
            { t: "对，我是新来。", py: "Duì, wǒ shì xīn lái.", es: "Sí, soy el nuevo.", ok: false,
              fix: "Falta 的 al final: «我是新来的» (soy el que acaba de llegar)." }
          ],
          clave: ["新来的", "认识"],
          tip: "吧 (ba) al final convierte la frase en una suposición: «¿cierto?», «¿verdad?»." },
        { bot: "你喝咖啡吗？我们这儿有咖啡机。", py: "Nǐ hē kāfēi ma? Wǒmen zhèr yǒu kāfēijī.", es: "¿Tomas café? Aquí tenemos cafetera.",
          opciones: [
            { t: "喝，谢谢！", py: "Hē, xièxie!", es: "¡Sí, gracias!", ok: true },
            { t: "好啊，我很喜欢喝咖啡。", py: "Hǎo a, wǒ hěn xǐhuan hē kāfēi.", es: "¡Claro! Me gusta mucho el café.", ok: true },
            { t: "好啊，我喜欢咖啡很多。", py: "Hǎo a, wǒ xǐhuan kāfēi hěn duō.", es: "¡Claro! Me gusta mucho el café.", ok: false,
              fix: "El grado va antes del verbo: «我很喜欢咖啡». «很多» detrás del verbo no funciona así." }
          ],
          clave: ["喝", "很喜欢"],
          tip: "很 (hěn) + verbo de sentimiento = «mucho»: 很喜欢 (gustar mucho), 很想去 (tener muchas ganas de ir)." },
        { bot: "你今天有几节课？", py: "Nǐ jīntiān yǒu jǐ jié kè?", es: "¿Cuántas clases tienes hoy?",
          opciones: [
            { t: "我今天有四节课。", py: "Wǒ jīntiān yǒu sì jié kè.", es: "Hoy tengo cuatro clases.", ok: true },
            { t: "四节，上午两节，下午两节。", py: "Sì jié, shàngwǔ liǎng jié, xiàwǔ liǎng jié.", es: "Cuatro: dos en la mañana y dos en la tarde.", ok: true },
            { t: "我今天有四个课。", py: "Wǒ jīntiān yǒu sì ge kè.", es: "Hoy tengo cuatro clases.", ok: false,
              fix: "Las sesiones de clase usan el clasificador 节: «四节课»." }
          ],
          clave: ["节课", "四节"],
          tip: "节 (jié) cuenta sesiones de clase: 一节课 = una clase (de unos 40-45 minutos)." },
        { bot: "下午我们开会，你知道吗？", py: "Xiàwǔ wǒmen kāihuì, nǐ zhīdào ma?", es: "En la tarde tenemos reunión, ¿sabías?",
          opciones: [
            { t: "知道，几点开会？", py: "Zhīdào, jǐ diǎn kāihuì?", es: "Sí, ¿a qué hora es la reunión?", ok: true },
            { t: "我知道。在哪儿开会？", py: "Wǒ zhīdào. Zài nǎr kāihuì?", es: "Sí sé. ¿Dónde es la reunión?", ok: true },
            { t: "知道，开会几点？", py: "Zhīdào, kāihuì jǐ diǎn?", es: "Sí, ¿a qué hora es la reunión?", ok: false,
              fix: "La hora va antes del verbo: «几点开会？»." }
          ],
          clave: ["几点开会", "在哪儿"],
          tip: "Orden chino: tiempo + lugar + acción. «四点在会议室开会» = a las 4 en la sala, reunión." },
        { bot: "四点，在三楼会议室。", py: "Sì diǎn, zài sān lóu huìyìshì.", es: "A las cuatro, en la sala de reuniones del tercer piso.",
          opciones: [
            { t: "好的，谢谢！", py: "Hǎo de, xièxie!", es: "¡Listo, gracias!", ok: true },
            { t: "好，四点我们一起去吧。", py: "Hǎo, sì diǎn wǒmen yìqǐ qù ba.", es: "Bueno, a las cuatro vamos juntos.", ok: true },
            { t: "好，我们去一起四点。", py: "Hǎo, wǒmen qù yìqǐ sì diǎn.", es: "Bueno, vamos juntos a las cuatro.", ok: false,
              fix: "Orden correcto: tiempo + sujeto + 一起 + verbo: «四点我们一起去»." }
          ],
          clave: ["谢谢", "一起去"],
          tip: "一起 (yìqǐ, juntos) va siempre antes del verbo: 一起去, 一起吃饭." },
        { bot: "我要去上课了。待会儿见！", py: "Wǒ yào qù shàngkè le. Dāi huìr jiàn!", es: "Ya me voy a dar clase. ¡Hasta ahora!",
          opciones: [
            { t: "待会儿见！", py: "Dāi huìr jiàn!", es: "¡Hasta ahora!", ok: true },
            { t: "好的，下午见！上课加油！", py: "Hǎo de, xiàwǔ jiàn! Shàngkè jiāyóu!", es: "¡Listo, nos vemos en la tarde! ¡Ánimo con la clase!", ok: true },
            { t: "再见你！", py: "Zàijiàn nǐ!", es: "¡Adiós a ti!", ok: false,
              fix: "再见 no lleva objeto. Diga «再见», «待会儿见» (hasta ahora) o «下午见» (nos vemos en la tarde)." }
          ],
          clave: ["待会儿见", "下午见"],
          tip: "加油 (jiāyóu, literalmente «echar gasolina») = ¡ánimo!, ¡tú puedes!" }
      ],
      cierre: { bot: "回头见！咖啡随便喝！", py: "Huítóu jiàn! Kāfēi suíbiàn hē!", es: "¡Nos vemos! ¡Sírvete café cuando quieras!" },
      vocab: [
        { t: "新来的", py: "xīn lái de", es: "el / la recién llegado(a)" },
        { t: "咖啡", py: "kāfēi", es: "café" },
        { t: "节", py: "jié", es: "clasificador de clases" },
        { t: "开会", py: "kāihuì", es: "tener reunión" },
        { t: "几点", py: "jǐ diǎn", es: "¿a qué hora?" },
        { t: "会议室", py: "huìyìshì", es: "sala de reuniones" },
        { t: "待会儿见", py: "dāi huìr jiàn", es: "hasta ahora" },
        { t: "加油", py: "jiāyóu", es: "¡ánimo!" }
      ]
    },
    {
      id: "zh-05", titulo: "Reunión con un papá preocupado", nivel: "A2",
      tema: "Reunión con familia",
      contexto: "Atiendes al papá de un estudiante de 3.º de primaria en Shenzhen. Las notas del niño bajaron y quieren acordar un plan.",
      rol: "陈先生 (Chén xiānsheng), papá de 乐乐 (Lèle, 9 años), preocupado y muy cortés",
      turnos: [
        { bot: "老师好！对不起，我来晚了。路上堵车。", py: "Lǎoshī hǎo! Duìbuqǐ, wǒ lái wǎn le. Lùshang dǔchē.", es: "¡Buenas, profesor! Perdón, llegué tarde. Había trancón.",
          opciones: [
            { t: "陈先生好！没关系，请坐。", py: "Chén xiānsheng hǎo! Méi guānxi, qǐng zuò.", es: "¡Buenas, señor Chen! No pasa nada, siéntese.", ok: true },
            { t: "没关系！谢谢您来学校。请坐。", py: "Méi guānxi! Xièxie nín lái xuéxiào. Qǐng zuò.", es: "¡No pasa nada! Gracias por venir a la escuela. Siéntese, por favor.", ok: true },
            { t: "先生陈好！没关系，请坐。", py: "Xiānsheng Chén hǎo! Méi guānxi, qǐng zuò.", es: "¡Buenas, señor Chen! No pasa nada, siéntese.", ok: false,
              fix: "En chino el apellido va primero y el título después: «陈先生» (señor Chen)." }
          ],
          clave: ["陈先生", "谢谢您"],
          tip: "Apellido + título: 陈先生 (señor Chen), 王老师 (profesora Wang), 李女士 (señora Li)." },
        { bot: "乐乐最近的成绩不太好，我很担心。", py: "Lèle zuìjìn de chéngjì bú tài hǎo, wǒ hěn dānxīn.", es: "Últimamente las notas de Lele no están muy bien; estoy muy preocupado.",
          opciones: [
            { t: "是的，他数学有点儿退步，但是他很聪明。", py: "Shì de, tā shùxué yǒudiǎnr tuìbù, dànshì tā hěn cōngming.", es: "Sí, bajó un poco en matemáticas, pero es muy inteligente.", ok: true },
            { t: "我明白。别担心，我们一起帮助他。", py: "Wǒ míngbai. Bié dānxīn, wǒmen yìqǐ bāngzhù tā.", es: "Entiendo. No se preocupe, lo ayudamos juntos.", ok: true },
            { t: "是的，他的数学一点儿不好。", py: "Shì de, tā de shùxué yìdiǎnr bù hǎo.", es: "Sí, está un poco mal en matemáticas.", ok: false,
              fix: "«Un poco» + algo negativo se dice con 有点儿 delante: «有点儿不好». 一点儿 va detrás del adjetivo: «好一点儿» (un poco mejor)." }
          ],
          clave: ["有点儿", "聪明", "担心", "帮助"],
          tip: "有点儿 (yǒudiǎnr) + adjetivo suele expresar algo no deseado: 有点儿累 (algo cansado)." },
        { bot: "他在家每天玩手机，玩好几个小时。", py: "Tā zài jiā měitiān wán shǒujī, wán hǎo jǐ ge xiǎoshí.", es: "En la casa juega con el celular todos los días, varias horas.",
          opciones: [
            { t: "可以规定玩手机的时间。", py: "Kěyǐ guīdìng wán shǒujī de shíjiān.", es: "Se puede fijar un horario para el celular.", ok: true },
            { t: "我建议先做作业，再玩手机。", py: "Wǒ jiànyì xiān zuò zuòyè, zài wán shǒujī.", es: "Le sugiero que primero haga la tarea y después use el celular.", ok: true },
            { t: "他应该玩手机少。", py: "Tā yīnggāi wán shǒujī shǎo.", es: "Él debería usar menos el celular.", ok: false,
              fix: "少 (menos) va antes del verbo: «他应该少玩手机»." }
          ],
          clave: ["手机", "作业", "时间"],
          tip: "多 y 少 delante del verbo = hacer más / menos: 多看书 (leer más), 少玩手机 (usar menos el celular)." },
        { bot: "他在学校表现怎么样？", py: "Tā zài xuéxiào biǎoxiàn zěnmeyàng?", es: "¿Cómo se comporta en la escuela?",
          opciones: [
            { t: "他很有礼貌，但是有时候上课说话。", py: "Tā hěn yǒu lǐmào, dànshì yǒu shíhou shàngkè shuōhuà.", es: "Es muy educado, pero a veces habla en clase.", ok: true },
            { t: "总的来说不错，他对同学很友好，就是容易分心。", py: "Zǒng de lái shuō búcuò, tā duì tóngxué hěn yǒuhǎo, jiùshì róngyì fēnxīn.", es: "En general bien; es muy amable con sus compañeros, solo que se distrae fácil.", ok: true },
            { t: "他很有礼貌，但是他说话上课。", py: "Tā hěn yǒu lǐmào, dànshì tā shuōhuà shàngkè.", es: "Es muy educado, pero habla en clase.", ok: false,
              fix: "El momento va antes del verbo: «他上课的时候说话» o «有时候上课说话»." }
          ],
          clave: ["有时候", "上课说话", "分心", "友好"],
          tip: "Empiece con una fortaleza del niño antes de hablar del problema: la familia escucha mejor." },
        { bot: "我在家能做什么？", py: "Wǒ zài jiā néng zuò shénme?", es: "¿Qué puedo hacer yo en la casa?",
          opciones: [
            { t: "您可以每天跟他一起看书二十分钟。", py: "Nín kěyǐ měitiān gēn tā yìqǐ kàn shū èrshí fēnzhōng.", es: "Usted puede leer con él veinte minutos todos los días.", ok: true },
            { t: "如果您每天检查他的作业，跟他一起看书，会很有帮助。", py: "Rúguǒ nín měitiān jiǎnchá tā de zuòyè, gēn tā yìqǐ kàn shū, huì hěn yǒu bāngzhù.", es: "Si usted revisa su tarea todos los días y lee con él, ayudará mucho.", ok: true },
            { t: "您可以看书和他每天。", py: "Nín kěyǐ kàn shū hé tā měitiān.", es: "Usted puede leer con él todos los días.", ok: false,
              fix: "Orden: tiempo + con quién + verbo: «您可以每天和他一起看书»." }
          ],
          clave: ["一起看书", "检查"],
          tip: "La duración va después del verbo: 看书二十分钟 = leer veinte minutos." },
        { bot: "好的，我试试。一个月以后我们再谈，好吗？", py: "Hǎo de, wǒ shìshi. Yí ge yuè yǐhòu wǒmen zài tán, hǎo ma?", es: "Bueno, voy a intentarlo. ¿Hablamos otra vez dentro de un mes?",
          opciones: [
            { t: "好的，下个月十五号见。", py: "Hǎo de, xià ge yuè shíwǔ hào jiàn.", es: "Listo, nos vemos el quince del próximo mes.", ok: true },
            { t: "没问题。我会给您发微信，约一个时间。", py: "Méi wèntí. Wǒ huì gěi nín fā Wēixìn, yuē yí ge shíjiān.", es: "Sin problema. Le escribo por WeChat para acordar una hora.", ok: true },
            { t: "好的，我们见在下个月。", py: "Hǎo de, wǒmen jiàn zài xià ge yuè.", es: "Listo, nos vemos el próximo mes.", ok: false,
              fix: "El tiempo va antes del verbo y sin 在: «我们下个月见»." }
          ],
          clave: ["十五号", "约一个时间"],
          tip: "微信 (WeChat) es el canal habitual entre escuelas y familias en China." }
      ],
      cierre: { bot: "太感谢您了，老师。现在我放心多了。", py: "Tài gǎnxiè nín le, lǎoshī. Xiànzài wǒ fàngxīn duō le.", es: "Muchísimas gracias, profesor. Ahora estoy mucho más tranquilo." },
      vocab: [
        { t: "成绩", py: "chéngjì", es: "notas, resultados" },
        { t: "担心", py: "dānxīn", es: "preocuparse" },
        { t: "有点儿", py: "yǒudiǎnr", es: "un poco (algo negativo)" },
        { t: "少玩手机", py: "shǎo wán shǒujī", es: "usar menos el celular" },
        { t: "作业", py: "zuòyè", es: "tarea" },
        { t: "有礼貌", py: "yǒu lǐmào", es: "educado, cortés" },
        { t: "分心", py: "fēnxīn", es: "distraerse" },
        { t: "放心", py: "fàngxīn", es: "quedar tranquilo" }
      ]
    },
    {
      id: "zh-06", titulo: "La estudiante que no habla en clase", nivel: "A2",
      tema: "Estudiante que no participa",
      contexto: "Al final de la clase hablas a solas con una estudiante de 13 años que nunca participa. Quieres entenderla y proponerle otra forma de participar.",
      rol: "小雨 (Xiǎoyǔ), 13 años, tímida, le encanta dibujar",
      turnos: [
        { bot: "老师，您找我？", py: "Lǎoshī, nín zhǎo wǒ?", es: "Profe, ¿me buscaba?",
          opciones: [
            { t: "是的，小雨。别紧张，没什么事。", py: "Shì de, Xiǎoyǔ. Bié jǐnzhāng, méi shénme shì.", es: "Sí, Xiaoyu. Tranquila, no es nada grave.", ok: true },
            { t: "对，我想跟你聊一聊。你最近好吗？", py: "Duì, wǒ xiǎng gēn nǐ liáo yi liáo. Nǐ zuìjìn hǎo ma?", es: "Sí, quiero conversar un rato contigo. ¿Cómo has estado?", ok: true },
            { t: "是的。不紧张，没什么事。", py: "Shì de. Bù jǐnzhāng, méi shénme shì.", es: "Sí. Tranquila, no es nada.", ok: false,
              fix: "Para pedir «no te pongas nerviosa» se usa 别 (no hagas): «别紧张». 不紧张 significa «no está nerviosa»." }
          ],
          clave: ["别紧张", "聊"],
          tip: "别 (bié) + verbo = prohibición amable: 别担心 (no te preocupes), 别紧张 (tranquilo)." },
        { bot: "我上课不说话，因为我很害羞。", py: "Wǒ shàngkè bù shuōhuà, yīnwèi wǒ hěn hàixiū.", es: "No hablo en clase porque me da mucha pena.",
          opciones: [
            { t: "我明白，很多人都会这样。", py: "Wǒ míngbai, hěn duō rén dōu huì zhèyàng.", es: "Te entiendo, a mucha gente le pasa.", ok: true },
            { t: "害羞很正常。我小时候也很害羞。", py: "Hàixiū hěn zhèngcháng. Wǒ xiǎoshíhou yě hěn hàixiū.", es: "La timidez es muy normal. De pequeño yo también era muy tímido.", ok: true },
            { t: "我明白。我小时候也是很害羞了。", py: "Wǒ míngbai. Wǒ xiǎoshíhou yě shì hěn hàixiū le.", es: "Te entiendo. De pequeño yo también era muy tímido.", ok: false,
              fix: "Para describir cómo era alguien en el pasado no se usan 是 ni 了: «我小时候也很害羞»." }
          ],
          clave: ["很多人", "正常"],
          tip: "了 (le) no marca «pasado» como en español: indica un cambio o una acción completada." },
        { bot: "我怕说错，大家会笑我。", py: "Wǒ pà shuō cuò, dàjiā huì xiào wǒ.", es: "Me da miedo equivocarme y que todos se rían de mí.",
          opciones: [
            { t: "说错没关系，错误能帮我们学习。", py: "Shuō cuò méi guānxi, cuòwù néng bāng wǒmen xuéxí.", es: "Equivocarse no importa; los errores nos ayudan a aprender.", ok: true },
            { t: "在我们班，说错不是笑话，是学习的机会。", py: "Zài wǒmen bān, shuō cuò bú shì xiàohua, shì xuéxí de jīhuì.", es: "En nuestro grupo, equivocarse no es un chiste: es una oportunidad para aprender.", ok: true },
            { t: "没关系，没有人会笑了你。", py: "Méi guānxi, méiyǒu rén huì xiào le nǐ.", es: "Tranquila, nadie se va a reír de ti.", ok: false,
              fix: "Con 会 (futuro, posibilidad) no se usa 了: «没有人会笑你»." }
          ],
          clave: ["说错", "错误", "学习"],
          tip: "Verbo + 错 = hacer algo mal: 说错 (decir mal), 写错 (escribir mal), 听错 (oír mal)." },
        { bot: "可是我喜欢这门课，就是不想在大家面前说话。", py: "Kěshì wǒ xǐhuan zhè mén kè, jiùshì bù xiǎng zài dàjiā miànqián shuōhuà.", es: "Pero me gusta esta materia; solo que no quiero hablar delante de todos.",
          opciones: [
            { t: "那你先把想法写下来，好吗？", py: "Nà nǐ xiān bǎ xiǎngfǎ xiě xiàlai, hǎo ma?", es: "Entonces, ¿qué tal si primero escribes tus ideas?", ok: true },
            { t: "我们换个方法：你可以写出来，也可以画出来。", py: "Wǒmen huàn ge fāngfǎ: nǐ kěyǐ xiě chūlai, yě kěyǐ huà chūlai.", es: "Probemos otra forma: puedes escribirlo o también dibujarlo.", ok: true },
            { t: "那你可以写你的想法在纸上。", py: "Nà nǐ kěyǐ xiě nǐ de xiǎngfǎ zài zhǐ shang.", es: "Entonces puedes escribir tus ideas en un papel.", ok: false,
              fix: "El lugar va antes del verbo: «在纸上写你的想法», o con 把: «把想法写在纸上»." }
          ],
          clave: ["写下来", "画出来"],
          tip: "Ofrecer varias formas de participar (oral, escrita, gráfica) es una estrategia inclusiva muy eficaz." },
        { bot: "写可以。我也可以画画吗？我很喜欢画画。", py: "Xiě kěyǐ. Wǒ yě kěyǐ huàhuà ma? Wǒ hěn xǐhuan huàhuà.", es: "Escribir sí puedo. ¿Puedo también dibujar? Me encanta dibujar.",
          opciones: [
            { t: "当然可以！你的画能帮大家理解。", py: "Dāngrán kěyǐ! Nǐ de huà néng bāng dàjiā lǐjiě.", es: "¡Claro que sí! Tus dibujos pueden ayudar a todos a entender.", ok: true },
            { t: "可以！下个星期你可以给我们看一张思维导图。", py: "Kěyǐ! Xià ge xīngqī nǐ kěyǐ gěi wǒmen kàn yì zhāng sīwéi dǎotú.", es: "¡Sí! La próxima semana nos puedes mostrar un mapa mental.", ok: true },
            { t: "可以！下个星期你给我们看一个画。", py: "Kěyǐ! Xià ge xīngqī nǐ gěi wǒmen kàn yí ge huà.", es: "¡Sí! La próxima semana nos muestras un dibujo.", ok: false,
              fix: "Dibujos y pinturas usan el clasificador 张 (o 幅): «一张画»." }
          ],
          clave: ["当然可以", "思维导图"],
          tip: "张 (zhāng) es el clasificador de cosas planas: 一张纸 (una hoja), 一张画 (un dibujo), 一张桌子 (una mesa)." },
        { bot: "如果以后我必须说话呢？", py: "Rúguǒ yǐhòu wǒ bìxū shuōhuà ne?", es: "¿Y si después tengo que hablar?",
          opciones: [
            { t: "先跟一个同学说，两个人一组。", py: "Xiān gēn yí ge tóngxué shuō, liǎng ge rén yì zǔ.", es: "Primero hablas con un compañero, en pareja.", ok: true },
            { t: "我们慢慢来：先两个人，再小组。你准备好了再说。", py: "Wǒmen mànmàn lái: xiān liǎng ge rén, zài xiǎozǔ. Nǐ zhǔnbèi hǎo le zài shuō.", es: "Vamos despacio: primero en pareja, después en grupo pequeño. Hablas cuando estés lista.", ok: true },
            { t: "我们来慢慢。先两个人一组。", py: "Wǒmen lái mànmàn. Xiān liǎng ge rén yì zǔ.", es: "Vamos despacio. Primero en parejas.", ok: false,
              fix: "La expresión fija es «慢慢来» (despacio, sin prisa): el adverbio va antes del verbo." }
          ],
          clave: ["先跟", "慢慢来"],
          tip: "慢慢来 (mànmàn lái) = sin afán, poco a poco. Una frase muy tranquilizadora para estudiantes." },
        { bot: "好的。谢谢老师，从来没有人这样跟我说过。", py: "Hǎo de. Xièxie lǎoshī, cónglái méiyǒu rén zhèyàng gēn wǒ shuō guo.", es: "Bueno. Gracias, profe. Nunca nadie me había hablado así.",
          opciones: [
            { t: "也谢谢你相信我，小雨。", py: "Yě xièxie nǐ xiāngxìn wǒ, Xiǎoyǔ.", es: "Gracias a ti por confiar en mí, Xiaoyu.", ok: true },
            { t: "谢谢你的信任。有问题随时来找我。", py: "Xièxie nǐ de xìnrèn. Yǒu wèntí suíshí lái zhǎo wǒ.", es: "Gracias por tu confianza. Si tienes algún problema, búscame cuando quieras.", ok: true },
            { t: "不客气。有问题你找我随时。", py: "Bú kèqi. Yǒu wèntí nǐ zhǎo wǒ suíshí.", es: "De nada. Si tienes problemas, búscame cuando quieras.", ok: false,
              fix: "随时 (en cualquier momento) va antes del verbo: «随时来找我»." }
          ],
          clave: ["相信我", "信任"],
          tip: "Verbo + 过 (guo) = experiencia: 说过 (haber dicho alguna vez), 去过 (haber ido)." }
      ],
      cierre: { bot: "老师再见！明天我带素描本来给您看。", py: "Lǎoshī zàijiàn! Míngtiān wǒ dài sùmiáoběn lái gěi nín kàn.", es: "¡Adiós, profe! Mañana traigo mi cuaderno de dibujo para mostrárselo." },
      vocab: [
        { t: "害羞", py: "hàixiū", es: "tímido, que le da pena" },
        { t: "别紧张", py: "bié jǐnzhāng", es: "tranquilo, no te pongas nervioso" },
        { t: "说错", py: "shuō cuò", es: "equivocarse al hablar" },
        { t: "画画", py: "huàhuà", es: "dibujar" },
        { t: "一张画", py: "yì zhāng huà", es: "un dibujo" },
        { t: "慢慢来", py: "mànmàn lái", es: "poco a poco, sin afán" },
        { t: "信任", py: "xìnrèn", es: "confianza" },
        { t: "随时", py: "suíshí", es: "en cualquier momento" }
      ]
    },
    {
      id: "zh-07", titulo: "Retroalimentación a una profesora novata", nivel: "A2",
      tema: "Dar retroalimentación",
      contexto: "Observaste la clase de una profesora recién graduada en Chengdu. Ahora le das retroalimentación: reconoces lo bueno y propones una mejora concreta.",
      rol: "刘老师 (Liú lǎoshī), profesora recién graduada, entusiasta pero insegura",
      turnos: [
        { bot: "你觉得我的课怎么样？请直接说。", py: "Nǐ juéde wǒ de kè zěnmeyàng? Qǐng zhíjiē shuō.", es: "¿Qué te pareció mi clase? Dímelo directamente.",
          opciones: [
            { t: "我觉得很好！学生们很积极。", py: "Wǒ juéde hěn hǎo! Xuéshengmen hěn jījí.", es: "¡Me pareció muy buena! Los estudiantes participaron mucho.", ok: true },
            { t: "上得很好！你跟学生的关系特别好。", py: "Shàng de hěn hǎo! Nǐ gēn xuésheng de guānxi tèbié hǎo.", es: "¡La diste muy bien! Tu relación con los estudiantes es excelente.", ok: true },
            { t: "你上课很好得。", py: "Nǐ shàngkè hěn hǎo de.", es: "Diste muy bien la clase.", ok: false,
              fix: "El complemento de grado sigue el orden verbo + 得 + adjetivo: «你课上得很好» o «你上得很好»." }
          ],
          clave: ["很好", "学生", "积极"],
          tip: "Verbo + 得 + adjetivo describe cómo se hace algo: 说得很好 (habla muy bien), 上得很好 (dio muy bien la clase)." },
        { bot: "太好了！那我有什么地方可以改进？", py: "Tài hǎo le! Nà wǒ yǒu shénme dìfang kěyǐ gǎijìn?", es: "¡Qué bien! ¿Y en qué puedo mejorar?",
          opciones: [
            { t: "也许可以多给学生一点儿时间思考。", py: "Yěxǔ kěyǐ duō gěi xuésheng yìdiǎnr shíjiān sīkǎo.", es: "Tal vez podrías darles a los estudiantes un poco más de tiempo para pensar.", ok: true },
            { t: "一个建议：提问以后，等五秒钟再叫学生回答。", py: "Yí ge jiànyì: tíwèn yǐhòu, děng wǔ miǎozhōng zài jiào xuésheng huídá.", es: "Una sugerencia: después de preguntar, espera cinco segundos antes de llamar a un estudiante.", ok: true },
            { t: "也许可以给学生时间多一点儿。", py: "Yěxǔ kěyǐ gěi xuésheng shíjiān duō yìdiǎnr.", es: "Tal vez podrías darles a los estudiantes un poco más de tiempo.", ok: false,
              fix: "多 va antes del verbo: «多给学生一点儿时间»." }
          ],
          clave: ["时间", "思考", "建议", "等五秒"],
          tip: "Retroalimentación eficaz: una sola mejora, concreta y aplicable mañana mismo." },
        { bot: "可是安静的时候我很紧张。", py: "Kěshì ānjìng de shíhou wǒ hěn jǐnzhāng.", es: "Pero cuando hay silencio me pongo muy nerviosa.",
          opciones: [
            { t: "很正常。但是安静能帮学生想清楚。", py: "Hěn zhèngcháng. Dànshì ānjìng néng bāng xuésheng xiǎng qīngchu.", es: "Es normal. Pero el silencio ayuda a los estudiantes a pensar con claridad.", ok: true },
            { t: "我理解。研究发现，多等几秒，学生的回答会更好。", py: "Wǒ lǐjiě. Yánjiū fāxiàn, duō děng jǐ miǎo, xuésheng de huídá huì gèng hǎo.", es: "Te entiendo. Las investigaciones muestran que si esperas unos segundos más, las respuestas son mejores.", ok: true },
            { t: "很正常。但是安静能帮学生想清楚了。", py: "Hěn zhèngcháng. Dànshì ānjìng néng bāng xuésheng xiǎng qīngchu le.", es: "Es normal. Pero el silencio ayuda a los estudiantes a pensar con claridad.", ok: false,
              fix: "Para una verdad general no se añade 了: «安静能帮学生想清楚»." }
          ],
          clave: ["正常", "安静", "研究", "多等"],
          tip: "El «tiempo de espera» (wait time) fue estudiado por Mary Budd Rowe: esperar de 3 a 5 segundos mejora las respuestas." },
        { bot: "有道理。那课的最后呢？", py: "Yǒu dàolǐ. Nà kè de zuìhòu ne?", es: "Tiene sentido. ¿Y el final de la clase?",
          opciones: [
            { t: "最后有点儿快。", py: "Zuìhòu yǒudiǎnr kuài.", es: "El final fue un poco rápido.", ok: true },
            { t: "结尾有点儿匆忙，没有时间复习今天的目标。", py: "Jiéwěi yǒudiǎnr cōngmáng, méiyǒu shíjiān fùxí jīntiān de mùbiāo.", es: "El cierre fue algo apresurado; no hubo tiempo para repasar el objetivo de hoy.", ok: true },
            { t: "最后一点儿快。", py: "Zuìhòu yìdiǎnr kuài.", es: "El final fue un poco rápido.", ok: false,
              fix: "«Un poco rápido» (crítica) es «有点儿快». «快一点儿» significa «más rápido» (petición)." }
          ],
          clave: ["有点儿", "快", "时间"],
          tip: "有点儿 + adjetivo = «algo, un poco» (con tono de crítica). Adjetivo + 一点儿 = «un poco más»." },
        { bot: "对，下课铃响了，我就乱了。你是怎么做的？", py: "Duì, xiàkè líng xiǎng le, wǒ jiù luàn le. Nǐ shì zěnme zuò de?", es: "Sí, sonó el timbre y me desorganicé. ¿Tú cómo lo haces?",
          opciones: [
            { t: "我每次留最后五分钟做总结。", py: "Wǒ měi cì liú zuìhòu wǔ fēnzhōng zuò zǒngjié.", es: "Siempre dejo los últimos cinco minutos para hacer un resumen.", ok: true },
            { t: "最后五分钟，我让每个学生在小纸条上写今天学到了什么。", py: "Zuìhòu wǔ fēnzhōng, wǒ ràng měi ge xuésheng zài xiǎo zhǐtiáo shang xiě jīntiān xué dào le shénme.", es: "En los últimos cinco minutos, cada estudiante escribe en un papelito lo que aprendió hoy.", ok: true },
            { t: "我每次让学生写今天学到什么在纸上。", py: "Wǒ měi cì ràng xuésheng xiě jīntiān xué dào shénme zài zhǐ shang.", es: "Siempre hago que los estudiantes escriban en un papel lo que aprendieron hoy.", ok: false,
              fix: "El lugar va antes del verbo: «让学生在纸上写今天学到了什么»." }
          ],
          clave: ["五分钟", "总结", "写"],
          tip: "让 (ràng) + persona + verbo = hacer que alguien haga algo: 让学生写 (hacer que los estudiantes escriban)." },
        { bot: "好主意！我明天就试试。谢谢你的反馈！", py: "Hǎo zhǔyi! Wǒ míngtiān jiù shìshi. Xièxie nǐ de fǎnkuì!", es: "¡Buena idea! Mañana mismo lo intento. ¡Gracias por la retroalimentación!",
          opciones: [
            { t: "不客气！你做得很好。", py: "Bú kèqi! Nǐ zuò de hěn hǎo.", es: "¡Con gusto! Lo estás haciendo muy bien.", ok: true },
            { t: "不用谢！你很有天赋，试了以后告诉我结果。", py: "Bú yòng xiè! Nǐ hěn yǒu tiānfù, shì le yǐhòu gàosu wǒ jiéguǒ.", es: "¡No hay de qué! Tienes mucho talento; cuando lo pruebes, me cuentas cómo te fue.", ok: true },
            { t: "没关系！你做得很好。", py: "Méi guānxi! Nǐ zuò de hěn hǎo.", es: "¡No pasa nada! Lo estás haciendo muy bien.", ok: false,
              fix: "A «gracias» se responde 不客气 o 不用谢. 没关系 responde a «perdón»." }
          ],
          clave: ["不客气", "不用谢"],
          tip: "谢谢 → 不客气 (de nada). 对不起 → 没关系 (no pasa nada). ¡No las cruce!" }
      ],
      cierre: { bot: "好的！下个星期你再来听我的课吧！", py: "Hǎo de! Xià ge xīngqī nǐ zài lái tīng wǒ de kè ba!", es: "¡Listo! ¡La próxima semana vuelve a observar mi clase!" },
      vocab: [
        { t: "改进", py: "gǎijìn", es: "mejorar" },
        { t: "建议", py: "jiànyì", es: "sugerencia, sugerir" },
        { t: "思考", py: "sīkǎo", es: "pensar, reflexionar" },
        { t: "秒钟", py: "miǎozhōng", es: "segundo(s)" },
        { t: "有点儿快", py: "yǒudiǎnr kuài", es: "un poco rápido" },
        { t: "总结", py: "zǒngjié", es: "resumen, cierre" },
        { t: "反馈", py: "fǎnkuì", es: "retroalimentación" },
        { t: "不客气", py: "bú kèqi", es: "de nada" }
      ]
    },
    {
      id: "zh-08", titulo: "Videollamada para un intercambio escolar", nivel: "B1",
      tema: "Videollamada con colega extranjero",
      contexto: "Tienes una videollamada con el rector de una escuela de Hangzhou para proponer un intercambio virtual entre estudiantes.",
      rol: "赵校长 (Zhào xiàozhǎng), rector de escuela, formal y directo",
      turnos: [
        { bot: "您好！能听清楚吗？我这边网络不太稳定。", py: "Nín hǎo! Néng tīng qīngchu ma? Wǒ zhèbiān wǎngluò bú tài wěndìng.", es: "¡Buenas! ¿Me escucha bien? De mi lado la conexión no está muy estable.",
          opciones: [
            { t: "赵校长您好！我听得很清楚。", py: "Zhào xiàozhǎng nín hǎo! Wǒ tīng de hěn qīngchu.", es: "¡Buenas, rector Zhao! Lo escucho muy claro.", ok: true },
            { t: "您好！声音很清楚，不过画面有时候会卡。", py: "Nín hǎo! Shēngyīn hěn qīngchu, búguò huàmiàn yǒu shíhou huì kǎ.", es: "¡Buenas! El sonido está claro, aunque la imagen a veces se congela.", ok: true },
            { t: "你好！我听很清楚。", py: "Nǐ hǎo! Wǒ tīng hěn qīngchu.", es: "¡Hola! Te escucho muy claro.", ok: false,
              fix: "Falta 得: «我听得很清楚». Además, con un rector use 您: «您好»." }
          ],
          clave: ["听得很清楚", "您好", "声音"],
          tip: "卡 (kǎ) = trabarse, congelarse (video, internet). Muy útil en videollamadas." },
        { bot: "好的。请您简单介绍一下您的学校。", py: "Hǎo de. Qǐng nín jiǎndān jièshào yíxià nín de xuéxiào.", es: "Bien. Por favor, presente brevemente su escuela.",
          opciones: [
            { t: "CENTEC是卡利的一所私立学校，重视英语和STEAM教育。", py: "CENTEC shì Kǎlì de yì suǒ sīlì xuéxiào, zhòngshì Yīngyǔ hé STEAM jiàoyù.", es: "CENTEC es un colegio privado de Cali que da importancia al inglés y a la educación STEAM.", ok: true },
            { t: "好的。我们是卡利的一所私立学校，从幼儿园到十一年级，特别重视STEAM和英语。", py: "Hǎo de. Wǒmen shì Kǎlì de yì suǒ sīlì xuéxiào, cóng yòu'éryuán dào shíyī niánjí, tèbié zhòngshì STEAM hé Yīngyǔ.", es: "Claro. Somos un colegio privado de Cali, de preescolar a grado once, con énfasis especial en STEAM e inglés.", ok: true },
            { t: "我们是一个私立学校在卡利。", py: "Wǒmen shì yí ge sīlì xuéxiào zài Kǎlì.", es: "Somos un colegio privado en Cali.", ok: false,
              fix: "El lugar va antes como modificador: «卡利的一所私立学校». Para escuelas, el clasificador formal es 所." }
          ],
          clave: ["卡利的", "一所", "重视"],
          tip: "所 (suǒ) es el clasificador de escuelas, hospitales y universidades: 一所学校." },
        { bot: "很好。你们希望通过交流项目达到什么目标？", py: "Hěn hǎo. Nǐmen xīwàng tōngguò jiāoliú xiàngmù dádào shénme mùbiāo?", es: "Muy bien. ¿Qué objetivo esperan alcanzar con el programa de intercambio?",
          opciones: [
            { t: "我们希望学生能跟中国学生练习汉语。", py: "Wǒmen xīwàng xuésheng néng gēn Zhōngguó xuésheng liànxí Hànyǔ.", es: "Esperamos que nuestros estudiantes puedan practicar chino con estudiantes chinos.", ok: true },
            { t: "我们的目标是让学生一起做项目，了解不同的文化。", py: "Wǒmen de mùbiāo shì ràng xuésheng yìqǐ zuò xiàngmù, liǎojiě bù tóng de wénhuà.", es: "Nuestro objetivo es que los estudiantes hagan proyectos juntos y conozcan culturas diferentes.", ok: true },
            { t: "我们希望学生练习汉语跟中国学生。", py: "Wǒmen xīwàng xuésheng liànxí Hànyǔ gēn Zhōngguó xuésheng.", es: "Esperamos que los estudiantes practiquen chino con estudiantes chinos.", ok: false,
              fix: "«Con quién» va antes del verbo: «跟中国学生练习汉语»." }
          ],
          clave: ["跟中国学生练习", "目标"],
          tip: "跟/和 + persona va siempre antes del verbo: 跟朋友吃饭 (comer con amigos)." },
        { bot: "我们有十三个小时的时差，你们打算怎么安排线上见面？", py: "Wǒmen yǒu shísān ge xiǎoshí de shíchā, nǐmen dǎsuàn zěnme ānpái xiànshàng jiànmiàn?", es: "Tenemos trece horas de diferencia. ¿Cómo piensan organizar los encuentros en línea?",
          opciones: [
            { t: "我们可以在卡利的晚上八点，也就是你们的早上九点见面。", py: "Wǒmen kěyǐ zài Kǎlì de wǎnshang bā diǎn, yě jiù shì nǐmen de zǎoshang jiǔ diǎn jiànmiàn.", es: "Podemos reunirnos a las ocho de la noche de Cali, es decir, a las nueve de la mañana de ustedes.", ok: true },
            { t: "我建议每两个星期见一次，时间是你们的早上，我们的晚上。", py: "Wǒ jiànyì měi liǎng ge xīngqī jiàn yí cì, shíjiān shì nǐmen de zǎoshang, wǒmen de wǎnshang.", es: "Sugiero reunirnos cada dos semanas, en la mañana de ustedes y en la noche nuestra.", ok: true },
            { t: "我们可以见面晚上八点在网上。", py: "Wǒmen kěyǐ jiànmiàn wǎnshang bā diǎn zài wǎng shang.", es: "Podemos reunirnos a las ocho de la noche en línea.", ok: false,
              fix: "Orden chino: tiempo + lugar + verbo: «我们可以晚上八点在网上见面»." }
          ],
          clave: ["卡利的晚上", "每两个星期", "早上"],
          tip: "Cali (UTC−5) y China (UTC+8) tienen 13 horas de diferencia: 8 p. m. en Cali = 9 a. m. del día siguiente en China." },
        { bot: "可以。那你们怎么评估项目的效果？", py: "Kěyǐ. Nà nǐmen zěnme pínggū xiàngmù de xiàoguǒ?", es: "De acuerdo. ¿Y cómo evaluarán los resultados del proyecto?",
          opciones: [
            { t: "我们会用评分表和学生的电子作品集。", py: "Wǒmen huì yòng píngfēnbiǎo hé xuésheng de diànzǐ zuòpǐnjí.", es: "Usaremos una rúbrica y el portafolio digital de los estudiantes.", ok: true },
            { t: "我们打算看三个方面：参加情况、最后的作品和满意度调查。", py: "Wǒmen dǎsuàn kàn sān ge fāngmiàn: cānjiā qíngkuàng, zuìhòu de zuòpǐn hé mǎnyìdù diàochá.", es: "Pensamos mirar tres aspectos: la participación, los productos finales y una encuesta de satisfacción.", ok: true },
            { t: "我们会用评分表，和做调查。", py: "Wǒmen huì yòng píngfēnbiǎo, hé zuò diàochá.", es: "Usaremos una rúbrica y haremos una encuesta.", ok: false,
              fix: "和 solo une sustantivos, no verbos ni oraciones. Diga «我们会用评分表，还会做调查»." }
          ],
          clave: ["作品", "满意度", "电子"],
          tip: "Para unir acciones use 还 (además), 也 (también) o 并且 (y además), nunca 和." },
        { bot: "很好。结束之前，您还有什么问题吗？", py: "Hěn hǎo. Jiéshù zhīqián, nín hái yǒu shénme wèntí ma?", es: "Muy bien. Antes de terminar, ¿tiene alguna otra pregunta?",
          opciones: [
            { t: "有一个：我们什么时候可以开始？", py: "Yǒu yí ge: wǒmen shénme shíhou kěyǐ kāishǐ?", es: "Una: ¿cuándo podemos empezar?", ok: true },
            { t: "只有一个问题：下一步我们需要准备什么文件？", py: "Zhǐ yǒu yí ge wèntí: xià yí bù wǒmen xūyào zhǔnbèi shénme wénjiàn?", es: "Solo una pregunta: ¿qué documentos debemos preparar para el siguiente paso?", ok: true },
            { t: "有一个：我们可以开始什么时候？", py: "Yǒu yí ge: wǒmen kěyǐ kāishǐ shénme shíhou?", es: "Una: ¿cuándo podemos empezar?", ok: false,
              fix: "什么时候 (cuándo) va antes del verbo: «我们什么时候可以开始？»." }
          ],
          clave: ["什么时候可以", "下一步"],
          tip: "Las palabras interrogativas ocupan el mismo lugar que la respuesta: 我们明天开始 → 我们什么时候开始？" },
        { bot: "星期五以前我会把合作协议发给您。二十号我们再开一次会，可以吗？", py: "Xīngqīwǔ yǐqián wǒ huì bǎ hézuò xiéyì fā gěi nín. Èrshí hào wǒmen zài kāi yí cì huì, kěyǐ ma?", es: "Antes del viernes le envío el convenio de cooperación. ¿Nos reunimos otra vez el veinte?",
          opciones: [
            { t: "可以，二十号没问题。", py: "Kěyǐ, èrshí hào méi wèntí.", es: "Sí, el veinte no hay problema.", ok: true },
            { t: "好的。我等您的协议，然后用邮件确认时间。", py: "Hǎo de. Wǒ děng nín de xiéyì, ránhòu yòng yóujiàn quèrèn shíjiān.", es: "De acuerdo. Quedo atento al convenio y luego confirmo la hora por correo.", ok: true },
            { t: "好的，二十号我们开会再一次。", py: "Hǎo de, èrshí hào wǒmen kāihuì zài yí cì.", es: "De acuerdo, el veinte nos reunimos otra vez.", ok: false,
              fix: "再 va antes del verbo y 一次 dentro de la expresión: «二十号我们再开一次会»." }
          ],
          clave: ["二十号", "没问题", "确认", "等您"],
          tip: "把 (bǎ) + objeto + verbo enfatiza qué se hace con algo: 把协议发给您 = le envío el convenio." }
      ],
      cierre: { bot: "太好了。很高兴跟您交流。二十号见！", py: "Tài hǎo le. Hěn gāoxìng gēn nín jiāoliú. Èrshí hào jiàn!", es: "Excelente. Fue un gusto conversar con usted. ¡Hasta el veinte!" },
      vocab: [
        { t: "校长", py: "xiàozhǎng", es: "rector(a)" },
        { t: "时差", py: "shíchā", es: "diferencia horaria" },
        { t: "交流项目", py: "jiāoliú xiàngmù", es: "programa de intercambio" },
        { t: "一所学校", py: "yì suǒ xuéxiào", es: "una escuela" },
        { t: "评估", py: "pínggū", es: "evaluar" },
        { t: "合作协议", py: "hézuò xiéyì", es: "convenio de cooperación" },
        { t: "确认", py: "quèrèn", es: "confirmar" },
        { t: "线上", py: "xiànshàng", es: "en línea" }
      ]
    },
    {
      id: "zh-09", titulo: "Pregunta en un congreso de educación", nivel: "B1",
      tema: "Conferencia o capacitación",
      contexto: "Asistes a una conferencia sobre evaluación formativa en Shanghái. En la ronda de preguntas levantas la mano y compartes tu experiencia.",
      rol: "孙教授 (Sūn jiàoshòu), conferencista, enérgica y provocadora",
      turnos: [
        { bot: "好，现在是提问时间。后面那位老师，请！", py: "Hǎo, xiànzài shì tíwèn shíjiān. Hòumiàn nà wèi lǎoshī, qǐng!", es: "Bien, ahora es el momento de las preguntas. ¡El profesor de atrás, adelante!",
          opciones: [
            { t: "谢谢孙教授！您的讲座非常精彩。", py: "Xièxie Sūn jiàoshòu! Nín de jiǎngzuò fēicháng jīngcǎi.", es: "¡Gracias, profesora Sun! Su conferencia fue excelente.", ok: true },
            { t: "孙教授好！首先，谢谢您精彩的讲座。", py: "Sūn jiàoshòu hǎo! Shǒuxiān, xièxie nín jīngcǎi de jiǎngzuò.", es: "¡Buenas, profesora Sun! Primero, gracias por su excelente conferencia.", ok: true },
            { t: "谢谢孙教授！您的讲座是非常精彩。", py: "Xièxie Sūn jiàoshòu! Nín de jiǎngzuò shì fēicháng jīngcǎi.", es: "¡Gracias, profesora Sun! Su conferencia fue excelente.", ok: false,
              fix: "No se usa 是 delante de adjetivos: «您的讲座非常精彩»." }
          ],
          clave: ["讲座非常", "精彩的讲座"],
          tip: "精彩 (jīngcǎi) = brillante, excelente. El elogio típico para una conferencia o un espectáculo." },
        { bot: "谢谢！您的问题是什么？", py: "Xièxie! Nín de wèntí shì shénme?", es: "¡Gracias! ¿Cuál es su pregunta?",
          opciones: [
            { t: "在一个有四十个学生的班里，怎么做形成性评价？", py: "Zài yí ge yǒu sìshí ge xuésheng de bān li, zěnme zuò xíngchéngxìng píngjià?", es: "En un grupo de cuarenta estudiantes, ¿cómo se hace evaluación formativa?", ok: true },
            { t: "我想问，如果班里有四十个学生，老师怎么给每个人反馈？", py: "Wǒ xiǎng wèn, rúguǒ bān li yǒu sìshí ge xuésheng, lǎoshī zěnme gěi měi ge rén fǎnkuì?", es: "Quisiera preguntar: si hay cuarenta estudiantes en el grupo, ¿cómo da el profesor retroalimentación a cada uno?", ok: true },
            { t: "我想问，怎么做形成性评价在大班？", py: "Wǒ xiǎng wèn, zěnme zuò xíngchéngxìng píngjià zài dà bān?", es: "Quisiera preguntar cómo hacer evaluación formativa en grupos grandes.", ok: false,
              fix: "El lugar va antes del verbo: «在大班怎么做形成性评价？»." }
          ],
          clave: ["学生", "评价", "反馈"],
          tip: "形成性评价 = evaluación formativa; 终结性评价 = evaluación sumativa." },
        { bot: "好问题！一个方法是用答题卡：大家同时举起来。您试过吗？", py: "Hǎo wèntí! Yí ge fāngfǎ shì yòng dátíkǎ: dàjiā tóngshí jǔ qǐlai. Nín shì guo ma?", es: "¡Buena pregunta! Un método es usar tarjetas de respuesta: todos las levantan al mismo tiempo. ¿Lo ha probado?",
          opciones: [
            { t: "试过，我用过小白板，效果很好。", py: "Shì guo, wǒ yòng guo xiǎo báibǎn, xiàoguǒ hěn hǎo.", es: "Sí, he usado minitableros blancos y funcionaron muy bien.", ok: true },
            { t: "还没有，不过我用竖大拇指的方法检查学生懂不懂。", py: "Hái méiyǒu, búguò wǒ yòng shù dàmǔzhǐ de fāngfǎ jiǎnchá xuésheng dǒng bu dǒng.", es: "Todavía no, pero uso el pulgar arriba para verificar si los estudiantes entienden.", ok: true },
            { t: "我试了过小白板。", py: "Wǒ shì le guo xiǎo báibǎn.", es: "He probado los minitableros.", ok: false,
              fix: "No se combinan 了 y 过 así. Para experiencia basta 过: «我试过小白板» o «我用过小白板»." }
          ],
          clave: ["试过", "效果", "还没有", "大拇指"],
          tip: "Verbo + 过 = haberlo hecho alguna vez. La negación es 没 + verbo + 过: 没试过 (nunca lo he probado)." },
        { bot: "很好！看到答案以后，您怎么做？", py: "Hěn hǎo! Kàn dào dá'àn yǐhòu, nín zěnme zuò?", es: "¡Muy bien! Después de ver las respuestas, ¿qué hace?",
          opciones: [
            { t: "如果很多学生错了，我就换一种方法再讲一遍。", py: "Rúguǒ hěn duō xuésheng cuò le, wǒ jiù huàn yì zhǒng fāngfǎ zài jiǎng yí biàn.", es: "Si muchos estudiantes se equivocan, lo explico otra vez de otra manera.", ok: true },
            { t: "要是一半以上的学生答错，我用新的例子再讲；要是大部分对了，就继续。", py: "Yàoshi yíbàn yǐshàng de xuésheng dá cuò, wǒ yòng xīn de lìzi zài jiǎng; yàoshi dà bùfen duì le, jiù jìxù.", es: "Si más de la mitad responde mal, lo explico con un nuevo ejemplo; si la mayoría acierta, sigo.", ok: true },
            { t: "如果很多学生错了，就我再讲一遍。", py: "Rúguǒ hěn duō xuésheng cuò le, jiù wǒ zài jiǎng yí biàn.", es: "Si muchos estudiantes se equivocan, lo explico otra vez.", ok: false,
              fix: "就 va después del sujeto: «我就再讲一遍»." }
          ],
          clave: ["我就", "换一种", "例子", "继续"],
          tip: "如果/要是……就…… = si..., entonces... El 就 va después del sujeto de la segunda parte." },
        { bot: "这就是形成性评价！那您怎么记录这些信息？", py: "Zhè jiù shì xíngchéngxìng píngjià! Nà nín zěnme jìlù zhèxiē xìnxī?", es: "¡Eso es evaluación formativa! ¿Y cómo registra esa información?",
          opciones: [
            { t: "每节课以后，我记在一个简单的表格里。", py: "Měi jié kè yǐhòu, wǒ jì zài yí ge jiǎndān de biǎogé li.", es: "Después de cada clase lo anoto en una tabla sencilla.", ok: true },
            { t: "我手机里有一个表格，记下谁懂了，谁需要帮助。", py: "Wǒ shǒujī li yǒu yí ge biǎogé, jì xià shéi dǒng le, shéi xūyào bāngzhù.", es: "Tengo una tabla en el celular: anoto quién entendió y quién necesita ayuda.", ok: true },
            { t: "每节课以后，我记在一个表格。", py: "Měi jié kè yǐhòu, wǒ jì zài yí ge biǎogé.", es: "Después de cada clase lo anoto en una tabla.", ok: false,
              fix: "Tras 在 + objeto común se necesita un localizador: «在表格里», «在桌子上»." }
          ],
          clave: ["表格里", "需要帮助"],
          tip: "Localizadores: 里 (dentro), 上 (encima), 下 (debajo). 在表格里 = en la tabla." },
        { bot: "太好了！您愿意把这个表格分享给大家吗？", py: "Tài hǎo le! Nín yuànyì bǎ zhège biǎogé fēnxiǎng gěi dàjiā ma?", es: "¡Excelente! ¿Estaría dispuesto a compartir la tabla con todos?",
          opciones: [
            { t: "当然愿意！我可以发到会议群里。", py: "Dāngrán yuànyì! Wǒ kěyǐ fā dào huìyì qún li.", es: "¡Claro que sí! Puedo enviarla al grupo del congreso.", ok: true },
            { t: "很乐意！会后我用邮件把模板发给需要的老师。", py: "Hěn lèyì! Huì hòu wǒ yòng yóujiàn bǎ múbǎn fā gěi xūyào de lǎoshī.", es: "¡Con mucho gusto! Después de la sesión envío la plantilla por correo a quien la necesite.", ok: true },
            { t: "当然！我把表格发了给大家明天。", py: "Dāngrán! Wǒ bǎ biǎogé fā le gěi dàjiā míngtiān.", es: "¡Claro! Mañana les envío la tabla a todos.", ok: false,
              fix: "El tiempo va al inicio y 了 no se usa con acciones futuras: «明天我把表格发给大家»." }
          ],
          clave: ["群里", "模板"],
          tip: "群 (qún) = grupo de chat. En los congresos chinos casi siempre hay un 微信群 (grupo de WeChat)." }
      ],
      cierre: { bot: "太棒了！让我们用掌声感谢这位来自哥伦比亚的老师！", py: "Tài bàng le! Ràng wǒmen yòng zhǎngshēng gǎnxiè zhè wèi láizì Gēlúnbǐyà de lǎoshī!", es: "¡Maravilloso! ¡Démosle un aplauso a este colega que viene de Colombia!" },
      vocab: [
        { t: "讲座", py: "jiǎngzuò", es: "conferencia, charla" },
        { t: "形成性评价", py: "xíngchéngxìng píngjià", es: "evaluación formativa" },
        { t: "答题卡", py: "dátíkǎ", es: "tarjeta de respuesta" },
        { t: "试过", py: "shì guo", es: "haberlo probado" },
        { t: "再讲一遍", py: "zài jiǎng yí biàn", es: "explicar otra vez" },
        { t: "表格", py: "biǎogé", es: "tabla" },
        { t: "分享", py: "fēnxiǎng", es: "compartir" },
        { t: "掌声", py: "zhǎngshēng", es: "aplauso" }
      ]
    },
    {
      id: "zh-10", titulo: "Mi historia en un pódcast educativo", nivel: "B1",
      tema: "Contar una experiencia pedagógica",
      contexto: "Te invitaron a un pódcast chino de educación para contar la experiencia que transformó tu manera de enseñar.",
      rol: "林悦 (Lín Yuè), presentadora del pódcast «开放的教室», curiosa y muy cálida",
      turnos: [
        { bot: "欢迎来到我们的节目！你为什么当老师？", py: "Huānyíng lái dào wǒmen de jiémù! Nǐ wèishénme dāng lǎoshī?", es: "¡Bienvenido(a) a nuestro programa! ¿Por qué te hiciste profesor(a)?",
          opciones: [
            { t: "因为我小时候有一位老师改变了我的生活。", py: "Yīnwèi wǒ xiǎoshíhou yǒu yí wèi lǎoshī gǎibiàn le wǒ de shēnghuó.", es: "Porque de pequeño tuve una profesora que me cambió la vida.", ok: true },
            { t: "我想是因为一位小学老师。别人都不相信我的时候，她相信我。", py: "Wǒ xiǎng shì yīnwèi yí wèi xiǎoxué lǎoshī. Biérén dōu bù xiāngxìn wǒ de shíhou, tā xiāngxìn wǒ.", es: "Creo que fue por una profesora de primaria. Cuando nadie creía en mí, ella sí creyó.", ok: true },
            { t: "因为我小时候有一个老师改变我的生活了很多。", py: "Yīnwèi wǒ xiǎoshíhou yǒu yí ge lǎoshī gǎibiàn wǒ de shēnghuó le hěn duō.", es: "Porque de pequeño tuve una profesora que me cambió mucho la vida.", ok: false,
              fix: "Diga «改变了我的生活» (了 justo después del verbo). Y para una persona que respeta, mejor el clasificador 位: «一位老师»." }
          ],
          clave: ["改变了", "一位", "相信我"],
          tip: "当 (dāng) + profesión = trabajar como, hacerse: 当老师 (ser profesor), 当医生 (ser médico)." },
        { bot: "真好。哪一次经历改变了你的教学？", py: "Zhēn hǎo. Nǎ yí cì jīnglì gǎibiàn le nǐ de jiàoxué?", es: "Qué bonito. ¿Qué experiencia cambió tu forma de enseñar?",
          opciones: [
            { t: "有一个学生告诉我，他讨厌数学，因为他怕犯错。", py: "Yǒu yí ge xuésheng gàosu wǒ, tā tǎoyàn shùxué, yīnwèi tā pà fàn cuò.", es: "Un estudiante me dijo que odiaba las matemáticas porque le daba miedo equivocarse.", ok: true },
            { t: "有一年，一个学生告诉我，他特别害怕出错。这让我重新思考了一切。", py: "Yǒu yì nián, yí ge xuésheng gàosu wǒ, tā tèbié hàipà chū cuò. Zhè ràng wǒ chóngxīn sīkǎo le yíqiè.", es: "Un año, un estudiante me dijo que le aterraba equivocarse. Eso me hizo replantearlo todo.", ok: true },
            { t: "一个学生告诉了我，他讨厌了数学。", py: "Yí ge xuésheng gàosu le wǒ, tā tǎoyàn le shùxué.", es: "Un estudiante me dijo que odiaba las matemáticas.", ok: false,
              fix: "讨厌 (odiar) es un estado, no una acción terminada: no lleva 了. «他讨厌数学»." }
          ],
          clave: ["学生", "犯错", "害怕"],
          tip: "Verbos de estado (喜欢, 讨厌, 知道, 是) normalmente no llevan 了 en narraciones." },
        { bot: "然后你做了什么？", py: "Ránhòu nǐ zuò le shénme?", es: "¿Y entonces qué hiciste?",
          opciones: [
            { t: "我开始把错误当成学习的一部分。", py: "Wǒ kāishǐ bǎ cuòwù dàngchéng xuéxí de yí bùfen.", es: "Empecé a ver el error como parte del aprendizaje.", ok: true },
            { t: "我做了一面“错误墙”：每个星期我们一起分析一个常见的错误。", py: "Wǒ zuò le yí miàn “cuòwù qiáng”: měi ge xīngqī wǒmen yìqǐ fēnxī yí ge chángjiàn de cuòwù.", es: "Hice un «muro del error»: cada semana analizábamos juntos un error común.", ok: true },
            { t: "每个星期我们分析一个错误一起。", py: "Měi ge xīngqī wǒmen fēnxī yí ge cuòwù yìqǐ.", es: "Cada semana analizábamos juntos un error.", ok: false,
              fix: "一起 (juntos) va antes del verbo: «我们一起分析一个错误»." }
          ],
          clave: ["当成", "一起分析"],
          tip: "把 A 当成 B = considerar A como B: 把错误当成机会 (ver el error como una oportunidad)." },
        { bot: "学生们一开始有什么反应？", py: "Xuéshengmen yì kāishǐ yǒu shénme fǎnyìng?", es: "¿Cómo reaccionaron los estudiantes al principio?",
          opciones: [
            { t: "一开始他们不太相信，后来慢慢放开了。", py: "Yì kāishǐ tāmen bú tài xiāngxìn, hòulái mànmàn fàngkāi le.", es: "Al principio no creían mucho, pero después se fueron soltando.", ok: true },
            { t: "开始有人觉得是个陷阱，可是一个月以后，大家都抢着介绍“本周错误”。", py: "Kāishǐ yǒu rén juéde shì ge xiànjǐng, kěshì yí ge yuè yǐhòu, dàjiā dōu qiǎng zhe jièshào “běn zhōu cuòwù”.", es: "Al principio algunos pensaban que era una trampa, pero al mes todos se peleaban por presentar el «error de la semana».", ok: true },
            { t: "一开始他们不太相信，以后慢慢放开了。", py: "Yì kāishǐ tāmen bú tài xiāngxìn, yǐhòu mànmàn fàngkāi le.", es: "Al principio no creían mucho, pero después se fueron soltando.", ok: false,
              fix: "Para contar lo que pasó después, en el pasado, se usa 后来. 以后 se usa para el futuro o tras un momento concreto: «一个月以后»." }
          ],
          clave: ["后来", "陷阱"],
          tip: "一开始……后来…… = al principio... después... Estructura clave para narrar cambios." },
        { bot: "结果呢？你看到了什么变化？", py: "Jiéguǒ ne? Nǐ kàn dào le shénme biànhuà?", es: "¿Y los resultados? ¿Qué cambios viste?",
          opciones: [
            { t: "学生更积极了，成绩也提高了。", py: "Xuésheng gèng jījí le, chéngjì yě tígāo le.", es: "Los estudiantes participaron más y las notas también mejoraron.", ok: true },
            { t: "变化很大。学生问的问题更多了，班级平均分也提高了，最让我感动的是他们的自信。", py: "Biànhuà hěn dà. Xuésheng wèn de wèntí gèng duō le, bānjí píngjūnfēn yě tígāo le, zuì ràng wǒ gǎndòng de shì tāmen de zìxìn.", es: "Cambió mucho. Los estudiantes hacían más preguntas, el promedio del grupo subió y lo que más me conmovió fue su autoconfianza.", ok: true },
            { t: "学生很更积极了，成绩也提高了。", py: "Xuésheng hěn gèng jījí le, chéngjì yě tígāo le.", es: "Los estudiantes participaron mucho más y las notas mejoraron.", ok: false,
              fix: "No se combinan 很 y 更: «更积极了» (más participativos)." }
          ],
          clave: ["更积极", "提高", "变化", "自信"],
          tip: "Aquí 了 sí va: marca un cambio de situación. 更积极了 = se volvieron más participativos." },
        { bot: "你会给新老师什么建议？", py: "Nǐ huì gěi xīn lǎoshī shénme jiànyì?", es: "¿Qué consejo le darías a un profesor nuevo?",
          opciones: [
            { t: "先认真听学生说话。", py: "Xiān rènzhēn tīng xuésheng shuōhuà.", es: "Primero, escuchar con atención a los estudiantes.", ok: true },
            { t: "别怕在学生面前犯错。以身作则比什么都重要。", py: "Bié pà zài xuésheng miànqián fàn cuò. Yǐshēn-zuòzé bǐ shénme dōu zhòngyào.", es: "Que no tenga miedo de equivocarse delante de los estudiantes. Dar ejemplo es lo más importante.", ok: true },
            { t: "别怕犯错在学生面前。", py: "Bié pà fàn cuò zài xuésheng miànqián.", es: "Que no tenga miedo de equivocarse delante de los estudiantes.", ok: false,
              fix: "El lugar va antes del verbo: «别怕在学生面前犯错»." }
          ],
          clave: ["认真听", "在学生面前犯错"],
          tip: "以身作则 (yǐshēn-zuòzé) es un chengyu (frase hecha de cuatro caracteres): «enseñar con el ejemplo»." },
        { bot: "最后，用一句话总结你的教育理念吧。", py: "Zuìhòu, yòng yí jù huà zǒngjié nǐ de jiàoyù lǐniàn ba.", es: "Para terminar, resume tu filosofía educativa en una frase.",
          opciones: [
            { t: "错误不会让我们停下，它教我们成长。", py: "Cuòwù bú huì ràng wǒmen tíng xià, tā jiāo wǒmen chéngzhǎng.", es: "El error no nos detiene: nos enseña a crecer.", ok: true },
            { t: "错误不会阻止我们：它教育我们，让我们更坚强，帮助我们成长。", py: "Cuòwù bú huì zǔzhǐ wǒmen: tā jiàoyù wǒmen, ràng wǒmen gèng jiānqiáng, bāngzhù wǒmen chéngzhǎng.", es: "El error no nos detiene: nos enseña, nos fortalece y nos ayuda a crecer.", ok: true },
            { t: "错误不停我们，它学我们。", py: "Cuòwù bù tíng wǒmen, tā xué wǒmen.", es: "El error no nos detiene, nos enseña.", ok: false,
              fix: "学 (xué) = aprender; 教 (jiāo) = enseñar: «它教我们». Y «detener» aquí es «让我们停下»." }
          ],
          clave: ["错误", "教", "成长"],
          tip: "教 (jiāo, enseñar) y 学 (xué, aprender) son una pareja clave: 老师教，学生学." }
      ],
      cierre: { bot: "说得太好了！谢谢你跟我们分享你的故事。下次见！", py: "Shuō de tài hǎo le! Xièxie nǐ gēn wǒmen fēnxiǎng nǐ de gùshi. Xià cì jiàn!", es: "¡Qué bien dicho! Gracias por compartir tu historia con nosotros. ¡Hasta la próxima!" },
      vocab: [
        { t: "当老师", py: "dāng lǎoshī", es: "ser profesor, hacerse profesor" },
        { t: "改变", py: "gǎibiàn", es: "cambiar, transformar" },
        { t: "犯错", py: "fàn cuò", es: "equivocarse" },
        { t: "错误", py: "cuòwù", es: "error" },
        { t: "反应", py: "fǎnyìng", es: "reacción" },
        { t: "自信", py: "zìxìn", es: "autoconfianza" },
        { t: "以身作则", py: "yǐshēn-zuòzé", es: "enseñar con el ejemplo" },
        { t: "教 / 学", py: "jiāo / xué", es: "enseñar / aprender" }
      ]
    },
    /* ───────────── 11 · A1 · Pedir direcciones ───────────── */
    {
      id: "zh-11", titulo: "¿Dónde queda la biblioteca?", nivel: "A1",
      tema: "Pedir direcciones",
      contexto: "Es tu primera semana en un campus universitario de Chengdu. Buscas la biblioteca y le preguntas a un estudiante.",
      rol: "李华 (Lǐ Huá), estudiante universitario, servicial",
      turnos: [
        { bot: "你好！你找什么地方？", py: "Nǐ hǎo! Nǐ zhǎo shénme dìfang?", es: "¡Hola! ¿Qué lugar buscas?",
          opciones: [
            { t: "我找图书馆。", py: "Wǒ zhǎo túshūguǎn.", es: "Busco la biblioteca.", ok: true },
            { t: "你好！请问，图书馆在哪儿？", py: "Nǐ hǎo! Qǐngwèn, túshūguǎn zài nǎr?", es: "¡Hola! Disculpa, ¿dónde queda la biblioteca?", ok: true },
            { t: "请问，在哪儿是图书馆？", py: "Qǐngwèn, zài nǎr shì túshūguǎn?", es: "Disculpa, ¿dónde es la biblioteca?", ok: false,
              fix: "El orden es lugar + 在 + 哪儿: «图书馆在哪儿？». La palabra interrogativa queda donde iría la respuesta." }
          ],
          clave: ["图书馆", "在哪儿", "请问"],
          tip: "请问 (qǐngwèn) = disculpe, ¿puedo preguntarle? Es la forma cortés de empezar una pregunta a un desconocido." },
        { bot: "图书馆不远。你一直往前走。", py: "Túshūguǎn bù yuǎn. Nǐ yìzhí wǎng qián zǒu.", es: "La biblioteca no queda lejos. Sigue derecho.",
          opciones: [
            { t: "一直往前走，对吗？", py: "Yìzhí wǎng qián zǒu, duì ma?", es: "Derecho, ¿cierto?", ok: true },
            { t: "好的，一直往前走。要走多久？", py: "Hǎo de, yìzhí wǎng qián zǒu. Yào zǒu duō jiǔ?", es: "Listo, derecho. ¿Cuánto hay que caminar?", ok: true },
            { t: "好的，我走往前一直。", py: "Hǎo de, wǒ zǒu wǎng qián yìzhí.", es: "Listo, sigo derecho.", ok: false,
              fix: "La dirección va antes del verbo: «一直往前走» (seguir derecho)." }
          ],
          clave: ["一直", "往前走"],
          tip: "往 (wǎng) + dirección + verbo: 往前走 (ir hacia adelante), 往左拐 (girar a la izquierda)." },
        { bot: "走五分钟就到。到了路口往左拐。", py: "Zǒu wǔ fēnzhōng jiù dào. Dào le lùkǒu wǎng zuǒ guǎi.", es: "Caminando cinco minutos llegas. En el cruce, gira a la izquierda.",
          opciones: [
            { t: "在路口往左拐。谢谢！", py: "Zài lùkǒu wǎng zuǒ guǎi. Xièxie!", es: "En el cruce giro a la izquierda. ¡Gracias!", ok: true },
            { t: "走五分钟，然后在路口往左拐，对吧？", py: "Zǒu wǔ fēnzhōng, ránhòu zài lùkǒu wǎng zuǒ guǎi, duì ba?", es: "Camino cinco minutos y luego en el cruce giro a la izquierda, ¿verdad?", ok: true },
            { t: "走五分就到吗？", py: "Zǒu wǔ fēn jiù dào ma?", es: "¿En cinco minutos llego?", ok: false,
              fix: "Para una duración se dice 分钟: «走五分钟». 分 solo se usa con la hora del reloj (三点五分)." }
          ],
          clave: ["路口", "往左拐", "五分钟"],
          tip: "就 (jiù) indica que algo pasa pronto o fácil: 五分钟就到 = en solo cinco minutos llegas." },
        { bot: "图书馆旁边有一个咖啡馆，很好找。", py: "Túshūguǎn pángbiān yǒu yí ge kāfēiguǎn, hěn hǎo zhǎo.", es: "Al lado de la biblioteca hay un café; es fácil de encontrar.",
          opciones: [
            { t: "太好了，我也想喝咖啡。", py: "Tài hǎo le, wǒ yě xiǎng hē kāfēi.", es: "¡Qué bien! Yo también quiero tomar café.", ok: true },
            { t: "旁边有咖啡馆？太好了，看完书我去喝一杯。", py: "Pángbiān yǒu kāfēiguǎn? Tài hǎo le, kàn wán shū wǒ qù hē yì bēi.", es: "¿Hay un café al lado? ¡Qué bien! Después de leer voy a tomarme uno.", ok: true },
            { t: "咖啡馆是旁边图书馆吗？", py: "Kāfēiguǎn shì pángbiān túshūguǎn ma?", es: "¿El café está al lado de la biblioteca?", ok: false,
              fix: "El lugar de referencia va antes de 旁边, y para ubicar se usa 在: «咖啡馆在图书馆旁边吗？»." }
          ],
          clave: ["旁边", "咖啡馆"],
          tip: "在 dice dónde está algo (咖啡馆在图书馆旁边); 有 dice qué hay en un lugar (图书馆旁边有咖啡馆)." },
        { bot: "你是新来的老师吗？", py: "Nǐ shì xīn lái de lǎoshī ma?", es: "¿Tú eres el profesor nuevo?",
          opciones: [
            { t: "是的，我是新来的西班牙语老师。", py: "Shì de, wǒ shì xīn lái de Xībānyáyǔ lǎoshī.", es: "Sí, soy el nuevo profesor de español.", ok: true },
            { t: "对，我从哥伦比亚来，在这儿教西班牙语。", py: "Duì, wǒ cóng Gēlúnbǐyà lái, zài zhèr jiāo Xībānyáyǔ.", es: "Sí, vengo de Colombia y enseño español aquí.", ok: true },
            { t: "对，我教西班牙语在这儿。", py: "Duì, wǒ jiāo Xībānyáyǔ zài zhèr.", es: "Sí, enseño español aquí.", ok: false,
              fix: "El lugar va antes del verbo: «我在这儿教西班牙语»." }
          ],
          clave: ["新来的", "西班牙语", "在这儿"],
          tip: "新来的 (xīn lái de) = recién llegado. 的 convierte la frase en un modificador: 新来的老师." },
        { bot: "欢迎！如果找不到，可以再问别人。", py: "Huānyíng! Rúguǒ zhǎo bu dào, kěyǐ zài wèn biérén.", es: "¡Bienvenido! Si no la encuentras, puedes preguntarle a otra persona.",
          opciones: [
            { t: "好的，谢谢你的帮助！", py: "Hǎo de, xièxie nǐ de bāngzhù!", es: "¡Listo, gracias por tu ayuda!", ok: true },
            { t: "谢谢你！你说得很清楚。", py: "Xièxie nǐ! Nǐ shuō de hěn qīngchu.", es: "¡Gracias! Lo explicaste muy claro.", ok: true },
            { t: "谢谢！你说很清楚。", py: "Xièxie! Nǐ shuō hěn qīngchu.", es: "¡Gracias! Lo explicaste muy claro.", ok: false,
              fix: "Para valorar cómo se hace algo se usa 得: «你说得很清楚»." }
          ],
          clave: ["谢谢", "清楚", "帮助"],
          tip: "Verbo + 得 + adjetivo evalúa una acción: 说得很清楚 (habla claro), 走得很快 (camina rápido)." }
      ],
      cierre: { bot: "不客气！祝你顺利！", py: "Bú kèqi! Zhù nǐ shùnlì!", es: "¡De nada! ¡Que te vaya bien!" },
      vocab: [
        { t: "图书馆", py: "túshūguǎn", es: "biblioteca" },
        { t: "在哪儿", py: "zài nǎr", es: "¿dónde está?" },
        { t: "一直", py: "yìzhí", es: "todo derecho, sin parar" },
        { t: "往左拐", py: "wǎng zuǒ guǎi", es: "girar a la izquierda" },
        { t: "往右拐", py: "wǎng yòu guǎi", es: "girar a la derecha" },
        { t: "路口", py: "lùkǒu", es: "cruce, esquina" },
        { t: "旁边", py: "pángbiān", es: "al lado" },
        { t: "请问", py: "qǐngwèn", es: "disculpe (para preguntar)" }
      ]
    },
    {
      id: "zh-12", titulo: "Sin maní, por favor", nivel: "A2",
      tema: "Restaurante y restricciones alimentarias",
      contexto: "Cenas con dos colegas en un restaurante de Hangzhou. Eres alérgico al maní y una colega no come carne: debes explicárselo al mesero.",
      rol: "服务员 (fúwùyuán), mesero atento y rápido",
      turnos: [
        { bot: "欢迎光临！几位？", py: "Huānyíng guānglín! Jǐ wèi?", es: "¡Bienvenidos! ¿Cuántas personas son?",
          opciones: [
            { t: "三位。", py: "Sān wèi.", es: "Tres.", ok: true },
            { t: "我们三个人，有靠窗的座位吗？", py: "Wǒmen sān ge rén, yǒu kào chuāng de zuòwèi ma?", es: "Somos tres, ¿hay mesa junto a la ventana?", ok: true },
            { t: "我们是三。", py: "Wǒmen shì sān.", es: "Somos tres.", ok: false,
              fix: "Con personas se necesita clasificador y no se usa 是: «三位» (cortés) o «我们三个人»." }
          ],
          clave: ["三位", "三个人"],
          tip: "位 (wèi) es el clasificador cortés para personas; los meseros siempre preguntan 几位？" },
        { bot: "这是菜单。你们想吃什么？", py: "Zhè shì càidān. Nǐmen xiǎng chī shénme?", es: "Aquí está el menú. ¿Qué desean comer?",
          opciones: [
            { t: "我们先看看。有什么推荐的吗？", py: "Wǒmen xiān kànkan. Yǒu shénme tuījiàn de ma?", es: "Primero miramos. ¿Qué nos recomienda?", ok: true },
            { t: "请问，你们有素菜吗？我的同事不吃肉。", py: "Qǐngwèn, nǐmen yǒu sùcài ma? Wǒ de tóngshì bù chī ròu.", es: "Disculpe, ¿tienen platos vegetarianos? Mi colega no come carne.", ok: true },
            { t: "你们有菜素吗？我的同事不吃肉。", py: "Nǐmen yǒu cài sù ma? Wǒ de tóngshì bù chī ròu.", es: "¿Tienen platos vegetarianos? Mi colega no come carne.", ok: false,
              fix: "El modificador va antes del sustantivo: «素菜» (plato vegetariano), no «菜素»." }
          ],
          clave: ["素菜", "不吃肉", "推荐"],
          tip: "素 (sù) = vegetariano: 素菜 (plato vegetariano), 吃素 (ser vegetariano)." },
        { bot: "有。这个麻婆豆腐很好吃，不过有肉末。", py: "Yǒu. Zhège mápó dòufu hěn hǎochī, búguò yǒu ròumò.", es: "Sí. Este tofu mapo es delicioso, pero lleva carne molida.",
          opciones: [
            { t: "可以不放肉吗？", py: "Kěyǐ bú fàng ròu ma?", es: "¿Se puede hacer sin carne?", ok: true },
            { t: "能做一个素的麻婆豆腐吗？不要放肉。", py: "Néng zuò yí ge sù de mápó dòufu ma? Búyào fàng ròu.", es: "¿Pueden hacer un tofu mapo vegetariano? Sin carne.", ok: true },
            { t: "可以没有放肉吗？", py: "Kěyǐ méiyǒu fàng ròu ma?", es: "¿Se puede hacer sin carne?", ok: false,
              fix: "Para pedir que no se haga algo se usa 不 o 不要: «可以不放肉吗？». 没有 niega acciones del pasado." }
          ],
          clave: ["不放肉", "素的"],
          tip: "不要放… (búyào fàng…) = no le ponga…: muy útil para pedir platos a su gusto." },
        { bot: "没问题。还有别的要求吗？", py: "Méi wèntí. Hái yǒu bié de yāoqiú ma?", es: "Sin problema. ¿Alguna otra petición?",
          opciones: [
            { t: "有，我对花生过敏。", py: "Yǒu, wǒ duì huāshēng guòmǐn.", es: "Sí, soy alérgico al maní.", ok: true },
            { t: "有。我对花生过敏，所有的菜都不要放花生和花生油。", py: "Yǒu. Wǒ duì huāshēng guòmǐn, suǒyǒu de cài dōu búyào fàng huāshēng hé huāshēngyóu.", es: "Sí. Soy alérgico al maní; por favor, ningún plato con maní ni aceite de maní.", ok: true },
            { t: "有，我过敏花生。", py: "Yǒu, wǒ guòmǐn huāshēng.", es: "Sí, soy alérgico al maní.", ok: false,
              fix: "过敏 no lleva objeto directo: «我对花生过敏» (对 + causa + 过敏)." }
          ],
          clave: ["对花生过敏", "不要放"],
          tip: "Estructura clave para la salud: 对 + X + 过敏 = ser alérgico a X. Dígalo siempre al pedir." },
        { bot: "好的，我告诉厨师。宫保鸡丁有花生，你不能点。", py: "Hǎo de, wǒ gàosu chúshī. Gōngbǎo jīdīng yǒu huāshēng, nǐ bù néng diǎn.", es: "Bien, le aviso al chef. El pollo gongbao lleva maní; ese no lo puede pedir.",
          opciones: [
            { t: "谢谢提醒！那我要一份清蒸鱼。", py: "Xièxie tíxǐng! Nà wǒ yào yí fèn qīngzhēng yú.", es: "¡Gracias por avisar! Entonces quiero un pescado al vapor.", ok: true },
            { t: "明白了。那请给我们一份炒青菜和两碗米饭。", py: "Míngbai le. Nà qǐng gěi wǒmen yí fèn chǎo qīngcài hé liǎng wǎn mǐfàn.", es: "Entendido. Entonces tráiganos verduras salteadas y dos tazones de arroz.", ok: true },
            { t: "明白了。请给我们二碗米饭。", py: "Míngbai le. Qǐng gěi wǒmen èr wǎn mǐfàn.", es: "Entendido. Tráiganos dos tazones de arroz.", ok: false,
              fix: "Antes de un clasificador se usa 两 (liǎng), no 二: «两碗米饭»." }
          ],
          clave: ["一份", "两碗", "清蒸鱼"],
          tip: "份 (fèn) = porción; 碗 (wǎn) = tazón. Son clasificadores frecuentes en el restaurante." },
        { bot: "好的，菜马上来。要喝点儿什么？", py: "Hǎo de, cài mǎshàng lái. Yào hē diǎnr shénme?", es: "Bien, la comida ya viene. ¿Qué van a tomar?",
          opciones: [
            { t: "一壶绿茶，谢谢。", py: "Yì hú lǜchá, xièxie.", es: "Una tetera de té verde, gracias.", ok: true },
            { t: "请给我们一壶热茶，再来三瓶水。", py: "Qǐng gěi wǒmen yì hú rè chá, zài lái sān píng shuǐ.", es: "Tráiganos una tetera de té caliente y además tres botellas de agua.", ok: true },
            { t: "我要喝茶绿。", py: "Wǒ yào hē chá lǜ.", es: "Quiero tomar té verde.", ok: false,
              fix: "El adjetivo va antes del sustantivo: «绿茶» (té verde). Para pedir: «一壶绿茶»." }
          ],
          clave: ["绿茶", "一壶", "瓶"],
          tip: "壶 (hú) = tetera o jarra; 瓶 (píng) = botella. En China es común compartir una tetera en la mesa." }
      ],
      cierre: { bot: "好的，请稍等。", py: "Hǎo de, qǐng shāo děng.", es: "Muy bien, un momento, por favor." },
      vocab: [
        { t: "菜单", py: "càidān", es: "menú, carta" },
        { t: "素菜", py: "sùcài", es: "plato vegetariano" },
        { t: "过敏", py: "guòmǐn", es: "alergia; ser alérgico" },
        { t: "花生", py: "huāshēng", es: "maní" },
        { t: "不要放", py: "búyào fàng", es: "no le ponga" },
        { t: "推荐", py: "tuījiàn", es: "recomendar" },
        { t: "厨师", py: "chúshī", es: "cocinero(a), chef" },
        { t: "一壶茶", py: "yì hú chá", es: "una tetera de té" }
      ]
    },
    {
      id: "zh-13", titulo: "Fruta para la sala de profesores", nivel: "A1",
      tema: "Mercado",
      contexto: "Vas a un mercado de Cantón (Guangzhou) a comprar fruta para compartir con tus colegas. Hablas con la vendedora de un puesto.",
      rol: "张阿姨 (Zhāng āyí), vendedora de frutas, conversadora",
      turnos: [
        { bot: "你好！要买什么？", py: "Nǐ hǎo! Yào mǎi shénme?", es: "¡Hola! ¿Qué va a llevar?",
          opciones: [
            { t: "我要买苹果。", py: "Wǒ yào mǎi píngguǒ.", es: "Quiero comprar manzanas.", ok: true },
            { t: "阿姨好！我想买一些水果。", py: "Āyí hǎo! Wǒ xiǎng mǎi yìxiē shuǐguǒ.", es: "¡Buenas, señora! Quiero comprar algo de fruta.", ok: true },
            { t: "我想买水果一些。", py: "Wǒ xiǎng mǎi shuǐguǒ yìxiē.", es: "Quiero comprar algo de fruta.", ok: false,
              fix: "一些 (algunos, un poco de) va antes del sustantivo: «一些水果»." }
          ],
          clave: ["买", "水果", "苹果"],
          tip: "阿姨 (āyí, «tía») es una forma cariñosa y respetuosa de llamar a una señora que atiende un puesto." },
        { bot: "苹果五块钱一斤。", py: "Píngguǒ wǔ kuài qián yì jīn.", es: "Las manzanas están a cinco yuanes el jin (medio kilo).",
          opciones: [
            { t: "我要两斤。", py: "Wǒ yào liǎng jīn.", es: "Quiero dos jin.", ok: true },
            { t: "好，给我两斤苹果。", py: "Hǎo, gěi wǒ liǎng jīn píngguǒ.", es: "Bueno, deme dos jin de manzanas.", ok: true },
            { t: "我要二斤。", py: "Wǒ yào èr jīn.", es: "Quiero dos jin.", ok: false,
              fix: "Antes de una unidad de medida se usa 两: «两斤»." }
          ],
          clave: ["两斤", "苹果"],
          tip: "斤 (jīn) es una unidad de peso china: 1 斤 = 500 gramos. En el mercado los precios suelen ser «por jin»." },
        { bot: "还要别的吗？今天的芒果很甜。", py: "Hái yào bié de ma? Jīntiān de mángguǒ hěn tián.", es: "¿Algo más? Hoy los mangos están muy dulces.",
          opciones: [
            { t: "好，我也要三个芒果。", py: "Hǎo, wǒ yě yào sān ge mángguǒ.", es: "Bueno, también quiero tres mangos.", ok: true },
            { t: "真的吗？我可以尝一下吗？", py: "Zhēn de ma? Wǒ kěyǐ cháng yíxià ma?", es: "¿De verdad? ¿Puedo probar un poquito?", ok: true },
            { t: "好，我也要三芒果。", py: "Hǎo, wǒ yě yào sān mángguǒ.", es: "Bueno, también quiero tres mangos.", ok: false,
              fix: "Entre el número y el sustantivo va un clasificador: «三个芒果»." }
          ],
          clave: ["芒果", "三个", "尝"],
          tip: "一下 (yíxià) después del verbo suaviza la petición: 尝一下 = probar un poquito." },
        { bot: "一共二十五块。", py: "Yígòng èrshíwǔ kuài.", es: "En total son veinticinco yuanes.",
          opciones: [
            { t: "便宜一点儿，可以吗？", py: "Piányi yìdiǎnr, kěyǐ ma?", es: "¿Me lo deja un poquito más barato?", ok: true },
            { t: "好的。可以用手机付吗？", py: "Hǎo de. Kěyǐ yòng shǒujī fù ma?", es: "Bueno. ¿Puedo pagar con el celular?", ok: true },
            { t: "可以一点儿便宜吗？", py: "Kěyǐ yìdiǎnr piányi ma?", es: "¿Me lo deja un poquito más barato?", ok: false,
              fix: "一点儿 va después del adjetivo: «便宜一点儿» (un poco más barato)." }
          ],
          clave: ["便宜一点儿", "手机", "付"],
          tip: "En China casi todo se paga con el celular escaneando un código QR: 扫码 (sǎo mǎ)." },
        { bot: "二十三块吧。你扫这个码。", py: "Èrshísān kuài ba. Nǐ sǎo zhège mǎ.", es: "Que sean veintitrés. Escanee este código.",
          opciones: [
            { t: "好的，我扫好了。", py: "Hǎo de, wǒ sǎo hǎo le.", es: "Listo, ya lo escaneé.", ok: true },
            { t: "谢谢阿姨！我付了，你看一下。", py: "Xièxie āyí! Wǒ fù le, nǐ kàn yíxià.", es: "¡Gracias, señora! Ya pagué, mire usted.", ok: true },
            { t: "谢谢！我已经付。", py: "Xièxie! Wǒ yǐjīng fù.", es: "¡Gracias! Ya pagué.", ok: false,
              fix: "Una acción ya terminada necesita 了: «我已经付了» o «我付好了»." }
          ],
          clave: ["扫", "付了"],
          tip: "Verbo + 好了 indica que la acción quedó lista: 扫好了 (ya escaneé), 做好了 (ya está hecho)." },
        { bot: "收到了。要袋子吗？", py: "Shōu dào le. Yào dàizi ma?", es: "Recibido. ¿Quiere bolsa?",
          opciones: [
            { t: "不要，我有袋子。", py: "Bú yào, wǒ yǒu dàizi.", es: "No, tengo bolsa.", ok: true },
            { t: "不用了，谢谢，我带了购物袋。", py: "Bú yòng le, xièxie, wǒ dài le gòuwùdài.", es: "No hace falta, gracias; traje mi bolsa de compras.", ok: true },
            { t: "不是，我有袋子。", py: "Bú shì, wǒ yǒu dàizi.", es: "No, tengo bolsa.", ok: false,
              fix: "不是 niega identidades. Para rechazar algo que le ofrecen diga «不要» o «不用了»." }
          ],
          clave: ["不用了", "袋子"],
          tip: "不用了 (bú yòng le) = no hace falta, gracias. Es la forma amable de rechazar algo." }
      ],
      cierre: { bot: "好，慢走！下次再来！", py: "Hǎo, màn zǒu! Xià cì zài lái!", es: "¡Bueno, que le vaya bien! ¡Vuelva pronto!" },
      vocab: [
        { t: "水果", py: "shuǐguǒ", es: "fruta" },
        { t: "苹果", py: "píngguǒ", es: "manzana" },
        { t: "芒果", py: "mángguǒ", es: "mango" },
        { t: "斤", py: "jīn", es: "jin (medio kilo)" },
        { t: "块", py: "kuài", es: "yuan (coloquial)" },
        { t: "一共", py: "yígòng", es: "en total" },
        { t: "便宜", py: "piányi", es: "barato" },
        { t: "扫码", py: "sǎo mǎ", es: "escanear el código" }
      ]
    },
    {
      id: "zh-14", titulo: "Gripa en pleno intercambio", nivel: "A2",
      tema: "Cita médica sencilla",
      contexto: "Durante tu intercambio en Nankín amaneces con fiebre y dolor de garganta. Vas al consultorio de un hospital.",
      rol: "刘医生 (Liú yīshēng), médico general, tranquilo y claro",
      turnos: [
        { bot: "你好，请坐。你哪儿不舒服？", py: "Nǐ hǎo, qǐng zuò. Nǐ nǎr bù shūfu?", es: "Hola, siéntese. ¿Qué le molesta?",
          opciones: [
            { t: "我嗓子疼。", py: "Wǒ sǎngzi téng.", es: "Me duele la garganta.", ok: true },
            { t: "医生好，我嗓子疼，还有点儿发烧。", py: "Yīshēng hǎo, wǒ sǎngzi téng, hái yǒudiǎnr fāshāo.", es: "Buenos días, doctor. Me duele la garganta y además tengo algo de fiebre.", ok: true },
            { t: "我有嗓子疼。", py: "Wǒ yǒu sǎngzi téng.", es: "Me duele la garganta.", ok: false,
              fix: "El dolor se dice parte del cuerpo + 疼, sin 有: «我嗓子疼»." }
          ],
          clave: ["嗓子疼", "发烧"],
          tip: "Parte del cuerpo + 疼 (téng) = dolor: 头疼 (cabeza), 肚子疼 (barriga), 嗓子疼 (garganta)." },
        { bot: "从什么时候开始的？", py: "Cóng shénme shíhou kāishǐ de?", es: "¿Desde cuándo empezó?",
          opciones: [
            { t: "从昨天开始的。", py: "Cóng zuótiān kāishǐ de.", es: "Empezó ayer.", ok: true },
            { t: "昨天晚上开始的，今天早上更疼了。", py: "Zuótiān wǎnshang kāishǐ de, jīntiān zǎoshang gèng téng le.", es: "Empezó anoche y esta mañana me dolía más.", ok: true },
            { t: "开始昨天晚上。", py: "Kāishǐ zuótiān wǎnshang.", es: "Empezó anoche.", ok: false,
              fix: "El tiempo va antes del verbo: «昨天晚上开始的»." }
          ],
          clave: ["昨天", "开始的"],
          tip: "是……的 resalta cuándo o cómo pasó algo ya ocurrido: (是)昨天开始的 = empezó ayer." },
        { bot: "我看看。发烧多少度？", py: "Wǒ kànkan. Fāshāo duōshao dù?", es: "Déjeme ver. ¿Cuántos grados de fiebre tiene?",
          opciones: [
            { t: "三十八度。", py: "Sānshíbā dù.", es: "Treinta y ocho grados.", ok: true },
            { t: "早上量了一下，三十八度左右。", py: "Zǎoshang liáng le yíxià, sānshíbā dù zuǒyòu.", es: "Me la tomé esta mañana: unos treinta y ocho grados.", ok: true },
            { t: "左右三十八度。", py: "Zuǒyòu sānshíbā dù.", es: "Unos treinta y ocho grados.", ok: false,
              fix: "左右 (más o menos) va después de la cifra: «三十八度左右»." }
          ],
          clave: ["度", "左右"],
          tip: "左右 (zuǒyòu) después de una cifra = aproximadamente: 三十八度左右 (unos 38 grados)." },
        { bot: "你对什么药过敏吗？", py: "Nǐ duì shénme yào guòmǐn ma?", es: "¿Es alérgico a algún medicamento?",
          opciones: [
            { t: "没有，我对药不过敏。", py: "Méiyǒu, wǒ duì yào bú guòmǐn.", es: "No, no soy alérgico a medicamentos.", ok: true },
            { t: "有，我对青霉素过敏。", py: "Yǒu, wǒ duì qīngméisù guòmǐn.", es: "Sí, soy alérgico a la penicilina.", ok: true },
            { t: "有，我过敏青霉素。", py: "Yǒu, wǒ guòmǐn qīngméisù.", es: "Sí, soy alérgico a la penicilina.", ok: false,
              fix: "过敏 no lleva objeto directo: «我对青霉素过敏»." }
          ],
          clave: ["过敏", "青霉素"],
          tip: "Lleve escrito en chino «我对……过敏» si tiene alergias: en una urgencia ahorra tiempo." },
        { bot: "你感冒了。这个药一天吃三次，一次两片。", py: "Nǐ gǎnmào le. Zhège yào yì tiān chī sān cì, yí cì liǎng piàn.", es: "Tiene un resfriado. Tome esta medicina tres veces al día, dos pastillas cada vez.",
          opciones: [
            { t: "一天三次，一次两片。好的。", py: "Yì tiān sān cì, yí cì liǎng piàn. Hǎo de.", es: "Tres veces al día, dos pastillas cada vez. Entendido.", ok: true },
            { t: "明白了。饭前吃还是饭后吃？", py: "Míngbai le. Fàn qián chī háishi fàn hòu chī?", es: "Entendido. ¿Antes o después de comer?", ok: true },
            { t: "明白了。我吃三次一天。", py: "Míngbai le. Wǒ chī sān cì yì tiān.", es: "Entendido. Tomo tres veces al día.", ok: false,
              fix: "El período va antes del verbo y las veces después: «一天吃三次»." }
          ],
          clave: ["一天三次", "两片", "饭后"],
          tip: "还是 (háishi) = «o» en preguntas: 饭前还是饭后？ (¿antes o después de comer?)." },
        { bot: "饭后吃。多喝水，好好休息，最好请两天假。", py: "Fàn hòu chī. Duō hē shuǐ, hǎohǎo xiūxi, zuìhǎo qǐng liǎng tiān jià.", es: "Después de comer. Tome mucha agua, descanse bien y lo mejor es que pida dos días de permiso.",
          opciones: [
            { t: "好的，我跟学校请两天假。", py: "Hǎo de, wǒ gēn xuéxiào qǐng liǎng tiān jià.", es: "Bueno, le pido dos días de permiso al colegio.", ok: true },
            { t: "谢谢医生。能给我开一张病假条吗？", py: "Xièxie yīshēng. Néng gěi wǒ kāi yì zhāng bìngjiàtiáo ma?", es: "Gracias, doctor. ¿Me puede dar una incapacidad por escrito?", ok: true },
            { t: "好的，我请二天假。", py: "Hǎo de, wǒ qǐng èr tiān jià.", es: "Bueno, pido dos días de permiso.", ok: false,
              fix: "Antes de 天 (día) se usa 两: «两天». 天 funciona como clasificador." }
          ],
          clave: ["请假", "休息", "病假条"],
          tip: "请假 (qǐngjià) es un verbo separable: la duración va en medio: 请两天假 (pedir dos días de permiso)." }
      ],
      cierre: { bot: "好的。祝你早日康复！", py: "Hǎo de. Zhù nǐ zǎorì kāngfù!", es: "Muy bien. ¡Que se mejore pronto!" },
      vocab: [
        { t: "不舒服", py: "bù shūfu", es: "sentirse mal" },
        { t: "嗓子疼", py: "sǎngzi téng", es: "dolor de garganta" },
        { t: "发烧", py: "fāshāo", es: "tener fiebre" },
        { t: "感冒", py: "gǎnmào", es: "resfriado (gripa)" },
        { t: "药", py: "yào", es: "medicina" },
        { t: "片", py: "piàn", es: "pastilla (clasificador)" },
        { t: "请假", py: "qǐngjià", es: "pedir permiso (ausentarse)" },
        { t: "病假条", py: "bìngjiàtiáo", es: "constancia médica, incapacidad" }
      ]
    },
    {
      id: "zh-15", titulo: "Cambiar dólares en el banco", nivel: "A2",
      tema: "Banco o casa de cambio",
      contexto: "Acabas de llegar a Shanghái para un intercambio y necesitas cambiar dólares a yuanes en la ventanilla de un banco.",
      rol: "陈先生 (Chén xiānsheng), empleado de banco, formal",
      turnos: [
        { bot: "您好！请问您办什么业务？", py: "Nín hǎo! Qǐngwèn nín bàn shénme yèwù?", es: "¡Buenos días! ¿Qué trámite desea hacer?",
          opciones: [
            { t: "我想换钱。", py: "Wǒ xiǎng huàn qián.", es: "Quiero cambiar dinero.", ok: true },
            { t: "您好，我想把美元换成人民币。", py: "Nín hǎo, wǒ xiǎng bǎ Měiyuán huàn chéng Rénmínbì.", es: "Buenos días, quiero cambiar dólares a yuanes.", ok: true },
            { t: "我想换美元到人民币。", py: "Wǒ xiǎng huàn Měiyuán dào Rénmínbì.", es: "Quiero cambiar dólares a yuanes.", ok: false,
              fix: "«Cambiar A por B» se dice «把美元换成人民币» o «用美元换人民币», no con 到." }
          ],
          clave: ["换钱", "美元", "人民币"],
          tip: "把 + objeto + 换成 + resultado: 把美元换成人民币 (convertir dólares en yuanes)." },
        { bot: "好的。请先取个号，然后填一下这张表。", py: "Hǎo de. Qǐng xiān qǔ ge hào, ránhòu tián yíxià zhè zhāng biǎo.", es: "Bien. Primero tome un turno y luego llene este formulario.",
          opciones: [
            { t: "好的。在哪儿取号？", py: "Hǎo de. Zài nǎr qǔ hào?", es: "Bien. ¿Dónde tomo el turno?", ok: true },
            { t: "好。这张表要用中文填吗？", py: "Hǎo. Zhè zhāng biǎo yào yòng Zhōngwén tián ma?", es: "Bien. ¿Este formulario hay que llenarlo en chino?", ok: true },
            { t: "好。这张表要填用中文吗？", py: "Hǎo. Zhè zhāng biǎo yào tián yòng Zhōngwén ma?", es: "Bien. ¿Este formulario hay que llenarlo en chino?", ok: false,
              fix: "El medio (用中文) va antes del verbo: «要用中文填吗？»." }
          ],
          clave: ["取号", "填", "用中文"],
          tip: "张 (zhāng) es el clasificador de objetos planos: 一张表 (un formulario), 一张纸 (una hoja)." },
        { bot: "中文、英文都可以。请给我看一下您的护照。", py: "Zhōngwén, Yīngwén dōu kěyǐ. Qǐng gěi wǒ kàn yíxià nín de hùzhào.", es: "En chino o en inglés, como quiera. Muéstreme su pasaporte, por favor.",
          opciones: [
            { t: "好的，这是我的护照。", py: "Hǎo de, zhè shì wǒ de hùzhào.", es: "Claro, aquí está mi pasaporte.", ok: true },
            { t: "给您。表我也填好了。", py: "Gěi nín. Biǎo wǒ yě tián hǎo le.", es: "Aquí tiene. El formulario también ya lo llené.", ok: true },
            { t: "好的，这是我护照的。", py: "Hǎo de, zhè shì wǒ hùzhào de.", es: "Claro, aquí está mi pasaporte.", ok: false,
              fix: "的 va entre el poseedor y lo poseído: «我的护照»." }
          ],
          clave: ["护照", "给您", "填好"],
          tip: "给您 (gěi nín) = aquí tiene. Entregue documentos con las dos manos: es un gesto de respeto." },
        { bot: "您换多少？", py: "Nín huàn duōshao?", es: "¿Cuánto va a cambiar?",
          opciones: [
            { t: "我换两百美元。", py: "Wǒ huàn liǎng bǎi Měiyuán.", es: "Cambio doscientos dólares.", ok: true },
            { t: "两百美元。今天的汇率是多少？", py: "Liǎng bǎi Měiyuán. Jīntiān de huìlǜ shì duōshao?", es: "Doscientos dólares. ¿A cuánto está hoy el cambio?", ok: true },
            { t: "我换美元两百。", py: "Wǒ huàn Měiyuán liǎng bǎi.", es: "Cambio doscientos dólares.", ok: false,
              fix: "La cantidad va antes de la moneda: «两百美元»." }
          ],
          clave: ["两百", "美元", "汇率"],
          tip: "Ante 千 y 万 se prefiere 两 (两千, 两万); ante 百 son correctos 两百 y 二百. En 12 y 20 se usa 二: 十二, 二十." },
        { bot: "汇率在那个屏幕上，每天都不一样。", py: "Huìlǜ zài nàge píngmù shang, měitiān dōu bù yíyàng.", es: "El tipo de cambio está en esa pantalla; cada día es distinto.",
          opciones: [
            { t: "好的，我看到了。", py: "Hǎo de, wǒ kàn dào le.", es: "Bien, ya lo vi.", ok: true },
            { t: "明白了。有手续费吗？", py: "Míngbai le. Yǒu shǒuxùfèi ma?", es: "Entendido. ¿Cobran comisión?", ok: true },
            { t: "明白了。有没有手续费吗？", py: "Míngbai le. Yǒu méiyǒu shǒuxùfèi ma?", es: "Entendido. ¿Cobran comisión?", ok: false,
              fix: "No se combinan 有没有 y 吗: «有没有手续费？» o «有手续费吗？»." }
          ],
          clave: ["手续费", "汇率", "看到"],
          tip: "Dos formas de preguntar sí o no: con 吗 (有吗？) o repitiendo el verbo (有没有？). Nunca las dos juntas." },
        { bot: "这是您的钱和收据，请点一下。", py: "Zhè shì nín de qián hé shōujù, qǐng diǎn yíxià.", es: "Aquí tiene su dinero y el recibo; cuéntelo, por favor.",
          opciones: [
            { t: "没错，谢谢！", py: "Méi cuò, xièxie!", es: "Está correcto, ¡gracias!", ok: true },
            { t: "我点好了，没问题。谢谢您！", py: "Wǒ diǎn hǎo le, méi wèntí. Xièxie nín!", es: "Ya lo conté, todo bien. ¡Muchas gracias!", ok: true },
            { t: "钱是对。谢谢！", py: "Qián shì duì. Xièxie!", es: "El dinero está bien. ¡Gracias!", ok: false,
              fix: "Con adjetivos no se usa 是. Diga «没错» o «钱对了»." }
          ],
          clave: ["点", "没问题", "没错"],
          tip: "点 (diǎn) aquí significa contar billetes: 请点一下 = por favor cuéntelo antes de irse." }
      ],
      cierre: { bot: "不客气，欢迎再来！", py: "Bú kèqi, huānyíng zài lái!", es: "¡Con gusto, vuelva cuando quiera!" },
      vocab: [
        { t: "换钱", py: "huàn qián", es: "cambiar dinero" },
        { t: "美元", py: "Měiyuán", es: "dólar estadounidense" },
        { t: "人民币", py: "Rénmínbì", es: "yuan, moneda china" },
        { t: "汇率", py: "huìlǜ", es: "tipo de cambio" },
        { t: "手续费", py: "shǒuxùfèi", es: "comisión" },
        { t: "护照", py: "hùzhào", es: "pasaporte" },
        { t: "填表", py: "tián biǎo", es: "llenar un formulario" },
        { t: "收据", py: "shōujù", es: "recibo" }
      ]
    },
    {
      id: "zh-16", titulo: "En metro hasta el colegio", nivel: "A1",
      tema: "Transporte",
      contexto: "Mañana empiezas a enseñar en un colegio de Pekín. En la estación de metro le preguntas a una funcionaria cómo llegar.",
      rol: "小周 (Xiǎo Zhōu), funcionaria del metro, amable",
      turnos: [
        { bot: "你好，需要帮忙吗？", py: "Nǐ hǎo, xūyào bāngmáng ma?", es: "Hola, ¿necesita ayuda?",
          opciones: [
            { t: "你好，我想去光明中学。", py: "Nǐ hǎo, wǒ xiǎng qù Guāngmíng Zhōngxué.", es: "Hola, quiero ir al colegio Guangming.", ok: true },
            { t: "是的，谢谢！去光明中学怎么走？", py: "Shì de, xièxie! Qù Guāngmíng Zhōngxué zěnme zǒu?", es: "Sí, ¡gracias! ¿Cómo llego al colegio Guangming?", ok: true },
            { t: "是的。怎么走去光明中学？", py: "Shì de. Zěnme zǒu qù Guāngmíng Zhōngxué?", es: "Sí. ¿Cómo llego al colegio Guangming?", ok: false,
              fix: "El destino va primero: «去光明中学怎么走？»." }
          ],
          clave: ["怎么走", "光明中学", "去"],
          tip: "Pregunta clave para orientarse: 去 + lugar + 怎么走？ (¿cómo se llega a…?)." },
        { bot: "你坐二号线，在第三站下车。", py: "Nǐ zuò èr hào xiàn, zài dì sān zhàn xià chē.", es: "Tome la línea 2 y bájese en la tercera estación.",
          opciones: [
            { t: "二号线，第三站。谢谢！", py: "Èr hào xiàn, dì sān zhàn. Xièxie!", es: "Línea 2, tercera estación. ¡Gracias!", ok: true },
            { t: "坐二号线，在第三站下车，对吗？", py: "Zuò èr hào xiàn, zài dì sān zhàn xià chē, duì ma?", es: "Tomo la línea 2 y me bajo en la tercera estación, ¿cierto?", ok: true },
            { t: "坐两号线，在第三站下车，对吗？", py: "Zuò liǎng hào xiàn, zài dì sān zhàn xià chē, duì ma?", es: "Tomo la línea 2 y me bajo en la tercera, ¿cierto?", ok: false,
              fix: "Para números de línea, salón o bus se usa 二: «二号线». 两 solo va antes de clasificadores (两个人)." }
          ],
          clave: ["二号线", "第三站", "下车"],
          tip: "号 (hào) numera cosas: 二号线 (línea 2), 三号楼 (edificio 3). Aquí siempre se usa 二, no 两." },
        { bot: "下车以后，从B口出去。", py: "Xià chē yǐhòu, cóng B kǒu chūqù.", es: "Después de bajarse, salga por la salida B.",
          opciones: [
            { t: "好的，从B口出去。", py: "Hǎo de, cóng B kǒu chūqù.", es: "Bien, salgo por la B.", ok: true },
            { t: "从B口出去以后，还要走很远吗？", py: "Cóng B kǒu chūqù yǐhòu, hái yào zǒu hěn yuǎn ma?", es: "Después de salir por la B, ¿todavía hay que caminar mucho?", ok: true },
            { t: "好的，我出去从B口。", py: "Hǎo de, wǒ chūqù cóng B kǒu.", es: "Bien, salgo por la B.", ok: false,
              fix: "El punto de partida va antes del verbo: «从B口出去»." }
          ],
          clave: ["B口", "出去", "以后"],
          tip: "从 (cóng) + lugar + verbo = desde o por dónde: 从B口出去 (salir por la B)." },
        { bot: "不远，出来就能看到学校。你有交通卡吗？", py: "Bù yuǎn, chūlái jiù néng kàn dào xuéxiào. Nǐ yǒu jiāotōngkǎ ma?", es: "No es lejos: al salir ya ve el colegio. ¿Tiene tarjeta de transporte?",
          opciones: [
            { t: "没有，在哪儿买？", py: "Méiyǒu, zài nǎr mǎi?", es: "No, ¿dónde la compro?", ok: true },
            { t: "还没有。我可以用手机扫码进站吗？", py: "Hái méiyǒu. Wǒ kěyǐ yòng shǒujī sǎo mǎ jìn zhàn ma?", es: "Todavía no. ¿Puedo entrar escaneando el código con el celular?", ok: true },
            { t: "不有，在哪儿买？", py: "Bù yǒu, zài nǎr mǎi?", es: "No tengo, ¿dónde la compro?", ok: false,
              fix: "有 se niega siempre con 没: «没有». Nunca «不有»." }
          ],
          clave: ["没有", "交通卡", "扫码"],
          tip: "有 es el único verbo que se niega solo con 没: 没有 (no tener, no hay)." },
        { bot: "可以，用手机扫码就行。早上七点到九点人很多。", py: "Kěyǐ, yòng shǒujī sǎo mǎ jiù xíng. Zǎoshang qī diǎn dào jiǔ diǎn rén hěn duō.", es: "Sí, basta con escanear con el celular. De siete a nueve de la mañana hay mucha gente.",
          opciones: [
            { t: "好的，我早一点儿出门。", py: "Hǎo de, wǒ zǎo yìdiǎnr chūmén.", es: "Bien, salgo un poco más temprano.", ok: true },
            { t: "谢谢提醒。明天我六点半出门。", py: "Xièxie tíxǐng. Míngtiān wǒ liù diǎn bàn chūmén.", es: "Gracias por avisar. Mañana salgo a las seis y media.", ok: true },
            { t: "谢谢。我出门六点半明天。", py: "Xièxie. Wǒ chūmén liù diǎn bàn míngtiān.", es: "Gracias. Mañana salgo a las seis y media.", ok: false,
              fix: "El tiempo va antes del verbo: «明天我六点半出门»." }
          ],
          clave: ["出门", "早一点儿", "六点半"],
          tip: "Hora: 点 (en punto), 半 (y media): 六点半 = 6:30. Siempre va antes del verbo." },
        { bot: "对，早点儿出门好。你是老师吗？", py: "Duì, zǎo diǎnr chūmén hǎo. Nǐ shì lǎoshī ma?", es: "Sí, mejor salir temprano. ¿Usted es profesor?",
          opciones: [
            { t: "对，我是英语老师。", py: "Duì, wǒ shì Yīngyǔ lǎoshī.", es: "Sí, soy profesor de inglés.", ok: true },
            { t: "是的，我在光明中学教英语，明天开始。", py: "Shì de, wǒ zài Guāngmíng Zhōngxué jiāo Yīngyǔ, míngtiān kāishǐ.", es: "Sí, enseño inglés en el colegio Guangming; empiezo mañana.", ok: true },
            { t: "对，我是老师英语。", py: "Duì, wǒ shì lǎoshī Yīngyǔ.", es: "Sí, soy profesor de inglés.", ok: false,
              fix: "La materia va antes de 老师: «英语老师» (profesor de inglés)." }
          ],
          clave: ["老师", "教英语"],
          tip: "«Profesor de inglés» = 英语老师: el modificador va antes, igual que en 数学老师." }
      ],
      cierre: { bot: "欢迎你来北京！一路顺利！", py: "Huānyíng nǐ lái Běijīng! Yí lù shùnlì!", es: "¡Bienvenido a Pekín! ¡Buen viaje!" },
      vocab: [
        { t: "地铁", py: "dìtiě", es: "metro" },
        { t: "号线", py: "hào xiàn", es: "línea (de metro)" },
        { t: "站", py: "zhàn", es: "estación, parada" },
        { t: "下车", py: "xià chē", es: "bajarse (de un vehículo)" },
        { t: "出口", py: "chūkǒu", es: "salida" },
        { t: "交通卡", py: "jiāotōngkǎ", es: "tarjeta de transporte" },
        { t: "出门", py: "chūmén", es: "salir de casa" },
        { t: "怎么走", py: "zěnme zǒu", es: "¿cómo se llega?" }
      ]
    },
    {
      id: "zh-17", titulo: "Cali, donde no hay invierno", nivel: "A2",
      tema: "Clima y Cali",
      contexto: "En una videollamada, una colega de Harbin, en el norte frío de China, te pregunta por el clima de Cali y por la ciudad.",
      rol: "林老师 (Lín lǎoshī), profesora en Harbin, alegre",
      turnos: [
        { bot: "你好！你那儿今天天气怎么样？", py: "Nǐ hǎo! Nǐ nàr jīntiān tiānqì zěnmeyàng?", es: "¡Hola! ¿Cómo está el clima hoy por allá?",
          opciones: [
            { t: "今天很热，是晴天。", py: "Jīntiān hěn rè, shì qíngtiān.", es: "Hoy hace mucho calor, está soleado.", ok: true },
            { t: "今天天气很好，有太阳，下午可能下雨。", py: "Jīntiān tiānqì hěn hǎo, yǒu tàiyáng, xiàwǔ kěnéng xià yǔ.", es: "Hoy hace buen tiempo, hay sol; en la tarde puede que llueva.", ok: true },
            { t: "今天是很热。", py: "Jīntiān shì hěn rè.", es: "Hoy hace mucho calor.", ok: false,
              fix: "Con adjetivos no se usa 是: «今天很热»." }
          ],
          clave: ["天气", "热", "晴天"],
          tip: "晴天 (qíngtiān) = día soleado; 阴天 (yīntiān) = nublado; 下雨 (xià yǔ) = llover." },
        { bot: "真羡慕你！哈尔滨已经开始冷了，冬天特别冷。", py: "Zhēn xiànmù nǐ! Hā'ěrbīn yǐjīng kāishǐ lěng le, dōngtiān tèbié lěng.", es: "¡Qué envidia! En Harbin ya empezó el frío; el invierno es muy frío.",
          opciones: [
            { t: "卡利没有冬天，一年四季都很暖和。", py: "Kǎlì méiyǒu dōngtiān, yì nián sìjì dōu hěn nuǎnhuo.", es: "Cali no tiene invierno: todo el año hace calorcito.", ok: true },
            { t: "我还没见过雪！卡利一年都很暖和。", py: "Wǒ hái méi jiàn guo xuě! Kǎlì yì nián dōu hěn nuǎnhuo.", es: "¡Nunca he visto la nieve! En Cali hace calorcito todo el año.", ok: true },
            { t: "我还没见雪过！", py: "Wǒ hái méi jiàn xuě guo!", es: "¡Nunca he visto la nieve!", ok: false,
              fix: "过 va pegado al verbo, antes del objeto: «没见过雪»." }
          ],
          clave: ["暖和", "冬天", "见过"],
          tip: "Verbo + 过 (guo) expresa experiencia: 我去过中国 (he estado en China). Se niega con 没: 没见过." },
        { bot: "卡利一年四季都一样吗？", py: "Kǎlì yì nián sìjì dōu yíyàng ma?", es: "¿En Cali es igual todo el año?",
          opciones: [
            { t: "差不多，不过有雨季和旱季。", py: "Chàbuduō, búguò yǒu yǔjì hé hànjì.", es: "Casi, pero hay temporada de lluvias y temporada seca.", ok: true },
            { t: "温度差不多一样，但是有的月份雨比较多。", py: "Wēndù chàbuduō yíyàng, dànshì yǒu de yuèfèn yǔ bǐjiào duō.", es: "La temperatura es casi igual, pero algunos meses llueve más.", ok: true },
            { t: "差不多，不过有季雨和季旱。", py: "Chàbuduō, búguò yǒu jì yǔ hé jì hàn.", es: "Casi, pero hay temporada de lluvias y temporada seca.", ok: false,
              fix: "El modificador va primero: «雨季» (temporada de lluvias) y «旱季» (temporada seca)." }
          ],
          clave: ["雨季", "旱季", "差不多"],
          tip: "季 (jì) = temporada: 雨季 (lluvias), 旱季 (seca), 四季 (las cuatro estaciones)." },
        { bot: "卡利有什么有名的？", py: "Kǎlì yǒu shénme yǒumíng de?", es: "¿Por qué es famosa Cali?",
          opciones: [
            { t: "卡利的萨尔萨舞很有名。", py: "Kǎlì de sà'ěrsà wǔ hěn yǒumíng.", es: "La salsa de Cali es muy famosa.", ok: true },
            { t: "很多人叫卡利“萨尔萨之都”，大家都喜欢跳舞。", py: "Hěn duō rén jiào Kǎlì “Sà'ěrsà zhī dū”, dàjiā dōu xǐhuan tiàowǔ.", es: "Mucha gente le dice a Cali «la capital de la salsa»; a todos les gusta bailar.", ok: true },
            { t: "卡利是有名萨尔萨舞。", py: "Kǎlì shì yǒumíng sà'ěrsà wǔ.", es: "Cali es famosa por la salsa.", ok: false,
              fix: "«Ser famoso» no lleva 是: «卡利的萨尔萨舞很有名»." }
          ],
          clave: ["萨尔萨", "有名", "跳舞"],
          tip: "有名 (yǒumíng) = famoso: «X 很有名» = X es famoso. Es un adjetivo, por eso va con 很 y sin 是." },
        { bot: "你会跳萨尔萨舞吗？", py: "Nǐ huì tiào sà'ěrsà wǔ ma?", es: "¿Sabes bailar salsa?",
          opciones: [
            { t: "会一点儿。", py: "Huì yìdiǎnr.", es: "Un poquito.", ok: true },
            { t: "会！我跳得不太好，可是我很喜欢。", py: "Huì! Wǒ tiào de bú tài hǎo, kěshì wǒ hěn xǐhuan.", es: "¡Sí! No bailo muy bien, pero me encanta.", ok: true },
            { t: "是的，我可以跳萨尔萨。", py: "Shì de, wǒ kěyǐ tiào sà'ěrsà.", es: "Sí, sé bailar salsa.", ok: false,
              fix: "Para una habilidad aprendida se usa 会, no 可以: «我会跳萨尔萨». Y se responde repitiendo el verbo: «会»." }
          ],
          clave: ["会", "跳得", "喜欢"],
          tip: "会 = saber hacer (habilidad aprendida); 可以 = tener permiso; 能 = poder por capacidad o circunstancias." },
        { bot: "下次视频的时候，你可以教我吗？", py: "Xià cì shìpín de shíhou, nǐ kěyǐ jiāo wǒ ma?", es: "En la próxima videollamada, ¿me enseñas?",
          opciones: [
            { t: "当然可以！", py: "Dāngrán kěyǐ!", es: "¡Claro que sí!", ok: true },
            { t: "好啊！你教我说中文，我教你跳萨尔萨。", py: "Hǎo a! Nǐ jiāo wǒ shuō Zhōngwén, wǒ jiāo nǐ tiào sà'ěrsà.", es: "¡Listo! Tú me enseñas a hablar chino y yo te enseño a bailar salsa.", ok: true },
            { t: "好啊！我教萨尔萨给你。", py: "Hǎo a! Wǒ jiāo sà'ěrsà gěi nǐ.", es: "¡Listo! Te enseño salsa.", ok: false,
              fix: "教 lleva directamente a la persona: «我教你跳萨尔萨» (教 + persona + cosa)." }
          ],
          clave: ["教你", "当然"],
          tip: "教 (jiāo) admite dos objetos: 教 + persona + cosa: 我教你中文 (te enseño chino)." }
      ],
      cierre: { bot: "一言为定！下次见！", py: "Yì yán wéi dìng! Xià cì jiàn!", es: "¡Trato hecho! ¡Hasta la próxima!" },
      vocab: [
        { t: "天气", py: "tiānqì", es: "clima, tiempo" },
        { t: "热 / 冷", py: "rè / lěng", es: "caliente / frío" },
        { t: "暖和", py: "nuǎnhuo", es: "templado, agradable" },
        { t: "雨季", py: "yǔjì", es: "temporada de lluvias" },
        { t: "旱季", py: "hànjì", es: "temporada seca" },
        { t: "见过", py: "jiàn guo", es: "haber visto" },
        { t: "有名", py: "yǒumíng", es: "famoso" },
        { t: "跳舞", py: "tiàowǔ", es: "bailar" }
      ]
    },
    {
      id: "zh-18", titulo: "¡Segundo puesto en el concurso!", nivel: "A2",
      tema: "Felicitar logros",
      contexto: "Una estudiante te cuenta que quedó de segunda en un concurso de matemáticas. La felicitas y valoras su esfuerzo.",
      rol: "小雨 (Xiǎoyǔ), estudiante de 12 años, tímida pero orgullosa",
      turnos: [
        { bot: "老师，我在数学比赛中得了第二名！", py: "Lǎoshī, wǒ zài shùxué bǐsài zhōng dé le dì èr míng!", es: "¡Profe, quedé de segunda en el concurso de matemáticas!",
          opciones: [
            { t: "太棒了！祝贺你！", py: "Tài bàng le! Zhùhè nǐ!", es: "¡Excelente! ¡Felicitaciones!", ok: true },
            { t: "哇，真了不起！恭喜你，小雨！", py: "Wā, zhēn liǎobuqǐ! Gōngxǐ nǐ, Xiǎoyǔ!", es: "¡Uy, qué admirable! ¡Felicitaciones, Xiaoyu!", ok: true },
            { t: "太棒了！你得了第两名！", py: "Tài bàng le! Nǐ dé le dì liǎng míng!", es: "¡Excelente! ¡Quedaste de segunda!", ok: false,
              fix: "Los ordinales siempre usan 二: «第二名». 两 solo va antes de un clasificador." }
          ],
          clave: ["祝贺", "恭喜", "第二名"],
          tip: "恭喜 (gōngxǐ) y 祝贺 (zhùhè) = felicitar. 恭喜 es más coloquial; 祝贺 sirve también en discursos." },
        { bot: "谢谢老师！可是我没得第一名。", py: "Xièxie lǎoshī! Kěshì wǒ méi dé dì yī míng.", es: "¡Gracias, profe! Pero no quedé de primera.",
          opciones: [
            { t: "第二名也很好！", py: "Dì èr míng yě hěn hǎo!", es: "¡El segundo puesto también es muy bueno!", ok: true },
            { t: "第二名已经很了不起了。重要的是你学到了很多。", py: "Dì èr míng yǐjīng hěn liǎobuqǐ le. Zhòngyào de shì nǐ xué dào le hěn duō.", es: "El segundo puesto ya es admirable. Lo importante es que aprendiste mucho.", ok: true },
            { t: "第二名也是很好。", py: "Dì èr míng yě shì hěn hǎo.", es: "El segundo puesto también es muy bueno.", ok: false,
              fix: "Con adjetivos no se usa 是: «第二名也很好»." }
          ],
          clave: ["了不起", "学到", "也很好"],
          tip: "Elogie el esfuerzo y lo aprendido, no solo el resultado: así se fortalece la motivación." },
        { bot: "我每天练习一个小时。", py: "Wǒ měitiān liànxí yí ge xiǎoshí.", es: "Practiqué una hora todos los días.",
          opciones: [
            { t: "你真努力！", py: "Nǐ zhēn nǔlì!", es: "¡Qué esfuerzo tan grande!", ok: true },
            { t: "每天一个小时？你真努力，这就是你成功的原因。", py: "Měitiān yí ge xiǎoshí? Nǐ zhēn nǔlì, zhè jiù shì nǐ chénggōng de yuányīn.", es: "¿Una hora diaria? Te esforzaste mucho: por eso te fue tan bien.", ok: true },
            { t: "你练习一个小时每天？", py: "Nǐ liànxí yí ge xiǎoshí měitiān?", es: "¿Practicabas una hora cada día?", ok: false,
              fix: "La frecuencia (每天) va antes del verbo: «你每天练习一个小时？»." }
          ],
          clave: ["努力", "每天", "原因"],
          tip: "Orden: frecuencia + verbo + duración: 每天练习一个小时 (practica una hora cada día)." },
        { bot: "比赛的时候我很紧张，有一道题做错了。", py: "Bǐsài de shíhou wǒ hěn jǐnzhāng, yǒu yí dào tí zuò cuò le.", es: "En el concurso estaba muy nerviosa y me equivoqué en una pregunta.",
          opciones: [
            { t: "没关系，错误也能教我们。", py: "Méi guānxi, cuòwù yě néng jiāo wǒmen.", es: "No pasa nada: los errores también nos enseñan.", ok: true },
            { t: "紧张很正常。我们一起看看那道题，下次就会了。", py: "Jǐnzhāng hěn zhèngcháng. Wǒmen yìqǐ kànkan nà dào tí, xià cì jiù huì le.", es: "Es normal estar nervioso. Miremos juntas esa pregunta y la próxima vez ya la sabrás.", ok: true },
            { t: "没关系，你只错做了一道题。", py: "Méi guānxi, nǐ zhǐ cuò zuò le yí dào tí.", es: "No pasa nada, solo te equivocaste en una pregunta.", ok: false,
              fix: "El resultado va después del verbo: «做错了一道题» (hacer + mal)." }
          ],
          clave: ["没关系", "错误", "正常"],
          tip: "道 (dào) es el clasificador de preguntas y ejercicios: 一道题, 两道数学题." },
        { bot: "老师，我可以告诉爸爸妈妈吗？", py: "Lǎoshī, wǒ kěyǐ gàosu bàba māma ma?", es: "Profe, ¿se lo puedo contar a mis papás?",
          opciones: [
            { t: "当然可以！他们一定很高兴。", py: "Dāngrán kěyǐ! Tāmen yídìng hěn gāoxìng.", es: "¡Claro! Seguro se ponen muy contentos.", ok: true },
            { t: "当然！我也会给你的家长写一条消息，祝贺他们。", py: "Dāngrán! Wǒ yě huì gěi nǐ de jiāzhǎng xiě yì tiáo xiāoxi, zhùhè tāmen.", es: "¡Claro! Yo también les voy a escribir un mensaje a tus papás para felicitarlos.", ok: true },
            { t: "当然！我也会写一条消息你的家长。", py: "Dāngrán! Wǒ yě huì xiě yì tiáo xiāoxi nǐ de jiāzhǎng.", es: "¡Claro! Yo también les voy a escribir un mensaje a tus papás.", ok: false,
              fix: "Falta 给: el destinatario va con 给 antes del verbo: «我也会给你的家长写一条消息»." }
          ],
          clave: ["当然", "高兴", "家长"],
          tip: "一定 (yídìng) = seguro, sin duda: 他们一定很高兴 (seguro se alegran mucho)." },
        { bot: "下学期还有比赛，我想参加。", py: "Xià xuéqī hái yǒu bǐsài, wǒ xiǎng cānjiā.", es: "El próximo semestre hay otro concurso y quiero participar.",
          opciones: [
            { t: "太好了，我支持你！", py: "Tài hǎo le, wǒ zhīchí nǐ!", es: "¡Muy bien, cuentas conmigo!", ok: true },
            { t: "好主意！我们可以每周一起练习两次。", py: "Hǎo zhǔyi! Wǒmen kěyǐ měi zhōu yìqǐ liànxí liǎng cì.", es: "¡Buena idea! Podemos practicar juntas dos veces por semana.", ok: true },
            { t: "好主意！我们可以每周一起练习二次。", py: "Hǎo zhǔyi! Wǒmen kěyǐ měi zhōu yìqǐ liànxí èr cì.", es: "¡Buena idea! Podemos practicar juntas dos veces por semana.", ok: false,
              fix: "次 (vez) funciona como clasificador; con 2 se usa 两: «两次»." }
          ],
          clave: ["支持", "练习", "两次"],
          tip: "次 (cì) cuenta veces: 一次, 两次, 三次. Como es clasificador, con 2 se usa 两." }
      ],
      cierre: { bot: "谢谢老师！我会继续加油！", py: "Xièxie lǎoshī! Wǒ huì jìxù jiāyóu!", es: "¡Gracias, profe! ¡Voy a seguir esforzándome!" },
      vocab: [
        { t: "比赛", py: "bǐsài", es: "concurso, competencia" },
        { t: "第二名", py: "dì èr míng", es: "segundo puesto" },
        { t: "祝贺", py: "zhùhè", es: "felicitar" },
        { t: "恭喜", py: "gōngxǐ", es: "¡felicitaciones!" },
        { t: "了不起", py: "liǎobuqǐ", es: "admirable, extraordinario" },
        { t: "努力", py: "nǔlì", es: "esforzarse; esforzado" },
        { t: "加油", py: "jiāyóu", es: "¡ánimo!, ¡dale!" },
        { t: "支持", py: "zhīchí", es: "apoyar" }
      ]
    },
    {
      id: "zh-19", titulo: "Marimba y sabores del Pacífico", nivel: "B1",
      tema: "Cultura del Pacífico colombiano",
      contexto: "En una feria cultural de un colegio de Xi'an presentas el Pacífico colombiano. Una profesora de música se acerca a tu mesa con preguntas.",
      rol: "孙老师 (Sūn lǎoshī), profesora de música, muy curiosa",
      turnos: [
        { bot: "你好！你的展台很漂亮。这是哪个地区的文化？", py: "Nǐ hǎo! Nǐ de zhǎntái hěn piàoliang. Zhè shì nǎge dìqū de wénhuà?", es: "¡Hola! Tu stand está muy bonito. ¿De qué región es esta cultura?",
          opciones: [
            { t: "这是哥伦比亚太平洋地区的文化。", py: "Zhè shì Gēlúnbǐyà Tàipíngyáng dìqū de wénhuà.", es: "Es la cultura de la región del Pacífico colombiano.", ok: true },
            { t: "谢谢！这是哥伦比亚太平洋沿岸的文化，那里大部分居民是非洲裔。", py: "Xièxie! Zhè shì Gēlúnbǐyà Tàipíngyáng yán'àn de wénhuà, nàli dà bùfen jūmín shì Fēizhōuyì.", es: "¡Gracias! Es la cultura de la costa pacífica de Colombia; allí la mayoría de la población es afrodescendiente.", ok: true },
            { t: "这是文化的哥伦比亚太平洋地区。", py: "Zhè shì wénhuà de Gēlúnbǐyà Tàipíngyáng dìqū.", es: "Es la cultura de la región del Pacífico colombiano.", ok: false,
              fix: "Lo que lleva 的 va antes del sustantivo principal: «哥伦比亚太平洋地区的文化»." }
          ],
          clave: ["太平洋", "地区", "文化"],
          tip: "En chino lo general va antes que lo particular: 哥伦比亚 → 太平洋地区 → 文化." },
        { bot: "这个乐器是什么？看起来像木琴。", py: "Zhège yuèqì shì shénme? Kàn qǐlái xiàng mùqín.", es: "¿Qué instrumento es este? Parece un xilófono.",
          opciones: [
            { t: "对，这是马林巴琴，是用棕榈木做的。", py: "Duì, zhè shì mǎlínbā qín, shì yòng zōnglǘ mù zuò de.", es: "Sí, es una marimba; está hecha de madera de palma.", ok: true },
            { t: "这叫马林巴琴。琴键是棕榈木做的，声音特别温暖。", py: "Zhè jiào mǎlínbā qín. Qínjiàn shì zōnglǘ mù zuò de, shēngyīn tèbié wēnnuǎn.", es: "Se llama marimba. Las teclas son de madera de palma y el sonido es muy cálido.", ok: true },
            { t: "对，这是马林巴琴，是做用棕榈木的。", py: "Duì, zhè shì mǎlínbā qín, shì zuò yòng zōnglǘ mù de.", es: "Sí, es una marimba, hecha de madera de palma.", ok: false,
              fix: "El medio o material (用……) va antes del verbo: «是用棕榈木做的»." }
          ],
          clave: ["马林巴", "棕榈木", "做的"],
          tip: "是……的 también describe cómo o con qué se hizo algo: 是用棕榈木做的 (está hecha de madera de palma)." },
        { bot: "你们什么时候演奏这种音乐？", py: "Nǐmen shénme shíhou yǎnzòu zhè zhǒng yīnyuè?", es: "¿Cuándo tocan esta música?",
          opciones: [
            { t: "在节日和家庭聚会的时候。", py: "Zài jiérì hé jiātíng jùhuì de shíhou.", es: "En las fiestas y en las reuniones familiares.", ok: true },
            { t: "节日、婚礼和社区的庆祝活动都有。卡利每年还有一个很大的太平洋音乐节。", py: "Jiérì, hūnlǐ hé shèqū de qìngzhù huódòng dōu yǒu. Kǎlì měi nián hái yǒu yí ge hěn dà de Tàipíngyáng yīnyuèjié.", es: "En fiestas, bodas y celebraciones de la comunidad. Además, en Cali hay cada año un gran festival de música del Pacífico.", ok: true },
            { t: "我们演奏在节日的时候。", py: "Wǒmen yǎnzòu zài jiérì de shíhou.", es: "La tocamos en las fiestas.", ok: false,
              fix: "La expresión de tiempo va antes del verbo: «我们在节日的时候演奏»." }
          ],
          clave: ["节日", "音乐节", "演奏"],
          tip: "……的时候 (de shíhou) = cuando…: 节日的时候 (en las fiestas). Va antes del verbo principal." },
        { bot: "这种音乐有什么特别的意义吗？", py: "Zhè zhǒng yīnyuè yǒu shénme tèbié de yìyì ma?", es: "¿Esta música tiene algún significado especial?",
          opciones: [
            { t: "有。它保存了非洲裔社区的历史和记忆。", py: "Yǒu. Tā bǎocún le Fēizhōuyì shèqū de lìshǐ hé jìyì.", es: "Sí. Guarda la historia y la memoria de las comunidades afrodescendientes.", ok: true },
            { t: "很重要。马林巴音乐和传统歌曲已经被联合国教科文组织列为人类非物质文化遗产。", py: "Hěn zhòngyào. Mǎlínbā yīnyuè hé chuántǒng gēqǔ yǐjīng bèi Liánhéguó Jiàokēwén Zǔzhī liè wéi rénlèi fēiwùzhì wénhuà yíchǎn.", es: "Es muy importante. La música de marimba y los cantos tradicionales fueron declarados por la Unesco patrimonio cultural inmaterial de la humanidad.", ok: true },
            { t: "有。它是保存非洲裔社区的历史。", py: "Yǒu. Tā shì bǎocún Fēizhōuyì shèqū de lìshǐ.", es: "Sí. Guarda la historia de las comunidades afrodescendientes.", ok: false,
              fix: "No se pone 是 delante de un verbo como si fuera «ser»: «它保存了……的历史»." }
          ],
          clave: ["保存", "历史", "遗产"],
          tip: "被 (bèi) forma la voz pasiva: 被……列为遗产 = fue declarado patrimonio por…" },
        { bot: "太平洋地区的菜有什么特色？", py: "Tàipíngyáng dìqū de cài yǒu shénme tèsè?", es: "¿Qué tiene de especial la comida del Pacífico?",
          opciones: [
            { t: "海鲜很多，常常用椰奶做菜。", py: "Hǎixiān hěn duō, chángcháng yòng yēnǎi zuò cài.", es: "Hay muchos mariscos y se cocina mucho con leche de coco.", ok: true },
            { t: "主要是海鲜和椰子。比如椰子饭，就是用椰奶煮的米饭，又香又有一点儿甜。", py: "Zhǔyào shì hǎixiān hé yēzi. Bǐrú yēzi fàn, jiù shì yòng yēnǎi zhǔ de mǐfàn, yòu xiāng yòu yǒu yìdiǎnr tián.", es: "Sobre todo mariscos y coco. Por ejemplo, el arroz con coco: arroz cocinado con leche de coco, aromático y un poco dulce.", ok: true },
            { t: "椰子饭香和甜。", py: "Yēzi fàn xiāng hé tián.", es: "El arroz con coco es aromático y dulce.", ok: false,
              fix: "和 une sustantivos, no adjetivos. Diga «椰子饭又香又甜» o «椰子饭很香，也有点儿甜»." }
          ],
          clave: ["海鲜", "椰奶", "椰子饭"],
          tip: "又……又…… (yòu… yòu…) une dos cualidades: 又香又甜 (aromático y dulce)." },
        { bot: "我很想让我的学生了解这种文化。你有什么建议？", py: "Wǒ hěn xiǎng ràng wǒ de xuésheng liǎojiě zhè zhǒng wénhuà. Nǐ yǒu shénme jiànyì?", es: "Me gustaría mucho que mis estudiantes conocieran esta cultura. ¿Qué me sugieres?",
          opciones: [
            { t: "可以一起听马林巴音乐，再学一段舞。", py: "Kěyǐ yìqǐ tīng mǎlínbā yīnyuè, zài xué yí duàn wǔ.", es: "Pueden escuchar juntos música de marimba y después aprender un baile.", ok: true },
            { t: "我们可以办一次线上交流，让我的学生给你的学生介绍太平洋地区的音乐和舞蹈。", py: "Wǒmen kěyǐ bàn yí cì xiànshàng jiāoliú, ràng wǒ de xuésheng gěi nǐ de xuésheng jièshào Tàipíngyáng dìqū de yīnyuè hé wǔdǎo.", es: "Podemos hacer un intercambio virtual para que mis estudiantes les presenten a los tuyos la música y el baile del Pacífico.", ok: true },
            { t: "我们可以办一次线上交流，让我的学生介绍你的学生太平洋的音乐。", py: "Wǒmen kěyǐ bàn yí cì xiànshàng jiāoliú, ràng wǒ de xuésheng jièshào nǐ de xuésheng Tàipíngyáng de yīnyuè.", es: "Podemos hacer un intercambio virtual para que mis estudiantes les presenten a los tuyos la música del Pacífico.", ok: false,
              fix: "Falta 给: «presentarle algo a alguien» es 给 + persona + 介绍: «给你的学生介绍……». Sin 给, «介绍你的学生» significa presentar a tus estudiantes." }
          ],
          clave: ["线上交流", "介绍", "音乐"],
          tip: "让 (ràng) + persona + verbo = hacer que alguien haga algo: 让学生了解 (que los estudiantes conozcan)." }
      ],
      cierre: { bot: "好主意！我们保持联系，一起准备吧。", py: "Hǎo zhǔyi! Wǒmen bǎochí liánxì, yìqǐ zhǔnbèi ba.", es: "¡Buena idea! Sigamos en contacto y lo preparamos juntas." },
      vocab: [
        { t: "太平洋", py: "Tàipíngyáng", es: "océano Pacífico" },
        { t: "非洲裔", py: "Fēizhōuyì", es: "afrodescendiente" },
        { t: "马林巴琴", py: "mǎlínbā qín", es: "marimba" },
        { t: "乐器", py: "yuèqì", es: "instrumento musical" },
        { t: "节日", py: "jiérì", es: "fiesta, festividad" },
        { t: "非物质文化遗产", py: "fēiwùzhì wénhuà yíchǎn", es: "patrimonio cultural inmaterial" },
        { t: "海鲜", py: "hǎixiān", es: "mariscos" },
        { t: "椰奶", py: "yēnǎi", es: "leche de coco" }
      ]
    },
    {
      id: "zh-20", titulo: "La tarea de la planta", nivel: "B1",
      tema: "Explicar una tarea",
      contexto: "Enseñas ciencias en un colegio de Suzhou. Un estudiante faltó ayer por enfermedad y te pide que le expliques la tarea del proyecto.",
      rol: "陈浩 (Chén Hào), estudiante de 13 años, responsable pero inseguro",
      turnos: [
        { bot: "老师，我昨天没来，作业是什么？", py: "Lǎoshī, wǒ zuótiān méi lái, zuòyè shì shénme?", es: "Profe, ayer no vine, ¿cuál es la tarea?",
          opciones: [
            { t: "这个星期要观察一棵植物，每天记录它的变化。", py: "Zhège xīngqī yào guānchá yì kē zhíwù, měitiān jìlù tā de biànhuà.", es: "Esta semana hay que observar una planta y registrar todos los días sus cambios.", ok: true },
            { t: "没关系，我给你解释。大家要观察一种植物七天，每天做记录。", py: "Méi guānxi, wǒ gěi nǐ jiěshì. Dàjiā yào guānchá yì zhǒng zhíwù qī tiān, měitiān zuò jìlù.", es: "Tranquilo, te explico. Todos deben observar una planta durante siete días y anotar cada día.", ok: true },
            { t: "没关系，我解释你。", py: "Méi guānxi, wǒ jiěshì nǐ.", es: "Tranquilo, te explico.", ok: false,
              fix: "解释 no lleva a la persona como objeto directo: «我给你解释» (给 + persona antes del verbo)." }
          ],
          clave: ["观察", "记录", "植物"],
          tip: "棵 (kē) es el clasificador de plantas y árboles: 一棵植物, 两棵树." },
        { bot: "要记录什么呢？", py: "Yào jìlù shénme ne?", es: "¿Y qué hay que registrar?",
          opciones: [
            { t: "记录高度、叶子的数量和颜色。", py: "Jìlù gāodù, yèzi de shùliàng hé yánsè.", es: "La altura, el número de hojas y el color.", ok: true },
            { t: "每天量一下高度，数一数叶子，再画一张图。", py: "Měitiān liáng yíxià gāodù, shǔ yi shǔ yèzi, zài huà yì zhāng tú.", es: "Cada día mides la altura, cuentas las hojas y haces un dibujo.", ok: true },
            { t: "每天量高度一下，再画图一张。", py: "Měitiān liáng gāodù yíxià, zài huà tú yì zhāng.", es: "Cada día mides la altura y haces un dibujo.", ok: false,
              fix: "一下 y las cantidades van entre el verbo y el objeto: «量一下高度», «画一张图»." }
          ],
          clave: ["高度", "叶子", "画"],
          tip: "El verbo duplicado (数一数, 看一看) suaviza la instrucción: ideal para hablar con niños." },
        { bot: "我家没有植物，怎么办？", py: "Wǒ jiā méiyǒu zhíwù, zěnme bàn?", es: "En mi casa no hay plantas, ¿qué hago?",
          opciones: [
            { t: "你可以种一颗豆子。", py: "Nǐ kěyǐ zhòng yì kē dòuzi.", es: "Puedes sembrar un fríjol.", ok: true },
            { t: "别担心，明天我给你几颗绿豆，你把它们放在湿纸巾上就行了。", py: "Bié dānxīn, míngtiān wǒ gěi nǐ jǐ kē lǜdòu, nǐ bǎ tāmen fàng zài shī zhǐjīn shang jiù xíng le.", es: "No te preocupes: mañana te doy unos frijolitos mungo; los pones sobre una servilleta húmeda y listo.", ok: true },
            { t: "别担心，你放绿豆在湿纸巾上就行了。", py: "Bié dānxīn, nǐ fàng lǜdòu zài shī zhǐjīn shang jiù xíng le.", es: "No te preocupes, pones los frijolitos sobre una servilleta húmeda y listo.", ok: false,
              fix: "Para «poner algo en un lugar» se usa 把: «把绿豆放在湿纸巾上»." }
          ],
          clave: ["绿豆", "把", "放在"],
          tip: "把 + objeto + 放在 + lugar es la estructura natural para «poner algo en algún sitio»." },
        { bot: "什么时候交？", py: "Shénme shíhou jiāo?", es: "¿Cuándo hay que entregarla?",
          opciones: [
            { t: "下个星期一交。", py: "Xià ge xīngqīyī jiāo.", es: "Se entrega el próximo lunes.", ok: true },
            { t: "下周一上课的时候交：一份表格和一段简短的结论。", py: "Xià zhōuyī shàngkè de shíhou jiāo: yí fèn biǎogé hé yí duàn jiǎnduǎn de jiélùn.", es: "El próximo lunes en clase: una tabla y una conclusión corta.", ok: true },
            { t: "交下个星期一。", py: "Jiāo xià ge xīngqīyī.", es: "Se entrega el próximo lunes.", ok: false,
              fix: "El tiempo va antes del verbo: «下个星期一交»." }
          ],
          clave: ["下周一", "交", "结论"],
          tip: "交 (jiāo) = entregar: 交作业. No lo confunda con 教 (jiāo, enseñar): suenan igual." },
        { bot: "结论要写什么？我不太会写。", py: "Jiélùn yào xiě shénme? Wǒ bú tài huì xiě.", es: "¿Qué pongo en la conclusión? No sé escribirlas muy bien.",
          opciones: [
            { t: "写植物有什么变化，为什么会这样。", py: "Xiě zhíwù yǒu shénme biànhuà, wèi shénme huì zhèyàng.", es: "Escribe qué cambios tuvo la planta y por qué pasó.", ok: true },
            { t: "回答两个问题：植物发生了什么变化？你觉得原因是什么？三四句话就够了。", py: "Huídá liǎng ge wèntí: zhíwù fāshēng le shénme biànhuà? Nǐ juéde yuányīn shì shénme? Sān sì jù huà jiù gòu le.", es: "Responde dos preguntas: ¿qué cambios tuvo la planta? ¿Cuál crees que fue la causa? Con tres o cuatro frases basta.", ok: true },
            { t: "回答二个问题：植物有什么变化？为什么？", py: "Huídá èr ge wèntí: zhíwù yǒu shénme biànhuà? Wèi shénme?", es: "Responde dos preguntas: ¿qué cambió en la planta? ¿Por qué?", ok: false,
              fix: "Antes del clasificador 个 se usa 两: «两个问题»." }
          ],
          clave: ["变化", "原因", "两个问题"],
          tip: "三四句话 = tres o cuatro frases. Dos números seguidos expresan una cantidad aproximada." },
        { bot: "如果我有问题，可以问您吗？", py: "Rúguǒ wǒ yǒu wèntí, kěyǐ wèn nín ma?", es: "Si tengo dudas, ¿le puedo preguntar?",
          opciones: [
            { t: "当然，下课以后来找我。", py: "Dāngrán, xiàkè yǐhòu lái zhǎo wǒ.", es: "Claro, búscame después de clase.", ok: true },
            { t: "当然可以。你也可以先问问同学，大家一起讨论。犯错也没关系。", py: "Dāngrán kěyǐ. Nǐ yě kěyǐ xiān wènwen tóngxué, dàjiā yìqǐ tǎolùn. Fàn cuò yě méi guānxi.", es: "Claro que sí. También puedes preguntarles primero a tus compañeros y discutirlo entre todos. Equivocarse no tiene nada de malo.", ok: true },
            { t: "当然，来找我下课以后。", py: "Dāngrán, lái zhǎo wǒ xiàkè yǐhòu.", es: "Claro, búscame después de clase.", ok: false,
              fix: "La expresión de tiempo va antes del verbo: «下课以后来找我»." }
          ],
          clave: ["当然", "下课以后", "讨论"],
          tip: "……以后 (yǐhòu) = después de…: cierra la expresión de tiempo, que va antes del verbo." }
      ],
      cierre: { bot: "明白了！谢谢老师，我今天就开始。", py: "Míngbai le! Xièxie lǎoshī, wǒ jīntiān jiù kāishǐ.", es: "¡Entendido! Gracias, profe; hoy mismo empiezo." },
      vocab: [
        { t: "作业", py: "zuòyè", es: "tarea" },
        { t: "观察", py: "guānchá", es: "observar" },
        { t: "记录", py: "jìlù", es: "registrar; registro" },
        { t: "植物", py: "zhíwù", es: "planta" },
        { t: "高度", py: "gāodù", es: "altura" },
        { t: "交", py: "jiāo", es: "entregar" },
        { t: "结论", py: "jiélùn", es: "conclusión" },
        { t: "原因", py: "yuányīn", es: "causa, razón" }
      ]
    },
    {
      id: "zh-21", titulo: "Autorización para la salida al museo", nivel: "B1",
      tema: "Permiso de salida pedagógica",
      contexto: "Organizas una salida pedagógica a un museo de ciencias. Llamas a la mamá de un estudiante que todavía no ha firmado la autorización.",
      rol: "黄女士 (Huáng nǚshì), mamá de 李乐 (Lǐ Lè), cuidadosa con la seguridad",
      turnos: [
        { bot: "喂，您好！我是李乐的妈妈。", py: "Wéi, nín hǎo! Wǒ shì Lǐ Lè de māma.", es: "¿Aló? ¡Buenas! Habla la mamá de Li Le.",
          opciones: [
            { t: "黄女士您好！我是李乐的科学老师。", py: "Huáng nǚshì nín hǎo! Wǒ shì Lǐ Lè de kēxué lǎoshī.", es: "¡Buenas, señora Huang! Soy el profesor de ciencias de Li Le.", ok: true },
            { t: "您好！我是李乐的科学老师，想跟您说一下下周五参观科技馆的事。", py: "Nín hǎo! Wǒ shì Lǐ Lè de kēxué lǎoshī, xiǎng gēn nín shuō yíxià xià zhōuwǔ cānguān kējìguǎn de shì.", es: "¡Buenas! Soy el profesor de ciencias de Li Le; quería hablarle de la visita al museo de ciencias del próximo viernes.", ok: true },
            { t: "您好！我是老师科学的李乐。", py: "Nín hǎo! Wǒ shì lǎoshī kēxué de Lǐ Lè.", es: "¡Buenas! Soy el profesor de ciencias de Li Le.", ok: false,
              fix: "Va primero el poseedor, luego la materia y al final 老师: «李乐的科学老师»." }
          ],
          clave: ["科学老师", "科技馆", "参观"],
          tip: "Al teléfono se contesta 喂 (wéi). Luego preséntese diciendo su relación con el estudiante: 李乐的老师." },
        { bot: "哦？参观科技馆？我还没看到通知。", py: "Ó? Cānguān kējìguǎn? Wǒ hái méi kàn dào tōngzhī.", es: "¿Ah, sí? ¿Una visita al museo? Todavía no he visto la circular.",
          opciones: [
            { t: "没关系，我简单介绍一下。", py: "Méi guānxi, wǒ jiǎndān jièshào yíxià.", es: "No se preocupe, le cuento brevemente.", ok: true },
            { t: "没关系。通知上周发给家长了，可能您没收到。我现在跟您说明一下。", py: "Méi guānxi. Tōngzhī shàng zhōu fā gěi jiāzhǎng le, kěnéng nín méi shōu dào. Wǒ xiànzài gēn nín shuōmíng yíxià.", es: "Tranquila. La circular se envió a las familias la semana pasada; quizá no le llegó. Le explico ahora.", ok: true },
            { t: "没关系。通知上周发了给家长。", py: "Méi guānxi. Tōngzhī shàng zhōu fā le gěi jiāzhǎng.", es: "Tranquila. La circular se envió a las familias la semana pasada.", ok: false,
              fix: "了 no separa el verbo de 给: «发给家长了» o «发给了家长»." }
          ],
          clave: ["通知", "介绍一下", "说明"],
          tip: "跟您说明一下 (gēn nín shuōmíng yíxià) = le explico brevemente. 一下 hace la frase más amable." },
        { bot: "什么时候出发？几点回来？", py: "Shénme shíhou chūfā? Jǐ diǎn huílái?", es: "¿Cuándo salen? ¿A qué hora vuelven?",
          opciones: [
            { t: "下周五早上八点出发，下午三点回学校。", py: "Xià zhōuwǔ zǎoshang bā diǎn chūfā, xiàwǔ sān diǎn huí xuéxiào.", es: "Salimos el próximo viernes a las ocho de la mañana y volvemos al colegio a las tres de la tarde.", ok: true },
            { t: "下周五早上八点坐校车出发，下午三点左右回到学校，正常放学。", py: "Xià zhōuwǔ zǎoshang bā diǎn zuò xiàochē chūfā, xiàwǔ sān diǎn zuǒyòu huí dào xuéxiào, zhèngcháng fàngxué.", es: "El próximo viernes salimos en bus escolar a las ocho; volvemos al colegio hacia las tres y la salida es a la hora de siempre.", ok: true },
            { t: "我们出发下周五早上八点。", py: "Wǒmen chūfā xià zhōuwǔ zǎoshang bā diǎn.", es: "Salimos el próximo viernes a las ocho.", ok: false,
              fix: "El tiempo va antes del verbo: «我们下周五早上八点出发»." }
          ],
          clave: ["出发", "八点", "回学校"],
          tip: "El tiempo se ordena de lo grande a lo pequeño: 下周五 → 早上 → 八点, y todo va antes del verbo." },
        { bot: "路上安全吗？有几个老师陪同？", py: "Lùshang ānquán ma? Yǒu jǐ ge lǎoshī péitóng?", es: "¿Es seguro el trayecto? ¿Cuántos profesores acompañan?",
          opciones: [
            { t: "有四位老师陪同，每位老师负责十个学生。", py: "Yǒu sì wèi lǎoshī péitóng, měi wèi lǎoshī fùzé shí ge xuésheng.", es: "Acompañan cuatro profesores; cada uno se encarga de diez estudiantes.", ok: true },
            { t: "请放心。有四位老师和两位家长志愿者陪同，学生分成小组，每组都有一个负责人。", py: "Qǐng fàngxīn. Yǒu sì wèi lǎoshī hé liǎng wèi jiāzhǎng zhìyuànzhě péitóng, xuésheng fēnchéng xiǎozǔ, měi zǔ dōu yǒu yí ge fùzérén.", es: "Esté tranquila. Acompañan cuatro profesores y dos padres voluntarios; los estudiantes van en grupos pequeños y cada grupo tiene un responsable.", ok: true },
            { t: "请放心。有四老师陪同。", py: "Qǐng fàngxīn. Yǒu sì lǎoshī péitóng.", es: "Esté tranquila. Acompañan cuatro profesores.", ok: false,
              fix: "Falta el clasificador: «四位老师» (cortés) o «四个老师»." }
          ],
          clave: ["陪同", "负责", "放心"],
          tip: "请放心 (qǐng fàngxīn) = quédese tranquilo(a). Es la frase clave para tranquilizar a una familia." },
        { bot: "李乐对花粉过敏，这个要注意。", py: "Lǐ Lè duì huāfěn guòmǐn, zhège yào zhùyì.", es: "Li Le es alérgico al polen; hay que tenerlo en cuenta.",
          opciones: [
            { t: "好的，我会记下来，也会告诉其他老师。", py: "Hǎo de, wǒ huì jì xiàlái, yě huì gàosu qítā lǎoshī.", es: "Claro, lo anoto y también les aviso a los demás profesores.", ok: true },
            { t: "谢谢您告诉我。科技馆在室内，不过我会请他带上药，并且把这个情况告诉所有陪同的老师。", py: "Xièxie nín gàosu wǒ. Kējìguǎn zài shìnèi, búguò wǒ huì qǐng tā dài shang yào, bìngqiě bǎ zhège qíngkuàng gàosu suǒyǒu péitóng de lǎoshī.", es: "Gracias por decírmelo. El museo es bajo techo, pero le pediré que lleve su medicamento e informaré a todos los profesores acompañantes.", ok: true },
            { t: "好的，我会记下来了。", py: "Hǎo de, wǒ huì jì xiàlái le.", es: "Claro, lo voy a anotar.", ok: false,
              fix: "了 no acompaña acciones futuras con 会: «我会记下来»." }
          ],
          clave: ["记下来", "告诉", "药"],
          tip: "记下来 (jì xiàlái) = anotar, dejar por escrito. 下来 indica que algo queda fijado." },
        { bot: "那我需要做什么？", py: "Nà wǒ xūyào zuò shénme?", es: "Entonces, ¿qué tengo que hacer?",
          opciones: [
            { t: "请在同意书上签字，周三以前交给我。", py: "Qǐng zài tóngyìshū shang qiānzì, zhōusān yǐqián jiāo gěi wǒ.", es: "Por favor firme la autorización y entréguemela antes del miércoles.", ok: true },
            { t: "只需要在同意书上签个字，让李乐周三以前带回学校。如果不同意，也请告诉我。", py: "Zhǐ xūyào zài tóngyìshū shang qiān ge zì, ràng Lǐ Lè zhōusān yǐqián dài huí xuéxiào. Rúguǒ bù tóngyì, yě qǐng gàosu wǒ.", es: "Solo tiene que firmar la autorización y que Li Le la traiga al colegio antes del miércoles. Si no está de acuerdo, también avíseme, por favor.", ok: true },
            { t: "请签字在同意书上。", py: "Qǐng qiānzì zài tóngyìshū shang.", es: "Por favor firme la autorización.", ok: false,
              fix: "El lugar va antes del verbo: «请在同意书上签字»." }
          ],
          clave: ["同意书", "签字", "以前"],
          tip: "签字 (qiānzì) es separable: 签个字 (firmar rapidito). 以前 (yǐqián) = antes de: 周三以前." }
      ],
      cierre: { bot: "好的，我今天晚上就签。谢谢老师这么细心！", py: "Hǎo de, wǒ jīntiān wǎnshang jiù qiān. Xièxie lǎoshī zhème xìxīn!", es: "Listo, esta misma noche la firmo. ¡Gracias, profe, por ser tan cuidadoso!" },
      vocab: [
        { t: "参观", py: "cānguān", es: "visitar (un lugar)" },
        { t: "科技馆", py: "kējìguǎn", es: "museo de ciencia y tecnología" },
        { t: "通知", py: "tōngzhī", es: "circular, aviso" },
        { t: "出发", py: "chūfā", es: "salir, partir" },
        { t: "陪同", py: "péitóng", es: "acompañar" },
        { t: "放心", py: "fàngxīn", es: "estar tranquilo" },
        { t: "同意书", py: "tóngyìshū", es: "autorización, consentimiento" },
        { t: "签字", py: "qiānzì", es: "firmar" }
      ]
    },
    {
      id: "zh-22", titulo: "Simulacro de sismo", nivel: "B1",
      tema: "Simulacro de evacuación",
      contexto: "Mañana hay simulacro de evacuación por sismo. El coordinador de seguridad del colegio repasa contigo el protocolo de tu grupo.",
      rol: "马主任 (Mǎ zhǔrèn), coordinador de seguridad, serio y preciso",
      turnos: [
        { bot: "明天上午十点有地震疏散演练，你们班准备好了吗？", py: "Míngtiān shàngwǔ shí diǎn yǒu dìzhèn shūsàn yǎnliàn, nǐmen bān zhǔnbèi hǎo le ma?", es: "Mañana a las diez hay simulacro de evacuación por sismo. ¿Tu grupo está listo?",
          opciones: [
            { t: "准备好了，我已经跟学生讲过了。", py: "Zhǔnbèi hǎo le, wǒ yǐjīng gēn xuésheng jiǎng guo le.", es: "Sí, ya se lo expliqué a los estudiantes.", ok: true },
            { t: "差不多了。今天下午我还会带学生再练习一遍。", py: "Chàbuduō le. Jīntiān xiàwǔ wǒ hái huì dài xuésheng zài liànxí yí biàn.", es: "Casi. Esta tarde voy a practicar una vez más con los estudiantes.", ok: true },
            { t: "准备好了，我已经讲过了跟学生。", py: "Zhǔnbèi hǎo le, wǒ yǐjīng jiǎng guo le gēn xuésheng.", es: "Sí, ya se lo expliqué a los estudiantes.", ok: false,
              fix: "跟 + persona va antes del verbo: «我已经跟学生讲过了»." }
          ],
          clave: ["准备好", "讲过", "练习"],
          tip: "演练 (yǎnliàn) = simulacro; 疏散 (shūsàn) = evacuar. 地震疏散演练 = simulacro de evacuación por sismo." },
        { bot: "警报响的时候，学生应该先做什么？", py: "Jǐngbào xiǎng de shíhou, xuésheng yīnggāi xiān zuò shénme?", es: "Cuando suena la alarma, ¿qué deben hacer primero los estudiantes?",
          opciones: [
            { t: "先蹲下，躲在桌子下面，抓住桌腿。", py: "Xiān dūn xià, duǒ zài zhuōzi xiàmiàn, zhuā zhù zhuō tuǐ.", es: "Primero agacharse, meterse debajo del pupitre y agarrarse de la pata.", ok: true },
            { t: "先“蹲下、掩护、抓牢”，等摇晃停了以后，再按路线疏散。", py: "Xiān “dūn xià, yǎnhù, zhuā láo”, děng yáohuàng tíng le yǐhòu, zài àn lùxiàn shūsàn.", es: "Primero «agacharse, cubrirse y sujetarse»; cuando pare el movimiento, evacuar por la ruta.", ok: true },
            { t: "先蹲下，躲在下面桌子，抓住桌腿。", py: "Xiān dūn xià, duǒ zài xiàmiàn zhuōzi, zhuā zhù zhuō tuǐ.", es: "Primero agacharse, meterse debajo del pupitre y agarrarse de la pata.", ok: false,
              fix: "El localizador va después del objeto: «桌子下面» (debajo de la mesa)." }
          ],
          clave: ["蹲下", "桌子下面", "抓住"],
          tip: "Los localizadores van después del objeto: 桌子下面 (debajo de la mesa), 门旁边 (al lado de la puerta)." },
        { bot: "对。疏散的时候走哪条路线？", py: "Duì. Shūsàn de shíhou zǒu nǎ tiáo lùxiàn?", es: "Correcto. ¿Por qué ruta evacuan?",
          opciones: [
            { t: "走东边的楼梯，到操场集合。", py: "Zǒu dōngbian de lóutī, dào cāochǎng jíhé.", es: "Por la escalera del lado oriental, y nos reunimos en el patio.", ok: true },
            { t: "我们班从后门出去，走东边的楼梯下楼，然后到操场的三号集合点。", py: "Wǒmen bān cóng hòumén chūqù, zǒu dōngbian de lóutī xià lóu, ránhòu dào cāochǎng de sān hào jíhédiǎn.", es: "Mi grupo sale por la puerta de atrás, baja por la escalera oriental y va al punto de encuentro 3 del patio.", ok: true },
            { t: "我们班走东边的楼梯，集合到操场。", py: "Wǒmen bān zǒu dōngbian de lóutī, jíhé dào cāochǎng.", es: "Mi grupo baja por la escalera oriental y se reúne en el patio.", ok: false,
              fix: "El destino con 到 va antes del verbo: «到操场集合»." }
          ],
          clave: ["楼梯", "操场", "集合"],
          tip: "条 (tiáo) es el clasificador de cosas largas: 一条路线, 一条路, 一条河." },
        { bot: "可以坐电梯吗？", py: "Kěyǐ zuò diàntī ma?", es: "¿Se puede usar el ascensor?",
          opciones: [
            { t: "不可以，一定要走楼梯。", py: "Bù kěyǐ, yídìng yào zǒu lóutī.", es: "No, siempre hay que bajar por las escaleras.", ok: true },
            { t: "绝对不可以。地震时电梯可能停电，很危险，所以只能走楼梯。", py: "Juéduì bù kěyǐ. Dìzhèn shí diàntī kěnéng tíngdiàn, hěn wēixiǎn, suǒyǐ zhǐ néng zǒu lóutī.", es: "De ninguna manera. En un sismo el ascensor puede quedarse sin energía; es muy peligroso, así que solo se usan las escaleras.", ok: true },
            { t: "不可以，一定要坐楼梯。", py: "Bù kěyǐ, yídìng yào zuò lóutī.", es: "No, siempre hay que bajar por las escaleras.", ok: false,
              fix: "Las escaleras se «caminan»: «走楼梯». 坐 se usa con vehículos y ascensores: 坐电梯." }
          ],
          clave: ["不可以", "走楼梯", "危险"],
          tip: "坐 (zuò) va con medios de transporte: 坐电梯, 坐地铁. Para escaleras: 走楼梯 o 爬楼梯." },
        { bot: "到了操场以后，你要做什么？", py: "Dào le cāochǎng yǐhòu, nǐ yào zuò shénme?", es: "Cuando lleguen al patio, ¿qué tienes que hacer?",
          opciones: [
            { t: "我点名，然后向您报告人数。", py: "Wǒ diǎnmíng, ránhòu xiàng nín bàogào rénshù.", es: "Llamo a lista y luego le reporto el número de estudiantes.", ok: true },
            { t: "我马上点名，确认每个学生都在，然后向您报告。如果有人不在，我立刻告诉您。", py: "Wǒ mǎshàng diǎnmíng, quèrèn měi ge xuésheng dōu zài, ránhòu xiàng nín bàogào. Rúguǒ yǒu rén bú zài, wǒ lìkè gàosu nín.", es: "Llamo a lista enseguida, confirmo que estén todos y le reporto. Si falta alguien, le aviso de inmediato.", ok: true },
            { t: "我点名，然后报告人数向您。", py: "Wǒ diǎnmíng, ránhòu bàogào rénshù xiàng nín.", es: "Llamo a lista y luego le reporto el número.", ok: false,
              fix: "向 + persona va antes del verbo: «向您报告人数»." }
          ],
          clave: ["点名", "报告", "人数"],
          tip: "点名 (diǎnmíng) = llamar a lista. 向……报告 = informar a… (registro formal)." },
        { bot: "很好。如果有学生害怕或者哭了，你怎么办？", py: "Hěn hǎo. Rúguǒ yǒu xuésheng hàipà huòzhě kū le, nǐ zěnme bàn?", es: "Muy bien. Si algún estudiante se asusta o llora, ¿qué haces?",
          opciones: [
            { t: "我会让他待在我旁边，安慰他。", py: "Wǒ huì ràng tā dāi zài wǒ pángbiān, ānwèi tā.", es: "Lo dejo a mi lado y lo consuelo.", ok: true },
            { t: "我会冷静地跟他说话，让他跟着我。演练以后，我们在班上谈谈大家的感受。", py: "Wǒ huì lěngjìng de gēn tā shuōhuà, ràng tā gēn zhe wǒ. Yǎnliàn yǐhòu, wǒmen zài bān shang tántan dàjiā de gǎnshòu.", es: "Le hablo con calma y le pido que me siga. Después del simulacro, hablamos en el grupo sobre cómo se sintieron.", ok: true },
            { t: "我会跟他说话冷静地。", py: "Wǒ huì gēn tā shuōhuà lěngjìng de.", es: "Le hablo con calma.", ok: false,
              fix: "El adverbio con 地 va antes del verbo: «冷静地跟他说话»." }
          ],
          clave: ["冷静", "安慰", "感受"],
          tip: "Adjetivo + 地 (de) + verbo forma un adverbio: 冷静地说 (decir con calma), 慢慢地走 (caminar despacio)." }
      ],
      cierre: { bot: "很好，考虑得很周到。明天见！", py: "Hěn hǎo, kǎolǜ de hěn zhōudào. Míngtiān jiàn!", es: "Muy bien, lo tienes todo previsto. ¡Hasta mañana!" },
      vocab: [
        { t: "地震", py: "dìzhèn", es: "sismo, terremoto" },
        { t: "疏散", py: "shūsàn", es: "evacuar" },
        { t: "演练", py: "yǎnliàn", es: "simulacro" },
        { t: "警报", py: "jǐngbào", es: "alarma" },
        { t: "蹲下", py: "dūn xià", es: "agacharse" },
        { t: "楼梯", py: "lóutī", es: "escaleras" },
        { t: "集合", py: "jíhé", es: "reunirse (en un punto)" },
        { t: "点名", py: "diǎnmíng", es: "llamar a lista" }
      ]
    },
    {
      id: "zh-23", titulo: "¿Me oyen? Fallas en la clase virtual", nivel: "B1",
      tema: "Problemas técnicos en clase virtual",
      contexto: "Das una clase virtual de español a un grupo de un colegio de Tianjin. Al empezar fallan el audio, la pantalla y la conexión.",
      rol: "王悦 (Wáng Yuè), representante del grupo, 15 años, práctica y amable",
      turnos: [
        { bot: "老师，我们听不清楚您的声音。", py: "Lǎoshī, wǒmen tīng bu qīngchu nín de shēngyīn.", es: "Profe, no lo escuchamos bien.",
          opciones: [
            { t: "现在呢？现在能听清楚吗？", py: "Xiànzài ne? Xiànzài néng tīng qīngchu ma?", es: "¿Y ahora? ¿Ahora sí me oyen bien?", ok: true },
            { t: "抱歉，我调一下麦克风。现在听得清楚吗？", py: "Bàoqiàn, wǒ tiáo yíxià màikèfēng. Xiànzài tīng de qīngchu ma?", es: "Perdón, ajusto el micrófono. ¿Ahora me oyen bien?", ok: true },
            { t: "抱歉。现在你们听清楚不吗？", py: "Bàoqiàn. Xiànzài nǐmen tīng qīngchu bu ma?", es: "Perdón. ¿Ahora me oyen bien?", ok: false,
              fix: "No se combinan 不 y 吗 así. Use el complemento potencial: «听得清楚吗？» o «听得清楚听不清楚？»." }
          ],
          clave: ["听得清楚", "麦克风", "现在"],
          tip: "Complemento potencial: 听得清楚 (se oye bien) / 听不清楚 (no se oye bien). Clave en clases virtuales." },
        { bot: "好多了！但是我们看不到您的屏幕。", py: "Hǎo duō le! Dànshì wǒmen kàn bu dào nín de píngmù.", es: "¡Mucho mejor! Pero no vemos su pantalla.",
          opciones: [
            { t: "好的，我再共享一次屏幕。", py: "Hǎo de, wǒ zài gòngxiǎng yí cì píngmù.", es: "Bueno, vuelvo a compartir la pantalla.", ok: true },
            { t: "不好意思，我忘了点“共享屏幕”。现在看得到吗？", py: "Bù hǎoyìsi, wǒ wàng le diǎn “gòngxiǎng píngmù”. Xiànzài kàn de dào ma?", es: "Qué pena, se me olvidó darle a «compartir pantalla». ¿Ahora sí la ven?", ok: true },
            { t: "好的，我共享再一次屏幕。", py: "Hǎo de, wǒ gòngxiǎng zài yí cì píngmù.", es: "Bueno, vuelvo a compartir la pantalla.", ok: false,
              fix: "再 (otra vez) va antes del verbo: «我再共享一次屏幕»." }
          ],
          clave: ["共享屏幕", "看得到", "再"],
          tip: "不好意思 (bù hǎoyìsi) = qué pena, disculpen: disculpa suave para molestias pequeñas." },
        { bot: "看到了。可是有几个同学掉线了。", py: "Kàn dào le. Kěshì yǒu jǐ ge tóngxué diàoxiàn le.", es: "Ya la vemos. Pero a varios compañeros se les cayó la conexión.",
          opciones: [
            { t: "没关系，我们等他们两分钟。", py: "Méi guānxi, wǒmen děng tāmen liǎng fēnzhōng.", es: "No pasa nada, los esperamos dos minutos.", ok: true },
            { t: "没关系。请你在群里告诉他们重新进入会议，我们等两分钟再开始。", py: "Méi guānxi. Qǐng nǐ zài qún li gàosu tāmen chóngxīn jìnrù huìyì, wǒmen děng liǎng fēnzhōng zài kāishǐ.", es: "Tranquilos. Por favor avísales en el grupo que vuelvan a entrar a la reunión; esperamos dos minutos y empezamos.", ok: true },
            { t: "没关系，我们等他们二分钟。", py: "Méi guānxi, wǒmen děng tāmen èr fēnzhōng.", es: "No pasa nada, los esperamos dos minutos.", ok: false,
              fix: "分钟 funciona como clasificador; con 2 se usa 两: «两分钟»." }
          ],
          clave: ["掉线", "重新", "等"],
          tip: "掉线 (diàoxiàn) = perder la conexión. 重新进入 = volver a entrar. 群 (qún) = grupo de chat." },
        { bot: "他们回来了。老师，今天的录像以后能看吗？", py: "Tāmen huílái le. Lǎoshī, jīntiān de lùxiàng yǐhòu néng kàn ma?", es: "Ya volvieron. Profe, ¿la grabación de hoy se podrá ver después?",
          opciones: [
            { t: "能，我下课以后把链接发给你们。", py: "Néng, wǒ xiàkè yǐhòu bǎ liànjiē fā gěi nǐmen.", es: "Sí, después de clase les envío el enlace.", ok: true },
            { t: "可以。我会把录像和课件都上传到班级群里，大家可以复习。", py: "Kěyǐ. Wǒ huì bǎ lùxiàng hé kèjiàn dōu shàngchuán dào bānjí qún li, dàjiā kěyǐ fùxí.", es: "Sí. Voy a subir la grabación y las diapositivas al grupo del curso para que todos puedan repasar.", ok: true },
            { t: "能，我下课以后发链接给你们了。", py: "Néng, wǒ xiàkè yǐhòu fā liànjiē gěi nǐmen le.", es: "Sí, después de clase les envío el enlace.", ok: false,
              fix: "了 marca algo ya ocurrido; para el futuro no se usa: «我下课以后把链接发给你们»." }
          ],
          clave: ["链接", "录像", "发给"],
          tip: "把 + objeto + 发给 + persona = enviarle algo a alguien: 把链接发给你们." },
        { bot: "老师，如果网又断了怎么办？", py: "Lǎoshī, rúguǒ wǎng yòu duàn le zěnme bàn?", es: "Profe, ¿y si se vuelve a caer el internet?",
          opciones: [
            { t: "你们先做练习册第十页，我马上回来。", py: "Nǐmen xiān zuò liànxícè dì shí yè, wǒ mǎshàng huílái.", es: "Ustedes hacen la página diez del cuaderno de ejercicios y yo vuelvo enseguida.", ok: true },
            { t: "别着急。如果五分钟以后我还没回来，你们就先做练习册第十页，我会在群里留言。", py: "Bié zháojí. Rúguǒ wǔ fēnzhōng yǐhòu wǒ hái méi huílái, nǐmen jiù xiān zuò liànxícè dì shí yè, wǒ huì zài qún li liúyán.", es: "Tranquilos. Si en cinco minutos no he vuelto, hagan la página diez del cuaderno y yo les dejo un mensaje en el grupo.", ok: true },
            { t: "你们先做第十页练习册，我马上回来。", py: "Nǐmen xiān zuò dì shí yè liànxícè, wǒ mǎshàng huílái.", es: "Ustedes hacen la página diez del cuaderno y yo vuelvo enseguida.", ok: false,
              fix: "Va de lo general a lo particular: «练习册第十页» (cuaderno → página diez)." }
          ],
          clave: ["着急", "练习册", "第十页"],
          tip: "别着急 (bié zháojí) = tranquilos, no se afanen. Calma al grupo ante cualquier imprevisto." },
        { bot: "明白了。谢谢老师这么有耐心！", py: "Míngbai le. Xièxie lǎoshī zhème yǒu nàixīn!", es: "Entendido. ¡Gracias, profe, por tener tanta paciencia!",
          opciones: [
            { t: "不客气，谢谢你们的帮助！", py: "Bú kèqi, xièxie nǐmen de bāngzhù!", es: "¡Con gusto, y gracias por su ayuda!", ok: true },
            { t: "也谢谢你们！技术问题很正常，重要的是我们一起解决了。", py: "Yě xièxie nǐmen! Jìshù wèntí hěn zhèngcháng, zhòngyào de shì wǒmen yìqǐ jiějué le.", es: "¡Gracias a ustedes también! Los problemas técnicos son normales; lo importante es que los resolvimos juntos.", ok: true },
            { t: "也谢谢你们！重要的是我们解决了一起。", py: "Yě xièxie nǐmen! Zhòngyào de shì wǒmen jiějué le yìqǐ.", es: "¡Gracias a ustedes también! Lo importante es que lo resolvimos juntos.", ok: false,
              fix: "一起 (juntos) va antes del verbo: «我们一起解决了»." }
          ],
          clave: ["解决", "一起", "正常"],
          tip: "解决 (jiějué) = resolver. 一起 siempre va antes del verbo: 一起解决, 一起学习." }
      ],
      cierre: { bot: "好的，那我们开始上课吧！", py: "Hǎo de, nà wǒmen kāishǐ shàngkè ba!", es: "¡Bueno, entonces empecemos la clase!" },
      vocab: [
        { t: "听不清楚", py: "tīng bu qīngchu", es: "no oír bien" },
        { t: "麦克风", py: "màikèfēng", es: "micrófono" },
        { t: "共享屏幕", py: "gòngxiǎng píngmù", es: "compartir pantalla" },
        { t: "掉线", py: "diàoxiàn", es: "perder la conexión" },
        { t: "链接", py: "liànjiē", es: "enlace" },
        { t: "录像", py: "lùxiàng", es: "grabación (video)" },
        { t: "上传", py: "shàngchuán", es: "subir (un archivo)" },
        { t: "着急", py: "zháojí", es: "afanarse, angustiarse" }
      ]
    },
    {
      id: "zh-24", titulo: "La nota equivocada", nivel: "B1",
      tema: "Disculparse y reparar un error",
      contexto: "Por error registraste una nota que no era en la plataforma. El papá de un estudiante te llama extrañado. Reconoces el error y lo reparas.",
      rol: "吴先生 (Wú xiānsheng), papá de 吴迪 (Wú Dí), molesto pero razonable",
      turnos: [
        { bot: "老师，我儿子的数学成绩怎么是不及格？他说考得不错。", py: "Lǎoshī, wǒ érzi de shùxué chéngjì zěnme shì bù jígé? Tā shuō kǎo de búcuò.", es: "Profe, ¿cómo así que mi hijo perdió matemáticas? Él dice que le fue bien en el examen.",
          opciones: [
            { t: "吴先生，您好。我马上查一下。", py: "Wú xiānsheng, nín hǎo. Wǒ mǎshàng chá yíxià.", es: "Buenas, señor Wu. Lo reviso enseguida.", ok: true },
            { t: "吴先生，谢谢您告诉我。请给我两分钟，我马上核对一下。", py: "Wú xiānsheng, xièxie nín gàosu wǒ. Qǐng gěi wǒ liǎng fēnzhōng, wǒ mǎshàng héduì yíxià.", es: "Señor Wu, gracias por avisarme. Deme dos minutos y lo verifico de inmediato.", ok: true },
            { t: "吴先生，我查一下马上。", py: "Wú xiānsheng, wǒ chá yíxià mǎshàng.", es: "Señor Wu, lo reviso enseguida.", ok: false,
              fix: "马上 (enseguida) va antes del verbo: «我马上查一下»." }
          ],
          clave: ["马上", "查一下", "核对"],
          tip: "Ante una queja, primero agradezca y muestre acción: 谢谢您告诉我，我马上查一下." },
        { bot: "好，我等您。", py: "Hǎo, wǒ děng nín.", es: "Bueno, lo espero.",
          opciones: [
            { t: "对不起，是我弄错了。吴迪考了八十五分。", py: "Duìbuqǐ, shì wǒ nòng cuò le. Wú Dí kǎo le bāshíwǔ fēn.", es: "Perdón, me equivoqué yo. Wu Di sacó ochenta y cinco.", ok: true },
            { t: "非常抱歉，是我的错。我把吴迪和另一个学生的成绩输错了，他其实考了八十五分。", py: "Fēicháng bàoqiàn, shì wǒ de cuò. Wǒ bǎ Wú Dí hé lìng yí ge xuésheng de chéngjì shū cuò le, tā qíshí kǎo le bāshíwǔ fēn.", es: "Lo siento mucho, fue mi error. Confundí la nota de Wu Di con la de otro estudiante; en realidad sacó ochenta y cinco.", ok: true },
            { t: "对不起，是我错弄了。", py: "Duìbuqǐ, shì wǒ cuò nòng le.", es: "Perdón, me equivoqué yo.", ok: false,
              fix: "El resultado va después del verbo: «我弄错了» (hacer + mal)." }
          ],
          clave: ["对不起", "弄错", "八十五分"],
          tip: "是我的错 (shì wǒ de cuò) = fue mi error. Asumir la responsabilidad sin excusas genera confianza." },
        { bot: "原来是这样！可是孩子昨天很难过。", py: "Yuánlái shì zhèyàng! Kěshì háizi zuótiān hěn nánguò.", es: "¡Ah, era eso! Pero el niño estuvo muy triste ayer.",
          opciones: [
            { t: "我理解。我会跟吴迪道歉。", py: "Wǒ lǐjiě. Wǒ huì gēn Wú Dí dàoqiàn.", es: "Lo entiendo. Le voy a pedir disculpas a Wu Di.", ok: true },
            { t: "我完全理解，真的很抱歉让他难过了。明天我会当面跟他道歉，告诉他他做得很好。", py: "Wǒ wánquán lǐjiě, zhēn de hěn bàoqiàn ràng tā nánguò le. Míngtiān wǒ huì dāngmiàn gēn tā dàoqiàn, gàosu tā tā zuò de hěn hǎo.", es: "Lo entiendo totalmente y lamento mucho haberlo puesto triste. Mañana le pido disculpas en persona y le digo que le fue muy bien.", ok: true },
            { t: "我理解。我会道歉吴迪。", py: "Wǒ lǐjiě. Wǒ huì dàoqiàn Wú Dí.", es: "Lo entiendo. Le voy a pedir disculpas a Wu Di.", ok: false,
              fix: "道歉 no lleva objeto directo: «跟吴迪道歉» o «向吴迪道歉»." }
          ],
          clave: ["理解", "道歉", "难过"],
          tip: "道歉 (dàoqiàn) funciona como 过敏: la persona va antes, con 跟 o 向: 向您道歉." },
        { bot: "系统里的成绩什么时候改？", py: "Xìtǒng li de chéngjì shénme shíhou gǎi?", es: "¿Y cuándo corrigen la nota en la plataforma?",
          opciones: [
            { t: "我今天就改。", py: "Wǒ jīntiān jiù gǎi.", es: "Hoy mismo la corrijo.", ok: true },
            { t: "我已经改好了，您可以刷新页面看一下。", py: "Wǒ yǐjīng gǎi hǎo le, nín kěyǐ shuāxīn yèmiàn kàn yíxià.", es: "Ya la corregí; puede actualizar la página y verificar.", ok: true },
            { t: "我改好了已经。", py: "Wǒ gǎi hǎo le yǐjīng.", es: "Ya la corregí.", ok: false,
              fix: "已经 (ya) va antes del verbo: «我已经改好了»." }
          ],
          clave: ["改好", "刷新", "已经"],
          tip: "已经……了 enmarca una acción terminada: 已经改好了 (ya quedó corregido)." },
        { bot: "我担心别的学生的成绩也有问题。", py: "Wǒ dānxīn bié de xuésheng de chéngjì yě yǒu wèntí.", es: "Me preocupa que las notas de otros estudiantes también estén mal.",
          opciones: [
            { t: "您说得对，我会把全班的成绩再检查一遍。", py: "Nín shuō de duì, wǒ huì bǎ quán bān de chéngjì zài jiǎnchá yí biàn.", es: "Tiene razón; voy a revisar otra vez las notas de todo el grupo.", ok: true },
            { t: "这个担心很合理。今天我会检查全班的成绩，以后录入成绩时也会请另一位老师帮我核对。", py: "Zhège dānxīn hěn hélǐ. Jīntiān wǒ huì jiǎnchá quán bān de chéngjì, yǐhòu lùrù chéngjì shí yě huì qǐng lìng yí wèi lǎoshī bāng wǒ héduì.", es: "Es una preocupación válida. Hoy reviso las notas de todo el grupo y, de ahora en adelante, al registrar notas le pediré a otro profesor que me ayude a verificarlas.", ok: true },
            { t: "您说得对，我会检查全班的成绩再一遍。", py: "Nín shuō de duì, wǒ huì jiǎnchá quán bān de chéngjì zài yí biàn.", es: "Tiene razón; voy a revisar otra vez las notas del grupo.", ok: false,
              fix: "再 va antes del verbo y 一遍 justo después: «再检查一遍»." }
          ],
          clave: ["检查", "全班", "核对"],
          tip: "Reparar es también prevenir: explique qué cambiará para que el error no se repita." },
        { bot: "好，谢谢您这么快处理。", py: "Hǎo, xièxie nín zhème kuài chǔlǐ.", es: "Bueno, gracias por resolverlo tan rápido.",
          opciones: [
            { t: "不客气，再次向您道歉。", py: "Bú kèqi, zàicì xiàng nín dàoqiàn.", es: "Con gusto; le pido disculpas de nuevo.", ok: true },
            { t: "应该的。谢谢您及时告诉我，这次错误也让我学到了很多。", py: "Yīnggāi de. Xièxie nín jíshí gàosu wǒ, zhè cì cuòwù yě ràng wǒ xué dào le hěn duō.", es: "Era mi deber. Gracias por avisarme a tiempo; este error también me enseñó mucho.", ok: true },
            { t: "不客气，我再次道歉您。", py: "Bú kèqi, wǒ zàicì dàoqiàn nín.", es: "Con gusto; le pido disculpas de nuevo.", ok: false,
              fix: "Igual que antes: «向您道歉»; 道歉 no lleva objeto directo." }
          ],
          clave: ["道歉", "及时", "学到"],
          tip: "应该的 (yīnggāi de) = era mi deber: respuesta humilde cuando le agradecen algo que le correspondía hacer." }
      ],
      cierre: { bot: "好的，那就这样。老师再见！", py: "Hǎo de, nà jiù zhèyàng. Lǎoshī zàijiàn!", es: "Listo, quedamos así. ¡Hasta luego, profe!" },
      vocab: [
        { t: "成绩", py: "chéngjì", es: "nota, calificación" },
        { t: "弄错", py: "nòng cuò", es: "equivocarse, confundir" },
        { t: "抱歉", py: "bàoqiàn", es: "lamentar; disculpa" },
        { t: "道歉", py: "dàoqiàn", es: "pedir disculpas" },
        { t: "核对", py: "héduì", es: "verificar, cotejar" },
        { t: "改", py: "gǎi", es: "corregir, cambiar" },
        { t: "理解", py: "lǐjiě", es: "comprender" },
        { t: "及时", py: "jíshí", es: "a tiempo, oportunamente" }
      ]
    },
    {
      id: "zh-25", titulo: "Mentor del profe nuevo", nivel: "B1",
      tema: "Mentoría a un docente nuevo",
      contexto: "Trabajas desde hace años en un colegio de Qingdao y te asignaron como mentor de un profesor recién graduado que está terminando su primera semana.",
      rol: "小郑 (Xiǎo Zhèng), profesor de 23 años en su primer año, nervioso",
      turnos: [
        { bot: "老师，我第一个星期觉得压力很大。", py: "Lǎoshī, wǒ dì yī ge xīngqī juéde yālì hěn dà.", es: "Profe, en mi primera semana me he sentido muy presionado.",
          opciones: [
            { t: "很正常，我刚开始的时候也一样。", py: "Hěn zhèngcháng, wǒ gāng kāishǐ de shíhou yě yíyàng.", es: "Es normal; cuando yo empecé me pasó lo mismo.", ok: true },
            { t: "我明白。你愿意跟我说说是什么让你压力这么大吗？", py: "Wǒ míngbai. Nǐ yuànyì gēn wǒ shuōshuo shì shénme ràng nǐ yālì zhème dà ma?", es: "Te entiendo. ¿Quieres contarme qué es lo que más te presiona?", ok: true },
            { t: "很正常，我开始刚的时候也一样。", py: "Hěn zhèngcháng, wǒ kāishǐ gāng de shíhou yě yíyàng.", es: "Es normal; cuando yo empecé me pasó lo mismo.", ok: false,
              fix: "刚 (recién) es un adverbio y va antes del verbo: «我刚开始的时候»." }
          ],
          clave: ["正常", "压力", "刚开始"],
          tip: "Escuche antes de aconsejar: una pregunta abierta (是什么让你……?) invita a contar más." },
        { bot: "主要是课堂纪律。学生总是说话，我管不住他们。", py: "Zhǔyào shì kètáng jìlǜ. Xuésheng zǒngshì shuōhuà, wǒ guǎn bu zhù tāmen.", es: "Sobre todo la disciplina. Los estudiantes hablan todo el tiempo y no logro controlarlos.",
          opciones: [
            { t: "你可以先和学生一起定几条规则。", py: "Nǐ kěyǐ xiān hé xuésheng yìqǐ dìng jǐ tiáo guīzé.", es: "Puedes empezar por acordar unas pocas normas con los estudiantes.", ok: true },
            { t: "第一周最重要的是建立常规。试试和学生一起定三条简单的规则，贴在墙上，每天都提醒。", py: "Dì yī zhōu zuì zhòngyào de shì jiànlì chángguī. Shìshi hé xuésheng yìqǐ dìng sān tiáo jiǎndān de guīzé, tiē zài qiáng shang, měitiān dōu tíxǐng.", es: "En la primera semana lo más importante es crear rutinas. Prueba a acordar con ellos tres normas sencillas, pegarlas en la pared y recordarlas a diario.", ok: true },
            { t: "你可以先定规则和学生一起。", py: "Nǐ kěyǐ xiān dìng guīzé hé xuésheng yìqǐ.", es: "Puedes empezar por acordar normas con los estudiantes.", ok: false,
              fix: "和……一起 va antes del verbo: «和学生一起定规则»." }
          ],
          clave: ["规则", "常规", "一起"],
          tip: "管不住 (guǎn bu zhù) = no lograr controlar. Potencial negativo: verbo + 不 + resultado." },
        { bot: "如果学生不遵守规则呢？", py: "Rúguǒ xuésheng bù zūnshǒu guīzé ne?", es: "¿Y si los estudiantes no cumplen las normas?",
          opciones: [
            { t: "先提醒，不要马上批评。", py: "Xiān tíxǐng, búyào mǎshàng pīpíng.", es: "Primero recuérdales, no regañes de una vez.", ok: true },
            { t: "先用眼神或者走到他旁边提醒，下课以后再单独跟他谈，不要在全班面前批评。", py: "Xiān yòng yǎnshén huòzhě zǒu dào tā pángbiān tíxǐng, xiàkè yǐhòu zài dāndú gēn tā tán, búyào zài quán bān miànqián pīpíng.", es: "Primero recuérdale con la mirada o acercándote; después de clase habla con él a solas. No lo regañes delante de todo el grupo.", ok: true },
            { t: "先用眼神还是走到他旁边提醒。", py: "Xiān yòng yǎnshén háishi zǒu dào tā pángbiān tíxǐng.", es: "Primero recuérdale con la mirada o acercándote.", ok: false,
              fix: "En afirmaciones «o» es 或者; 还是 se usa en preguntas: «用眼神或者走到他旁边»." }
          ],
          clave: ["提醒", "单独", "批评"],
          tip: "或者 (huòzhě) = o, en afirmaciones; 还是 (háishi) = o, en preguntas: 你喝茶还是咖啡？" },
        { bot: "我还担心备课时间不够。", py: "Wǒ hái dānxīn bèikè shíjiān bú gòu.", es: "También me preocupa que no me alcance el tiempo para preparar clases.",
          opciones: [
            { t: "你可以用我去年的课件，然后慢慢改。", py: "Nǐ kěyǐ yòng wǒ qùnián de kèjiàn, ránhòu mànmàn gǎi.", es: "Puedes usar mis diapositivas del año pasado e irlas ajustando.", ok: true },
            { t: "别什么都从零开始。我把我的课件和练习都分享给你，你根据你的班级情况调整就行。", py: "Bié shénme dōu cóng líng kāishǐ. Wǒ bǎ wǒ de kèjiàn hé liànxí dōu fēnxiǎng gěi nǐ, nǐ gēnjù nǐ de bānjí qíngkuàng tiáozhěng jiù xíng.", es: "No empieces todo desde cero. Te comparto mis diapositivas y ejercicios, y tú los ajustas según tu grupo.", ok: true },
            { t: "我把我的课件分享你。", py: "Wǒ bǎ wǒ de kèjiàn fēnxiǎng nǐ.", es: "Te comparto mis diapositivas.", ok: false,
              fix: "分享 necesita 给 para indicar con quién se comparte: «我把我的课件分享给你»." }
          ],
          clave: ["课件", "分享", "调整"],
          tip: "从零开始 (cóng líng kāishǐ) = empezar desde cero. 根据 (gēnjù) = según, de acuerdo con." },
        { bot: "您可以来听我的课，给我提提意见吗？", py: "Nín kěyǐ lái tīng wǒ de kè, gěi wǒ títi yìjiàn ma?", es: "¿Podría venir a observar una de mis clases y darme sugerencias?",
          opciones: [
            { t: "当然可以，下周二我去听你的课。", py: "Dāngrán kěyǐ, xià zhōu'èr wǒ qù tīng nǐ de kè.", es: "Claro que sí; el próximo martes voy a observar tu clase.", ok: true },
            { t: "好啊。我们先约个时间。听课以后，我先说两个优点，再说一个可以改进的地方。", py: "Hǎo a. Wǒmen xiān yuē ge shíjiān. Tīngkè yǐhòu, wǒ xiān shuō liǎng ge yōudiǎn, zài shuō yí ge kěyǐ gǎijìn de dìfang.", es: "Con gusto. Primero cuadramos la hora. Después de la observación te digo dos fortalezas y luego un aspecto por mejorar.", ok: true },
            { t: "好啊。听课以后我先说优点二个。", py: "Hǎo a. Tīngkè yǐhòu wǒ xiān shuō yōudiǎn èr ge.", es: "Con gusto. Después de la observación te digo dos fortalezas.", ok: false,
              fix: "Número + clasificador van antes del sustantivo, y con 2 se usa 两: «两个优点»." }
          ],
          clave: ["听课", "优点", "改进"],
          tip: "听课 (tīngkè) = observar una clase. Primero fortalezas y luego una mejora concreta: así la retroalimentación sirve." },
        { bot: "太感谢了！有您帮我，我放心多了。", py: "Tài gǎnxiè le! Yǒu nín bāng wǒ, wǒ fàngxīn duō le.", es: "¡Mil gracias! Con su ayuda me siento mucho más tranquilo.",
          opciones: [
            { t: "不客气，我们一起成长。", py: "Bú kèqi, wǒmen yìqǐ chéngzhǎng.", es: "Con gusto; crecemos juntos.", ok: true },
            { t: "别客气。记住，犯错是学习的一部分，有问题随时来找我。", py: "Bié kèqi. Jì zhù, fàn cuò shì xuéxí de yí bùfen, yǒu wèntí suíshí lái zhǎo wǒ.", es: "No hay de qué. Recuerda: equivocarse es parte de aprender. Si tienes dudas, búscame cuando quieras.", ok: true },
            { t: "别客气。记住，犯错是部分的学习。", py: "Bié kèqi. Jì zhù, fàn cuò shì bùfen de xuéxí.", es: "No hay de qué. Recuerda: equivocarse es parte de aprender.", ok: false,
              fix: "«Parte de» se dice «……的一部分»: «学习的一部分»." }
          ],
          clave: ["犯错", "一部分", "随时"],
          tip: "随时 (suíshí) = en cualquier momento. «有问题随时来找我» ofrece apoyo sin presionar." }
      ],
      cierre: { bot: "我记住了。谢谢您，明天我再跟您说说情况！", py: "Wǒ jì zhù le. Xièxie nín, míngtiān wǒ zài gēn nín shuōshuo qíngkuàng!", es: "Lo tendré presente. ¡Gracias! Mañana le cuento cómo me fue." },
      vocab: [
        { t: "压力", py: "yālì", es: "presión, estrés" },
        { t: "课堂纪律", py: "kètáng jìlǜ", es: "disciplina en el aula" },
        { t: "规则", py: "guīzé", es: "norma, regla" },
        { t: "提醒", py: "tíxǐng", es: "recordar, advertir" },
        { t: "批评", py: "pīpíng", es: "criticar, regañar" },
        { t: "课件", py: "kèjiàn", es: "material de clase (diapositivas)" },
        { t: "听课", py: "tīngkè", es: "observar una clase" },
        { t: "改进", py: "gǎijìn", es: "mejorar" }
      ]
    },
    {
      id: "zh-26", titulo: "Reunión del área de matemáticas", nivel: "B1",
      tema: "Reunión de área",
      contexto: "En la reunión del área de matemáticas de un colegio de Shenzhen se planea el próximo semestre. Propones incluir educación financiera en las clases.",
      rol: "何老师 (Hé lǎoshī), jefa del área de matemáticas, práctica y exigente",
      turnos: [
        { bot: "大家好，今天我们讨论下学期的教学计划。你有什么想法？", py: "Dàjiā hǎo, jīntiān wǒmen tǎolùn xià xuéqī de jiàoxué jìhuà. Nǐ yǒu shénme xiǎngfǎ?", es: "Buenas a todos. Hoy hablamos del plan del próximo semestre. ¿Tú qué propones?",
          opciones: [
            { t: "我想在数学课上加一些理财内容。", py: "Wǒ xiǎng zài shùxué kè shang jiā yìxiē lǐcái nèiróng.", es: "Quisiera agregar contenidos de manejo del dinero en la clase de matemáticas.", ok: true },
            { t: "我建议把财商教育放进数学课，比如让学生做家庭预算。", py: "Wǒ jiànyì bǎ cáishāng jiàoyù fàng jìn shùxué kè, bǐrú ràng xuésheng zuò jiātíng yùsuàn.", es: "Propongo incluir la educación financiera en matemáticas; por ejemplo, que los estudiantes hagan un presupuesto familiar.", ok: true },
            { t: "我想加一些理财内容在数学课上。", py: "Wǒ xiǎng jiā yìxiē lǐcái nèiróng zài shùxué kè shang.", es: "Quisiera agregar contenidos de manejo del dinero en matemáticas.", ok: false,
              fix: "El lugar va antes del verbo: «在数学课上加一些理财内容»." }
          ],
          clave: ["理财", "预算", "建议"],
          tip: "理财 (lǐcái) = manejar el dinero. 财商教育 (cáishāng jiàoyù) = educación financiera." },
        { bot: "有意思。具体怎么做呢？", py: "Yǒu yìsi. Jùtǐ zěnme zuò ne?", es: "Interesante. ¿Y en concreto cómo se haría?",
          opciones: [
            { t: "可以在百分数的单元教储蓄和利息。", py: "Kěyǐ zài bǎifēnshù de dānyuán jiāo chǔxù hé lìxī.", es: "En la unidad de porcentajes se puede enseñar ahorro e intereses.", ok: true },
            { t: "比如学百分数的时候，让学生计算储蓄的利息，再比较两家银行的利率。", py: "Bǐrú xué bǎifēnshù de shíhou, ràng xuésheng jìsuàn chǔxù de lìxī, zài bǐjiào liǎng jiā yínháng de lìlǜ.", es: "Por ejemplo, al ver porcentajes, que calculen los intereses de un ahorro y comparen las tasas de dos bancos.", ok: true },
            { t: "比如学百分数的时候，让学生比较二家银行的利率。", py: "Bǐrú xué bǎifēnshù de shíhou, ràng xuésheng bǐjiào èr jiā yínháng de lìlǜ.", es: "Por ejemplo, al ver porcentajes, que comparen las tasas de dos bancos.", ok: false,
              fix: "家 es clasificador; con 2 se usa 两: «两家银行»." }
          ],
          clave: ["百分数", "利息", "利率"],
          tip: "家 (jiā) es el clasificador de empresas y negocios: 两家银行, 一家商店." },
        { bot: "我担心课时不够，教学进度会受影响。", py: "Wǒ dānxīn kèshí bú gòu, jiàoxué jìndù huì shòu yǐngxiǎng.", es: "Me preocupa que no alcancen las horas y se afecte el avance del programa.",
          opciones: [
            { t: "不用加课时，只是换一种例子。", py: "Bú yòng jiā kèshí, zhǐshì huàn yì zhǒng lìzi.", es: "No hace falta agregar horas; solo cambiamos el tipo de ejemplos.", ok: true },
            { t: "我理解您的担心。其实不需要额外的课时，我们只是把课本里的例子换成真实的生活问题。", py: "Wǒ lǐjiě nín de dānxīn. Qíshí bù xūyào éwài de kèshí, wǒmen zhǐshì bǎ kèběn li de lìzi huàn chéng zhēnshí de shēnghuó wèntí.", es: "Entiendo su preocupación. En realidad no se necesitan horas extra: solo cambiamos los ejemplos del libro por problemas reales de la vida.", ok: true },
            { t: "其实不需要额外的课时，我们只是换课本里的例子成生活问题。", py: "Qíshí bù xūyào éwài de kèshí, wǒmen zhǐshì huàn kèběn li de lìzi chéng shēnghuó wèntí.", es: "En realidad no se necesitan horas extra; solo cambiamos los ejemplos del libro por problemas de la vida.", ok: false,
              fix: "换成 no se separa. Con objeto se usa 把: «把课本里的例子换成生活问题»." }
          ],
          clave: ["课时", "例子", "换成"],
          tip: "Reconozca la preocupación antes de responder: «我理解您的担心，其实……» suena respetuoso y constructivo." },
        { bot: "那怎么评价学生的学习效果？", py: "Nà zěnme píngjià xuésheng de xuéxí xiàoguǒ?", es: "¿Y cómo se evalúa lo que aprenden?",
          opciones: [
            { t: "可以让学生做一个小项目。", py: "Kěyǐ ràng xuésheng zuò yí ge xiǎo xiàngmù.", es: "Se les puede pedir un pequeño proyecto.", ok: true },
            { t: "除了考试，还可以让学生小组合作做一个预算项目，用评分量表来评价。", py: "Chúle kǎoshì, hái kěyǐ ràng xuésheng xiǎozǔ hézuò zuò yí ge yùsuàn xiàngmù, yòng píngfēn liàngbiǎo lái píngjià.", es: "Además del examen, pueden hacer en grupo un proyecto de presupuesto, evaluado con una rúbrica.", ok: true },
            { t: "除了考试，还可以让学生做项目，用评分量表评价来。", py: "Chúle kǎoshì, hái kěyǐ ràng xuésheng zuò xiàngmù, yòng píngfēn liàngbiǎo píngjià lái.", es: "Además del examen, pueden hacer un proyecto evaluado con una rúbrica.", ok: false,
              fix: "来 une el medio con la acción y va antes del verbo: «用评分量表来评价»." }
          ],
          clave: ["项目", "评分量表", "除了"],
          tip: "除了……还…… = además de…, también…: 除了考试，还可以做项目." },
        { bot: "好。谁愿意负责设计第一个单元？", py: "Hǎo. Shéi yuànyì fùzé shèjì dì yī ge dānyuán?", es: "Bien. ¿Quién se encarga de diseñar la primera unidad?",
          opciones: [
            { t: "我来吧。", py: "Wǒ lái ba.", es: "Yo me encargo.", ok: true },
            { t: "我可以负责。下周五以前我把初稿发给大家，请大家提意见。", py: "Wǒ kěyǐ fùzé. Xià zhōuwǔ yǐqián wǒ bǎ chūgǎo fā gěi dàjiā, qǐng dàjiā tí yìjiàn.", es: "Yo me encargo. Antes del próximo viernes les envío el borrador para que lo comenten.", ok: true },
            { t: "我可以负责。我发初稿给大家下周五以前。", py: "Wǒ kěyǐ fùzé. Wǒ fā chūgǎo gěi dàjiā xià zhōuwǔ yǐqián.", es: "Yo me encargo. Les envío el borrador antes del próximo viernes.", ok: false,
              fix: "El tiempo va antes del verbo: «下周五以前我把初稿发给大家»." }
          ],
          clave: ["负责", "初稿", "提意见"],
          tip: "我来吧 (wǒ lái ba) = yo me encargo. Aquí 来 significa «hacerse cargo de algo»." },
        { bot: "太好了。还有别的问题吗？", py: "Tài hǎo le. Hái yǒu bié de wèntí ma?", es: "Perfecto. ¿Algo más?",
          opciones: [
            { t: "没有了，谢谢大家。", py: "Méiyǒu le, xièxie dàjiā.", es: "Nada más, gracias a todos.", ok: true },
            { t: "我想补充一点：我们可以每个月开一次短会，分享哪些做法有效，哪些需要改进。", py: "Wǒ xiǎng bǔchōng yì diǎn: wǒmen kěyǐ měi ge yuè kāi yí cì duǎn huì, fēnxiǎng nǎxiē zuòfǎ yǒuxiào, nǎxiē xūyào gǎijìn.", es: "Quisiera añadir algo: podemos hacer una reunión corta cada mes para compartir qué funciona y qué hay que mejorar.", ok: true },
            { t: "我想补充一点：我们可以开一次短会每个月。", py: "Wǒ xiǎng bǔchōng yì diǎn: wǒmen kěyǐ kāi yí cì duǎn huì měi ge yuè.", es: "Quisiera añadir algo: podemos hacer una reunión corta cada mes.", ok: false,
              fix: "La frecuencia va antes del verbo: «每个月开一次短会»." }
          ],
          clave: ["补充", "每个月", "分享"],
          tip: "我想补充一点 (wǒ xiǎng bǔchōng yì diǎn) = quisiera añadir algo. Muy útil para intervenir en reuniones." }
      ],
      cierre: { bot: "好，就这么定了。散会！", py: "Hǎo, jiù zhème dìng le. Sàn huì!", es: "Bien, quedamos así. ¡Se levanta la reunión!" },
      vocab: [
        { t: "教学计划", py: "jiàoxué jìhuà", es: "plan de enseñanza" },
        { t: "理财", py: "lǐcái", es: "manejo del dinero" },
        { t: "预算", py: "yùsuàn", es: "presupuesto" },
        { t: "利息", py: "lìxī", es: "intereses" },
        { t: "课时", py: "kèshí", es: "horas de clase" },
        { t: "评价", py: "píngjià", es: "evaluar; evaluación" },
        { t: "负责", py: "fùzé", es: "encargarse, ser responsable" },
        { t: "初稿", py: "chūgǎo", es: "borrador" }
      ]
    },
    {
      id: "zh-27", titulo: "Mediar en un trabajo en grupo", nivel: "B2",
      tema: "Mediar un conflicto",
      contexto: "Un estudiante de 14 años llega furioso porque su compañero de grupo no ha aportado nada al informe. Lo escuchas y preparas una mediación entre los dos.",
      rol: "张伟 (Zhāng Wěi), estudiante de 14 años, enojado y frustrado",
      turnos: [
        { bot: "老师，我再也不想跟刘洋一组了！他什么都不做。", py: "Lǎoshī, wǒ zài yě bù xiǎng gēn Liú Yáng yì zǔ le! Tā shénme dōu bú zuò.", es: "¡Profe, no quiero volver a estar en grupo con Liu Yang! No hace nada.",
          opciones: [
            { t: "我看得出来你很生气。能跟我说说发生了什么吗？", py: "Wǒ kàn de chūlái nǐ hěn shēngqì. Néng gēn wǒ shuōshuo fāshēng le shénme ma?", es: "Veo que estás muy enojado. ¿Me cuentas qué pasó?", ok: true },
            { t: "先深呼吸一下。你的感受很重要，我想听听整件事情的经过。", py: "Xiān shēn hūxī yíxià. Nǐ de gǎnshòu hěn zhòngyào, wǒ xiǎng tīngting zhěng jiàn shìqing de jīngguò.", es: "Primero respira hondo. Lo que sientes es importante y quiero escuchar todo lo que pasó.", ok: true },
            { t: "我看出来得你很生气。", py: "Wǒ kàn chūlái de nǐ hěn shēngqì.", es: "Veo que estás muy enojado.", ok: false,
              fix: "En el complemento potencial 得 va entre el verbo y el complemento: «看得出来»." }
          ],
          clave: ["生气", "发生", "感受"],
          tip: "Nombrar la emoción (你很生气) sin juzgarla baja la tensión: es el primer paso de una mediación." },
        { bot: "我们的报告下周交，可是他一直玩手机，一页都没写。", py: "Wǒmen de bàogào xià zhōu jiāo, kěshì tā yìzhí wán shǒujī, yí yè dōu méi xiě.", es: "El informe se entrega la otra semana y él solo juega con el celular; no ha escrito ni una página.",
          opciones: [
            { t: "所以你觉得分工不公平，对吗？", py: "Suǒyǐ nǐ juéde fēngōng bù gōngpíng, duì ma?", es: "O sea que sientes que el reparto del trabajo es injusto, ¿cierto?", ok: true },
            { t: "也就是说，你担心报告完不成，而且觉得所有的工作都落在你身上。是这样吗？", py: "Yě jiù shì shuō, nǐ dānxīn bàogào wán bu chéng, érqiě juéde suǒyǒu de gōngzuò dōu luò zài nǐ shēn shang. Shì zhèyàng ma?", es: "Es decir, te preocupa no terminar el informe y sientes que todo el trabajo cae sobre ti. ¿Es así?", ok: true },
            { t: "也就是说，你担心报告不完成。", py: "Yě jiù shì shuō, nǐ dānxīn bàogào bù wánchéng.", es: "Es decir, te preocupa no poder terminar el informe.", ok: false,
              fix: "«No poder terminar» se expresa con el potencial: «完不成» o «完成不了». «不完成» suena a «no querer terminar»." }
          ],
          clave: ["公平", "完不成", "也就是说"],
          tip: "Parafrasear (也就是说……，是这样吗？) muestra que escuchó y permite corregir malentendidos." },
        { bot: "对！而且我跟他说过好几次，他都不理我。", py: "Duì! Érqiě wǒ gēn tā shuō guo hǎo jǐ cì, tā dōu bù lǐ wǒ.", es: "¡Sí! Y se lo he dicho varias veces y no me hace caso.",
          opciones: [
            { t: "那一定很让人失望。", py: "Nà yídìng hěn ràng rén shīwàng.", es: "Eso debe ser muy frustrante.", ok: true },
            { t: "被忽视的感觉确实不好受。不过，我们也需要听听刘洋怎么说，也许他有我们不知道的原因。", py: "Bèi hūshì de gǎnjué quèshí bù hǎoshòu. Búguò, wǒmen yě xūyào tīngting Liú Yáng zěnme shuō, yěxǔ tā yǒu wǒmen bù zhīdào de yuányīn.", es: "Sentirse ignorado de verdad es difícil. Pero también necesitamos escuchar a Liu Yang; quizá tiene razones que no conocemos.", ok: true },
            { t: "不过，也许他有原因我们不知道。", py: "Búguò, yěxǔ tā yǒu yuányīn wǒmen bù zhīdào.", es: "Pero quizá tiene razones que no conocemos.", ok: false,
              fix: "La oración de relativo va antes del sustantivo con 的: «我们不知道的原因»." }
          ],
          clave: ["失望", "原因", "听听"],
          tip: "Las oraciones de relativo van antes del sustantivo: 我们不知道的原因 (una razón que no conocemos)." },
        { bot: "好吧……可是如果他又不做呢？", py: "Hǎo ba…… kěshì rúguǒ tā yòu bú zuò ne?", es: "Bueno… ¿pero y si otra vez no hace nada?",
          opciones: [
            { t: "那我们一起把任务分清楚，写下来。", py: "Nà wǒmen yìqǐ bǎ rènwu fēn qīngchu, xiě xiàlái.", es: "Entonces repartimos claramente las tareas entre todos y las dejamos por escrito.", ok: true },
            { t: "我们三个人坐下来，把每个人的任务和截止时间写清楚。如果还有问题，我会负责跟进。", py: "Wǒmen sān ge rén zuò xiàlái, bǎ měi ge rén de rènwu hé jiézhǐ shíjiān xiě qīngchu. Rúguǒ hái yǒu wèntí, wǒ huì fùzé gēnjìn.", es: "Nos sentamos los tres y escribimos claramente la tarea y la fecha límite de cada uno. Si sigue habiendo problemas, yo hago el seguimiento.", ok: true },
            { t: "我们三个人坐下来，把任务写。", py: "Wǒmen sān ge rén zuò xiàlái, bǎ rènwu xiě.", es: "Nos sentamos los tres y escribimos las tareas.", ok: false,
              fix: "Con 把 el verbo no puede ir solo; necesita un resultado: «把任务写清楚» o «把任务写下来»." }
          ],
          clave: ["任务", "写清楚", "跟进"],
          tip: "Con 把 el verbo lleva siempre un complemento: 把任务分清楚, 把它写下来." },
        { bot: "那我要跟他道歉吗？我昨天骂他了。", py: "Nà wǒ yào gēn tā dàoqiàn ma? Wǒ zuótiān mà tā le.", es: "¿Y yo le tengo que pedir disculpas? Ayer lo insulté.",
          opciones: [
            { t: "你觉得呢？说了伤人的话，道个歉会更好。", py: "Nǐ juéde ne? Shuō le shāng rén de huà, dào ge qiàn huì gèng hǎo.", es: "¿Tú qué crees? Si dijiste cosas hirientes, sería mejor disculparte.", ok: true },
            { t: "你很诚实。生气是正常的，但骂人会伤害对方。如果你先道歉，你们俩会更容易解决问题。", py: "Nǐ hěn chéngshí. Shēngqì shì zhèngcháng de, dàn mà rén huì shānghài duìfāng. Rúguǒ nǐ xiān dàoqiàn, nǐmen liǎ huì gèng róngyì jiějué wèntí.", es: "Eres honesto. Enojarse es normal, pero insultar hiere al otro. Si tú te disculpas primero, les será más fácil resolverlo.", ok: true },
            { t: "你很诚实。如果你道歉先，你们会更容易解决问题。", py: "Nǐ hěn chéngshí. Rúguǒ nǐ dàoqiàn xiān, nǐmen huì gèng róngyì jiějué wèntí.", es: "Eres honesto. Si te disculpas primero, les será más fácil resolverlo.", ok: false,
              fix: "先 (primero) va antes del verbo: «你先道歉»." }
          ],
          clave: ["道歉", "诚实", "伤害"],
          tip: "你觉得呢？ devuelve la pregunta para que el estudiante reflexione y decida, en vez de imponerle la respuesta." },
        { bot: "好吧，我愿意试试。什么时候跟他谈？", py: "Hǎo ba, wǒ yuànyì shìshi. Shénme shíhou gēn tā tán?", es: "Bueno, estoy dispuesto a intentarlo. ¿Cuándo hablamos con él?",
          opciones: [
            { t: "明天午休的时候，在我的办公室。", py: "Míngtiān wǔxiū de shíhou, zài wǒ de bàngōngshì.", es: "Mañana a la hora del almuerzo, en mi oficina.", ok: true },
            { t: "明天午休的时候吧。谈的时候每个人轮流说，不打断别人，只说事实和感受。", py: "Míngtiān wǔxiū de shíhou ba. Tán de shíhou měi ge rén lúnliú shuō, bù dǎduàn biérén, zhǐ shuō shìshí hé gǎnshòu.", es: "Mañana en el almuerzo. Durante la charla cada uno habla por turnos, sin interrumpir, y solo cuenta hechos y sentimientos.", ok: true },
            { t: "谈的时候不打断别人，每个人说轮流。", py: "Tán de shíhou bù dǎduàn biérén, měi ge rén shuō lúnliú.", es: "Durante la charla no se interrumpe y cada uno habla por turnos.", ok: false,
              fix: "轮流 (por turnos) funciona como adverbio y va antes del verbo: «每个人轮流说»." }
          ],
          clave: ["午休", "轮流", "打断"],
          tip: "Reglas claras de diálogo (轮流说, 不打断) hacen que la mediación sea segura para ambas partes." },
        { bot: "谢谢老师，我感觉好多了。", py: "Xièxie lǎoshī, wǒ gǎnjué hǎo duō le.", es: "Gracias, profe, ya me siento mucho mejor.",
          opciones: [
            { t: "不客气，你今天做得很好。", py: "Bú kèqi, nǐ jīntiān zuò de hěn hǎo.", es: "Con gusto; hoy lo hiciste muy bien.", ok: true },
            { t: "我也谢谢你愿意说出来。解决冲突需要勇气，你今天表现得很成熟。", py: "Wǒ yě xièxie nǐ yuànyì shuō chūlái. Jiějué chōngtū xūyào yǒngqì, nǐ jīntiān biǎoxiàn de hěn chéngshú.", es: "Yo también te agradezco que lo hayas contado. Resolver un conflicto requiere valentía, y hoy actuaste con mucha madurez.", ok: true },
            { t: "解决冲突需要勇气，你今天表现很成熟得。", py: "Jiějué chōngtū xūyào yǒngqì, nǐ jīntiān biǎoxiàn hěn chéngshú de.", es: "Resolver un conflicto requiere valentía; hoy actuaste con mucha madurez.", ok: false,
              fix: "得 va pegado al verbo, antes de la valoración: «表现得很成熟»." }
          ],
          clave: ["勇气", "冲突", "成熟"],
          tip: "Cierre reconociendo el esfuerzo del estudiante: refuerza la conducta que quiere volver a ver." }
      ],
      cierre: { bot: "明天见，老师！", py: "Míngtiān jiàn, lǎoshī!", es: "¡Hasta mañana, profe!" },
      vocab: [
        { t: "冲突", py: "chōngtū", es: "conflicto" },
        { t: "生气", py: "shēngqì", es: "enojarse" },
        { t: "公平", py: "gōngpíng", es: "justo, equitativo" },
        { t: "感受", py: "gǎnshòu", es: "sentimiento, lo que uno siente" },
        { t: "道歉", py: "dàoqiàn", es: "pedir disculpas" },
        { t: "轮流", py: "lúnliú", es: "turnarse, por turnos" },
        { t: "打断", py: "dǎduàn", es: "interrumpir" },
        { t: "勇气", py: "yǒngqì", es: "valentía" }
      ]
    },
    {
      id: "zh-28", titulo: "Jurado en la feria de ciencias", nivel: "B2",
      tema: "Jurado de feria de ciencias",
      contexto: "Eres jurado en la feria de ciencias de un colegio de Hangzhou. Un estudiante presenta un filtro de agua hecho con materiales reciclados.",
      rol: "周明 (Zhōu Míng), expositor de 16 años, entusiasta",
      turnos: [
        { bot: "老师好！我们的项目是用回收材料做的净水器。", py: "Lǎoshī hǎo! Wǒmen de xiàngmù shì yòng huíshōu cáiliào zuò de jìngshuǐqì.", es: "¡Buenos días, profe! Nuestro proyecto es un filtro de agua hecho con materiales reciclados.",
          opciones: [
            { t: "很有意思！你们为什么选这个题目？", py: "Hěn yǒu yìsi! Nǐmen wèi shénme xuǎn zhège tímù?", es: "¡Muy interesante! ¿Por qué escogieron este tema?", ok: true },
            { t: "你好！先说说你们想解决什么问题，好吗？", py: "Nǐ hǎo! Xiān shuōshuo nǐmen xiǎng jiějué shénme wèntí, hǎo ma?", es: "¡Hola! Primero cuéntame qué problema quieren resolver, ¿sí?", ok: true },
            { t: "很有意思！为什么你们选了这个题目吗？", py: "Hěn yǒu yìsi! Wèi shénme nǐmen xuǎn le zhège tímù ma?", es: "¡Muy interesante! ¿Por qué escogieron este tema?", ok: false,
              fix: "Una pregunta con palabra interrogativa (为什么) no lleva 吗: «你们为什么选这个题目？»." }
          ],
          clave: ["题目", "解决", "为什么"],
          tip: "Un buen jurado pregunta primero por el problema, no por el producto: así ve si el estudiante entiende el propósito." },
        { bot: "我们发现有些农村地区的水不干净，所以想做一个便宜的净水器。", py: "Wǒmen fāxiàn yǒuxiē nóngcūn dìqū de shuǐ bù gānjìng, suǒyǐ xiǎng zuò yí ge piányi de jìngshuǐqì.", es: "Vimos que en algunas zonas rurales el agua no es limpia y quisimos hacer un filtro barato.",
          opciones: [
            { t: "你们的净水器是怎么工作的？", py: "Nǐmen de jìngshuǐqì shì zěnme gōngzuò de?", es: "¿Cómo funciona su filtro?", ok: true },
            { t: "动机很明确。能解释一下每一层材料分别起什么作用吗？", py: "Dòngjī hěn míngquè. Néng jiěshì yíxià měi yì céng cáiliào fēnbié qǐ shénme zuòyòng ma?", es: "La motivación es clara. ¿Puedes explicar qué función cumple cada capa de material?", ok: true },
            { t: "能解释一下每一层材料起什么作用分别吗？", py: "Néng jiěshì yíxià měi yì céng cáiliào qǐ shénme zuòyòng fēnbié ma?", es: "¿Puedes explicar qué función cumple cada capa?", ok: false,
              fix: "分别 (respectivamente) es un adverbio y va antes del verbo: «分别起什么作用»." }
          ],
          clave: ["作用", "每一层", "怎么工作"],
          tip: "起作用 (qǐ zuòyòng) = cumplir una función. 分别 (fēnbié) = respectivamente, cada uno por su lado." },
        { bot: "最上面是小石子，中间是沙子，下面是活性炭，最下面是棉花。", py: "Zuì shàngmiàn shì xiǎo shízǐ, zhōngjiān shì shāzi, xiàmiàn shì huóxìngtàn, zuì xiàmiàn shì miánhua.", es: "Arriba van piedritas, en el medio arena, debajo carbón activado y al fondo algodón.",
          opciones: [
            { t: "你们测试过过滤后的水吗？", py: "Nǐmen cèshì guo guòlǜ hòu de shuǐ ma?", es: "¿Ya probaron el agua filtrada?", ok: true },
            { t: "很清楚。你们用什么方法证明过滤后的水更干净？有没有对照组？", py: "Hěn qīngchu. Nǐmen yòng shénme fāngfǎ zhèngmíng guòlǜ hòu de shuǐ gèng gānjìng? Yǒu méiyǒu duìzhàozǔ?", es: "Muy claro. ¿Con qué método demostraron que el agua filtrada queda más limpia? ¿Tuvieron grupo de control?", ok: true },
            { t: "过滤后的水比过滤前的水很干净吗？", py: "Guòlǜ hòu de shuǐ bǐ guòlǜ qián de shuǐ hěn gānjìng ma?", es: "¿El agua filtrada es más limpia que la de antes?", ok: false,
              fix: "En comparaciones con 比 no se usa 很: «比过滤前更干净» o «干净得多»." }
          ],
          clave: ["测试", "对照组", "干净"],
          tip: "对照组 (duìzhàozǔ) = grupo de control. Sin una comparación no se puede afirmar que algo «funciona»." },
        { bot: "我们用浊度计测了浑浊度，过滤以后降低了很多。", py: "Wǒmen yòng zhuódùjì cè le húnzhuódù, guòlǜ yǐhòu jiàngdī le hěn duō.", es: "Medimos la turbidez con un turbidímetro y bajó mucho después del filtrado.",
          opciones: [
            { t: "很好。不过浑浊度低不等于可以喝，对吗？", py: "Hěn hǎo. Búguò húnzhuódù dī bù děngyú kěyǐ hē, duì ma?", es: "Muy bien. Pero baja turbidez no significa que se pueda tomar, ¿cierto?", ok: true },
            { t: "数据很有说服力。但我想提醒一下：过滤只能去掉部分杂质，细菌和病毒可能还在，所以还不能直接饮用。", py: "Shùjù hěn yǒu shuōfúlì. Dàn wǒ xiǎng tíxǐng yíxià: guòlǜ zhǐ néng qù diào bùfen zázhì, xìjūn hé bìngdú kěnéng hái zài, suǒyǐ hái bù néng zhíjiē yǐnyòng.", es: "Los datos son convincentes. Pero quiero advertir algo: filtrar solo quita parte de las impurezas; bacterias y virus pueden seguir ahí, así que todavía no se puede beber directamente.", ok: true },
            { t: "数据很有说服力。但是过滤以后的水还不能喝直接。", py: "Shùjù hěn yǒu shuōfúlì. Dànshì guòlǜ yǐhòu de shuǐ hái bù néng hē zhíjiē.", es: "Los datos son convincentes. Pero el agua filtrada todavía no se puede beber directamente.", ok: false,
              fix: "直接 (directamente) va antes del verbo: «还不能直接喝»." }
          ],
          clave: ["不等于", "细菌", "直接"],
          tip: "不等于 (bù děngyú) = no equivale a. Útil para separar datos de conclusiones: 干净不等于安全." },
        { bot: "您说得对。那我们下一步应该怎么改进？", py: "Nín shuō de duì. Nà wǒmen xià yí bù yīnggāi zěnme gǎijìn?", es: "Tiene razón. Entonces, ¿cómo deberíamos mejorarlo?",
          opciones: [
            { t: "可以加一个消毒的步骤，比如把水烧开。", py: "Kěyǐ jiā yí ge xiāodú de bùzhòu, bǐrú bǎ shuǐ shāo kāi.", es: "Pueden agregar un paso de desinfección, por ejemplo hervir el agua.", ok: true },
            { t: "你们可以研究怎么加上消毒的步骤，比如煮沸或者阳光消毒，并且请实验室帮忙检测细菌。", py: "Nǐmen kěyǐ yánjiū zěnme jiā shang xiāodú de bùzhòu, bǐrú zhǔfèi huòzhě yángguāng xiāodú, bìngqiě qǐng shíyànshì bāngmáng jiǎncè xìjūn.", es: "Pueden investigar cómo agregar un paso de desinfección, como hervir o desinfectar con luz solar, y pedirle a un laboratorio que analice las bacterias.", ok: true },
            { t: "可以加一个消毒的步骤，比如烧开水把。", py: "Kěyǐ jiā yí ge xiāodú de bùzhòu, bǐrú shāo kāi shuǐ bǎ.", es: "Pueden agregar un paso de desinfección, como hervir el agua.", ok: false,
              fix: "把 va antes del objeto y el verbo al final: «把水烧开»." }
          ],
          clave: ["消毒", "煮沸", "检测"],
          tip: "把水烧开 (bǎ shuǐ shāo kāi) = hervir el agua. 开 indica que el agua llega a ebullición." },
        { bot: "谢谢老师！您觉得我们的项目最大的优点是什么？", py: "Xièxie lǎoshī! Nín juéde wǒmen de xiàngmù zuì dà de yōudiǎn shì shénme?", es: "¡Gracias, profe! ¿Cuál cree que es la mayor fortaleza de nuestro proyecto?",
          opciones: [
            { t: "你们关心真实的社会问题，这一点很好。", py: "Nǐmen guānxīn zhēnshí de shèhuì wèntí, zhè yì diǎn hěn hǎo.", es: "Que se preocupan por un problema social real; eso es muy valioso.", ok: true },
            { t: "最大的优点是你们从真实的问题出发，而且用数据说话。如果能补上安全检测，这个项目会更完整。", py: "Zuì dà de yōudiǎn shì nǐmen cóng zhēnshí de wèntí chūfā, érqiě yòng shùjù shuōhuà. Rúguǒ néng bǔ shang ānquán jiǎncè, zhège xiàngmù huì gèng wánzhěng.", es: "La mayor fortaleza es que parten de un problema real y se apoyan en datos. Si agregan el análisis de seguridad, el proyecto quedará más completo.", ok: true },
            { t: "你们关心关于真实的社会问题，这一点很好。", py: "Nǐmen guānxīn guānyú zhēnshí de shèhuì wèntí, zhè yì diǎn hěn hǎo.", es: "Se preocupan por un problema social real; eso es muy valioso.", ok: false,
              fix: "关心 lleva objeto directo, sin 关于: «关心真实的社会问题» (no se traduce el «por» del español)." }
          ],
          clave: ["优点", "数据", "完整"],
          tip: "从……出发 (cóng… chūfā) = partir de…: 从真实的问题出发 (partir de un problema real)." }
      ],
      cierre: { bot: "谢谢您的建议，我们会继续改进的！", py: "Xièxie nín de jiànyì, wǒmen huì jìxù gǎijìn de!", es: "¡Gracias por sus sugerencias, vamos a seguir mejorándolo!" },
      vocab: [
        { t: "评委", py: "píngwěi", es: "jurado" },
        { t: "净水器", py: "jìngshuǐqì", es: "filtro o purificador de agua" },
        { t: "回收材料", py: "huíshōu cáiliào", es: "materiales reciclados" },
        { t: "过滤", py: "guòlǜ", es: "filtrar" },
        { t: "活性炭", py: "huóxìngtàn", es: "carbón activado" },
        { t: "对照组", py: "duìzhàozǔ", es: "grupo de control" },
        { t: "消毒", py: "xiāodú", es: "desinfectar" },
        { t: "不等于", py: "bù děngyú", es: "no equivale a" }
      ]
    },
    {
      id: "zh-29", titulo: "Entrevista para el intercambio docente", nivel: "B2",
      tema: "Entrevista para intercambio docente",
      contexto: "Tienes una videoentrevista con el comité de un programa de intercambio docente de una universidad china. Debes presentarte y argumentar tu candidatura.",
      rol: "高教授 (Gāo jiàoshòu), coordinadora del programa, formal y cordial",
      turnos: [
        { bot: "请先简单介绍一下你自己和你的教学经历。", py: "Qǐng xiān jiǎndān jièshào yíxià nǐ zìjǐ hé nǐ de jiàoxué jīnglì.", es: "Por favor, preséntese brevemente y cuéntenos su experiencia docente.",
          opciones: [
            { t: "我是数学老师，在卡利的一所中学教了八年书。", py: "Wǒ shì shùxué lǎoshī, zài Kǎlì de yì suǒ zhōngxué jiāo le bā nián shū.", es: "Soy profesor de matemáticas; enseñé ocho años en un colegio de Cali.", ok: true },
            { t: "我在卡利一所公立学校教数学已经八年了，最近几年主要负责财商教育和学生项目。", py: "Wǒ zài Kǎlì yì suǒ gōnglì xuéxiào jiāo shùxué yǐjīng bā nián le, zuìjìn jǐ nián zhǔyào fùzé cáishāng jiàoyù hé xuésheng xiàngmù.", es: "Llevo ocho años enseñando matemáticas en un colegio público de Cali; en los últimos años me he encargado sobre todo de la educación financiera y de los proyectos estudiantiles.", ok: true },
            { t: "我是数学老师，我教书八年在卡利。", py: "Wǒ shì shùxué lǎoshī, wǒ jiāo shū bā nián zài Kǎlì.", es: "Soy profesor de matemáticas; enseñé ocho años en Cali.", ok: false,
              fix: "El lugar va antes del verbo y la duración se mete en el verbo separable: «在卡利教了八年书»." }
          ],
          clave: ["教了八年", "一所", "负责"],
          tip: "所 (suǒ) es el clasificador de escuelas: 一所中学. Con verbos separables la duración va en medio: 教了八年书." },
        { bot: "你为什么想参加这个交流项目？", py: "Nǐ wèi shénme xiǎng cānjiā zhège jiāoliú xiàngmù?", es: "¿Por qué quiere participar en este programa de intercambio?",
          opciones: [
            { t: "我想了解中国的数学教学方法。", py: "Wǒ xiǎng liǎojiě Zhōngguó de shùxué jiàoxué fāngfǎ.", es: "Quiero conocer los métodos de enseñanza de las matemáticas en China.", ok: true },
            { t: "一方面，我想学习中国在数学教学上的经验；另一方面，我也想把哥伦比亚的项目式学习介绍给中国的同事。", py: "Yì fāngmiàn, wǒ xiǎng xuéxí Zhōngguó zài shùxué jiàoxué shang de jīngyàn; lìng yì fāngmiàn, wǒ yě xiǎng bǎ Gēlúnbǐyà de xiàngmùshì xuéxí jièshào gěi Zhōngguó de tóngshì.", es: "Por un lado, quiero aprender de la experiencia china en la enseñanza de las matemáticas; por otro, quiero presentar a los colegas chinos el aprendizaje basado en proyectos que hacemos en Colombia.", ok: true },
            { t: "另一方面，我也想把哥伦比亚的项目式学习介绍中国同事。", py: "Lìng yì fāngmiàn, wǒ yě xiǎng bǎ Gēlúnbǐyà de xiàngmùshì xuéxí jièshào Zhōngguó tóngshì.", es: "Por otro lado, quiero presentar a los colegas chinos el aprendizaje basado en proyectos de Colombia.", ok: false,
              fix: "Con 把, el destinatario necesita 给 después del verbo: «把……介绍给中国同事»." }
          ],
          clave: ["一方面", "另一方面", "经验"],
          tip: "一方面……另一方面…… (por un lado… por otro…) estructura muy bien una respuesta de entrevista." },
        { bot: "你觉得中哥两国的课堂有什么不同？", py: "Nǐ juéde Zhōng-Gē liǎng guó de kètáng yǒu shénme bùtóng?", es: "¿Qué diferencias ve entre las aulas de China y Colombia?",
          opciones: [
            { t: "我觉得哥伦比亚的课堂更活泼一些。", py: "Wǒ juéde Gēlúnbǐyà de kètáng gèng huópō yìxiē.", es: "Creo que las aulas colombianas son un poco más animadas.", ok: true },
            { t: "根据我的了解，中国的课堂更重视基础练习，而哥伦比亚的课堂更重视讨论和合作。当然，这只是一般情况，每个学校都不一样。", py: "Gēnjù wǒ de liǎojiě, Zhōngguó de kètáng gèng zhòngshì jīchǔ liànxí, ér Gēlúnbǐyà de kètáng gèng zhòngshì tǎolùn hé hézuò. Dāngrán, zhè zhǐshì yìbān qíngkuàng, měi ge xuéxiào dōu bù yíyàng.", es: "Hasta donde sé, el aula china valora más la práctica de fundamentos y la colombiana, más la discusión y el trabajo cooperativo. Claro, es solo una tendencia general: cada colegio es distinto.", ok: true },
            { t: "我觉得哥伦比亚的课堂比中国的课堂很活泼。", py: "Wǒ juéde Gēlúnbǐyà de kètáng bǐ Zhōngguó de kètáng hěn huópō.", es: "Creo que las aulas colombianas son más animadas que las chinas.", ok: false,
              fix: "Con 比 no se usa 很. Diga «比中国的课堂更活泼» o «活泼一些»." }
          ],
          clave: ["重视", "讨论", "合作"],
          tip: "Al comparar culturas, matice: «这只是一般情况» (es solo una tendencia general) evita los estereotipos." },
        { bot: "如果学生听不懂你的中文，你会怎么办？", py: "Rúguǒ xuésheng tīng bu dǒng nǐ de Zhōngwén, nǐ huì zěnme bàn?", es: "Si los estudiantes no entienden su chino, ¿qué haría?",
          opciones: [
            { t: "我会用图片和手势帮助他们理解。", py: "Wǒ huì yòng túpiàn hé shǒushì bāngzhù tāmen lǐjiě.", es: "Usaría imágenes y gestos para ayudarles a entender.", ok: true },
            { t: "我会说得慢一点儿，多用图片、实物和手势，还会请学生用自己的话复述，确认他们真的理解了。", py: "Wǒ huì shuō de màn yìdiǎnr, duō yòng túpiàn, shíwù hé shǒushì, hái huì qǐng xuésheng yòng zìjǐ de huà fùshù, quèrèn tāmen zhēn de lǐjiě le.", es: "Hablaría más despacio, usaría más imágenes, objetos reales y gestos, y les pediría que lo repitieran con sus palabras para confirmar que de verdad entendieron.", ok: true },
            { t: "我会说慢一点儿得，多用图片。", py: "Wǒ huì shuō màn yìdiǎnr de, duō yòng túpiàn.", es: "Hablaría más despacio y usaría más imágenes.", ok: false,
              fix: "得 va pegado al verbo: «说得慢一点儿»." }
          ],
          clave: ["图片", "手势", "复述"],
          tip: "复述 (fùshù) = repetir con sus propias palabras: una forma rápida de comprobar la comprensión." },
        { bot: "交流期间可能会遇到文化冲击，你怎么看？", py: "Jiāoliú qījiān kěnéng huì yù dào wénhuà chōngjī, nǐ zěnme kàn?", es: "Durante el intercambio puede vivir un choque cultural. ¿Qué opina?",
          opciones: [
            { t: "我觉得这是学习的机会。", py: "Wǒ juéde zhè shì xuéxí de jīhuì.", es: "Creo que es una oportunidad de aprendizaje.", ok: true },
            { t: "文化冲击是不可避免的，但也是成长的机会。我会保持开放的态度，多观察、多提问，遇到误会就主动沟通。", py: "Wénhuà chōngjī shì bù kě bìmiǎn de, dàn yě shì chéngzhǎng de jīhuì. Wǒ huì bǎochí kāifàng de tàidu, duō guānchá, duō tíwèn, yù dào wùhuì jiù zhǔdòng gōutōng.", es: "El choque cultural es inevitable, pero también es una oportunidad de crecer. Mantendré una actitud abierta, observaré y preguntaré mucho, y ante un malentendido buscaré hablarlo.", ok: true },
            { t: "我会保持开放的态度，观察多，提问多。", py: "Wǒ huì bǎochí kāifàng de tàidu, guānchá duō, tíwèn duō.", es: "Mantendré una actitud abierta, observaré y preguntaré mucho.", ok: false,
              fix: "Para «hacer algo más» 多 va antes del verbo: «多观察，多提问»." }
          ],
          clave: ["文化冲击", "机会", "沟通"],
          tip: "多 + verbo (多观察, 多练习) = hacer algo más a menudo. 多 va antes del verbo, no después." },
        { bot: "最后，你有什么问题想问我们吗？", py: "Zuìhòu, nǐ yǒu shénme wèntí xiǎng wèn wǒmen ma?", es: "Por último, ¿tiene alguna pregunta para nosotros?",
          opciones: [
            { t: "请问，交流老师每周需要上几节课？", py: "Qǐngwèn, jiāoliú lǎoshī měi zhōu xūyào shàng jǐ jié kè?", es: "¿Cuántas clases a la semana dicta un docente de intercambio?", ok: true },
            { t: "有两个问题：第一，交流老师每周大概上几节课？第二，项目结束以后，我们两个学校还有可能继续合作吗？", py: "Yǒu liǎng ge wèntí: dì yī, jiāoliú lǎoshī měi zhōu dàgài shàng jǐ jié kè? Dì èr, xiàngmù jiéshù yǐhòu, wǒmen liǎng ge xuéxiào hái yǒu kěnéng jìxù hézuò ma?", es: "Tengo dos preguntas: primero, ¿cuántas clases semanales dicta más o menos un docente de intercambio? Segundo, al terminar el programa, ¿podrían nuestros dos colegios seguir colaborando?", ok: true },
            { t: "请问，交流老师每周需要上几个课？", py: "Qǐngwèn, jiāoliú lǎoshī měi zhōu xūyào shàng jǐ ge kè?", es: "¿Cuántas clases a la semana dicta un docente de intercambio?", ok: false,
              fix: "El clasificador de las clases es 节: «几节课»." }
          ],
          clave: ["节课", "合作", "问题"],
          tip: "Preguntar al final demuestra interés. 节 (jié) es el clasificador de clases: 两节课 (dos clases)." }
      ],
      cierre: { bot: "好的，谢谢你。我们会在两周内通知你结果。", py: "Hǎo de, xièxie nǐ. Wǒmen huì zài liǎng zhōu nèi tōngzhī nǐ jiéguǒ.", es: "Muy bien, gracias. Le comunicaremos el resultado en un plazo de dos semanas." },
      vocab: [
        { t: "交流项目", py: "jiāoliú xiàngmù", es: "programa de intercambio" },
        { t: "教学经历", py: "jiàoxué jīnglì", es: "experiencia docente (trayectoria)" },
        { t: "经验", py: "jīngyàn", es: "experiencia (saber acumulado)" },
        { t: "重视", py: "zhòngshì", es: "valorar, dar importancia" },
        { t: "手势", py: "shǒushì", es: "gesto" },
        { t: "复述", py: "fùshù", es: "repetir con sus palabras" },
        { t: "文化冲击", py: "wénhuà chōngjī", es: "choque cultural" },
        { t: "沟通", py: "gōutōng", es: "comunicarse" }
      ]
    },
    {
      id: "zh-30", titulo: "Preguntas después de mi ponencia", nivel: "B2",
      tema: "Preguntas tras una ponencia propia",
      contexto: "Acabas de presentar en un congreso de educación en Pekín tu ponencia sobre el error como oportunidad de aprendizaje en matemáticas. La moderadora abre la ronda de preguntas.",
      rol: "许博士 (Xǔ bóshì), moderadora e investigadora en educación, crítica pero respetuosa",
      turnos: [
        { bot: "谢谢你的报告。我想问：你说的“从错误中学习”具体是怎么做的？", py: "Xièxie nǐ de bàogào. Wǒ xiǎng wèn: nǐ shuō de “cóng cuòwù zhōng xuéxí” jùtǐ shì zěnme zuò de?", es: "Gracias por su ponencia. Quisiera preguntar: ¿cómo se aplica en concreto eso de «aprender del error»?",
          opciones: [
            { t: "学生分析一道做错的题，找出错误的原因。", py: "Xuésheng fēnxī yí dào zuò cuò de tí, zhǎo chū cuòwù de yuányīn.", es: "Los estudiantes analizan un ejercicio mal resuelto y buscan la causa del error.", ok: true },
            { t: "谢谢您的问题。每节课我们会拿出一道典型的错题，让学生先找错，再解释为什么错，最后自己改正。", py: "Xièxie nín de wèntí. Měi jié kè wǒmen huì ná chū yí dào diǎnxíng de cuòtí, ràng xuésheng xiān zhǎo cuò, zài jiěshì wèi shénme cuò, zuìhòu zìjǐ gǎizhèng.", es: "Gracias por su pregunta. En cada clase mostramos un ejercicio típico mal resuelto: los estudiantes primero encuentran el error, luego explican por qué está mal y al final lo corrigen ellos mismos.", ok: true },
            { t: "谢谢您的问题。我们让学生找错先，再解释为什么错。", py: "Xièxie nín de wèntí. Wǒmen ràng xuésheng zhǎo cuò xiān, zài jiěshì wèi shénme cuò.", es: "Gracias por su pregunta. Hacemos que los estudiantes primero encuentren el error y luego expliquen por qué.", ok: false,
              fix: "先 (primero) va antes del verbo: «先找错，再解释»." }
          ],
          clave: ["错题", "找错", "改正"],
          tip: "Empiece agradeciendo la pregunta (谢谢您的问题): gana tiempo para pensar y muestra apertura." },
        { bot: "那学生不会觉得丢脸吗？", py: "Nà xuésheng bú huì juéde diūliǎn ma?", es: "¿Y los estudiantes no sienten vergüenza?",
          opciones: [
            { t: "我们用匿名的错题，所以没有人丢脸。", py: "Wǒmen yòng nìmíng de cuòtí, suǒyǐ méiyǒu rén diūliǎn.", es: "Usamos ejercicios anónimos, así que nadie queda expuesto.", ok: true },
            { t: "这是个很重要的问题。我们用的错题都是匿名的，而且老师也会分享自己的错误，让学生明白犯错是学习的一部分。", py: "Zhè shì ge hěn zhòngyào de wèntí. Wǒmen yòng de cuòtí dōu shì nìmíng de, érqiě lǎoshī yě huì fēnxiǎng zìjǐ de cuòwù, ràng xuésheng míngbai fàn cuò shì xuéxí de yí bùfen.", es: "Es una pregunta muy importante. Todos los ejercicios son anónimos y, además, el docente también comparte sus propios errores, para que los estudiantes entiendan que equivocarse es parte de aprender.", ok: true },
            { t: "我们用的错题是都匿名的。", py: "Wǒmen yòng de cuòtí shì dōu nìmíng de.", es: "Todos los ejercicios que usamos son anónimos.", ok: false,
              fix: "都 va después del sujeto y antes del verbo: «都是匿名的»." }
          ],
          clave: ["匿名", "丢脸", "一部分"],
          tip: "都 (dōu, todos) va siempre antes del verbo, nunca antes del sujeto: 错题都是匿名的." },
        { bot: "你有数据证明这个方法有效吗？", py: "Nǐ yǒu shùjù zhèngmíng zhège fāngfǎ yǒuxiào ma?", es: "¿Tiene datos que demuestren que el método funciona?",
          opciones: [
            { t: "我们的数据还是初步的，需要更多研究。", py: "Wǒmen de shùjù hái shì chūbù de, xūyào gèng duō yánjiū.", es: "Nuestros datos todavía son preliminares; hace falta más investigación.", ok: true },
            { t: "坦白地说，我们的数据还是初步的，样本也比较小，所以还不能下结论。不过，这个做法和“生产性失败”等研究的方向是一致的。", py: "Tǎnbái de shuō, wǒmen de shùjù hái shì chūbù de, yàngběn yě bǐjiào xiǎo, suǒyǐ hái bù néng xià jiélùn. Búguò, zhège zuòfǎ hé “shēngchǎnxìng shībài” děng yánjiū de fāngxiàng shì yízhì de.", es: "Con franqueza: nuestros datos aún son preliminares y la muestra es pequeña, así que todavía no podemos concluir. Sin embargo, el enfoque coincide con líneas de investigación como el «fracaso productivo».", ok: true },
            { t: "坦白地说，我们还没有足够的数据，所以不能还下结论。", py: "Tǎnbái de shuō, wǒmen hái méiyǒu zúgòu de shùjù, suǒyǐ bù néng hái xià jiélùn.", es: "Con franqueza, aún no tenemos datos suficientes, así que todavía no podemos concluir.", ok: false,
              fix: "还 (todavía) va antes de la negación: «还不能下结论»." }
          ],
          clave: ["初步", "样本", "结论"],
          tip: "Reconocer los límites de su evidencia (数据还是初步的) aumenta su credibilidad ante un público académico." },
        { bot: "这个方法适合所有年级吗？", py: "Zhège fāngfǎ shìhé suǒyǒu niánjí ma?", es: "¿Sirve este método para todos los grados?",
          opciones: [
            { t: "我觉得需要根据年龄调整。", py: "Wǒ juéde xūyào gēnjù niánlíng tiáozhěng.", es: "Creo que hay que ajustarlo según la edad.", ok: true },
            { t: "原则上可以，但要根据年龄调整。对小学生，我们用更简单的错题和更多的鼓励；对高中生，可以让他们自己设计“陷阱题”。", py: "Yuánzé shang kěyǐ, dàn yào gēnjù niánlíng tiáozhěng. Duì xiǎoxuéshēng, wǒmen yòng gèng jiǎndān de cuòtí hé gèng duō de gǔlì; duì gāozhōngshēng, kěyǐ ràng tāmen zìjǐ shèjì “xiànjǐng tí”.", es: "En principio sí, pero hay que ajustarlo según la edad. Con los de primaria usamos errores más sencillos y más estímulo; con los de bachillerato, se les puede pedir que diseñen sus propias «preguntas trampa».", ok: true },
            { t: "原则上可以，但是要调整根据年龄。", py: "Yuánzé shang kěyǐ, dànshì yào tiáozhěng gēnjù niánlíng.", es: "En principio sí, pero hay que ajustarlo según la edad.", ok: false,
              fix: "根据 + criterio va antes del verbo: «根据年龄调整»." }
          ],
          clave: ["根据", "调整", "年龄"],
          tip: "原则上 (yuánzé shang) = en principio. Matiza una respuesta afirmativa sin sonar absoluta." },
        { bot: "老师们需要什么样的培训？", py: "Lǎoshīmen xūyào shénme yàng de péixùn?", es: "¿Qué tipo de formación necesitan los docentes?",
          opciones: [
            { t: "他们需要学习怎么回应学生的错误。", py: "Tāmen xūyào xuéxí zěnme huíyìng xuésheng de cuòwù.", es: "Necesitan aprender a responder a los errores de los estudiantes.", ok: true },
            { t: "最关键的是改变老师对错误的态度。我们的培训包括观课、分析真实的错题，以及练习怎样给出不带评判的反馈。", py: "Zuì guānjiàn de shì gǎibiàn lǎoshī duì cuòwù de tàidu. Wǒmen de péixùn bāokuò guān kè, fēnxī zhēnshí de cuòtí, yǐjí liànxí zěnyàng gěi chū bú dài píngpàn de fǎnkuì.", es: "Lo clave es cambiar la actitud del docente hacia el error. Nuestra formación incluye observar clases, analizar errores reales y practicar cómo dar retroalimentación sin juzgar.", ok: true },
            { t: "最关键的是改变老师的态度对错误。", py: "Zuì guānjiàn de shì gǎibiàn lǎoshī de tàidu duì cuòwù.", es: "Lo clave es cambiar la actitud del docente hacia el error.", ok: false,
              fix: "«La actitud hacia el error»: el complemento con 对 va antes del sustantivo: «对错误的态度»." }
          ],
          clave: ["态度", "培训", "反馈"],
          tip: "对……的态度 = la actitud hacia…: el complemento con 对 va antes del sustantivo, unido con 的." },
        { bot: "你们遇到过什么困难吗？", py: "Nǐmen yù dào guo shénme kùnnan ma?", es: "¿Han tenido dificultades?",
          opciones: [
            { t: "有，一开始有些家长不太理解。", py: "Yǒu, yì kāishǐ yǒuxiē jiāzhǎng bú tài lǐjiě.", es: "Sí, al principio algunas familias no lo entendían muy bien.", ok: true },
            { t: "当然。一开始有些家长担心孩子会养成犯错的习惯，后来我们开了家长会，解释了这个方法的目的，他们才慢慢接受了。", py: "Dāngrán. Yì kāishǐ yǒuxiē jiāzhǎng dānxīn háizi huì yǎngchéng fàn cuò de xíguàn, hòulái wǒmen kāi le jiāzhǎnghuì, jiěshì le zhège fāngfǎ de mùdì, tāmen cái mànmàn jiēshòu le.", es: "Claro. Al principio algunas familias temían que sus hijos se acostumbraran a equivocarse; después hicimos una reunión de padres, explicamos el propósito del método y solo entonces, poco a poco, lo aceptaron.", ok: true },
            { t: "有，一开始有些家长不理解太。", py: "Yǒu, yì kāishǐ yǒuxiē jiāzhǎng bù lǐjiě tài.", es: "Sí, al principio algunas familias no lo entendían muy bien.", ok: false,
              fix: "太 va antes del verbo: «不太理解» (no entender muy bien)." }
          ],
          clave: ["家长", "接受", "一开始"],
          tip: "才 (cái) indica que algo ocurrió tarde o con esfuerzo: 他们才慢慢接受了 (solo entonces lo aceptaron)." },
        { bot: "非常感谢你坦诚的回答。时间到了，我们下次再交流。", py: "Fēicháng gǎnxiè nǐ tǎnchéng de huídá. Shíjiān dào le, wǒmen xià cì zài jiāoliú.", es: "Muchas gracias por sus respuestas tan francas. Se acabó el tiempo; seguiremos conversando en otra ocasión.",
          opciones: [
            { t: "谢谢您！也欢迎大家会后来找我交流。", py: "Xièxie nín! Yě huānyíng dàjiā huì hòu lái zhǎo wǒ jiāoliú.", es: "¡Gracias a usted! Y todos son bienvenidos a buscarme después de la sesión para conversar.", ok: true },
            { t: "谢谢您的好问题，它们让我看到了研究中需要改进的地方。会后欢迎大家继续交流，我也很想听听你们的经验。", py: "Xièxie nín de hǎo wèntí, tāmen ràng wǒ kàn dào le yánjiū zhōng xūyào gǎijìn de dìfang. Huì hòu huānyíng dàjiā jìxù jiāoliú, wǒ yě hěn xiǎng tīngting nǐmen de jīngyàn.", es: "Gracias por sus buenas preguntas: me mostraron aspectos de la investigación que debo mejorar. Después de la sesión seguimos conversando; también quiero escuchar sus experiencias.", ok: true },
            { t: "谢谢您的好问题。欢迎大家交流继续会后。", py: "Xièxie nín de hǎo wèntí. Huānyíng dàjiā jiāoliú jìxù huì hòu.", es: "Gracias por sus buenas preguntas. Todos son bienvenidos a seguir conversando después de la sesión.", ok: false,
              fix: "El tiempo va primero y 继续 antes del verbo: «会后欢迎大家继续交流»." }
          ],
          clave: ["交流", "改进", "会后"],
          tip: "Cierre con gratitud y apertura: «会后欢迎交流» invita a seguir la conversación sin alargar la sesión." }
      ],
      cierre: { bot: "谢谢！让我们再次感谢今天的报告人！", py: "Xièxie! Ràng wǒmen zàicì gǎnxiè jīntiān de bàogàorén!", es: "¡Gracias! ¡Agradezcamos una vez más a nuestro ponente de hoy!" },
      vocab: [
        { t: "报告", py: "bàogào", es: "ponencia, presentación" },
        { t: "错题", py: "cuòtí", es: "ejercicio mal resuelto" },
        { t: "改正", py: "gǎizhèng", es: "corregir" },
        { t: "匿名", py: "nìmíng", es: "anónimo" },
        { t: "丢脸", py: "diūliǎn", es: "pasar vergüenza" },
        { t: "初步", py: "chūbù", es: "preliminar" },
        { t: "样本", py: "yàngběn", es: "muestra (estadística)" },
        { t: "反馈", py: "fǎnkuì", es: "retroalimentación" }
      ]
    }
  ]
};
