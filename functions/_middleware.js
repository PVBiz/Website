// Search engines indexed the Cloudflare Pages address instead of www.pvbiz.co.za.
// 301 the production pages.dev host and the bare domain to www; keep preview deploys out of the index.
const CANONICAL_HOST = 'www.pvbiz.co.za';
const REDIRECT_HOSTS = new Set(['website-6za.pages.dev', 'pvbiz.co.za']);

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.protocol = 'https:';
    url.hostname = CANONICAL_HOST;
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }

  const response = await context.next();
  if (url.hostname.endsWith('.pages.dev')) {
    const headed = new Response(response.body, response);
    headed.headers.set('X-Robots-Tag', 'noindex');
    return headed;
  }
  return response;
}
