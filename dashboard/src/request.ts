import { message } from "antd";

import { getToken } from "./reducers/current-user";

export interface IResponse<T> {
  data?: T;
  errors?: { message: string }[];
}

export async function graphql<Q, R>(
  query: string,
  variables: Q
): Promise<IResponse<R>> {
  const response = await fetch(`${process.env.REACT_APP_API_HOST}/graphql`, {
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
  });
  const body: IResponse<R> = await response.json();
  return body;
}

export const graphql_ = (
  query: string,
  variables: object,
  callback: any,
  failed?: (items: string[]) => void
) => {
  fetch(`${process.env.REACT_APP_API_HOST}/graphql`, {
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
  })
    .then((res) => {
      const ok = res.ok;
      res.json().then((it: any) => {
        if (ok && it.data) {
          callback(it.data);
        } else {
          const items = it.errors.map((x: any) => x.message);
          if (failed) {
            failed(items);
          } else {
            items.forEach((it: string) => message.error(it));
          }
        }
      });
    })
    .catch((it) => message.error(it));
};
