import { UserBioType } from "@/types/typings";
import { StateCreator } from "zustand";
import { IFormStepperStore } from "../use-form-stepper";

export interface IUserBioSliceProps {
  userBio: UserBioType;
  bioErrors: Partial<UserBioType>;
  bioTouched: Record<keyof UserBioType, boolean>;
  setUserBio: (newUserBio: Partial<UserBioType>) => void;
  setBioErrors: (newErrors: Partial<UserBioType>) => void;
  setBioTouched: (
    newtouched: Partial<Record<keyof UserBioType, boolean>>,
  ) => void;
  triggerAllUntouched: () => void;
}

export const createUserBioSlice: StateCreator<
  IFormStepperStore,
  [],
  [],
  IUserBioSliceProps
> = (set) => ({
  userBio: {
    bio: "",
    tags: "",
  },
  bioErrors: {},
  bioTouched: {
    bio: false,
    tags: false,
  },
  setUserBio: (newUserBio) =>
    set(({ userBio }) => ({
      userBio: { ...userBio, ...newUserBio },
    })),
  setBioErrors: (newErrors) =>
    set(() => ({
      bioErrors: newErrors,
    })),
  setBioTouched: (newBioTouched) =>
    set(({ bioTouched }) => ({
      bioTouched: { ...bioTouched, ...newBioTouched },
    })),
  triggerAllUntouched: () =>
    set(({ bioTouched }) => ({
      bioTouched: {
        ...bioTouched,
        ...{ bio: true },
      },
    })),
});
