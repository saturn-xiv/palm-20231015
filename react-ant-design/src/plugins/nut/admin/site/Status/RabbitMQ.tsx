import { Card, Space } from "antd";
import { FormattedMessage } from "react-intl";

export interface IProps {
  protocol: string;
}

const Widget = (props: IProps) => {
  return (
    <Card title={<FormattedMessage id="nut.admin.site.rabbitmq.title" />}>
      <Space>{props.protocol}</Space>
    </Card>
  );
};

export default Widget;
