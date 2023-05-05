<script setup lang="ts">
import { ref } from "vue";
import { Title } from "~/components";

const occupation = ref("");
const aboutYourOccupation = ref("");
const difficultiesInOccupation = ref("");

function onSubmit() {
  console.log(occupation.value);
  console.log(aboutYourOccupation.value);
  console.log(difficultiesInOccupation.value);
}
</script>
<template>
  <Title msg="SUA HISTÓRIA LABORAL/PROFISSIONAL" />
  <!-- Todos os campos são obrigatórios -->
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <p class="pb-5 font-medium">
      Que atividade ou papel principal você desempenha atualmente?
    </p>

    <v-text-field v-model="occupation" />

    <p class="pb-5 font-medium">
      Por favor, conte-nos alguma coisa sobre a sua vida laboral passada,
      incluindo os empregos e os cursos / formações / treinamentos que realizou.
    </p>
    <v-textarea v-model="aboutYourOccupation" rows="2" />

    <p class="pb-5 font-medium">
      Houve dificuldades particulares? Quais foram as mais importantes?
    </p>

    <v-textarea v-model="difficultiesInOccupation" rows="2" />

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
