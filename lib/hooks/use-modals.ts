'use client';

import { create } from 'zustand';

/*!! TODO refactor these hooks to a single hook with modal id input */
export const useRegisterModal = create<ModalState>((set) => ({
  show: false,
  open: () => set({ show: true }),
  close: () => set({ show: false }),
}));

export const useLoginModal = create<ModalState>((set) => ({
  show: false,
  open: () => set({ show: true }),
  close: () => set({ show: false }),
}));

export const useSidebar = create<ModalState>((set) => ({
  show: false,
  open: () => set({ show: true }),
  close: () => set({ show: false }),
}));
