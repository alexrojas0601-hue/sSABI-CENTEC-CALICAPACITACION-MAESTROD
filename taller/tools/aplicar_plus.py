#!/usr/bin/env python3
"""Aplica de forma estática (en el HTML) el contenido real de kb/ y kb/plus/:

1. Reemplaza las preguntas de evaluación de plantilla por `evaluacion` (kb/plus/<curso>.js).
2. Reemplaza el texto de introducción del módulo por `intro` cuando existe.
3. Rellena las tarjetas con texto provisional («Contenido profundo sobre…») con `cards` (kb/<curso>.js).

Solo cambia textos; no toca el diseño ni la lógica del curso. Uso (desde la raíz):
    python3 taller/tools/aplicar_plus.py            # todos los cursos
    python3 taller/tools/aplicar_plus.py 24 25      # solo los cursos indicados
"""
import glob, html, json, os, re, subprocess, sys

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
os.chdir(RAIZ)


def cargar(curso):
    js = ("global.window={};try{require('./kb/%s.js')}catch(e){};window.SABI_KB=window.SABI_KB||{};"
          "const base=Object.assign({},window.SABI_KB);"
          "try{require('./kb/plus/%s.js')}catch(e){};"
          "console.log(JSON.stringify({base:base,plus:window.SABI_KB}))") % (curso, curso)
    out = subprocess.run(['node', '-e', js], capture_output=True, text=True, check=True).stdout
    d = json.loads(out)
    return d['base'], d['plus']


def e(t):
    return html.escape(t, quote=False)


cambios = 0
for f in sorted(glob.glob('sabi_curso*.html')):
    if os.path.getsize(f) < 2000:
        continue
    curso = f[:-5]
    if sys.argv[1:] and not any(curso.startswith('sabi_curso%02d' % int(n)) for n in sys.argv[1:]):
        continue
    if not os.path.exists('kb/%s.js' % curso):
        continue
    base, kb = cargar(curso)
    s = open(f, encoding='utf-8').read()
    s0 = s

    # 1. evaluación
    ev = kb.get('evaluacion')
    if ev:
        ids = re.findall(r'<div class="eq" id="q(\d+)_(\d+)">', s)
        if len(ids) != len(ev):
            print('AVISO', f, 'preguntas en HTML', len(ids), '≠ evaluacion', len(ev))
        for (m, q), item in zip(ids, ev):
            ini = s.index('<div class="eq" id="q%s_%s">' % (m, q))
            fin = s.find('<div class="eq" id="q', ini + 10)
            fin_zona = s.find('</div>\n</div>', ini)  # respaldo
            if fin < 0:
                fin = len(s)
            blk = s[ini:fin]
            blk = re.sub(r'(<div class="qtx">).*?(</div>)', lambda mm: mm.group(1) + e(item['q']) + mm.group(2), blk, count=1, flags=re.S)
            k = [0]

            def opt(mm):
                i = k[0]; k[0] += 1
                return mm.group(1) + e(item['o'][i]) + mm.group(2) if i < 4 else mm.group(0)
            blk = re.sub(r'(<span class="mk">[A-D]</span><span>).*?(</span>)', opt, blk, flags=re.S)
            blk = re.sub(r'S\.check\(%s,%s,\d\)' % (m, q), 'S.check(%s,%s,%d)' % (m, q, item['c']), blk)
            blk = re.sub(r'(<div class="fb ok">\s*<div class="fbt">[^<]*</div>\s*<div>).*?(</div>\s*</div>\s*<div class="fb no">)',
                         lambda mm: mm.group(1) + '✅ ' + e(item['ok']) + mm.group(2), blk, count=1, flags=re.S)
            blk = re.sub(r'(<div class="fb no">\s*<div class="fbt">[^<]*</div>\s*<div>).*?(</div>)',
                         lambda mm: mm.group(1) + e(item['no']) + mm.group(2), blk, count=1, flags=re.S)
            s = s[:ini] + blk + s[fin:]

    # 2. introducción
    if kb.get('intro'):
        s = re.sub(r'(<div class="intro">).*?(</div>)', lambda mm: mm.group(1) + e(kb['intro']) + mm.group(2), s, count=1, flags=re.S)

    # 3. tarjetas provisionales
    cards = base.get('cards') or {}
    norm = lambda t: re.sub(r'[^a-z0-9ñ]+', ' ', html.unescape(t).lower().translate(str.maketrans('áéíóúü', 'aeiouu'))).strip()
    mapa = {norm(k): v for k, v in cards.items()}

    def card(mm):
        titulo = mm.group(2)
        txt = mapa.get(norm(titulo))
        if not txt:
            return mm.group(0)
        return mm.group(1) + mm.group(3) + e(txt) + mm.group(4)
    s = re.sub(r'(<div class="card-title">(.*?)</div>\s*</div>\s*)(<div class="card-bd">)\s*Contenido (?:pedag[oó]gico )?profundo sobre.*?(</div>)', card, s, flags=re.S)

    if s != s0:
        open(f, 'w', encoding='utf-8').write(s)
        cambios += 1
        print('actualizado', f)
    resto = len(re.findall(r'Contenido (?:pedag[oó]gico )?profundo sobre', s))
    if resto:
        print('  quedan tarjetas provisionales en', f, resto)
print('archivos actualizados:', cambios)
