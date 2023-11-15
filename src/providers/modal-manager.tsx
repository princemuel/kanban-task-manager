'use client';

import { CreateBoardModal } from '@/components/modals/board.create';
import ModalManager from '@ebay/nice-modal-react';

ModalManager.register('board.create', CreateBoardModal);

export const ModalProvider = ModalManager.Provider;

export default ModalManager;
