// SABI CENTEC · Capacitación Maestros — guardián del servidor (Cloudflare Worker)
// © 2025-2026 SABI CENTEC — Alexander Rojas Zamorano, Paula Andrea Rojas Cairasco y Daniela Rojas Cairasco.
//
// Regla del rector: los cursos solo se entregan a quien tiene sesión SABI (cuenta de la comunidad o equipo CENTEC).
// La verificación ocurre AQUÍ, en el servidor, antes de enviar el archivo: sin sesión, el navegador nunca recibe
// el contenido del curso (ni el HTML ni los paquetes de conocimiento kb/). El catálogo (portada) es público para
// que la plataforma sea visible y la gente sepa qué puede aprender.
//
// La sesión se consulta al portal sabicentec.com por enlace interno (service binding PORTAL → /api/sabi/sesion),
// sin copiar secretos. Si el portal no responde, se niega el acceso (falla cerrado).

// ENTRADA LIBRE (orden del rector, 30 oct 2026, jornada de capacitación): ningún curso pide sesión ni inscripción.
// Para volver a exigir sesión SABI: ENTRADA_LIBRE = false.
const ENTRADA_LIBRE = true;

const PUBLICAS = new Set(['/', '/index.html', '/robots.txt', '/sitemap.xml', '/favicon.ico', '/404.html']);

const CSP_PAGINA = "frame-ancestors 'self' https://sabicentec.com https://*.sabicentec.com; object-src 'none'; base-uri 'self'; upgrade-insecure-requests";
const SEGURIDAD = {
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'permissions-policy': 'camera=(), geolocation=(), payment=(), usb=(), microphone=(self)',
  'cross-origin-opener-policy': 'same-origin-allow-popups',
  'x-copyright': '(c) 2025-2026 SABI CENTEC - Alexander Rojas Zamorano, Paula Andrea Rojas Cairasco, Daniela Rojas Cairasco. Todos los derechos reservados.',
};

function blindar(r, privado) {
  const h = new Headers(r.headers);
  for (const [k, v] of Object.entries(SEGURIDAD)) if (!h.has(k)) h.set(k, v);
  if ((h.get('content-type') || '').includes('text/html') && !h.has('content-security-policy')) h.set('content-security-policy', CSP_PAGINA);
  // Cursos: nunca en buscadores ni en cachés compartidas, y prohibido entrenar IA con ellos
  h.set('x-robots-tag', privado ? 'noindex, nofollow, noarchive, noai, noimageai' : 'noai, noimageai');
  if (privado) h.set('cache-control', 'private, no-store');
  return new Response(r.body, { status: r.status, statusText: r.statusText, headers: h });
}

async function haySesion(req, env) {
  const cookie = req.headers.get('cookie') || '';
  if (!/sabi_(sso|com)=/.test(cookie)) return false;
  try {
    const r = await env.PORTAL.fetch(new Request('https://sabicentec.com/api/sabi/sesion', { headers: { cookie } }));
    if (!r.ok) return false;
    const j = await r.json();
    return !!(j && (j.equipo || j.cuenta));
  } catch (e) {
    return false;
  }
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    let p = url.pathname;
    try { p = decodeURIComponent(p); } catch (e) { /* ruta mal codificada: se trata como privada */ }

    // Archivos internos del repositorio: nunca se sirven
    if (/^\/(worker|\.github|docs)\//.test(p) || /^\/(wrangler\.toml|CLAUDE\.md|ROADMAP_TALLER\.md|\.sabi-puerta\.json|_headers|_redirects)$/.test(p)) {
      return blindar(new Response('No encontrado', { status: 404 }), true);
    }

    if (PUBLICAS.has(p)) return blindar(await env.ASSETS.fetch(req), false);

    if (!ENTRADA_LIBRE && !(await haySesion(req, env))) {
      const html = /\.html?$/.test(p) || !/\.[a-z0-9]+$/i.test(p);
      if (html && req.method === 'GET') {
        const destino = 'https://sabicentec.com/cuenta?volver=' + encodeURIComponent(url.href) + '#ingresar';
        return blindar(new Response(null, { status: 302, headers: { location: destino } }), true);
      }
      return blindar(new Response('Inicie sesión en sabicentec.com para ver este contenido.', { status: 401, headers: { 'content-type': 'text/plain; charset=utf-8' } }), true);
    }
    return blindar(await env.ASSETS.fetch(req), true);
  },
};
