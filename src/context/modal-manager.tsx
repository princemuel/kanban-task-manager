import CreateBoardModal from '@/components/modals/board.create';
import DeleteBoardModal from '@/components/modals/board.delete';
import EditBoardModal from '@/components/modals/board.edit';
import CreateTaskModal from '@/components/modals/task.create';
import DeleteTaskModal from '@/components/modals/task.delete';
import EditTaskModal from '@/components/modals/task.edit';
import ViewTaskModal from '@/components/modals/task.view';
import NiceModal from '@ebay/nice-modal-react';

NiceModal.register('board/create', CreateBoardModal);
NiceModal.register('board/edit', EditBoardModal);
NiceModal.register('board/delete', DeleteBoardModal);
NiceModal.register('task/create', CreateTaskModal);
NiceModal.register('task/delete', DeleteTaskModal);
NiceModal.register('task/edit', EditTaskModal);
NiceModal.register('task/view', ViewTaskModal);
