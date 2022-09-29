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

      <header className='p-8'>
        <GlobalWrap className='flex items-center justify-between'>
          <div className='logo'>
            <Image src={LogoDark} alt='logo' />
          </div>

          <h1 className='text-primary-900 text-700 font-bold'>Design System</h1>
        </GlobalWrap>
      </header>

      <main>
        <GlobalWrap as='section' className='m-20 | flow'>
          <header className=''>
            <h2 className='text-600 font-bold'>
              <span className='text-primary-500'>01</span>
              <span className='ml-6 text-primary-900'>Colors</span>
            </h2>
          </header>

          <ul
            role={'list'}
            className='grid grid-cols-4 gap-10 | flow-space--none'
          >
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-primary-500 text-500 font-bold uppercase'>
              #635fc7
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-primary-300 text-500 font-bold uppercase'>
              #a8a4ff
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-primary-900 text-500 font-bold uppercase'>
              #000112
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-primary-800 text-500 font-bold uppercase'>
              #20212c
            </li>

            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-primary-700 text-500 font-bold uppercase'>
              #2b2c37
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-primary-600 text-500 font-bold uppercase'>
              #3e3f4e
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-primary-400 text-500 font-bold uppercase'>
              #828fa3
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-primary-700 bg-primary-200 text-500 font-bold uppercase'>
              #e4ebfa
            </li>

            <li className='flex items-center justify-center p-14 rounded-xl text-primary-700 bg-primary-100 text-500 font-bold uppercase'>
              #f4f7fd
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-primary-700 bg-neutral text-500 font-bold uppercase'>
              #ffffff
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-accent-200 text-500 font-bold uppercase'>
              #ea5555
            </li>
            <li className='flex items-center justify-center p-14 rounded-xl text-neutral bg-accent-100 text-500 font-bold uppercase'>
              #ff9898
            </li>
          </ul>
        </GlobalWrap>
      </main>
    </>
  );
};

export default Home;
