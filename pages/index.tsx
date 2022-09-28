import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <title>Kanban Task Manager</title>
      </Head>

      <main>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </main>
    </>
  );
};

export default Home;
