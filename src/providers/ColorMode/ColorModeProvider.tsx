import React, { PropsWithChildren } from 'react';

import { useTheme } from 'next-themes';

import { ColorMode } from './types';

type ColorModeContextValue = {
  colorMode?: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
};

export const ColorModeContext = React.createContext<ColorModeContextValue>({
  colorMode: undefined,
  setColorMode: () => {},
});

export default function ColorModeProvider({ children }: PropsWithChildren<{}>) {
  const {
    theme,
    setTheme,
  } = useTheme();

  const [
    isMounted,
    setIsMounted,
  ] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const setColorMode = (colorMode: ColorMode) => {
    if (isMounted) {
      setTheme(colorMode);
    }
  };

  return (
    <ColorModeContext.Provider value={{
      colorMode: theme as ColorMode,
      setColorMode,
    }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}
