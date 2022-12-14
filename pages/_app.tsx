import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "assets/styles/main.css";
import { ModalProvider } from "context";
import { queryOptions } from "helpers";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import * as React from "react";

import type { AppPropsWithLayout } from "types";

type PageProps = {
  dehydratedState: DehydratedState;
};

function App({ Component, pageProps }: AppPropsWithLayout<PageProps>) {
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return <>{page}</>;
      // return <Layout>{page}</Layout>;
    });

  const [queryClient] = React.useState(() => new QueryClient(queryOptions));

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ThemeProvider enableSystem={true} attribute="class">
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps?.dehydratedState ?? {}}>
            <ModalProvider>
              {getLayout(<Component {...pageProps} />)}
            </ModalProvider>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
