import { useEffect } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { Card, Button, Col } from "antd";

import broken_link from "../../assets/broken-link.svg";
import { setTitle } from "../../reducers/layout";
import { useAppDispatch } from "../../hooks";
import Layout from "../../layouts/Application";

const Widget = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const title = intl.formatMessage({ id: "nut.404.title" });

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTitle(title));
  }, [dispatch, intl, title]);

  return (
    <Layout>
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
          cover={<img alt={title} src={broken_link} />}
        />
      </Col>
    </Layout>
  );
};

export default Widget;
