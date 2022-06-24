import { IntlProvider, FormattedMessage } from "react-intl";

import locales, {
  get as getLocale,
  DEFAULT as DEFAULT_LOCALE,
} from "./locales";

function App() {
  const messages = locales();
  const lang = getLocale();
  return (
    <IntlProvider
      messages={messages}
      locale={lang}
      defaultLocale={DEFAULT_LOCALE}
    >
      <div className="App">
        <FormattedMessage id="nut.404.title" />
      </div>
    </IntlProvider>
  );
}

export default App;
