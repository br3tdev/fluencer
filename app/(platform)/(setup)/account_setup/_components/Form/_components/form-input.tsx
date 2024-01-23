import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { HTMLInputTypeAttribute } from "react";

const createDefaultPlaceholder = (inputType: HTMLInputTypeAttribute) => {
  switch (inputType) {
    case "email":
      return "e.g. bretmda@lorem.com";
    case "tel":
      return "e.g. +254 123 456 789";
    case "text":
    default:
      return "Bret Mda";
  }
};

export interface IFormInputProps
  extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  value: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  error?: string;
}

export default function FormInput({
  label,
  name,
  value,
  className,
  type = "text",
  required = false,
  error,
  ...otherProps
}: IFormInputProps) {
  const defaultPlaceholder = createDefaultPlaceholder(type);
  const ERROR_CLASSES =
    required && error ? "border-red-100 focus:border-red-100" : "";

  return (
    <div className="space-y-2">
      {label ? (
        <Label
          htmlFor={name}
          className="text-sm font-semibold text-neutral-700"
        >
          {label}
        </Label>
      ) : null}
      <div className="relative">
        <Input
          id={name}
          name={name}
          value={value}
          type="text"
          placeholder={defaultPlaceholder}
          required={required}
          aria-required={required}
          aria-invalid={error ? true : false}
          aria-describedby={`invalid-${name}-input`}
          className={cn(
            // "block px-4 border-gray-300 border-[1.5px] focus:outline focus:outline-transparent focus:border-[1.5px] focus:border-blue-300 rounded-md placeholder:text-gray-400 font-medium focus-visible:outline-none focus-visible:ring-transparent",
            "block px-4 py-2 border-gray-300 border-[1.5px] focus:outline focus:outline-transparent focus:border-[1.5px] focus:border-blue-300 rounded-md placeholder:text-gray-400 font-medium text-blue-400",
            ERROR_CLASSES,
            className,
          )}
          {...otherProps}
        />
        <span
          id={`invalid-${name}-input`}
          className={cn(
            "text-rose-500 text-sm font-bold absolute right-0 bottom-[calc(100%+0.25rem)]",
            !(error && required) && "sr-only",
          )}
          aria-live="polite"
        >
          {error}
        </span>
      </div>
    </div>
  );
}
