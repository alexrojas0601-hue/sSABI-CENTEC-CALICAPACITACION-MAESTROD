# Esquema `club/data/<idioma>.js` · Club de Diálogo SABI

```js
window.SABI_CLUB = window.SABI_CLUB || {};
window.SABI_CLUB.en = {
  escenarios: [
    {
      id: "en-01", titulo: "Título en español", nivel: "A1",   // A1 · A2 · B1 · B2 · C1
      tema: "Aula", contexto: "Situación en español (1-2 frases): dónde estás y qué quieres lograr",
      rol: "Quién habla contigo (p. ej. «Mr. Brown, padre de un estudiante»)",
      turnos: [
        { bot: "Lo que dice el personaje en el idioma", es: "Traducción",
          opciones: [
            { t: "Respuesta adecuada", es: "Traducción", ok: true },
            { t: "Otra respuesta adecuada (más rica)", es: "Traducción", ok: true },
            { t: "Respuesta con un error típico de hispanohablante", es: "Traducción", ok: false,
              fix: "Explicación breve en español del error y la forma correcta" }
          ],
          clave: ["palabras", "clave"],   // 2-4 palabras (en el idioma) que debe contener una respuesta libre adecuada
          tip: "Micro-consejo de gramática, cultura o pronunciación en español (máx. 25 palabras)" }
        // 6 a 8 turnos que forman una conversación coherente con inicio, desarrollo y cierre
      ],
      cierre: { bot: "Despedida del personaje", es: "Traducción" },
      vocab: [ { t: "palabra o expresión", es: "traducción" } ]   // 6-8
    }
    // 10 escenarios, progresión de nivel: 3 A1-A2, 4 B1, 3 B2-C1
  ]
};
```
Mandarín (`zh`): cada `bot`, `t` de opciones y `t` de vocab lleva además `py: "pinyin con tildes"`.
Temas obligatorios entre los 10: saludo y presentación docente; instrucciones de clase (classroom language);
reunión con familia; sala de profesores; manejo de un estudiante que no participa; conferencia o capacitación;
entrevista o videollamada con colega extranjero; viaje/vida cotidiana; dar retroalimentación; contar una
experiencia pedagógica. Lenguaje natural y correcto (variante: en-US, fr-FR, pt-BR, de-DE, zh-CN).
