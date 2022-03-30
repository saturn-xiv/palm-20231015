import { createI18n } from "vue-i18n";
import Cookies from "js-cookie";

import enUS from "./en-US";
import zhHans from "./zh-Hans";
import zhHant from "./zh-Hant";

const languages = {
  languages: {
    "en-US": "English",
    "zh-Hans": "简体中文",
    "zh-Hant": "繁體中文",
  },
};

const KEY = "locale";
const ENGLISH = "en-US";

export const detect = (): string => {
  return localStorage.getItem(KEY) || Cookies.get(KEY) || ENGLISH;
};

export const set = (lang: string, refresh: boolean) => {
  Cookies.set(KEY, lang);
  localStorage.setItem(KEY, lang);
  if (refresh) {
    window.location.reload();
  }
};

const i18n = createI18n({
  locale:
    typeof import.meta.env.VUE_APP_I18N_LOCALE === "string"
      ? import.meta.env.VUE_APP_I18N_LOCALE
      : detect(),
  fallbackLocale: ENGLISH,
  messages: {
    "en-US": { ...languages, ...enUS },
    "zh-Hans": { ...languages, ...zhHans },
    "zh-Hant": { ...languages, ...zhHant },
  },
});

export default i18n;
