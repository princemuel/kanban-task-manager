import { GraphQLClient } from 'graphql-request';
import { GRAPHQL_ENDPOINT } from './constants';

export const gqlClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  credentials: 'include',
  mode: 'cors',
});

// export const queryClient = new QueryClient(queryOptions);
