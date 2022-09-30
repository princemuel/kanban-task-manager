import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from 'styles';
import 'styles/main.css';

function MyApp({ Component, pageProps: { ...props } }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <GlobalStyle />
      <Component {...props} />
    </>
  );
}

export default MyApp;
