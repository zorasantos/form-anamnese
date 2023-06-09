import { createWebHistory, createRouter } from "vue-router";
import WrapperForms from "~/views/WrapperForms.vue";
import Login from "~/views/Login.vue";

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
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
