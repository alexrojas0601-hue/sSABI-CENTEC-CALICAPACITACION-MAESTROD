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
- [ ] DBA Matemáticas · [ ] DBA Lenguaje
- [ ] Comandos IA + Prompt Maestro (`taller/data/comandos.js`)
- [ ] Ciencias: tr ✓ · 01 ✓ · 02 ✓ · 03 · 04 · 05 · 06 · 07 · 08 · 09 · 10 · 11 (marcar ✓ al validar 50)
- [ ] Lectura: tr ✓ · 01 ✓ · 02 ✓ · 03 ✓ · 04 ✓ · 05 ✓ · 06 ✓ · 07 · 08 ✓ · 09 · 10 ✓ · 11 ✓
- [ ] `taller/ayudas.js` (10 ayudas didácticas)
- [ ] `taller/contenido.js` (vistas: inicio, ciencia, lectura, comandos, DBA)
- [ ] Auditoría independiente: seguridad y exactitud de experimentos; respuestas de lecturas
- [ ] Enlace al Taller desde `index.html` (añadir, sin cambiar el diseño existente) y desde el tutor Dots
- [ ] Prueba completa en navegador + impresión
- [ ] Publicar (commit + push a `main`); Cloudflare Pages se actualiza solo si está conectado
- [ ] Guardar el Prompt Maestro v2 en el proyecto de Claude

## Reglas
Seguridad infantil y rigor según los esquemas. Nunca inventar normativa, cifras ni autores. Auditores independientes de los autores.
Nunca reemplazar diseño existente: solo añadir. Commits con autor «Alexander Rojas Zamorano <alexrojas0601@gmail.com>».
