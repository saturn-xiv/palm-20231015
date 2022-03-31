import { Button, Card, Space } from "antd";
import { FormattedMessage } from "react-intl";

import { selectSiteInfo } from "../../../../reducers/site-info";
import { useAppSelector } from "../../../../hooks";

const Widget = () => {
  const site = useAppSelector(selectSiteInfo);
  return (
    <Card title={<FormattedMessage id="nut.admin.site.sitemap.title" />}>
      <Space wrap>
        {["favicon.png", "robots.txt", "sitemap.xml"].map((it) => (
          <Button
            key={it}
            onClick={() => {
              window.open(it, "_blank");
            }}
            type="link"
          >
            {it}
          </Button>
        ))}
        {site.languages.map((it) => (
          <Button
            key={it}
            onClick={() => {
              window.open(`/sitemap/${it}.xml`, "_blank");
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
