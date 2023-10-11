import { Analytics } from '@vercel/analytics/react';
import * as React from 'react';
import './globals.css';
import { fonts } from './fonts';
import { css } from '@/styled-system/css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={fonts}>
      <body className={css({ fontFamily: 'sans' })}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
