export interface IFrontMatterProps {
  title: string;
  description: string;
}

export default function FrontMatter({ title, description }: IFrontMatterProps) {
  return (
    <>
      <h1 className="text-4xl text-neutral-700 font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </>
  );
}
