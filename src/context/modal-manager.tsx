import CreateBoardModal from "@/components/board.create";
import DeleteBoardModal from "@/components/board.delete";
import EditBoardModal from "@/components/board.edit";
import CreateTaskModal from "@/components/task.create";
import DeleteTaskModal from "@/components/task.delete";
import EditTaskModal from "@/components/task.edit";
import ViewTaskModal from "@/components/task.view";
import NiceModal from "@ebay/nice-modal-react";

NiceModal.register("board/create", CreateBoardModal);
NiceModal.register("board/edit", EditBoardModal);
NiceModal.register("board/delete", DeleteBoardModal);
NiceModal.register("task/create", CreateTaskModal);
NiceModal.register("task/delete", DeleteTaskModal);
NiceModal.register("task/edit", EditTaskModal);
NiceModal.register("task/view", ViewTaskModal);
