import { ReactNode } from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { Row, Col } from 'antd';
import Footer from '@ant-design/pro-layout/lib/Footer';
import { useModel } from 'umi';

import { Home, Dashboard, Github, SwitchLanguage } from '../footer';
import palm_tree from '@/assets/palm-tree.svg';
import Header from '../Header';

export interface IProps {
  title: string;
  children: ReactNode;
}

const Widget = ({ title, children }: IProps) => {
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
      <PageContainer title={title} content={<div />}>
        <Row>{children}</Row>
        <Row>
          <Col>
            <Header title={title} />
          </Col>
        </Row>
      </PageContainer>
    </ProLayout>
  );
};

export default Widget;