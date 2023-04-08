<script setup lang="ts">
import { ref } from "vue";

const placeOfBirth = ref("");
const fatherAge = ref("");
const fatherDeathAge = ref("");
const ageWhenFatherDied = ref("");
const fatherOccupation = ref("");
const fatherDescription = ref("");
const motherAge = ref("");
const motherDeathAge = ref("");
const ageWhenMotherDied = ref("");
const motherOccupation = ref("");
const motherDescription = ref("");
const relationshipProblems = ref("");

function onSubmit() {
  console.log(placeOfBirth.value, fatherAge.value, fatherDeathAge.value);
}
</script>
<template>
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <v-text-field
      v-model="placeOfBirth"
      label="Qual seu local de nascimento?"
    />

    <v-divider />
    <p class="pb-5 font-medium">
      Por favor, dê alguns detalhes sobre seu PAI (se souber)
    </p>
    <fieldset legend="Detalhes sobre seu pai">
      <v-text-field
        v-model="fatherAge"
        type="number"
        label="Qual a idade dele atualmente?"
      />
      <v-text-field
        v-model="fatherDeathAge"
        type="number"
        label="Se ele já não está vivo, com que idade morreu?"
      />
      <v-text-field
        v-model="ageWhenFatherDied"
        type="number"
        label="Que idade você tinha quando ele morreu?"
      />
      <v-text-field
        v-model="fatherOccupation"
        label="Qual é, ou era, a ocupação dele?"
      />
      <v-textarea
        v-model="fatherDescription"
        label="Por favor, conte alguma coisa sobre seu pai, seu caráter ou personalidade, e o seu relacionamento com ele."
      />
    </fieldset>

    <v-divider />
    <p class="pb-5 font-medium">
      Por favor, dê alguns detalhes sobre sua MÃE (se souber)
    </p>
    <fieldset legend="Detalhes sobre sua mãe">
      <v-text-field
        v-model="motherAge"
        type="number"
        label="Qual a idade dela atualmente?"
      />
      <v-text-field
        v-model="motherDeathAge"
        type="number"
        label="Se ela já não está viva, com que idade morreu?"
      />
      <v-text-field
        v-model="ageWhenMotherDied"
        type="number"
        label="Que idade você tinha quando ela morreu?"
      />
      <v-text-field
        v-model="motherOccupation"
        label="Qual é, ou era, a ocupação dela?"
      />
      <v-textarea
        v-model="motherDescription"
        label="Por favor, conte alguma coisa sobre sua mãe, seu caráter ou personalidade, e o seu relacionamento com ela."
      />
    </fieldset>

    <v-divider />

    <v-textarea
      v-model="relationshipProblems"
      label="Se existiram/existem problemas no seu relacionamento com seus pais, por favor, descreva o(s) mais importante(s)."
    />

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
