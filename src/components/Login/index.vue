<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { ILoginProps } from "~/types";
import { Button, Title, TermsOfUse, TextField, CheckBox } from "~/components";
import { loginSchema } from "../Validators/Schemas";
import { useUserStore } from "~/store";
import { watchEffect } from "vue";

const userStore = useUserStore();

const { handleSubmit, errors, values, isSubmitting } = useForm<ILoginProps>({
  validationSchema: loginSchema,
});

watchEffect(() => (values.term = userStore.term));

useField("name");
useField("password");
useField("term");

const onSubmit = handleSubmit(async (data) => {
  await userStore.signIn(data);
});
</script>

<template>
  <Title msg="Login" />
  <TermsOfUse />
  <form @submit.prevent="onSubmit">
    <TextField
      v-model="values.name"
      id="name"
      name="name"
      label="Nome"
      :error-messages="errors.name"
    />

    <TextField
      v-model="values.password"
      id="token"
      name="token"
      label="Token"
      :error-messages="errors.password"
    />

    <CheckBox
      v-if="userStore.isTermsOfUse"
      v-model="values.term"
      label="Li e estou ciente com os Termos de uso e Política de Privacidade"
      :error-messages="errors.term"
    />

    <Button
      addStyle="mt-5"
      :loading="isSubmitting"
      type="submit"
      text="Entrar"
    />
  </form>
</template>
