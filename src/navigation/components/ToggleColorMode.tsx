import React from 'react';

import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { ColorModeContext } from '~/providers/ColorMode/ColorModeProvider';
import { ColorMode } from '~/providers/ColorMode/types';

export default function ToggleColorMode() {
  const { setColorMode, colorMode } = React.useContext(ColorModeContext);

  function toggleDarkMode() {
    const newMode: ColorMode = colorMode === ColorMode.DARK ? ColorMode.LIGHT : ColorMode.DARK;

    setColorMode(newMode);
  }

  return (
    <DarkModeSwitch checked={colorMode === ColorMode.DARK} onChange={toggleDarkMode} size={26} />
  );
}
