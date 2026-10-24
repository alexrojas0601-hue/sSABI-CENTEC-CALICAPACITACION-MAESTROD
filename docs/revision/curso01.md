# Revisión del curso 01 · Bienestar docente y prevención del burnout

Fecha: 2026-10-24 · Autor de la mejora: Dot autor (Claude) · Estado: **en revisión** (lo aprueba el docente o el equipo responsable; falta la revisión de un Dot auditor distinto del autor).

Archivos: `sabi_curso01_bienestar_burnout.html`, `kb/sabi_curso01_bienestar_burnout.js`. `kb/plus/sabi_curso01_bienestar_burnout.js` se revisó y no necesitó cambios.

## 1. Diagnóstico inicial
- Casi todas las cifras de las tarjetas, introducciones y preguntas eran **inventadas o mal atribuidas**, con autores reales y años falsos («Lupien 2024», «Gross 2024», «Bandura 2024», «Hatfield 2024», «Walker 2024», «Wrzesniewski 2024», «Chetty 2024», «Baumeister 2024», «McKinsey 2024», «TALIS 2024: 42 % con burnout», «MEN 2023: 68 % confunde estrés y burnout», «Finlandia invierte el 8 %», etc.).
- **Neuromitos y neuro-exageraciones**: «el cortisol destruye neuronas a ritmo medible», contagio emocional «en 200 ms por neuronas espejo», «aprendizaje neurobiológicamente imposible», «corteza prefrontal suprimida», ciclos ultradianos exactos de 90 min con caída del 40 %, «fuerza de voluntad como recurso limitado» presentada como hecho, toxinas eliminadas en el sueño REM.
- **Error de funcionamiento**: la pregunta 6 del módulo 5 (`q5_6`) tenía solo 2 opciones y la clave apuntaba a una tercera inexistente: el módulo 5 no se podía aprobar con 7/7.
- Preguntas de plantilla: la respuesta correcta era siempre la opción más larga y los distractores eran absurdos; la pregunta 7 de varios módulos era una síntesis genérica («filosofía SABI») sin contenido evaluable.
- Afirmaciones técnicas erróneas: «los tres componentes deben estar presentes para diagnóstico clínico» (el MBI no es diagnóstico), «MBI-T» (protocolo inexistente con ese nombre), Mansfield con «contexto» como dimensión.

## 2. Qué se corrigió (con fuente)
Se reescribieron intro, 4 tarjetas y 7 preguntas de cada uno de los 6 módulos, con el mismo HTML y CSS. Todas las cifras que quedaron están verificadas:

| Dato | Fuente verificada |
| --- | --- |
| Colombia: 8 % reporta «mucho estrés» (OCDE 19 %); 4 % dice que el trabajo afecta mucho su salud mental; 97 % satisfecho | BID, Nota CIMA n.º 36 (Viteri, Barros y Zoido, oct. 2025), datos OCDE TALIS 2024 |
| 39 % trabaja 40-50 h/sem.; 16 % > 50 h; calificación y trabajo administrativo ≈ 16 % cada uno | LEE, Pontificia Universidad Javeriana, informe 132 (2025), con datos TALIS 2024 (fuente secundaria) |
| CIE-11 QD85: fenómeno ocupacional, tres dimensiones, aprobada 2019, vigente 2022 | OMS, CIE-11 |
| MBI no es diagnóstico; seis áreas de la vida laboral | Maslach y Leiter (2016), World Psychiatry, DOI 10.1002/wps.20311 |
| Superposición burnout-depresión | Bianchi, Schonfeld y Laurent (2015), Clin. Psychol. Rev., DOI 10.1016/j.cpr.2015.01.004 |
| Burnout y funciones cognitivas (asociación) | Koutsimani y colegas (2021), IJERPH, DOI 10.3390/ijerph18042145 |
| Burnout docente y resultados de estudiantes (14 estudios, evidencia preliminar) | Madigan y Kim (2021), Int. J. Educ. Res. 105, DOI 10.1016/j.ijer.2020.101714 |
| Burnout docente y cortisol de estudiantes (correlacional) | Oberle y Schonert-Reichl (2016), Soc. Sci. Med., DOI 10.1016/j.socscimed.2016.04.031 |
| Autoeficacia y burnout | Skaalvik y Skaalvik (2010), TATE, DOI 10.1016/j.tate.2009.11.001 |
| Aprendizaje activo en STEM universitario | Freeman y colegas (2014), PNAS, DOI 10.1073/pnas.1319030111 |
| Intervenciones contra el burnout docente: d = 0,18, 23 ensayos | Iancu y colegas (2018), Educ. Psychol. Rev., DOI 10.1007/s10648-017-9420-8 |
| Atención plena en docentes: 29 estudios, g ≈ 0,60 con sesgo de publicación | Klingbeil y Renshaw (2018), Sch. Psychol. Q., DOI 10.1037/spq0000291 |
| Revisión de atención plena en educadores | Lomas y colegas (2017), TATE, DOI 10.1016/j.tate.2016.10.008 |
| CARE for Teachers (ensayo aleatorizado) | Jennings y colegas (2017), J. Educ. Psychol., DOI 10.1037/edu0000187 |
| Reevaluación vs. supresión | Gross y John (2003), JPSP, DOI 10.1037/0022-3514.85.2.348; Webb, Miles y Sheeran (2012), Psychol. Bull., DOI 10.1037/a0027600 |
| Autodistanciamiento | Kross y colegas (2014), JPSP, DOI 10.1037/a0035173 |
| Escritura expresiva (efecto pequeño) | Frattaroli (2006), Psychol. Bull., DOI 10.1037/0033-2909.132.6.823 |
| Agotamiento del ego d = 0,04 (23 laboratorios, N = 2141) | Hagger y colegas (2016), Perspect. Psychol. Sci., DOI 10.1177/1745691616652873 |
| Resiliencia docente: dimensiones profesional, emocional, motivacional y social | Mansfield, Beltman, Price y McConney (2012), TATE, DOI 10.1016/j.tate.2011.11.001 |
| Modelo de habilidades de IE | Mayer, Caruso y Salovey (2016), Emotion Review, DOI 10.1177/1754073916639667 |
| IE y desempeño | Joseph y Newman (2010), J. Appl. Psychol., DOI 10.1037/a0017286 |
| IE entrenable | Mattingly y Kraiger (2019), HRM Review, DOI 10.1016/j.hrmr.2018.03.002 |
| IE y burnout docente | Mérida-López y Extremera (2017), Int. J. Educ. Res., DOI 10.1016/j.ijer.2017.07.006 |
| RULER: ensayo en 62 escuelas (clima de aula) | Rivers y colegas (2013), Prev. Sci., DOI 10.1007/s11121-012-0305-2 |
| ASE: metaanálisis | Durlak y colegas (2011), Child Dev., DOI 10.1111/j.1467-8624.2010.01564.x; Cipriano y colegas (2023), Child Dev., DOI 10.1111/cdev.13968 (424 estudios, 53 países, 575 361 estudiantes) |
| Aula prosocial | Jennings y Greenberg (2009), RER, DOI 10.3102/0034654308325693 |
| Contagio emocional | Hatfield, Cacioppo y Rapson (1993), Curr. Dir. Psychol. Sci., DOI 10.1111/1467-8721.ep10770953; Frenzel y colegas (2009), J. Educ. Psychol., DOI 10.1037/a0014695 |
| Malestar empático vs. compasión | Singer y Klimecki (2014), Curr. Biol., DOI 10.1016/j.cub.2014.06.054 |
| Empatía autoatribuida vs. exactitud empática | Zaki, Bolger y Ochsner (2008), Psychol. Sci. 19(4), 399-404 |
| Seguridad psicológica | Edmondson (1999), ASQ, DOI 10.2307/2666999 |
| Clima de error | Steuer, Rosentritt-Brunn y Dresel (2013), Contemp. Educ. Psychol., DOI 10.1016/j.cedpsych.2013.03.002; Dresel y colegas (2025), Br. J. Educ. Psychol. 95(1), 180-196, DOI 10.1111/bjep.12697 |
| Etiquetado afectivo | Lieberman y colegas (2007), Psychol. Sci., DOI 10.1111/j.1467-9280.2007.01916.x |
| Relaciones docente-estudiante | Roorda y colegas (2011), RER, DOI 10.3102/0034654311421793 |
| Tiempo de espera | Rowe (1986), J. Teach. Educ., DOI 10.1177/002248718603700110 |
| Prácticas restaurativas: evidencia mixta | Acosta y colegas (2019), J. Youth Adolesc., DOI 10.1007/s10964-019-01013-2; RAND (2018), informe Pittsburgh (resumen en el comentario de RAND, abril de 2019) |
| Costos de alternar tareas | Monsell (2003), Trends Cogn. Sci., DOI 10.1016/S1364-6613(03)00028-7 |
| Micropausas (22 estudios) | Albulescu y colegas (2022), PLOS ONE, DOI 10.1371/journal.pone.0272460 |
| Autonomía docente | Skaalvik y Skaalvik (2014), Psychol. Rep., DOI 10.2466/14.02.PR0.114k14w0 |
| Voz: 57,7 % docentes vs. 28,8 % (EE. UU.) | Roy y colegas (2004), JSLHR, DOI 10.1044/1092-4388(2004/023) |
| Sueño 7-9 h (26-64 años) | Hirshkowitz y colegas (2015), Sleep Health, DOI 10.1016/j.sleh.2014.12.010 |
| Actividad física 150-300 min | Bull y colegas (2020), BJSM, DOI 10.1136/bjsports-2020-102955 |
| Valor agregado docente y vida adulta (≈ 250 000 USD por aula) | Chetty, Friedman y Rockoff (2014), AER, DOI 10.1257/aer.104.9.2633 |
| Rediseño del trabajo (job crafting) | Wrzesniewski y Dutton (2001), AMR, DOI 10.5465/amr.2001.4378011 |
| Coaching docente: 0,49 DE práctica, 0,18 DE rendimiento, 60 estudios | Kraft, Blazar y Hogan (2018), RER, DOI 10.3102/0034654318759268 |
| Normativa | Ley 2191 de 2022 (desconexión laboral, 6 ene. 2022); Resolución 2764 de 2022 (MinTrabajo, 18 jul. 2022: batería, protocolos para educación y para agotamiento laboral, evaluación anual o bienal); Resolución 2646 de 2008; Decreto 1072 de 2015; Ley 1620 de 2013 y Decreto 1965 de 2013 (situaciones tipo I, II, III); Ley 115 de 1994, art. 77; Ley 1010 de 2006 |
| OMS | Directrices de la OMS sobre salud mental en el trabajo (2022) |

Retirado o reformulado sin número: todas las cifras del párrafo 1; Covey y Newport quedan como libros de divulgación (marco, no evidencia); la frase de Joyce y Showers sobre transferencia se presenta como no verificable; la evidencia de la CNV se declara limitada.

## 3. Qué se añadió
- Una tarjeta **«Actualización 2026: lo que dice la evidencia»** por módulo (6), con 3-5 hallazgos verificados cada una.
- En el módulo 3, una tarjeta nueva sobre el aula emocionalmente segura (sustituye a la que repetía cifras inventadas).
- Preguntas nuevas que corrigen mitos: lectura correcta de TALIS 2024, Ley 2191 de 2022, clasificación tipo II del Decreto 1965, mito de los 90 minutos, frase «neurobiológicamente imposible», directrices OMS 2022, interpretación del estudio de Chetty.
- Las 42 preguntas tienen 4 opciones, una sola correcta, claves repartidas entre A-D, opciones de longitud similar, retroalimentación que explica y retroalimentación de error que orienta sin revelar la respuesta.
- `kb/sabi_curso01_bienestar_burnout.js`: línea de tiempo con 2022 (Ley 2191 y Resolución 2764); mapa y «dominar» actualizados («Pausas breves» en lugar de «Ciclos de energía»; afirmación neuro suavizada); fuentes con DOI verificados (Maslach y Leiter 2016, Iancu y colegas 2018) y normas 2022.
- Sin cambios de diseño, CSS ni JS; los contadores (6 módulos, 42 preguntas) siguen siendo correctos.

## 4. Pruebas
- `node -e "global.window={};require('./kb/...')"` en OK para kb y kb/plus.
- Playwright (Chromium, dominios externos bloqueados) a 1280 y 390 px: 0 errores de página; los únicos errores de consola son los 4 recursos externos bloqueados a propósito (fuentes, sesión SABI, puerta SABI); sin desborde horizontal; los 6 módulos se aprueban en orden con 100 %. `node taller/tools/validar.js todo` en OK.

## 5. Pendiente para revisión humana
1. Revisión por un Dot auditor distinto del autor y aprobación del docente o equipo responsable.
2. Las cifras de TALIS 2024 provienen de fuentes secundarias (BID, LEE-Javeriana); conviene contrastarlas con la nota de país o la base de datos de la OCDE.
3. Registrar en `docs/VERIFICACION_DOI.md` los DOI nuevos de la tabla (no se editó ese archivo para evitar conflictos con otros agentes que trabajan en paralelo).
4. No se pudo leer el resumen completo de Albulescu y colegas (2022) en el sitio del editor (permiso no concedido); las cifras se tomaron de Crossref y de la nota de prensa de ScienceDaily.
5. El estándar pide 6-8 tarjetas de 130-250 palabras por módulo; el curso tiene 5-6 tarjetas de unas 115-155 palabras. Ampliar requiere decidir si se cambia la estructura.
6. El texto del curso cita la ruta de orientación escolar y la del SG-SST; confirmar los nombres exactos de los responsables en CENTEC.

## Auditoría (Dot distinto del autor)
Fecha: 2026-10-24 · Dot_Auditor_Riguroso (no escribió el contenido) · Estado: sigue **en revisión** hasta aprobación humana.

**Verificado (muestra de 20+ afirmaciones):**
- TALIS 2024 Colombia (8 % «mucho estrés», OCDE 19 %; 4 % salud mental muy afectada, OCDE 10 %; 97 % satisfecho): coincide con la Nota CIMA n.º 36 del BID (Viteri, Barros y Zoido, oct. 2025). La nota de país de la OCDE no se pudo leer (el sitio bloquea la descarga automática); una nota de ExE (2025) que cita el informe OCDE (p. 74) confirma que Colombia está por debajo del 10 % en estrés alto. Se mantiene la atribución a la fuente secundaria, como ya decía el texto.
- LEE Javeriana, informe n.º 132 (25 nov. 2025): 39 % trabaja 40-50 h, 16 % más de 50 h, calificación y labores administrativas ≈ 16 % cada una. Correcto.
- Iancu y colegas (2018): 23 ensayos, d = 0,18, despersonalización casi nula (d = 0,03), menos de un mes = menor eficacia. Correcto (resumen del editor). Crossref: en línea 2017, número de 2018.
- Klingbeil y Renshaw (2018): 29 estudios, N = 1493, evidencia de sesgo de publicación. Correcto.
- Albulescu y colegas (2022): 22 estudios, pausas ≤ 10 min, más vigor y menos fatiga, sin efecto global en rendimiento; pausas más largas mejor en tareas creativas o administrativas. Correcto (nota de ScienceDaily; la página de PLOS no se pudo abrir).
- Dresel y colegas (2025), BJEP 95(1), 180-196, DOI 10.1111/bjep.12697; Gross (1998) DOI 10.1037/1089-2680.2.3.271; Maslach y Leiter (2016) DOI 10.1002/wps.20311: metadatos Crossref coinciden.
- Resolución 2764 de 2022: expedida el 18 jul. 2022; art. 3, evaluación anual con riesgo alto y cada dos años con riesgo medio o bajo; art. 1 adopta el protocolo del sector educativo y el de síndrome de agotamiento laboral. Correcto (texto en normograma de Colpensiones).
- Ley 2191 de 2022, Decreto 1965 de 2013 (tipos I, II y III), Ley 115 art. 77, CIE-11 QD85, Hagger (2016), Kraft y colegas (2018), Cipriano (2023), Rivers (2013), Roy (2004), Hirshkowitz (2015), Bull (2020), Chetty (2014): coherentes con las fuentes.

**Corregido por el auditor:**
1. Prácticas restaurativas (Acosta y colegas, 2019): el texto decía que la mayor exposición «se asoció con más empatía y menos acoso». El resumen dice: mejor clima escolar, conexión, apego entre pares, habilidades sociales y menos victimización por ciberacoso. Se reescribió y se nombró Maine en lugar de «un estado rural».
2. Comité de convivencia laboral: se atribuía solo a la Ley 1010 de 2006; se precisó que es una medida preventiva del acoso laboral (Ley 1010) prevista en la Resolución 2646 de 2008.

**Preguntas:** las 42 revisadas una por una. Clave de `S.check` = única opción correcta en todas; 4 opciones sin duplicados; claves repartidas A 11 · B 10 · C 11 · D 10; ninguna clave se delata por longitud; pistas sin revelar; retroalimentación coherente. Sin cambios.

**Neuromitos y ortografía:** no se encontraron neuromitos ni neuro-exageraciones (los mitos aparecen solo para corregirlos). Tildes y signos de apertura correctos.

**Pruebas:** kb y kb/plus válidos con node; `node taller/tools/validar.js todo` OK. Playwright (Chromium, dominios externos bloqueados) a 1280 y 390 px: 0 errores de página; solo 4 errores de consola por los recursos externos bloqueados; sin desborde horizontal; los 6 módulos se aprueban en orden al 100 % con clics reales.

**Queda para revisión humana:** contrastar las cifras TALIS con la nota de país de la OCDE (descarga manual); las preguntas q3_1 a q3_7 repiten casi textuales algunas del curso 02 (decisión del equipo).
