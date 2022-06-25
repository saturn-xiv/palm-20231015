import { Avatar } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";
import { Popconfirm, message } from "antd";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { useNavigate } from "react-router-dom";

import { UserClient } from "../../protocols/NutServiceClientPb";
import { GRPC_HOST, grpc_metadata } from "../../request";
import { remove as removeToken } from "../../reducers/current-user";

const Widget = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  return (
    <Popconfirm
      title={intl.formatMessage({ id: "nut.users.sign-out.title" })}
      onConfirm={() => {
        const client = new UserClient(GRPC_HOST);
        client.signOut(new Empty(), grpc_metadata(), (err) => {
          if (err) {
            message.error(err.message);
          } else {
            message.success(
              intl.formatMessage({ id: "form.submit.successed" })
            );
          }
          removeToken();
          navigate("/");
        });
      }}
    >
      <Avatar shape="square" size="small" icon={<LogoutOutlined />} />
    </Popconfirm>
  );
};

export default Widget;
