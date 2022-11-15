import { Modal } from 'components';
import { ModalType, useModalStore } from 'context';
import { createDehydratedState } from 'helpers';
import { useGetBoardsQuery } from 'lib/generated/graphql';
import Head from 'next/head';
import type { InferNextPropsType, NextPageWithLayout } from 'types';
import { queryClient } from './_app';

type Props = InferNextPropsType<typeof getServerSideProps>;

const Home: NextPageWithLayout<Props> = (props: Props) => {
  // const Home: NextPageWithLayout = () => {
  const { data } = useGetBoardsQuery();

  const [isActive, setIsActive] = useModalStore(
    (state) => state['isModalOpen']
  );
  const [currentModal, setCurrentModal] = useModalStore(
    (state) => state['currentModal']
  );

  const openModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    modalName: ModalType
  ) => {
    const current = e.currentTarget.dataset.modal;
    if (current === modalName) {
      setCurrentModal({ currentModal: modalName });
      setIsActive({ isModalOpen: !isActive });
    }
  };

  return (
    <>
      <Head>
        <title>Kanban Task Manager</title>
      </Head>
      {/* <MainContent className='py-10 px-8 bg-primary-300 text-neutral-100 text-900 font-bold'>

      </MainContent> */}
      {/* <p className='text-500'>{JSON.stringify(dehydratedState?.queries)}</p> */}

      {/* <p className='text-500'>{JSON.stringify(data)}</p> */}
      <button data-modal='AddTask' onClick={(e) => openModal(e, 'AddTask')}>
        Open Add Task Modal
      </button>
      <button data-modal='AddBoard' onClick={(e) => openModal(e, 'AddBoard')}>
        Open Add Board Modal
      </button>
      <button data-modal='ViewBoard' onClick={(e) => openModal(e, 'ViewBoard')}>
        Open View Board Modal
      </button>

      <Modal name='AddTask' />
      <Modal name='AddBoard' />
      <Modal name='ViewBoard' />
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
