<script setup lang="ts">
import { Title } from "~/components";
import { personalDataSchema } from "../Validators/Schemas";
import { useField, useForm } from "vee-validate";
import { reactive, ref } from "vue";
import { IPersonalDataProps, GenderListProps } from "~/types";
import { createPersonalData } from "~/services";
import { useStepperFormStore } from "~/store";

const store = useStepperFormStore();

const genderList = reactive<GenderListProps>([
  { name: "Masculino", value: "M" },
  { name: "Feminino", value: "F" },
]);

const isLoading = ref<boolean>(false);
const isSuccess = ref<boolean>(false);
const snackProps = reactive({
  snackMessage: "",
  snackColor: "success",
  showSnackbar: false,
});

const toggleLoading = (value: boolean) => {
  isLoading.value = value;
};

const nextForm = () => {
  setTimeout(() => {
    store.nextStepper();
  }, 5000);
};

const toggleSnackbar = (message: string, color: string) => {
  snackProps.snackColor = color;
  snackProps.snackMessage = message;
  snackProps.showSnackbar = !snackProps.showSnackbar;
};

const { handleSubmit, errors, values, resetForm } = useForm<IPersonalDataProps>(
  {
    validationSchema: personalDataSchema,
  },
);

useField("name");
useField("birthday");
useField("gender");
useField("occupation");
useField("maritalStatus");
useField("religion");
useField("zipCode");
useField("street");
useField("number");
useField("addressDetails");
useField("neighborhood");
useField("city");
useField("state");

const onSubmit = handleSubmit(async (values) => {
  toggleLoading(true);

  try {
    await createPersonalData(values);
    toggleSnackbar(
      "Dados salvos com sucesso! Aguarde, você será redirecionado(a) para o próximo formulário.",
      "success",
    );
    isSuccess.value = !isSuccess.value;
    resetForm();
    nextForm();
  } catch (error) {
    console.log("error", error);
    toggleLoading(false);

    toggleSnackbar("Erro ao tentar salvar os dados!", "error");
  } finally {
    toggleLoading(false);
  }
});
</script>
<template>
  <Title msg="SEUS DADOS PESSOAIS" />
  <v-snackbar
    v-model="snackProps.showSnackbar"
    :color="snackProps.snackColor"
    timeout="5000"
    location="top"
  >
    {{ snackProps.snackMessage }}
    <template v-slot:actions>
      <v-btn
        color="white"
        variant="text"
        @click="snackProps.showSnackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <v-text-field
      v-model="values.name"
      autofocus
      id="name"
      name="name"
      label="Nome"
      type="text"
      :error-messages="errors.name"
      placeholder="Insira seu nome completo"
    />

    <v-text-field
      v-model="values.birthday"
      id="birthday"
      name="birthday"
      label="Data de Nascimento"
      type="date"
      :error-messages="errors.birthday"
      placeholder="Insira seu nome completo"
    />
    <v-autocomplete
      v-model="values.gender"
      :items="genderList"
      name="gender"
      label="Sexo"
      item-title="name"
      item-value="value"
      :error-messages="errors.gender"
      placeholder="Selecione"
    />

    <v-text-field
      v-model="values.occupation"
      id="occupation"
      name="occupation"
      label="Ocupação"
      :error-messages="errors.occupation"
      placeholder="Insira sua ocupação"
    />

    <v-text-field
      v-model="values.maritalStatus"
      id="maritalStatus"
      name="maritalStatus"
      label="Estado Civil"
      :error-messages="errors.maritalStatus"
      placeholder="Insira seu estado civil"
    />

    <v-text-field
      v-model="values.religion"
      id="religion"
      name="religion"
      label="Religião"
      :error-messages="errors.religion"
      placeholder="Insira sua religião"
    />

    <h3>Informações de Endereço</h3>

    <div>
      <v-text-field
        v-model="values.zipCode"
        id="zipCode"
        name="zipCode"
        label="CEP"
        :error-messages="errors.zipCode"
        placeholder="Insira o CEP da sua região"
      />

      <v-text-field
        v-model="values.street"
        id="street"
        name="street"
        label="Rua"
        :error-messages="errors.street"
        placeholder="Insira o nome da sua rua"
      />

      <v-text-field
        v-model="values.number"
        id="number"
        name="number"
        label="Número"
        :error-messages="errors.number"
        placeholder="Insira o numero do seu endereço"
      />

      <v-text-field
        v-model="values.addressDetails"
        id="addressDetails"
        name="addressDetails"
        label="Complemento"
        :error-messages="errors.addressDetails"
        placeholder="Insira o complemento do endereço"
      />

      <v-text-field
        v-model="values.neighborhood"
        id="neighborhood"
        name="neighborhood"
        label="Bairro"
        :error-messages="errors.neighborhood"
        placeholder="Insira o nome do seu bairro"
      />

      <v-text-field
        v-model="values.city"
        id="city"
        name="city"
        label="Cidade"
        :error-messages="errors.city"
        placeholder="Insira o nome da sua cidade"
      />

      <v-text-field
        v-model="values.state"
        id="state"
        name="state"
        label="Estado"
        :error-messages="errors.state"
        placeholder="Insira o nome do seu estado"
      />
    </div>

    <v-btn
      :loading="isLoading || isSuccess"
      class="w-full bg-blue-600 text-white"
      type="submit"
      >Salvar</v-btn
    >
  </v-form>
</template>
