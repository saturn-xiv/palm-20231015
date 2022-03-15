import { message } from "antd";

import { getToken } from "./reducers/current-user";

export const graphql = (
  query: string,
  variables: object,
  callback: any,
  failed?: (items: string[]) => void
) => {
  fetch(`${process.env.REACT_APP_GRAPHQL_HOST}/graphql`, {
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
