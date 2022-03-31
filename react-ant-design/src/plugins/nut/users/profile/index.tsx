import { Col } from "antd";
import { useIntl } from "react-intl";

import Layout from "../../../../layouts/dashboard";
import ChangePassword from "./ChangePassword";
import Account from "./Account";

const Widget = () => {
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: "nut.users.profile.title" })}>
      <Col sm={24} md={8}>
        <ChangePassword />
      </Col>
      <Col sm={24} md={8}>
        <Account />
      </Col>
    </Layout>
  );
};

export default Widget;
