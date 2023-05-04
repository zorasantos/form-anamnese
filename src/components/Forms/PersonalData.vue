<script setup lang="ts">
import { Title } from "~/components";
import { personalDataSchema } from "../Validators/Schemas";
import { FormDataProps, GenderListProps } from "./types";
import { useField, useForm } from "vee-validate";
import { reactive } from "vue";

const genderList = reactive<GenderListProps>([
  { name: "Masculino", value: "M" },
  { name: "Feminino", value: "F" },
  { name: "Outro", value: "O" },
]);

const { handleSubmit, errors, values } = useForm<FormDataProps>({
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

const onSubmit = handleSubmit((values) => {
  console.log(values);
  alert(JSON.stringify(values, null, 2));
});
</script>
<template>
  <Title msg="SEUS DADOS PESSOAIS" />
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
        placeholder="Insira o um complemento"
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

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
