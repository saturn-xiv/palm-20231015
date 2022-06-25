import { useIntl } from "react-intl";
import { Col } from "antd";

import Layout from "../../../layouts/dashboard";
import IndexRole from "../../../components/nut/admin/roles/";

const Widget = () => {
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: "nut.admin.roles.title" })}>
      <Col span={24}>
        <IndexRole />
      </Col>
    </Layout>
  );
};

export default Widget;
