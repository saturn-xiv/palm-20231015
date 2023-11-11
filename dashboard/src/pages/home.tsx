import { useIntl } from "react-intl";

const Widget = () => {
  const intl = useIntl();
  return (
    <div>
      home &nbsp;
      {intl.formatMessage({ id: "languages.en-US" })}
    </div>
  );
};

export default Widget;
