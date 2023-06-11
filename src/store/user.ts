import { defineStore } from "pinia";

import { getIsTermsOfUse, login } from "~/services";
import { ILoginProps } from "~/types";
import { useSnackbarStore } from ".";
import { router } from "~/router";

export const useUserStore = defineStore("user", {
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
          storeSnackbar.setSnackbar("Login realizado com sucesso!", "success");
          localStorage.setItem("token", response.data.token);
          this.setToken(response.data.token);
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
      localStorage.removeItem("isTermsOfUse");
    },
  },
});
