import { Suspense, lazy } from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";

import locales, {
  get as getLocale,
  DEFAULT as DEFAULT_LOCALE,
} from "./locales";
import { switch_lang as switch_dayjs_lang } from "./components/date";
import store from "./store";
import onLoad from "./load";
import pages from "./pages";
import Loading from "./Loading";
import NotFound from "./NotFound";

import "./App.css";

onLoad();
const i18n = locales();
const lang = getLocale();
switch_dayjs_lang(lang);

const Widget = () => {
  return (
    <IntlProvider
      messages={i18n.messages}
      locale={lang}
      defaultLocale={DEFAULT_LOCALE}
    >
      <ConfigProvider locale={i18n.antd}>
        <Provider store={store}>
          <Router basename={process.env.PUBLIC_URL}>
            <Suspense fallback={<Loading />}>
              <Routes>
                {pages.map((x, i) => {
                  const Widget = lazy(x.component);
                  return <Route key={i} path={x.path} element={<Widget />} />;
                })}

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Router>
        </Provider>
      </ConfigProvider>
    </IntlProvider>
  );
};

export default Widget;
