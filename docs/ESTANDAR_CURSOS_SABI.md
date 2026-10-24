# Estándar de calidad de los cursos SABI CENTEC Maestros
### Skill común para Dots autores, Dots auditores y tareas programadas de mejora continua

Se aplica junto con `docs/PROMPT-MAESTRO-SABI.md` (Parte B) y `CLAUDE.md`. Todo contenido nuevo o corregido queda
«en revisión» hasta que lo apruebe el docente o el equipo responsable.

## 1. Estructura de un curso (no cambiar el diseño: solo añadir o corregir)
- `sabi_cursoNN_<tema>.html`: 3 o más módulos (`modN` · `hN` · `bN` · `rN`), cada uno con introducción, 6-8 tarjetas
  `card-bd` con contenido real (130-250 palabras), 7 preguntas situadas (una sola correcta, distractores plausibles,
  retroalimentación que explica, pista que orienta sin revelar). Sidebar `sdot` y contadores «N módulos» / «N preguntas»
  coherentes con lo que hay en la página.
- `kb/sabi_cursoNN_<tema>.js` (`kb/_ESQUEMA.md`) y `kb/plus/sabi_cursoNN_<tema>.js` (`kb/plus/_ESQUEMA_PLUS.md`):
  los carga `sabi_dots.js` para las herramientas (glosario, flashcards, mapa, audio-lección, reto diagnóstico, escape,
  reto de 7 días, kit imprimible, certificado).
- Cada módulo cubre la Parte B: explicación intuitiva → fundamentos → ejemplo resuelto en un aula CENTEC (nombres
  ficticios) → aplicación y límites → errores frecuentes → práctica → comprobación → síntesis. Indicadores Bloom N1-N6
  y una mini-rúbrica cuando el tema lo permita.
- Español de Colombia con tildes, eñes y signos de apertura (¿ ¡). Texto sin tildes es un defecto que se corrige.

## 2. Evidencia y rigor (Dot_Auditor_Riguroso)
- Ninguna cifra, ley, autor, fecha o estadística sin fuente verificable. Cifras atribuidas a encuestas o entidades
  (TALIS, FOMAG, OCDE, ICFES, MEN, UNESCO) se verifican en la fuente primaria; si no se verifica, se quita o se
  reformula sin el número. Nunca «fabricar» un porcentaje.
- Artículos revisados por pares: con DOI verificado contra Crossref (autor, título, año y revista deben coincidir).
  Registro en `docs/VERIFICACION_DOI.md`. Si la evidencia es débil o mixta, se dice.
- Distinguir hallazgo robusto, evidencia mixta y opinión experta.

## 3. Ciencia del aprendizaje: qué sí (con respaldo) y qué no
**Con respaldo sólido** (citar la fuente primaria verificada al usarlo): práctica de recuperación; práctica espaciada;
práctica intercalada; ejemplos resueltos y desvanecimiento de andamiaje; codificación dual (texto + imagen bien
diseñada); gestión de la carga cognitiva; retroalimentación específica y orientada a la tarea; instrucción explícita
con práctica guiada y comprobación frecuente; evaluación formativa; autorregulación y metacognición; relaciones
docente-estudiante y clima de aula; sueño, ejercicio y estrés como condiciones del aprendizaje; motivación según la
teoría de la autodeterminación (autonomía, competencia, relación).
**Con matices** (presentar la evidencia mixta): mentalidad de crecimiento (efectos pequeños y variables), gamificación
(depende del diseño), aprendizaje por descubrimiento sin guía (menos eficaz para novatos), aula invertida, multitarea.
**Neuromitos prohibidos** (si aparecen, se corrigen explicando el mito): estilos de aprendizaje VAK, cerebro izquierdo
/ derecho, usar el 10 % del cerebro, gimnasia cerebral (Brain Gym), efecto Mozart, «ventanas que se cierran» en la
infancia para aprendizajes escolares, azúcar que causa hiperactividad, pirámide del aprendizaje con porcentajes
(«recordamos el 10 % de lo que leemos…»), inteligencias múltiples como tipos para diagnosticar y enseñar.
**Neuro-lenguaje**: no usar «neuro» como adorno. La neurociencia informa; la ciencia cognitiva y la investigación en aula
prescriben. No afirmar mecanismos cerebrales (dopamina, cortisol, hemisferios) más allá de lo que dice la fuente.

## 4. Modelos y metodologías vigentes (usar cuando corresponda al tema)
Principios de instrucción (Rosenshine, 2012); Diseño Universal para el Aprendizaje (CAST, pautas 3.0, 2024);
evaluación formativa (Black y Wiliam; Wiliam); comprensión por diseño (Wiggins y McTighe); aprendizaje basado en
proyectos con andamiaje; aprendizaje cooperativo estructurado; enseñanza recíproca; aprendizaje socioemocional (CASEL);
microaprendizaje con recuperación; uso pedagógico y ético de la IA generativa.

## 5. Normativa y marcos
**Colombia** (citar con número y año): Ley 115 de 1994; Decreto 1075 de 2015; Decreto 1290 de 2009; Ley 1620 de 2013
y Decreto 1965 de 2013; Decreto 1421 de 2017; Ley 1581 de 2012; Ley 2025 de 2020; Ley 1732 de 2014; EBC y DBA del
MEN; Saber 11 (ICFES).
**Internacional** (verificar edición vigente antes de citar): ODS 4 (Agenda 2030); UNESCO, Orientaciones para la IA
generativa en la educación y la investigación (2023) y Marcos de competencias en IA para docentes y estudiantes (2024);
DigCompEdu (JRC, 2017) y DigComp 2.2 (2022); MCER y su Volumen complementario (Consejo de Europa, 2020);
Recomendación de la UNESCO sobre la ética de la IA (2021); Convención sobre los Derechos del Niño.

## 6. Metodologías digitales que sostienen la atención y el aprendizaje
Segmentos breves con una idea cada uno; pregunta de recuperación tras cada bloque; ejemplo antes de la definición
abstracta; imagen o esquema que explica (no decora); retroalimentación inmediata; progreso visible; reto aplicado
al aula con evidencia; audio-lección para repasar. Nada de cronómetros de presión ni recompensas que sustituyan el
aprendizaje.

## 7. Seguridad, privacidad e identidad
Ley 1581 de 2012: casos con nombres ficticios, sin datos reales. Salud mental: orientar a rutas institucionales y
profesionales; nunca diagnosticar. Identidad: azul #1A2D7A, naranja #F47C20, dorado #F5C518. Pedagogía del error:
«El error no nos detiene: nos enseña, nos fortalece y nos hace crecer».

## 8. Lista de comprobación del auditor (antes de publicar)
1. Datos y cifras verificados o retirados. 2. Sin neuromitos. 3. Normativa con número y año correctos.
4. Preguntas: una sola correcta, clave correcta, pista sin revelar. 5. Tildes y ortografía. 6. JS válido:
`node -e "global.window={};require('./kb/<archivo>.js')"`. 7. Navegador (Playwright, Chromium): 0 errores de consola,
sin desborde a 390 px, módulos aprobables en orden. 8. `node taller/tools/validar.js todo` en OK. 9. El auditor no
es quien escribió el contenido.

## 9. Registro
Cada pasada deja en `docs/REVISION_CURSOS.md` una línea por curso: fecha · qué se corrigió · qué queda para revisión humana.
