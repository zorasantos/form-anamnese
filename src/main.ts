import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import { SnackbarPlugin, persistentToken } from "~/plugins";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { router } from "./router";

import "./style.css";
import "vuetify/styles";

export const pinia = createPinia();
const vuetify = createVuetify({
  components,
  directives,
});

pinia.use(persistentToken);

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .use(SnackbarPlugin)
  .mount("#app");
