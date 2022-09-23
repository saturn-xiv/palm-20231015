import { ReactNode } from "react";
import {
  ProLayout,
  DefaultFooter,
  PageContainer,
} from "@ant-design/pro-components";
import { Row, Col } from "antd";

import palm_tree from "../assets/palm-tree.svg";
import { useAppSelector } from "../hooks";
import { siteInfo, pageTitle } from "../reducers/layout";
import Header from "./Header";
import { Home, Dashboard, Github, SwitchLanguage } from "./footer";

interface IProps {
  children: ReactNode;
}

const Widget = (props: IProps) => {
  const site = useAppSelector(siteInfo);
  const title = useAppSelector(pageTitle);
  return (
    <ProLayout
      title={site?.subhead}
      layout="top"
      contentWidth="Fluid"
      logo={site?.logo || palm_tree}
      fixedHeader
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
    >
      <PageContainer title={title} content={<div />}>
        <Row>{props.children}</Row>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
      </PageContainer>
    </ProLayout>
  );
};

export default Widget;
