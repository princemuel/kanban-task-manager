import { LogoDark } from 'common';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { GlobalWrap } from 'styles';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kanban Task Manager</title>
      </Head>

      <header>
        <GlobalWrap className='flex items-center justify-between'>
          <div className='logo'>
            <Image src={LogoDark} alt='logo' />
          </div>

          <h1 className='text-primary-900 text-700 font-bold'>Design System</h1>
        </GlobalWrap>
      </header>

      <main>
        <GlobalWrap className='flex items-center justify-between'>
          <h2 className='text-primary-900 text-700 font-bold'>Design System</h2>
        </GlobalWrap>
      </main>
    </>
  );
};

export default Home;
