import React from 'react';

import Link from 'next/link';

import Logo from './components/Logo';
import ToggleColorMode from './components/ToggleColorMode';

export function Navbar() {
  return (
    <nav className="relative w-full max-w-screen-xl m-auto flex items-center">
      <div className="nav-left flex flex-1">
        <ul className="navbar flex flex-wrap text-xl">
          <li className="mr-6 py-4">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </li>
          <li className="mr-6 py-4">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="mr-6 py-4">
            <a href="https://github.com/tconroy">GitHub</a>
          </li>
          <li className="mr-6 py-4">
            <a href="/assets/documents/tomconroy-resume-2020.pdf">resumé</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ToggleColorMode />
      </div>

      <style jsx global>
        {`
          .navbar a {
            @apply text-gray-700;
          }

          .navbar a:hover {
            @apply no-underline text-gray-900;
          }
        `}
      </style>
    </nav>
  );
}
