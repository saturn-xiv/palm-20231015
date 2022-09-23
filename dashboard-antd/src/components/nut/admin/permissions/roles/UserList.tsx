import { useEffect, useCallback, useState } from "react";
import { Table, Modal, Tooltip, Button } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";

import { IRoleOption, IUserOption } from "../../../../../reducers/current-user";
import { RbacClient } from "../../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../../request";
import { RbacRoleRequest } from "../../../../../protocols/nut_pb";
import DeleteRoleForUser from "../DeleteRoleForUser";

interface IProps {
  role: IRoleOption;
}

const Widget = ({ role }: IProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [items, setItems] = useState<IUserOption[]>([]);
  const intl = useIntl();
  const title = intl.formatMessage(
    {
      id: "nut.admin.permissions.roles.index.users",
    },
    { name: role.name }
  );
  const handleClose = () => {
    setShow(false);
  };
  const handleRefresh = useCallback(() => {
    const client = new RbacClient(GRPC_HOST);
    const request = new RbacRoleRequest();
    request.setCode(role.code);
    client.getUsersForRole(request, grpc_metadata()).then((response) => {
      setItems(
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
  }, [setItems, role]);
  useEffect(() => {
    if (show) {
      handleRefresh();
    }
  }, [handleRefresh, show]);
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
        <Table<IUserOption>
          columns={[
            {
              dataIndex: "nickName",
              title: intl.formatMessage({ id: "form.fields.nick-name.label" }),
            },
            {
              dataIndex: "realName",
              title: intl.formatMessage({
                id: "form.fields.real-name.label",
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
                  role={role}
                  user={it}
                />
              ),
            },
          ]}
          dataSource={items}
          rowKey="nickName"
          bordered
        />
      </Modal>
    </>
  );
};

export default Widget;
