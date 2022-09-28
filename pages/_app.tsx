import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/globals.css';

function MyApp({ Component, pageProps: { ...props } }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...props} />
    </>
  );
}

export default MyApp;
