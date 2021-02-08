import React from 'react';

export default function useIsFirstRender(): boolean {
  const [isFirstRender, setIsFirstRender] = React.useState(true);

  React.useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    }
  }, [isFirstRender]);

  return React.useMemo(() => isFirstRender, [isFirstRender]);
}
