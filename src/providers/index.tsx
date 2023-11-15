'use client';

import { Dialog } from '@/components/ui/radix-dialog';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ModalProvider } from './modal-manager';
import ToastManager from './toast-manager';

function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      storageKey='ktm-theme'
      defaultTheme='system'
      enableSystem={true}
      attribute='class'
      disableTransitionOnChange
    >
      <SessionProvider>
        <ModalProvider>
          <Dialog>{children}</Dialog>
        </ModalProvider>
        <ToastManager />
      </SessionProvider>
    </NextThemesProvider>
  );
}

export default RootProvider;
