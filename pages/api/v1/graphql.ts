import { ApolloServer } from 'apollo-server-micro';
import {
  BoardsResolver,
  ColumnsResolver,
  SubtasksResolver,
  TasksResolver,
} from 'lib';
import cors from 'micro-cors';
import type { NextApiRequest, NextApiResponse } from 'next';
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

// Middleware to run the cors configuration
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const schema = await buildSchema({
  resolvers: [BoardsResolver, ColumnsResolver, TasksResolver, SubtasksResolver],
});

const server = new ApolloServer({
  schema,
});
0;

const startServer = server.start();

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  return server?.createHandler({ path: '/api/v1/graphql' })(req, res);
}

// @ts-ignore
export default allowCors(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};