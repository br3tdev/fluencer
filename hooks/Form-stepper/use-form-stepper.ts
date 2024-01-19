import { create } from "zustand";
import {
  IUserInfoSliceProps,
  createUserInfoSlice,
} from "./slices/user-info-slice";

export interface IFormStepperStore extends IUserInfoSliceProps {}

export const useFormStepper = create<IFormStepperStore>((...a) => ({
  ...createUserInfoSlice(...a),
}));
