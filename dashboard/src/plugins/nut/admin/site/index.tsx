import { Col } from "antd";
import { useIntl } from "react-intl";

import Layout from "../../../../layouts/dashboard";
import Baidu from "./Baidu";
import Google from "./Google";
import Cache from "./Cache";
import Info from "./Info";
import Rss from "./Rss";
import Sitemap from "./Sitemap";
import Smtp from "./Smtp";
import Author from "./Author";

const Widget = () => {
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: "nut.admin.site.title" })}>
      <Col sm={24} md={8}>
        <Info />
      </Col>
      <Col sm={24} md={8}>
        <Author />
      </Col>
      <Col sm={24} md={8}>
        <Cache />
      </Col>
      <Col sm={24} md={8}>
        <Smtp />
      </Col>
      <Col sm={24} md={8}>
        <Rss />
      </Col>
      <Col sm={24} md={8}>
        <Sitemap />
      </Col>
      <Col sm={24} md={8}>
        <Google />
      </Col>
      <Col sm={24} md={8}>
        <Baidu />
      </Col>
    </Layout>
  );
};

export default Widget;
