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
    <label for="placeOfBirth" class="font-medium"
      >Qual seu local de nascimento?</label
    >
    <v-text-field
      id="placeOfBirth"
      name="placeOfBirth"
      required
      v-model="placeOfBirth"
    />

    <v-divider />
    <!-- Fildset do pai não será obrigatório -->
    <h2 class="pb-5 text-lg font-medium">
      Por favor, dê alguns detalhes sobre seu PAI (se souber)
    </h2>
    <fieldset legend="Detalhes sobre seu pai">
      <label id="fatherAge" for="fatherAge" class="font-medium"
        >Qual a idade dele atualmente?</label
      >
      <v-text-field
        v-model="fatherAge"
        id="fatherAge"
        name="fatherAge"
        type="number"
      />

      <label id="fatherDeathAge" for="fatherDeathAge" class="font-medium"
        >Se ele já não está vivo, com que idade morreu?</label
      >
      <v-text-field
        v-model="fatherDeathAge"
        id="fatherDeathAge"
        name="fatherDeathAge"
        type="number"
      />

      <label id="ageWhenFatherDied" for="ageWhenFatherDied" class="font-medium"
        >Que idade você tinha quando ele morreu?</label
      >
      <v-text-field
        v-model="ageWhenFatherDied"
        id="ageWhenFatherDied"
        name="ageWhenFatherDied"
        type="number"
      />

      <label id="fatherOccupation" for="fatherOccupation" class="font-medium"
        >Qual é, ou era, a ocupação dele?</label
      >
      <v-text-field
        v-model="fatherOccupation"
        id="fatherOccupation"
        name="fatherOccupation"
      />

      <label id="fatherDescription" for="fatherDescription" class="font-medium"
        >Por favor, conte alguma coisa sobre seu pai, seu caráter ou
        personalidade, e o seu relacionamento com ele.</label
      >
      <v-textarea
        v-model="fatherDescription"
        id="fatherDescription"
        name="fatherDescription"
      />
    </fieldset>

    <v-divider />
    <!-- Encontrar uma forma(UI) de destacar esses subtitulos -->
    <!-- Fildset da mãe não será obrigatório -->

    <p class="pb-5 font-medium">
      Por favor, dê alguns detalhes sobre sua MÃE (se souber)
    </p>
    <fieldset legend="Detalhes sobre sua mãe">
      <label id="motherAge" for="motherAge" class="font-medium"
        >Qual a idade dela atualmente?</label
      >
      <v-text-field
        v-model="motherAge"
        id="motherAge"
        name="motherAge"
        type="number"
      />

      <label id="motherDeathAge" for="motherDeathAge" class="font-medium"
        >Se ela já não está viva, com que idade morreu?</label
      >
      <v-text-field
        v-model="motherDeathAge"
        type="number"
        id="motherDeathAge"
        name="motherDeathAge"
      />

      <label id="ageWhenMotherDied" for="ageWhenMotherDied" class="font-medium"
        >Que idade você tinha quando ela morreu?</label
      >
      <v-text-field
        v-model="ageWhenMotherDied"
        type="number"
        id="ageWhenMotherDied"
        name="ageWhenMotherDied"
      />

      <label id="motherOccupation" for="motherOccupation" class="font-medium"
        >Qual é, ou era, a ocupação dela?</label
      >

      <v-text-field
        v-model="motherOccupation"
        id="motherOccupation"
        name="motherOccupation"
      />

      <label id="motherDescription" for="motherDescription" class="font-medium"
        >Por favor, conte alguma coisa sobre sua mãe, seu caráter ou
        personalidade, e o seu relacionamento com ela.</label
      >
      <v-textarea
        v-model="motherDescription"
        id="motherDescription"
        name="motherDescription"
      />
    </fieldset>

    <v-divider />

    <label
      id="relationshipProblems"
      for="relationshipProblems"
      class="font-medium"
      >Se existiram/existem problemas no seu relacionamento com seus pais, por
      favor, descreva o(s) mais importante(s).</label
    >
    <v-textarea
      v-model="relationshipProblems"
      id="relationshipProblems"
      name="relationshipProblems"
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

    <label id="manyChildren" for="manyChildren" class="font-medium"
      >Quantos filhos, incluindo você, há na sua família?</label
    >

    <v-text-field
      v-model="manyChildren"
      type="number"
      id="manyChildren"
      name="manyChildren"
    />

    <p class="pb-5 font-medium text-justify">
      Por favor, dê seus nomes e outros detalhes listados abaixo. Inclua você e,
      por favor, comece pelo mais velho. Inclua também meio-irmãos, filhos de
      padrasto ou madrasta ou outras crianças adotadas por seus pais e indique
      quem são elas.
    </p>

    <fieldset v-for="(person, index) in persons" :key="index">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field density="compact" label="Nome" v-model="person.name" />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            density="compact"
            label="Ocupação"
            v-model="person.occupation"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Idade"
            density="compact"
            v-model.number="person.age"
          />
        </v-col>
        <v-col cols="12" md="6">
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

    <label
      id="relationshipBrothers"
      for="relationshipBrothers"
      class="font-medium"
      >Por favor, descreva as relações importantes com seus irmãos, se são
      benéficas ou problemáticas para você.</label
    >
    <v-textarea
      density="compact"
      rows="3"
      v-model="relationshipBrothers"
      id="relationshipBrothers"
      name="relationshipBrothers"
    />

    <label id="atmosphereHome" for="atmosphereHome" class="font-medium"
      >Como era o clima geral na sua casa?</label
    >
    <v-textarea
      density="compact"
      rows="3"
      v-model="atmosphereHome"
      id="atmosphereHome"
      name="atmosphereHome"
    />

    <label
      id="importantChanges"
      for="importantChanges"
      class="font-medium text-justify"
      >Houve alterações importantes, por exemplo, mudanças ou outro evento
      significativo, durante a sua infância ou adolescência? Inclua alguma
      separação da família. Por favor, dê as idades aproximadas e
      detalhes.</label
    >

    <v-textarea
      density="compact"
      rows="3"
      v-model="importantChanges"
      id="importantChanges"
      name="importantChanges"
    />

    <label
      id="anyoneImportantForMe"
      for="anyoneImportantForMe"
      class="font-medium text-justify"
      >Houve mais alguém que tenha sido importante para você durante a sua
      infância (p. ex., avós, tias/tios, amigo da família, etc.)? Em caso
      afirmativo, você poderia nos contar alguma coisa sobre ele?</label
    >

    <v-textarea
      density="compact"
      rows="3"
      v-model="anyoneImportantForMe"
      id="anyoneImportantForMe"
      name="anyoneImportantForMe"
    />

    <p class="pb-5 font-medium">
      Alguém na sua família já recebeu tratamento psiquiátrico?
    </p>
    <v-radio-group required v-model="psychiatricTreatment" inline>
      <v-radio label="Sim" value="0"></v-radio>
      <v-radio label="Não" value="1"></v-radio>
    </v-radio-group>
    <p class="pb-5 font-medium">
      Alguém na sua família tem história de doença mental, álcool ou abuso de
      drogas?
    </p>
    <v-radio-group required v-model="historyOfMentalIllness" inline>
      <v-radio label="Sim" value="0"></v-radio>
      <v-radio label="Não" value="1"></v-radio>
    </v-radio-group>
    <div v-if="historyOfMentalIllness === '0'">
      <p class="pb-5 font-medium">Em caso afirmativo, por favor, preencha:</p>
      <v-row v-for="(member, index) in members" :key="index">
        <v-col cols="12" md="4">
          <label id="memberName" for="memberProblem" class="font-medium"
            >Membro da família</label
          >
          <v-text-field
            v-model="member.name"
            id="memberName"
            name="memberName"
          />
        </v-col>
        <v-col cols="12" md="7">
          <label id="memberProblem" for="memberProblem" class="font-medium"
            >Lista de problemas psiquiátricos específicos, abuso de álcool ou
            drogas</label
          >
          <v-textarea
            v-model="member.problems"
            required
            rows="2"
            id="memberProblem"
            name="memberProblem"
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
          <v-btn @click="addMember" color="primary"
            >Adicionar novo membro</v-btn
          >
        </v-col>
      </v-row>
    </div>

    <p class="pb-5 font-medium">
      Algum membro da sua família já teve uma tentativa de suicídio?
    </p>

    <v-radio-group v-model="anyMemberFamilySuicideAttempt" inline>
      <v-radio label="Sim" value="0"></v-radio>
      <v-radio label="Não" value="1"></v-radio>
    </v-radio-group>

    <div v-if="anyMemberFamilySuicideAttempt === '0'">
      <p class="pb-5 font-medium">
        Em caso afirmativo, qual seu grau de parentesco com essa pessoa?
      </p>
      <v-text-field v-model="relatedPerson" label="Grau de parentesco" />
    </div>

    <p class="pb-5 font-medium">
      Algum membro da sua família já morreu por suicídio?
    </p>

    <v-radio-group required v-model="anyMemberFamilyDiedBySuicide" inline>
      <v-radio label="Sim" value="0"></v-radio>
      <v-radio label="Não" value="1"></v-radio>
    </v-radio-group>

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
