import { Col, Row, Tabs } from "antd";
import { FormattedMessage, useIntl } from "react-intl";

import Layout from "../../../../layouts/dashboard";
import Baidu from "./Baidu";
import Google from "./Google";
import Info from "./Info";
import Rss from "./Rss";
import Sitemap from "./Sitemap";
import Smtp from "./Smtp";
import Author from "./Author";
import Keywords from "./Keywords";
import Copyright from "./Copyright";
import Status from "./Status";

const Widget = () => {
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: "nut.admin.site.title" })}>
      <Col span={24}>
        <Tabs>
          <Tabs.TabPane
            tab={<FormattedMessage id="nut.admin.site.tabs.status" />}
            key="status"
          >
            <Status />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={<FormattedMessage id="nut.admin.site.tabs.profile" />}
            key="profile"
          >
            <Row>
              <Col sm={24} md={8}>
                <Keywords />
              </Col>
              <Col sm={24} md={8}>
                <Copyright />
              </Col>
              <Col sm={24} md={8}>
                <Author />
              </Col>
              <Col sm={24} md={8}>
                <Info />
              </Col>
              <Col sm={24} md={8}>
                <Smtp />
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={<FormattedMessage id="nut.admin.site.tabs.seo" />}
            key="seo"
          >
            <Row>
              <Col sm={24} md={8}>
                <Google />
              </Col>
              <Col sm={24} md={8}>
                <Baidu />
              </Col>
              <Col sm={24} md={8}>
                <Rss />
              </Col>
              <Col sm={24} md={8}>
                <Sitemap />
              </Col>
            </Row>
          </Tabs.TabPane>
        </Tabs>
      </Col>
    </Layout>
  );
};

export default Widget;
