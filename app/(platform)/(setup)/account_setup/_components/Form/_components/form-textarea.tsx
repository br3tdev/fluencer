import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export interface IFormTextareaProps {
  label?: string;
  name: string;
  value: string;
  placeholder: string;
  description: string;
  required?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export default function FormTextarea({
  label,
  name,
  value,
  placeholder,
  description,
  required,
  error,
  onChange,
  onBlur,
  className,
}: IFormTextareaProps) {
  const ERROR_CLASSES =
    required && error ? "border-rose-500 focus:border-rose-500" : "";

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
        <Textarea
          id={name}
          name={name}
          defaultValue={value}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          aria-invalid={required}
          aria-describedby={`invalid-${name}-textarea`}
          onChange={onChange}
          onBlur={onBlur}
          className={cn("resize-none", ERROR_CLASSES, className)}
        />
        <span
          id={`invalid-${name}-textarea`}
          className={cn(
            "text-rose-500 text-sm font-bold absolute right-0 bottom-[calc(100%+0.25rem)]",
            !(required && error) && "sr-only",
          )}
          aria-live="polite"
        >
          {error}
        </span>
        <p className="text-sm mt-1 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
