import { create } from "zustand";
interface useAddCoverState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export const useAddCoverStore = create<useAddCoverState>((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
}));
