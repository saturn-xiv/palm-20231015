import nut from "./nut";
import forum from "./forum";

export interface IPager {
  pageSize: number;
  current: number;
}

export interface IPagination<T> {
  data: T[];
  total: number;
}

export interface IRoute {
  path: string;
  component: any;
}

export interface IOk {
  createdAt: number;
}

export interface IId {
  id: string;
}

// export enum Editor {
//   TEXTAREA = "textarea",
//   QUILL = "quill",
//   MARKDOWN = "markdown",
// }

export type Editor = "textarea" | "quill" | "markdown";

// export interface IPagination {
//   capacity: number;
//   size: number;
//   index: number;
// }

export interface IPlugin {
  routes: IRoute[];
}

const plugin: IPlugin = {
  routes: [], //[...forum.routes, ...nut.routes],
};
export default plugin;
