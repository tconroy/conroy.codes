import React, { ReactNode } from 'react';

type NavbarProps = {
  children: ReactNode;
};

const Navbar = (props: NavbarProps) => (
  <ul className="navbar flex flex-wrap text-xl">
    {props.children}

    <style jsx>
      {`
        .navbar :global(a) {
          @apply text-gray-700;
        }

        .navbar :global(a:hover) {
          @apply no-underline text-gray-900;
        }
      `}
    </style>
  </ul>
);

export { Navbar };
