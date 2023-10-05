import styles from '@/assets/styles/layout.module.scss';
import { BaseLayout } from '@/components';
import { cn } from '@/lib';
import { Providers } from '@/providers';
import { Analytics } from '@vercel/analytics/react';
import { cx } from 'cva';
import { Metadata } from 'next';
import * as React from 'react';
import { FontSans } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: 'Kanban TM | %s',
    default: 'Kanban Task Manager',
  },
  description:
    'The Kanban board is an easy-to-use agile project management tool using the Kanban methodology that is designed to bring clarity to your work process, and enhance productivity by minimizing work in progress and help you visualize and manage workflows.',

  // metadataBase: new URL(process.env.VERCEL_URL || ''),
  generator: 'Next.js',
  applicationName: 'Kanban Task Manager',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Kanban Board', 'Task Manager'],
  colorScheme: 'dark light',
  creator: 'Prince Muel',
  publisher: 'Prince Muel',
  authors: { name: 'Prince Muel', url: 'https://github.com/princemuel' },
  openGraph: {
    type: 'website',
    title: `Kanban Task Manager`,
    description:
      'The Kanban board is an easy-to-use agile project management tool using the Kanban methodology that is designed to bring clarity to your work process, and enhance productivity by minimizing work in progress and help you visualize and manage workflows.',
    url: 'https://kanbantm.vercel.app',
    siteName: 'Princemuel',
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png',
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png',
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    locale: 'en-US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@iamprincemuel',
    creator: '@iamprincemuel',
    // add image
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'standard',
      'max-snippet': -1,
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000112' },
    { media: '(prefers-color-scheme: light)', color: '#635fc7' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cx(
        FontSans.variable,
        'scrollbar-thin scrollbar-track-rounded-md scrollbar-thumb-rounded-md'
      )}
      suppressHydrationWarning
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
