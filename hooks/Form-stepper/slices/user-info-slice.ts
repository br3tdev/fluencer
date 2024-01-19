import { UserInfoType } from "@/types/typings";
import { StateCreator } from "zustand";
import { IFormStepperStore } from "../use-form-stepper";

export interface IUserInfoSliceProps {
  userInfo: UserInfoType;
  errors: Partial<UserInfoType>;
  touched: Record<keyof UserInfoType, boolean>;
  setUserInfo: (newUserInfo: Partial<UserInfoType>) => void;
  setErrors: (newErrors: Partial<UserInfoType>) => void;
  setTouched: (
    newtouched: Partial<Record<keyof UserInfoType, boolean>>,
  ) => void;
  triggerAllUntouched: () => void;
}

export const createUserInfoSlice: StateCreator<
  IFormStepperStore,
  [],
  [],
  IUserInfoSliceProps
> = (set) => ({
  userInfo: {
    name: "",
    email: "",
    phone: "",
  },
  errors: {},
  touched: {
    name: false,
    email: false,
    phone: false,
  },
  setUserInfo: (newUserInfo) =>
    set(({ userInfo }) => ({
      userInfo: { ...userInfo, ...newUserInfo },
    })),
  setErrors: (newErrors) =>
    set(() => ({
      errors: newErrors,
    })),
  setTouched: (newtouched) =>
    set(({ touched }) => ({
      touched: { ...touched, ...newtouched },
    })),
  triggerAllUntouched: () =>
    set(({ touched }) => ({
      touched: { ...touched, ...{ name: true, email: true, phone: true } },
    })),
});
