import { useState } from "react";
import { ReloadOutlined } from "@ant-design/icons";
import { Space } from "antd";

const Widget = () => {
  const [hash, setHash] = useState(0);
  const refresh = () => {
    setHash(new Date().getTime());
  };
  return (
    <Space>
      <img
        onClick={refresh}
        alt="captcha code"
        src={`${process.env.REACT_APP_API_HOST}/captcha.png?hash=${hash}`}
      />
      <ReloadOutlined onClick={refresh} />
    </Space>
  );
};

export default Widget;
