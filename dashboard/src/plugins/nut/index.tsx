import { IPlugin } from "..";

export const USERS_SIGN_IN_PATH = "/users/sign-in";
export const USERS_LOGS_PATH = "/users/logs";

const plugin: IPlugin = {
  routes: [
    {
      path: "/leave-words/new",
      component: () => import("./leave-words/new"),
    },
    {
      path: USERS_LOGS_PATH,
      component: () => import("./users/logs"),
    },
    {
      path: "/users/reset-password/:token",
      component: () => import("./users/reset-password"),
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
      path: USERS_SIGN_IN_PATH,
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
