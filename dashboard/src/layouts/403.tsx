import { useIntl } from "react-intl";

import Layout from "./application";
import forbidden from "../assets/unauthorised.svg";
import GoHomeOrBack from "../components/GoHomeOrBack";

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.403.title" });
  return (
    <Layout title={title}>
      <GoHomeOrBack cover={<img alt={title} src={forbidden} />}></GoHomeOrBack>
    </Layout>
  );
};

export default Widget;
