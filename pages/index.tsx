import { MainContent } from 'components';
import { createDehydratedState } from 'helpers';
import { useGetBoardsQuery } from 'lib/generated/graphql';
import Head from 'next/head';
import type { InferNextPropsType, NextPageWithLayout } from 'types';
import { queryClient } from './_app';

type Props = InferNextPropsType<typeof getServerSideProps>;

const Home: NextPageWithLayout<Props> = ({ dehydratedState }) => {
  // const Home: NextPageWithLayout = () => {
  const { data } = useGetBoardsQuery();
  return (
    <>
      <Head>
        <title>Kanban Task Manager</title>
      </Head>
      <MainContent className='py-10 px-8 bg-primary-300 text-neutral-100 text-900 font-bold'>
        <h1>MAIN CONTENT</h1>
        <p className='text-500'>{JSON.stringify(dehydratedState?.queries)}</p>
        <br />
        <br />
        <br />
        <p className='text-500'>{JSON.stringify(data)}</p>
      </MainContent>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  // const queryClient = new QueryClient(queryOptions);

  await queryClient.prefetchQuery(
    useGetBoardsQuery.getKey(),
    useGetBoardsQuery.fetcher()
  );
  // await queryClient.prefetchQuery(['boards'], () => getBoards());

  return {
    props: {
      dehydratedState: createDehydratedState(queryClient),
      // dehydratedState: dehydrate(queryClient),
    },
  };
}
