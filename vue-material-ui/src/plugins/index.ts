import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import nut from "./nut";

export interface IPlugin {
  routes: RouteRecordRaw[];
}

export const router = createRouter({
  history: createWebHistory("/my/"),
  routes: [...nut.routes],
});
