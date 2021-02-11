import 'react-tippy/dist/tippy.css';
import React from 'react';

import { Tooltip } from 'react-tippy';

import useIsFirstRender from '~/hooks/useIsFirstRender';

type FootnoteProps = React.PropsWithChildren<{
  title: string;
}>;

export default function Footnote(props: FootnoteProps) {
  const isFirstRender = useIsFirstRender();

  const [isShown, setIsShown] = React.useState(false);

  const content = <span className="text-pink-400">*</span>;

  const tooltipWithContent = (
    <Tooltip
      size="big"
      tabIndex={0}
      tag="span"
      theme="dark"
      touchHold
      title={props.title}
      onShow={() => {
        setIsShown(true);
      }}
      onHide={() => {
        setIsShown(false);
      }}
    >
      {content}
    </Tooltip>
  );

  return (
    <>
      <span
        className={isShown ? 'link' : ''}
        style={
          !isShown
            ? undefined
            : {
              boxShadow: 'inset 0 -0.25em 0 pink',
            }
        }
      >
        {props.children}
      </span>
      {isFirstRender ? content : tooltipWithContent}
    </>
  );
}
