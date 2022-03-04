import { ReactNode } from "react";

import Footer from "../Footer";

interface IProps {
  title: string;
  children: ReactNode;
}

function Widget({ children }: IProps) {
  return (
    <div>
      application layout
      {children}
      <br />
      <Footer />
    </div>
  );
}

export default Widget;
