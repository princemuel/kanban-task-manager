import { NextApiHandler } from "next";
// import { ApolloServer } from "apollo-server-micro";
// import { resolvers } from "lib";
// import cors from "micro-cors";
// import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
// import "reflect-metadata";
// import { connectDB } from "server/config";
// import { deserializeUser } from "server/middleware/deserialize-user";
// import { buildSchema } from "type-graphql";

// const schema = await buildSchema({
//   resolvers,
//   dateScalarMode: "isoDate",
//   emitSchemaFile: true,
// });

// let apolloServerHandler: NextApiHandler;

// async function getApolloServerHandler() {
//   const apolloServer = new ApolloServer({
//     schema,
//     csrfPrevention: true,
//     context: ({ req, res }: TServerContext) => ({
//       req,
//       res,
//       deserializeUser,
//     }),
//   });

//   if (!apolloServerHandler) {
//     await apolloServer.start();

//     apolloServerHandler = apolloServer.createHandler({
//       path: "/api/v1/graphql",
//     });
//   }

//   return apolloServerHandler;
// }

// const handler: NextApiHandler = async (req, res) => {
//   if (req.method === "OPTIONS") {
//     res.end();
//     return;
//   }

//   const apolloServerHandler = await getApolloServerHandler();

//   await connectDB();
//   return apolloServerHandler(req, res);
// };

// export default cors({
//   origin: "https://studio.apollographql.com",
//   allowCredentials: true,
//   allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//   allowHeaders: [
//     "Origin",
//     "X-Requested-With",
//     "Content-Type",
//     "Accept",
//     "Access-Control-Allow-Origin",
//     "Access-Control-Allow-Headers",
//     "Access-Control-Allow-Credentials",
//     "Access-Control-Allow-Methods",
//   ],
//   //@ts-expect-error
// })(handler);

const handler: NextApiHandler = async (req, res) => {
  res.status(200).json({ message: "hello api connected" });
};

export default handler;
