/* SABI Taller de Aula · núcleo: estado, utilidades, azar con semilla, hojas imprimibles, verificación de respuestas */
(function () {
  'use strict';
  var T = window.SABI_TALLER = window.SABI_TALLER || {};
  T.GRADOS = [['tr', 'Transición'], ['01', '1.°'], ['02', '2.°'], ['03', '3.°'], ['04', '4.°'], ['05', '5.°'], ['06', '6.°'], ['07', '7.°'], ['08', '8.°'], ['09', '9.°'], ['10', '10.°'], ['11', '11.°']];
  T.mods = T.mods || [];

  /* ---------- utilidades ---------- */
  T.esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  T.$ = function (s, el) { return (el || document).querySelector(s); };
  T.$$ = function (s, el) { return [].slice.call((el || document).querySelectorAll(s)); };
  T.store = function (k, v) { var key = 'sabitaller:' + k; try { if (v === undefined) { var r = localStorage.getItem(key); return r == null ? null : JSON.parse(r); } localStorage.setItem(key, JSON.stringify(v)); } catch (e) { return null; } };
  T.gnum = function (g) { return g === 'tr' ? 0 : parseInt(g, 10); };
  T.gname = function (g) { var x = T.GRADOS.filter(function (a) { return a[0] === g; })[0]; return x ? x[1] : g; };
  T.toast = function (m) { var d = document.createElement('div'); d.className = 'toast'; d.textContent = m; document.body.appendChild(d); setTimeout(function () { d.remove(); }, 2200); };
  T.plain = function (html) { var d = document.createElement('div'); d.innerHTML = html; return d.textContent.replace(/\s+/g, ' ').trim(); };
  T.sinTildes = function (s) { return String(s || '').normalize('NFD').replace(/[̀-̂̄-ͯ]/g, '').normalize('NFC'); };

  /* números al estilo colombiano: 12.500 · 3,75 · −4 */
  T.fmt = function (n, dec) {
    if (typeof n !== 'number' || !isFinite(n)) return String(n);
    var neg = n < 0; n = Math.abs(n);
    var s = dec != null ? n.toFixed(dec) : (Math.round(n * 1e6) / 1e6).toString();
    var p = s.split('.'), ent = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return (neg ? '−' : '') + ent + (p[1] ? ',' + p[1] : '');
  };
  T.peso = function (n) { return '$' + T.fmt(n); };
  T.sig = function (n) { return n < 0 ? '(' + T.fmt(n) + ')' : T.fmt(n); };

  /* azar reproducible (mulberry32) */
  T.rng = function (seed) {
    var a = seed >>> 0;
    var r = {
      seed: seed,
      next: function () { a = (a + 0x6D2B79F5) >>> 0; var t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; },
      int: function (lo, hi) { return lo + Math.floor(r.next() * (hi - lo + 1)); },
      pick: function (arr) { return arr[Math.floor(r.next() * arr.length)]; },
      chance: function (p) { return r.next() < p; },
      shuffle: function (arr) { arr = arr.slice(); for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(r.next() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; },
      sample: function (arr, k) { return r.shuffle(arr).slice(0, k); },
      sign: function () { return r.next() < 0.5 ? -1 : 1; }
    };
    return r;
  };
  T.semilla = function () { return 1000 + Math.floor(Math.random() * 8999); };

  /* matemáticas exactas */
  T.gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; };
  T.lcm = function (a, b) { return Math.abs(a * b) / T.gcd(a, b); };
  T.frac = function (n, d) { if (d < 0) { n = -n; d = -d; } var g = T.gcd(n, d); return { n: n / g, d: d / g }; };
  T.fstr = function (f) { return f.d === 1 ? T.fmt(f.n) : (f.n < 0 ? '−' : '') + Math.abs(f.n) + '/' + f.d; };
  T.fhtml = function (n, d) { return '<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.05;font-weight:700;margin:0 2px"><span>' + n + '</span><span style="border-top:1.5px solid currentColor;padding:0 3px">' + d + '</span></span>'; };

  /* ---------- verificación de respuestas ---------- */
  function num(s) {
    s = String(s).replace(/\s|\$/g, '').replace(/−/g, '-');
    if (/^-?\d{1,3}(\.\d{3})+(,\d+)?$/.test(s)) s = s.replace(/\./g, '');
    s = s.replace(',', '.');
    if (/^-?\d+\/\d+$/.test(s)) { var p = s.split('/'); return +p[0] / +p[1]; }
    return /^-?\d*\.?\d+$/.test(s) ? parseFloat(s) : NaN;
  }
  T.num = num;
  function nums(s) { return (String(s).replace(/−/g, '-').replace(/(\d)\.(\d{3})(?!\d)/g, '$1$2').match(/-?\d+(?:,\d+)?(?:\/\d+)?/g) || []).map(num); }
  function textoN(s) { return T.sinTildes(String(s).toLowerCase()).replace(/[^a-z0-9ñπ/]+/g, ' ').trim(); }
  /* polinomio/expresión lineal: "3x^2 - 2x + 5", "2a+7b" → mapa término→coeficiente */
  T.poly = function (s) {
    s = String(s).replace(/\s|\*/g, '').replace(/−/g, '-').replace(/²/g, '^2').replace(/³/g, '^3').toLowerCase();
    if (!s) return null;
    if (s[0] !== '-' && s[0] !== '+') s = '+' + s;
    var m, re = /([+-])(\d*(?:[.,]\d+)?)([a-z](?:\^\d+)?(?:[a-z](?:\^\d+)?)*)?/g, out = {}, used = 0;
    while ((m = re.exec(s)) && m[0]) {
      used += m[0].length;
      var c = m[2] === '' ? 1 : parseFloat(m[2].replace(',', '.'));
      if (m[2] === '' && !m[3]) return null;
      var v = (m[3] || '1').replace(/([a-z])(?!\^)/g, '$1^1');
      var parts = (v.match(/[a-z]\^\d+/g) || []).sort().join('');
      var key = parts || '1';
      out[key] = (out[key] || 0) + (m[1] === '-' ? -c : c);
      if (re.lastIndex >= s.length) break;
    }
    if (used !== s.length) return null;
    Object.keys(out).forEach(function (k) { if (Math.abs(out[k]) < 1e-12) delete out[k]; });
    return out;
  };
  T.check = function (user, ans, kind) {
    var u = String(user || '').trim();
    if (!u) return false;
    var alts = String(ans).split('|');
    return alts.some(function (a) {
      switch (kind) {
        case 'num': return Math.abs(num(u) - num(a)) < 1e-6;
        case 'aprox': return Math.abs(num(u) - num(a)) <= 0.011 * Math.max(1, Math.abs(num(a)) / 100);
        case 'peso1': return Math.abs(num(u) - num(a)) <= 1;
        case 'frac': return Math.abs(num(u.replace(/\s/g, '')) - num(a)) < 1e-9;
        case 'fracs': var x = u.replace(/\s|−/g, function (c) { return c === '−' ? '-' : ''; }); return x === a.replace(/−/g, '-');
        case 'x': return Math.abs(num(u.replace(/^[a-z]\s*=\s*/i, '')) - num(a)) < 1e-6;
        case 'pair': var p = nums(u), q = nums(a); return p.length === 2 && Math.abs(p[0] - q[0]) < 1e-6 && Math.abs(p[1] - q[1]) < 1e-6;
        case 'set': var s1 = nums(u).sort(function (x, y) { return x - y; }), s2 = nums(a).sort(function (x, y) { return x - y; }); return s1.length === s2.length && s1.every(function (v, i) { return Math.abs(v - s2[i]) < 1e-6; });
        case 'divr': var d1 = nums(u), d2 = nums(a); return d1.length === 2 && d1[0] === d2[0] && d1[1] === d2[1];
        case 'time': var t1 = u.match(/(\d{1,2})\s*[:h.]\s*(\d{2})/), t2 = a.match(/(\d{1,2}):(\d{2})/); return !!t1 && +t1[1] % 12 === +t2[1] % 12 && +t1[2] === +t2[2];
        case 'sci': var re = /(-?[\d.,]+)\s*[x×*·]\s*10\s*\^?\s*(-?\d+)/i, s3 = u.replace(/−/g, '-').match(re), s4 = a.replace(/−/g, '-').match(re); return !!s3 && Math.abs(num(s3[1]) - num(s4[1])) < 1e-9 && +s3[2] === +s4[2];
        case 'poly': var P = T.poly(u), Q = T.poly(a); if (!P || !Q) return false; var ks = Object.keys(P).concat(Object.keys(Q)); return ks.every(function (k) { return Math.abs((P[k] || 0) - (Q[k] || 0)) < 1e-9; });
        case 'opt': return u.toLowerCase() === a.toLowerCase();
        default: return textoN(u).replace(/pi/g, 'π') === textoN(a).replace(/pi/g, 'π');
      }
    });
  };
  /* comprueba todas las respuestas de un contenedor */
  T.comprobar = function (root) {
    var ok = 0, tot = 0;
    T.$$('.it', root).forEach(function (it) {
      var ins = T.$$('input.ans', it); if (!ins.length) return;
      var good = true;
      ins.forEach(function (i) { tot++; var r = T.check(i.value, i.dataset.a, i.dataset.k); i.classList.toggle('ok', r); i.classList.toggle('bad', !r); if (r) ok++; else good = false; });
      it.classList.toggle('ok', good); it.classList.toggle('bad', !good);
    });
    return { ok: ok, tot: tot };
  };
  T.input = function (a, k, w) { return '<input class="ans' + (w ? ' w' : '') + '" data-a="' + T.esc(a) + '" data-k="' + (k || 'num') + '" aria-label="respuesta" autocomplete="off" inputmode="' + (/num|aprox|peso1|x|divr/.test(k || 'num') ? 'decimal' : 'text') + '">'; };

  /* ---------- hoja imprimible ---------- */
  T.cabecera = function (titulo, sub, extra) {
    return '<div class="hhead"><div class="inst">COLEGIO CENTEC · SABI<small>' + T.esc(sub || '') + '</small></div>' +
      '<div class="datos">Nombre:<span></span><br>Fecha:<span style="min-width:80px"></span> Grado: <b>' + T.esc(T.gname(T.state.grado)) + '</b>' + (extra || '') + '</div></div>' +
      (titulo ? '<h2>' + titulo + '</h2>' : '');
  };
  T.semaforo = function () { return '<div class="semaforo"><b>¿Cómo me fue?</b><span><i style="background:#39b27a"></i>Lo entendí y puedo explicarlo</span><span><i style="background:#f2c641"></i>Necesito más práctica</span><span><i style="background:#e0634a"></i>Necesito ayuda</span></div>'; };
  T.pie = function (txt) { return '<div class="hfoot"><span>SABI CENTEC · Taller de Aula</span><span>' + T.esc(txt || '') + '</span></div>'; };
  T.barraHojas = function (opts) {
    opts = opts || {};
    return '<div class="tools no-print">' +
      '<button class="btn g" data-act="print">🖨 Imprimir / PDF</button>' +
      (opts.clave !== false ? '<label><input type="checkbox" data-act="clave" ' + (T.state.clave ? 'checked' : '') + '> Imprimir clave del docente</label>' : '') +
      (opts.comprobar ? '<button class="btn t" data-act="check">✓ Comprobar respuestas</button>' : '') +
      (opts.extra || '') + '<span class="muted" data-res></span></div>';
  };
  T.enlazarBarra = function (root) {
    T.$$('[data-act]', root).forEach(function (b) {
      var a = b.dataset.act;
      if (a === 'print') b.onclick = function () { T.aplicarClave(root); window.print(); };
      if (a === 'clave') b.onchange = function () { T.state.clave = b.checked; T.store('clave', b.checked); T.aplicarClave(root); };
      if (a === 'check') b.onclick = function () { var r = T.comprobar(root); var s = T.$('[data-res]', root); if (s) s.textContent = r.ok + ' de ' + r.tot + ' correctas' + (r.ok === r.tot && r.tot ? ' · ¡Excelente! 🎉' : ''); };
    });
    T.aplicarClave(root);
  };
  T.aplicarClave = function (root) { T.$$('.hoja.clave', root).forEach(function (h) { h.classList.toggle('oculta', !T.state.clave); }); };

  /* carga perezosa de datos */
  var cargados = {};
  T.cargar = function (archivo) {
    if (cargados[archivo]) return cargados[archivo];
    cargados[archivo] = new Promise(function (ok) {
      var s = document.createElement('script'); s.src = 'taller/data/' + archivo + '?v=' + (T.VERSION || '1');
      s.onload = function () { ok(true); }; s.onerror = function () { ok(false); };
      document.head.appendChild(s);
    });
    return cargados[archivo];
  };

  /* ---------- aplicación ---------- */
  T.state = { grado: T.store('grado') || '03', tab: 'inicio', clave: !!T.store('clave') };
  T.registrar = function (m) { T.mods.push(m); };
  T.ir = function (id) {
    T.state.tab = id; T.store('tab', id);
    if (location.hash !== '#' + id) history.replaceState(null, '', '#' + id);
    T.$$('#tabs button').forEach(function (b) { b.classList.toggle('on', b.dataset.id === id); });
    var m = T.mods.filter(function (x) { return x.id === id; })[0] || T.mods[0];
    var app = T.$('#app'); app.innerHTML = ''; m.render(app); window.scrollTo(0, 0);
  };
  T.iniciar = function () {
    T.VERSION = '2026.10.16';
    var sel = T.$('#grado');
    sel.innerHTML = T.GRADOS.map(function (g) { return '<option value="' + g[0] + '">' + g[1] + '</option>'; }).join('');
    sel.value = T.state.grado;
    sel.onchange = function () { T.state.grado = sel.value; T.store('grado', sel.value); T.ir(T.state.tab); };
    T.$('#tabs').innerHTML = T.mods.map(function (m) { return '<button type="button" data-id="' + m.id + '">' + m.icon + ' ' + m.label + '</button>'; }).join('');
    T.$$('#tabs button').forEach(function (b) { b.onclick = function () { T.ir(b.dataset.id); }; });
    var h = location.hash.slice(1);
    T.ir(T.mods.some(function (m) { return m.id === h; }) ? h : 'inicio');
    window.addEventListener('hashchange', function () { var x = location.hash.slice(1); if (x && x !== T.state.tab && T.mods.some(function (m) { return m.id === x; })) T.ir(x); });
  };
})();
