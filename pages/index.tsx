import { MainContent } from 'components/organisms';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kanban Task Manager</title>
      </Head>

      <MainContent />
    </>
  );
};

export default Home;
