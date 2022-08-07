import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Col, Row, message, Tabs } from "antd";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { GRPC_HOST, grpc_metadata } from "../../../../request";
import {
  SiteLayoutResponse,
  SiteStatusResponse,
} from "../../../../protocols/nut_pb";
import { SiteClient } from "../../../../protocols/NutServiceClientPb";
import { setTitle } from "../../../../reducers/layout";
import { useAppDispatch } from "../../../../hooks";
import { ROLE_ADMINISTRATOR } from "../../../../reducers/current-user";
import HasRole from "../../../access/HasRole";
import CopyrightForm from "./profile/Copyright";
import InfoForm from "./profile/Info";
import AuthorForm from "./profile/Author";
import KeywordsForm from "./seo/Keywords";
import LogoForm from "./profile/Logo";
import GoogleForm from "./seo/Google";
import BaiduForm from "./seo/Baidu";
import RssPanel from "./seo/Rss";
import SitemapPanel from "./seo/Sitemap";
import BingForm from "./seo/Bing";
import SmtpForm from "./profile/smtp/Profile";
import PostgreSqlPanel from "./status/PostgreSql";
import TokenPanel from "./profile/Token";
import RedisPanel from "./status/redis";
import SystemPanel from "./status/System";
import RabbitMqPanel from "./status/RabbitMq";
import AwsForm from "./profile/aws/Profile";

const Widget = () => {
  const intl = useIntl();
  const [layout, setLayout] = useState<SiteLayoutResponse>(
    new SiteLayoutResponse()
  );
  const [status, setStatus] = useState<SiteStatusResponse>(
    new SiteStatusResponse()
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTitle(intl.formatMessage({ id: "nut.users.sign-up.title" })));
    const client = new SiteClient(GRPC_HOST);

    client.layout(new Empty(), grpc_metadata(), (err, response) => {
      if (err) {
        message.error(err.message);
      } else {
        setLayout(response);
      }
    });
    client.status(new Empty(), grpc_metadata(), (err, response) => {
      if (err) {
        message.error(err.message);
      } else {
        setStatus(response);
      }
    });
  }, [dispatch, intl]);

  return (
    <Col span={24}>
      <HasRole roles={[ROLE_ADMINISTRATOR]}>
        <Tabs defaultActiveKey="status">
          <Tabs.TabPane
            key="status"
            tab={<FormattedMessage id="nut.admin.site.status" />}
          >
            <Row gutter={[16, 16]}>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 10 }}>
                <SystemPanel item={status.getSystem()} />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 10 }}>
                <PostgreSqlPanel item={status.getPostgresql()} />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 10 }}>
                <RedisPanel item={status.getRedis()} />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 10 }}>
                <RabbitMqPanel item={status.getRabbitmq()} />
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane
            key="profile"
            tab={<FormattedMessage id="nut.admin.site.profile" />}
          >
            <Row gutter={[16, 16]}>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <InfoForm
                  title={layout.getTitle()}
                  subhead={layout.getSubhead()}
                  description={layout.getDescription()}
                />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <AuthorForm
                  email={layout.getAuthor()?.getEmail() || ""}
                  name={layout.getAuthor()?.getName() || ""}
                />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <CopyrightForm value={layout.getCopyright()} />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <LogoForm url={layout.getLogo()} />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <SmtpForm />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <AwsForm />
              </Col>
              <Col span={22}>
                <TokenPanel />
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane
            key="seo"
            tab={<FormattedMessage id="nut.admin.site.seo" />}
          >
            <Row gutter={[16, 16]}>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <SitemapPanel />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <RssPanel />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <KeywordsForm items={layout.getKeywordsList()} />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <GoogleForm />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <BaiduForm />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <BingForm />
              </Col>
            </Row>
          </Tabs.TabPane>
        </Tabs>
      </HasRole>
    </Col>
  );
};

export default Widget;
