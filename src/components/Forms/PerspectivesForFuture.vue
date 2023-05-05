<script setup lang="ts">
import { ref } from "vue";
import { Title } from "~/components";

const mentionParticularSatisfaction = ref("");
const plansHopesAndExpectations = ref("");
const feltFillingQuiz = ref("");

function onSubmit() {
  console.log(mentionParticularSatisfaction.value);
  console.log(plansHopesAndExpectations.value);
  console.log(feltFillingQuiz.value);
}
</script>
<template>
  <Title msg="SUAS PERSPECTIVAS QUANTO AO FUTURO" />
  <!-- Todos os campos são obrigatórios -->
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <p class="pb-5 text-lg font-medium">
      Por favor, mencione alguma satisfação particular que você obtém com a sua
      família, com sua vida laboral ou com outras áreas que são importantes para
      você.
    </p>

    <v-textarea v-model="mentionParticularSatisfaction" rows="4" />

    <p class="pb-5 text-lg font-medium">
      Você poderia nos contar alguma coisa sobre seus planos, suas esperanças e
      suas expectativas para o futuro?
    </p>

    <v-textarea v-model="plansHopesAndExpectations" rows="4" />

    <p class="pb-5 text-lg font-medium">
      Por favor, poderia nos contar como se sentiu preenchendo este
      questionário?
    </p>

    <v-textarea v-model="feltFillingQuiz" rows="4" />

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
