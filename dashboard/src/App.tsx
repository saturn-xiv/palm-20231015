import { Suspense } from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { ConfigProviderWrap } from "@ant-design/pro-provider";

import locales, {
  get as getLocale,
  DEFAULT as DEFAULT_LOCALE,
} from "./locales";
import { switch_lang as switch_dayjs_lang } from "./components/date";
import store from "./store";
import onLoad from "./load";
import Loading from "./components/Loading";
import Router from "./Router";

import "./App.css";

onLoad();
const lang = getLocale();
const i18n = locales(lang);
switch_dayjs_lang(lang);

const Widget = () => {
  // FIXME intl for pro-form...
  return (
    <Provider store={store}>
      <IntlProvider
        messages={i18n.messages}
        locale={lang}
        defaultLocale={DEFAULT_LOCALE}
      >
        <ConfigProvider locale={i18n.antd}>
          <ConfigProviderWrap>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Suspense fallback={<Loading />}>
                <Router />
              </Suspense>
            </BrowserRouter>
          </ConfigProviderWrap>
        </ConfigProvider>
      </IntlProvider>
    </Provider>
  );
};

export default Widget;
