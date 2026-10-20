#!/usr/bin/env node
/* Validador de datos del Taller SABI (Dot Auditor automático)
   Uso: node taller/tools/validar.js [ciencias|lectura|comandos|dba|todo] [grado]
   Grados: tr 01 02 03 04 05 06 07 08 09 10 11 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const DIR = path.join(__dirname, '..', 'data');
const GRADOS = ['tr', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'];
const tipo = process.argv[2] || 'todo', soloGrado = process.argv[3];
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
let errores = 0, avisos = 0;
const E = (f, m) => { errores++; console.log('  ✗ ' + f + ': ' + m); };
const W = (f, m) => { avisos++; console.log('  ⚠ ' + f + ': ' + m); };
function cargar(f) {
  const p = path.join(DIR, f);
  if (!fs.existsSync(p)) return false;
  try { vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: f }); return true; }
  catch (e) { E(f, 'JavaScript inválido: ' + e.message); return false; }
}
const T = () => ctx.SABI_TALLER || {};
const palabras = s => String(s || '').trim().split(/\s+/).filter(Boolean).length;
const norm = s => String(s || '').toLowerCase().replace(/[«»“”"]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, ' ').trim();
const vacio = v => v == null || (typeof v === 'string' && !v.trim()) || (Array.isArray(v) && !v.length);

/* ---------------- CIENCIAS ---------------- */
const EJES = { materia: 8, fuerza: 8, energia: 8, vida: 8, quimica: 8, tierra: 3 };
const PROHIBIDO_TODOS = /\b(lej[ií]a|\bcloro\b|hipoclorito|amon[ií]aco|[aá]cido sulf[uú]rico|[aá]cido clorh[ií]drico|[aá]cido n[ií]trico|[aá]cido muri[aá]tico|soda c[aá]ustica|hidr[oó]xido de sodio|gasolina|thinner|varsol|mercurio|alcohol antis[eé]ptico encendido|toma ?corriente|tomacorriente|enchufe|110 ?v|120 ?v|l[aá]ser|mirar (directamente )?al sol|pila de bot[oó]n|bater[ií]a de carro|pólvora|polvora)/i;
/* límites de palabra conscientes de tildes: «muévela» no es «vela» */
const FUEGO = /(?<![\p{L}])(vela|velas|f[oó]sforo|f[oó]sforos|cerilla|encendedor|mechero|llama|fuego|quemar)(?![\p{L}])/iu;
const RIESGO_MEDIO = /\b(agua caliente|hirviendo|hervir|estufa|horno|microondas|plancha|cuchillo|bistur[ií]|tijeras de punta|vidrio|vela|f[oó]sforo|encendedor|mechero|alcohol)\b/i;
function validarCiencias(g) {
  const f = 'ciencias_' + g + '.js';
  if (!cargar(f)) { E(f, 'no existe o no carga'); return; }
  const arr = (T().ciencias || {})[g];
  if (!Array.isArray(arr)) return E(f, 'falta SABI_TALLER.ciencias["' + g + '"]');
  if (arr.length < 50) E(f, 'tiene ' + arr.length + ' experimentos (mínimo 50)');
  const ids = new Set(), titulos = new Set(), cuenta = {};
  arr.forEach((x, i) => {
    const k = (x.id || '#' + i);
    if (!/^CN(TR|\d\d)-\d\d$/.test(x.id || '')) E(f, k + ' id inválido (use CN' + g.toUpperCase() + '-01)');
    if (ids.has(x.id)) E(f, k + ' id repetido'); ids.add(x.id);
    const t = norm(x.titulo); if (titulos.has(t)) E(f, k + ' título repetido'); titulos.add(t);
    if (!(x.eje in EJES)) E(f, k + ' eje inválido: ' + x.eje); cuenta[x.eje] = (cuenta[x.eje] || 0) + 1;
    ['titulo', 'dba', 'pregunta', 'prediccion', 'materiales', 'pasos', 'observa', 'resultado', 'porque', 'conceptos', 'seguridad', 'riesgo', 'tiempo', 'reto', 'conexion'].forEach(c => { if (vacio(x[c])) E(f, k + ' falta ' + c); });
    if (!Array.isArray(x.materiales) || x.materiales.length < 2) E(f, k + ' materiales: mínimo 2');
    if (!Array.isArray(x.pasos) || x.pasos.length < 3 || x.pasos.length > 10) E(f, k + ' pasos: entre 3 y 10');
    if (!['bajo', 'medio'].includes(x.riesgo)) E(f, k + ' riesgo debe ser "bajo" o "medio"');
    if (typeof x.tiempo !== 'number') E(f, k + ' tiempo debe ser número de minutos');
    if (palabras(x.porque) < 25) E(f, k + ' "porque" muy corto (<25 palabras)');
    if (x.registro && !(Array.isArray(x.registro.columnas) && x.registro.columnas.length >= 2)) E(f, k + ' registro.columnas inválido');
    const accion = [].concat(x.materiales || [], x.pasos || []).join(' ');
    const todo = accion + ' ' + (x.seguridad || '');
    if (PROHIBIDO_TODOS.test(accion)) E(f, k + ' usa material/acción prohibida: "' + accion.match(PROHIBIDO_TODOS)[0] + '"');
    if (['tr', '01', '02', '03', '04', '05'].includes(g) && FUEGO.test(accion)) E(f, k + ' usa fuego en grado ' + g + ' (prohibido hasta 5.°)');
    if (RIESGO_MEDIO.test(accion) && x.riesgo !== 'medio') E(f, k + ' usa "' + accion.match(RIESGO_MEDIO)[0] + '" → riesgo debe ser "medio"');
    if (x.riesgo === 'medio' && !/adult|docente|profesor/i.test(todo)) E(f, k + ' riesgo medio sin indicar supervisión de adulto/docente');
  });
  Object.keys(EJES).forEach(e => { if ((cuenta[e] || 0) < EJES[e]) E(f, 'eje ' + e + ': ' + (cuenta[e] || 0) + ' (mínimo ' + EJES[e] + ')'); });
  console.log((errores ? '' : '') + '  · ' + f + ': ' + arr.length + ' experimentos ' + JSON.stringify(cuenta));
}

/* ---------------- LECTURA ---------------- */
const RANGO = { tr: [35, 110], '01': [50, 140], '02': [80, 180], '03': [120, 240], '04': [160, 290], '05': [200, 360], '06': [240, 420], '07': [280, 460], '08': [320, 520], '09': [360, 560], '10': [400, 650], '11': [400, 650] };
function oracion(t, s) { return Array.isArray(s) && t.parrafos[s[0]] && t.parrafos[s[0]][s[1]]; }
function validarLectura(g) {
  const f = 'lectura_' + g + '.js';
  if (!cargar(f)) { E(f, 'no existe o no carga'); return; }
  const arr = (T().lectura || {})[g];
  if (!Array.isArray(arr)) return E(f, 'falta SABI_TALLER.lectura["' + g + '"]');
  if (arr.length < 6) E(f, 'tiene ' + arr.length + ' textos (mínimo 6)');
  const ids = new Set();
  arr.forEach((t, i) => {
    const k = t.id || '#' + i;
    if (!/^LC(TR|\d\d)-\d+$/.test(t.id || '')) E(f, k + ' id inválido');
    if (ids.has(t.id)) E(f, k + ' id repetido'); ids.add(t.id);
    ['titulo', 'tipo', 'dba', 'parrafos', 'literal', 'entrelineas', 'contexto', 'dondelopone', 'orden', 'causas', 'argumenta'].forEach(c => { if (vacio(t[c])) E(f, k + ' falta ' + c); });
    if (!Array.isArray(t.parrafos) || !t.parrafos.every(p => Array.isArray(p) && p.length && p.every(o => typeof o === 'string' && o.trim()))) return E(f, k + ' parrafos debe ser [[oración, …], …]');
    const n = palabras(t.parrafos.flat().join(' ')), r = RANGO[g];
    if (n < r[0] || n > r[1]) W(f, k + ' tiene ' + n + ' palabras (sugerido ' + r[0] + '–' + r[1] + ')');
    if ((t.literal || []).length !== 4) E(f, k + ' literal debe tener exactamente 4 preguntas');
    (t.literal || []).forEach((q, j) => {
      const o = oracion(t, q.s);
      if (!o) return E(f, k + ' literal ' + (j + 1) + ' s inválido ' + JSON.stringify(q.s));
      if (vacio(q.p) || vacio(q.r)) return E(f, k + ' literal ' + (j + 1) + ' sin p o r');
      if (!norm(o).includes(norm(q.r))) E(f, k + ' literal ' + (j + 1) + ' respuesta "' + q.r + '" NO está literal en la oración "' + o + '"');
    });
    (t.entrelineas || []).forEach((q, j) => {
      if (!Array.isArray(q.op) || q.op.length < 3 || q.op.length > 4) E(f, k + ' entrelineas ' + (j + 1) + ' op: 3–4 opciones');
      if (!(q.c >= 0 && q.c < (q.op || []).length)) E(f, k + ' entrelineas ' + (j + 1) + ' c fuera de rango');
      if (!oracion(t, q.s)) E(f, k + ' entrelineas ' + (j + 1) + ' s (pista) inválido');
      if (vacio(q.ex)) E(f, k + ' entrelineas ' + (j + 1) + ' falta ex');
    });
    if ((t.entrelineas || []).length < 2) E(f, k + ' entrelineas: mínimo 2');
    (t.contexto || []).forEach((q, j) => {
      const o = oracion(t, q.s);
      if (!o) return E(f, k + ' contexto ' + (j + 1) + ' s inválido');
      if (!norm(o).includes(norm(q.w))) E(f, k + ' contexto ' + (j + 1) + ' la palabra "' + q.w + '" no aparece en "' + o + '"');
      if (!Array.isArray(q.op) || q.op.length < 3 || !(q.c >= 0 && q.c < q.op.length)) E(f, k + ' contexto ' + (j + 1) + ' opciones/c inválidos');
      if (vacio(q.ex)) E(f, k + ' contexto ' + (j + 1) + ' falta ex');
    });
    if ((t.contexto || []).length < 2) E(f, k + ' contexto: mínimo 2');
    (t.dondelopone || []).forEach((q, j) => { if (!oracion(t, q.s) || vacio(q.a)) E(f, k + ' dondelopone ' + (j + 1) + ' inválido'); });
    if ((t.dondelopone || []).length < 2) E(f, k + ' dondelopone: mínimo 2');
    if (!Array.isArray(t.orden) || t.orden.length < 4 || t.orden.length > 6) E(f, k + ' orden: 4–6 eventos');
    if (!Array.isArray(t.causas) || t.causas.length < 2 || !t.causas.every(c => c.causa && c.efecto)) E(f, k + ' causas: mínimo 2 {causa, efecto}');
    if (!Array.isArray(t.argumenta) || t.argumenta.length < 2 || !t.argumenta.every(a => a.p && Array.isArray(a.criterios) && a.criterios.length >= 2)) E(f, k + ' argumenta: mínimo 2 con ≥2 criterios');
  });
  console.log('  · ' + f + ': ' + arr.length + ' textos');
}

/* ---------------- COMANDOS ---------------- */
const REQ_CMDS = ['/ultrathink', '/stepback', '/firstprinciples', '/chainofthought', '/eli5', '/technicaldeepdive', '/analogy', '/socratic', '/rewrite', '/shorten', '/expand', '/outline', '/codereview', '/debug', '/refactor', '/testcases', '/proscons', '/swot', '/riskcheck', '/premortem', '/brainstorm', '/remix', '/whatif', '/metaphor', '/formalize', '/casualize', '/persuade', '/deescalate', '/prd', '/okrs', '/timeline', '/delegate', '/factcheck', '/citesources', '/summarizeresearch', '/trendcheck', '/godmode', '/critique', '/iterate', '/selfcheck', '/worksheet', '/escape', '/detective', '/boardgame', '/stations', '/manipulative', '/comic', '/lapbook', '/puzzle', '/minibook'];
function validarComandos() {
  const f = 'comandos.js';
  if (!cargar(f)) { E(f, 'no existe o no carga'); return; }
  const c = T().comandos, pm = T().promptMaestro;
  if (!Array.isArray(c)) return E(f, 'falta SABI_TALLER.comandos');
  if (typeof pm !== 'string' || palabras(pm) < 600) E(f, 'promptMaestro falta o es muy corto (<600 palabras)');
  const vistos = new Set();
  c.forEach((x, i) => {
    const k = x.cmd || '#' + i;
    if (!/^\/[a-z0-9_]+$/.test(x.cmd || '')) E(f, k + ' cmd inválido (minúsculas, sin espacios)');
    if (vistos.has(x.cmd)) E(f, k + ' repetido'); vistos.add(x.cmd);
    ['grupo', 'icono', 'que', 'cuando', 'plantilla', 'ejemplo'].forEach(p => { if (vacio(x[p])) E(f, k + ' falta ' + p); });
    if (x.plantilla && !x.plantilla.includes('{tema}')) E(f, k + ' plantilla sin {tema}');
    if (x.alias && !Array.isArray(x.alias)) E(f, k + ' alias debe ser arreglo');
  });
  REQ_CMDS.forEach(r => { if (!vistos.has(r)) E(f, 'falta el comando ' + r); });
  console.log('  · ' + f + ': ' + c.length + ' comandos, prompt maestro ' + palabras(pm) + ' palabras');
}

/* ---------------- DBA ---------------- */
function validarDBA() {
  ['dba_ciencias.js', 'dba_matematicas.js', 'dba_lenguaje.js'].forEach(f => {
    if (!cargar(f)) return W(f, 'no existe todavía');
    const area = f.replace('dba_', '').replace('.js', ''), d = ((T().dba || {})[area]) || {};
    GRADOS.forEach(g => {
      const a = d[g];
      if (!Array.isArray(a) || !a.length) return E(f, 'grado ' + g + ' sin DBA');
      a.forEach((x, i) => { if (vacio(x.texto) || x.n == null || typeof x.verificado !== 'boolean') E(f, g + ' #' + i + ' requiere {n, texto, verificado}'); });
    });
    console.log('  · ' + f + ': ' + GRADOS.map(g => g + ':' + ((d[g] || []).length)).join(' '));
  });
}

const gs = soloGrado ? [soloGrado] : GRADOS;
console.log('Validador Taller SABI');
if (tipo === 'ciencias' || tipo === 'todo') gs.forEach(g => fs.existsSync(path.join(DIR, 'ciencias_' + g + '.js')) ? validarCiencias(g) : (soloGrado ? E('ciencias_' + g, 'no existe') : W('ciencias_' + g, 'pendiente')));
if (tipo === 'lectura' || tipo === 'todo') gs.forEach(g => fs.existsSync(path.join(DIR, 'lectura_' + g + '.js')) ? validarLectura(g) : (soloGrado ? E('lectura_' + g, 'no existe') : W('lectura_' + g, 'pendiente')));
if (tipo === 'comandos' || tipo === 'todo') validarComandos();
if (tipo === 'dba' || tipo === 'todo') validarDBA();
console.log(errores ? '✗ ' + errores + ' errores, ' + avisos + ' avisos' : '✓ OK (' + avisos + ' avisos)');
process.exit(errores ? 1 : 0);
