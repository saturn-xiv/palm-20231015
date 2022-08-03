import { useIntl } from "react-intl";

import { IUserOption } from "../../../../../reducers/current-user";
import { RbacClient } from "../../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../../request";
import {
  RbacGetPermissionsResponse,
  RbacUserRequest,
} from "../../../../../protocols/nut_pb";
import PermissionList from "../List";

interface IProps {
  user: IUserOption;
}

const Widget = ({ user }: IProps) => {
  const intl = useIntl();
  const title = intl.formatMessage(
    {
      id: "nut.admin.permissions.users.index.permissions",
    },
    { name: user.nickName }
  );
  const load = (): Promise<RbacGetPermissionsResponse> => {
    const client = new RbacClient(GRPC_HOST);
    const request = new RbacUserRequest();
    request.setId(user.id);
    return client.getPermissionsForUser(request, grpc_metadata());
  };

  return <PermissionList title={title} onRefresh={load} />;
};

export default Widget;
