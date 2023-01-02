import { useModalState } from 'context';
import { AddBoardModal } from './add-board';
import { AddTaskModal } from './add-task';
import { ViewBoardModal } from './view-board';

type Props = {};

const Modal = (props: Props) => {
  const state = useModalState();
  const name = state?.current;

  switch (name) {
    case 'AddTask':
      return <AddTaskModal />;
    case 'ViewBoard':
      return <ViewBoardModal />;
    case 'AddBoard':
      return <AddBoardModal />;
    default:
      return null;
  }
};

export { Modal };
