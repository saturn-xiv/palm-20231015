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

const api = {
  nut,
  cms,
  forum,
  mall,
};

export default api;
