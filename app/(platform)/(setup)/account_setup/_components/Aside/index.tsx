import { useFormStepper } from "@/hooks/Form-stepper/use-form-stepper";
import { checkStepperValidation } from "@/lib/stepper-validation";
import { cn } from "@/lib/utils";
import Step from "./_components/step";

const stepsArray: Array<{ step: number; title: string }> = [
  { step: 1, title: "Personal info" },
  { step: 2, title: "Bio" },
  { step: 3, title: "Connect socials" },
  { step: 4, title: "Finalize" },
];

export interface IAsideProps {
  className: string;
}

export default function Aside({ className }: IAsideProps) {
  const { currentStep, setCurrentStep, userInfo, errors, bioErrors } =
    useFormStepper((state) => state);
  const stepValidated = checkStepperValidation(userInfo, errors);

  return (
    <aside
      className={cn(
        "bg-blue-300 bg-sidebarMobile bg-origin-border bg-center bg-no-repeat bg-cover md:bg-sidebarDesktop p-8",
        className,
        "aside",
      )}
    >
      <ul
        className={cn(
          "flex justify-center gap-4 md:block md:space-y-8 sm:mb-8 md:mb-0",
          "aside__step-list",
        )}
      >
        {stepsArray.map(({ step, title }, index) => {
          return (
            <li key={index}>
              <Step
                step={step}
                title={title}
                onStepChange={() => {
                  if (stepValidated) {
                    setCurrentStep(index);
                  }
                }}
                className={
                  currentStep === index ? "bg-blue-100 text-blue-400" : ""
                }
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
