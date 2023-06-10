import { createWebHistory, createRouter } from "vue-router";
import WrapperForms from "~/views/WrapperForms.vue";
import Login from "~/views/Login.vue";
import { useUserStore } from "~/store";

const routes = [
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
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.token) {
    return {
      path: "/",
    };
  }
});
