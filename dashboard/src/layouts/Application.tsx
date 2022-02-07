import { useState, useEffect } from 'react';
import ProLayout from '@ant-design/pro-layout';
import { Row, Col } from 'antd';

import Footer from './Footer';
import { graphql } from '@/global';
import logo_png from '@/assets/palm-tree.svg';

export interface IProps {
  children: React.ReactNode;
}

export default ({ children }: IProps) => {
  const [title, setTitle] = useState();
  const [subhead, setSubhead] = useState();
  useEffect(() => {
    graphql(
      `
        query {
          siteInfo {
            title
            subhead
          }
        }
      `,
      {},
      (res: any) => {
        setSubhead(res.siteInfo.subhead);
        setTitle(res.siteInfo.title);
      },
    );
  }, [setSubhead, setTitle]);
  return (
    <ProLayout
      title={subhead}
      logo={logo_png}
      layout="top"
      contentWidth="Fluid"
      ErrorBoundary={false}
      footerRender={Footer}
      fixedHeader={true}
    >
      <Row>
        <Col sm={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
          {children}
        </Col>
      </Row>
    </ProLayout>
  );
};
