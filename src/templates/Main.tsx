import React, { ReactNode } from 'react';

import { Footer } from '~/navigation/Footer';
import { Navbar } from '~/navigation/Navbar';

type MainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: MainProps) => (
  <div
    className={`
    antialiased
    dark:bg-darkmode-accent
    duration-150
    flex
    flex-col
    min-h-screen
    text-gray-700
    transition-colors
    w-full
  `}
  >
    {props.meta}
    <Navbar />
    <main className="text-xl py-5 flex-grow">{props.children}</main>
    <Footer />
  </div>
);

export { Main };
