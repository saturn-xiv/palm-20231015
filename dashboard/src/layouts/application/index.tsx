import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";

import Copyright from "../Copyright";

interface IProps {
  title: string;
  children: ReactNode;
}

function Widget({ title, children }: IProps) {
  return (
    <HelmetProvider>
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md4 ms-mdOffset4">
            {children}
          </div>
          <div className="ms-Grid-col ms-sm12 ms-md12">
            <Copyright title={title} />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Widget;
