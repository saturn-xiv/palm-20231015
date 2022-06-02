import { ReactNode, useEffect } from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { Row, Col, Space, Avatar } from 'antd';
import type { MenuDataItem } from '@ant-design/pro-layout';
import {
  UserOutlined,
  ProfileOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useIntl, useHistory, useModel } from 'umi';

import { Home, Dashboard, Github, SwitchLanguage } from '../footer';
import menus, { IMenu } from '@/menus';
import { TO_SIGN_IN } from '@/models/useAuthModel';
import Header from '../Header';

export interface IProps {
  title: string;
  children: ReactNode;
}

const Widget = ({ title, children }: IProps) => {
  const intl = useIntl();
  const history = useHistory();
  const { initialState } = useModel('@@initialState');

  useEffect(() => {
    if (!initialState?.currentUser) {
      history.push(TO_SIGN_IN);
    }
  }, [initialState, history]);

  function to_menu_route(it: IMenu): MenuDataItem {
    return {
      path: it.to,
      icon: to_icon(it.to),
      name: intl.formatMessage({ id: `menus.${it.to}` }),
      routes: it.items ? it.items.map(to_menu_route) : undefined,
    };
  }

  const to_icon = (to: string): ReactNode => {
    switch (to) {
      case 'personal':
        return <ProfileOutlined />;
      case 'settings':
        return <SettingOutlined />;
      default:
        return <InfoCircleOutlined />;
    }
  };
  return (
    <ProLayout
      title={initialState?.layout.subhead}
      logo={<img src={initialState?.layout.logo} />}
      fixedHeader
      fixSiderbar
      rightContentRender={() => (
        <Space>
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </Space>
      )}
      route={{
        path: 'home',
        routes: menus.map(to_menu_route),
      }}
      menuProps={{
        onClick: ({ key }: MenuInfo) => {
          history.push(key);
        },
      }}
      menu={{ defaultOpenAll: true }}
    >
      <PageContainer
        title={title}
        footer={[
          <span key="copyright">&copy;{initialState?.layout.copyright}</span>,
          <Home key="home" />,
          <Dashboard key="dashboard" />,
          <Github key="github" />,
          <SwitchLanguage key="global" />,
        ]}
      >
        <Row gutter={[16, 16]}>{children}</Row>
        <Row>
          <Col>
            <Header title={title} />
          </Col>
        </Row>
      </PageContainer>
    </ProLayout>
  );
};

export default Widget;
