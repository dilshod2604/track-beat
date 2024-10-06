import { create } from "zustand";
interface IHeaderStore {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  login: () => void;
  logout: () => void;
}
export const useHeaderStore = create<IHeaderStore>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set(() => ({ isOpen: value })),
  login: () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/login`,
      "_self"
    );
  },
  logout: () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/logout`,
      "_self"
    );
  },
}));
