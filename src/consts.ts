/**
 * Central site config. This is Quincy's site. He is the star of every page.
 * Voice: casual, warm, proud dog-parent. No corporate polish, no long dashes.
 */

export const SITE = {
  /** Canonical apex origin. Keep in sync with astro.config.mjs `site`. */
  origin: 'https://quincythebedlington.com',
  name: 'Quincy the Bedlington',
  /** The one-liner that sets his whole vibe. */
  tagline: 'The goodest boy on the internet',
  /** Short description for meta + social cards. */
  description:
    'Meet Quincy, a blue Bedlington terrier who looks like a little lamb and runs the whole house. Photos, his adventures, his favorite snacks, and a game or two while you are here.',
  locale: 'en-US',
  /** Instagram. Swap the handle if it ever changes. */
  instagram: 'https://www.instagram.com/quincythebedlington',
  instagramHandle: '@quincythebedlington',
} as const;

export interface Section {
  /** URL slug: /{slug}. Kept stable so existing articles keep working. */
  slug: string;
  /** Title shown in nav + headings, in Quincy's voice. */
  title: string;
  /** Short blurb for the homepage cards. */
  description: string;
  /** Little emoji for the card, purely for fun. */
  emoji: string;
}

/**
 * Quincy's world, broken into corners. Slugs stay the same as before so the
 * articles already written still load. Only the titles and blurbs changed.
 */
export const SECTIONS: Section[] = [
  {
    slug: 'breed-guide',
    title: 'His Story',
    description: 'Where he came from, why he looks like a tiny lamb, and how he became the boss.',
    emoji: '🐑',
  },
  {
    slug: 'health',
    title: 'Staying Strong',
    description: 'How we keep the little king in top shape, vet days included.',
    emoji: '💪',
  },
  {
    slug: 'grooming',
    title: 'Glow Ups',
    description: 'That coat never stops growing. Here is how he stays this handsome.',
    emoji: '✂️',
  },
  {
    slug: 'nutrition',
    title: 'Snack Time',
    description: 'The foods he demolishes, the ones he snubs, and his royal menu.',
    emoji: '🍖',
  },
  {
    slug: 'training',
    title: 'His Tricks',
    description: 'A genius, obviously. The tricks he nailed and the ones he ignores.',
    emoji: '🎓',
  },
  {
    slug: 'behavior',
    title: 'His Vibe',
    description: 'Sweet, silly, dramatic. What he is actually like all day long.',
    emoji: '😎',
  },
  {
    slug: 'puppies',
    title: 'Puppy Days',
    description: 'The tiny fluffball era. Way too cute, slightly chaotic.',
    emoji: '🍼',
  },
  {
    slug: 'activities',
    title: 'Adventures',
    description: 'Walks, hikes, swims, and every place he has decided to conquer.',
    emoji: '🏔️',
  },
  {
    slug: 'travel',
    title: 'Road Trips',
    description: 'Quincy sees the world. Hotels, parks, and the best window seats.',
    emoji: '🚗',
  },
  {
    slug: 'research',
    title: 'Fun Facts',
    description: 'Cool little things about him and his lamb-dog breed.',
    emoji: '✨',
  },
];

export function getSection(slug: string): Section | undefined {
  return SECTIONS.find((s) => s.slug === slug);
}
