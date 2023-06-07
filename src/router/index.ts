import { createWebHistory, createRouter } from "vue-router";
import Personal from "~/views/Personal.vue";
import Difficult from "~/views/Difficult.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/personal",
  },
  {
    path: "/difficult",
    name: "Difficult",
    component: Difficult,
  },
  {
    path: "/personal",
    name: "Personal",
    component: Personal,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
