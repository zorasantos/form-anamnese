<script setup lang="ts">
import { Snackbar } from "~/components";
</script>
<template>
  <div class="p-5 md:p-16">
    <Snackbar />
    <router-view />
  </div>
</template>
