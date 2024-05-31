import { create } from "zustand";

export const useMapStore = create((set) => ({
  selectedPoint: null,
  setSelectedPoint: (point) => set((state) => ({ selectedPoint: point })),
  newPoint: null,
  setNewPoint: (newPoint) => set((state) => ({ newPoint: newPoint })),
}));