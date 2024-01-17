import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const headingFont = localFont({
  src: "../../../../public/fonts/font.woff2",
});

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      {/* <MobileSidebar /> */}
      <div className="flex items-center gap-x-4">
        <div>
          <Link href={"/"}>
            <div className="hover:opacity-75 transition items-center gap-x-2 flex">
              <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
              <p
                className={cn(
                  "text-lg text-neutral-700 pb-1",
                  headingFont.className,
                )}
              >
                Fluencer
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/onboarding"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
      </div>
    </nav>
  );
}
