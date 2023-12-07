"use client";

import NiceModal from "@ebay/nice-modal-react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster as ToastManager } from "react-hot-toast";
import "./modal-manager";

type Props = { children: React.ReactNode };

const RootProvider = ({ children }: Props) => (
  <NextThemesProvider
    storageKey="ktm-theme"
    defaultTheme="system"
    enableSystem={true}
    attribute="class"
    disableTransitionOnChange
  >
    <SessionProvider>
      <NiceModal.Provider>{children}</NiceModal.Provider>
      <ToastManager />
    </SessionProvider>
  </NextThemesProvider>
);
export { RootProvider };
