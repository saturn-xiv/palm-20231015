export const graphql = (query: string, variables: object) => {
  fetch(process.env.UMI_APP_GRAPHQL_HOME, {
    mode: 'cors',
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};
