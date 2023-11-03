import { BaseLayout } from '@/src/components';
import RootProvider from '@/src/providers';
import { Analytics } from '@vercel/analytics/react';
import * as React from 'react';
import { fontVars } from './fonts';
import './globals.css';

//className='relative flex min-h-screen flex-col text-brand-900 antialiased dark:bg-////brand-800 dark:text-white md:flex-row'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' dir='ltr' className={fontVars} suppressHydrationWarning>
      <body className='font-sans text-brand-900 dark:text-white'>
        <GlobalProviders>
          <Analytics />
          <BaseLayout>{children}</BaseLayout>
        </GlobalProviders>
      </body>
    </html>
  );
}
