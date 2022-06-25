import { useEffect } from "react";

import { useAppSelector } from "../hooks";
import { siteInfo } from "../reducers/layout";

interface IProps {
  title: string;
}

const Widget = ({ title }: IProps) => {
  const site = useAppSelector(siteInfo);
  useEffect(() => {
    document.title = `${title} | ${site?.subhead} | ${site?.title}`;
  });

  return <></>;
};

export default Widget;
