import { Card, ColumnHeader } from "components/molecules";
import { IBoard } from "types";

type Props = {
  board: IBoard;
};

const BoardTemplate = ({ board }: Props) => {
  return (
    <main className='border-brand-200 scrollbar-track-brand-400 scrollbar-thumb-brand-600 dark:border-brand-600 dark:scrollbar-track-brand-700 dark:scrollbar-thumb-brand-400 overflow-auto border-l py-10 px-12 text-700 font-bold text-neutral-100 grid-in-main scrollbar scrollbar-track-rounded-lg  scrollbar-thumb-rounded-lg scrollbar-w-4 scrollbar-h-4'>
      <section
        id='main-content'
        className='h-full min-w-min cursor-move space-y-8'
      >
        <header className='flex items-center gap-[2.4rem]'>
          {board.columns.map((column) => {
            return <ColumnHeader key={column.id} column={column} />;
          })}
        </header>

        <div className='flex h-full items-start gap-[2.4rem]'>
          {board.columns.map((column) => {
            return (
              <div key={column.name} className='flex w-[28rem] flex-col gap-8'>
                {column.tasks.map((task) => {
                  const completed = task.subtasks.filter(
                    (subtask) => subtask.isCompleted
                  );

                  return (
                    <Card
                      key={task.id}
                      task={task}
                      completed={completed.length}
                      subtasks={task.subtasks.length}
                    />
                  );
                })}
              </div>
            );
          })}

          <button
            type='button'
            className='text-brand-400 hover:text-brand-500 active:text-brand-500 dark:from-brand-700/25 dark:to-brand-700/[0.125] grid h-full w-[28rem] place-content-center rounded-100 bg-gradient-to-b from-[#E9EFFA] to-[#E9EFFA]/50 text-[2.4rem]  font-bold leading-500'
          >
            + New Column
          </button>
        </div>
      </section>
    </main>
  );
};
export { BoardTemplate };
