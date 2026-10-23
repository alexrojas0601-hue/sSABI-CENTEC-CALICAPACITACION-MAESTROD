/* =====================================================================
   SABI · Club de Diálogo permanente (motor sin conexión a IA)
   Se añade a sabi_club_idiomas.html sin cambiar su diseño:
   - Conversaciones guiadas por escenarios reales del docente (10 por idioma)
   - Voz del profesor (síntesis del navegador), micrófono y puntaje de pronunciación
   - Corrección del error típico del hispanohablante, pistas y vocabulario
   - Racha diaria, minutos hablados, escenarios dominados y sesión del día
   - IA opcional: si se configura window.SABI_IA_ENDPOINT (proxy propio), se habilita
     la conversación libre; si falla o no existe, el club sigue funcionando.
   ===================================================================== */
(function () {
  'use strict';
  var LGS = ['en', 'fr', 'pt', 'de', 'zh'];
  var DATA = window.SABI_CLUB = window.SABI_CLUB || {};
  var base = (document.currentScript && document.currentScript.src || '').replace(/club\.js.*$/, '');
  var st = { esc: null, t: 0, intentos: 0, modo: 'menu', aciertos: 0 };
  var NOMBRE = { en: 'inglés', fr: 'francés', pt: 'portugués', de: 'alemán', zh: 'mandarín' };
  var UI = {
    en: { bravo: ['Great job!', 'Excellent!', 'Well said!', 'Perfect!'], otra: "Let's try again.", fin: 'Conversation complete!' },
    fr: { bravo: ['Très bien !', 'Excellent !', 'Bravo !', 'Parfait !'], otra: 'On réessaie.', fin: 'Conversation terminée !' },
    pt: { bravo: ['Muito bem!', 'Excelente!', 'Isso mesmo!', 'Perfeito!'], otra: 'Vamos tentar de novo.', fin: 'Conversa concluída!' },
    de: { bravo: ['Sehr gut!', 'Ausgezeichnet!', 'Super!', 'Perfekt!'], otra: 'Noch einmal, bitte.', fin: 'Gespräch beendet!' },
    zh: { bravo: ['很好！', '太棒了！', '说得好！', '完美！'], otra: '再试一次。', fin: '对话完成！' }
  };

  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function L() { return window.lang || (typeof lang !== 'undefined' ? lang : 'en'); }
  function hoy() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function prog(l) { try { return JSON.parse(localStorage.getItem('sabiclub:' + (l || L())) || 'null') || { hechos: {}, dias: [], seg: 0, frases: 0 }; } catch (e) { return { hechos: {}, dias: [], seg: 0, frases: 0 }; } }
  function guardar(p, l) { try { localStorage.setItem('sabiclub:' + (l || L()), JSON.stringify(p)); } catch (e) { } }
  function racha(p) {
    var set = {}; (p.dias || []).forEach(function (d) { set[d] = 1; });
    var n = 0, d = new Date(); if (!set[hoy()]) d.setDate(d.getDate() - 1);
    for (;;) { var k = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); if (!set[k]) break; n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function actividad(seg) {
    var p = prog(); if ((p.dias || []).indexOf(hoy()) < 0) p.dias = (p.dias || []).concat(hoy()).slice(-400);
    p.seg = (p.seg || 0) + (seg || 0); p.frases = (p.frases || 0) + 1; guardar(p);
    // también suma al progreso global de los cursos SABI
    try { var g = JSON.parse(localStorage.getItem('sabidots:global') || 'null') || { xp: 0, dias: [], ins: {}, cursos: {} }; g.xp = (g.xp || 0) + 2; if ((g.dias || []).indexOf(hoy()) < 0) g.dias = (g.dias || []).concat(hoy()); localStorage.setItem('sabidots:global', JSON.stringify(g)); } catch (e) { }
    cabecera();
  }
  function sim(a, b) {
    function n(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim(); }
    var zh = L() === 'zh', A = n(a), B = n(b);
    var x = zh ? A.replace(/\s/g, '').split('') : A.split(' '), y = zh ? B.replace(/\s/g, '').split('') : B.split(' ');
    if (!x[0] || !y[0]) return 0;
    var d = []; for (var i = 0; i <= x.length; i++) d[i] = [i]; for (var j = 0; j <= y.length; j++) d[0][j] = j;
    for (i = 1; i <= x.length; i++) for (j = 1; j <= y.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (x[i - 1] === y[j - 1] ? 0 : 1));
    return Math.max(0, Math.round(100 * (1 - d[x.length][y.length] / Math.max(x.length, y.length))));
  }
  function contiene(txt, w) { var a = String(txt || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''), b = String(w).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); return a.indexOf(b) > -1; }
  function linea(o) { return esc(o.t || o.bot) + (o.py ? '<br><span style="opacity:.75;font-size:.92em">' + esc(o.py) + '</span>' : ''); }
  function hablar(t, cb) { if (typeof speak === 'function') speak(t, cb); else if (cb) cb(); }
  function msgBot(html) { if (typeof addMsg === 'function') addMsg('bot', html); }
  function msgYo(html) { if (typeof addMsg === 'function') addMsg('user', html); }
  function nota(html) {
    var box = $('chatMsgs'); if (!box) return; var d = document.createElement('div');
    d.style.cssText = 'margin:6px 0 10px 46px;padding:10px 12px;border-radius:12px;background:rgba(212,168,67,.12);border:1px solid rgba(212,168,67,.35);font-size:13px;line-height:1.55;color:rgba(255,255,255,.9);max-width:640px';
    d.innerHTML = html; box.appendChild(d); box.scrollTop = box.scrollHeight; return d;
  }
  function escs() { var D = DATA[L()]; return D && D.escenarios ? D.escenarios : []; }
  var IA = function () { try { return window.SABI_IA_ENDPOINT || localStorage.getItem('sabi:ia_endpoint') || ''; } catch (e) { return window.SABI_IA_ENDPOINT || ''; } };

  /* ---------- cabecera del club ---------- */
  function cabecera() {
    var E = escs(), p = prog(), hechos = E.filter(function (e) { return p.hechos[e.id]; }).length, r = racha(p);
    var pct = E.length ? Math.round(hechos * 100 / E.length) : 0;
    if ($('progFill')) $('progFill').style.width = Math.max(4, pct) + '%';
    if ($('progPct')) $('progPct').textContent = hechos + '/' + (E.length || 10);
    if (st.modo === 'esc' && st.esc) {
      $('lessonTag').textContent = 'Club de Diálogo · ' + st.esc.nivel + ' · Turno ' + Math.min(st.t + 1, st.esc.turnos.length) + ' de ' + st.esc.turnos.length;
      $('lessonTitle').textContent = st.esc.titulo;
      $('lessonDesc').textContent = st.esc.contexto;
    } else {
      $('lessonTag').textContent = 'Club de Diálogo SABI · ' + NOMBRE[L()];
      $('lessonTitle').textContent = '🔥 Racha: ' + r + (r === 1 ? ' día' : ' días') + ' · 🎙 ' + Math.round((p.seg || 0) / 60) + ' min hablados · ⭐ ' + hechos + ' escenarios';
      $('lessonDesc').textContent = 'Conversa con voz en situaciones reales de tu vida docente. Diez minutos al día bastan para avanzar.';
    }
  }

  /* ---------- menú de escenarios ---------- */
  function menu() {
    st.modo = 'menu'; st.esc = null; cabecera();
    var E = escs(), p = prog();
    if (!E.length) { nota('Cargando los escenarios del club… si no aparecen, revisa tu conexión y recarga la página.'); return; }
    var sig = E.filter(function (e) { return !p.hechos[e.id]; })[0] || E[Math.floor(Math.random() * E.length)];
    var h = '<b>🎭 Elige una conversación</b> (o toca la sesión del día). Responde con el micrófono 🎙, escribiendo o tocando una opción.<div style="display:flex;flex-direction:column;gap:6px;margin-top:8px">' +
      '<button data-esc="' + sig.id + '" style="' + btnCss('#D4A843', '#0B1E3D') + '">⭐ Sesión del día: ' + esc(sig.titulo) + ' · ' + sig.nivel + '</button>' +
      E.map(function (e) { var ok = p.hechos[e.id]; return '<button data-esc="' + e.id + '" style="' + btnCss(ok ? 'rgba(29,158,117,.25)' : 'rgba(255,255,255,.06)', '#fff') + '">' + (ok ? '✅ ' : '▶ ') + esc(e.titulo) + ' <span style="opacity:.6">· ' + e.nivel + ' · ' + esc(e.tema || '') + '</span></button>'; }).join('') +
      (IA() ? '<button data-libre="1" style="' + btnCss('rgba(127,119,221,.35)', '#fff') + '">💬 Conversación libre con IA</button>' : '') + '</div>';
    var n = nota(h);
    n.querySelectorAll('[data-esc]').forEach(function (b) { b.onclick = function () { iniciar(b.dataset.esc); }; });
    var lb = n.querySelector('[data-libre]'); if (lb) lb.onclick = function () { st.modo = 'libre'; cabecera(); nota('Modo libre: escribe o habla en ' + NOMBRE[L()] + '. Para volver a los escenarios escribe <b>menú</b>.'); };
    chips([]);
  }
  function btnCss(bg, fg) { return 'text-align:left;border:1px solid rgba(255,255,255,.15);background:' + bg + ';color:' + fg + ';border-radius:10px;padding:9px 12px;font:600 13px DM Sans,sans-serif;cursor:pointer'; }

  /* ---------- barra de opciones ---------- */
  function chips(ops) {
    var bar = $('quickbar'); if (!bar) return;
    var extra = '';
    if (st.modo === 'esc') extra = '<button class="qc" data-x="rep">🔊 Repetir</button><button class="qc" data-x="tr">🇨🇴 Traducción</button><button class="qc" data-x="pista">💡 Pista</button><button class="qc" data-x="menu">☰ Escenarios</button>';
    else extra = '<button class="qc" data-x="menu">☰ Escenarios</button>';
    bar.innerHTML = ops.map(function (o, i) { return '<button class="qc" data-o="' + i + '">' + esc(o.t) + '</button>'; }).join('') + extra;
    bar.querySelectorAll('[data-o]').forEach(function (b) { b.onclick = function () { var o = ops[+b.dataset.o]; responder(o.t, false); }; });
    bar.querySelectorAll('[data-x]').forEach(function (b) {
      b.onclick = function () {
        var x = b.dataset.x, T = st.esc && st.esc.turnos[st.t];
        if (x === 'menu') { if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel(); menu(); }
        else if (x === 'rep' && T) hablar(T.bot);
        else if (x === 'tr' && T) nota('🇨🇴 ' + esc(T.es));
        else if (x === 'pista' && T) { var ok = T.opciones.filter(function (o) { return o.ok; })[0]; nota('💡 Puedes decir: <b>' + linea(ok) + '</b><br><span style="opacity:.8">' + esc(ok.es) + '</span>'); hablar(ok.t); }
      };
    });
  }

  /* ---------- conversación guiada ---------- */
  function iniciar(id) {
    var e = escs().filter(function (x) { return x.id === id; })[0]; if (!e) return;
    st = { esc: e, t: 0, intentos: 0, modo: 'esc', aciertos: 0, t0: Date.now() };
    $('chatMsgs').innerHTML = ''; cabecera();
    nota('🎬 <b>' + esc(e.titulo) + '</b> · ' + e.nivel + '<br>' + esc(e.contexto) + '<br><span style="opacity:.75">Hablas con: ' + esc(e.rol) + '</span>');
    setTimeout(turno, 500);
  }
  function turno() {
    var e = st.esc, T = e.turnos[st.t]; st.intentos = 0; cabecera();
    msgBot(linea(T)); hablar(T.bot);
    var ops = T.opciones.slice().sort(function () { return Math.random() - .5; });
    chips(ops);
  }
  function responder(txt, porVoz) {
    if (st.modo === 'libre') return libre(txt);
    if (st.modo !== 'esc') { if (/^(men[uú]|menu|start|inicio)$/i.test(txt.trim())) return menu(); msgYo(esc(txt)); nota('Elige primero una conversación del club 👇'); return menu(); }
    if (/^(men[uú])$/i.test(txt.trim())) return menu();
    var T = st.esc.turnos[st.t]; msgYo(esc(txt));
    var mejor = null, ms = -1;
    T.opciones.forEach(function (o) { var s = sim(o.t, txt); if (s > ms) { ms = s; mejor = o; } });
    var claves = (T.clave || []).filter(function (w) { return contiene(txt, w); }).length;
    var claveOk = T.clave && T.clave.length ? claves >= Math.ceil(T.clave.length / 2) : false;
    actividad(porVoz ? Math.max(2, Math.round(txt.length / 12)) : 0);
    var U = UI[L()];
    if (mejor && !mejor.ok && ms >= 60 && ms >= bestOk(T, txt)) {
      st.intentos++;
      nota('🔎 <b>Casi.</b> ' + esc(mejor.fix) + (porVoz ? '<br>🎙 Coincidencia: ' + ms + ' %' : ''));
      var buena = T.opciones.filter(function (o) { return o.ok; })[0];
      setTimeout(function () { msgBot(esc(U.otra) + ' 🙂'); hablar(U.otra); }, 300);
      if (st.intentos >= 2) nota('💡 Forma correcta: <b>' + linea(buena) + '</b>');
      return;
    }
    var bo = bestOk(T, txt);
    if (bo >= 55 || claveOk) {
      st.aciertos++;
      var bravo = U.bravo[Math.floor(Math.random() * U.bravo.length)];
      nota('✅ <b>' + esc(bravo) + '</b>' + (porVoz ? ' · 🎙 Pronunciación/coincidencia: <b>' + Math.max(bo, claveOk ? 70 : 0) + ' %</b>' : '') + (bo < 55 && claveOk ? ' · Respuesta propia válida, ¡eso es comunicarse!' : '') + (T.tip ? '<br>💡 ' + esc(T.tip) : ''));
      st.t++;
      if (st.t >= st.esc.turnos.length) return cerrar();
      setTimeout(turno, 1100);
    } else {
      st.intentos++;
      var ok = T.opciones.filter(function (o) { return o.ok; })[0];
      nota('🤔 No te entendí del todo' + (porVoz ? ' (oí: «' + esc(txt) + '»)' : '') + '. El error no nos detiene: escucha y repite.' + (st.intentos >= 2 ? '<br>Prueba con: <b>' + linea(ok) + '</b> <span style="opacity:.8">(' + esc(ok.es) + ')</span>' : ' Toca 💡 Pista si la necesitas.'));
      if (st.intentos >= 2) hablar(ok.t);
    }
  }
  function bestOk(T, txt) { var m = 0; T.opciones.forEach(function (o) { if (o.ok) m = Math.max(m, sim(o.t, txt)); }); return m; }
  function cerrar() {
    var e = st.esc, p = prog(), U = UI[L()];
    msgBot(linea(e.cierre)); hablar(e.cierre.bot);
    p.hechos[e.id] = hoy(); guardar(p);
    var min = Math.max(1, Math.round((Date.now() - (st.t0 || Date.now())) / 60000));
    var n = nota('🏁 <b>' + esc(U.fin) + '</b> ' + st.aciertos + ' turnos logrados en ' + min + ' min.<br><b>Vocabulario para llevar:</b><br>' +
      (e.vocab || []).map(function (v) { return '• <span data-say="' + esc(v.t) + '" style="cursor:pointer;text-decoration:underline dotted">' + esc(v.t) + (v.py ? ' (' + esc(v.py) + ')' : '') + '</span> — ' + esc(v.es); }).join('<br>') +
      '<br><br>🔁 Repite esta conversación mañana sin mirar las opciones: así se consolida.<div style="margin-top:8px"><button data-r="1" style="' + btnCss('#1D9E75', '#fff') + '">Repetir</button> <button data-m="1" style="' + btnCss('#D4A843', '#0B1E3D') + '">Otra conversación</button></div>');
    n.querySelectorAll('[data-say]').forEach(function (s) { s.onclick = function () { hablar(s.dataset.say); }; });
    n.querySelector('[data-r]').onclick = function () { iniciar(e.id); };
    n.querySelector('[data-m]').onclick = menu;
    st.modo = 'fin'; cabecera(); chips([]);
  }

  /* ---------- conversación libre con IA (opcional) ---------- */
  var hist = [];
  function libre(txt) {
    if (/^(men[uú])$/i.test(txt.trim())) return menu();
    msgYo(esc(txt)); hist.push({ role: 'user', content: txt });
    if (typeof addTyping === 'function') addTyping();
    fetch(IA(), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ system: (typeof LANGS !== 'undefined' && LANGS[L()]) ? LANGS[L()].system : '', messages: hist.slice(-12), app: 'club-idiomas' }) })
      .then(function (r) { return r.json(); })
      .then(function (d) { var el = $('typi'); if (el) el.remove(); var t = (d.content && d.content[0] && d.content[0].text) || d.text || d.reply; if (!t) throw 0; hist.push({ role: 'assistant', content: t }); msgBot(esc(t).replace(/\n/g, '<br>')); hablar(t); actividad(5); })
      .catch(function () { var el = $('typi'); if (el) el.remove(); nota('La IA no está disponible en este momento. Te llevo a las conversaciones guiadas, que funcionan siempre.'); menu(); });
  }

  /* ---------- integración con la página existente ---------- */
  function instalar() {
    window.sendAI = function (text) { var t = String(text || '').trim(); if (t) responder(t, !!window.__clubVoz); window.__clubVoz = false; };
    window.doSend = function () { var inp = $('uInp'); var t = inp.value.trim(); if (!t) return; inp.value = ''; inp.style.height = 'auto'; responder(t, !!window.__clubVoz); window.__clubVoz = false; };
    // Marcar que la última entrada vino del micrófono (para calcular minutos hablados y puntaje)
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR && !SR.__sabi) {
      var Orig = SR; var Wrap = function () { var r = new Orig(); r.addEventListener('result', function () { window.__clubVoz = true; }); return r; };
      Wrap.__sabi = true; if (window.SpeechRecognition) window.SpeechRecognition = Wrap; if (window.webkitSpeechRecognition) window.webkitSpeechRecognition = Wrap;
    }
    var origSet = window.setLang;
    window.setLang = function (l, btn) {
      origSet(l, btn);
      setTimeout(function () {
        // El saludo original ya se mostró; ahora el club toma la conversación
        cabecera(); menu(); construirLecciones();
      }, 260);
    };
    window.buildLessons = function () { construirLecciones(); };
    window.startLesson = function (i) { var e = escs()[i]; if (!e) return; showTab('chat', document.querySelectorAll('.ptab')[0]); iniciar(e.id); };
    window.showPh = function (i) {
      var ph = LANGS[L()].phonemes[i];
      document.querySelectorAll('.phb').forEach(function (b, j) { b.classList.toggle('lit', j % LANGS[L()].phonemes.length === i); });
      var det = $('phDetail'); if (det) { $('phDetailTitle').textContent = ph.t; $('phDetailBody').textContent = ph.d; det.style.display = 'block'; }
      var ej = (ph.d.match(/"([^"]+)"/g) || []).map(function (x) { return x.replace(/"/g, ''); }).filter(function (x) { return !/=/.test(x); });
      if (L() === 'zh') ej = (ph.d.match(/[一-鿿]+/g) || []);
      var texto = ej.join('. ').replace(/,\s*/g, '. ');
      if (texto) hablar(texto); else hablar(ph.s);
      showTab('phonemes', document.querySelectorAll('.ptab')[2]);
    };
  }
  function construirLecciones() {
    var list = $('lessonsList'); if (!list) return; var E = escs(), p = prog();
    list.innerHTML = '<div style="padding:4px 4px 10px;font-size:13px;color:rgba(255,255,255,.6)">Conversaciones del Club de Diálogo · todas disponibles; se recomienda seguir el orden por nivel.</div>' + E.map(function (e, i) {
      var ok = p.hechos[e.id];
      return '<div class="li ' + (ok ? '' : (i === 0 ? 'active' : '')) + '" onclick="startLesson(' + i + ')"><div class="li-num ' + (ok ? 'done' : 'cur') + '">' + (ok ? '✓' : i + 1) + '</div><div class="li-info"><div class="li-t">' + esc(e.titulo) + '</div><div class="li-s">' + esc(e.nivel + ' · ' + (e.tema || '') + ' · ' + e.rol) + '</div></div><div class="li-xp">' + e.turnos.length + ' turnos</div></div>';
    }).join('');
  }

  function cargarDatos(cb) {
    var faltan = LGS.filter(function (l) { return !DATA[l]; }), n = faltan.length; if (!n) return cb();
    faltan.forEach(function (l) { var s = document.createElement('script'); s.src = base + 'data/' + l + '.js'; s.onload = s.onerror = function () { if (--n === 0) cb(); }; document.head.appendChild(s); });
  }

  instalar();
  // Los datos se cargan antes del evento load de la página; el arranque (setLang) lo hace la página
  // con el idioma de ?lang= (en, fr, pt, de, zh).
  cargarDatos(function () { if (document.readyState === 'complete' && !st.listo) { cabecera(); menu(); construirLecciones(); } st.listo = true; });
})();
