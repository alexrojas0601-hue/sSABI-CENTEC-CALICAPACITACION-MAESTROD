# Revisión del curso 21 · Emprendimiento e innovación educativa en el aula (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueba el docente responsable (área técnica/SENA o coordinación académica); falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso21_emprendimiento_innovacion.html` (canónico, modificado), `kb/sabi_curso21_emprendimiento_innovacion.js` y `kb/plus/sabi_curso21_emprendimiento_innovacion.js` (revisados, sin cambios). `sabi_curso21_emprendimiento.html` es una redirección y no se tocó.

Estructura distinta a la de otros cursos: 5 tarjetas `mod-card` con `mod-body`, tres `concept-card`, dos `actividad`, una pregunta (`resp(this,'qN','X')`, claves en `CORRECT`/`FEEDBACK`), lista de verificación `chk-item` y `tip` por módulo; sin bloqueo entre módulos; diploma y avatar con voz. **No tiene panel «SABI Agentes»** ni cifras de TALIS, Hattie, McKinsey u HolonIQ en panel; la única mención a McKinsey estaba en el módulo 5 (ver abajo). Se respetó la estructura; no se cambió CSS ni la lógica JS (solo los datos de preguntas).

## 1. Qué se encontró
- **Cifras inventadas o sin fuente:** «El 72 % de los jóvenes colombianos quiere emprender pero solo el 8 % lo logra (GEM Colombia 2024)» (M1); «el 65 % de los empleos del 2030 no existen aún (McKinsey 2023)» (M5, cifra viral sin fuente trazable, que además era la base de la pregunta 5 «Según el informe McKinsey 2023…»); «la competencia transversal más demandada del siglo XXI» y «Alineado con el Programa Colombia Productiva» (cita del encabezado).
- **Ejemplos erróneos de emprendimiento social:** «Cuestamoras, Terpel Fundación, Bancolombia» (un grupo empresarial costarricense, una fundación corporativa y un banco).
- Afirmaciones exageradas: «Las competencias emprendedoras son a prueba de automatización»; «con 5 ciclos… publicar en una revista educativa»; «la velocidad es pedagógicamente poderosa»; aula invertida presentada sin matiz; la pregunta 5 premiaba que las competencias transversales son «más importantes que el conocimiento de áreas específicas».
- **Preguntas:** la opción correcta llevaba un «✓» visible en el texto (revelaba la respuesta antes de contestar) y era claramente la más larga en las 5 preguntas.
- **HTML defectuoso:** `<h4>Práctico</div>` y `<h4>Con diploma</div>`; `<footer` duplicado sin cerrar.
- No hay cálculos de costos o precios en el curso original (no había nada que recalcular); se añadió un ejemplo resuelto verificado con Python.
- Neuromitos: ninguno. Ortografía: correcta, salvo «sobre-ambición».
- kb: fuentes reales (Ley 1014 de 2006, Ley 2069 de 2020, Ley 1780 de 2016, Guía 39 del MEN, Brown 2009, Ries 2011, Drucker 1985, Yunus 2010, Martin et al. 2013 con DOI correcto); `kb/plus` con 10 preguntas situadas bien construidas. Sin cambios.

## 2. Qué se corrigió
- Encabezado: cita sin la afirmación de «más demandada» y con referencia a la Ley 1014 de 2006 en lugar de «Programa Colombia Productiva». Tarjeta «Contenido real» sin «tendencias 2025-2026».
- M1: introducción sin las cifras del GEM; Design Thinking atribuido al modelo de cinco fases de la d.school de Stanford e IDEO (no lineal); actividad sin «la velocidad es poderosa».
- M2: PMV atribuido a Eric Ries (2011). M3: matiz de evidencia mixta en aula invertida; documentación realista (jornada pedagógica / investigación formal).
- M4: emprendimiento social con Yunus (Nobel de Paz 2006) y figuras colombianas afines (cooperativas; sociedades BIC, Ley 1901 de 2018); frase de ética neutral. **Ejemplo resuelto de costos y precio** (jabones de glicerina, precios ilustrativos), recalculado con Python: costo variable $3.300, margen $1.700 (34 %), punto de equilibrio 11,8 → 12 unidades, ganancia de $14.000 con 20 unidades; comprobación 20 × 3.300 + 20.000 = 86.000. Incluye nota de seguridad (baño maría con adulto, sin soda cáustica).
- M5: la cifra del 65 % se presenta como dato viral sin fuente y se retira McKinsey; pregunta 5 reescrita (verificar la fuente y unir saberes de área con competencias transversales) con nueva clave C y retroalimentación nueva.
- **Una tarjeta «Actualización 2026: lo que dice la evidencia» por módulo** (5, misma estructura `concept-card`, nota «Contenido en revisión»). No se añadieron preguntas.
- 5 preguntas: sin «✓» en las opciones; longitudes equilibradas (74-89 caracteres; la correcta ya no es la más larga en ninguna); claves C, D, B, A, C; retroalimentación de q1, q2 y q5 ajustada para explicar sin exagerar.
- HTML: cierres `</h4>` y un solo `<footer>`.

## 3. Fuentes y DOI verificados
DOI comprobados el 2026-10-24 contra Crossref (`api.crossref.org/works/<DOI>`, vía WebFetch): autor, título, año y revista coinciden.

| Módulo | Afirmación | Fuente | DOI |
| --- | --- | --- | --- |
| 1, 4 | Relación positiva y modesta entre educación en emprendimiento y capital humano emprendedor; menor en estudios rigurosos | Martin, McNally y Kay (2013). *Journal of Business Venturing*, 28(2), 211-224 | 10.1016/j.jbusvent.2012.03.002 |
| 1 | Experimento en primaria (Países Bajos): mejora en habilidades no cognitivas | Huber, Sloof y Van Praag (2014). *European Economic Review*, 72, 76-97 | 10.1016/j.euroecorev.2014.09.002 |
| 1 | Programa de minicompañías: sin mejora en habilidades y baja en intención de emprender | Oosterbeek, Van Praag e Ijsselstein (2010). *European Economic Review*, 54(3), 442-454 | 10.1016/j.euroecorev.2009.08.002 |
| 2 | Efecto positivo del ABP sobre el rendimiento, con moderadores | Chen y Yang (2019). *Educational Research Review*, 26, 71-81 | 10.1016/j.edurev.2018.11.001 |
| 2 | La guía mínima es menos eficaz para novatos | Kirschner, Sweller y Clark (2006). *Educational Psychologist*, 41(2), 75-86 | 10.1207/s15326985ep4102_1 |
| 3 | Acompañamiento docente: 60 estudios, 0,49 DE en práctica y 0,18 en logro; efectos menores al escalar | Kraft, Blazar y Hogan (2018). *Review of Educational Research*, 88(4), 547-588 | 10.3102/0034654318759268 |
| 5 | Estimación de susceptibilidad de ocupaciones a la automatización | Frey y Osborne (2017). *Technological Forecasting and Social Change*, 114, 254-280 | 10.1016/j.techfore.2016.08.019 |

Crossref no trajo el resumen de Martin et al., Huber et al., Oosterbeek et al., Chen y Yang ni Frey y Osborne: sus metadatos coinciden, pero los hallazgos se redactaron con base en los resúmenes publicados conocidos y de forma prudente (sin tamaños de efecto). **Conviene que el auditor confirme esos hallazgos en el texto del artículo.**

Sin DOI (normas, informes o libros): Ley 1014 de 2006; Ley 1901 de 2018 (sociedades BIC); Ley 2069 de 2020; Ley 1780 de 2016; MEN, Guía 39; Bacigalupo, Kampylis, Punie y Van den Brande (2016), *EntreComp*, JRC (Crossref no resolvió el DOI 10.2791/593884, por eso no se cita DOI); Arntz, Gregory y Zierahn (2016), OCDE, *Social, Employment and Migration Working Papers* n.º 189; Ries (2011); Yunus (Nobel de Paz 2006, compartido con el Grameen Bank).

**No se pudo abrir en esta pasada** (permiso web no concedido o límite de búsquedas agotado): el texto de la Ley 1014 de 2006 (secretariasenado.gov.co) y la página de Springer. Lo dicho sobre la Ley 1014 se limitó a su objeto general (fomento de la cultura del emprendimiento en el sistema educativo); la articulación con el SENA no se amplió en el HTML por no poder verificarla en la fuente primaria.

## 4. Pruebas
- `node -e "global.window={};require(...)"` OK en `kb/` y `kb/plus/`.
- Playwright (Chromium, dominios externos bloqueados), servidor `python3 -m http.server 8824` (detenido al final), 1280 y 390 px: 0 errores de consola o de página; sin desborde horizontal ni elementos fuera del ancho en ningún módulo; los 5 módulos abren; cada pregunta marca la correcta (respuesta correcta a 1280 px e incorrecta a 390 px) y muestra la retroalimentación; las listas completan el módulo; el diploma toma el nombre; un solo `footer`.
- `node taller/tools/validar.js todo`: OK (0 avisos).

## 5. Queda para revisión humana
1. Aprobación del docente responsable y auditoría de un Dot distinto del autor.
2. Confirmar en fuente primaria la Ley 1014 de 2006 (art. 13, enseñanza obligatoria) y, si se quiere, añadir la articulación SENA (redes de emprendimiento, Fondo Emprender, articulación con la media) con cita verificada.
3. El curso tiene 5 módulos con 3 tarjetas y 1 pregunta cada uno, por debajo del estándar (6-8 tarjetas y 7 preguntas): ampliarlo es decisión del equipo (las 10 preguntas de `kb/plus` ya cubren parte).
4. La pregunta muestra la retroalimentación tras el primer intento y no permite reintentar (JS común; no se tocó).
5. Registrar los DOI en `docs/VERIFICACION_DOI.md` y una línea en `docs/REVISION_CURSOS.md`. No se hizo commit ni push.

## Auditoría (Dot distinto del autor)
Fecha: 2026-10-27 · `Dot_Auditor_Riguroso` (no escribió el contenido) · Estado: **sigue en revisión** hasta la aprobación humana.

**Normas y hechos:** Ley 1014 de 2006 (fomento a la cultura del emprendimiento; el texto solo afirma su objeto general): correcto. Ley 1901 de 2018 crea las sociedades BIC: correcto. Muhammad Yunus, Nobel de Paz 2006 (compartido con el Grameen Bank), «negocio social»: correcto. La fuente oficial de las leyes no se abrió en esta sesión.

**Cálculo de costos y precio, recalculado con Python:** glicerina 48.000/20 = 2.400; esencia 8.000/20 = 400; costo variable 3.300; margen 1.700 (34,0 %); equilibrio 20.000/1.700 = 11,76 → 12; ingresos 100.000; costos 86.000; ganancia 14.000. **Todo correcto.**

**Hallazgos atribuidos** (contraste con el resumen en IDEAS/RePEc y en el repositorio de la VU Amsterdam):
- Martin, McNally y Kay (2013): **confirmado** (42 muestras, 16.657 participantes; r = 0,217 con capital humano y 0,159 con resultados; los estudios menos rigurosos sobreestiman).
- Huber, Sloof y Van Praag (2014): **corregido.** El resumen informa un efecto positivo robusto en habilidades no cognitivas emprendedoras y ninguno en el conocimiento; no nombra «persistencia y creatividad». La tarjeta dice ahora exactamente eso.
- Oosterbeek y colegas (2010), Chen y Yang (2019) y Frey y Osborne (2017): coherentes con los resúmenes conocidos (sin efecto en habilidades y efecto negativo en la intención; efecto positivo del ABP con moderadores; estimación de susceptibilidad por ocupación). No se abrió su resumen en esta sesión: la redacción ya es prudente y sin cifras.

**Afirmaciones fuertes sin respaldo, suavizadas:** «la metodología que más integra competencias» → «una metodología que integra varias»; «la forma de emprendimiento más relevante para Cali» → «especialmente pertinente»; «más poderoso que cualquier teoría» → «le da sentido a la teoría»; pregunta 3, «¿Cuál es el error más común…?» (sin dato que lo respalde) → «¿Qué error conviene evitar al empezar a innovar…?», con la retroalimentación ajustada; la misma pregunta se ajustó en `kb/sabi_curso21_emprendimiento_innovacion.js`.

**Preguntas (5):** clave única y correcta (C, D, B, A, C), longitudes de 74 a 89 caracteres, sin «✓» visible. El atributo `data-correct` en la opción correcta es del JS común (marca la correcta tras un error) y no se ve. **HTML:** etiquetas equilibradas y un solo `footer`. **Ortografía:** correcta.

**Pruebas:** kb y kb plus cargan; `validar.js todo` OK. Playwright (Chromium, dominios externos bloqueados, `http.server` 8843, detenido): a 1280 px (todo correcto) y a 390 px (todo incorrecto), 0 errores de página, sin desborde; las 5 retroalimentaciones corresponden a la clave; las listas completan los 5 módulos; el diploma toma el nombre.
