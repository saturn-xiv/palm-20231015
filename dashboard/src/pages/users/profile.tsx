import { FormattedMessage, useIntl } from 'umi';
import { Col, Card } from 'antd';

import ChangePasswordForm from '@/components/nut/users/ChangePassword';
import AccountInfoForm from '@/components/nut/users/AccountInfo';
import LogsTable from '@/components/nut/users/Logs';
import Layout from '@/layouts/dashboard';

const Widget = () => {
  const intl = useIntl();

  return (
    <Layout title={intl.formatMessage({ id: 'nut.users.profile.title' })}>
      <Col span={22} offset={1}>
        <LogsTable />
      </Col>
      <Col sm={{ span: 22, offset: 1 }} md={{ span: 8 }}>
        <Card title={<FormattedMessage id="nut.users.account-info.title" />}>
          <AccountInfoForm />
        </Card>
      </Col>
      <Col sm={{ span: 22, offset: 1 }} md={{ span: 8 }}>
        <Card title={<FormattedMessage id="nut.users.change-password.title" />}>
          <ChangePasswordForm />
        </Card>
      </Col>
    </Layout>
  );
};
// ----------------------------------------------------------------------------

export default Widget;
