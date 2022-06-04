import { FormattedMessage, useIntl } from 'umi';
import { Col, Row, Tabs } from 'antd';

import Layout from '@/layouts/dashboard';
import CopyrightForm from '@/components/nut/admin/site/settings/Copyright';
import InfoForm from '@/components/nut/admin/site/settings/Info';
import AuthorForm from '@/components/nut/admin/site/settings/Author';
import KeywordsForm from '@/components/nut/admin/site/seo/Keywords';
import LogoForm from '@/components/nut/admin/site/settings/Logo';
import GoogleForm from '@/components/nut/admin/site/seo/Google';
import BaiduForm from '@/components/nut/admin/site/seo/Baidu';
import RssPanel from '@/components/nut/admin/site/seo/Rss';
import SitemapPanel from '@/components/nut/admin/site/seo/Sitemap';
import BingForm from '@/components/nut/admin/site/seo/Bing';
import SmtpForm from '@/components/nut/admin/site/settings/Smtp';
import PostgreSqlPanel from '@/components/nut/admin/site/status/PostgreSql';
import TokenPanel from '@/components/nut/admin/site/settings/Token';
import RedisPanel from '@/components/nut/admin/site/status/Redis';
import SystemPanel from '@/components/nut/admin/site/status/System';
import RabbitMqPanel from '@/components/nut/admin/site/status/RabbitMq';

const Widget = () => {
  const intl = useIntl();
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
                <SystemPanel />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 10 }}>
                <PostgreSqlPanel />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 10 }}>
                <RedisPanel />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 10 }}>
                <RabbitMqPanel />
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane
            key="settings"
            tab={<FormattedMessage id="nut.admin.site.settings" />}
          >
            <Row gutter={[16, 16]}>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <InfoForm />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <AuthorForm />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <CopyrightForm />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <LogoForm />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
                <SmtpForm />
              </Col>
              <Col sm={{ span: 22, offset: 1 }} md={{ span: 6 }}>
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
                <KeywordsForm />
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
