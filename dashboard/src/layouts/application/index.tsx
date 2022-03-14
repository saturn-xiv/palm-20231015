import { ReactNode } from "react";
import { Layout } from "antd";
import { HelmetProvider } from "react-helmet-async";

import Copyright from "../Copyright";

interface IProps {
  title: string;
  children: ReactNode;
}

const Widget = ({ title, children }: IProps) => {
  return (
    <HelmetProvider>
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>{children}</Layout.Content>
        <Layout.Footer>
          <Copyright title={title} />
        </Layout.Footer>
      </Layout>
    </HelmetProvider>
  );
};

export default Widget;
