import { FormattedMessage, useIntl } from 'umi';
import { Typography } from 'antd';
import { useRef } from 'react';
import ProTable, { ActionType } from '@ant-design/pro-table';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  DEFAULT_PAGE,
  DEFAULT_SIZE,
  ID_WIDTH,
  LANGUAGE_WIDTH,
  TIMESTAMP_COLUMN_WIDTH,
  to_date,
} from '@/components';
import { Pager } from '@/protocols/nut_pb';
import { LocaleClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { ShowTimestamp } from '@/components/date';
import DestroyDialog from './Destroy';
import NewForm from './New';
import EditForm from './Edit';

export interface IItem {
  id: number;
  lang: string;
  code: string;
  message: string;
  updatedAt: Date;
}

const Widget = () => {
  const intl = useIntl();
  const ref = useRef<ActionType>();
  return (
    <ProTable<IItem>
      search={false}
      actionRef={ref}
      columns={[
        {
          title: intl.formatMessage({ id: 'form.fields.id.label' }),
          dataIndex: 'id',
          key: 'id',
          width: ID_WIDTH,
        },
        {
          title: intl.formatMessage({ id: 'form.fields.language.label' }),
          key: 'lang',
          width: LANGUAGE_WIDTH,
          render: (_, it) => <FormattedMessage id={`languages.${it.lang}`} />,
        },
        {
          title: intl.formatMessage({ id: 'form.fields.code.label' }),
          dataIndex: 'code',
          key: 'code',
        },
        {
          title: intl.formatMessage({ id: 'form.fields.message.label' }),
          key: 'message',
          render: (_, it) => (
            <Typography.Paragraph ellipsis={{ rows: 2, expandable: true }}>
              <Typography.Text>{it.message}</Typography.Text>
            </Typography.Paragraph>
          ),
        },
        {
          title: intl.formatMessage({ id: 'form.fields.updated-at.label' }),
          key: 'updated-at',
          width: TIMESTAMP_COLUMN_WIDTH,
          render: (_, it) => <ShowTimestamp value={it.updatedAt} />,
        },
        {
          title: intl.formatMessage({ id: 'table.columns.operation.label' }),
          key: 'operation',
          width: 120,
          render: (_, it) => (
            <>
              <EditForm
                item={it}
                handleRefresh={async () => {
                  ref.current?.reload();
                }}
              />
              <DestroyDialog
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
        const client = new LocaleClient(GRPC_HOST);

        const request = new Pager();
        request.setPage(params.current || DEFAULT_PAGE);
        request.setSize(params.pageSize || DEFAULT_SIZE);

        const response = await client.index(request, grpc_metadata());
        return {
          total: response.getPagination()?.getTotal(),
          success: true,
          data: response.getItemsList().map((x) => {
            var it: IItem = {
              id: x.getId(),
              lang: x.getLang(),
              code: x.getCode(),
              message: x.getMessage(),
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
      headerTitle={intl.formatMessage({ id: 'nut.admin.locales.title' })}
      toolBarRender={() => [
        <NewForm
          handleRefresh={async () => {
            ref.current?.reload();
          }}
        />,
      ]}
    />
  );
};

export default Widget;
