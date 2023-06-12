import { createWebHistory, createRouter } from "vue-router";
import WrapperForms from "~/views/WrapperForms.vue";
import Login from "~/views/Login.vue";
import { useUserStore } from "~/store";

export const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/forms",
    name: "Forms",
    component: WrapperForms,
    meta: { requiresAuth: true },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    const userStore = useUserStore();
    const result = await userStore.checkToken();
    if (!userStore.token || !result.isVerified) {
      return {
        path: "/",
      };
    } else {
      to.name;
    }
  }
});
