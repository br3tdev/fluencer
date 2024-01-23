import { IUserProfileTagsProps } from "@/app/(platform)/(setup)/account_setup/_components/Form/_components/user-profile-tags";

export const userTagsList: Array<
  Omit<IUserProfileTagsProps, "isChecked" | "onCheckChange">
> = [
  { name: "Athlete", value: "Athlete" },
  { name: "Celebrity", value: "Celebrity" },
  { name: "Blogger", value: "Blogger" },
  { name: "Fitness", value: "Fitness" },
  { name: "Travel", value: "Travel" },
  { name: "Food", value: "Food" },
  { name: "Beauty", value: "Beauty" },
  { name: "Marketing", value: "Marketing" },
  { name: "Fashion", value: "Fashion" },
  { name: "Gaming", value: "Gaming" },
  { name: "Thought Leader", value: "Thought Leader" },
  { name: "Tech & AI", value: "Tech & AI" },
  { name: "Activist", value: "Activist" },
  { name: "Journalist", value: "Journalist" },
];
