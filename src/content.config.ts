import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One entry per supported brand or platform. Everything the Integration template
// (spec §4) renders comes from the front-matter; the Markdown body carries the
// brand-specific prose (at least 400 words of it before a page is published).
const integrations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/integrations" }),
  schema: z.object({
    /** Display name, e.g. "Sunsynk". */
    name: z.string(),
    /** Path under /img/brands/ and its intrinsic size. */
    logo: z.string(),
    logoWidth: z.number().int().positive(),
    logoHeight: z.number().int().positive(),
    logoTall: z.boolean().default(false),
    /** The one-sentence answer under the h1: what is read and how often. */
    answer: z.string(),
    /** Meta description (150-160 characters). */
    description: z.string(),
    /** How PVBiz gets access: "shared account" (share with admin@pvbiz.co.za),
     * "own login", "api token" or "business authorisation". Free text, shown as-is. */
    connectionMethod: z.string(),
    /** Numbered connect steps, in order. */
    steps: z.array(z.object({ title: z.string(), body: z.string() })).min(1),
    /** "What PVBiz reads from <brand>" table. */
    dataRead: z
      .array(
        z.object({
          metric: z.string(),
          detail: z.string(),
        }),
      )
      .min(1),
    /** Connectable on the Installer Platform only (not yet by homeowners); switches the page CTAs. */
    installerOnly: z.boolean().default(false),
    /** Whether PVBiz can change inverter settings on this brand. */
    control: z.boolean(),
    controlNote: z.string().optional(),
    /** Alerts that work on this brand. */
    alerts: z.array(z.string()).min(1),
    /** Known limits, stated honestly (polling interval, missing registers). */
    limits: z.array(z.string()).min(1),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(1),
    /** Shown as "Updated <date>" and used as dateModified. */
    updated: z.coerce.date(),
  }),
});

export const collections = { integrations };
