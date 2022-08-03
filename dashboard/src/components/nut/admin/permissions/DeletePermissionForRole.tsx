import { useIntl, FormattedMessage } from "react-intl";
import { Popconfirm, Tooltip, message, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import {
  RbacGetPermissionsResponse,
  RbacPermissionForRoleRequest,
} from "../../../../protocols/nut_pb";
import { RbacClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import {
  IPermission,
  IRoleOption,
  permission2string,
  ROLE_ADMINISTRATOR,
  ROLE_ROOT,
} from "../../../../reducers/current-user";

interface IProps {
  role: IRoleOption;
  permission: IPermission;
  handleRefresh: () => void;
}

const Widget = ({ role, permission, handleRefresh }: IProps) => {
  const intl = useIntl();

  return [ROLE_ROOT, ROLE_ADMINISTRATOR].includes(role.code) ? (
    <></>
  ) : (
    <Popconfirm
      title={intl.formatMessage(
        { id: "nut.admin.permissions.delete-permission-for-role" },
        { permission: permission2string(permission), role: role.code }
      )}
      onConfirm={() => {
        const client = new RbacClient(GRPC_HOST);

        const request = new RbacPermissionForRoleRequest();
        request.setRole(role.code);

        var pt = new RbacGetPermissionsResponse.Item();
        pt.setOperation(permission.operation);
        pt.setResourceType(permission.resourceType);
        if (permission.resourceId) {
          pt.setResourceId(permission.resourceId);
        }
        request.setPermission(pt);

        client.deletePermissionForRole(request, grpc_metadata(), (err) => {
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
