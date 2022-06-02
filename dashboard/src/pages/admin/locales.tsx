import { useIntl } from 'umi';
import { Col } from 'antd';

import Layout from '@/layouts/dashboard';

const Widget = () => {
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: 'nut.admin.locales.index' })}>
      <Col span={24}></Col>
    </Layout>
  );
};

export default Widget;
