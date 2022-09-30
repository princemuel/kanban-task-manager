import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default function MyDocument() {
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

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (MyApp) => (props) =>
          sheet.collectStyles(<MyApp {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    };
  } finally {
    sheet.seal();
  }
};
