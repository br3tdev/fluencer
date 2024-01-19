import { useFormStepper } from "@/hooks/Form-stepper/use-form-stepper";
import formValidationFn from "@/lib/form-validation";
import { UserInfoType } from "@/types/typings";
import { useEffect } from "react";
import FormInput from "./_components/form-input";

export interface IDisplayInfoFieldsContainerProps {}

const validationFn = (state: UserInfoType) => {
  const errors: Partial<UserInfoType> = {};
  const emailRegex =
    /^[\w-]+(\.[\w-]+)*@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*\.[a-zA-Z]{1,}$/;
  const phoneephoneRegex = /^\+\d{9,13}$/;

  if (!state.name) errors.name = "This field is required";

  if (!state.email) errors.email = "This field is required";
  if (state.email && !emailRegex.test(state.email))
    errors.email = "invalid email";

  if (!state.phone) errors.phone = "This field is required";
  if (state.phone && !phoneephoneRegex.test(state.phone))
    errors.phone = "invalid phone number";

  return errors;
};

export default function DisplayInfoFieldsContainer(
  props: IDisplayInfoFieldsContainerProps,
) {
  const { userInfo, setUserInfo, setErrors, setTouched, errors, touched } =
    useFormStepper((state) => state);

  useEffect(() => {
    setErrors(formValidationFn(userInfo));
    // setErrors(validationFn(userInfo));
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
        <h1 className="text-4xl text-neutral-700 font-bold">Personal info</h1>
        <p className="text-muted-foreground">
          Please provide your name, email address and phone number
        </p>
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
