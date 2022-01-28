import { Image, Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

import broken_link from '../assets/broken-link.svg';

export default () => {
  // TODO
  return (
    <PageContainer
      // footer={[<Footer key="footer.copyright" />]}
      content="欢迎使用"
      breadcrumbRender={false}
      tabList={[
        {
          tab: '基本信息',
          key: 'base',
        },
        {
          tab: '详细信息',
          key: 'info',
        },
      ]}
      extra={[
        <Button key="3">操作</Button>,
        <Button key="2">操作</Button>,
        <Button key="1" type="primary">
          主操作
        </Button>,
      ]}
    >
      <Image src={broken_link} />
    </PageContainer>
  );
  // return ;
};
