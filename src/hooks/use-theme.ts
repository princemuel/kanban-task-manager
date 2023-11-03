'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';

export const useThemeMode = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => setHasMounted(true), []);

  const isDark = resolvedTheme === 'dark';

  const updateTheme = React.useCallback(() => {
    React.startTransition(() => {
      setTheme(isDark ? 'light' : 'dark');
    });
  }, [isDark, setTheme]);

  const { hasMounted: isMounted, isDark: isDarkMode } = React.useMemo(
    () => ({ hasMounted, isDark }),
    [hasMounted, isDark]
  );

  return {
    isMounted,
    isDarkMode,
    updateTheme,
  };
};
