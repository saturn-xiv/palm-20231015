import { ReactNode } from "react";

import { useAppSelector } from "../../hooks";
import {
  currentUser,
  IPermission,
  ROLE_ADMINISTRATOR,
} from "../../reducers/current-user";
import Forbidden from "./Forbidden";

interface IProps {
  permissions: IPermission[];
  children: ReactNode;
  hidden?: boolean;
}

const Widget = ({ permissions, hidden, children }: IProps) => {
  const user = useAppSelector(currentUser);
  console.debug("current user's roles:", user?.roles);
  console.debug("current user's permissions:", user?.permissions);
  console.debug("params:", permissions);
  const can = (): boolean => {
    for (var ip of permissions) {
      for (var iu of user?.permissions || []) {
        if (
          iu.operation === ip.operation &&
          iu.resourceType === ip.resourceType &&
          (iu.resourceId === undefined || iu.resourceId === ip.resourceId)
        ) {
          return true;
        }
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
