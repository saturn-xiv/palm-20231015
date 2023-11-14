import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

import store from "./store";
import messages, { get as getLocale } from "./locales";
import Router from "./Router";
import onLoad from "./load";

dayjs.extend(duration);
dayjs.extend(relativeTime);

onLoad();
const lang = getLocale();

const Widget = () => {
  return (
    <Provider store={store}>
      <IntlProvider
        messages={messages(lang)}
        locale={lang}
        defaultLocale={process.env.REACT_APP_DEFAULT_LOCALE}
      >
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Router />
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  );
};

export default Widget;
