import { createApp } from "vue";
import Antd from "ant-design-vue";

import "ant-design-vue/dist/antd.css";

import plugins from "./plugins";
import i18n from "./i18n";

createApp({}).use(plugins.router).use(i18n).use(Antd).mount("#app");
