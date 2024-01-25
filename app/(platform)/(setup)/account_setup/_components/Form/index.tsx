import { useFormStepper } from "@/hooks/Form-stepper/use-form-stepper";
import BioAndTagsFieldsContainer from "./bio-and-tags-fields-container";
import ConnectSocialsContainer from "./connect-socials-container";
import DisplayInfoFieldsContainer from "./display-info-fields-container";

export interface IFormProps {
  className?: string;
}

export default function Form({ className }: IFormProps) {
  const { currentStep } = useFormStepper((state) => state);
  return (
    <>
      <form className={className}>{switchFormStepper(currentStep)}</form>
    </>
  );
}

const switchFormStepper = (step: number) => {
  switch (step) {
    case 0:
      return <DisplayInfoFieldsContainer />;
    case 1:
      return <BioAndTagsFieldsContainer />;
    case 2:
      return <ConnectSocialsContainer />;
    default:
      return;
  }
};
