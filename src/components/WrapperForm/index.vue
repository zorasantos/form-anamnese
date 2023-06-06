<script setup lang="ts">
import { ref } from "vue";
import {
  PersonalData,
  DifficultiesAndObjectives,
  FamilyAndYou,
  Education,
  Professional,
  ExperienceOfDisturbingEvents,
  CurrentFamily,
  PsychiatricHistory,
  MedicalHistory,
  HistoryAlcoholAndDrugsUse,
  PerspectivesForFuture,
} from "~/components";

const formComponents = [
  PersonalData,
  DifficultiesAndObjectives,
  FamilyAndYou,
  Education,
  Professional,
  ExperienceOfDisturbingEvents,
  CurrentFamily,
  PsychiatricHistory,
  MedicalHistory,
  HistoryAlcoholAndDrugsUse,
  PerspectivesForFuture,
];

const indexForm = ref(0);
// const nextForm = () => {
//   indexForm.value = (indexForm.value + 1) % formComponents.length;
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };
</script>
<template>
  <component :is="formComponents[indexForm]" />
  <!-- <button class="bg-yellow-500 h-14 w-full" @click="nextForm">Next Form</button> -->
</template>
