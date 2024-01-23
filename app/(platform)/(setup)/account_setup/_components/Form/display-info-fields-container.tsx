import { useFormStepper } from "@/hooks/Form-stepper/use-form-stepper";
import { formValidationFn } from "@/lib/form-validation";
import { useEffect } from "react";
import FormInput from "./_components/form-input";
import FrontMatter from "./_components/front-matter";

export interface IDisplayInfoFieldsContainerProps {}

export default function DisplayInfoFieldsContainer(
  props: IDisplayInfoFieldsContainerProps,
) {
  const { userInfo, setUserInfo, setErrors, setTouched, errors, touched } =
    useFormStepper((state) => state);

  useEffect(() => {
    setErrors(formValidationFn(userInfo));
  }, [
    userInfo.name,
    userInfo.email,
    userInfo.phone,
    touched.name,
    touched.email,
    touched.phone,
  ]);

  return (
    <>
      <div className="mb-8 space-y-4">
        <FrontMatter
          title="Personal info"
          description="Please provide your name, email address and phone number"
        />
      </div>

      <div className="space-y-4">
        <FormInput
          label="Name"
          name="name"
          required
          value={userInfo.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserInfo({ [e.target.name]: e.target.value })
          }
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTouched({ [e.target.name]: true })
          }
          error={touched.name ? errors.name : ""}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          value={userInfo.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserInfo({ [e.target.name]: e.target.value })
          }
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTouched({ [e.target.name]: true })
          }
          error={touched.email && errors.email ? errors.email : ""}
        />
        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          required
          value={userInfo.phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserInfo({ [e.target.name]: e.target.value })
          }
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTouched({ [e.target.name]: true })
          }
          error={touched.phone && errors.phone ? errors.phone : ""}
        />
      </div>
    </>
  );
}
