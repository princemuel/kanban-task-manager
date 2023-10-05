import { create } from 'zustand';

type ModalState = {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
  toggle: () => void;
};

export const useSidebar = create<ModalState>((set) => ({
  isVisible: false,
  show: () => set({ isVisible: true }),
  hide: () => set({ isVisible: false }),
  toggle: () => set((state) => ({ isVisible: !state.isVisible })),
}));
