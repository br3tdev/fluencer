import { cn } from "@/lib/utils";

export interface IStepProps {
  step: number;
  title: string;
  onStepChange: () => void;
  className?: string;
}

export default function Step({
  step,
  title,
  onStepChange,
  className,
}: IStepProps) {
  return (
    <div className="flex items-center gap-4 text-gray-200">
      <button
        className={cn(
          "w-10 h-10 rounded-full border-[1.5px] border-gray-200 font-bold hover:bg-blue-400 hover:text-blue-400 focus:outline-dashed focus:outline-2 focus:outline-offset-2 focus:outline-blue-100 transition-colors",
          className,
        )}
        onClick={onStepChange}
        aria-label={`Go to step ${step}: ${title}`}
      >
        {step}
      </button>
      <p className="sr-only md:not-sr-only flex flex-col gap-0">
        <span className="text-sm">Step {step}</span>
        <span className="font-bold uppercase">{title}</span>
      </p>
    </div>
  );
}
