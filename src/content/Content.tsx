import React, { ReactNode } from 'react';

type ContentProps = {
  children: ReactNode;
};

const Content = (props: ContentProps) => (
  <div className="content">
    {props.children}
  </div>
);

export { Content };
