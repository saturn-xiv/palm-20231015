import { Card, Typography, List } from 'antd';
import { SiteStatusResponse } from '@/protocols/nut_pb';

export interface IProps {
  item?: SiteStatusResponse.System;
}

interface IItem {
  key?: string;
  value?: string;
}

const Widget = ({ item }: IProps) => {
  var items: IItem[] = [{ key: 'Version', value: item?.getVersion() }];

  return (
    <Card title="System">
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
