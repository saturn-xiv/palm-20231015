import { useIntl, FormattedMessage } from "react-intl";
import { Popconfirm, Tooltip, message, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import {
  RbacGetPermissionsResponse,
  RbacPermissionForUserRequest,
} from "../../../../protocols/nut_pb";
import { RbacClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import {
  IPermission,
  IUserOption,
  permission2string,
} from "../../../../reducers/current-user";
import { useAppSelector } from "../../../../hooks";
import { currentUser } from "../../../../reducers/current-user";

interface IProps {
  user: IUserOption;
  permission: IPermission;
  handleRefresh: () => void;
}

const Widget = ({ user, permission, handleRefresh }: IProps) => {
  const intl = useIntl();
  const current_user = useAppSelector(currentUser);
  return current_user?.id === user.id ? (
    <></>
  ) : (
    <Popconfirm
      title={intl.formatMessage(
        { id: "nut.admin.permissions.delete-permission-for-user" },
        { permission: permission2string(permission), user: user.nickName }
      )}
      onConfirm={() => {
        const client = new RbacClient(GRPC_HOST);

        const request = new RbacPermissionForUserRequest();
        request.setUser(user.id);

        var pt = new RbacGetPermissionsResponse.Item();
        pt.setOperation(permission.operation);
        pt.setResourceType(permission.resourceType);
        if (permission.resourceId) {
          pt.setResourceId(permission.resourceId);
        }
        request.setPermission(pt);

        client.deletePermissionForUser(request, grpc_metadata(), (err) => {
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
