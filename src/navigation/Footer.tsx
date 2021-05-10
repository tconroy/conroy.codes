import React from 'react';

import Link from 'next/link';

import Emoji from '~/components/Emoji';
import ExternalLink from '~/components/ExternalLink';
import SEODefaults from '~/utils/SEODefaults';

type LinkConfig = {
  label: string;
  href: string;
  type: 'internal' | 'external';
};

const links: LinkConfig[] = [
  {
    href: `https://www.twitter.com/${SEODefaults.twitter?.handle}`,
    label: 'Twitter',
    type: 'external',
  },
  {
    href: '/feed.xml',
    label: 'RSS',
    type: 'internal',
  },
  {
    href: 'https://www.github.com/tconroy',
    label: 'GitHub',
    type: 'external',
  },
  {
    href: 'mailto:tom@thomasconroy.net',
    label: 'Contact',
    type: 'internal',
  },
];

function LinkItem({ type, href, label }: LinkConfig) {
  const Element = type === 'external' ? ExternalLink : Link;

  return (
    <li
      key={label}
      className={`
        first:ml-0
        inline-flex
        md:block
        md:ml-0
        ml-4
      `}
    >
      <Element href={href}>{label}</Element>
    </li>
  );
}

export function Footer() {
  return (
    <footer
      className={`
      dark:text-white
      duration-150
      lg:pt-16
      m-auto
      max-w-screen-md
      md:pt-12
      px-8
      transition-colors
      w-full
    `}
    >
      <div
        className={`
        flex
        py-8
        m-auto
        max-w-screen-lg
        w-full
        flex-col
        md:flex-row
      `}
      >
        <div
          className={`
          block
          md:flex
          flex-col
          flex-grow
          flex-wrap
          self-start
          text-left
        `}
        >
          <div>
            Made with
            {' '}
            <Emoji label="love">♥</Emoji>
            {' '}
            by
            {' '}
            <Link href="/">
              <a>Tom Conroy</a>
            </Link>
          </div>
          <small>
            <Emoji label="Copyright">©️</Emoji>
            {' '}
            2020-present Tom Conroy. All Rights Reserved.
          </small>
        </div>
        <nav className="text-left">
          <ul>{links.map(LinkItem)}</ul>
        </nav>
      </div>
    </footer>
  );
}
