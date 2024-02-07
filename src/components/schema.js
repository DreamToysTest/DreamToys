import * as yup from "yup";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
export const loginSchema = yup
  .object({
    phoneNumber: yup.string().required(),
    password: yup
      .string()
      .min(6)
      // .matches(PWD_REGEX, { message: "Please create a stronger password" })
      .required("Required"),
  })
  .required()
export const registerSchema = yup
  .object({
    name: yup.string().optional(),
    phoneNumber: yup.string().required(),
    password: yup
    .string()
    .min(6)
    .matches(PWD_REGEX, { message: "Please create a stronger password" })
    .required("Required"),
    email: yup.string().email("Please enter a valid email").optional(),
    location: yup.string().optional(),

  })
  .required();


