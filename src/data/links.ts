import { getCollection } from 'astro:content';
import { BRANDS, type Brand } from './brands';

/** Slugs that have a published brand page under src/content/integrations/. */
export async function publishedBrandSlugs(): Promise<Set<string>> {
  const entries = await getCollection('integrations');
  return new Set(entries.map((e) => e.id));
}

/**
 * A brand links to its own page once that page exists; until then it links to the
 * brand's entry on the integrations index, so no link on the site ever 404s.
 */
export function brandHref(brand: Pick<Brand, 'slug'>, published: Set<string>): string {
  return published.has(brand.slug) ? `/integrations/${brand.slug}/` : `/integrations/#${brand.slug}`;
}

export async function brandLinks(): Promise<(Brand & { href: string })[]> {
  const published = await publishedBrandSlugs();
  return BRANDS.map((b) => ({ ...b, href: brandHref(b, published) }));
}
