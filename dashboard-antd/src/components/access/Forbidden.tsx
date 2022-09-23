import { ReactNode } from "react";

import Forbidden from "../nut/Forbidden";

interface IProps {
  can: boolean;
  hidden?: boolean;
  children: ReactNode;
}

const Widget = ({ can, hidden, children }: IProps) => {
  if (can) {
    return <>{children}</>;
  }
  if (hidden) {
    return <></>;
  }
  return <Forbidden />;
};

export default Widget;
