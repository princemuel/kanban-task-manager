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
        <h1 className='text-100 text-primary-500 font-medium underline'>
          Hello world!
        </h1>
        {/* Navigation */}
        {/* Content */}
      </main>
    </>
  );
};

export default Home;
