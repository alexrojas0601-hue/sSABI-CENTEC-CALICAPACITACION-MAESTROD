/* =====================================================================
   SABI DOTS · Tutor personal inteligente para SABI CENTEC MAESTROS
   Motor universal: se añade a cada curso sin alterar su diseño.
   Carga kb/<nombre_del_curso>.js (window.SABI_KB) y despliega los
   comandos didácticos del modelo SABIC: ruta, flashcards, sopa de
   letras, crucigrama, timeline, 5W1H, fluxograma, mapa mental,
   detecta el error, recuperación activa, Dot Auditor y cierre.
   ===================================================================== */
(function () {
  'use strict';
  if (window.__SABI_DOTS__) return;
  window.__SABI_DOTS__ = true;

  var C = { navy: '#0B1E3D', gold: '#D4A843', teal: '#1D9E75', cream: '#FBF7EE', ink: '#13233F', soft: '#5B6B85', red: '#C2492E' };
  var PAL = ['#1D9E75', '#D4A843', '#1B7FA6', '#D85A30', '#7F77DD', '#2E7D5A'];
  var page = (location.pathname.split('/').pop() || '').replace(/\.html?$/i, '');
  if (!/^sabi_curso\d+/.test(page)) return;

  var scriptEl = document.currentScript || [].slice.call(document.scripts).filter(function (s) { return /sabi_dots\.js/.test(s.src); })[0];
  var base = scriptEl && scriptEl.src ? scriptEl.src.replace(/sabi_dots\.js.*$/, '') : '';
  var KB = null, root, body, view = 'ruta';

  /* ---------- utilidades ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(sel, el) { return (el || document).querySelector(sel); }
  function $$(sel, el) { return [].slice.call((el || document).querySelectorAll(sel)); }
  function store(k, v) { var key = 'sabidots:' + page + ':' + k; try { if (v === undefined) { var r = localStorage.getItem(key); return r ? JSON.parse(r) : null; } localStorage.setItem(key, JSON.stringify(v)); } catch (e) { return null; } }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9ñ]+/g, ' ').trim(); }
  function wrap(text, max) { var w = String(text).split(/\s+/), lines = [], cur = ''; w.forEach(function (x) { if ((cur + ' ' + x).trim().length > max && cur) { lines.push(cur); cur = x; } else cur = (cur + ' ' + x).trim(); }); if (cur) lines.push(cur); return lines; }

  /* ---------- estilos ---------- */
  function css() {
    if (!$('link[href*="Crimson+Pro"]')) {
      var l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@500;600;700&family=DM+Sans:wght@400;500;700&display=swap';
      document.head.appendChild(l);
    }
    var s = document.createElement('style');
    s.textContent = [
      '#sdots-btn{position:fixed;left:18px;bottom:18px;z-index:9990;display:flex;align-items:center;gap:8px;padding:10px 16px 10px 10px;border-radius:999px;border:2px solid ' + C.gold + ';background:' + C.navy + ';color:#fff;font:600 14px "DM Sans",system-ui,sans-serif;cursor:pointer;box-shadow:0 8px 24px rgba(11,30,61,.35);transition:transform .2s}',
      '#sdots-btn:hover{transform:translateY(-2px)}',
      '#sdots-btn .dots{display:grid;grid-template-columns:repeat(3,7px);gap:3px}',
      '#sdots-btn .dots i{width:7px;height:7px;border-radius:50%;background:' + C.gold + '}',
      '#sdots-btn .dots i:nth-child(3n+2){background:' + C.teal + '}',
      '#sdots{position:fixed;inset:0;z-index:9995;display:none;font:15px/1.55 "DM Sans",system-ui,sans-serif;color:' + C.ink + '}',
      '#sdots.on{display:block}',
      '#sdots .bg{position:absolute;inset:0;background:rgba(11,30,61,.45)}',
      '#sdots .pn{position:absolute;left:0;top:0;bottom:0;width:min(620px,100vw);background:' + C.cream + ';display:flex;flex-direction:column;box-shadow:12px 0 40px rgba(0,0,0,.3);animation:sdin .25s ease}',
      '@keyframes sdin{from{transform:translateX(-30px);opacity:0}to{transform:none;opacity:1}}',
      '#sdots header{background:' + C.navy + ';color:#fff;padding:14px 16px 12px;border-bottom:3px solid ' + C.gold + '}',
      '#sdots header .t{font:700 20px "Crimson Pro",Georgia,serif;letter-spacing:.2px}',
      '#sdots header .s{font-size:12px;opacity:.8;margin-top:2px}',
      '#sdots header .x{position:absolute;right:12px;top:10px;background:none;border:0;color:#fff;font-size:26px;cursor:pointer;line-height:1}',
      '#sdots .cmd{display:flex;gap:8px;margin-top:10px}',
      '#sdots .cmd input{flex:1;border-radius:8px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;padding:7px 10px;font:inherit;font-size:13px}',
      '#sdots .cmd input::placeholder{color:rgba(255,255,255,.55)}',
      '#sdots nav{display:flex;gap:6px;overflow-x:auto;padding:10px 12px;background:#fff;border-bottom:1px solid #E7DFCB;scrollbar-width:thin}',
      '#sdots nav button{flex:none;border:1px solid #E1D6BC;background:#fff;border-radius:999px;padding:6px 11px;font:500 13px "DM Sans",sans-serif;color:' + C.ink + ';cursor:pointer;white-space:nowrap}',
      '#sdots nav button.on{background:' + C.navy + ';color:#fff;border-color:' + C.navy + '}',
      '#sdots .bd{flex:1;overflow-y:auto;padding:18px 18px 40px}',
      '#sdots h3{font:700 22px "Crimson Pro",Georgia,serif;color:' + C.navy + ';margin:0 0 4px}',
      '#sdots h4{font:700 15px "DM Sans",sans-serif;color:' + C.navy + ';margin:18px 0 6px;text-transform:uppercase;letter-spacing:.6px;font-size:12px}',
      '#sdots .lead{color:' + C.soft + ';font-size:13px;margin:0 0 14px}',
      '#sdots .box{background:#fff;border:1px solid #E7DFCB;border-radius:12px;padding:14px;margin:10px 0}',
      '#sdots .box.gold{border-left:4px solid ' + C.gold + '}',
      '#sdots .box.teal{border-left:4px solid ' + C.teal + '}',
      '#sdots ul{margin:6px 0;padding-left:20px}',
      '#sdots li{margin:4px 0}',
      '#sdots .btn{display:inline-block;border:0;border-radius:8px;padding:8px 14px;font:600 13px "DM Sans",sans-serif;cursor:pointer;background:' + C.navy + ';color:#fff;margin:4px 6px 4px 0}',
      '#sdots .btn.g{background:' + C.gold + ';color:' + C.navy + '}',
      '#sdots .btn.t{background:' + C.teal + '}',
      '#sdots .btn.o{background:#fff;color:' + C.navy + ';border:1px solid ' + C.navy + '}',
      '#sdots textarea{width:100%;box-sizing:border-box;min-height:84px;border:1px solid #D9CFB6;border-radius:8px;padding:9px;font:inherit;font-size:14px;background:#fffdf8;resize:vertical}',
      '#sdots .grid2{display:grid;grid-template-columns:1fr 1fr;gap:10px}',
      '@media(max-width:520px){#sdots .grid2{grid-template-columns:1fr}}',
      '#sdots table{width:100%;border-collapse:collapse;font-size:13.5px}',
      '#sdots td{border-bottom:1px solid #EEE6D2;padding:7px 6px;vertical-align:top}',
      '#sdots td:first-child{font-weight:700;color:' + C.navy + ';white-space:nowrap}',
      '#sdots .tag{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.5px;border-radius:999px;padding:2px 9px;background:#EFE6CF;color:' + C.navy + '}',
      /* flashcards */
      '#sdots .fc{perspective:1000px;height:220px;cursor:pointer;margin:12px 0}',
      '#sdots .fc .in{position:relative;width:100%;height:100%;transition:transform .5s;transform-style:preserve-3d}',
      '#sdots .fc.f .in{transform:rotateY(180deg)}',
      '#sdots .fc .fa,#sdots .fc .fb{position:absolute;inset:0;backface-visibility:hidden;border-radius:16px;display:flex;align-items:center;justify-content:center;text-align:center;padding:22px;box-sizing:border-box}',
      '#sdots .fc .fa{background:' + C.navy + ';color:#fff;font:600 19px "Crimson Pro",Georgia,serif}',
      '#sdots .fc .fb{background:#fff;border:2px solid ' + C.teal + ';transform:rotateY(180deg);font-size:15px}',
      '#sdots .leit{display:flex;gap:6px;margin:8px 0}',
      '#sdots .leit div{flex:1;text-align:center;background:#fff;border:1px solid #E7DFCB;border-radius:8px;padding:6px 2px;font-size:11px}',
      '#sdots .leit b{display:block;font-size:17px;color:' + C.navy + '}',
      /* sopa */
      '#sdots .ws{display:grid;gap:2px;user-select:none;touch-action:manipulation;margin:10px auto;max-width:100%}',
      '#sdots .ws span{aspect-ratio:1;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:4px;font:700 clamp(11px,2.6vw,16px) "DM Sans",monospace;color:' + C.navy + ';cursor:pointer}',
      '#sdots .ws span.sel{background:' + C.gold + '}',
      '#sdots .ws span.fd{background:' + C.teal + ';color:#fff}',
      '#sdots .wl{display:flex;flex-wrap:wrap;gap:6px}',
      '#sdots .wl span{font-size:12px;font-weight:700;border:1px solid #D9CFB6;border-radius:6px;padding:3px 8px;background:#fff}',
      '#sdots .wl span.fd{background:' + C.teal + ';color:#fff;border-color:' + C.teal + ';text-decoration:line-through}',
      /* crucigrama */
      '#sdots .cw{display:grid;gap:1px;margin:10px auto;max-width:100%}',
      '#sdots .cw div{aspect-ratio:1;position:relative}',
      '#sdots .cw div.c{background:#fff;outline:1px solid #B9AE93}',
      '#sdots .cw div.c.ok{background:#DDF3EA}',
      '#sdots .cw div.c.bad{background:#F8DDD6}',
      '#sdots .cw input{min-width:0;width:100%;height:100%;border:0;background:transparent;text-align:center;font:700 clamp(10px,2.4vw,15px) "DM Sans",sans-serif;text-transform:uppercase;color:' + C.navy + ';padding:0;box-sizing:border-box}',
      '#sdots .cw small{position:absolute;left:1px;top:0;font-size:8px;line-height:1;color:' + C.soft + ';pointer-events:none}',
      '#sdots .clues{font-size:13px}',
      '#sdots .clues p{margin:4px 0}',
      /* timeline */
      '#sdots .tl{position:relative;padding-left:26px;margin-top:10px}',
      '#sdots .tl:before{content:"";position:absolute;left:8px;top:4px;bottom:4px;width:3px;background:linear-gradient(' + C.gold + ',' + C.teal + ');border-radius:2px}',
      '#sdots .tl .it{position:relative;margin:0 0 14px}',
      '#sdots .tl .it:before{content:"";position:absolute;left:-24px;top:5px;width:13px;height:13px;border-radius:50%;background:#fff;border:3px solid ' + C.navy + '}',
      '#sdots .tl .y{font:700 17px "Crimson Pro",Georgia,serif;color:' + C.navy + '}',
      /* 5w1h */
      '#sdots .w6{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}',
      '@media(max-width:520px){#sdots .w6{grid-template-columns:repeat(2,1fr)}}',
      '#sdots .w6 div{background:#fff;border-radius:12px;border:2px solid #E7DFCB;padding:10px;cursor:pointer;min-height:92px}',
      '#sdots .w6 div b{display:block;font:700 18px "Crimson Pro",Georgia,serif;color:' + C.navy + '}',
      '#sdots .w6 div p{margin:4px 0 0;font-size:13px;display:none}',
      '#sdots .w6 div.on p{display:block}',
      '#sdots .w6 div.on{border-color:' + C.teal + '}',
      '#sdots svg text{font-family:"DM Sans",sans-serif}',
      '#sdots .rev{display:none}',
      '#sdots .rev.on{display:block}',
      '#sdots .prog{height:8px;background:#EEE6D2;border-radius:99px;overflow:hidden;margin:6px 0}',
      '#sdots .prog i{display:block;height:100%;background:' + C.teal + '}',
      '.sdots-filled{white-space:pre-line}'
    ].join('\n');
    document.head.appendChild(s);
  }

  /* ---------- vistas ---------- */
  var VIEWS = [
    ['ruta', '🧭 Ruta', ['/ruta', '/objetivos', '/5w1h_ruta']],
    ['glosario', '📒 Glosario', ['/glosario', '/sketchnotes']],
    ['flash', '🗂 Flashcards', ['/flashcards']],
    ['sopa', '🔤 Sopa de letras', ['/sopa_de_letras', '/sopa']],
    ['cruci', '✏️ Crucigrama', ['/crucigrama', '/crossword']],
    ['tl', '🕒 Timeline', ['/timeline']],
    ['w5', '❓ 5W1H', ['/5w1h']],
    ['flujo', '🔀 Fluxograma', ['/fluxograma', '/matflow', '/paso_a_paso', '/step-by-step']],
    ['mapa', '🧠 Mapa mental', ['/mapmaps', '/mathmaps', '/mapa']],
    ['error', '🔍 Detecta el error', ['/detectaerror']],
    ['recu', '🔁 Recuperación activa', ['/recuperacion', '/repaso']],
    ['caso', '🏫 Caso CENTEC', ['/caso']],
    ['audit', '🛡 Dot Auditor', ['/auditor', '/fuentes']],
    ['cierre', '✅ Cierre', ['/cierre', '/metacognicion']]
  ];

  function render() {
    $$('#sdots nav button').forEach(function (b) { b.classList.toggle('on', b.dataset.v === view); });
    var fn = R[view] || R.ruta; body.innerHTML = ''; fn(body); body.scrollTop = 0;
    store('last', view);
  }

  var R = {};

  R.ruta = function (el) {
    var k = KB;
    el.innerHTML = '<h3>' + esc(k.titulo) + '</h3><p class="lead"><span class="tag">' + esc(k.dot || 'Dot Tutor') + '</span> · Tu tutor personal recorre el tema contigo de lo sencillo a lo complejo.</p>' +
      '<h4>Objetivos de aprendizaje</h4><div class="box gold"><ul>' + (k.objetivos || []).map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ul></div>' +
      '<h4>Explicación intuitiva</h4><div class="box teal">' + esc(k.intuitiva) + '</div>' +
      '<h4>Niveles de dominio (Bloom)</h4><div class="box"><table>' + (k.bloom || []).map(function (b) { return '<tr><td>' + esc(b.n) + '</td><td>' + esc(b.i) + '</td></tr>'; }).join('') + '</table></div>' +
      (k.dominar ? '<h4>Qué debo…</h4><div class="grid2">' + [['memorizar', '🧩 Memorizar'], ['comprender', '💡 Comprender'], ['ejecutar', '🛠 Saber ejecutar'], ['decidir', '⚖️ Saber decidir']].map(function (p) {
        return '<div class="box"><b>' + p[1] + '</b><ul>' + (k.dominar[p[0]] || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
      }).join('') + '</div>' : '') +
      '<h4>Ruta sugerida</h4><div class="box">1. Lee el módulo del curso → 2. <a href="#" data-go="glosario">Glosario</a> → 3. <a href="#" data-go="mapa">Mapa mental</a> y <a href="#" data-go="flujo">fluxograma</a> → 4. <a href="#" data-go="flash">Flashcards</a>, <a href="#" data-go="sopa">sopa</a> y <a href="#" data-go="cruci">crucigrama</a> → 5. <a href="#" data-go="error">Detecta el error</a> y <a href="#" data-go="caso">caso</a> → 6. <a href="#" data-go="recu">Recuperación activa</a> → 7. <a href="#" data-go="cierre">Cierre</a>.</div>';
  };

  R.glosario = function (el) {
    el.innerHTML = '<h3>Glosario esencial</h3><p class="lead">Términos clave del curso. Explícalos con tus propias palabras antes de mirar la definición.</p><input id="sd-q" placeholder="Buscar término…" style="width:100%;box-sizing:border-box;padding:9px;border-radius:8px;border:1px solid #D9CFB6;font:inherit"><div id="sd-gl"></div>';
    function draw(q) {
      $('#sd-gl', el).innerHTML = KB.glosario.filter(function (g) { return !q || norm(g.t + ' ' + g.d).indexOf(norm(q)) > -1; }).map(function (g, i) {
        return '<div class="box" style="border-left:4px solid ' + PAL[i % PAL.length] + '"><b>' + esc(g.t) + '</b><div style="margin-top:4px">' + esc(g.d) + '</div></div>';
      }).join('');
    }
    draw(''); $('#sd-q', el).oninput = function () { draw(this.value); };
  };

  R.flash = function (el) {
    var cards = KB.flashcards || [], st = store('fc') || {};
    function box(i) { return st[i] || 1; }
    function next() { var min = 9, pick = []; cards.forEach(function (c, i) { var b = box(i); if (b < min) { min = b; pick = [i]; } else if (b === min) pick.push(i); }); return pick[Math.floor(Math.random() * pick.length)]; }
    function draw() {
      var i = next(), c = cards[i], counts = [0, 0, 0, 0, 0];
      cards.forEach(function (_, j) { counts[box(j) - 1]++; });
      var mast = counts[4];
      el.innerHTML = '<h3>Flashcards · repetición espaciada</h3><p class="lead">Sistema Leitner: lo que no sabes vuelve pronto; lo que dominas sube de caja. Toca la tarjeta para voltearla.</p>' +
        '<div class="leit">' + counts.map(function (n, b) { return '<div><b>' + n + '</b>Caja ' + (b + 1) + '</div>'; }).join('') + '</div>' +
        '<div class="prog"><i style="width:' + Math.round(mast / cards.length * 100) + '%"></i></div><small>' + mast + ' de ' + cards.length + ' dominadas</small>' +
        '<div class="fc" id="sd-fc"><div class="in"><div class="fa">' + esc(c.q) + '</div><div class="fb">' + esc(c.a) + '</div></div></div>' +
        '<button class="btn t" id="sd-y">✓ La sabía</button><button class="btn o" id="sd-n">✗ Aún no</button><button class="btn o" id="sd-r" style="float:right">Reiniciar</button>';
      $('#sd-fc', el).onclick = function () { this.classList.toggle('f'); };
      $('#sd-y', el).onclick = function () { st[i] = Math.min(5, box(i) + 1); store('fc', st); draw(); };
      $('#sd-n', el).onclick = function () { st[i] = 1; store('fc', st); draw(); };
      $('#sd-r', el).onclick = function () { st = {}; store('fc', st); draw(); };
    }
    draw();
  };

  R.sopa = function (el) {
    var words = shuffle(KB.glosario.map(function (g) { return g.w; }).filter(function (w) { return w.length <= 12; })).slice(0, 8);
    var N = Math.max(12, Math.max.apply(null, words.map(function (w) { return w.length; })) + 1);
    var grid, placed;
    for (var tries = 0; tries < 50; tries++) {
      grid = []; placed = [];
      for (var r = 0; r < N; r++) grid.push(new Array(N).fill(''));
      var dirs = [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [1, -1]], okAll = true;
      words.sort(function (a, b) { return b.length - a.length; }).forEach(function (w) {
        for (var t = 0; t < 300; t++) {
          var d = dirs[Math.floor(Math.random() * dirs.length)], r0 = Math.floor(Math.random() * N), c0 = Math.floor(Math.random() * N), cells = [], ok = true;
          for (var k = 0; k < w.length; k++) { var rr = r0 + d[0] * k, cc = c0 + d[1] * k; if (rr < 0 || cc < 0 || rr >= N || cc >= N || (grid[rr][cc] && grid[rr][cc] !== w[k])) { ok = false; break; } cells.push([rr, cc]); }
          if (ok) { cells.forEach(function (p, k) { grid[p[0]][p[1]] = w[k]; }); placed.push({ w: w, cells: cells }); return; }
        }
        okAll = false;
      });
      if (okAll) break;
    }
    var AB = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    grid.forEach(function (row) { row.forEach(function (v, j) { if (!v) row[j] = AB[Math.floor(Math.random() * AB.length)]; }); });
    var found = {};
    el.innerHTML = '<h3>Sopa de letras</h3><p class="lead">Toca la primera y la última letra de cada palabra. Al encontrarla verás su definición.</p>' +
      '<div class="ws" style="grid-template-columns:repeat(' + N + ',minmax(0,1fr))">' + grid.map(function (row, r) { return row.map(function (v, c) { return '<span data-r="' + r + '" data-c="' + c + '">' + v + '</span>'; }).join(''); }).join('') + '</div>' +
      '<div class="wl">' + placed.map(function (p) { return '<span data-w="' + p.w + '">' + p.w + '</span>'; }).join('') + '</div><div id="sd-def"></div><button class="btn o" id="sd-new">Nueva sopa</button>';
    var first = null;
    $$('.ws span', el).forEach(function (s) {
      s.onclick = function () {
        var r = +s.dataset.r, c = +s.dataset.c;
        if (!first) { first = [r, c]; s.classList.add('sel'); return; }
        var a = first; first = null; $$('.ws span.sel', el).forEach(function (x) { x.classList.remove('sel'); });
        placed.forEach(function (p) {
          var e = p.cells[p.cells.length - 1], b = p.cells[0];
          if (!found[p.w] && ((b[0] === a[0] && b[1] === a[1] && e[0] === r && e[1] === c) || (e[0] === a[0] && e[1] === a[1] && b[0] === r && b[1] === c))) {
            found[p.w] = 1;
            p.cells.forEach(function (q) { $('.ws span[data-r="' + q[0] + '"][data-c="' + q[1] + '"]', el).classList.add('fd'); });
            $('.wl span[data-w="' + p.w + '"]', el).classList.add('fd');
            var g = KB.glosario.filter(function (x) { return x.w === p.w; })[0];
            $('#sd-def', el).innerHTML = '<div class="box teal"><b>' + esc(g.t) + '</b>: ' + esc(g.d) + '</div>' + (Object.keys(found).length === placed.length ? '<div class="box gold">🎉 ¡Completaste la sopa! Ahora intenta el <a href="#" data-go="cruci">crucigrama</a>.</div>' : '');
            store('sopa', Object.keys(found).length === placed.length ? 1 : (store('sopa') || 0));
          }
        });
      };
    });
    $('#sd-new', el).onclick = function () { R.sopa(el); };
  };

  R.cruci = function (el) {
    var pool = shuffle(KB.glosario.filter(function (g) { return g.w.length <= 12; })).slice(0, 10).sort(function (a, b) { return b.w.length - a.w.length; });
    var cells = {}, words = [];
    function get(r, c) { return cells[r + ',' + c]; }
    function canPlace(w, r, c, dr, dc) {
      var inter = 0;
      if (get(r - dr, c - dc) || get(r + dr * w.length, c + dc * w.length)) return -1;
      for (var k = 0; k < w.length; k++) {
        var rr = r + dr * k, cc = c + dc * k, v = get(rr, cc);
        if (v) { if (v !== w[k]) return -1; inter++; }
        else if (get(rr + dc, cc + dr) || get(rr - dc, cc - dr)) return -1;
      }
      return inter;
    }
    function put(g, r, c, dr, dc) { for (var k = 0; k < g.w.length; k++) cells[(r + dr * k) + ',' + (c + dc * k)] = g.w[k]; words.push({ g: g, r: r, c: c, d: dr ? 'V' : 'H' }); }
    pool.forEach(function (g, idx) {
      if (!idx) { put(g, 0, 0, 0, 1); return; }
      var best = null;
      words.forEach(function (pw) {
        for (var i = 0; i < pw.g.w.length; i++) for (var j = 0; j < g.w.length; j++) {
          if (pw.g.w[i] !== g.w[j]) continue;
          var dr = pw.d === 'H' ? 1 : 0, dc = 1 - dr;
          var pr = pw.r + (pw.d === 'V' ? i : 0), pc = pw.c + (pw.d === 'H' ? i : 0);
          var r = pr - dr * j, c = pc - dc * j, s = canPlace(g.w, r, c, dr, dc);
          if (s > 0 && (!best || s > best.s)) best = { r: r, c: c, dr: dr, dc: dc, s: s };
        }
      });
      if (best) put(g, best.r, best.c, best.dr, best.dc);
    });
    var ks = Object.keys(cells).map(function (k) { return k.split(',').map(Number); });
    var r0 = Math.min.apply(null, ks.map(function (k) { return k[0]; })), c0 = Math.min.apply(null, ks.map(function (k) { return k[1]; }));
    var R1 = Math.max.apply(null, ks.map(function (k) { return k[0]; })) - r0 + 1, C1 = Math.max.apply(null, ks.map(function (k) { return k[1]; })) - c0 + 1;
    var starts = {}, n = 0;
    words.sort(function (a, b) { return (a.r - b.r) || (a.c - b.c); }).forEach(function (w) { var key = (w.r - r0) + ',' + (w.c - c0); if (!starts[key]) starts[key] = ++n; w.n = starts[key]; });
    var html = '';
    for (var r = 0; r < R1; r++) for (var c = 0; c < C1; c++) {
      var v = cells[(r + r0) + ',' + (c + c0)];
      html += v ? '<div class="c" data-k="' + r + ',' + c + '">' + (starts[r + ',' + c] ? '<small>' + starts[r + ',' + c] + '</small>' : '') + '<input maxlength="1" data-a="' + v + '"></div>' : '<div></div>';
    }
    function clues(d) { return words.filter(function (w) { return w.d === d; }).map(function (w) { return '<p><b>' + w.n + '.</b> ' + esc(w.g.d) + ' <span style="color:#999">(' + w.g.w.length + ')</span></p>'; }).join(''); }
    el.innerHTML = '<h3>Crucigrama</h3><p class="lead">Pistas de razonamiento y concepto, tomadas del glosario del curso. ' + words.length + ' palabras.</p>' +
      '<div class="cw" style="grid-template-columns:repeat(' + C1 + ',minmax(0,1fr));max-width:' + Math.min(560, C1 * 38) + 'px">' + html + '</div>' +
      '<button class="btn t" id="sd-chk">Comprobar</button><button class="btn o" id="sd-show">Revelar</button><button class="btn o" id="sd-new">Nuevo</button><div id="sd-res"></div>' +
      '<div class="grid2 clues"><div><h4>→ Horizontales</h4>' + clues('H') + '</div><div><h4>↓ Verticales</h4>' + clues('V') + '</div></div>';
    $$('.cw input', el).forEach(function (inp, i, all) { inp.oninput = function () { this.value = this.value.toUpperCase(); if (this.value && all[i + 1]) all[i + 1].focus(); }; });
    $('#sd-chk', el).onclick = function () {
      var ok = 0, tot = 0;
      $$('.cw .c', el).forEach(function (d) { var i = $('input', d); tot++; d.classList.remove('ok', 'bad'); if (!i.value) return; if (i.value === i.dataset.a) { ok++; d.classList.add('ok'); } else d.classList.add('bad'); });
      $('#sd-res', el).innerHTML = '<div class="box ' + (ok === tot ? 'gold' : 'teal') + '">' + ok + ' de ' + tot + ' letras correctas' + (ok === tot ? ' · 🎉 ¡Crucigrama resuelto!' : '') + '</div>';
      if (ok === tot) store('cruci', 1);
    };
    $('#sd-show', el).onclick = function () { $$('.cw input', el).forEach(function (i) { i.value = i.dataset.a; }); };
    $('#sd-new', el).onclick = function () { R.cruci(el); };
  };

  R.tl = function (el) {
    var t = KB.timeline || { items: [] };
    el.innerHTML = '<h3>' + esc(t.titulo || 'Línea de tiempo') + '</h3><p class="lead">Lee de arriba hacia abajo: cada hito explica por qué hoy trabajamos como trabajamos.</p>' +
      '<div class="tl">' + t.items.map(function (x) { return '<div class="it"><div class="y">' + esc(x.y) + '</div><div>' + esc(x.e) + '</div></div>'; }).join('') + '</div>' +
      '<div class="box gold"><b>Reto:</b> sin mirar, ¿qué hito cambió más tu práctica docente y por qué? Escríbelo en el <a href="#" data-go="cierre">cierre</a>.</div>';
  };

  R.w5 = function (el) {
    var w = KB.w5h1 || {}, L = [['quien', '¿Quién?'], ['que', '¿Qué?'], ['cuando', '¿Cuándo?'], ['donde', '¿Dónde?'], ['porque', '¿Por qué?'], ['como', '¿Cómo?']];
    el.innerHTML = '<h3>Análisis 5W1H</h3><p class="lead">Antes de tocar cada pregunta, respóndela mentalmente. Luego compara.</p><div class="w6">' +
      L.map(function (p, i) { return '<div style="border-top:5px solid ' + PAL[i] + '"><b>' + p[1] + '</b><p>' + esc(w[p[0]]) + '</p><small style="color:#999">tocar para ver</small></div>'; }).join('') + '</div>';
    $$('.w6 div', el).forEach(function (d) { d.onclick = function () { d.classList.toggle('on'); var s = $('small', d); if (s) s.remove(); }; });
  };

  R.flujo = function (el) {
    var f = KB.flujo || { pasos: [] }, W = 540, bw = 380, x = (W - bw) / 2, y = 20, parts = [], step = 0;
    parts.push('<rect x="' + (W / 2 - 60) + '" y="' + y + '" width="120" height="34" rx="17" fill="' + C.navy + '"/><text x="' + W / 2 + '" y="' + (y + 22) + '" fill="#fff" text-anchor="middle" font-size="14" font-weight="700">INICIO</text>');
    y += 34;
    f.pasos.forEach(function (p, i) {
      var lines = wrap(p, 46), h = 22 + lines.length * 18;
      parts.push('<line x1="' + W / 2 + '" y1="' + y + '" x2="' + W / 2 + '" y2="' + (y + 26) + '" stroke="' + C.soft + '" stroke-width="2" marker-end="url(#sdar)"/>');
      y += 28;
      parts.push('<g class="st" data-i="' + i + '"><rect x="' + x + '" y="' + y + '" width="' + bw + '" height="' + h + '" rx="10" fill="#fff" stroke="' + PAL[i % PAL.length] + '" stroke-width="2.5"/>' +
        '<circle cx="' + (x + 2) + '" cy="' + (y + h / 2) + '" r="14" fill="' + PAL[i % PAL.length] + '"/><text x="' + (x + 2) + '" y="' + (y + h / 2 + 5) + '" fill="#fff" font-size="13" font-weight="700" text-anchor="middle">' + (i + 1) + '</text>' +
        lines.map(function (l, j) { return '<text x="' + (W / 2 + 8) + '" y="' + (y + 25 + j * 18) + '" font-size="14" text-anchor="middle" fill="' + C.ink + '">' + esc(l) + '</text>'; }).join('') + '</g>');
      y += h;
    });
    parts.push('<line x1="' + W / 2 + '" y1="' + y + '" x2="' + W / 2 + '" y2="' + (y + 26) + '" stroke="' + C.soft + '" stroke-width="2" marker-end="url(#sdar)"/>');
    y += 28;
    parts.push('<rect x="' + (W / 2 - 60) + '" y="' + y + '" width="120" height="34" rx="17" fill="' + C.teal + '"/><text x="' + W / 2 + '" y="' + (y + 22) + '" fill="#fff" text-anchor="middle" font-size="14" font-weight="700">LOGRO</text>');
    y += 50;
    el.innerHTML = '<h3>' + esc(f.titulo || 'Fluxograma') + '</h3><p class="lead">Cómo leerlo: empieza en INICIO, sigue las flechas; cada caja numerada es una acción que debes poder ejecutar en tu aula. Usa «Modo historia» para recorrerlo paso a paso.</p>' +
      '<svg viewBox="0 0 ' + W + ' ' + y + '" width="100%" role="img" aria-label="Diagrama de flujo"><defs><marker id="sdar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="' + C.soft + '"/></marker></defs>' + parts.join('') + '</svg>' +
      '<button class="btn g" id="sd-hist">▶ Modo historia</button><div id="sd-step"></div>';
    $('#sd-hist', el).onclick = function () {
      var gs = $$('g.st', el); gs.forEach(function (g) { g.style.opacity = .25; });
      if (step >= gs.length) { step = 0; gs.forEach(function (g) { g.style.opacity = 1; }); $('#sd-step', el).innerHTML = '<div class="box gold">Recorrido completo. Ahora explícalo en voz alta sin mirar.</div>'; this.textContent = '▶ Modo historia'; return; }
      gs[step].style.opacity = 1; $('#sd-step', el).innerHTML = '<div class="box teal"><b>Paso ' + (step + 1) + ':</b> ' + esc(f.pasos[step]) + '</div>'; step++;
      this.textContent = step < gs.length ? '▶ Siguiente paso' : '✓ Terminar';
    };
  };

  R.mapa = function (el) {
    var m = KB.mapa || { ramas: [] }, W = 560, rows = [], y = 16;
    m.ramas.forEach(function (rm) { var h = Math.max(1, rm.h.length) * 38; rows.push({ rm: rm, y: y, h: h }); y += h + 14; });
    var H = y + 4, cx = 70, cy = H / 2, s = [];
    var cl = wrap(m.centro, 12);
    rows.forEach(function (row, i) {
      var col = PAL[i % PAL.length], by = row.y + row.h / 2, bx = 200;
      s.push('<path d="M' + (cx + 55) + ' ' + cy + ' C ' + (cx + 100) + ' ' + cy + ',' + (bx - 70) + ' ' + by + ',' + (bx - 60) + ' ' + by + '" stroke="' + col + '" stroke-width="3" fill="none"/>');
      var bl = wrap(row.rm.n, 15);
      s.push('<rect x="' + (bx - 60) + '" y="' + (by - 12 - (bl.length - 1) * 8) + '" width="132" height="' + (24 + (bl.length - 1) * 16) + '" rx="12" fill="' + col + '"/>');
      bl.forEach(function (l, j) { s.push('<text x="' + (bx + 6) + '" y="' + (by + 5 - (bl.length - 1) * 8 + j * 16) + '" text-anchor="middle" fill="#fff" font-size="12.5" font-weight="700">' + esc(l) + '</text>'); });
      row.rm.h.forEach(function (hj, k) {
        var hy = row.y + 19 + k * 38;
        s.push('<path d="M' + (bx + 72) + ' ' + by + ' C ' + (bx + 100) + ' ' + by + ',' + (bx + 105) + ' ' + hy + ',' + (bx + 128) + ' ' + hy + '" stroke="' + col + '" stroke-width="1.8" fill="none"/>');
        var hl = wrap(hj, 30);
        hl.slice(0, 2).forEach(function (l, j) { s.push('<text x="' + (bx + 134) + '" y="' + (hy + 4 - (Math.min(hl.length, 2) - 1) * 7 + j * 14) + '" font-size="12" fill="' + C.ink + '">' + esc(l) + '</text>'); });
      });
    });
    s.push('<circle cx="' + cx + '" cy="' + cy + '" r="58" fill="' + C.navy + '" stroke="' + C.gold + '" stroke-width="4"/>');
    cl.forEach(function (l, j) { s.push('<text x="' + cx + '" y="' + (cy + 5 - (cl.length - 1) * 8 + j * 16) + '" text-anchor="middle" fill="#fff" font-size="13" font-weight="700">' + esc(l) + '</text>'); });
    el.innerHTML = '<h3>Mapa mental</h3><p class="lead">El círculo es la idea central; cada color es una rama del tema y sus hojas son los conceptos que la sostienen. Úsalo para repasar: tapa una rama y reconstrúyela de memoria.</p>' +
      '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="Mapa mental">' + s.join('') + '</svg>';
  };

  R.error = function (el) {
    var E = KB.errores || [];
    el.innerHTML = '<h3>Detecta el error</h3><p class="lead">Lee cada situación, escribe qué está mal y luego compara con el análisis del Dot Auditor.</p>' +
      E.map(function (e, i) { return '<div class="box"><span class="tag">Situación ' + (i + 1) + '</span><p>' + esc(e.caso) + '</p><textarea placeholder="¿Cuál es el error y cómo lo corregirías?"></textarea><button class="btn g" data-i="' + i + '">Ver análisis</button><div class="rev"><div class="box" style="border-left:4px solid ' + C.red + '"><b>Error:</b> ' + esc(e.error) + '</div><div class="box teal"><b>Corrección:</b> ' + esc(e.correccion) + '</div></div></div>'; }).join('');
    $$('.btn[data-i]', el).forEach(function (b) { b.onclick = function () { b.nextElementSibling.classList.add('on'); b.remove(); }; });
  };

  R.recu = function (el) {
    var Q = KB.recuperacion || [], st = store('recu') || {};
    el.innerHTML = '<h3>Recuperación activa</h3><p class="lead">Responde sin consultar el curso. Recordar con esfuerzo es lo que consolida la memoria a largo plazo. Luego compara y autoevalúate con honestidad.</p>' +
      Q.map(function (q, i) { return '<div class="box"><b>' + (i + 1) + '. ' + esc(q.p) + '</b><textarea data-i="' + i + '" placeholder="Tu respuesta…">' + esc((st[i] || {}).txt || '') + '</textarea><button class="btn" data-s="' + i + '">Comparar con el modelo</button><div class="rev' + ((st[i] || {}).ev ? ' on' : '') + '"><div class="box teal">' + esc(q.modelo) + '</div>¿Cómo te fue? <button class="btn t" data-e="' + i + '" data-v="3">Lo tenía</button><button class="btn g" data-e="' + i + '" data-v="2">Parcial</button><button class="btn o" data-e="' + i + '" data-v="1">Repasar</button> <span data-l="' + i + '">' + ({ 3: '✓ dominado', 2: '◐ parcial', 1: '↺ repasar' }[(st[i] || {}).ev] || '') + '</span></div></div>'; }).join('');
    $$('textarea', el).forEach(function (t) { t.oninput = function () { var i = t.dataset.i; st[i] = st[i] || {}; st[i].txt = t.value; store('recu', st); }; });
    $$('[data-s]', el).forEach(function (b) { b.onclick = function () { b.nextElementSibling.classList.add('on'); }; });
    $$('[data-e]', el).forEach(function (b) { b.onclick = function () { var i = b.dataset.e; st[i] = st[i] || {}; st[i].ev = +b.dataset.v; store('recu', st); $('[data-l="' + i + '"]', el).textContent = { 3: '✓ dominado', 2: '◐ parcial', 1: '↺ repasar' }[b.dataset.v]; }; });
  };

  R.caso = function (el) {
    var c = KB.caso || {};
    el.innerHTML = '<h3>' + esc(c.titulo || 'Caso CENTEC') + '</h3><p class="lead">Aplicación en un contexto real de colegio en Cali. Decide qué conocimiento usar y justifica.</p><div class="box gold">' + esc(c.contexto) + '</div>' +
      (c.preguntas || []).map(function (p, i) { return '<div class="box"><b>' + (i + 1) + '. ' + esc(p) + '</b><textarea placeholder="Tu análisis…"></textarea></div>'; }).join('') +
      '<div class="box teal">Usa la rúbrica de <a href="#" data-go="ruta">niveles Bloom</a> para valorar tu respuesta: ¿solo recuerdas (N1) o ya evalúas y creas (N5–N6)?</div>';
  };

  R.audit = function (el) {
    el.innerHTML = '<h3>🛡 Dot Auditor</h3><p class="lead">El contenido de este tutor se contrastó con las fuentes normativas y académicas siguientes. Verifica, cita y profundiza.</p>' +
      '<div class="box gold"><ol>' + (KB.fuentes || []).map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ol></div>' +
      '<div class="box teal"><b>Criterios de rigor aplicados</b><ul><li>Hechos verificables separados de ejemplos ilustrativos (los nombres de los casos son ficticios).</li><li>Normativa colombiana citada con número y año.</li><li>Ningún dato numérico sin respaldo.</li><li>Alineación con Estándares Básicos de Competencias, DBA y lineamientos del MEN cuando aplica.</li></ul></div>' +
      '<div class="box"><b>¿Encontraste un error?</b> Repórtalo a coordinación académica: el Dot Auditor mejora con cada revisión docente.</div>';
  };

  R.cierre = function (el) {
    var Q = ['¿Qué aprendí? (tres ideas esenciales)', '¿Cómo sé que lo comprendí? (evidencia concreta)', '¿Cómo lo aplicaré en mi aula esta semana?', '¿Qué errores debo evitar?', '¿Qué necesito practicar para dominarlo?'];
    var st = store('cierre') || {}, fc = store('fc') || {}, nfc = (KB.flashcards || []).length, dom = Object.keys(fc).filter(function (k) { return fc[k] >= 5; }).length;
    var recu = store('recu') || {}, rdone = Object.keys(recu).filter(function (k) { return recu[k].ev === 3; }).length;
    var items = [['Flashcards dominadas', dom + '/' + nfc, nfc ? dom / nfc : 0], ['Sopa de letras', store('sopa') ? 'completa' : 'pendiente', store('sopa') ? 1 : 0], ['Crucigrama', store('cruci') ? 'resuelto' : 'pendiente', store('cruci') ? 1 : 0], ['Recuperación activa', rdone + '/' + (KB.recuperacion || []).length, (KB.recuperacion || []).length ? rdone / KB.recuperacion.length : 0]];
    el.innerHTML = '<h3>Cierre metacognitivo</h3><p class="lead">Leer no es aprender. Responde estas cinco preguntas; si alguna queda vacía, vuelve a la herramienta que la completa.</p>' +
      '<div class="box"><table>' + items.map(function (it) { return '<tr><td>' + it[0] + '</td><td><div class="prog"><i style="width:' + Math.round(it[2] * 100) + '%"></i></div>' + it[1] + '</td></tr>'; }).join('') + '</table></div>' +
      Q.map(function (q, i) { return '<div class="box"><b>' + q + '</b><textarea data-i="' + i + '">' + esc(st[i] || '') + '</textarea></div>'; }).join('') +
      '<button class="btn g" id="sd-dl">⬇ Descargar mis notas</button><div class="box teal" style="margin-top:14px">🌱 <b>Tu autonomía es el objetivo.</b> Cada docente CENTEC que domina lo que enseña forma niños y jóvenes lúcidos, fuertes, cultos y sanos. Vuelve en 2, 7 y 21 días a las flashcards: la repetición espaciada hace el resto.</div>';
    $$('textarea', el).forEach(function (t) { t.oninput = function () { st[t.dataset.i] = t.value; store('cierre', st); }; });
    $('#sd-dl', el).onclick = function () {
      var txt = 'SABI CENTEC MAESTROS · ' + KB.titulo + '\n' + new Date().toLocaleString('es-CO') + '\n\n' + Q.map(function (q, i) { return q + '\n' + (st[i] || '—') + '\n'; }).join('\n') + '\nProgreso: ' + items.map(function (it) { return it[0] + ': ' + it[1]; }).join(' · ');
      var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([txt], { type: 'text/plain;charset=utf-8' })); a.download = 'notas_' + page + '.txt'; a.click();
    };
  };

  /* ---------- interfaz ---------- */
  function build() {
    css();
    var b = document.createElement('button');
    b.id = 'sdots-btn'; b.type = 'button'; b.setAttribute('aria-label', 'Abrir tutor SABI Dots');
    b.innerHTML = '<span class="dots">' + '<i></i>'.repeat(9) + '</span>Tutor Dots';
    document.body.appendChild(b);
    root = document.createElement('div'); root.id = 'sdots'; root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', 'Tutor SABI Dots');
    root.innerHTML = '<div class="bg"></div><div class="pn"><header><button class="x" aria-label="Cerrar">×</button><div class="t">SABI Dots · Tutor personal</div><div class="s">' + esc(KB.curso + ' · ' + KB.titulo) + '</div>' +
      '<form class="cmd"><input placeholder="Escribe un comando: /sopa_de_letras, /crucigrama, /flashcards, /5w1h…" aria-label="Comando"></form></header>' +
      '<nav>' + VIEWS.map(function (v) { return '<button type="button" data-v="' + v[0] + '">' + v[1] + '</button>'; }).join('') + '</nav><div class="bd"></div></div>';
    document.body.appendChild(root);
    body = $('.bd', root);
    function open() { root.classList.add('on'); render(); }
    function close() { root.classList.remove('on'); }
    b.onclick = open;
    $('.bg', root).onclick = close; $('.x', root).onclick = close;
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    $$('nav button', root).forEach(function (x) { x.onclick = function () { view = x.dataset.v; render(); }; });
    root.addEventListener('click', function (e) { var a = e.target.closest('[data-go]'); if (a) { e.preventDefault(); view = a.dataset.go; render(); } });
    $('.cmd', root).onsubmit = function (e) {
      e.preventDefault(); var q = this.firstChild.value.trim().toLowerCase(); this.firstChild.value = '';
      var hit = VIEWS.filter(function (v) { return v[2].indexOf(q) > -1 || v[2].indexOf('/' + q.replace(/^\//, '')) > -1; })[0];
      if (hit) { view = hit[0]; render(); } else { body.insertAdjacentHTML('afterbegin', '<div class="box" style="border-left:4px solid ' + C.red + '">Comando no reconocido. Disponibles: ' + VIEWS.map(function (v) { return v[2][0]; }).join(' ') + '</div>'); }
    };
    view = store('last') || 'ruta';
    window.SABIDots = { open: function (v) { if (v) view = v; open(); } };
  }

  /* Rellena tarjetas que solo tenían texto provisional, sin tocar el diseño */
  function fillCards() {
    if (!KB.cards) return;
    var map = {}; Object.keys(KB.cards).forEach(function (k) { map[norm(k)] = KB.cards[k]; });
    $$('.card').forEach(function (card) {
      var t = $('.card-title', card), bd = $('.card-bd', card);
      if (!t || !bd || !/^\s*Contenido (pedag[oó]gico )?profundo sobre/i.test(bd.textContent)) return;
      var txt = map[norm(t.textContent)];
      if (txt) { bd.textContent = txt; bd.classList.add('sdots-filled'); }
    });
  }

  function start() {
    var s = document.createElement('script');
    s.src = base + 'kb/' + page + '.js';
    s.onload = function () { KB = window.SABI_KB; if (!KB) return; fillCards(); build(); };
    document.head.appendChild(s);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
