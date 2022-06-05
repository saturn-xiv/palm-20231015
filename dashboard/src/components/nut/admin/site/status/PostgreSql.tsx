import { Card, Typography, List } from 'antd';
import { SiteStatusResponse } from '@/protocols/nut_pb';

export interface IProps {
  item?: SiteStatusResponse.PostgreSql;
}

interface IItem {
  key?: string;
  value?: string;
}

const Widget = ({ item }: IProps) => {
  var items: IItem[] = [
    { key: 'Timestamp', value: item?.getNow()?.toString() },
    { key: 'Version', value: item?.getVersion() },
  ];
  if (item) {
    items = items.concat(
      item
        .getDatabasesList()
        .map((x) => ({ key: x.getName(), value: x.getSize() })),
    );
  }

  return (
    <Card title="PostgreSql">
      <List<IItem>
        bordered
        dataSource={items}
        renderItem={(it) => (
          <List.Item>
            <Typography.Text mark>{it.key}</Typography.Text>: &nbsp; {it.value}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Widget;
