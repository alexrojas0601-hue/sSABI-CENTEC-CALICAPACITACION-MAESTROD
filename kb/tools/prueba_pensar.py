#!/usr/bin/env python3
"""Prueba en navegador de SABI Pensamiento en los 29 cursos (Playwright/Chromium).
Uso: python3 kb/tools/prueba_pensar.py   (sirve el repo en :8765)"""
import http.server, threading, functools, os, re, sys
from playwright.sync_api import sync_playwright

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
cursos = sorted(set(re.findall(r'(sabi_curso\d\d_[a-z0-9_]+)\.html', open(os.path.join(ROOT, 'index.html'), encoding='utf8').read())))
H = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
H = functools.partial(Q, directory=ROOT)
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 8765), H)
threading.Thread(target=srv.serve_forever, daemon=True).start()
fallos = 0
with sync_playwright() as p:
    b = p.chromium.launch()
    for w in (390, 1366):
        for c in cursos:
            pg = b.new_page(viewport={'width': w, 'height': 860})
            errs = []
            pg.on('pageerror', lambda e: errs.append(str(e)))
            pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and 'sabi-sesion' not in m.text and 'fonts.g' not in m.text and 'ERR_' not in m.text else None)
            pg.goto(f'http://127.0.0.1:8765/{c}.html', wait_until='domcontentloaded')
            pg.wait_for_function('window.SABIDots', timeout=15000)
            for v in ('pensar', 'lectura', 'repaso', 'cert', 'hoy'):
                pg.evaluate(f'window.SABIDots.open("{v}")')
                pg.wait_for_timeout(120)
                txt = pg.inner_text('#sdots .bd')
                if v in ('pensar', 'lectura') and ('aún no tiene' in txt):
                    errs.append(f'sin datos en {v}')
                ov = pg.evaluate('(() => { const e = document.querySelector("#sdots .pn"); return e.scrollWidth - e.clientWidth; })()')
                if ov > 2: errs.append(f'desborde {ov}px en {v}')
            # el diploma propio no debe imprimirse sin dominio
            blocked = pg.evaluate('(() => { let printed = false; window.print = () => { printed = true }; const n = document.getElementById("nombre-in"); if (n) n.value = "Prueba Docente"; for (const f of ["imprimirDiploma","imprimir"]) { if (typeof window[f] === "function") try { window[f]() } catch(e){} } return !printed })()')
            if not blocked: errs.append('diploma impreso sin dominio')
            if errs:
                fallos += 1; print('✗', w, c, errs[:4])
            pg.close()
    b.close()
srv.shutdown()
print(('✗ %d fallos' % fallos) if fallos else '✓ OK', '·', len(cursos), 'cursos × 2 anchos')
sys.exit(1 if fallos else 0)
