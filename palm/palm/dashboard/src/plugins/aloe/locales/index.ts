import Cookies from "js-cookie";
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

const messages = (lang: string): Record<string, string> => {
  switch (lang) {
    case "zh-Hans":
      return { ...zhHans, ...languages };
    case "zh-Hant":
      return { ...zhHant, ...languages };

    case "es":
      return { ...es, ...languages };
    case "fr":
      return { ...fr, ...languages };
    case "ja":
      return { ...ja, ...languages };
    case "ko":
      return { ...ko, ...languages };
    default:
      return { ...enUS, ...languages };
  }
};

export default messages;
