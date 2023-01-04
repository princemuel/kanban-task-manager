import { IModal, useModalDispatch } from "context";
import { ITask } from "types";

type Props = {
  task: ITask;
  completed: number;
  subtasks: number;
};

const Card = ({ task, completed, subtasks }: Props) => {
  const dispatch = useModalDispatch();

  const openModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const current = e?.currentTarget?.dataset?.id as IModal;
    console.log(current);

    // dispatch({ type: "OPEN_MODAL", payload: current });
  };
  return (
    <article
      data-id={task.id}
      className="group flex cursor-pointer select-none flex-col gap-4 rounded-200 bg-neutral-100 px-6 py-9 text-primary-900 shadow-task dark:bg-primary-700 dark:text-neutral-100"
      onClick={(e) => openModal(e)}
    >
      <h3 className="group-hover:text-primary-500">{task.title}</h3>
      <p className="text-300 leading-200 text-primary-400">
        {completed} of {subtasks} subtasks
      </p>
    </article>
  );
};

export { Card };
