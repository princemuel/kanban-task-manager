import { IModal, useModalDispatch } from "context";
import Head from "next/head";
import * as React from "react";
import type { NextPageWithLayout } from "types";

import { icons } from "common";
import {
  BoardLink,
  BoardTemplate,
  LogoIcon,
  Modal,
  ThemeModeToggler,
} from "components";
import { data } from "lib/data";

// type Props = InferNextPropsType<typeof getServerSideProps>;
type Props = {};

const Home: NextPageWithLayout<Props> = (props: Props) => {
  // const { data } = useGetBoardsQuery();

  const dispatch = useModalDispatch();

  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const current = e?.currentTarget?.dataset?.id as IModal;
    console.log(current);

    dispatch({ type: "OPEN_MODAL", payload: current });
  };

  const currentBoard = data.boards[0];

  return (
    <>
      <Head>
        <title>Kanban Task Manager</title>
      </Head>

      <div className='grid grid-cols-[26rem,1fr] grid-rows-[8rem_calc(100vh_-_8rem)] grid-areas-desk'>
        <header className='grid grid-cols-[26rem,1fr] bg-neutral-100 text-700 font-bold grid-in-header dark:bg-primary-700'>
          <div className='px-8 py-10'>
            <LogoIcon />
          </div>

          <div className='flex items-center justify-between border-b border-l border-primary-200 bg-neutral-100 px-12 dark:border-primary-600 dark:bg-primary-700'>
            <h1>{currentBoard.name}</h1>

            <div className='flex items-center gap-8'>
              <button
                type='button'
                className='inline-grid place-items-center rounded-pill bg-primary-500 px-8 py-6 text-500 leading-300 text-neutral-100 transition-all hover:bg-primary-300'
                data-id='AddTask'
                onClick={(e) => openModal(e)}
              >
                + Add New Task
              </button>
              <button type='button' className='inline-block'>
                <icons.board.ellipsis />
              </button>
            </div>
          </div>
        </header>

        <aside className='space-y-4 bg-neutral-100 pt-10 pb-14 text-700 font-bold grid-in-aside dark:bg-primary-700'>
          <h4 className='flex items-center gap-2 px-10'>
            <span className='uppercase'>All Boards</span>
            <output className='uppercase'>({data.boards.length})</output>
          </h4>

          <div className='flex h-full flex-col justify-between'>
            <nav className='flex flex-col gap-4'>
              {data.boards.map(({ id, name }) => {
                return <BoardLink key={id} id={id} name={name} />;
              })}

              <button
                type='button'
                className='group mr-8 flex items-center gap-6 px-10 py-4 text-500 font-bold leading-300 text-primary-500'
              >
                <icons.board.board className='fill-current text-primary-500' />
                <span>+ Create New Board</span>
              </button>
            </nav>

            <div className='space-y-4'>
              <ThemeModeToggler className={"mx-8"} />

              <div className='mr-8'>
                <button
                  type='button'
                  className='group flex w-full items-center gap-6 px-10 py-4 text-500 font-bold leading-300 text-primary-400 hover:rounded-r-full hover:bg-primary-500/10 active:rounded-r-full dark:hover:bg-neutral-100'
                >
                  <icons.sidebar.hide className='fill-current text-primary-400' />
                  <span className='group-hover:text-primary-500 group-active:text-primary-500'>
                    Hide Sidebar
                  </span>
                </button>
              </div>
            </div>
          </div>
        </aside>

        <BoardTemplate board={currentBoard} />

        <div className='fixed bottom-12 left-0 z-20'>
          <button
            type='button'
            className='group flex items-center gap-6 rounded-r-full bg-primary-500 px-8 py-7 text-500 font-bold leading-300 dark:hover:bg-primary-300'
          >
            <icons.sidebar.show />
          </button>
        </div>
      </div>
      <Modal />
    </>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const queryClient = new QueryClient(queryOptions);

//   await queryClient.prefetchQuery(
//     useGetBoardsQuery.getKey(),
//     useGetBoardsQuery.fetcher()
//   );
//   // await queryClient.prefetchQuery(['boards'], () => getBoards());

//   return {
//     props: {
//       dehydratedState: createDehydratedState(queryClient),
//       // dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

//  <button data-id="AddTask" onClick={(e) => openModal(e)}>
//     Open Add Task Modal
//   </button>

// <Modal />
