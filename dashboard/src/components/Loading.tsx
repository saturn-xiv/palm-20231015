import { useEffect } from "react";
import { useIntl } from "react-intl";
import { Col } from "antd";

import loading from "../assets/reload.svg";
import { setTitle } from "../reducers/layout";
import { useAppDispatch } from "../hooks";
import Layout from "../layouts/Application";

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.loading.title" });

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTitle(title));
  }, [dispatch, intl, title]);

  return (
    <Layout>
      <Col sm={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
        <img alt={title} src={loading} />
      </Col>
    </Layout>
  );
};

export default Widget;
