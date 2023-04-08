<script setup lang="ts">
import { ref } from "vue";

const placeOfBirth = ref("");
const fatherAge = ref("");
const fatherDeathAge = ref("");
const ageWhenFatherDied = ref("");
const fatherOccupation = ref("");
const fatherDescription = ref("");
const motherAge = ref("");
const motherDeathAge = ref("");
const ageWhenMotherDied = ref("");
const motherOccupation = ref("");
const motherDescription = ref("");
const relationshipProblems = ref("");
const incomoda = ref(null);
const manyChildren = ref("");
const personsList = ref([
  {
    name: "",
    occupation: "",
    age: null,
    gender: "",
    comments: "",
  },
]);

const genderOptions = [
  { name: "Masculino", value: "M" },
  { name: "Feminino", value: "F" },
  { name: "Outro", value: "O" },
];
const persons = ref([
  {
    name: "",
    occupation: "",
    age: null,
    gender: "",
    comments: "",
  },
]);

console.log("persons", persons);

function addPerson() {
  personsList.value.push({
    name: "",
    occupation: "",
    age: null,
    gender: "",
    comments: "",
  });
}

console.log("addPerson Person", personsList);

// function removePerson(index: number) {
//   persons.value.splice(index, 1);
// }

function onSubmit() {
  console.log(
    incomoda.value,
    placeOfBirth.value,
    fatherAge.value,
    fatherDeathAge.value,
  );
}
</script>
<template>
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <v-text-field
      v-model="placeOfBirth"
      label="Qual seu local de nascimento?"
    />

    <v-divider />
    <p class="pb-5 font-medium">
      Por favor, dê alguns detalhes sobre seu PAI (se souber)
    </p>
    <fieldset legend="Detalhes sobre seu pai">
      <v-text-field
        v-model="fatherAge"
        type="number"
        label="Qual a idade dele atualmente?"
      />
      <v-text-field
        v-model="fatherDeathAge"
        type="number"
        label="Se ele já não está vivo, com que idade morreu?"
      />
      <v-text-field
        v-model="ageWhenFatherDied"
        type="number"
        label="Que idade você tinha quando ele morreu?"
      />
      <v-text-field
        v-model="fatherOccupation"
        label="Qual é, ou era, a ocupação dele?"
      />
      <v-textarea
        v-model="fatherDescription"
        label="Por favor, conte alguma coisa sobre seu pai, seu caráter ou personalidade, e o seu relacionamento com ele."
      />
    </fieldset>

    <v-divider />
    <p class="pb-5 font-medium">
      Por favor, dê alguns detalhes sobre sua MÃE (se souber)
    </p>
    <fieldset legend="Detalhes sobre sua mãe">
      <v-text-field
        v-model="motherAge"
        type="number"
        label="Qual a idade dela atualmente?"
      />
      <v-text-field
        v-model="motherDeathAge"
        type="number"
        label="Se ela já não está viva, com que idade morreu?"
      />
      <v-text-field
        v-model="ageWhenMotherDied"
        type="number"
        label="Que idade você tinha quando ela morreu?"
      />
      <v-text-field
        v-model="motherOccupation"
        label="Qual é, ou era, a ocupação dela?"
      />
      <v-textarea
        v-model="motherDescription"
        label="Por favor, conte alguma coisa sobre sua mãe, seu caráter ou personalidade, e o seu relacionamento com ela."
      />
    </fieldset>

    <v-divider />

    <v-textarea
      v-model="relationshipProblems"
      label="Se existiram/existem problemas no seu relacionamento com seus pais, por favor, descreva o(s) mais importante(s)."
    />
    <p class="pb-5 font-medium">O quanto isso o incomoda atualmente?</p>
    <v-radio-group v-model="incomoda">
      <v-radio label="Em absoluto" value="absoluto"></v-radio>
      <v-radio label="Um pouco" value="pouco"></v-radio>
      <v-radio label="Moderadamente" value="moderadamente"></v-radio>
      <v-radio label="Muito" value="muito"></v-radio>
      <v-radio label="Não poderia ser pior" value="pior"></v-radio>
    </v-radio-group>

    <p class="pb-5 font-medium">
      Por favor, dê alguns detalhes sobre seus irmãos e irmãs (se souber)
    </p>

    <v-text-field
      v-model="manyChildren"
      type="number"
      label="Quantos filhos, incluindo você, há na sua família?"
    />

    <p class="pb-5 font-medium">
      Por favor, dê seus nomes e outros detalhes listados abaixo. Inclua você e,
      por favor, comece pelo mais velho. Inclua também meio-irmãos, filhos de
      padrasto ou madrasta ou outras crianças adotadas por seus pais e indique
      quem são elas.
    </p>

    <fieldset v-for="(person, index) in persons" :key="index">
      <v-row>
        <v-col cols="4">
          <v-text-field label="Nome" v-model="person.name"></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            label="Ocupação"
            v-model="person.occupation"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
            label="Idade"
            v-model.number="person.age"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-autocomplete
            label="Sexo"
            v-model="person.gender"
            :items="genderOptions"
            item-title="name"
            item-value="value"
            placeholder="Selecione"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Comentários"
            v-model="person.comments"
          ></v-textarea>
        </v-col>
      </v-row>
    </fieldset>
    <v-btn color="primary" @click="addPerson">Adicionar</v-btn>

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
