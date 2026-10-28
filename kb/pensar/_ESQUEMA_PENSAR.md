# Esquema `kb/pensar/<curso>.js` · SABI Pensamiento (v3, en revisión)

Por qué existe (diagnóstico inverso, 2026-10-27): de 609 preguntas de los cursos, cerca de un tercio exige
analizar, evaluar o crear; las de selección múltiple no llegan al nivel N6 (crear); seis cursos (11, 17, 18, 20, 21, 22)
tenían 0 a 6 preguntas y un diploma que se imprimía solo con el nombre. Este paquete añade, sin cambiar el diseño:

1. **Escalera de pensamiento** N4 Analizar → N5 Evaluar → N6 Crear: tareas de producción con criterios
   (autoevaluación con rúbrica antes de ver la respuesta modelo). Base: Krathwohl (2002), Panadero y Jonsson (2013),
   Andrade (2019).
2. **Lectura crítica docente**: un texto original de 220-320 palabras con las seis destrezas SABI
   (lo que dice el texto, leer entre líneas, palabras en contexto, ¿dónde lo pone?, orden y causas, piensa y
   argumenta). El docente vive como lector lo que luego enseña.

Lo carga `sabi_dots.js` después de `kb/<curso>.js` y `kb/plus/<curso>.js`. Valida con
`node kb/tools/validar_pensar.js`.

```js
Object.assign(window.SABI_KB = window.SABI_KB || {}, { pensar: {
  escalera: [
    { n: "N4", verbo: "Analizar", tarea: "Situación de aula CENTEC (nombres ficticios) + qué debe analizar el docente (40-90 palabras)",
      criterios: ["Criterio observable 1", "Criterio 2", "Criterio 3"],          // 3-4, verificables en el texto que escribe
      modelo: "Respuesta modelo de 80-150 palabras que cumple todos los criterios" },
    { n: "N5", verbo: "Evaluar", ... },   // juzgar con criterios, elegir y justificar entre opciones reales
    { n: "N6", verbo: "Crear", ... }      // producir algo usable mañana en el aula: pregunta bisagra, rúbrica, guion, plan
  ],
  lectura: {
    titulo: "Título del texto",
    base: "Fuente en la que se apoya el texto: cita completa (autor, año, título, revista, DOI) tomada SOLO de las fuentes
           ya presentes y verificadas del curso (kb/<curso>.js, el HTML o docs/VERIFICACION_DOI.md); o «Texto elaborado por
           SABI CENTEC a partir del módulo N del curso» si no hay fuente revisada por pares",
    parrafos: ["P1", "P2", "P3", "P4"],    // 4 párrafos, 220-320 palabras en total, texto ORIGINAL (no copiado de la fuente),
                                            // oraciones terminadas en punto; sin cifras que no estén en el curso
    literal: [ { q: "Pregunta literal", oracion: "Oración COPIADA EXACTAMENTE del texto (con su punto final)" } ],  // exactamente 4
    inferencia: { q: "¿Qué se puede concluir…?", o: ["", "", "", ""], c: 0, fb: "Qué pista del texto lo permite (30-70 palabras)" },
    contexto:   { palabra: "palabra tal como aparece en el texto", q: "En el párrafo N, «palabra» significa…", o: ["", "", "", ""], c: 2, fb: "..." },
    donde:      { afirmacion: "Afirmación que se sustenta en un párrafo", parrafo: 2, fb: "..." },   // parrafo: índice 0-3
    orden:      { q: "Ordena del primero al último…", pasos: ["1.º", "2.º", "3.º", "4.º"], fb: "..." },  // en el orden correcto
    argumenta:  { q: "Pregunta de opinión con tesis", criterios: ["Plantea una tesis clara", "Da al menos dos razones",
                  "Cita una evidencia del texto", "Considera una objeción o un límite"] }
  }
}});
```

## Reglas (Dot_Auditor_Riguroso)
- Nada inventado: ni cifras, ni leyes, ni autores, ni DOI. Solo fuentes que ya estén en el curso y verificadas.
- Las tareas N4-N6 se basan en lo que el curso enseña; el modelo no introduce afirmaciones empíricas nuevas.
- Las 4 oraciones literales existen palabra por palabra en `parrafos`; la respuesta correcta `c` se reparte entre 0-3.
- Español de Colombia con tildes y signos de apertura; nombres ficticios; sin datos personales (Ley 1581 de 2012).
- Sin neuromitos (ver `docs/ESTANDAR_CURSOS_SABI.md`, §3).
- Cadenas JS válidas: comillas tipográficas « » o “ ” dentro del texto; sin saltos de línea dentro de cadenas.
- Todo nace «en revisión»: lo aprueba el docente del área o coordinación académica.
