export interface IMainProps {
  className: string;
  children: React.ReactNode;
}

export default function Main({ className, children }: IMainProps) {
  return <main className={className}>{children}</main>;
}
