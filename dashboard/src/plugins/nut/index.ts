import { IPlugin } from "..";

const plugin: IPlugin = {
  routes: [
    {
      name: "users.sign-in",
      path: "/users/sign-in",
      component: () => import("./users/sign-in.vue"),
    },
    {
      name: "users.sign-up",
      path: "/users/sign-up",
      component: () => import("./users/sign-up.vue"),
    },
    {
      name: "users.confirm.new",
      path: "/users/confirm/new",
      component: () => import("./users/confirm/new.vue"),
    },
    {
      name: "users.confirm.verify",
      path: "/users/confirm/verify/:token",
      component: () => import("./users/confirm/verify.vue"),
    },
    {
      name: "users.unlock.new",
      path: "/users/unlock/new",
      component: () => import("./users/unlock/new.vue"),
    },
    {
      name: "users.unlock.verify",
      path: "/users/unlock/verify/:token",
      component: () => import("./users/unlock/verify.vue"),
    },
    {
      name: "users.forgot-password",
      path: "/users/forgot-password",
      component: () => import("./users/forgot-password.vue"),
    },
    {
      name: "users.reset-password",
      path: "/users/reset-password/:token",
      component: () => import("./users/reset-password.vue"),
    },
    {
      name: "users.logs",
      path: "/users/logs",
      component: () => import("./users/logs.vue"),
    },
    {
      name: "users.profile",
      path: "/users/profile",
      component: () => import("./users/profile/index.vue"),
    },
    {
      name: "leave-words.new",
      path: "/leave-words/new",
      component: () => import("./leave-words/new.vue"),
    },
    {
      name: "switch-language",
      path: "/switch-language",
      component: () => import("./switch-language.vue"),
    },
    {
      name: "install",
      path: "/install",
      component: () => import("./install.vue"),
    },
    { name: "home", path: "/", component: () => import("./home.vue") },
  ],
};

export default plugin;
