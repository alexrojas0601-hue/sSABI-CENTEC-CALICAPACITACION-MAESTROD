# Revisión del curso 13 · Portugués A1-B1 para docentes (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueba el docente del área de idiomas; falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso13_portugues.html` (módulos 1 y 2; el módulo 3 ya estaba auditado y no se tocó), `kb/sabi_curso13_portugues.js` (fuentes) y `kb/plus/sabi_curso13_portugues.js` (revisado, sin cambios).

## 1. Qué se encontró (módulos 1 y 2)
- Todo el texto estaba en un portugués **sin tildes ni diacríticos** («Portugues», «licao», «voce», «nao»), y las explicaciones no estaban en español, a diferencia del módulo 3.
- **Errores de contenido:** «polvo (espanhol = po) … polvo (choupo)» (polvo es pulpo; choupo es álamo), «borracha (espanhol = dronca)», «latao» presentado como falso amigo (latão = latón, no es falso amigo), «Agreco» (→ agradeço), «preghancy», «chave» como ejemplo de la letra x, «professos», «Mozambique» (→ Moçambique), «exacto» (→ exato), «Option B».
- **Regla discutible:** «Sou casado (ser — español) / Estou casado (estar — portugués)». En Brasil se usan ambas; en español la *Nueva gramática* (RAE-ASALE, 2009) admite «soy casado» y «estoy casado».
- **Cifras sin fuente:** «260 milhões de falantes», «A2 em 4-6 meses», «A2-B1 em 6-9 meses», «vantagem inicial de 40-60 %», «60-70 % de vocabulario compartilhado», «B1 em 6-8 meses», «30 minutos… progresso mensurável em 90 dias». Se retiraron.
- **Preguntas rotas:** q2_2 con A y B idénticas; 11 de 14 claves en B, casi siempre la opción más larga; «Reflexiona de nuevo» revelaba la respuesta; q1_3 y q1_4 con dos opciones defendibles («sou um professor colombiano», «estudo português agora»); q1_5 usaba «embarazada», que no es portugués.

## 2. Qué se corrigió (con fuente verificada)
DOI comprobados contra Crossref (api.crossref.org) el 2026-10-24: autor, título, año y revista coinciden.

| Afirmación | Fuente | DOI |
| --- | --- | --- |
| La comprensión oral entre español y portugués es parcial y asimétrica (50 % frente a 58 %) | Jensen (1989). *Hispania*, 72(4) | 10.2307/343562 |
| Recuperar de memoria mejora el recuerdo de vocabulario frente a reestudiar | Karpicke y Roediger (2008). *Science*, 319(5865), 966-968 | 10.1126/science.1152408 |
| La capacidad de llegar a una gramática nativa baja hacia los 17-18 años (no impide comunicarse) | Hartshorne, Tenenbaum y Pinker (2018). *Cognition*, 177, 263-277 | 10.1016/j.cognition.2018.04.007 |
| Retroalimentación correctiva oral: efectos duraderos; las pistas (*prompts*) superan a la reformulación | Lyster y Saito (2010). *Studies in Second Language Acquisition*, 32(2), 265-302 | 10.1017/S0272263109990520 |
| Práctica distribuida mejora el recuerdo | Cepeda, Pashler, Vul, Wixted y Rohrer (2006). *Psychological Bulletin*, 132(3), 354-380 | 10.1037/0033-2909.132.3.354 |

Otras verificaciones sin DOI: CPLP con nueve Estados miembros; alfabeto de 26 letras desde el Acuerdo Ortográfico de 1990; «soy/estoy casado» en la *Nueva gramática* (resumen de la Universidad de Piura, «Castellano actual»); UNESCO (2023), Orientaciones para la IA generativa; Ley 1581 de 2012. Las cifras de Jensen (58 % y 50 %) se tomaron de la reseña de Voigt y Schüppert (2013, rug.nl); los metadatos del artículo sí se verificaron en Crossref.

## 3. Qué se reescribió o añadió
- **Módulo 1** (título y explicaciones en español, ejemplos en portugués de Brasil con diacríticos): 6 tarjetas. Pronunciación (nasales, x con cuatro sonidos, dy/ch, lh, nh, ç); saludos y presentación; ser, estar y ficar con el matiz del estado civil; falsos amigos cotidianos verificados (apelido/sobrenome, largo, cadeira, rato, acordar, pegar, criança, escritório, salsa); caso CENTEC con detective del error e indicadores Bloom N1-N6; «Actualización 2026».
- **Módulo 2**: 7 tarjetas. Presente (você/vocês, irregulares, têm); pretérito perfeito y la trampa de *tenho falado*; há/a/desde, ter que, dever (probabilidad) y precisar; correo profesional; vocabulario del aula; caso CENTEC (correo corregido) con Bloom; «Actualización 2026».
- **14 preguntas reescritas**: 4 opciones, una sola correcta, longitudes parecidas, claves repartidas (M1: C A D B C A D; M2: B D A C B D A), retroalimentación que explica cada distractor, `fbr` con una tarea y pista que orienta sin revelar.
- `<title>` y etiqueta de navegación con tilde. Contadores: 3 módulos · 21 preguntas (coinciden). No se tocaron CSS ni JS.
- `kb/sabi_curso13_portugues.js`: tres fuentes añadidas (RAE-ASALE 2009, Jensen 1989, Lyster y Saito 2010).

## 4. Pruebas
- `node -e "global.window={};require('./kb/…')"` OK en `kb/` y `kb/plus/`.
- Playwright (Chromium, dominios externos bloqueados), 1280 y 390 px: 0 errores de consola o de página, sin desborde horizontal, los 3 módulos aprobados en orden al 100 %; una respuesta incorrecta muestra la pista y no la retroalimentación de acierto.
- `node taller/tools/validar.js todo`: OK (0 avisos).

## 5. Queda para revisión humana
1. Aprobación del docente de idiomas y auditoría de un Dot distinto del autor.
2. Confirmar en el texto original de Jensen (1989) las cifras 50 % y 58 % y la página final del artículo.
3. Revisión por hablante nativo de Brasil del uso de «estou casado» y de los falsos amigos.
4. Registrar los DOI en `docs/VERIFICACION_DOI.md` y una línea en `docs/REVISION_CURSOS.md` (no se editaron para no chocar con otros agentes). No se hizo commit ni push.

## Auditoría (Dot distinto del autor)
Fecha: 2026-10-24 · `Dot_Auditor_Riguroso` (no escribió este contenido) · Alcance: módulos 1 y 2.

**Portugués de Brasil:** diacríticos, conjugaciones (presente, perfeito simples, irregulares), há/a/desde, ter que/dever/precisar, falsos amigos, saludos, vocabulario del aula y fórmulas de correo correctos. **Corregido:** «7.º ano» → «7º ano» (forma brasileña; «7.º» es la de Portugal).

**Verificado:** Jensen (1989), *Hispania*, 72(4), p. 848, DOI 10.2307/343562 en Crossref (Crossref no da la página final). Hartshorne, Tenenbaum y Pinker (2018), Karpicke y Roediger (2008), Cepeda y otros (2006) y Lyster y Saito (2010) con metadatos correctos. **No reverificado por el auditor** (se agotó el cupo de búsquedas web de la sesión): las cifras 50 % y 58 % de Jensen y la cita de la *Nueva gramática* (RAE-ASALE, 2009) sobre «soy/estoy casado». Las dos coinciden con lo que el auditor conoce de la literatura, pero siguen pendientes de cotejo con el original.

**Preguntas:** 14/14 con una sola clave correcta (M1: C A D B C A D; M2: B D A C B D A), retroalimentación coherente, pistas sin revelar y sin duplicados. **Ajuste:** la opción correcta de la 1.2 era 9 caracteres más larga que las demás; se acortó sin cambiar el contenido. Sin neuromitos.

**Pruebas:** Playwright, 1280 y 390 px: 0 errores de página, sin desborde, los 3 módulos aprobados en orden al 100 %; un error muestra solo la pista. `validar.js todo`: OK. Veredicto: **apto para revisión del docente** y de un hablante nativo.
