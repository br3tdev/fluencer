import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { UserTagsType } from "@/types/typings";
import { forwardRef } from "react";

export interface IUserProfileTagsProps {
  name: string;
  value: UserTagsType;
  isChecked: boolean;
  onCheckChange?: (arg: boolean) => void;
}

export const UserProfileTags = forwardRef<
  React.ElementRef<typeof Checkbox>,
  React.ComponentPropsWithoutRef<typeof Checkbox> & IUserProfileTagsProps
>(({ name, value, isChecked, onCheckChange }, ref) => {
  return (
    <Label
      htmlFor={value}
      className={cn(
        "flex w-fit relative items-center border border-gray-300/50 p-3 rounded-md normal-case",
        isChecked && "bg-blue-200/10 border-blue-300/50",
      )}
    >
      <span className="absolute">
        <Checkbox
          hidden
          id={value}
          name={name}
          value={value}
          ref={ref}
          aria-hidden
          className="pointer-events-none"
          checked={isChecked}
          onCheckedChange={onCheckChange}
        />
      </span>
      <span className="text-blue-400 font-bold">{name}</span>
    </Label>
  );
});

UserProfileTags.displayName = "UserProfileTags";
