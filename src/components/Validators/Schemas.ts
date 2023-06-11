import * as yup from "yup";

export const personalDataSchema = yup.object({
  name: yup.string().required("O campo nome é obrigatório!"),
  birthday: yup.string().required("O campo data de nascimento é obrigatório!"),
  gender: yup.string().required("O campo sexo é obrigatório!"),
  occupation: yup.string().required("O campo ocupação nome é obrigatório!"),
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

export const difficultSchema = yup.object({
  difficultFirst: yup
    .string()
    .required("O campo Primeira dificuldade é obrigatório!"),
  difficultSecond: yup.string(),
  difficultThird: yup.string(),
  objective: yup.string(),
});

export const loginSchema = yup.object({
  name: yup.string().required("O campo nome é obrigatório!"),
  password: yup.string().required("O campo token é obrigatório!"),
  term: yup.lazy(() => {
    const value = localStorage.getItem("isTermsOfUse");
    const isTermsOfUse = JSON.parse(value as string);

    if (isTermsOfUse) {
      return yup
        .boolean()
        .test(
          "is-true",
          "O campo termo é obrigatório!",
          (value) => value === true,
        );
    } else {
      return yup.boolean();
    }
  }),
});
