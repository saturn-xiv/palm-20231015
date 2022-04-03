import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import nut from "./nut";
import cms from "./cms";
import forum from "./forum";
import mall from "./mall";

export interface IPlugin {
  routes: RouteRecordRaw[];
}

export default createRouter({
  history: createWebHistory("/my/"),
  routes: [...cms.routes, ...forum.routes, ...mall.routes, ...nut.routes],
});
