import enUS from "./en-US";
import zhHans from "./zh-Hans";
import zhHant from "./zh-Hant";

const KEY = "locale";

export const detect = (): string => {
  return localStorage.getItem(KEY) || "en-US";
};

export const set = (lang: string, refresh: boolean) => {
  localStorage.setItem(KEY, lang);
  if (refresh) {
    window.location.reload();
  }
};

const languages = {
  "languages.en-US": "English",
  "languages.zh-Hans": "简体中文",
  "languages.zh-Hant": "繁體中文",
  "languages.ko-KR": "한국어",
  "languages.ja-JP": "日本語",
  "languages.es-ES": "Español",
};

export const i18n = (lang: string): any => {
  switch (lang) {
    case "zh-Hans":
      return { messages: { ...languages, ...zhHans } };
    case "zh-Hant":
      return { messages: { ...languages, ...zhHant } };
    default:
      return { messages: { ...languages, ...enUS } };
  }
};
