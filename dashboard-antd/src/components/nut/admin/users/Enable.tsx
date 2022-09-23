import { useIntl, FormattedMessage } from "react-intl";
import { Popconfirm, Tooltip, message, Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { RpcError } from "grpc-web";

import { IdRequest } from "../../../../protocols/nut_pb";
import { SiteClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import { IUserDetails } from "../../../../reducers/current-user";

interface IProps {
  item: IUserDetails;
  handleRefresh: () => void;
}

const Widget = ({ item, handleRefresh }: IProps) => {
  const intl = useIntl();

  const disabled = item.deletedAt !== undefined;
  const action = disabled ? "enable" : "disable";
  return (
    <Popconfirm
      title={intl.formatMessage(
        {
          id: `nut.admin.users.${action}.confirm`,
        },
        { name: item.nickName }
      )}
      onConfirm={() => {
        const client = new SiteClient(GRPC_HOST);

        const request = new IdRequest();
        request.setId(item.id);
        const metadata = grpc_metadata();
        const handler = (err: RpcError) => {
          if (err) {
            message.error(err.message);
          } else {
            message.success(
              intl.formatMessage({ id: "form.submit.successed" })
            );
            handleRefresh();
          }
        };
        if (disabled) {
          client.enableUser(request, metadata, handler);
        } else {
          client.disableUser(request, metadata, handler);
        }
      }}
    >
      <Tooltip title={<FormattedMessage id={`buttons.${action}`} />}>
        <Button
          type="dashed"
          shape="circle"
          icon={disabled ? <CheckOutlined /> : <CloseOutlined />}
        />
      </Tooltip>
    </Popconfirm>
  );
};

export default Widget;
