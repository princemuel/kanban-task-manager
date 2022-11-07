import * as dotenv from 'dotenv-safe';
import { Head, Html, Main, NextScript } from 'next/document';

dotenv.config({
  allowEmptyValues: true,
});

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='robots' content='all' />
        {/* <meta name='color-scheme' content='dark light' /> */}
        <meta
          name='theme-color'
          media='(prefers-color-scheme: light)'
          content='white'
        />
        <meta
          name='theme-color'
          media='(prefers-color-scheme: dark)'
          content='black'
        />
        <meta
          name='description'
          content='The Kanban board is an easy-to-use agile project management tool using the Kanban methodology that is designed to bring clarity to your work process, and enhance productivity by minimizing work in progress and help you visualize and manage workflows.'
        />
        <meta name='author' content='Prince Muel' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
