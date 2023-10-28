import RootProvider from '@/providers';
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
      <body className='font-sans text-brand-900 dark:text-white'>
        <RootProvider>
          {children}

          <Analytics />
        </RootProvider>
      </body>
    </html>
  );
}
