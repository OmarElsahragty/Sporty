import * as yup from "yup";
import LocaleKeys from "../../locales";

const name = yup
  .string()
  .required(LocaleKeys.REQUIRED_NAME)
  .matches(/^[a-zA-Z\s]{3,30}.*$/, LocaleKeys.INVALID_NAME);

const gender = yup
  .mixed()
  .oneOf(["M", "F"], LocaleKeys.INVALID_GENDER)
  .required(LocaleKeys.REQUIRED_GENDER);

const picture = yup.string().nullable();

const dateOfBirth = yup.string().required(LocaleKeys.REQUIRED_DATE_OF_BIRTH);

const email = yup
  .string()
  .email(LocaleKeys.INVALID_EMAIL)
  .required(LocaleKeys.REQUIRED_EMAIL);

const password = yup
  .string()
  .required(LocaleKeys.REQUIRED_PASSWORD)
  .matches(
    /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[0-9])([A-Za-z0-9]{8,50}$)$/,
    LocaleKeys.INVALID_PASSWORD
  );

// const points = yup.string().nullable();

export const loginValidator = yup.object().shape({ email, password });

export const registrationValidator = yup.object().shape({
  name,
  email,
  gender,
  picture,
  dateOfBirth,
  password,
});

export const modifyValidator = yup.object().shape({
  name,
  gender,
  picture,
  dateOfBirth,
});

export const changePasswordValidator = yup.object().shape({
  oldPassword: password,
  newPassword: password,
});
