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
      name: "users.logs",
      path: "/users/logs",
      component: () => import("./users/logs.vue"),
    },
    { name: "home", path: "/", component: () => import("./home.vue") },
  ],
};

export default plugin;
