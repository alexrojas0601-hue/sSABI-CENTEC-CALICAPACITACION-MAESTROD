/* SABI Taller de Aula · vistas de contenido: Inicio, Ciencia (POE), Lectura (6 secciones), Comandos IA, DBA.
   Carga perezosa de taller/data/*.js; si un archivo no carga se muestra un aviso amable.
   Antes de pintar algo asíncrono se comprueba que el contenedor siga en el documento y que el grado no haya cambiado. */
(function () {
  'use strict';
  var T = window.SABI_TALLER = window.SABI_TALLER || {};
  var esc = T.esc;

  /* ---------- utilidades ---------- */
  function turno(app) { var m = {}, tab = T.state.tab; app.__sabiTurno = m; return function () { return app.__sabiTurno === m && T.state.tab === tab && document.body.contains(app); }; }
  function vivo(el, g) { return !!el && document.body.contains(el) && (g == null || T.state.grado === g); }
  function aviso(txt) { return '<div class="note">😊 ' + txt + '</div>'; }
  function lineas(n) { var s = ''; for (var i = 0; i < (n || 1); i++) s += '<div class="lines"></div>'; return s; }
  function hash(s) { var h = 2166136261; s = String(s); for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function norm(s) { return T.sinTildes(String(s || '').toLowerCase()); }
  T.copiar = function (txt) {
    function viejo() {
      try { var ta = document.createElement('textarea'); ta.value = txt; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); var ok = document.execCommand('copy'); ta.remove(); T.toast(ok ? 'Copiado al portapapeles' : 'Selecciona el texto y cópialo con Ctrl+C'); } catch (e) { T.toast('Selecciona el texto y cópialo con Ctrl+C'); }
    }
    try {
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(txt).then(function () { T.toast('Copiado al portapapeles'); }, viejo);
      else viejo();
    } catch (e) { viejo(); }
  };
  T.descargar = function (nombre, txt, tipo) {
    try {
      var b = new Blob([txt], { type: tipo || 'text/markdown;charset=utf-8' }), u = URL.createObjectURL(b), a = document.createElement('a');
      a.href = u; a.download = nombre; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(u); }, 1500);
    } catch (e) { T.toast('No se pudo descargar; copie el texto'); }
  };
  /* markdown simple y seguro: se escapa todo y luego se interpretan títulos, listas, citas, negritas y código */
  T.md = function (src) {
    var out = [], lista = null;
    function cerrar() { if (lista) { out.push('</' + lista + '>'); lista = null; } }
    function inl(s) { return esc(s).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/`([^`]+)`/g, '<code>$1</code>').replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<i>$2</i>'); }
    String(src || '').split(/\r?\n/).forEach(function (l) {
      var m;
      if (!l.trim()) { cerrar(); return; }
      if ((m = l.match(/^(#{1,4})\s+(.*)$/))) { cerrar(); var n = Math.min(4, m[1].length + 1); out.push('<h' + n + '>' + inl(m[2]) + '</h' + n + '>'); return; }
      if ((m = l.match(/^\s*[-*•]\s+(.*)$/))) { if (lista !== 'ul') { cerrar(); out.push('<ul>'); lista = 'ul'; } out.push('<li>' + inl(m[1]) + '</li>'); return; }
      if ((m = l.match(/^\s*\d+[.)]\s+(.*)$/))) { if (lista !== 'ol') { cerrar(); out.push('<ol>'); lista = 'ol'; } out.push('<li>' + inl(m[1]) + '</li>'); return; }
      if ((m = l.match(/^>\s?(.*)$/))) { cerrar(); out.push('<blockquote>' + inl(m[1]) + '</blockquote>'); return; }
      cerrar(); out.push('<p>' + inl(l) + '</p>');
    });
    cerrar();
    return out.join('');
  };

  var EJES = [['materia', '🧊', 'Materia y cambios'], ['fuerza', '⚙️', 'Fuerza y movimiento'], ['energia', '💡', 'Luz, sonido y energía'], ['vida', '🌱', 'Seres vivos y cuerpo humano'], ['quimica', '🧪', 'Química'], ['tierra', '🌎', 'Tierra y ambiente']];
  function eje(id) { return EJES.filter(function (e) { return e[0] === id; })[0] || ['', '🔬', id]; }

  /* =================== INICIO =================== */
  function inicio(app) {
    var g = T.state.grado, gn = T.gnum(g), nm = 0;
    if (T.mate && T.mate.TIPOS) T.mate.TIPOS.forEach(function (t) { nm += T.mate.temasDe(t.id, gn).length; });
    var tarjetas = [
      ['ciencia', '🔬', 'Ciencia por experimentos', 'Predice, observa y explica (POE). Fichas con seguridad, registro y clave.', 'c-cien', '#1D9E75'],
      ['mate', '➗', 'Fichas de matemáticas', 'Cálculo a medida, problemas cotidianos, series, geometría visual, dinero y «encuentra el error».', 'c-mate', '#D4A843'],
      ['lectura', '📚', 'Comprensión lectora', 'Lo que dice el texto, leer entre líneas, palabras en contexto, ¿dónde lo pone?, orden y causas, piensa y argumenta.', 'c-lec', '#1B7FA6'],
      ['ayudas', '🧰', 'Ayudas didácticas', 'Hoja de trabajo, escape room, detective, tablero, estaciones, manipulativos, historieta, lapbook, puzzles y minilibro.', 'c-aya', '#D85A30'],
      ['comandos', '🤖', 'Comandos IA', 'Biblioteca de comandos para pensar mejor, aprender rápido y crear material con IA, y el Prompt Maestro v2.', 'c-cmd', '#7F77DD'],
      ['dba', '📜', 'DBA del MEN', 'Derechos Básicos de Aprendizaje del grado en Ciencias, Matemáticas y Lenguaje, con su fuente.', 'c-dba', '#0B1E3D']
    ];
    app.innerHTML = '<div class="hero"><h1>Taller de Aula SABI · ' + esc(T.gname(g)) + '</h1><p>Una fábrica didáctica para que <b>cada niño y cada joven verdaderamente aprenda</b>: experimentar, calcular, leer, jugar y pensar, con material imprimible, clave del docente y alineación a los DBA y EBC del MEN.</p>' +
      '<p class="lemas"><span>📚 «Leer es comprender, relacionar y pensar»</span><span>➗ «Una buena ficha empieza con una buena idea»</span></p></div>' +
      '<div class="home">' + tarjetas.map(function (t) { return '<button class="card" data-ir="' + t[0] + '" style="border-left-color:' + t[5] + '"><span class="ic">' + t[1] + '</span><b>' + t[2] + '</b><small>' + t[3] + '</small><div class="cnt" id="' + t[4] + '">…</div></button>'; }).join('') + '</div>' +
      '<div class="grid2" style="margin-top:16px"><div class="qbox"><h3 style="margin:0 0 6px">🧠 Cierre metacognitivo (al final de cada clase)</h3><ol><li><b>¿Qué aprendí?</b> Lo digo con mis propias palabras.</li><li><b>¿Cómo sé que lo comprendí?</b> Lo explico a un compañero o resuelvo un ejercicio nuevo.</li><li><b>¿Cómo lo aplico?</b> Un ejemplo de mi vida, mi casa o mi ciudad.</li><li><b>¿Qué errores debo evitar?</b></li><li><b>¿Qué necesito practicar para dominarlo?</b></li></ol>' + T.semaforo() + '</div>' +
      '<div class="qbox"><h3 style="margin:0 0 6px">🗺 Ruta sugerida de una clase</h3><ol><li>🔬 Abre con una pregunta o un experimento (curiosidad).</li><li>💡 Explica la gran idea con un ejemplo resuelto.</li><li>✍️ Práctica guiada con una ficha (clave para corregir).</li><li>🎲 Consolida jugando: escape room, tablero o estaciones.</li><li>🧠 Cierra con el protocolo metacognitivo y un ticket de salida.</li></ol><p class="muted">Formación CENTEC: niños y jóvenes lúcidos, fuertes, cultos y sanos; respeto, honestidad y cuidado del ambiente.</p></div></div>';
    T.$$('[data-ir]', app).forEach(function (b) { b.onclick = function () { T.ir(b.dataset.ir); }; });
    var put = function (id, txt) { var el = T.$('#' + id, app); if (vivo(el, g)) el.textContent = txt; };
    put('c-mate', nm + ' temas para ' + T.gname(g) + ' · 6 tipos de ficha');
    put('c-aya', '10 ayudas · 4 fuentes de contenido');
    T.cargar('ciencias_' + g + '.js').then(function (ok) { var L = T.ciencias && T.ciencias[g]; put('c-cien', ok && L ? L.length + ' experimentos para ' + T.gname(g) : 'Banco no disponible por ahora'); });
    T.cargar('lectura_' + g + '.js').then(function (ok) { var L = T.lectura && T.lectura[g]; put('c-lec', ok && L ? L.length + ' lecturas originales · ' + L.length * 6 + ' secciones de práctica' : 'Lecturas no disponibles por ahora'); });
    T.cargar('comandos.js').then(function (ok) { put('c-cmd', ok && T.comandos ? T.comandos.length + ' comandos + Prompt Maestro v2' : 'Biblioteca no disponible por ahora'); });
    Promise.all(['ciencias', 'matematicas', 'lenguaje'].map(function (a) { return T.cargar('dba_' + a + '.js'); })).then(function () {
      var n = 0; ['ciencias', 'matematicas', 'lenguaje'].forEach(function (a) { var d = T.dba && T.dba[a]; if (d && d[g]) n += d[g].length; });
      put('c-dba', n ? n + ' DBA de ' + T.gname(g) + ' en 3 áreas' : 'DBA no disponibles por ahora');
    });
  }

  /* =================== CIENCIA =================== */
  var SC = { eje: '', q: '', sel: null };
  function ciencia(app) {
    var g = T.state.grado;
    var sigue = turno(app);
    app.innerHTML = '<p class="muted">Cargando experimentos de ' + esc(T.gname(g)) + '…</p>';
    T.cargar('ciencias_' + g + '.js').then(function (ok) {
      if (!sigue() || T.state.grado !== g) return;
      var L = (T.ciencias && T.ciencias[g]) || [];
      if (!ok || !L.length) { app.innerHTML = aviso('El banco de experimentos de ' + esc(T.gname(g)) + ' no está disponible por ahora. Intente más tarde o elija otro grado.'); return; }
      pintarCiencia(app, g, L);
    });
  }
  function pintarCiencia(app, g, L) {
    app.innerHTML = '<div class="lay"><aside class="panel no-print"><h3>🔬 Ciencia por experimentos</h3><p class="lead">' + L.length + ' experimentos seguros para ' + esc(T.gname(g)) + '. Método POE: <b>P</b>redigo, <b>O</b>bservo, <b>E</b>xplico.</p>' +
      '<div class="fld"><span>Eje</span><div class="chips"><button class="chip' + (!SC.eje ? ' on' : '') + '" data-eje="">Todos <small>' + L.length + '</small></button>' + EJES.map(function (e) { var n = L.filter(function (x) { return x.eje === e[0]; }).length; return '<button class="chip' + (SC.eje === e[0] ? ' on' : '') + '" data-eje="' + e[0] + '" title="' + e[2] + '">' + e[1] + ' ' + e[2] + ' <small>' + n + '</small></button>'; }).join('') + '</div></div>' +
      '<label class="fld"><span>Buscar</span><input type="text" id="c-q" placeholder="imán, densidad, semillas…" value="' + esc(SC.q) + '"></label>' +
      '<div class="list" id="c-list"></div></aside><section id="c-out"></section></div>';
    var lista = T.$('#c-list', app), out = T.$('#c-out', app);
    function filtrados() { var q = norm(SC.q); return L.filter(function (x) { return (!SC.eje || x.eje === SC.eje) && (!q || norm([x.titulo, x.pregunta, (x.conceptos || []).join(' '), x.id].join(' ')).indexOf(q) > -1); }); }
    function pintarLista() {
      var F = filtrados();
      if (!F.some(function (x) { return x.id === SC.sel; })) SC.sel = F.length ? F[0].id : null;
      lista.innerHTML = F.length ? F.map(function (x) { var e = eje(x.eje); return '<button class="card' + (x.id === SC.sel ? ' on' : '') + '" data-id="' + esc(x.id) + '"><b>' + e[1] + ' ' + esc(x.titulo) + '</b><small>' + esc(x.id) + ' · ' + esc(x.tiempo) + ' min · riesgo ' + esc(x.riesgo) + '</small></button>'; }).join('') : '<p class="muted">Sin resultados. Pruebe otra palabra.</p>';
      T.$$('[data-id]', lista).forEach(function (b) { b.onclick = function () { SC.sel = b.dataset.id; T.$$('[data-id]', lista).forEach(function (x) { x.classList.toggle('on', x === b); }); ficha(); if (window.innerWidth < 900) out.scrollIntoView({ behavior: 'smooth' }); }; });
      ficha();
    }
    function ficha() {
      var x = L.filter(function (e) { return e.id === SC.sel; })[0];
      if (!x) { out.innerHTML = aviso('Elija un experimento de la lista.'); return; }
      var e = eje(x.eje), medio = x.riesgo === 'medio';
      var tabla = '';
      if (x.registro && x.registro.columnas && x.registro.columnas.length) {
        tabla = '<table class="t"><tr>' + x.registro.columnas.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + '</tr>';
        for (var i = 0; i < 4; i++) tabla += '<tr>' + x.registro.columnas.map(function () { return '<td class="e"></td>'; }).join('') + '</tr>';
        tabla += '</table>';
      } else tabla = '<p class="muted">Dibuja o escribe lo que observas:</p>' + lineas(3);
      var hoja = '<div class="hoja">' + T.cabecera(e[1] + ' ' + esc(x.titulo), 'Ciencias Naturales · ' + e[2] + ' · ' + x.id) +
        '<p><span class="tag t">' + e[2] + '</span><span class="tag">⏱ ' + esc(x.tiempo) + ' min</span><span class="tag' + (medio ? ' r' : '') + '">Riesgo ' + esc(x.riesgo) + '</span></p>' +
        '<div class="seg' + (medio ? ' medio' : '') + '">⚠️ <b>Seguridad' + (medio ? ' · con el docente o un adulto' : '') + ':</b> ' + esc(x.seguridad) + '</div>' +
        '<div class="idea">❓ <b>Pregunta para investigar:</b> ' + esc(x.pregunta) + '</div>' +
        '<h3>P · Predigo</h3><p>' + esc(x.prediccion) + '</p>' + lineas(2) +
        '<div class="grid2"><div><h3>🧰 Materiales</h3><ul>' + (x.materiales || []).map(function (m) { return '<li>' + esc(m) + '</li>'; }).join('') + '</ul></div><div><h3>👣 Pasos</h3><ol>' + (x.pasos || []).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ol></div></div>' +
        '<h3>O · Observo</h3><p>' + esc(x.observa) + '</p>' + tabla +
        '<h3>E · Explico</h3><p>¿Qué pasó? ¿Se cumplió mi predicción? ¿Por qué crees que ocurrió?</p>' + lineas(3) +
        '<div class="reto">🚀 <b>Reto:</b> ' + esc(x.reto) + '</div>' +
        '<p>🏙 <b>En mi vida:</b> ' + esc(x.conexion) + '</p>' + T.semaforo() + T.pie(x.id + ' · ' + x.dba) + '</div>';
      var clave = '<div class="hoja clave">' + T.cabecera('🔑 Clave del docente · ' + esc(x.titulo), x.id + ' · ' + e[2]) +
        '<h3>Resultado esperado</h3><p>' + esc(x.resultado) + '</p><h3>¿Por qué ocurre?</h3><p>' + esc(x.porque) + '</p>' +
        '<p><b>Conceptos:</b> ' + (x.conceptos || []).map(function (c) { return '<span class="tag t">' + esc(c) + '</span>'; }).join(' ') + '</p>' +
        '<p><b>Referente curricular:</b> ' + esc(x.dba) + '</p><div class="seg' + (medio ? ' medio' : '') + '">⚠️ <b>Seguridad (riesgo ' + esc(x.riesgo) + '):</b> ' + esc(x.seguridad) + '</div>' +
        '<p class="muted">Sugerencia: antes de explicar, pida a cada estudiante comparar su predicción con lo observado. El error en la predicción es una oportunidad para aprender.</p>' + T.pie(x.id) + '</div>';
      out.innerHTML = T.barraHojas({ extra: '<button class="btn o" id="c-aya">🧰 Enviar conceptos a Ayudas</button>' }) + '<div class="hojas">' + hoja + clave + '</div>';
      T.enlazarBarra(out);
      T.$('#c-aya', out).onclick = function () {
        var grupo = [x].concat(L.filter(function (y) { return y.eje === x.eje && y.id !== x.id; }).slice(0, 7)), qa = [], pal = [];
        grupo.forEach(function (y) {
          qa.push({ q: y.pregunta, a: (String(y.resultado || y.porque).match(/^[\s\S]*?[.!?](\s|$)/) || [y.resultado || y.porque])[0].trim() });
          (y.conceptos || []).forEach(function (c) { pal.push({ w: c, d: 'Concepto clave del experimento «' + y.titulo + '»' }); });
        });
        T.store('fuente_qa', { titulo: 'Ciencia · ' + e[2], qa: qa, pal: pal });
        if (T.ayudas && T.ayudas.estado) T.ayudas.estado.fuente = 'enviado';
        T.ir('ayudas'); T.toast('Conceptos enviados a Ayudas didácticas');
      };
    }
    T.$$('[data-eje]', app).forEach(function (b) { b.onclick = function () { SC.eje = b.dataset.eje; T.$$('[data-eje]', app).forEach(function (x) { x.classList.toggle('on', x === b); }); pintarLista(); }; });
    T.$('#c-q', app).oninput = function () { SC.q = this.value; pintarLista(); };
    pintarLista();
  }

  /* =================== LECTURA =================== */
  var SL = { id: null, sec: 1, modo: 'int', st: {} };
  var SECS = [[1, '🔎', 'Lo que dice el texto'], [2, '🕯', 'Leer entre líneas'], [3, '🔤', 'Palabras en contexto'], [4, '📍', '¿Dónde lo pone?'], [5, '🔗', 'Orden y causas'], [6, '💭', 'Piensa y argumenta']];
  function lectura(app) {
    var g = T.state.grado;
    var sigue = turno(app);
    app.innerHTML = '<p class="muted">Cargando lecturas de ' + esc(T.gname(g)) + '…</p>';
    T.cargar('lectura_' + g + '.js').then(function (ok) {
      if (!sigue() || T.state.grado !== g) return;
      var L = (T.lectura && T.lectura[g]) || [];
      if (!ok || !L.length) { app.innerHTML = aviso('Las lecturas de ' + esc(T.gname(g)) + ' no están disponibles por ahora. Intente más tarde o elija otro grado.'); return; }
      pintarLectura(app, g, L);
    });
  }
  function sentLabel(s) { return '¶' + (s[0] + 1) + ' · oración ' + (s[1] + 1); }
  function oracion(t, s) { return (t.parrafos[s[0]] || [])[s[1]] || ''; }
  function resaltar(txt, w) {
    if (!w) return esc(txt);
    var k = norm(txt).indexOf(norm(w));
    if (k < 0) return esc(txt);
    return esc(txt.slice(0, k)) + '<mark>' + esc(txt.slice(k, k + w.length)) + '</mark>' + esc(txt.slice(k + w.length));
  }
  function textoHTML(t, marcas, numeros) {
    return '<div class="texto">' + t.parrafos.map(function (P, p) {
      return '<p>' + P.map(function (o, s) { var w = marcas && marcas[p + ',' + s]; return '<span class="sent" data-p="' + p + '" data-s="' + s + '"><sup>' + (numeros ? (p + 1) + '.' : '') + (s + 1) + '</sup>' + resaltar(o, w) + '</span> '; }).join('') + '</p>';
    }).join('') + '</div>';
  }
  function pintarLectura(app, g, L) {
    if (!L.some(function (t) { return t.id === SL.id; })) SL.id = L[0].id;
    var t = L.filter(function (x) { return x.id === SL.id; })[0];
    var st = SL.st[t.id] = SL.st[t.id] || { lit: {}, ent: {}, ctx: {}, don: {}, causas: {}, arg: {}, act: null };
    if (!st.orden) st.orden = T.rng(hash(t.id)).shuffle(t.orden.map(function (_, i) { return i; }));
    if (!st.efectos) st.efectos = T.rng(hash(t.id) + 7).shuffle(t.causas.map(function (_, i) { return i; }));
    app.innerHTML = '<div class="lay"><aside class="panel no-print"><h3>📚 Comprensión lectora</h3><p class="lead"><b>Leer es comprender, relacionar y pensar.</b> ' + L.length + ' textos originales para ' + esc(T.gname(g)) + '.</p>' +
      '<div class="list">' + L.map(function (x) { return '<button class="card' + (x.id === t.id ? ' on' : '') + '" data-lid="' + esc(x.id) + '"><b>' + esc(x.titulo) + '</b><small>' + esc(x.tipo) + ' · ' + esc(x.id) + '</small></button>'; }).join('') + '</div>' +
      '<div class="fld"><span>Modo</span><div class="chips"><button class="chip' + (SL.modo === 'int' ? ' on' : '') + '" data-modo="int">🖱 Interactivo</button><button class="chip' + (SL.modo === 'print' ? ' on' : '') + '" data-modo="print">🖨 Hoja imprimible</button></div></div>' +
      '<p class="muted">' + esc(t.dba) + '</p></aside><section id="l-out"></section></div>';
    T.$$('[data-lid]', app).forEach(function (b) { b.onclick = function () { SL.id = b.dataset.lid; pintarLectura(app, g, L); }; });
    T.$$('[data-modo]', app).forEach(function (b) { b.onclick = function () { SL.modo = b.dataset.modo; pintarLectura(app, g, L); }; });
    var out = T.$('#l-out', app);
    if (SL.modo === 'print') { out.innerHTML = imprimibleLectura(t); T.enlazarBarra(out); return; }
    function marcas() { var m = {}; if (SL.sec === 3) t.contexto.forEach(function (c) { m[c.s[0] + ',' + c.s[1]] = c.w; }); return m; }
    out.innerHTML = '<div class="hoja"><h2>' + esc(t.titulo) + '</h2><p class="muted">' + esc(t.tipo) + ' · ' + esc(t.autor || 'Texto original SABI CENTEC') + '</p><div id="l-txt"></div></div>' +
      '<div class="secs no-print">' + SECS.map(function (s) { return '<button class="chip' + (s[0] === SL.sec ? ' on' : '') + '" data-sec="' + s[0] + '">' + s[1] + ' ' + s[0] + '. ' + s[2] + '</button>'; }).join('') + '</div><div id="l-sec"></div>';
    var txt = T.$('#l-txt', out), sec = T.$('#l-sec', out);
    function pintarTexto() {
      txt.innerHTML = textoHTML(t, marcas());
      T.$$('.sent', txt).forEach(function (el) { el.onclick = function () { elegir([+el.dataset.p, +el.dataset.s]); }; });
      colorear();
    }
    function sentEl(s) { return T.$('.sent[data-p="' + s[0] + '"][data-s="' + s[1] + '"]', txt); }
    function colorear() {
      T.$$('.sent', txt).forEach(function (el) { el.classList.remove('sel', 'ok', 'bad', 'hint'); });
      if (st.act) { var cur = st.act.tipo === 'lit' ? (st.lit[st.act.i] || {}).s : st.don[st.act.i]; if (cur && sentEl(cur)) sentEl(cur).classList.add('sel'); }
    }
    function elegir(s) {
      if (!st.act || (SL.sec !== 1 && SL.sec !== 4)) { T.toast(SL.sec === 1 || SL.sec === 4 ? 'Primero pulsa «📍 Elegir oración» en una pregunta' : 'Elige la sección 1 o 4 para marcar oraciones'); return; }
      if (st.act.tipo === 'lit') { st.lit[st.act.i] = st.lit[st.act.i] || {}; st.lit[st.act.i].s = s; } else st.don[st.act.i] = s;
      var lab = T.$('[data-lab="' + st.act.tipo + st.act.i + '"]', sec); if (lab) lab.textContent = sentLabel(s);
      colorear();
    }
    function igual(a, b) { return !!a && !!b && a[0] === b[0] && a[1] === b[1]; }
    function activar(tipo, i) {
      st.act = { tipo: tipo, i: i };
      T.$$('.qbox', sec).forEach(function (q) { q.classList.toggle('act', q.dataset.q === tipo + i); });
      colorear(); T.toast('Ahora haz clic en la oración del texto');
    }
    function pintarSec() {
      T.$$('[data-sec]', out).forEach(function (b) { b.classList.toggle('on', +b.dataset.sec === SL.sec); });
      st.act = null; var h = '';
      if (SL.sec === 1) {
        h = '<p class="muted">Responde y luego pulsa <b>📍 Elegir oración</b> y haz clic en la oración del texto que prueba tu respuesta.</p>' + t.literal.map(function (x, i) { var v = st.lit[i] || {}; return '<div class="qbox" data-q="lit' + i + '"><b>' + (i + 1) + '. ' + esc(x.p) + '</b><div class="row"><input type="text" class="lit-in" data-i="' + i + '" value="' + esc(v.txt || '') + '" placeholder="Tu respuesta" style="flex:1;min-width:160px;border:1px solid #D9CFB6;border-radius:8px;padding:6px 8px"><button class="btn s o" data-act-s="lit" data-i="' + i + '">📍 Elegir oración</button><span class="muted" data-lab="lit' + i + '">' + (v.s ? sentLabel(v.s) : 'Sin oración') + '</span></div><div class="fb"></div></div>'; }).join('') + '<button class="btn t" id="l-chk">✓ Comprobar</button>';
      } else if (SL.sec === 2) {
        h = '<p class="muted">La respuesta no está escrita tal cual: hay que deducirla con las pistas del texto.</p>' + t.entrelineas.map(function (x, i) { return '<div class="qbox" data-q="ent' + i + '"><b>' + (i + 1) + '. ' + esc(x.p) + '</b><div class="opts">' + x.op.map(function (o, j) { return '<button class="opt" data-ent="' + i + '" data-j="' + j + '">' + String.fromCharCode(97 + j) + ') ' + esc(o) + '</button>'; }).join('') + '</div><div class="fb"></div></div>'; }).join('');
      } else if (SL.sec === 3) {
        h = '<p class="muted">Las palabras resaltadas en el texto: ¿qué significan <b>en esa oración</b>?</p>' + t.contexto.map(function (x, i) { return '<div class="qbox" data-q="ctx' + i + '"><b>' + (i + 1) + '. «' + esc(x.w) + '»</b> <span class="muted">(' + sentLabel(x.s) + ')</span><p class="muted">«' + resaltar(oracion(t, x.s), x.w) + '»</p><div class="opts">' + x.op.map(function (o, j) { return '<button class="opt" data-ctx="' + i + '" data-j="' + j + '">' + String.fromCharCode(97 + j) + ') ' + esc(o) + '</button>'; }).join('') + '</div><div class="fb"></div></div>'; }).join('');
      } else if (SL.sec === 4) {
        h = '<p class="muted">Cada afirmación dice lo mismo que una oración del texto, con otras palabras. Encuéntrala.</p>' + t.dondelopone.map(function (x, i) { var v = st.don[i]; return '<div class="qbox" data-q="don' + i + '"><b>' + (i + 1) + '. ' + esc(x.a) + '</b><div class="row"><button class="btn s o" data-act-s="don" data-i="' + i + '">📍 Elegir oración</button><span class="muted" data-lab="don' + i + '">' + (v ? sentLabel(v) : 'Sin oración') + '</span></div><div class="fb"></div></div>'; }).join('') + '<button class="btn t" id="l-chk">✓ Comprobar</button>';
      } else if (SL.sec === 5) {
        h = '<div class="qbox"><b>🔢 Ordena los hechos</b> <span class="muted">(usa ↑ ↓)</span><ol class="orden">' + st.orden.map(function (k, pos) { return '<li data-pos="' + pos + '"><span>' + esc(t.orden[k]) + '</span><span><button class="btn s o" data-up="' + pos + '" aria-label="subir">↑</button><button class="btn s o" data-dn="' + pos + '" aria-label="bajar">↓</button></span></li>'; }).join('') + '</ol><button class="btn t" id="l-ord">✓ Comprobar orden</button><div class="fb" id="l-ordfb"></div></div>' +
          '<div class="qbox"><b>🔗 Une cada causa con su efecto</b>' + t.causas.map(function (c, i) { return '<div class="causa"><span>' + esc(c.causa) + ' →</span><select data-cau="' + i + '"><option value="">Elige el efecto…</option>' + st.efectos.map(function (k) { return '<option value="' + k + '"' + (String(st.causas[i]) === String(k) ? ' selected' : '') + '>' + esc(t.causas[k].efecto) + '</option>'; }).join('') + '</select></div>'; }).join('') + '<button class="btn t" id="l-cau">✓ Comprobar causas</button><div class="fb" id="l-caufb"></div></div>';
      } else {
        h = '<p class="muted">No hay una única respuesta: lo importante es pensar y dar razones del texto.</p>' + t.argumenta.map(function (x, i) { var v = st.arg[i] || { txt: '', c: {} }; st.arg[i] = v; return '<div class="qbox"><b>' + (i + 1) + '. ' + esc(x.p) + '</b><textarea data-arg="' + i + '" rows="4" style="width:100%;border:1px solid #D9CFB6;border-radius:8px;padding:8px;margin-top:6px" placeholder="Escribe tu opinión y tus razones">' + esc(v.txt) + '</textarea><div class="muted"><b>Autoevaluación:</b> mi respuesta…</div>' + x.criterios.map(function (c, j) { return '<label class="crit"><input type="checkbox" data-crit="' + i + '" data-j="' + j + '"' + (v.c[j] ? ' checked' : '') + '> ' + esc(c) + '</label>'; }).join('') + '</div>'; }).join('');
      }
      sec.innerHTML = h;
      pintarTexto();
      T.$$('[data-act-s]', sec).forEach(function (b) { b.onclick = function () { activar(b.dataset.actS, +b.dataset.i); }; });
      T.$$('.lit-in', sec).forEach(function (inp) { inp.oninput = function () { var i = +inp.dataset.i; st.lit[i] = st.lit[i] || {}; st.lit[i].txt = inp.value; }; });
      var chk = T.$('#l-chk', sec);
      if (chk) chk.onclick = function () {
        var ok = 0, L2 = SL.sec === 1 ? t.literal : t.dondelopone;
        T.$$('.sent', txt).forEach(function (el) { el.classList.remove('sel', 'ok', 'bad'); });
        L2.forEach(function (x, i) {
          var mia = SL.sec === 1 ? (st.lit[i] || {}).s : st.don[i], bien = igual(mia, x.s), box = T.$('[data-q="' + (SL.sec === 1 ? 'lit' : 'don') + i + '"]', sec), fb = T.$('.fb', box);
          if (bien) ok++;
          box.classList.toggle('done', bien);
          fb.innerHTML = (bien ? '✅ ¡Bien! Esa oración lo prueba.' : mia ? '❌ Esa oración no lo prueba. La prueba está en ' + sentLabel(x.s) + '.' : '⚪ Falta elegir la oración. Está en ' + sentLabel(x.s) + '.') + (SL.sec === 1 ? ' Respuesta en el texto: «<b>' + esc(x.r) + '</b>»' : '');
          var el = sentEl(x.s); if (el) el.classList.add(bien ? 'ok' : 'hint');
          if (mia && !bien && sentEl(mia)) sentEl(mia).classList.add('bad');
        });
        T.toast(ok + ' de ' + L2.length + ' correctas');
      };
      T.$$('[data-ent],[data-ctx]', sec).forEach(function (b) {
        b.onclick = function () {
          var ent = b.hasAttribute('data-ent'), i = +(ent ? b.dataset.ent : b.dataset.ctx), x = (ent ? t.entrelineas : t.contexto)[i], j = +b.dataset.j, bien = j === x.c, box = b.closest('.qbox');
          T.$$('.opt', box).forEach(function (o) { o.classList.remove('ok', 'bad'); });
          b.classList.add(bien ? 'ok' : 'bad');
          box.classList.toggle('done', bien);
          T.$('.fb', box).innerHTML = (bien ? '✅ ¡Correcto! ' : '❌ Vuelve a leer la pista. ') + esc(x.ex || '');
          colorear(); var el = sentEl(x.s); if (el) { el.classList.add('hint'); }
        };
      });
      T.$$('[data-up],[data-dn]', sec).forEach(function (b) {
        b.onclick = function () { var up = b.hasAttribute('data-up'), p = +(up ? b.dataset.up : b.dataset.dn), q = up ? p - 1 : p + 1; if (q < 0 || q >= st.orden.length) return; var tmp = st.orden[p]; st.orden[p] = st.orden[q]; st.orden[q] = tmp; pintarSec(); };
      });
      if (T.$('#l-ord', sec)) T.$('#l-ord', sec).onclick = function () { var ok = 0; T.$$('.orden li', sec).forEach(function (li, pos) { var b = st.orden[pos] === pos; li.classList.toggle('ok', b); li.classList.toggle('bad', !b); if (b) ok++; }); T.$('#l-ordfb', sec).textContent = ok === st.orden.length ? '✅ ¡Orden correcto!' : ok + ' de ' + st.orden.length + ' en su lugar. Revisa qué pasó primero y qué pasó después.'; };
      T.$$('[data-cau]', sec).forEach(function (s) { s.onchange = function () { st.causas[s.dataset.cau] = s.value; }; });
      if (T.$('#l-cau', sec)) T.$('#l-cau', sec).onclick = function () { var ok = 0; T.$$('[data-cau]', sec).forEach(function (s) { var b = s.value !== '' && +s.value === +s.dataset.cau; s.classList.toggle('ok', b); s.classList.toggle('bad', !b); if (b) ok++; }); T.$('#l-caufb', sec).textContent = ok === t.causas.length ? '✅ ¡Todas las causas y efectos coinciden!' : ok + ' de ' + t.causas.length + ' correctas. Pregúntate: ¿esto pasó POR esa causa?'; };
      T.$$('[data-arg]', sec).forEach(function (a) { a.oninput = function () { st.arg[a.dataset.arg].txt = a.value; }; });
      T.$$('[data-crit]', sec).forEach(function (c) { c.onchange = function () { st.arg[c.dataset.crit].c[c.dataset.j] = c.checked; }; });
    }
    T.$$('[data-sec]', out).forEach(function (b) { b.onclick = function () { SL.sec = +b.dataset.sec; pintarSec(); }; });
    pintarSec();
  }
  function imprimibleLectura(t) {
    var abc = function (j) { return String.fromCharCode(97 + j) + ') '; }, orden = T.rng(hash(t.id)).shuffle(t.orden.map(function (_, i) { return i; })), ef = T.rng(hash(t.id) + 7).shuffle(t.causas.map(function (_, i) { return i; }));
    var al = '<div class="hoja">' + T.cabecera('📚 ' + esc(t.titulo), 'Comprensión lectora · ' + t.tipo) + '<div class="idea">📖 <b>Leer es comprender, relacionar y pensar.</b> Lee el texto dos veces. Los números pequeños indican párrafo y oración.</div>' + textoHTML(t, null, true) +
      '<h3>🔎 1. Lo que dice el texto</h3><ol>' + t.literal.map(function (x) { return '<li>' + esc(x.p) + lineas(1) + '<small>La oración que lo prueba es: párrafo ___ oración ___</small></li>'; }).join('') + '</ol>' +
      '<h3>🕯 2. Leer entre líneas</h3><ol>' + t.entrelineas.map(function (x) { return '<li>' + esc(x.p) + '<div>' + x.op.map(function (o, j) { return '☐ ' + abc(j) + esc(o); }).join('<br>') + '</div></li>'; }).join('') + '</ol>' +
      '<h3>🔤 3. Palabras en contexto</h3><ol>' + t.contexto.map(function (x) { return '<li>En la oración «' + esc(oracion(t, x.s)) + '», la palabra <b>' + esc(x.w) + '</b> significa:<div>' + x.op.map(function (o, j) { return '☐ ' + abc(j) + esc(o); }).join('<br>') + '</div></li>'; }).join('') + '</ol>' +
      '<h3>📍 4. ¿Dónde lo pone?</h3><ol>' + t.dondelopone.map(function (x) { return '<li>' + esc(x.a) + '<br><small>Párrafo ___ oración ___</small></li>'; }).join('') + '</ol>' +
      '<h3>🔗 5. Orden y causas</h3><p>Numera del 1 al ' + t.orden.length + ' según el orden en que ocurren:</p><ul class="pal">' + orden.map(function (k) { return '<li>☐ ' + esc(t.orden[k]) + '</li>'; }).join('') + '</ul>' +
      '<p>Une con una línea cada causa con su efecto:</p><table class="t"><tr><th>Causa</th><th>Efecto</th></tr>' + t.causas.map(function (c, i) { return '<tr><td>' + (i + 1) + '. ' + esc(c.causa) + '</td><td>' + abc(i) + esc(t.causas[ef[i]].efecto) + '</td></tr>'; }).join('') + '</table>' +
      '<h3>💭 6. Piensa y argumenta</h3><ol>' + t.argumenta.map(function (x) { return '<li>' + esc(x.p) + lineas(3) + '<small><b>Reviso mi respuesta:</b> ' + x.criterios.map(function (c) { return '☐ ' + esc(c); }).join(' · ') + '</small></li>'; }).join('') + '</ol>' + T.semaforo() + T.pie(t.id) + '</div>';
    var cl = '<div class="hoja clave">' + T.cabecera('🔑 Clave del docente · ' + esc(t.titulo), t.id + ' · ' + t.dba) +
      '<h3>1. Literal</h3><ol>' + t.literal.map(function (x) { return '<li>' + esc(x.r) + ' — <small>' + sentLabel(x.s) + '</small></li>'; }).join('') + '</ol>' +
      '<h3>2. Entre líneas</h3><ol>' + t.entrelineas.map(function (x) { return '<li><b>' + abc(x.c) + esc(x.op[x.c]) + '</b><div class="sol">' + esc(x.ex) + ' (' + sentLabel(x.s) + ')</div></li>'; }).join('') + '</ol>' +
      '<h3>3. Contexto</h3><ol>' + t.contexto.map(function (x) { return '<li><b>' + esc(x.w) + '</b>: ' + abc(x.c) + esc(x.op[x.c]) + '<div class="sol">' + esc(x.ex) + '</div></li>'; }).join('') + '</ol>' +
      '<h3>4. ¿Dónde lo pone?</h3><ol>' + t.dondelopone.map(function (x) { return '<li>' + sentLabel(x.s) + ': «' + esc(oracion(t, x.s)) + '»</li>'; }).join('') + '</ol>' +
      '<h3>5. Orden y causas</h3><ol>' + t.orden.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ol><ul>' + t.causas.map(function (c, i) { return '<li>' + (i + 1) + ' → ' + abc(ef.indexOf(i)) + esc(c.efecto) + '</li>'; }).join('') + '</ul>' +
      '<h3>6. Argumenta · criterios de valoración</h3><ol>' + t.argumenta.map(function (x) { return '<li>' + esc(x.p) + '<ul>' + x.criterios.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul></li>'; }).join('') + '</ol>' + T.pie(t.id) + '</div>';
    return T.barraHojas({}) + '<div class="hojas">' + al + cl + '</div>';
  }

  /* =================== COMANDOS IA =================== */
  var SQ = { q: '', sel: null, tema: '', ctx: '' };
  function comandos(app) {
    var sigue = turno(app);
    app.innerHTML = '<p class="muted">Cargando biblioteca de comandos…</p>';
    T.cargar('comandos.js').then(function (ok) {
      if (!sigue()) return;
      var C = T.comandos || [];
      if (!ok || !C.length) { app.innerHTML = aviso('La biblioteca de comandos no está disponible por ahora. Intente más tarde.'); return; }
      pintarComandos(app, C);
    });
  }
  function pintarComandos(app, C) {
    if (!C.some(function (c) { return c.cmd === SQ.sel; })) SQ.sel = C[0].cmd;
    app.innerHTML = '<div class="lay"><aside class="panel no-print"><h3>🤖 Comandos IA</h3><p class="lead">' + C.length + ' comandos listos para pegar en cualquier IA. Escribe el tema y el contexto: la plantilla se completa sola.</p>' +
      '<label class="fld"><span>Buscar (nombre, alias o propósito)</span><input type="text" id="q-q" value="' + esc(SQ.q) + '" placeholder="/socratic, escape, ideas…"></label>' +
      '<div class="list" id="q-list"></div></aside><section><div id="q-det"></div>' +
      '<div class="qbox" style="margin-top:16px"><div class="row" style="justify-content:space-between"><h2 style="margin:0">📜 Prompt Maestro v2</h2><span><button class="btn g s" id="q-pm-c">📋 Copiar</button><button class="btn o s" id="q-pm-d">⬇ Descargar .md</button></span></div><div class="md" id="q-pm"></div></div></section></div>';
    var lista = T.$('#q-list', app), det = T.$('#q-det', app);
    function pintarLista() {
      var q = norm(SQ.q).trim(), F = C.filter(function (c) { return !q || norm([c.cmd, (c.alias || []).join(' '), c.que, c.grupo, c.cuando].join(' ')).indexOf(q) > -1; }), grupos = [];
      F.forEach(function (c) { if (grupos.indexOf(c.grupo) < 0) grupos.push(c.grupo); });
      lista.innerHTML = F.length ? grupos.map(function (gr) { return '<div class="grupo">' + esc(gr) + '</div>' + F.filter(function (c) { return c.grupo === gr; }).map(function (c) { return '<button class="cmd' + (c.cmd === SQ.sel ? ' on' : '') + '" data-cmd="' + esc(c.cmd) + '"><span>' + esc(c.icono || '•') + '</span><span><code>' + esc(c.cmd) + '</code><small>' + esc(c.que) + '</small></span></button>'; }).join(''); }).join('') : '<p class="muted">Ningún comando coincide.</p>';
      T.$$('[data-cmd]', lista).forEach(function (b) { b.onclick = function () { SQ.sel = b.dataset.cmd; T.$$('[data-cmd]', lista).forEach(function (x) { x.classList.toggle('on', x === b); }); detalle(); if (window.innerWidth < 900) det.scrollIntoView({ behavior: 'smooth' }); }; });
    }
    function llenar(c) {
      var p = String(c.plantilla || '');
      if (SQ.tema.trim()) p = p.split('{tema}').join(SQ.tema.trim());
      if (SQ.ctx.trim()) p = p.split('{contexto}').join(SQ.ctx.trim());
      return p;
    }
    function detalle() {
      var c = C.filter(function (x) { return x.cmd === SQ.sel; })[0]; if (!c) { det.innerHTML = ''; return; }
      det.innerHTML = '<div class="hoja" style="min-height:0"><p class="muted" style="margin:0">' + esc(c.grupo) + '</p><h2>' + esc(c.icono || '') + ' ' + esc(c.cmd) + '</h2>' + (c.alias && c.alias.length ? '<p class="muted">También: ' + c.alias.map(esc).join(' · ') + '</p>' : '') +
        '<div class="grid2"><div><b>¿Qué hace?</b><p>' + esc(c.que) + '</p></div><div><b>¿Cuándo usarlo?</b><p>' + esc(c.cuando) + '</p></div></div>' +
        '<div class="ej"><b>Ejemplo CENTEC:</b> ' + esc(c.ejemplo) + '</div>' + (c.fuente ? '<p class="muted">📚 Respaldo: ' + esc(c.fuente) + '</p>' : '') +
        '<div class="grid2"><label class="fld"><span>{tema}</span><input type="text" id="q-tema" value="' + esc(SQ.tema) + '" placeholder="p. ej. fracciones equivalentes"></label><label class="fld"><span>{contexto}</span><input type="text" id="q-ctx" value="' + esc(SQ.ctx) + '" placeholder="p. ej. 4.° grado, 32 estudiantes, repaso"></label></div>' +
        '<div class="pre" id="q-pl"></div><button class="btn g" id="q-copy">📋 Copiar prompt</button></div>';
      var pl = T.$('#q-pl', det); pl.textContent = llenar(c);
      T.$('#q-tema', det).oninput = function () { SQ.tema = this.value; pl.textContent = llenar(c); };
      T.$('#q-ctx', det).oninput = function () { SQ.ctx = this.value; pl.textContent = llenar(c); };
      T.$('#q-copy', det).onclick = function () { T.copiar(llenar(c)); };
    }
    T.$('#q-q', app).oninput = function () { SQ.q = this.value; pintarLista(); };
    var pm = String(T.promptMaestro || '');
    T.$('#q-pm', app).innerHTML = pm ? T.md(pm) : aviso('El Prompt Maestro no está disponible por ahora.');
    T.$('#q-pm-c', app).onclick = function () { T.copiar(pm); };
    T.$('#q-pm-d', app).onclick = function () { T.descargar('Prompt_Maestro_SABI_v2.md', pm); };
    pintarLista(); detalle();
  }

  /* =================== DBA =================== */
  var SD = { area: 'ciencias' };
  var AREAS = [['ciencias', '🔬', 'Ciencias Naturales'], ['matematicas', '➗', 'Matemáticas'], ['lenguaje', '📚', 'Lenguaje']];
  function dba(app) {
    var g = T.state.grado;
    app.innerHTML = '<div class="hero" style="padding:16px 20px"><h1 style="font-size:26px">📜 Derechos Básicos de Aprendizaje · ' + esc(T.gname(g)) + '</h1><p>Referentes del MEN para planear: qué debe aprender cada estudiante en el grado. Los marcados como <b>verificado</b> se cotejaron con la fuente oficial.</p></div>' +
      '<div class="secs">' + AREAS.map(function (a) { return '<button class="chip' + (a[0] === SD.area ? ' on' : '') + '" data-area="' + a[0] + '">' + a[1] + ' ' + a[2] + '</button>'; }).join('') + '</div><div id="d-out"><p class="muted">Cargando…</p></div>';
    T.$$('[data-area]', app).forEach(function (b) { b.onclick = function () { SD.area = b.dataset.area; dba(app); }; });
    var out = T.$('#d-out', app), area = SD.area;
    T.cargar('dba_' + area + '.js').then(function (ok) {
      if (!vivo(out, g) || SD.area !== area) return;
      var D = T.dba && T.dba[area], L = D && D[g];
      if (!ok || !D) { out.innerHTML = aviso('Los DBA de esta área no están disponibles por ahora.'); return; }
      if (!L || !L.length) { out.innerHTML = aviso('No hay DBA registrados de esta área para ' + esc(T.gname(g)) + '.'); return; }
      out.innerHTML = '<p class="muted">Fuente: ' + esc(D.fuente) + (D.urlOficial ? ' · <a href="' + esc(D.urlOficial) + '" target="_blank" rel="noopener">documento oficial</a>' : '') + '</p>' +
        L.map(function (x) {
          var url = /^https?:\/\//.test(String(x.url || '')) ? x.url : '';
          return '<div class="qbox"><b>DBA ' + esc(x.n) + '.</b> ' + esc(x.texto) + '<div style="margin-top:4px">' + (x.verificado ? '<span class="badge v">✔ verificado</span>' + (url ? ' <a class="muted" href="' + esc(url) + '" target="_blank" rel="noopener">ver fuente</a>' : '') : '<span class="badge nv">paráfrasis</span>' + (url ? ' <a class="muted" href="' + esc(url) + '" target="_blank" rel="noopener">cotejar en la fuente</a>' : '')) + '</div></div>';
        }).join('');
    });
  }

  T.registrar({ id: 'inicio', icon: '🏠', label: 'Inicio', render: inicio });
  T.registrar({ id: 'ciencia', icon: '🔬', label: 'Ciencia', render: ciencia });
  T.registrar({ id: 'lectura', icon: '📚', label: 'Lectura', render: lectura });
  T.registrar({ id: 'comandos', icon: '🤖', label: 'Comandos IA', render: comandos });
  T.registrar({ id: 'dba', icon: '📜', label: 'DBA', render: dba });

  /* orden de pestañas: se aplica antes de que iniciar() las pinte */
  var ORDEN = ['inicio', 'ciencia', 'mate', 'lectura', 'ayudas', 'comandos', 'dba'];
  T.mods.sort(function (a, b) { var x = ORDEN.indexOf(a.id), y = ORDEN.indexOf(b.id); return (x < 0 ? 99 : x) - (y < 0 ? 99 : y); });
})();
