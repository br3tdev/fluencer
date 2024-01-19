import { create } from "zustand";

export interface IAccountSetupProps {
  isStarted: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const startAccountSetup = create<IAccountSetupProps>((set) => ({
  isStarted: false,
  onOpen: () => set({ isStarted: true }),
  onClose: () => set({ isStarted: false }),
}));
