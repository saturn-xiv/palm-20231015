import { ReactNode } from "react";

import { useAppSelector } from "../../hooks";
import { currentUser, ROLE_ADMINISTRATOR } from "../../reducers/current-user";
import Forbidden from "./Forbidden";

interface IProps {
  role: string;
  children: ReactNode;
  hidden?: boolean;
}

const Widget = ({ role, hidden, children }: IProps) => {
  const user = useAppSelector(currentUser);
  const can = (): boolean => {
    console.log(user?.roles, user?.permissions);
    if (user?.roles.includes(role)) {
      return true;
    }
    if (user?.roles.includes(ROLE_ADMINISTRATOR)) {
      return true;
    }
    return false;
  };
  return (
    <Forbidden hidden={hidden} can={can()}>
      {children}
    </Forbidden>
  );
};

export default Widget;
