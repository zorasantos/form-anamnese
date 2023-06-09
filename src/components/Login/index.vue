<script setup lang="ts">
import { reactive } from "vue";
import { useField, useForm } from "vee-validate";
import { login } from "~/services";
import { ILoginProps } from "~/types";
import { Title } from "~/components";
import { loginSchema } from "../Validators/Schemas";

const snackProps = reactive({
  snackMessage: "",
  snackColor: "success",
  showSnackbar: false,
});

const toggleSnackbar = (message: string, color: string) => {
  snackProps.snackColor = color;
  snackProps.snackMessage = message;
  snackProps.showSnackbar = !snackProps.showSnackbar;
};

const { handleSubmit, errors, values, isSubmitting, resetForm } =
  useForm<ILoginProps>({
    validationSchema: loginSchema,
  });

useField("name");
useField("password");
// useField("term");

const onSubmit = handleSubmit(async (data) => {
  try {
    await login(data);
    toggleSnackbar("Login realizado com sucesso!", "success");
    resetForm();
  } catch (error) {
    console.log(error);
    toggleSnackbar("Nome e/ou token inválido(s). Tente novamente", "error");
  }
});
</script>

<template>
  <Title msg="Login" />
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
  <v-form @submit.prevent="onSubmit">
    <v-text-field
      v-model="values.name"
      id="name"
      name="name"
      :counter="10"
      label="Nome"
      required
      :error-messages="errors.name"
    ></v-text-field>

    <v-text-field
      v-model="values.password"
      id="token"
      name="token"
      label="Token"
      required
      :error-messages="errors.password"
    ></v-text-field>

    <!-- <v-checkbox
      v-model="values.term"
      label="Li e estou ciente com os Termos de uso e Política de Privacidade"
      required
      :error-messages="errors.term"
    ></v-checkbox> -->

    <v-btn
      :loading="isSubmitting"
      class="w-full bg-blue-600 text-white"
      type="submit"
    >
      submit
    </v-btn>
  </v-form>
</template>
