import { useTheme } from 'next-themes';
import * as React from 'react';

export const useThemeMode = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const isDarkMode = resolvedTheme === 'dark';

  const updateTheme = React.useCallback(() => {
    setTheme(isDarkMode ? 'light' : 'dark');
  }, [isDarkMode, setTheme]);

  return { isMounted, isDarkMode, updateTheme };
};
