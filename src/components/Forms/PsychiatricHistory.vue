<script setup lang="ts">
import { ref } from "vue";
import { Title } from "~/components";

const isHospitalized = ref(null);
const isHospitalizedAfterAttemptedSuicide = ref(null);
const manyTimesHospitalized = ref("");
const ageDatingPartner = ref("");
const isReceivedOutpatientTreatment = ref(null);
const isHelpfulTreatment = ref(null);
const isMedicationPsychiatric = ref(null);
const isAttemptedSuicide = ref(null);
const manyTimesAttemptedSuicide = ref("");
const hospitalization = ref([{ data: "", name: "", reason: "", helpful: "" }]);
const treatment = ref([
  { data: "", hospital: "", reasonTreatment: "", helpful: "" },
]);

const medicationTreatment = ref([
  {
    medication: "",
    dosage: "",
    frequency: "",

    doctor: "",
    specialty: "",
  },
]);

const aboutAttemptedSuicide = ref([
  { data: "", method: "", isHospitalized: "" },
]);

const addMember = () => {
  hospitalization.value.push({
    data: "",
    name: "",
    reason: "",
    helpful: "",
  });
};

const removeMember = (index: number) => {
  hospitalization.value.splice(index, 1);
};

const addTreatment = () => {
  treatment.value.push({
    data: "",
    hospital: "",
    reasonTreatment: "",
    helpful: "",
  });
};

const removeTreatment = (index: number) => {
  treatment.value.splice(index, 1);
};

const addMedication = () => {
  medicationTreatment.value.push({
    medication: "",
    dosage: "",
    frequency: "",
    doctor: "",
    specialty: "",
  });
};

const removeMedication = (index: number) => {
  medicationTreatment.value.splice(index, 1);
};

const addAttemptedSuicide = () => {
  aboutAttemptedSuicide.value.push({
    data: "",
    method: "",
    isHospitalized: "",
  });
};

const removeAttemptedSuicide = (index: number) => {
  aboutAttemptedSuicide.value.splice(index, 1);
};

function onSubmit() {
  console.log(isHospitalized.value);
  console.log(manyTimesHospitalized.value);
  console.log(ageDatingPartner.value);
  console.log(isHelpfulTreatment.value);
}
</script>
<template>
  <Title msg="SUA HISTÓRIA PSIQUIÁTRICA" />
  <!-- Todos os campos são obrigatórios -->
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <p class="pb-5 text-lg font-medium">
      Você já foi hospitalizado por algum motivo emocional ou psiquiátrico?
    </p>
    <v-radio-group v-model="isHospitalized" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <div v-if="isHospitalized === '0'">
      <v-text-field
        v-model="manyTimesHospitalized"
        id="timesHospitalized"
        name="timesHospitalized"
        label="Quantas vezes você foi hospitalizado?"
        type="number"
      />

      <p class="pb-5 text-lg font-medium">Preencha o seguinte:</p>

      <v-row v-for="(item, index) in hospitalization" :key="index">
        <v-col cols="12" md="6">
          <v-text-field v-model="item.name" label="Nome do hospital" />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="item.reason"
            label="Razão para hospitalização"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field type="date" v-model="item.data" rows="2" label="Data" />
        </v-col>
        <v-col cols="12" md="4">
          <p>Foi útil?</p>
          <v-radio-group v-model="isHospitalized" inline>
            <v-radio label="Sim" value="0" />
            <v-radio label="Não" value="1" />
          </v-radio-group>
        </v-col>

        <v-col>
          <v-btn icon color="error" @click="removeMember(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="addMember" color="primary">Adicionar</v-btn>
        </v-col>
      </v-row>
    </div>

    <p class="pb-5 text-lg font-medium">
      Você já recebeu tratamento psiquiátrico ou psicológico ambulatorial?
    </p>

    <v-radio-group v-model="isReceivedOutpatientTreatment" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <div v-if="isReceivedOutpatientTreatment === '0'">
      <p class="pb-5 text-lg font-medium">Preencha o seguinte:</p>

      <v-row v-for="(item, index) in treatment" :key="index">
        <v-col cols="12" md="6">
          <v-text-field v-model="item.hospital" label="Nome do hospital" />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="item.reasonTreatment"
            label="Motivo do tratamento"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field type="date" v-model="item.data" rows="2" label="Data" />
        </v-col>
        <v-col cols="12" md="4">
          <p>Foi útil?</p>
          <v-radio-group v-model="isHelpfulTreatment" inline>
            <v-radio label="Sim" value="0" />
            <v-radio label="Não" value="1" />
          </v-radio-group>
        </v-col>

        <v-col>
          <v-btn icon color="error" @click="removeTreatment(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="addTreatment" color="primary">Adicionar</v-btn>
        </v-col>
      </v-row>
    </div>

    <p class="pb-5 text-lg font-medium">
      Você está tomando alguma medicação por motivos psiquiátricos?
    </p>

    <v-radio-group v-model="isMedicationPsychiatric" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <div v-if="isMedicationPsychiatric === '0'">
      <p class="pb-5 text-lg font-medium">Preencha o seguinte:</p>

      <v-row v-for="(item, index) in medicationTreatment" :key="index">
        <v-col cols="12" md="6">
          <v-text-field v-model="item.medication" label="Medicação" />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="item.dosage" label="Dosagem" />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="item.frequency" label="Frequência" />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field v-model="item.doctor" label="Médico que prescreveu" />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field v-model="item.specialty" label="Especialidade" />
        </v-col>

        <v-col>
          <v-btn icon color="error" @click="removeMedication(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="addMedication" color="primary">Adicionar</v-btn>
        </v-col>
      </v-row>
    </div>

    <p class="pb-5 text-lg font-medium">Você já tentou suicídio?</p>

    <v-radio-group v-model="isAttemptedSuicide" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <div v-if="isAttemptedSuicide === '0'">
      <v-text-field
        type="number"
        v-model="manyTimesAttemptedSuicide"
        label="Quantas vezes você tentou suicídio?"
      />
      <p class="pb-5 text-lg font-medium">Preencha o seguinte:</p>

      <v-row v-for="(item, index) in aboutAttemptedSuicide" :key="index">
        <v-col cols="12" md="6">
          <v-text-field
            type="date"
            v-model="item.data"
            label="Data Aproximada"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="item.method"
            label="O que exatamente você fez na tentativa de tirar a própria vida?"
          />
        </v-col>
        <v-col>
          <p>Você foi hospitalizado?</p>
          <v-radio-group v-model="isHospitalizedAfterAttemptedSuicide" inline>
            <v-radio label="Sim" value="0" />
            <v-radio label="Não" value="1" />
          </v-radio-group>
        </v-col>

        <v-col>
          <v-btn icon color="error" @click="removeAttemptedSuicide(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="addAttemptedSuicide" color="primary">Adicionar</v-btn>
        </v-col>
      </v-row>
    </div>

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
