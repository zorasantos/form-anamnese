<script setup lang="ts">
import { ref } from "vue";

const aboutSchoolingAndEducation = ref("");
const likeSchool = ref("");
const incomoda = ref(null);

function onSubmit() {
  console.log(aboutSchoolingAndEducation.value);
  console.log(likeSchool.value);
  console.log(incomoda.value);
}
</script>
<template>
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <p class="pb-5 font-medium">
      Por favor, conte-nos alguma coisa sobre a sua escolaridade e a sua
      educação.
    </p>
    <v-textarea v-model="aboutSchoolingAndEducation" rows="2" />

    <p class="pb-5 font-medium">
      Você gostava de escola? Houve algum sucesso ou dificuldade em particular?
      Quais foram os mais importantes?
    </p>
    <v-textarea v-model="likeSchool" rows="2" />

    <p class="pb-5 font-medium">O quanto isso o incomoda atualmente?</p>
    <v-radio-group v-model="incomoda">
      <v-radio label="Em absoluto" value="absoluto"></v-radio>
      <v-radio label="Um pouco" value="pouco"></v-radio>
      <v-radio label="Moderadamente" value="moderadamente"></v-radio>
      <v-radio label="Muito" value="muito"></v-radio>
      <v-radio label="Não poderia ser pior" value="pior"></v-radio>
    </v-radio-group>

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
