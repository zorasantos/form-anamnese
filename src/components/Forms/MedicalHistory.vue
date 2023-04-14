<script setup lang="ts">
import { ref } from "vue";

const isReferralMedic = ref(null);
const name = ref("");
const specialty = ref("");
const address = ref("");
const phone = ref("");
const lastTimeCheckUp = ref("");
const isTreatedPastYear = ref(null);
const detailTreatedPastYear = ref("");
const isChangesGeneralHealth = ref(null);
const detailChangesGeneralHealth = ref("");
const isCurrentTakingMedication = ref(null);
const isCurrentMedicalConditions = ref(null);

const medicationTreatment = ref([
  {
    medication: "",
    dosage: "",
    frequency: "",
    reason: "",
  },
]);

const addMedication = () => {
  medicationTreatment.value.push({
    medication: "",
    dosage: "",
    frequency: "",
    reason: "",
  });
};

const removeMedication = (index: number) => {
  medicationTreatment.value.splice(index, 1);
};

function onSubmit() {
  console.log(isReferralMedic.value);
  console.log(lastTimeCheckUp.value);
  console.log(isTreatedPastYear.value);
  console.log(detailChangesGeneralHealth.value);
}
</script>
<template>
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <p class="pb-5 text-lg font-medium">
      Você tem um médico de referência que você visita para realização de
      revisões de rotina?
    </p>
    <v-radio-group v-model="isReferralMedic" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <div v-if="isReferralMedic === '0'">
      <v-text-field
        v-model="name"
        id="name"
        name="name"
        label="Nome do médico"
      />

      <v-text-field
        v-model="specialty"
        id="specialty"
        name="specialty"
        label="Especialidade"
      />

      <v-text-field
        v-model="address"
        id="address"
        name="address"
        label="Endereço completo"
      />

      <v-text-field v-model="phone" id="phone" name="phone" label="Telefones" />
    </div>
    <p class="pb-5 text-lg font-medium">
      Quando foi a última vez que você fez um check-up?
    </p>

    <v-text-field v-model="lastTimeCheckUp" id="checkout" name="checkout" />

    <p class="pb-5 text-lg font-medium">
      Você foi tratado pelo seu clínico geral ou foi hospitalizado neste último
      ano?
    </p>

    <v-radio-group v-model="isTreatedPastYear" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <div v-if="isTreatedPastYear === '0'">
      <p class="pb-5 text-lg">Por favor, conte mais detalhes.</p>
      <v-textarea
        v-model="detailTreatedPastYear"
        id="detailTreatedPastYear"
        rows="2"
      />
    </div>

    <p class="pb-5 text-lg font-medium">
      Houve alguma mudança na sua saúde geral neste último ano?
    </p>

    <v-radio-group v-model="isChangesGeneralHealth" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <div v-if="isChangesGeneralHealth === '0'">
      <p class="pb-5 text-lg">Por favor, conte mais detalhes.</p>
      <v-textarea
        v-model="detailChangesGeneralHealth"
        id="detailChangesGeneralHealth"
        rows="2"
      />
    </div>

    <p class="pb-5 text-lg font-medium">
      No momento você está tomando alguma medicação por razões
      não-psiquiátricas?
    </p>

    <v-radio-group v-model="isCurrentTakingMedication" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <div v-if="isCurrentTakingMedication === '0'">
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
        <v-col cols="12" md="6">
          <v-text-field v-model="item.reason" label="Razão" />
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

    <p class="pb-5 text-lg font-medium">
      Você já teve ou tem uma história de (marque todos os que se aplicam):
    </p>

    <v-row>
      <v-col>
        <v-checkbox label="Derrame" />
        <v-checkbox label="Asma" />
        <v-checkbox label="Tuberculose" />
        <v-checkbox label="Úlcera" />
        <v-checkbox label="Diabete" />
        <v-checkbox label="Febre reumática" />
        <v-checkbox label="Angina" />
      </v-col>
      <v-col>
        <v-checkbox label="Sopro cardíaco" />
        <v-checkbox label="Anemia" />
        <v-checkbox label="Hiper ou Hipotensão" />
        <v-checkbox label="Cirurgia cardíaca" />
        <v-checkbox label="Ataque cardíaco" />
        <v-checkbox label="Problemas de tireóide" />
      </v-col>
    </v-row>

    <p class="pb-5 text-lg font-medium">
      Você está grávida ou acha que pode estar?
    </p>

    <v-radio-group v-model="isChangesGeneralHealth" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <p class="pb-5 text-lg font-medium">
      Você já teve ataques, acessos, convulsões ou epilepsia?
    </p>

    <v-radio-group v-model="isChangesGeneralHealth" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <p class="pb-5 text-lg font-medium">
      Você tem prótese de válvula cardíaca?
    </p>

    <v-radio-group v-model="isChangesGeneralHealth" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <p class="pb-5 text-lg font-medium">
      Você tem alguma condição médica atual?
    </p>

    <v-radio-group v-model="isCurrentMedicalConditions" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>

    <div v-if="isCurrentMedicalConditions === '0'">
      <p class="pb-5 text-lg">Por favor, conte mais detalhes.</p>
      <v-textarea rows="2" />
    </div>

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
