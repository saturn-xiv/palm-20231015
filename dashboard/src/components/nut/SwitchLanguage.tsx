import { Card, Button, Popconfirm, List } from "antd";
import { useIntl, FormattedMessage } from "react-intl";

import { set as setLocale, LANGUAGES } from "../../locales";

const Widget = () => {
  const intl = useIntl();
  return (
    <Card>
      <List
        bordered
        dataSource={LANGUAGES}
        renderItem={(it) => (
          <List.Item>
            <Popconfirm
              title={intl.formatMessage(
                {
                  id: "nut.switch-language.confirm",
                },
                { lang: intl.formatMessage({ id: `languages.${it}` }) }
              )}
              onConfirm={() => {
                setLocale(it, true);
              }}
            >
              <Button type="text">
                <FormattedMessage id={`languages.${it}`} />
              </Button>
            </Popconfirm>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Widget;
