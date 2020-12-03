import React, { PropsWithChildren } from 'react';

import { getInitialColorMode } from './InitialColorMode';
import { ColorMode } from './types';

type ColorModeContextValue = {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
};

export const ColorModeContext = React.createContext<ColorModeContextValue>({
  colorMode: getInitialColorMode(),
  setColorMode: () => {},
});

export default function ColorModeProvider({ children }: PropsWithChildren<{}>) {
  const [colorMode, rawSetColorMode] = React.useState<ColorMode>(() => getInitialColorMode());

  function setColorMode(mode: ColorMode) {
    rawSetColorMode(mode);
    localStorage.setItem('color-mode', mode);
  }

  React.useEffect(() => {
    const html: HTMLElement = window.document.getElementsByTagName('html')[0]!;
    Object.values(ColorMode).forEach((mode) => html.classList.remove(mode));
    html.classList.add(colorMode);
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
