import SignIn from "./users/sign-in";
import Logs from "./users/logs";
import { useAppSelector } from "../../hooks";
import { isSignIn } from "../../reducers/current-user";

const Widget = () => {
  const is_sign_in = useAppSelector(isSignIn);
  return is_sign_in ? <Logs /> : <SignIn />;
};

export default Widget;
