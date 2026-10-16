# Esquema del paquete de conocimiento SABI Dots

Cada curso tiene un archivo `kb/<nombre_del_html_sin_extension>.js` que asigna `window.SABI_KB`.
Ejemplo: `sabi_curso23_orientacion_vocacional.html` → `kb/sabi_curso23_orientacion_vocacional.js`

Público: docentes de Colegio CENTEC (Cali, Colombia), K–11. Todo en español de Colombia
(salvo términos del idioma objetivo en cursos de idiomas). Tono claro, profesional, cálido.

```js
window.SABI_KB = {
  curso: "C23",                       // código
  titulo: "Orientación vocacional y proyecto de vida",
  dot: "Dot_CienciasSociales_Ciudadanas", // uno de: Dot_Matematicas_Estrategica, Dot_LecturaCritica_Lenguaje,
                                      // Dot_CienciasNaturales_STEAM, Dot_CienciasSociales_Ciudadanas, Dot_Bilinguismo_Ingles,
                                      // Dot_InteligenciaEmocional_Valores, Dot_Tecnico_SENA, Dot_EducacionDigital_IA
  objetivos: ["Al finalizar, el docente podrá ... (verbo de Bloom observable)", ...],   // 4
  intuitiva: "Explicación sencilla del tema en 90-140 palabras, con una analogía cotidiana.",
  glosario: [ { w: "AUTOCONOCIMIENTO", t: "Autoconocimiento", d: "Definición precisa de 15-35 palabras." }, ... ],
      // 12-14 términos. w = UNA sola palabra, MAYÚSCULAS, solo A-Z y Ñ (sin tildes, sin espacios ni guiones),
      // 4 a 13 letras, todas distintas entre sí. t = término como se escribe normalmente.
  flashcards: [ { q: "Pregunta", a: "Respuesta breve y exacta" }, ... ],            // 10
  timeline: { titulo: "Hitos de ...", items: [ { y: "1994", e: "Hecho verificable" }, ... ] }, // 6-8, orden cronológico
  w5h1: { quien: "...", que: "...", cuando: "...", donde: "...", porque: "...", como: "..." }, // aplicado al aula CENTEC
  flujo: { titulo: "Procedimiento para ...", pasos: ["Paso 1 ...", ...] },          // 5-7 pasos de máx. 70 caracteres
  mapa: { centro: "Tema (máx 28 car.)", ramas: [ { n: "Rama (máx 24 car.)", h: ["hijo (máx 30 car.)", ...] }, ... ] }, // 5 ramas x 2-3 hijos
  errores: [ { caso: "Situación de aula donde un docente hace X", error: "Qué está mal y por qué", correccion: "Cómo hacerlo bien" }, ... ], // 4
  recuperacion: [ { p: "Pregunta abierta para responder sin mirar", modelo: "Respuesta modelo de 40-80 palabras" }, ... ], // 4
  caso: { titulo: "Caso CENTEC", contexto: "Caso realista de 80-130 palabras en un colegio de Cali (nombres ficticios)", preguntas: ["...", "...", "..."] },
  dominar: { memorizar: ["..."], comprender: ["..."], ejecutar: ["..."], decidir: ["..."] }, // 2-3 cada uno
  bloom: [ { n: "N1 Recordar", i: "Indicador observable" }, { n: "N2 Comprender", i: "..." }, { n: "N3 Aplicar", i: "..." },
           { n: "N4 Analizar", i: "..." }, { n: "N5 Evaluar", i: "..." }, { n: "N6 Crear", i: "..." } ],
  fuentes: [ "Ley 115 de 1994 — Ley General de Educación (Colombia)", ... ],  // 4-7, SOLO fuentes reales y verificables
  cards: { "Título exacto de la tarjeta": "Contenido de 130-200 palabras" }   // SOLO si el curso tiene tarjetas de relleno
};
```

## Reglas de rigor (Dot Auditor)
- Nada inventado: ni cifras, ni leyes, ni autores, ni fechas, ni URL. Si no estás seguro de un dato, no lo uses.
- Normativa colombiana citada con número y año correctos (ej. Decreto 1290 de 2009, Ley 1620 de 2013,
  Decreto 1421 de 2017, Ley 1732 de 2014, Ley 2025 de 2020, Decreto 1075 de 2015, Ley 1581 de 2012).
- Autores y obras reales (ej. Bloom 1956 / Anderson y Krathwohl 2001, Black y Wiliam 1998, Goleman 1995, Maslach).
- Fuentes: título y autor/entidad, sin URL.
- Cadena JS válida: escapa comillas internas o usa comillas tipográficas; sin saltos de línea dentro de cadenas.
