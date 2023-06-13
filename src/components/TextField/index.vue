<script setup lang="ts">
defineProps<{
  label?: string;
  id?: string;
  errorMessages?: string | undefined;
  modelValue?: string | number;
}>();
</script>
<template>
  <div class="mb-8">
    <label
      :for="id"
      :class="`block mb-2 text-base font-semibold ${
        errorMessages ? 'text-red-500' : 'text-gray-600'
      }`"
    >
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="(event: Event) => $emit(`update:modelValue`, (event.target as HTMLInputElement).value)"
      class="border border-gray-600 sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    />
    <span class="text-red-500 text-xs font-semibold" v-if="errorMessages">{{
      errorMessages
    }}</span>
  </div>
</template>
