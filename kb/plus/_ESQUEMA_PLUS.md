# Esquema `kb/plus/<curso>.js` · Experiencia SABI v2

Complementa `kb/<curso>.js` (no lo reemplaza). El motor `sabi_dots.js` carga primero `kb/<curso>.js`
y después `kb/plus/<curso>.js`. Todo contenido nace «en revisión» hasta que lo apruebe el equipo responsable.

```js
Object.assign(window.SABI_KB = window.SABI_KB || {}, {
  // 1. AUDIO-LECCIÓN narrada con la voz de SABI (síntesis de voz del navegador, español de Colombia)
  audio: {
    titulo: "Título breve de la audio-lección",
    guion: ["párrafo 1", "párrafo 2", ...]   // 6 párrafos, 420-560 palabras en total
    // Estilo oral y cálido, en segunda persona («tú»). Orden: gancho → idea central → ejemplo en un aula de
    // CENTEC (nombres ficticios) → error frecuente → qué hacer mañana en clase → pregunta para pensar.
    // Apto para voz sintética: sin emojis, sin viñetas, sin paréntesis largos, siglas explicadas la primera vez,
    // cifras solo si son verificables.
  },
  // 2. RETO DIAGNÓSTICO (se responde antes y después del curso para ver el crecimiento)
  quiz: [ { q: "Situación de aula realista + pregunta", o: ["A", "B", "C", "D"], c: 2,
            fb: "Por qué la correcta es correcta y por qué cada distractor atrae (50-90 palabras)", n: "N3" } ],
    // 10 ítems. Basados en situaciones (no definiciones memorísticas); Bloom N2-N5; distractores plausibles
    // (errores reales de docentes), opciones de longitud similar, la correcta repartida entre 0-3.
  // 3. RETO DE 7 DÍAS: transferencia al aula
  retos: [ { dia: 1, titulo: "Breve", accion: "Qué hacer exactamente en clase (1-2 frases)",
             evidencia: "Qué evidencia guardar (foto del tablero, 3 respuestas de estudiantes, etc.)", tiempo: "10 min" } ],
    // 7 retos de dificultad creciente; el día 7 es reflexión y ajuste.

  // SOLO cursos de idiomas (09-14):
  idioma: "en-US",          // en-US · fr-FR · pt-BR · de-DE · zh-CN (curso 14 incluye alemán y mandarín: usa frases con campo l)
  frases: [ { t: "frase en el idioma", es: "traducción", f: "pronunciación figurada o pinyin (opcional)",
              cat: "Aula" /* Aula · Familias · Colegas · Vida */, l: "de-DE" /* solo si difiere de idioma */ } ],  // 30 frases útiles para el docente

  // SOLO cursos con evaluación de plantilla (16, 19, 23, 24, 25): reemplazo real de las 7 preguntas del módulo
  evaluacion: [ { q: "...", o: ["", "", "", ""], c: 1,
                  ok: "Retroalimentación si acierta (40-80 palabras) + una pregunta reflexiva al final",
                  no: "Retroalimentación orientadora si falla (30-60 palabras), sin revelar la opción" } ],  // exactamente 7, en el orden de las 7 tarjetas del módulo
  intro: "Nuevo texto de introducción del módulo (40-70 palabras) solo si el actual tiene cifras no verificables"
});
```

Reglas de rigor: nada inventado (cifras, leyes, autores, fechas); normativa colombiana con número y año correctos;
autores y obras reales; nada de neuromitos (estilos de aprendizaje VAK, cerebro izquierdo/derecho, 10 % del cerebro,
gimnasia cerebral). Cadenas JS válidas (comillas tipográficas « » o “ ” dentro del texto; sin saltos de línea dentro de cadenas).
