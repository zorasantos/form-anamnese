import { App, Plugin } from "vue";
import { Snackbar } from "~/components";
import { useSnackbarStore } from "~/store";

export const SnackbarPlugin: Plugin = {
  install: (app: App) => {
    const store = useSnackbarStore();

    app.component("Snackbar", { Snackbar });

    app.config.globalProperties.$showSnackbar = (
      message: string,
      color: string,
    ) => {
      store.setSnackbar(message, color);
    };
  },
};
