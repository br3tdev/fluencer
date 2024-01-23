import { UserTagsType } from "@/types/typings";
import { StateCreator } from "zustand";
import { IFormStepperStore } from "../use-form-stepper";

export interface IUserTagsSliceProps {
  tagOptions: Array<UserTagsType>;
  onTagChange: (newTag: UserTagsType, isChecked: boolean) => void;
}

export const createUserTagsSlice: StateCreator<
  IFormStepperStore,
  [],
  [],
  IUserTagsSliceProps
> = (set) => ({
  tagOptions: [],
  onTagChange: (newTag, isChecked) =>
    set(({ tagOptions }) => ({
      tagOptions: isChecked
        ? [...tagOptions, newTag]
        : tagOptions.filter((option) => option !== newTag),
    })),
});
