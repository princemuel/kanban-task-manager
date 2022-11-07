import { MainContent } from 'components';
import { createDehydratedState } from 'helpers';
import { useGetBoardQuery } from 'lib/generated/graphql';
import Head from 'next/head';
import type { InferNextPropsType, NextPageWithLayout } from 'types';
import { queryClient } from '../_app';

type Props = InferNextPropsType<typeof getServerSideProps>;

const Board: NextPageWithLayout<Props> = ({ dehydratedState }) => {
  const { data } = useGetBoardQuery({ id: '160db8' });

  return (
    <>
      <Head>
        <title>Kanban Task Manager</title>
      </Head>
      <MainContent className='py-10 px-8 bg-primary-300 text-neutral-100 text-900 font-bold'>
        <h1>MAIN CONTENT</h1>
        <p className='text-600'>{JSON.stringify(dehydratedState?.queries)}</p>
        <br />
        <br />
        <br />
        <p className='text-600'>{JSON.stringify(data)}</p>
      </MainContent>
    </>
  );
};

export default Board;

export async function getServerSideProps() {
  // const queryClient = new QueryClient(queryOptions);

  await queryClient.prefetchQuery(
    useGetBoardQuery.getKey({ id: '160db8' }),
    useGetBoardQuery.fetcher({ id: '160db8' })
  );
  // await queryClient.prefetchQuery(['boards'], () => getBoards());

  return {
    props: {
      dehydratedState: createDehydratedState(queryClient),
      // dehydratedState: dehydrate(queryClient),
    },
  };
}
