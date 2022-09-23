import { useIntl, FormattedMessage } from "react-intl";
import { Popconfirm, Tooltip, message, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { RbacRoleForUserRequest } from "../../../../protocols/nut_pb";
import { RbacClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import { IRoleOption, IUserOption } from "../../../../reducers/current-user";
import { useAppSelector } from "../../../../hooks";
import { currentUser } from "../../../../reducers/current-user";

interface IProps {
  user: IUserOption;
  role: IRoleOption;
  handleRefresh: () => void;
}

const Widget = ({ user, role, handleRefresh }: IProps) => {
  const intl = useIntl();
  const current_user = useAppSelector(currentUser);
  return current_user?.id === user.id ? (
    <></>
  ) : (
    <Popconfirm
      title={intl.formatMessage(
        { id: "nut.admin.permissions.delete-role-for-user" },
        { user: user.nickName, role: role.code }
      )}
      onConfirm={() => {
        const client = new RbacClient(GRPC_HOST);

        const request = new RbacRoleForUserRequest();
        request.setUser(user.id);
        request.setRole(role.code);

        client.deleteRoleForUser(request, grpc_metadata(), (err) => {
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
      <Tooltip title={<FormattedMessage id="buttons.remove" />}>
        <Button type="dashed" shape="circle" icon={<DeleteOutlined />} danger />
      </Tooltip>
    </Popconfirm>
  );
};

export default Widget;
