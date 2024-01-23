import { useFormStepper } from "@/hooks/Form-stepper/use-form-stepper";
import BioAndTagsFieldsContainer from "./bio-and-tags-fields-container";
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
      return <BioAndTagsFieldsContainer />;
    case 1:
      return <DisplayInfoFieldsContainer />;
    default:
      return;
  }
};
