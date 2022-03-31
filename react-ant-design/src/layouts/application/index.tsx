import { ReactNode } from "react";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import { Row, Col } from "antd";
import Footer from "@ant-design/pro-layout/lib/Footer";

import { Home, Github, Dashboard, I18n, Layout as LayoutInfo } from "../footer";
import { selectSiteInfo } from "../../reducers/site-info";
import { useAppSelector } from "../../hooks";

export interface IProps {
  title: string;
  children: ReactNode;
}

const Widget = ({ title, children }: IProps) => {
  const site = useAppSelector(selectSiteInfo);
  return (
    <ProLayout
      title={site.subhead}
      layout="top"
      contentWidth="Fluid"
      footerRender={() => (
        <Footer
          copyright={site.copyright}
          links={[
            {
              key: "home",
              title: <Home />,
              href: "#",
            },
            {
              key: "dashboard",
              title: <Dashboard />,
              href: "#",
            },
            {
              key: "github",
              title: <Github />,
              href: "#",
            },
            {
              key: "global",
              title: <I18n />,
              href: "#",
            },
          ]}
        />
      )}
      fixedHeader={true}
    >
      <PageContainer title={title} content={<div />}>
        <Row>
          <Col sm={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
            {children}
          </Col>
          <Col span={24}>
            <LayoutInfo />
          </Col>
        </Row>
      </PageContainer>
    </ProLayout>
  );
};

export default Widget;
