import { MainContent } from 'components/organisms';
import { getBoards, queryClient } from 'lib';
import Head from 'next/head';
import { dehydrate, useQuery } from 'react-query';
import type {
  GetServerSideProps,
  InferNextPropsType,
  NextPageWithLayout,
} from 'types';

type Props = InferNextPropsType<typeof getServerSideProps>;

const Home: NextPageWithLayout<Props> = () => {
  const { data } = useQuery(['boards'], () => getBoards());
  return (
    <>
      <Head>
        <title>Kanban Task Manager</title>
      </Head>

      <MainContent />
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    await queryClient.prefetchQuery('boards', () => getBoards());

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
