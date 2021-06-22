import * as yup from "yup";
import LocaleKeys from "../../locales";

const firstName = yup
  .string()
  .required(LocaleKeys.REQUIRED_FIRST_NAME)
  .matches(/^[a-zA-Z\s]{3,30}.*$/, LocaleKeys.INVALID_FIRST_NAME);

const lastName = yup
  .string()
  .required(LocaleKeys.REQUIRED_LAST_NAME)
  .matches(/^[a-zA-Z\s]{3,30}.*$/, LocaleKeys.INVALID_LAST_NAME);

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
  .min(8, LocaleKeys.INVALID_PASSWORD)
  .max(100, LocaleKeys.INVALID_PASSWORD)
  .matches(
    /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[0-9]).*$/,
    LocaleKeys.INVALID_PASSWORD
  );

// const points = yup.string().nullable();

export const loginValidator = yup.object().shape({ email, password });

export const registrationValidator = yup.object().shape({
  firstName,
  lastName,
  email,
  gender,
  picture,
  dateOfBirth,
  password,
});

export const modifyValidator = yup.object().shape({
  firstName,
  lastName,
  gender,
  picture,
  dateOfBirth,
});

export const changePasswordValidator = yup.object().shape({
  oldPassword: password,
  newPassword: password,
});
