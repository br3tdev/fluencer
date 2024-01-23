import { UserBioType, UserInfoType } from "@/types/typings";
import { ZodType, z } from "zod";

const formSchema: ZodType<UserInfoType> = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, { message: "Name must contain at least 3 character(s)" }),
  email: z.string().email(),
  phone: z
    .string()
    .min(10, { message: "Phone number is to short" })
    .max(13, { message: "Phone number is too long" }),
});

const bioSchema: ZodType<UserBioType> = z.object({
  bio: z
    .string()
    .min(160, {
      message: "Min 160 characters.",
    })
    .max(1000, {
      message: "Max 1000 characters.",
    }),
});

export function formValidationFn(
  data: Partial<UserInfoType>,
): Partial<UserInfoType> {
  const result = formSchema.safeParse(data);

  if (result.success) {
    return {};
  } else {
    const errors: Partial<UserInfoType> = {};
    result.error.errors.forEach((err) => {
      errors[err.path[0] as keyof UserInfoType] = err.message;
    });
    return errors;
  }
}

export function bioValidationFn(
  data: Partial<UserBioType>,
): Partial<UserBioType> {
  const result = bioSchema.safeParse(data);

  if (result.success) {
    return {};
  } else {
    const errors: Partial<UserBioType> = {};
    result.error.errors.forEach((err) => {
      errors[err.path[0] as keyof UserBioType] = err.message;
    });
    return errors;
  }
}

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
