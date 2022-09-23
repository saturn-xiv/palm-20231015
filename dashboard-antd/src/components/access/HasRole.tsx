import { ReactNode } from "react";

import { useAppSelector } from "../../hooks";
import { currentUser, ROLE_ADMINISTRATOR } from "../../reducers/current-user";
import Forbidden from "./Forbidden";

interface IProps {
  roles: string[];
  children: ReactNode;
  hidden?: boolean;
}

const Widget = ({ roles, hidden, children }: IProps) => {
  const user = useAppSelector(currentUser);
  console.debug("current user's roles:", user?.roles);
  console.debug("current user's permissions:", user?.permissions);
  console.debug("params:", roles);

  const can = (): boolean => {
    for (var role of roles) {
      if (user?.roles.includes(role)) {
        return true;
      }
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
