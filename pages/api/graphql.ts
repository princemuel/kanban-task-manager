import { ApolloServer } from 'apollo-server-micro';
import type { NextApiRequest, NextApiResponse } from 'next';

const server = new ApolloServer({});

export const config = {
  api: { bodyParser: false },
};

const startServer = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}
