import React from 'react';

import Link from 'next/link';

import ExternalLink from '~/components/ExternalLink';
import SEODefaults from '~/utils/SEODefaults';

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-300">
      <div className="w-full max-w-screen-xl m-auto flex py-8">
        <div className="flex flex-grow self-start text-left flex-col flex-wrap">
          <div>
            Made with
            {' '}
            <span role="img" aria-label="Love">
              ♥
            </span>
            {' '}
            by
            {' '}
            <Link href="/">
              <a>Tom Conroy</a>
            </Link>
          </div>
          <small>
            <span role="img" aria-label="Copyright">
              ©️
            </span>
            {' '}
            2020-present Tom Conroy. All Rights Reserved.
          </small>
        </div>
        <nav className="text-left">
          <ul>
            <li>
              <ExternalLink href={`https://www.twitter.com/${SEODefaults.twitter?.handle}`}>
                Twitter
              </ExternalLink>
            </li>
            <li>
              <Link href="/feed.xml">
                <a>RSS</a>
              </Link>
            </li>
            <li>
              <ExternalLink href="https://www.github.com/tconroy">GitHub</ExternalLink>
            </li>
            <li>
              <a href="mailto:tom@thomasconroy.net">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
