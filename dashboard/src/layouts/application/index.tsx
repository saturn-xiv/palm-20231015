import { ReactNode } from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { Row, Col } from 'antd';
import Footer from '@ant-design/pro-layout/lib/Footer';
import { Helmet, useModel } from 'umi';

import { Home, Dashboard, Github, SwitchLanguage } from '../footer';
import palm_tree from '@/assets/palm-tree.svg';

export interface IProps {
  title: string;
  children: ReactNode;
}

const Widget = (props: IProps) => {
  const { initialState } = useModel('@@initialState');
  return (
    <ProLayout
      title={initialState?.layout.subhead}
      layout="top"
      contentWidth="Fluid"
      logo={() => <img src={palm_tree} />}
      footerRender={() => (
        <Footer
          copyright={`${initialState?.layout.copyright}`}
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
              <title>
                {props.title} | {initialState?.layout.subhead} |
                {initialState?.layout.title}
              </title>
            </Helmet>
          </Col>
        </Row>
      </PageContainer>
    </ProLayout>
  );
};

export default Widget;
