import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="flex items-center justify-between w-full md:w-max-screen-2xl mx-auto">
        <Logo />
        <div className="flex items-center justify-between space-x-4 md:block md:w-auto w-full">
          <Button variant={"ghost"} size={"sm"}>
            Privacy Policy
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            Ts and Cs
          </Button>
        </div>
      </div>
    </div>
  );
}
