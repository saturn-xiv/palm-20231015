import { useRef, useEffect } from "react";
import { useIntl } from "react-intl";
import { ProTable } from "@ant-design/pro-components";
import type { ActionType, ProFormInstance } from "@ant-design/pro-components";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { Col } from "antd";

import {
  DEFAULT_PAGE,
  DEFAULT_SIZE,
  ID_WIDTH,
  IP_WIDTH,
  TIMESTAMP_COLUMN_WIDTH,
  to_date,
} from "../..";
import { Pager, UserLogsRequest } from "../../../protocols/nut_pb";
import { UserClient } from "../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../request";
import { ShowTimestamp } from "../../date";
import { setTitle } from "../../../reducers/layout";
import { useAppDispatch } from "../../../hooks";

interface IItem {
  id: number;
  ip: string;
  level: string;
  message: string;
  resourctType: string;
  resourceId?: number;
  createdAt: Date;
}

const Widget = () => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();
  const formRef = useRef<ProFormInstance>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTitle(intl.formatMessage({ id: "nut.users.logs.title" })));
  }, [dispatch, intl]);
  return (
    <Col sm={{ span: 22, offset: 1 }} md={{ span: 22 }}>
      <ProTable<IItem>
        formRef={formRef}
        actionRef={actionRef}
        columns={[
          {
            title: intl.formatMessage({ id: "form.fields.id.label" }),
            dataIndex: "id",
            key: "id",
            width: ID_WIDTH,
            search: false,
          },
          {
            title: intl.formatMessage({ id: "form.fields.level.label" }),
            dataIndex: "level",
            key: "level",
            width: 80,
            valueType: "select",
            valueEnum: {
              error: {
                text: intl.formatMessage({ id: "form.log.level.error" }),
                status: "error",
              },
              warning: {
                text: intl.formatMessage({ id: "form.log.level.warning" }),
                status: "warning",
              },
              info: {
                text: intl.formatMessage({ id: "form.log.level.info" }),
                status: "info",
              },
              debug: {
                text: intl.formatMessage({ id: "form.log.level.debug" }),
                status: "debug",
              },
            },
          },
          {
            title: intl.formatMessage({ id: "form.fields.ip.label" }),
            dataIndex: "ip",
            key: "ip",
            width: IP_WIDTH,
          },
          {
            title: intl.formatMessage({ id: "form.fields.message.label" }),
            dataIndex: "message",
            key: "message",
            search: false,
          },
          {
            title: intl.formatMessage({ id: "form.fields.created-at.label" }),
            key: "created-at",
            width: TIMESTAMP_COLUMN_WIDTH,
            render: (_, it) => <ShowTimestamp value={it.createdAt} />,
            search: false,
          },
        ]}
        request={async (params = {}, sorter, filter) => {
          const client = new UserClient(GRPC_HOST);

          const request = new UserLogsRequest();
          {
            const pager = new Pager();
            pager.setPage(params.current || DEFAULT_PAGE);
            pager.setSize(params.pageSize || DEFAULT_SIZE);
            request.setPager(pager);
          }
          if (params.level) {
            request.setLevel(params.level);
          }
          if (params.ip) {
            request.setIp(params.ip);
          }

          const response = await client.logs(request, grpc_metadata());
          return {
            total: response.getPagination()?.getTotal(),
            success: true,
            data: response.getItemsList().map((x) => {
              var it: IItem = {
                id: x.getId(),
                level: x.getLevel(),
                message: x.getMessage(),
                resourctType: x.getResourceType(),
                resourceId: x.getResourceId(),
                ip: x.getIp(),
                createdAt: to_date(x.getCreatedAt() || new Timestamp()),
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
        headerTitle={intl.formatMessage({ id: "nut.users.logs.title" })}
      />
    </Col>
  );
};

export default Widget;
