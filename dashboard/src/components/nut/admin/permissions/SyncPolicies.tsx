import { Button, message } from "antd";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { useIntl, FormattedMessage } from "react-intl";

import { RbacClient } from "../../../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../../../request";

const Widget = () => {
  const intl = useIntl();
  const handleClick = () => {
    const client = new RbacClient(GRPC_HOST);

    client.reload(new Empty(), grpc_metadata(), (err) => {
      if (err) {
        message.error(err.message);
      } else {
        message.success(intl.formatMessage({ id: "form.submit.successed" }));
      }
    });
  };
  return (
    <Button onClick={handleClick}>
      <FormattedMessage id="nut.admin.permissions.sync-policies" />
    </Button>
  );
};

export default Widget;
