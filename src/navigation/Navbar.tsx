import React, { useState } from 'react';

import ControlledHamburger from './components/ControlledHamburger';
import ControlledNav from './components/ControlledNav';
import Logo from './components/Logo';
import ToggleColorMode from './components/ToggleColorMode';

export function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleIsHamburgerOpen = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header
      className={`
      bg-transparent
      dark:text-gray-200
      duration-150
      text-gray-700
      transition-colors
      w-full
  `}
    >
      <div
        className={`
        flex
        flex-col
        lg:px-8
        max-w-screen-xl
        md:flex-row
        md:items-center
        md:justify-between
        md:px-6
        mx-auto
        px-4
      `}
      >
        <div
          className={`
          p-4
          flex
          flex-row
          items-center
          justify-between
        `}
        >
          <Logo />
          <ToggleColorMode className="md:hidden ml-auto py-2" />
          <ControlledHamburger isOpen={isHamburgerOpen} toggleIsOpen={toggleIsHamburgerOpen} />
        </div>
        <ControlledNav isHamburgerOpen={isHamburgerOpen} />
      </div>
    </header>
  );
}
