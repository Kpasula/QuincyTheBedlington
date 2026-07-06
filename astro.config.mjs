// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// The canonical production URL. Everything (sitemap, canonical tags, RSS,
// Schema.org) is built off this. www.quincythebedlington.com is redirected
// to this apex at the Cloudflare edge (see public/_redirects).
const SITE = 'https://quincythebedlington.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [
    mdx(),
    sitemap({
      // Keep drafts out of the sitemap even if they slip into the build.
      filter: (page) => !page.includes('/draft/'),
    }),
  ],
});
