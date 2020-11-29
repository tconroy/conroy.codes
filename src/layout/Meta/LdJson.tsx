import React from 'react';

import { Config } from '../../utils/Config';
import { addTrailingSlash } from '../../utils/Url';
import { MetaProps } from './types';

function makeSchema(
  path: string,
  title: string,
  description = Config.description,
  post: MetaProps['post'],
) {
  return {
    description,
    author: {
      '@type': 'Person',
      name: Config.author,
    },
    '@type': 'BlogPosting',
    url: `${Config.url}${addTrailingSlash(path)}`,
    publisher: {
      '@type': 'Organization',
      logo: {
        '@type': 'ImageObject',
        url: `${Config.url}/assets/images/logo.png`,
      },
      name: `${Config.author}`,
    },
    headline: `${title} | ${Config.site_name}`,
    image: [`${Config.url}${post!.image}`],
    datePublished: `${new Date(post!.date).toISOString()}`,
    dateModified: `${new Date(post!.modified_date).toISOString()}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${Config.url}${addTrailingSlash(path)}`,
    },
    '@context': 'http://schema.org',
  };
}

type LDJsonProps = {
  title: string;
  description: string;
  post?: MetaProps['post'];
  path: string;
};

export function LDJson({
  title, description, post, path,
}: LDJsonProps) {
  return (
    <script
      type="application/ld+json"
      key="ldjson"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(makeSchema(path, title, description, post)),
      }}
    />
  );
}
