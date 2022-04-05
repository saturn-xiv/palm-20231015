import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "material-design-icons/iconfont/material-icons.css";
import "react-quill/dist/quill.snow.css";

import "./App.css";

import { IntlProvider } from "react-intl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import loadable from "@loadable/component";
import { RefreshOutlined } from "@mui/icons-material";

import plugins from "./plugins";
import { detect as detectLocale, i18n as getI18n } from "./locales";
import store from "./store";

const lang = detectLocale();
const i18n = getI18n(lang);

const NotFound = loadable(() => import("./plugins/nut/404"), {
  fallback: <RefreshOutlined />,
});

const Widget = () => {
  return (
    <Provider store={store}>
      <IntlProvider messages={i18n.messages} locale={lang}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            {plugins.routes.map((it) => {
              const W = loadable(it.component, {
                fallback: <RefreshOutlined />,
              });
              return <Route key={it.path} path={it.path} element={<W />} />;
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  );
};

export default Widget;
