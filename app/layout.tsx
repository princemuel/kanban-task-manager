import { css } from '@/styled-system/css';
import { Analytics } from '@vercel/analytics/react';
import * as React from 'react';
import { fontVars } from './fonts';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning className={fontVars}>
      <body className={css({ fontFamily: 'sans' })}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
