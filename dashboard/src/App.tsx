import { Suspense } from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { pdfjs } from "react-pdf";

import store from "./store";
import Loading from "./components/Loading";
import Router from "./Router";
import onLoad from "./load";
import { get as getLocale } from "./locales";
import { API_HOST } from "./request";

import "react-quill/dist/quill.snow.css";

import "./App.css";

pdfjs.GlobalWorkerOptions.workerSrc = `${API_HOST}/assets/pdf.worker.min.js`;

onLoad();

const lang = getLocale();

const Widget = () => {
  return (
    <Provider store={store}>
      <IntlProvider messages={{}} locale={lang} defaultLocale={"en-US"}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Suspense fallback={<Loading />}>
            <Router />
          </Suspense>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  );
};

export default Widget;
