<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { ILoginProps } from "~/types";
import { Title, Snackbar } from "~/components";
import { loginSchema } from "../Validators/Schemas";
import { useUserStore, useSnackbarStore } from "~/store";

const userStore = useUserStore();
const { setSnackbar } = useSnackbarStore();

const { handleSubmit, errors, values, isSubmitting, resetForm } =
  useForm<ILoginProps>({
    validationSchema: loginSchema,
  });

useField("name");
useField("password");
// useField("term");

const onSubmit = handleSubmit(async (data) => {
  try {
    await userStore.signIn(data);
    setSnackbar("Login realizado com sucesso!", "success");
    resetForm();
  } catch (error) {
    console.log(error);
    setSnackbar("Nome e/ou token inválido(s). Tente novamente", "error");
  }
});
</script>

<template>
  <Title msg="Login" />
  <Snackbar />
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
