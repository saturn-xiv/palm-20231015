import { ProLayout, PageContainer } from "@ant-design/pro-components";
import { Row, Col, Space } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { SelectInfo } from "rc-menu/lib/interface";
import type { MenuDataItem } from "@ant-design/pro-components";
import { useIntl } from "react-intl";

import { Home, Dashboard, Github, SwitchLanguage } from "../footer";
import { siteInfo, pageTitle } from "../../reducers/layout";
import {
  selectedKey as sideBarSelectedKey,
  select as onSideBarSelect,
} from "../../reducers/side-bar";
import Header from "../Header";
import SignOut from "./SignOut";
import NotificationBar from "./NotificationBar";
import { useAppSelector } from "../../hooks";
import palm_tree from "../../assets/palm-tree.svg";
import menus from "../../menus";
import { useAppDispatch } from "../../hooks";
import {
  currentUser,
  OPERATION_READ,
  ROLE_ADMINISTRATOR,
} from "../../reducers/current-user";
import NutUsersSignIn from "../../components/nut/users/SignIn";
import Application from "../../layouts/Application";
import { MENU_PREFIX } from "../../components/nut/admin/permissions/SideBar";

const Widget = () => {
  const site = useAppSelector(siteInfo);
  const title = useAppSelector(pageTitle);
  const navigate = useNavigate();
  const selectedKey = useAppSelector(sideBarSelectedKey);
  const dispatch = useAppDispatch();
  const user = useAppSelector(currentUser);
  const intl = useIntl();

  const menu_route_filter = (it: MenuDataItem): boolean => {
    if ((user?.roles || []).includes(ROLE_ADMINISTRATOR)) {
      return true;
    }
    const key = `${MENU_PREFIX}${it.key}`;
    for (var ip of user?.permissions || []) {
      if (
        ip.resourceId === undefined &&
        ip.operation === OPERATION_READ &&
        ip.resourceType === key
      ) {
        return true;
      }
    }
    if ((it.routes || []).map(menu_route_filter).length > 0) {
      return true;
    }
    return false;
  };
  const to_menu_route = (it: MenuDataItem): MenuDataItem => {
    return {
      path: it.path,
      icon: it.icon,
      name: intl.formatMessage({ id: `${it.key}.title` }),
      routes: it.routes
        ? it.routes.filter(menu_route_filter).map(to_menu_route)
        : undefined,
    };
  };
  return user ? (
    <ProLayout
      title={site?.subhead}
      logo={site?.logo || palm_tree}
      fixedHeader
      fixSiderbar
      rightContentRender={() => (
        <Space>
          <NotificationBar />
          <SignOut />
        </Space>
      )}
      route={{
        routes: menus.filter(menu_route_filter).map(to_menu_route),
      }}
      menuProps={{
        onSelect: ({ key }: SelectInfo) => {
          navigate(`/dashboard/${key}`);
          dispatch(onSideBarSelect(key));
        },
      }}
      selectedKeys={selectedKey ? [selectedKey] : []}
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
        <Row gutter={[16, 16]}>
          <Outlet />
        </Row>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
      </PageContainer>
    </ProLayout>
  ) : (
    <Application>
      <Col sm={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
        <NutUsersSignIn />
      </Col>
    </Application>
  );
};

export default Widget;
