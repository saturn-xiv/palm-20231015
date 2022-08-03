import { useEffect, useState, useCallback } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import { Col, Tabs } from "antd";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { setTitle } from "../../../../reducers/layout";
import { useAppDispatch } from "../../../../hooks";
import RolesIndex from "./roles";
import UsersIndex from "./users";
import { IRoleOption, IUserOption } from "../../../../reducers/current-user";
import { RbacClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";

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
      </Tabs>
    </Col>
  );
};

export default Widget;
