import { Card, Space, Tooltip, Button } from "antd";
import { FormattedMessage } from "react-intl";
import { ClearOutlined } from "@ant-design/icons";

const Widget = () => {
  // TODO
  return (
    <Card title={<FormattedMessage id="nut.admin.site.cache.title" />}>
      <Space wrap>
        <Tooltip title={<FormattedMessage id="buttons.purge" />}>
          <Button
            type="dashed"
            shape="circle"
            danger
            icon={<ClearOutlined />}
            onClick={() => {
              // TODO
              console.log("TODO");
            }}
          />
        </Tooltip>
      </Space>
    </Card>
  );
};

export default Widget;
