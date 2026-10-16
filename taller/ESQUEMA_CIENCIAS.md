# Esquema · Banco de experimentos SABI (Dot_CienciasNaturales_STEAM)

Archivo por grado: `taller/data/ciencias_<g>.js`, con g ∈ `tr 01 02 03 04 05 06 07 08 09 10 11`
(tr = Transición). Público: niños y jóvenes del Colegio CENTEC (Cali, Colombia), guiados por su docente.

## Formato exacto del archivo
```js
/* SABI Taller · Ciencias · Grado 05 · 50 experimentos · Texto original SABI CENTEC */
(function (T) {
  T.ciencias = T.ciencias || {};
  T.ciencias["05"] = [
    {
      id: "CN05-01",                 // CNTR-01 … CN11-50, consecutivo
      eje: "materia",                // materia | fuerza | energia | vida | quimica | tierra
      titulo: "El huevo que flota",  // corto y atractivo, único en el archivo
      dba: "DBA 3 de 5.°: … (paráfrasis breve)",   // ver «Referencia curricular»
      pregunta: "¿Por qué un huevo flota en agua con sal y se hunde en agua sola?", // pregunta investigable
      prediccion: "¿Qué crees que pasará cuando agreguemos sal poco a poco?",       // invita a hipotetizar
      materiales: ["1 huevo crudo", "2 vasos transparentes", "agua", "6 cucharadas de sal"],
      pasos: ["Llena…", "Pon…", "Observa…", "…"],     // 3 a 10 pasos, imperativo, lenguaje del grado
      observa: "Qué mirar y registrar (variable observada)",
      registro: { columnas: ["Cucharadas de sal", "¿Flota o se hunde?"] },          // OPCIONAL: tabla de datos
      resultado: "Qué ocurre (lo esperado, honesto: si a veces falla, decir por qué)",
      porque: "Explicación científica correcta y al nivel del grado (25–90 palabras): densidad = masa/volumen …",
      conceptos: ["densidad", "flotación"],   // 2 a 4
      seguridad: "Lávate las manos después de tocar el huevo crudo.",
      riesgo: "bajo",                // bajo | medio (medio = SIEMPRE con docente/adulto, dilo en seguridad)
      tiempo: 20,                    // minutos (número)
      reto: "Variable a cambiar o desafío de diseño (indagación abierta)",
      conexion: "Vínculo con la vida diaria o el contexto colombiano/vallecaucano"
    }
    // … 50 en total
  ];
})(window.SABI_TALLER = window.SABI_TALLER || {});
```

## Distribución obligatoria (50 por grado)
| eje | contenido | cantidad |
|---|---|---|
| materia | Materia y sus cambios: estados, mezclas/separación, propiedades, masa, volumen, densidad | 9 |
| fuerza | Fuerza y movimiento: empujar/halar, fricción, gravedad, palancas, máquinas simples, presión, velocidad | 9 |
| energia | Luz, sonido y energía: sombras, reflexión, refracción, color, vibración, tono, calor, circuitos con pilas, magnetismo | 9 |
| vida | Seres vivos y cuerpo humano: plantas, germinación, sentidos, sistemas del cuerpo, ecosistemas, microorganismos (sin cultivos peligrosos) | 9 |
| quimica | Química según DBA: cambios físicos vs químicos, reacciones seguras, ácidos/bases con indicador de repollo morado, solubilidad, cristalización, oxidación | 9 |
| tierra | Tierra, ambiente y universo: suelo, agua, clima, ciclo del agua, día/noche, erosión, reciclaje, cuidado del ambiente | 5 |

Progresión: Transición–2.° = exploración sensorial y juego; 3.°–5.° = variables y medición sencilla;
6.°–9.° = control de variables, tablas y gráficas; 10.°–11.° = cuantitativo (física y química), cálculo de magnitudes.
No repitas el mismo experimento con otro nombre. Los clásicos (volcán de bicarbonato, huevo flotante) úsalos como máximo una vez y
con el enfoque propio del grado.

## Seguridad infantil (no negociable; el validador la revisa)
- **Prohibido en todos los grados**: lejía/cloro/hipoclorito, amoníaco, ácidos fuertes (sulfúrico, clorhídrico, nítrico, muriático),
  soda cáustica, solventes (gasolina, thinner, varsol), mercurio, corriente de la red eléctrica (tomas, enchufes, 110/120 V),
  láser, mirar al Sol (ni con gafas caseras), pilas de botón (riesgo de ingestión), baterías de carro, pólvora.
- **Fuego** (velas, fósforos, encendedor) prohibido de Transición a 5.°. Desde 6.° solo con riesgo "medio" y docente.
- Agua caliente, estufa, horno, microondas, cuchillo, vidrio, alcohol → `riesgo: "medio"` y `seguridad` debe decir que lo hace o supervisa el docente/adulto.
- Electricidad: solo pilas AA/AAA o de 9 V con LED o bombillo pequeño. Electrólisis: con bicarbonato, **nunca con sal** (produce cloro).
- Seres vivos: observar sin dañar (Ley 1774 de 2016, protección animal). Sin disección de animales. Sin sangre ni fluidos.
  Sin cultivar mohos/bacterias en recipientes que se abran.
- Comida: probar solo alimentos seguros y si no hay alergias (avisarlo). Transición–2.°: nada de piezas pequeñas para la boca.
- Materiales baratos y caseros, fáciles de conseguir en Cali (panela, repollo morado, limón, bicarbonato, vinagre, botellas plásticas…).

## Referencia curricular (Dot Auditor)
- Usa los **DBA de Ciencias Naturales del MEN (2016)** del grado (1.° a 11.°). Para Transición usa los **DBA de Transición (MEN, 2016)**.
- Intenta verificar el DBA con WebSearch/WebFetch (colombiaaprende.edu.co, mineducacion.gov.co). Si lo verificas: `"DBA n de g.°: paráfrasis"`.
- Si no puedes verificar el número exacto, NO inventes: usa `"EBC Ciencias Naturales 4.°–5.° · Entorno físico: paráfrasis del estándar"`
  (Estándares Básicos de Competencias, MEN 2004; bandas 1–3, 4–5, 6–7, 8–9, 10–11).
- Explicaciones científicamente correctas, sin errores conceptuales típicos (p. ej., «el aire caliente sube porque es más liviano» → explícalo con densidad;
  la sombra no es «reflejo»; las plantas no «comen» tierra). Si un fenómeno tiene matices, simplifica sin falsear.

## Validación (corre hasta 0 errores)
```bash
node taller/tools/validar.js ciencias 05
```
