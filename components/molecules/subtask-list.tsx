import { icons } from "common";
import { FormInput } from "components/atoms";
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
            <div
              key={item.id}
              className='grid grid-cols-[1fr,auto] items-center gap-8'
            >
              <FormInput
                type='text'
                name={`subtask-${item.id}`}
                placeholder='e.g. Make coffee'
              />
              <button
                type='button'
                className='inline-flex items-center justify-end text-brand-400 hover:text-accent-100 active:text-accent-100'
              >
                <icons.board.cross className='fill-current ' />
                <span className='sr-only'>Remove</span>
              </button>
            </div>
          );
        })}

      <button
        type='button'
        className='inline-grid w-full place-items-center rounded-pill bg-brand-500/10 py-4 text-400 font-bold leading-400 text-brand-500 dark:bg-neutral-100'
      >
        + Add New Subtask
      </button>
    </Fragment>
  );
};

export { SubtaskList };
