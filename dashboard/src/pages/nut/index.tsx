import { IPlugin } from "..";

const pages: IPlugin[] = [
  {
    path: "/admin/policies",
    component: () => import("./admin/policies"),
  },
  {
    path: "/admin/roles",
    component: () => import("./admin/roles"),
  },
  {
    path: "/admin/users",
    component: () => import("./admin/users"),
  },
  {
    path: "/admin/site",
    component: () => import("./admin/site"),
  },
  {
    path: "/admin/leave-words",
    component: () => import("./admin/leave-words"),
  },
  {
    path: "/admin/locales",
    component: () => import("./admin/locales"),
  },
  {
    path: "/leave-words/new",
    component: () => import("./leave-words/new"),
  },
  {
    path: "/users/profile",
    component: () => import("./users/profile"),
  },
  {
    path: "/users/confirm/verify/:token",
    component: () => import("./users/confirm/verify"),
  },
  {
    path: "/users/confirm/new",
    component: () => import("./users/confirm/new"),
  },
  {
    path: "/users/unlock/verify/:token",
    component: () => import("./users/unlock/verify"),
  },
  {
    path: "/users/unlock/new",
    component: () => import("./users/unlock/new"),
  },
  {
    path: "/users/forgot-password",
    component: () => import("./users/forgot-password"),
  },
  {
    path: "/users/reset-password/:token",
    component: () => import("./users/reset-password"),
  },
  {
    path: "/users/sign-up",
    component: () => import("./users/sign-up"),
  },
  {
    path: "/users/sign-in",
    component: () => import("./users/sign-in"),
  },
  {
    path: "/attachments",
    component: () => import("./attachments"),
  },
  {
    path: "/switch-language",
    component: () => import("./switch-language"),
  },
  {
    path: "/install",
    component: () => import("./install"),
  },
  {
    path: "/",
    component: () => import("./home"),
  },
];

export default pages;
