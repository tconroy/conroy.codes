/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';

import RSS from 'rss';

import { Post, Author } from '~/@types/common/types';
import getAllPostPreviews from '~/getAllPostPreviews';
import SEODefaults from '~/utils/SEODefaults';

(async () => {
  const feed = new RSS({
    feed_url: `${SEODefaults.openGraph!.url!}feed.xml`,
    generator: '',
    site_url: SEODefaults.openGraph!.url!,
    title: SEODefaults.title!,
  });

  getAllPostPreviews().forEach(({ link, module: { meta } }: Post) => {
    feed.item({
      title: meta.title,
      guid: link,
      url: `https://conroy.codes${link}`,
      date: meta.date,
      description: meta.description,
      custom_elements: meta.authors.map((a: Author) => ({
        author: [
          {
            name: a.fullName,
          },
        ],
      })),
    });
  });

  fs.writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
})();
