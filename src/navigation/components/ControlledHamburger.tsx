import React from 'react';

interface ControlledHamburgerProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export default function ControlledHamburger({ isOpen, toggleIsOpen }: ControlledHamburgerProps) {
  return (
    <button
      type="button"
      className={`
        cursor-pointer
        dark:bg-transparent 
        dark:focus-within:bg-gray-600 
        dark:focus-within:text-white 
        dark:hover:bg-gray-600 
        dark:hover:text-white 
        dark:text-gray-200
        focus-within:bg-gray-200 
        focus-within:outline-none 
        focus-within:shadow-outline
        focus:outline-none
        focus:shadow-outline
        md:hidden
        py-2
        px-4
        -mx-4
        ml-1
        rounded-lg
      `}
      onClick={toggleIsOpen}
    >
      <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
        {isOpen ? (
          <path
            clipRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            fillRule="evenodd"
          />
        ) : (
          <path
            clipRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            fillRule="evenodd"
          />
        )}
      </svg>
    </button>
  );
}
