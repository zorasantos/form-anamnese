<script setup lang="ts">
import { Title } from "~/components";
import { ref } from "vue";

const formData = ref({
  name: "",
  birthday: "",
  gender: "",
  occupation: "",
  maritalStatus: "",
  religion: "",
  zipCode: "",
  street: "",
  number: "",
  addressDetails: "",
  neighborhood: "",
  city: "",
  state: "",
});

const genderList = ref([
  { name: "Masculino", value: "M" },
  { name: "Feminino", value: "F" },
  { name: "Outro", value: "O" },
]);

function onSubmit() {
  // submit to backend or whatever you like
  console.log(
    formData.value.name,
    formData.value.birthday,
    formData.value.gender,
  );
}
</script>
<template>
  <Title msg="SEUS DADOS PESSOAIS" />
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <v-text-field
      v-model="formData.name"
      autofocus
      id="name"
      name="name"
      label="Nome"
      type="text"
      placeholder="Insira seu nome completo"
    />

    <v-text-field
      v-model="formData.birthday"
      id="birthday"
      name="birthday"
      label="Data de Nascimento"
      type="date"
      placeholder="Insira seu nome completo"
    />
    <v-autocomplete
      v-model="formData.gender"
      :items="genderList"
      name="gender"
      label="Sexo"
      item-title="name"
      item-value="value"
      placeholder="Selecione"
    />

    <v-text-field
      v-model="formData.occupation"
      id="occupation"
      name="occupation"
      label="Ocupação"
      placeholder="Insira sua ocupação"
    />

    <v-text-field
      v-model="formData.maritalStatus"
      id="maritalStatus"
      name="maritalStatus"
      label="Estado Civil"
      placeholder="Insira seu estado civil"
    />

    <v-text-field
      v-model="formData.religion"
      id="religion"
      name="religion"
      label="Religião"
      placeholder="Insira sua religião"
    />

    <h3>Informações de Endereço</h3>

    <div>
      <v-text-field
        v-model="formData.zipCode"
        id="zipCode"
        name="zipCode"
        label="CEP"
        placeholder="Insira o CEP da sua região"
      />

      <v-text-field
        v-model="formData.street"
        id="street"
        name="street"
        label="Rua"
        placeholder="Insira o nome da sua rua"
      />

      <v-text-field
        v-model="formData.number"
        id="number"
        name="number"
        label="Número"
        placeholder="Insira o numero do seu endereço"
      />

      <v-text-field
        v-model="formData.addressDetails"
        id="addressDetails"
        name="addressDetails"
        label="Complemento"
        placeholder="Insira o um complemento"
      />

      <v-text-field
        v-model="formData.neighborhood"
        id="neighborhood"
        name="neighborhood"
        label="Bairro"
        placeholder="Insira o nome do seu bairro"
      />

      <v-text-field
        v-model="formData.city"
        id="city"
        name="city"
        label="Cidade"
        placeholder="Insira o nome da sua cidade"
      />

      <v-text-field
        v-model="formData.state"
        id="state"
        name="state"
        label="Estado"
        placeholder="Insira o nome do seu estado"
      />
    </div>

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
