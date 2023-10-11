'use client';

import { ThemeProvider } from 'next-themes';

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <ThemeProvider
      storageKey='ktm-theme'
      defaultTheme='system'
      enableSystem={true}
      attribute='data-theme'
      // disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
