import { Table } from "antd";
import { useIntl } from "react-intl";

import { IUserOption } from "../../../../../reducers/current-user";
import PermissionList from "./PermissionList";
import RoleList from "./RoleList";
import { useAppSelector } from "../../../../../hooks";
import { currentUser } from "../../../../../reducers/current-user";

interface IProps {
  users: IUserOption[];
}

const Widget = ({ users }: IProps) => {
  const intl = useIntl();
  const user = useAppSelector(currentUser);
  return (
    <Table<IUserOption>
      columns={[
        {
          dataIndex: "nickName",
          title: intl.formatMessage({ id: "form.fields.nick-name.label" }),
        },
        {
          dataIndex: "realName",
          title: intl.formatMessage({ id: "form.fields.real-name.label" }),
        },
        {
          key: "operation",
          title: intl.formatMessage({ id: "form.fields.operation.label" }),
          render: (it) =>
            it.nickName === user?.nickName ? (
              <></>
            ) : (
              <>
                <PermissionList user={it} />
                <RoleList user={it} />
              </>
            ),
        },
      ]}
      dataSource={users}
      rowKey="id"
      bordered
    />
  );
};

export default Widget;
