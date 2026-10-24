#!/usr/bin/env node
/* Validador del Club de Diálogo SABI · uso: node club/tools/validar_club.js [en|fr|pt|de|zh ...]
   Revisa club/data/<idioma>.js contra club/data/_ESQUEMA_CLUB.md. Sale con código 1 si hay errores. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const DIR = path.join(__dirname, '..', 'data');
const IDIOMAS = process.argv.slice(2).length ? process.argv.slice(2) : ['en', 'fr', 'pt', 'de', 'zh'];
const NIVELES = ['A1', 'A2', 'B1', 'B2', 'C1'];
let errores = 0, avisos = 0;
const E = (m) => { errores++; console.log('  ✗ ' + m); };
const W = (m) => { avisos++; console.log('  ! ' + m); };
const vacio = (x) => x === undefined || x === null || (typeof x === 'string' && !x.trim()) || (Array.isArray(x) && !x.length);

for (const lang of IDIOMAS) {
  const f = path.join(DIR, lang + '.js');
  const ctx = { window: {} };
  try { vm.runInNewContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f }); }
  catch (e) { E(lang + '.js no se puede ejecutar: ' + e.message); continue; }
  const d = ctx.window.SABI_CLUB && ctx.window.SABI_CLUB[lang];
  if (!d || !Array.isArray(d.escenarios)) { E(lang + '.js sin window.SABI_CLUB.' + lang + '.escenarios'); continue; }
  const esc = d.escenarios, ids = new Set(), titulos = new Set(), niveles = {};
  esc.forEach((s, i) => {
    const k = lang + ' ' + (s.id || '#' + (i + 1));
    const idEsperado = lang + '-' + String(i + 1).padStart(2, '0');
    if (s.id !== idEsperado) E(k + ' id debería ser ' + idEsperado);
    if (ids.has(s.id)) E(k + ' id repetido'); ids.add(s.id);
    if (titulos.has(s.titulo)) E(k + ' título repetido'); titulos.add(s.titulo);
    ['titulo', 'nivel', 'tema', 'contexto', 'rol', 'turnos', 'cierre', 'vocab'].forEach(c => { if (vacio(s[c])) E(k + ' falta ' + c); });
    if (!NIVELES.includes(s.nivel)) E(k + ' nivel inválido ' + s.nivel);
    niveles[s.nivel] = (niveles[s.nivel] || 0) + 1;
    const t = s.turnos || [];
    if (t.length < 6 || t.length > 8) E(k + ' debe tener 6-8 turnos (tiene ' + t.length + ')');
    t.forEach((u, j) => {
      const kt = k + ' turno ' + (j + 1);
      if (vacio(u.bot) || vacio(u.es)) E(kt + ' sin bot/es');
      if (lang === 'zh' && vacio(u.py)) E(kt + ' sin pinyin (py)');
      const o = u.opciones || [];
      if (o.length !== 3) E(kt + ' debe tener 3 opciones');
      if (o.filter(x => x.ok === true).length !== 2) E(kt + ' debe tener 2 opciones correctas');
      o.forEach((x, n) => {
        if (vacio(x.t) || vacio(x.es)) E(kt + ' opción ' + (n + 1) + ' sin t/es');
        if (lang === 'zh' && vacio(x.py)) E(kt + ' opción ' + (n + 1) + ' sin pinyin');
        if (x.ok === false && vacio(x.fix)) E(kt + ' opción incorrecta sin fix');
      });
      if (!Array.isArray(u.clave) || u.clave.length < 2 || u.clave.length > 4) E(kt + ' clave debe tener 2-4 palabras');
      if (vacio(u.tip)) E(kt + ' sin tip');
      else if (u.tip.split(/\s+/).length > 30) W(kt + ' tip largo (' + u.tip.split(/\s+/).length + ' palabras)');
    });
    if (s.cierre && (vacio(s.cierre.bot) || vacio(s.cierre.es))) E(k + ' cierre incompleto');
    if (lang === 'zh' && s.cierre && vacio(s.cierre.py)) E(k + ' cierre sin pinyin');
    const v = s.vocab || [];
    if (v.length < 6 || v.length > 8) E(k + ' vocab debe tener 6-8 entradas');
    v.forEach((x, n) => { if (vacio(x.t) || vacio(x.es)) E(k + ' vocab ' + (n + 1) + ' incompleto'); if (lang === 'zh' && vacio(x.py)) E(k + ' vocab ' + (n + 1) + ' sin pinyin'); });
  });
  console.log('· ' + lang + '.js: ' + esc.length + ' escenarios ' + JSON.stringify(niveles));
}
console.log(errores ? '✗ ' + errores + ' errores, ' + avisos + ' avisos' : '✓ OK (' + avisos + ' avisos)');
process.exit(errores ? 1 : 0);
