import Footer from "@/app/(marketing)/_components/footer";
import Navbar from "./_components/navbar";

export interface IOnboardingLayoutProps {}

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Navbar />
      <main className="pt-14 bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
}
