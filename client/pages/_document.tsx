import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='robots' content='all' />
        <meta
          name='description'
          content='The Kanban board is an easy-to-use agile project management tool using the Kanban methodology that helps you to visualize and manage workflows.'
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