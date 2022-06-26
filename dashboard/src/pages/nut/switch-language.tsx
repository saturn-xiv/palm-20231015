import { Col, Card, Button, Popconfirm, List } from "antd";
import { useIntl } from "react-intl";
import { FormattedMessage } from "react-intl";

import Layout from "../../layouts/application";
import { set as setLocale, LANGUAGES } from "../../locales";

const Widget = () => {
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: "nut.switch-language.title" })}>
      <Col sm={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
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
      </Col>
    </Layout>
  );
};

export default Widget;
