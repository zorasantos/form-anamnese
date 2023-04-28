<script setup lang="ts">
import { ref } from "vue";
import { Title } from "~/components";

const difficultFirst = ref("");
const difficultSecond = ref("");
const difficultThird = ref("");
const objective = ref("");

function onSubmit() {
  console.log(difficultFirst.value);
  console.log(difficultSecond.value);
  console.log(difficultThird.value);
  console.log(objective.value);
}
</script>
<template>
  <Title msg="SUAS DIFICULDADES E OBJETIVOS" />
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <p class="pb-5 font-medium">
      Por favor, liste resumidamente as três dificuldades principais que o
      levaram a buscar ajuda.
    </p>
    <v-textarea
      v-model="difficultFirst"
      rows="2"
      label="Primeira dificuldade"
    />
    <v-textarea
      v-model="difficultSecond"
      rows="2"
      label="Segunda dificuldade"
    />
    <v-textarea
      v-model="difficultThird"
      rows="2"
      label="Terceira dificuldade"
    />

    <p class="pb-5 font-medium">
      Por favor, diga o que você deseja alcançar com a terapia.
    </p>
    <v-textarea
      v-model="objective"
      rows="3"
      label="Objetivo que deseja alcançar"
    />

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
