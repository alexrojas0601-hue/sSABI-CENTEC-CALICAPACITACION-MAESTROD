# Revisión del curso 17 · Producción de video y podcast educativo (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueba el docente responsable del área de tecnología e informática; falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso17_video_podcast_educativo.html` (canónico), `kb/sabi_curso17_video_podcast_educativo.js` y `kb/plus/sabi_curso17_video_podcast_educativo.js`. `sabi_curso17_video_podcast.html` es una redirección y no se tocó.

Estructura distinta a la de otros cursos (igual a la del curso 18): 6 tarjetas `mod-card` con `mod-body`, 2-4 `concept-card`, dos `actividad`, un `exercise` con 4 opciones (`resp(this,'qN','X')`), una lista de chequeo de 3 actividades y un `tip` por módulo; sin bloqueo entre módulos; diploma, avatar con voz y panel «SABI Agentes». Se respetó esa estructura.

## 1. Qué se encontró
- **Panel «SABI Agentes» con cifras inventadas**, idéntico al que tenía el curso 11: «TALIS 2025 (55 países)… d=0.52», «Hattie, 300 millones de estudiantes, d=0.70», «240M estudiantes», «McKinsey 2025: +76 %», «34 % menos rotación y 28 % más satisfacción familiar», «Retención: +40 %», «estás en el 23 % de docentes que terminan», «HolonIQ 2026: tendencia #1», cita no verificable de «OCDE Digital Education Outlook 2026», «d=0.48 socioemocional», y un mensaje sistema que pedía «al menos UN dato de investigación específico» de esas fuentes.
- **Cifras sin fuente en el contenido:** «El 90 % de los videos educativos fracasan», «subtítulos: aumentan retención un 40 %», «El 96 % de los docentes colombianos usa WhatsApp diariamente», «YouTube es el segundo buscador del mundo», «más efectivo que 10.000 seguidores», «el maestro más influyente en YouTube Colombia graba con un celular…», «el podcast es el formato que más crece en Colombia», cita del encabezado atribuida a «Tendencia #1 en formación docente Colombia 2025».
- **Afirmaciones de causa sin respaldo:** «perdiste al espectador en el minuto 2», «el espectador se va en el primer minuto», «el algoritmo… espera tu próximo video», «la constancia es el factor #1», «publicar durante al menos 6 meses». Neuro-lenguaje: «el cerebro humano tolera una imagen imperfecta».
- **Datos desactualizados:** Anchor → Spotify for Podcasters → **Spotify for Creators** desde noviembre de 2024 (comunicado oficial de Spotify, 2024-11-13).
- **Contradicción con el principio de coherencia de Mayer:** la edición mínima recomendaba siempre música de fondo.
- **Preguntas:** la opción correcta llevaba el símbolo «✓» en el propio texto (revelaba la respuesta antes de contestar) y en 3 de 6 era claramente la más larga (q4 casi el doble). La q3 premiaba el dato inventado del 40 %.
- **HTML mal formado:** `<h4>Práctico</div>`, `<h4>Con diploma</div>` y `<footer` duplicado.
- **Botón del panel de agentes tapado** por el botón del tutor SABI Dots (ambos fijos abajo a la izquierda): Playwright no podía pulsarlo.
- No se encontraron neuromitos explícitos; se aprovechó la tarjeta del módulo 1 para desmentir la «atención de 8 segundos».

## 2. Qué se corrigió
- Panel de agentes: 10 tendencias con fuente verificada (DOI o documento oficial) y 24 mensajes del coach por rol sin cifras, centrados en video y podcast (objetivo único, preguntas de recuperación, autorización de imagen, política de datos, neuromitos); alertas sin «23 %»; mensaje sistema que prohíbe inventar cifras o estudios y recuerda la Ley 1581 de 2012. El contenedor del panel sube a `bottom:164px`, igual que en el curso 11, para no quedar debajo del botón SABI Dots. Sin otros cambios de diseño ni de lógica.
- Cifras sin fuente retiradas o reformuladas sin número; cita del encabezado sin atribución inventada; la tarjeta «Contenido real» ya no promete «DBA y tendencias 2025-2026».
- Spotify for Creators en el módulo 4 (tarjetas, actividades y lista de chequeo); duración de episodios presentada como orientación práctica.
- Edición mínima: subtítulos revisados y música solo con licencia libre, a volumen bajo, o ninguna en explicaciones densas (coherencia).
- Precios de equipo presentados como referencia aproximada; recordatorio de autorización escrita de familias en entrevistas y podcasts con estudiantes.
- **Una tarjeta «Actualización 2026: lo que dice la evidencia» por módulo (6)**, con la misma estructura `concept-card` y la nota «Contenido en revisión». No se añadieron preguntas.
- 6 preguntas: sin «✓» en las opciones, longitudes parecidas, misma clave (B, C, A, D, B, C); retroalimentación reescrita donde citaba datos inventados (q1, q2, q3, q4, q6), ahora con fuente verificada o presentada como recomendación práctica. La q4 añade el matiz de la atención dividida.
- HTML corregido (`</h4>` y `<footer>`).
- `kb/`: línea de tiempo (Spotify for Creators 2024, Mayer 2020, WCAG 2.2 2023), flashcard de constancia sin «6 meses», indicador Bloom N2 sin «retención» y 7 fuentes nuevas con DOI; referencias de Guo y Brame completadas. `kb/plus/`: solo el encabezado de evidencia (quiz y retos ya eran correctos: 10 ítems, 4 opciones, claves repartidas 1, 2, 1, 3, 0, 2, 0, 3, 1, 2).

## 3. Fuentes y DOI verificados
DOI comprobados el 2026-10-24 contra Crossref (`api.crossref.org/works/<DOI>`, vía WebFetch): autor, título, año y revista coinciden.

| Módulo / lugar | Afirmación | Fuente | DOI |
| --- | --- | --- | --- |
| Panel, kb | Principios del aprendizaje multimedia | Mayer (2001). *Multimedia Learning*. Cambridge University Press | 10.1017/CBO9781139164603 |
| Panel, kb | 3.ª edición de los principios | Mayer (2020). *Multimedia Learning* (3.ª ed.). Cambridge University Press | 10.1017/9781316941355 |
| 1, panel, retro. q1 | Más permanencia en videos cortos (hasta unos 6 min) | Guo, Kim y Rubin (2014). *Proc. 1st ACM Conf. on Learning @ Scale*, 41-50 | 10.1145/2556325.2566239 |
| 1, panel | Pautas: carga cognitiva, participación, brevedad | Brame (2016). *CBE—Life Sciences Education*, 15(4), es6 | 10.1187/cbe.16-03-0125 |
| 1, panel | Segmentación: 56 investigaciones, efecto pequeño a mediano en retención y transferencia | Rey et al. (2019). *Educational Psychology Review*, 31(2), 389-419 | 10.1007/s10648-018-9456-4 |
| 2, panel, retro. q2 | Mal audio hace juzgar peor el mismo contenido | Newman y Schwarz (2018). *Science Communication*, 40(2), 246-257 | 10.1177/1075547018759345 |
| 3, panel, retro. q3 | Subtítulos: más de 100 estudios, mejor comprensión, atención y memoria | Gernsbacher (2015). *Policy Insights from the Behavioral and Brain Sciences*, 2(1), 195-202 | 10.1177/2372732215602130 |
| 4, panel | 105 ensayos: reemplazar por video g = 0,28; añadir video g = 0,80 | Noetel et al. (2021). *Review of Educational Research*, 91(2), 204-236 | 10.3102/0034654321990713 |
| 6, panel | Preguntas intercaladas reducen la divagación y mejoran el aprendizaje | Szpunar, Khan y Schacter (2013). *PNAS*, 110(16), 6313-6317 | 10.1073/pnas.1221764110 |

Sin DOI (documentos oficiales o hechos verificados en fuente): W3C, WCAG 2.2 (2023), criterio 1.2.2 «Subtítulos (grabados)», nivel A; Spotify Newsroom (2024-11-13), «Spotify for Creators»; Ley 23 de 1982 (derechos de autor), Ley 1581 de 2012 y Ley 1098 de 2006; licencias Creative Commons (BY, NC, ND, SA); UNESCO (2023), orientaciones sobre IA generativa.

## 4. Pruebas
- `node -e "global.window={};require(...)"` OK en `kb/` y `kb/plus/`.
- Playwright (Chromium, todo dominio externo bloqueado), 1280 y 390 px: 0 errores de consola o de página, sin desborde horizontal; los 6 módulos abren, cada uno muestra su tarjeta «Actualización 2026», la pregunta marca bien aciertos y errores (clave verificada contra `data-correct`), las 18 actividades se marcan y cada módulo queda «Completado»; el diploma toma el nombre; el panel de agentes (Auditor, Scholar, Coach y los 6 roles) ya no muestra TALIS, Hattie, McKinsey, HolonIQ ni «23 %».
- `node taller/tools/validar.js todo`: OK (0 avisos).

## 5. Queda para revisión humana
1. Aprobación del docente del área y auditoría de un Dot distinto del autor.
2. El curso sigue siendo breve frente al estándar (2-4 tarjetas de 40-60 palabras por módulo y 1 pregunta por módulo, no 6-8 tarjetas y 7 preguntas): ampliarlo es una decisión de diseño del equipo.
3. Ley 23 de 1982: el alcance exacto de las excepciones para la enseñanza (art. 32 y reformas de la Ley 1915 de 2018) debe confirmarlo el área jurídica; el curso solo dice que son limitadas.
4. Se intentó consultar el resumen de Hew (2009, *ETR&D*, 10.1007/s11423-008-9108-3) sobre podcasts en educación, pero la página de Springer quedó bloqueada; por eso la tarjeta del módulo 4 se apoya en la evidencia de video y lo dice.
5. Cada pregunta muestra la retroalimentación tras el primer intento y no permite reintentar; cambiarlo exige tocar JS.
6. El asistente del panel llama a `api.anthropic.com` desde el navegador sin clave; probablemente no funciona en producción (no se tocó).
7. Registrar los DOI en `docs/VERIFICACION_DOI.md` y una línea en `docs/REVISION_CURSOS.md` (no se tocaron en esta pasada). No se hizo commit ni push.

## Auditoría (Dot distinto del autor)
Fecha: 2026-10-27 · Dot_Auditor_Riguroso (no escribió el contenido) · Estado: sigue **en revisión** hasta la aprobación del docente del área. Sin commit.

- **Fuentes.** La API de Crossref quedó bloqueada en esta sesión (permiso no respondido), así que los DOI no se pudieron reconsultar ahí. Noetel et al. (2021) se confirmó en la nota oficial de AERA: 105 estudios, g = 0,28 al reemplazar y g = 0,80 al añadir video, DOI 10.3102/0034654321990713. Los demás (Mayer 2001 y 2020, Guo 2014, Brame 2016, Rey 2019, Gernsbacher 2015, Szpunar 2013, Newman y Schwarz 2018) los cotejó el auditor con su conocimiento bibliográfico: autor, año, revista, volumen, páginas y DOI coinciden, y lo que se les atribuye no va más allá de sus hallazgos. WCAG 2.2 (W3C, 2023; criterio 1.2.2, nivel A), UNESCO (2023) y Spotify for Creators (ex Anchor, noviembre de 2024) son correctos.
- **Correcciones del auditor:** se retiraron dos superlativos sin respaldo en los títulos de las tarjetas («el buscador educativo más grande» y «la red más poderosa en Colombia»). Se suavizó «audio malo fracasa / funciona». El enunciado de la q2 ya no afirma que el audio sea «el error más común». WCAG 1.2.2 quedó limitado al audio pregrabado de los videos. En la q5 («un video genera…») se cambió por «pueden salir, por ejemplo…».
- **Preguntas:** 6 con clave única (B, C, A, D, B, C), coherente con `data-correct`, sin «✓» en las opciones y con longitudes parejas; la retroalimentación es coherente. El kb plus tiene 10 ítems con una sola clave y sin la opción correcta como la más larga de forma evidente.
- **Pruebas:** HTML bien anidado (analizador propio) y kb y kb plus cargan. Playwright (Chromium, dominios externos bloqueados) a 1280 y 390 px: 0 errores de página (solo fallos de carga de recursos externos bloqueados a propósito), sin desborde y los 6 módulos completados. El botón del panel «SABI Agentes» se pulsa con un clic real (Playwright comprueba que no esté tapado), el panel abre y las pestañas no muestran TALIS, Hattie, McKinsey, HolonIQ ni «23 %». El diploma toma el nombre. `validar.js todo`: OK.
- **Pendiente:** reconsultar los DOI en Crossref cuando haya acceso. Lo demás queda como en la sección 5.
