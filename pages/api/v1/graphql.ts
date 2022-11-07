import { ApolloServer } from 'apollo-server-micro';
import { IncomingMessage, ServerResponse } from 'http';
import { BoardsResolver } from 'lib';
import cors from 'micro-cors';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

const allowCors = cors({
  origin: 'https://studio.apollographql.com',
  allowCredentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Credentials',
    'Access-Control-Allow-Methods',
  ],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const schema = await buildSchema({
  resolvers: [BoardsResolver],
  // resolvers: [BoardsResolver, ColumnsResolver, TasksResolver, SubtasksResolver],
});

const server = new ApolloServer({
  schema,
});

const startServer = server.start();

async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  return server?.createHandler({ path: '/api/v1/graphql' })(req, res);
}

export default allowCors(handler);
