import { defineStore } from "pinia";

export const useSnackbarStore = defineStore("snackbar", {
  state: () => ({
    color: "success",
    message: "",
    show: false,
  }),

  actions: {
    setSnackbar(message: string, color: string) {
      this.color = color;
      this.message = message;
      this.show = !this.show;
    },

    closeSnackbar() {
      this.show = !this.show;
    },
  },
});
