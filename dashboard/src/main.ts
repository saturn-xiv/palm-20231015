import { createApp } from "vue";
import Antd from "ant-design-vue";

import "ant-design-vue/dist/antd.css";

import plugins from "./plugins";

createApp({}).use(plugins.router).use(Antd).mount("#app");
