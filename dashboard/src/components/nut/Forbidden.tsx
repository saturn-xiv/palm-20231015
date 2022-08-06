import { Card } from "antd";
import { useIntl } from "react-intl";

import unauthorised_svg from "../../assets/unauthorised.svg";

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.403.title" });
  return (
    <Card
      hoverable
      title={title}
      cover={<img alt={title} src={unauthorised_svg} />}
    />
  );
};

export default Widget;
