import { pinia } from "~/main";
import { useUserStore } from "~/store";

export function persistentToken() {
  const userStore = useUserStore(pinia);
  const token = localStorage.getItem("token");
  if (token) {
    userStore.setToken(token);
  }
}
