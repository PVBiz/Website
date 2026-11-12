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

// One entry per "PVBiz vs <competitor>" page. Every competitor claim must trace to a
// source in `sources` (facts files: _pvbiz/ideas/website-redesign/compare/).
const compare = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/compare" }),
  schema: z.object({
    /** Competitor display name, e.g. "Sunsynk Connect". */
    competitor: z.string(),
    /** Slug of the matching integrations entry; links the two pages both ways. */
    integration: z.string().optional(),
    /** "alternative": pick one or the other. "complement": used together with PVBiz. */
    relationship: z.enum(["alternative", "complement"]),
    /** Page h1. */
    title: z.string(),
    /** The one-paragraph answer under the h1. */
    answer: z.string(),
    /** Meta description (25-158 characters, enforced by Base.astro). */
    description: z.string(),
    /** Side-by-side rows. `them` states only what the sources support. */
    rows: z
      .array(z.object({ feature: z.string(), pvbiz: z.string(), them: z.string() }))
      .min(5),
    choosePvbiz: z.array(z.string()).min(1),
    chooseThem: z.array(z.string()).min(1),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(1),
    /** Public sources for every competitor claim on the page. */
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).min(1),
    /** Date the competitor facts were last checked; shown on the page. */
    checked: z.coerce.date(),
  }),
});

export const collections = { integrations, compare };
