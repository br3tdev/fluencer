import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs";

export interface IOnboardingPageProps {}

export default async function OnboardingPage(props: IOnboardingPageProps) {
  const user = await currentUser();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* Hover card */}
      <div className="py-9 px-12 md:px-44 bg-white border border-neutral-200 shadow-md rounded-md">
        <div className="flex flex-col items-center gap-6">
          <Avatar>
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>BM</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center gap-4">
            <p>You have no mediakits yet</p>
            <Button>Create your first mediakit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// display: flex;
// padding: 36px 184px;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// gap: 36px;
// flex: 1 0 0;

// border-radius: var(--rounded-md, 6px);
// border: 1px solid var(--neutral-200, #E5E5E5);
// background: #FFF;

// /* shadow */
// box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.09);
