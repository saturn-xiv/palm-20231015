import { Metadata } from "grpc-web";

import nut from "./nut/";
import forum from "./forum";
import mall from "./mall";
import cms from "./cms";
import { getToken } from "../reducers/current-user";

export interface IOk {}

export const metadata = (): Metadata => {
  return { authorization: `Bearer ${getToken()}` };
};

export interface IGraphQLResponse<T> {
  data?: T;
  errors?: { message: string }[];
}

export async function graphql<Q, R>(
  query: string,
  variables: Q
): Promise<IGraphQLResponse<R>> {
  const response = await fetch(
    `${process.env.REACT_APP_GRAPHQL_HOST}/graphql`,
    {
      mode: "cors",
      method: "POST",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );
  const body: IGraphQLResponse<R> = await response.json();
  return body;
}

const backend = (path: string): string =>
  `${process.env.REACT_APP_API_HOST}${path}`;

function options<Q>(method: string, body?: Q): RequestInit {
  var headers: HeadersInit = new Headers();
  headers.set("Authorization", `Bearer ${getToken()}`);
  // https://github.github.io/fetch/#options
  if (method === "POST") {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }
  var it: RequestInit = {
    method: method,
    // mode: 'cors',
    credentials: "include",
    headers,
  };
  if (body) {
    it.body = JSON.stringify(body);
  }
  return it;
}

// async function parse<R>(res: Response): Promise<R> {
//   if (res.ok) {
//     const it: R = await res.json();
//     return it;
//   }
//   res.text().then((err: string) => {
//     throw err;
//   });
// }

export async function http_get<R>(path: string): Promise<R> {
  return fetch(backend(path), options("GET")).then((res) => res.json());
}
export async function http_delete<R>(path: string): Promise<R> {
  return fetch(backend(path), options("DELETE")).then((res) => res.json());
}

// https://github.github.io/fetch/#options
export async function http_post<Q, R>(path: string, body: Q): Promise<R> {
  return fetch(backend(path), options("POST", body)).then((res) => res.json());
}
export async function http_patch<Q, R>(path: string, body: Q): Promise<R> {
  return fetch(backend(path), options("PATCH", body)).then((res) => res.json());
}
export async function http_put<Q, R>(path: string, body: Q): Promise<R> {
  return fetch(backend(path), options("PUT", body)).then((res) => res.json());
}

export async function http_download(path: string, name: string): Promise<any> {
  return fetch(backend(path), options("GET"))
    .then((res) => res.blob())
    .then((blob) => {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = name;
      // for firefox
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
}

const api = {
  nut,
  cms,
  forum,
  mall,
};

export default api;
