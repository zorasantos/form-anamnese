<script setup lang="ts">
import { ref, watch, defineEmits, defineProps } from "vue";

defineEmits(["update:show"]);
const props = defineProps<{
  alertMessage: string;
  typeColo: string;
  show: boolean;
}>();

const showSnackbar = ref(false);
watch(
  () => props.show,
  (newValue) => {
    showSnackbar.value = newValue;
  },
);

// const hideSnackbar = () => {
//   showSnackbar.value = false;
//   emit("update:show", false);
// };
</script>
<template>
  <v-snackbar
    v-model="showSnackbar"
    colo="success"
    timeout="5000"
    location="top"
  >
    {{ alertMessage }}
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="showSnackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>

  <!-- <v-progress-linear
      v-if="showAlert"
      v-model="progress"
      :buffer-value="bufferProgress"
    ></v-progress-linear> -->
</template>
