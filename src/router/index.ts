import { createWebHistory, createRouter } from "vue-router";
import WrapperForms from "~/views/WrapperForms.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: WrapperForms,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
