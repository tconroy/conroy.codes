import fs from 'fs';

import { Author } from '@/@types/common/types';
import getAllPostPreviews from '@/getAllPostPreviews';
// eslint-disable-next-line import/no-extraneous-dependencies
import RSS from 'rss';

const feed = new RSS({
  title: 'Tom Conroy',
  site_url: 'https://conroy.codes',
  feed_url: 'https://conroy.codes/feed.xml',
});

getAllPostPreviews().forEach(({ link, module: { meta } }) => {
  feed.item({
    title: meta.title,
    guid: link,
    url: `https://conroy.codes${link}`,
    date: meta.date,
    description: meta.description,
    custom_elements: [].concat(
      meta.authors.map((author: Author) => ({ author: [{ name: author.fullName }] })),
    ),
  });
});

fs.mkdirSync('./public', { recursive: true });
fs.writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
