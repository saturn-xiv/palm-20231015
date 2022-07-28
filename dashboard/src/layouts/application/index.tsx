import { ReactNode } from "react";
import {
  DefaultFooter,
  ProLayout,
  PageContainer,
} from "@ant-design/pro-components";
import { Row, Col } from "antd";

import { Home, Dashboard, Github, SwitchLanguage } from "../footer";
import palm_tree from "../../assets/palm-tree.svg";
import Header from "../Header";
import { useAppSelector } from "../../hooks";
import { siteInfo } from "../../reducers/layout";

export interface IProps {
  title: string;
  children: ReactNode;
}

const Widget = ({ title, children }: IProps) => {
  const site = useAppSelector(siteInfo);
  return (
    <ProLayout
      title={site?.subhead}
      layout="top"
      contentWidth="Fluid"
      logo={site?.logo || palm_tree}
      footerRender={() => (
        <DefaultFooter
          copyright={`${site?.copyright}`}
          links={[
            {
              key: "home",
              title: <Home />,
              href: "/",
            },
            {
              key: "dashboard",
              title: <Dashboard />,
              href: process.env.PUBLIC_URL,
            },
            {
              key: "github",
              title: <Github />,
              href: "#",
            },
            {
              key: "global",
              title: <SwitchLanguage />,
              href: "#",
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
