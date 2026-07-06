import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, getSection } from '../consts';

export async function GET(context) {
  const articles = (await getCollection('articles', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
  );

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.origin,
    items: articles.map((a) => {
      const slug = a.id.split('/').pop();
      return {
        title: a.data.title,
        description: a.data.description,
        pubDate: a.data.publishDate,
        link: `/${a.data.section}/${slug}`,
        categories: [getSection(a.data.section)?.title ?? a.data.section],
      };
    }),
    customData: `<language>en-us</language>`,
  });
}
