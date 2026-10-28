# Revisión del curso 12 · Francés A1-B1 para docentes (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueba el docente del área; falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso12_frances.html`, `kb/sabi_curso12_frances.js` y `kb/plus/sabi_curso12_frances.js` (este último se revisó y no necesitó cambios). El módulo 3 ya estaba auditado y no se modificó.

## 1. Qué se encontró (módulos 1 y 2)
- **Cifras sin fuente o falsas:** «300 millions de locuteurs dans 29 pays» (la OIF da hoy 396 millones y el francés es lengua oficial en 32 Estados y gobiernos), «bourses DELF reconnues par le MEN» y «Le DELF B1 est reconnu par le MEN» (no se encontró ninguna norma del MEN colombiano que reconozca el DELF de forma general), «A2-B1 atteignable en 12-18 mois», «9-11 mois de travail», «3 mois / 4-6 mois / 2 mois», «30 minutes quotidiennes sont plus efficaces que 4 heures» (sin fuente) y «ressources OCDE et UNESCO publiées en français avant d'être traduites».
- **Errores de contenido:** la tarjeta del passé composé anunciaba «17 verbes» y repetía *naître* y *mourir*; no explicaba que todos los pronominales usan *être* ni que *monter, descendre, sortir, rentrer, passer, retourner* usan *avoir* con complemento directo. «Le H est toujours muet» sin la *h aspiré*; «contractions sans exception» sin aclarar que *à la* y *à l'* no se contraen; los «trois groupes» presentados como -er/-ir/-re (el tercer grupo es el de los irregulares; *partir* termina en -ir y no es del segundo); la fórmula de cortesía larga presentada como «obligatoire» en todo correo (hoy *Cordialement* es habitual en el correo profesional).
- **Ortografía:** módulos 1 y 2 sin acentos ni apóstrofos en francés («etre», «l alphabet», «j ai», «francais»), mezcla de francés y español en la retroalimentación («colombianos»), `<title>` y etiqueta del menú «Frances» sin tilde.
- **Preguntas:** 14 preguntas con 4 opciones, pero la clave casi siempre en B (10 de 14) y en las preguntas 1.7 y 2.7 la correcta era la opción larga que repetía las cifras inventadas.

## 2. Qué se corrigió
- Módulos 1 y 2 reescritos con la estructura del módulo 3: explicación en español y ejemplos en francés marcados con `lang="fr"`, acentos, apóstrofos y espacios ante `! ? : ;`. Cada módulo pasó de 4 a **6 tarjetas** (130-250 palabras): las 4 originales corregidas, «Caso CENTEC (ficticio), errores frecuentes e indicadores de logro» (ejemplo resuelto paso a paso, Bloom N1-N6) y «Actualización 2026: lo que dice la evidencia».
- Passé composé: grupo de verbos con *être* sin cifra fija (las listas varían según cuenten los derivados), pronominales, concordancia y matiz de los verbos que pasan a *avoir* con complemento directo.
- Correo profesional: carta formal frente a correo cotidiano (*Je vous prie d'agréer… mes salutations distinguées* / *Bien cordialement*).
- **14 preguntas reescritas:** 4 opciones, una sola correcta, claves repartidas (módulo 1: C A D B A C D; módulo 2: B D A C B D A), longitudes similares, retroalimentación que explica cada distractor y termina con una tarea, pista que orienta sin revelar. La 1.7 y la 2.7 ya no dependen de cifras: preguntan por el plan de estudio con respaldo (artículo + práctica espaciada; formato oficial + cuatro destrezas).
- `<title>` y menú con tilde. Contadores coherentes: 3 módulos · 21 preguntas. No se tocaron diseño, CSS ni JS.
- `kb/sabi_curso12_frances.js`: objetivo de los «tres grupos» corregido; «Alianza Francesa de Cali para certificación» → centro de examen oficial DELF consultando sedes y fechas vigentes; mapa «Presente: tres grupos»; cierres formales actualizados (glosario, flujo y errores); fuentes (7): MCER 2001, Volumen complementario 2020, France Éducation international, OIF 2026 y tres artículos con DOI. Salieron de la lista el diccionario de la Académie y *Le Bon Usage* (obras reales, pero no sustentan afirmaciones concretas del curso).

## 3. Fuentes y DOI verificados
DOI comprobados el 2026-10-24 contra Crossref (`api.crossref.org/works/<DOI>`, vía WebFetch): autor, título, año y revista coinciden. Los resultados se tomaron del resumen del artículo.

| Afirmación | Fuente | DOI |
| --- | --- | --- |
| Instrucción en pronunciación: efecto grande (d = 0,89 intragrupo; 0,80 entre grupos), mayor con retroalimentación e intervenciones largas; menor en habla espontánea | Lee, Jang y Plonsky (2015). *Applied Linguistics*, 36(3), 345-366 | 10.1093/applin/amu040 |
| Práctica espaciada en L2: 48 experimentos, 3.411 participantes, efecto medio-grande; intervalos largos mejores en pruebas diferidas | Kim y Webb (2022). *Language Learning*, 72(1), 269-319 | 10.1111/lang.12479 |
| Retroalimentación oral: efectos significativos y duraderos; mayores con pistas que con reformulaciones; más en estudiantes jóvenes | Lyster y Saito (2010). *Studies in Second Language Acquisition*, 32(2), 265-302 | 10.1017/S0272263109990520 |
| (Módulo 3, ya registrado) correcciones que invitan a reformular y autocorrección | Lyster y Ranta (1997). *SSLA*, 19(1), 37-66 | 10.1017/S0272263197001034 |

Documentos oficiales sin DOI: OIF, *La langue française dans le monde*, édition 2026 (presentado el 16 de marzo de 2026): 396 millones de francófonos, cuarta lengua más hablada, 65 % en África, lengua oficial en 32 Estados y gobiernos; la OIF cambió el método de conteo, así que no se compara con los 321 millones de 2022 (verificado en diplomatie.gouv.fr y lepetitjournal.com). Consejo de Europa (2001, 2020). France Éducation international (DELF/DALF).

**Cifras retiradas sin reemplazo:** plazos en meses para A2→B1 y DELF B1; «30 minutos diarios mejor que 4 horas» (se reemplazó por el hallazgo general de Kim y Webb, sin cifra de minutos); «reconocido por el MEN»; «recursos de la UNESCO publicados en francés antes de traducirse».

## 4. Pruebas
- `node -e "global.window={};require(...)"` OK en `kb/` y `kb/plus/`.
- Playwright (Chromium, dominios externos bloqueados), 1280 y 390 px: 0 errores de consola o de página, sin desborde horizontal, los 3 módulos aprobados en orden al 100 % (botón «Siguiente módulo» abre el siguiente); una respuesta incorrecta muestra la pista.
- `node taller/tools/validar.js todo`: OK (0 avisos).

## 5. Queda para revisión humana
1. Aprobación del docente del área y auditoría de un Dot distinto del autor.
2. Confirmar si la Alianza Francesa de Cali es centro de examen DELF y sus fechas (no se pudo verificar en línea; el curso ya no lo afirma).
3. Si el colegio quiere citar becas (AUF u otras), verificar cada convocatoria vigente antes de mencionarla.
4. Registrar los DOI en `docs/VERIFICACION_DOI.md` y una línea en `docs/REVISION_CURSOS.md` (no se editaron para no chocar con agentes en paralelo).
5. No se hizo commit ni push.

## Auditoría (Dot distinto del autor)
Fecha: 2026-10-24 · `Dot_Auditor_Riguroso` (no escribió este contenido) · Alcance: módulos 1 y 2 (el 3 ya estaba auditado).

**Francés (fr-FR):** acentos, elisiones, concordancias y ejemplos correctos (être/avoir, negación con *de*, contracciones y su límite con *à la*/*à l'*, *h aspiré*, tres grupos, passé composé con *être* y verbos que pasan a *avoir* con complemento directo, subjuntivo, fórmulas de correo). Faltaban espacios ante signos dobles: «Salut !» en la tarjeta de saludos usaba espacio normal, las opciones A y C de la 2.5 también, y «parler:» y «finir:» no llevaban espacio. **Corregido** con espacio irrompible (`&nbsp;`) en los cinco casos.

**Verificado:** OIF, *La langue française dans le monde*, édition 2026 existe: presentada el 16-03-2026 (lepetitjournal.com); 396 millones, cuarta lengua después del inglés, el mandarín y el español, 65 % en África y 32 Estados y gobiernos (diplomatie.gouv.fr, 19-03-2026); cambio de método confirmado por lepetitjournal. DOI de Lee, Jang y Plonsky (2015), Kim y Webb (2022) y Lyster y Saito (2010) verificados en Crossref, con las cifras citadas.

**Preguntas:** 14/14 con una sola clave correcta (M1: C A D B A C D; M2: B D A C B D A), retroalimentación coherente, pistas que no revelan y sin opciones duplicadas ni sesgo de longitud. Sin neuromitos. Ortografía revisada.

**Pruebas:** Playwright, 1280 y 390 px: 0 errores de página, sin desborde, los 3 módulos aprobados en orden al 100 %; un error muestra solo la pista. `validar.js todo`: OK. Veredicto: **apto para revisión del docente**.

## Auditoría SABI Pensamiento (Dot distinto del autor)

Fecha: 2026-10-27 · `Dot_Auditor_Riguroso` (no escribió el contenido) · Archivo: `kb/pensar/sabi_curso12_frances.js`. Estado: sigue **en revisión** hasta la aprobación del docente o del equipo responsable.

**Qué verifiqué:** `lectura.base` (texto elaborado a partir del módulo 3, con Lyster y Ranta, 1997, DOI 10.1017/S0272263197001034) está en el HTML y en `docs/VERIFICACION_DOI.md`; Kim y Webb (2022, DOI 10.1111/lang.12479), citado en N6, está en el curso y registrado. El texto en francés se basa en el caso de la profe Lucía del módulo 3 (diagnóstico, carnet d'erreurs de tres columnas, seis semanas, colega Andrés, «Oui, madame !»); las diferencias son de adaptación narrativa y la edad del ejemplo (35 ans) coincide con la del módulo 1. Las 5 correcciones de N4 son correctas (j'ai 42 ans, au collège, je suis allé, le lait est froid, depuis dix ans) y están en el curso; la consigna de N5 y su corrección («Ouvrez vos cahiers, s'il vous plaît») coinciden con la evaluación del curso. Literales exactos; `donde.parrafo` = 1 correcto; orden marcado por D'abord / Alors / Ensuite / Après; claves inferencia c = 3 y contexto c = 0 inequívocas. Espacios antes de ! ? : y comillas « » según la norma de Francia. Sin neuromitos.

**Correcciones hechas:**
1. P4: «sans que personne ne le demande» → «sans que personne ne le leur demande» (falta el complemento indirecto).
2. Modelo N6: no cubría la comprensión escrita, aunque el criterio 2 exige atender las cuatro pruebas; se añadió una lectura breve el fin de semana, porque cada prueba exige un mínimo.
3. Modelo N6: se nombran los cuatro criterios de la mini-rúbrica (comprensibilidad, corrección, pronunciación, adecuación), como pide el criterio 4.
4. Contexto: se alargó un distractor para que la correcta no destaque por su extensión.

**Pruebas:** `node kb/tools/validar_pensar.js` ✓ OK (0 avisos).

**Queda para revisión humana:** «elle se bloque quand elle doit parler» es correcto pero coloquial («elle bloque» es más frecuente); no se cambió porque es una oración literal. Que el docente de francés lo decida. No se hizo commit.
