import { useIntl } from "react-intl";
import { Col } from "antd";

import Layout from "../../../layouts/dashboard";
import IndexLeaveWord from "../../../components/nut/admin/leave-words";

const Widget = () => {
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: "nut.admin.leave-words.title" })}>
      <Col span={24}>
        <IndexLeaveWord />
      </Col>
    </Layout>
  );
};

export default Widget;
