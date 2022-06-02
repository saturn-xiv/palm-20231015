import { ReactNode, useEffect } from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { Row, Col, Space } from 'antd';
import type { MenuDataItem } from '@ant-design/pro-layout';
import { useIntl, useHistory, useModel } from 'umi';

import { Home, Dashboard, Github, SwitchLanguage } from '../footer';
import menus, { IMenu } from '@/menus';
import { TO_SIGN_IN } from '@/models/useAuthModel';
import Header from '../Header';
import SignOut from './SignOut';
import NotificationBar from './NotificationBar';

export interface IProps {
  title: string;
  children: ReactNode;
}

const Widget = ({ title, children }: IProps) => {
  const intl = useIntl();
  const history = useHistory();
  const { initialState } = useModel('@@initialState');
  const { sideBar, selectSideBar, openSideBar } = useModel('sideBar');

  useEffect(() => {
    if (!initialState?.currentUser) {
      history.push(TO_SIGN_IN);
    }
  }, [initialState, history]);

  function to_menu_route(it: IMenu): MenuDataItem {
    return {
      path: it.to,
      icon: it.icon,
      name: intl.formatMessage({ id: `menus.${it.to}` }),
      routes: it.items ? it.items.map(to_menu_route) : undefined,
    };
  }

  return (
    <ProLayout
      title={initialState?.layout.subhead}
      logo={<img src={initialState?.layout.logo} />}
      fixedHeader
      fixSiderbar
      rightContentRender={() => (
        <Space>
          <NotificationBar />
          <SignOut />
        </Space>
      )}
      route={{
        path: 'home',
        routes: menus.map(to_menu_route),
      }}
      menuProps={{
        onSelect: ({ key }) => {
          history.push(key);
          selectSideBar(key);
        },
      }}
      selectedKeys={[sideBar.selectedKey]}
      // TODO
      // openKeys={sideBar.openKeys}

      // onOpenChange={(keys) => {
      //   console.log(keys, sideBar);
      //   if (keys) {
      //     openSideBar(keys);
      //   }
      // }}
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
