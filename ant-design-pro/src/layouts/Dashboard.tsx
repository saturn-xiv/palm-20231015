import ProLayout, { ProBreadcrumb } from '@ant-design/pro-layout';

import Footer from './Footer';

export interface IProps {
  children: React.ReactNode;
}

export default ({ children }: IProps) => {
  return (
    <ProLayout
      location={{
        pathname: '/admin/process/edit/123',
      }}
      layout="side"
      contentWidth="Fluid"
      ErrorBoundary={false}
      footerRender={Footer}
      fixedHeader={true}
      headerContentRender={() => <ProBreadcrumb />}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: '主页',
        },
        {
          path: '/',
          breadcrumbName: '测试页',
        },
        ...routers,
      ]}
      menuDataRender={() => [
        {
          path: '/welcome',
          name: '欢迎',
        },
        {
          path: '/admin',
          name: '管理',
          routes: [
            {
              name: '申请单列表',
              path: '/admin/process',
            },
            {
              name: '申请单详情',
              path: '/admin/process/detail/:id',
              hideInMenu: true,
            },
            {
              name: '编辑申请单',
              path: '/admin/process/edit/:id',
              hideInMenu: true,
            },
            {
              name: '添加申请单',
              path: '/admin/process/add',
              hideInMenu: true,
            },
          ],
        },
      ]}
    >
      {children}
    </ProLayout>
  );
};
