import "react-quill/dist/quill.snow.css";
import "office-ui-fabric-core/dist/css/fabric.css";

import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import loadable from "@loadable/component";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { RefreshIcon } from "@fluentui/react-icons-mdl2";

import plugins from "./plugins";
import { get as getLocale, messages as getMessages } from "./locales";
import NotFound from "./404";
import reportWebVitals from "./reportWebVitals";
import store from "./store";

initializeIcons();

const lang = getLocale();
const messages = getMessages(lang);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider messages={messages} locale={lang}>
        <BrowserRouter basename="/my/">
          <Routes>
            {plugins.routes.map((it) => {
              const W = loadable(it.component, {
                fallback: <RefreshIcon />,
              });
              return <Route key={it.path} path={it.path} element={<W />} />;
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
