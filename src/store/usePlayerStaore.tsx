import { create } from "zustand";
interface IPlayerStore {
  accessToken: string;
  setAccessToken: (value: string) => void;
  trackUris: string[];
  setTrackUris: (value: string[]) => void;
  trackIndex: number | null;
  setTrackIndex: (value: number) => void;
  activeTrackUri: string;
  setActiveTrackUri: (value: string) => void;
}
export const usePlayerstore = create<IPlayerStore>((set) => ({
  accessToken: "",
  trackUris: [],
  trackIndex: null,
  activeTrackUri:"",
  setAccessToken: (value: string) => set(() => ({ accessToken: value })),
  setTrackUris: (value: string[]) => set(() => ({ trackUris: value })),
  setTrackIndex: (value: number) => set(() => ({ trackIndex: value })),
  setActiveTrackUri: (value: string) => set(() => ({ activeTrackUri: value })),
}));
