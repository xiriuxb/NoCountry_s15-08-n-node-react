import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuth:
    localStorage.getItem("user:auth") &&
    localStorage.getItem("user:auth") == "true"
      ? true
      : false,
  setIsAuth: (value) => set((state) => ({ isAuth: value })),
}));
