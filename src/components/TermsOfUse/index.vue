<script setup lang="ts">
import { useUserStore } from "~/store";

const userStore = useUserStore();
</script>
<template>
  <v-dialog width="400" v-model="userStore.showDialog">
    <v-card>
      <v-card-title>
        <span class="text-h5">Política de uso e privacidade</span>
      </v-card-title>
      <v-card-text>
        <p class="text-justify mb-5">
          Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec
          in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum
          luctus quisque adipiscing libero.
        </p>

        <p class="text-justify">
          Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum
          et, aliquet faucibus at morbi nibh, vel condimentum.
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green-darken-1"
          variant="text"
          @click="userStore.cancelDialog()"
        >
          Cancelar
        </v-btn>
        <v-btn
          color="green-darken-1"
          variant="text"
          @click="userStore.setAcceptTerms()"
        >
          Aceitar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
