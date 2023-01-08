import { GraphQLClient } from "graphql-request";

const isProd = process.env.NODE_ENV === "production";

const GRAPHQL_ENDPOINT = isProd
  ? `${process.env.VERCEL_URL}/api/graphql`
  : "http://localhost:3000/api/graphql";

export const gqlClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  credentials: "include",
  mode: "cors",
});

// export const queryClient = new QueryClient(queryOptions);
