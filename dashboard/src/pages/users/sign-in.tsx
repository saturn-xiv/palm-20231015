import { Col } from 'antd';

import Layout from '@/layouts/application';

const Widget = () => {
  return (
    <Layout title="sign in">
      <Col sm={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
        <div>users sign-in</div>
      </Col>
    </Layout>
  );
};

export default Widget;
