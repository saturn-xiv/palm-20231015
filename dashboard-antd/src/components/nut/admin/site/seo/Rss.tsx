import { useIntl, FormattedMessage } from "react-intl";
import { Menu, Card } from "antd";
import type { ItemType } from "antd/lib/menu/hooks/useItems";

import rss_svg from "../../../../../assets/rss.svg";
import { LANGUAGES } from "../../../../../locales";

const Widget = () => {
  const intl = useIntl();
  let items: ItemType[] = LANGUAGES.map((x) => ({
    label: intl.formatMessage({ id: `languages.${x}` }),
    key: `/${x}/rss.xml`,
  }));
  return (
    <Card
      title={
        <>
          <img alt="rss" style={{ width: 24, height: 24 }} src={rss_svg} />
          &nbsp;
          <FormattedMessage id="nut.admin.site.rss.title" />
        </>
      }
    >
      <Menu
        items={items}
        onClick={({ key }) => {
          window.open(key, "_blank");
        }}
      />
    </Card>
  );
};

export default Widget;