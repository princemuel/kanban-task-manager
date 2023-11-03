'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import ModalManager from './modal-manager';

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      storageKey='THEME_MODE'
      defaultTheme='system'
      enableSystem={true}
      attribute='data-theme'
    >
      <SessionProvider>
        <ModalManager.Provider>{children}</ModalManager.Provider>
      </SessionProvider>
    </NextThemesProvider>
  );
}
