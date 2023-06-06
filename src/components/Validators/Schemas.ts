import * as yup from "yup";

export const personalDataSchema = yup.object({
  name: yup.string().required("O campo nome é obrigatório!"),
  birthday: yup.string().required("O campo data de nascimento é obrigatório!"),
  gender: yup.string().required("O campo sexo é obrigatório!"),
  occupation: yup.string().required("O ocupação nome é obrigatório!"),
  maritalStatus: yup.string().required("O campo estado civil é obrigatório!"),
  religion: yup.string().required("O campo religião é obrigatório!"),
  zipCode: yup.string().required("O campo CEP é obrigatório!"),
  street: yup.string().required("O campo rua é obrigatório!"),
  number: yup.string().required("O campo número é obrigatório!"),
  addressDetails: yup.string(),
  neighborhood: yup.string().required("O campo bairro é obrigatório!"),
  city: yup.string().required("O campo cidade é obrigatório!"),
  state: yup.string().required("O campo estado é obrigatório!"),
});
