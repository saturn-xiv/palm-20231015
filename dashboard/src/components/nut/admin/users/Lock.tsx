import { useIntl, FormattedMessage } from 'umi';
import { Popconfirm, Tooltip, message, Button } from 'antd';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
import { RpcError } from 'grpc-web';

import { IdRequest } from '@/protocols/nut_pb';
import { SiteClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { IItem } from '.';

interface IProps {
  item: IItem;
  handleRefresh: () => void;
}

const Widget = ({ item, handleRefresh }: IProps) => {
  const intl = useIntl();
  const locked = item.lockedAt !== undefined;
  const action = locked ? 'unlock' : 'lock';
  return (
    <Popconfirm
      title={intl.formatMessage(
        {
          id: `nut.admin.users.${action}.confirm`,
        },
        { name: item.nickName },
      )}
      onConfirm={() => {
        const client = new SiteClient(GRPC_HOST);

        const request = new IdRequest();
        request.setId(item.id);
        const metadata = grpc_metadata();
        const handler = (err: RpcError) => {
          if (err) {
            message.error(err.message);
          } else {
            message.success(
              intl.formatMessage({ id: 'form.submit.successed' }),
            );
            handleRefresh();
          }
        };
        if (locked) {
          client.unlockUser(request, metadata, handler);
        } else {
          client.lockUser(request, metadata, handler);
        }
      }}
    >
      <Tooltip title={<FormattedMessage id={`buttons.${action}`} />}>
        <Button
          type="dashed"
          shape="circle"
          icon={locked ? <UnlockOutlined /> : <LockOutlined />}
        />
      </Tooltip>
    </Popconfirm>
  );
};

export default Widget;
