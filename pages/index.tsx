import { IModal, useModalDispatch } from "context";
import Head from "next/head";
import * as React from "react";
import type { NextPageWithLayout } from "types";

import { LogoIcon } from "components";
import { data } from "lib/data";
import { clsx } from "utilities";

// type Props = InferNextPropsType<typeof getServerSideProps>;
type Props = {};

const Home: NextPageWithLayout<Props> = (props: Props) => {
  // const { data } = useGetBoardsQuery();

  const dispatch = useModalDispatch();

  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const current = e?.currentTarget?.dataset?.id as IModal;
    dispatch({ type: "OPEN_MODAL", payload: current });
  };

  const currentBoard = data.boards[0];

  return (
    <>
      <Head>
        <title>Kanban Task Manager</title>
      </Head>

      <div className="grid grid-cols-[15%,1fr] grid-rows-[8rem_calc(100vh_-_8rem)] grid-areas-desk">
        <header className="grid grid-cols-[15%,1fr] bg-neutral-100 text-700 font-bold grid-in-header dark:bg-primary-700">
          <div className="px-8 py-10">
            <LogoIcon />
          </div>
          <div className="border-b border-l border-primary-200 px-12 py-10 dark:border-primary-600">
            <h1>{currentBoard.name}</h1>
          </div>
        </header>

        <aside className="bg-neutral-100 py-10 px-8 text-700 font-bold grid-in-aside dark:bg-primary-700">
          <h1 className="">SIDEBAR</h1>
        </aside>

        <main className="overflow-scroll border-l border-primary-200 py-10 px-12 text-700 font-bold text-neutral-100 grid-in-main scrollbar scrollbar-track-primary-400 scrollbar-thumb-primary-600 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-w-4 dark:border-primary-600 dark:scrollbar-track-primary-700 dark:scrollbar-thumb-primary-400">
          <section className="h-full min-w-full cursor-move space-y-8 ">
            <header className="flex items-center gap-[2.4rem]">
              {currentBoard.columns.map((column) => {
                return (
                  <h4
                    key={column.id}
                    className="flex w-[28rem] items-center gap-2"
                  >
                    <span
                      aria-hidden
                      className={clsx(
                        "mr-4 inline-block aspect-square w-6 rounded-full",
                        column.name === "Todo"
                          ? "bg-accent-300"
                          : column.name === "Doing"
                          ? "bg-accent-400"
                          : "bg-accent-500"
                      )}
                    ></span>
                    <span className="uppercase">{column.name}</span>
                    <output className="uppercase">
                      ({column.tasks.length})
                    </output>
                  </h4>
                );
              })}
            </header>

            <div className="flex items-start gap-[2.4rem]">
              {currentBoard.columns.map((column) => {
                return (
                  <div
                    key={column.name}
                    className="flex w-[28rem] flex-col gap-8"
                  >
                    {column.tasks.map((task) => {
                      const completed = task.subtasks.filter(
                        (subtask) => subtask.isCompleted
                      );

                      return (
                        <article
                          key={task.id}
                          className="group flex cursor-pointer flex-col gap-4 rounded-default bg-neutral-100 px-6 py-9 text-primary-900 shadow-task transition-all hover:scale-110 dark:bg-primary-700 dark:text-neutral-100"
                        >
                          <h3 className="group-hover:text-primary-500">
                            {task.title}
                          </h3>
                          <p className="text-300 leading-200 text-primary-400">
                            {completed.length} of {task.subtasks.length}{" "}
                            subtasks
                          </p>
                        </article>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
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
