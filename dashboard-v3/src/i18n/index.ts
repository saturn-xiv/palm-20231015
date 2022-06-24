import Cookies from 'js-cookie';
import { setLocale as setUmiLocale, getLocale as getUmiLocale } from 'umi';

const KEY = 'locale';

export const getLocale = (): string => {
  return localStorage.getItem(KEY) || Cookies.get(KEY) || getUmiLocale();
};

export const setLocale = (lang: string) => {
  Cookies.set(KEY, lang);
  localStorage.setItem(KEY, lang);
  setUmiLocale(lang, true);
};

export const removeLocale = () => {
  Cookies.remove(KEY);
  localStorage.removeItem(KEY);
};
