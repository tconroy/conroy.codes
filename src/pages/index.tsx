import React from 'react';

import Link from 'next/link';

import { BlogGallery } from '../blog/BlogGallery';
import getAllPostPreviews from '../getAllPostPreviews';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { Config } from '../utils/Config';
import { Content } from '~/components/Content';
import Emoji from '~/components/Emoji';
import ExternalLink from '~/components/ExternalLink';
import Footnote from '~/components/MDX/Footnote';
import Components from '~/components/MDX/Type';
// import NewsletterSubscribeBlock from '~/navigation/components/NewsletterSubscribeBlock';

const posts = getAllPostPreviews();

export default function Index() {
  const { H1, P } = Components;

  return (
    <Main meta={<Meta title="Home" description={Config.description} />}>
      <Content>
        <H1>
          <span>
            Hey, I&apos;m
            <br className="md:hidden" />
            {' '}
            <span className="bg-gold text-darkmode-accent">Tom Conroy.</span>
            {' '}
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <Emoji label="waving hand emoji">👋</Emoji>
          </span>
        </H1>
        {/* I&apos;m a software engineer, writer, and general internet mischief
          maker. */}
        <P>
          I&apos;m a software engineer, writer, and
          {' '}
          <Footnote
            title={`
            'digital native' is just a polite way of saying, 
            'spends way too much time on the internet' 😅
          `}
          >
            digital native
          </Footnote>
          .
        </P>
        <P>
          Welcome to my modest digital zen garden — a place to catalog my thoughts on topics of
          personal interest.
        </P>
        <P>
          Expect to find letters on software development, coding, design, startups, life,
          technology, video games, books, films, and whatever insanity my
          {' '}
          <Footnote
            title={`
            Tortie is short for Tortoiseshell and is taken from the similar 
            colorings.
          `}
          >
            Tortie
          </Footnote>
          {' '}
          cat Cinnamon gets up to. Not all the thoughts shared here will be complete — Some will be
          sparkly and polished, while others wll be raw and unrefined. Regardless, I hope this site
          can bring you something of value.
        </P>
        <P>
          From here, you can learn more
          {' '}
          <Link href="/about">about me</Link>
          , read some of
          {' '}
          <Link href="/posts">my writings</Link>
          , or
          {' '}
          <ExternalLink href="mailto:tom@thomasconroy.net">get in touch!</ExternalLink>
        </P>

        <hr className="my-14" />

        <BlogGallery posts={posts} />

        {/* <section className="my-14">
          <NewsletterSubscribeBlock />
        </section> */}
      </Content>
    </Main>
  );
}
