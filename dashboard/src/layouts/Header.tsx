import { useEffect } from "react";

import { useAppSelector } from "../hooks";
import { siteInfo, pageTitle } from "../reducers/layout";

const Widget = () => {
  const site = useAppSelector(siteInfo);
  const title = useAppSelector(pageTitle);

  useEffect(() => {
    document.title = `${title} | ${site?.subhead} | ${site?.title}`;
  }, [site, title]);

  return <></>;
};

export default Widget;
