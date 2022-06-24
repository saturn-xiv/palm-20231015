import { useIntl, getAllLocales, useModel } from 'umi';
import { Menu, Card } from 'antd';

const Widget = () => {
  const { initialState } = useModel('@@initialState');
  const intl = useIntl();
  var items: string[] = [
    initialState?.layout.logo || '/my/favicon.png',
    '/robots.txt',
    '/sitemap.xml',
  ].concat(getAllLocales().map((x) => `/${x}/sitemap.xml`));

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
