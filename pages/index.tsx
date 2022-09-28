import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kanban Task Manager</title>
      </Head>

      <main>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </main>
    </>
  );
};

export default Home;
