// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const SITE = 'https://www.pvbiz.co.za';

// Legacy pages served as static files from public/; they keep their exact URLs.
// Cloudflare Pages serves public/<name>.html at /<name> and 308-redirects the .html form,
// so the sitemap lists the extensionless URL.
const LEGACY_PAGES = ['privacy-policy', 'accountdata', 'chrome-extension-privacy-policy'].map(
  (p) => `${SITE}/${p}`
);

/** Map a site URL to the source file that produces it, for a git-based lastmod. */
/** @param {string} url */
function sourceFor(url) {
  const path = new URL(url).pathname;
  if (path.endsWith('.html')) return `public/${path.slice(1)}`;
  const slug = path.replace(/^\/|\/$/g, '');
  if (slug === '') return 'src/pages/index.astro';
  if (existsSync(`public/${slug}.html`)) return `public/${slug}.html`;
  const brand = slug.match(/^integrations\/([^/]+)$/);
  if (brand) return `src/content/integrations/${brand[1]}.md`;
  const versus = slug.match(/^compare\/([^/]+)$/);
  if (versus) return `src/content/compare/${versus[1]}.md`;
  for (const candidate of [`src/pages/${slug}.astro`, `src/pages/${slug}/index.astro`]) {
    if (existsSync(candidate)) return candidate;
  }
  return null;
}

const today = new Date().toISOString().slice(0, 10);

/** @param {string} url */
function lastmodFor(url) {
  const file = sourceFor(url);
  if (!file) return today;
  try {
    const git = (/** @type {string[]} */ args) =>
      execFileSync('git', args, { encoding: 'utf8' }).trim();
    const out = git(['log', '-1', '--format=%cs', '--', file]);
    // Uncommitted (new or modified) files fall back to the build date.
    const dirty = git(['status', '--porcelain', '--', file]);
    return out && !dirty ? out : today;
  } catch {
    return today;
  }
}

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      customPages: LEGACY_PAGES,
      filter: (page) => !page.endsWith('/404/'),
      serialize(item) {
        item.lastmod = lastmodFor(item.url);
        return item;
      },
    }),
  ],
});
