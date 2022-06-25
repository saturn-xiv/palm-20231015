import { useIntl, FormattedMessage } from "react-intl";
import { Card, Button, Col } from "antd";
import { useNavigate } from "react-router-dom";

import Layout from "../../layouts/application";
import broken_link from "../../assets/broken-link.svg";

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const title = intl.formatMessage({ id: "nut.404.title" });
  return (
    <Layout title={title}>
      <Col sm={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
        <Card
          title={title}
          extra={
            <>
              <Button
                type="link"
                onClick={() => {
                  navigate("/");
                }}
              >
                <FormattedMessage id="buttons.go-home" />
              </Button>
              <Button
                type="link"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <FormattedMessage id="buttons.go-back" />
              </Button>
            </>
          }
          cover={<img src={broken_link} />}
        />
      </Col>
    </Layout>
  );
};

export default Widget;
