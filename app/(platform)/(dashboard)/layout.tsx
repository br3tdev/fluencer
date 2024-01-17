import Navbar from "./_components/navbar";

export interface IDashboardLayoutProps {}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
}
