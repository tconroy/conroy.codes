import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { Config } from '../../utils/Config';
import { ArticleMeta } from './ArticleMeta';
import { Favicons } from './Favicons';
import { LDJson } from './LdJson';
import { OGMeta } from './OGMeta';
import { TwitterMeta } from './TwitterMeta';
import { MetaProps } from './types';

export function Meta(props: MetaProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Favicons />
        <title>{`${props.title} | ${Config.site_name}`}</title>
        <meta
          name="description"
          content={props.description ? props.description : Config.description}
          key="description"
        />
        <meta name="author" content={Config.author} key="author" />
        {props.canonical && <link rel="canonical" href={props.canonical} key="canonical" />}
        <OGMeta title={props.title} description={props.description} />
        {props.post && (
          <>
            <meta property="og:type" content="article" key="og:type" />
            <meta property="og:image" content={`${Config.url}${props.post.image}`} key="og:image" />
            <TwitterMeta
              description={props.post.description}
              title={props.title}
              twitterUsername={props.post.twitter_username}
              image={props.post.image}
            />
            <ArticleMeta publishedDate={props.post.date} modifiedDate={props.post.modified_date} />
            <LDJson
              path={router.asPath}
              title={props.title}
              description={props.description}
              post={props.post}
            />
          </>
        )}
      </Head>
    </>
  );
}
