import { useState } from "react";
import ReplayIcon from "@mui/icons-material/Replay";

const Widget = () => {
  const [hash, setHash] = useState(0);
  const refresh = () => {
    setHash(new Date().getTime());
  };
  return (
    <>
      <img
        onClick={refresh}
        alt="captcha code"
        src={`${process.env.REACT_APP_GRAPHQL_HOST}/captcha.png?hash=${hash}`}
      />
      <ReplayIcon onClick={refresh} />
    </>
  );
};

export default Widget;
