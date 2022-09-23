import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { Card, Menu, Col } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import {
  UserAddOutlined,
  CommentOutlined,
  LoginOutlined,
  UnlockOutlined,
  SecurityScanOutlined,
  CheckOutlined,
} from "@ant-design/icons";

import Layout from "./Application";

interface ILink {
  to: string;
  label: string;
  icon: ReactNode;
}

const Widget = () => {
  const navigate = useNavigate();
  const shared_links: ILink[] = [
    {
      label: "nut.users.sign-in.title",
      to: "users/sign-in",
      icon: <LoginOutlined />,
    },
    {
      label: "nut.users.sign-up.title",
      to: "users/sign-up",
      icon: <UserAddOutlined />,
    },
    {
      label: "nut.users.confirm.new.title",
      to: "users/confirm/new",
      icon: <CheckOutlined />,
    },
    {
      label: "nut.users.unlock.new.title",
      to: "users/unlock/new",
      icon: <UnlockOutlined />,
    },
    {
      label: "nut.users.forgot-password.title",
      to: "users/forgot-password",
      icon: <SecurityScanOutlined />,
    },
    {
      label: "nut.leave-words.new.title",
      to: "leave-words/new",
      icon: <CommentOutlined />,
    },
  ];
  return (
    <Layout>
      <Col sm={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
        <Card>
          <Outlet />
          <br />
          <Menu
            onClick={(it) => {
              navigate(`/anonymous/${it.key}`);
            }}
            mode="inline"
            items={shared_links.map((it) => ({
              key: it.to,
              label: <FormattedMessage id={it.label} />,
              icon: it.icon,
            }))}
          />
        </Card>
      </Col>
    </Layout>
  );
};

export default Widget;
