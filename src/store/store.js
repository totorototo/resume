import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useStack = create(
  devtools((set) => ({
    stack: [],
    selectedItem: null,
    addItems: (items) =>
      set((state) => ({ ...state, stack: [...state.stack, ...items] })),
    setSelectedItem: (item) => set({ selectedItem: item }),
  })),
);

export default useStack;
