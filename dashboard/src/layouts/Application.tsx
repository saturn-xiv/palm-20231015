import ProLayout from '@ant-design/pro-layout';

import Footer from './Footer';
import { graphql } from '@/global';

export interface IProps {
  children: React.ReactNode;
}

export default ({ children }: IProps) => {
  graphql(
    `      install(form: $form) {
        createdAt
      }    `,
    {},
  );
  return (
    <ProLayout
      layout="top"
      contentWidth="Fluid"
      ErrorBoundary={false}
      footerRender={Footer}
      fixedHeader={true}
    >
      {children}
    </ProLayout>
  );
};
