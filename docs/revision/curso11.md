# Revisión del curso 11 · Inglés C1 + Didáctica para enseñar inglés (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueba el docente del área de inglés; falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso11_ingles_c1_didactica.html` (canónico), `kb/sabi_curso11_ingles_c1_didactica.js` y `kb/plus/sabi_curso11_ingles_c1_didactica.js` (revisado, sin cambios). `sabi_curso11_ingles_c1.html` es una redirección y no se tocó.

Estructura distinta a la de otros cursos: 12 tarjetas `mod-card` con `mod-body`, dos `concept-card` y dos `actividad` por módulo, una sola pregunta por módulo con `ans(this,'X','qfbN')` (12 preguntas), sin bloqueo entre módulos, diploma, avatar con voz, Club de conversación y panel «SABI Agentes». Se respetó esa estructura.

## 1. Qué se encontró
- **El contenido de los 12 módulos ya era sólido** (pasada anterior: CLIL, TBLT, MCER 2020, Lyster y Ranta, Derwing y Munro, Gilmore, Cook, Kounin, EPOSTL, Guía 22), con tildes y casos situados.
- **Panel «SABI Agentes» con cifras inventadas:** «TALIS 2025 (55 países)… d=0.52», «Hattie Visible Learning 2024, 300 millones de estudiantes, d=0.70», «240M estudiantes», «McKinsey 2025: +76 %», «34 % menos rotación y 28 % más satisfacción familiar», «Retención: +40 % vs clases largas», «estás en el 23 % de docentes que terminan», «HolonIQ 2026: tendencia #1», «OCDE Digital Education Outlook 2026» con cita no verificable, «d=0.48 socioemocional», y el mensaje sistema del asistente le pedía «al menos UN dato de investigación específico» de esas fuentes (invita a inventar).
- **Cita del encabezado alterada:** a la frase atribuida a Mark Van Doren («The art of teaching is the art of assisting discovery») se le añadió una segunda parte inexistente y se la atribuyó a «Preparación APTIS for Teachers, MEN Colombia».
- **Descriptor C1 mal citado:** «can express ideas fluently…»; la escala global dice «Can express him/herself fluently and spontaneously without much obvious searching for expressions».
- **Ellis (2003)** como autor de «cuatro criterios»: los cuatro criterios son de Ellis (2009); el libro de 2003 propone seis rasgos.
- Título «Pronunciación avanzada y acento neutro» contradice el módulo (que explica que el acento neutro no es la meta). Diploma: «8 semanas · 40 horas» frente a 12 semanas del curso. «Con datos reales» sin datos; público «todo docente sin importar el área» en un curso C1 de inglés.
- **Preguntas:** 4 opciones y clave correcta y repartida, pero en 11 de 12 la correcta era claramente la más larga (hasta el doble).
- kb: Harmer sin año (pendiente de `VERIFICACION_DOI.md`).

## 2. Qué se corrigió
- Panel de agentes: las 10 «tendencias» se reemplazaron por hallazgos con DOI verificado o documentos oficiales; los 24 mensajes del coach por rol, sin cifras inventadas (con fuentes verificadas o consejos sin número, rutas institucionales en salud mental y aviso sobre el neuromito VAK); alertas sin «23 %»; el mensaje sistema del asistente ahora prohíbe inventar cifras o estudios y neuromitos. No se cambió el diseño ni la lógica.
- Cita del encabezado: solo la frase real, «Frase atribuida a Mark Van Doren».
- Descriptor C1 citado literalmente (escala global, tabla 1). Ellis (2009) con DOI en la introducción, la tarjeta y la pregunta del módulo 3.
- Título del módulo 6: «Pronunciación avanzada: inteligibilidad antes que acento». Diploma: «12 semanas · 12 módulos». Tarjetas de presentación precisadas.
- **Una tarjeta «Actualización 2026: lo que dice la evidencia» en los módulos 1 a 10** (misma estructura `concept-card`, con nota «Contenido en revisión»). Los módulos 11 y 12 no la necesitaban (el 11 ya trata el Volumen complementario 2020). No se añadieron preguntas.
- 12 preguntas: opciones reescritas con longitudes similares (73-90 caracteres), mismo contenido y misma clave; retroalimentación intacta y coherente.
- `kb/sabi_curso11_ingles_c1_didactica.js`: fuentes (7) con Harmer (2015, 5.ª ed.), Lyster y Ranta (1997) y Ellis (2009) con DOI.

## 3. Fuentes y DOI verificados
DOI comprobados el 2026-10-24 contra Crossref (`api.crossref.org/works/<DOI>`, vía WebFetch): autor, título, año y revista coinciden; resultados tomados del resumen.

| Módulo | Afirmación | Fuente | DOI |
| --- | --- | --- | --- |
| 1 | Autoevaluación: resultados variables; su validez depende de la experiencia con la destreza (60 correlaciones) | Ross (1998). *Language Testing*, 15(1), 1-20 | 10.1177/026553229801500101 |
| 2 | Los estudios de resultados de CLIL todavía son escasos | Pérez-Cañado (2012). *Int. J. of Bilingual Education and Bilingualism*, 15(3), 315-341 | 10.1080/13670050.2011.630064 |
| 3 | Cuatro criterios de tarea; TBLT no excluye la gramática | Ellis (2009). *Int. J. of Applied Linguistics*, 19(3), 221-246 | 10.1111/j.1473-4192.2009.00231.x |
| 3 | Programas TBLT: 52 estudios, d = 0,93, percepciones positivas; moderadores | Bryfonski y McKay (2019). *Language Teaching Research*, 23(5), 603-632 | 10.1177/1362168817744389 |
| 4 | Retroalimentación oral: efectos duraderos, mayores con pistas que con reformulaciones | Lyster y Saito (2010). *SSLA*, 32(2), 265-302 | 10.1017/S0272263109990520 |
| 4 | Seis tipos de retroalimentación; reformulación poco seguida de reparación | Lyster y Ranta (1997). *SSLA*, 19(1), 37-66 | 10.1017/S0272263197001034 |
| 4 | Evaluación formativa (panel) | Black y Wiliam (1998). *Assessment in Education*, 5(1), 7-74 | 10.1080/0969595980050102 |
| 5 | Retroalimentación escrita mejora la precisión; mediada por el nivel (21 estudios) | Kang y Han (2015). *The Modern Language Journal*, 99(1), 1-18 | 10.1111/modl.12189 |
| 5 | Academic Word List | Coxhead (2000). *TESOL Quarterly*, 34(2), 213-238 | 10.2307/3587951 |
| 6 | Instrucción en pronunciación: d = 0,89 / 0,80 (86 informes) | Lee, Jang y Plonsky (2015). *Applied Linguistics*, 36(3), 345-366 | 10.1093/applin/amu040 |
| 6 | Acento, comprensibilidad e inteligibilidad | Munro y Derwing (1995). *Language Learning*, 45(1), 73-97 | 10.1111/j.1467-1770.1995.tb00963.x |
| 6 | Principio de inteligibilidad | Levis (2005). *TESOL Quarterly*, 39(3), 369-377 | 10.2307/3588485 |
| 8 | Materiales auténticos | Gilmore (2007). *Language Teaching*, 40(2), 97-118 | 10.1017/S0261444807004144 |
| 8 | Cobertura léxica: relación lineal; 98 % para textos académicos (661 lectores) | Schmitt, Jiang y Grabe (2011). *The Modern Language Journal*, 95(1), 26-43 | 10.1111/j.1540-4781.2011.01146.x |
| 9 | Uso planificado de la L1 | Cook (2001). *The Canadian Modern Language Review*, 57(3), 402-423 | 10.3138/cmlr.57.3.402 |
| 9 | Revisión del uso de la lengua propia en clase | Hall y Cook (2012). *Language Teaching*, 45(3), 271-308 | 10.1017/S0261444812000067 |
| 10 | Práctica espaciada en L2 (48 experimentos) | Kim y Webb (2022). *Language Learning*, 72(1), 269-319 | 10.1111/lang.12479 |

Sin DOI (documentos oficiales o libros): Consejo de Europa, MCER (2001, escala global verificada en coe.int) y Volumen complementario (2020, escalas de respuesta a textos creativos incluida la literatura); MEN, Guía 22 (2006); Ley 1651 de 2013; UNESCO (2023), orientaciones sobre IA generativa; Coyle, Hood y Marsh (2010, DOI 10.1017/9781009024549 ya registrado); Harmer (2015), 5.ª ed., Pearson (verificado en catálogos).

## 4. Pruebas
- `node -e "global.window={};require(...)"` OK en `kb/` y `kb/plus/`.
- Playwright (Chromium, dominios externos y `api.anthropic.com` bloqueados), 1280 y 390 px: 0 errores de consola o de página, sin desborde horizontal; los 12 módulos abren y su pregunta marca la opción correcta y muestra la retroalimentación; el panel de agentes (pestañas Scholar y Coach) ya no muestra TALIS, Hattie, McKinsey ni HolonIQ.
- `node taller/tools/validar.js todo`: OK (0 avisos).

## 5. Queda para revisión humana
1. Aprobación del docente de inglés y auditoría de un Dot distinto del autor.
2. El curso 17 tiene el mismo panel «SABI Agentes» con las mismas cifras inventadas: conviene aplicarle esta corrección (no se tocó por estar fuera del alcance).
3. La pregunta de cada módulo muestra la misma retroalimentación (con la clave) tras cualquier intento y no permite reintentar; cambiarlo exige tocar JS: decisión del equipo.
4. El Club de conversación y el asistente llaman a `api.anthropic.com` desde el navegador sin clave; probablemente no funcionan en producción (no se tocó).
5. Registrar los DOI en `docs/VERIFICACION_DOI.md` (resuelve el pendiente del año de Harmer) y una línea en `docs/REVISION_CURSOS.md`.
6. No se hizo commit ni push.

## Auditoría (Dot distinto del autor)
Fecha: 2026-10-24 · `Dot_Auditor_Riguroso` (no escribió este contenido) · Alcance: panel «SABI Agentes», tarjetas «Actualización 2026» de los módulos 1-10 y las 12 preguntas.

**DOI verificados contra Crossref (vía WebFetch):** Ross (1998, 60 correlaciones; validez según experiencia con la destreza), Pérez-Cañado (2012; el resumen habla de «paucity of research»), Ellis (2009), Bryfonski y McKay (2019; 52 estudios, d = 0,93, moderadores), Lyster y Saito (2010; 15 estudios, N = 827, pistas > reformulación, más en jóvenes), Kang y Han (2015; 21 estudios; depende del nivel, el contexto y el género textual), Lee, Jang y Plonsky (2015; 86 informes, d ≈ 0,89/0,80; mayor con retroalimentación, intervenciones largas y medidas controladas), Schmitt, Jiang y Grabe (2011; 661 lectores, 8 países, 98 %), Kim y Webb (2022; 48 experimentos, 3.411 participantes), Hall y Cook (2012), Cook (2001), Black y Wiliam (1998). Metadatos y resultados coinciden con lo que dice el curso. Matiz aceptado: «menor en habla espontánea» es paráfrasis de «mayor en medidas más controladas».

**Preguntas:** 12/12 con una sola clave, correcta y coherente con la retroalimentación; sin opciones duplicadas. La correcta sigue siendo la más larga en 4 de 12 (q1, q3, q7, q10), por pocos caracteres: aceptable.

**Panel:** sin TALIS, Hattie, McKinsey, HolonIQ, «23 %» ni «240M»; el mensaje sistema prohíbe inventar cifras y neuromitos; VAK citado solo para refutarlo. Sin neuromitos ni errores de ortografía en lo revisado.

**Corregido por el auditor:**
1. El botón «SABI Agentes» (`#sabiAgentes`, abajo a la izquierda) quedaba tapado por el botón y la pila de `sabi_dots.js` (`#sdots-btn`, `#sd-stack`): en computador y en celular no se podía abrir el panel con un clic real. Se subió a `bottom:164px` (solo CSS del curso 11). Ahora abre y el panel (360 × 493 px) cabe entero a 1280 y a 390 px.
2. `kb/sabi_curso11_ingles_c1_didactica.js`: se repuso la fuente «MEN (2016), DBA de Inglés, grados 6.° a 11.°», que se había borrado aunque el curso nombra los DBA en la presentación.

**Pruebas:** Playwright (Chromium, dominios externos bloqueados), 1280 y 390 px: 0 errores de página (solo fallan las cargas externas bloqueadas a propósito); sin desborde horizontal; 12/12 preguntas marcan la correcta y muestran la retroalimentación; pestañas Auditor, Scholar y Coach funcionan. `node taller/tools/validar.js todo`: OK.

**Pendiente humano:** la retroalimentación sigue mostrando la clave tras un error y no se puede reintentar (JS, decisión del equipo); `sabi_dots.js` y el FAB del chat se amontonan en las esquinas inferiores en todos los cursos: conviene un ajuste global. Veredicto: **apto para revisión del docente**.
