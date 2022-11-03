import { Layout } from 'components';
import Head from 'next/head';
import { GlobalStyle } from 'styles';
import type { AppPropsWithLayout } from 'types';
import '../styles/main.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      {getLayout(<Component {...pageProps} />)}

      <GlobalStyle />
    </>
  );
}

export default MyApp;
