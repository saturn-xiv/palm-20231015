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
  const can = (): boolean => {
    for (var permission of permissions) {
      for (var it of user?.permissions || []) {
        if (
          it.operation === permission.operation &&
          it.resourceType === permission.resourceType &&
          (it.resourceId === undefined ||
            it.resourceId === permission.resourceId)
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
