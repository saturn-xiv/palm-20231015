import { useIntl, FormattedMessage } from "react-intl";
import { Button, List } from "antd";

import Layout from "../../layouts/application";
import { useAppSelector } from "../../hooks";
import { selectSiteInfo } from "../../reducers/site-info";
import GoHomeOrBack from "../../components/GoHomeOrBack";

import { detect as currentLocale, set as setLocale } from "../../locales";

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.switch-language.title" });
  const site = useAppSelector(selectSiteInfo);

  return (
    <Layout title={title}>
      <GoHomeOrBack>
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
      </GoHomeOrBack>
    </Layout>
  );
};

export default Widget;
