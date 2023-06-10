import { defineStore } from "pinia";
import { login } from "~/services";
import { ILoginProps } from "~/types";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: "",
    isLogged: false,
  }),

  actions: {
    async signIn(data: ILoginProps) {
      const response = await login(data);
      console.log("response", response.data);
    },
  },
});
