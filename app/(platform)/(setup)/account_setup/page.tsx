"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { startAccountSetup } from "@/hooks/start-account-setup";
import { useUser } from "@clerk/nextjs";
import { User } from "lucide-react";
import Aside from "./_components/Aside";
import Form from "./_components/Form";
import Main from "./_components/Main";

export interface IAccountSetupPageProps {}

export default function AccountSetupPage(props: IAccountSetupPageProps) {
  const { user } = useUser();

  const { isStarted, onOpen, onClose } = startAccountSetup();

  const TOTAL_STEPS = 4;

  return (
    <div className="w-full h-full flex items-center justify-center">
      {!isStarted && (
        <div className="py-12 px-12 md:px-44 bg-white border border-neutral-200 shadow-md rounded-md">
          <div className="flex flex-col items-center gap-12">
            <Avatar>
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback>
                <User className="w-6 h-6" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center gap-10">
              <p className="text-sm text-neutral-800">
                You have no mediakits yet
              </p>
              <Button onClick={() => onOpen()}>
                Create your first mediakit
              </Button>
            </div>
          </div>
        </div>
      )}
      {isStarted && (
        <div className="grid h-full md:place-content-center p-4">
          <div className="grid grid-cols-container-sm md:grid-cols-container-md md:rounded-2xl md:bg-white md:py-[1rem] md:w-[720px] lg:w-[1024px] md:h-[540px] lg:h-[640px] md:shadow-2xl">
            <Aside className="col-span-full row-start-1 row-end-3 md:rounded-xl md:col-start-2 md:col-span-1 rounded-t-xl" />
            <Main className="p-6 bg-white col-span-full row-start-3 row-end-10 self-start md:px-12 lg:px-24 md:row-start-1 md:row-end-3 md:col-start-3 md:col-span-1 md:rounded-none shadow-2xl md:shadow-none">
              <Form />
            </Main>
            <footer className="flex justify-between bg-white col-span-full self-end p-[1rem] md:col-start-3 md:col-span-1 md:row-start-2 md:px-24 rounded-b-xl md:rounded-none">
              <Button variant={"ghost"}>go back</Button>
              <Button className="ml-auto">next step</Button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
