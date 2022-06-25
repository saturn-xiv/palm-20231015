import { useIntl } from "react-intl";
import { Col } from "antd";

import Layout from "../../../layouts/dashboard";
import IndexLocale from "../../../components/nut/admin/locales/";

const Widget = () => {
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: "nut.admin.locales.title" })}>
      <Col span={24}>
        <IndexLocale />
      </Col>
    </Layout>
  );
};

export default Widget;
