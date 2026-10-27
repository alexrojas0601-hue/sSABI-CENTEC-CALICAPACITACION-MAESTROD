# Revisión del curso 22 · Educación para la paz y convivencia escolar (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueba el docente de Ciencias Sociales / el Comité Escolar de Convivencia; falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso22_educacion_paz_convivencia.html` (canónico, modificado), `kb/sabi_curso22_educacion_paz_convivencia.js` (2 ajustes) y `kb/plus/sabi_curso22_educacion_paz_convivencia.js` (revisado, sin cambios). `sabi_curso22_educacion_paz.html` es una redirección y no se tocó.

Estructura igual a la del curso 21 (5 `mod-card`, 3 `concept-card`, 2 `actividad`, 1 pregunta, lista `chk-item` y `tip` por módulo; diploma; avatar con voz). **No tiene panel «SABI Agentes»** ni cifras de TALIS, Hattie, McKinsey u HolonIQ. Se respetó la estructura; no se cambió CSS ni la lógica JS.

## 1. Qué se encontró
- **Error normativo en la pregunta 1 y en la tarjeta del M1:** se afirmaba que el Decreto 1038 de 2015 fija «3 ejes: cultura de la paz, educación para la paz, convivencia y ciudadanía» y que la cátedra «no es una asignatura: es transversal», con clave «transversal». Verificado en el texto del decreto (normograma del ICFES): el art. 2 fija tres objetivos (cultura de la paz, educación para la paz y **desarrollo sostenible**); el art. 3 ordena incorporar **la asignatura** al plan de estudios adscrita a Ciencias Sociales, Ciencias Naturales y Educación Ambiental, o Ética y Valores, y su parágrafo solo *permite* aprovechar las áreas transversales; el art. 4 exige al menos dos de doce temas. La Ley 1732 de 2014 (art. 1) la crea como asignatura y el art. 2 la declara obligatoria. La pregunta 1 de `kb/plus` ya lo decía bien: el HTML la contradecía.
- **Cifra inventada:** «la mediación entre pares reduce el conflicto escolar hasta un 50 % (UNESCO 2022)».
- **Cifra mal descrita:** «el CNMH documenta más de 220.000 víctimas» (el informe *¡Basta ya!*, 2013, estima cerca de 220.000 **muertes** entre 1958 y 2012; las víctimas registradas son muchas más). Frases no neutrales o no verificables: «Ignorar esa historia no es neutralidad: es complicidad»; «Muchos estudiantes de CENTEC tienen en sus familias personas afectadas»; «el objetivo no es la verdad del pasado»; «Colombia… la Constitución más garantista de la región y una de las que menos la cumple»; «la mayoría implementa la cátedra como un documento»; «el PEI 2026+ define…».
- Participación: «consultas populares, iniciativas legislativas estudiantiles» (no aplican a menores) y «contralor» como parte del gobierno escolar nacional (lo crean entidades territoriales).
- Mediación sin límite de uso: no advertía que el acoso y las situaciones tipo II y III no se median, sino que van por la Ruta del Decreto 1965 de 2013. Actividades de memoria sin consentimiento de familias ni apoyo de orientación; encuesta de clima sin reserva de datos.
- Multiplicador «35 estudiantes… miles en 20 años» presentado como dato.
- **Preguntas:** «✓» visible en la opción correcta; la correcta era la más larga en 4 de 5; ninguna clave en A.
- HTML: `<h4>…</div>` en dos tarjetas y `<footer` duplicado.
- Neuromitos: ninguno. Ortografía: correcta.
- kb: Ley 1620 y Decreto 1965 (tipos I, II, III), Galtung (1969, DOI correcto), Fisher y Ury (1981), Guía 49, Estándares de Competencias Ciudadanas (2004), Ley 1448 de 2011 (CNMH), Constitución art. 22, Ley 115 art. 94: correctos.

## 2. Qué se corrigió
- M1: tarjeta «Qué exige la Cátedra» reescrita según la Ley 1732 (arts. 1 y 2) y el Decreto 1038 (arts. 2, 3 y 4); **pregunta 1 corregida** (clave B: asignatura del plan de estudios adscrita a Sociales, Naturales o Ética) y retroalimentación que explica el parágrafo de áreas transversales y el papel de todos los docentes (Ley 1620). Introducción y tarjeta del PEI sin afirmaciones no verificables; encuesta de clima anónima, con reserva (Ley 1581 de 2012) y activación de ruta si hay riesgo.
- M2: ganar-ganar atribuido a la negociación por intereses de Fisher y Ury (1981); mediación voluntaria; la cifra del 50 % se reemplazó por Johnson y Johnson (1996) y el **límite explícito**: mediación entre pares solo para situaciones tipo I; acoso, ciberacoso y tipos II y III por la Ruta de Atención Integral (Decreto 1965 de 2013).
- M3: *¡Basta ya!* (CNMH, 2013) con la cifra correcta (muertes, 1958-2012); memoria como uno de los 12 temas del decreto; Informe Final de la Comisión de la Verdad (*Hay futuro si hay verdad*, 2022) sin cifras; consentimiento informado, sin testimonios de estudiantes y con orientación escolar.
- M4: Constitución de 1991 sin comparaciones no verificables; CDN aprobada por la Ley 12 de 1991 (art. 12, derecho a ser escuchado); gobierno escolar según Ley 115 de 1994 y Decreto 1860 de 1994 (contralor estudiantil solo donde lo crea la entidad territorial); participación juvenil con la Ley 1622 de 2013 (Consejos de Juventud, 14 a 28 años) y mesas de participación con el ICBF.
- M5: el multiplicador queda como ilustración; el plan de convivencia se liga al manual de convivencia (Ley 1620); la retroalimentación de la pregunta 5 recuerda que acoso y tipos II y III van por la Ruta.
- **Tarjeta «Actualización 2026: lo que dice la evidencia» en los módulos 1, 2, 3 y 5** (misma estructura `concept-card`). En el M3 la tarjeta presenta con neutralidad el Acuerdo Final de 2016 (plebiscito del 2 de octubre en que ganó el «No», renegociación y firma el 24 de noviembre) y el informe de la Comisión de la Verdad (2022), sin cifras y con pautas de pluralidad. El M4 no la lleva: no se encontró una fuente revisada por pares verificable que aportara. No se añadieron preguntas.
- 5 preguntas: sin «✓», longitudes equilibradas (68-83 caracteres), claves B, C, D, A, C (q4 pasó de B a A, con su retroalimentación).
- HTML: cierres `</h4>` y un solo `<footer>`.
- `kb/sabi_curso22…js`: «Enfoque restaurativo» con «evidencia prometedora pero mixta»; hito 2016 con plebiscito, renegociación y fecha de firma.

## 3. Fuentes y DOI verificados
DOI comprobados el 2026-10-24 contra Crossref (`api.crossref.org/works/<DOI>`, vía WebFetch): autor, título, año y revista coinciden.

| Módulo | Afirmación | Fuente | DOI |
| --- | --- | --- | --- |
| 1 | 213 programas SEL, 270.034 estudiantes: mejoras en habilidades, conducta y rendimiento (11 percentiles); dependen de la implementación | Durlak, Weissberg, Dymnicki, Taylor y Schellinger (2011). *Child Development*, 82(1), 405-432 | 10.1111/j.1467-8624.2010.01564.x |
| 2 | Estudiantes formados aprenden a negociar y mediar; menos casos llegan a los adultos; problemas metodológicos | Johnson y Johnson (1996). *Review of Educational Research*, 66(4), 459-506 | 10.3102/00346543066004459 |
| 2 | Mediación entre pares: 93 % de acuerdos, 88 % de satisfacción | Burrell, Zirbel y Allen (2003). *Conflict Resolution Quarterly*, 21(1), 7-26 | 10.1002/crq.46 |
| 5 | Prácticas restaurativas: ensayo aleatorizado sin diferencias significativas en clima ni victimización; asociación positiva con la exposición | Acosta, Chinman, Ebener, Malone, Phillips y Wilks (2019). *Journal of Youth and Adolescence*, 48(5), 876-890 | 10.1007/s10964-019-01013-2 |
| 5 | Manejo de aula: 54 estudios, g = 0,22; mayor efecto con énfasis socioemocional | Korpershoek, Harms, de Boer, van Kuijk y Doolaard (2016). *Review of Educational Research*, 86(3), 643-680 | 10.3102/0034654315626799 |
| kb | Paz negativa y positiva; violencia estructural | Galtung (1969). *Journal of Peace Research*, 6(3), 167-191 | 10.1177/002234336900600301 |

Nota de rigor: Crossref no trae el resumen de Acosta et al. (2019) y la página de Springer no se pudo abrir (permiso web no concedido). El hallazgo se redactó según el resumen publicado conocido y de forma prudente; **el auditor debe confirmarlo en el artículo**.

Sin DOI (normas e informes): Ley 1732 de 2014 (arts. 1 y 2, verificados en el PDF de la Universidad del Rosario); Decreto 1038 de 2015 (arts. 2, 3 y 4, verificados en el normograma del ICFES); Ley 1620 de 2013 y Decreto 1965 de 2013 (art. 40: tipos I, II y III, coherentes con los manuales que lo transcriben; ya registrados para los cursos 01, 02, 06 y 19); Ley 1581 de 2012; Ley 12 de 1991 (CDN); Ley 115 de 1994 y Decreto 1860 de 1994; Ley 1622 de 2013; CNMH, *¡Basta ya!* (2013); Comisión de la Verdad, Informe Final (2022); Fisher y Ury (1981), *Getting to Yes*.

No se pudo verificar en fuente primaria en esta pasada (límite de búsquedas web agotado): el texto oficial del Decreto 1965 de 2013 y la cifra de *¡Basta ya!* (220.000 muertes, 1958-2012), que se usa porque es la conclusión de ese informe; conviene confirmarla.

## 4. Pruebas
- `node -e "global.window={};require(...)"` OK en `kb/` y `kb/plus/`.
- Playwright (Chromium, dominios externos bloqueados), servidor `python3 -m http.server 8824` (detenido al final), 1280 y 390 px: 0 errores de consola o de página; sin desborde horizontal ni elementos fuera del ancho; los 5 módulos abren, cada pregunta marca la correcta (acierto a 1280 px, error a 390 px) y muestra la retroalimentación; las listas completan el módulo; el diploma toma el nombre; un solo `footer`.
- `node taller/tools/validar.js todo`: OK (0 avisos).

## 5. Queda para revisión humana
1. Aprobación del docente de Sociales o del Comité Escolar de Convivencia, y auditoría de un Dot distinto del autor; revisión especial de neutralidad en el M3.
2. Confirmar el art. 40 del Decreto 1965 de 2013, la cifra de *¡Basta ya!* y el hallazgo de Acosta et al. (2019) en la fuente primaria.
3. Revisar con coordinación si en Cali existe la figura de contralor estudiantil y en qué área está adscrita la Cátedra en el plan de estudios de CENTEC.
4. El curso está por debajo del estándar (3 tarjetas y 1 pregunta por módulo); `kb/plus` aporta 10 preguntas situadas. La pregunta no permite reintentar (JS común; no se tocó).
5. Registrar los DOI en `docs/VERIFICACION_DOI.md` y una línea en `docs/REVISION_CURSOS.md`. No se hizo commit ni push.

## Auditoría (Dot distinto del autor)
Fecha: 2026-10-27 · `Dot_Auditor_Riguroso` (no escribió el contenido) · Estado: **sigue en revisión** hasta la aprobación humana.

**Normas** (contraste con el texto conocido; la fuente oficial no se abrió en esta sesión): Decreto 1038 de 2015, art. 2 (tres objetivos: cultura de la paz, educación para la paz y desarrollo sostenible), art. 3 (asignatura adscrita a Sociales, Naturales y Educación Ambiental, o Ética y Valores; el parágrafo permite apoyarse en las áreas transversales) y art. 4 (al menos dos de doce temas): **correctos.** Ley 1732 de 2014: crea la Cátedra; su carácter obligatorio está en el parágrafo del art. 1 (el informe del autor lo atribuye al art. 2; el HTML no cita el número, así que no afecta al curso). Decreto 1965 de 2013, art. 40 (tipos I, II y III): correcto. Ley 1622 de 2013 (joven: 14 a 28 años; Consejos de Juventud): correcto. *¡Basta ya!* (CNMH, 2013): cerca de 220.000 muertes entre 1958 y 2012, la mayoría civiles: coherente con el informe. Plebiscito del 2 de octubre y firma del 24 de noviembre de 2016; Informe Final de la Comisión de la Verdad (2022): correctos.

**Evidencia:** Johnson y Johnson (1996), Durlak (2011), Korpershoek (2016) y Acosta (2019): coherentes con sus resúmenes. Durlak: la ganancia de 11 puntos percentiles corresponde **solo al rendimiento académico**; se corrigió la redacción, que la atribuía a todo y la condicionaba a «los propios docentes». **Burrell, Zirbel y Allen (2003):** no se pudo confirmar en el resumen el 93 % de acuerdos y el 88 % de satisfacción (la bibliografía anotada de CRETE solo confirma 43 estudios y resultados favorables). Se retiraron las cifras: queda «43 estudios, tasas altas de acuerdo y de satisfacción». **Pendiente de verificar en el artículo.**

**Tono y afirmaciones fuertes:** «el gobierno firme otro acuerdo» → «No necesitas esperar grandes acuerdos» (neutralidad); «La paz no es un tema de Ciencias Sociales» → «no es solo un tema…» (coherente con la adscripción del decreto); «ganar-ganar… el que mejor sostiene los acuerdos» → «busca acuerdos que las partes puedan sostener»; «más poderosas que cualquier libro de texto» → «complementan el libro de texto»; «Con un mes… tendrás mediadores» → acompañamiento y supervisión continuos; límite de la mediación: tipo II, tipo III y acoso «los atienden los adultos con los protocolos de la Ruta»; retroalimentaciones de q4 y q5 sin superlativos («la pedagogía más poderosa», «el mayor constructor de cultura»). El M3 presenta el Acuerdo de 2016 y la Comisión de la Verdad con neutralidad.

**Preguntas (5):** clave única y correcta (B, C, D, A, C), longitudes de 68 a 83 caracteres, sin «✓» visible; `data-correct` es del JS común y no se ve. **HTML:** etiquetas equilibradas y un solo `footer`. **Ortografía:** correcta. **Casos:** ficticios.

**Pruebas:** kb y kb plus cargan; `validar.js todo` OK. Playwright (Chromium, dominios externos bloqueados, `http.server` 8843, detenido): a 1280 px y 390 px, 0 errores de página, sin desborde; retroalimentaciones coherentes con la clave, listas que completan los 5 módulos y diploma.
