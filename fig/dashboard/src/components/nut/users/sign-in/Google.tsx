import { GoogleLogin } from "@react-oauth/google";

const Widget = () => {
  return (
    <GoogleLogin
      width="200"
      locale="zh_CN"
      onSuccess={(credentialResponse) => {
        // TODO
        console.log(credentialResponse);
      }}
      onError={() => {
        // TODO
        console.log("Login Failed");
      }}
    />
  );
};

export default Widget;
