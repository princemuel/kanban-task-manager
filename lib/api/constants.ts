export const GRAPHQL_ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? `${process.env.VERCEL_URL}/api/v1/graphql`
    : 'http://localhost:3000/api/v1/graphql';
