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
    ['hoy', '🏁 Hoy', ['/hoy', '/inicio', '/sesion'], 1],
    ['audio', '🎧 Audio-lección', ['/audio', '/podcast', '/escuchar'], 'audio'],
    ['quiz', '🎯 Reto diagnóstico', ['/diagnostico', '/quiz', '/test'], 'quiz'],
    ['frases', '🗣 Escucha y repite', ['/frases', '/pronunciacion', '/club'], 'frases'],
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
    ['ordena', '🔀 Ordena el proceso', ['/ordena', '/orden']],
    ['escape', '🔐 Escape room', ['/escape', '/detective']],
    ['retos', '📅 Reto 7 días', ['/reto', '/retos', '/stations'], 'retos'],
    ['kit', '🖨 Kit para mi aula', ['/worksheet', '/minibook', '/kit', '/imprimir']],
    ['cert', '🎓 Certificado', ['/certificado', '/diploma']],
    ['logros', '🏅 Logros', ['/logros', '/insignias', '/progreso']],
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
      '<h4>Ruta sugerida</h4><div class="box">1. Lee el módulo del curso → 2. <a href="#" data-go="glosario">Glosario</a> → 3. <a href="#" data-go="mapa">Mapa mental</a> y <a href="#" data-go="flujo">fluxograma</a> → 4. <a href="#" data-go="flash">Flashcards</a>, <a href="#" data-go="sopa">sopa</a> y <a href="#" data-go="cruci">crucigrama</a> → 5. <a href="#" data-go="error">Detecta el error</a> y <a href="#" data-go="caso">caso</a> → 6. <a href="#" data-go="recu">Recuperación activa</a> → 7. <a href="#" data-go="cierre">Cierre</a>.</div>' +
      '<div class="box">🧰 Para llevarlo al aula con tus estudiantes: <a href="sabi_taller.html">SABI Taller de Aula</a> (experimentos, fichas de matemáticas, comprensión lectora, ayudas didácticas y comandos IA).</div>';
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
      $('#sd-y', el).onclick = function () { st[i] = Math.min(5, box(i) + 1); store('fc', st); ganar(2); draw(); };
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
      if (ok === tot) { if (!store('cruci')) ganar(15); store('cruci', 1); }
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

  /* =====================================================================
     SABI DOTS v2 · Experiencia que engancha y hace aprender de verdad
     Voz narradora, audio-lección, reto diagnóstico antes/después,
     escape room, ordenar el proceso, reto de 7 días en el aula,
     escucha y repite (idiomas), kit imprimible y logros con racha.
     ===================================================================== */

  /* ---------- progreso global (todos los cursos) ---------- */
  function gstore(v) { var key = 'sabidots:global'; try { if (v === undefined) { return JSON.parse(localStorage.getItem(key) || 'null') || { xp: 0, dias: [], ins: {}, cursos: {} }; } localStorage.setItem(key, JSON.stringify(v)); } catch (e) { return { xp: 0, dias: [], ins: {}, cursos: {} }; } }
  function hoy() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function racha(g) {
    var set = {}; (g.dias || []).forEach(function (d) { set[d] = 1; });
    var n = 0, d = new Date(); if (!set[hoy()]) d.setDate(d.getDate() - 1);
    for (;;) { var k = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); if (!set[k]) break; n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  var INS = {
    primer: ['🌱', 'Primer paso', 'Ganaste tus primeros puntos de aprendizaje.'],
    audio: ['🎧', 'Oído atento', 'Escuchaste una audio-lección completa.'],
    pre: ['🧭', 'Me conozco', 'Hiciste el reto diagnóstico inicial.'],
    crece: ['📈', 'Crecimiento visible', 'Mejoraste tu puntaje del reto diagnóstico.'],
    escape: ['🔐', 'Escapista', 'Abriste los cuatro candados del escape room.'],
    orden: ['🔀', 'Procedimiento claro', 'Ordenaste el proceso sin errores.'],
    reto7: ['🏆', 'Transformé mi aula', 'Completaste el reto de 7 días.'],
    voz: ['🗣', 'Me atrevo a hablar', 'Lograste 80 % o más de pronunciación en una frase.'],
    racha3: ['🔥', 'Constancia', 'Tres días seguidos aprendiendo.'],
    racha7: ['⭐', 'Hábito SABI', 'Siete días seguidos aprendiendo.'],
    xp500: ['💎', 'Maestro en ascenso', 'Sumaste 500 puntos de aprendizaje.']
  };
  function toast(msg) {
    var t = document.createElement('div'); t.className = 'sd-toast'; t.innerHTML = msg; document.body.appendChild(t);
    setTimeout(function () { t.classList.add('on'); }, 20); setTimeout(function () { t.classList.remove('on'); setTimeout(function () { t.remove(); }, 400); }, 2600);
  }
  function ganar(xp, ins) {
    var g = gstore(); g.xp = (g.xp || 0) + (xp || 0);
    if ((g.dias || []).indexOf(hoy()) < 0) { g.dias = (g.dias || []).concat(hoy()).slice(-400); }
    g.cursos = g.cursos || {}; g.cursos[page] = { t: KB ? KB.titulo : page, c: KB ? KB.curso : '', xp: ((g.cursos[page] || {}).xp || 0) + (xp || 0), u: hoy() };
    var nuevas = [];
    function dar(k) { if (k && INS[k] && !g.ins[k]) { g.ins[k] = hoy(); nuevas.push(k); } }
    g.ins = g.ins || {}; dar('primer'); dar(ins);
    var r = racha(g); if (r >= 3) dar('racha3'); if (r >= 7) dar('racha7'); if (g.xp >= 500) dar('xp500');
    gstore(g);
    if (xp) toast('+' + xp + ' puntos de aprendizaje');
    nuevas.forEach(function (k, i) { setTimeout(function () { toast(INS[k][0] + ' <b>Insignia:</b> ' + INS[k][1]); }, 900 * (i + 1)); });
    var chip = $('#sdots-btn .rc'); if (chip) chip.textContent = r ? '🔥' + r : '';
  }

  /* ---------- voz ---------- */
  var VOZ = (function () {
    var ok = 'speechSynthesis' in window, voces = [];
    function cargar() { try { voces = window.speechSynthesis.getVoices() || []; } catch (e) { voces = []; } }
    if (ok) { cargar(); try { window.speechSynthesis.onvoiceschanged = cargar; } catch (e) { } }
    function cfg() { var g = gstore(); return g.voz || { rate: 0.95, pitch: 1.0 }; }
    function elegir(lang) {
      if (!voces.length) cargar();
      var L = lang.toLowerCase(), base = L.split('-')[0];
      var cand = voces.filter(function (v) { return (v.lang || '').toLowerCase().replace('_', '-') === L; });
      if (!cand.length && base === 'es') ['es-co', 'es-us', 'es-419', 'es-mx'].some(function (x) { cand = voces.filter(function (v) { return (v.lang || '').toLowerCase().replace('_', '-') === x; }); return cand.length; });
      if (!cand.length) cand = voces.filter(function (v) { return (v.lang || '').toLowerCase().indexOf(base) === 0; });
      cand.sort(function (a, b) { function s(v) { return (/google|natural|neural|online/i.test(v.name) ? 2 : 0) + (v.localService ? 0 : 1); } return s(b) - s(a); });
      return cand[0] || null;
    }
    function decir(texto, lang, fin, rate) {
      if (!ok) { if (fin) fin(); return null; }
      var c = cfg(), u = new SpeechSynthesisUtterance(String(texto).replace(/[☀-➿\uD83C-􏰀-\uDFFF]/g, ''));
      u.lang = lang || 'es-CO'; var v = elegir(u.lang); if (v) u.voice = v;
      u.rate = rate || c.rate; u.pitch = c.pitch; u.volume = 1;
      var hecho = false; function end() { if (hecho) return; hecho = true; if (fin) fin(); }
      u.onend = end; u.onerror = end;
      window.speechSynthesis.speak(u); return u;
    }
    function parar() { if (ok) try { window.speechSynthesis.cancel(); } catch (e) { } }
    return { ok: ok, decir: decir, parar: parar, cfg: cfg };
  })();

  /* Lector de la página: lee el curso desde donde estás, resaltando cada párrafo */
  var LECTOR = { on: false, i: 0, list: [] };
  function bloquesLegibles() {
    var sel = 'h1,h2,h3,.mtitle,.intro,.card-title,.card-bd,p,li,.qtx';
    return $$(sel).filter(function (e) {
      if (e.closest('#sdots,#sdots-btn,#sd-lector,nav,footer,script,style,.sd-toast')) return false;
      if (e.offsetParent === null) return false;
      var t = (e.innerText || '').trim(); if (t.length < 18) return false;
      var p = e.parentElement && e.parentElement.closest(sel); return !p;
    });
  }
  function lectorPaso() {
    $$('.sd-leyendo').forEach(function (x) { x.classList.remove('sd-leyendo'); });
    if (!LECTOR.on || LECTOR.i >= LECTOR.list.length) { lectorStop(); return; }
    var e = LECTOR.list[LECTOR.i]; e.classList.add('sd-leyendo');
    try { e.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (x) { }
    VOZ.decir(e.innerText.trim(), 'es-CO', function () { if (!LECTOR.on) return; LECTOR.i++; setTimeout(lectorPaso, 250); });
  }
  function lectorStart() {
    if (!VOZ.ok) { toast('Tu navegador no tiene voz. Prueba con Chrome o Edge.'); return; }
    LECTOR.list = bloquesLegibles(); var vh = window.innerHeight;
    LECTOR.i = 0; for (var k = 0; k < LECTOR.list.length; k++) { var r = LECTOR.list[k].getBoundingClientRect(); if (r.bottom > 70 && r.top < vh) { LECTOR.i = k; break; } }
    LECTOR.on = true; VOZ.parar(); var b = $('#sd-lector'); if (b) { b.classList.add('on'); b.innerHTML = '⏸ Detener lectura'; }
    lectorPaso();
  }
  function lectorStop() {
    LECTOR.on = false; VOZ.parar(); $$('.sd-leyendo').forEach(function (x) { x.classList.remove('sd-leyendo'); });
    var b = $('#sd-lector'); if (b) { b.classList.remove('on'); b.innerHTML = '🔊 Escuchar el curso'; }
  }

  function css2() {
    var s = document.createElement('style');
    s.textContent = [
      '#sd-stack{position:fixed;left:18px;bottom:76px;z-index:9990;display:flex;flex-direction:column;gap:8px;align-items:flex-start}',
      '#sd-stack button,#sd-stack a{display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:999px;border:1.5px solid ' + C.teal + ';background:#fff;color:' + C.navy + ';font:600 13px "DM Sans",system-ui,sans-serif;cursor:pointer;box-shadow:0 6px 18px rgba(11,30,61,.18);text-decoration:none}',
      '#sd-stack button.on{background:' + C.teal + ';color:#fff}',
      '#sdots-btn .rc{font-size:12px;color:' + C.gold + '}',
      '.sd-leyendo{outline:3px solid ' + C.gold + ' !important;outline-offset:4px;background:rgba(212,168,67,.12) !important;border-radius:6px}',
      '.sd-toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,30px);opacity:0;z-index:10000;background:' + C.navy + ';color:#fff;border:2px solid ' + C.gold + ';border-radius:999px;padding:10px 18px;font:600 14px "DM Sans",system-ui,sans-serif;transition:all .35s;box-shadow:0 10px 30px rgba(0,0,0,.3);max-width:90vw;text-align:center}',
      '.sd-toast.on{transform:translate(-50%,0);opacity:1}',
      '#sdots .hero{background:linear-gradient(135deg,' + C.navy + ',#163463);color:#fff;border-radius:16px;padding:18px;margin-bottom:12px}',
      '#sdots .hero h3{color:#fff}',
      '#sdots .kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}',
      '#sdots .kpis div{background:rgba(255,255,255,.1);border-radius:12px;padding:10px;text-align:center;font-size:12px}',
      '#sdots .kpis b{display:block;font:700 24px "Crimson Pro",Georgia,serif;color:' + C.gold + '}',
      '#sdots .paso{display:flex;gap:12px;align-items:center;background:#fff;border:1px solid #E7DFCB;border-radius:12px;padding:12px;margin:8px 0;cursor:pointer;transition:transform .15s}',
      '#sdots .paso:hover{transform:translateX(3px);border-color:' + C.teal + '}',
      '#sdots .paso .n{flex:none;width:34px;height:34px;border-radius:50%;background:' + C.gold + ';color:' + C.navy + ';display:flex;align-items:center;justify-content:center;font-weight:700}',
      '#sdots .paso.ok .n{background:' + C.teal + ';color:#fff}',
      '#sdots .paso small{display:block;color:' + C.soft + '}',
      '#sdots .opt2{display:block;width:100%;text-align:left;border:1.5px solid #E1D6BC;background:#fff;border-radius:10px;padding:10px 12px;margin:6px 0;font:inherit;font-size:14px;cursor:pointer;color:' + C.ink + '}',
      '#sdots .opt2:hover{border-color:' + C.navy + '}',
      '#sdots .opt2.si{border-color:' + C.teal + ';background:#E3F6EE}',
      '#sdots .opt2.no{border-color:' + C.red + ';background:#FBE9E4}',
      '#sdots .opt2:disabled{cursor:default}',
      '#sdots .ap p{margin:0 0 10px;padding:8px 10px;border-radius:8px;transition:background .3s}',
      '#sdots .ap p.on{background:#FFF3D6;box-shadow:inset 3px 0 0 ' + C.gold + '}',
      '#sdots .lock{display:flex;gap:10px;align-items:center;margin:6px 0}',
      '#sdots .lock .d{width:44px;height:52px;border-radius:10px;background:' + C.navy + ';color:' + C.gold + ';display:flex;align-items:center;justify-content:center;font:700 26px "Crimson Pro",serif}',
      '#sdots .chip{display:inline-block;border:1.5px solid #E1D6BC;background:#fff;border-radius:10px;padding:8px 10px;margin:4px;cursor:pointer;font-size:13.5px;text-align:left}',
      '#sdots .chip.ok{background:' + C.teal + ';color:#fff;border-color:' + C.teal + ';cursor:default}',
      '#sdots .chip.bad{animation:sdsh .35s}',
      '@keyframes sdsh{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}',
      '#sdots .ins{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px}',
      '#sdots .ins div{background:#fff;border:1px solid #E7DFCB;border-radius:12px;padding:10px;text-align:center;font-size:12px}',
      '#sdots .ins div.off{opacity:.38;filter:grayscale(1)}',
      '#sdots .ins b{display:block;font-size:26px}',
      '#sdots .fr{display:flex;gap:8px;align-items:flex-start;background:#fff;border:1px solid #E7DFCB;border-radius:12px;padding:10px;margin:6px 0}',
      '#sdots .fr .tx{flex:1}',
      '#sdots .fr .tx b{display:block;font-size:15.5px;color:' + C.navy + '}',
      '#sdots .fr .tx small{color:' + C.soft + '}',
      '#sdots .ib{flex:none;width:38px;height:38px;border-radius:50%;border:0;background:' + C.navy + ';color:#fff;cursor:pointer;font-size:16px}',
      '#sdots .ib.mic{background:' + C.teal + '}',
      '#sdots .ib.rec{background:' + C.red + ';animation:sdpu 1s infinite}',
      '@keyframes sdpu{50%{box-shadow:0 0 0 8px rgba(194,73,46,.2)}}',
      '#sdots .sc{font-weight:700;font-size:13px}',
      '#sdots .dia{border-left:5px solid #E1D6BC}',
      '#sdots .dia.ok{border-left-color:' + C.teal + '}',
      '#sdots .dia.lk{opacity:.55}',
      '#sdots select{font:inherit;font-size:13px;padding:4px 6px;border-radius:6px;border:1px solid #D9CFB6;background:#fff}',
      '@media print{#sd-stack,#sdots-btn,#sdots{display:none !important}}'
    ].join('\n');
    document.head.appendChild(s);
  }

  /* ---------- 🏁 Hoy: sesión guiada ---------- */
  R.hoy = function (el) {
    var g = gstore(), r = racha(g), pre = store('quizpre'), post = store('quizpost'), ret = store('retos') || {}, nret = Object.keys(ret).filter(function (k) { return ret[k] && ret[k].ok; }).length;
    var pasos = [];
    if (KB.audio) pasos.push(['audio', '🎧 Escucha la audio-lección', 'Unos 4 minutos con la voz de SABI. Puedes hacerlo mientras te desplazas.', store('audiook')]);
    if (KB.quiz) pasos.push(['quiz', '🎯 Reto diagnóstico', pre == null ? 'Antes de estudiar: descubre qué sabes ya (no cuenta como nota).' : (post == null ? 'Al terminar el curso, repítelo y mide tu crecimiento.' : 'Antes ' + pre + '/10 → después ' + post + '/10'), post != null]);
    pasos.push(['flash', '🗂 Flashcards de hoy', 'Repetición espaciada: 5 minutos que fijan lo esencial.', false]);
    if (KB.frases) pasos.push(['frases', '🗣 Escucha y repite', 'Pronuncia frases reales de aula y recibe tu puntaje.', false]);
    if (KB.retos) pasos.push(['retos', '📅 Reto de 7 días en tu aula', nret + ' de 7 días cumplidos. Lo que se aplica, se aprende.', nret >= 7]);
    pasos.push(['escape', '🔐 Escape room del curso', 'Cuatro candados para demostrar que dominas el tema.', store('escape')]);
    var saludo = (function () { var h = new Date().getHours(); return h < 12 ? 'Buenos días' : (h < 19 ? 'Buenas tardes' : 'Buenas noches'); })();
    el.innerHTML = '<div class="hero"><h3>' + saludo + ', profe.</h3><div style="opacity:.85;font-size:13.5px">' + esc(KB.titulo) + ' · Nadie puede enseñar lo que no sabe: hoy das un paso más.</div>' +
      '<div class="kpis"><div><b>' + (r || 0) + '</b>días seguidos 🔥</div><div><b>' + (g.xp || 0) + '</b>puntos de aprendizaje</div><div><b>' + Object.keys(g.ins || {}).length + '</b>insignias</div></div></div>' +
      '<h4>Tu sesión de hoy · 15 a 20 minutos</h4>' +
      pasos.map(function (p, i) { return '<div class="paso' + (p[3] ? ' ok' : '') + '" data-go="' + p[0] + '"><div class="n">' + (p[3] ? '✓' : i + 1) + '</div><div><b>' + p[1] + '</b><small>' + esc(p[2]) + '</small></div></div>'; }).join('') +
      '<div class="paso" data-go="cert"><div class="n">🎓</div><div><b>Mi certificado gratuito</b><small>' + (function () { var E = estadoCurso(); return E.tipo === 'mod' ? (E.listo ? '¡Listo para descargar!' : E.hechos + ' de ' + E.total + ' módulos aprobados (mínimo 70 % en cada uno).') : 'Se descarga desde el botón Ver diploma del curso.'; })() + '</small></div></div>' +
      '<div class="box">¿Prefieres escuchar el curso completo? Abre un módulo y toca <b>🔊 Escuchar el curso</b>: SABI lo lee contigo desde donde estés.</div>';
  };

  /* ---------- 🎧 Audio-lección ---------- */
  R.audio = function (el) {
    var A = KB.audio; if (!A) { el.innerHTML = '<p class="lead">Este curso aún no tiene audio-lección.</p>'; return; }
    var i = 0, on = false, c = VOZ.cfg();
    el.innerHTML = '<h3>🎧 ' + esc(A.titulo) + '</h3><p class="lead">Audio-lección narrada por SABI. Toca cualquier párrafo para empezar desde ahí. Contenido en revisión por el equipo académico.</p>' +
      '<div><button class="btn t" id="sd-ap">▶ Escuchar</button><button class="btn o" id="sd-as">■ Detener</button> Velocidad <select id="sd-ar"><option value="0.8">lenta</option><option value="0.95">normal</option><option value="1.1">ágil</option><option value="1.25">rápida</option></select></div>' +
      '<div class="box ap">' + A.guion.map(function (p, k) { return '<p data-k="' + k + '">' + esc(p) + '</p>'; }).join('') + '</div>' +
      '<div class="box gold">🧠 <b>Para fijarlo:</b> al terminar, cierra los ojos y explica en voz alta la idea central en 30 segundos. Luego ve a <a href="#" data-go="recu">Recuperación activa</a>.</div>';
    var sel = $('#sd-ar', el); sel.value = String([0.8, 0.95, 1.1, 1.25].reduce(function (a, b) { return Math.abs(b - c.rate) < Math.abs(a - c.rate) ? b : a; }));
    sel.onchange = function () { var g = gstore(); g.voz = { rate: +sel.value, pitch: 1 }; gstore(g); };
    function marca() { $$('.ap p', el).forEach(function (p, k) { p.classList.toggle('on', k === i && on); }); }
    function sig() {
      if (!on || !document.body.contains(el) || !$('.ap', el)) { on = false; return; }
      if (i >= A.guion.length) { on = false; marca(); if (!store('audiook')) { store('audiook', 1); ganar(10, 'audio'); } return; }
      marca(); var p = $$('.ap p', el)[i]; try { p.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) { }
      VOZ.decir(A.guion[i], 'es-CO', function () { if (!on) return; i++; sig(); }, +sel.value);
    }
    $('#sd-ap', el).onclick = function () { if (!VOZ.ok) { toast('Tu navegador no tiene voz. Prueba con Chrome o Edge.'); return; } lectorStop(); VOZ.parar(); on = true; sig(); };
    $('#sd-as', el).onclick = function () { on = false; VOZ.parar(); marca(); };
    $$('.ap p', el).forEach(function (p) { p.style.cursor = 'pointer'; p.onclick = function () { VOZ.parar(); i = +p.dataset.k; on = true; setTimeout(sig, 120); }; });
  };

  /* ---------- 🎯 Reto diagnóstico antes / después ---------- */
  R.quiz = function (el) {
    var Q = KB.quiz; if (!Q) { el.innerHTML = '<p class="lead">Este curso aún no tiene reto diagnóstico.</p>'; return; }
    var pre = store('quizpre'), post = store('quizpost');
    var modo = pre == null ? 'pre' : 'post';
    function portada() {
      var g = (pre != null && post != null) ? post - pre : null;
      el.innerHTML = '<h3>🎯 Reto diagnóstico</h3><p class="lead">Diez situaciones reales de aula. Hazlo <b>antes</b> de estudiar para saber de dónde partes y <b>después</b> para ver cuánto creciste. No es una nota: es tu brújula.</p>' +
        '<div class="grid2"><div class="box"><b>Antes</b><div class="prog"><i style="width:' + ((pre || 0) * 10) + '%"></i></div>' + (pre == null ? 'pendiente' : pre + ' / 10') + '</div>' +
        '<div class="box"><b>Después</b><div class="prog"><i style="width:' + ((post || 0) * 10) + '%"></i></div>' + (post == null ? 'pendiente' : post + ' / 10') + '</div></div>' +
        (g != null ? '<div class="box ' + (g > 0 ? 'teal' : 'gold') + '">' + (g > 0 ? '📈 Creciste ' + g + ' puntos. Eso es aprendizaje real.' : 'Tu resultado no subió esta vez. El error no nos detiene: revisa las explicaciones y vuelve a intentarlo.') + '</div>' : '') +
        '<button class="btn g" id="sd-qa">' + (pre == null ? 'Empezar diagnóstico inicial' : 'Hacer el reto final (después)') + '</button>' +
        (pre != null ? '<button class="btn o" id="sd-qr">Repetir el inicial</button>' : '');
      $('#sd-qa', el).onclick = function () { modo = pre == null ? 'pre' : 'post'; jugar(); };
      if ($('#sd-qr', el)) $('#sd-qr', el).onclick = function () { modo = 'pre'; jugar(); };
    }
    function jugar() {
      var k = 0, ok = 0;
      function pinta() {
        var q = Q[k];
        el.innerHTML = '<h3>🎯 ' + (modo === 'pre' ? 'Diagnóstico inicial' : 'Reto final') + '</h3><div class="prog"><i style="width:' + (k * 10) + '%"></i></div><p class="lead">Pregunta ' + (k + 1) + ' de ' + Q.length + (q.n ? ' · ' + esc(q.n) : '') + '</p>' +
          '<div class="box"><b>' + esc(q.q) + '</b> <button class="btn o" id="sd-qv" title="Escuchar">🔊</button>' + q.o.map(function (o, j) { return '<button class="opt2" data-j="' + j + '">' + 'ABCD'[j] + '. ' + esc(o) + '</button>'; }).join('') + '<div id="sd-qf"></div></div>';
        $('#sd-qv', el).onclick = function () { VOZ.parar(); VOZ.decir(q.q + '. ' + q.o.map(function (o, j) { return 'Opción ' + 'ABCD'[j] + ': ' + o; }).join('. '), 'es-CO'); };
        $$('.opt2', el).forEach(function (b) {
          b.onclick = function () {
            var j = +b.dataset.j, bien = j === q.c; if (bien) { ok++; ganar(5); }
            $$('.opt2', el).forEach(function (x) { x.disabled = true; if (+x.dataset.j === q.c) x.classList.add('si'); });
            if (!bien) b.classList.add('no');
            $('#sd-qf', el).innerHTML = '<div class="box ' + (bien ? 'teal' : 'gold') + '">' + (bien ? '✅ <b>¡Bien razonado!</b> ' : '🔄 <b>Aprendamos de esto.</b> ') + esc(q.fb || '') + '</div><button class="btn" id="sd-qn">' + (k + 1 < Q.length ? 'Siguiente →' : 'Ver resultado') + '</button>';
            $('#sd-qn', el).onclick = function () { k++; if (k < Q.length) pinta(); else fin(); };
          };
        });
      }
      function fin() {
        var nota = Math.round(ok * 10 / Q.length);
        if (modo === 'pre') { store('quizpre', nota); pre = nota; ganar(10, 'pre'); }
        else { var mejor = pre != null && nota > pre; store('quizpost', nota); post = nota; ganar(15, mejor ? 'crece' : null); }
        portada();
      }
      pinta();
    }
    portada();
  };

  /* ---------- 🔐 Escape room ---------- */
  R.escape = function (el) {
    var code = [0, 0, 0, 0].map(function () { return Math.floor(Math.random() * 10); });
    var abiertos = [false, false, false, false];
    var G = shuffle(KB.glosario || []).slice(0, 3);
    var T = (KB.timeline && KB.timeline.items) ? KB.timeline.items.slice() : [];
    var E = KB.errores || [], e0 = E.length ? E[Math.floor(Math.random() * E.length)] : null;
    var P = (KB.flujo && KB.flujo.pasos) ? KB.flujo.pasos.slice() : [];
    function digits() { return '<div class="lock">' + code.map(function (d, i) { return '<div class="d">' + (abiertos[i] ? d : '?') + '</div>'; }).join('') + '</div>'; }
    function pinta() {
      var h = '<h3>🔐 Escape room · ' + esc(KB.titulo) + '</h3><p class="lead">Cada candado abierto revela un dígito. Con los cuatro, escribe el código y escapa. Usa lo que sabes; el error también enseña.</p>' + digits();
      // Candado 1: glosario
      h += '<div class="box"><span class="tag">Candado 1 · Vocabulario</span>';
      if (abiertos[0]) h += ' ✅'; else {
        var gi = G.filter(function (g) { return !g.ok; })[0];
        if (gi) { var ops = shuffle([gi].concat(shuffle((KB.glosario || []).filter(function (x) { return x !== gi; })).slice(0, 3))); h += '<p>«' + esc(gi.d) + '»</p>' + ops.map(function (o) { return '<span class="chip" data-c1="' + esc(o.t) + '">' + esc(o.t) + '</span>'; }).join('') + '<small> (' + (3 - G.filter(function (g) { return !g.ok; }).length + 1) + ' de 3)</small>'; }
      }
      h += '</div>';
      // Candado 2: cronología
      h += '<div class="box"><span class="tag">Candado 2 · ' + (T.length >= 3 ? 'Cronología' : 'Proceso') + '</span>';
      if (abiertos[1]) h += ' ✅'; else if (T.length >= 3) { h += '<p>Toca los hitos del más antiguo al más reciente.</p><div id="sd-c2">' + shuffle(T.slice(0, 4)).map(function (t) { return '<span class="chip" data-y="' + esc(t.y) + '">' + esc(t.e) + '</span>'; }).join('') + '</div>'; } else { abiertos[1] = true; h += ' ✅ (abierto)'; }
      h += '</div>';
      // Candado 3: detecta el error
      h += '<div class="box"><span class="tag">Candado 3 · Detecta el error</span>';
      if (abiertos[2]) h += ' ✅'; else if (e0) { var corr = shuffle([e0].concat(shuffle(E.filter(function (x) { return x !== e0; })).slice(0, 2))); h += '<p>' + esc(e0.caso) + '</p><p><b>¿Cuál es la mejor corrección para esta situación?</b></p>' + corr.map(function (x) { return '<button class="opt2" data-c3="' + (x === e0 ? 1 : 0) + '">' + esc(x.correccion) + '</button>'; }).join(''); } else { abiertos[2] = true; h += ' ✅ (abierto)'; }
      h += '</div>';
      // Candado 4: ordena el procedimiento
      h += '<div class="box"><span class="tag">Candado 4 · Procedimiento</span>';
      if (abiertos[3]) h += ' ✅'; else if (P.length >= 3) { h += '<p>Toca los pasos en el orden correcto.</p><div id="sd-c4">' + shuffle(P.map(function (p, i) { return { p: p, i: i }; })).map(function (x) { return '<span class="chip" data-i="' + x.i + '">' + esc(x.p) + '</span>'; }).join('') + '</div>'; } else { abiertos[3] = true; h += ' ✅ (abierto)'; }
      h += '</div>';
      if (abiertos.every(Boolean)) h += '<div class="box gold"><b>Escribe el código de 4 dígitos:</b><br><input id="sd-code" inputmode="numeric" maxlength="4" style="font:700 22px DM Sans;letter-spacing:8px;width:140px;padding:6px;border-radius:8px;border:1px solid #ccc"> <button class="btn g" id="sd-open">Abrir la puerta</button></div>';
      el.innerHTML = h;
      $$('[data-c1]', el).forEach(function (c) { c.onclick = function () { var gi = G.filter(function (g) { return !g.ok; })[0]; if (c.dataset.c1 === gi.t) { gi.ok = true; if (G.every(function (g) { return g.ok; })) abiertos[0] = true; pinta(); } else { c.classList.add('bad'); setTimeout(function () { c.classList.remove('bad'); }, 400); } }; });
      var ords = T.slice(0, 4).map(function (t) { return t.y; }), pos2 = 0;
      $$('#sd-c2 .chip', el).forEach(function (c) { c.onclick = function () { if (c.classList.contains('ok')) return; if (c.dataset.y === ords[pos2]) { c.classList.add('ok'); c.textContent = c.dataset.y + ' · ' + c.textContent; pos2++; if (pos2 === ords.length) { abiertos[1] = true; setTimeout(pinta, 500); } } else { c.classList.add('bad'); setTimeout(function () { c.classList.remove('bad'); }, 400); } }; });
      $$('[data-c3]', el).forEach(function (b) { b.onclick = function () { if (b.dataset.c3 === '1') { b.classList.add('si'); abiertos[2] = true; setTimeout(pinta, 500); } else { b.classList.add('no'); b.disabled = true; } }; });
      var pos4 = 0; $$('#sd-c4 .chip', el).forEach(function (c) { c.onclick = function () { if (c.classList.contains('ok')) return; if (+c.dataset.i === pos4) { c.classList.add('ok'); c.textContent = (pos4 + 1) + '. ' + c.textContent; pos4++; if (pos4 === P.length) { abiertos[3] = true; setTimeout(pinta, 500); } } else { c.classList.add('bad'); setTimeout(function () { c.classList.remove('bad'); }, 400); } }; });
      if ($('#sd-open', el)) $('#sd-open', el).onclick = function () {
        if ($('#sd-code', el).value === code.join('')) { var first = !store('escape'); store('escape', 1); if (first) ganar(30, 'escape'); else ganar(5); el.innerHTML = '<h3>🎉 ¡Escapaste!</h3><div class="box teal">Demostraste vocabulario, ubicación histórica, criterio ante el error y dominio del procedimiento. Esta misma dinámica funciona con tus estudiantes: el <a href="sabi_taller.html">SABI Taller de Aula</a> genera escape rooms para tu clase.</div><button class="btn g" id="sd-again">Jugar otra versión</button>'; $('#sd-again', el).onclick = function () { R.escape(el); }; }
        else toast('Código incorrecto. Revisa los dígitos en orden.');
      };
    }
    pinta();
  };

  /* ---------- 🔀 Ordena el proceso ---------- */
  R.ordena = function (el) {
    var P = (KB.flujo && KB.flujo.pasos) || []; if (P.length < 3) { el.innerHTML = '<p class="lead">Sin procedimiento para ordenar.</p>'; return; }
    var pos = 0, fallos = 0;
    el.innerHTML = '<h3>🔀 Ordena el proceso</h3><p class="lead">' + esc(KB.flujo.titulo || '') + '. Toca los pasos en orden. Pensar el orden obliga a comprender el porqué de cada paso.</p><div id="sd-or">' +
      shuffle(P.map(function (p, i) { return { p: p, i: i }; })).map(function (x) { return '<div class="chip" style="display:block" data-i="' + x.i + '">' + esc(x.p) + '</div>'; }).join('') + '</div><div id="sd-orf"></div>';
    $$('#sd-or .chip', el).forEach(function (c) {
      c.onclick = function () {
        if (c.classList.contains('ok')) return;
        if (+c.dataset.i === pos) { c.classList.add('ok'); c.textContent = (pos + 1) + '. ' + c.textContent; $('#sd-or', el).insertBefore(c, $$('#sd-or .chip:not(.ok)', el)[0] || null); pos++; if (pos === P.length) { var perf = fallos === 0; $('#sd-orf', el).innerHTML = '<div class="box teal">' + (perf ? '🏅 ¡Perfecto, sin errores!' : '✔ Completo con ' + fallos + ' intento(s) fallido(s). Repite hasta lograrlo sin errores.') + '</div><button class="btn g" id="sd-ora">Otra vez</button>'; ganar(perf ? 10 : 4, perf ? 'orden' : null); $('#sd-ora', el).onclick = function () { R.ordena(el); }; } }
        else { fallos++; c.classList.add('bad'); setTimeout(function () { c.classList.remove('bad'); }, 400); }
      };
    });
  };

  /* ---------- 📅 Reto de 7 días ---------- */
  R.retos = function (el) {
    var T = KB.retos; if (!T) { el.innerHTML = '<p class="lead">Este curso aún no tiene reto de 7 días.</p>'; return; }
    var st = store('retos') || {};
    var hechos = T.filter(function (r, i) { return st[i] && st[i].ok; }).length;
    var ultimo = null; Object.keys(st).forEach(function (k) { if (st[k] && st[k].ok && (!ultimo || st[k].f > ultimo)) ultimo = st[k].f; });
    var bloqueadoHoy = ultimo === hoy();
    el.innerHTML = '<h3>📅 Reto de 7 días en tu aula</h3><p class="lead">Un día, una acción concreta con tus estudiantes y una evidencia. Así el curso se convierte en práctica. (Un reto por día: el aprendizaje necesita tiempo para asentarse.)</p><div class="prog"><i style="width:' + Math.round(hechos * 100 / T.length) + '%"></i></div><p class="lead">' + hechos + ' de ' + T.length + ' días cumplidos</p>' +
      T.map(function (r, i) {
        var s = st[i] || {}, abierto = i === 0 || (st[i - 1] && st[i - 1].ok), lk = !abierto && !s.ok;
        return '<div class="box dia' + (s.ok ? ' ok' : '') + (lk ? ' lk' : '') + '"><span class="tag">Día ' + (r.dia || i + 1) + ' · ' + esc(r.tiempo || '') + '</span> <b>' + esc(r.titulo) + '</b>' +
          (lk ? '<p class="lead">🔒 Se abre al cumplir el día anterior.</p>' : '<p>' + esc(r.accion) + '</p><p><small><b>Evidencia:</b> ' + esc(r.evidencia) + '</small></p>' +
            '<textarea data-i="' + i + '" placeholder="¿Qué pasó? ¿Qué dijeron o hicieron tus estudiantes? ¿Qué ajustarías?">' + esc(s.txt || '') + '</textarea>' +
            (s.ok ? '<p class="sc">✓ Cumplido el ' + esc(s.f) + '</p>' : (bloqueadoHoy ? '<p class="lead">Ya cumpliste el reto de hoy. Vuelve mañana para el siguiente. 🌱</p>' : '<button class="btn t" data-ok="' + i + '">Marcar como cumplido</button>'))) + '</div>';
      }).join('') +
      (hechos === T.length ? '<div class="box gold">🏆 Completaste el reto. Comparte tu evidencia con coordinación académica: tu práctica puede inspirar a otros maestros CENTEC.</div>' : '');
    $$('textarea', el).forEach(function (t) { t.oninput = function () { var i = t.dataset.i; st[i] = st[i] || {}; st[i].txt = t.value; store('retos', st); }; });
    $$('[data-ok]', el).forEach(function (b) {
      b.onclick = function () {
        var i = b.dataset.ok; st[i] = st[i] || {};
        if (!st[i].txt || st[i].txt.trim().length < 15) { toast('Escribe primero una breve evidencia de lo que pasó en clase.'); return; }
        st[i].ok = true; st[i].f = hoy(); store('retos', st);
        var todos = T.every(function (r, k) { return st[k] && st[k].ok; }); ganar(15, todos ? 'reto7' : null); R.retos(el);
      };
    });
  };

  /* ---------- 🗣 Escucha y repite (cursos de idiomas) ---------- */
  function similitud(a, b, lang) {
    function n(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim(); }
    var A = n(a), B = n(b), zh = /^zh/.test(lang || '');
    var x = zh ? A.replace(/\s/g, '').split('') : A.split(' '), y = zh ? B.replace(/\s/g, '').split('') : B.split(' ');
    if (!x.length || !y.length) return 0;
    var d = []; for (var i = 0; i <= x.length; i++) { d[i] = [i]; } for (var j = 0; j <= y.length; j++) d[0][j] = j;
    for (i = 1; i <= x.length; i++) for (j = 1; j <= y.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (x[i - 1] === y[j - 1] ? 0 : 1));
    return Math.max(0, Math.round(100 * (1 - d[x.length][y.length] / Math.max(x.length, y.length))));
  }
  window.SABISimilitud = similitud;
  var CLUBLANG = { en: 'en', fr: 'fr', pt: 'pt', de: 'de', zh: 'zh' };
  R.frases = function (el) {
    var F = KB.frases; if (!F) { el.innerHTML = '<p class="lead">Este curso no tiene frases de práctica.</p>'; return; }
    var st = store('frases') || {}, cat = 'Todas';
    var cats = ['Todas'].concat(F.map(function (f) { return f.cat; }).filter(function (c, i, a) { return c && a.indexOf(c) === i; }));
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    var lang0 = KB.idioma || 'en-US', club = CLUBLANG[lang0.slice(0, 2)] || 'en';
    function pinta() {
      var lista = F.map(function (f, i) { return { f: f, i: i }; }).filter(function (x) { return cat === 'Todas' || x.f.cat === cat; });
      var dom = Object.keys(st).filter(function (k) { return st[k] >= 80; }).length;
      el.innerHTML = '<h3>🗣 Escucha y repite</h3><p class="lead">Escucha a SABI, repite en voz alta y recibe tu puntaje. Al llegar a 80 % la frase queda dominada. ' + (SR ? '' : '<b>Tu navegador no permite reconocimiento de voz (usa Chrome o Edge); puedes escuchar y repetir igualmente.</b>') + '</p>' +
        '<div class="box teal">🎙 <b>Club de Diálogo SABI:</b> conversa en situaciones reales (reunión con familias, sala de profesores, clase) con voz y micrófono. <a href="sabi_club_idiomas.html?lang=' + club + '"><b>Entrar al club →</b></a></div>' +
        '<p><b>' + dom + ' / ' + F.length + '</b> frases dominadas · Categoría <select id="sd-fc2">' + cats.map(function (c) { return '<option' + (c === cat ? ' selected' : '') + '>' + esc(c) + '</option>'; }).join('') + '</select></p>' +
        lista.map(function (x) { var s = st[x.i]; return '<div class="fr"><button class="ib" data-p="' + x.i + '" title="Escuchar">🔊</button><div class="tx"><b>' + esc(x.f.t) + '</b><small>' + esc(x.f.es) + (x.f.f ? ' · <i>' + esc(x.f.f) + '</i>' : '') + '</small><div class="sc" data-s="' + x.i + '">' + (s != null ? (s >= 80 ? '✅ ' : '◐ ') + s + ' %' : '') + '</div></div>' + (SR ? '<button class="ib mic" data-m="' + x.i + '" title="Repetir">🎙</button>' : '') + '</div>'; }).join('');
      $('#sd-fc2', el).onchange = function () { cat = this.value; pinta(); };
      $$('[data-p]', el).forEach(function (b) { b.onclick = function () { var f = F[+b.dataset.p]; VOZ.parar(); VOZ.decir(f.t, f.l || lang0, null, 0.85); }; });
      $$('[data-m]', el).forEach(function (b) {
        b.onclick = function () {
          var i = +b.dataset.m, f = F[i], r = new SR(); r.lang = f.l || lang0; r.interimResults = false; r.maxAlternatives = 3;
          b.classList.add('rec'); var out = $('[data-s="' + i + '"]', el); out.textContent = 'Escuchando…';
          r.onresult = function (e) {
            var best = 0, txt = ''; for (var k = 0; k < e.results[0].length; k++) { var sc = similitud(f.t, e.results[0][k].transcript, r.lang); if (sc > best) { best = sc; txt = e.results[0][k].transcript; } }
            var prev = st[i] || 0; st[i] = Math.max(prev, best); store('frases', st);
            out.innerHTML = (best >= 80 ? '✅ ' : '◐ ') + best + ' % · Oí: «' + esc(txt) + '»' + (best < 80 ? ' · Escucha de nuevo y fíjate en las palabras que faltan.' : '');
            if (best >= 80 && prev < 80) ganar(3, 'voz'); else if (best >= 50) ganar(1);
          };
          r.onerror = function (e) { out.textContent = e.error === 'not-allowed' ? 'Permite el micrófono para practicar.' : 'No te escuché bien. Intenta de nuevo, cerca del micrófono.'; };
          r.onend = function () { b.classList.remove('rec'); };
          try { VOZ.parar(); r.start(); } catch (e) { b.classList.remove('rec'); }
        };
      });
    }
    pinta();
  };

  /* ---------- 🖨 Kit para mi aula (worksheet + minilibro) ---------- */
  function imprimir(titulo, cuerpo) {
    var w = window.open('', '_blank'); if (!w) { toast('Permite ventanas emergentes para imprimir.'); return; }
    w.document.write('<!doctype html><html lang="es"><head><meta charset="utf-8"><title>' + esc(titulo) + '</title><style>body{font:14px/1.5 Georgia,serif;color:#13233F;max-width:780px;margin:24px auto;padding:0 18px}h1{font-size:22px;border-bottom:3px solid #D4A843;padding-bottom:6px}h2{font-size:16px;margin-top:22px;color:#0B1E3D}table{width:100%;border-collapse:collapse}td{border:1px solid #bbb;padding:6px;vertical-align:top}.l{height:60px;border-bottom:1px solid #999;margin:8px 0}.mb{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(2,1fr);width:100%;height:94vh;border:1px dashed #999}.mb div{border:1px dashed #bbb;padding:10px;font-size:11px;overflow:hidden}.mb .r{transform:rotate(180deg)}.pie{font-size:11px;color:#666;margin-top:24px}@media print{button{display:none}}</style></head><body>' + cuerpo + '<p class="pie">SABI CENTEC Maestros · Colegio CENTEC · Cali, Colombia · material gratuito (en revisión)</p><button onclick="print()">Imprimir</button></body></html>');
    w.document.close();
  }
  R.kit = function (el) {
    el.innerHTML = '<h3>🖨 Kit para mi aula</h3><p class="lead">Lo que aprendes aquí lo modelas con tus estudiantes. Genera materiales imprimibles a partir de este curso: úsalos en tu formación con colegas o adáptalos a tu grupo.</p>' +
      '<div class="box"><b>📝 /worksheet · Ficha de trabajo</b><p>Relacionar términos, caso para analizar, preguntas de recuperación y hoja de respuestas.</p><button class="btn g" id="sd-kw">Generar ficha</button></div>' +
      '<div class="box"><b>📖 /minibook · Minilibro de 8 páginas</b><p>Una hoja, dos dobleces y un corte: resumen de bolsillo del curso para repasar en cualquier lugar.</p><button class="btn g" id="sd-km">Generar minilibro</button></div>' +
      '<div class="box"><b>🧰 Para tus estudiantes</b><p>Experimentos, fichas infinitas de matemáticas, comprensión lectora, escape rooms, juegos de tablero y más en el <a href="sabi_taller.html">SABI Taller de Aula</a>.</p></div>';
    $('#sd-kw', el).onclick = function () {
      var G = shuffle(KB.glosario || []).slice(0, 8), D = shuffle(G.slice());
      var c = '<h1>' + esc(KB.titulo) + ' · Ficha de trabajo</h1><p>Nombre: ______________________ Fecha: ___________</p>' +
        '<h2>1. Relaciona cada término con su definición</h2><table>' + G.map(function (g, i) { return '<tr><td style="width:30%">' + (i + 1) + '. ' + esc(g.t) + '</td><td>( ) ' + esc(D[i].d) + '</td></tr>'; }).join('') + '</table>' +
        (KB.caso ? '<h2>2. Analiza el caso: ' + esc(KB.caso.titulo) + '</h2><p>' + esc(KB.caso.contexto) + '</p>' + (KB.caso.preguntas || []).map(function (p, i) { return '<p>' + (i + 1) + '. ' + esc(p) + '</p><div class="l"></div>'; }).join('') : '') +
        '<h2>3. Responde sin mirar tus notas</h2>' + (KB.recuperacion || []).map(function (r, i) { return '<p>' + (i + 1) + '. ' + esc(r.p) + '</p><div class="l"></div>'; }).join('') +
        '<h2 style="page-break-before:always">Hoja de respuestas</h2><p>1. ' + G.map(function (g, i) { return (i + 1) + '→' + esc(String.fromCharCode(97 + D.indexOf(g))); }).join(' · ') + ' (a, b, c… según el orden de las definiciones)</p>' + (KB.recuperacion || []).map(function (r, i) { return '<p><b>3.' + (i + 1) + '</b> ' + esc(r.modelo) + '</p>'; }).join('');
      imprimir('Ficha · ' + KB.titulo, c);
    };
    $('#sd-km', el).onclick = function () {
      var dm = KB.dominar || {}, G = (KB.glosario || []).slice(0, 5);
      var pg = [
        '<b style="font-size:15px">' + esc(KB.titulo) + '</b><p>Minilibro SABI</p><p>Nombre: ________</p>',
        '<b>Idea en sencillo</b><p>' + esc((KB.intuitiva || '').slice(0, 420)) + '</p>',
        '<b>Palabras clave</b>' + G.map(function (g) { return '<p><b>' + esc(g.t) + ':</b> ' + esc(g.d) + '</p>'; }).join(''),
        '<b>Memorizar · Comprender</b><p>' + (dm.memorizar || []).concat(dm.comprender || []).map(esc).join('<br>• ') + '</p>',
        '<b>Saber hacer · Decidir</b><p>' + (dm.ejecutar || []).concat(dm.decidir || []).map(esc).join('<br>• ') + '</p>',
        '<b>Paso a paso</b><p>' + ((KB.flujo && KB.flujo.pasos) || []).map(function (p, i) { return (i + 1) + '. ' + esc(p); }).join('<br>') + '</p>',
        '<b>Error frecuente</b><p>' + esc(((KB.errores || [])[0] || {}).error || '') + '</p><p><b>Mejor así:</b> ' + esc(((KB.errores || [])[0] || {}).correccion || '') + '</p>',
        '<b>Mi compromiso</b><p>Esta semana en mi aula voy a…</p><p>______________________<br>______________________</p><p>El error no nos detiene: nos enseña.</p>'
      ];
      var orden = [4, 3, 2, 1, 5, 6, 7, 0];
      var c = '<p>Imprime en una hoja horizontal. Dobla por la mitad a lo largo, luego en cuartos; corta el centro y forma el librito.</p><div class="mb">' + orden.map(function (k, i) { return '<div class="' + (i < 4 ? 'r' : '') + '">' + pg[k] + '</div>'; }).join('') + '</div>';
      imprimir('Minilibro · ' + KB.titulo, c);
    };
  };

  /* ---------- 🏅 Logros ---------- */
  R.logros = function (el) {
    var g = gstore(), r = racha(g), cs = g.cursos || {};
    el.innerHTML = '<h3>🏅 Mis logros</h3><p class="lead">Tu progreso en todos los cursos SABI CENTEC Maestros (se guarda en este dispositivo).</p>' +
      '<div class="hero"><div class="kpis"><div><b>' + r + '</b>días seguidos 🔥</div><div><b>' + (g.xp || 0) + '</b>puntos</div><div><b>' + Object.keys(cs).length + '</b>cursos activos</div></div></div>' +
      '<h4>Insignias</h4><div class="ins">' + Object.keys(INS).map(function (k) { var x = INS[k], on = g.ins && g.ins[k]; return '<div class="' + (on ? '' : 'off') + '" title="' + esc(x[2]) + '"><b>' + x[0] + '</b>' + esc(x[1]) + '<br><small>' + (on ? esc(g.ins[k]) : esc(x[2])) + '</small></div>'; }).join('') + '</div>' +
      '<h4>Mis cursos</h4><div class="box"><table>' + Object.keys(cs).map(function (k) { return '<tr><td><a href="' + esc(k) + '.html">' + esc(cs[k].c || '') + '</a></td><td>' + esc(cs[k].t) + '<br><small>' + cs[k].xp + ' puntos · último día ' + esc(cs[k].u) + '</small></td></tr>'; }).join('') + '</table></div>' +
      '<div class="box teal">🔁 <b>El secreto es volver.</b> Diez minutos diarios valen más que tres horas un domingo: la práctica espaciada y la recuperación activa son de las estrategias con mejor evidencia para aprender a largo plazo.</div>';
  };

  /* ---------- 🎓 Certificado gratuito ---------- */
  function estadoCurso() {
    var mods = $$('.mod[id^="mod"]'), prog = {};
    try { prog = JSON.parse(localStorage.getItem('sabi_p:' + page) || '{}') || {}; } catch (e) { }
    var lista = mods.map(function (m, i) { var n = +(m.id.replace('mod', '')) || i + 1, t = $('.mtitle', m); var p = prog['m' + n] || {}; return { n: n, t: t ? t.textContent.trim() : 'Módulo ' + n, ok: !!p.ok, pct: p.pct || 0 }; });
    var hechos = lista.filter(function (x) { return x.ok; }).length;
    return { tipo: mods.length ? 'mod' : 'otro', lista: lista, hechos: hechos, total: lista.length, listo: lista.length > 0 && hechos === lista.length, prom: hechos ? Math.round(lista.reduce(function (a, x) { return a + (x.ok ? x.pct : 0); }, 0) / hechos) : 0, propio: !!document.getElementById('diploma-overlay') };
  }
  function diploma(nombre, E) {
    var fecha = new Date(), f = fecha.toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
    var cod = (KB.curso + '-' + Date.now().toString(36) + '-' + Array.prototype.reduce.call(nombre + KB.titulo, function (a, c) { return (a * 31 + c.charCodeAt(0)) >>> 0; }, 7).toString(36)).toUpperCase();
    var g = gstore(); g.certs = g.certs || {}; g.certs[page] = { n: nombre, f: hoy(), c: cod, t: KB.titulo }; gstore(g);
    var c = '<style>@page{size:landscape;margin:0}body{margin:0!important;max-width:none!important;padding:0!important}.pie{display:none}' +
      '.dp{box-sizing:border-box;width:100vw;height:100vh;padding:5vh 6vw;background:#FBF7EE;border:14px solid #0B1E3D;outline:3px solid #D4A843;outline-offset:-26px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-family:Georgia,serif;color:#0B1E3D;position:relative}' +
      '.dp .k{letter-spacing:6px;font:600 13px sans-serif;color:#1D9E75}.dp h1{font-size:46px;margin:8px 0 0;border:0;color:#0B1E3D}.dp .s{font:15px sans-serif;color:#5B6B85;margin:6px 0 22px}.dp .n{font-size:40px;font-style:italic;color:#B8902A;margin:6px 0 14px}' +
      '.dp .c{font-size:24px;font-weight:700;max-width:80%}.dp .m{font:14px sans-serif;color:#13233F;margin-top:12px}.dp .f{display:flex;gap:12vw;margin-top:44px;font:14px sans-serif}.dp .f b{display:block;font:700 17px Georgia,serif}' +
      '.dp .z{position:absolute;bottom:14px;right:22px;font:9px monospace;color:#FBF7EE;opacity:.04}</style>' +
      '<div class="dp"><div class="k">SABI CENTEC MAESTROS · CALI, COLOMBIA</div><h1>Certificado de formación docente</h1><div class="s">Colegio CENTEC Córdoba otorga el presente certificado a</div>' +
      '<div class="n">' + esc(nombre) + '</div><div class="s" style="margin:0">por haber aprobado, con dominio demostrado, el curso</div><div class="c">' + esc(KB.titulo) + '</div>' +
      '<div class="m">' + E.total + ' módulo(s) aprobados con mínimo 70 % · logro promedio ' + E.prom + ' % · ' + esc(f) + '</div>' +
      '<div class="f"><div><b>Alexander Rojas Zamorano</b>Rector · CENTEC</div><div><b>Reverendo Nelson López</b>Vicerrector · CENTEC</div></div>' +
      '<div class="z">' + esc(cod) + '</div></div>';
    imprimir('Certificado · ' + KB.titulo, c);
  }
  R.cert = function (el) {
    var E = estadoCurso(), nombre = ''; try { nombre = localStorage.getItem('sabi_nombre') || ''; } catch (e) { }
    var h = '<h3>🎓 Mi certificado</h3><p class="lead">Este curso es <b>gratuito y certificado</b> por SABI CENTEC Maestros. El certificado se gana con dominio real: aprobar cada módulo con mínimo 70 %.</p>';
    if (E.tipo !== 'mod') {
      h += '<div class="box teal">Este curso emite su diploma desde la propia página: completa sus actividades y usa el botón <b>Ver diploma</b> del curso.</div>';
      el.innerHTML = h; return;
    }
    h += '<div class="box"><table>' + E.lista.map(function (m) { return '<tr><td>' + (m.ok ? '✅' : '⏳') + ' M' + m.n + '</td><td>' + esc(m.t) + '<div class="prog"><i style="width:' + (m.ok ? m.pct : 0) + '%"></i></div>' + (m.ok ? m.pct + ' %' : 'pendiente') + '</td></tr>'; }).join('') + '</table></div>';
    if (E.listo) {
      h += '<div class="box gold"><b>¡Felicitaciones! Tu certificado está listo.</b><br>Escribe tu nombre completo tal como quieres que aparezca:<br><input id="sd-nom" value="' + esc(nombre) + '" style="width:100%;box-sizing:border-box;margin:8px 0;padding:9px;border-radius:8px;border:1px solid #D9CFB6;font:inherit"><button class="btn g" id="sd-dip">🎓 Generar certificado</button></div>';
    } else {
      h += '<div class="box teal">Vas en <b>' + E.hechos + ' de ' + E.total + '</b> módulos. Abre el siguiente módulo en la página del curso, estudia sus tarjetas y responde su evaluación. Usa la <a href="#" data-go="audio">audio-lección</a> y las <a href="#" data-go="flash">flashcards</a> para llegar con seguridad.</div>';
    }
    el.innerHTML = h;
    if ($('#sd-dip', el)) $('#sd-dip', el).onclick = function () {
      var n = $('#sd-nom', el).value.trim(); if (n.length < 5) { toast('Escribe tu nombre completo.'); return; }
      try { localStorage.setItem('sabi_nombre', n); } catch (e) { }
      if (E.propio && typeof window.showDiploma === 'function') { root.classList.remove('on'); window.showDiploma(E.prom); } else diploma(n, E);
      ganar(50);
    };
  };
  function vigilarCert() {
    var antes = estadoCurso().listo;
    setInterval(function () { var E = estadoCurso(); if (E.listo && !antes) { antes = true; toast('🎓 ¡Aprobaste todos los módulos! Tu certificado está listo en el Tutor Dots.'); setTimeout(function () { if (window.SABIDots) window.SABIDots.open('cert'); }, 1800); } }, 2500);
  }

  /* ---------- interfaz ---------- */
  function build() {
    css(); css2();
    VIEWS = VIEWS.filter(function (v) { return !v[3] || v[3] === 1 || KB[v[3]]; });
    var b = document.createElement('button');
    b.id = 'sdots-btn'; b.type = 'button'; b.setAttribute('aria-label', 'Abrir tutor SABI Dots');
    b.innerHTML = '<span class="dots">' + '<i></i>'.repeat(9) + '</span>Tutor Dots <span class="rc"></span>';
    document.body.appendChild(b);
    var rr = racha(gstore()); if (rr) $('.rc', b).textContent = '🔥' + rr;
    var stack = document.createElement('div'); stack.id = 'sd-stack';
    if (VOZ.ok) stack.innerHTML = '<button type="button" id="sd-lector" aria-label="Escuchar el curso en voz alta">🔊 Escuchar el curso</button>';
    if (KB.frases) stack.innerHTML += '<a href="sabi_club_idiomas.html?lang=' + (CLUBLANG[(KB.idioma || 'en').slice(0, 2)] || 'en') + '">🎙 Club de Diálogo</a>';
    document.body.appendChild(stack);
    if ($('#sd-lector')) $('#sd-lector').onclick = function () { if (LECTOR.on) lectorStop(); else lectorStart(); };
    root = document.createElement('div'); root.id = 'sdots'; root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', 'Tutor SABI Dots');
    root.innerHTML = '<div class="bg"></div><div class="pn"><header><button class="x" aria-label="Cerrar">×</button><div class="t">SABI Dots · Tutor personal</div><div class="s">' + esc(KB.curso + ' · ' + KB.titulo) + '</div>' +
      '<form class="cmd"><input placeholder="Escribe un comando: /audio, /diagnostico, /escape, /reto, /flashcards…" aria-label="Comando"></form></header>' +
      '<nav>' + VIEWS.map(function (v) { return '<button type="button" data-v="' + v[0] + '">' + v[1] + '</button>'; }).join('') + '</nav><div class="bd"></div></div>';
    document.body.appendChild(root);
    body = $('.bd', root);
    function open() { root.classList.add('on'); render(); }
    function close() { root.classList.remove('on'); VOZ.parar(); }
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
    view = store('last') || 'hoy';
    window.SABIDots = { open: function (v) { if (v) view = v; open(); } };
    vigilarCert();
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
    s.onload = function () {
      KB = window.SABI_KB; if (!KB) return;
      var p = document.createElement('script'); p.src = base + 'kb/plus/' + page + '.js';
      p.onload = p.onerror = function () { KB = window.SABI_KB; fillCards(); build(); };
      document.head.appendChild(p);
    };
    document.head.appendChild(s);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
