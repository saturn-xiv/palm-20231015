import nut from "./nut";
import forum from "./forum";

export interface IRoute {
  path: string;
  component: any;
}

export enum Editor {
  TEXTAREA = "textarea",
  QUILL = "quill",
  MARKDOWN = "markdown",
}

export interface IPlugin {
  routes: IRoute[];
}

const plugin: IPlugin = {
  routes: [...forum.routes, ...nut.routes],
};
export default plugin;
