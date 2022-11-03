import { ApolloServer } from 'apollo-server-micro';
import type { NextApiRequest, NextApiResponse } from 'next';
import 'reflect-metadata';
import {
  buildSchema,
  Field,
  ID,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';

@ObjectType()
export class Board {
  @Field(() => ID)
  name!: string;
}

@Resolver(Board)
export class BoardsResolver {
  @Query(() => [Board])
  boards(): Board[] {
    return [{ name: 'Platform Launch' }, { name: 'Marketing Plan' }];
  }
}

const schema = await buildSchema({
  resolvers: [BoardsResolver],
});

const server = new ApolloServer({
  schema,
});

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
