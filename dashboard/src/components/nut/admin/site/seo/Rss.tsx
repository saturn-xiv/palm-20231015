import { useIntl, getAllLocales } from 'umi';
import { Menu, Card } from 'antd';
import type { ItemType } from 'antd/lib/menu/hooks/useItems';

const Widget = () => {
  const intl = useIntl();
  let items: ItemType[] = getAllLocales().map((x) => ({
    label: intl.formatMessage({ id: `languages.${x}` }),
    key: `/${x}/rss.xml`,
  }));
  return (
    <Card title={intl.formatMessage({ id: 'nut.admin.site.rss.title' })}>
      <Menu
        items={items}
        onClick={({ key }) => {
          window.open(key, '_blank');
        }}
      />
    </Card>
  );
};

export default Widget;
