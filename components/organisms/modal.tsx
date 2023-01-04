import { useModalState } from "context";
import { AddBoardModal } from "./add-board";
import { AddTask } from "./add-task";

type Props = {};

const Modal = (props: Props) => {
  const state = useModalState();
  const name = state?.current;

  switch (name) {
    case "AddTask":
      return <AddTask />;

    case "AddBoard":
      return <AddBoardModal />;
    default:
      return null;
  }
};

export { Modal };
