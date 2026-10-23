#!/usr/bin/env python3
"""Prueba de navegador del SABI Taller de Aula (sabi_taller.html).

Cómo usarla (desde la raíz del repositorio):
    python3 taller/tools/prueba_navegador.py               # prueba completa
    python3 taller/tools/prueba_navegador.py --capturas DIR # además guarda capturas PNG en DIR

Requisitos: paquete «playwright» de Python con Chromium disponible
(PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers en este entorno; si no hay paquete:
 pip install playwright --break-system-packages). No hace falta internet.
El script levanta su propio servidor estático en el puerto 8765 si no hay uno,
bloquea las peticiones externas (superacion.sabicentec.com y Google Fonts) y
recorre las 7 pestañas × 12 grados, las 10 ayudas con varias fuentes, una lectura,
un experimento, los comandos y los DBA. Termina con código 1 si hay errores de
consola, excepciones de página, desbordes horizontales a 390 px o comprobaciones fallidas.
"""
import os, sys, socket, subprocess, time, json
from playwright.sync_api import sync_playwright

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
PUERTO = 8765
URL = f'http://127.0.0.1:{PUERTO}/sabi_taller.html'
GRADOS = ['tr', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11']
TABS = ['inicio', 'ciencia', 'mate', 'lectura', 'ayudas', 'comandos', 'dba']
AYUDAS = ['worksheet', 'escape', 'detective', 'boardgame', 'stations', 'manipulative', 'comic', 'lapbook', 'puzzle', 'minibook']
BLOQUEADOS = ('superacion.sabicentec.com', 'sabicentec.com/assets/sabi-sesion.js', 'fonts.googleapis.com', 'fonts.gstatic.com')

capturas = None
if '--capturas' in sys.argv:
    capturas = sys.argv[sys.argv.index('--capturas') + 1]
    os.makedirs(capturas, exist_ok=True)

errores, fallos, vistas = [], [], [0]


def puerto_abierto():
    with socket.socket() as s:
        return s.connect_ex(('127.0.0.1', PUERTO)) == 0


servidor = None
if not puerto_abierto():
    servidor = subprocess.Popen([sys.executable, '-m', 'http.server', str(PUERTO), '--bind', '127.0.0.1'], cwd=RAIZ,
                                stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(50):
        if puerto_abierto():
            break
        time.sleep(0.1)


def exige(cond, msg):
    if not cond:
        fallos.append(msg)
        print('  ✗', msg)


def nuevo_contexto(browser, ancho=1280):
    ctx = browser.new_context(viewport={'width': ancho, 'height': 900})
    try:
        ctx.grant_permissions(['clipboard-read', 'clipboard-write'], origin=f'http://127.0.0.1:{PUERTO}')
    except Exception:
        pass
    ctx.route('**/*', lambda route: route.abort() if any(h in route.request.url for h in BLOQUEADOS) else route.continue_())
    page = ctx.new_page()

    def on_console(m):
        if m.type == 'error':
            url = (m.location or {}).get('url', '') or ''
            if any(h in url for h in BLOQUEADOS) or any(h in m.text for h in BLOQUEADOS):
                return
            errores.append(f'[console {ancho}px] {m.text} @ {url}')
    page.on('console', on_console)
    page.on('pageerror', lambda e: errores.append(f'[pageerror {ancho}px] {e}'))
    page.add_init_script('try{localStorage.clear()}catch(e){}' if ancho == 1280 else '')
    return ctx, page


def esperar(page):
    page.wait_for_function("() => !document.querySelector('#app').textContent.includes('Cargando') && !document.querySelector('#a-cargando')", timeout=15000)
    page.wait_for_timeout(60)


def ir(page, tab):
    page.click(f'#tabs button[data-id="{tab}"]')
    esperar(page)
    vistas[0] += 1


def grado(page, g):
    page.select_option('#grado', g)
    esperar(page)


def foto(page, nombre, completa=False):
    if capturas:
        page.screenshot(path=os.path.join(capturas, nombre + '.png'), full_page=completa)


with sync_playwright() as p:
    browser = p.chromium.launch()
    ctx, page = nuevo_contexto(browser)
    page.goto(URL)
    esperar(page)
    orden = page.eval_on_selector_all('#tabs button', 'bs => bs.map(b => b.dataset.id)')
    exige(orden == TABS, f'orden de pestañas {orden}')

    # 1) recorrido 7 pestañas × 12 grados
    print('Recorrido de pestañas × grados…')
    for g in GRADOS:
        grado(page, g)
        for t in TABS:
            ir(page, t)
            vacio = page.evaluate("() => document.querySelector('#app').innerText.trim().length")
            exige(vacio > 40, f'vista vacía {t} {g}')
            if t == 'ciencia':
                exige(page.locator('#c-out .hoja').count() >= 2, f'ficha de ciencia {g}')
            if t == 'lectura':
                exige(page.locator('#l-txt .sent').count() > 2, f'texto de lectura {g}')
            if t == 'dba':
                exige(page.locator('#d-out .qbox').count() > 0, f'DBA {g}')
            if t == 'inicio':
                page.wait_for_function("() => !document.querySelector('#c-cien').textContent.includes('…')", timeout=8000)

    # 2) ayudas: 10 × fuentes, en varios grados
    print('Ayudas didácticas…')
    for g in ['tr', '03', '05', '08', '11']:
        grado(page, g)
        ir(page, 'ayudas')
        for fuente in ['ciencia', 'lectura', 'libre']:
            page.click(f'[data-fu="{fuente}"]')
            esperar(page)
            for a in AYUDAS:
                page.click(f'[data-ay="{a}"]')
                esperar(page)
                vistas[0] += 1
                n = page.locator('#a-out .hoja').count()
                exige(n >= 2, f'ayuda {a} fuente {fuente} grado {g}: {n} hojas')
                if a == 'puzzle':
                    info = page.evaluate("""() => {
                        const s = document.querySelector('#a-out .sopa'); const c = document.querySelector('#a-out .cruci');
                        const pal = [...document.querySelectorAll('#a-out ul.pal li')].length;
                        return {sopa: !!s, cruci: !!c, pal, notas: [...document.querySelectorAll('#a-out .note')].map(n => n.textContent).join(' | ')}; }""")
                    exige(info['sopa'] and info['cruci'] and info['pal'] >= 3, f'puzzle {fuente} {g}: {info}')
                if g == '05' and fuente == 'ciencia':
                    foto(page, f'ayuda_{a}', True)
    # determinismo por semilla
    grado(page, '05'); ir(page, 'ayudas'); page.click('[data-fu="ciencia"]'); esperar(page); page.click('[data-ay="puzzle"]'); esperar(page)
    page.fill('#a-seed', '4321'); page.dispatch_event('#a-seed', 'change'); esperar(page)
    h1 = page.inner_html('#a-out .hojas')
    page.click('[data-ay="escape"]'); esperar(page); page.click('[data-ay="puzzle"]'); esperar(page)
    exige(h1 == page.inner_html('#a-out .hojas'), 'la misma semilla no reproduce el mismo puzzle')
    # verificación interna de sopa y crucigrama con muchas semillas
    rep = page.evaluate("""() => { const T = window.SABI_TALLER, A = T.ayudas; let malos = 0, fuera = 0, n = 0;
        const W = ['DENSIDAD','FRICCION','GRAVEDAD','ENERGIA','PALANCA','REFRACCION','SOMBRA','IMAN','VAPOR','MEZCLA'];
        for (let s = 1; s <= 150; s++) { const r = T.rng(s); const S = A.sopa(W, r, s % 12); const C = A.cruci(W.map(w => ({w, d: 'x'})), r);
          n++; if (!S || !S.ok || S.pos.length !== W.length) malos++; if (!C || !C.ok) malos++; fuera += C ? C.fuera.length : 10; }
        return {n, malos, fuera}; }""")
    print('  sopa/crucigrama 150 semillas:', rep)
    exige(rep['malos'] == 0, f'verificación de puzzles {rep}')

    # 3) matemáticas → ayudas
    print('Matemáticas → Ayudas…')
    ir(page, 'mate')
    page.click('#m-aya')
    esperar(page)
    exige(page.evaluate('SABI_TALLER.state.tab') == 'ayudas', 'mate no abrió ayudas')
    exige(page.locator('[data-fu="enviado"].on').count() == 1, 'fuente «enviado» no activa tras Matemáticas')
    for a in AYUDAS:
        page.click(f'[data-ay="{a}"]'); esperar(page)
        exige(page.locator('#a-out .hoja').count() >= 1 or page.locator('#a-out .note').count() >= 1, f'ayuda {a} con fuente de matemáticas')
    page.click('#a-out [data-act="check"]') if page.locator('#a-out [data-act="check"]').count() else None

    # 4) ciencia: filtro, búsqueda, ficha y envío
    print('Ciencia…')
    grado(page, '04'); ir(page, 'ciencia')
    page.click('[data-eje="quimica"]')
    exige(page.locator('#c-list .card').count() >= 1, 'filtro por eje química')
    page.fill('#c-q', 'zzzz-no-existe'); exige(page.locator('#c-list .card').count() == 0, 'búsqueda vacía')
    page.fill('#c-q', '')
    page.locator('#c-list .card').nth(1).click()
    exige(page.locator('#c-out .hoja.clave').count() == 1, 'clave del experimento')
    page.check('#c-out [data-act="clave"]')
    foto(page, 'ciencia_1280', True)
    page.click('#c-aya'); esperar(page)
    exige(page.evaluate('SABI_TALLER.state.tab') == 'ayudas', 'ciencia no envió a ayudas')
    exige('Ciencia' in page.inner_text('[data-fu="enviado"]'), 'fuente enviada desde ciencia')

    # 5) lectura: sección 1 con oraciones correctas, 2, 3, 4, 5, 6, imprimible
    print('Lectura…')
    grado(page, '03'); ir(page, 'lectura')
    t = page.evaluate("() => { const T = SABI_TALLER; const id = document.querySelector('[data-lid].on').dataset.lid; return T.lectura['03'].filter(x => x.id === id)[0]; }")
    for i, x in enumerate(t['literal']):
        page.fill(f'.lit-in[data-i="{i}"]', x['r'])
        page.click(f'[data-act-s="lit"][data-i="{i}"]')
        page.click(f'#l-txt .sent[data-p="{x["s"][0]}"][data-s="{x["s"][1]}"]')
    page.click('#l-chk')
    exige(page.locator('#l-sec .qbox.done').count() == 4, 'literal: 4 correctas')
    foto(page, 'lectura_sec1', True)
    page.click('[data-sec="2"]')
    for i, x in enumerate(t['entrelineas']):
        page.click(f'[data-ent="{i}"][data-j="{x["c"]}"]')
    exige(page.locator('#l-sec .qbox.done').count() == len(t['entrelineas']), 'entre líneas')
    exige(page.locator('#l-txt .sent.hint').count() >= 1, 'pista resaltada')
    page.click('[data-sec="3"]')
    exige(page.locator('#l-txt mark').count() >= 1, 'palabra resaltada en contexto')
    for i, x in enumerate(t['contexto']):
        page.click(f'[data-ctx="{i}"][data-j="{x["c"]}"]')
    exige(page.locator('#l-sec .qbox.done').count() == len(t['contexto']), 'contexto')
    page.click('[data-sec="4"]')
    for i, x in enumerate(t['dondelopone']):
        page.click(f'[data-act-s="don"][data-i="{i}"]')
        page.click(f'#l-txt .sent[data-p="{x["s"][0]}"][data-s="{x["s"][1]}"]')
    page.click('#l-chk')
    exige(page.locator('#l-sec .qbox.done').count() == len(t['dondelopone']), 'dónde lo pone')
    page.click('[data-sec="5"]')
    # ordenar con los botones: burbuja usando el estado
    for _ in range(12):
        orden_actual = [t['orden'].index(s) for s in page.eval_on_selector_all('ol.orden li > span:first-child', 'xs => xs.map(x => x.textContent)')]
        mal = next((k for k in range(len(orden_actual) - 1) if orden_actual[k] > orden_actual[k + 1]), None)
        if mal is None:
            break
        page.click(f'[data-dn="{mal}"]')
    page.click('#l-ord')
    exige('correcto' in page.inner_text('#l-ordfb'), 'orden correcto')
    for i, c in enumerate(t['causas']):
        page.select_option(f'[data-cau="{i}"]', str(i))
    page.click('#l-cau')
    exige('Todas' in page.inner_text('#l-caufb'), 'causas correctas')
    page.click('[data-sec="6"]')
    page.fill('[data-arg="0"]', 'Estoy de acuerdo porque el texto dice que…')
    page.check('[data-crit="0"][data-j="0"]')
    page.click('[data-modo="print"]')
    exige(page.locator('#l-out .hoja').count() == 2, 'lectura imprimible')
    page.click('[data-modo="int"]')

    # 6) comandos
    print('Comandos…')
    ir(page, 'comandos')
    page.fill('#q-q', 'brinstorm')
    exige(page.locator('#q-list [data-cmd="/brainstorm"]').count() == 1, 'alias /brinstorm → /brainstorm')
    page.click('#q-list [data-cmd="/brainstorm"]')
    page.fill('#q-tema', 'la fotosíntesis'); page.fill('#q-ctx', '5.° grado')
    exige('la fotosíntesis' in page.inner_text('#q-pl'), 'plantilla con {tema}')
    page.click('#q-copy')
    page.wait_for_timeout(200)
    try:
        exige('la fotosíntesis' in page.evaluate('navigator.clipboard.readText()'), 'copiar al portapapeles')
    except Exception as e:
        print('  (portapapeles no legible en este navegador:', e, ')')
    page.fill('#q-q', '')
    exige(page.locator('#q-pm h2, #q-pm h3').count() > 3, 'Prompt Maestro renderizado')
    exige(page.locator('#q-pm script').count() == 0, 'markdown sin scripts')
    with page.expect_download() as d:
        page.click('#q-pm-d')
    exige(d.value.suggested_filename.endswith('.md'), 'descarga .md')
    foto(page, 'comandos_1280')

    # 7) DBA
    print('DBA…')
    ir(page, 'dba')
    for a in ['ciencias', 'matematicas', 'lenguaje']:
        page.click(f'[data-area="{a}"]'); esperar(page)
        exige(page.locator('#d-out .qbox').count() > 0, f'DBA {a}')
    # carrera: cambiar de pestaña antes de que cargue
    page.evaluate("() => { SABI_TALLER.ir('lectura'); SABI_TALLER.ir('mate'); }")
    page.wait_for_timeout(400)
    exige(page.locator('#m-out').count() == 1 and page.locator('#l-out').count() == 0, 'condición de carrera lectura→mate')
    ir(page, 'inicio'); foto(page, 'inicio_1280')
    ctx.close()

    # 8) móvil 390 px: sin scroll horizontal
    print('Móvil 390 px…')
    ctx, page = nuevo_contexto(browser, 390)
    page.goto(URL); esperar(page)
    for g in ['tr', '05', '11']:
        grado(page, g)
        for t in TABS:
            ir(page, t)
            sobra = page.evaluate('document.documentElement.scrollWidth - window.innerWidth')
            exige(sobra <= 0, f'scroll horizontal {sobra}px en {t} {g} (390px)')
            if g == '05':
                foto(page, f'movil_{t}', True)
        ir(page, 'ayudas')
        page.click('[data-fu="ciencia"]'); esperar(page)
        for a in AYUDAS:
            page.click(f'[data-ay="{a}"]'); esperar(page)
            sobra = page.evaluate('document.documentElement.scrollWidth - window.innerWidth')
            exige(sobra <= 0, f'scroll horizontal {sobra}px en ayuda {a} {g} (390px)')
            if g == '05' and a in ('puzzle', 'boardgame', 'minibook', 'comic'):
                foto(page, f'movil_ayuda_{a}', True)
    ctx.close()
    browser.close()

if servidor:
    servidor.terminate()

print(f'\nVistas recorridas: {vistas[0]} · errores de consola/página: {len(errores)} · comprobaciones fallidas: {len(fallos)}')
for e in errores[:40]:
    print('  ERROR', e)
sys.exit(1 if errores or fallos else 0)
