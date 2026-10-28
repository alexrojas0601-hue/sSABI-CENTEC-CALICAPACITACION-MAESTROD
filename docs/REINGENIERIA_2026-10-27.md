# Reingeniería inversa · SABI CENTEC Maestros (2026-10-27, en revisión)

Método: partir del resultado que se quiere (que el maestro **aprenda y lo demuestre**, suba de nivel de pensamiento,
lea críticamente y transfiera al aula alineado con los DBA y lineamientos del MEN) y devolverse hasta cada pieza
de la aplicación para preguntar: ¿produce ese resultado?, ¿lo comprueba?, ¿qué pasa si falla?
(diseño inverso: Wiggins y McTighe, *Understanding by Design*, 2005).

## 1. Diagnóstico medido (script en `kb/tools/`, heurística por verbos del enunciado)

| Hallazgo | Dato | Decisión |
| --- | --- | --- |
| Preguntas de los cursos que exigen analizar, evaluar o crear | ≈ 31 % de 609 | CORREGIR: escalera N4-N6 en los 29 cursos |
| Nivel N6 (crear) con selección múltiple | imposible por formato | AÑADIR tareas de producción con rúbrica |
| Cursos 11, 17, 18, 20, 21, 22 | 0 a 6 preguntas en 25-40 h | CORREGIR: reto final ≥ 7/10 + escalera + lectura para el diploma |
| Diploma de esos seis cursos | se imprimía solo con escribir el nombre | CORREGIR: diploma protegido por dominio demostrado |
| Lectura crítica del docente | no se trabajaba como competencia propia | AÑADIR: 6 destrezas SABI por curso |
| Repaso espaciado | flashcards sin calendario | AÑADIR: repaso a los 2, 7 y 30 días |
| Bibliografía de por qué funciona cada herramienta | dispersa | AÑADIR: `sabi_evidencia.html` |
| Dot que mantenga este portal al día | no existía (los Dots programados atendían otras apps) | AUTOMATIZAR: tarea programada quincenal |

## 2. Qué se construyó (sin cambiar el diseño de los cursos)
- `sabi_dots.js`: vistas 🧗 Escalera de pensamiento, 📖 Lectura crítica, 🔁 Repaso 2·7·30; perfil de pensamiento y
  requisitos de dominio en el certificado; protección del diploma propio de la página.
- `kb/pensar/<curso>.js` (29 cursos) con esquema `kb/pensar/_ESQUEMA_PENSAR.md` y validador `kb/tools/validar_pensar.js`.
- `sabi_evidencia.html`: biblioteca científica con DOI verificados contra Crossref.

## 3. Qué queda para personas
- Docentes de área: revisar escalera y lectura de su curso (todo nace «en revisión»).
- Coordinación académica: decidir si el certificado exigirá además evidencia de aula revisada por un par o un
  coordinador (hoy todo se guarda en el dispositivo del maestro; una verificación externa requiere un servicio
  propio con cuentas, por ejemplo un Worker de Cloudflare con D1, y aviso de privacidad según la Ley 1581 de 2012).
- Ampliar las preguntas de los módulos de 17, 18, 20, 21 y 22 (pendiente del ROADMAP, asignado al Dot programado).
