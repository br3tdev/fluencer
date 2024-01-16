import { ClerkProvider } from "@clerk/nextjs";

export interface IPlatformLayoutProps {}

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
