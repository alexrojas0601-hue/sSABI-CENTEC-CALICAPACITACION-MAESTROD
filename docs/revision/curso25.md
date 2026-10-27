# Revisión del curso 25 · Comunicación con familias y comunidad (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueba el docente o el equipo responsable (con psicología educativa / Escuela de Corresponsabilidad); falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso25_comunicacion_familias.html`, `kb/sabi_curso25_comunicacion_familias.js` y `kb/plus/sabi_curso25_comunicacion_familias.js` (este último se revisó y no necesitó cambios).

## 1. Qué se encontró
- **Preguntas:** las 21 tienen 4 opciones, una sola correcta y clave válida; claves repartidas A-D (módulo 1: C A B D A C D; módulo 2: D B A C B A D; módulo 3: A C B D A C B); longitudes similares; pistas sin revelar. No hubo que reescribirlas.
- **Módulo 1 (el más antiguo):** título falso «Modulo Unico — Comunicacion con Familias y Comunidad», subtítulo cortado («… · Reunion de»), seis títulos de tarjeta sin tildes; `<title>` y barra «Comunicacion Con Fam».
- Normativa bien citada: Constitución arts. 44 y 67; Ley 115 de 1994 art. 7; Decreto 1286 de 2005; Ley 1098 de 2006; Ley 1620 de 2013 y Decreto 1965 de 2013 (tipos I, II y III y los cuatro componentes de la ruta, coherentes con el texto del decreto); Ley 1581 de 2012; Ley 2025 de 2020; Línea 141 del ICBF.
- **WhatsApp y datos:** el curso ya indica que en los grupos solo va información general y que notas, casos de convivencia, diagnósticos y fotos identificables se tratan por canal privado e institucional (Ley 1581 de 2012). Correcto.
- **«DEAR MAN»:** no aparece en el HTML ni en los kb, así que no hubo que atribuirlo a la DBT de Linehan. La comunicación no violenta (Rosenberg) ya se presenta con la advertencia de que su evidencia es limitada y sin tratarla como terapia.
- Sin neuromitos ni cifras inventadas.

## 2. Qué se corrigió
- Módulo 1: título «Fundamentos de la alianza con familias y comunidad», subtítulo completo, títulos con tildes (también las claves de `cards` en el kb). `<title>` y barra: «Comunicación con familias».
- **Tarjeta «Actualización 2026: lo que dice la evidencia»** en el módulo 1 (metaanálisis de Jeynes 2012 con su tamaño de efecto y sus límites; alianza centrada en el aprendizaje; datos propios en vez de cifras importadas) y en el módulo 3 (metaanálisis de Sheridan y otros 2019 sobre intervenciones familia-escuela; Smith y otros 2020, «qué funciona para quién»; consultar la reglamentación vigente de la Ley 2025). Módulo 2 sin tarjeta nueva: no se verificó evidencia nueva que aportara a conversaciones difíciles.
- `kb`: fuente nueva con DOI (Sheridan y otros, 2019).
- Contadores: 3 módulos · 21 preguntas (sin cambios). No se tocaron diseño, CSS ni JS.

## 3. Verificación de fuentes
DOI comprobados contra Crossref el 2026-10-24: autor, título, año y revista coinciden.

| Afirmación | Fuente | DOI |
| --- | --- | --- |
| Programas de participación familiar: 51 estudios; ≈ 0,3 DE en rendimiento, menores y mayores | Jeynes (2012). *Urban Education*, 47(4), 706-742 | 10.1177/0042085912445643 |
| Intervenciones familia-escuela: 117 estudios; efectos positivos en competencia socioconductual y salud mental; algo menores en zonas urbanas (cifras de efecto retiradas en la auditoría: no verificadas) | Sheridan, Smith, Moorman Kim, Beretvas y Park (2019). *Review of Educational Research*, 89(2), 296-332 | 10.3102/0034654318825437 |
| Metaanálisis complementario, «qué funciona para quién» (solo se cita su existencia y su enfoque) | Smith, Sheridan, Kim, Park y Beretvas (2020). *Educational Psychology Review*, 32, 511-544 | 10.1007/s10648-019-09509-w |
| Capital social y capital humano | Coleman (1988). *American Journal of Sociology*, 94, S95-S120 | 10.1086/228943 |

Sin DOI, coherentes con su edición conocida: Epstein (1995), *Phi Delta Kappan* 76(9) (la versión de 1995 no tiene DOI; el 10.1177/003172171009200326 es la reimpresión de 2010, como ya registra `docs/VERIFICACION_DOI.md`); Epstein y otros, *School, Family, and Community Partnerships* (manual, desde 1997); Henderson y Mapp (2002, SEDL); Mapp y Kuttner (2013); Bronfenbrenner (1979); Putnam (2000); Rogers y Farson (1957); Stone, Patton y Heen (1999); Fisher y Ury (1981). **No se reabrieron en la fuente en esta sesión** (cupo de búsquedas web agotado).

## 4. Pruebas
- `node -e "global.window={};require('./kb/…')"` OK en `kb/` y `kb/plus/`.
- `node taller/tools/validar.js todo`: ✓ OK (0 avisos).
- Playwright (Chromium, dominios externos bloqueados), 1280 px y 390 px: 0 errores de consola o de página, sin desborde horizontal, los 3 módulos aprobados en orden al 100 %; una respuesta incorrecta muestra la pista.

## 5. Queda para revisión humana
1. **Ley 2025 de 2020:** verificar en la fuente oficial (Secretaría del Senado o MEN) si ya tiene decreto reglamentario y qué exige sobre asistencia de las familias y número de encuentros; esas páginas no fueron accesibles en esta sesión. El glosario del kb dice «espacio formativo obligatorio en instituciones»: la obligación es de las instituciones; conviene confirmar la redacción.
2. Si se quiere evidencia sobre mensajes del docente a las familias (por ejemplo, Kraft y Rogers, 2015, *Economics of Education Review*, DOI 10.1016/j.econedurev.2015.04.001, verificado en Crossref), tomar las cifras del artículo: no se pudo leer su resumen en esta sesión y por eso no se usó.
3. Aprobación del docente responsable y de psicología educativa; auditoría de un Dot distinto del autor.
4. Registrar el DOI nuevo (Sheridan y otros 2019; también Smith y otros 2020) en `docs/VERIFICACION_DOI.md` y una línea en `docs/REVISION_CURSOS.md` (no se editaron para no chocar con los agentes en paralelo).
5. No se hizo commit ni push.

## Auditoría (Dot distinto del autor)
Fecha: 2026-10-27 · Dot_Auditor_Riguroso (no escribió el contenido). Estado tras la auditoría: sigue **en revisión** hasta la aprobación del docente y de psicología educativa.

**Verificación de fuentes.** La API de Crossref no fue accesible desde esta sesión (proxy); se usó búsqueda web y páginas institucionales:
- Jeynes (2012), *Urban Education* 47(4), 706-742, DOI 10.1177/0042085912445643 (resumen en cde.state.co.us): confirmado 51 estudios, ≈ 0,3 DE; menores 0,29 y mayores 0,35, de prekínder a grado 12.
- Sheridan y otros (2019), *Review of Educational Research*, DOI 10.3102/0034654318825437: confirmados 117 estudios y efectos sobre competencia socioconductual y salud mental, algo mayores en zonas rurales que urbanas. **No se pudieron confirmar** «592 tamaños de efecto», «≈ 0,33» ni «≈ 0,39»: se retiraron de la tarjeta y de la tabla.
- Smith y otros (2020), *Educational Psychology Review* 32, DOI 10.1007/s10648-019-09509-w: confirmado como metaanálisis complementario (77 estudios) con resultados académicos y socioemocionales.
- Ley 2025 de 2020: reglamentada por el **Decreto 459 del 10 de abril de 2024** (comunicado del MEN). Se añadió a la tarjeta del módulo 3 y al glosario del kb, que ahora dice que son las instituciones quienes deben implementar las escuelas para padres.
- Decreto 1286 de 2005 (consejo y asociación de padres), Línea 141 del ICBF y Decreto 1965 de 2013 (tipos I, II, III): correctos según conocimiento verificado; no se reabrieron en fuente oficial.

**Preguntas (21).** Cada una con 4 opciones, una sola correcta, clave correcta, retroalimentación coherente y pista sin revelar. Correcciones: 3.2 decía «Equilibrar los seis tipos:» y solo enumeraba cinco; ahora dice «Atender también crianza, voluntariado, casa, decisiones y comunidad», sin el error y con una longitud que no delata la clave. 3.4: «Mapp y Kuttner muestran» → «señalan» (marco conceptual, no estudio empírico).

**Otros.** Sin neuromitos; CNV presentada con evidencia limitada; casos ficticios; privacidad en WhatsApp correcta (Ley 1581 de 2012). Ortografía revisada.

**Pruebas.** `node` OK en kb y kb/plus; `validar.js todo` ✓ OK. Playwright 1280 y 390 px: 0 errores de página, sin desborde, pista visible ante error, 3 módulos aprobados en orden.

**Pendiente humano:** leer el Decreto 459 de 2024 en la fuente oficial antes de diseñar la escuela de familias; registrar DOI en `docs/VERIFICACION_DOI.md`.
