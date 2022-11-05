import { GraphQLClient } from 'graphql-request';
import { getSdk } from 'lib/generated/graphql';
import { QueryClient } from 'react-query';
import { GRAPHQL_ENDPOINT } from './constants';

const gqlClient = new GraphQLClient(GRAPHQL_ENDPOINT);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const { getBoards } = getSdk(gqlClient);
