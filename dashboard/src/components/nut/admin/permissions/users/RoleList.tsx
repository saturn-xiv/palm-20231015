import { useEffect, useState, useCallback } from "react";
import { Table, Modal, Tooltip, Button } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";

import { IRoleOption, IUserOption } from "../../../../../reducers/current-user";
import { RbacClient } from "../../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../../request";
import { RbacUserRequest } from "../../../../../protocols/nut_pb";
import DeleteRoleForUser from "../DeleteRoleForUser";

interface IProps {
  user: IUserOption;
}

const Widget = ({ user }: IProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [items, setItems] = useState<IRoleOption[]>([]);
  const intl = useIntl();
  const title = intl.formatMessage(
    {
      id: "nut.admin.permissions.users.index.roles",
    },
    { name: user.nickName }
  );
  const handleClose = () => {
    setShow(false);
  };
  const handleRefresh = useCallback(() => {
    const client = new RbacClient(GRPC_HOST);
    const request = new RbacUserRequest();
    request.setId(user.id);
    client.getRolesForUser(request, grpc_metadata()).then((response) => {
      setItems(
        response.getItemsList().map((x) => {
          var it: IRoleOption = {
            code: x.getCode(),
            name: x.getName(),
          };
          return it;
        })
      );
    });
  }, [setItems, user]);
  useEffect(() => {
    if (show) {
      handleRefresh();
    }
  }, [show, handleRefresh]);
  return (
    <>
      <Tooltip title={title}>
        <Button
          type="dashed"
          onClick={() => setShow(true)}
          shape="circle"
          icon={<UsergroupAddOutlined />}
        />
      </Tooltip>
      <Modal
        title={title}
        visible={show}
        onOk={handleClose}
        onCancel={handleClose}
      >
        <Table<IRoleOption>
          columns={[
            {
              dataIndex: "code",
              title: intl.formatMessage({ id: "form.fields.code.label" }),
            },
            {
              dataIndex: "name",
              title: intl.formatMessage({
                id: "form.fields.name.label",
              }),
            },
            {
              key: "operation",
              title: intl.formatMessage({
                id: "form.fields.operation.label",
              }),
              render: (it) => (
                <DeleteRoleForUser
                  handleRefresh={handleRefresh}
                  role={it}
                  user={user}
                />
              ),
            },
          ]}
          dataSource={items}
          rowKey="code"
          bordered
        />
      </Modal>
    </>
  );
};

export default Widget;
