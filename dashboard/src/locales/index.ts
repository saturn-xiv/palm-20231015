import Cookies from "js-cookie";

import languages from "./languages";
import enUS from "./en-US";
import zhHans from "./zh-Hans";
import zhHant from "./zh-Hant";

const KEY = "locale";

export const DEFAULT: string = import.meta.env.VITE_DEFAULT_LOCALE;
export const LANGUAGES: string[] = import.meta.env.VITE_LANGUAGES;

export const get = (): string => {
  return localStorage.getItem(KEY) || Cookies.get(KEY) || DEFAULT;
};

export const set = (lang: string) => {
  Cookies.set(KEY, lang);
  localStorage.setItem(KEY, lang);
};

export const remove = () => {
  Cookies.remove(KEY);
  localStorage.removeItem(KEY);
};

const messages = (): Record<string, string> => {
  switch (get()) {
    case "zh-Hans":
      return { ...zhHans, ...languages };
    case "zh-Hant":
      return { ...zhHant, ...languages };
    default:
      return { ...enUS, ...languages };
  }
};

export default messages;
