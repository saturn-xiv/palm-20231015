import { IPlugin } from "..";

const plugin: IPlugin = {
  routes: [
    {
      path: "/leave-words/new",
      component: () => import("./leave-words/new"),
    },
    {
      path: "/users/forgot-password",
      component: () => import("./users/forgot-password"),
    },
    {
      path: "/users/unlock",
      component: () => import("./users/unlock"),
    },
    {
      path: "/users/confirm",
      component: () => import("./users/confirm"),
    },
    {
      path: "/users/sign-in",
      component: () => import("./users/sign-in"),
    },
    {
      path: "/users/sign-up",
      component: () => import("./users/sign-up"),
    },
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
