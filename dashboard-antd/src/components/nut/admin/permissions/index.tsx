import { useEffect, useState, useCallback } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import { Col, Space, Tabs } from "antd";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { setTitle } from "../../../../reducers/layout";
import { useAppDispatch } from "../../../../hooks";
import RolesIndex from "./roles";
import UsersIndex from "./users";
import {
  IRoleOption,
  IUserOption,
  ROLE_ADMINISTRATOR,
} from "../../../../reducers/current-user";
import { RbacClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import AddRoleForUser from "./AddRoleForUser";
import AddPermissionForUser from "./AddPermissionForUser";
import AddPermissionForRole from "./AddPermissionForRole";
import SideBar from "./SideBar";
import HasRole from "../../../access/HasRole";

const Widget = () => {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState<IUserOption[]>([]);
  const [roles, setRoles] = useState<IRoleOption[]>([]);

  const handleRefresh = useCallback(() => {
    const client = new RbacClient(GRPC_HOST);
    client.getAllRoles(new Empty(), grpc_metadata()).then((response) => {
      setRoles(
        response.getItemsList().map((x) => {
          var it: IRoleOption = {
            code: x.getCode(),
            name: x.getName(),
          };
          return it;
        })
      );
    });
    client.getAllUsers(new Empty(), grpc_metadata()).then((response) => {
      setUsers(
        response.getItemsList().map((x) => {
          var it: IUserOption = {
            id: x.getId(),
            realName: x.getRealName(),
            nickName: x.getNickName(),
          };
          return it;
        })
      );
    });
  }, [setUsers, setRoles]);

  useEffect(() => {
    dispatch(
      setTitle(intl.formatMessage({ id: "nut.admin.permissions.index.title" }))
    );
    handleRefresh();
  }, [dispatch, intl, handleRefresh]);
  return (
    <HasRole roles={[ROLE_ADMINISTRATOR]}>
      <Col span={24}>
        <Space>
          <AddRoleForUser handleRefresh={handleRefresh} users={users} />
          <AddPermissionForRole roles={roles} />
          <AddPermissionForUser users={users} />
        </Space>
      </Col>
      <Col span={24}>
        <Tabs defaultActiveKey="roles">
          <Tabs.TabPane
            key="roles"
            tab={
              <FormattedMessage id="nut.admin.permissions.roles.index.title" />
            }
          >
            <RolesIndex roles={roles} onRefresh={handleRefresh} />
          </Tabs.TabPane>
          <Tabs.TabPane
            key="users"
            tab={
              <FormattedMessage id="nut.admin.permissions.users.index.title" />
            }
          >
            <UsersIndex users={users} />
          </Tabs.TabPane>
          <Tabs.TabPane
            key="side-bar"
            tab={<FormattedMessage id="nut.admin.permissions.side-bar.title" />}
          >
            <SideBar roles={roles} users={users} />
          </Tabs.TabPane>
        </Tabs>
      </Col>
    </HasRole>
  );
};

export default Widget;
