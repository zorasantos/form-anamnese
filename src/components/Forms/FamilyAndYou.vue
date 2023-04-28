<script setup lang="ts">
import { ref } from "vue";
import { Title } from "~/components";

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
const relationshipBrothers = ref("");
const atmosphereHome = ref("");
const importantChanges = ref("");
const anyoneImportantForMe = ref("");
const psychiatricTreatment = ref(null);
const historyOfMentalIllness = ref(null);
const relatedPerson = ref(null);
const anyMemberFamilySuicideAttempt = ref(null);
const anyMemberFamilyDiedBySuicide = ref(null);

const members = ref([{ name: "", problems: "" }]);

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

const addMember = () => {
  members.value.push({ name: "", problems: "" });
};

const removeMember = (index: number) => {
  members.value.splice(index, 1);
};

function addPerson() {
  personsList.value.push({
    name: "",
    occupation: "",
    age: null,
    gender: "",
    comments: "",
  });
}

// function removePerson(index: number) {
//   persons.value.splice(index, 1);
// }

function onSubmit() {
  console.log(members.value);
}
</script>
<template>
  <Title msg="VOCÊ E SUA FAMÍLIA" />
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
          <v-text-field density="compact" label="Nome" v-model="person.name" />
        </v-col>
        <v-col cols="4">
          <v-text-field
            density="compact"
            label="Ocupação"
            v-model="person.occupation"
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            label="Idade"
            density="compact"
            v-model.number="person.age"
          />
        </v-col>
        <v-col cols="2">
          <v-autocomplete
            label="Sexo"
            v-model="person.gender"
            :items="genderOptions"
            density="compact"
            item-title="name"
            item-value="value"
            placeholder="Selecione"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            density="compact"
            rows="3"
            label="Comentários"
            v-model="person.comments"
          />
        </v-col>
      </v-row>
      <v-btn color="primary" @click="addPerson">Adicionar</v-btn>
    </fieldset>

    <v-textarea
      density="compact"
      rows="3"
      label="Por favor, descreva as relações importantes com seus irmãos, se são benéficas ou problemáticas para você."
      v-model="relationshipBrothers"
    />

    <v-textarea
      density="compact"
      rows="3"
      label="Como era o clima geral na sua casa?"
      v-model="atmosphereHome"
    />

    <v-textarea
      density="compact"
      rows="3"
      label="Houve alterações importantes, por exemplo, mudanças ou outro evento significativo, durante a sua infância ou adolescência? Inclua alguma separação da família. Por favor, dê as idades aproximadas e detalhes."
      v-model="importantChanges"
    />

    <v-textarea
      density="compact"
      rows="3"
      label="Houve mais alguém que tenha sido importante para você durante a sua infância (p. ex., avós, tias/tios, amigo da família, etc.)? Em caso afirmativo, você poderia nos contar alguma coisa sobre ele?"
      v-model="anyoneImportantForMe"
    />

    <p class="pb-5 font-medium">
      Alguém na sua família já recebeu tratamento psiquiátrico?
    </p>
    <v-radio-group v-model="psychiatricTreatment" inline>
      <v-radio label="Sim" value="0"></v-radio>
      <v-radio label="Não" value="1"></v-radio>
    </v-radio-group>
    <p class="pb-5 font-medium">
      Alguém na sua família tem história de doença mental, álcool ou abuso de
      drogas?
    </p>
    <v-radio-group v-model="historyOfMentalIllness" inline>
      <v-radio label="Sim" value="0"></v-radio>
      <v-radio label="Não" value="1"></v-radio>
    </v-radio-group>

    <p class="pb-5 font-medium">Em caso afirmativo, por favor, preencha:</p>
    <v-row v-for="(member, index) in members" :key="index">
      <v-col cols="12" md="4">
        <v-text-field v-model="member.name" label="Membro da família" />
      </v-col>
      <v-col cols="12" md="7">
        <v-textarea
          v-model="member.problems"
          rows="2"
          label="Lista de problemas psiquiátricos específicos, abuso de álcool ou drogas"
        />
      </v-col>
      <v-col cols="12" md="1">
        <v-btn icon color="error" @click="removeMember(index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="addMember" color="primary">Adicionar novo membro</v-btn>
      </v-col>
    </v-row>

    <p class="pb-5 font-medium">
      Algum membro da sua família já teve uma tentativa de suicídio?
    </p>

    <v-radio-group v-model="anyMemberFamilySuicideAttempt" inline>
      <v-radio label="Sim" value="0"></v-radio>
      <v-radio label="Não" value="1"></v-radio>
    </v-radio-group>

    <p class="pb-5 font-medium">
      Em caso afirmativo, qual seu grau de parentesco com essa pessoa?
    </p>
    <v-text-field v-model="relatedPerson" label="Grau de parentesco" />

    <p class="pb-5 font-medium">
      Algum membro da sua família já morreu por suicídio?
    </p>

    <v-radio-group v-model="anyMemberFamilyDiedBySuicide" inline>
      <v-radio label="Sim" value="0"></v-radio>
      <v-radio label="Não" value="1"></v-radio>
    </v-radio-group>

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
