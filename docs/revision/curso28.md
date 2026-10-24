# Revisión del curso 28 · Alfabetización de datos y estadística para enseñar y decidir (2026-10-24) · estado: en revisión

Archivos: `sabi_curso28_alfabetizacion_datos.html`, `kb/sabi_curso28_alfabetizacion_datos.js`, `kb/plus/sabi_curso28_alfabetizacion_datos.js`.
Dot autor: Dot_Matematicas_Estrategica (producción). Dot auditor: Dot_Auditor_Riguroso (no participó en la redacción).

## 1. Resumen del curso
3 módulos, 21 preguntas (7 por módulo), mínimo 70 % por módulo.
- **M1 · Enseñar estadística con datos reales:** alfabetización estadística (Gal, 2002), ciclo PPDAC (Wild y Pfannkuch, 1999) y GAISE II (2020), tipos de variables, tabla de frecuencias, gráficos honestos, media, mediana y moda, dispersión.
- **M2 · Leer gráficos y no dejarse engañar:** ejes truncados, correlación y causalidad, muestras y sesgo, margen de error ≈ 1/√n, frecuencias naturales (Gigerenzer y Hoffrage, 1995), riesgo relativo y absoluto (Gigerenzer y colaboradores, 2007), interés simple y compuesto, inflación y presupuesto.
- **M3 · Datos para decidir en el aula:** análisis de ítems y distractores (Black y Wiliam, 1998; Hattie y Timperley, 2007), lectura de resultados Saber 11, grupos pequeños y regresión a la media, Ley 1581 de 2012, hojas de cálculo gratuitas, ciclo de mejora y proyecto PPDAC.
- kb: glosario (14), flashcards (10), línea de tiempo, 5W1H, flujo, mapa, errores, recuperación, caso, Bloom N1-N6, 8 fuentes. kb/plus: audio-lección, quiz de 10 ítems y reto de 7 días.

## 2. DOI verificados (Crossref, 2026-10-24)
| Fuente | DOI | Crossref |
| --- | --- | --- |
| Wild y Pfannkuch (1999), International Statistical Review | 10.1111/j.1751-5823.1999.tb00442.x | 67(3), 223-248 · coincide |
| Gal (2002), International Statistical Review | 10.1111/j.1751-5823.2002.tb00336.x | 70(1), 1-25 · coincide |
| Gigerenzer y Hoffrage (1995), Psychological Review | 10.1037/0033-295X.102.4.684 | 102(4), 684-704 · coincide |
| Gigerenzer, Gaissmaier, Kurz-Milcke, Schwartz y Woloshin (2007), Psychological Science in the Public Interest | 10.1111/j.1539-6053.2008.00033.x | 8(2), 53-96 · coincide |
| Black y Wiliam (1998), Assessment in Education | 10.1080/0969595980050102 | 5(1), 7-74 · coincide |
| Hattie y Timperley (2007), Review of Educational Research | 10.3102/003465430298487 | 77(1), 81-112 · ya registrado |

GAISE II (Bargagliotti y colaboradores, 2020, ASA y NCTM) es un informe sin DOI; se cita como tal.

## 3. Auditoría (Dot distinto del autor)
**Cálculos recalculados con Python (todos correctos):**
- Lectura 10, 15, 15, 20, 20, 20, 25, 30, 90: suma 245; media 27,22; mediana 20; moda 20; sin el 90, 155/8 = 19,375; 7 de 9 leen ≤ 25 min.
- Notas A y B: medias 3,6; rangos 1,0 y 3,0; DE poblacional 0,374 y 1,068; muestral 0,418 y 1,194.
- Transporte 12/9/6/3 de 30: 40/30/20/10 %; 12+9+6+4 = 31 (detecta el error).
- Eje truncado 82 frente a 86: 4 puntos; 86/82 = 1,049. Frecuencias naturales: 9/108 = 0,0833; 6/36 = 0,1667.
- Riesgo 2→3 por 1.000: relativo 50 %, absoluto 0,1 puntos porcentuales. Riesgo 1→2 por 10.000 (plus): +1 por 10.000.
- 1.000.000 × 1,01^12 = 1.126.825,03; simple 1.120.000. Plus: 500.000 × 1,02^3 = 530.604.
- 1,05/1,08 − 1 = −0,0278. Presupuesto: suma 2.000.000 y 100 %; 12,5 % y 7,5 % correctos.
- 1/√100 = 0,10 y 1/√400 = 0,05; 1,96·√(0,25/100) = 0,098.

**Correcciones hechas:**
1. Margen de error: el texto ya decía «aproximación para proporciones con muestreo aleatorio al 95 %». Se añadió que es el margen máximo (proporción cercana al 50 %) y de dónde sale: 1,96 × √(0,25/n) ≈ 1/√n.
2. Ley 1581 de 2012: el «interés superior» del menor se precisa con el art. 7 de la ley y el art. 12 del Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015).
3. kb: se añadió a las fuentes Hattie y Timperley (2007), que se citaba en la tarjeta de evaluación formativa y no figuraba en la lista.

**Verificado sin cambios:**
- EBC de matemáticas (MEN, 2006), pensamiento aleatorio: «Interpreto y comparo resultados de estudios con información estadística provenientes de medios de comunicación» (10.° y 11.°) y «Reconozco cómo diferentes maneras de presentación de información pueden originar distintas interpretaciones» (8.° y 9.°). La primera coincide palabra por palabra con dos fuentes secundarias (classace.io y publicaciones de Redipe). El PDF oficial del MEN (articles-116042_archivo_pdf2.pdf) se consultó, pero sus tablas de estándares no se pudieron extraer como texto. Por eso el curso conserva la nota «redacción pendiente de cotejo con el documento oficial», que es la correcta.
- Saber 11, según el comunicado del MEN sobre los resultados individuales: puntaje global de 0 a 500, cada prueba de 0 a 100, el percentil «indica el porcentaje de evaluados que obtuvo un puntaje inferior» y hay niveles de desempeño (inglés según el MCER). El curso lo dice así y no inventa cifras.
- PPDAC atribuido a MacKay y Oldford y retomado por Wild y Pfannkuch: correcto. Los 4 componentes de GAISE II: correctos.
- Preguntas (21 del HTML y 10 del quiz plus): cada una tiene una sola opción correcta y la clave coincide. La retroalimentación explica la respuesta. La pista («Reflexiona de nuevo») orienta sin revelar la respuesta.
- No hay neuromitos. Todos los casos son ficticios. Se advierte que no se deben usar datos económicos reales de las familias. «Contenido en revisión» aparece en la introducción del M1 y en el pie de página.
- Ortografía y tildes revisadas sin hallazgos.

## 4. Pruebas
- `node` carga kb y kb/plus sin errores (C28, quiz 10). `node taller/tools/validar.js todo`: OK (0 avisos).
- Playwright con Chromium, dominios externos bloqueados, a 1280 y 390 px: 0 errores de página o de consola y 0 px de desborde. Los módulos 1→3 se aprueban en orden respondiendo la clave. `sabi_dots.js` carga `window.SABI_KB` (C28).

## 5. Para revisión humana
- Cotejar las dos redacciones de los EBC con el PDF impreso u oficial del MEN.
- Confirmar los nombres de las funciones de desviación estándar (DESVEST.P y DESVEST.M) en la versión de LibreOffice y de Hojas de cálculo de Google que usa el colegio.
- Aprobación del docente de matemáticas y del equipo académico.
