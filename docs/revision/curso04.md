# Revisión del curso 04 · Metodologías activas (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueba el docente o el equipo responsable; falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso04_metodologias_activas.html`, `kb/sabi_curso04_metodologias_activas.js` y `kb/plus/sabi_curso04_metodologias_activas.js` (este último se revisó y no necesitó cambios).

## 1. Qué se encontró
- **Error que bloqueaba el curso:** 19 de las 28 preguntas tenían solo 2 opciones (se había perdido la opción correcta) y en 11 de ellas la clave apuntaba a una opción inexistente (`S.check(…,2)` con opciones 0 y 1), así que era imposible acertarlas. En el módulo 2 eran imposibles 5 de 7 preguntas: nadie podía llegar al 70 % y el curso quedaba bloqueado desde ese módulo.
- **Cifras y citas inventadas o mal atribuidas:** «73 % de los maestros colombianos enseña con exposición magistral (TALIS 2024)», «Hmelo-Silver 2024: d = 0,61», «Barrows 1969, revisado 2024», «Bishop y Verleger 2024: d = 0,35 y 0,71», «38 % de hogares rurales sin internet (MEN 2024)», «Hattie 2024: d = 0,55», «Johnson y Johnson, revisado 2024», «Kapp 2024: d = 0,49», «Deci y Ryan 2024», «Moser 2024», «transmitir información d = 0,07», «2-3 veces más retención a 30 días», «60/20/20 %». Se retiraron o se reemplazaron por la fuente real.
- **Neuro-lenguaje sin respaldo:** «el ABP activa el sistema dopaminérgico… la curiosidad activa el hipocampo (Gruber 2024)», «trazas neurales más profundas», «neurotransmisores del aprendizaje», «el cerebro en estado de curiosidad-sobre-el-error», «principio neuroeducativo». Se eliminaron y se explicó por qué no se pueden derivar recetas de aula de esos estudios de laboratorio.
- **Evidencia presentada sin matices:** el ABP, el aula invertida y la gamificación aparecían como superiores sin condiciones; la resistencia de los estudiantes al ABP se presentaba como «prueba de que funciona» (Festinger + Piaget).
- Texto visible sin tildes en `<title>` y en la etiqueta del menú; la clave era casi siempre la misma posición.

## 2. Qué se corrigió (con fuente verificada)
DOI comprobados contra Crossref (api.crossref.org) el 2026-10-24: autor, título, año y revista coinciden. Los resultados numéricos se tomaron del resumen del artículo o de su página editorial.

| Afirmación corregida | Fuente | DOI |
| --- | --- | --- |
| Definición del ABP y rol del tutor (antes «Barrows 1969, revisado 2024»; origen en McMaster a finales de los sesenta) | Barrows y Tamblyn (1980), libro; Hmelo-Silver (2004). *Educational Psychology Review*, 16(3), 235-266 | 10.1023/B:EDPR.0000034022.16470.f3 |
| Los «siete saltos» y por qué funciona el ABP | Schmidt (1983). *Medical Education*, 17(1), 11-16 | 10.1111/j.1365-2923.1983.tb01086.x |
| ABP: efecto robusto en habilidades, no concluyente en conocimientos; más retención (antes «d = 0,61» y «dopamina») | Dochy, Segers, Van den Bossche y Gijbels (2003). *Learning and Instruction*, 13(5), 533-568 | 10.1016/S0959-4752(02)00025-7 |
| La guía mínima no funciona con principiantes | Kirschner, Sweller y Clark (2006). *Educational Psychologist*, 41(2), 75-86 | 10.1207/s15326985ep4102_1 |
| Respuesta: el ABP eficaz lleva andamiaje fuerte | Hmelo-Silver, Duncan y Chinn (2007). *Educational Psychologist*, 42(2), 99-107 | 10.1080/00461520701263368 |
| Descubrimiento sin asistencia d = −0,38; descubrimiento guiado d = 0,30 | Alfieri, Brooks, Aldrich y Tenenbaum (2011). *Journal of Educational Psychology*, 103(1), 1-18 | 10.1037/a0021017 |
| Aula invertida: efecto pequeño y positivo, 114 estudios, sin efecto en satisfacción; mayor si no se reduce el tiempo presencial y con quices (antes «Bishop y Verleger 2024») | van Alten, Phielix, Janssen y Kester (2019). *Educational Research Review*, 28, 100281 | 10.1016/j.edurev.2019.05.003 |
| Aprendizaje activo: +0,47 DE en exámenes; 1,5 veces más reprobación con clase expositiva (225 estudios STEM universitarios) | Freeman y otros (2014). *PNAS*, 111(23), 8410-8415 | 10.1073/pnas.1319030111 |
| Videos breves: permanencia de unos 6 minutos (ya registrado en curso 17) | Guo, Kim y Rubin (2014). L@S 2014, 41-50 | 10.1145/2556325.2566239 |
| Principios del video educativo (ya registrado en curso 17) | Brame (2016). *CBE—Life Sciences Education*, 15(4), es6 | 10.1187/cbe.16-03-0125 |
| Cinco elementos y teoría de la interdependencia social (antes «revisado 2024») | Johnson y Johnson (2009). *Educational Researcher*, 38(5), 365-379 | 10.3102/0013189X09339057 |
| Metas de grupo + responsabilidad individual (antes «Hattie 2024: d = 0,55») | Slavin (1996). *Contemporary Educational Psychology*, 21(1), 43-69 | 10.1006/ceps.1996.0004 |
| Marco ICAP: interactivo > constructivo > activo > pasivo (reemplaza el «principio neuroeducativo») | Chi y Wylie (2014). *Educational Psychologist*, 49(4), 219-243 | 10.1080/00461520.2014.965823 |
| Gamificación: g = 0,49 cognitivo, 0,36 motivacional, 0,25 conductual (antes «Kapp 2024: d = 0,49») | Sailer y Homner (2020, en línea 2019). *Educational Psychology Review*, 32(1), 77-112 | 10.1007/s10648-019-09498-w |
| Tabla de posiciones e insignias: menor motivación intrínseca, satisfacción y nota final | Hanus y Fox (2015). *Computers & Education*, 80, 152-161 | 10.1016/j.compedu.2014.08.019 |
| Recompensas tangibles esperadas reducen la motivación intrínseca; la retroalimentación verbal positiva la aumenta (antes «Deci y Ryan 2024») | Deci, Koestner y Ryan (1999). *Psychological Bulletin*, 125(6), 627-668 | 10.1037/0033-2909.125.6.627 |
| Autonomía, competencia y relación (ya registrado) | Ryan y Deci (2000). *American Psychologist*, 55(1), 68-78 | 10.1037/0003-066X.55.1.68 |

Fuentes sin DOI usadas: Barrows y Tamblyn (1980); Bergmann y Sams (2012), *Flip Your Classroom*; Johnson y Johnson (1989); Aronson (técnica del rompecabezas); Kapp (2012); Csikszentmihalyi (1990), *Flow*; Anderson y Krathwohl (2001); CASEL (marco de aprendizaje socioemocional).

**Cifras retiradas sin reemplazo numérico:** TALIS 2024 (73 %), «38 % de hogares rurales sin internet» (se dejó sin número: «según las encuestas del DANE, la brecha urbano-rural es amplia»), «d = 0,07», «2-3 veces más retención», tamaños de efecto de Hattie.

## 3. Qué se reescribió o añadió
- Los 4 módulos: introducción nueva y matizada; las 4 tarjetas existentes corregidas y ampliadas (130-175 palabras); **2 tarjetas nuevas por módulo**: «Ejemplo resuelto en CENTEC y errores frecuentes» (con indicadores Bloom) y «Actualización 2026: lo que dice la evidencia» (3-4 hallazgos con fuente y nota «Contenido en revisión»). Total: 24 tarjetas.
- **28 preguntas con 4 opciones cada una** (se completaron las 19 incompletas), clave repartida entre A-D, distractores plausibles, retroalimentación que explica y termina con una pregunta reflexiva, y pista que orienta sin revelar. Se mantuvieron los marcadores de nivel (🟡 🔴 🟢 🟠 🟣 🔵).
- Matices exigidos por el estándar: el ABP y el descubrimiento sin guía (menos eficaz para principiantes; ABP con andamiaje), el aula invertida (efecto pequeño, depende de no recortar la práctica; casi toda la evidencia es de secundaria y universidad) y la gamificación (efectos pequeños, rankings e insignias obligatorias pueden restar). Neuromito del «hemisferio derecho creativo» usado como distractor explicado.
- `<title>` y etiqueta del menú con tilde. Contadores 4 módulos · 28 preguntas coherentes. No se tocaron diseño, CSS ni JS.
- `kb/sabi_curso04_metodologias_activas.js`: fuentes actualizadas (7): se añadieron Hmelo-Silver (2004), van Alten y otros (2019) y Sailer y Homner (2020) con DOI; salieron Dewey (1938) y Kapp (2012) de la lista de fuentes (siguen mencionados en la línea de tiempo y las flashcards, y son obras reales).

## 4. Pruebas
- `node -e "global.window={};require('./kb/…')"` OK en `kb/` y `kb/plus/`.
- Playwright (Chromium, dominios externos bloqueados), 1280 px y 390 px: 0 errores de consola o de página, sin desborde horizontal, los 4 módulos aprobados en orden al 100 %; una respuesta incorrecta muestra la pista.

## 5. Queda para revisión humana
1. Aprobación del docente del área y auditoría de un Dot distinto del autor.
2. Confirmar en DANE (Encuesta de Calidad de Vida) una cifra actual de conectividad rural si se quiere volver a dar un número.
3. El caso de los cortes de agua y del caño se presentan como hipotéticos («supongamos», «los vecinos dicen»); revisar que sean pertinentes para la Comuna 15.
4. Registrar los DOI nuevos en `docs/VERIFICACION_DOI.md` y una línea en `docs/REVISION_CURSOS.md` (no se editaron para no chocar con los agentes en paralelo).
5. No se hizo commit ni push.

## Auditoría (Dot distinto del autor)
Fecha: 2026-10-24 · Dot_Auditor_Riguroso (no escribió el contenido) · Estado: sigue **en revisión** hasta la aprobación del docente.

**1. Verificación de fuentes (muestreo de 16).** Los 14 DOI nuevos de la tabla se comprobaron uno por uno contra Crossref (api.crossref.org; Hmelo-Silver 2004 en la página de Springer). Autor, título, año, revista, volumen y páginas coinciden en todos. Cifras comprobadas con el resumen de cada artículo: Freeman y otros (2014): 225 estudios, +0,47 DE y 1,5 veces más reprobación; Alfieri y otros (2011): d = −0,38 y 0,30; van Alten y otros (2019): 114 estudios, efecto pequeño y ningún efecto en la satisfacción; Sailer y Homner (2020): g = 0,49 / 0,36 / 0,25; Dochy y otros (2003): algo menos de conocimiento y más retención; Guo, Kim y Rubin (2014): unos 6 minutos. Los «siete saltos» de Maastricht corresponden a Schmidt (1983) y el origen en McMaster a finales de los sesenta es correcto. **No se encontraron afirmaciones falsas.**
**2. Preguntas (28/28 revisadas).** En todas, la clave del código apunta a la única opción correcta; la retroalimentación es coherente con la clave, las letras citadas en la retroalimentación coinciden con las opciones y no hay opciones duplicadas. Claves repartidas así: A 5, B 10, C 8, D 5. La opción correcta era la más larga en 22 de 28 preguntas, aunque con diferencias pequeñas. Para que la longitud no delate la respuesta, se alargaron los distractores de q1_3, q1_6, q2_6 y q3_6 sin cambiar su sentido.
**3. Neuromitos y ortografía.** No queda neuro-lenguaje sin respaldo: el «hemisferio derecho» y la «dopamina» aparecen solo como distractores explicados. No hay palabras sin tilde en el texto visible.
**4. Pruebas.** Playwright con Chromium a 1280 y 390 px, con dominios externos bloqueados: 0 errores de página (los únicos avisos de consola son las fuentes y scripts externos bloqueados a propósito); sin desborde horizontal; los 4 módulos se aprueban en orden al 100 % y una respuesta incorrecta muestra la pista. Los kb cargan con node y `validar.js todo` da OK.
**Para revisión humana:** las mismas del autor. La cifra de conectividad rural del DANE sigue sin número, lo cual es correcto.
