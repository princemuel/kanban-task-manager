'use client';
import { ThemeProvider } from 'next-themes';

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

// export default RootProviders;
