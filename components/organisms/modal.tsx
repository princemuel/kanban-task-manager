import { useModalState } from "context";
import { AddBoard } from "./add-board";
import { AddTask } from "./add-task";
import { DeleteBoard } from "./delete-board";
import { DeleteTask } from "./delete-task";
import { EditBoard } from "./edit-board";
import { EditTask } from "./edit-task";

type Props = {};

const Modal = (props: Props) => {
  const state = useModalState();
  const name = state?.current;

  switch (name) {
    case "AddBoard":
      return <AddBoard />;
    case "AddTask":
      return <AddTask />;
    case "EditBoard":
      return <EditBoard />;
    case "EditTask":
      return <EditTask />;
    case "DeleteBoard":
      return <DeleteBoard />;
    case "DeleteTask":
      return <DeleteTask />;
    default:
      return null;
  }
};

export { Modal };
