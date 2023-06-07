<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { reactive, ref } from "vue";
import { Title } from "~/components";
import { IDifficultProps } from "~/types";
import { difficultSchema } from "../Validators/Schemas";
import { createDifficulties } from "~/services";

const isLoading = ref<boolean>(false);

const snackProps = reactive({
  snackMessage: "",
  snackColor: "success",
  showSnackbar: false,
});

const toggleLoading = (value: boolean) => {
  isLoading.value = value;
};

const toggleSnackbar = (message: string, color: string) => {
  snackProps.snackColor = color;
  snackProps.snackMessage = message;
  snackProps.showSnackbar = !snackProps.showSnackbar;
};

const { handleSubmit, errors, values, resetForm } = useForm<IDifficultProps>({
  validationSchema: difficultSchema,
  initialValues: {
    difficultFirst: "",
    difficultSecond: "",
    difficultThird: "",
    objective: "",
  },
});

useField("difficultFirst");
useField("difficultSecond");
useField("difficultThird");
useField("objective");

const onSubmit = handleSubmit(async (values) => {
  toggleLoading(true);
  try {
    await createDifficulties(values);
    toggleSnackbar("Dados salvos com sucesso!", "success");
    resetForm();
  } catch (error) {
    console.log("error", error);
    toggleLoading(false);

    toggleSnackbar("Erro ao tentar salvar os dados!", "error");
  } finally {
    toggleLoading(false);
  }
});
</script>
<template>
  <Title msg="SUAS DIFICULDADES E OBJETIVOS" />
  <v-snackbar
    v-model="snackProps.showSnackbar"
    :color="snackProps.snackColor"
    timeout="5000"
    location="top"
  >
    {{ snackProps.snackMessage }}
    <template v-slot:actions>
      <v-btn
        color="white"
        variant="text"
        @click="snackProps.showSnackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-form class="pb-20" @submit.prevent="onSubmit">
    <p class="pb-5 font-medium">
      Por favor, liste resumidamente as três dificuldades principais que o
      levaram a buscar ajuda.
    </p>
    <v-textarea
      v-model="values.difficultFirst"
      autofocus
      id="difficultFirst"
      name="difficultFirst"
      rows="2"
      label="Primeira dificuldade"
      placeholder="Primeira dificuldade..."
      :error-messages="errors.difficultFirst"
    />
    <v-textarea
      v-model="values.difficultSecond"
      id="difficultSecond"
      name="difficultSecond"
      rows="2"
      label="Segunda dificuldade"
      placeholder="Segunda dificuldade..."
    />
    <v-textarea
      v-model="values.difficultThird"
      id="difficultThird"
      name="difficultThird"
      rows="2"
      label="Terceira dificuldade"
      placeholder="Terceira dificuldade..."
    />

    <p class="pb-5 font-medium">
      Por favor, diga o que você deseja alcançar com a terapia.
    </p>

    <v-textarea
      v-model="values.objective"
      id="objective"
      name="objective"
      rows="3"
      label="Objetivo que deseja alcançar"
      placeholder="Objetivo..."
    />

    <v-btn
      :loading="isLoading"
      class="w-full bg-blue-600 text-white"
      type="submit"
      >Submit</v-btn
    >
  </v-form>
</template>
