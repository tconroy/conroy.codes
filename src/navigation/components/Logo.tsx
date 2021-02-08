import React from 'react';

import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <img
          alt="Tom Conroy"
          className="inline-block"
          height="32"
          src="/favicon-32x32.png"
          width="32"
          key="logo"
        />
        {' '}
        <span className="font-bold text-l md:text-xl ml-2">Conroy &bull; Codes</span>
      </div>
    </Link>
  );
}
