# Revisión del curso 20 · Diseño curricular por competencias y proyectos transversales (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueba la coordinación académica de CENTEC; falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso20_diseno_curricular_competencias.html` (canónico), `kb/sabi_curso20_diseno_curricular_competencias.js` y `kb/plus/sabi_curso20_diseno_curricular_competencias.js` (revisado, sin cambios). `sabi_curso20_diseno_curricular.html` es una redirección y no se tocó.

Estructura distinta: 4 tarjetas `mod-card` con `mod-body`, tarjetas `concept-card`, dos `actividad`, un `exercise` por módulo con `resp(this,'qN','X')` y claves en `CORRECT`/`FEEDBACK`, lista de comprobación `chk-item` que marca el módulo como completado, sin bloqueo entre módulos, diploma y avatar con voz. Se respetó esa estructura; no se cambió CSS ni la lógica JS.

## 1. Qué se encontró
- **Las preguntas revelaban la respuesta:** la opción correcta llevaba un «✓» visible en su texto en los 4 ejercicios; además era la más larga y la retroalimentación «no» empezaba con «La respuesta C…».
- **Contenido muy breve** (tarjetas de 35-50 palabras, sin ejemplo resuelto ni errores frecuentes) y con afirmaciones sin respaldo:
  - Definición del MEN «saber hacer en contexto con actitud»: no es la redacción de los EBC (2006), que hablan de «saber hacer flexible que puede actualizarse en distintos contextos».
  - «Competencias básicas del MEN… transversales a todas: pensamiento crítico, resolución de problemas…»: esa lista no es del MEN.
  - «Proyectos PRAE, PIGA y PRAES… obligatorios por ley», con PRAE repetido; el PIGA no es un proyecto pedagógico escolar de orden nacional.
  - «Modelo CENTEC Futuro» y «PEI CENTEC 2026+ prioriza…»: no hay documento que lo respalde en el repositorio; se presentaba como hecho.
  - «Triple alineamiento curricular» presentado como concepto establecido (es una propuesta del curso) y sin mencionar el alineamiento constructivo de Biggs, que sí es el concepto de la literatura.
  - Exageraciones: el portafolio «reemplaza el promedio de notas» y es «la evaluación más honesta» (choca con la escala del Decreto 1290 de 2009); un proyecto de un mes enseña «más que 10 evaluaciones tradicionales… y lo recuerda el resto de su vida»; «tendencias educativas 2025-2026»; cita del encabezado según la cual el currículo por competencias «no organiza por asignaturas» (la Ley 115 mantiene áreas obligatorias).
- **Ninguna fuente revisada por pares con DOI.**
- Incoherencias: «6 semanas» en el encabezado y el diploma, frente a módulos marcados «Semana 1-4». HTML mal cerrado: `<h4>Práctico</div>`, `<h4>Con diploma</div>` y una etiqueta `<footer` duplicada. «Reunion» sin tilde.
- El kb y el kb plus estaban bien hechos (Ley 115 arts. 73, 76, 77; Decreto 1290; Decreto 1743 de 1994; Wiggins y McTighe; Biggs), salvo la flashcard del «triple alineamiento del Modelo CENTEC Futuro» y la definición del glosario.

## 2. Qué se corrigió
- **4 ejercicios reescritos como casos de aula** (nombres ficticios), 4 opciones de 80-90 caracteres, sin «✓», claves repartidas (B, D, A, C) y `data-correct` coherente con `CORRECT`. Retroalimentación nueva: la correcta explica por qué y deja una pregunta de transferencia; la incorrecta explica cada distractor y remite a la tarjeta que hay que releer. El ejercicio 4 pasa a evaluar el alineamiento constructivo.
- **Tarjetas ampliadas a 135-160 palabras** con explicación, base normativa, ejemplo en CENTEC y errores frecuentes:
  - Módulo 1: contenidos vs. competencias; Ley 115 de 1994 (arts. 76, 77, 78 y 79), Lineamientos (1998), EBC (2006, y Guía 22 para inglés), DBA y la regla de citar cada DBA con número y redacción oficial; prioridades de CENTEC reformuladas como «confirma en el PEI vigente», con las áreas SABI de `CLAUDE.md`.
  - Módulo 2: Decreto 1860 de 1994 (art. 36); integración frente a yuxtaposición; art. 14 de la Ley 115 (modificado por la Ley 1029 de 2006), Decreto 1743 de 1994 (PRAE), Ley 1620 de 2013, Ley 1732 de 2014; se retiró el PIGA; andamiaje y cuidado de datos (Ley 1581 de 2012).
  - Módulo 3: tareas de desempeño de Wiggins y McTighe; rúbrica analítica y holística; el portafolio complementa y debe traducirse a la escala nacional y al SIEE (Decreto 1290 de 2009, compilado en el Decreto 1075 de 2015).
  - Módulo 4: plan de estudios (art. 79); coherencia externa (el «triple alineamiento», aclarado como recurso del curso) e interna (alineamiento constructivo de Biggs); diseño inverso en tres etapas y revisión anual.
- **Una tarjeta «Actualización 2026: lo que dice la evidencia» por módulo**, con DOI verificados y «Contenido en revisión»: transferencia (Barnett y Ceci, 2002); aprendizaje basado en proyectos y guía (Chen y Yang, 2019; Kirschner, Sweller y Clark, 2006); rúbricas (Jonsson y Svingby, 2007; Panadero y Jonsson, 2013; Black y Wiliam, 1998); alineamiento constructivo (Biggs, 1996), diciendo que su evidencia empírica directa es limitada. No se añadieron preguntas.
- Encabezado y presentación: cita sin exageraciones, sin «Modelo CENTEC Futuro», sin «tendencias 2025-2026». Duraciones de los módulos alineadas con las 6 semanas que anuncian el índice y el diploma (1, 2-3, 4-5 y 6). Etiquetas y listas de comprobación con «PEI de CENTEC». HTML mal cerrado corregido.
- `kb/sabi_curso20_diseno_curricular_competencias.js`: definición de competencia según los EBC, flashcard y mapa con el alineamiento constructivo, y fuentes de 7 a 14 (6 artículos con DOI, Decreto 1860 de 1994 y Ley 1029 de 2006).

## 3. Fuentes y DOI verificados
DOI comprobados el 2026-10-24 contra Crossref (`api.crossref.org/works/<DOI>`, vía WebFetch): autor, título, año y revista coinciden.

| Módulo | Afirmación | Fuente | DOI | Contenido verificado en |
| --- | --- | --- | --- | --- |
| 1 | La transferencia lejana es difícil y depende de varias dimensiones de distancia (taxonomía) | Barnett y Ceci (2002). *Psychological Bulletin*, 128(4), 612-637 | 10.1037/0033-2909.128.4.612 | metadatos y título (*) |
| 2 | El ABP tiene un efecto promedio positivo en el rendimiento, con moderadores | Chen y Yang (2019). *Educational Research Review*, 26, 71-81 | 10.1016/j.edurev.2018.11.001 | metadatos y título (*) |
| 2 | La guía mínima funciona peor para los novatos | Kirschner, Sweller y Clark (2006). *Educational Psychologist*, 41(2), 75-86 | 10.1207/s15326985ep4102_1 | metadatos y título |
| 3 | Rúbricas: confiabilidad con rúbricas analíticas, ejemplos y formación de evaluadores | Jonsson y Svingby (2007). *Educational Research Review*, 2(2), 130-144 | 10.1016/j.edurev.2007.05.002 | metadatos (*) |
| 3 | Uso formativo de rúbricas: transparencia, autorregulación, autoeficacia | Panadero y Jonsson (2013). *Educational Research Review*, 9, 129-144 | 10.1016/j.edurev.2013.01.002 | metadatos (*) |
| 3 | Evaluación formativa | Black y Wiliam (1998). *Assessment in Education*, 5(1), 7-74 | 10.1080/0969595980050102 | verificado en la revisión del curso 11 |
| 4 | Alineamiento constructivo | Biggs (1996). *Higher Education*, 32(3), 347-364 | 10.1007/BF00138871 | metadatos y título |

(*) Crossref no trae el resumen y el presupuesto de búsqueda web de la sesión se agotó: las afirmaciones se redactaron de forma cualitativa, sin cifras de efecto, coherentes con el título y con lo que se sabe de estos trabajos. **El Dot auditor debe contrastarlas con el resumen.**

Sin DOI (normas y libros): Ley 115 de 1994 (arts. 14, 73, 76, 77, 78, 79); Ley 1029 de 2006; Decreto 1860 de 1994 (art. 36); Decreto 1743 de 1994; Decreto 1290 de 2009; Decreto 1075 de 2015; Ley 1620 de 2013; Ley 1732 de 2014; Ley 1581 de 2012; MEN, Lineamientos Curriculares (1998), Estándares Básicos de Competencias (2006), Guía 22 y DBA; Wiggins y McTighe, *Understanding by Design* (1998; 2.ª ed., 2005, ASCD). **No se pudo abrir en esta sesión el texto oficial de las normas ni de los EBC** (sin acceso a la Secretaría del Senado ni a mineducacion.gov.co; búsqueda agotada). Lo citado coincide con el texto conocido, incluida la frase de los EBC sobre el «saber hacer flexible»; la coordinación debe confirmarlo en la fuente oficial. El curso **no cita la redacción de ningún DBA**: pide al docente copiarla del documento oficial.

## 4. Pruebas
- `node -e "global.window={};require(...)"` OK en `kb/` y `kb/plus/`.
- Playwright (Chromium, dominios externos bloqueados, servidor `http.server` en 8823), 1280 y 390 px: 0 errores de consola o de página, sin desborde horizontal; los 4 módulos abren, tienen su tarjeta 2026 y 4 opciones sin «✓»; `data-correct` coincide con la clave; la respuesta correcta (1280 px) y una incorrecta (390 px) muestran la retroalimentación que corresponde; las listas de comprobación marcan cada módulo como completado; el kb y el kb plus cargan.
- `node taller/tools/validar.js todo`: OK (0 avisos).

## 5. Queda para revisión humana
1. Aprobación de la coordinación académica y auditoría de un Dot distinto del autor (en especial las afirmaciones marcadas con *).
2. Confirmar con el PEI vigente las prioridades institucionales que menciona el módulo 1 (se tomaron de las áreas SABI de `CLAUDE.md`). El índice todavía anuncia «propuesta curricular CENTEC Futuro PEI 2026+» (no se tocó, fuera del alcance).
3. El curso sigue teniendo **una pregunta por módulo** (el estándar pide 7) y los módulos no se bloquean en orden: se respetó la estructura propia del curso. Añadir preguntas exige decidir si se adopta la estructura estándar.
4. El ejercicio admite un solo intento y muestra la clave tras el error; no hay pista previa. Cambiarlo exige tocar JS: decisión del equipo.
5. Hay funciones duplicadas en el JS (`imprimirDiploma` definida tres veces) y un `console.log` de la voz; no producen errores y no se tocaron.
6. «30 horas» del diploma y del índice no se pudo contrastar con las duraciones de los módulos (~4,5 h de lectura más las actividades).
7. Registrar los DOI en `docs/VERIFICACION_DOI.md` (la fila del curso 20 solo tiene Wiggins y McTighe) y una línea en `docs/REVISION_CURSOS.md`. No se hizo commit ni push.

## Auditoría (Dot distinto del autor)
Fecha: 2026-10-27 · Dot_Auditor_Riguroso (no escribió el contenido) · Estado: sigue **en revisión** hasta la aprobación de la coordinación académica. Sin commit.

- **Normativa** (contrastada con el texto conocido; sin acceso en esta sesión a la Secretaría del Senado):
  - Ley 115 de 1994: art. 73 (PEI); art. 76 (definición de currículo); art. 77 (autonomía escolar); art. 78 (plan de estudios particular con objetivos, metodología, distribución del tiempo y criterios de evaluación); art. 79 (definición de plan de estudios).
  - Art. 14 de la Ley 115, modificado por la Ley 1029 de 2006: las cinco enseñanzas obligatorias que menciona el curso.
  - Decreto 1860 de 1994, art. 36: la definición de proyecto pedagógico es casi textual.
  - Decreto 1290 de 2009: SIEE aprobado por el consejo directivo y escala nacional superior, alto, básico y bajo.
  - Decreto 1743 de 1994 (PRAE), Ley 1620 de 2013 y Ley 1732 de 2014 (Cátedra de la Paz).
  - La frase de los EBC (2006) sobre el «saber hacer flexible» es correcta.
- **DOI:** la API de Crossref quedó bloqueada en esta sesión. Biggs (1996, *Higher Education* 32(3), 347-364, 10.1007/BF00138871), Barnett y Ceci (2002), Chen y Yang (2019), Kirschner et al. (2006), Jonsson y Svingby (2007), Panadero y Jonsson (2013) y Black y Wiliam (1998) coinciden con el conocimiento bibliográfico del auditor.
- **Correcciones del auditor** sobre las afirmaciones marcadas con (*):
  - Barnett y Ceci: no «muestran que la transferencia lejana es difícil»; señalan que la evidencia es discutida y poco concluyente, y proponen una taxonomía (se listan sus dimensiones de contexto).
  - Chen y Yang: se retiró la lista concreta de moderadores, que no se pudo comprobar con el resumen; ahora dice «moderadores del diseño y del contexto, como el área».
  - Panadero y Jonsson: los efectos «parecen depender» de que la rúbrica se acompañe de autoevaluación y retroalimentación; antes decía que eran «mayores».
  - Jonsson y Svingby y Biggs: la redacción ya era prudente y fiel.
- **Preguntas:** 4 casos con nombres ficticios y clave única (B, D, A, C), coherente con `data-correct` y `CORRECT`, sin «✓» y con opciones de 80-90 caracteres. La retroalimentación explica cada distractor y remite a la tarjeta que hay que releer. El kb plus tiene 10 ítems con una sola clave.
- **Pruebas:** HTML bien anidado; kb y kb plus cargan. Playwright a 1280 y 390 px: 0 errores de página, sin desborde, los 4 módulos completados (respuesta correcta e incorrecta con la retroalimentación que corresponde) y el diploma toma el nombre. `validar.js todo`: OK.
- **Pendiente:** confirmar los artículos en la fuente oficial y reconsultar los DOI en Crossref cuando haya acceso. Lo demás queda como en la sección 5.
