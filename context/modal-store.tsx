import { createAStore as createModalStore } from './store';

type ModalAction = 'Add' | 'View' | 'Edit' | 'Delete';
type ModalSubject = 'Board' | 'Task';

export type ModalType = `${ModalAction}${ModalSubject}` | null;

interface ModalStore {
  isModalOpen: boolean;
  isLocked: boolean;
  currentModal: ModalType;
}

const { StoreProvider, useStore } = createModalStore<ModalStore>(
  {
    isModalOpen: false,
    isLocked: false,
    currentModal: null,
  },
  'Modal'
);

export { StoreProvider as ModalProvider, useStore as useModalStore };
