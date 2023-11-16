import { BreakpointIndicator } from '@/components';
import { defineMeta } from '@/config';
import GlobalProviders from '@/providers';
import { Analytics } from '@vercel/analytics/react';
import * as React from 'react';
import { Fragment } from 'react';
import { fontVars } from './fonts';
import './globals.css';

export const viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000112' },
    { media: '(prefers-color-scheme: light)', color: '#635fc7' },
  ],
};

export const metadata = defineMeta();

//className='relative flex min-h-screen flex-col text-brand-900 antialiased dark:bg-////brand-800 dark:text-white md:flex-row'
export default function RootLayout({
  auth,
  children,
}: {
  auth: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang='en' dir='ltr' className={fontVars} suppressHydrationWarning>
      <body className='text-brand-900 antialiased dark:text-white'>
        <GlobalProviders>
          <Fragment>{children}</Fragment>
          <Fragment>{auth}</Fragment>
          <Analytics />
          <BreakpointIndicator />
        </GlobalProviders>
      </body>
    </html>
  );
}
