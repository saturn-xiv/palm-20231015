import { useIntl } from "react-intl";

import Layout from "../../layouts/application";

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.not-found.title" });
  return (
    <Layout title={title}>
      <div>not found</div>
    </Layout>
  );
};

export default Widget;
