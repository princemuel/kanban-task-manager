import { ModalType } from 'context';
import { AddBoardModal } from './add-board';
import { AddTaskModal } from './add-task';
import { ViewBoardModal } from './view-board';

type Props = {
  name: ModalType;
};

const Modal = (props: Props) => {
  return (
    <>
      {props?.name === 'AddTask' && <AddTaskModal name={'AddTask'} />}
      {props?.name === 'AddBoard' && <AddBoardModal name={'AddBoard'} />}
      {props?.name === 'ViewBoard' && <ViewBoardModal name={'ViewBoard'} />}
    </>
  );
};

export { Modal };
