export type UserInfoType = {
  name: string;
  email: string;
  phone: string;
};

export type UserBioType = {
  bio: string;
  tags?: string;
};

export type UserTagsType =
  | "Athlete"
  | "Celebrity"
  | "Blogger"
  | "Fitness"
  | "Travel"
  | "Food"
  | "Beauty"
  | "Marketing"
  | "Fashion"
  | "Gaming"
  | "Thought Leader"
  | "Tech & AI"
  | "Activist"
  | "Journalist";
