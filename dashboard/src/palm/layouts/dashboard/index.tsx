import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const Widget = ({ children }: IProps) => {
  return (
    <div>
      <div>dashboard header</div>
      <div>{children}</div>
      <div>dashboard footer</div>
    </div>
  );
};

export default Widget;
