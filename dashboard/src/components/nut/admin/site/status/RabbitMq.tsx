import { Card, Typography, List } from "antd";
import { SiteStatusResponse } from "../../../../../protocols/nut_pb";

export interface IProps {
  item?: SiteStatusResponse.RabbitMq;
}

interface IItem {
  key?: string;
  value?: string;
}

const Widget = ({ item }: IProps) => {
  var items: IItem[] = [{ key: "Protocol", value: item?.getProtocol() }];

  return (
    <Card title="RabbitMq">
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
