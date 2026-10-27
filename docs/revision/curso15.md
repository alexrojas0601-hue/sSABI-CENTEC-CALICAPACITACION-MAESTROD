# Revisión del curso 15 · Finanzas personales para maestros (en revisión)

Fecha: 2026-10-24 · Dot autor de mejora · Estado: **en revisión**. Lo aprueba el docente del área (matemática financiera) o el equipo responsable; falta la auditoría de un Dot distinto del autor.

Archivos: `sabi_curso15_finanzas_personales.html`, `kb/sabi_curso15_finanzas_personales.js` (fuentes y línea de tiempo) y `kb/plus/sabi_curso15_finanzas_personales.js` (revisado; sin cambios: sus cálculos son correctos y no tiene cifras de mercado).

## 1. Qué se encontró
- **Módulo 1 (el más antiguo) por debajo del estándar:** 4 tarjetas, texto visible sin tildes, la respuesta correcta siempre en B y mucho más larga que los distractores (hasta 5 veces), y retroalimentación de error que revelaba la respuesta.
- **Cifras inventadas o sin fuente:** «67 % de los maestros con tensión financiera (TALIS 2024)», «43 % sin ahorro de emergencia», «78 % no ha leído su bono pensional», «68 % de estudiantes sin adultos con cultura financiera», «las prestaciones aumentan el ingreso real hasta un 40 %», «CDT con tasas del 12-14 % EA», «regla de oro: ningún crédito superior a 3 meses de salario». Se retiraron.
- **Cálculo erróneo:** «200.000 mensuales desde los 30 años al 10 % EA dan 580 millones a los 65». Recalculado con Python: unos $679,8 millones. Se retiró el ejemplo (tasa no garantizable).
- **Errores de hecho:** «los maestros oficiales tienen dos regímenes: prima media y ahorro individual» (falso: el magisterio oficial está exceptuado, art. 279 de la Ley 100, vía FOMAG); subsidio VIS de Colsubsidio o Cafam (cajas de Bogotá, no de Cali); un producto «Bancolombia InvertirOnline» que no existe con ese nombre.
- **Normativa mal citada (módulos 2-3):** «Ley 1328 de 2009 (artículo 31) ordenó incluir la educación económica y financiera»; la norma que lo hace es el **artículo 145 de la Ley 1450 de 2011**, desarrollada por el Documento 26 del MEN (2014). Retiro de cesantías para educación atribuido a la «Ley 1429 de 2010»; la causal está en el **artículo 102 de la Ley 50 de 1990**.
- Módulos 2 y 3 (recientes): buena calidad. Todos los cálculos se recalcularon con Python y son correctos: 1,8 % → 23,87 % E.A.; 2 % → 26,82 %; 2,5 % → 34,49 %; 12 % E.A. → 0,949 % mensual; cuotas $258.404 y $241.010 (diferencia total $417.452); televisor 36 cuotas $48.605 y total $1.749.773; 20 % mensual → 791,6 % E.A.; aportes de $200.000 al 0,5 % → $32.775.869 y $92.408.179; $50.000 × 12 → $616.778; $10.000.000 al 8 % → $21.589.250 y $46.609.571; regla del 72 → 9,006 años.

## 2. Qué se corrigió o añadió
- **Módulo 1 reescrito** (título, subtítulo, introducción y 7 tarjetas): bienestar financiero; leer la colilla (4 % salud, 4 % pensión, prima de servicios art. 306 CST, cesantías art. 249, vacaciones art. 186, docentes oficiales con Decretos 2277 de 1979 y 1278 de 2002 y FOMAG); regla 50-30-20 como guía con sus límites; pagarse primero (ahorro automático); orden de prioridades y sesgo de crecimiento exponencial; ejemplo resuelto en CENTEC con indicadores Bloom N1-N6 y mini-rúbrica; «Actualización 2026». Todos los cálculos nuevos verificados con Python (neto $2.944.000; 50-30-20 = $1.472.000 / $883.200 / $588.800; tarjeta 2,4 % → 32,9 % E.A.; $100.000 × 120 meses al 0,5 % → $16.387.935; porcentajes del caso).
- **7 preguntas nuevas del módulo 1**: 4 opciones, una sola correcta, claves C-A-D-B-C-D-A, longitudes similares (63-82 caracteres), retroalimentación que explica y pregunta reflexiva, pista que orienta sin revelar.
- Módulo 2: cita de Gal y McShane completada y matizada (datos observacionales); tarjeta «Actualización 2026» (sesgo de crecimiento exponencial, bola de nieve frente a avalancha, educación «justo a tiempo», tasas de usura solo con certificación vigente y fecha).
- Módulo 3: normativa corregida (Ley 1450 de 2011 art. 145; Documento 26 MEN; Ley 50 de 1990 art. 102); PISA 2012 precisado (18 países y economías); opción correcta de q3_7 alargada; tarjeta «Actualización 2026» (Kaiser y otros 2022, PISA 2012, Markowitz, Ley 2381 de 2024 en transición).
- `kb/sabi_curso15_finanzas_personales.js`: fuentes + Ley 1450 de 2011 art. 145, Documento 26 MEN, Kaiser y otros (2022), Thaler y Benartzi (2004); línea de tiempo + 2011 y 2014.
- Contadores sin cambio (3 módulos · 21 preguntas; ahora 7 tarjetas por módulo). No se tocaron diseño, CSS ni JS.

## 3. DOI verificados (Crossref, 2026-10-24; autor, título, año y revista coinciden)

| Afirmación | Fuente | DOI |
| --- | --- | --- |
| Educación financiera: 76 experimentos aleatorizados, efectos positivos en conocimiento y comportamientos | Kaiser, Lusardi, Menkhoff y Urban (2022). *Journal of Financial Economics*, 145(2), 255-272 | 10.1016/j.jfineco.2021.09.022 |
| 201 estudios; efectos pequeños en comportamiento (≈0,1 % de varianza) que se desvanecen; educación «justo a tiempo» | Fernandes, Lynch y Netemeyer (2014). *Management Science*, 60(8), 1861-1883 | 10.1287/mnsc.2013.1849 |
| Fragilidad financiera (2.000 dólares en 30 días) | Lusardi, Schneider y Tufano (2011). *Brookings Papers on Economic Activity*, 2011(1), 83-134 | 10.1353/eca.2011.0002 |
| Victorias pequeñas en el pago de deudas | Gal y McShane (2012). *Journal of Marketing Research*, 49(4), 487-501 | 10.1509/jmr.11.0272 |
| Diversificación del portafolio | Markowitz (1952). *The Journal of Finance*, 7(1), 77-91 | 10.1111/j.1540-6261.1952.tb01525.x |
| Save More Tomorrow: ahorro de 3,5 % a 13,6 % en unos 40 meses | Thaler y Benartzi (2004). *Journal of Political Economy*, 112(S1), S164-S187 | 10.1086/380085 |
| Inscripción automática e inercia en el ahorro | Madrian y Shea (2001). *Quarterly Journal of Economics*, 116(4), 1149-1187 | 10.1162/003355301753265543 |
| Dos componentes del bienestar financiero percibido | Netemeyer, Warmath, Fernandes y Lynch (2018). *Journal of Consumer Research*, 45(1), 68-89 | 10.1093/jcr/ucx109 |
| Sesgo de crecimiento exponencial | Stango y Zinman (2009). *The Journal of Finance*, 64(6), 2807-2849 | 10.1111/j.1540-6261.2009.01518.x |
| Conocimiento financiero bajo y planeación del retiro (ya registrado) | Lusardi y Mitchell (2014). *Journal of Economic Literature*, 52(1), 5-44 | 10.1257/jel.52.1.5 |

Nota: el DOI que se tenía para Gal y McShane (10.1509/jmr.11.0213) no resolvía en Crossref; el correcto es 10.1509/jmr.11.0272. Las cifras de Thaler y Benartzi (3,5 % → 13,6 %) y el número de experimentos de Kaiser y otros (76) se tomaron de los resúmenes conocidos de los artículos; Crossref no trae el resumen de esos dos registros: conviene que el auditor los confirme en la página editorial.
Sin DOI: Warren y Warren Tyagi (2005), *All Your Worth*; Thaler (1999) «Mental accounting matters» (en el texto del módulo 2, no se pudo consultar su registro); OCDE (2014), *PISA 2012 Results*, vol. VI.

## 4. Pruebas
- `node -e "global.window={};require('./kb/…')"` OK en `kb/` y `kb/plus/`. `node taller/tools/validar.js todo`: ✓ OK (0 avisos).
- Playwright (Chromium, dominios externos bloqueados), 1280 y 390 px: 0 errores de página ni de consola, sin desborde horizontal, 3 módulos aprobados en orden al 100 %, 21 preguntas con 4 opciones y clave válida; una respuesta incorrecta muestra la pista.

## 5. Queda para revisión humana
1. Aprobación del docente del área y auditoría de un Dot distinto del autor.
2. **Normativa citada de memoria, sin acceso web en esta pasada** (la búsqueda web estaba agotada y las páginas oficiales no se pudieron abrir): Ley 1450 de 2011 art. 145; Ley 50 de 1990 art. 102 (retiro para educación superior); arts. 186, 249 y 306 del CST; Ley 1266 de 2008 y Ley 2157 de 2021 (20 días y doble de la mora, máximo 4 años); Ley 1527 de 2012 (50 % del neto); Ley 1748 de 2014 (doble asesoría); estado actual de la Ley 2381 de 2024. Verificar en secretariasenado.gov.co o en la Función Pública.
3. Resultado de Colombia en PISA 2012 (promedio más bajo de 18): confirmar en OCDE, *PISA 2012 Results*, vol. VI.
4. Registrar los DOI nuevos en `docs/VERIFICACION_DOI.md` y una línea en `docs/REVISION_CURSOS.md` (no se editaron para no chocar con los agentes en paralelo).
5. No se hizo commit ni push.

## Auditoría (Dot distinto del autor)

Fecha: 2026-10-27 · `Dot_Auditor_Riguroso` (no escribió el contenido) · Estado: sigue **en revisión** hasta la aprobación del docente del área. Revisé el estado completo de los archivos; no había ediciones parciales de otro auditor.

**Cálculos (recalculados con Python):** todos correctos. Neto $2.944.000; 50-30-20 = $1.472.000 / $883.200 / $588.800; 2,4 % mensual → 32,92 % E.A.; $100.000 × 120 meses al 0,5 % → $16.387.935; caso Carolina 70,7 / 19,0 / 10,3 % y nuevo plan 69,3 / 12,2 / 12,0 / 6,5 % (suma $2.944.000; libera $240.000 = $190.000 + $50.000); 1,8 / 2 / 2,5 % → 23,87 / 26,82 / 34,49 % E.A.; 12 % E.A. → 0,949 % mensual; cuotas $258.404 y $241.010, diferencia $417.452 (o $417.456 con cuotas redondeadas, como dice la retroalimentación); televisor $48.605 × 36 = $1.749.773 (distractores $1.226.400 y $2.150.400 bien construidos); 20 % mensual → 791,6 % E.A.; $32.775.869 y $92.408.179; $616.778; $21.589.250 y $46.609.571; regla del 72 → 9,006; presupuesto de Marcela suma $3.000.000; fondo $7,2 a $14,4 millones; intereses de cesantías $336.000; $1.331.000.

**Fuentes verificadas en esta auditoría (web):** Thaler y Benartzi (2004): 3,5 % → 13,6 % en 40 meses (resumen en la página de Chicago Booth) ✔. Kaiser y otros (2022): 76 experimentos aleatorizados, más de 160.000 personas (resumen en DIW) ✔. Gal y McShane (2012): JMR, págs. 487-501 ✔ (página de Kellogg); el DOI 10.1509/jmr.11.0272 no se pudo abrir en Crossref en esta pasada (acceso bloqueado), queda con la verificación del autor. Ley 2157 de 2021 (normograma de Colpensiones): permanencia = doble de la mora, máximo 4 años desde el pago ✔. Doble asesoría: parágrafo 1 del art. 2 de la Ley 1748 de 2014 (Superfinanciera) ✔. Art. 102 num. 3 de la Ley 50 de 1990 (matrículas de educación superior del trabajador, cónyuge o compañero e hijos), citado por la Función Pública ✔. Ley 2381 de 2024: según prensa especializada (agosto de 2026), la Corte la avaló por trámite en su mayor parte, devolvió nueve artículos a la Cámara y la vigencia quedó prevista para el 1 de abril de 2027; mientras tanto rige la Ley 100.
De memoria, sin abrir la fuente oficial (redacción ya prudente): Ley 1450 de 2011 art. 145 y Documento 26 MEN (2014) —coinciden con mi conocimiento; una fuente secundaria fecha el Documento 26 en 2012 y en 2014, confirmar en el portal del MEN—; CST arts. 186, 249 y 306; Ley 1527 de 2012 (50 % del neto); 20 días calendario de comunicación previa (art. 12 de la Ley 1266); art. 279 de la Ley 100; art. 81 de la Ley 812 de 2003; PISA 2012 (18 países y economías, Colombia último).

**Correcciones hechas:**
1. Fondo de Solidaridad Pensional: «supera» → «es igual o superior a» cuatro salarios mínimos.
2. Pensión de docentes oficiales: se añadió el matiz de la Ley 812 de 2003, art. 81 (los vinculados desde 2003 tienen requisitos de prima media con 57 años para hombres y mujeres).
3. Ley 2381 de 2024: el estado se actualizó en la tarjeta de pensión, en la «Actualización 2026» del módulo 3 y en la línea de tiempo de `kb/sabi_curso15_finanzas_personales.js` (vigencia aplazada; prevista para el 1 de abril de 2027 según información de agosto de 2026; mientras tanto, Ley 100).
4. Pistas de q2_7 y q3_2: revelaban el procedimiento o la respuesta; se reescribieron para orientar sin resolver.

**Preguntas (21):** una sola correcta y clave correcta en todas; retroalimentación coherente con la clave. La correcta es la opción más larga en 4 de 21 (diferencias de 5 a 7 caracteres): no delata. Casos marcados como ficticios. Sin errores de ortografía detectados.

**Pruebas:** `node -e …` OK en `kb/` y `kb/plus/`; `node taller/tools/validar.js todo` ✓ OK (0 avisos). Playwright (Chromium, dominios externos bloqueados) a 1280 y 390 px: 0 errores de página, sin desborde horizontal, 3 módulos aprobados en orden al 100 %; una respuesta incorrecta muestra la pista. Los 4 errores de consola son solo recursos externos bloqueados por la prueba (sabi-sesion.js, sabi-puerta.js y Google Fonts).

**Queda para revisión humana:** confirmar en el portal del MEN el año del Documento 26; confirmar el estado de la Ley 2381 en una fuente oficial (Corte Constitucional, Mintrabajo o Colpensiones) antes de publicar; confirmar que CENTEC es colegio privado, como dicen la tarjeta de pensión y la pregunta q3_5. No se hizo commit.
