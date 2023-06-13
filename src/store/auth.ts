import { defineStore } from "pinia";

import { getIsTermsOfUse, login, verifyToken } from "~/services";
import { ILoginProps } from "~/types";
import { useSnackbarStore } from ".";
import { router } from "~/router";

export const useUserStore = defineStore("auth", {
  state: () => ({
    token: "",
    isLogged: false,
    isTermsOfUse: false,
    acceptTerms: false,
    showDialog: false,
    term: false,
  }),

  actions: {
    async signIn(data: ILoginProps) {
      const storeSnackbar = useSnackbarStore();

      try {
        const response = await getIsTermsOfUse(data.name);
        if (!response.data.isTermsOfUse && !this.term && !data.term) {
          this.setIsTermsOfUse(!response.data.isTermsOfUse);
          this.setShowDialog(!response.data.isTermsOfUse);
          localStorage.setItem(
            "isTermsOfUse",
            JSON.stringify(this.isTermsOfUse),
          );
        }

        if (response.data.isTermsOfUse || this.term || data.term) {
          const response = await login(data);
          localStorage.removeItem("isTermsOfUse");
          localStorage.setItem("token", response.data.token);
          const token = localStorage.getItem("token") as string;
          this.setToken(token);
          storeSnackbar.setSnackbar("Login realizado com sucesso!", "success");
          router.push("/forms");
        }
      } catch (error) {
        storeSnackbar.setSnackbar(
          "Nome e/ou token inválido(s). Tente novamente",
          "error",
        );
        return error;
      }
    },
    async checkToken() {
      const storeSnackbar = useSnackbarStore();
      try {
        const response = await verifyToken(this.token);

        return response.data;
      } catch (error) {
        storeSnackbar.setSnackbar("Ocorreu um erro inesperado!", "error");
        return error;
      }
    },
    setToken(token: string) {
      this.token = token;
    },

    setIsTermsOfUse(value: boolean) {
      this.isTermsOfUse = value;
    },

    setAcceptTerms() {
      this.acceptTerms = !this.acceptTerms;
      this.showDialog = !this.showDialog;
      this.term = !this.term;
    },
    setShowDialog(value: boolean) {
      this.showDialog = value;
    },

    cancelDialog() {
      this.showDialog = !this.showDialog;
    },
  },
});
