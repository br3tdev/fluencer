import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export interface IProfileIdLayoutProps {}

export default async function ProfileIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { profileId: string };
}) {
  const { orgId } = auth();

  if (!orgId) return redirect("/select-org");

  const profile = await db.profile.findUnique({
    where: {
      id: params.profileId,
      orgId,
    },
  });

  if (!profile?.urlHandle) {
    redirect("/account_setup");
  }

  return <div>{children}</div>;
}
