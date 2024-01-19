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
    <div className="w-full h-screen flex items-center justify-center">
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
        <div className="bg-white p-4 rounded-md">
          <div className="">
            <Aside className="" />
            <Main className="">
              <Form />
            </Main>
            <footer className="">
              <Button variant={"ghost"}>go back</Button>
              <Button className="ml-auto">next step</Button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
