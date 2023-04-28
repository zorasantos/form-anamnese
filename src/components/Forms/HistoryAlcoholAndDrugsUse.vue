<script setup lang="ts">
import { ref } from "vue";
import { Title } from "~/components";

const isAlcoholCausedProblems = ref(null);
const isYourDrinkingBehavior = ref(null);
const isDrugCausedProblems = ref(null);
const isYourDrugsBehavior = ref(null);
const isHookedMedication = ref(null);
const isDetoxOrRehabilitationProgram = ref(null);
const listDocumentation = ref("");
const hospital = ref("");

function onSubmit() {
  console.log(isAlcoholCausedProblems.value);
  console.log(isYourDrinkingBehavior.value);
  console.log(isDrugCausedProblems.value);
  console.log(isYourDrugsBehavior.value);
}
</script>
<template>
  <Title msg="HISTÓRIA DE USO DE ÁLCOOL E DROGAS" />
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <p class="pb-5 text-lg font-medium">
      O seu uso de álcool já lhe causou algum problema?
    </p>
    <v-radio-group v-model="isAlcoholCausedProblems" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <p class="pb-5 text-lg font-medium">
      Alguém já lhe disse que o álcool lhe causava algum problema ou reclamou
      sobre seu comportamento de beber?
    </p>

    <v-radio-group v-model="isYourDrinkingBehavior" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <p class="pb-5 text-lg font-medium">
      O seu uso de drogas já lhe causou algum problema?
    </p>

    <v-radio-group v-model="isDrugCausedProblems" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <p class="pb-5 text-lg font-medium">
      Alguém já lhe disse que as drogas lhe causavam algum problema ou reclamou
      sobre o seu uso delas?
    </p>

    <v-radio-group v-model="isYourDrugsBehavior" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <p class="pb-5 text-lg font-medium">
      Você já ficou “viciado” em alguma medicação prescrita ou já tomou mais do
      que deveria?
    </p>

    <v-radio-group v-model="isHookedMedication" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <div v-if="isHookedMedication === '0'">
      <p>Por favor liste essas medicações:</p>
      <v-textarea v-model="listDocumentation" rows="2" />
    </div>

    <p class="pb-5 text-lg font-medium">
      Você já foi hospitalizado, entrou em programa de desintoxicação ou esteve
      em algum programa de reabilitação por problemas com alguma droga ou
      álcool?
    </p>

    <v-radio-group v-model="isDetoxOrRehabilitationProgram" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <div v-if="isDetoxOrRehabilitationProgram === '0'">
      <p>Quando e onde você foi hospitalizado?</p>
      <v-textarea v-model="hospital" rows="2" />
    </div>

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
