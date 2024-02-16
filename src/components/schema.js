import * as yup from "yup";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
export const loginSchema = yup
  .object({
    phoneNumber: yup.string()
    .matches(/^07\d{9}$/,{
      message: "يجب ان يبدأ رقم الهاتف ب'07' ويجب ان يحتوي علي 11 رقم",
    })
    .required(),
    password: yup
      .string()
      .min(6)
      .matches(PWD_REGEX, { message: "قم بادخال كلمة مرور صحيحة" })
      .required("Required"),
  })
  .required()
export const registerSchema = yup
  .object({
    name: yup.string().optional(),
    phoneNumber: yup.string()
    .matches(/^07\d{9}$/,{
      message: "يجب ان يبدأ رقم الهاتف ب'07' ويجب ان يحتوي علي 11 رقم",
    }).required(),
    password: yup
    .string()
    .min(6)
    .matches(PWD_REGEX, { message: "يرجى أنشاء كلمة مرور أقوى" })
    .required("Required"),
    email: yup.string().email("Please enter a valid email").optional(),
    location: yup.string().optional(),

  })
  .required();


  export const updateSchema = yup
  .object({
    name: yup.string().optional(),
    phoneNumber: yup.string()
    .matches(/^07\d{9}$/,{
      message: "يجب ان يبدأ رقم الهاتف ب'07' ويجب ان يحتوي علي 11 رقم",
    }).required(),
    email: yup.string().email("Please enter a valid email").optional(),
    location: yup.string().optional(),

  })
  .required();

