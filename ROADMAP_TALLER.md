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
- [ ] Guardar el Prompt Maestro v2 en el proyecto de Claude

## Pendientes menores (para el próximo Dot o el docente)
- DBA de Transición (lenguaje): reemplazar paráfrasis por texto literal cuando se pueda leer el PDF oficial de Colombia Aprende.
- CN11-28 (electroforesis) usa 3 pilas de 9 V en serie (27 V CC): decisión del coordinador de ciencias.
- Repeticiones intencionales entre grados con mayor enfoque cuantitativo en el grado superior (p. ej., poleas, refracción, cristales): revisar si se desean eliminar.
- Lectura: LC02-1 y LC04-1 comparten título («La cometa de Salomé»); diversificar.
- El validador bloquea «Mercurio» también como planeta (reformular en los textos).

## Reglas
Seguridad infantil y rigor según los esquemas. Nunca inventar normativa, cifras ni autores. Auditores independientes de los autores.
Nunca reemplazar diseño existente: solo añadir. Commits con autor «Alexander Rojas Zamorano <alexrojas0601@gmail.com>».
