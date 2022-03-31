import { createApp } from "vue";
import { createVuetify } from "vuetify";

import i18n from "./i18n";
import store from "./store";
import { router } from "./plugins";

const vuetify = createVuetify();

createApp({}).use(vuetify).use(i18n).use(store).use(router).mount("#app");
