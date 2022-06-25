import { useIntl, FormattedMessage } from "react-intl";
import { Popconfirm, Tooltip, message, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { RoleUserUnassociateRequest } from "../../../../protocols/nut_pb";
import { RoleClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import { ITableItem } from ".";

interface IProps {
  item: ITableItem;
  handleRefresh: () => void;
}

const Widget = ({ item, handleRefresh }: IProps) => {
  const intl = useIntl();
  return (
    <Popconfirm
      title={intl.formatMessage(
        { id: "table.confirm-to-remove" },
        {
          name: `${item.user.nickName}@${item.role.code}`,
        }
      )}
      onConfirm={() => {
        const client = new RoleClient(GRPC_HOST);

        const request = new RoleUserUnassociateRequest();
        request.setRole(item.role.code);
        request.setUser(item.user.id);

        client.unassociate(request, grpc_metadata(), (err) => {
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
      <Tooltip title={<FormattedMessage id="buttons.unassociate" />}>
        <Button type="dashed" shape="circle" icon={<DeleteOutlined />} danger />
      </Tooltip>
    </Popconfirm>
  );
};

export default Widget;
