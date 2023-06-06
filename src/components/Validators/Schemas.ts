import * as yup from "yup";

export const personalDataSchema = yup.object({
  name: yup.string().required("O campo nome é obrigatório!"),
  birthday: yup.string().required(),
  gender: yup.string().required(),
  occupation: yup.string().required(),
  maritalStatus: yup.string().required(),
  religion: yup.string().required(),
  zipCode: yup.string().required(),
  street: yup.string().required(),
  number: yup.string().required(),
  addressDetails: yup.string().required(),
  neighborhood: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
});
