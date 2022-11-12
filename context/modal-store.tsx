import { createAStore as createModalStore } from './store';

type ModalAction = 'Add' | 'View' | 'Edit' | 'Delete';
type ModalSubject = 'Board' | 'Task';

export type ModalType = `${ModalAction}${ModalSubject}`;

interface ModalStore {
  isModalOpen: boolean;
  currentModal: ModalType | null;
}

const { StoreProvider, useStore } = createModalStore<ModalStore>(
  {
    isModalOpen: false,
    currentModal: null,
  },
  'ModalContext'
);

export { StoreProvider as ModalProvider, useStore as useModalStore };
