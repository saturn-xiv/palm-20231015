import { useIntl, FormattedMessage } from "react-intl";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { RollbackOutlined, HomeOutlined } from "@ant-design/icons";

import Layout from "../../layouts/application";
import not_found from "../../assets/page-not-found.svg";

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const title = intl.formatMessage({ id: "nut.not-found.title" });
  return (
    <Layout title={title}>
      <Card
        title={title}
        hoverable
        cover={<img alt="not found" src={not_found} />}
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
      />
    </Layout>
  );
};

export default Widget;
