import Cookies from 'js-cookie';

const KEY = 'locale';

export const getLocale = (): string | undefined => {
  return localStorage.getItem(KEY) || Cookies.get(KEY);
};

export const setLocale = (lang: string) => {
  Cookies.set(KEY, lang);
  localStorage.setItem(KEY, lang);
};

export const removeLocale = () => {
  Cookies.remove(KEY);
  localStorage.removeItem(KEY);
};
