import { Metadata } from "grpc-web";

import nut from "./nut";
import forum from "./forum";
import mall from "./mall";
import cms from "./cms";
import { getToken } from "../reducers/current-user";

export interface IOk {}

export const metadata = (): Metadata => {
  return { authorization: `Bearer ${getToken()}` };
};

const Api = {
  nut,
  cms,
  forum,
  mall,
};

export default Api;
