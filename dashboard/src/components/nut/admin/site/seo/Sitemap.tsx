import { useIntl } from "react-intl";
import { Menu, Card } from "antd";

import { LANGUAGES } from "../../../../../locales";
import { useAppSelector } from "../../../../../hooks";

const Widget = () => {
  const layout = useAppSelector((state) => state.layout);
  const intl = useIntl();
  var items: string[] = [layout.logo, "/robots.txt", "/sitemap.xml"].concat(
    LANGUAGES.map((x) => `/${x}/sitemap.xml`)
  );

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
