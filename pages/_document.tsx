import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='robots' content='all' />
        <meta name='color-scheme' content='dark light' />
        <meta
          name='theme-color'
          media='(prefers-color-scheme: light)'
          content='#635fc7'
        />
        <meta
          name='theme-color'
          media='(prefers-color-scheme: dark)'
          content='#000112'
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
        <a href='#main-content' className='skip-to-content text-600'>
          Skip to Content
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
