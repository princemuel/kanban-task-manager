import { createAStore as createModalStore } from './store';

type ModalAction = 'add' | 'view' | 'edit' | 'delete';
type ModalSubject = 'board' | 'task';

export type ModalType = `${ModalAction}-${ModalSubject}`;

interface ModalStore {
  isModalOpen: boolean;
  currentModal: ModalType | null;
  toggleModal: (name: ModalType) => void;
  closeModal: () => void;
}

const { StoreProvider, useStore } = createModalStore<ModalStore>(
  {
    isModalOpen: false,
    currentModal: null,
    toggleModal: (name) => {
      console.log(name);
    },
    closeModal: () => {
      console.log('modal closed');
    },
  },
  'ModalContext'
);

export { StoreProvider as ModalProvider, useStore as useModalStore };
