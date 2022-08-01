import { useIntl } from "react-intl";
import { useRef, useEffect } from "react";
import { ProTable, ActionType } from "@ant-design/pro-components";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { Space, Col } from "antd";

import { DEFAULT_PAGE, DEFAULT_SIZE, ID_WIDTH, to_date } from "../../..";
import { Pager } from "../../../../protocols/nut_pb";
import { SiteClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";
import { useAppSelector } from "../../../../hooks";
import { ShowTimestamp } from "../../../date";
import LockUser from "./Lock";
import EnableUser from "./Enable";
import ConfirmUser from "./Confirm";
import SetUserPassword from "./SetPassword";
import { currentUser } from "../../../../reducers/current-user";
import { setTitle } from "../../../../reducers/layout";
import { useAppDispatch } from "../../../../hooks";

export interface IItem {
  id: number;
  email: string;
  nickName: string;
  realName: string;
  lang: string;
  uid: string;
  timeZone: string;
  avatar: string;
  signInCount: number;
  currentSignInAt?: Date;
  currentSignInIp?: string;
  lastSignInAt?: Date;
  lastSignInIp?: string;
  lockedAt?: Date;
  confirmedAt?: Date;
  deletedAt?: Date;
  updatedAt: Date;
}

const Widget = () => {
  const user = useAppSelector(currentUser);
  const intl = useIntl();
  const ref = useRef<ActionType>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setTitle(intl.formatMessage({ id: "nut.admin.users.index.title" }))
    );
  }, [dispatch, intl]);
  return (
    <Col span={22} offset={1}>
      <ProTable<IItem>
        search={false}
        actionRef={ref}
        columns={[
          {
            title: intl.formatMessage({ id: "form.fields.id.label" }),
            dataIndex: "id",
            key: "id",
            width: ID_WIDTH,
          },
          {
            title: intl.formatMessage({
              id: "nut.admin.users.columns.account",
            }),
            key: "account",
            render: (_, it) => (
              <>
                {it.realName}&lt;{it.email}&gt;({it.nickName})
              </>
            ),
          },
          {
            title: intl.formatMessage({
              id: "nut.admin.users.columns.zone",
            }),
            key: "zone",
            render: (_, it) => (
              <Space>
                {intl.formatMessage({ id: `languages.${it.lang}` })}
                <span>({it.timeZone})</span>
              </Space>
            ),
          },
          {
            title: intl.formatMessage({
              id: "nut.admin.users.columns.current-sign-in",
            }),
            key: "current-sign-in",
            render: (_, it) => (
              <Space>
                {it.currentSignInAt ? (
                  <ShowTimestamp value={it.currentSignInAt} />
                ) : (
                  "n/a"
                )}
                <span>{it.currentSignInIp || ""}</span>
                <span>({it.signInCount})</span>
              </Space>
            ),
          },
          {
            title: intl.formatMessage({ id: "table.columns.operation.label" }),
            key: "operation",
            width: 220,
            render: (_, it) =>
              it.uid === user?.uid ? (
                <></>
              ) : (
                <>
                  <SetUserPassword
                    item={it}
                    handleRefresh={async () => {
                      ref.current?.reload();
                    }}
                  />
                  {it.confirmedAt ? (
                    <></>
                  ) : (
                    <ConfirmUser
                      item={it}
                      handleRefresh={async () => {
                        ref.current?.reload();
                      }}
                    />
                  )}
                  <LockUser
                    item={it}
                    handleRefresh={async () => {
                      ref.current?.reload();
                    }}
                  />
                  <EnableUser
                    item={it}
                    handleRefresh={async () => {
                      ref.current?.reload();
                    }}
                  />
                </>
              ),
          },
        ]}
        request={async (params, sorter, filter) => {
          const client = new SiteClient(GRPC_HOST);

          const request = new Pager();
          request.setPage(params.current || DEFAULT_PAGE);
          request.setSize(params.pageSize || DEFAULT_SIZE);

          const response = await client.indexUser(request, grpc_metadata());
          return {
            total: response.getPagination()?.getTotal(),
            success: true,
            data: response.getItemsList().map((x) => {
              var it: IItem = {
                id: x.getId(),
                lang: x.getLang(),
                email: x.getEmail(),
                uid: x.getUid(),
                nickName: x.getNickName(),
                realName: x.getRealName(),
                avatar: x.getAvatar(),
                timeZone: x.getTimeZone(),
                lastSignInAt: x.getLastSignInAt()
                  ? to_date(x.getLastSignInAt() || new Timestamp())
                  : undefined,
                lastSignInIp: x.getLastSignInIp(),
                currentSignInAt: x.getCurrentSignInAt()
                  ? to_date(x.getCurrentSignInAt() || new Timestamp())
                  : undefined,
                currentSignInIp: x.getCurrentSignInIp(),
                signInCount: x.getSignInCount(),
                lockedAt: x.getLockedAt()
                  ? to_date(x.getLockedAt() || new Timestamp())
                  : undefined,
                confirmedAt: x.getConfirmedAt()
                  ? to_date(x.getConfirmedAt() || new Timestamp())
                  : undefined,
                deletedAt: x.getDeletedAt()
                  ? to_date(x.getDeletedAt() || new Timestamp())
                  : undefined,
                updatedAt: to_date(x.getUpdatedAt() || new Timestamp()),
              };
              return it;
            }),
          };
        }}
        rowKey="id"
        bordered
        pagination={{
          showQuickJumper: true,
          showSizeChanger: true,
        }}
        headerTitle={intl.formatMessage({ id: "nut.admin.users.index.title" })}
      />
    </Col>
  );
};

export default Widget;
