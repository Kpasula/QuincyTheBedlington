/**
 * Central site configuration and information architecture.
 * Positioned as a breed knowledge base (not "Quincy's personal site"),
 * with Quincy as the real-world example throughout.
 */

export const SITE = {
  /** Canonical apex origin. Keep in sync with astro.config.mjs `site`. */
  origin: 'https://quincythebedlington.com',
  name: 'Quincy the Bedlington',
  /** Positioning line — the strategic identity of the whole project. */
  tagline: 'The Bedlington Terrier knowledge base',
  /** One-line description used for meta + Open Graph fallback. */
  description:
    'A real, growing guide to Bedlington Terriers — health, grooming, food, training and more — written from living with one. Quincy is the example on every page.',
  locale: 'en-US',
  /** Handle used for social + Schema.org sameAs. */
  instagram: 'https://www.instagram.com/quincythebedlington',
  instagramHandle: '@quincythebedlington',
} as const;

export interface Section {
  /** URL slug: /{slug} */
  slug: string;
  /** Human title used in nav + headings. */
  title: string;
  /** Short description shown on the homepage and section index. */
  description: string;
}

/**
 * Top-level sections. Each becomes /{slug} and groups articles whose
 * frontmatter `section` matches the slug.
 */
export const SECTIONS: Section[] = [
  {
    slug: 'breed-guide',
    title: 'Breed Guide',
    description:
      'What a Bedlington Terrier actually is — origin, look, temperament and what living with one is really like.',
  },
  {
    slug: 'health',
    title: 'Health',
    description:
      'Breed-specific health — including copper toxicosis — plus everyday care, symptoms and when to call the vet.',
  },
  {
    slug: 'grooming',
    title: 'Grooming',
    description:
      'The coat that never stops growing: haircut styles, schedules, tools and doing it yourself vs a groomer.',
  },
  {
    slug: 'nutrition',
    title: 'Nutrition',
    description:
      'Food, portions, treats and the picky-eater problem — with what actually worked and what did not.',
  },
  {
    slug: 'training',
    title: 'Training',
    description:
      'Crate, recall, leash, socialization and the puppy phases — real timelines, not textbook ones.',
  },
  {
    slug: 'behavior',
    title: 'Behavior',
    description:
      'Temperament with people, kids, cats and other dogs, and what a Bedlington is like day to day.',
  },
  {
    slug: 'puppies',
    title: 'Puppies',
    description:
      'From 5 weeks to a year — stages, milestones, first weeks home and what to expect when.',
  },
  {
    slug: 'activities',
    title: 'Activities',
    description:
      'Walks, hikes, swimming, agility and how much exercise a Bedlington really needs.',
  },
  {
    slug: 'travel',
    title: 'Travel',
    description:
      'Road trips, hotels, parks and pet rules — planned and tested on real routes.',
  },
  {
    slug: 'research',
    title: 'Research',
    description:
      'Plain-English summaries of breed standards, genetic studies and health research — referenced, not copied.',
  },
];

export function getSection(slug: string): Section | undefined {
  return SECTIONS.find((s) => s.slug === slug);
}
