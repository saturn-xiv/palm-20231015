import { ComponentType } from "react";

import nut from "./nut";

export interface IPlugin {
  path: string;
  component: () => Promise<{ default: ComponentType<any> }>;
}

const pages: IPlugin[] = [...nut];

export default pages;
