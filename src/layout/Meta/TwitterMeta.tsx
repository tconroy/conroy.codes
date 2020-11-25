import React from 'react';

import { Config } from '../../utils/Config';

interface Props {
  description?: string;
  image?: string;
  title?: string;
  twitterUsername?: string;
}

export function TwitterMeta({
  description = Config.description,
  title = Config.title,
  twitterUsername = Config.twitter.username,
  image = Config.image.default,
}: Props) {
  return (
    <>
      <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" key="twitter:creator" content={`@${twitterUsername}`} />
      <meta name="twitter:description" key="twitter:description" content={description} />
      <meta name="twitter:image" key="twitter:image" content={image} />
      <meta name="twitter:title" key="twitter:title" content={title} />
    </>
  );
}
