import 'assets/styles/main.css';
import { Layout } from 'components';
import { queryClient } from 'lib';
import Head from 'next/head';
import type { DehydratedState } from 'react-query';
import { Hydrate, QueryClientProvider } from 'react-query';
import type { AppPropsWithLayout } from 'types';

type PageProps = {
  dehydratedState: DehydratedState;
};

function App({ Component, pageProps }: AppPropsWithLayout<PageProps>) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      {getLayout(
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps?.dehydratedState ?? {}}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      )}
    </>
  );
}

export default App;
