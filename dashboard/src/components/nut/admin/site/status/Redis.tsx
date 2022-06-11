import { Card, List, Table } from 'antd';
import { SiteStatusResponse } from '@/protocols/nut_pb';

export interface IProps {
  item?: SiteStatusResponse.Redis;
}

interface IItem {
  key?: string;
  ttl?: number;
}

const Widget = ({ item }: IProps) => {
  return (
    <Card title="Redis">
      <Table
        columns={[
          { title: 'KEY', dataIndex: 'key', key: 'key' },
          { title: 'TTL', dataIndex: 'ttl', key: 'ttl' },
        ]}
        dataSource={item
          ?.getItemsList()
          .map((x) => ({ key: x.getKey(), ttl: x.getTtl() }))}
      />

      <List
        dataSource={item?.getInfo().split('\r\n')}
        bordered
        renderItem={(item) => <List.Item>${item}</List.Item>}
        pagination={{ position: 'bottom' }}
      />
    </Card>
  );
};

export default Widget;
