import { useIntl, getAllLocales } from 'umi';
import { Menu, Card } from 'antd';
import type { ItemType } from 'antd/lib/menu/hooks/useItems';

const Widget = () => {
  const intl = useIntl();
  var items = ['/favicon.png', '/robots.txt', '/sitemap.xml'].concat(
    getAllLocales().map((x) => `/${x}/sitemap.xml`),
  );

  // let items: ItemType[] = [{ label: '/sitemap.xml', key: '/sitemap.xml' }];
  return (
    <Card title={intl.formatMessage({ id: 'nut.admin.site.sitemap.title' })}>
      <Menu
        items={items.map((x) => ({ label: x, key: x }))}
        onClick={({ key }) => {
          window.open(key, '_blank');
        }}
      />
    </Card>
  );
};

export default Widget;
