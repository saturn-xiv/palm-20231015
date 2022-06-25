import { useIntl } from "react-intl";
import { Menu, Card } from "antd";

import { LANGUAGES } from "../../../../../locales";
import { useAppSelector } from "../../../../../hooks";
import { siteInfo } from "../../../../../reducers/layout";

const Widget = () => {
  const site = useAppSelector(siteInfo);
  const intl = useIntl();
  var items: string[] = [
    site?.logo || "/favicon.png",
    "/robots.txt",
    "/sitemap.xml",
  ].concat(LANGUAGES.map((x) => `/${x}/sitemap.xml`));

  // let items: ItemType[] = [{ label: '/sitemap.xml', key: '/sitemap.xml' }];
  return (
    <Card title={intl.formatMessage({ id: "nut.admin.site.sitemap.title" })}>
      <Menu
        items={items.map((x) => ({ label: x, key: x }))}
        onClick={({ key }) => {
          window.open(key, "_blank");
        }}
      />
    </Card>
  );
};

export default Widget;
