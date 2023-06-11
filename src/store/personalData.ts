import { defineStore } from "pinia";
import { createPersonalData } from "~/services";
import { IPersonalDataProps } from "~/types";
import { useSnackbarStore } from ".";

export const usePersonalDataStore = defineStore("personalData", {
  state: () => ({
    isSuccess: false,
  }),

  actions: {
    async personalData(data: IPersonalDataProps) {
      const storeSnackbar = useSnackbarStore();

      try {
        await createPersonalData(data);
        storeSnackbar.setSnackbar(
          "Dados salvos com sucesso! Aguarde, você será redirecionado(a) para o próximo formulário.",
          "success",
        );
        this.setIsSuccess();
      } catch (error) {
        storeSnackbar.setSnackbar("Erro ao tentar salvar os dados!", "error");
      }
    },
    setIsSuccess() {
      this.isSuccess = !this.isSuccess;
    },
  },
});
