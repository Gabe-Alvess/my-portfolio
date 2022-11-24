import * as yup from "yup";

export const MessageValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please, type in your first name!")
    .min(3, "Should be minimum 3 characters long!")
    .max(15, "Should be maximum 15 characters long!"),
  lastName: yup
    .string()
    .required("Please, type in your last name!")
    .min(3, "Should be minimum 3 characters long!")
    .max(15, "Should be maximum 15 characters long!"),
  email: yup
    .string()
    .email("Please, type in a valid email address!")
    .required("Please, type in your email address!"),
  subject: yup
    .string()
    .required("Please write the message subject!")
    .min(2, "Should be minimum 2 characters long!"),
  message: yup
    .string()
    .required("Please write a message!")
    .min(2, "Should be minimum 2 characters long!"),
});
