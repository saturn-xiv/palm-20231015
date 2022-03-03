import { IPlugin } from "..";

const plugin: IPlugin = {
  routes: [
    {
      path: "/install",
      component: () => import("./install"),
    },
    {
      path: "/",
      component: () => import("./home"),
    },
  ],
};

export default plugin;
