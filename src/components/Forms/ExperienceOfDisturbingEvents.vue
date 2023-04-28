<script setup lang="ts">
import { ref } from "vue";
import { Title } from "~/components";

const experienceOfDisturbing = ref("");
const isExperienceOfDisturbing = ref("");
const isFlashbacks = ref(null);
const isNotFlashbacks = ref(null);
const isPhysicalAbuseWhenChild = ref(null);
const isPhysicalAbuseWhenAdult = ref(null);
const isExperiencedSexualViolence = ref(null);
const isExpEmotionalOrVerbalAbuseWhenChild = ref(null);
const isExpEmotionalOrVerbalAbuseWhenAdult = ref(null);
const traumaticEvents = ref([{ description: "", date: "", age: "" }]);

const addMember = () => {
  traumaticEvents.value.push({ description: "", date: "", age: "" });
};

const removeMember = (index: number) => {
  traumaticEvents.value.splice(index, 1);
};

function onSubmit() {
  console.log("traumaticEvents", traumaticEvents.value.length);
  console.log(experienceOfDisturbing.value);
  console.log(isExperienceOfDisturbing.value);
  console.log(isFlashbacks.value);
  console.log(isPhysicalAbuseWhenChild.value);
}
</script>
<template>
  <Title msg="EXPERIÊNCIA DE ACONTECIMENTOS PERTURBADORES" />
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <v-alert type="error">Validar as condições de algumas respostas</v-alert>
    <p class="pb-5 font-medium">
      Às vezes acontecem coisas às pessoas que são extremamente perturbadoras –
      coisas como estar em uma situação de ameaça à vida, como um desastre
      importante, um acidente muito grave ou um incêndio; ser agredido
      fisicamente ou estuprado; ou ver uma pessoa ser morta, muito ferida ou
      ficar sabendo de algo terrível que aconteceu a alguém próximo a você. Em
      algum momento durante sua vida, algum deste tipo de coisas aconteceu com
      você?
    </p>

    <v-radio-group v-model="isExperienceOfDisturbing" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <div v-if="isExperienceOfDisturbing === '0'">
      <v-row v-for="(events, index) in traumaticEvents" :key="index">
        <v-col cols="12" md="7">
          <v-textarea
            v-model="events.description"
            rows="2"
            label="Descrição breve"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="events.date" label="Data(mês/ano)" />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field type="number" v-model="events.age" label="Idade" />
        </v-col>
        <v-col>
          <v-btn icon color="error" @click="removeMember(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="addMember" color="primary"
            >Adicionar novo evento</v-btn
          >
        </v-col>
      </v-row>
    </div>

    <p class="pb-5 font-medium">
      Caso você tenha listado algum evento: Às vezes as coisas ficam voltando em
      pesadelos, flashbacks (lembranças indesejadas) ou pensamentos dos quais
      você não consegue se livrar. Isso já aconteceu com você?
    </p>

    <v-radio-group v-model="isFlashbacks" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <p class="pb-5 font-medium">
      Em caso negativo: E quanto a ficar muito perturbado quando você esteve em
      uma situação que lhe fez lembrar de uma dessas coisas terríveis?
    </p>

    <v-radio-group v-model="isNotFlashbacks" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <p class="pb-5 font-medium">
      Você alguma vez passou pela experiência de abuso físico quando criança?
    </p>

    <v-radio-group v-model="isPhysicalAbuseWhenChild" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
      <v-radio label="Não tenho certeza" value="2" />
    </v-radio-group>

    <p class="pb-5 font-medium">
      Você alguma vez passou pela experiência de abuso físico quando adulto?
    </p>

    <v-radio-group v-model="isPhysicalAbuseWhenAdult" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
      <v-radio label="Não tenho certeza" value="2" />
    </v-radio-group>

    <p class="pb-5 font-medium">
      Você alguma vez passou pela experiência de violência sexual, incluindo
      encontros amorosos ou conjugais?
    </p>

    <v-radio-group v-model="isExperiencedSexualViolence" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
      <v-radio label="Não tenho certeza" value="2" />
    </v-radio-group>

    <p class="pb-5 font-medium">
      Você alguma vez passou pela experiência de abuso emocional ou verbal
      quando criança?
    </p>

    <v-radio-group v-model="isExpEmotionalOrVerbalAbuseWhenChild" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
      <v-radio label="Não tenho certeza" value="2" />
    </v-radio-group>

    <p class="pb-5 font-medium">
      Você alguma vez passou pela experiência de abuso emocional ou verbal
      quando adulto?
    </p>

    <v-radio-group v-model="isExpEmotionalOrVerbalAbuseWhenAdult" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
      <v-radio label="Não tenho certeza" value="2" />
    </v-radio-group>

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
