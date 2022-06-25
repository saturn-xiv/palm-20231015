import { Suspense, lazy } from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "antd/dist/antd.css";
import "@ant-design/pro-components/dist/components.css";
import "react-quill/dist/quill.snow.css";

import locales, {
  get as getLocale,
  DEFAULT as DEFAULT_LOCALE,
} from "./locales";
import store from "./store";
import pages from "./pages";
import Loading from "./Loading";
import NotFound from "./NotFound";

import "./App.css";

function App() {
  const messages = locales();
  const lang = getLocale();
  return (
    <IntlProvider
      messages={messages}
      locale={lang}
      defaultLocale={DEFAULT_LOCALE}
    >
      <Provider store={store}>
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              {pages.map((x) => {
                const Widget = lazy(x.component);
                return <Route path={x.path} element={<Widget />} />;
              })}

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </Provider>
    </IntlProvider>
  );
}

export default App;
