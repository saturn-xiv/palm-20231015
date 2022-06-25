import { ReactNode, useEffect } from "react";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import { Row, Col, Space } from "antd";
import type { MenuDataItem } from "@ant-design/pro-layout";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { SelectInfo } from "rc-menu/lib/interface";

import { Home, Dashboard, Github, SwitchLanguage } from "../footer";
import menus, { IMenu } from "../../menus";
import { TO_SIGN_IN } from "../../reducers/current-user";
import { select as selectSideBar } from "../../reducers/side-bar";
import Header from "../Header";
import SignOut from "./SignOut";
import NotificationBar from "./NotificationBar";
import { useAppSelector } from "../../hooks";

export interface IProps {
  title: string;
  children: ReactNode;
}

const Widget = ({ title, children }: IProps) => {
  const layout = useAppSelector((state) => state.layout);
  const currentUser = useAppSelector((state) => state.currentUser);
  const sideBar = useAppSelector((state) => state.sideBar);
  const intl = useIntl();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser.uid) {
      navigate(TO_SIGN_IN);
    }
  }, [layout, navigate]);

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
      title={layout.subhead}
      logo={<img src={layout.logo} />}
      fixedHeader
      fixSiderbar
      rightContentRender={() => (
        <Space>
          <NotificationBar />
          <SignOut />
        </Space>
      )}
      route={{
        path: "home",
        routes: menus.map(to_menu_route),
      }}
      menuProps={{
        onSelect: ({ key }: SelectInfo) => {
          navigate(key);
          selectSideBar(key);
        },
      }}
      selectedKeys={sideBar.selectedKey ? [sideBar.selectedKey] : []}
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
          <span key="copyright">&copy;{layout.copyright}</span>,
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
