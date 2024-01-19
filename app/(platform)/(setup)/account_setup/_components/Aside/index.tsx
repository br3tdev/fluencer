import { cn } from "@/lib/utils";

export interface IAsideProps {
  className: string;
}

export default function Aside({ className }: IAsideProps) {
  return (
    <aside className={cn("", className)}>
      <h1>Aside</h1>
    </aside>
  );
}
