import Image from "next/image";
import FrontMatter from "../Form/_components/front-matter";

export interface IFinalizeProps {}

export default function Finalize(props: IFinalizeProps) {
  return (
    <div className="h-full grid gap-8 place-items-center">
      <Image
        src={"./icon-thank-you.svg"}
        width={60}
        height={60}
        alt="icon-thank-you svg"
      />
      <FrontMatter
        title="Account setup Success!"
        description="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at reckon.ke@gmail.com"
        className="text-center space-y-2 py-4"
      />
    </div>
  );
}
