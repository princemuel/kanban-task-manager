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
      {props?.name === 'AddTask' && <AddTaskModal />}
      {props?.name === 'AddBoard' && <AddBoardModal />}
      {props?.name === 'ViewBoard' && <ViewBoardModal />}
    </>
  );
};

export { Modal };
