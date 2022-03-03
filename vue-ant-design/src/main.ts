// import "vuetify/styles";
import "ant-design-vue/dist/antd.css";

import { createApp } from "vue";
// import { createVuetify } from "vuetify";
import Antd from "ant-design-vue";

import App from "./App.vue";

const app = createApp(App);
// const vuetify = createVuetify();

app.use(Antd).mount("#app");
