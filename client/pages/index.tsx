import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kanban Task Manager</title>
      </Head>

      <header>{/* Header */}</header>

      <main>
        <h1 className='text-900 text-primary-900 font-bold underline'>
          Hello world!
        </h1>
        {/* Navigation */}
        {/* Content */}
      </main>
    </>
  );
};

export default Home;
