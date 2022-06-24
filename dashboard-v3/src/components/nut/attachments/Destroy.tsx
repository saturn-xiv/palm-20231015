import { useIntl, FormattedMessage } from 'umi';
import { Popconfirm, Tooltip, message, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { IdRequest } from '@/protocols/nut_pb';
import { AttachmentClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { IItem } from '.';

interface IProps {
  item: IItem;
  handleRefresh: () => void;
}

const Widget = ({ item, handleRefresh }: IProps) => {
  const intl = useIntl();
  return (
    <Popconfirm
      title={intl.formatMessage(
        { id: 'table.confirm-to-remove' },
        { name: `${item.title}` },
      )}
      onConfirm={() => {
        const client = new AttachmentClient(GRPC_HOST);

        const request = new IdRequest();
        request.setId(item.id);

        client.destroy(request, grpc_metadata(), (err) => {
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
