import { IPlugin } from "..";

const plugin: IPlugin = {
  routes: [
    {
      path: "/users/sign-in",
      name: "users.sign-in",
      component: () => import("./users/sign-in.vue"),
    },
    {
      path: "/users/sign-up",
      name: "users.sign-up",
      component: () => import("./users/sign-up.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("./home.vue"),
    },
  ],
};

export default plugin;
