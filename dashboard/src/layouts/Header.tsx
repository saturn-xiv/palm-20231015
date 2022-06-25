import { useEffect } from "react";

import { useAppSelector } from "../hooks";

interface IProps {
  title: string;
}

const Widget = ({ title }: IProps) => {
  const layout = useAppSelector((state) => state.layout);
  useEffect(() => {
    document.title = `${title} | ${layout.subhead} | ${layout.title}`;
  });

  return <></>;
};

export default Widget;
