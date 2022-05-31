import Cookies from 'js-cookie';

const KEY = 'locale';

export const get = (): string | undefined => {
  return localStorage.getItem(KEY) || Cookies.get(KEY);
};

export const set = (lang: string) => {
  Cookies.set(KEY, lang);
  localStorage.setItem(KEY, lang);
};

export const remove = () => {
  Cookies.remove(KEY);
  localStorage.removeItem(KEY);
};
