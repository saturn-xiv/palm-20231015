import { ReactNode } from "react";
import {
  LoginOutlined,
  MailOutlined,
  UnlockFilled,
  CommentOutlined,
  UserAddOutlined,
  SecurityScanOutlined,
} from "@ant-design/icons";
import { Menu, Card } from "antd";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

import Layout, { IProps as ILayout } from "../../../layouts/application";

interface IProps extends ILayout {
  icon: ReactNode;
}

const Widget = ({ title, children }: IProps) => {
  const navigate = useNavigate();
  return (
    <Layout title={title}>
      <Card>{children}</Card>
      <Menu onClick={({ key }) => navigate(key)}>
        {[
          {
            to: "/users/sign-in",
            icon: <LoginOutlined />,
            label: "nut.users.sign-in.title",
          },
          {
            to: "/users/sign-up",
            icon: <UserAddOutlined />,
            label: "nut.users.sign-up.title",
          },
          {
            to: "/users/confirm",
            icon: <MailOutlined />,
            label: "nut.users.confirm.title",
          },
          {
            to: "/users/unlock",
            icon: <UnlockFilled />,
            label: "nut.users.unlock.title",
          },
          {
            to: "/users/forgot-password",
            icon: <SecurityScanOutlined />,
            label: "nut.users.forgot-password.title",
          },
          {
            to: "/leave-words/new",
            icon: <CommentOutlined />,
            label: "nut.leave-words.new.title",
          },
        ].map((it) => (
          <Menu.Item key={it.to} icon={it.icon}>
            <FormattedMessage id={it.label} />
          </Menu.Item>
        ))}
      </Menu>
    </Layout>
  );
};

export default Widget;
