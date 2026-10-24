# Revisión del curso 07 · Inteligencia artificial para docentes (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueba el docente o el equipo responsable; falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso07_inteligencia_artificial.html`, `kb/sabi_curso07_inteligencia_artificial.js` y `kb/plus/sabi_curso07_inteligencia_artificial.js` (este último se revisó y no necesitó cambios: su afirmación sobre la edad mínima de 13 años de la guía UNESCO 2023 se verificó).

## 1. Qué se encontró
- **Error que bloqueaba el curso:** 29 de las 35 preguntas tenían solo 2 opciones (se había perdido la opción correcta; las dos que quedaban eran distractores). En 17 la clave apuntaba a una opción inexistente (`S.check(…,2)` con opciones 0 y 1) y en las otras 12 la «correcta» era un distractor erróneo. En los módulos 1, 3 y 5 (4-5 preguntas imposibles) era imposible llegar al 70 %: el curso quedaba bloqueado desde el módulo 1.
- En las 6 preguntas con 4 opciones, la correcta era siempre la más larga (hasta 600 caracteres frente a 70) y siempre la B o la C.
- **Cifras y afirmaciones inventadas o sin fuente:** «54 % de los maestros colombianos ha probado ChatGPT y solo 18 % lo usa sistemáticamente (MEN 2024)»; «ChatGPT obtiene un 80 % en el ICFES de lenguaje»; «McKinsey 2024: 35 % de los empleos en Colombia con alta exposición»; «el ICFES está adaptándose a la IA»; deepfakes, bots y perfilamiento psicológico «documentados en las elecciones colombianas de 2022 y 2023»; casos de éxito con nombres de instituciones reales (Colegio Nuevo Chile, INEM de Cali, Escuela Normal de Medellín, una institución rural de Nariño) sin fuente; «el SENA ofrece formación en IA desde 2022»; «Política Nacional de IA de 2019 actualizada en 2023»; «ChatGPT, la tecnología que más rápido creció en la historia». Se retiraron o se reemplazaron por fuentes verificadas.
- **Datos de herramientas desactualizados o sin criterio** («Claude es mejor para documentos largos», «ChatGPT tiene versión gratuita funcional») y ninguna mención a edades mínimas ni privacidad.
- Retroalimentaciones que remitían a contenidos inexistentes («las 5 preguntas», «estas 3 capas», «el contrato de IA») porque se había perdido la opción correcta. Anglicismos sin necesidad (*outputs*, *facilitation*).

## 2. Qué se corrigió (con fuente verificada)
DOI comprobados contra Crossref (api.crossref.org) el 2026-10-24: autor, título, año y revista coinciden. Los resultados numéricos se tomaron del resumen del artículo o de su página editorial.

| Afirmación | Fuente | DOI |
| --- | --- | --- |
| Turing propone el juego de la imitación (1950) | Turing (1950). *Mind*, 59(236), 433-460 | 10.1093/mind/LIX.236.433 |
| Alucinaciones en generación de lenguaje | Ji y otros (2023). *ACM Computing Surveys*, 55(12), 1-38 | 10.1145/3571730 |
| 55 % (GPT-3.5) y 18 % (GPT-4) de referencias inventadas; 43 % y 24 % de las reales con errores | Walters y Wilder (2023). *Scientific Reports*, 13, 14045 | 10.1038/s41598-023-41032-5 |
| Edad mínima de 13 años, enfoque centrado en el ser humano | UNESCO (2023). *Guidance for generative AI in education and research* | 10.54675/EWZM9535 |
| Marco docente: 15 competencias, 5 dimensiones, 3 niveles | UNESCO (2024). *AI competency framework for teachers* | 10.54675/ZJTE2084 |
| Marco de estudiantes: 12 competencias, 4 dimensiones | UNESCO (2024). *AI competency framework for students* | 10.54675/JKJB9835 |
| Acceso libre a GPT-4: +48 % en práctica, −17 % al retirarlo; tutor con salvaguardas +127 % y daño mitigado (casi 1.000 estudiantes) | Bastani y otros (2025). *PNAS*, 122(26), e2422633122 | 10.1073/pnas.2422633122 |
| Tutor de IA con buenas prácticas > clase activa (194 estudiantes de física, Harvard) | Kestin y otros (2025). *Scientific Reports*, 15, 17458 | 10.1038/s41598-025-97652-6 |
| Mejor nota del ensayo con ChatGPT sin más conocimiento ni transferencia; «pereza metacognitiva» (117 universitarios) | Fan y otros (2025). *British Journal of Educational Technology*, 56(2), 489-530 | 10.1111/bjet.13544 |
| 14 detectores (incluido Turnitin) ni precisos ni confiables | Weber-Wulff y otros (2023). *International Journal for Educational Integrity*, 19, 26 | 10.1007/s40979-023-00146-z |
| Detectores sesgados contra quienes escriben en segunda lengua | Liang y otros (2023). *Patterns*, 4(7), 100779 | 10.1016/j.patter.2023.100779 |
| Algoritmo de salud con sesgo racial por variable sustituta (gasto) | Obermeyer y otros (2019). *Science*, 366(6464), 447-453 | 10.1126/science.aax2342 |
| Deepfakes: engañan a pocos, pero aumentan la incertidumbre y reducen la confianza en noticias | Vaccari y Chadwick (2020). *Social Media + Society*, 6(1) | 10.1177/2056305120903408 |

Fuentes sin DOI verificadas en su fuente primaria u oficial:
- Buolamwini y Gebru (2018), *Gender Shades*, PMLR 81, 77-91 (errores de hasta 34,7 % frente a 0,8 %).
- CONPES 3975 de 2019 y **CONPES 4144 de 2025** (aprobado el 14 de febrero de 2025; más de 100 acciones hasta 2030; competencias digitales para docentes y estudiantes): DNP y MinTIC.
- **SIC, Circular Externa 002 de 2024** (21 de agosto): datos personales en sistemas de IA.
- Ley 1581 de 2012 (art. 5 datos sensibles; art. 7 niños, niñas y adolescentes, condicionado por la Sentencia C-748 de 2011, según la cita del propio Decreto 0769 de 2026). El texto de la ley en secretariasenado.gov.co no se pudo abrir en esta sesión; conviene contrastar el artículo 7 con la fuente oficial.
- **Ley 2489 de 2025 y Decreto 0769 de 2026** (16 de julio de 2026): entornos digitales sanos y seguros; actualización del PEI y del Manual de Convivencia; lineamientos de MinTIC para evaluar sesgos y privacidad desde el diseño (normograma de MinTIC).
- Reglamento (UE) 2024/1689, anexo III, punto 3: IA en educación de alto riesgo (AI Act Service Desk de la Comisión Europea).
- OIT (2025), Documento de trabajo 140 y nota de investigación: una de cada cuatro personas trabajadoras en ocupaciones con algún grado de exposición; administrativas, las más expuestas; 3,3 % en la categoría máxima (4,7 % mujeres, 2,4 % hombres); 34 % en países de ingresos altos frente a 11 % en bajos; mayoría de empleos se transforma.
- Education Endowment Foundation (12 de diciembre de 2024): 259 docentes de ciencias de grados 7 y 8 en 68 colegios; planeación semanal de 81,5 a 56,2 minutos (≈31 %); sin diferencias de calidad apreciables.
- Términos de uso vigentes a octubre de 2026: OpenAI (efectivos desde el 1 de enero de 2026: 13 años y permiso de padres para menores de 18); Anthropic Claude para consumidores (8 de octubre de 2025: 18 años); Google Gemini (menores de 13 con cuenta supervisada que activan los padres en Family Link).
- ChatGPT: lanzado el 30 de noviembre de 2022; más de un millón de usuarios en cinco días según anunció OpenAI (se retiró el «más rápido de la historia»).
- UNESCO (2023): menos del 10 % de más de 450 escuelas y universidades encuestadas tenía orientaciones sobre IA generativa (comunicado del 7 de septiembre de 2023).

**Cifras retiradas sin reemplazo:** 54 % / 18 % (MEN 2024), ICFES 80 %, McKinsey 35 %, casos de éxito con instituciones reales, afirmaciones sobre elecciones colombianas.

## 3. Qué se reescribió o añadió
- Los 5 módulos: introducción nueva; las 4 tarjetas existentes corregidas y ampliadas (130-250 palabras); **2 tarjetas nuevas por módulo**: «Ejemplo resuelto en CENTEC y errores frecuentes» (nombres ficticios, pasos, errores e indicadores Bloom) y «Actualización 2026» (evidencia o normativa con fuente y nota «Contenido en revisión»). Total: 30 tarjetas.
- La tarjeta de «casos de éxito colombianos» se reemplazó por «Pilotos con evidencia: decidir con datos propios»; la de «próximos 5 años», por «Indicadores de aprendizaje: más que actividad»; la de herramientas, por criterios estables de elección (integración, edad mínima, privacidad, costo).
- **35 preguntas con 4 opciones**, una sola correcta, claves repartidas A-D en cada módulo, opciones de longitud similar, retroalimentación que explica por qué cada distractor falla y pista que orienta sin revelar. Se conservaron los marcadores de nivel.
- Contadores 5 módulos · 35 preguntas coherentes. No se tocaron diseño, CSS ni JS.
- `kb/sabi_curso07_inteligencia_artificial.js`: fuentes actualizadas (7, con DOI cuando existe): UNESCO 2021, 2023 y 2024, CONPES 4144, Ley 1581, Weber-Wulff 2023 y Bastani 2025. Línea de tiempo: sale Deep Blue (sigue en flashcards) y entra el CONPES 4144 de 2025.

## 4. Pruebas
- `node -e "global.window={};require('./kb/…')"` OK en `kb/` y `kb/plus/`.
- `node taller/tools/validar.js todo`: ✓ OK (0 avisos).
- Playwright (Chromium, dominios externos bloqueados), 1280 px y 390 px: 0 errores de consola o de página, sin desborde horizontal, los 5 módulos aprobados en orden al 100 %; una respuesta incorrecta muestra la pista.

## 5. Queda para revisión humana
1. Aprobación del docente del área (Dot_EducacionDigital_IA) y auditoría de un Dot distinto del autor.
2. Revisar cada periodo los términos de uso y edades mínimas de las herramientas (cambian con frecuencia).
3. Contrastar el artículo 7 de la Ley 1581 de 2012 en la fuente oficial (no se pudo abrir en esta sesión) y seguir las resoluciones pendientes del Decreto 0769 de 2026 (MEN y MinTIC).
4. TALIS 2024 (OCDE, 2025) trae datos de Colombia sobre uso de IA por docentes; si se quiere dar una cifra, tomarla de la nota de país oficial (no se pudo extraer en esta sesión).
5. Registrar los DOI nuevos en `docs/VERIFICACION_DOI.md` y una línea en `docs/REVISION_CURSOS.md` (no se editaron para no chocar con los agentes en paralelo).
6. No se hizo commit ni push.

## Auditoría (Dot distinto del autor)

Fecha: 2026-10-24 · Dot_Auditor_Riguroso (no escribió el contenido) · Lista: `docs/ESTANDAR_CURSOS_SABI.md`, sección 8. Estado: sigue **en revisión** hasta aprobación humana.

**1. Normas recientes (verificadas en la fuente oficial o primaria):**
- CONPES 4144 de 2025: aprobado el 14 de febrero de 2025, más de 100 acciones hasta 2030, seis ejes; el eje de capacidades y talento digital menciona «el desarrollo de competencias digitales para docentes y estudiantes» (DNP). ✔
- SIC, Circular Externa 002 del 21 de agosto de 2024, «Lineamientos sobre el tratamiento de datos personales en sistemas de IA»: responsabilidad demostrada, estudio de impacto de privacidad ante alto riesgo, seguridad, derechos de los titulares y «accesible al público» ≠ «de naturaleza pública» (sede electrónica de la SIC). ✔
- Ley 2489 de 2025 y Decreto 0769 del 16 de julio de 2026 (normograma de MinTIC): el decreto reglamenta la ley; art. 2.2.31.4.4 (actualizar PEI y Manual de Convivencia), 2.2.31.4.5 (rutas frente al ciberacoso), 2.2.31.3.2 (lineamientos de MinTIC sobre sesgos en sistemas automatizados, como autorregulación) y 2.2.31.2.8 (privacidad desde el diseño). ✔
- Reglamento (UE) 2024/1689, anexo III, punto 3 (admisión, evaluación de resultados de aprendizaje, nivel educativo, vigilancia en exámenes). ✔
- Términos de uso a octubre de 2026: OpenAI (vigentes desde el 1 de enero de 2026: 13 años y permiso de padres si es menor de 18), Anthropic para consumidores (8 de octubre de 2025: 18 años), Google Gemini (menores de 13 con cuenta de Family Link; el padre habilita el acceso). ✔

**2. Estudios (Crossref, metadatos completos):** Bastani y otros 2025 (*PNAS* 122(26) e2422633122; 48 %, 127 % y −17 % coinciden con el resumen; Crossref registra una nota de corrección, 10.1073/pnas.2518204122, que conviene leer en la revisión humana), Kestin y otros 2025 (*Sci. Rep.* 15, 17458), Fan y otros 2025 (*BJET* 56(2) 489-530; 117 estudiantes), Weber-Wulff y otros 2023 (*IJEI* 19, 26), Liang y otros 2023 (*Patterns* 4(7) 100779). EEF (12/12/2024, NFER): 259 docentes, 68 colegios, 56,2 frente a 81,5 minutos. OIT, documento de trabajo 140 (2025): 1 de cada 4 (24 %), 3,3 % en la categoría máxima (4,7 % mujeres; 2,4 % hombres), 34 % en países de ingresos altos frente a 11 % en bajos, las ocupaciones administrativas son las más expuestas y lo más probable es la transformación. ✔

**3. Correcciones del auditor:**
- EEF: decía que la planeación «se redujo de 81,5 a 56,2 minutos» (como si fuera un antes y un después) y hablaba de «grados 7 y 8». Ahora dice que fueron 56,2 minutos frente a 81,5 del grupo de comparación, y Year 7 y 8 (de 11 a 13 años).
- Liang y otros (2023): se precisó que el sesgo es contra textos **en inglés** de personas que no tienen el inglés como lengua materna (tarjeta y retroalimentación de la 3.2).
- Pistas por la longitud de las opciones: en 23 de las 35 preguntas la correcta era la opción más larga. Se alargaron 10 distractores y se acortó una correcta (2.5, 2.7, 3.2, 4.1, 4.2, 4.5, 4.7, 5.3, 5.4 y 5.7). Ahora la correcta es la más larga en 14 de 35 preguntas, siempre por 5 caracteres o menos.
- Retroalimentación de la 3.2: ahora explica también por qué fallan A y C.

**4. Preguntas (35):** una sola correcta, con la clave bien puesta. La retroalimentación coincide con las opciones, las pistas no revelan la respuesta, no hay opciones repetidas y las claves se reparten A10/B9/C7/D9. No hay neuromitos: «redes neuronales» aparece con la aclaración «modelos matemáticos». Las tildes están bien. Los casos son ficticios; solo se menciona CENTEC.

**5. Pruebas:** `node -e` en `kb/` y `kb/plus/` OK; `node taller/tools/validar.js todo` ✓ OK, 0 avisos. Playwright con Chromium y dominios externos bloqueados, a 1280 y 390 px: 0 errores de página, sin desborde (scrollWidth = viewport), los 5 módulos aprobados en orden. El módulo 1 salió con 86 % porque se respondió mal una pregunta a propósito para ver la pista, que sí se muestra. Los únicos errores de consola son los recursos externos bloqueados por la prueba (Google Fonts, `sabi-sesion.js`, `sabi-puerta.js`).

**Queda para revisión humana:** leer la corrección de Bastani y otros en *PNAS*; contrastar el art. 7 de la Ley 1581 en secretariasenado.gov.co; seguir las resoluciones de MinTIC y del MEN que pide el Decreto 0769. No se hizo commit.
