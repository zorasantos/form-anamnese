<script setup lang="ts">
import { watch } from "vue";
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
import { useStepperFormStore } from "~/store";

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

const store = useStepperFormStore();

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

watch(() => store.step, scrollToTop);
</script>
<template>
  <v-window v-model="store.step">
    <v-window-item :value="store.step">
      <component :is="formComponents[store.step]" />
    </v-window-item>
  </v-window>
</template>
