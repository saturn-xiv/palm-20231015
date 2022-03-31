import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { RollbackOutlined, HomeOutlined } from "@ant-design/icons";

export interface IProps {
  children?: ReactNode;
  cover?: ReactNode;
}

const Widget = ({ children, cover }: IProps) => {
  const navigate = useNavigate();

  return (
    <Card
      cover={cover}
      actions={[
        <Button onClick={() => navigate(-1)} icon={<RollbackOutlined />}>
          &nbsp;
          <FormattedMessage id="buttons.go-back" />
        </Button>,
        <Button
          onClick={() => navigate("/")}
          icon={<HomeOutlined />}
          type="primary"
        >
          &nbsp;
          <FormattedMessage id="buttons.go-home" />
        </Button>,
      ]}
    >
      {children}
    </Card>
  );
};

export default Widget;
