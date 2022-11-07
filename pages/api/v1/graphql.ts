import { ApolloServer } from 'apollo-server-micro';
import { IncomingMessage, ServerResponse } from 'http';
import {
  BoardsResolver,
  ColumnsResolver,
  SubtasksResolver,
  TasksResolver,
  UserResolver,
} from 'lib';
import cors from 'micro-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import 'reflect-metadata';
import { connectDB } from 'server/config';
import { deserializeUser } from 'server/middleware/deserialize-user';
import { buildSchema } from 'type-graphql';

const allowCors = cors({
  origin: 'https://studio.apollographql.com',
  allowCredentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
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
  resolvers: [
    BoardsResolver,
    ColumnsResolver,
    TasksResolver,
    SubtasksResolver,
    UserResolver,
  ] as const,
  dateScalarMode: 'isoDate',
});

export const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  context: ({ req, res }: { req: NextApiRequest; res: NextApiResponse }) => ({
    req,
    res,
    deserializeUser,
  }),
});

const startServer = server.start();

async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await connectDB();
  await startServer;
  return server?.createHandler({ path: '/api/v1/graphql' })(req, res);
}

export default allowCors(handler);
