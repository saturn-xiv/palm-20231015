import { useIntl } from "react-intl";

import { RbacClient } from "../../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../../request";
import {
  RbacGetPermissionsResponse,
  RbacRoleRequest,
} from "../../../../../protocols/nut_pb";
import PermissionList from "../PermissionList";
import { IRoleOption } from "../../../../../reducers/current-user";
import DestroyButton from "../DeletePermissionForRole";

interface IProps {
  role: IRoleOption;
}

const Widget = ({ role }: IProps) => {
  const intl = useIntl();
  const title = intl.formatMessage(
    {
      id: "nut.admin.permissions.roles.index.permissions",
    },
    { name: role.name }
  );
  const load = (): Promise<RbacGetPermissionsResponse> => {
    const client = new RbacClient(GRPC_HOST);
    const request = new RbacRoleRequest();
    request.setCode(role.code);
    return client.getPermissionsForRole(request, grpc_metadata());
  };
  return (
    <PermissionList
      title={title}
      onRefresh={load}
      destroy={(it, hnd) => (
        <DestroyButton handleRefresh={hnd} permission={it} role={role} />
      )}
    />
  );
};

export default Widget;