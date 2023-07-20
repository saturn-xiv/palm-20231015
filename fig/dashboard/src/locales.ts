import Cookies from "js-cookie";

import "moment/locale/zh-cn";
import "moment/locale/zh-tw";
import "moment/locale/es";
import "moment/locale/fr";
import "moment/locale/ja";
import "moment/locale/ko";

const KEY = "locale";

export interface IItem {
  id: number;
  code: string;
  message: string;
  updatedAt: Date;
}

export const get = (): string => {
  return (
    localStorage.getItem(KEY) ||
    Cookies.get(KEY) ||
    process.env.REACT_APP_DEFAULT_LOCALE ||
    "en-US"
  );
};

export const available_languages: string[] = (
  process.env.REACT_APP_AVAILABLE_LANGUAGES || "en-US,zh-Hans"
).split(",");

export const set = (lang: string, reload: boolean) => {
  Cookies.set(KEY, lang);
  localStorage.setItem(KEY, lang);
  if (reload) {
    window.location.reload();
  }
};

export const remove = () => {
  Cookies.remove(KEY);
  localStorage.removeItem(KEY);
};

export interface ILocale {
  messages: Record<string, string>;
}
