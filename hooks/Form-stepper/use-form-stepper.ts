import { create } from "zustand";
import { IModalSliceProps, createModalSlice } from "./slices/modal-slice";
import {
  IUserBioSliceProps,
  createUserBioSlice,
} from "./slices/user-bio-slice";
import {
  IUserInfoSliceProps,
  createUserInfoSlice,
} from "./slices/user-info-slice";
import {
  IUserTagsSliceProps,
  createUserTagsSlice,
} from "./slices/user-tags-slice";

export interface IFormStepperStore
  extends IModalSliceProps,
    IUserInfoSliceProps,
    IUserBioSliceProps,
    IUserTagsSliceProps {}

export const useFormStepper = create<IFormStepperStore>((...a) => ({
  ...createModalSlice(...a),
  ...createUserInfoSlice(...a),
  ...createUserBioSlice(...a),
  ...createUserTagsSlice(...a),
}));
