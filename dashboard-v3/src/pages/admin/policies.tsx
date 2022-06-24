import { useIntl } from 'umi';
import { Col } from 'antd';

import Layout from '@/layouts/dashboard';
import IndexPolicy from '@/components/nut/admin/policies/';

const Widget = () => {
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: 'nut.admin.policies.title' })}>
      <Col span={24}>
        <IndexPolicy />
      </Col>
    </Layout>
  );
};

export default Widget;
