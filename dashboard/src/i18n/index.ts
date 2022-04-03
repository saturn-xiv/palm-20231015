import { createI18n } from "vue-i18n";
import Cookies from "js-cookie";

import enUS from "./en-US";
import zhHans from "./zh-Hans";
import zhHant from "./zh-Hant";

const KEY = "locale";

export const detect = (): string => {
  return localStorage.getItem(KEY) || Cookies.get(KEY) || "en-US";
};

export const set = (lang: string, refresh: boolean) => {
  localStorage.setItem(KEY, lang);
  Cookies.set(KEY, lang);
  if (refresh) {
    window.location.reload();
  }
};

const languages = {
  "en-US": "English",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
};

export default createI18n({
  locale: detect(),
  fallbackLocale: "en-US",
  messages: {
    "en-US": { languages, ...enUS },
    "zh-Hans": { languages, ...zhHans },
    "zh-Hant": { languages, ...zhHant },
  },
});
