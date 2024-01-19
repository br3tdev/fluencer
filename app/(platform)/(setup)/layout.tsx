import Navbar from "./_components/navbar";

export interface IAccountSetupLayoutProps {}

export default function AccountSetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Navbar />
      <main className="pt-14 bg-slate-100">{children}</main>
    </div>
  );
}
