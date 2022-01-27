export const validators = {
  nickName: {
    required: true,
    pattern: /\w{3,32}/i,
  },
  realName: {
    required: true,
    minLength: 2,
    maxLength: 32,
  },
  email: {
    required: true,
    pattern: /^[\w-.]+@[\w-.]+\.[a-z]{2,}$/i,
    minLength: 4,
    maxLength: 255,
  },
  password: {
    required: true,
    minLength: 6,
    maxLength: 32,
  },
};

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
