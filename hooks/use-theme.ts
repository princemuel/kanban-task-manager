'use client';

import { useTheme } from 'next-themes';
import {
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const useThemeMode = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  const isDark = resolvedTheme === 'dark';

  const updateTheme = useCallback(() => {
    startTransition(() => {
      setTheme(isDark ? 'light' : 'dark');
    });
  }, [isDark, setTheme]);

  const { hasMounted: isMounted, isDark: isDarkMode } = useMemo(
    () => ({ hasMounted, isDark }),
    [hasMounted, isDark]
  );

  return {
    isMounted,
    isDarkMode,
    updateTheme,
  };
};
