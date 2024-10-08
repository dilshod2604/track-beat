import { create } from "zustand";
interface PlaylistMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  playlistId: string;
  setPlaylistId: (id: string) => void;
}
export const usePlaylistMenuStore = create<PlaylistMenuProps>((set) => ({
  isOpen: false,
  playlistId: "",
  setIsOpen: (value: boolean) => set({ isOpen: value }),
  setPlaylistId: (id) => set({ playlistId: id }),
}));
