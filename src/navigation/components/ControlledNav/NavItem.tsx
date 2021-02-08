import React from 'react';

import Link from 'next/link';

type NavItemProps = {
  label: string;
  href?: string;
};

export default function NavItem({
  label,
  href,
}: NavItemProps) {
  return (
    <div
      className={`
          navitem 
          bg-transparent 
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
          focus-within:text-gray-900 
          font-semibold 
          hover:bg-gray-200 
          hover:text-gray-900 
          md:ml-4 
          md:mt-0 
          mt-2 
          px-4 
          py-2 
          rounded-lg 
          text-sm 
      `}
    >
      <Link href={href || `/${label.toLowerCase()}`}>
        {label}
      </Link>
      <style jsx global>
        {`
        .navitem a,
        .navitem a:focus,
        .navitem a:active {
          outline: none;
          border: none;
          background: none;
          box-shadow: none;
        }
        .dark .navitem a {
          color: white;
        }
      `}

      </style>
    </div>
  );
}
