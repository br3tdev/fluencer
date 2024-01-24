export interface IAccountSetupLayoutProps {}

export default function AccountSetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <main className="bg-slate-100">{children}</main>
    </div>
  );
}
