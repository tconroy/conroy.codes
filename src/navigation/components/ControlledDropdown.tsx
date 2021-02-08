import React from 'react';

interface Props {
  href: string;
  label: string;
}

function DropdownItem({ href, label }: Props) {
  return (
    <a
      className={`
      bg-transparent 
      block 
      dark:bg-transparent 
      dark:focus:bg-gray-600 
      dark:focus:text-white 
      dark:hover:bg-gray-600 
      dark:hover:text-white 
      dark:text-gray-200 
      focus:bg-gray-200 
      focus:outline-none 
      focus:shadow-outline
      focus:text-gray-900 
      font-semibold 
      hover:bg-gray-200 
      hover:text-gray-900 
      md:mt-0 
      mt-2 
      px-4 
      py-2 
      rounded-lg 
      text-sm 
    `}
      href={href}
    >
      {label}
    </a>
  );
}

interface ControlledDropdownProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export default function ControlledDropdown({ isOpen, toggleIsOpen }: ControlledDropdownProps) {
  return (
    <>
      <button
        type="button"
        onClick={toggleIsOpen}
        className={`
          bg-transparent
          mode:bg-transparent
          mode:focus:bg-gray-600
          mode:focus:text-white
          mode:hover:bg-gray-600
          mode:hover:text-white
          flex
          flex-row
          focus:bg-gray-200
          focus:outline-none
          focus:shadow-outline
          focus:text-gray-900
          font-semibold
          hover:bg-gray-200
          hover:text-gray-900
          items-center
          md:inline
          md:ml-4
          md:mt-0
          md:w-auto
          mt-2
          px-4
          py-2
          rounded-lg
          text-left
          text-sm
          w-full
      `}
      >
        <span>Dropdown</span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className={`
            ${isOpen ? 'rotate-180' : 'rotate-0'}
            duration-200
            h-4
            inline
            md:-mt-1
            ml-1
            mt-1
            transform
            transition-transform
            w-4
          `}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
        <div className="px-2 py-2 bg-white rounded-md shadow dark:bg-darkmode-accent">
          <DropdownItem label="Link 1" href="#" />
          <DropdownItem label="Link 2" href="#" />
          <DropdownItem label="Link 3" href="#" />
        </div>
      </div>
    </>
  );
}
