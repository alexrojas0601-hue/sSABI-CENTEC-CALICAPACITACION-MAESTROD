/* SABI Taller de Aula · Ayudas didácticas: 10 generadores de material imprimible
   /worksheet /escape /detective /boardgame /stations /manipulative /comic /lapbook /puzzle /minibook
   Fuentes: ejercicios enviados (Matemáticas o Ciencia), experimentos del grado, lectura del grado o texto libre del docente.
   Todo es determinista por semilla: la misma semilla y la misma fuente producen el mismo material. */
(function () {
  'use strict';
  var T = window.SABI_TALLER = window.SABI_TALLER || {};
  var esc = T.esc;
  var A = T.ayudas = {};

  /* ---------- utilidades de texto ---------- */
  function normW(s) {
    return T.sinTildes(String(s || '').toUpperCase().replace(/Ñ/g, '\u0001')).replace(/\u0001/g, 'Ñ').replace(/[^A-ZÑ]/g, '');
  }
  function primeraOracion(s) { var m = String(s || '').match(/^[\s\S]*?[.!?](\s|$)/); return (m ? m[0] : String(s || '')).trim(); }
  function corta(s, n) { s = String(s || ''); return s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s; }
  function keyChar(a) { var m = T.sinTildes(String(a || '')).toUpperCase().match(/[A-Z0-9Ñ]/); return m ? m[0] : '?'; }
  function lineas(n) { var s = ''; for (var i = 0; i < (n || 1); i++) s += '<div class="lines"></div>'; return s; }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  var NOMBRES = ['Mateo', 'Valentina', 'Samuel', 'Isabella', 'Jerónimo', 'Salomé', 'Yeimi', 'Thiago', 'Mariana', 'Emmanuel', 'Luciana', 'Juan José'];

  /* palabra + pista a partir de un concepto y un texto explicativo */
  function pistaDe(concepto, texto, titulo) {
    var frases = String(texto || '').match(/[^.!?]+[.!?]?/g) || [];
    var c = T.sinTildes(concepto.toLowerCase());
    for (var i = 0; i < frases.length; i++) {
      var f = frases[i], fl = T.sinTildes(f.toLowerCase()), k = fl.indexOf(c);
      if (k > -1) { var h = f.slice(0, k) + '_____' + f.slice(k + concepto.length); if (h.replace(/_+/g, '').trim().length > 15) return corta(h.trim(), 160); }
    }
    return 'Concepto clave del experimento «' + titulo + '»';
  }

  /* ---------- fuentes de contenido ---------- */
  A.parseLibre = function (txt) {
    var qa = [], pal = [];
    String(txt || '').split(/\r?\n/).forEach(function (l) {
      l = l.trim(); if (!l) return;
      var m = l.match(/^(.+?)\s*=\s*(.+)$/);
      if (m) { qa.push({ q: m[1], a: m[2] }); return; }
      m = l.match(/^([^:]{2,40}?)\s*:\s*(.+)$/);
      if (m) { pal.push({ w: m[1].trim(), d: m[2].trim() }); return; }
    });
    return { qa: qa, pal: pal };
  };
  var EJEMPLO_LIBRE = '¿Cuántas patas tiene una araña? = 8\n¿Qué gas necesitan las plantas para hacer fotosíntesis? = dióxido de carbono\n¿Cuál es el río más largo de Colombia? = Magdalena\nRAÍZ: parte de la planta que absorbe agua del suelo\nHOJA: parte de la planta donde ocurre la fotosíntesis\nTALLO: sostiene la planta y transporta la savia\nSEMILLA: de ella nace una nueva planta\nFLOR: órgano donde se forman los frutos';

  function fuenteCiencia(g, r) {
    return T.cargar('ciencias_' + g + '.js').then(function () {
      var L = (T.ciencias && T.ciencias[g]) || [];
      if (!L.length) return null;
      var ex = r.sample(L, Math.min(12, L.length)), qa = [], pal = [], vistos = {};
      ex.forEach(function (e) {
        qa.push({ q: e.pregunta, a: primeraOracion(e.resultado || e.porque) });
        (e.conceptos || []).forEach(function (c) { var w = normW(c); if (w.length >= 3 && w.length <= 14 && !vistos[w]) { vistos[w] = 1; pal.push({ w: c, d: pistaDe(c, e.porque, e.titulo) }); } });
      });
      return { titulo: 'Ciencia · experimentos de ' + T.gname(g), qa: qa, pal: pal };
    });
  }
  function fuenteLectura(g, r) {
    return T.cargar('lectura_' + g + '.js').then(function () {
      var L = (T.lectura && T.lectura[g]) || [];
      if (!L.length) return null;
      var qa = [], pal = [], vistos = {};
      r.shuffle(L).forEach(function (t) {
        (t.literal || []).forEach(function (x) { qa.push({ q: x.p + ' («' + t.titulo + '»)', a: x.r }); });
        (t.contexto || []).forEach(function (x) { var w = normW(x.w); if (w.length >= 3 && w.length <= 14 && !vistos[w]) { vistos[w] = 1; pal.push({ w: x.w, d: x.op[x.c] }); } });
      });
      return { titulo: 'Lectura · textos de ' + T.gname(g), qa: qa, pal: pal };
    });
  }
  /* completa qa↔palabras y deja todo listo para los generadores */
  function preparar(F, r, cant) {
    var qa = (F.qa || []).filter(function (x) { return x && String(x.q || '').trim() && String(x.a || '').trim(); });
    var pal = (F.pal || []).filter(function (x) { return x && normW(x.w).length >= 2 && String(x.d || '').trim(); });
    var vistos = {};
    pal = pal.filter(function (p) { var w = normW(p.w); if (vistos[w]) return false; vistos[w] = 1; return true; });
    if (!qa.length && pal.length) qa = pal.map(function (p) { return { q: '¿Qué palabra corresponde a: ' + p.d + '?', a: p.w }; });
    if (pal.length < 3) qa.forEach(function (x) { var w = normW(x.a); if (/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+$/.test(String(x.a).trim()) && w.length >= 3 && w.length <= 14 && !vistos[w]) { vistos[w] = 1; pal.push({ w: x.a, d: x.q }); } });
    return { titulo: F.titulo || 'Material SABI', qa: r.sample(qa, Math.min(cant, qa.length)), pal: r.sample(pal, Math.min(Math.max(cant, 6), 12, pal.length)), todosQa: qa };
  }

  /* ---------- piezas comunes ---------- */
  function hoja(titulo, sub, cuerpo, o) {
    o = o || {};
    return '<div class="hoja' + (o.clave ? ' clave' : '') + (o.land ? ' land' : '') + '">' + T.cabecera(titulo, sub) + cuerpo + (o.semaforo ? T.semaforo() : '') + T.pie(o.pie || '') + '</div>';
  }
  var DOC = [];
  function docente(txt) { DOC.push(txt); return '<div class="note no-print"><b>👩‍🏫 Para el docente:</b> ' + txt + '</div>'; }
  function claveLista(qa, extra) {
    return '<ol>' + qa.map(function (x) { return '<li><span class="muted">' + esc(corta(x.q, 140)) + '</span><div class="sol"><b>' + esc(x.a) + '</b></div></li>'; }).join('') + '</ol>' + (extra || '');
  }

  /* ---------- sopa de letras (determinista) ---------- */
  A.sopa = function (words, r, g) {
    var W = words.map(normW).filter(function (w, i, a) { return w.length >= 2 && a.indexOf(w) === i; }).sort(function (a, b) { return b.length - a.length; });
    var dirs = [[0, 1], [1, 0]];
    if (g >= 4) dirs = dirs.concat([[1, 1], [-1, 1]]);
    if (g >= 8) dirs = dirs.concat([[0, -1], [-1, 0], [-1, -1], [1, -1]]);
    var letras = W.join('').length, n = clamp(Math.max(W.length ? W[0].length : 8, Math.ceil(Math.sqrt(letras * 2.2))), 8, 16);
    function intentar(n) {
      var grid = [], pos = [], i, j;
      for (i = 0; i < n; i++) { grid.push([]); for (j = 0; j < n; j++) grid[i].push(''); }
      for (var w = 0; w < W.length; w++) {
        var word = W[w], ok = false;
        for (var t = 0; t < 400 && !ok; t++) {
          var d = r.pick(dirs), r0 = r.int(0, n - 1), c0 = r.int(0, n - 1), rf = r0 + d[0] * (word.length - 1), cf = c0 + d[1] * (word.length - 1);
          if (rf < 0 || rf >= n || cf < 0 || cf >= n) continue;
          var cabe = true;
          for (i = 0; i < word.length; i++) { var ch = grid[r0 + d[0] * i][c0 + d[1] * i]; if (ch && ch !== word[i]) { cabe = false; break; } }
          if (!cabe) continue;
          for (i = 0; i < word.length; i++) grid[r0 + d[0] * i][c0 + d[1] * i] = word[i];
          pos.push({ w: word, r: r0, c: c0, d: d }); ok = true;
        }
        if (!ok) return null;
      }
      return { grid: grid, pos: pos, n: n };
    }
    var res = null;
    while (!res && n <= 20) { res = intentar(n); if (!res) n++; }
    if (!res) return null;
    /* verificación: cada palabra se lee en su posición */
    var verif = res.pos.every(function (p) { for (var i = 0; i < p.w.length; i++) if (res.grid[p.r + p.d[0] * i][p.c + p.d[1] * i] !== p.w[i]) return false; return true; }) && res.pos.length === W.length;
    var abc = 'AAABCDEEEFGHIIJLMNÑOOOPRSSTUUVYZ', marca = {};
    res.pos.forEach(function (p) { for (var i = 0; i < p.w.length; i++) marca[(p.r + p.d[0] * i) + ',' + (p.c + p.d[1] * i)] = 1; });
    for (var i = 0; i < res.n; i++) for (var j = 0; j < res.n; j++) if (!res.grid[i][j]) res.grid[i][j] = abc[r.int(0, abc.length - 1)];
    res.marca = marca; res.ok = verif; res.palabras = W;
    return res;
  };
  function sopaHTML(S, clave) {
    var h = '<table class="sopa">';
    for (var i = 0; i < S.n; i++) { h += '<tr>'; for (var j = 0; j < S.n; j++) h += '<td' + (clave && S.marca[i + ',' + j] ? ' class="m"' : '') + '>' + S.grid[i][j] + '</td>'; h += '</tr>'; }
    return h + '</table>';
  }

  /* ---------- crucigrama (determinista) ---------- */
  A.cruci = function (pal, r) {
    var lista = pal.map(function (p) { return { w: normW(p.w), d: p.d, orig: p.w }; }).filter(function (p) { return p.w.length >= 2; });
    function construir(orden) {
      var cel = {}, dir = {}, puestos = [];
      function get(rr, cc) { return cel[rr + ',' + cc]; }
      function valido(w, r0, c0, h) {
        var dr = h ? 0 : 1, dc = h ? 1 : 0, cruces = 0;
        if (get(r0 - dr, c0 - dc) || get(r0 + dr * w.length, c0 + dc * w.length)) return -1;
        for (var i = 0; i < w.length; i++) {
          var rr = r0 + dr * i, cc = c0 + dc * i, k = rr + ',' + cc, ch = cel[k];
          if (ch) { if (ch !== w[i]) return -1; if (dir[k] && dir[k][h ? 'h' : 'v']) return -1; cruces++; }
          else if (get(rr + dc, cc + dr) || get(rr - dc, cc - dr)) return -1;
        }
        return cruces;
      }
      function poner(p, r0, c0, h) {
        for (var i = 0; i < p.w.length; i++) { var k = (r0 + (h ? 0 : i)) + ',' + (c0 + (h ? i : 0)); cel[k] = p.w[i]; dir[k] = dir[k] || {}; dir[k][h ? 'h' : 'v'] = 1; }
        puestos.push({ w: p.w, d: p.d, orig: p.orig, r: r0, c: c0, h: h });
      }
      var fuera = [];
      orden.forEach(function (p, idx) {
        if (!idx) { poner(p, 0, 0, true); return; }
        var cands = [];
        Object.keys(cel).forEach(function (k) {
          var rc = k.split(','), rr = +rc[0], cc = +rc[1];
          for (var i = 0; i < p.w.length; i++) if (p.w[i] === cel[k]) {
            [true, false].forEach(function (h) { var r0 = h ? rr : rr - i, c0 = h ? cc - i : cc, s = valido(p.w, r0, c0, h); if (s > 0) cands.push([s, r0, c0, h]); });
          }
        });
        if (!cands.length) { fuera.push(p); return; }
        var mx = Math.max.apply(null, cands.map(function (x) { return x[0]; })), best = r.pick(cands.filter(function (x) { return x[0] === mx; }));
        poner(p, best[1], best[2], best[3]);
      });
      var ks = Object.keys(cel).map(function (k) { return k.split(',').map(Number); });
      var r1 = Math.min.apply(null, ks.map(function (x) { return x[0]; })), r2 = Math.max.apply(null, ks.map(function (x) { return x[0]; }));
      var c1 = Math.min.apply(null, ks.map(function (x) { return x[1]; })), c2 = Math.max.apply(null, ks.map(function (x) { return x[1]; }));
      return { cel: cel, puestos: puestos, fuera: fuera, r1: r1, c1: c1, filas: r2 - r1 + 1, cols: c2 - c1 + 1 };
    }
    if (!lista.length) return null;
    var mejor = null;
    for (var t = 0; t < 24; t++) {
      var orden = t === 0 ? lista.slice().sort(function (a, b) { return b.w.length - a.w.length; }) : r.shuffle(lista);
      var x = construir(orden);
      if (x.cols > 20 || x.filas > 20) continue;
      if (!mejor || x.puestos.length > mejor.puestos.length || (x.puestos.length === mejor.puestos.length && x.filas * x.cols < mejor.filas * mejor.cols)) mejor = x;
      if (mejor.puestos.length === lista.length && t > 6) break;
    }
    if (!mejor) mejor = construir(lista);
    /* numeración por orden de lectura */
    var inicios = {};
    mejor.puestos.forEach(function (p) { p.r -= mejor.r1; p.c -= mejor.c1; inicios[p.r + ',' + p.c] = 1; });
    var nums = {}, n = 0;
    Object.keys(inicios).map(function (k) { return k.split(',').map(Number); }).sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; }).forEach(function (x) { nums[x[0] + ',' + x[1]] = ++n; });
    mejor.puestos.forEach(function (p) { p.n = nums[p.r + ',' + p.c]; });
    var grid = {};
    Object.keys(mejor.cel).forEach(function (k) { var rc = k.split(','); grid[(+rc[0] - mejor.r1) + ',' + (+rc[1] - mejor.c1)] = mejor.cel[k]; });
    mejor.grid = grid; mejor.nums = nums;
    /* verificación: cada palabra colocada se lee en la cuadrícula */
    mejor.ok = mejor.puestos.every(function (p) { for (var i = 0; i < p.w.length; i++) if (grid[(p.r + (p.h ? 0 : i)) + ',' + (p.c + (p.h ? i : 0))] !== p.w[i]) return false; return true; });
    return mejor;
  };
  function cruciHTML(C, clave) {
    var h = '<table class="cruci">';
    for (var i = 0; i < C.filas; i++) {
      h += '<tr>';
      for (var j = 0; j < C.cols; j++) { var k = i + ',' + j, ch = C.grid[k]; h += ch ? '<td class="l">' + (C.nums[k] ? '<sup>' + C.nums[k] + '</sup>' : '') + (clave ? ch : '') + '</td>' : '<td></td>'; }
      h += '</tr>';
    }
    return h + '</table>';
  }

  /* ---------- las 10 ayudas ---------- */
  A.LISTA = [
    { id: 'worksheet', ic: '📝', n: 'Hoja de trabajo', d: 'Ficha clásica con preguntas, espacio de respuesta y reto final.' },
    { id: 'escape', ic: '🔐', n: 'Escape room', d: 'Candados cuyas claves salen de las respuestas; el código final abre el cofre.' },
    { id: 'detective', ic: '🕵️', n: 'Detective', d: 'Un caso misterioso: cada pista resuelta descarta a un sospechoso.' },
    { id: 'boardgame', ic: '🎲', n: 'Juego de tablero', d: 'Tablero tipo serpientes y escaleras con tarjetas de preguntas recortables.' },
    { id: 'stations', ic: '🚉', n: 'Estaciones', d: 'Estaciones rotativas con tarjetas y hoja de ruta por grupo.' },
    { id: 'manipulative', ic: '✂️', n: 'Manipulativos', d: 'Tarjetas para emparejar pregunta–respuesta y dominó circular.' },
    { id: 'comic', ic: '💬', n: 'Historieta', d: 'Viñetas con globos de diálogo para completar.' },
    { id: 'lapbook', ic: '📂', n: 'Lapbook', d: 'Plantilla de solapas plegables para pegar en una carpeta.' },
    { id: 'puzzle', ic: '🧩', n: 'Sopa y crucigrama', d: 'Sopa de letras y crucigrama generados con algoritmo verificado.' },
    { id: 'minibook', ic: '📖', n: 'Minilibro', d: 'Minilibro de 8 páginas en una sola hoja, con instrucciones de plegado.' }
  ];

  var GEN = {};
  GEN.worksheet = function (F, r) {
    var qa = F.qa, reto = F.todosQa.filter(function (x) { return qa.indexOf(x) < 0; })[0];
    var c = docente('Lean juntos la gran idea. Cada estudiante responde solo; luego comparan en parejas antes de corregir con la clave. Use el semáforo para planear el refuerzo.') +
      '<div class="idea">💡 <b>Hoy practicamos:</b> ' + esc(F.titulo) + '. Lee con calma cada pregunta, responde con tus palabras y revisa.</div>' +
      '<div class="items uno">' + qa.map(function (x, i) { return '<div class="it"><span class="n">' + (i + 1) + '</span><div class="c">' + esc(x.q) + lineas(String(x.a).length > 25 ? 2 : 1) + '</div></div>'; }).join('') + '</div>' +
      (reto ? '<div class="reto">🚀 <b>Reto:</b> ' + esc(reto.q) + lineas(2) + '</div>' : '<div class="reto">🚀 <b>Reto:</b> Inventa una pregunta nueva sobre el tema y escribe su respuesta.' + lineas(2) + '</div>');
    return { hojas: [hoja('📝 Hoja de trabajo · ' + esc(F.titulo), 'Hoja de trabajo', c, { semaforo: true, pie: 'Semilla ' + F.seed })], clave: claveLista(qa.concat(reto ? [reto] : [])) };
  };
  GEN.escape = function (F, r) {
    var qa = F.qa.slice(0, clamp(F.qa.length, 2, 6)), codigo = qa.map(function (x) { return keyChar(x.a); }).join('');
    var lugar = r.pick(['el laboratorio de ciencias', 'la biblioteca del colegio', 'el aula de artes', 'el museo del Valle', 'la nave espacial SABI']);
    var c = docente('Forme equipos de 3 o 4. Cada candado se abre con el <b>primer carácter</b> (letra o cifra) de su respuesta. El docente solo confirma el código final; si es incorrecto, el equipo revisa sus candados. Tiempo sugerido: ' + (qa.length * 6) + ' minutos.') +
      '<div class="idea">🔐 <b>¡Están encerrados en ' + lugar + '!</b> La puerta tiene un cofre con ' + qa.length + ' candados. Resuelvan cada reto, escriban la respuesta y copien su <b>primer carácter</b> en el candado. Con todos los caracteres, en orden, formen el código final.</div>' +
      '<div class="grid2">' + qa.map(function (x, i) { return '<div class="cut candado"><div class="cab">🔒 Candado ' + (i + 1) + '</div><p>' + esc(x.q) + '</p>Respuesta:' + lineas(1) + '<div class="row">Clave del candado: <span class="caja"></span></div></div>'; }).join('') + '</div>' +
      '<h3>🧰 Cofre final</h3><div class="row">' + qa.map(function (_, i) { return '<span class="caja grande"><small>' + (i + 1) + '</small></span>'; }).join('') + '</div><p class="muted">Cuando tengan el código completo, díganlo al docente. ¡Solo un intento por minuto!</p>';
    return { hojas: [hoja('🔐 Escape room · ' + esc(F.titulo), 'Escape room educativo', c, { semaforo: true, pie: 'Semilla ' + F.seed })], clave: claveLista(qa, '<div class="reto">🗝 <b>Código final:</b> <span style="font:700 22px ui-monospace,monospace;letter-spacing:6px">' + esc(codigo) + '</span></div>') };
  };
  GEN.detective = function (F, r) {
    var vistos = {}, qa = F.todosQa.filter(function (x) { var k = String(x.a).trim().toLowerCase(); if (vistos[k]) return false; vistos[k] = 1; return true; });
    qa = r.sample(qa, Math.min(qa.length, 6));
    if (qa.length < 3) return { aviso: 'El detective necesita al menos 3 preguntas con respuestas distintas.' };
    var k = Math.min(qa.length - 1, 5), pistas = qa.slice(0, k), falsa = qa[k];
    var noms = r.sample(NOMBRES, k + 1), culpable = r.int(0, k);
    var objeto = r.pick(['el trofeo de la feria de ciencias', 'la llave del laboratorio', 'el cuaderno de experimentos', 'la maqueta del río Cali', 'el diccionario dorado']);
    var oficios = r.shuffle(['la bibliotecaria', 'el jardinero', 'la profesora de música', 'el portero', 'la cocinera', 'el bibliotecario', 'la científica invitada']);
    var sosp = noms.map(function (n, i) { return { n: n, of: oficios[i % oficios.length], cod: null }; }), pi = 0;
    sosp.forEach(function (s, i) { if (i === culpable) s.cod = falsa.a; else s.cod = pistas[pi++].a; });
    var c = docente('Cada respuesta correcta coincide con la coartada de un sospechoso: ese sospechoso queda <b>descartado</b>. Quien no tenga coartada confirmada es el responsable. Pida a los estudiantes justificar por escrito.') +
      '<div class="idea">🕵️ <b>El caso:</b> esta mañana desapareció ' + objeto + '. Hay ' + sosp.length + ' sospechosos. Cada uno dice tener una coartada con un <b>código</b>. Resuelve las pistas: si tu respuesta coincide con el código de un sospechoso, su coartada es verdadera y lo tachas.</div>' +
      '<h3>Sospechosos</h3><table class="t"><tr><th>#</th><th>Sospechoso</th><th>Código de su coartada</th><th>¿Descartado?</th></tr>' + r.shuffle(sosp).map(function (s, i) { return '<tr><td>' + (i + 1) + '</td><td>' + esc(s.n) + ', ' + s.of + '</td><td>' + esc(corta(s.cod, 90)) + '</td><td class="e"></td></tr>'; }).join('') + '</table>' +
      '<h3>Pistas</h3><div class="items uno">' + pistas.map(function (x, i) { return '<div class="it"><span class="n">' + (i + 1) + '</span><div class="c">🔎 ' + esc(x.q) + lineas(1) + '</div></div>'; }).join('') + '</div>' +
      '<div class="reto">⚖️ <b>Veredicto:</b> el responsable es ______________________ porque ' + lineas(2) + '</div>';
    return { hojas: [hoja('🕵️ Detective · ' + esc(F.titulo), 'Caso para detectives', c, { pie: 'Semilla ' + F.seed })], clave: claveLista(pistas, '<div class="reto">⚖️ <b>Responsable:</b> ' + esc(sosp.filter(function (s) { return s.cod === falsa.a; })[0].n) + ' (su código «' + esc(corta(falsa.a, 60)) + '» no corresponde a ninguna pista).</div>') };
  };
  GEN.boardgame = function (F, r) {
    var N = 30, esp = {}, usados = { 1: 1, 30: 1 };
    function libre(a, b) { for (var t = 0; t < 60; t++) { var x = r.int(a, b); if (!usados[x]) { usados[x] = 1; return x; } } return 0; }
    for (var i = 0; i < 3; i++) { var a = libre(2, 20); if (!a) continue; var b = libre(Math.min(29, a + 5), Math.min(29, a + 12)); if (b && b > a) esp[a] = { t: 'sube', to: b }; }
    for (i = 0; i < 3; i++) { var s = libre(10, 29); if (!s) continue; var e = libre(Math.max(2, s - 12), Math.max(2, s - 5)); if (e && e < s) esp[s] = { t: 'baja', to: e }; }
    var cel = [];
    for (var n = 1; n <= N; n++) {
      var k = Math.floor((n - 1) / 6), col = k % 2 === 0 ? (n - 1) % 6 : 5 - (n - 1) % 6, fila = 4 - k, x = esp[n];
      var cont = n === 1 ? '🚩 Salida' : n === N ? '🏆 Meta' : x ? (x.t === 'sube' ? '🪜 Sube a ' + x.to : '🐍 Baja a ' + x.to) : (n % 3 === 0 ? '❓ Tarjeta' : '');
      cel.push('<div class="cas' + (x ? ' ' + x.t : '') + (n % 3 === 0 && !x ? ' q' : '') + '" style="grid-row:' + (fila + 1) + ';grid-column:' + (col + 1) + '"><b>' + n + '</b><span>' + cont + '</span></div>');
    }
    var tablero = docente('Grupos de 2 a 4 jugadores, un dado y una ficha por jugador. Al caer en ❓ otro jugador lee una tarjeta: si responde bien avanza 1 casilla extra; si no, se queda. Las escaleras suben y las serpientes bajan. Gana quien llegue primero a la meta.') +
      '<div class="tablero">' + cel.join('') + '</div>';
    var tarjetas = '<p class="muted">✂️ Recorta las tarjetas por la línea punteada. La respuesta va al revés para que la lea quien pregunta.</p><div class="grid3">' + F.qa.map(function (x, i) { return '<div class="cut tarjeta"><small>❓ Tarjeta ' + (i + 1) + '</small><p>' + esc(x.q) + '</p><div class="inv">Respuesta: ' + esc(x.a) + '</div></div>'; }).join('') + '</div>';
    return { hojas: [hoja('🎲 Tablero · ' + esc(F.titulo), 'Juego de tablero', tablero, { land: true, pie: 'Semilla ' + F.seed }), hoja('🃏 Tarjetas de preguntas', 'Juego de tablero · recortables', tarjetas, { pie: 'Semilla ' + F.seed })], clave: claveLista(F.qa) };
  };
  GEN.stations = function (F, r) {
    var qa = F.qa, k = clamp(Math.ceil(qa.length / 2), 3, 6), est = [], i;
    var nombres = r.shuffle(['Exploradores', 'Inventores', 'Lectores', 'Científicos', 'Artistas', 'Matemáticos', 'Guardianes del planeta']);
    var tareas = ['Resuelve y escribe tu respuesta en la hoja de ruta.', 'Explica la respuesta a tu compañero con tus palabras.', 'Representa la respuesta con un dibujo o esquema.', 'Inventa una pregunta parecida para el siguiente grupo.'];
    for (i = 0; i < k; i++) est.push({ n: i + 1, nom: nombres[i], qa: [], t: tareas[i % tareas.length] });
    qa.forEach(function (x, j) { est[j % k].qa.push(x); });
    var tarj = docente('Organice ' + k + ' estaciones en el aula y ' + k + ' grupos. Cada ronda dura 8–10 minutos; al sonar la señal, cada grupo pasa a la estación indicada en su hoja de ruta. Al final, socialicen las respuestas.') +
      '<div class="grid2">' + est.map(function (e) { return '<div class="cut estacion"><div class="cab">🚉 Estación ' + e.n + ' · ' + e.nom + '</div><ol>' + e.qa.map(function (x) { return '<li>' + esc(x.q) + '</li>'; }).join('') + '</ol><p class="muted">✋ Además: ' + e.t + '</p></div>'; }).join('') + '</div>';
    var ruta = '<table class="t"><tr><th>Grupo</th>' + est.map(function (_, j) { return '<th>Ronda ' + (j + 1) + '</th>'; }).join('') + '</tr>';
    for (var g = 0; g < k; g++) { ruta += '<tr><td><b>Grupo ' + (g + 1) + '</b></td>'; for (var rd = 0; rd < k; rd++) ruta += '<td>Estación ' + ((g + rd) % k + 1) + '</td>'; ruta += '</tr>'; }
    ruta += '</table><h3>Mis respuestas</h3>' + est.map(function (e) { return '<div class="qbox"><b>Estación ' + e.n + ' · ' + e.nom + '</b>' + e.qa.map(function (_, j) { return '<div class="row"><span>' + (j + 1) + '.</span><div style="flex:1">' + lineas(1) + '</div></div>'; }).join('') + '</div>'; }).join('');
    return { hojas: [hoja('🚉 Tarjetas de estaciones · ' + esc(F.titulo), 'Estaciones rotativas', tarj, { pie: 'Semilla ' + F.seed }), hoja('🗺 Hoja de ruta', 'Estaciones rotativas', ruta, { semaforo: true, pie: 'Semilla ' + F.seed })], clave: est.map(function (e) { return '<h3>Estación ' + e.n + ' · ' + e.nom + '</h3>' + claveLista(e.qa); }).join('') };
  };
  GEN.manipulative = function (F, r) {
    var qa = F.qa, cartas = [];
    qa.forEach(function (x, i) { cartas.push({ t: 'q', s: x.q, i: i }); cartas.push({ t: 'a', s: x.a, i: i }); });
    cartas = r.shuffle(cartas);
    var em = docente('Recorte las tarjetas. En parejas, los estudiantes emparejan cada pregunta (azul) con su respuesta (dorada). Variante: juego de memoria boca abajo.') +
      '<div class="grid4">' + cartas.map(function (c) { return '<div class="cut carta ' + c.t + '">' + (c.t === 'q' ? '❓ ' : '✅ ') + esc(c.s) + '</div>'; }).join('') + '</div>';
    var n = qa.length, fichas = [];
    for (var i = 0; i < n; i++) fichas.push({ i: i, izq: qa[(i + n - 1) % n].a, der: qa[i].q });
    var orden = r.shuffle(fichas);
    var dom = docente('Dominó circular: cada ficha tiene una <b>respuesta</b> (izquierda) y una <b>pregunta</b> (derecha). Empiecen con cualquier ficha y unan la pregunta con la ficha que tiene su respuesta, hasta cerrar el círculo.') +
      '<div class="grid2">' + orden.map(function (f) { return '<div class="cut domino"><div>✅ ' + esc(f.izq) + '</div><div>❓ ' + esc(f.der) + '</div></div>'; }).join('') + '</div>';
    return { hojas: [hoja('✂️ Tarjetas para emparejar · ' + esc(F.titulo), 'Manipulativos', em, { pie: 'Semilla ' + F.seed }), hoja('🁫 Dominó de preguntas', 'Manipulativos', dom, { pie: 'Semilla ' + F.seed })], clave: claveLista(qa, '<p class="muted">Dominó: el círculo sigue el orden de la lista (la respuesta de 1 va antes de la pregunta 2, … y la de la última cierra con la pregunta 1).</p>') };
  };
  GEN.comic = function (F, r) {
    var qa = F.qa.slice(0, 4), n = qa.length + 2, nom = r.pick(NOMBRES);
    var vin = ['<div class="vineta"><small>1</small><div class="globo">🦉 <b>Sabi:</b> ¡Hola, ' + esc(nom) + '! Hoy vamos a descubrir algo sobre ' + esc(F.titulo) + '.</div><div class="pers">🦉 &nbsp; 🧒</div><div class="globo vacio">🧒 <b>' + esc(nom) + ':</b>' + lineas(1) + '</div></div>'];
    qa.forEach(function (x, i) { vin.push('<div class="vineta"><small>' + (i + 2) + '</small><div class="globo">🦉 <b>Sabi:</b> ' + esc(x.q) + '</div><div class="pers">🦉 &nbsp; 🧒</div><div class="globo vacio">🧒 <b>' + esc(nom) + ':</b>' + lineas(2) + '</div></div>'); });
    vin.push('<div class="vineta"><small>' + n + '</small><div class="globo vacio">🦉 <b>Sabi:</b> ¿Qué aprendiste hoy?' + lineas(1) + '</div><div class="pers">✏️ Dibuja aquí el final</div><div class="globo vacio">🧒 <b>' + esc(nom) + ':</b>' + lineas(2) + '</div></div>');
    var c = docente('Los estudiantes completan los globos vacíos con la respuesta correcta, dicha con naturalidad, como en una conversación. En la última viñeta dibujan y escriben su conclusión. Pueden colorear y dramatizar la historieta.') +
      '<div class="comic">' + vin.join('') + '</div>';
    return { hojas: [hoja('💬 Historieta · ' + esc(F.titulo), 'Cómic para completar', c, { semaforo: true, pie: 'Semilla ' + F.seed })], clave: claveLista(qa) };
  };
  GEN.lapbook = function (F, r) {
    var items = F.qa.slice(0, 8);
    var c = docente('Materiales: carpeta o cartulina doblada en tres, tijeras, pegante y colores. Recorte cada solapa por la línea punteada exterior, doble por la línea de puntos y pegue solo la parte de atrás en la carpeta. Afuera queda la pregunta; adentro, la respuesta del estudiante.') +
      '<div class="cut solapa portada"><div class="fr"><b style="font:700 22px Crimson Pro,Georgia,serif">📂 Mi lapbook de</b><br>' + esc(F.titulo) + '</div><div class="dobla">- - - - dobla aquí - - - -</div><div class="in">Nombre: ' + lineas(1) + '</div></div>' +
      '<div class="grid2">' + items.map(function (x, i) { return '<div class="cut solapa"><div class="fr"><span class="n">' + (i + 1) + '</span> ' + esc(x.q) + '</div><div class="dobla">- - - - dobla aquí - - - -</div><div class="in">✍️ Mi respuesta:' + lineas(2) + '</div></div>'; }).join('') + '</div>' +
      '<div class="cut bolsillo"><b>👛 Bolsillo de palabras clave</b> — recorta, dobla las pestañas y pega por los bordes. Guarda aquí tarjetas con las palabras nuevas.</div>';
    return { hojas: [hoja('📂 Lapbook · ' + esc(F.titulo), 'Plantilla de solapas', c, { pie: 'Semilla ' + F.seed })], clave: claveLista(items) };
  };
  GEN.puzzle = function (F, r, g) {
    if (F.pal.length < 3) return { aviso: 'Esta fuente tiene menos de 3 palabras sueltas. Para sopas y crucigramas use «Experimentos del grado», «Lectura del grado» o escriba en «Texto libre» líneas como <b>PALABRA: definición</b>.' };
    var S = A.sopa(F.pal.map(function (p) { return p.w; }), r, g), C = A.cruci(F.pal, r);
    if (!S || !C) return { aviso: 'No fue posible acomodar las palabras. Pruebe otra semilla o palabras más cortas.' };
    var aviso = (!S.ok ? '<div class="note">⚠️ Verificación de la sopa falló; cambie la semilla.</div>' : '') + (C.fuera.length ? '<div class="note">ℹ️ No cupieron en el crucigrama (se usaron en la sopa): ' + C.fuera.map(function (p) { return esc(p.orig); }).join(', ') + '. Pruebe otra semilla.</div>' : '');
    var dirTxt = g >= 8 ? 'en todas las direcciones, incluso al revés' : g >= 4 ? 'horizontal, vertical y en diagonal' : 'de izquierda a derecha y de arriba abajo';
    var hs = docente('Las palabras están escondidas ' + dirTxt + '. Verificado: ' + S.palabras.length + ' de ' + S.palabras.length + ' palabras ubicadas en la sopa.') + aviso +
      '<div class="row" style="align-items:flex-start;gap:18px">' + sopaHTML(S) + '<div><b>Busca:</b><ul class="pal">' + S.palabras.map(function (w) { return '<li>☐ ' + w + '</li>'; }).join('') + '</ul></div></div>';
    var hor = C.puestos.filter(function (p) { return p.h; }).sort(function (a, b) { return a.n - b.n; }), ver = C.puestos.filter(function (p) { return !p.h; }).sort(function (a, b) { return a.n - b.n; });
    var pist = function (L) { return '<ol class="pistas">' + L.map(function (p) { return '<li value="' + p.n + '">' + esc(p.d) + ' <small>(' + p.w.length + (/\s/.test(String(p.orig).trim()) ? '; ' + String(p.orig).trim().split(/\s+/).length + ' palabras' : '') + ')</small></li>'; }).join('') + '</ol>'; };
    var hc = docente('Crucigrama de ' + C.puestos.length + ' palabras (sin tildes ni espacios). El número entre paréntesis indica cuántas letras tiene la palabra.') + '<div class="cruci-wrap">' + cruciHTML(C) + '</div>' +
      '<div class="grid2"><div><h3>➡️ Horizontales</h3>' + pist(hor) + '</div><div><h3>⬇️ Verticales</h3>' + pist(ver) + '</div></div>';
    return { hojas: [hoja('🔤 Sopa de letras · ' + esc(F.titulo), 'Puzzle', hs, { pie: 'Semilla ' + F.seed }), hoja('✏️ Crucigrama · ' + esc(F.titulo), 'Puzzle', hc, { pie: 'Semilla ' + F.seed })],
      clave: '<h3>Sopa de letras</h3>' + sopaHTML(S, true) + '<h3>Crucigrama</h3><div class="cruci-wrap">' + cruciHTML(C, true) + '</div><ul>' + C.puestos.map(function (p) { return '<li>' + p.n + (p.h ? ' horizontal' : ' vertical') + ': <b>' + esc(p.w) + '</b></li>'; }).join('') + '</ul>', meta: { sopa: S, cruci: C } };
  };
  GEN.minibook = function (F, r) {
    var it = F.qa.slice(0, 6), pg = {};
    pg[1] = '<div class="mb-portada"><div style="font-size:30px">📖</div><b>' + esc(F.titulo) + '</b><br><small>Mi minilibro</small><br><br><small>Autor(a):</small>' + lineas(1) + '</div>';
    for (var i = 0; i < 6; i++) { var x = it[i]; pg[i + 2] = x ? '<b>' + esc(corta(x.q, 120)) + '</b>' + lineas(3) : '<b>Dibuja lo que más te gustó</b>'; }
    pg[8] = '<b>🧠 ¿Qué aprendí?</b>' + lineas(2) + '<b>¿Cómo lo uso?</b>' + lineas(1) + '<small>🟢 🟡 🔴</small>';
    var arriba = [5, 4, 3, 2], abajo = [6, 7, 8, 1];
    var celda = function (p, inv) { return '<div class="mb-p' + (inv ? ' inv' : '') + '"><span class="mb-n">' + (p === 1 ? 'Portada' : p === 8 ? 'Contraportada' : 'Pág. ' + p) + '</span>' + pg[p] + '</div>'; };
    var plantilla = '<div class="minib">' + arriba.map(function (p) { return celda(p, true); }).join('') + abajo.map(function (p) { return celda(p, false); }).join('') + '</div>';
    var instr = docente('Imprima la plantilla en una hoja horizontal (una cara). La fila de arriba sale al revés a propósito.') +
      '<ol><li>Dobla la hoja por la mitad a lo largo (como un perro caliente) y desdobla.</li><li>Dobla por la mitad a lo ancho, y otra vez a lo ancho, para marcar 8 rectángulos. Desdobla.</li><li>Dobla a lo ancho por la mitad y <b>corta por el pliegue central</b> desde el borde doblado hasta la mitad de la hoja (solo los dos rectángulos del centro).</li><li>Abre la hoja, dóblala a lo largo y empuja los extremos hacia el centro: se abre un rombo en el corte.</li><li>Sigue empujando hasta que se formen 4 hojas y dobla como un librito con la portada afuera.</li></ol>' +
      '<div class="note">✍️ Escribe en cada página la respuesta a la pregunta. En la contraportada responde «¿Qué aprendí?».</div>';
    return { hojas: [hoja('📖 Minilibro · ' + esc(F.titulo), 'Plantilla de 8 páginas (imprimir horizontal)', plantilla, { land: true, pie: 'Semilla ' + F.seed }), hoja('📐 Cómo plegar el minilibro', 'Minilibro', instr, { pie: 'Semilla ' + F.seed })], clave: claveLista(it) };
  };
  A.GEN = GEN;
  A.preparar = preparar;

  /* ---------- vista ---------- */
  var S = { ayuda: 'worksheet', fuente: 'enviado', cant: 8, seed: T.semilla(), libre: T.store('ayudas_libre') || EJEMPLO_LIBRE };
  A.estado = S;
  function obtener(g, r) {
    if (S.fuente === 'enviado') { var x = T.store('fuente_qa'); return Promise.resolve(x && x.qa && x.qa.length ? x : null); }
    if (S.fuente === 'libre') { var p = A.parseLibre(S.libre); return Promise.resolve(p.qa.length || p.pal.length ? { titulo: 'Material del docente', qa: p.qa, pal: p.pal } : null); }
    if (S.fuente === 'ciencia') return fuenteCiencia(g, r);
    return fuenteLectura(g, r);
  }
  function render(app) {
    var g = T.state.grado, env = T.store('fuente_qa');
    var firma = env && env.qa && env.qa.length ? env.titulo + '|' + env.qa.length + '|' + (env.qa[0] || {}).q : '';
    if (firma && firma !== S.firma) S.fuente = 'enviado';
    S.firma = firma;
    if (S.fuente === 'enviado' && !firma) S.fuente = 'ciencia';
    var FUENTES = [['enviado', '📤 Enviado' + (env && env.titulo ? ': ' + corta(env.titulo, 28) : '')], ['ciencia', '🔬 Experimentos del grado'], ['lectura', '📚 Lectura del grado'], ['libre', '✍️ Texto libre']];
    app.innerHTML = '<div class="lay"><aside class="panel no-print"><h3>🧰 Ayudas didácticas</h3><p class="lead">Convierte cualquier contenido en material para aprender jugando. Cada ayuda trae instrucciones para el docente y clave.</p>' +
      '<div class="fld"><span>Ayuda</span><div class="chips">' + A.LISTA.map(function (a) { return '<button class="chip' + (a.id === S.ayuda ? ' on' : '') + '" data-ay="' + a.id + '" title="' + esc(a.d) + '">' + a.ic + ' /' + a.id + '</button>'; }).join('') + '</div></div>' +
      '<div class="fld"><span>Fuente del contenido</span><div class="chips">' + FUENTES.map(function (f) { return '<button class="chip' + (f[0] === S.fuente ? ' on' : '') + '" data-fu="' + f[0] + '"' + (f[0] === 'enviado' && !(env && env.qa && env.qa.length) ? ' disabled title="Envíe ejercicios desde Matemáticas o Ciencia"' : '') + '>' + esc(f[1]) + '</button>'; }).join('') + '</div></div>' +
      (S.fuente === 'libre' ? '<label class="fld"><span>Texto libre (una línea por ítem)</span><textarea id="a-libre">' + esc(S.libre) + '</textarea><small class="muted">«pregunta = respuesta» o «PALABRA: definición»</small></label>' : '') +
      '<label class="fld"><span>Cantidad de ítems</span><input type="number" id="a-cant" min="3" max="16" value="' + S.cant + '"></label>' +
      '<label class="fld"><span>Semilla (n.º de material)</span><input type="number" id="a-seed" value="' + S.seed + '"></label>' +
      '<button class="btn g" id="a-nueva">🎲 Nueva semilla</button>' +
      '<div class="note">La misma semilla y la misma fuente reproducen exactamente el mismo material. Comando IA equivalente en la pestaña «Comandos IA».</div></aside>' +
      '<section><div id="a-out"><p class="muted" id="a-cargando">Preparando material…</p></div></section></div>';
    var $ = function (s) { return T.$(s, app); };
    T.$$('[data-ay]', app).forEach(function (b) { b.onclick = function () { S.ayuda = b.dataset.ay; T.$$('[data-ay]', app).forEach(function (x) { x.classList.toggle('on', x === b); }); dibujar(); }; });
    T.$$('[data-fu]', app).forEach(function (b) { b.onclick = function () { if (b.disabled) return; S.fuente = b.dataset.fu; render(app); }; });
    if ($('#a-libre')) $('#a-libre').oninput = function () { S.libre = this.value; T.store('ayudas_libre', S.libre); clearTimeout(S.tm); S.tm = setTimeout(dibujar, 400); };
    $('#a-cant').onchange = function () { S.cant = clamp(+this.value || 8, 3, 16); this.value = S.cant; dibujar(); };
    $('#a-seed').onchange = function () { S.seed = +this.value || T.semilla(); dibujar(); };
    $('#a-nueva').onclick = function () { S.seed = T.semilla(); $('#a-seed').value = S.seed; dibujar(); };
    var turno = 0;
    function dibujar() {
      var out = $('#a-out'); if (!out) return;
      var mio = ++turno, ay = A.LISTA.filter(function (a) { return a.id === S.ayuda; })[0];
      obtener(g, T.rng(S.seed)).then(function (F) {
        if (mio !== turno || !document.body.contains(out) || T.state.grado !== g) return;
        if (!F) { out.innerHTML = '<div class="note">😊 No hay contenido disponible en esta fuente para ' + esc(T.gname(g)) + '. Elija otra fuente o escriba su propio texto en «Texto libre».</div>'; return; }
        var r = T.rng(S.seed), P = preparar(F, r, S.cant), res;
        P.seed = S.seed;
        if (!P.qa.length) { out.innerHTML = '<div class="note">😊 La fuente no tiene preguntas utilizables. Revise el formato del texto libre.</div>'; return; }
        DOC = [];
        try { res = GEN[ay.id](P, r, T.gnum(g)); } catch (e) { res = { aviso: 'No se pudo generar esta ayuda con la fuente actual (' + esc(e.message) + ').' }; }
        if (res.aviso) { out.innerHTML = '<div class="note">' + res.aviso + '</div>'; return; }
        var clave = res.clave ? hoja('🔑 Clave del docente · ' + ay.n, P.titulo + ' · Semilla ' + S.seed, (DOC.length ? '<div class="note"><b>👩‍🏫 Instrucciones para el docente</b><ul>' + DOC.map(function (d) { return '<li>' + d + '</li>'; }).join('') + '</ul></div>' : '') + res.clave, { clave: true, pie: '/' + ay.id + ' · semilla ' + S.seed }) : '';
        out.innerHTML = T.barraHojas({}) + '<p class="muted no-print">' + ay.ic + ' <b>/' + ay.id + '</b> · ' + esc(ay.d) + ' Fuente: ' + esc(P.titulo) + ' (' + P.qa.length + ' preguntas, ' + P.pal.length + ' palabras).</p><div class="hojas">' + res.hojas.join('') + clave + '</div>';
        T.enlazarBarra(out);
      }, function () {
        if (document.body.contains(out)) out.innerHTML = '<div class="note">😊 No se pudo cargar el contenido. Revise la conexión e intente de nuevo.</div>';
      });
    }
    dibujar();
  }
  T.registrar({ id: 'ayudas', icon: '🧰', label: 'Ayudas didácticas', render: render });
})();
