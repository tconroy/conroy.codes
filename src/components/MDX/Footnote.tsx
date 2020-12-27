import React, { PropsWithChildren, useEffect } from 'react';

import { Tooltip } from 'react-tippy';

type FootnoteProps = PropsWithChildren<{
  title: string;
}>;

export default function Footnote(props: FootnoteProps) {
  const [
    isFirstRender,
    setIsFirstRender,
  ] = React.useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    }
  }, [isFirstRender]);

  const content = (
    <span className="text-pink-400">*</span>
  );

  return (
    <>
      {props.children}
      {
        isFirstRender
          ? content
          : (
            <Tooltip
              size="big"
              tabIndex={0}
              tag="span"
              theme="dark"
              touchHold
              title={props.title}
            >
              {content}
            </Tooltip>
          )
      }
    </>
  );
}
