// SABI CENTEC Maestros · SABI Pensamiento · Curso 15 · Finanzas personales para maestros
// Estado: en revisión (lo aprueba el equipo docente responsable). Esquema: kb/pensar/_ESQUEMA_PENSAR.md
// Cálculos verificados con Python (2026-10-27). Las tasas son ilustrativas y vienen de los ejemplos del curso;
// no se fijan cifras de interés bancario corriente ni de usura (las certifica la Superintendencia Financiera).
Object.assign(window.SABI_KB = window.SABI_KB || {}, { pensar: {
  escalera: [
    { n: "N4", verbo: "Analizar",
      tarea: "La profe Carolina (ficticia) recibe $2.944.000 netos. En un mes registra: necesidades $2.080.000, deseos $560.000, cuota de tarjeta $304.000 y ahorro $0. Su tarjeta cobra 2,4 % mensual. Analiza su presupuesto frente a la guía 50-30-20: calcula el peso de cada rubro, identifica qué lo desequilibra y explica por qué la tarjeta es un problema mayor de lo que parece.",
      criterios: [
        "Calcula correctamente los porcentajes de cada rubro sobre el ingreso neto",
        "Compara cada rubro con la guía 50-30-20 y reconoce que esta es una guía práctica, no una ley",
        "Convierte la tasa de la tarjeta a efectivo anual con (1 + i)^12 − 1",
        "Distingue lo que Carolina puede ajustar pronto (deseos) de lo que es más rígido (arriendo)"
      ],
      modelo: "Sobre $2.944.000: necesidades 2.080.000 ÷ 2.944.000 = 70,7 %; deseos 19,0 %; tarjeta 10,3 %; ahorro 0 %. Frente a la guía, la meta del 20 % para ahorro y deudas sería $588.800, y hoy solo la tarjeta ocupa el 10,3 % y no hay ahorro. El desequilibrio viene de las necesidades, por encima del 50 %, sobre todo por el arriendo; el curso aclara que en ciudades con arriendos altos se ajusta la guía (por ejemplo, 60-25-15) y se mejora poco a poco. La tarjeta pesa más de lo que parece: 2,4 % mensual equivale a (1,024)^12 − 1 ≈ 32,9 % efectivo anual, más de lo que rinde cualquier ahorro común. Lo flexible a corto plazo son los deseos ($560.000); lo rígido es el arriendo. Una salida coherente con el curso es mover parte de los deseos a un colchón pequeño y a abonos extra a la tarjeta." },
    { n: "N5", verbo: "Evaluar",
      tarea: "La profe Marcela (ficticia) necesita $5.000.000 y recibe tres ofertas sin otros cobros: A) banco al 1,8 % mensual a 24 meses; B) cooperativa de docentes al 1,2 % mensual a 24 meses; C) el mismo banco al 1,8 % mensual a 36 meses, «porque la cuota es más baja». Con la fórmula de cuota fija del curso, evalúa las tres ofertas y recomienda una con criterios explícitos.",
      criterios: [
        "Calcula cuota, total pagado e intereses de cada oferta con C = P × i / (1 − (1 + i)^−n)",
        "Compara por el total pagado y la tasa, no solo por la cuota",
        "Recomienda una oferta y explica el riesgo de elegir por la cuota más baja",
        "Menciona qué más debe pedir antes de firmar (plan de pagos completo, seguros y otros cobros)"
      ],
      modelo: "A: cuota $258.404; total $6.201.700; intereses $1.201.700. B: cuota $241.010; total $5.784.248; intereses $784.248. C: cuota $189.919; total $6.837.090; intereses $1.837.090. C tiene la cuota más baja, pero es la más cara: con la misma tasa, más meses significan más intereses, el error que el curso señala de elegir por la cuota. B es la mejor: menor tasa (1,2 % mensual ≈ 15,4 % E.A. frente a 1,8 % ≈ 23,87 % E.A.) y menor total; frente a A ahorra $417.452 en el plazo. Recomiendo B si la cuota cabe en el presupuesto. Antes de firmar, Marcela debe pedir el plan de pagos completo y preguntar por seguros, cuota de manejo y otros cobros, porque el costo total no es solo la tasa; si fuera por libranza, recordar que reduce el ingreso disponible todo el plazo." },
    { n: "N6", verbo: "Crear",
      tarea: "Crea una clase de 45 minutos para 7.° sobre interés simple y compuesto, a partir del caso de la profe Natalia (ahorrar para la salida pedagógica). Incluye: una pregunta de predicción inicial, una tabla año a año que los grupos completen en hoja de cálculo, una pregunta bisagra con un distractor que revele el error de pensar el crecimiento como lineal y un cierre con decisión argumentada.",
      criterios: [
        "La tabla usa datos correctos y verificables (por ejemplo, $1.000.000 al 10 % anual durante 3 años)",
        "La pregunta bisagra tiene un distractor basado en el error de crecimiento lineal",
        "Los estudiantes toman una decisión y la justifican con los números de su tabla",
        "Aclara que las tasas son ilustrativas y no una promesa de rentabilidad"
      ],
      modelo: "Inicio (5 min): «Si guardamos $1.000.000 al 10 % anual tres años, ¿tendremos $1.300.000 o más? Escribe tu predicción». Desarrollo (20 min): en hoja de cálculo, cada grupo llena dos columnas. Simple: 1.100.000; 1.200.000; 1.300.000. Compuesto (=saldo anterior × 1,1): 1.100.000; 1.210.000; 1.331.000. Pregunta bisagra: «¿Por qué el compuesto da $31.000 más?» A) Porque la tasa sube cada año. B) Porque los intereses de cada año también ganan intereses. C) Porque el banco regala un bono. D) Porque 10 % por 3 da 33 %. La clave es B; quien marque D muestra el sesgo de crecimiento lineal descrito por Stango y Zinman (2009). Cierre (15 min): cada grupo decide qué opción le conviene al curso y la defiende con su tabla. Aclaración: la tasa del 10 % es ilustrativa, no una promesa. Salida (5 min): «Explica a tu familia con un ejemplo la diferencia entre simple y compuesto»." }
  ],
  lectura: {
    titulo: "El crecimiento que no vemos venir",
    base: "Stango, V. y Zinman, J. (2009). Exponential growth bias and household finance. Journal of Finance, 64(6), 2807-2849 · DOI: 10.1111/j.1540-6261.2009.01518.x. Texto original elaborado por SABI CENTEC a partir de los módulos 2 y 3 del curso (tasa efectiva anual e interés compuesto); cálculos verificados.",
    parrafos: [
      "Cuando pensamos en el dinero que crece, solemos imaginar una línea recta: cada mes se suma lo mismo. Sin embargo, el interés compuesto no funciona así. En él, los intereses de cada periodo se suman al saldo y, en el periodo siguiente, también generan intereses. Por eso el crecimiento se acelera con el tiempo.",
      "Stango y Zinman (2009) describieron este error como sesgo de crecimiento exponencial. Muchas personas piensan el crecimiento como si fuera lineal y, en consecuencia, subestiman la tasa que implica un crédito y lo que puede crecer un ahorro. En su estudio, los hogares con más sesgo se endeudaban más y ahorraban menos.",
      "El sesgo aparece en dos lugares. En los créditos, multiplicar la tasa mensual por 12 parece razonable, pero engaña: un 2 % mensual no equivale a 24 % al año, sino a cerca de 26,8 % efectivo anual, porque (1,02)^12 − 1 = 26,82 %. En el ahorro ocurre lo contrario: quien aporta $100.000 al mes durante 10 años a 0,5 % mensual no tendrá $12.000.000, sino cerca de $16.387.935.",
      "La buena noticia es que el antídoto es sencillo. Primero, convertir siempre las tasas a la misma unidad, el efectivo anual, antes de comparar. Luego, mirar el total pagado y no solo la cuota. Por último, hacer los cálculos en una hoja de cálculo en lugar de confiar en la intuición. Las tasas de estos ejemplos son ilustrativas: no son una promesa ni una cifra vigente."
    ],
    literal: [
      { q: "Según el texto, ¿qué ocurre con los intereses en el interés compuesto?", oracion: "En él, los intereses de cada periodo se suman al saldo y, en el periodo siguiente, también generan intereses." },
      { q: "¿Qué encontraron Stango y Zinman sobre los hogares con más sesgo?", oracion: "En su estudio, los hogares con más sesgo se endeudaban más y ahorraban menos." },
      { q: "¿Cuál es el primer paso del antídoto que propone el texto?", oracion: "Primero, convertir siempre las tasas a la misma unidad, el efectivo anual, antes de comparar." },
      { q: "¿Qué aclara el texto sobre las tasas usadas en los ejemplos?", oracion: "Las tasas de estos ejemplos son ilustrativas: no son una promesa ni una cifra vigente." }
    ],
    inferencia: {
      q: "¿Qué se puede concluir del texto sobre un docente que compara un crédito al 2 % mensual con otro al 24 % efectivo anual multiplicando por 12?",
      o: [
        "Que concluirá, con error, que los dos créditos cuestan lo mismo, aunque el de 2 % mensual es más caro.",
        "Que hará bien la comparación, porque multiplicar por 12 es la conversión oficial de tasas.",
        "Que pensará que el de 24 % efectivo anual es el más caro, y acertará.",
        "Que no podrá comparar, porque las tasas mensuales y anuales nunca se pueden convertir."
      ],
      c: 0,
      fb: "El párrafo 3 muestra que 2 % mensual equivale a cerca de 26,8 % efectivo anual, no a 24 %. Quien multiplica por 12 vería «24 % = 24 %» y creería que son iguales, cuando el de 2 % mensual cuesta más. El párrafo 4 indica que sí se pueden convertir."
    },
    contexto: {
      palabra: "antídoto",
      q: "En el párrafo 4, «antídoto» significa…",
      o: [
        "Un medicamento que se toma contra una intoxicación.",
        "Una deuda que se paga antes de tiempo para ahorrar intereses.",
        "Una tasa más baja que ofrece el banco al cliente que compara.",
        "Una práctica que contrarresta el efecto del sesgo descrito antes."
      ],
      c: 3,
      fb: "El texto dice que «el antídoto es sencillo» y enumera prácticas (convertir tasas, mirar el total, usar hoja de cálculo) que corrigen el sesgo. Se usa en sentido figurado: no es un medicamento, sino un remedio contra un error de pensamiento."
    },
    donde: {
      afirmacion: "Pensar el ahorro como una suma lineal lleva a subestimar cuánto puede crecer.",
      parrafo: 2,
      fb: "El párrafo 3 muestra el caso del ahorro: $100.000 al mes durante 10 años a 0,5 % mensual dan cerca de $16.387.935, no los $12.000.000 de la suma lineal."
    },
    orden: {
      q: "Ordena los pasos del antídoto tal como los presenta el texto.",
      pasos: [
        "Convertir las tasas a efectivo anual.",
        "Comparar ofertas en la misma unidad.",
        "Mirar el total pagado y no solo la cuota.",
        "Hacer los cálculos en una hoja de cálculo."
      ],
      fb: "El párrafo 4 ordena con «Primero» (convertir a efectivo anual antes de comparar), «Luego» (el total pagado) y «Por último» (hoja de cálculo): primero se unifica la unidad y después se compara."
    },
    argumenta: {
      q: "¿Debería enseñarse la tasa efectiva anual a todos los estudiantes de 10.° y 11.° de CENTEC? Defiende tu posición.",
      criterios: [
        "Plantea una tesis clara",
        "Da al menos dos razones",
        "Cita una evidencia del texto",
        "Considera una objeción o un límite (por ejemplo, que el conocimiento solo no basta si no se liga a decisiones reales)"
      ]
    }
  }
}});
