import { IntlProvider, FormattedMessage } from "react-intl";
import { Provider } from "react-redux";

import locales, {
  get as getLocale,
  DEFAULT as DEFAULT_LOCALE,
} from "./locales";
import store from "./store";

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
        <div>
          <FormattedMessage id="nut.404.title" />
        </div>
      </Provider>
    </IntlProvider>
  );
}

export default App;
