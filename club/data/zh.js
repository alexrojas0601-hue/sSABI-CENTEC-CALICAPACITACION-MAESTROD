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
    }
  ]
};
