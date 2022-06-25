import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { Col, Row, message, Tabs } from 'antd';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

import Layout from '@/layouts/dashboard';
import CopyrightForm from '@/components/nut/admin/site/profile/Copyright';
import InfoForm from '@/components/nut/admin/site/profile/Info';
import AuthorForm from '@/components/nut/admin/site/profile/Author';
import KeywordsForm from '@/components/nut/admin/site/seo/Keywords';
import LogoForm from '@/components/nut/admin/site/profile/Logo';
import GoogleForm from '@/components/nut/admin/site/seo/Google';
import BaiduForm from '@/components/nut/admin/site/seo/Baidu';
import RssPanel from '@/components/nut/admin/site/seo/Rss';
import SitemapPanel from '@/components/nut/admin/site/seo/Sitemap';
import BingForm from '@/components/nut/admin/site/seo/Bing';
import SmtpForm from '@/components/nut/admin/site/profile/smtp/Profile';
import PostgreSqlPanel from '@/components/nut/admin/site/status/PostgreSql';
import TokenPanel from '@/components/nut/admin/site/profile/Token';
import RedisPanel from '@/components/nut/admin/site/status/redis';
import SystemPanel from '@/components/nut/admin/site/status/System';
import RabbitMqPanel from '@/components/nut/admin/site/status/RabbitMq';
import AwsForm from '@/components/nut/admin/site/profile/aws/Profile';
import { SiteClient } from '@/protocols/NutServiceClientPb';
import { GRPC_HOST, grpc_metadata } from '@/request';
import { SiteLayoutResponse, SiteStatusResponse } from '@/protocols/nut_pb';

const Widget = () => {
  const intl = useIntl();
  const [layout, setLayout] = useState<SiteLayoutResponse>(
    new SiteLayoutResponse(),
  );
  const [status, setStatus] = useState<SiteStatusResponse>(
    new SiteStatusResponse(),
  );

  useEffect(() => {
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
  }, [setLayout, setStatus]);
  return (
    <Layout title={intl.formatMessage({ id: 'nut.admin.site.title' })}>
      <Col span={24}>
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
                  email={layout.getAuthor()?.getEmail() || ''}
                  name={layout.getAuthor()?.getName() || ''}
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
      </Col>
    </Layout>
  );
};

export default Widget;