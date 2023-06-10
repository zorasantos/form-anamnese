import { defineStore } from "pinia";

import { login } from "~/services";
import { ILoginProps } from "~/types";
import { useSnackbarStore } from ".";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: "",
    isLogged: false,
  }),

  actions: {
    async signIn(data: ILoginProps) {
      const storeSnackbar = useSnackbarStore();

      try {
        const response = await login(data);
        storeSnackbar.setSnackbar("Login realizado com sucesso!", "success");
        localStorage.setItem("token", response.data.token);
        this.setToken(response.data.token);
      } catch (error) {
        storeSnackbar.setSnackbar(
          "Nome e/ou token inválido(s). Tente novamente",
          "error",
        );
        return error;
      }
    },
    setToken(token: string) {
      this.token = token;
    },
  },
});
