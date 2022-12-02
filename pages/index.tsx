import { Modal } from 'components';
import { ModalType, useModalStore } from 'context';
import { createDehydratedState } from 'helpers';
import { useGetBoardsQuery } from 'lib/generated/graphql';
import Head from 'next/head';
import { useCallback } from 'react';
import type { InferNextPropsType, NextPageWithLayout } from 'types';
import { queryClient } from './_app';

type Props = InferNextPropsType<typeof getServerSideProps>;

const Home: NextPageWithLayout<Props> = (props: Props) => {
  // const Home: NextPageWithLayout = () => {
  const { data } = useGetBoardsQuery();

  const [, setIsActive] = useModalStore((state) => state['isModalOpen']);
  const [modal, setModal] = useModalStore((state) => state['currentModal']);

  const openModal = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const current = e?.currentTarget?.dataset?.id as ModalType;
      setModal({ currentModal: current });
      setIsActive({ isModalOpen: true });
    },
    [setModal, setIsActive]
  );

  return (
    <>
      <Head>
        <title>Kanban Task Manager</title>
      </Head>
      {/* <MainContent className='py-10 px-8 bg-primary-300 text-neutral-100 text-900 font-bold'>

      </MainContent> */}
      {/* <p className='text-500'>{JSON.stringify(dehydratedState?.queries)}</p> */}

      {/* <p className='text-500'>{JSON.stringify(data)}</p> */}
      <button data-id='AddTask' onClick={(e) => openModal(e)}>
        Open Add Task Modal
      </button>
      <button data-id='AddBoard' onClick={(e) => openModal(e)}>
        Open Add Board Modal
      </button>
      <button data-id='ViewBoard' onClick={(e) => openModal(e)}>
        Open View Board Modal
      </button>

      <Modal name={modal} />
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
