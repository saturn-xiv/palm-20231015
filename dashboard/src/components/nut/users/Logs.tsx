import { useRef } from 'react';
import { useIntl } from 'umi';
import ProTable, { ActionType } from '@ant-design/pro-table';

import {
  ID_WIDTH,
  IP_WIDTH,
  TIMESTAMP_COLUMN_WIDTH,
  to_date,
} from '@/components';
import { Pager } from '@/protocols/nut_pb';
import { UserClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { ShowTimestamp } from '@/components/date';

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
          title: intl.formatMessage({ id: 'form.fields.level.label' }),
          dataIndex: 'level',
          key: 'level',
          width: 120,
        },
        {
          title: intl.formatMessage({ id: 'form.fields.ip.label' }),
          dataIndex: 'ip',
          key: 'ip',
          width: IP_WIDTH,
        },
        {
          title: intl.formatMessage({ id: 'form.fields.message.label' }),
          dataIndex: 'message',
          key: 'message',
        },
        {
          title: intl.formatMessage({ id: 'form.fields.created-at.label' }),
          key: 'created-at',
          width: TIMESTAMP_COLUMN_WIDTH,
          render: (_, it) => <ShowTimestamp value={it.createdAt} />,
        },
      ]}
      request={async (params, sorter, filter) => {
        const client = new UserClient(GRPC_HOST);

        const request = new Pager();
        request.setPage(params.current || 1);
        request.setPage(params.pageSize || 20);

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
      }}
      headerTitle={intl.formatMessage({ id: 'nut.users.logs.title' })}
    />
  );
};

export default Widget;
