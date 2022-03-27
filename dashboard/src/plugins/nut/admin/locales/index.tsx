import { useRef } from "react";
import { Col, Space, Button, Tooltip, message } from "antd";
import { useIntl, FormattedMessage } from "react-intl";
import ProTable, { ActionType } from "@ant-design/pro-table";
import { EditOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";

import Layout from "../../../../layouts/dashboard";
import { graphql } from "../../../../request";
import { TIMESTAMP_COLUMN_WIDTH } from "../../../../components/table";
import { Timestamp } from "../../../../components";
import { IPager, IPagination } from "../../..";
import { detect as detectLocale } from "../../../../locales";
import LocaleForm from "./Form";

interface IItem {
  id: string;
  code: string;
  lang: string;
  message: string;
  updatedAt: number;
}

interface IFetchResponse {
  indexLocale: IPagination<IItem>;
}

const Widget = () => {
  const intl = useIntl();
  const ref = useRef<ActionType>();
  return (
    <Layout title={intl.formatMessage({ id: "nut.users.admin.locales.title" })}>
      <Col span={24}>
        <ProTable<IItem>
          rowKey="id"
          bordered
          actionRef={ref}
          search={false}
          toolbar={{
            actions: [
              <LocaleForm
                key="form.new"
                refresh={() => ref?.current?.reload()}
                button={{
                  title: <FormattedMessage id="buttons.new" />,
                  icon: <PlusOutlined />,
                }}
                value={{ code: "", lang: detectLocale(), message: "" }}
              />,
            ],
          }}
          request={async (params = {}, sort, filter) => {
            const response = await graphql<IPager, IFetchResponse>(
              `
                query Fetch($pageSize: Int!, $current: Int!) {
                  indexLocale(pageSize: $pageSize, current: $current) {
                    data {
                      id
                      lang
                      code
                      message
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
                data: response.data.indexLocale.data,
                total: response.data.indexLocale.total,
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
              title: intl.formatMessage({ id: "fields.language" }),
              dataIndex: "lang",
              key: "lang",
              width: 80,
            },
            {
              title: intl.formatMessage({ id: "fields.code" }),
              dataIndex: "code",
              key: "code",
            },
            {
              title: intl.formatMessage({ id: "fields.message" }),
              dataIndex: "message",
              key: "message",
            },
            {
              title: intl.formatMessage({ id: "fields.created-at" }),
              key: "updated-at",
              width: TIMESTAMP_COLUMN_WIDTH,
              render: (_, it) => <Timestamp value={it.updatedAt} />,
            },
            {
              title: intl.formatMessage({ id: "fields.operation" }),
              key: "opration",
              width: 120,
              render: (_, it) => (
                <Space size={0} wrap>
                  <LocaleForm
                    refresh={() => ref?.current?.reload()}
                    button={{
                      title: <FormattedMessage id="buttons.edit" />,
                      icon: <EditOutlined />,
                    }}
                    value={{
                      code: it.code,
                      lang: it.lang,
                      message: it.message,
                    }}
                  />
                  <Tooltip title={<FormattedMessage id="buttons.remove" />}>
                    <Button
                      type="primary"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => {
                        // TODO
                        console.log("TODO");
                      }}
                    />
                  </Tooltip>
                </Space>
              ),
            },
          ]}
        />
      </Col>
    </Layout>
  );
};

export default Widget;
