import Cookies from "js-cookie";
import type { Locale as AntdLocale } from "antd/lib/locale-provider";
import antdZhCN from "antd/lib/locale/zh_CN";
import antdZhTW from "antd/lib/locale/zh_TW";
import antdEnUS from "antd/lib/locale/en_US";

import languages from "./languages";
import enUS from "./en-US";
import zhHans from "./zh-Hans";
import zhHant from "./zh-Hant";

const KEY = "locale";

export const DEFAULT: string = process.env.REACT_APP_DEFAULT_LOCALE || "en-US";
export const LANGUAGES: string[] = process.env.REACT_APP_LANGUAGES?.split(
  ","
) || ["en-US", "zh-Hans", "zh-Hant"];

export const get = (): string => {
  return localStorage.getItem(KEY) || Cookies.get(KEY) || DEFAULT;
};

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

interface ILocale {
  antd: AntdLocale;
  messages: Record<string, string>;
}

const messages = (): ILocale => {
  switch (get()) {
    case "zh-Hans":
      return { messages: { ...zhHans, ...languages }, antd: antdZhCN };
    case "zh-Hant":
      return { messages: { ...zhHant, ...languages }, antd: antdZhTW };
    default:
      return { messages: { ...enUS, ...languages }, antd: antdEnUS };
  }
};

export default messages;
