/* SABI Taller · Dot_Matematicas_Estrategica · generadores infinitos de fichas
   «Una buena ficha empieza con una buena idea»: gran idea → ejemplo resuelto → práctica graduada → reto → autoevaluación → clave.
   Cada ítem: { q: html con [[0]] [[1]]… donde van las respuestas, a: [respuestas], k: [tipo de verificación], sol: html } */
(function () {
  'use strict';
  var T = window.SABI_TALLER, M = T.mate = {}, esc = T.esc, fmt = T.fmt, peso = T.peso, sig = T.sig, F = T.fhtml;
  var TEMAS = M.TEMAS = { calculo: [], problemas: [], series: [], geometria: [], dinero: [], error: [] };
  M.TIPOS = [
    { id: 'calculo', n: 'Cálculo a medida', ic: '🧮', d: 'Operaciones graduadas por grado y dificultad' },
    { id: 'problemas', n: 'Problemas cotidianos', ic: '🛒', d: 'Situaciones reales de Cali y del aula' },
    { id: 'series', n: 'Series y patrones', ic: '🔢', d: 'Regularidades, reglas y término general' },
    { id: 'geometria', n: 'Geometría visual', ic: '📐', d: 'Figuras, áreas, ángulos y coordenadas' },
    { id: 'dinero', n: 'Dinero y cambio', ic: '💰', d: 'Pesos colombianos, vueltas y compras' },
    { id: 'error', n: 'Encuentra el error', ic: '🔍', d: 'Analiza soluciones con errores típicos' }
  ];
  function tema(tipo, d) { TEMAS[tipo].push(d); }
  function it(q, a, k, sol, w) { a = a == null ? [] : [].concat(a); k = [].concat(k || 'num'); while (k.length < a.length) k.push(k[k.length - 1]); return { q: q, a: a.map(String), k: k, sol: sol || '', w: w }; }
  var NOM = ['Valentina', 'Mateo', 'Sofía', 'Samuel', 'Isabella', 'Jerónimo', 'Mariana', 'Emiliano', 'Salomé', 'Thiago', 'Luciana', 'Juan José', 'Antonella', 'Santiago', 'Gabriela', 'Matías', 'Sara', 'Tomás'];
  var MINUS = '−';
  function rnd(r, n) { return n <= 1 ? r.int(1, 9) : r.int(Math.pow(10, n - 1), Math.pow(10, n) - 1); }
  function digs(x) { return String(x).split('').map(Number); }
  function sup(n) { return '<sup>' + n + '</sup>'; }
  function lin(a, b, v) { v = v || 'x'; var s = a === 1 ? v : a === -1 ? MINUS + v : fmt(a) + v; if (b) s += (b > 0 ? ' + ' : ' ' + MINUS + ' ') + fmt(Math.abs(b)); return s; }
  function term(c, v, first) { if (!c) return ''; var abs = Math.abs(c), cs = (abs === 1 && v) ? '' : fmt(abs); var s = (c < 0 ? (first ? MINUS : ' ' + MINUS + ' ') : (first ? '' : ' + ')) + cs + (v || ''); return s; }
  function polyStr(terms) { var out = '', first = true; terms.forEach(function (t) { if (!t[0]) return; out += term(t[0], t[1], first); first = false; }); return out || '0'; }
  function svg(w, h, body, extra) { return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" style="max-width:100%" ' + (extra || '') + ' xmlns="http://www.w3.org/2000/svg">' + body + '</svg>'; }
  var COL = ['#1D9E75', '#D4A843', '#1B7FA6', '#D85A30', '#7F77DD', '#0B1E3D'];

  /* ---------- dibujos: marco de diez ---------- */
  function marco(n, color, tachar) {
    var s = '';
    for (var i = 0; i < 10; i++) {
      var x = 4 + (i % 5) * 26, y = 4 + Math.floor(i / 5) * 26;
      s += '<rect x="' + x + '" y="' + y + '" width="24" height="24" fill="#fff" stroke="#8a8f99"/>';
      if (i < n) {
        s += '<circle cx="' + (x + 12) + '" cy="' + (y + 12) + '" r="9" fill="' + color + '"/>';
        if (tachar && i >= n - tachar) s += '<path d="M' + (x + 4) + ' ' + (y + 4) + 'L' + (x + 20) + ' ' + (y + 20) + 'M' + (x + 20) + ' ' + (y + 4) + 'L' + (x + 4) + ' ' + (y + 20) + '" stroke="#C2492E" stroke-width="3"/>';
      }
    }
    return svg(138, 60, s, 'style="vertical-align:middle;max-width:100%"');
  }
  function vert(nums, op, ansIdx) {
    var w = Math.max.apply(null, nums.map(function (x) { return String(x).length; })) + 2, out = '<div class="vert">';
    nums.forEach(function (x, i) { var s = String(x); out += '<div>' + (i === nums.length - 1 ? op + ' ' : '  ') + ' '.repeat(Math.max(0, w - 2 - s.length)) + s + '</div>'; });
    return out + '<div class="ln"></div>[[' + (ansIdx || 0) + ']]</div>';
  }
  function gradoNd(g) { return [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6][g]; }

  /* =================== CÁLCULO A MEDIDA =================== */
  tema('calculo', { id: 'dsuma', n: 'Sumas con marcos de diez', g: [0, 1], cols: 2, idea: 'Sumar es <b>juntar</b> dos grupos y contar cuántos hay en total. El marco de diez nos ayuda a ver cuánto falta para llegar a 10.',
    gen: function (r, dif) { var max = dif === 1 ? 5 : 10, a = r.int(1, max - 1), b = r.int(1, max - a); return it('<div class="row">' + marco(a, COL[0]) + '<b style="font-size:22px">+</b>' + marco(b, COL[1]) + '<b style="font-size:22px">=</b> [[0]]</div>', a + b, 'num', a + ' + ' + b + ' = <b>' + (a + b) + '</b>. Contamos todos los puntos juntos.'); } });
  tema('calculo', { id: 'dresta', n: 'Restas con marcos de diez', g: [0, 1], cols: 2, idea: 'Restar es <b>quitar</b>: empezamos con un grupo, tachamos los que se van y contamos los que quedan.',
    gen: function (r, dif) { var a = r.int(dif === 1 ? 3 : 5, dif === 1 ? 6 : 10), b = r.int(1, a - 1); return it('<div class="row">' + marco(a, COL[2], b) + '<b style="font-size:20px">' + a + ' ' + MINUS + ' ' + b + ' =</b> [[0]]</div>', a - b, 'num', a + ' ' + MINUS + ' ' + b + ' = <b>' + (a - b) + '</b>. Quedan los puntos sin tachar.'); } });
  tema('calculo', { id: 'suma', n: 'Suma (con y sin llevar)', g: [1, 6], cols: 2, opciones: ['llevar', 'formato'], idea: 'Sumamos por columnas de derecha a izquierda: unidades con unidades, decenas con decenas. Si una columna llega a 10 o más, formamos una decena (o centena…) y la <b>llevamos</b> a la columna siguiente.',
    gen: function (r, dif, g, o) {
      var n = Math.max(1, gradoNd(g) - (dif === 1 ? 1 : 0)), modo = (o && o.llevar && o.llevar !== 'auto') ? o.llevar : (dif === 1 ? 'sin' : 'con');
      var k = (dif === 3 && g >= 2) ? 3 : 2, ns, t = 0;
      do {
        ns = [];
        if (modo === 'sin' && k === 2) { var A = '', B = ''; for (var i = 0; i < n; i++) { var x = r.int(i === 0 ? 1 : 0, 8), y = r.int(i === 0 ? 1 : 0, 9 - x); A += x; B += y; } ns = [+A, +B]; }
        else for (var j = 0; j < k; j++) ns.push(rnd(r, j ? Math.max(1, n - r.int(0, 1)) : n));
        var hay = false, c = 0, L = Math.max.apply(null, ns.map(function (v) { return String(v).length; }));
        for (var p = 0; p < L; p++) { var sum = c; ns.forEach(function (v) { sum += Math.floor(v / Math.pow(10, p)) % 10; }); if (sum >= 10) hay = true; c = Math.floor(sum / 10); }
        t++;
      } while (t < 60 && ((modo === 'con' && !hay) || (modo === 'sin' && hay)));
      var s = ns.reduce(function (a, b) { return a + b; }, 0), v = !(o && o.formato === 'horizontal') && g <= 5;
      return it(v ? vert(ns, '+') : ns.map(fmt).join(' + ') + ' = [[0]]', s, 'num', ns.map(fmt).join(' + ') + ' = <b>' + fmt(s) + '</b>' + (modo === 'con' ? ' (con llevadas)' : ''), v);
    } });
  tema('calculo', { id: 'resta', n: 'Resta (con y sin prestar)', g: [1, 6], cols: 2, opciones: ['llevar', 'formato'], idea: 'Restamos por columnas de derecha a izquierda. Si arriba hay menos que abajo, <b>desagrupamos</b>: pedimos una decena a la columna vecina y la convertimos en 10 unidades. Comprobamos sumando: resta + sustraendo = minuendo.',
    gen: function (r, dif, g, o) {
      var n = Math.max(2, gradoNd(g) - (dif === 1 ? 1 : 0)), modo = (o && o.llevar && o.llevar !== 'auto') ? o.llevar : (dif === 1 ? 'sin' : 'con'), a, b, t = 0;
      if (n < 2) n = 2;
      do {
        if (modo === 'sin') { var A = '', B = ''; for (var i = 0; i < n; i++) { var x = r.int(i === 0 ? 2 : 0, 9), y = r.int(i === 0 ? 1 : 0, i === 0 ? x - 1 : x); A += x; B += y; } a = +A; b = +B; }
        else if (dif === 3) { var s = String(r.int(1, 9)); for (var z = 1; z < n; z++) s += (z < n - 1 && r.chance(0.7)) ? '0' : String(r.int(0, 9)); a = +s; b = rnd(r, n - 1) ; }
        else { a = rnd(r, n); b = rnd(r, r.chance(0.5) ? n : n - 1); }
        var pres = false; for (var p = 0; p < n; p++) { if (Math.floor(a / Math.pow(10, p)) % 10 < Math.floor(b / Math.pow(10, p)) % 10) pres = true; }
        t++;
      } while (t < 80 && (a <= b || (modo === 'con' && !pres) || (modo === 'sin' && pres)));
      var v = !(o && o.formato === 'horizontal') && g <= 5;
      return it(v ? vert([a, b], MINUS) : fmt(a) + ' ' + MINUS + ' ' + fmt(b) + ' = [[0]]', a - b, 'num', fmt(a) + ' ' + MINUS + ' ' + fmt(b) + ' = <b>' + fmt(a - b) + '</b>. Comprobación: ' + fmt(a - b) + ' + ' + fmt(b) + ' = ' + fmt(a), v);
    } });
  tema('calculo', { id: 'tablas', n: 'Tablas de multiplicar', g: [2, 5], cols: 3, idea: 'Multiplicar es <b>sumar grupos iguales</b>: 4 × 3 son 4 grupos de 3. El orden de los factores no cambia el producto (4 × 3 = 3 × 4).',
    gen: function (r, dif, g) {
      var tb = g <= 2 ? [2, 3, 4, 5, 10] : [2, 3, 4, 5, 6, 7, 8, 9], a = r.pick(tb), b = r.int(1, 10);
      if (dif === 3) return r.chance(0.5) ? it(a + ' × [[0]] = ' + a * b, b, 'num', a + ' × <b>' + b + '</b> = ' + a * b + ' porque ' + a * b + ' ÷ ' + a + ' = ' + b) : it('[[0]] × ' + b + ' = ' + a * b, a, 'num', '<b>' + a + '</b> × ' + b + ' = ' + a * b);
      if (dif === 2) { a = r.int(2, 9); }
      return it(a + ' × ' + b + ' = [[0]]', a * b, 'num', a + ' × ' + b + ' = <b>' + a * b + '</b> (' + a + ' grupos de ' + b + ')');
    } });
  tema('calculo', { id: 'mult', n: 'Multiplicación de varias cifras', g: [3, 7], cols: 2, opciones: ['formato'], idea: 'Multiplicamos el primer factor por cada cifra del segundo. Cada producto parcial se corre un lugar a la izquierda porque esa cifra vale decenas, centenas… Al final sumamos los parciales.',
    gen: function (r, dif, g, o) {
      var n1 = dif === 1 ? (g <= 3 ? 2 : 3) : dif === 2 ? 3 : 4, n2 = dif === 1 ? 1 : 2; if (dif === 3 && g >= 6) n2 = 3;
      var a = rnd(r, n1), b = rnd(r, n2); if (b < 2) b = r.int(2, 9);
      var v = !(o && o.formato === 'horizontal') && g <= 6;
      return it(v ? vert([a, b], '×') : fmt(a) + ' × ' + fmt(b) + ' = [[0]]', a * b, 'num', fmt(a) + ' × ' + fmt(b) + ' = <b>' + fmt(a * b) + '</b>', v);
    } });
  tema('calculo', { id: 'div', n: 'División (exacta y con residuo)', g: [3, 7], cols: 2, idea: 'Dividir es <b>repartir en partes iguales</b> o averiguar cuántas veces cabe un número en otro. Se comprueba así: divisor × cociente + residuo = dividendo, y el residuo siempre es menor que el divisor.',
    gen: function (r, dif, g) {
      var d, q, res = 0;
      if (dif === 1) { d = r.int(2, 9); q = r.int(g <= 3 ? 2 : 11, g <= 3 ? 10 : 99); }
      else if (dif === 2) { d = r.int(2, 9); q = r.int(12, g <= 4 ? 199 : 999); res = r.int(0, d - 1); }
      else { d = r.int(11, 35); q = r.int(12, 250); res = r.int(0, d - 1); }
      var D = d * q + res;
      if (dif === 1) return it(fmt(D) + ' ÷ ' + d + ' = [[0]]', q, 'num', fmt(D) + ' ÷ ' + d + ' = <b>' + fmt(q) + '</b> porque ' + d + ' × ' + fmt(q) + ' = ' + fmt(D));
      return it(fmt(D) + ' ÷ ' + d + ' → cociente [[0]] residuo [[1]]', [q, res], 'num', 'Cociente <b>' + fmt(q) + '</b>, residuo <b>' + res + '</b>. Comprobación: ' + d + ' × ' + fmt(q) + ' + ' + res + ' = ' + fmt(D));
    } });
  tema('calculo', { id: 'fequiv', n: 'Fracciones equivalentes y simplificación', g: [3, 7], cols: 2, idea: 'Dos fracciones son <b>equivalentes</b> si representan la misma parte del todo. Se obtienen multiplicando o dividiendo numerador y denominador por el mismo número. Simplificar es dividir ambos por su máximo común divisor.',
    gen: function (r, dif) {
      var b = r.int(2, 9), a = r.int(1, b - 1); var gg = T.gcd(a, b); a /= gg; b /= gg; var k = r.int(2, 6);
      if (dif === 1) return it(F(a, b) + ' = ' + F('[[0]]', b * k), a * k, 'num', F(a, b) + ' = ' + F(a * k, b * k) + ': multiplicamos arriba y abajo por ' + k);
      if (dif === 2) return it(F(a, b) + ' = ' + F(a * k, '[[0]]'), b * k, 'num', 'Como ' + a + ' × ' + k + ' = ' + a * k + ', el denominador es ' + b + ' × ' + k + ' = <b>' + b * k + '</b>');
      return it('Simplifica: ' + F(a * k, b * k) + ' = [[0]]', a + '/' + b, 'fracs', 'MCD(' + a * k + ', ' + b * k + ') = ' + T.gcd(a * k, b * k) + ' → <b>' + a + '/' + b + '</b> (fracción irreducible)');
    } });
  tema('calculo', { id: 'fsuma', n: 'Suma y resta de fracciones', g: [4, 8], cols: 2, idea: 'Solo se suman partes del mismo tamaño: si los denominadores son iguales, sumamos numeradores. Si son distintos, primero buscamos fracciones equivalentes con un <b>denominador común</b> (el mínimo común múltiplo).',
    gen: function (r, dif, g) {
      var b, d; if (dif === 1) { b = d = r.int(3, 12); } else if (dif === 2) { b = r.int(2, 6); d = b * r.int(2, 3); } else { do { b = r.int(2, 9); d = r.int(2, 9); } while (b === d || T.gcd(b, d) !== 1); }
      var a = r.int(1, b - 1), c = r.int(1, d - 1), op = r.chance(0.5) ? '+' : MINUS;
      if (op === MINUS && a / b < c / d && g < 7) { var t1 = a, t2 = b; a = c; b = d; c = t1; d = t2; }
      var m = T.lcm(b, d), num = op === '+' ? a * (m / b) + c * (m / d) : a * (m / b) - c * (m / d), f = T.frac(num, m);
      return it(F(a, b) + ' ' + op + ' ' + F(c, d) + ' = [[0]]', T.fstr(f), 'frac', (b !== d ? 'Denominador común ' + m + ': ' + F(a * m / b, m) + ' ' + op + ' ' + F(c * m / d, m) + ' = ' : '') + F(num, m) + (f.d !== m ? ' = ' + F(f.n, f.d) : '') + ' → <b>' + T.fstr(f) + '</b>');
    } });
  tema('calculo', { id: 'fmult', n: 'Multiplicación y división de fracciones', g: [5, 9], cols: 2, idea: 'Para multiplicar fracciones multiplicamos numeradores entre sí y denominadores entre sí. Dividir es multiplicar por el <b>inverso</b> de la segunda fracción. Al final simplificamos.',
    gen: function (r, dif) {
      var a = r.int(1, 9), b = r.int(2, 9), c = r.int(1, 9), d = r.int(2, 9), div = dif >= 2 && r.chance(0.5);
      var f = div ? T.frac(a * d, b * c) : T.frac(a * c, b * d);
      return it(F(a, b) + (div ? ' ÷ ' : ' × ') + F(c, d) + ' = [[0]]', T.fstr(f), 'frac', (div ? F(a, b) + ' × ' + F(d, c) + ' = ' + F(a * d, b * c) : F(a * c, b * d)) + ' → <b>' + T.fstr(f) + '</b>');
    } });
  tema('calculo', { id: 'decimales', n: 'Operaciones con decimales', g: [4, 8], cols: 2, idea: 'Al sumar o restar decimales alineamos la <b>coma</b>: décimas con décimas, centésimas con centésimas. Multiplicar por 10, 100 o 1.000 corre la coma 1, 2 o 3 lugares a la derecha.',
    gen: function (r, dif) {
      function D(n, d) { return fmt(n / Math.pow(10, d), d); }
      if (dif === 3) {
        if (r.chance(0.5)) { var x = r.int(11, 999), dx = r.int(1, 2), p = r.pick([10, 100, 1000]), res = x * p / Math.pow(10, dx); return it(D(x, dx) + ' × ' + fmt(p) + ' = [[0]]', fmt(res), 'num', 'La coma se corre ' + String(p).length - 1 + ' lugares: <b>' + fmt(res) + '</b>'); }
        var y = r.int(11, 99), k = r.int(2, 9); return it(D(y, 1) + ' × ' + k + ' = [[0]]', fmt(y * k / 10, 1), 'num', y + ' × ' + k + ' = ' + y * k + ' y dejamos 1 decimal: <b>' + fmt(y * k / 10, 1) + '</b>');
      }
      var d1 = dif === 1 ? 1 : r.int(1, 2), d2 = dif === 1 ? 1 : r.int(1, 2), a = r.int(10, 999), b = r.int(10, 999), op = dif === 1 || r.chance(0.5) ? '+' : MINUS;
      var md = Math.max(d1, d2), A = a * Math.pow(10, md - d1), B = b * Math.pow(10, md - d2);
      if (op === MINUS && A < B) { var t = A; A = B; B = t; t = a; a = b; b = t; t = d1; d1 = d2; d2 = t; }
      var R = op === '+' ? A + B : A - B;
      return it(D(a, d1) + ' ' + op + ' ' + D(b, d2) + ' = [[0]]', fmt(R / Math.pow(10, md), md), 'num', 'Alineamos la coma: <b>' + fmt(R / Math.pow(10, md), md) + '</b>');
    } });
  tema('calculo', { id: 'jerarquia', n: 'Jerarquía de operaciones', g: [5, 9], cols: 2, idea: 'El orden importa: primero lo que está entre <b>paréntesis</b>, luego <b>potencias y raíces</b>, después <b>multiplicaciones y divisiones</b> (de izquierda a derecha) y al final <b>sumas y restas</b>.',
    gen: function (r, dif) {
      var a = r.int(2, 12), b = r.int(2, 9), c = r.int(2, 9), d = r.int(2, 9), opc = dif === 1 ? r.int(0, 2) : dif === 2 ? r.int(2, 5) : r.int(4, 7), e, v, s;
      switch (opc) {
        case 0: e = a + ' + ' + b + ' × ' + c; v = a + b * c; s = b + ' × ' + c + ' = ' + b * c + '; ' + a + ' + ' + b * c; break;
        case 1: a = r.int(b * c + 1, b * c + 30); e = a + ' ' + MINUS + ' ' + b + ' × ' + c; v = a - b * c; s = b + ' × ' + c + ' = ' + b * c + '; ' + a + ' ' + MINUS + ' ' + b * c; break;
        case 2: e = '(' + a + ' + ' + b + ') × ' + c; v = (a + b) * c; s = a + ' + ' + b + ' = ' + (a + b) + '; ' + (a + b) + ' × ' + c; break;
        case 3: var q = r.int(2, 9); b = q * c; a = r.int(q + 1, q + 25); e = a + ' ' + MINUS + ' ' + b + ' ÷ ' + c; v = a - q; s = b + ' ÷ ' + c + ' = ' + q + '; ' + a + ' ' + MINUS + ' ' + q; break;
        case 4: b = r.int(c + 1, c + 8); e = a + ' × (' + b + ' ' + MINUS + ' ' + c + ') + ' + d; v = a * (b - c) + d; s = b + ' ' + MINUS + ' ' + c + ' = ' + (b - c) + '; ' + a + ' × ' + (b - c) + ' = ' + a * (b - c) + '; + ' + d; break;
        case 5: e = a + ' × ' + b + ' ' + MINUS + ' ' + c + ' × ' + d; if (a * b < c * d) { var t = a; a = c; c = t; t = b; b = d; d = t; e = a + ' × ' + b + ' ' + MINUS + ' ' + c + ' × ' + d; } v = a * b - c * d; s = a * b + ' ' + MINUS + ' ' + c * d; break;
        case 6: a = r.int(2, 9); e = a + sup(2) + ' + ' + b + ' × ' + c; v = a * a + b * c; s = a + sup(2) + ' = ' + a * a + '; ' + b + ' × ' + c + ' = ' + b * c; break;
        default: a = r.int(1, 6); b = r.int(1, 5); c = r.int(1, (a + b) * (a + b) - 1); e = '(' + a + ' + ' + b + ')' + sup(2) + ' ' + MINUS + ' ' + c; v = (a + b) * (a + b) - c; s = (a + b) + sup(2) + ' = ' + (a + b) * (a + b) + '; ' + MINUS + ' ' + c;
      }
      return it(e + ' = [[0]]', v, 'num', s + ' = <b>' + fmt(v) + '</b>');
    } });
  tema('calculo', { id: 'potencias', n: 'Potencias y raíces', g: [5, 10], cols: 3, idea: 'Una <b>potencia</b> es una multiplicación repetida: 2' + sup(3) + ' = 2 × 2 × 2 = 8 (¡no 2 × 3!). La <b>raíz</b> es la operación inversa: √49 = 7 porque 7' + sup(2) + ' = 49.',
    gen: function (r, dif) {
      if (dif === 1) { var a = r.int(2, 10), n = a <= 5 ? r.int(2, 3) : 2; return it(a + sup(n) + ' = [[0]]', Math.pow(a, n), 'num', Array(n).fill(a).join(' × ') + ' = <b>' + Math.pow(a, n) + '</b>'); }
      if (dif === 2) { if (r.chance(0.6)) { var b = r.int(2, 20); return it('√' + b * b + ' = [[0]]', b, 'num', b + sup(2) + ' = ' + b * b + ' → <b>' + b + '</b>'); } var e = r.int(2, 6); return it('10' + sup(e) + ' = [[0]]', Math.pow(10, e), 'num', '1 seguido de ' + e + ' ceros: <b>' + fmt(Math.pow(10, e)) + '</b>'); }
      var c = r.int(2, 6), x = r.int(2, 9), y = r.int(2, 5); if (r.chance(0.5)) return it('∛' + c * c * c + ' = [[0]]', c, 'num', c + sup(3) + ' = ' + c * c * c + ' → <b>' + c + '</b>');
      return it(y + sup(3) + ' + √' + x * x + ' ' + MINUS + ' ' + r.int(2, 9) + sup(0) + ' = [[0]]', y * y * y + x - 1, 'num', y * y * y + ' + ' + x + ' ' + MINUS + ' 1 = <b>' + (y * y * y + x - 1) + '</b> (todo número distinto de 0 elevado a 0 es 1)');
    } });
  tema('calculo', { id: 'mcd', n: 'MCD y mcm', g: [5, 8], cols: 2, idea: 'El <b>máximo común divisor</b> (MCD) es el mayor número que divide a ambos; sirve para repartir en grupos iguales lo más grandes posible. El <b>mínimo común múltiplo</b> (mcm) es el menor múltiplo compartido; sirve para saber cuándo coinciden dos ciclos.',
    gen: function (r, dif) {
      var g = r.int(2, 12), m, n; do { m = r.int(2, 9); n = r.int(2, 9); } while (m === n || T.gcd(m, n) !== 1);
      var a = g * m, b = g * n, M2 = a * b / g;
      if (dif === 1) return it('MCD(' + a + ', ' + b + ') = [[0]]', g, 'num', '<b>' + g + '</b>: ' + a + ' = ' + g + ' × ' + m + ' y ' + b + ' = ' + g + ' × ' + n);
      if (dif === 2) return it('mcm(' + a + ', ' + b + ') = [[0]]', M2, 'num', 'mcm = ' + a + ' × ' + b + ' ÷ MCD = ' + a * b + ' ÷ ' + g + ' = <b>' + M2 + '</b>');
      return it(a + ' y ' + b + ': MCD [[0]] · mcm [[1]]', [g, M2], 'num', 'MCD <b>' + g + '</b>, mcm <b>' + M2 + '</b>. Verifica: MCD × mcm = ' + a + ' × ' + b);
    } });
  tema('calculo', { id: 'enteros', n: 'Números enteros', g: [6, 9], cols: 2, idea: 'En la recta numérica, sumar un positivo es avanzar y sumar un negativo es retroceder. Restar es <b>sumar el opuesto</b>: a − (−b) = a + b. En la multiplicación, signos iguales dan + y signos distintos dan −.',
    gen: function (r, dif) {
      function z() { var v = 0; while (!v) v = r.int(-20, 20); return v; }
      var a = z(), b = z();
      if (dif === 1) return it(sig(a) + ' + ' + sig(b) + ' = [[0]]', a + b, 'num', '<b>' + fmt(a + b) + '</b>');
      if (dif === 2) { if (r.chance(0.5)) return it(sig(a) + ' ' + MINUS + ' ' + sig(b) + ' = [[0]]', a - b, 'num', sig(a) + ' + ' + sig(-b) + ' = <b>' + fmt(a - b) + '</b> (sumamos el opuesto)'); a = r.int(-12, 12) || 3; b = r.int(-12, 12) || -4; return it(sig(a) + ' × ' + sig(b) + ' = [[0]]', a * b, 'num', '<b>' + fmt(a * b) + '</b> (' + (a * b >= 0 ? 'signos iguales: +' : 'signos distintos: −') + ')'); }
      var c = r.int(2, 9) * r.sign(), q = r.int(2, 9) * r.sign(), d = c * q, x = r.int(2, 9) * r.sign(), y = r.int(2, 9) * r.sign(), v = x * y - d / c;
      return it(sig(x) + ' × ' + sig(y) + ' ' + MINUS + ' ' + sig(d) + ' ÷ ' + sig(c) + ' = [[0]]', v, 'num', fmt(x * y) + ' ' + MINUS + ' ' + sig(d / c) + ' = <b>' + fmt(v) + '</b>');
    } });
  tema('calculo', { id: 'porcentaje', n: 'Porcentajes', g: [5, 10], cols: 2, idea: 'Un porcentaje es una fracción con denominador 100: 25 % = 25/100 = 1/4. Para hallar el p % de una cantidad, multiplicamos la cantidad por p y dividimos entre 100.',
    gen: function (r, dif) {
      var N = r.int(1, 25) * 20, p = dif === 1 ? r.pick([10, 50, 25, 20]) : r.pick([5, 15, 30, 40, 60, 75, 80]), v = p * N / 100;
      if (dif === 3) return it('¿Qué porcentaje de ' + fmt(N) + ' es ' + fmt(v) + '? [[0]] %', p, 'num', fmt(v) + ' ÷ ' + fmt(N) + ' × 100 = <b>' + p + ' %</b>');
      return it(p + ' % de ' + fmt(N) + ' = [[0]]', v, 'num', fmt(N) + ' × ' + p + ' ÷ 100 = <b>' + fmt(v) + '</b>');
    } });
  tema('calculo', { id: 'ecuacion', n: 'Ecuaciones de primer grado', g: [6, 11], cols: 2, idea: 'Una ecuación es una <b>balanza en equilibrio</b>: lo que hagas a un lado debes hacerlo al otro. Despejamos la incógnita con operaciones inversas y comprobamos reemplazando.',
    gen: function (r, dif, g) {
      var x = g >= 7 ? r.int(-10, 12) : r.int(1, 12), a, b, c, d;
      if (dif === 1) { if (r.chance(0.5)) { b = r.int(2, 30); return it('x + ' + b + ' = ' + (x + b) + ' → x = [[0]]', x, 'x', 'x = ' + (x + b) + ' ' + MINUS + ' ' + b + ' = <b>' + x + '</b>'); } a = r.int(2, 9); return it(a + 'x = ' + fmt(a * x) + ' → x = [[0]]', x, 'x', 'x = ' + fmt(a * x) + ' ÷ ' + a + ' = <b>' + fmt(x) + '</b>'); }
      if (dif === 2) { a = r.int(2, 9); b = r.int(-15, 15) || 4; c = a * x + b; return it(lin(a, b) + ' = ' + fmt(c) + ' → x = [[0]]', x, 'x', a + 'x = ' + fmt(c) + ' ' + (b > 0 ? MINUS : '+') + ' ' + Math.abs(b) + ' = ' + fmt(c - b) + '; x = <b>' + fmt(x) + '</b>'); }
      if (r.chance(0.5)) { do { a = r.int(2, 9); c = r.int(1, 8); } while (a === c); b = r.int(-12, 12); d = a * x + b - c * x; return it(lin(a, b) + ' = ' + lin(c, d) + ' → x = [[0]]', x, 'x', (a - c) + 'x = ' + fmt(d - b) + '; x = <b>' + fmt(x) + '</b>'); }
      a = r.int(2, 6); b = r.int(-6, 6) || 2; return it(a + '(' + lin(1, b) + ') = ' + fmt(a * (x + b)) + ' → x = [[0]]', x, 'x', lin(1, b) + ' = ' + fmt(x + b) + '; x = <b>' + fmt(x) + '</b>');
    } });
  tema('calculo', { id: 'valor', n: 'Valor numérico de expresiones', g: [7, 10], cols: 2, idea: 'Para hallar el valor numérico reemplazamos cada letra por su valor <b>entre paréntesis</b> (sobre todo si es negativo) y respetamos la jerarquía de operaciones.',
    gen: function (r, dif) {
      var x = r.int(-4, 5) || 2, y = r.int(-4, 5) || -1, T5 = [
        ['2x + 3', function () { return 2 * x + 3; }], ['x' + sup(2) + ' ' + MINUS + ' 4x', function () { return x * x - 4 * x; }], ['3x' + sup(2) + ' ' + MINUS + ' 2y', function () { return 3 * x * x - 2 * y; }],
        ['(x + y)' + sup(2), function () { return (x + y) * (x + y); }], ['x' + sup(3) + ' ' + MINUS + ' y', function () { return x * x * x - y; }], ['2xy + y' + sup(2), function () { return 2 * x * y + y * y; }]];
      var t = T5[dif === 1 ? r.int(0, 1) : dif === 2 ? r.int(1, 3) : r.int(3, 5)], v = t[1]();
      return it('Si x = ' + fmt(x) + ' y y = ' + fmt(y) + ': ' + t[0] + ' = [[0]]', v, 'num', 'Reemplazando x = (' + fmt(x) + '), y = (' + fmt(y) + '): <b>' + fmt(v) + '</b>');
    } });
  tema('calculo', { id: 'terminos', n: 'Reducción de términos semejantes', g: [7, 9], cols: 2, idea: 'Solo se suman o restan <b>términos semejantes</b>: los que tienen la misma parte literal con los mismos exponentes. 3x + 2x = 5x, pero 3x + 2y no se puede reducir.',
    gen: function (r, dif) {
      var vars = dif === 1 ? ['x', ''] : dif === 2 ? ['x', 'y', ''] : ['x²', 'x', ''], terms = [], tot = {};
      vars.forEach(function (v) { tot[v] = 0; });
      var nt = dif === 1 ? 4 : 5; for (var i = 0; i < nt; i++) { var v = vars[i % vars.length], c = (r.int(1, 9)) * r.sign(); terms.push([c, v]); tot[v] += c; }
      terms = r.shuffle(terms); var ans = polyStr(vars.map(function (v) { return [tot[v], v]; }));
      return it(polyStr(terms) + ' = [[0]]', ans.replace(/²/g, '^2'), 'poly', 'Agrupamos semejantes: <b>' + ans + '</b>', true);
    } });
  tema('calculo', { id: 'sistemas', n: 'Sistemas de ecuaciones 2×2', g: [8, 11], cols: 1, idea: 'Resolver un sistema es encontrar el par (x, y) que cumple <b>las dos</b> ecuaciones a la vez: el punto donde se cortan las dos rectas. Métodos: sustitución, igualación, reducción.',
    gen: function (r, dif) {
      var x = r.int(-6, 8), y = r.int(-6, 8), a1, b1, a2, b2;
      if (dif === 1) { a1 = 1; b1 = 1; a2 = 1; b2 = -1; } else { do { a1 = r.int(-5, 6) || 2; b1 = r.int(-5, 6) || 1; a2 = r.int(-5, 6) || 3; b2 = r.int(-5, 6) || -1; } while (a1 * b2 - a2 * b1 === 0); }
      function eq(a, b) { return polyStr([[a, 'x'], [b, 'y']]) + ' = ' + fmt(a * x + b * y); }
      return it('{ ' + eq(a1, b1) + ' ;&nbsp; ' + eq(a2, b2) + ' } → x = [[0]] · y = [[1]]', [x, y], 'num', 'Solución <b>(' + fmt(x) + ', ' + fmt(y) + ')</b>. Comprueba en ambas ecuaciones.');
    } });
  tema('calculo', { id: 'cuadratica', n: 'Ecuaciones cuadráticas', g: [9, 11], cols: 2, idea: 'Si un producto vale cero, uno de los factores es cero: (x − 2)(x − 3) = 0 ⇒ x = 2 o x = 3. Por eso factorizamos. Si no se puede, usamos la fórmula general x = (−b ± √(b² − 4ac)) / 2a.',
    gen: function (r, dif) {
      var r1 = dif === 1 ? r.int(1, 9) : r.int(-9, 9), r2 = dif === 1 ? r.int(1, 9) : r.int(-9, 9), a = dif === 3 ? r.int(2, 3) : 1;
      var b = -a * (r1 + r2), c = a * r1 * r2, e = polyStr([[a, 'x²'], [b, 'x'], [c, '']]) + ' = 0';
      return it(e + ' → x = [[0]]', r1 === r2 ? String(r1) : r1 + ', ' + r2, 'set', (a > 1 ? a : '') + '(x ' + (r1 < 0 ? '+ ' + -r1 : MINUS + ' ' + r1) + ')(x ' + (r2 < 0 ? '+ ' + -r2 : MINUS + ' ' + r2) + ') = 0 → <b>x = ' + fmt(r1) + (r1 !== r2 ? ' o x = ' + fmt(r2) : '') + '</b>', true);
    } });
  tema('calculo', { id: 'cientifica', n: 'Notación científica', g: [7, 11], cols: 2, idea: 'La notación científica escribe un número como <b>a × 10ⁿ</b>, con 1 ≤ a < 10. Sirve para manejar cantidades enormes (distancias en el universo) o diminutas (tamaño de una célula).',
    gen: function (r, dif) {
      var m = r.int(11, 99), e;
      if (dif === 1) { e = r.int(3, 9); var N = m * Math.pow(10, e - 1); return it(fmt(N) + ' = [[0]]', fmt(m / 10) + ' × 10^' + e, 'sci', '<b>' + fmt(m / 10) + ' × 10' + sup(e) + '</b>', true); }
      if (dif === 2) { e = r.int(2, 7); var s = '0,' + '0'.repeat(e - 1) + String(m); return it(s + ' = [[0]]', fmt(m / 10) + ' × 10^' + (-e), 'sci', '<b>' + fmt(m / 10) + ' × 10' + sup(MINUS + e) + '</b>', true); }
      var a = r.int(2, 9), b = r.int(2, 9), p = r.int(2, 8), q = r.int(-5, 8), pr = a * b, ex = p + q; if (pr >= 10) { ex += 1; }
      return it('(' + a + ' × 10' + sup(p) + ') × (' + b + ' × 10' + sup(q) + ') = [[0]]', fmt(pr >= 10 ? pr / 10 : pr) + ' × 10^' + ex, 'sci', a * b + ' × 10' + sup(p + q) + ' = <b>' + fmt(pr >= 10 ? pr / 10 : pr) + ' × 10' + sup(ex) + '</b>', true);
    } });
  tema('calculo', { id: 'trig', n: 'Razones trigonométricas', g: [9, 11], cols: 2, idea: 'En un triángulo rectángulo: <b>sen</b> = opuesto/hipotenusa, <b>cos</b> = adyacente/hipotenusa, <b>tan</b> = opuesto/adyacente (SOH-CAH-TOA). Dependen solo del ángulo, no del tamaño del triángulo.',
    gen: function (r, dif) {
      var tr = r.pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]]), k = r.int(1, 2), A = tr[0] * k, B = tr[1] * k, C = tr[2] * k;
      if (r.chance(0.5)) { var t = A; A = B; B = t; }
      var fn = dif === 1 ? r.pick(['sen', 'cos']) : dif === 2 ? 'tan' : r.pick(['sen', 'cos', 'tan']), ang = dif === 3 ? 'B' : 'A';
      var op = ang === 'A' ? A : B, ad = ang === 'A' ? B : A, f = fn === 'sen' ? T.frac(op, C) : fn === 'cos' ? T.frac(ad, C) : T.frac(op, ad);
      var dib = svg(200, 120, '<path d="M20 100 L180 100 L180 20 Z" fill="#EAF6F1" stroke="#0B1E3D" stroke-width="2"/><rect x="168" y="88" width="12" height="12" fill="none" stroke="#0B1E3D"/><text x="10" y="112" font-size="13" font-weight="700">A</text><text x="184" y="16" font-size="13" font-weight="700">B</text><text x="184" y="112" font-size="13" font-weight="700">C</text><text x="100" y="116" font-size="13" text-anchor="middle">' + B + '</text><text x="188" y="64" font-size="13">' + A + '</text><text x="88" y="52" font-size="13" text-anchor="end">' + C + '</text>');
      return it('<div class="row">' + dib + '<span>' + fn + ' ' + ang + ' = [[0]]</span></div>', T.fstr(f), 'frac', fn + ' ' + ang + ' = ' + (fn === 'sen' ? op + '/' + C : fn === 'cos' ? ad + '/' + C : op + '/' + ad) + ' = <b>' + T.fstr(f) + '</b>');
    } });
  tema('calculo', { id: 'radianes', n: 'Grados y radianes', g: [10, 11], cols: 3, idea: 'Una vuelta completa mide 360° = 2π radianes, así que <b>180° = π rad</b>. Para pasar de grados a radianes multiplicamos por π/180.',
    gen: function (r, dif) {
      var g = r.pick([30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360]), f = T.frac(g, 180);
      var rad = (f.n === 1 ? '' : f.n) + 'π' + (f.d === 1 ? '' : '/' + f.d), alt = rad + '|' + rad.replace('π', 'pi');
      if (dif >= 2 && r.chance(0.5)) return it(rad + ' rad = [[0]] °', g, 'num', rad + ' × 180/π = <b>' + g + '°</b>');
      return it(g + '° = [[0]] rad', alt, 'text', g + ' × π/180 = <b>' + rad + '</b>');
    } });
  tema('calculo', { id: 'log', n: 'Logaritmos', g: [10, 11], cols: 3, idea: 'log<sub>b</sub> x = y significa que <b>b<sup>y</sup> = x</b>: el logaritmo es el exponente. log<sub>2</sub> 8 = 3 porque 2<sup>3</sup> = 8.',
    gen: function (r, dif) {
      var b = r.pick([2, 3, 5, 10]), n = r.int(1, b === 10 ? 6 : b === 2 ? 7 : 4);
      if (dif === 1) return it('log<sub>' + b + '</sub> ' + fmt(Math.pow(b, n)) + ' = [[0]]', n, 'num', b + sup(n) + ' = ' + fmt(Math.pow(b, n)) + ' → <b>' + n + '</b>');
      if (dif === 2) return it('log<sub>' + b + '</sub> (1/' + fmt(Math.pow(b, n)) + ') = [[0]]', -n, 'num', b + sup(MINUS + n) + ' = 1/' + fmt(Math.pow(b, n)) + ' → <b>' + MINUS + n + '</b>');
      var m = r.int(1, 3); return it('log<sub>' + b + '</sub> ' + fmt(Math.pow(b, n)) + ' + log<sub>' + b + '</sub> ' + fmt(Math.pow(b, m)) + ' = [[0]]', n + m, 'num', 'log(xy) = log x + log y → <b>' + (n + m) + '</b>');
    } });
  tema('calculo', { id: 'derivadas', n: 'Derivadas de polinomios', g: [11, 11], cols: 2, idea: 'La derivada mide la <b>rapidez de cambio</b>. Regla de la potencia: la derivada de a·xⁿ es a·n·xⁿ⁻¹; la de una constante es 0, y la derivada de una suma es la suma de las derivadas.',
    gen: function (r, dif) {
      var deg = [r.int(2, dif === 1 ? 3 : 5), 1, 0], cs = deg.map(function () { return (r.int(1, 9)) * r.sign(); }); if (dif === 3) { deg.splice(1, 0, deg[0] - 1 > 1 ? deg[0] - 1 : 2); cs.push(r.int(1, 9) * r.sign()); }
      function v(dg) { return dg === 0 ? '' : dg === 1 ? 'x' : 'x' + sup(dg); }
      var f = polyStr(deg.map(function (dg, i) { return [cs[i], v(dg)]; })), d = deg.map(function (dg, i) { return [cs[i] * dg, v(dg - 1)]; }).filter(function (t) { return t[0]; });
      var ans = polyStr(d), plain = d.map(function (t, i) { var dg = t[1] ? (t[1] === 'x' ? 1 : +t[1].replace(/\D/g, '')) : 0; return (t[0] < 0 ? '-' : (i ? '+' : '')) + Math.abs(t[0]) + (dg ? 'x' + (dg > 1 ? '^' + dg : '') : ''); }).join('');
      return it('f(x) = ' + f + ' → f′(x) = [[0]]', plain, 'poly', 'f′(x) = <b>' + ans + '</b>', true);
    } });

  /* =================== PROBLEMAS COTIDIANOS =================== */
  var OBJ = [['mango', 'mangos', 'm'], ['naranja', 'naranjas', 'f'], ['carrito', 'carritos', 'm'], ['galleta', 'galletas', 'f'], ['globo', 'globos', 'm'], ['flor', 'flores', 'f'], ['canica', 'canicas', 'f'], ['lápiz', 'lápices', 'm'], ['chontaduro', 'chontaduros', 'm'], ['mariposa', 'mariposas', 'f']];
  function cu(o) { return o[2] === 'm' ? '¿Cuántos' : '¿Cuántas'; }
  var PROD = [['pandebono', 800, 1500], ['empanada', 1000, 2500], ['jugo de lulo', 2000, 4500], ['buñuelo', 800, 1500], ['cuaderno', 3000, 8000], ['lápiz', 500, 1500], ['borrador', 500, 1200], ['bolsa de leche', 3000, 5000], ['pandeyuca', 800, 1500], ['salpicón', 2500, 5000]];
  function precio(r, p) { return Math.round(r.int(p[1], p[2]) / 100) * 100; }
  function billete(t) { return [1000, 2000, 5000, 10000, 20000, 50000, 100000].filter(function (b) { return b >= t; })[0] || Math.ceil(t / 100000) * 100000; }
  function P(g, n, idea, gen) { tema('problemas', { id: 'p' + TEMAS.problemas.length, n: n, g: g, cols: 1, idea: idea, gen: gen }); }
  var IDEA_RES = 'Resolver un problema es <b>comprender antes de calcular</b>: 1) ¿Qué sé? 2) ¿Qué me preguntan? 3) ¿Qué operación representa la situación? 4) Calculo. 5) ¿Mi respuesta tiene sentido?';
  P([0, 2], 'Juntar y agregar', IDEA_RES, function (r, dif, g) { var o = r.pick(OBJ), nm = r.pick(NOM), m = g === 0 ? 5 : dif === 1 ? 9 : dif === 2 ? 50 : 500, a = r.int(1, m), b = r.int(1, g === 0 ? 10 - a : m); return it(nm + ' tiene ' + a + ' ' + (a === 1 ? o[0] : o[1]) + ' y le regalan ' + b + ' más. ' + cu(o) + ' ' + o[1] + ' tiene ahora? [[0]]', a + b, 'num', a + ' + ' + b + ' = <b>' + (a + b) + '</b> ' + o[1]); });
  P([0, 2], 'Quitar y perder', IDEA_RES, function (r, dif, g) { var o = r.pick(OBJ), nm = r.pick(NOM), m = g === 0 ? 10 : dif === 1 ? 20 : dif === 2 ? 99 : 999, a = r.int(3, m), b = r.int(1, a - 1); return it(nm + ' tenía ' + a + ' ' + o[1] + ' y regaló ' + b + ' a sus amigos. ' + cu(o) + ' ' + o[1] + ' le quedan? [[0]]', a - b, 'num', a + ' ' + MINUS + ' ' + b + ' = <b>' + (a - b) + '</b>'); });
  P([1, 3], 'Comparar cantidades', IDEA_RES, function (r, dif) { var o = r.pick(OBJ), n1 = r.pick(NOM), n2 = r.pick(NOM.filter(function (x) { return x !== n1; })), m = dif === 1 ? 20 : dif === 2 ? 99 : 999, a = r.int(5, m), b = r.int(1, a - 1); return it(n1 + ' tiene ' + a + ' ' + o[1] + ' y ' + n2 + ' tiene ' + b + '. ' + cu(o) + ' ' + o[1] + ' más tiene ' + n1 + '? [[0]]', a - b, 'num', 'Comparamos restando: ' + a + ' ' + MINUS + ' ' + b + ' = <b>' + (a - b) + '</b>'); });
  P([2, 5], 'En la tienda escolar', IDEA_RES, function (r, dif) {
    var p = r.pick(PROD), pr = precio(r, p), q = r.int(2, dif === 1 ? 3 : 6), nm = r.pick(NOM), tot = pr * q;
    if (dif === 1) return it(nm + ' compra ' + q + ' ' + p[0] + (p[0].slice(-1) === 'o' || p[0].slice(-1) === 'a' ? 's' : 'es') + ' a ' + peso(pr) + ' cada uno. ¿Cuánto paga? [[0]]', tot, 'num', q + ' × ' + peso(pr) + ' = <b>' + peso(tot) + '</b>');
    var p2 = r.pick(PROD.filter(function (x) { return x !== p; })), pr2 = precio(r, p2), q2 = dif === 3 ? r.int(1, 3) : 0; tot += pr2 * q2; var B = billete(tot);
    return it(nm + ' compra ' + q + ' × ' + p[0] + ' a ' + peso(pr) + (q2 ? ' y ' + q2 + ' × ' + p2[0] + ' a ' + peso(pr2) : '') + '. Paga con un billete de ' + peso(B) + '. ¿Cuánto le devuelven? [[0]]', B - tot, 'num', 'Total: ' + peso(tot) + '. Vueltas: ' + peso(B) + ' ' + MINUS + ' ' + peso(tot) + ' = <b>' + peso(B - tot) + '</b>');
  });
  P([2, 5], 'Repartir en partes iguales', IDEA_RES, function (r, dif) { var k = r.int(2, dif === 1 ? 5 : 9), q = r.int(2, dif === 1 ? 10 : 25), s = dif === 3 ? r.int(1, k - 1) : 0, N = k * q + s, o = r.pick(['pandebonos', 'colores', 'hojas', 'stickers', 'mandarinas']); return dif === 3 ? it('Hay ' + N + ' ' + o + ' para repartir en partes iguales entre ' + k + ' niños. ¿Cuántos recibe cada uno? [[0]] ¿Cuántos sobran? [[1]]', [q, s], 'num', N + ' ÷ ' + k + ' = <b>' + q + '</b>, residuo <b>' + s + '</b>') : it('Hay ' + N + ' ' + o + ' para repartir en partes iguales entre ' + k + ' niños. ¿Cuántos recibe cada uno? [[0]]', q, 'num', N + ' ÷ ' + k + ' = <b>' + q + '</b>'); });
  P([2, 4], 'Filas y columnas', IDEA_RES, function (r, dif) { var f = r.int(2, dif === 1 ? 5 : 12), c = r.int(2, dif === 1 ? 5 : dif === 2 ? 12 : 25); return it('En el auditorio de CENTEC hay ' + f + ' filas con ' + c + ' sillas cada una. ¿Cuántas sillas hay? [[0]]', f * c, 'num', f + ' × ' + c + ' = <b>' + f * c + '</b> sillas'); });
  P([3, 6], 'Viajes en el MIO', IDEA_RES, function (r, dif) { var p = r.int(20, 34) * 100, k = r.int(2, 6), dias = dif === 3 ? r.int(3, 5) : 1, v = dif === 1 ? 1 : 2, t = p * k * v * dias; return it('Si un pasaje del MIO costara ' + peso(p) + ', ¿cuánto pagaría una familia de ' + k + ' personas' + (v === 2 ? ' por ida y regreso' : ' por un viaje') + (dias > 1 ? ' durante ' + dias + ' días' : '') + '? [[0]]', t, 'num', peso(p) + ' × ' + k + (v === 2 ? ' × 2' : '') + (dias > 1 ? ' × ' + dias : '') + ' = <b>' + peso(t) + '</b>'); });
  P([2, 5], 'Horas y duración', IDEA_RES, function (r, dif) { var h = r.int(7, 15), m = r.pick([0, 15, 30, 45]), d = dif === 1 ? r.pick([30, 60, 90]) : dif === 2 ? r.int(4, 30) * 5 : r.int(12, 40) * 5; var tot = h * 60 + m + d, H = Math.floor(tot / 60), Mi = tot % 60; function hh(x, y) { return x + ':' + (y < 10 ? '0' : '') + y; } return it('Una actividad empieza a las ' + hh(h, m) + ' y dura ' + d + ' minutos. ¿A qué hora termina? (escribe h:mm) [[0]]', hh(H, Mi), 'time', hh(h, m) + ' + ' + d + ' min = <b>' + hh(H, Mi) + '</b>'); });
  P([4, 7], 'Recetas y proporciones', IDEA_RES, function (r, dif) { var n = r.int(2, 5), x = r.int(2, 6) * (dif === 3 ? 2 : 1), k = dif === 1 ? r.int(2, 4) : r.int(2, 6), m = dif === 3 ? n * k + n / (n % 2 ? 1 : 2) : n * k; m = dif === 3 && n % 2 === 0 ? n * k + n / 2 : n * k; var y = x * m / n; return it('Para ' + n + ' vasos de lulada se usan ' + x + ' lulos. ¿Cuántos lulos se necesitan para ' + m + ' vasos? [[0]]', fmt(y), 'num', 'Por cada vaso: ' + fmt(x / n) + ' lulos. ' + fmt(x / n) + ' × ' + m + ' = <b>' + fmt(y) + '</b>'); });
  P([3, 6], 'El jardín del colegio', IDEA_RES, function (r, dif) { var l = r.int(3, 15), w = r.int(2, 10); if (dif === 1) return it('La huerta escolar mide ' + l + ' m de largo y ' + w + ' m de ancho. ¿Cuántos metros de malla se necesitan para rodearla? [[0]] m', 2 * (l + w), 'num', 'Perímetro = 2 × (' + l + ' + ' + w + ') = <b>' + 2 * (l + w) + ' m</b>'); var pm = r.int(5, 20) * 1000; if (dif === 2) return it('La huerta mide ' + l + ' m por ' + w + ' m. ¿Cuántos metros cuadrados de grama se necesitan para cubrirla? [[0]] m²', l * w, 'num', 'Área = ' + l + ' × ' + w + ' = <b>' + l * w + ' m²</b>'); return it('La huerta mide ' + l + ' m por ' + w + ' m y el metro cuadrado de grama cuesta ' + peso(pm) + '. ¿Cuánto cuesta cubrirla? [[0]]', l * w * pm, 'num', l * w + ' m² × ' + peso(pm) + ' = <b>' + peso(l * w * pm) + '</b>'); });
  P([5, 8], 'Descuentos', IDEA_RES, function (r, dif) { var p = r.int(4, 30) * 5000, d = r.pick(dif === 1 ? [10, 20, 50] : [15, 25, 30, 40]); if (dif === 3) { var d2 = r.pick([10, 20]), p1 = p * (100 - d) / 100, p2 = p1 * (100 - d2) / 100; return it('Unos tenis cuestan ' + peso(p) + '. Tienen ' + d + ' % de descuento y, sobre ese nuevo precio, otro ' + d2 + ' %. ¿Cuánto pagas? [[0]]', p2, 'num', peso(p) + ' → ' + peso(p1) + ' → <b>' + peso(p2) + '</b> (¡no es lo mismo que ' + (d + d2) + ' %!)'); } var f = p * (100 - d) / 100; return it('Un morral cuesta ' + peso(p) + ' y tiene ' + d + ' % de descuento. ¿Cuánto pagas? [[0]]', f, 'num', 'Descuento: ' + peso(p * d / 100) + '. Pagas <b>' + peso(f) + '</b>'); });
  P([4, 7], 'Distancia y velocidad', IDEA_RES, function (r, dif) { var v = r.int(8, 25) * (dif === 3 ? 2 : 1), h = r.int(2, 5); if (dif === 1) return it('Una ciclista recorre ' + v + ' km cada hora. ¿Cuántos kilómetros recorre en ' + h + ' horas? [[0]] km', v * h, 'num', v + ' × ' + h + ' = <b>' + v * h + ' km</b>'); if (dif === 2) return it('Un bus avanza a ' + v + ' km/h. ¿Cuántas horas tarda en recorrer ' + v * h + ' km? [[0]] h', h, 'num', v * h + ' ÷ ' + v + ' = <b>' + h + ' h</b>'); var d1 = v * 2, t2 = r.int(1, 3), d2 = r.int(5, 20) * t2; return it('Un ciclista recorre ' + d1 + ' km en 2 h y luego ' + d2 + ' km en ' + t2 + ' h. ¿Cuál fue su velocidad media en km/h? [[0]]', fmt((d1 + d2) / (2 + t2), 2).replace(/,?0+$/, ''), 'aprox', '(' + d1 + ' + ' + d2 + ') ÷ (2 + ' + t2 + ') = <b>' + fmt(Math.round((d1 + d2) / (2 + t2) * 100) / 100) + ' km/h</b>'); });
  P([4, 6], 'Fracción de una cantidad', IDEA_RES, function (r, dif) { var b = r.pick([2, 3, 4, 5, 6, 8]), a = r.int(1, b - 1), N = b * r.int(3, 12), v = N * a / b; if (dif === 1) return it('Doña Rosa preparó ' + N + ' empanadas y vendió ' + a + '/' + b + ' de ellas. ¿Cuántas vendió? [[0]]', v, 'num', N + ' ÷ ' + b + ' × ' + a + ' = <b>' + v + '</b>'); return it('Doña Rosa preparó ' + N + ' empanadas y vendió ' + a + '/' + b + ' de ellas. ¿Cuántas le quedan? [[0]]', N - v, 'num', 'Vendió ' + v + '; quedan ' + N + ' ' + MINUS + ' ' + v + ' = <b>' + (N - v) + '</b>'); });
  P([5, 9], 'Promedios de notas', IDEA_RES, function (r, dif) { var n = 4, ns = []; for (var i = 0; i < n - 1; i++) ns.push(r.int(30, 50)); var s = ns.reduce(function (a, b) { return a + b; }, 0), last = 0; for (var t = 30; t <= 50; t++) if ((s + t) % n === 0) { last = t; break; } if (!last) last = 40; ns.push(last); var avg = (s + last) / n / 10; if (dif === 3) { var obj = r.pick([38, 40, 42]); var need = obj * 5 - (s + last); if (need < 10 || need > 50) { obj = 40; need = 200 - (s + last); } if (need >= 10 && need <= 50) return it('Las notas de Sara son ' + ns.map(function (x) { return fmt(x / 10, 1); }).join('; ') + '. ¿Qué nota necesita en la quinta evaluación para que su promedio sea ' + fmt(obj / 10, 1) + '? [[0]]', fmt(need / 10, 1), 'num', 'Suma necesaria: ' + fmt(obj / 10, 1) + ' × 5 = ' + fmt(obj / 2, 1) + '. Nota: <b>' + fmt(need / 10, 1) + '</b>'); } return it('Las notas de Sara (escala 1,0 a 5,0) son ' + ns.map(function (x) { return fmt(x / 10, 1); }).join('; ') + '. ¿Cuál es su promedio? [[0]]', fmt(avg), 'num', 'Suma ' + fmt((s + last) / 10, 1) + ' ÷ ' + n + ' = <b>' + fmt(avg) + '</b>'); });
  P([6, 9], 'Regla de tres', IDEA_RES, function (r, dif) { if (dif <= 2 || r.chance(0.4)) { var u = r.int(2, 9) * 500, a = r.int(2, 8), b = r.int(3, 15); return it('Si ' + a + ' cuadernos cuestan ' + peso(u * a) + ', ¿cuánto cuestan ' + b + ' cuadernos? [[0]]', u * b, 'num', 'Proporción directa: ' + peso(u * a) + ' ÷ ' + a + ' × ' + b + ' = <b>' + peso(u * b) + '</b>'); } var w = r.int(2, 6), d = r.int(2, 6) * 2, P2 = w * d, w2 = r.pick([2, 3, 4, 6, 8, 12].filter(function (x) { return P2 % x === 0 && x !== w; })) || w * 2; return it(w + ' pintores pintan el colegio en ' + d + ' días. ¿Cuántos días tardarán ' + w2 + ' pintores al mismo ritmo? [[0]]', fmt(P2 / w2), 'num', 'Proporción inversa: ' + w + ' × ' + d + ' = ' + P2 + ' días-pintor; ' + P2 + ' ÷ ' + w2 + ' = <b>' + fmt(P2 / w2) + '</b>'); });
  P([6, 9], 'Escalas en mapas', IDEA_RES, function (r) { var N = r.pick([50000, 100000, 250000]), c = r.int(2, 12), km = c * N / 100000; return it('En un mapa a escala 1:' + fmt(N) + ', dos municipios del Valle están a ' + c + ' cm. ¿Cuál es la distancia real en km? [[0]]', fmt(km), 'num', c + ' cm × ' + fmt(N) + ' = ' + fmt(c * N) + ' cm = <b>' + fmt(km) + ' km</b>'); });
  P([7, 10], 'Aumentos y variación porcentual', IDEA_RES, function (r, dif) { var V = r.int(4, 40) * 100, p = r.pick([5, 10, 15, 20, 25, 30]); if (dif === 3) { var N2 = V * (100 + p) / 100; return it('Un producto pasó de ' + peso(V) + ' a ' + peso(N2) + '. ¿En qué porcentaje aumentó? [[0]] %', p, 'num', '(' + fmt(N2) + ' ' + MINUS + ' ' + fmt(V) + ') ÷ ' + fmt(V) + ' × 100 = <b>' + p + ' %</b>'); } return it('Una cooperativa tenía ' + fmt(V) + ' asociados y creció un ' + p + ' %. ¿Cuántos tiene ahora? [[0]]', V * (100 + p) / 100, 'num', fmt(V) + ' × ' + fmt(1 + p / 100) + ' = <b>' + fmt(V * (100 + p) / 100) + '</b>'); });
  P([8, 10], 'Edades y ecuaciones', IDEA_RES, function (r, dif) { var x = r.int(4, 18), k = r.int(2, 4), S = x + k * x; if (dif === 3) { var d = r.int(2, 10); return it('Sofía tiene ' + d + ' años más que el doble de la edad de su primo. Entre los dos suman ' + (x + 2 * x + d) + ' años. ¿Qué edad tiene el primo? [[0]]', x, 'x', 'x + (2x + ' + d + ') = ' + (3 * x + d) + ' → 3x = ' + 3 * x + ' → <b>x = ' + x + '</b>'); } return it('La edad de Sofía es ' + (k === 2 ? 'el doble' : k === 3 ? 'el triple' : 'el cuádruple') + ' de la de su hermano y entre los dos suman ' + S + ' años. ¿Cuántos años tiene el hermano? [[0]]', x, 'x', 'x + ' + k + 'x = ' + S + ' → ' + (k + 1) + 'x = ' + S + ' → <b>x = ' + x + '</b>'); });
  P([8, 11], 'Interés simple', IDEA_RES, function (r, dif) { var C = r.int(1, 20) * 100000, i = r.int(2, 12), t = r.int(1, 5), I = C * i * t / 100; if (dif === 1) return it('¿Cuánto interés simple produce ' + peso(C) + ' al ' + i + ' % anual durante ' + t + ' año(s)? [[0]]', I, 'num', 'I = C·i·t = ' + peso(C) + ' × ' + i + '/100 × ' + t + ' = <b>' + peso(I) + '</b>'); if (dif === 2) return it('Si inviertes ' + peso(C) + ' al ' + i + ' % de interés simple anual, ¿cuánto tendrás en total después de ' + t + ' año(s)? [[0]]', C + I, 'num', 'C + I = ' + peso(C) + ' + ' + peso(I) + ' = <b>' + peso(C + I) + '</b>'); return it('Un capital de ' + peso(C) + ' produjo ' + peso(I) + ' de interés simple en ' + t + ' año(s). ¿Cuál fue la tasa anual? [[0]] %', i, 'num', 'i = I ÷ (C·t) = <b>' + i + ' %</b>'); });
  P([8, 11], 'Boletas para la Feria (sistemas)', IDEA_RES, function (r) { var pa = r.int(4, 9) * 1000, pn = r.int(2, pa / 1000 - 1) * 1000, a = r.int(5, 40), n = r.int(5, 40); return it('Para un evento de la Feria de Cali se vendieron ' + (a + n) + ' boletas: las de adulto a ' + peso(pa) + ' y las de niño a ' + peso(pn) + '. Se recaudaron ' + peso(a * pa + n * pn) + '. ¿Cuántas boletas de niño se vendieron? [[0]]', n, 'num', 'a + n = ' + (a + n) + '; ' + fmt(pa) + 'a + ' + fmt(pn) + 'n = ' + fmt(a * pa + n * pn) + ' → <b>n = ' + n + '</b>'); });
  P([10, 11], 'Interés compuesto', IDEA_RES, function (r) { var C = r.int(1, 10) * 1000000, i = r.pick([2, 3, 5, 8, 10]), t = r.int(2, 5), M2 = Math.round(C * Math.pow(1 + i / 100, t)); return it('Inviertes ' + peso(C) + ' al ' + i + ' % de interés compuesto anual. ¿Cuánto tendrás después de ' + t + ' años? (redondea al peso) [[0]]', M2, 'peso1', 'M = C(1 + i)ᵗ = ' + peso(C) + ' × ' + fmt(1 + i / 100) + sup(t) + ' ≈ <b>' + peso(M2) + '</b>'); });
  P([9, 11], 'Probabilidad', IDEA_RES, function (r, dif) { if (dif === 1) { var rj = r.int(1, 9), az = r.int(1, 9), vd = r.int(1, 9), n = rj + az + vd; return it('Una bolsa tiene ' + rj + ' balotas rojas, ' + az + ' azules y ' + vd + ' verdes. Si sacas una al azar, ¿cuál es la probabilidad de que sea roja? (fracción) [[0]]', T.fstr(T.frac(rj, n)), 'frac', 'Casos favorables / casos posibles = ' + rj + '/' + n + ' = <b>' + T.fstr(T.frac(rj, n)) + '</b>'); } if (dif === 2) { var s = r.int(2, 12), f = 6 - Math.abs(7 - s); return it('Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea ' + s + '? (fracción) [[0]]', T.fstr(T.frac(f, 36)), 'frac', 'Hay ' + f + ' combinaciones de 36 → <b>' + T.fstr(T.frac(f, 36)) + '</b>'); } var R2 = r.int(3, 8), N = R2 + r.int(2, 8), fr = T.frac(R2 * (R2 - 1), N * (N - 1)); return it('Una caja tiene ' + R2 + ' fichas rojas de ' + N + '. Se sacan dos sin devolver la primera. ¿Probabilidad de que ambas sean rojas? [[0]]', T.fstr(fr), 'frac', R2 + '/' + N + ' × ' + (R2 - 1) + '/' + (N - 1) + ' = <b>' + T.fstr(fr) + '</b>'); });
  P([8, 11], 'Sombras y triángulos semejantes', IDEA_RES, function (r) { var h = r.int(1, 2), s = r.int(1, 3), k = r.int(3, 9); return it('Un palo de ' + h + ' m proyecta una sombra de ' + s + ' m. A la misma hora, la sombra de un samán mide ' + s * k + ' m. ¿Cuánto mide el samán? [[0]] m', h * k, 'num', 'Triángulos semejantes: ' + h + '/' + s + ' = x/' + s * k + ' → <b>x = ' + h * k + ' m</b>'); });
  P([10, 11], 'Movimiento uniformemente acelerado', IDEA_RES, function (r, dif) { var a = r.int(1, 5), t = r.int(2, 8), v0 = dif === 1 ? 0 : r.int(1, 10); if (dif === 1) return it('Un carro parte del reposo con aceleración de ' + a + ' m/s². ¿Qué distancia recorre en ' + t + ' s? [[0]] m', a * t * t / 2, 'num', 'd = ½·a·t² = ½ × ' + a + ' × ' + t * t + ' = <b>' + fmt(a * t * t / 2) + ' m</b>'); return it('Un móvil lleva ' + v0 + ' m/s y acelera a ' + a + ' m/s² durante ' + t + ' s. ¿Qué velocidad alcanza? [[0]] m/s', v0 + a * t, 'num', 'v = v₀ + a·t = ' + v0 + ' + ' + a + ' × ' + t + ' = <b>' + (v0 + a * t) + ' m/s</b>'); });
  P([9, 11], 'Consumo de energía en casa', IDEA_RES, function (r) { var W = r.pick([10, 60, 100, 150, 1000, 1500]), h = r.int(1, 8), d = 30, k = r.int(6, 9) * 100, kwh = W * h * d / 1000; return it('Un aparato de ' + W + ' W se usa ' + h + ' h al día durante 30 días. Si el kWh costara ' + peso(k) + ', ¿cuánto costaría ese consumo? [[0]]', Math.round(kwh * k), 'peso1', W + ' W × ' + h + ' h × 30 = ' + fmt(kwh) + ' kWh; × ' + peso(k) + ' = <b>' + peso(Math.round(kwh * k)) + '</b>'); });

  /* =================== SERIES Y PATRONES =================== */
  function figura(t, c, x, y, s) {
    s = s || 26; var h = s / 2;
    if (t === 0) return '<circle cx="' + (x + h) + '" cy="' + (y + h) + '" r="' + (h - 2) + '" fill="' + c + '"/>';
    if (t === 1) return '<rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="' + (s - 4) + '" height="' + (s - 4) + '" fill="' + c + '"/>';
    if (t === 2) return '<path d="M' + (x + h) + ' ' + (y + 2) + 'L' + (x + s - 2) + ' ' + (y + s - 2) + 'L' + (x + 2) + ' ' + (y + s - 2) + 'Z" fill="' + c + '"/>';
    var p = ''; for (var i = 0; i < 10; i++) { var a = Math.PI / 5 * i - Math.PI / 2, rr = i % 2 ? h * 0.42 : h - 1; p += (i ? 'L' : 'M') + (x + h + rr * Math.cos(a)).toFixed(1) + ' ' + (y + h + rr * Math.sin(a)).toFixed(1); }
    return '<path d="' + p + 'Z" fill="' + c + '"/>';
  }
  tema('series', { id: 'visual', n: 'Patrones de figuras', g: [0, 2], cols: 1, idea: 'Un patrón es algo que <b>se repite siempre igual</b>. Primero encontramos el núcleo que se repite (por ejemplo: círculo, cuadrado) y luego predecimos lo que sigue.',
    gen: function (r, dif) {
      var nucleos = dif === 1 ? ['AB'] : dif === 2 ? ['AAB', 'ABB', 'ABC'] : ['AABB', 'ABCC', 'ABAC', 'AABC'], nuc = r.pick(nucleos), tipos = r.sample([0, 1, 2, 3], 3), cols = r.sample(COL.slice(0, 5), 3), map = {};
      'ABC'.split('').forEach(function (L, i) { map[L] = [tipos[i], cols[i]]; });
      var len = nuc.length * 2 + r.int(1, nuc.length), seq = []; for (var i = 0; i <= len; i++) seq.push(nuc[i % nuc.length]);
      var ans = seq.pop(), s = '';
      seq.forEach(function (L, i) { s += figura(map[L][0], map[L][1], 4 + i * 32, 6); }); s += '<text x="' + (8 + seq.length * 32) + '" y="28" font-size="24" font-weight="700" fill="#0B1E3D">?</text>';
      var ops = r.shuffle(Object.keys(map).slice(0, Math.max(3, new Set(nuc.split('')).size))), opts = '';
      if (ops.length < 3) ops.push('A');
      ops = ops.slice(0, 3); var letra = 'abc'[ops.indexOf(ans)];
      ops.forEach(function (L, i) { opts += '<span class="opt" data-l="' + 'abc'[i] + '"><b>' + 'abc'[i] + ')</b>' + svg(30, 30, figura(map[L][0], map[L][1], 2, 2)) + '</span>'; });
      return it(svg(seq.length * 32 + 40, 38, s) + '<div class="opts">' + opts + '</div> ¿Qué sigue? [[0]]', letra, 'opt', 'El núcleo es <b>' + nuc + '</b>; sigue la opción <b>' + letra + '</b>');
    } });
  tema('series', { id: 'saltos', n: 'Conteo con saltos', g: [1, 4], cols: 1, idea: 'Contar de 2 en 2, de 5 en 5 o de 10 en 10 es sumar (o restar) siempre la misma cantidad. Descubre el salto mirando la diferencia entre dos números vecinos.',
    gen: function (r, dif) {
      var d = dif === 1 ? r.pick([1, 2, 5, 10]) : dif === 2 ? r.pick([3, 4, 25, 50, -2, -5]) : r.pick([7, 9, 15, 100, -7, -25]), s = d < 0 ? r.int(-d * 7, -d * 7 + 60) : r.int(0, 60), seq = [];
      for (var i = 0; i < 7; i++) seq.push(s + d * i);
      var h = r.sample([2, 3, 4, 5, 6], 2).sort(), a = [], q = seq.map(function (v, i) { if (h.indexOf(i) > -1) { a.push(v); return '[[' + (a.length - 1) + ']]'; } return '<b>' + fmt(v) + '</b>'; }).join(' , ');
      return it(q, a, 'num', 'Salto de ' + (d > 0 ? '+' : '') + d + ': ' + seq.map(fmt).join(', '));
    } });
  tema('series', { id: 'aritmetica', n: 'Sucesiones aritméticas', g: [3, 8], cols: 1, idea: 'En una sucesión aritmética la <b>diferencia</b> entre términos consecutivos es constante. La regla se escribe «sumar d» y permite predecir cualquier término.',
    gen: function (r, dif, g) {
      var d = dif === 3 && g >= 6 ? r.int(-12, 12) || 7 : r.int(2, dif === 1 ? 10 : 25), a = r.int(dif === 3 ? -20 : 1, 60), seq = [0, 1, 2, 3].map(function (i) { return a + d * i; });
      if (dif === 3 && g >= 6 && r.chance(0.4)) { var dd = r.int(1, 9) / 10; a = r.int(1, 20); seq = [0, 1, 2, 3].map(function (i) { return Math.round((a + dd * i) * 10) / 10; }); return it(seq.map(function (v) { return fmt(v); }).join(' ; ') + ' ; [[0]] ; [[1]]', [fmt(Math.round((a + dd * 4) * 10) / 10), fmt(Math.round((a + dd * 5) * 10) / 10)], 'num', 'Regla: sumar ' + fmt(dd)); }
      return it(seq.map(fmt).join(' ; ') + ' ; [[0]] ; [[1]] — Regla: ________', [a + 4 * d, a + 5 * d], 'num', 'Regla: <b>' + (d > 0 ? 'sumar ' + d : 'restar ' + -d) + '</b> → ' + fmt(a + 4 * d) + ', ' + fmt(a + 5 * d));
    } });
  tema('series', { id: 'geometrica', n: 'Sucesiones geométricas', g: [4, 9], cols: 1, idea: 'En una sucesión geométrica cada término se obtiene <b>multiplicando</b> el anterior por el mismo número (la razón). Crecen (o decrecen) mucho más rápido que las aritméticas.',
    gen: function (r, dif) {
      var k = dif === 1 ? r.pick([2, 10]) : dif === 2 ? r.pick([3, 5]) : r.pick([-2, -3]), a = r.int(1, dif === 1 ? 9 : 4), seq = [0, 1, 2, 3].map(function (i) { return a * Math.pow(k, i); });
      if (dif === 2 && r.chance(0.4)) { var b = r.pick([2, 3]), A = r.int(1, 5) * Math.pow(b, 5); seq = [0, 1, 2, 3].map(function (i) { return A / Math.pow(b, i); }); return it(seq.map(fmt).join(' ; ') + ' ; [[0]] ; [[1]]', [A / Math.pow(b, 4), A / Math.pow(b, 5)], 'num', 'Regla: <b>dividir entre ' + b + '</b>'); }
      return it(seq.map(fmt).join(' ; ') + ' ; [[0]] ; [[1]]', [a * Math.pow(k, 4), a * Math.pow(k, 5)], 'num', 'Regla: <b>multiplicar por ' + fmt(k) + '</b>');
    } });
  tema('series', { id: 'mixta', n: 'Patrones con dos reglas', g: [5, 9], cols: 1, idea: 'Algunos patrones alternan <b>dos reglas</b> (por ejemplo +3, ×2, +3, ×2…). Observa los cambios de dos en dos para descubrirlas.',
    gen: function (r) {
      var A = r.int(1, 9), x = r.int(1, 6), k = r.int(2, 3), suma = r.chance(0.5), seq = [A];
      for (var i = 1; i < 7; i++) { var p = seq[i - 1]; seq.push(i % 2 ? p + x : (suma ? p * k : p - r.int(0, 0) - 1)); }
      if (!suma) { seq = [A + 20]; for (var j = 1; j < 7; j++) seq.push(j % 2 ? seq[j - 1] + x + 2 : seq[j - 1] - x); }
      return it(seq.slice(0, 5).map(fmt).join(' ; ') + ' ; [[0]] ; [[1]]', [seq[5], seq[6]], 'num', suma ? 'Reglas alternas: <b>+' + x + ', ×' + k + '</b>' : 'Reglas alternas: <b>+' + (x + 2) + ', −' + x + '</b>');
    } });
  tema('series', { id: 'especiales', n: 'Números cuadrados, triangulares y Fibonacci', g: [5, 10], cols: 1, idea: 'Hay sucesiones famosas: <b>cuadrados</b> (1, 4, 9, 16…), <b>triangulares</b> (1, 3, 6, 10…: se suma 2, 3, 4…) y <b>Fibonacci</b> (cada término es la suma de los dos anteriores), presente en girasoles y piñas.',
    gen: function (r, dif) {
      var t = dif === 1 ? r.int(0, 1) : dif === 2 ? r.int(1, 2) : r.int(2, 3), s = r.int(1, 4), seq;
      if (t === 0) seq = [0, 1, 2, 3, 4, 5].map(function (i) { return (s + i) * (s + i); });
      else if (t === 1) seq = [0, 1, 2, 3, 4, 5].map(function (i) { var n = s + i; return n * (n + 1) / 2; });
      else if (t === 2) { var a = r.int(1, 5), b = r.int(a, a + 5); seq = [a, b]; while (seq.length < 6) seq.push(seq[seq.length - 1] + seq[seq.length - 2]); }
      else seq = [0, 1, 2, 3, 4, 5].map(function (i) { return Math.pow(s + i, 3); });
      return it(seq.slice(0, 4).map(fmt).join(' ; ') + ' ; [[0]] ; [[1]]', [seq[4], seq[5]], 'num', ['Cuadrados', 'Triangulares', 'Tipo Fibonacci', 'Cubos'][t] + ': <b>' + fmt(seq[4]) + ', ' + fmt(seq[5]) + '</b>');
    } });
  function palitos(tipo, n) {
    var s = '', u = 22, x0 = 6, y0 = 6;
    if (tipo === 0) { for (var i = 0; i < n; i++) { var x = x0 + i * u; s += '<rect x="' + x + '" y="' + y0 + '" width="' + u + '" height="' + u + '" fill="none" stroke="#D85A30" stroke-width="3"/>'; } return svg(n * u + 14, u + 14, s); }
    var p = ''; for (var j = 0; j < n; j++) { var xb = x0 + Math.floor(j / 2) * u + (j % 2 ? u / 2 : 0); p += j % 2 ? 'M' + xb + ' ' + y0 + 'L' + (xb + u) + ' ' + y0 + 'L' + (xb + u / 2) + ' ' + (y0 + u) + 'Z' : 'M' + xb + ' ' + (y0 + u) + 'L' + (xb + u / 2) + ' ' + y0 + 'L' + (xb + u) + ' ' + (y0 + u) + 'Z'; }
    return svg(Math.ceil(n / 2) * u + u + 14, u + 14, '<path d="' + p + '" fill="none" stroke="#1B7FA6" stroke-width="3"/>');
  }
  tema('series', { id: 'palitos', n: 'Patrones que crecen (palitos)', g: [3, 9], cols: 1, idea: 'En un patrón que crece buscamos <b>cuánto aumenta</b> de una figura a la siguiente y qué parte se mantiene fija. Así escribimos una regla para cualquier figura n.',
    gen: function (r, dif, g) {
      var tipo = r.int(0, 1), fn = tipo === 0 ? function (n) { return 3 * n + 1; } : function (n) { return 2 * n + 1; }, figs = '';
      for (var n = 1; n <= 3; n++) figs += '<div style="display:inline-block;margin-right:14px;text-align:center"><small>Figura ' + n + '</small><br>' + palitos(tipo, n) + '</div>';
      var N = dif === 1 ? 4 : dif === 2 ? r.int(6, 10) : r.int(20, 50);
      if (dif === 3 && g >= 7) return it(figs + '<br>¿Cuántos palitos tiene la figura ' + N + '? [[0]] Regla para la figura n: [[1]]', [fn(N), tipo === 0 ? '3n+1' : '2n+1'], ['num', 'poly'], 'Cada figura agrega ' + (tipo === 0 ? 3 : 2) + ' palitos: <b>' + (tipo === 0 ? '3n + 1' : '2n + 1') + '</b>; figura ' + N + ': <b>' + fn(N) + '</b>');
      return it(figs + '<br>¿Cuántos palitos tiene la figura ' + N + '? [[0]]', fn(N), 'num', 'Regla: ' + (tipo === 0 ? '3n + 1' : '2n + 1') + ' → <b>' + fn(N) + '</b>');
    } });
  tema('series', { id: 'terminoN', n: 'Término general', g: [7, 11], cols: 1, idea: 'En una sucesión aritmética, aₙ = a₁ + (n − 1)·d. En una geométrica, aₙ = a₁·rⁿ⁻¹. Con la fórmula ya no hay que escribir todos los términos.',
    gen: function (r, dif) {
      var a = r.int(-10, 15), d = r.int(2, 9) * r.sign(), seq = [0, 1, 2, 3].map(function (i) { return a + d * i; });
      if (dif === 1) { var n = r.int(15, 40); return it(seq.map(fmt).join(' ; ') + ' ; … ¿Cuál es el término ' + n + '? [[0]]', a + (n - 1) * d, 'num', 'a' + n + ' = ' + a + ' + (' + n + ' − 1)·(' + d + ') = <b>' + fmt(a + (n - 1) * d) + '</b>'); }
      if (dif === 2) return it(seq.map(fmt).join(' ; ') + ' ; … Escribe aₙ en la forma dn + c: [[0]]', d + 'n' + (a - d >= 0 ? '+' : '') + (a - d), 'poly', 'aₙ = ' + a + ' + (n − 1)(' + d + ') = <b>' + polyStr([[d, 'n'], [a - d, '']]) + '</b>');
      var A = r.int(1, 5), k = r.pick([2, 3]), m = r.int(5, 9); return it([0, 1, 2, 3].map(function (i) { return fmt(A * Math.pow(k, i)); }).join(' ; ') + ' ; … ¿Cuál es el término ' + m + '? [[0]]', A * Math.pow(k, m - 1), 'num', 'a' + m + ' = ' + A + '·' + k + sup(m - 1) + ' = <b>' + fmt(A * Math.pow(k, m - 1)) + '</b>');
    } });

  /* =================== GEOMETRÍA VISUAL =================== */
  function poligono(cells, u, color) { return cells.map(function (c) { return '<rect x="' + (c[0] * u) + '" y="' + (c[1] * u) + '" width="' + u + '" height="' + u + '" fill="' + color + '" stroke="#0B1E3D" stroke-width="1.2"/>'; }).join(''); }
  function cuadricula(W, H, u) { var s = ''; for (var x = 0; x <= W; x++) s += '<line x1="' + x * u + '" y1="0" x2="' + x * u + '" y2="' + H * u + '" stroke="#cfd6e0"/>'; for (var y = 0; y <= H; y++) s += '<line x1="0" y1="' + y * u + '" x2="' + W * u + '" y2="' + y * u + '" stroke="#cfd6e0"/>'; return s; }
  tema('geometria', { id: 'figuras', n: 'Reconozco figuras', g: [0, 2], cols: 1, idea: 'Las figuras se reconocen por sus <b>lados y esquinas</b>: el triángulo tiene 3 lados, el cuadrado 4 lados iguales, el rectángulo 4 lados (dos largos y dos cortos) y el círculo es redondo, sin esquinas.',
    gen: function (r, dif) {
      var NOMS = ['círculos', 'cuadrados', 'triángulos', 'estrellas'], n = dif === 1 ? 6 : dif === 2 ? 9 : 12, celdas = r.sample(Array.from({ length: 18 }, function (_, i) { return i; }), n), s = '', cnt = [0, 0, 0, 0];
      celdas.forEach(function (c) { var t = r.int(0, dif === 1 ? 2 : 3); cnt[t]++; s += figura(t, r.pick(COL.slice(0, 5)), (c % 6) * 40 + 6, Math.floor(c / 6) * 40 + 6, 30); });
      var obj = r.int(0, dif === 1 ? 2 : 3); return it(svg(246, 126, s) + '<br>¿Cuántos <b>' + NOMS[obj] + '</b> hay? [[0]]', cnt[obj], 'num', 'Hay <b>' + cnt[obj] + '</b> ' + NOMS[obj]);
    } });
  function polyomino(r, dif) {
    var W = r.int(3, 6), H = r.int(2, 5), cells = {}, add = function (x0, y0, w, h) { for (var x = x0; x < x0 + w; x++) for (var y = y0; y < y0 + h; y++) cells[x + ',' + y] = 1; };
    add(0, 0, W, H);
    if (dif >= 2) { var w2 = r.int(1, W - 1), h2 = r.int(1, 3); add(0, H, w2, h2); }
    if (dif === 3) { var h3 = r.int(1, H), w3 = r.int(1, 3); add(W, 0, w3, h3); }
    var L = Object.keys(cells).map(function (k) { return k.split(',').map(Number); }), per = 0;
    L.forEach(function (c) { [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (d) { if (!cells[(c[0] + d[0]) + ',' + (c[1] + d[1])]) per++; }); });
    return { cells: L, area: L.length, per: per, W: Math.max.apply(null, L.map(function (c) { return c[0]; })) + 1, H: Math.max.apply(null, L.map(function (c) { return c[1]; })) + 1 };
  }
  tema('geometria', { id: 'cuadricula', n: 'Perímetro y área en cuadrícula', g: [2, 6], cols: 2, idea: 'El <b>perímetro</b> es el largo del borde (contamos lados de cuadritos alrededor). El <b>área</b> es lo que cubre la figura (contamos cuadritos completos). Son medidas diferentes: ¡dos figuras con igual área pueden tener distinto perímetro!',
    gen: function (r, dif) { var p = polyomino(r, dif), u = 22; return it(svg((p.W + 1) * u + 4, (p.H + 1) * u + 4, '<g transform="translate(2,2)">' + cuadricula(p.W + 1, p.H + 1, u) + poligono(p.cells, u, '#BFE6D6') + '</g>') + '<br><small>Cada cuadrito mide 1 cm de lado.</small><br>Perímetro: [[0]] cm · Área: [[1]] cm²', [p.per, p.area], 'num', 'Perímetro <b>' + p.per + ' cm</b>, área <b>' + p.area + ' cm²</b>'); } });
  tema('geometria', { id: 'fracciones', n: 'Fracciones en figuras', g: [2, 6], cols: 2, idea: 'Una fracción indica <b>partes iguales</b> de un todo: el denominador dice en cuántas partes iguales se dividió y el numerador cuántas tomamos (sombreamos).',
    gen: function (r, dif) {
      var n = dif === 1 ? r.pick([2, 3, 4]) : dif === 2 ? r.int(5, 8) : r.int(8, 12), k = r.int(1, n - 1), s = '';
      if (r.chance(0.5)) { var cx = 60, cy = 60, R = 52; for (var i = 0; i < n; i++) { var a1 = 2 * Math.PI * i / n - Math.PI / 2, a2 = 2 * Math.PI * (i + 1) / n - Math.PI / 2; s += '<path d="M' + cx + ' ' + cy + 'L' + (cx + R * Math.cos(a1)).toFixed(2) + ' ' + (cy + R * Math.sin(a1)).toFixed(2) + 'A' + R + ' ' + R + ' 0 0 1 ' + (cx + R * Math.cos(a2)).toFixed(2) + ' ' + (cy + R * Math.sin(a2)).toFixed(2) + 'Z" fill="' + (i < k ? '#D4A843' : '#fff') + '" stroke="#0B1E3D" stroke-width="1.5"/>'; } s = svg(120, 120, s); }
      else { var w = 220 / n; for (var j = 0; j < n; j++) s += '<rect x="' + (2 + j * w).toFixed(2) + '" y="2" width="' + w.toFixed(2) + '" height="44" fill="' + (j < k ? '#1D9E75' : '#fff') + '" stroke="#0B1E3D" stroke-width="1.5"/>'; s = svg(224, 48, s); }
      return it(s + '<br>¿Qué fracción está coloreada? [[0]]', k + '/' + n, 'frac', '<b>' + k + '/' + n + '</b>' + (T.gcd(k, n) > 1 ? ' = ' + T.fstr(T.frac(k, n)) : ''));
    } });
  tema('geometria', { id: 'simetria', n: 'Completa la figura simétrica', g: [2, 6], cols: 2, idea: 'Una figura es <b>simétrica</b> si al doblarla por el eje sus dos mitades coinciden exactamente. Cada cuadrito tiene su «gemelo» a la misma distancia del eje, del otro lado.',
    gen: function (r, dif) {
      var N = 8, u = 18, half = {}, cnt = dif === 1 ? 6 : dif === 2 ? 10 : 14, horiz = dif >= 2 && r.chance(0.5), s, s2;
      while (Object.keys(half).length < cnt) { var x = r.int(0, N / 2 - 1), y = r.int(0, N - 1); if (horiz) half[y + ',' + x] = 1; else half[x + ',' + y] = 1; }
      var cs = Object.keys(half).map(function (k) { return k.split(',').map(Number); }), mirror = cs.map(function (c) { return horiz ? [c[0], N - 1 - c[1]] : [N - 1 - c[0], c[1]]; });
      var eje = horiz ? '<line x1="0" y1="' + N * u / 2 + '" x2="' + N * u + '" y2="' + N * u / 2 + '" stroke="#C2492E" stroke-width="3" stroke-dasharray="6 4"/>' : '<line x1="' + N * u / 2 + '" y1="0" x2="' + N * u / 2 + '" y2="' + N * u + '" stroke="#C2492E" stroke-width="3" stroke-dasharray="6 4"/>';
      s = svg(N * u + 4, N * u + 4, '<g transform="translate(2,2)">' + cuadricula(N, N, u) + poligono(cs, u, '#7F77DD') + eje + '</g>');
      s2 = svg(N * u + 4, N * u + 4, '<g transform="translate(2,2)">' + cuadricula(N, N, u) + poligono(cs, u, '#7F77DD') + poligono(mirror, u, '#B9B3F0') + eje + '</g>');
      return it(s + '<br><small>Colorea los cuadritos que faltan para que la figura sea simétrica respecto al eje rojo.</small>', [], 'num', s2);
    } });
  function angulo(m, R) { R = R || 70; var a = m * Math.PI / 180, x = 20 + R * Math.cos(a), y = 90 - R * Math.sin(a), arc = 'M' + (20 + 22) + ' 90 A22 22 0 ' + (m > 180 ? 1 : 0) + ' 0 ' + (20 + 22 * Math.cos(a)).toFixed(1) + ' ' + (90 - 22 * Math.sin(a)).toFixed(1); return '<line x1="20" y1="90" x2="' + (20 + R) + '" y2="90" stroke="#0B1E3D" stroke-width="3"/><line x1="20" y1="90" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" stroke="#0B1E3D" stroke-width="3"/>' + (m === 90 ? '<rect x="20" y="78" width="12" height="12" fill="none" stroke="#D85A30" stroke-width="2"/>' : '<path d="' + arc + '" fill="none" stroke="#D85A30" stroke-width="2"/>'); }
  tema('geometria', { id: 'angulos', n: 'Ángulos', g: [4, 8], cols: 2, idea: 'Un ángulo mide <b>cuánto gira</b> una semirrecta respecto a otra. Agudo: menos de 90°. Recto: 90°. Obtuso: entre 90° y 180°. Llano: 180°. Los ángulos internos de todo triángulo suman 180°.',
    gen: function (r, dif) {
      if (dif === 1) { var m = r.pick([25, 30, 40, 45, 60, 70, 90, 90, 110, 120, 135, 150, 160, 180]), c = m < 90 ? 'a' : m === 90 ? 'b' : m < 180 ? 'c' : 'd'; return it(svg(180, 100, angulo(m)) + '<div class="opts"><span class="opt" data-l="a">a) agudo</span><span class="opt" data-l="b">b) recto</span><span class="opt" data-l="c">c) obtuso</span><span class="opt" data-l="d">d) llano</span></div>Clasificación: [[0]]', c, 'opt', 'Mide ' + m + '° → <b>' + { a: 'agudo', b: 'recto', c: 'obtuso', d: 'llano' }[c] + '</b>'); }
      if (dif === 2) { var tot = r.pick([90, 180]), x = r.int(2, tot / 5 - 2) * 5; return it('Dos ángulos ' + (tot === 90 ? 'complementarios (suman 90°)' : 'suplementarios (suman 180°)') + ': uno mide ' + x + '°. ¿Cuánto mide el otro? [[0]] °', tot - x, 'num', tot + ' ' + MINUS + ' ' + x + ' = <b>' + (tot - x) + '°</b>'); }
      var A = r.int(5, 18) * 5, B = r.int(4, 30 - A / 5 - 2) * 5; return it('En un triángulo, dos ángulos miden ' + A + '° y ' + B + '°. ¿Cuánto mide el tercero? [[0]] °', 180 - A - B, 'num', '180 ' + MINUS + ' ' + A + ' ' + MINUS + ' ' + B + ' = <b>' + (180 - A - B) + '°</b>');
    } });
  tema('geometria', { id: 'coordenadas', n: 'Plano cartesiano', g: [4, 9], cols: 1, idea: 'Cada punto del plano se ubica con un par ordenado <b>(x, y)</b>: primero avanzamos en horizontal (x) y luego en vertical (y). El orden importa: (2, 5) ≠ (5, 2).',
    gen: function (r, dif, g) {
      var neg = dif >= 2 && g >= 6, lo = neg ? -5 : 0, hi = neg ? 5 : 8, u = 22, W = (hi - lo) * u, ox = -lo * u + 20, oy = hi * u + 10, s = '';
      for (var i = lo; i <= hi; i++) { s += '<line x1="' + (ox + i * u) + '" y1="10" x2="' + (ox + i * u) + '" y2="' + (oy - lo * u) + '" stroke="#e1e6ee"/><line x1="20" y1="' + (oy - i * u) + '" x2="' + (20 + W) + '" y2="' + (oy - i * u) + '" stroke="#e1e6ee"/>'; if (i) s += '<text x="' + (ox + i * u) + '" y="' + (oy + 14) + '" font-size="10" text-anchor="middle">' + i + '</text><text x="' + (ox - 6) + '" y="' + (oy - i * u + 4) + '" font-size="10" text-anchor="end">' + i + '</text>'; }
      s += '<line x1="20" y1="' + oy + '" x2="' + (20 + W) + '" y2="' + oy + '" stroke="#0B1E3D" stroke-width="2"/><line x1="' + ox + '" y1="10" x2="' + ox + '" y2="' + (oy - lo * u) + '" stroke="#0B1E3D" stroke-width="2"/>';
      if (dif === 3 && g >= 8) { var P = [r.int(lo, hi - 3), r.int(lo, hi - 4)], k = 1, Q = [P[0] + 3 * k, P[1] + 4 * k]; [P, Q].forEach(function (p, j) { s += '<circle cx="' + (ox + p[0] * u) + '" cy="' + (oy - p[1] * u) + '" r="5" fill="' + COL[j + 2] + '"/><text x="' + (ox + p[0] * u + 7) + '" y="' + (oy - p[1] * u - 6) + '" font-size="13" font-weight="700">' + 'AB'[j] + '</text>'; }); return it(svg(W + 40, oy - lo * u + 24, s) + '<br>Distancia entre A y B: [[0]]', 5, 'num', 'Catetos 3 y 4 → √(9 + 16) = <b>5</b>'); }
      var pts = [], a = [], q = '';
      for (var j = 0; j < 3; j++) { var p2; do { p2 = [r.int(lo, hi), r.int(lo, hi)]; } while (pts.some(function (o) { return o[0] === p2[0] && o[1] === p2[1]; })); pts.push(p2); s += '<circle cx="' + (ox + p2[0] * u) + '" cy="' + (oy - p2[1] * u) + '" r="5" fill="' + COL[j] + '"/><text x="' + (ox + p2[0] * u + 7) + '" y="' + (oy - p2[1] * u - 6) + '" font-size="13" font-weight="700">' + 'ABC'[j] + '</text>'; a.push('(' + p2[0] + ', ' + p2[1] + ')'); q += ' ' + 'ABC'[j] + ' = [[' + j + ']]'; }
      return it(svg(W + 40, oy - lo * u + 24, s) + '<br>' + q, a, 'pair', a.map(function (x, i) { return 'ABC'[i] + ' = <b>' + x + '</b>'; }).join(' · '));
    } });
  tema('geometria', { id: 'areas', n: 'Áreas con fórmulas', g: [5, 9], cols: 2, idea: 'Las fórmulas de área nacen del rectángulo (base × altura). Un triángulo es la mitad de un rectángulo: (b × h) ÷ 2. El trapecio: (B + b) × h ÷ 2. El círculo: π × r².',
    gen: function (r, dif) {
      var t = dif === 1 ? r.int(0, 1) : dif === 2 ? r.int(2, 3) : 4, b = r.int(3, 15), h = r.int(2, 12), s, v, f, k = 'num';
      if (t === 0) { if (b * h % 2) b++; s = '<path d="M10 100 L' + (10 + 140) + ' 100 L60 20 Z" fill="#EAF6F1" stroke="#0B1E3D" stroke-width="2"/><line x1="60" y1="20" x2="60" y2="100" stroke="#D85A30" stroke-dasharray="4 3"/><text x="80" y="116" font-size="13">b = ' + b + ' cm</text><text x="64" y="66" font-size="13">h = ' + h + ' cm</text>'; v = b * h / 2; f = '(b × h) ÷ 2 = ' + b + ' × ' + h + ' ÷ 2'; }
      else if (t === 1) { s = '<path d="M10 100 L130 100 L170 30 L50 30 Z" fill="#FFF4D6" stroke="#0B1E3D" stroke-width="2"/><line x1="50" y1="30" x2="50" y2="100" stroke="#D85A30" stroke-dasharray="4 3"/><text x="60" y="116" font-size="13">b = ' + b + ' cm</text><text x="54" y="70" font-size="13">h = ' + h + ' cm</text>'; v = b * h; f = 'b × h = ' + b + ' × ' + h; }
      else if (t === 2) { var B = b + r.int(2, 8); if ((B + b) * h % 2) h++; s = '<path d="M10 100 L170 100 L130 30 L50 30 Z" fill="#E8F1FA" stroke="#0B1E3D" stroke-width="2"/><line x1="50" y1="30" x2="50" y2="100" stroke="#D85A30" stroke-dasharray="4 3"/><text x="70" y="116" font-size="13">B = ' + B + ' cm</text><text x="72" y="24" font-size="13">b = ' + b + ' cm</text><text x="54" y="70" font-size="13">h = ' + h + ' cm</text>'; v = (B + b) * h / 2; f = '(B + b) × h ÷ 2 = (' + B + ' + ' + b + ') × ' + h + ' ÷ 2'; }
      else if (t === 3) { var D = r.int(4, 16), d = r.int(2, 12); if (D * d % 2) D++; s = '<path d="M90 10 L160 60 L90 110 L20 60 Z" fill="#F3E8FA" stroke="#0B1E3D" stroke-width="2"/><line x1="20" y1="60" x2="160" y2="60" stroke="#D85A30" stroke-dasharray="4 3"/><line x1="90" y1="10" x2="90" y2="110" stroke="#1B7FA6" stroke-dasharray="4 3"/><text x="118" y="56" font-size="12">D = ' + D + '</text><text x="94" y="96" font-size="12">d = ' + d + '</text>'; v = D * d / 2; f = '(D × d) ÷ 2 = ' + D + ' × ' + d + ' ÷ 2'; }
      else { var rr = r.int(2, 10); s = '<circle cx="90" cy="60" r="50" fill="#FDEBE4" stroke="#0B1E3D" stroke-width="2"/><line x1="90" y1="60" x2="140" y2="60" stroke="#D85A30" stroke-width="2"/><text x="100" y="54" font-size="13">r = ' + rr + ' cm</text>'; v = Math.round(3.14 * rr * rr * 100) / 100; f = 'π × r² ≈ 3,14 × ' + rr * rr; k = 'aprox'; }
      return it(svg(180, 120, s) + '<br><small>(Figura no a escala' + (t === 4 ? '; usa π ≈ 3,14' : '') + ')</small> Área: [[0]] cm²', fmt(v), k, f + ' = <b>' + fmt(v) + ' cm²</b>');
    } });
  tema('geometria', { id: 'pitagoras', n: 'Teorema de Pitágoras', g: [8, 11], cols: 2, idea: 'En todo triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos: <b>c² = a² + b²</b>. Sirve para medir distancias que no podemos recorrer directamente.',
    gen: function (r, dif) {
      var tr = r.pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10], [9, 12, 15], [7, 24, 25]]), k = dif === 1 ? 1 : r.int(1, 3), a = tr[0] * k, b = tr[1] * k, c = tr[2] * k;
      if (dif === 3) return it('Una escalera de ' + c + ' m está apoyada en una pared. Su base queda a ' + a + ' m de la pared. ¿A qué altura toca la pared? [[0]] m', b, 'num', '√(' + c + '² ' + MINUS + ' ' + a + '²) = √' + (c * c - a * a) + ' = <b>' + b + ' m</b>');
      var dib = svg(170, 110, '<path d="M15 95 L155 95 L155 15 Z" fill="#EAF6F1" stroke="#0B1E3D" stroke-width="2"/><rect x="143" y="83" width="12" height="12" fill="none" stroke="#0B1E3D"/><text x="80" y="108" font-size="13" text-anchor="middle">' + (dif === 1 ? a : a) + '</text><text x="160" y="60" font-size="13">' + (dif === 1 ? b : '?') + '</text><text x="72" y="48" font-size="13" text-anchor="end">' + (dif === 1 ? '?' : c) + '</text>');
      return dif === 1 ? it('<div class="row">' + dib + '<span>Hipotenusa = [[0]]</span></div>', c, 'num', '√(' + a + '² + ' + b + '²) = √' + (a * a + b * b) + ' = <b>' + c + '</b>') : it('<div class="row">' + dib + '<span>Cateto que falta = [[0]]</span></div>', b, 'num', '√(' + c + '² ' + MINUS + ' ' + a + '²) = <b>' + b + '</b>');
    } });
  tema('geometria', { id: 'volumen', n: 'Volumen de cuerpos', g: [6, 10], cols: 2, idea: 'El volumen es el <b>espacio que ocupa</b> un cuerpo; se mide en unidades cúbicas. En prismas y cilindros: área de la base × altura. En pirámides y conos: un tercio de eso.',
    gen: function (r, dif) {
      if (dif === 1) { var l = r.int(2, 12), w = r.int(2, 10), h = r.int(2, 10); return it('Una caja de ' + l + ' cm × ' + w + ' cm × ' + h + ' cm. Volumen: [[0]] cm³', l * w * h, 'num', l + ' × ' + w + ' × ' + h + ' = <b>' + l * w * h + ' cm³</b>'); }
      if (dif === 2) { var rr = r.int(1, 8), hh = r.int(2, 15), v = Math.round(3.14 * rr * rr * hh * 100) / 100; return it('Un tanque cilíndrico tiene radio ' + rr + ' m y altura ' + hh + ' m (π ≈ 3,14). Volumen: [[0]] m³', fmt(v), 'aprox', '3,14 × ' + rr + '² × ' + hh + ' = <b>' + fmt(v) + ' m³</b>'); }
      var b = r.int(2, 12), H = r.int(1, 6) * 3; return it('Una pirámide de base cuadrada de lado ' + b + ' cm y altura ' + H + ' cm. Volumen: [[0]] cm³', b * b * H / 3, 'num', '(' + b + '² × ' + H + ') ÷ 3 = <b>' + b * b * H / 3 + ' cm³</b>');
    } });

  /* =================== DINERO Y CAMBIO =================== */
  var DEN = [50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000];
  var BCOL = { 2000: '#7FB3D5', 5000: '#C59B6D', 10000: '#E57373', 20000: '#E6B85C', 50000: '#A98BC9', 100000: '#6BB39A' };
  function pieza(v) {
    if (v <= 1000) { var R = v === 1000 ? 22 : v >= 500 ? 20 : v >= 200 ? 18 : 16, fill = v === 1000 ? '#E9C46A' : v === 500 ? '#D9B44A' : '#C9CED6'; return svg(R * 2 + 4, R * 2 + 4, '<circle cx="' + (R + 2) + '" cy="' + (R + 2) + '" r="' + R + '" fill="' + fill + '" stroke="#6b6b6b" stroke-width="2"/><text x="' + (R + 2) + '" y="' + (R + 6) + '" font-size="' + (R > 18 ? 11 : 10) + '" font-weight="700" text-anchor="middle" fill="#2b2b2b">$' + fmt(v) + '</text>', 'style="vertical-align:middle;margin:2px"'); }
    return svg(104, 50, '<rect x="2" y="2" width="100" height="46" rx="6" fill="' + BCOL[v] + '" stroke="#555" stroke-width="1.5"/><rect x="8" y="8" width="88" height="34" rx="4" fill="none" stroke="rgba(255,255,255,.7)" stroke-dasharray="3 2"/><text x="52" y="31" font-size="15" font-weight="700" text-anchor="middle" fill="#1b2333">$' + fmt(v) + '</text><text x="52" y="44" font-size="6.5" text-anchor="middle" fill="#1b2333">SABI · dinero de juego</text>', 'style="vertical-align:middle;margin:2px"');
  }
  function piezas(lista) { return '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:2px">' + lista.map(pieza).join('') + '</div>'; }
  function descompone(x) { var out = []; DEN.slice().reverse().forEach(function (d) { while (x >= d) { out.push(d); x -= d; } }); return out; }
  var IDEA_DIN = 'El dinero se cuenta <b>de mayor a menor</b>: primero los billetes grandes y luego las monedas. Las vueltas son la diferencia entre lo que pagas y lo que cuesta. En Colombia usamos monedas de $50, $100, $200, $500 y $1.000 y billetes desde $2.000 hasta $100.000.';
  tema('dinero', { id: 'contar', n: '¿Cuánto dinero hay?', g: [0, 4], cols: 1, idea: IDEA_DIN,
    gen: function (r, dif, g) {
      var pool = g === 0 ? [100, 200] : dif === 1 ? [50, 100, 200, 500] : dif === 2 ? [100, 200, 500, 1000, 2000, 5000] : [500, 1000, 2000, 5000, 10000, 20000, 50000], n = g === 0 ? r.int(2, 5) : r.int(3, dif === 3 ? 7 : 6), L = [];
      for (var i = 0; i < n; i++) L.push(r.pick(pool)); L.sort(function (a, b) { return b - a; }); var s = L.reduce(function (a, b) { return a + b; }, 0);
      return it(piezas(r.shuffle(L)) + '¿Cuánto dinero hay en total? [[0]]', s, 'num', 'De mayor a menor: ' + L.map(peso).join(' + ') + ' = <b>' + peso(s) + '</b>', true);
    } });
  tema('dinero', { id: 'vueltas', n: '¿Cuánto me devuelven?', g: [2, 6], cols: 1, idea: IDEA_DIN,
    gen: function (r, dif) {
      var max = dif === 1 ? 5000 : dif === 2 ? 20000 : 100000, p = Math.round(r.int(500, max * 0.9) / (dif === 1 ? 100 : 50)) * (dif === 1 ? 100 : 50), pago = descompone(billete(p)); if (dif === 3 && r.chance(0.5)) pago = descompone(billete(p) + 1000).concat([]);
      var tot = pago.reduce(function (a, b) { return a + b; }, 0), prod = r.pick(['una lonchera', 'un libro', 'una camiseta', 'un balón', 'unos colores', 'un almuerzo']);
      return it('Compras ' + prod + ' que cuesta <b>' + peso(p) + '</b> y pagas con:' + piezas(pago) + '¿Cuánto te devuelven? [[0]]', tot - p, 'num', peso(tot) + ' ' + MINUS + ' ' + peso(p) + ' = <b>' + peso(tot - p) + '</b>', true);
    } });
  tema('dinero', { id: 'exacto', n: 'Paga con la menor cantidad de piezas', g: [3, 6], cols: 1, idea: IDEA_DIN,
    gen: function (r, dif) { var x = Math.round(r.int(dif === 1 ? 300 : 1500, dif === 1 ? 4900 : dif === 2 ? 48000 : 187000) / 50) * 50, d = descompone(x); return it('Quieres pagar exactamente <b>' + peso(x) + '</b> usando la menor cantidad posible de billetes y monedas. ¿Cuántas piezas necesitas? [[0]]', d.length, 'num', '<b>' + d.length + '</b> piezas: ' + d.map(peso).join(' + ')); } });
  tema('dinero', { id: 'lista', n: 'Compras con lista de precios', g: [3, 7], cols: 1, idea: IDEA_DIN,
    gen: function (r, dif) {
      var prods = r.sample(PROD, 5).map(function (p) { return [p[0], precio(r, p)]; }), tabla = '<table class="t" style="max-width:360px"><tr><th>Producto</th><th>Precio</th></tr>' + prods.map(function (p) { return '<tr><td>' + p[0] + '</td><td>' + peso(p[1]) + '</td></tr>'; }).join('') + '</table>';
      var comp = r.sample(prods, dif === 1 ? 2 : 3).map(function (p) { return [p[0], p[1], r.int(1, dif === 1 ? 2 : 4)]; }), tot = comp.reduce(function (a, c) { return a + c[1] * c[2]; }, 0), B = billete(tot);
      return it(tabla + 'Compras: ' + comp.map(function (c) { return c[2] + ' × ' + c[0]; }).join(', ') + '. Total: [[0]] Pagas con ' + peso(B) + '. Vueltas: [[1]]', [tot, B - tot], 'num', comp.map(function (c) { return c[2] + ' × ' + peso(c[1]); }).join(' + ') + ' = <b>' + peso(tot) + '</b>; vueltas <b>' + peso(B - tot) + '</b>', true);
    } });
  tema('dinero', { id: 'ahorro', n: 'Metas de ahorro', g: [4, 8], cols: 1, idea: 'Ahorrar es <b>separar una parte</b> del dinero antes de gastarlo. Dividir la meta entre el ahorro periódico dice cuánto tiempo tardarás; si sobra algo, necesitas un periodo más.',
    gen: function (r, dif) { var a = r.int(2, 10) * (dif === 1 ? 1000 : 500), P = r.int(5, dif === 1 ? 20 : 60) * 1000 + (dif === 3 ? r.int(1, 9) * 100 : 0), n = Math.ceil(P / a); return it('Ahorras ' + peso(a) + ' cada semana para comprar algo de ' + peso(P) + '. ¿Cuántas semanas necesitas como mínimo? [[0]]', n, 'num', fmt(P) + ' ÷ ' + fmt(a) + ' = ' + fmt(Math.round(P / a * 100) / 100) + ' → <b>' + n + ' semanas</b>' + (P % a ? ' (redondeamos hacia arriba)' : '')); } });
  tema('dinero', { id: 'descuento', n: 'Descuentos y ahorro', g: [5, 9], cols: 1, idea: 'Un descuento del p % significa que pagas el (100 − p) % del precio. Calcular el ahorro y el precio final te ayuda a decidir si una oferta conviene.',
    gen: function (r) { var p = r.int(4, 40) * 2500, d = r.pick([10, 15, 20, 25, 30, 40, 50]), ah = p * d / 100; return it('Un artículo cuesta ' + peso(p) + ' con ' + d + ' % de descuento. Ahorras [[0]] y pagas [[1]]', [ah, p - ah], 'num', 'Ahorro: ' + peso(p) + ' × ' + d + '/100 = <b>' + peso(ah) + '</b>; pagas <b>' + peso(p - ah) + '</b>', true); } });
  tema('dinero', { id: 'unitario', n: '¿Qué paquete conviene?', g: [6, 9], cols: 1, idea: 'Para comparar ofertas calculamos el <b>precio por unidad</b> (precio ÷ cantidad). El paquete más grande no siempre es el más barato.',
    gen: function (r) { var u1 = r.int(10, 40) * 50, u2; do { u2 = r.int(10, 40) * 50; } while (u2 === u1); var c1 = r.pick([4, 6, 8]), c2 = r.pick([10, 12, 15]), prod = r.pick(['pandebonos', 'jugos', 'cuadernos', 'yogures']); return it('Paquete a: ' + c1 + ' ' + prod + ' por ' + peso(u1 * c1) + '. Paquete b: ' + c2 + ' ' + prod + ' por ' + peso(u2 * c2) + '. ¿Cuál es más barato por unidad? [[0]]', u1 < u2 ? 'a' : 'b', 'opt', 'a: ' + peso(u1) + ' c/u · b: ' + peso(u2) + ' c/u → <b>' + (u1 < u2 ? 'a' : 'b') + '</b>'); } });

  /* =================== ENCUENTRA EL ERROR =================== */
  function E(g, n, idea, gen) { tema('error', { id: 'e' + TEMAS.error.length, n: n, g: g, cols: 1, idea: idea || 'Los errores son <b>oportunidades para aprender</b>. Para encontrar un error: revisa cada paso, pregúntate qué regla se aplicó y comprueba el resultado por otro camino (por ejemplo, con la operación inversa).', gen: gen }); }
  function err(r, prob, trabajo, preg, ans, k, expl, correcto) { var nm = r.pick(NOM); return it('<b>Problema:</b> ' + prob + '<div class="ej" style="border-color:#C2492E;background:#FFF6F3"><b>Así lo resolvió ' + nm + ':</b><br>' + trabajo + '</div><ol style="margin:4px 0;padding-left:20px"><li>Encierra o subraya el paso con el error.</li><li>¿Qué pensó ' + nm + '? <span class="lines" style="display:inline-block;width:60%"></span></li><li>' + (preg || 'Resuélvelo correctamente:') + ' [[0]]</li></ol>', ans, k || 'num', '<b>Error:</b> ' + expl + '<br><b>Correcto:</b> ' + correcto); }
  E([0, 1], 'Contar bien', null, function (r) { var n = r.int(4, 10), m = n + r.pick([-2, -1, 1, 2]); return err(r, 'Cuenta los puntos.', marco(n, COL[0]) + '<br>«Hay ' + m + ' puntos».', '¿Cuántos hay?', n, 'num', 'contó dos veces un punto o se saltó alguno. Conviene señalar cada punto mientras se cuenta.', 'Hay <b>' + n + '</b>.'); });
  E([1, 4], 'Olvidó llevar', null, function (r, dif, g) { var n = Math.min(gradoNd(g), 4), a, b, w; do { a = rnd(r, Math.max(2, n)); b = rnd(r, Math.max(2, n)); w = 0; for (var p = 0; p < Math.max(String(a).length, String(b).length); p++) w += ((Math.floor(a / Math.pow(10, p)) % 10 + Math.floor(b / Math.pow(10, p)) % 10) % 10) * Math.pow(10, p); } while (w === a + b); return err(r, fmt(a) + ' + ' + fmt(b), vert([a, b], '+').replace('[[0]]', '<b>' + w + '</b>'), null, a + b, 'num', 'en las columnas donde la suma pasaba de 9 escribió solo las unidades y <b>no llevó</b> la decena a la columna siguiente.', fmt(a) + ' + ' + fmt(b) + ' = <b>' + fmt(a + b) + '</b>'); });
  E([2, 5], 'Restó al revés', null, function (r, dif, g) { var n = Math.max(2, Math.min(gradoNd(g), 4)), a, b, w; do { a = rnd(r, n); b = rnd(r, n); if (a < b) { var t = a; a = b; b = t; } w = 0; for (var p = 0; p < n; p++) w += Math.abs(Math.floor(a / Math.pow(10, p)) % 10 - Math.floor(b / Math.pow(10, p)) % 10) * Math.pow(10, p); } while (w === a - b || a === b); return err(r, fmt(a) + ' ' + MINUS + ' ' + fmt(b), vert([a, b], MINUS).replace('[[0]]', '<b>' + w + '</b>'), null, a - b, 'num', 'en cada columna restó el número menor del mayor, sin importar cuál estaba arriba. Debía <b>desagrupar</b> (pedir prestado).', '<b>' + fmt(a - b) + '</b>. Comprobación: ' + fmt(a - b) + ' + ' + fmt(b) + ' = ' + fmt(a)); });
  E([4, 6], 'El cero en el cociente', null, function (r) { var d = r.int(2, 9), q = r.int(1, 9) * 100 + r.int(1, 9), D = d * q, w = Math.floor(q / 100) * 10 + q % 10; return err(r, fmt(D) + ' ÷ ' + d, fmt(D) + ' ÷ ' + d + ' = <b>' + w + '</b>', null, q, 'num', 'cuando la cifra bajada era menor que el divisor no escribió el <b>0</b> en el cociente. Comprobación: ' + d + ' × ' + w + ' = ' + d * w + ' ≠ ' + fmt(D) + '.', '<b>' + q + '</b> (' + d + ' × ' + q + ' = ' + fmt(D) + ')'); });
  E([4, 7], 'Productos parciales sin correr', null, function (r) { var a = r.int(12, 99), b = r.int(12, 99), u = b % 10, t = Math.floor(b / 10), w = a * u + a * t; return err(r, a + ' × ' + b, '<div class="vert">  ' + a + '<br>× ' + b + '<div class="ln"></div>  ' + a * u + '<br>+ ' + a * t + '<div class="ln"></div>  <b>' + w + '</b></div>', null, a * b, 'num', 'el segundo producto parcial (' + a + ' × ' + t + ' decenas) debía correrse un lugar a la izquierda: vale ' + a * t * 10 + ', no ' + a * t + '.', a * u + ' + ' + a * t * 10 + ' = <b>' + fmt(a * b) + '</b>'); });
  E([4, 7], 'Sumó numeradores y denominadores', null, function (r) { var b = r.int(2, 6), d = r.int(2, 6), a = r.int(1, b - 1), c = r.int(1, d - 1), m = T.lcm(b, d), f = T.frac(a * m / b + c * m / d, m); return err(r, F(a, b) + ' + ' + F(c, d), F(a, b) + ' + ' + F(c, d) + ' = ' + F(a + c, b + d), null, T.fstr(f), 'frac', 'sumó los denominadores. Las partes deben ser del <b>mismo tamaño</b>: primero se busca un denominador común.', F(a * m / b, m) + ' + ' + F(c * m / d, m) + ' = <b>' + T.fstr(f) + '</b>'); });
  E([5, 7], 'Comas desalineadas', null, function (r) { var a = r.int(11, 99), b = r.int(101, 999), A = a / 10, B = b / 100, w = (a + b) / 100; return err(r, fmt(A) + ' + ' + fmt(B), '<div class="vert">  ' + fmt(A) + '<br>+ ' + fmt(B) + '<div class="ln"></div>  <b>' + fmt(w, 2) + '</b></div>', null, fmt(Math.round((A + B) * 100) / 100), 'num', 'alineó los números por la derecha en lugar de alinear <b>las comas</b>: sumó décimas con centésimas.', fmt(A, 2) + ' + ' + fmt(B, 2) + ' = <b>' + fmt(Math.round((A + B) * 100) / 100) + '</b>'); });
  E([5, 8], 'Operó de izquierda a derecha', null, function (r) { var a = r.int(2, 15), b = r.int(2, 9), c = r.int(2, 9); return err(r, a + ' + ' + b + ' × ' + c, a + ' + ' + b + ' = ' + (a + b) + ';  ' + (a + b) + ' × ' + c + ' = <b>' + (a + b) * c + '</b>', null, a + b * c, 'num', 'resolvió en el orden en que aparecen. La <b>multiplicación va antes</b> que la suma.', b + ' × ' + c + ' = ' + b * c + '; ' + a + ' + ' + b * c + ' = <b>' + (a + b * c) + '</b>'); });
  E([6, 9], 'Restar negativos', null, function (r) { var a = r.int(2, 15), b = r.int(2, 15); return err(r, MINUS + a + ' ' + MINUS + ' (' + MINUS + b + ')', MINUS + a + ' ' + MINUS + ' (' + MINUS + b + ') = ' + MINUS + a + ' ' + MINUS + ' ' + b + ' = <b>' + MINUS + (a + b) + '</b>', null, b - a, 'num', 'restar un negativo equivale a <b>sumar su opuesto</b>: −(−' + b + ') = +' + b + '.', MINUS + a + ' + ' + b + ' = <b>' + fmt(b - a) + '</b>'); });
  E([6, 9], 'Potencia como multiplicación por el exponente', null, function (r) { var a = r.int(3, 9), n = r.int(2, 3); return err(r, a + sup(n), a + sup(n) + ' = ' + a + ' × ' + n + ' = <b>' + a * n + '</b>', null, Math.pow(a, n), 'num', 'multiplicó la base por el exponente. El exponente indica <b>cuántas veces se multiplica la base por sí misma</b>.', Array(n).fill(a).join(' × ') + ' = <b>' + Math.pow(a, n) + '</b>'); });
  E([6, 9], 'Porcentaje mal calculado', null, function (r) { var p = r.pick([20, 25, 40, 50]), N = r.int(2, 20) * 20; return err(r, p + ' % de ' + N, N + ' ÷ ' + p + ' = <b>' + fmt(Math.round(N / p * 100) / 100) + '</b>', null, N * p / 100, 'num', 'dividió la cantidad entre el porcentaje. El p % es <b>p partes de cada 100</b>: cantidad × p ÷ 100.', N + ' × ' + p + ' ÷ 100 = <b>' + N * p / 100 + '</b>'); });
  E([3, 6], 'Confundió perímetro y área', null, function (r) { var l = r.int(3, 12), w = r.int(2, 9); return err(r, 'Perímetro de un rectángulo de ' + l + ' cm por ' + w + ' cm', l + ' × ' + w + ' = <b>' + l * w + ' cm</b>', '¿Cuál es el perímetro? (cm)', 2 * (l + w), 'num', 'calculó el <b>área</b> (lo que cubre) en vez del <b>perímetro</b> (el borde). Además, el área se mide en cm², no en cm.', '2 × (' + l + ' + ' + w + ') = <b>' + 2 * (l + w) + ' cm</b>'); });
  E([7, 10], 'Transposición con signo equivocado', null, function (r) { var a = r.int(2, 9), x = r.int(1, 12), b = r.int(2, 20), c = a * x + b; return err(r, a + 'x + ' + b + ' = ' + c, a + 'x = ' + c + ' + ' + b + ' = ' + (c + b) + '<br>x = ' + (c + b) + ' ÷ ' + a + ' = <b>' + fmt(Math.round((c + b) / a * 100) / 100) + '</b>', 'Halla x correctamente:', x, 'x', 'al pasar +' + b + ' al otro lado no cambió la operación: debía <b>restar</b> ' + b + ' en ambos lados.', a + 'x = ' + c + ' ' + MINUS + ' ' + b + ' = ' + (c - b) + '; <b>x = ' + x + '</b>. Comprobación: ' + a + '·' + x + ' + ' + b + ' = ' + c); });
  E([8, 11], 'El binomio al cuadrado', null, function (r) { var b = r.int(2, 9); return err(r, '(x + ' + b + ')' + sup(2), '(x + ' + b + ')' + sup(2) + ' = x' + sup(2) + ' + ' + b * b, 'Escribe el desarrollo correcto:', 'x^2+' + 2 * b + 'x+' + b * b, 'poly', 'elevó cada término por separado. (a + b)² = (a + b)(a + b) = a² + <b>2ab</b> + b²: le faltó el doble producto.', '<b>x² + ' + 2 * b + 'x + ' + b * b + '</b>'); });

  /* ---------- consulta pública ---------- */
  M.temasDe = function (tipo, g, todos) { return TEMAS[tipo].filter(function (t) { return todos || (g >= t.g[0] && g <= t.g[1]); }); };
  M.items = function (tm, r, dif, g, cant, o) {
    var out = [], vistos = {};
    for (var i = 0, intentos = 0; out.length < cant && intentos < cant * 8; intentos++) { var x = tm.gen(r, dif, g, o); var key = x.q + '|' + x.a.join(','); if (vistos[key] && intentos < cant * 6) continue; vistos[key] = 1; out.push(x); i++; }
    return out;
  };
  function relleno(x, mostrar) {
    var q = x.q, usados = {};
    q = q.replace(/\[\[(\d+)\]\]/g, function (_, i) { usados[i] = 1; return mostrar ? '<b style="color:#1D9E75;border-bottom:1.5px solid #1D9E75;padding:0 4px">' + esc(x.a[i]).replace(/\|.*/, '') + '</b>' : T.input(x.a[i], x.k[i], x.w || /poly|set|sci|pair|text|time/.test(x.k[i])); });
    x.a.forEach(function (a, i) { if (!usados[i]) q += ' ' + (mostrar ? '<b style="color:#1D9E75">' + esc(a) + '</b>' : T.input(a, x.k[i], x.w)); });
    return q;
  }
  M.relleno = relleno;
  M.qa = function (x) { return { q: T.plain(x.q.replace(/\[\[\d+\]\]/g, '___')), a: x.a.map(function (a) { return a.replace(/\|.*/, ''); }).join(' ; ') }; };

  /* ---------- vista ---------- */
  var S = { tipo: 'calculo', tema: null, dif: 2, cant: 12, seed: T.semilla(), todos: false, o: { llevar: 'auto', formato: 'vertical' } };
  M.estado = S;
  function render(app) {
    var g = T.gnum(T.state.grado), temas = M.temasDe(S.tipo, g, S.todos);
    if (!temas.length) { S.todos = true; temas = M.temasDe(S.tipo, g, true); }
    if (!temas.some(function (t) { return t.id === S.tema; })) S.tema = temas[0].id;
    var tm = TEMAS[S.tipo].filter(function (t) { return t.id === S.tema; })[0];
    app.innerHTML = '<div class="lay"><aside class="panel no-print"><h3>➗ Fichas de matemáticas</h3><p class="lead">«Una buena ficha empieza con una buena idea». Generadores infinitos: cada semilla produce una ficha distinta, con clave.</p>' +
      '<div class="fld"><span>Tipo de ficha</span><div class="chips">' + M.TIPOS.map(function (t) { return '<button class="chip' + (t.id === S.tipo ? ' on' : '') + '" data-tipo="' + t.id + '" title="' + esc(t.d) + '">' + t.ic + ' ' + t.n + '</button>'; }).join('') + '</div></div>' +
      '<label class="fld"><span>Tema (' + T.gname(T.state.grado) + ')</span><select id="m-tema">' + temas.map(function (t) { return '<option value="' + t.id + '"' + (t.id === S.tema ? ' selected' : '') + '>' + esc(t.n) + (S.todos ? ' · ' + (t.g[0] ? t.g[0] + '.°' : 'Tr') + '–' + t.g[1] + '.°' : '') + '</option>'; }).join('') + '</select></label>' +
      '<label class="muted"><input type="checkbox" id="m-todos"' + (S.todos ? ' checked' : '') + '> Ver temas de todos los grados</label>' +
      '<div class="fld"><span>Dificultad</span><div class="chips">' + [[1, 'Básico'], [2, 'Intermedio'], [3, 'Avanzado']].map(function (d) { return '<button class="chip' + (d[0] === S.dif ? ' on' : '') + '" data-dif="' + d[0] + '">' + d[1] + '</button>'; }).join('') + '</div></div>' +
      '<label class="fld"><span>Cantidad de ejercicios</span><input type="number" id="m-cant" min="2" max="40" value="' + S.cant + '"></label>' +
      (tm.opciones && tm.opciones.indexOf('llevar') > -1 ? '<label class="fld"><span>Llevar / prestar</span><select id="m-llevar"><option value="auto">Según dificultad</option><option value="sin">Sin llevar</option><option value="con">Con llevar</option></select></label>' : '') +
      (tm.opciones && tm.opciones.indexOf('formato') > -1 ? '<label class="fld"><span>Formato</span><select id="m-formato"><option value="vertical">Vertical (en columnas)</option><option value="horizontal">Horizontal</option></select></label>' : '') +
      '<label class="fld"><span>Semilla (n.º de ficha)</span><input type="number" id="m-seed" value="' + S.seed + '"></label>' +
      '<button class="btn g" id="m-nueva">🎲 Nueva ficha</button><button class="btn o" id="m-aya">🧰 Usar en ayudas didácticas</button>' +
      '<div class="note">Imprime con la clave del docente o resuélvela en pantalla con «Comprobar». La misma semilla reproduce la misma ficha.</div></aside>' +
      '<section><div id="m-out"></div></section></div>';
    var $ = function (s) { return T.$(s, app); };
    T.$$('[data-tipo]', app).forEach(function (b) { b.onclick = function () { S.tipo = b.dataset.tipo; S.tema = null; render(app); }; });
    T.$$('[data-dif]', app).forEach(function (b) { b.onclick = function () { S.dif = +b.dataset.dif; render(app); }; });
    $('#m-tema').onchange = function () { S.tema = this.value; render(app); };
    $('#m-todos').onchange = function () { S.todos = this.checked; render(app); };
    $('#m-cant').onchange = function () { S.cant = Math.max(2, Math.min(40, +this.value || 12)); dibujar(); };
    $('#m-seed').onchange = function () { S.seed = +this.value || T.semilla(); dibujar(); };
    if ($('#m-llevar')) { $('#m-llevar').value = S.o.llevar; $('#m-llevar').onchange = function () { S.o.llevar = this.value; dibujar(); }; }
    if ($('#m-formato')) { $('#m-formato').value = S.o.formato; $('#m-formato').onchange = function () { S.o.formato = this.value; dibujar(); }; }
    $('#m-nueva').onclick = function () { S.seed = T.semilla(); $('#m-seed').value = S.seed; dibujar(); };
    $('#m-aya').onclick = function () { var r = T.rng(S.seed), xs = M.items(tm, r, S.dif, g, S.cant, S.o); T.store('fuente_qa', { titulo: tm.n, qa: xs.map(M.qa) }); T.ir('ayudas'); T.toast('Ejercicios enviados a Ayudas didácticas'); };
    function dibujar() {
      var r = T.rng(S.seed), tipo = M.TIPOS.filter(function (t) { return t.id === S.tipo; })[0], ej = tm.gen(r, S.dif, g, S.o), xs = M.items(tm, r, S.dif, g, S.cant, S.o), reto = tm.gen(r, Math.min(3, S.dif + 1), g, S.o);
      var cls = tm.cols === 1 ? 'items uno' : tm.cols === 3 ? 'items tres' : 'items';
      var hoja = '<div class="hoja">' + T.cabecera(tipo.ic + ' ' + esc(tm.n), tipo.n + ' · Dificultad ' + ['', 'básica', 'intermedia', 'avanzada'][S.dif]) +
        '<div class="idea">💡 <b>La gran idea:</b> ' + tm.idea + '</div>' +
        '<div class="ej">✍️ <b>Ejemplo resuelto:</b><div>' + relleno(ej, true) + '</div><div class="sol">' + ej.sol + '</div></div>' +
        '<h3>Practica</h3><div class="' + cls + '">' + xs.map(function (x, i) { return '<div class="it"><span class="n">' + (i + 1) + '</span><div class="c">' + relleno(x) + '</div></div>'; }).join('') + '</div>' +
        '<div class="reto">🚀 <b>Reto:</b> <div class="it" style="border:0"><div class="c">' + relleno(reto) + '</div></div></div>' +
        '<p class="muted">✋ Antes de entregar: ¿revisé cada respuesta?, ¿puedo explicarle a un compañero cómo lo hice?</p>' + T.semaforo() + T.pie('Ficha n.º ' + S.seed) + '</div>';
      var clave = '<div class="hoja clave">' + T.cabecera('🔑 Clave del docente', tm.n + ' · Ficha n.º ' + S.seed) + '<ol>' + xs.concat([reto]).map(function (x, i) { return '<li' + (i === xs.length ? ' style="list-style:none;margin-left:-18px"' : '') + '>' + (i === xs.length ? '🚀 <b>Reto:</b> ' : '') + '<div class="sol">' + x.sol + '</div></li>'; }).join('') + '</ol>' + T.pie('Ficha n.º ' + S.seed) + '</div>';
      var out = $('#m-out'); out.innerHTML = T.barraHojas({ comprobar: true }) + '<div class="hojas">' + hoja + clave + '</div>';
      T.enlazarBarra(out);
      T.$$('.opt[data-l]', out).forEach(function (o) { o.onclick = function () { var inp = T.$('input.ans', o.closest('.it') || o.closest('.c')); if (inp) { inp.value = o.dataset.l; T.$$('.opt', o.parentNode).forEach(function (x) { x.classList.toggle('ok', x === o); }); } }; });
    }
    dibujar();
  }
  T.registrar({ id: 'mate', icon: '➗', label: 'Matemáticas', render: render });
})();
