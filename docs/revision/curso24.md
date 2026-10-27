# Revisión del curso 24 · Investigación-acción en el aula (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueba el docente o el equipo responsable; falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso24_investigacion_accion.html`, `kb/sabi_curso24_investigacion_accion.js` y `kb/plus/sabi_curso24_investigacion_accion.js`.

## 1. Qué se encontró
- **Preguntas:** las 21 tienen 4 opciones, una sola correcta y clave válida; claves repartidas A-D (módulo 1: D B A C B D A; módulo 2: B D A C A D B; módulo 3: C A D B C B A); longitudes similares; pistas que orientan sin revelar. No hubo que reescribirlas.
- **Módulo 1 (el más antiguo):** título falso «Modulo Unico — Investigacion Accion en el Aula», subtítulo cortado («Metodologia · … · »), introducción sin tildes y contradictoria («transforma su aula en laboratorio… no requiere laboratorio»), siete títulos de tarjeta sin tildes; `<title>` y barra «Investigacion Accion». La tarjeta «Ondas Colciencias» usaba el nombre antiguo de la entidad en el título.
- **Afirmación imprecisa:** «Kurt Lewin acuñó el término en 1946» (en la tarjeta, el kb, el audio y una flashcard). El artículo de 1946 es el que dio a conocer la investigación-acción; que «acuñara» el término ese año no está establecido.
- Sin neuromitos ni cifras inventadas. La ética con menores (consentimiento de acudientes, asentimiento, Ley 1581 de 2012 y Decreto 1377 de 2013, Ley 1098 de 2006) estaba bien planteada.

## 2. Qué se corrigió
- Módulo 1: título «Fundamentos de la investigación-acción en el aula», subtítulo completo, introducción reescrita con tildes, títulos con tildes (también las claves de `cards` en el kb); «Programa Ondas y redes de maestros investigadores». `<title>` y barra: «Investigación-acción».
- Lewin: «la dio a conocer en su artículo de 1946 «Action research and minority problems»» en HTML, kb y audio; flashcard reformulada («¿Con qué artículo de 1946 dio a conocer Kurt Lewin la investigación-acción?»).
- **Tarjeta «Actualización 2026: lo que dice la evidencia»** en los tres módulos: (1) nueva edición de Kemmis, McTaggart y Nixon (2014), la espiral de Lewin y el alcance situado de las conclusiones; (2) análisis temático reflexivo de Braun y Clarke (2019) y asentimiento real del estudiante; (3) ensayo aleatorizado de *lesson study* con recursos basados en investigación (Lewis y Perry, 2017), presentado como un solo estudio. Sin preguntas nuevas.
- `kb`: fuentes nuevas con DOI (Braun y Clarke 2019; Kemmis, McTaggart y Nixon 2014) y Decreto 1377 de 2013 junto a la Ley 1581.
- Contadores: 3 módulos · 21 preguntas (sin cambios). No se tocaron diseño, CSS ni JS.

## 3. Verificación de fuentes
DOI comprobados contra Crossref el 2026-10-24: autor, título, año y revista coinciden.

| Afirmación | Fuente | DOI |
| --- | --- | --- |
| Lewin da a conocer la investigación-acción (espiral de planificación, acción y búsqueda de hechos) | Lewin (1946). *Journal of Social Issues*, 2(4), 34-46 | 10.1111/j.1540-4560.1946.tb02295.x |
| Investigación Acción Participativa en América Latina | Fals-Borda (1987). *International Sociology*, 2(4), 329-347 | 10.1177/026858098700200401 |
| Análisis temático en seis fases | Braun y Clarke (2006). *Qualitative Research in Psychology*, 3(2), 77-101 | 10.1191/1478088706qp063oa |
| Análisis temático reflexivo: los temas se construyen; subjetividad como recurso | Braun y Clarke (2019). *Qualitative Research in Sport, Exercise and Health*, 11(4), 589-597 | 10.1080/2159676X.2019.1628806 |
| Nueva edición: investigación-acción crítica y participativa | Kemmis, McTaggart y Nixon (2014). Springer | 10.1007/978-981-4560-67-2 |
| *Lesson study* con kit de fracciones: 39 equipos aleatorizados; mejora en conocimiento de docentes y estudiantes en unos tres meses | Lewis y Perry (2017). *Journal for Research in Mathematics Education*, 48(3), 261-299 | 10.5951/jresematheduc.48.3.0261 |

Obras sin DOI (libros), coherentes con su edición conocida: Stenhouse (1975, Heinemann; Morata en español); Kemmis y McTaggart (1988, Deakin; Laertes); Elliott (1990, Morata; 1991, Open University Press); Carr y Kemmis (1986); Schön (1983); Porlán y Martín (1991); Stigler y Hiebert (1999); Brookhart (2013); Blythe, Allen y Powell (1999); Denzin (1970); Lave y Wenger (1991); Wenger (1998). Programa Ondas (Colciencias, 2001) y Minciencias (Ley 1951 de 2019): sin cambios. **No se reabrieron en la fuente en esta sesión** (cupo de búsquedas web agotado).

## 4. Pruebas
- `node -e "global.window={};require('./kb/…')"` OK en `kb/` y `kb/plus/`.
- `node taller/tools/validar.js todo`: ✓ OK (0 avisos).
- Playwright (Chromium, dominios externos bloqueados), 1280 px y 390 px: 0 errores de consola o de página, sin desborde horizontal, los 3 módulos aprobados en orden al 100 %; una respuesta incorrecta muestra la pista.

## 5. Queda para revisión humana
1. Confirmar la disponibilidad vigente del Programa Ondas en el Valle del Cauca y las bases del Premio Compartir antes de recomendarlos.
2. Si se quiere citar normativa específica sobre investigación con menores más allá de la Ley 1581 y el Decreto 1377 (por ejemplo, la Resolución 8430 de 1993 del Ministerio de Salud, pensada para investigación en salud), verificarla antes; no se añadió.
3. Coherencia de casos: el kb y el audio tenían un «profesor Julián» de Inglés en 6.° distinto del Julián de Matemáticas en 8.° del módulo 3; en el kb y el audio pasó a llamarse «profesor Hernán» (ficticio). Revisar que el cambio se lea bien en el audio.
4. Aprobación del docente responsable y auditoría de un Dot distinto del autor.
5. Registrar los DOI nuevos en `docs/VERIFICACION_DOI.md` y una línea en `docs/REVISION_CURSOS.md` (no se editaron para no chocar con los agentes en paralelo).
6. No se hizo commit ni push.

## Auditoría (Dot distinto del autor)
Fecha: 2026-10-27 · Dot_Auditor_Riguroso (no escribió el contenido). Estado tras la auditoría: sigue **en revisión** hasta la aprobación del docente responsable.

**Verificación de fuentes.** La API de Crossref no fue accesible desde esta sesión (proxy); se usó la página del editor o búsqueda web:
- Lewis y Perry (2017), *Lesson Study to Scale Up Research-Based Knowledge: A Randomized, Controlled Trial of Fractions Learning*, JRME 48(3), DOI 10.5951/jresematheduc.48.3.0261 (página de NCTM): confirmado el ensayo aleatorizado con 39 equipos de educadores en EE. UU. y el kit de recursos sobre fracciones. **No se pudo confirmar** el dato «en unos tres meses»: se retiró y «encontraron que… aumentó» pasó a «informan que… mejoró».
- Kemmis, McTaggart y Nixon (2014), Springer, DOI 10.1007/978-981-4560-67-2; Braun y Clarke (2019), *QRSEH* 11(4), DOI 10.1080/2159676X.2019.1628806: coherentes con las referencias conocidas; no se reabrieron en Crossref en esta sesión.
- Programa Ondas (Colciencias, 2001; hoy Minciencias, Ley 1951 de 2019): correcto, con la advertencia de consultar la convocatoria vigente.
- Ética con menores: consentimiento de acudientes + asentimiento del estudiante; Ley 1581 de 2012; Decreto 1377 de 2013 (art. 12: interés superior y valoración de la opinión del menor según su madurez); Ley 1098 de 2006. Correcto y prudente; no se citó la Resolución 8430 de 1993 (bien).

**Preguntas (21).** Cada una con 4 opciones, una sola correcta, clave correcta, retroalimentación coherente y pista sin revelar; longitudes equilibradas. Cálculo de la 2.6 (de 7 a 10 = 42,9 %) correcto. No hubo cambios.

**Otros.** Sin neuromitos; casos ficticios (Marcela, Andrés, Lina, Hernán); el cambio Julián → Hernán en kb y audio es coherente. Ortografía revisada.

**Pruebas.** `node` OK en kb y kb/plus; `validar.js todo` ✓ OK. Playwright 1280 y 390 px: 0 errores de página, sin desborde, pista visible ante error, 3 módulos aprobados en orden.
