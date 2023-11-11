import { Metadata } from "grpc-web";
import { get as getLocale } from "./locales";

import { get as getToken } from "./reducers/current-user";

export interface IOkResponse {
  createdAt: Date;
}

export type IErrorResponse = I422Response | I500Response;

export interface I422Response {
  errors: string[];
}
export interface I500Response {
  code: number;
  message: string;
}

export const GRPC_HOST: string =
  process.env.REACT_APP_GRPC_HOST || "http://localhost:9090";

export const grpc_metadata = (): Metadata => {
  return {
    authorization: `Bearer ${getToken()}`,
    "accept-language": getLocale(),
  };
};

export const upload = () => {
  return {
    Authorization: `Bearer ${getToken()}`,
  };
};

export const options = (method: string): RequestInit => {
  return {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    mode: "cors",
    method,
  };
};
