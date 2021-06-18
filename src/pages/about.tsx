import React from 'react';

import Link from 'next/link';

import { Content } from '../components/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import ExternalLink from '~/components/ExternalLink';
import Footnote from '~/components/MDX/Footnote';

export default function About() {
  return (
    <Main meta={<Meta title="About" description="About me" />}>
      <Content>
        <div className="inner-container m-auto">
          <h1
            className={`
          dark:text-white
          duration-150
          font-bold
          leading-snug
          mb-5
          text-5xl
          text-black
          transition-colors
        `}
          >
            About this site
          </h1>
          <p>
            My name is
            {' '}
            <strong>Tom Conroy</strong>
            , and despite my best efforts you&apos;ve somehow
            found your way into my little corner of the internet.
          </p>
          <br />
          <p>
            This site is mostly a personal journal. I enjoy talking and writing about technology, so
            you&apos;ll find a lot of that here, with tangents veering off into other directions as
            it suits me. I hope in some small way this site can provide value to you.
          </p>
          <br />
          <p>
            Currently I live in the lovely New York City metropolitan area with my girlfriend and
            our cat, Cinnamon. I own entirely too many black T-Shirts, and I am the complete
            Millennial beard-having, beer-drinking, coffee-loving
            {' '}
            <Footnote
              title="(my top-secret backup plan if / when I get burned out of tech
            would be to start a combo cafe / brew pub! Shh, don't tell anyone.)"
            >
              stereotype
            </Footnote>
            .
          </p>
          <br />
          <p>
            I am a software engineer by trade, working primarily in web and mobile spaces. Currently
            I&apos;m employed as a Senior Software Engineer and engineering Team Lead at
            {' '}
            <ExternalLink href="https://www.squarespace.com">Squarespace</ExternalLink>
            , where I
            develop digital tools that empower creatives to build amazing things. Working here has
            been an amazing experience, and I love getting to work on tools that empower individuals
            to share their voice or start a brand online.
          </p>
          <br />
          <p>
            If you&apos;re curious about my work history, you can learn more on my
            {' '}
            <Link href="/timeline">timeline</Link>
            {' '}
            page, or click
            <Link href="/now">here</Link>
            {' '}
            to see what I&apos;ve most recently been up to.
          </p>
        </div>
      </Content>
      <style jsx>
        {`
          .inner-container {
            max-width: 65ch;
          }
        `}
      </style>
    </Main>
  );
}
