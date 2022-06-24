import { useIntl, FormattedMessage } from 'umi';
import { Popconfirm, Tooltip, message, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { IdRequest } from '@/protocols/nut_pb';
import { SiteClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';

interface IProps {
  id: number;
  handleRefresh: () => void;
}

const Widget = (props: IProps) => {
  const intl = useIntl();
  return (
    <Popconfirm
      title={intl.formatMessage(
        { id: 'table.confirm-to-remove' },
        { name: `${props.id}` },
      )}
      onConfirm={() => {
        const client = new SiteClient(GRPC_HOST);

        const request = new IdRequest();
        request.setId(props.id);

        client.destroyLeaveWord(request, grpc_metadata(), (err) => {
          if (err) {
            message.error(err.message);
          } else {
            message.success(
              intl.formatMessage({ id: 'form.submit.successed' }),
            );
            props.handleRefresh();
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
