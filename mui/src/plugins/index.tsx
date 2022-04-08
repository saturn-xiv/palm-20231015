import nut from "./nut";
import forum from "./forum";
import cms from "./cms";
import mall from "./mall";

export interface IRoute {
  path: string;
  component: any;
}

export type Editor = "textarea" | "quill" | "markdown";

export interface IPlugin {
  routes: IRoute[];
}

const plugin: IPlugin = {
  routes: [...mall.routes, ...forum.routes, ...cms.routes, ...nut.routes],
};
export default plugin;
