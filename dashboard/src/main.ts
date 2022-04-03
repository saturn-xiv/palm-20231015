import { createApp } from "vue";
import Antd from "ant-design-vue";

import "ant-design-vue/dist/antd.css";
import "./index.css";

import router from "./plugins";
import i18n from "./i18n";
import store from "./store";

createApp({}).use(Antd).use(router).use(i18n).use(store).mount("#app");
