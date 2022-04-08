import { IPlugin } from "..";

export const USERS_SIGN_IN_PATH = "/users/sign-in";
export const USERS_LOGS_PATH = "/users/logs";

const plugin: IPlugin = {
  routes: [
    // {
    //   path: "/admin/users",
    //   component: () => import("./admin/users"),
    // },
    // {
    //   path: "/admin/locales",
    //   component: () => import("./admin/locales"),
    // },
    // {
    //   path: "/admin/site",
    //   component: () => import("./admin/site"),
    // },
    // {
    //   path: "/admin/leave-words",
    //   component: () => import("./admin/leave-words"),
    // },
    // {
    //   path: "/leave-words/new",
    //   component: () => import("./leave-words/new"),
    // },
    // {
    //   path: "/users/profile",
    //   component: () => import("./users/profile"),
    // },
    // {
    //   path: USERS_LOGS_PATH,
    //   component: () => import("./users/logs"),
    // },
    // {
    //   path: "/users/reset-password/:token",
    //   component: () => import("./users/reset-password"),
    // },
    // {
    //   path: "/users/forgot-password",
    //   component: () => import("./users/forgot-password"),
    // },
    // {
    //   path: "/users/unlock/:token",
    //   component: () => import("./users/unlock/verify"),
    // },
    // {
    //   path: "/users/unlock",
    //   component: () => import("./users/unlock/new"),
    // },
    // {
    //   path: "/users/confirm/:token",
    //   component: () => import("./users/confirm/verify"),
    // },
    // {
    //   path: "/users/confirm",
    //   component: () => import("./users/confirm/new"),
    // },
    // {
    //   path: USERS_SIGN_IN_PATH,
    //   component: () => import("./users/sign-in"),
    // },
    // {
    //   path: "/users/sign-up",
    //   component: () => import("./users/sign-up"),
    // },
    // {
    //   path: "/switch-language",
    //   component: () => import("./switch-language"),
    // },
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
