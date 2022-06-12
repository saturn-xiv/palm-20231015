import { useIntl } from 'umi';
import { Col } from 'antd';

import Layout from '@/layouts/dashboard';
import AttachmentTable from '@/components/nut/attachments';

const Widget = () => {
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: 'nut.attachments.title' })}>
      <Col span={22} offset={1}>
        <AttachmentTable />
      </Col>
    </Layout>
  );
};

export default Widget;
