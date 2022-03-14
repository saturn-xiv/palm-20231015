import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ReloadOutlined } from "@ant-design/icons";
import loadable from "@loadable/component";
import { ConfigProvider } from "antd";

import plugins from "./plugins";
import { detect as detectLocale, i18n as getI18n } from "./locales";
import NotFound from "./plugins/nut/not-found";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { BASE_NAME } from "./layouts";

const lang = detectLocale();
const i18n = getI18n(lang);

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={i18n.antd}>
      <Provider store={store}>
        <IntlProvider messages={i18n.messages} locale={lang}>
          <BrowserRouter basename={BASE_NAME}>
            <Routes>
              {plugins.routes.map((it) => {
                const W = loadable(it.component, {
                  fallback: <ReloadOutlined />,
                });
                return <Route key={it.path} path={it.path} element={<W />} />;
              })}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </IntlProvider>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
