import { useIntl } from "react-intl";

import Layout from "./application";
import not_found from "../assets/chain.svg";
import GoHomeOrBack from "../components/GoHomeOrBack";

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.404.title" });
  return (
    <Layout title={title}>
      <GoHomeOrBack cover={<img alt={title} src={not_found} />}></GoHomeOrBack>
    </Layout>
  );
};

export default Widget;
