export function getInitialColorMode() {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const persistedColorPreference = window.localStorage.getItem('color-mode');
  const isValidColorMode = !!(
    persistedColorPreference && ['light', 'dark'].includes(persistedColorPreference)
  );

  if (isValidColorMode) {
    return persistedColorPreference;
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');

  if (typeof mql.matches === 'boolean') {
    return mql.matches ? 'dark' : 'light';
  }

  return 'light';
}

export function setInitialColorMode() {
  if (typeof window === 'undefined') {
    return;
  }

  let colorPreference;
  // this is required because we hot-swap the string for inline injection.
  const getInitColorMode = getInitialColorMode;
  const persistedColorPreference = window.localStorage.getItem('color-mode');
  const isValidColorMode = !!(
    persistedColorPreference && ['light', 'dark'].includes(persistedColorPreference)
  );

  if (isValidColorMode) {
    colorPreference = persistedColorPreference;
  } else {
    colorPreference = getInitColorMode();
  }

  if (colorPreference) {
    window?.localStorage?.setItem('color-mode', colorPreference);
  }
}
