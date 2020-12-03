import React from 'react';

export default function Logo() {
  return (
    <div>
      <span className="font-semibold text-sm">Tom</span>
      {' '}
      <img
        alt="Tom Conroy"
        className="inline-block"
        height="32"
        src="/favicon-32x32.png"
        width="32"
        key="logo"
      />
      {' '}
      <span className="font-semibold text-sm">Conroy</span>
    </div>
  );
}
