import { ReactNode } from "react";
import { Avatar, Row, Col, Space } from "antd";
import {
  UserOutlined,
  ProfileOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import { useNavigate } from "react-router-dom";
import type { MenuDataItem } from "@ant-design/pro-layout";
import { useIntl } from "react-intl";
import { MenuInfo } from "rc-menu/lib/interface";

import { selectCurrentUser } from "../../reducers/current-user";
import { selectSiteInfo } from "../../reducers/site-info";
import { selectSideBarMenus, IMenu } from "../../reducers/side-bar";
import { useAppSelector } from "../../hooks";
import Forbidden from "../403";
import {
  Copyright,
  Home,
  Dashboard,
  I18n,
  Github,
  Layout as LayoutInfo,
} from "../footer";

export interface IProps {
  title: string;
  children: ReactNode;
}

const Widget = ({ title, children }: IProps) => {
  const site = useAppSelector(selectSiteInfo);
  const intl = useIntl();
  const menus = useAppSelector(selectSideBarMenus);

  function to_menu_route(it: IMenu): MenuDataItem {
    return {
      path: it.to,
      icon: to_icon(it.to),
      name: it.label
        ? it.label
        : intl.formatMessage({ id: `side-bar.menus.${it.to}` }),
      routes: it.items ? it.items.map(to_menu_route) : undefined,
    };
  }

  const to_icon = (to: string): ReactNode => {
    switch (to) {
      case "personal":
        return <ProfileOutlined />;
      case "settings":
        return <SettingOutlined />;
      default:
        return <InfoCircleOutlined />;
    }
  };

  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser);
  return user ? (
    <ProLayout
      title={site.subhead}
      fixedHeader
      fixSiderbar
      rightContentRender={() => (
        <Space>
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </Space>
      )}
      route={{
        path: "home",
        routes: menus.map(to_menu_route),
      }}
      menuProps={{
        onClick: ({ key }: MenuInfo) => {
          navigate(key);
        },
      }}
    >
      <PageContainer
        title={title}
        footer={[
          <Copyright key="copyright" />,
          <Home key="home" />,
          <Dashboard key="dashboard" />,
          <Github key="github" />,
          <I18n key="global" />,
        ]}
      >
        <Row gutter={16}>
          {children}
          <Col span={24}>
            <LayoutInfo />
          </Col>
        </Row>
      </PageContainer>
    </ProLayout>
  ) : (
    <Forbidden />
  );
};

export default Widget;
