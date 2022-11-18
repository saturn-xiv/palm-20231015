import { Suspense, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { pdfjs } from "react-pdf";
import mermaid from "mermaid";

import store from "./store";
import Loading from "./components/Loading";
import Router from "./Router";
import onLoad from "./load";
import { get as getLocale } from "./locales";
import { API_HOST, GRPC_HOST, grpc_metadata } from "./request";
import { LocaleClient } from "./protocols/NutServiceClientPb";
import { LocaleByLangRequest } from "./protocols/nut_pb";

import "./App.css";

pdfjs.GlobalWorkerOptions.workerSrc = `${API_HOST}/assets/pdf.worker.min.js`;
mermaid.initialize({ startOnLoad: true });

onLoad();

const lang = getLocale();

const Widget = () => {
  const [messages, setMessages] = useState<Record<string, string>>({});

  useEffect(() => {
    const client = new LocaleClient(GRPC_HOST);
    const request = new LocaleByLangRequest();
    request.setLang(lang);
    client.byLang(request, grpc_metadata(), (err, res) => {
      if (!err) {
        const items: Record<string, string> = res
          .getItemsList()
          .reduce((ob, it, _) => {
            return { ...ob, [it.getCode()]: it.getMessage() };
          }, {} as Record<string, string>);
        setMessages(items);
      }
    });
  }, [setMessages]);
  return (
    <Provider store={store}>
      <IntlProvider
        messages={messages}
        locale={lang}
        defaultLocale={process.env.REACT_APP_DEFAULT_LOCALE}
      >
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Suspense fallback={<Loading />}>
            <Router />
          </Suspense>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  );
};

export default Widget;
