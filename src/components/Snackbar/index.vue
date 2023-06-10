<script setup lang="ts">
import { useSnackbarStore } from "~/store/snackbar";

const snackStore = useSnackbarStore();
</script>
<template>
  <v-snackbar
    v-model="snackStore.show"
    :color="snackStore.color"
    timeout="5000"
    location="top"
  >
    {{ snackStore.message }}
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="snackStore.closeSnackbar()">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
