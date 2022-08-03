import { Table, Button } from "antd";
import { useIntl, FormattedMessage } from "react-intl";
import { ReloadOutlined } from "@ant-design/icons";

import {
  IRoleOption,
  ROLE_ADMINISTRATOR,
  ROLE_ROOT,
} from "../../../../../reducers/current-user";
import PermissionsList from "./PermissionList";
import UserList from "./UserList";

interface IProps {
  roles: IRoleOption[];
  onRefresh: React.MouseEventHandler<HTMLElement>;
}

const Widget = ({ roles, onRefresh }: IProps) => {
  const intl = useIntl();
  return (
    <Table<IRoleOption>
      columns={[
        {
          dataIndex: "code",
          title: intl.formatMessage({ id: "form.fields.code.label" }),
        },
        {
          dataIndex: "name",
          title: intl.formatMessage({ id: "form.fields.name.label" }),
        },
        {
          key: "operation",
          title: () => (
            <>
              <FormattedMessage id="form.fields.operation.label" />
              &nbsp;
              <Button
                type="dashed"
                onClick={onRefresh}
                shape="circle"
                icon={<ReloadOutlined />}
              />
            </>
          ),
          render: (it) =>
            it.code === ROLE_ROOT ? (
              <></>
            ) : (
              <>
                {it.code === ROLE_ADMINISTRATOR ? (
                  <></>
                ) : (
                  <PermissionsList role={it} />
                )}
                <UserList role={it} />
              </>
            ),
        },
      ]}
      dataSource={roles}
      rowKey="code"
      bordered
    />
  );
};

export default Widget;
