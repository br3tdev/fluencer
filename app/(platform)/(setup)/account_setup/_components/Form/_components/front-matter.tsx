import { cn } from "@/lib/utils";

export interface IFrontMatterProps {
  title: string;
  description: string;
  className?: string;
}

export default function FrontMatter({
  title,
  description,
  className,
}: IFrontMatterProps) {
  return (
    <div className={cn("", className)}>
      <h1 className="text-4xl text-neutral-700 font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
