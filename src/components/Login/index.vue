<script setup lang="ts">
import { useRouter } from "vue-router";
import { useField, useForm } from "vee-validate";
import { ILoginProps } from "~/types";
import { Title } from "~/components";
import { loginSchema } from "../Validators/Schemas";
import { useUserStore } from "~/store";
import { onBeforeMount, ref } from "vue";
import { getIsTermsOfUse } from "~/services";

const userStore = useUserStore();
const router = useRouter();

const isTermsOfUse = ref(false);

const { handleSubmit, errors, values, isSubmitting, resetForm } =
  useForm<ILoginProps>({
    validationSchema: loginSchema,
  });

useField("name");
useField("password");
useField("term");

const onSubmit = handleSubmit(async (data) => {
  await userStore.signIn(data);
  if (userStore.token) {
    router.push("/forms");
    resetForm();
  }
});

onBeforeMount(async () => {
  const response = await getIsTermsOfUse(values.name);
  localStorage.setItem("isTermsOfUse", response.data.isTermsOfUse);
  isTermsOfUse.value = response.data.isTermsOfUse;
});
</script>

<template>
  <Title msg="Login" />
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

    <v-checkbox
      v-if="!isTermsOfUse"
      v-model="values.term"
      label="Li e estou ciente com os Termos de uso e Política de Privacidade"
      :error-messages="errors.term"
    />

    <v-btn
      :loading="isSubmitting"
      class="w-full bg-blue-600 text-white"
      type="submit"
    >
      Entrar
    </v-btn>
  </v-form>
</template>
