import Cookies from "js-cookie";
import type { Locale as AntdLocale } from "antd/lib/locale-provider";
import antdEnUS from "antd/lib/locale/en_US";
import antdZhCN from "antd/lib/locale/zh_CN";
import antdZhTW from "antd/lib/locale/zh_TW";
import antdEs from "antd/lib/locale/es_ES";
import antdFr from "antd/lib/locale/fr_FR";
import antdJa from "antd/lib/locale/ja_JP";
import antdKo from "antd/lib/locale/ko_KR";
import "@ant-design/pro-provider/lib/locale/en_US";
import "@ant-design/pro-provider/lib/locale/zh_CN";
import "@ant-design/pro-provider/lib/locale/zh_TW";
import "@ant-design/pro-provider/lib/locale/es_ES";
import "@ant-design/pro-provider/lib/locale/fr_FR";
import "@ant-design/pro-provider/lib/locale/ja_JP";
import "@ant-design/pro-provider/lib/locale/ko_KR";
import "moment/locale/zh-cn";
import "moment/locale/zh-tw";
import "moment/locale/es";
import "moment/locale/fr";
import "moment/locale/ja";
import "moment/locale/ko";

import languages from "./languages";
import enUS from "./en-US";
import zhHans from "./zh-Hans";
import zhHant from "./zh-Hant";
import es from "./es";
import fr from "./fr";
import ja from "./ja";
import ko from "./ko";

const KEY = "locale";

export const DEFAULT: string = process.env.REACT_APP_DEFAULT_LOCALE || "en-US";
export const LANGUAGES: string[] = process.env.REACT_APP_LANGUAGES?.split(
  ","
) || ["en-US", "zh-Hans"];

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

const messages = (lang: string): ILocale => {
  switch (lang) {
    case "zh-Hans":
      return {
        messages: { ...zhHans, ...languages },
        antd: antdZhCN,
      };
    case "zh-Hant":
      return {
        messages: { ...zhHant, ...languages },
        antd: antdZhTW,
      };
    case "es":
      return {
        messages: { ...es, ...languages },
        antd: antdEs,
      };
    case "fr":
      return {
        messages: { ...fr, ...languages },
        antd: antdFr,
      };
    case "ja":
      return {
        messages: { ...ja, ...languages },
        antd: antdJa,
      };
    case "ko":
      return {
        messages: { ...ko, ...languages },
        antd: antdKo,
      };
    default:
      return {
        messages: { ...enUS, ...languages },
        antd: antdEnUS,
      };
  }
};

export default messages;
