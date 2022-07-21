import { Col } from "antd";
import { useIntl } from "react-intl";

import Layout from "../../layouts/application";
import SwitchLanguage from "../../components/nut/SwitchLanguage";

const Widget = () => {
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: "nut.switch-language.title" })}>
      <Col sm={{ span: 22, offset: 1 }} md={{ span: 8, offset: 8 }}>
        <SwitchLanguage />
      </Col>
    </Layout>
  );
};

export default Widget;
