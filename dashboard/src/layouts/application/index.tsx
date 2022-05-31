import { ReactNode } from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { Row, Col } from 'antd';
import Footer from '@ant-design/pro-layout/lib/Footer';
import { Helmet } from 'umi';

import { Home, Dashboard, Github, SwitchLanguage } from '../footer';

export interface IProps {
  title: string;
  children: ReactNode;
}

const Widget = (props: IProps) => {
  return (
    <ProLayout
      title="无登录页面模板"
      layout="top"
      contentWidth="Fluid"
      footerRender={() => (
        <Footer
          copyright="TODO"
          links={[
            {
              key: 'home',
              title: <Home />,
              href: '/',
            },
            {
              key: 'dashboard',
              title: <Dashboard />,
              href: '/my/',
            },
            {
              key: 'github',
              title: <Github />,
              href: '#',
            },
            {
              key: 'global',
              title: <SwitchLanguage />,
              href: '#',
            },
          ]}
        />
      )}
      fixedHeader
    >
      <PageContainer title={props.title} content={<div />}>
        <Row>{props.children}</Row>
        <Row>
          <Col>
            <Helmet>
              <title>TODO | {props.title}</title>
            </Helmet>
          </Col>
        </Row>
      </PageContainer>
    </ProLayout>
  );
};

export default Widget;
