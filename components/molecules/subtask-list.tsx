import { icons } from "common";
import { data } from "lib/data";
import { Fragment } from "react";
import { hasValues, pluck } from "utilities";

type Props = {};

const SubtaskList = (props: Props) => {
  const items: any[] | null | undefined = [];

  const tasks = data.boards[0].columns[1].tasks;
  const subtasks = pluck(tasks, "subtasks")[0];
  console.log(subtasks);

  return (
    <Fragment>
      {hasValues(subtasks) &&
        subtasks.map((item) => {
          return (
            <div key={item.id} className='flex items-center justify-between'>
              <input
                type='text'
                className='w-[93%] rounded-300 border border-primary-400/25 bg-inherit py-4 px-6 text-400 font-medium leading-400 placeholder:text-primary-900/25 focus:outline-none dark:placeholder:text-neutral-100/25'
                name={`subtask-${item.id}`}
                placeholder='e.g. Make coffee'
              />
              <button
                type='button'
                className='inline-flex w-[8%] items-center justify-end'
              >
                <icons.board.cross />
                <span className='sr-only'>Remove</span>
              </button>
            </div>
          );
        })}

      <button
        type='button'
        className='inline-grid w-full place-items-center rounded-pill bg-primary-500/10 py-4 text-400 font-bold leading-400 text-primary-500 dark:bg-neutral-100'
      >
        + Add New Subtask
      </button>
    </Fragment>
  );
};

export { SubtaskList };
