import { UserInfoType } from "@/types/typings";
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

export default function formValidationFn(
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
