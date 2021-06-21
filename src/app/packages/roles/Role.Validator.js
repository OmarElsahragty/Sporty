import * as yup from "yup";

export const roleValidator = yup.object().shape({
  englishName: yup.string().required(),
  arabicName: yup.string().required(),
});
