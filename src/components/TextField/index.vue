<script setup lang="ts">
defineProps<{
  label?: string;
  id?: string;
  type?: string;
  errorMessages?: string | undefined;
  modelValue?: string | number;
}>();
</script>
<template>
  <div class="mb-8">
    <label
      :for="id"
      :class="`block mb-2 text-base font-semibold ${
        errorMessages ? 'text-[#FF4842]' : 'text-[#4C565D]'
      }`"
    >
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      :type="type"
      @input="$emit(`update:modelValue`, $event.target.value)"
      class="border border-gray-600 sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    />
    <span class="text-[#FF4842] text-xs font-semibold" v-if="errorMessages">{{
      errorMessages
    }}</span>
  </div>
</template>
