import * as Tippy from 'react-tippy';

declare module 'react-tippy' {
  interface Props extends Tippy.TooltipProps {
    tag: string;
    touchHold: boolean;
    onShow: () => void;
    onHide: () => void;
  }

  // eslint-disable-next-line react/prefer-stateless-function
  declare class Tooltip extends React.Component<Props, any> {}

  export = {
    Tooltip,
  };
}
