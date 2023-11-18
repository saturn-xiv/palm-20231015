export const get_token = (): string | null => {
  const key = "token";
  const token = sessionStorage.getItem(key);
  if (token) {
    return token;
  }
  return localStorage.getItem(key);
};

export const ajax_get_options = (): RequestInit => ajax_options("GET");

const ajax_options = (method: string): RequestInit => {
  return {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${get_token()}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    // mode: "cors",
    method,
  };
};
