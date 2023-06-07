import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment(): void {
      this.count++;
    },
  },
});

export const useStepperFormStore = defineStore("stepper", {
  state: () => ({ step: 0 }),

  actions: {
    nextStepper() {
      this.step++;
    },
  },
});
