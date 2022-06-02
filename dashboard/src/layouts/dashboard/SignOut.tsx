import { Avatar } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useIntl, useModel } from 'umi';
import { Popconfirm, message } from 'antd';
import { removeToken } from '@/models/useAuthModel';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

import { UserClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';

const Widget = () => {
  const { refresh } = useModel('@@initialState');
  const intl = useIntl();
  return (
    <Popconfirm
      title={intl.formatMessage({ id: 'nut.users.sign-out.title' })}
      onConfirm={() => {
        const client = new UserClient(GRPC_HOST);
        client.signOut(new Empty(), grpc_metadata(), (err) => {
          if (err) {
            message.error(err.message);
          } else {
            message.success(
              intl.formatMessage({ id: 'form.submit.successed' }),
            );
          }
          removeToken();
          refresh();
        });
      }}
    >
      <Avatar shape="square" size="small" icon={<LogoutOutlined />} />
    </Popconfirm>
  );
};

export default Widget;
