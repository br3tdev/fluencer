import { StateCreator } from "zustand";
import { IFormStepperStore } from "../use-form-stepper";

export interface IModalSliceProps {
  currentStep: number;
  setCurrentStep: (index: number) => void;
  incrementCurrentStep: () => void;
  decrementCurrentStep: () => void;
}

export const createModalSlice: StateCreator<
  IFormStepperStore,
  [],
  [],
  IModalSliceProps
> = (set) => ({
  currentStep: 0,
  setCurrentStep: (index: number) =>
    set(() => ({
      currentStep: index,
    })),
  incrementCurrentStep: () =>
    set(({ currentStep }) => ({
      currentStep: currentStep + 1,
    })),
  decrementCurrentStep: () =>
    set(({ currentStep }) => ({
      currentStep: currentStep - 1,
    })),
});
