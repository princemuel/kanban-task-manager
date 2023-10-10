import styles from '@/assets/styles/layout.module.scss';
import { BaseLayout } from '@/components';
import { defineMeta } from '@/config';
import { cn } from '@/helpers';
import { Providers } from '@/providers';
import { Analytics } from '@vercel/analytics/react';
import * as React from 'react';
import { fonts } from './fonts';
import './globals.css';

export const metadata = defineMeta();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn(
        'scrollbar-thin scrollbar-track-rounded-md scrollbar-thumb-rounded-md',
        fonts
      )}
    >
      <body className={cn('relative antialiased', styles.body)}>
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
