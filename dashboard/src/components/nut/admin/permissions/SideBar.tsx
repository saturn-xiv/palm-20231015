import { useState } from "react";
import { Tree, Row, message, Select, Col, Button, Space } from "antd";
import type { DataNode, TreeProps } from "antd/es/tree";
import { FormattedMessage, useIntl } from "react-intl";
import type { MenuDataItem } from "@ant-design/pro-components";

import menus from "../../../../menus";
import {
  IRoleOption,
  IUserOption,
  OPERATION_READ,
  ROLE_ADMINISTRATOR,
  ROLE_ROOT,
  to_permission,
  user_option_to_string,
} from "../../../../reducers/current-user";
import { RbacClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import {
  RbacRoleRequest,
  RbacUpdatePermissionsForRoleRequest,
  RbacUpdatePermissionsForUserRequest,
  RbacUserRequest,
} from "../../../../protocols/nut_pb";

interface IProps {
  users: IUserOption[];
  roles: IRoleOption[];
}
const USER_PREFIX = "user.";
const ROLE_PREFIX = "role.";
export const MENU_PREFIX = "menus://side-bar/";

const fetch_menu_keys = (keys: string[], menu: MenuDataItem): string[] => {
  if (menu.key) {
    keys.push(`${MENU_PREFIX}${menu.key}`);
  }
  return keys.concat((menu.routes || []).reduce(fetch_menu_keys, []));
};

const Widget = ({ users, roles }: IProps) => {
  const intl = useIntl();
  const [items, setItems] = useState<string[]>([]);
  // const [permissions, setPermissions] = useState<IPermission[]>([]);
  const [subject, setSubject] = useState<string>();

  const to_tree_node = (it: MenuDataItem): DataNode => {
    return {
      key: `${MENU_PREFIX}${it.key}`,
      icon: it.icon,
      title: intl.formatMessage({ id: `${it.key}.title` }),
      children: it.routes ? it.routes.map(to_tree_node) : undefined,
    };
  };

  const onTreeCheck: TreeProps["onCheck"] = (checkedKeys, info) => {
    var items = [];
    if (Array.isArray(checkedKeys)) {
      for (var it of checkedKeys) {
        if (typeof it === "string") {
          items.push(it);
        }
      }
      setItems(items);
    }
  };
  const handleSubjectChange = (value: string) => {
    setSubject(value);
    const client = new RbacClient(GRPC_HOST);
    if (value.startsWith(USER_PREFIX)) {
      const request = new RbacUserRequest();
      request.setId(parseInt(value.substring(USER_PREFIX.length)));
      client.getPermissionsForUser(request, grpc_metadata(), (err, res) => {
        if (err) {
          message.error(err.message);
        } else {
          setItems(
            res
              .getItemsList()
              .map(to_permission)
              .filter(
                (x) =>
                  x.resourceId === undefined &&
                  x.resourceType.startsWith(MENU_PREFIX)
              )
              .map((x) => x.resourceType)
          );
        }
      });
    } else if (value.startsWith(ROLE_PREFIX)) {
      const request = new RbacRoleRequest();
      request.setCode(value.substring(USER_PREFIX.length));
      client.getPermissionsForRole(request, grpc_metadata(), (err, res) => {
        if (err) {
          message.error(err.message);
        } else {
          setItems(
            res
              .getItemsList()
              .map(to_permission)
              .filter(
                (x) =>
                  x.resourceId === undefined &&
                  x.resourceType.startsWith(MENU_PREFIX)
              )
              .map((x) => x.resourceType)
          );
        }
      });
    }
  };

  const all_menu_keys = menus.reduce(fetch_menu_keys, []);
  const onSubmit = () => {
    const client = new RbacClient(GRPC_HOST);
    if (subject) {
      if (subject.startsWith(USER_PREFIX)) {
        const request = new RbacUpdatePermissionsForUserRequest();
        request.setUser(parseInt(subject.substring(USER_PREFIX.length)));
        request.setCreatedList(
          items.map((x) => {
            var it = new RbacUpdatePermissionsForUserRequest.Item();
            it.setOperation(OPERATION_READ);
            it.setResourceType(x);
            return it;
          })
        );
        request.setRemovedList(
          all_menu_keys.map((x) => {
            var it = new RbacUpdatePermissionsForUserRequest.Item();
            it.setOperation(OPERATION_READ);
            it.setResourceType(x);
            return it;
          })
        );

        client.updatePermissionsForUser(request, grpc_metadata(), (err) => {
          if (err) {
            message.error(err.message);
          } else {
            message.success(
              intl.formatMessage({ id: "form.submit.successed" })
            );
          }
        });
      } else if (subject.startsWith(ROLE_PREFIX)) {
        const request = new RbacUpdatePermissionsForRoleRequest();
        request.setRole(subject.substring(ROLE_PREFIX.length));

        request.setCreatedList(
          items.map((x) => {
            var it = new RbacUpdatePermissionsForRoleRequest.Item();
            it.setOperation(OPERATION_READ);
            it.setResourceType(x);
            return it;
          })
        );
        request.setRemovedList(
          all_menu_keys.map((x) => {
            var it = new RbacUpdatePermissionsForRoleRequest.Item();
            it.setOperation(OPERATION_READ);
            it.setResourceType(x);
            return it;
          })
        );

        client.updatePermissionsForRole(request, grpc_metadata(), (err) => {
          if (err) {
            message.error(err.message);
          } else {
            message.success(
              intl.formatMessage({ id: "form.submit.successed" })
            );
          }
        });
      }
    }
  };
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Space>
          <Select style={{ width: 240 }} onChange={handleSubjectChange}>
            {users.map((x) => (
              <Select.Option key={x.id} value={`${USER_PREFIX}${x.id}`}>
                {user_option_to_string(x)}
              </Select.Option>
            ))}
            {roles
              .filter((x) => ![ROLE_ADMINISTRATOR, ROLE_ROOT].includes(x.code))
              .map((x) => (
                <Select.Option key={x.code} value={`${ROLE_PREFIX}${x.code}`}>
                  {x.name}
                </Select.Option>
              ))}
          </Select>
          <Button onClick={onSubmit}>
            <FormattedMessage id="buttons.submit" />
          </Button>
        </Space>
      </Col>
      <Col span={24}>
        <Tree
          checkable
          checkedKeys={items}
          onCheck={onTreeCheck}
          treeData={menus.map(to_tree_node)}
        />
      </Col>
    </Row>
  );
};

export default Widget;
