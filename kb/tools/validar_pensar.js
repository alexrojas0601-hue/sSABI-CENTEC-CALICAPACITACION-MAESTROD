#!/usr/bin/env node
/* Valida kb/pensar/*.js (esquema kb/pensar/_ESQUEMA_PENSAR.md). Uso: node kb/tools/validar_pensar.js [archivo] */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.join(__dirname, '..', 'pensar');
const files = process.argv[2] ? [process.argv[2]] : fs.readdirSync(dir).filter(f => /^sabi_curso\d\d_.*\.js$/.test(f)).map(f => path.join(dir, f));
let err = 0, warn = 0;
const E = (f, m) => { err++; console.log('✗ ' + path.basename(f) + ': ' + m); };
const W = (f, m) => { warn++; console.log('! ' + path.basename(f) + ': ' + m); };
const words = s => String(s || '').trim().split(/\s+/).filter(Boolean).length;
const MITOS = /estilos? de aprendizaje (visual|auditiv|kinest)|hemisferio (izquierdo|derecho) (domina|creativ|lógic)|10 ?% del cerebro|brain ?gym|gimnasia cerebral|efecto mozart|pir[aá]mide del aprendizaje/i;
const SIN_TILDE = /\b(tambien|evaluacion|educacion|pagina|modulo|segun|despues|analisis|leccion|informacion)\b/i;

for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  const ctx = { window: {} }; ctx.window.SABI_KB = {};
  try { vm.runInNewContext(src, ctx); } catch (e) { E(f, 'JS inválido: ' + e.message); continue; }
  const P = ctx.window.SABI_KB.pensar;
  if (!P) { E(f, 'falta pensar'); continue; }
  const all = JSON.stringify(P);
  if (MITOS.test(all)) E(f, 'posible neuromito');
  if (SIN_TILDE.test(all)) W(f, 'palabra sin tilde: ' + all.match(SIN_TILDE)[0]);
  const es = P.escalera || [];
  if (es.length !== 3 || es.map(x => x.n).join() !== 'N4,N5,N6') E(f, 'escalera debe ser N4,N5,N6');
  es.forEach((x, i) => {
    if (words(x.tarea) < 25 || words(x.tarea) > 120) W(f, `escalera[${i}].tarea ${words(x.tarea)} palabras`);
    if (!Array.isArray(x.criterios) || x.criterios.length < 3 || x.criterios.length > 4) E(f, `escalera[${i}] criterios 3-4`);
    if (words(x.modelo) < 60 || words(x.modelo) > 180) W(f, `escalera[${i}].modelo ${words(x.modelo)} palabras`);
  });
  const L = P.lectura;
  if (!L) { E(f, 'falta lectura'); continue; }
  if (!L.base) E(f, 'lectura.base vacía');
  if (!Array.isArray(L.parrafos) || L.parrafos.length !== 4) { E(f, 'lectura.parrafos debe tener 4'); continue; }
  const tw = L.parrafos.reduce((a, p) => a + words(p), 0);
  if (tw < 200 || tw > 340) W(f, `lectura ${tw} palabras (220-320)`);
  const texto = L.parrafos.join(' ');
  if (!Array.isArray(L.literal) || L.literal.length !== 4) E(f, 'literal debe tener 4');
  (L.literal || []).forEach((l, i) => { if (texto.indexOf(l.oracion) < 0) E(f, `literal[${i}] oración no está literal en el texto: «${l.oracion}»`); });
  for (const k of ['inferencia', 'contexto']) {
    const q = L[k]; if (!q) { E(f, 'falta ' + k); continue; }
    if (!Array.isArray(q.o) || q.o.length !== 4 || !(q.c >= 0 && q.c <= 3)) E(f, k + ': 4 opciones y c 0-3');
    if (new Set(q.o).size !== 4) E(f, k + ': opciones repetidas');
  }
  if (L.contexto && texto.toLowerCase().indexOf(String(L.contexto.palabra).toLowerCase()) < 0) E(f, 'contexto.palabra no aparece en el texto');
  if (!L.donde || !(L.donde.parrafo >= 0 && L.donde.parrafo <= 3)) E(f, 'donde.parrafo 0-3');
  if (!L.orden || !Array.isArray(L.orden.pasos) || L.orden.pasos.length !== 4) E(f, 'orden.pasos debe tener 4');
  if (!L.argumenta || !Array.isArray(L.argumenta.criterios) || L.argumenta.criterios.length < 3) E(f, 'argumenta.criterios ≥3');
}
console.log((err ? '✗ ' + err + ' errores' : '✓ OK') + ' (' + warn + ' avisos) · ' + files.length + ' archivos');
process.exit(err ? 1 : 0);
