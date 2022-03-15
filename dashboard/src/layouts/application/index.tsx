import { ReactNode } from "react";
import ProLayout from "@ant-design/pro-layout";
import { Row, Col } from "antd";

import Copyright from "../Copyright";
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
      ErrorBoundary={false}
      footerRender={() => <Copyright title={title} />}
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

export default Widget;
