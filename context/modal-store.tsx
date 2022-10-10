type ModalAction = 'add' | 'view' | 'edit' | 'delete';
type ModalSubject = 'board' | 'task';

export type ModalType = `${ModalAction}-${ModalSubject}`;

interface ModalStore {
  isModalOpen: boolean;
  currentModal: ModalType | null;
  toggleModal: (name: ModalType) => void;
  closeModal: () => void;
}
