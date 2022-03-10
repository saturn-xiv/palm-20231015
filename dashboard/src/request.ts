import { getToken } from "./reducers/current-user";

export interface IErrorHandler {}

export const graphql = (
  query: string,
  variables: object,
  callback: any,
  failed: (msg: string[]) => void
) => {
  return fetch(`${process.env.REACT_APP_GRAPHQL_HOST}/graphql`, {
    mode: "cors",
    method: "POST",
    cache: "no-cache",
    credentials: "same-origin",
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
          failed(it.errors.map((x: any) => x.message));
        }
      });
    })

    .catch(console.error);
};
