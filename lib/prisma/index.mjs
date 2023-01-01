import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Connect the client
  await prisma.$connect();
  // ... you will write your Prisma Client queries here

  await prisma.user.create({
    data: {
      name: "Xandra",
      email: "allie@prisma.com",
      posts: {
        create: {
          title: "My first post",
          body: "Lots of really interesting stuff",
          slug: "my-first-post",
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      name: "Alexandra",
      email: "allie@prisma.com",
      boards: {
        create: {
          name: "My Fourth Board",
          slug: "My Fourth Board",
        },
      },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      boards: true,
    },
  });
  console.dir(allUsers, { depth: null });

  // await prisma.board.update({
  //   where: {
  //     slug: "my-first-post",
  //   },
  //   data: {
  //     comments: {
  //       createMany: {
  //         data: [
  //           { comment: "Great post!" },
  //           { comment: "Can't wait to read more!" },
  //         ],
  //       },
  //     },
  //   },
  // });
  // const posts = await prisma.post.findMany({
  //   include: {
  //     comments: true,
  //   },
  // });

  // console.dir(posts, { depth: Infinity });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
