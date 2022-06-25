import { useIntl } from "react-intl";
import { Col } from "antd";

import Layout from "../../../layouts/dashboard";
import IndexUser from "../../../components/nut/admin/users";

const Widget = () => {
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: "nut.admin.users.title" })}>
      <Col span={24}>
        <IndexUser />
      </Col>
    </Layout>
  );
};

export default Widget;
