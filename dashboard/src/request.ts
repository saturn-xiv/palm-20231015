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
