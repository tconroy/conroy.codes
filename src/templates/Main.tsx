import React, { ReactNode } from 'react';

import { Footer } from '~/navigation/Footer';
import { Navbar } from '~/navigation/Navbar';

type MainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: MainProps) => (
  <div className="antialiased w-full text-gray-700 flex flex-col min-h-screen dark:bg-gray-800">
    {props.meta}
    <header className="border-b border-gray-300">
      <Navbar />
    </header>

    <main className="text-xl py-5 flex-grow">{props.children}</main>

    <Footer />
  </div>
);

export { Main };
