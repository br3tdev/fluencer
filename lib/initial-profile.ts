import { auth, currentUser, redirectToSignIn } from "@clerk/nextjs";

import { db } from "@/lib/db";

export async function getInitialProfile() {
  const user = await currentUser();
  const { orgId } = auth();

  if (!user) return redirectToSignIn();

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (profile) return profile;

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
      orgId: orgId as string,
    },
  });

  return newProfile;
}
