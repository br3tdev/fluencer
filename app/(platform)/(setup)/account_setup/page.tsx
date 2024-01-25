"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useFormStepper } from "@/hooks/Form-stepper/use-form-stepper";
import { startAccountSetup } from "@/hooks/start-account-setup";
import { checkStepperValidation } from "@/lib/stepper-validation";
import { useUser } from "@clerk/nextjs";
import { User } from "lucide-react";
import Aside from "./_components/Aside";
import Finalize from "./_components/Finalize";
import Form from "./_components/Form";
import Main from "./_components/Main";

export interface IAccountSetupPageProps {}

export default function AccountSetupPage(props: IAccountSetupPageProps) {
  const { user } = useUser();

  const { isStarted, onOpen, onClose } = startAccountSetup();

  const {
    userInfo,
    userBio,
    errors,
    bioErrors,
    currentStep,
    incrementCurrentStep,
    decrementCurrentStep,
    triggerAllUntouched,
  } = useFormStepper((state) => state);

  const TOTAL_STEPS = 4;
  const isLastStep = currentStep === TOTAL_STEPS - 1;
  const stepValidated = checkStepperValidation(userInfo, errors);
  const bioValidated = checkStepperValidation(userBio, bioErrors);

  const handleForwardClick = () => {
    if (!isLastStep && bioValidated) {
      console.log(bioErrors.bio);
      console.log(bioValidated);
      incrementCurrentStep();
    }
    if (!isLastStep && stepValidated) incrementCurrentStep();
    else triggerAllUntouched();
    if (isLastStep) {
      // set setup complete confirmation
      alert(
        JSON.stringify(
          {
            user_name: userInfo.name,
            user_email: userInfo.email,
            user_phone: userInfo.phone,
            user_bio: userBio.bio,
            user_tags: userBio.tags,
          },
          null,
          2,
        ),
      );
    }
  };

  return (
    <div className="">
      {!isStarted && (
        <div className="h-screen flex justify-center items-center">
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
        </div>
      )}
      {isStarted && (
        <div className="h-full grid md:place-content-center">
          <div className="grid grid-cols-container-sm md:grid-cols-container-md md:rounded-2xl md:bg-white md:py-[1rem] md:w-[720px] lg:w-[1024px] md:h-[540px] lg:h-[640px] md:shadow-2xl">
            <Aside className="col-span-full row-start-1 row-end-6 md:rounded-xl md:col-start-2 md:col-span-1" />
            <Main className="py-12 px-6 sm:mt-4 bg-white col-start-2 col-span-1 row-start-5 row-end-10 self-start rounded-lg shadow-2xl md:shadow-none md:px-24 md:row-start-1 md:row-end-3 md:col-start-3 md:col-span-1 md:rounded-none">
              {isLastStep ? <Finalize /> : <Form />}
            </Main>
            <footer className="flex justify-between bg-white col-span-full self-end p-[1rem] md:col-start-3 md:col-span-1 md:row-start-4 md:px-24">
              {currentStep > 0 && (
                <Button
                  variant={"ghost"}
                  onClick={() => decrementCurrentStep()}
                >
                  go back
                </Button>
              )}
              <Button
                className="ml-auto"
                variant={isLastStep ? "terminal" : "default"}
                onClick={handleForwardClick}
              >
                next step
              </Button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
