import { Dialog } from "@headlessui/react";
import { icons } from "common";
import { Text } from "components/atoms";
import { useModalDispatch, useModalState } from "context";
import { useMemo } from "react";
import { ITask } from "types";
import { clsx, getArrayLength } from "utilities";
import { BaseModal } from "./base-modal";

type Props = {
  task: ITask;
};

const ViewTask = ({ task }: Props) => {
  const modalState = useModalState();
  const modalDispatch = useModalDispatch();

  const numSubtasks = getArrayLength(task.subtasks);

  const numCompletedSubtasks = useMemo(
    () =>
      getArrayLength(task.subtasks.filter((subtask) => subtask.isCompleted)),
    [task.subtasks]
  );

  return (
    <BaseModal
      focusRef={}
      isOpen={modalState.open}
      closeModal={() => modalDispatch({ type: "CLOSE_MODAL" })}
    >
      <Dialog.Title as='h2' className={""}>
        {task.title}
      </Dialog.Title>

      {task.description && (
        <Dialog.Description className={""}>
          {task.description}
        </Dialog.Description>
      )}

      <Text variant='h4' className='text-300 leading-200 text-primary-400'>
        Subtasks ({numCompletedSubtasks} of {numSubtasks})
      </Text>

      <div>
        {task.subtasks.map((subtask) => {
          const name = subtask.title.toLowerCase();
          return (
            <div key={subtask.id}>
              <label className='flex cursor-pointer items-center gap-6 rounded-xl bg-primary-100 py-6 px-6 text-400 font-bold leading-200 text-primary-900 hover:bg-primary-500/25'>
                <input
                  type='checkbox'
                  name={name}
                  className='aspect-square w-6 cursor-pointer accent-primary-500'
                />
                <Text
                  className={clsx("", subtask.isCompleted && "line-through")}
                >
                  {subtask.title}
                </Text>
              </label>
            </div>
          );
        })}
      </div>

      <Text variant='h4' className='text-300 leading-200 text-primary-400'>
        Current Status
      </Text>

      <div>
        <button
          type='button'
          className='flex items-center justify-between rounded-lg border border-primary-500'
        >
          <span>Select Task Status</span>
          <icons.chevron.down />
        </button>

        <ul>
          {task.subtasks.map((subtask) => {
            return <li key={subtask.id}>{subtask.title}</li>;
          })}
        </ul>
      </div>

      <button onClick={() => modalDispatch({ type: "CLOSE_MODAL" })}>
        Cancel
      </button>
    </BaseModal>
  );
};

export { ViewTask };
