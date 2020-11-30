/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';

import React from 'react';

import { MDXProvider } from '@mdx-js/react';
import { Feed } from 'feed';
import ReactDOMServer from 'react-dom/server';

import { Post } from '~/@types/common/types';
import { mdxComponents } from '~/content/Content';
import { getAllPosts } from '~/getAllPostPreviews';
import { tconroy } from '~/utils/Authors';
import { url, title } from '~/utils/SEODefaults';
import { removeTrailingSlash } from '~/utils/Url';

(async () => {
  const feed = new Feed({
    title,
    description: '',
    id: url,
    link: url,
    language: 'en',
    image: `${url}favicon-32x32.png`,
    favicon: `${url}favicon.ico`,
    copyright: `All Rights Reserved ${new Date().getFullYear()} ${tconroy.fullName}`,
    feedLinks: {
      json: `${removeTrailingSlash(url)}/json`,
      atom: `${removeTrailingSlash(url)}/atom`,
    },
    author: {
      name: tconroy.fullName,
      email: tconroy.email,
      link: `https://twitter.com/@${tconroy.twitter}`,
    },
  });

  getAllPosts().forEach(({ link, module: { meta, default: Content } }: Post) => {
    const fullPostLink: string = removeTrailingSlash(url) + link;

    const mdx = (
      <MDXProvider components={mdxComponents}>
        <Content />
      </MDXProvider>
    );

    const html = ReactDOMServer.renderToStaticMarkup(mdx);
    const postText = `<div style="margin-top=55px; font-style: italic;">
        (The post <a href="${fullPostLink}">${meta.title}</a> appeared first on <a href="${url}">Tom Conroy's Blog</a>.)\
      </div>`;

    feed.addItem({
      title: meta.title,
      id: meta.title,
      link: fullPostLink,
      content: html + postText,
      author: meta.authors.map(({ fullName, twitter }) => ({
        name: fullName,
        link: `https://twitter.com/${twitter}`,
      })),
      date: new Date(meta.date),
      image: `${removeTrailingSlash(url)}${meta.image}`,
      extensions: [
        {
          name: '_comments',
          objects: {
            about: 'Link to discussion forum',
            comments: meta.discussion,
          },
        },
      ],
    });
  });

  fs.writeFileSync('./public/feed.xml', feed.rss2());
  fs.writeFileSync('./public/atom.xml', feed.atom1());
  fs.writeFileSync('./public/feed.json', feed.json1());
})();
