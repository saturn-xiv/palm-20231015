import { ReactNode } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Card, Menu, Col } from "antd";
import {
  UserAddOutlined,
  CommentOutlined,
  LoginOutlined,
  UnlockOutlined,
  SecurityScanOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import Layout from "../application";
import { TO_SIGN_IN } from "../../reducers/current-user";

export interface IProps {
  title: string;
  children: ReactNode;
}

interface ILink {
  to: string;
  label: string;
  icon: ReactNode;
}

const Widget = ({ title, children }: IProps) => {
  const intl = useIntl();
  const navigate = useNavigate();
  const shared_links: ILink[] = [
    {
      label: "nut.users.sign-in.title",
      to: TO_SIGN_IN,
      icon: <LoginOutlined />,
    },
    {
      label: "nut.users.sign-up.title",
      to: "/users/sign-up",
      icon: <UserAddOutlined />,
    },
    {
      label: "nut.users.confirm.new.title",
      to: "/users/confirm/new",
      icon: <CheckOutlined />,
    },
    {
      label: "nut.users.unlock.new.title",
      to: "/users/unlock/new",
      icon: <UnlockOutlined />,
    },
    {
      label: "nut.users.forgot-password.title",
      to: "/users/forgot-password",
      icon: <SecurityScanOutlined />,
    },
    {
      label: "nut.leave-words.new.title",
      to: "/leave-words/new",
      icon: <CommentOutlined />,
    },
  ];
  return (
    <Layout title={intl.formatMessage({ id: title })}>
      <Col sm={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
        <Card>
          {children}
          <br />
          <Menu
            onClick={(it) => {
              navigate(it.key);
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
