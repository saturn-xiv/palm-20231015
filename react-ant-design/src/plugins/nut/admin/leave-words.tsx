import { useRef } from "react";
import { Col, Button, message } from "antd";
import { FormattedMessage, useIntl } from "react-intl";
import ProTable, { ActionType } from "@ant-design/pro-table";

import Layout from "../../../layouts/dashboard";
import { graphql } from "../../../request";
import { TIMESTAMP_COLUMN_WIDTH } from "../../../components/table";
import { Timestamp, ShowPageContent } from "../../../components";
import { Editor, IPager, IId, IOk, IPagination } from "../..";

interface IItem {
  id: string;
  ip: string;
  editor: string;
  body: string;
  readAt?: number;
  updatedAt: number;
}

interface IFetchResponse {
  leastLeaveWord: IPagination<IItem>;
}

interface ISetReadResponse {
  readLeaveWord: IOk;
}

const Widget = () => {
  const intl = useIntl();
  const ref = useRef<ActionType>();

  return (
    <Layout
      title={intl.formatMessage({ id: "nut.admin.leave-words.index.title" })}
    >
      <Col span={24}>
        <ProTable<IItem>
          rowKey="id"
          bordered
          search={false}
          actionRef={ref}
          request={async (params = {}, sort, filter) => {
            const response = await graphql<IPager, IFetchResponse>(
              `
                query Fetch($pageSize: Int!, $current: Int!) {
                  leastLeaveWord(pageSize: $pageSize, current: $current) {
                    data {
                      id
                      ip
                      editor
                      body
                      readAt
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
                data: response.data.leastLeaveWord.data,
                total: response.data.leastLeaveWord.total,
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
              title: intl.formatMessage({ id: "fields.ip" }),
              dataIndex: "ip",
              key: "ip",
              width: 120,
            },
            {
              title: intl.formatMessage({ id: "fields.body" }),
              key: "body",
              render: (_, it) => (
                <ShowPageContent editor={it.editor as Editor} body={it.body} />
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
              key: "operation",
              width: 120,
              render: (_, it) =>
                it.readAt ? (
                  <></>
                ) : (
                  <Button
                    onClick={async () => {
                      const response = await graphql<IId, ISetReadResponse>(
                        `
                          mutation PostForm($id: Uuid!) {
                            readLeaveWord(id: $id) {
                              createdAt
                            }
                          }
                        `,
                        {
                          id: it.id,
                        }
                      );
                      if (response.data) {
                        message.success(
                          intl.formatMessage({ id: "flashes.successed" })
                        );
                        ref?.current?.reload();
                        return;
                      }
                      response.errors?.forEach((it) => {
                        message.error(it.message);
                      });
                    }}
                  >
                    <FormattedMessage id="buttons.mark-as-read" />
                  </Button>
                ),
            },
          ]}
        />
      </Col>
    </Layout>
  );
};

export default Widget;
