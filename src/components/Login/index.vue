<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { Button, TextField, Checkbox } from "lib-ui-vue";

import { ILoginProps } from "~/types";
import { Title, TermsOfUse } from "~/components";
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

    <Checkbox
      v-if="userStore.isTermsOfUse"
      v-model="values.term"
      label="Li e estou ciente com os Termos de uso e Política de Privacidade"
      :error-messages="errors.term"
    />

    <Button
      class="mt-5"
      block
      label="Entrar"
      :loading="isSubmitting"
      type="submit"
    />
  </form>
</template>
