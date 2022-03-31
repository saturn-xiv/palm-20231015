import { Button, Card, Space } from "antd";
import { FormattedMessage } from "react-intl";

import { selectSiteInfo } from "../../../../reducers/site-info";
import { useAppSelector } from "../../../../hooks";

const Widget = () => {
  const site = useAppSelector(selectSiteInfo);
  return (
    <Card title={<FormattedMessage id="nut.admin.site.rss.title" />}>
      <Space wrap>
        {site.languages.map((it) => (
          <Button
            key={it}
            onClick={() => {
              window.open(`/rss/${it}.xml`, "_blank");
            }}
            type="link"
          >
            <FormattedMessage id={`languages.${it}`} />
          </Button>
        ))}
      </Space>
    </Card>
  );
};

export default Widget;
