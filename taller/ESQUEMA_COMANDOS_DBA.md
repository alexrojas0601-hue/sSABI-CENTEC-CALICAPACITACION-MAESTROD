# Esquema · Comandos IA y Prompt Maestro · Referentes DBA

## A. `taller/data/comandos.js`
```js
/* SABI Taller · Biblioteca de comandos IA y Prompt Maestro v2 */
(function (T) {
  T.comandos = [
    {
      cmd: "/ultrathink",                      // minúsculas, sin espacios; único
      alias: ["/ultrathinking"],               // opcional: variantes y errores de digitación frecuentes
      grupo: "Razona con mayor agudeza",
      icono: "🧠",
      que: "Qué hace, en una frase",
      cuando: "Cuándo conviene usarlo en el trabajo docente",
      plantilla: "Prompt completo, listo para pegar en cualquier IA, con {tema} y opcionalmente {contexto} (grado, área, propósito, estudiantes)…",
      ejemplo: "Ejemplo de uso en el contexto CENTEC",
      fuente: "Respaldo, si aplica (p. ej. Dunlosky et al., 2013)"   // opcional
    }
  ];
  T.promptMaestro = `Texto completo del Prompt Maestro SABI v2 (markdown)…`;
})(window.SABI_TALLER = window.SABI_TALLER || {});
```
Grupos y comandos obligatorios (el validador los exige):
- Razona con mayor agudeza: /ultrathink /stepback /firstprinciples /chainofthought
- Aprende cualquier cosa rápido: /eli5 /technicaldeepdive /analogy /socratic
- Escríbelo una vez y escríbelo bien: /rewrite /shorten /expand /outline
- Envía código con confianza: /codereview /debug /refactor /testcases
- Decide con datos, no con intuiciones: /proscons /swot /riskcheck /premortem
- Nunca te quedes sin ideas: /brainstorm /remix /whatif /metaphor
- Dilo correctamente siempre: /formalize /casualize /persuade /deescalate
- Convierte metas en planes reales: /prd /okrs /timeline /delegate
- Confía en lo que compartes: /factcheck /citesources /summarizeresearch /trendcheck
- Autoevaluación de la IA: /godmode /critique /iterate /selfcheck
- Ayudas didácticas: /worksheet /escape /detective /boardgame /stations /manipulative /comic /lapbook /puzzle /minibook
Y además (recomendado): lúdicos SABI (/sopa_de_letras /crucigrama /comics /flashcards /fluxograma /linea_de_tiempo /5w1h),
matemáticas (/matematicas_formulas /paso_a_paso /mathvisual /mathmaps /matflow /detectaerror /ficha_calculo /problemas_cotidianos
/series_patrones /geometria_visual /dinero_cambio), ciencia (/experimento /poe /indagacion), lectura (/literal /entrelineas
/palabras_contexto /dondelopone /orden_causas /argumenta), y **ciencia del aprendizaje** con respaldo verificable
(práctica de recuperación, espaciada, intercalada, elaboración, ejemplos concretos, codificación dual, Feynman, ticket de salida,
DUA, retroalimentación formativa, instrucción explícita de Rosenshine, aprendizaje cooperativo/jigsaw, ABP, STEAM, diferenciación por niveles…).

Errores de digitación del rector que deben quedar como alias: /firstprincipies, /tecchnicaldeepdive, /codereviwe, /brinstorm,
/casualiza, /summarizereseearrch, /tredcheck, /procons, /outine, 7prd → /prd.

## B. `taller/data/dba_<area>.js` (area ∈ ciencias, matematicas, lenguaje)
```js
(function (T) {
  T.dba = T.dba || {};
  T.dba.ciencias = {
    fuente: "Derechos Básicos de Aprendizaje V1, Ciencias Naturales, MEN 2016",
    tr: [ { n: 1, texto: "Enunciado del DBA (literal si fue verificado; paráfrasis si no)", verificado: true, url: "https://…" } ],
    "01": [ … ], … "11": [ … ]
  };
})(window.SABI_TALLER = window.SABI_TALLER || {});
```
Transición usa los DBA de Transición (MEN 2016), que son transversales: incluye los pertinentes al área.
`verificado: true` solo si leíste el enunciado en una fuente oficial en esta sesión. Nunca inventes enunciados ni números.

Validar: `node taller/tools/validar.js comandos` · `node taller/tools/validar.js dba`
