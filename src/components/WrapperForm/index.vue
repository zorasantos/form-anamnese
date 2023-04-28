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
const nextForm = () => {
  indexForm.value = (indexForm.value + 1) % formComponents.length;
};
</script>
<template>
  <component :is="formComponents[indexForm]" />
  <button @click="nextForm">Next Form</button>
</template>
