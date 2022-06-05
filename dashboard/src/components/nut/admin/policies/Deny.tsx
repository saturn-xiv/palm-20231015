import { useIntl, FormattedMessage } from 'umi';
import { Popconfirm, Tooltip, message, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { PolicyPermission } from '@/protocols/nut_pb';
import { PolicyClient, SiteClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { ITableItem } from '.';

interface IProps {
  item: ITableItem;
  handleRefresh: () => void;
}

const Widget = ({ item, handleRefresh }: IProps) => {
  const intl = useIntl();
  return (
    <Popconfirm
      title={intl.formatMessage(
        { id: 'table.confirm-to-remove' },
        {
          name: `(${item.role.code}, ${item.operation.code}, ${item.resourceType.code}, ${item.resourceId})`,
        },
      )}
      onConfirm={() => {
        const client = new PolicyClient(GRPC_HOST);

        const request = new PolicyPermission();
        request.setRole(item.role.code);
        request.setOperation(item.operation.code);
        request.setResourceType(item.resourceType.code);
        if (item.resourceId) {
          request.setResourceId(item.resourceId);
        }

        client.deny(request, grpc_metadata(), (err) => {
          if (err) {
            message.error(err.message);
          } else {
            message.success(
              intl.formatMessage({ id: 'form.submit.successed' }),
            );
            handleRefresh();
          }
        });
      }}
    >
      <Tooltip title={<FormattedMessage id="buttons.remove" />}>
        <Button type="dashed" shape="circle" icon={<DeleteOutlined />} danger />
      </Tooltip>
    </Popconfirm>
  );
};

export default Widget;
