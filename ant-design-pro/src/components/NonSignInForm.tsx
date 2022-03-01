import { ReactNode } from 'react';
import { useIntl, history } from 'umi';
import { Card, Menu } from 'antd';
import { FormattedMessage } from 'react-intl';
import { MenuInfo } from 'rc-menu/lib/interface';

import {
  MessageOutlined,
  UserAddOutlined,
  CheckCircleOutlined,
  UnlockOutlined,
  LoginOutlined,
  AuditOutlined,
} from '@ant-design/icons';

export interface IProps {
  title: string;
  children: ReactNode;
}

interface ILinkItem {
  icon: ReactNode;
  to: string;
  title: string;
}

export default ({ title, children }: IProps) => {
  const intl = useIntl();

  const style = { width: '100%' };
  const links: ILinkItem[] = [
    {
      icon: <LoginOutlined />,
      to: '/users/sign-in',
      title: 'users.sign-in.title',
    },
    {
      icon: <UserAddOutlined />,
      to: '/users/sign-up',
      title: 'users.sign-up.title',
    },
    {
      icon: <AuditOutlined />,
      to: '/users/forgot-password',
      title: 'users.forgot-password.title',
    },
    {
      icon: <CheckCircleOutlined />,
      to: '/users/confirm',
      title: 'users.confirm.title',
    },
    {
      icon: <UnlockOutlined />,
      to: '/users/unlock',
      title: 'users.unlock.title',
    },
    {
      icon: <MessageOutlined />,
      to: '/leave-words/new',
      title: 'users.leave-words.new.title',
    },
  ];
  return (
    <Card title={title}>
      <Card.Grid hoverable={false} style={style}>
        {children}
      </Card.Grid>
      <Card.Grid hoverable={false} style={style}>
        <Menu
          onClick={(item: MenuInfo) => {
            history.push(item.key);
          }}
          mode="inline"
        >
          {links.map((it) => (
            <Menu.Item key={it.to} icon={it.icon}>
              <FormattedMessage id={it.title} />
            </Menu.Item>
          ))}
        </Menu>
      </Card.Grid>
    </Card>
  );
};
