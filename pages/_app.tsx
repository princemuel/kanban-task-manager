import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'assets/styles/main.css';
import { Layout } from 'components';
import { queryOptions } from 'helpers';
import Head from 'next/head';

import type { AppPropsWithLayout } from 'types';

type PageProps = {
  dehydratedState: DehydratedState;
};

export const queryClient = new QueryClient(queryOptions);

function App({ Component, pageProps }: AppPropsWithLayout<PageProps>) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  // const [queryClient] = useState(() => new QueryClient(queryOptions));

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydratedState ?? {}}>
          {getLayout(<Component {...pageProps} />)}
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
