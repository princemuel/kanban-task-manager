import type { Metadata } from 'next';
import { getBaseUrl } from './baseurl';

type MetaFunction = (data?: Metadata) => Metadata;

export const defineMeta: MetaFunction = (metadata) => {
  const title: Metadata['title'] = 'Kanban Task Manager';

  const description: Metadata['description'] =
    'The Kanban board is an easy-to-use agile project management tool using the Kanban methodology that is designed to bring clarity to your work process, and enhance productivity by minimizing work in progress and help you visualize and manage workflows.';

  return {
    title: {
      default: title,
      template: '%s - Kanban TM',
    },
    description,

    metadataBase: new URL('/', getBaseUrl()),
    generator: 'Next.js',
    applicationName: 'Kanban Task Manager',
    referrer: 'origin-when-cross-origin',
    manifest: '/site.webmanifest',
    keywords: [
      'Next.js',
      'React',
      'JavaScript',
      'Kanban Board',
      'Task Manager',
      title,
    ],
    creator: 'Prince Muel',
    publisher: 'Prince Muel',
    authors: { name: 'Prince Muel', url: 'https://github.com/princemuel' },
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
      other: {
        bing: 'msvalidate.01=0',
        me: ['vansomecsam@gmail.com', 'my-link'],
      },
    },

    icons: {
      icon: [
        { url: '/icon.png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        {
          rel: 'icon',
          url: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
      shortcut: ['/shortcut-icon.png'],
      apple: [
        { url: '/apple-icon.png' },
        { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
        },
        {
          rel: 'android-chrome-192x192',
          url: '/android-chrome-192x192.png',
        },
        {
          rel: 'android-chrome-512x512',
          url: '/android-chrome-512x512.png',
        },
        { rel: 'mask-icon', url: '/safari-pinned-tab.svg' },
      ],
    },

    other: {
      'msapplication-TileColor': '#ffffff',
      'msapplication-TileImage': '/mstile-144x144.png',
    },
    openGraph: {
      type: 'website',
      url: '/',
      locale: 'en_US',
      siteName: title,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@iamprincemuel',
      creator: '@iamprincemuel',
      title,
      description,
    },

    colorScheme: 'dark light',
    themeColor: [
      { media: '(prefers-color-scheme: dark)', color: '#000112' },
      { media: '(prefers-color-scheme: light)', color: '#635fc7' },
    ],

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    ...metadata,
  } satisfies Metadata;
};
