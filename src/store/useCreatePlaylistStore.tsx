import { create } from "zustand";
interface useCreatePlaylistState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export const useCreatePlaylistStore = create<useCreatePlaylistState>((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
}));
