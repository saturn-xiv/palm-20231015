import { message } from 'antd';

import { get as getToken } from './components/Auth';

export const graphql = (query: string, variables: object, callback: any) => {
  return fetch(`${process.env.UMI_APP_RPC_HOME}/graphql`, {
    mode: 'cors',
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
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
          it.errors
            .map((x: any) => x.message)
            .forEach((x: string) => message.error(x, 6));
        }
      });
    })

    .catch(console.error);
};
