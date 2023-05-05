<script setup lang="ts">
import { ref } from "vue";
import { Title } from "~/components";

const previousRelationship = ref("");
const isCurrentDatingPartner = ref(null);
const ageDatingPartner = ref("");
const occupationDatingPartner = ref("");
const howLongHaveBeenTogether = ref("");
const aboutCurrentDatingPartner = ref("");
const aboutProblemsRelationshipDatingPartner = ref("");
const difficultiesYouSexLife = ref("");
const isCurrentlyBothers = ref(null);
const childrenRelationship = ref("");
const children = ref([
  { name: "", occupation: "", age: "", gender: "", comments: "" },
]);

const addMember = () => {
  children.value.push({
    name: "",
    occupation: "",
    age: "",
    gender: "",
    comments: "",
  });
};

const removeMember = (index: number) => {
  children.value.splice(index, 1);
};

function onSubmit() {
  console.log(previousRelationship.value);
  console.log(ageDatingPartner.value);
  console.log(isCurrentDatingPartner.value);
  console.log(howLongHaveBeenTogether.value);
}
</script>
<template>
  <Title msg="SEU PARCEIRO E SUA FAMÍLIA ATUAL" />
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <p class="pb-5 text-lg font-medium">Sobre o(s) seu(s) parceiro(s)</p>

    <p class="pb-2">Você tem algum parceiro atualmente?</p>

    <v-radio-group required v-model="isCurrentDatingPartner" inline>
      <v-radio label="Sim" value="0" />
      <v-radio label="Não" value="1" />
    </v-radio-group>
    <!-- Se tiver um parceiro(a) -->
    <div>
      <p class="pb-2">
        Por favor, descreva brevemente o relacionamento(s) anterior(es)
        importante(s), em ordem cronológica. Inclua o tempo que durou e por que
        você acha que o(s) relacionamento(s) terminavam.
      </p>
    </div>

    <v-textarea v-model="previousRelationship" rows="2" />

    <div v-if="isCurrentDatingPartner === '0'">
      <v-text-field
        v-model="ageDatingPartner"
        id="age"
        name="age"
        label="Qual a idade dele/dela?"
        type="number"
      />

      <v-text-field
        v-model="occupationDatingPartner"
        id="age"
        name="age"
        label="Qual a ocupação dele/dela?"
        type="text"
      />

      <v-text-field
        v-model="howLongHaveBeenTogether"
        id="age"
        name="age"
        label="Há quanto tempo vocês estão juntos?"
        type="text"
      />

      <p>
        Por favor, conte-nos alguma coisa sobre seu/sua parceiro(a), seu caráter
        ou personalidade, e o seu relacionamento com ele/ela. O que você gosta
        nessa relação?
      </p>

      <v-textarea v-model="aboutCurrentDatingPartner" rows="2" />

      <p>
        Se houver problemas no relacionamento com o seu/sua parceiro(a), por
        favor, descreva o(s) mais importante(s).
      </p>

      <v-textarea v-model="aboutProblemsRelationshipDatingPartner" rows="2" />

      <p class="pb-5 font-medium">O quanto isso o incomoda atualmente?</p>
      <v-radio-group v-model="isCurrentlyBothers">
        <v-radio label="Em absoluto" value="absoluto"></v-radio>
        <v-radio label="Um pouco" value="pouco"></v-radio>
        <v-radio label="Moderadamente" value="moderadamente"></v-radio>
        <v-radio label="Muito" value="muito"></v-radio>
        <v-radio label="Não poderia ser pior" value="pior"></v-radio>
      </v-radio-group>
    </div>

    <p class="pb-5 text-lg font-medium">
      Como é a sua vida sexual? Você tem alguma dificuldade em sua vida sexual?
      Em caso positivo, por favor, tente descrevê-la.
    </p>

    <v-textarea required v-model="difficultiesYouSexLife" rows="2" />

    <p class="pb-5 font-medium">O quanto isso o(a) incomoda atualmente?</p>

    <v-radio-group required v-model="isCurrentlyBothers">
      <v-radio label="Em absoluto" value="absoluto"></v-radio>
      <v-radio label="Um pouco" value="pouco"></v-radio>
      <v-radio label="Moderadamente" value="moderadamente"></v-radio>
      <v-radio label="Muito" value="muito"></v-radio>
      <v-radio label="Não poderia ser pior" value="pior"></v-radio>
    </v-radio-group>

    <p class="pb-5 font-medium">Sobre seus filhos (se souber)</p>

    <!-- Validar com um radio button se o cliente tem filhos, se sim mostrar as outras informações -->
    <!-- Se tiver filhos os outros campos serão obrigatórios -->
    <p>
      Se você tiver filhos, liste-os por ordem de idade. Por favor, indique
      algum filho de casamento(s) anterior(es) e filho(s) adotivo(s); indique
      quem eles são.
    </p>

    <v-row v-for="(child, index) in children" :key="index">
      <v-col cols="12" md="6">
        <v-text-field v-model="child.name" rows="2" label="Nome" />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field v-model="child.occupation" label="Ocupação" />
      </v-col>
      <v-col cols="12" md="2">
        <v-text-field type="number" v-model="child.age" label="Idade" />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field type="text" v-model="child.gender" label="Sexo(M/F)" />
      </v-col>

      <v-col cols="12" md="7">
        <v-textarea v-model="child.comments" label="Comentários" rows="2" />
      </v-col>
      <v-col>
        <v-btn icon color="error" @click="removeMember(index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="addMember" color="primary">Adicionar Filho</v-btn>
      </v-col>
    </v-row>

    <p class="pb-5 font-medium">
      Por favor, descreva seu relacionamento com seu(s) filho(s). Se houver
      alguma dificuldade com seus filhos, por favor descreva a(s) mais
      importante(s).
    </p>

    <v-textarea v-model="childrenRelationship" rows="2" />

    <p class="pb-5 font-medium">O quanto isso o(a) incomoda atualmente?</p>
    <v-radio-group v-model="isCurrentlyBothers">
      <v-radio label="Em absoluto" value="absoluto"></v-radio>
      <v-radio label="Um pouco" value="pouco"></v-radio>
      <v-radio label="Moderadamente" value="moderadamente"></v-radio>
      <v-radio label="Muito" value="muito"></v-radio>
      <v-radio label="Não poderia ser pior" value="pior"></v-radio>
    </v-radio-group>

    <v-btn class="w-full bg-blue-600 text-white" type="submit">Submit</v-btn>
  </v-form>
</template>
