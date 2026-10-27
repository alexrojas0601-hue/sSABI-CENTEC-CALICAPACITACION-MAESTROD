# ROADMAP · SABI Taller de Aula (continuidad autónoma)

Este archivo es la memoria de trabajo de los Dots. Cualquier sesión (humana o programada) que continúe la tarea
debe leerlo primero, ejecutar lo pendiente en orden, actualizar las casillas y publicar.

## Objetivo
`sabi_taller.html`: fábrica didáctica para que los niños VERDADERAMENTE aprendan, enlazada desde `index.html`.
- 🔬 Ciencia: ≥50 experimentos por grado (Transición a 11.°) · `taller/data/ciencias_<g>.js` · esquema `taller/ESQUEMA_CIENCIAS.md`
- ➗ Matemáticas: generadores infinitos · `taller/mate.js` (cálculo, problemas, series, geometría, dinero, encuentra el error)
- 📖 Lectura: ≥6 textos originales por grado con 6 destrezas · `taller/data/lectura_<g>.js` · esquema `taller/ESQUEMA_LECTURA.md`
- 🧰 Ayudas: /worksheet /escape /detective /boardgame /stations /manipulative /comic /lapbook /puzzle /minibook · `taller/ayudas.js`
- 🤖 Comandos IA + Prompt Maestro v2 · `taller/data/comandos.js`
- 📚 DBA de referencia · `taller/data/dba_<area>.js`

## Validación (obligatoria antes de publicar)
```bash
node taller/tools/validar.js todo        # datos: 0 errores
```
Prueba en navegador (Playwright, Chromium preinstalado): abrir `sabi_taller.html` servido por `python3 -m http.server`,
recorrer todas las pestañas y grados, 0 errores de consola, y revisar impresión.

## Estado
- [x] Motor núcleo `taller/core.js`, estilos `taller/taller.css`, página `sabi_taller.html`
- [x] Matemáticas `taller/mate.js` (44.040 ítems probados: 0 fallos de autoverificación)
- [x] Validador `taller/tools/validar.js`
- [x] DBA Ciencias (verificados)
- [x] DBA Matemáticas · [x] DBA Lenguaje (1.°–11.° literales del PDF oficial MEN V.2; Transición en paráfrasis `verificado:false`, pendiente cotejar con el PDF de Transición)
- [x] Comandos IA + Prompt Maestro (`taller/data/comandos.js`: 93 comandos con alias, Prompt Maestro v2 de 1.694 palabras)
- [x] Ciencias: tr ✓ · 01 ✓ · 02 ✓ · 03 ✓ · 04 ✓ · 05 ✓ · 06 ✓ · 07 ✓ · 08 ✓ · 09 ✓ · 10 ✓ · 11 ✓ (600 experimentos)
- [x] Lectura: tr ✓ · 01 ✓ · 02 ✓ · 03 ✓ · 04 ✓ · 05 ✓ · 06 ✓ · 07 ✓ · 08 ✓ · 09 ✓ · 10 ✓ · 11 ✓ (72 textos)
- [x] `taller/ayudas.js` (10 ayudas didácticas)
- [x] `taller/contenido.js` (vistas: inicio, ciencia, lectura, comandos, DBA)
- [x] Auditoría independiente: seguridad y exactitud de experimentos; respuestas de lecturas (2026-10-20: ~50 duplicados entre grados reescritos, cifras recalculadas, preguntas ambiguas corregidas)
- [x] Enlace al Taller desde `index.html` (menú y pie) y desde el tutor Dots (ruta sugerida)
- [x] Prueba completa en navegador (`python3 taller/tools/prueba_navegador.py`: 270 vistas, 0 errores) · impresión revisada en capturas; falta prueba física del plegado del minilibro
- [x] Publicar (commit + push a `main`); Cloudflare Pages se actualiza solo si está conectado
- [x] Guardar el Prompt Maestro v2 en el proyecto de Claude (claude/PROMPT_MAESTRO_SABI_v2.md)
- [x] Pasada de auditoría 2026-10-23 (Dot de continuidad): `validar.js todo` 0 errores/0 avisos; navegador 270 vistas, 0 errores. La prueba ahora excluye `sabicentec.com/assets/sabi-sesion.js` (script de sesión externo del ecosistema, inalcanzable sin red; no es un error de la app). Revisión de seguridad de Transición: sin hallazgos.
- [x] Segunda pasada 2026-10-23 (Dot de continuidad, ejecución programada): `validar.js todo` 0 errores/0 avisos (600 experimentos, 72 lecturas con evidencia literal verificada, 93 comandos, DBA de 3 áreas); navegador 270 vistas, 0 errores de consola, 0 desbordes a 390 px, 150 sopas/crucigramas sin fallos; enlaces del Taller en `index.html` presentes. Sin cambios de contenido necesarios.
- [x] Tercera pasada 2026-10-23 (auditor independiente, 1.° y 2.°: 100 experimentos y 12 lecturas): CN01-27 corregido (la hoja se sostiene frente al espejo; antes se volteaba de arriba abajo, no de lado); LC01-6 «el Mohán le esconde los anzuelos» (evita la lectura ambigua «sus anzuelos»); CN01-30, CN01-32 y CN01-40 pasan a riesgo «medio» por uso de cuchillo del docente (regla del esquema). Validador OK; navegador 270 vistas, 0 errores.

## Pendientes menores (para el próximo Dot o el docente)
- ✓ LED con resistencia (Parte C, aprobado por el rector): CN01-24, CN03-25, CN05-19, CN05-20, CN05-24 y CN07-06 llevan resistencia de 100 Ω con 2 pilas AA (≈10 mA); en 1.°–5.° la une el docente. CN07-25 (pila de limones, <1 mA) va sin resistencia y lo explica. El validador avisa si un LED en materiales no menciona resistencia (se excluyen linternas y bombillos LED comerciales).
- DBA de Transición (lenguaje): el PDF oficial (colombiaaprende.edu.co/sites/default/files/files_public/2026-06/dba_transicion-min_0.pdf) requiere autorización de acceso; reemplazar paráfrasis por texto literal cuando se pueda leer el PDF oficial de Colombia Aprende.
- ✓ CN11-28 (electroforesis) reducido a 2 pilas de 9 V (18 V) conectadas por el docente.
- Repeticiones intencionales entre grados con mayor enfoque cuantitativo en el grado superior (p. ej., poleas, refracción, cristales): revisar si se desean eliminar.
- ✓ LC04-1 renombrado «La cometa atrapada en el samán».
- ✓ Validador: «Mercurio» con mayúscula (planeta) permitido; el metal en minúscula sigue prohibido. «muévela» ya no se confunde con «vela».

## Reglas
Seguridad infantil y rigor según los esquemas. Nunca inventar normativa, cifras ni autores. Auditores independientes de los autores.
Nunca reemplazar diseño existente: solo añadir. Commits con autor «Alexander Rojas Zamorano <alexrojas0601@gmail.com>».

---

# ROADMAP · Experiencia SABI v2 en los 25 cursos (iniciada 2026-10-22)

Meta: que sean los mejores cursos gratuitos y certificados para docentes del entorno digital: acogedores,
rigurosos, con voz, práctica, comprobación y transferencia al aula.

## Hecho en esta fase
- [x] Motor `sabi_dots.js` v2 (sin cambiar el diseño de los cursos): 🏁 Hoy (sesión guiada de 15-20 min),
      🎧 audio-lección narrada, 🔊 «Escuchar el curso» (lee la página desde donde estás, resaltando), 🎯 reto
      diagnóstico antes/después, 🔐 escape room de 4 candados, 🔀 ordena el proceso, 📅 reto de 7 días en el aula
      con evidencia, 🗣 escucha y repite con puntaje de pronunciación (idiomas), 🖨 kit imprimible (/worksheet,
      /minibook), 🎓 certificado gratuito (al aprobar todos los módulos con ≥70 %), 🏅 logros, racha e insignias.
- [x] `kb/plus/<curso>.js` para los 25 cursos (esquema `kb/plus/_ESQUEMA_PLUS.md`).
- [x] Evaluaciones de plantilla reemplazadas en 16, 19, 23, 24 y 25; tarjetas «Contenido profundo sobre…» rellenas
      (`python3 taller/tools/aplicar_plus.py`, idempotente: volver a ejecutarlo si cambian los kb).
- [x] Progreso por curso: la clave `sabi_p` era compartida entre todos los cursos (aprobar M1 de un curso marcaba
      M1 en otro); ahora es `sabi_p:<curso>`.
- [x] Club de Diálogo (`sabi_club_idiomas.html` + `club/club.js` + `club/data/<idioma>.js`): 10 escenarios por
      idioma con voz, micrófono, corrección del error típico, pistas, vocabulario, racha y minutos hablados. Funciona
      sin IA. IA opcional: definir `window.SABI_IA_ENDPOINT` (proxy propio, nunca una clave en el navegador).
- [x] `index.html`: el avatar ya no muestra «Error de conexión» sin IA; invita al Club de Diálogo.
- [x] Curso 11: módulos genéricos «Contenido en desarrollo» reconstruidos.

## Pendiente (para los Dots o el equipo)
- [ ] Revisión humana del contenido nuevo (todo está «en revisión»): docentes de área por curso.
- [x] Reconstrucción profunda: todos los cursos tienen ahora 3 o más módulos. 2026-10-24: módulo 3 en 12 (francés para el
      aula y DELF), 13 (del portuñol al portugués y Celpe-Bras) y 14 (mandarín y alemán en el aula), auditados por un Dot
      distinto (datos DELF/Celpe-Bras/HSK/Goethe verificados; Lyster y Ranta 1997 con DOI). Pendiente: los módulos 1-2 de
      12, 13 y 14 traen cifras sin fuente y texto sin tildes; las fichas del portal dicen «6 módulos» para el curso 14.
- [x] DOI verificados en las fuentes de `kb/*.js` (36 DOI: 31 en fuentes existentes y 5 en artículos añadidos; registro en `docs/VERIFICACION_DOI.md`). Sin fuente revisada por pares: cursos 09, 12, 13, 14 y 20.
- [ ] Más escenarios del Club (meta: 30 por idioma; validador listo: `node club/tools/validar_club.js`) y conversación libre con IA mediante un Worker propio.
- [ ] Prueba física del minilibro impreso y del certificado en PDF.

---

# ROADMAP · Revisión integral de los cursos y Tendencias 2026 (iniciada 2026-10-24)

Estándar común para Dots autores, auditores y tareas programadas: `docs/ESTANDAR_CURSOS_SABI.md`.
Informe por curso (qué se corrigió, fuentes con DOI, auditoría independiente, qué queda para revisión humana):
`docs/revision/cursoNN.md`.

- [x] Cursos 01-14: revisados por un Dot autor y auditados por un Dot distinto. Hallazgos graves corregidos: preguntas
      rotas que impedían aprobar módulos (01, 04, 05, 06, 07, 08), decenas de cifras inventadas con autores reales y
      años falsos, neuromitos, normativa mal citada, claves siempre en B y texto sin tildes. Tarjetas «Actualización 2026».
- [x] Cursos nuevos 26 Ciencia de la lectura, 27 Pensamiento computacional, 28 Alfabetización de datos y
      29 Educación climática y ODS: 3 módulos, 21 preguntas, kb y kb/plus, auditados. Bloque «Tendencias 2026» en index.html.
- [x] index.html: el encabezado del bloque de Idiomas desbordaba a 390 px (botón «Club de Idiomas 3D»); corregido.
- [x] Cursos 15-25: revisados por el Dot autor y auditados por un Dot distinto (2026-10-27). Destacados: estado de la Ley 2381
      de 2024 actualizado (vigencia desde 1-04-2027), Ley 2025 de 2020 reglamentada por el Decreto 459 de 2024, Cátedra de la Paz
      corregida según el Decreto 1038 de 2015, panel con cifras inventadas del curso 17 reemplazado, «✓» que delataba la
      respuesta en 17, 18, 20, 21 y 22 retirado.
- [ ] Ampliar 17, 18, 20, 21 y 22 (1 pregunta y 2-4 tarjetas por módulo) al estándar de 6-8 tarjetas y 7 preguntas.
- [ ] Revisión humana de lo marcado en cada informe (normas no abiertas en la fuente oficial, cifras de fuentes secundarias).
- [ ] Las tarjetas del catálogo en index.html aún tienen cifras sin fuente (p. ej. «68 % FOMAG 2024», «32 % TALIS 2024»,
      «3er país con más ciberataques», «CENTEC Futuro PEI 2026+»).
