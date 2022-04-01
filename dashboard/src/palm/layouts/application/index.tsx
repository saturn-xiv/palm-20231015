import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const Widget = ({ children }: IProps) => {
  return (
    <div>
      <div>application header</div>
      <div>{children}</div>
      <div>application footer</div>
    </div>
  );
};

export default Widget;
