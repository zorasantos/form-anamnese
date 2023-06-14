<script setup lang="ts">
import { Title, TextField } from "~/components";
import { personalDataSchema } from "../Validators/Schemas";
import { useField, useForm } from "vee-validate";
import { reactive } from "vue";
import { IPersonalDataProps, GenderListProps } from "~/types";

import { usePersonalDataStore, useStepperFormStore } from "~/store";

const personalDataStore = usePersonalDataStore();
const stepperStore = useStepperFormStore();

const genderList = reactive<GenderListProps>([
  { name: "Masculino", value: "M" },
  { name: "Feminino", value: "F" },
]);

// pode ser um mixin ou vai para store de cada form
const nextForm = () => {
  setTimeout(() => {
    stepperStore.nextStepper();
  }, 5000);
};

const { handleSubmit, errors, values, isSubmitting, resetForm } =
  useForm<IPersonalDataProps>({
    validationSchema: personalDataSchema,
  });

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
  await personalDataStore.personalData(values);
  nextForm();
  resetForm();
});
</script>
<template>
  <Title msg="SEUS DADOS PESSOAIS" />
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <TextField
      v-model="values.name"
      :disabled="isSubmitting || personalDataStore.isSuccess"
      autofocus
      id="name"
      name="name"
      label="Nome"
      type="text"
      :error-messages="errors.name"
      placeholder="Insira seu nome completo"
    />
    <!-- <v-text-field
      v-model="values.name"
      :disabled="isSubmitting || personalDataStore.isSuccess"
      autofocus
      id="name"
      name="name"
      label="Nome"
      type="text"
      :error-messages="errors.name"
      placeholder="Insira seu nome completo"
    /> -->

    <v-text-field
      v-model="values.birthday"
      :disabled="isSubmitting || personalDataStore.isSuccess"
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
      :disabled="isSubmitting || personalDataStore.isSuccess"
      name="gender"
      label="Sexo"
      item-title="name"
      item-value="value"
      :error-messages="errors.gender"
      placeholder="Selecione"
    />

    <v-text-field
      v-model="values.occupation"
      :disabled="isSubmitting || personalDataStore.isSuccess"
      id="occupation"
      name="occupation"
      label="Ocupação"
      :error-messages="errors.occupation"
      placeholder="Insira sua ocupação"
    />

    <v-text-field
      v-model="values.maritalStatus"
      :disabled="isSubmitting || personalDataStore.isSuccess"
      id="maritalStatus"
      name="maritalStatus"
      label="Estado Civil"
      :error-messages="errors.maritalStatus"
      placeholder="Insira seu estado civil"
    />

    <v-text-field
      v-model="values.religion"
      :disabled="isSubmitting || personalDataStore.isSuccess"
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
        :disabled="isSubmitting || personalDataStore.isSuccess"
        id="zipCode"
        name="zipCode"
        label="CEP"
        :error-messages="errors.zipCode"
        placeholder="Insira o CEP da sua região"
      />

      <v-text-field
        v-model="values.street"
        :disabled="isSubmitting || personalDataStore.isSuccess"
        id="street"
        name="street"
        label="Rua"
        :error-messages="errors.street"
        placeholder="Insira o nome da sua rua"
      />

      <v-text-field
        v-model="values.number"
        :disabled="isSubmitting || personalDataStore.isSuccess"
        id="number"
        name="number"
        label="Número"
        :error-messages="errors.number"
        placeholder="Insira o numero do seu endereço"
      />

      <v-text-field
        v-model="values.addressDetails"
        :disabled="isSubmitting || personalDataStore.isSuccess"
        id="addressDetails"
        name="addressDetails"
        label="Complemento"
        :error-messages="errors.addressDetails"
        placeholder="Insira o complemento do endereço"
      />

      <v-text-field
        v-model="values.neighborhood"
        :disabled="isSubmitting || personalDataStore.isSuccess"
        id="neighborhood"
        name="neighborhood"
        label="Bairro"
        :error-messages="errors.neighborhood"
        placeholder="Insira o nome do seu bairro"
      />

      <v-text-field
        v-model="values.city"
        :disabled="isSubmitting || personalDataStore.isSuccess"
        id="city"
        name="city"
        label="Cidade"
        :error-messages="errors.city"
        placeholder="Insira o nome da sua cidade"
      />

      <v-text-field
        v-model="values.state"
        :disabled="isSubmitting || personalDataStore.isSuccess"
        id="state"
        name="state"
        label="Estado"
        :error-messages="errors.state"
        placeholder="Insira o nome do seu estado"
      />
    </div>

    <v-btn
      :loading="isSubmitting || personalDataStore.isSuccess"
      class="w-full bg-blue-600 text-white"
      type="submit"
      >Salvar</v-btn
    >
  </v-form>
</template>
