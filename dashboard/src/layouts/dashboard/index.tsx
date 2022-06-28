import { ReactNode, useEffect } from "react";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import { Row, Col, Space } from "antd";
import type { MenuDataItem } from "@ant-design/pro-layout";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { SelectInfo } from "rc-menu/lib/interface";

import { Home, Dashboard, Github, SwitchLanguage } from "../footer";
import menus, { IMenu } from "../../menus";
import { TO_SIGN_IN, currentUser } from "../../reducers/current-user";
import { select as selectSideBar } from "../../reducers/side-bar";
import { siteInfo } from "../../reducers/layout";
import Header from "../Header";
import SignOut from "./SignOut";
import NotificationBar from "./NotificationBar";
import { useAppSelector, useAppDispatch } from "../../hooks";
import palm_tree from "../../assets/palm-tree.svg";

export interface IProps {
  title: string;
  children: ReactNode;
}

const Widget = ({ title, children }: IProps) => {
  const site = useAppSelector(siteInfo);
  const user = useAppSelector(currentUser);
  const sideBar = useAppSelector((state) => state.sideBar);
  const dispatch = useAppDispatch();
  const intl = useIntl();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (!user) {
        navigate(TO_SIGN_IN);
      }
    };
  }, [user, navigate]);

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
      title={site?.subhead}
      logo={<img alt="logo" src={site?.logo || palm_tree} />}
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
          dispatch(selectSideBar(key));
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
          <span key="copyright">&copy;{site?.copyright}</span>,
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
