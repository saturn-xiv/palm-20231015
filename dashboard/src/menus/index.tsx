import { ReactNode } from "react";

import { IPermission } from "../reducers/current-user";
import nut from "./nut";
import forum from "./forum";
import cms from "./cms";
import mall from "./mall";
import school from "./school";

export interface IMenu {
  to: string;
  icon?: ReactNode;
  mustAdministrator?: boolean;
  permissions: IPermission[];
  items: IMenu[];
}

const items: IMenu[] = [...nut, ...cms, ...forum, ...mall, ...school];

export default items;
