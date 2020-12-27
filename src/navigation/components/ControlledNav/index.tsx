import React from 'react';

import ToggleColorMode from '../ToggleColorMode';
import NavItem from './NavItem';

// import ControlledDropdown from '../ControlledDropdown';

export default function ControlledNav({ isHamburgerOpen }) {
  // const [
  //   isDropdownOpen,
  //   setIsDropdownOpen,
  // ] = useState(false);

  // const toggleIsDropdownOpen = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  const openClass: string = isHamburgerOpen ? 'flex' : 'hidden';

  return (
    <nav className={`
      ${openClass} 
      flex-col 
      flex-grow 
      md:flex 
      md:flex-row
      md:justify-end 
      md:pb-0 
      pb-4 
      md:dark:bg-transparent
    `}
    >
      <NavItem label="Posts" />
      <NavItem label="About" />
      <NavItem label="Contact" />
      <ToggleColorMode className="hidden md:inline-flex" />

      {/* <div className="relative">
        <ControlledDropdown
          isOpen={isDropdownOpen}
          toggleIsOpen={toggleIsDropdownOpen}
        />
      </div> */}
    </nav>
  );
}
