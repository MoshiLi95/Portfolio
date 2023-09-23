import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("name is required."),
  email: yup
    .string()
    .required("email is required.")
    .email("email is not valid."),
  message: yup
    .string()
    .required("message is required")
    .min(10, "message must be greater than 10 characters.")
    .max(1000, "message must be less than 1000 characters."),
  receipt: yup.boolean(),
});
