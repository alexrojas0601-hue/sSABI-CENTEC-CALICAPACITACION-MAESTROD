# Esquema · Banco de comprensión lectora SABI (Dot_LecturaCritica_Lenguaje)

Lema del módulo: **Leer es comprender, relacionar y pensar.**
Archivo por grado: `taller/data/lectura_<g>.js`, con g ∈ `tr 01 … 11`. Mínimo **6 textos por grado**, todos **originales**
(nunca copies textos publicados; puedes recrear con tus palabras leyendas y mitos del folclor colombiano, que son de tradición oral).

## Formato exacto
```js
/* SABI Taller · Lectura · Grado 05 · Textos originales SABI CENTEC */
(function (T) {
  T.lectura = T.lectura || {};
  T.lectura["05"] = [
    {
      id: "LC05-1",                         // LCTR-1 … LC11-6
      titulo: "El guardián del río Pance",
      tipo: "narrativo",                     // narrativo | fabula | leyenda | informativo | instructivo | poema | noticia | carta | biografia | argumentativo | entrevista
      dba: "DBA Lenguaje 5.°, n.º 7: paráfrasis breve (o «EBC Lenguaje 4.°–5.°: …» si no se pudo verificar)",
      parrafos: [
        ["Primera oración del párrafo 1.", "Segunda oración."],
        ["Primera oración del párrafo 2.", "…"]
      ],                                     // cada oración es un string; las referencias usan [párrafo, oración] desde 0

      // 1) LO QUE DICE EL TEXTO · comprensión literal — EXACTAMENTE 4
      //    r = fragmento COPIADO TAL CUAL de la oración s (el validador lo comprueba). El niño debe encontrar la oración.
      literal: [ { p: "¿Dónde vivía Tomás?", r: "en una casa junto al río", s: [0, 1] } ],

      // 2) LEER ENTRE LÍNEAS · inferencia — mínimo 2. op: 3–4 opciones; c: índice correcto; s: oración-pista; ex: por qué
      entrelineas: [ { p: "¿Cómo se sentía Tomás al final?", op: ["…", "…", "…", "…"], c: 2, s: [3, 0], ex: "Se infiere porque…" } ],

      // 3) PALABRAS EN CONTEXTO · vocabulario — mínimo 2. w aparece tal cual en la oración s
      contexto: [ { w: "caudaloso", s: [1, 2], op: ["…", "…", "…"], c: 0, ex: "Las pistas del texto son…" } ],

      // 4) ¿DÓNDE LO PONE? · afirmación parafraseada verdadera → el niño marca la oración que la prueba — mínimo 2
      dondelopone: [ { a: "El río crecía cuando llovía en la montaña.", s: [1, 0] } ],

      // 5) ORDEN Y CAUSAS
      orden: ["Evento 1", "Evento 2", "Evento 3", "Evento 4"],            // 4–6, en el orden correcto (la app los baraja)
      causas: [ { causa: "Llovió toda la noche", efecto: "el río se desbordó" } ],  // mínimo 2

      // 6) PIENSA Y ARGUMENTA · respuesta abierta con criterios de valoración — mínimo 2
      argumenta: [ { p: "¿Estás de acuerdo con la decisión de Tomás? Da dos razones del texto.",
                     criterios: ["Toma una posición clara", "Usa al menos una razón del texto", "Relaciona con su experiencia"] } ],

      autor: "Texto original SABI CENTEC"
    }
  ];
})(window.SABI_TALLER = window.SABI_TALLER || {});
```

## Extensión sugerida (palabras del texto completo)
tr 35–110 (lectura en voz alta del docente) · 1.° 50–140 · 2.° 80–180 · 3.° 120–240 · 4.° 160–290 · 5.° 200–360 ·
6.° 240–420 · 7.° 280–460 · 8.° 320–520 · 9.° 360–560 · 10.°–11.° 400–650.

## Variedad por grado (6 textos)
Transición–2.°: 2 cuentos, 1 fábula o rima, 1 informativo sencillo (animales, plantas), 1 instructivo (receta vallecaucana: lulada, arepa, champús), 1 leyenda colombiana contada para niños.
3.°–11.°: narrativo, informativo/científico, instructivo, poema o fábula, noticia o entrevista, argumentativo/carta de opinión.
Contexto cercano cuando sirva (Cali, Valle del Cauca, Pacífico colombiano), personajes diversos, valores CENTEC (respeto, honestidad, cuidado del ambiente).
Vocabulario y sintaxis acordes al grado. Las opciones incorrectas deben ser plausibles pero claramente refutables con el texto.

## Referencia curricular
DBA de Lenguaje del MEN (2016) del grado (Transición: DBA de Transición). Verifica con WebSearch si puedes; si no, usa la banda EBC de Lenguaje. No inventes números.

## Validación (hasta 0 errores)
```bash
node taller/tools/validar.js lectura 05
```
