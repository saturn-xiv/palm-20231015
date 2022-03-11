import { AlertColor } from "@mui/material/Alert";

import nut from "./nut";
import cms from "./cms";
import forum from "./forum";

export interface IRoute {
  path: string;
  component: any;
}

export interface IMessageBar {
  severity: AlertColor;
  items: string[];
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
  routes: [...cms.routes, ...forum.routes, ...nut.routes],
};
export default plugin;
