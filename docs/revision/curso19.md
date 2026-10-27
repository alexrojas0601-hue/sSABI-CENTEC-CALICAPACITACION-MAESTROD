# Revisión del curso 19 · Ciudadanía digital y ética tecnológica (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueban el docente de Ciencias Sociales y la coordinación de convivencia; falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso19_ciudadania_digital.html`, `kb/sabi_curso19_ciudadania_digital.js` y `kb/plus/sabi_curso19_ciudadania_digital.js`. Estructura estándar: 3 módulos (`modN` · `hN` · `bN` · `rN`), 7 preguntas por módulo con `S.check`, bloqueo en orden con 70 %.

## 1. Qué se encontró
- **Contenido en general sólido y bien citado** (módulos 2 y 3 recientes): Ley 1581 de 2012 (art. 4 principios, art. 5 y 6 datos sensibles, art. 7 menores), Sentencia C-748 de 2011, Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015), Ley 1273 de 2009 (arts. 269A, 269D, 269F, 269G), Ley 1620 de 2013 (definición de ciberacoso, art. 2) y Decreto 1965 de 2013 (tipos I, II y III, ruta en cuatro componentes), Ley 1098 de 2006, Ley 1341 de 2009, CONPES 3975 de 2019, Recomendación UNESCO 2021, Reglamento europeo de IA 2024, Wardle y Derakhshan (2017), Pariser (2011), Wineburg y McGrew (2019), Breakstone y colegas (2021), Roozenbeek y van der Linden (2019), SIFT de Caulfield. Sin neuromitos. Claves bien repartidas (A-D) en las 21 preguntas, todas con 4 opciones y una sola correcta.
- **Módulo 1 sin tildes** en el título del módulo, el subtítulo («Democracia digita», truncado) y cinco títulos de tarjeta («camaras», «Como», «Desinformacion», «criticas», «Prevencion e intervencion», «desafio de la representacion», «Ciudadania»); `<title>` y píldora de navegación truncados («Ciudadania Digital Y»).
- **Técnicas del juego Bad News mal descritas** (módulo 3): «titulares alarmistas, falsos expertos». El artículo (DOI verificado) enumera seis: polarización, emociones, conspiración, troles, desacreditar y suplantación.
- **Vosoughi, Roy y Aral (2018)**: se presentaba la novedad y la emoción como causa comprobada; el artículo las propone como explicación. Faltaba el hallazgo de que las personas, más que los bots, difunden lo falso.
- Retroalimentación de la pregunta 3.1: atribuía la clasificación tipo II al «daño psicológico»; el criterio del Decreto 1965 de 2013 es la repetición o sistematicidad (o el daño sin incapacidad).
- En varias preguntas la opción correcta era la más larga (diferencias de 5-8 caracteres).

## 2. Qué se corrigió
- Tildes y títulos completos en `<title>`, navegación, módulo 1 y tarjetas; claves de `cards` del kb sincronizadas.
- Bad News: técnicas reales del juego. Vosoughi y colegas: «los autores lo asocian con» y papel de las personas frente a los bots (HTML y kb).
- Pregunta 3.1: retroalimentación con el criterio correcto del tipo II.
- Longitudes de opciones equilibradas en 7 preguntas (se alargó un distractor o se acortó la correcta, sin cambiar el contenido ni la clave). La sección `evaluacion` del kb plus se sincronizó con las tres opciones cambiadas del módulo 1.
- **Una tarjeta «Actualización 2026: lo que dice la evidencia» por módulo** (misma estructura `.card`, con «Contenido en revisión»; no se añadieron preguntas):
  - Módulo 1: algoritmos con evidencia mixta (Guess y colegas, 2023), avisos de exactitud antes de compartir (Pennycook y colegas, 2021), metaanálisis de alfabetización mediática (Jeong, Cho y Hwang, 2012), AMI de la UNESCO e IA generativa.
  - Módulo 2: cómo entienden los adolescentes la privacidad institucional y comercial (Stoilova, Livingstone y Nandagiri, 2020), con la advertencia de que es un estudio cualitativo en el Reino Unido; NIST 800-63B: consultar la edición vigente antes de citarla.
  - Módulo 3: inoculación con videos (Roozenbeek y colegas, 2022), lectura lateral en todo un distrito escolar (Wineburg y colegas, 2022) y metaanálisis de programas contra el ciberacoso (Gaffney y colegas, 2019).
- `kb/sabi_curso19_ciudadania_digital.js`: fuentes de 7 a 19, con el Decreto 1377 de 2013 y 11 artículos con DOI.

## 3. Fuentes y DOI verificados
DOI comprobados el 2026-10-24 contra Crossref (`api.crossref.org/works/<DOI>`, vía WebFetch): autor, título, año y revista coinciden.

| Módulo | Afirmación | Fuente | DOI | Contenido verificado en |
| --- | --- | --- | --- | --- |
| 1 | Las noticias falsas llegan más lejos y más rápido; novedad y emoción como explicación | Vosoughi, Roy y Aral (2018). *Science*, 359(6380), 1146-1151 | 10.1126/science.aap9559 | resumen (Crossref) |
| 1 | El feed cronológico redujo el tiempo de uso y cambió la exposición, sin cambios significativos en la polarización en 3 meses | Guess y colegas (2023). *Science*, 381(6656), 398-404 | 10.1126/science.abp9364 | resumen (Crossref) |
| 1 | Llamar la atención sobre la exactitud mejora la calidad de lo que se comparte | Pennycook y colegas (2021). *Nature*, 592, 590-595 | 10.1038/s41586-021-03344-2 | solo metadatos (*) |
| 1 | Las intervenciones de alfabetización mediática tienen efectos positivos | Jeong, Cho y Hwang (2012). *Journal of Communication*, 62(3), 454-472 | 10.1111/j.1460-2466.2012.01643.x | solo metadatos (*) |
| 1, 3 | Lectura lateral de los verificadores profesionales | Wineburg y McGrew (2019). *Teachers College Record*, 121(11), 1-40 | 10.1177/016146811912101102 | metadatos |
| 3 | 3446 estudiantes de secundaria con serias dificultades para juzgar fuentes | Breakstone y colegas (2021). *Educational Researcher*, 50(8), 505-515 | 10.3102/0013189X211017495 | resumen (Crossref) |
| 3 | Juego Bad News: seis técnicas e inoculación (unos 15 000 participantes, pre-post) | Roozenbeek y van der Linden (2019). *Palgrave Communications*, 5, 65 | 10.1057/s41599-019-0279-9 | resumen (Crossref) |
| 3 | Videos de inoculación: 6 experimentos aleatorizados y un estudio de campo en YouTube | Roozenbeek y colegas (2022). *Science Advances*, 8(34), eabo6254 | 10.1126/sciadv.abo6254 | resumen (Crossref) |
| 3 | Lectura lateral enseñada en clases de gobierno de un distrito escolar | Wineburg y colegas (2022). *Journal of Educational Psychology*, 114(5), 893-909 | 10.1037/edu0000740 | solo metadatos (*) |
| 3 | Los programas contra el ciberacoso reducen la perpetración y la victimización (efectos modestos) | Gaffney, Farrington, Espelage y Ttofi (2019). *Aggression and Violent Behavior*, 45, 134-153 | 10.1016/j.avb.2018.07.002 | solo metadatos (*) |
| 2 | Adolescentes de 11 a 16 años (169, grupos focales): privacidad interpersonal; poca comprensión del uso institucional y comercial | Stoilova, Livingstone y Nandagiri (2020). *Media and Communication*, 8(4), 197-207 | 10.17645/mac.v8i4.3407 | resumen (Crossref) |

(*) Crossref no trae el resumen de estos artículos y el presupuesto de búsqueda web de la sesión se agotó. Las afirmaciones se redactaron de forma cualitativa, sin cifras, y coinciden con el título y con lo que se sabe de los estudios, pero **el Dot auditor debe contrastarlas con el resumen**.

Sin DOI (normas, informes y libros): Constitución de 1991 (arts. 15, 20, 44); Leyes 1098 de 2006, 1273 de 2009, 1341 de 2009, 1581 de 2012 y 1620 de 2013; Decretos 1377 y 1965 de 2013, 1074 y 1075 de 2015; Sentencia C-748 de 2011; CONPES 3975 de 2019; Wardle y Derakhshan (2017, Consejo de Europa); Pariser (2011); UNESCO (2021 y 2023); NIST SP 800-63B; Ribble; ISTE. **No se pudo abrir en esta sesión el texto oficial de las normas** (Secretaría del Senado sin acceso y búsqueda agotada): los artículos citados coinciden con el texto conocido de las normas, pero conviene que la coordinación los confirme en la fuente oficial.

## 4. Pruebas
- `node -e "global.window={};require(...)"` OK en `kb/` y `kb/plus/`.
- Playwright (Chromium, dominios externos bloqueados, servidor `http.server` en 8823), 1280 y 390 px: 0 errores de consola o de página, sin desborde horizontal; los 3 módulos abren en orden, cada uno tiene su tarjeta 2026 y 7 preguntas de 4 opciones; la respuesta correcta se acepta, los módulos se aprueban y desbloquean el siguiente; el kb y el kb plus cargan.
- `node taller/tools/validar.js todo`: OK (0 avisos).

## 5. Queda para revisión humana
1. Aprobación del docente de Sociales y de convivencia, y auditoría de un Dot distinto del autor (en especial las afirmaciones marcadas con *).
2. `index.html` (no se tocó, fuera del alcance) anuncia el curso con «Colombia: 3er país con más ciberataques en Latinoamérica», cifra sin fuente; además dice «5 sem · 25h» mientras el curso marca semanas 1-16. Conviene corregirlo.
3. El módulo 1 conserva preguntas con estructura «Tema: ¿…?» menos situadas que las de los módulos 2 y 3; podrían convertirse en casos de aula en una próxima pasada.
4. Cuando el módulo se desbloquea al recargar la página (`S.unlock`), la etiqueta «🔒 Completa el anterior» no se retira (solo visual; no se tocó el JS).
5. Registrar los DOI nuevos en `docs/VERIFICACION_DOI.md` y una línea en `docs/REVISION_CURSOS.md`. No se hizo commit ni push.

## Auditoría (Dot distinto del autor)
Fecha: 2026-10-27 · `Dot_Auditor_Riguroso` (no escribió el contenido) · Estado: **sigue en revisión** hasta la aprobación humana.

**Afirmaciones marcadas con (*), contrastadas con el resumen del artículo** (vía IDEAS/RePEc, repositorio de Cambridge, Universidad de Corea y Stanford; Crossref y OpenAlex no se pudieron abrir en esta sesión por permisos de red):
- Pennycook y colegas (2021): **confirmado.** Cuatro experimentos de encuesta y uno de campo en Twitter; un empujón sutil hacia la exactitud mejora la calidad de lo que se comparte.
- Jeong, Cho y Hwang (2012): **confirmado** (51 intervenciones, d = 0,37; más eficaces con más sesiones). Se precisó en la tarjeta: «reunió 51 intervenciones… mayores en programas con más sesiones».
- Wineburg y colegas (2022): **corregido.** El resumen habla de un diseño aleatorizado por grupos y de un crecimiento significativo en las clases experimentales (unos 500 estudiantes, seis lecciones de 50 min, según Stanford), pero no afirma de forma literal la comparación con el control. Se reescribió así, con el matiz de que aún quedaba margen de mejora.
- Gaffney y colegas (2019): **confirmado y precisado** (24 publicaciones; perpetración, entre un 10 % y un 15 % menos, aproximadamente; victimización, alrededor de un 14 % menos).
- Guess (2023), Stoilova (2020), Roozenbeek (2022) y Roozenbeek y van der Linden (2019): coherentes con el resumen ya verificado por el autor; las seis técnicas de Bad News son correctas.

**Normas** (contraste con el texto conocido; la fuente oficial no se abrió en esta sesión): Ley 1581 de 2012 (arts. 4, 5, 6 y 7), Ley 1273 de 2009 (art. 269A «sin autorización o por fuera de lo acordado»), Ley 1620 de 2013 (art. 2, definición de ciberacoso) y Decreto 1965 de 2013 (art. 40: tipo II = repetida o sistemática, o daño al cuerpo o a la salud sin incapacidad; compilado en el Decreto 1075 de 2015): **correctas**. Queda la confirmación en la fuente oficial por parte de la coordinación.

**Preguntas (21):** clave única y correcta, claves repartidas A-D, sin marcas que delaten, retroalimentación coherente con la clave; la correcta nunca es la más larga por más de 3 caracteres. **HTML:** etiquetas equilibradas. **Ortografía:** sin faltas de tildes. **Casos:** nombres genéricos y ficticios (Tomás, Marcela, Andrés). Observación menor: el módulo 1 trata de «tú» y los módulos 2 y 3 de «usted» (no se cambió).

**Pruebas:** kb y kb plus cargan con `node`; `node taller/tools/validar.js todo` OK (0 avisos). Playwright con Chromium, dominios externos bloqueados y `http.server` 8843 (detenido al final): a 1280 y 390 px, 0 errores de página y sin desborde (scrollWidth = ancho); recorrido completo con clics reales: 100 % a 1280 px y 86 % a 390 px (un error a propósito), botón «Siguiente módulo» desbloquea y abre el módulo siguiente; 3 tarjetas «Actualización 2026».
