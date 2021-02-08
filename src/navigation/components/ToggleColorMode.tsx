import React, { useCallback } from 'react';

import { usePlausible } from 'next-plausible';
import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import useIsFirstRender from '~/hooks/useIsFirstRender';
import { ColorMode } from '~/providers/ColorMode/types';

type ToggleColorModeProps = {
  className?: string;
};

export default function ToggleColorMode({ className = '' }: ToggleColorModeProps) {
  const { theme, setTheme } = useTheme();

  const plausible = usePlausible();

  const toggleDarkMode = useCallback(() => {
    const newMode: ColorMode = theme === ColorMode.DARK ? ColorMode.LIGHT : ColorMode.DARK;

    plausible('toggle-color-mode', {
      props: {
        mode: newMode,
      },
    });

    setTheme(newMode);
  }, [plausible, theme]);

  const isFirstRender = useIsFirstRender();

  return (
    <button
      type="button"
      className={`
        ${className}
        dark:bg-transparent 
        dark:focus-within:bg-gray-600 
        dark:focus-within:text-white 
        dark:hover:bg-gray-600 
        dark:hover:text-white 
        flex
        focus-within:bg-gray-200 
        focus-within:outline-none 
        focus-within:shadow-outline
        md:ml-4 
        md:mt-0 
        px-4
        rounded-lg 
      `}
      onClick={toggleDarkMode}
      style={
        !isFirstRender
          ? undefined
          : {
            width: 26,
            height: 26,
          }
      }
    >
      {!isFirstRender && (
        <DarkModeSwitch
          checked={theme === ColorMode.DARK}
          onChange={toggleDarkMode}
          size={26}
          style={{
            alignSelf: 'center',
          }}
        />
      )}
    </button>
  );
}
