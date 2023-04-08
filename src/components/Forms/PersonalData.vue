<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const birthday = ref("");
const gender = ref("");
const occupation = ref("");
const maritalStatus = ref("");
const religion = ref("");
const zipCode = ref("");
const street = ref("");
const number = ref("");
const addressDetails = ref("");
const neighborhood = ref("");
const city = ref("");
const state = ref("");

const genderList = ref([
  { name: "Masculino", value: "M" },
  { name: "Feminino", value: "F" },
  { name: "Outro", value: "O" },
]);

function onSubmit() {
  // submit to backend or whatever you like
  console.log(name.value, birthday.value, gender.value);
}
</script>
<template>
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <v-text-field
      v-model="name"
      autofocus
      id="name"
      name="name"
      label="Nome"
      type="text"
      placeholder="Insira seu nome completo"
    />

    <v-text-field
      v-model="birthday"
      id="birthday"
      name="birthday"
      label="Data de Nascimento"
      type="date"
      placeholder="Insira seu nome completo"
    />
    <v-autocomplete
      v-model="gender"
      :items="genderList"
      name="gender"
      label="Sexo"
      item-title="name"
      item-value="value"
      placeholder="Selecione"
    />

    <v-text-field
      v-model="occupation"
      id="occupation"
      name="occupation"
      label="Ocupação"
      placeholder="Insira sua ocupação"
    />

    <v-text-field
      v-model="maritalStatus"
      id="maritalStatus"
      name="maritalStatus"
      label="Estado Civil"
      placeholder="Insira seu estado civil"
    />

    <v-text-field
      v-model="religion"
      id="religion"
      name="religion"
      label="Religião"
      placeholder="Insira sua religião"
    />

    <h3>Informações de Endereço</h3>

    <div>
      <v-text-field
        v-model="zipCode"
        id="zipCode"
        name="zipCode"
        label="CEP"
        placeholder="Insira o CEP da sua região"
      />

      <v-text-field
        v-model="street"
        id="street"
        name="street"
        label="Rua"
        placeholder="Insira o nome da sua rua"
      />

      <v-text-field
        v-model="number"
        id="number"
        name="number"
        label="Número"
        placeholder="Insira o numero do seu endereço"
      />

      <v-text-field
        v-model="addressDetails"
        id="addressDetails"
        name="addressDetails"
        label="Complemento"
        placeholder="Insira o um complemento"
      />

      <v-text-field
        v-model="neighborhood"
        id="neighborhood"
        name="neighborhood"
        label="Bairro"
        placeholder="Insira o nome do seu bairro"
      />

      <v-text-field
        v-model="city"
        id="city"
        name="city"
        label="Cidade"
        placeholder="Insira o nome da sua cidade"
      />

      <v-text-field
        v-model="state"
        id="state"
        name="state"
        label="Estado"
        placeholder="Insira o nome do seu estado"
      />
    </div>

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
