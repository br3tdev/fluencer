import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

export interface IMarketingPageProps {}

export default function MarketingPage(props: IMarketingPageProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "flex flex-col items-center justify-center",
          headingFont.className,
        )}
      >
        <div className="item-center mb-4 flex rounded-full border bg-amber-100 p-4 uppercase text-amber-700 shadow-sm">
          <Medal className="mr-2 h-6 w-6" />
          No 1 resource for Influencers.
        </div>
        <h1 className="mb-6 text-center text-3xl text-neutral-800 md:text-6xl">
          Land the brand deals you deserve
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md w-fit">
          with Fluencer.
        </div>
      </div>

      <div
        className={cn(
          "mx-auto mt-4 max-w-xs text-center text-sm text-neutral-400 md:max-w-2xl md:text-xl",
          textFont.className,
        )}
      >
        Custom digital resumes, complete with transparent, real-time data.
        Resources and insights from industry professionals, influencers, and the
        Fluencer team.
      </div>
      <Button className="mt-6" size={"lg"} asChild>
        <Link href={"/signup"}>Start for Free</Link>
      </Button>
    </div>
  );
}
