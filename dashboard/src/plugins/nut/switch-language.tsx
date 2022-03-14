import { useIntl, FormattedMessage } from "react-intl";
import { Card, Button, List } from "antd";
import { useNavigate } from "react-router-dom";

import Layout from "../../layouts/application";
import { useAppSelector } from "../../hooks";
import { selectSiteInfo } from "../../reducers/site-info";
import { detect as currentLocale, set as setLocale } from "../../locales";

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.switch-language.title" });
  const site = useAppSelector(selectSiteInfo);
  const style = { width: "100%" };
  const navigate = useNavigate();
  return (
    <Layout title={title}>
      <Card title={title}>
        <Card.Grid hoverable={false} style={style}>
          <List
            bordered={true}
            dataSource={site.languages}
            renderItem={(it) => (
              <List.Item>
                <Button
                  onClick={() => {
                    setLocale(it, true);
                  }}
                  type="link"
                  disabled={currentLocale() === it}
                >
                  <FormattedMessage id={`languages.${it}`} />
                </Button>
              </List.Item>
            )}
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={style}>
          <Button key="home" type="primary" onClick={() => navigate("/")}>
            {intl.formatMessage({ id: "buttons.go-home" })}
          </Button>
        </Card.Grid>
      </Card>
    </Layout>
  );
};

export default Widget;
