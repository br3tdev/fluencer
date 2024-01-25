import Image from "next/image";
import FrontMatter from "./_components/front-matter";

const socials = ["instagram", "facebook", "tiktok", "X", "youtube", "twitch"];

export interface IConnectSocialsContainerProps {}

export default function ConnectSocialsContainer(
  props: IConnectSocialsContainerProps,
) {
  return (
    <>
      <div className="mb-8 space-y-4">
        <FrontMatter
          title="Connect socials"
          description="Please link social media accounts that will be displayed on your dashboard"
        />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-6 md:gap-10">
        {socials.map((social, _i) => (
          <div key={_i} className="p-6 rounded-md shadow-lg col-span-1 mx-auto">
            <Image
              src={`./socials-svg/${social}.svg`}
              width={30}
              height={30}
              alt={`${social}.svg`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
