import { useRef } from "react";
import { Col, Space, Popconfirm, Button, Tooltip, message } from "antd";
import { useIntl, FormattedMessage } from "react-intl";
import ProTable, { ActionType } from "@ant-design/pro-table";
import {
  UnlockOutlined,
  UserDeleteOutlined,
  UserAddOutlined,
  LockOutlined,
  WarningOutlined,
} from "@ant-design/icons";

import Layout from "../../../../layouts/dashboard";
import { graphql } from "../../../../request";
import { TIMESTAMP_COLUMN_WIDTH } from "../../../../components/table";
import { Timestamp } from "../../../../components";
import { IPager, IOk, IId, IPagination } from "../../..";
import { useAppSelector } from "../../../../hooks";
import { selectCurrentUser } from "../../../../reducers/current-user";

interface IItem {
  id: string;
  realName: string;
  nickName: string;
  email: string;
  lang: string;
  logo: string;
  timeZone: string;
  providerType: string;
  sign_in_count: number;
  currentSignInIp: string | undefined;
  currentSignInAt: number | undefined;
  lastSignInIp: string | undefined;
  lastSignInAt: number | undefined;
  confirmedAt: number | undefined;
  lockedAt: number | undefined;
  deletedAt: number | undefined;
  updatedAt: number;
}

interface IFetchResponse {
  indexUser: IPagination<IItem>;
}

interface IEnableResponse {
  enableUser: IOk;
}

interface IDisableResponse {
  enableUser: IOk;
}

interface ILockResponse {
  enableUser: IOk;
}

interface IUnlockResponse {
  enableUser: IOk;
}
const Widget = () => {
  const intl = useIntl();
  const ref = useRef<ActionType>();
  const onUnlock = async (id: string) => {
    const response = await graphql<IId, IUnlockResponse>(
      `
        mutation PostForm($id: Uuid!) {
          unlockUser(id: $id) {
            createdAt
          }
        }
      `,
      { id }
    );
    if (response.data) {
      message.success(intl.formatMessage({ id: "flashes.successed" }));
      ref?.current?.reload();
    } else {
      response.errors?.forEach((it) => {
        message.error(it.message);
      });
    }
  };
  const onLock = async (id: string) => {
    const response = await graphql<IId, ILockResponse>(
      `
        mutation PostForm($id: Uuid!) {
          lockUser(id: $id) {
            createdAt
          }
        }
      `,
      { id }
    );
    if (response.data) {
      message.success(intl.formatMessage({ id: "flashes.successed" }));
      ref?.current?.reload();
    } else {
      response.errors?.forEach((it) => {
        message.error(it.message);
      });
    }
  };
  const onEnable = async (id: string) => {
    const response = await graphql<IId, IEnableResponse>(
      `
        mutation PostForm($id: Uuid!) {
          enableUser(id: $id) {
            createdAt
          }
        }
      `,
      { id }
    );
    if (response.data) {
      message.success(intl.formatMessage({ id: "flashes.successed" }));
      ref?.current?.reload();
    } else {
      response.errors?.forEach((it) => {
        message.error(it.message);
      });
    }
  };
  const onDisable = async (id: string) => {
    const response = await graphql<IId, IDisableResponse>(
      `
        mutation PostForm($id: Uuid!) {
          disableUser(id: $id) {
            createdAt
          }
        }
      `,
      { id }
    );
    if (response.data) {
      message.success(intl.formatMessage({ id: "flashes.successed" }));
      ref?.current?.reload();
    } else {
      response.errors?.forEach((it) => {
        message.error(it.message);
      });
    }
  };
  const user = useAppSelector(selectCurrentUser);
  return (
    <Layout title={intl.formatMessage({ id: "nut.users.admin.users.title" })}>
      <Col span={24}>
        <ProTable<IItem>
          rowKey="id"
          bordered
          actionRef={ref}
          search={false}
          request={async (params = {}, sort, filter) => {
            const response = await graphql<IPager, IFetchResponse>(
              `
                query Fetch($pageSize: Int!, $current: Int!) {
                  indexUser(pageSize: $pageSize, current: $current) {
                    data {
                      id
                      realName
                      nickName
                      email
                      providerType
                      lang
                      timeZone
                      logo
                      signInCount
                      currentSignInAt
                      currentSignInIp
                      lastSignInAt
                      lastSignInIp
                      confirmedAt
                      lockedAt
                      deletedAt
                      updatedAt
                    }
                    total
                  }
                }
              `,
              { pageSize: params.pageSize || 20, current: params.current || 1 }
            );
            if (response.data) {
              return {
                ...response.data.indexUser,
                success: true,
              };
            }
            response.errors?.forEach((it) => {
              message.error(it.message);
            });
            return {
              data: [],
              total: 0,
              success: false,
            };
          }}
          columns={[
            {
              title: intl.formatMessage({ id: "nut.users.admin.users.zone" }),

              key: "zone",
              render: (_, it) => (
                <>
                  {it.lang}&nbsp;{it.timeZone}
                </>
              ),
            },
            {
              title: intl.formatMessage({ id: "nut.users.admin.users.name" }),
              key: "name",
              render: (_, it) => (
                <>
                  <img
                    style={{ width: 20, height: 20 }}
                    src={it.logo}
                    alt={it.realName}
                  />
                  ({it.nickName}){it.realName}&lt;
                  {it.email}&gt;
                </>
              ),
            },
            {
              title: intl.formatMessage({
                id: "nut.users.admin.users.current-sign-in",
              }),
              key: "current-sign-in",
              render: (_, it) =>
                it.currentSignInAt && it.currentSignInIp ? (
                  <>
                    <Timestamp value={it.currentSignInAt} />(
                    {it.currentSignInIp})
                  </>
                ) : (
                  "n/a"
                ),
            },
            {
              title: intl.formatMessage({
                id: "nut.users.admin.users.last-sign-in",
              }),
              key: "last-sign-in",
              render: (_, it) =>
                it.lastSignInAt && it.lastSignInIp ? (
                  <>
                    <Timestamp value={it.lastSignInAt} />({it.lastSignInIp})
                  </>
                ) : (
                  "n/a"
                ),
            },
            {
              title: intl.formatMessage({ id: "fields.updated-at" }),
              key: "updated-at",
              width: TIMESTAMP_COLUMN_WIDTH,
              render: (_, it) => <Timestamp value={it.updatedAt} />,
            },
            {
              title: intl.formatMessage({ id: "fields.operation" }),
              key: "opration",
              width: 120,
              render: (_, it) => {
                const act = it.lockedAt ? "unlock" : "lock";
                return user?.nickName === it.nickName ? (
                  <></>
                ) : (
                  <Space size={0} wrap>
                    <Popconfirm
                      title={
                        <FormattedMessage
                          id={`nut.users.admin.locales.confirm-to-${act}`}
                          values={{ name: it.realName }}
                        />
                      }
                      onConfirm={async () => {
                        await (it.lockedAt ? onUnlock(it.id) : onLock(it.id));
                        ref?.current?.reload();
                      }}
                    >
                      <Tooltip
                        title={<FormattedMessage id={`buttons.${act}`} />}
                      >
                        <Button
                          ghost
                          type="primary"
                          icon={
                            it.lockedAt ? <UnlockOutlined /> : <LockOutlined />
                          }
                        />
                      </Tooltip>
                    </Popconfirm>
                    <Popconfirm
                      title={
                        <FormattedMessage
                          id={`nut.users.admin.locales.confirm-to-${act}`}
                          values={{ name: it.realName }}
                        />
                      }
                      onConfirm={async () => {
                        await (it.deletedAt
                          ? onEnable(it.id)
                          : onDisable(it.id));
                        ref?.current?.reload();
                      }}
                    >
                      <Tooltip
                        title={<FormattedMessage id={`buttons.${act}`} />}
                      >
                        <Button
                          ghost
                          type="primary"
                          danger
                          icon={
                            it.deletedAt ? (
                              <UserAddOutlined />
                            ) : (
                              <UserDeleteOutlined />
                            )
                          }
                        />
                      </Tooltip>
                    </Popconfirm>
                    <Tooltip
                      title={
                        <FormattedMessage id="nut.users.admin.locales.email-not-valid-yet" />
                      }
                    >
                      <Button disabled ghost icon={<WarningOutlined />} />
                    </Tooltip>
                  </Space>
                );
              },
            },
          ]}
        />
      </Col>
    </Layout>
  );
};

export default Widget;
