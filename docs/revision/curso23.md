# Revisión del curso 23 · Orientación vocacional y proyecto de vida (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueba el docente o el equipo responsable (Dot_CienciasSociales_Ciudadanas y orientación escolar); falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso23_orientacion_vocacional.html`, `kb/sabi_curso23_orientacion_vocacional.js` y `kb/plus/sabi_curso23_orientacion_vocacional.js` (este último se revisó y no necesitó cambios).

## 1. Qué se encontró
- **Preguntas:** las 21 tienen 4 opciones y una sola correcta; la clave existe; claves repartidas A-D en los tres módulos (módulo 1: D B A C B D A; módulo 2: A C B D A C B; módulo 3: D B A C D B C); longitudes similares; la pista no revela la respuesta. No hubo que reescribir preguntas.
- **Módulo 1 (el más antiguo):** el texto de las tarjetas ya estaba corregido, pero quedaban restos del curso viejo: título «Modulo Unico — Orientacion Vocacional» (falso, el curso tiene 3 módulos), subtítulo cortado («… · Educ»), «Mercado laboral Colombia 2030» y «2024-2030» (anuncian proyecciones que el curso no da), y títulos de tarjeta sin tildes. `<title>` y barra superior: «Orientacion Vocacion».
- Inconsistencia: el tipo RIASEC aparecía como «Investigador» (módulo 1, kb) e «Investigativo» (módulo 2).
- Sin neuromitos ni neuro-lenguaje. Sin cifras de empleo, salarios o Saber 11 inventadas: el curso enseña a consultarlas.

## 2. Qué se corrigió
- Título del módulo 1 → «Fundamentos de la orientación vocacional»; subtítulo completo; tarjetas «Mercado laboral colombiano — Aprender a consultarlo», «Educación superior en Colombia…», «El proyecto de vida — Más allá de la carrera», «Facilitar orientación sin ser psicólogo» (también las claves de `cards` en el kb). `<title>` y barra: «Orientación vocacional».
- «Investigativo» → «Investigador» en el módulo 2 (tarjeta, pregunta 2.3 y su retroalimentación).
- **Tarjeta nueva «Actualización 2026: lo que dice la evidencia»** en el módulo 1 (adaptabilidad de carrera como conversación, no etiqueta; casualidad planificada presentada como propuesta teórica; cifras siempre con fuente y fecha) y en el módulo 3 (metaanálisis del WOOP con su tamaño de efecto y la advertencia de sesgo de publicación; financiación siempre en la fuente oficial). Módulo 2 sin tarjeta nueva: ya trae Su y otros (2009) y fuentes oficiales; no había evidencia nueva verificada que aportara.
- `kb`: dos fuentes nuevas con DOI (Savickas y Porfeli, 2012; Wang y otros, 2021).
- Contadores: 3 módulos · 21 preguntas (sin cambios). No se tocaron diseño, CSS ni JS.

## 3. Verificación de fuentes
DOI comprobados contra Crossref (api.crossref.org) el 2026-10-24: autor, título, año y revista coinciden.

| Afirmación | Fuente | DOI |
| --- | --- | --- |
| Enfoque de ciclo vital y espacio vital; etapas; arcoíris de roles | Super (1980). *Journal of Vocational Behavior*, 16(3), 282-298 | 10.1016/0001-8791(80)90056-1 |
| Teoría del desarrollo vocacional (línea de tiempo) | Super (1953). *American Psychologist*, 8(5), 185-190 | 10.1037/h0056046 |
| Teoría de la elección vocacional, origen de RIASEC | Holland (1959). *Journal of Counseling Psychology*, 6(1), 35-45 | 10.1037/h0040767 |
| Diseño de vida; adaptabilidad | Savickas y otros (2009). *Journal of Vocational Behavior*, 75(3), 239-250 | 10.1016/j.jvb.2009.04.004 |
| Escala de adaptabilidades de carrera, 4 dimensiones, 13 países | Savickas y Porfeli (2012). *Journal of Vocational Behavior*, 80(3), 661-673 | 10.1016/j.jvb.2012.01.011 |
| Casualidad planificada (Krumboltz) | Mitchell, Levin y Krumboltz (1999). *Journal of Counseling & Development*, 77(2), 115-124 | 10.1002/j.1556-6676.1999.tb02431.x |
| Diferencias promedio de intereses por sexo (tendencias, no destino) | Su, Rounds y Armstrong (2009). *Psychological Bulletin*, 135(6), 859-884 | 10.1037/a0017364 |
| Intenciones de implementación | Gollwitzer (1999). *American Psychologist*, 54(7), 493-503 | 10.1037/0003-066X.54.7.493 |
| Contraste mental + intenciones en adolescentes | Duckworth y otros (2011). *Educational Psychology*, 31(1), 17-26 | 10.1080/01443410.2010.506003 |
| «Yo posibles» y resultados académicos | Oyserman, Bybee y Terry (2006). *JPSP*, 91(1), 188-204 | 10.1037/0022-3514.91.1.188 |
| Metaanálisis MCII: 21 artículos, 24 efectos independientes, 15 907 participantes, g = 0,336 (0,465 con interacción, 0,277 con documento), sesgo de publicación | Wang, Wang y Gai (2021). *Frontiers in Psychology*, 12, 565202 | 10.3389/fpsyg.2021.565202 |
| Teoría social cognitiva de la carrera | Lent, Brown y Hackett (1994). *Journal of Vocational Behavior*, 45(1), 79-122 | 10.1006/jvbe.1994.1027 |

Normativa (citada con número y año, sin cambios): Ley 30 de 1992, Ley 115 de 1994 (arts. 13 y 32), Ley 749 de 2002, Ley 1014 de 2006, Ley 1064 de 2006, Ley 1098 de 2006, Ley 1581 de 2012, Ley 1620 de 2013, Ley 2307 de 2023 (gratuidad en la matrícula). Se contrastaron con conocimiento previo verificado; **no se pudieron reabrir en la fuente oficial en esta sesión** (se agotó el cupo de búsquedas web y las páginas oficiales no respondieron).

## 4. Pruebas
- `node -e "global.window={};require('./kb/…')"` OK en `kb/` y `kb/plus/`.
- `node taller/tools/validar.js todo`: ✓ OK (0 avisos).
- Playwright (Chromium, dominios externos bloqueados), 1280 px y 390 px: 0 errores de consola o de página, sin desborde horizontal (página y tarjetas), los 3 módulos aprobados en orden al 100 % con el botón «Siguiente módulo»; una respuesta incorrecta muestra la pista.

## 5. Queda para revisión humana
1. **Lineamientos de orientación socio-ocupacional del MEN:** el curso usa la expresión sin citar documento ni año. No se pudo verificar el nombre exacto y el año del documento (páginas del MEN no accesibles en esta sesión); si se quiere citarlo, tomarlo de mineducacion.gov.co.
2. Reverificar en la fuente oficial el alcance vigente de la Ley 2307 de 2023 y su reglamentación, el estado de Generación E, las líneas del ICETEX y el nombre actual del programa de articulación SENA-media (doble titulación).
3. Aprobación del docente del área y de orientación escolar; auditoría de un Dot distinto del autor.
4. Registrar los DOI nuevos (Savickas y Porfeli 2012; Wang y otros 2021) en `docs/VERIFICACION_DOI.md` y una línea en `docs/REVISION_CURSOS.md` (no se editaron para no chocar con los agentes en paralelo).
5. No se hizo commit ni push.

## Auditoría (Dot distinto del autor)
Fecha: 2026-10-27 · Dot_Auditor_Riguroso (no escribió el contenido). Estado tras la auditoría: sigue **en revisión** hasta la aprobación del docente y de orientación escolar.

**Verificación de fuentes.** La API de Crossref no fue accesible desde esta sesión (proxy); se verificó en la fuente del editor o en búsqueda web:
- Metaanálisis WOOP: Wang, G., Wang, Y. y Gai, X. (2021). *A Meta-Analysis of the Effects of Mental Contrasting With Implementation Intentions on Goal Attainment*. *Frontiers in Psychology*, 12, 565202. DOI 10.3389/fpsyg.2021.565202 (página de Frontiers). Confirmado: 24 tamaños de efecto independientes de 21 artículos, 15 907 participantes, g = 0,336; interacción con experimentador g = 0,465 frente a documento g = 0,277 (único moderador significativo); sesgo de publicación (Egger significativo; ajustado por *trim-and-fill* g = 0,242).
- Savickas y Porfeli (2012), DOI 10.1016/j.jvb.2012.01.011, 13 países: coherente con la referencia conocida; no se reabrió en Crossref en esta sesión.
- Ley 2307 de 2023: búsqueda en fuentes oficiales (Rama Judicial, Función Pública) confirma que es la ley de gratuidad en la matrícula de pregrado en instituciones públicas. Generación E: no se pudo verificar el año exacto de creación; se reformuló a «con convocatorias desde 2019». ICETEX: el curso no da cifras ni líneas concretas (correcto).

**Correcciones de la auditoría.**
1. Tarjeta WOOP (módulo 3): «21 estudios» → «21 artículos (24 tamaños de efecto independientes…)»; «interacción con otra persona» → «interacción con un facilitador», fiel al artículo (experimentador frente a documento). Tabla de fuentes ajustada.
2. Tarjeta de financiación (módulo 3): «Generación E… creado en 2019» → «con convocatorias desde 2019».
3. Preguntas 3.4 y 3.7: la opción correcta era la más larga y delataba la clave; se acortaron (contenido igual).

**Preguntas (21).** Cada una con 4 opciones, una sola correcta, clave correcta, retroalimentación coherente con la clave y pista que orienta sin revelar. Hexágono RIASEC (vecinos I-A; opuestos R-S, I-E, A-C) correcto. Observación menor no corregida: el módulo 1 trata de «tú» y los módulos 2 y 3 de «usted».

**Otros.** Sin neuromitos; casos ficticios (Mariana, Andrés, Daniela, Johan, Laura…); ortografía revisada en el texto visible.

**Pruebas.** `node` OK en los kb; `node taller/tools/validar.js todo` ✓ OK (0 avisos). Playwright (Chromium, dominios externos bloqueados), 1280 y 390 px: 0 errores de página (solo avisos de recursos externos bloqueados a propósito), sin desborde horizontal, una respuesta incorrecta muestra la pista y los 3 módulos se aprueban en orden con «Siguiente módulo».

**Pendiente humano:** lo de la sección 5 se mantiene (documento de lineamientos socio-ocupacionales del MEN, estado vigente de Generación E e ICETEX, registro de DOI).
