import { Popconfirm, Tooltip, Button, message } from "antd";
import { FormattedMessage, useIntl } from "react-intl";
import { ClearOutlined } from "@ant-design/icons";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { SiteClient } from "../../../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../../../request";

interface IProps {
  handleRefresh: () => void;
}

const Widget = ({ handleRefresh }: IProps) => {
  const intl = useIntl();
  return (
    <Popconfirm
      title={intl.formatMessage({ id: "nut.admin.site.redis.clear-confirm" })}
      onConfirm={() => {
        const client = new SiteClient(GRPC_HOST);

        client.clearCache(new Empty(), grpc_metadata(), (err) => {
          if (err) {
            message.error(err.message);
          } else {
            message.success(
              intl.formatMessage({ id: "form.submit.successed" })
            );
            handleRefresh();
          }
        });
      }}
    >
      <Tooltip title={<FormattedMessage id="buttons.clear" />}>
        <Button icon={<ClearOutlined />} type="dashed" shape="circle" danger />
      </Tooltip>
    </Popconfirm>
  );
};

export default Widget;
