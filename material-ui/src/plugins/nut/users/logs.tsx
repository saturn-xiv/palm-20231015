import { useIntl } from "react-intl";

import Layout from "../../../layouts/dashboard";

const Widget = () => {
  // TODO
  const intl = useIntl();
  return (
    <Layout title={intl.formatMessage({ id: "nut.users.logs.title" })}>
      <div>logs</div>
    </Layout>
  );
};

export default Widget;
