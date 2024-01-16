import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="flex items-center justify-between w-full md:w-max-screen-2xl mx-auto">
        <Logo />
        <div className="flex items-center justify-between space-x-4 md:block md:w-auto w-full">
          <Button variant={"outline"} size={"sm"} asChild>
            <Link href={"/sign-in"}>Login</Link>
          </Button>
          <Button variant={"default"} size={"sm"} asChild>
            <Link href={"/sign-up"}>Start for Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
