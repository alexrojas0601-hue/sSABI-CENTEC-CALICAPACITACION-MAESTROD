# Revisión del curso 16 · Neuroeducación aplicada (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueba el docente o el equipo responsable; falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso16_neuroeducacion.html`, `kb/sabi_curso16_neuroeducacion.js` (tarjetas del módulo 1 sincronizadas con el HTML) y `kb/plus/sabi_curso16_neuroeducacion.js` (introducción del módulo 1 y un párrafo de la audio-lección).

## 1. Qué se encontró
Se aplicó con máximo rigor la sección 3 del estándar (neuromitos y neuro-lenguaje).
- **No hay preguntas rotas:** las 21 tienen 4 opciones, una sola correcta, claves repartidas (módulo 1: B-C-A-D-B-A-C; módulo 2: B-D-A-C-A-B-C; módulo 3: A-C-D-B-A-C-D) y longitudes similares. No hay cifras inventadas: todas las citas de los tres módulos corresponden a artículos reales con año y revista correctos.
- **Neuro-lenguaje y sobreafirmaciones (módulo 1):** título del módulo «Bloque Principal — Neuroeducacion Aplicada» y subtítulo truncado («Dopamina · A»); tarjetas «Motivación intrínseca y el sistema dopaminérgico», «el cortisol como enemigo del aula» y «10 estrategias con base neurocientífica» (las estrategias vienen de la ciencia cognitiva, no de la neurociencia); la introducción afirmaba que las conexiones neuronales «se fortalecen» con recuperación y espaciado, un mecanismo que esos estudios no midieron. La tarjeta de Schultz y la de Lupien no decían que la evidencia viene de monos, de animales o de estudios correlacionales. «Varias» estrategias «de alta utilidad» según Dunlosky: solo dos lo son.
- **Ortografía:** títulos de tarjetas, `<title>` y etiqueta del menú sin tildes («Atencion», «Motivacion intrinseca», «El sueno», «Estres», «Neuroeducacion Aplic»).
- La retroalimentación positiva del módulo 1 repite «✅» (lo agrega `taller/tools/aplicar_plus.py`); se dejó así para que una nueva ejecución de la herramienta no lo deshaga.

## 2. Qué se corrigió o añadió
- Módulo 1: título «Neuroeducación aplicada: lo que sí sabemos», subtítulo completo, introducción nueva (la neurociencia explica; la psicología cognitiva y la investigación en aula prescriben), 5 títulos corregidos, precisiones: Hubel y Wiesel (gatos), Schultz y otros 1997 (registros en monos; de ahí no se deriva técnica de aula), Lupien y otros 2009 (evidencia animal y correlacional), Dunlosky y otros 2013 (alta utilidad: recuperación y espaciado; moderada: intercalado, elaboración, autoexplicación).
- **Una tarjeta «Actualización 2026» por módulo** (módulo 1: 8 tarjetas; módulos 2 y 3: 7):
  - M1: Bowers (2016) y el debate neurociencia-aula (presentado como posición discutida); Newton y Salvi (2020): 89,1 % de 15.405 educadores cree en ajustar la enseñanza a estilos y las intervenciones reducen la creencia un 37 %; Macdonald y otros (2017); las seis estrategias de Weinstein, Madan y Sumeracki (2018).
  - M2: Agarwal, Nunes y Blunt (2021) y Yang y otros (2021): la recuperación funciona en aulas reales; límites del intercalado (Brunmair y Richter, 2019); ejemplos concretos y codificación dual (no son «estilos»); menos evidencia con niños pequeños.
  - M3: Howard y otros (2021), metaanálisis de autodeterminación (344 muestras, 223.209 estudiantes; datos correlacionales); qué permite y qué no la evidencia sobre estrés (nada de «bajar el cortisol» en el aula); sueño y ruta de orientación escolar sin diagnosticar; celulares: lo robusto es el costo de alternar tareas.
- No se añadieron preguntas (contadores: 3 módulos · 21 preguntas, coherentes). No se tocaron diseño, CSS ni JS.
- `kb/sabi_curso16_neuroeducacion.js`: claves y textos de `cards` iguales a los nuevos títulos y precisiones del HTML. `kb/plus/…`: `intro` igual al HTML (para que `aplicar_plus.py` no reponga la anterior) y la audio-lección ya no dice que «aprender es cambiar conexiones que se fortalecen cuando…».

## 3. DOI verificados (Crossref, 2026-10-24; autor, título, año y revista coinciden)

| Fuente | DOI |
| --- | --- |
| Miller (1956). *Psychological Review*, 63(2), 81-97 | 10.1037/h0043158 |
| Cowan (2001). *Behavioral and Brain Sciences*, 24(1), 87-114 | 10.1017/S0140525X01003922 |
| Schultz, Dayan y Montague (1997). *Science*, 275(5306), 1593-1599 | 10.1126/science.275.5306.1593 |
| Lupien, McEwen, Gunnar y Heim (2009). *Nature Reviews Neuroscience*, 10(6), 434-445 | 10.1038/nrn2639 |
| Diekelmann y Born (2010). *Nature Reviews Neuroscience*, 11(2), 114-126 | 10.1038/nrn2762 |
| Howard-Jones (2014). *Nature Reviews Neuroscience*, 15(12), 817-824 | 10.1038/nrn3817 |
| Paruthi y otros (2016). *Journal of Clinical Sleep Medicine*, 12(6), 785-786 | 10.5664/jcsm.5866 |
| Academia Americana de Pediatría (2014). School start times for adolescents. *Pediatrics*, 134(3), 642-649 | 10.1542/peds.2014-1697 |
| Weinstein, Madan y Sumeracki (2018). *Cognitive Research: Principles and Implications*, 3, 2 | 10.1186/s41235-017-0087-y |
| Adesope, Trevisan y Sundararajan (2017). *Review of Educational Research*, 87(3), 659-701 | 10.3102/0034654316689306 |
| Cepeda, Vul, Rohrer, Wixted y Pashler (2008). *Psychological Science*, 19(11), 1095-1102 | 10.1111/j.1467-9280.2008.02209.x |
| Rohrer y Taylor (2007). *Instructional Science*, 35(6), 481-498 | 10.1007/s11251-007-9015-8 |
| Kornell y Bjork (2008). *Psychological Science*, 19(6), 585-592 | 10.1111/j.1467-9280.2008.02127.x |
| Brunmair y Richter (2019). *Psychological Bulletin*, 145(11), 1029-1052 | 10.1037/bul0000209 |
| Sweller y Cooper (1985). *Cognition and Instruction*, 2(1), 59-89 | 10.1207/s1532690xci0201_3 |
| Kalyuga, Ayres, Chandler y Sweller (2003). *Educational Psychologist*, 38(1), 23-31 | 10.1207/S15326985EP3801_4 |
| Renkl y Atkinson (2003). *Educational Psychologist*, 38(1), 15-22 | 10.1207/S15326985EP3801_3 |
| Posner y Petersen (1990). *Annual Review of Neuroscience*, 13, 25-42 | 10.1146/annurev.ne.13.030190.000325 |
| Ophir, Nass y Wagner (2009). *PNAS*, 106(37), 15583-15587 | 10.1073/pnas.0903620106 |
| Sana, Weston y Cepeda (2013). *Computers & Education*, 62, 24-31 | 10.1016/j.compedu.2012.10.003 |
| Wilson y Korn (2007). *Teaching of Psychology*, 34(2), 85-89 | 10.1080/00986280701291291 |
| Immordino-Yang y Damasio (2007). *Mind, Brain, and Education*, 1(1), 3-10 | 10.1111/j.1751-228X.2007.00004.x |
| Vogel y Schwabe (2016). *npj Science of Learning*, 1, 16011 | 10.1038/npjscilearn.2016.11 |
| Smith, Floerke y Thomas (2016). *Science*, 354(6315), 1046-1048 | 10.1126/science.aah5067 |
| Ramirez y Beilock (2011). *Science*, 331(6014), 211-213 | 10.1126/science.1199427 |
| Hulleman y Harackiewicz (2009). *Science*, 326(5958), 1410-1412 | 10.1126/science.1177067 |
| Yeager, Hanselman, Walton y otros (2019). *Nature*, 573(7774), 364-369 | 10.1038/s41586-019-1466-y |
| Nielsen y otros (2013). *PLoS ONE*, 8(8), e71275 | 10.1371/journal.pone.0071275 |
| Bowers (2016). *Psychological Review*, 123(5), 600-612 | 10.1037/rev0000025 |
| Newton y Salvi (2020). *Frontiers in Education*, 5, 602451 (cifras tomadas del resumen) | 10.3389/feduc.2020.602451 |
| Macdonald, Germine, Anderson, Christodoulou y McGrath (2017). *Frontiers in Psychology*, 8, 1314 | 10.3389/fpsyg.2017.01314 |
| Agarwal, Nunes y Blunt (2021). *Educational Psychology Review*, 33(4), 1409-1453 | 10.1007/s10648-021-09595-9 |
| Yang, Luo, Vadillo, Yu y Shanks (2021). *Psychological Bulletin*, 147(4), 399-435 | 10.1037/bul0000309 |
| Howard, Bureau, Guay, Chong y Ryan (2021). *Perspectives on Psychological Science*, 16(6), 1300-1323 (cifras tomadas del resumen) | 10.1177/1745691620966789 |

Ya registrados en `docs/VERIFICACION_DOI.md` (no se repitió la consulta): Dekker y otros (2012), Dunlosky y otros (2013), Roediger y Karpicke (2006), Cepeda y otros (2006), Pashler y otros (2008), Sweller (1988), Monsell (2003), Deci, Koestner y Ryan (1999), Ryan y Deci (2000), Sisk y otros (2018).
Sin DOI (libros o capítulos reales): Hebb (1949); Ebbinghaus (1885); Bjork (1994); Dehaene (2019), *¿Cómo aprendemos?*; OCDE (2007), *Understanding the Brain*.
Nota para el auditor: los artículos de Agarwal y otros (2021), Yang y otros (2021) y Bowers (2016) se citan sin cifras porque Crossref no trae su resumen; sus conclusiones se describen según el título y su contenido conocido. Conviene confirmarlas en la página editorial.

## 4. Pruebas
- `node -e "global.window={};require('./kb/…')"` OK en `kb/` y `kb/plus/`. `node taller/tools/validar.js todo`: ✓ OK (0 avisos).
- Playwright (Chromium, dominios externos bloqueados), 1280 y 390 px: 0 errores de página ni de consola, sin desborde horizontal, 3 módulos aprobados en orden al 100 %; una respuesta incorrecta muestra la pista.

## 5. Queda para revisión humana
1. Aprobación del docente o del equipo responsable y auditoría de un Dot distinto del autor.
2. Confirmar la ruta institucional que se menciona (orientación escolar, comité de convivencia, Ley 1620 de 2013) con la de CENTEC.
3. Registrar los DOI nuevos en `docs/VERIFICACION_DOI.md` y una línea en `docs/REVISION_CURSOS.md` (no se editaron para no chocar con los agentes en paralelo).
4. No se hizo commit ni push.

## Auditoría (Dot distinto del autor)

Fecha: 2026-10-27 · `Dot_Auditor_Riguroso` (no escribió el contenido) · Estado: sigue **en revisión** hasta la aprobación del docente o del equipo responsable. Revisé el estado completo de los archivos; no había ediciones parciales de otro auditor.

**Rigor neuro (sección 3 del estándar):** sin neuromitos afirmados; los mitos aparecen solo para corregirlos (VAK, hemisferios, gimnasia cerebral, 10 %, ventanas que se cierran, atención de 8 segundos, aprender durmiendo). Matices correctos sobre Schultz (monos), Lupien (evidencia animal y correlacional), Hubel y Wiesel (gatos), Dunlosky (solo dos técnicas de alta utilidad), Howard (correlacional), luz azul (evidencia mixta), mentalidad de crecimiento (efectos pequeños).

**Fuentes verificadas en esta auditoría (web):** Newton y Salvi (2020), en el resumen de Frontiers: 37 estudios, 15.405 educadores, 18 países, 89,1 % y una caída media del 37 % tras las intervenciones ✔ (la discusión del artículo dice 15.045: es una errata del propio artículo; el curso usa la cifra del resumen). Howard y otros (2021), *Perspectives on Psychological Science*, 16(6): 344 muestras y 223.209 participantes; la regulación externa no se asoció con desempeño ni con persistencia y sí con menor bienestar ✔. Smith, Floerke y Thomas (2016), *Science*: «Retrieval practice protects memory against acute stress» ✔. Bowers (2016), Macdonald y otros (2017), Agarwal, Nunes y Blunt (2021), Yang y otros (2021) y Dunlosky y otros (2013) coinciden con mi conocimiento en autores, revista, volumen y conclusión. Crossref estuvo bloqueado en esta pasada: los DOI se mantienen con la verificación del autor.

**Correcciones hechas (HTML y `kb/plus/sabi_curso16_neuroeducacion.js`, para que `aplicar_plus.py` no las deshaga):**
1. q1_4, retroalimentación: se retiró «también ante la curiosidad o un logro», un mecanismo dopaminérgico que no respalda la fuente citada; ahora dice que la evidencia de Schultz viene de monos y que de ahí no se deriva una técnica de aula.
2. q1_6, retroalimentación y pista: el cortisol «afecta» regiones cerebrales → «se asocia con cambios en…», con la aclaración de que la evidencia es en buena parte animal y correlacional, como dice la tarjeta.
3. q2_1: el distractor A se alargó un poco para que la correcta no sea claramente la más larga.
4. «Actualización 2026» del módulo 3: Smith y otros (2016) se presenta como un experimento con universitarios («protegió la memoria»), no como una regla general.

**Preguntas (21):** una sola correcta y clave correcta en todas; retroalimentación coherente; pistas que orientan sin dar la letra. La correcta es la opción más larga en unas 4 de 21 (diferencias pequeñas). Casos ficticios. Sin errores de ortografía detectados. Se mantiene la doble marca «✅» en el módulo 1, como explicó el autor.

**Pruebas:** `node -e …` OK en `kb/` y `kb/plus/`; `node taller/tools/validar.js todo` ✓ OK (0 avisos). Playwright (Chromium, dominios externos bloqueados) a 1280 y 390 px: 0 errores de página, sin desborde, 3 módulos aprobados en orden al 100 %. Los 4 errores de consola son solo recursos externos bloqueados por la prueba.

**Queda para revisión humana:** la ruta institucional (orientación escolar, comité de convivencia, Ley 1620 de 2013) frente a la de CENTEC; nombrar igual la Academia de Medicina del Sueño en los módulos 1 y 3 («Estadounidense» o «Americana»). No se hizo commit.
