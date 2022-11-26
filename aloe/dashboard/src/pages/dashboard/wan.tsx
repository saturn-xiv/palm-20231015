import { useEffect } from "react";
import { useIntl } from "react-intl";

import { useAppDispatch } from "../../hooks";
import { setTitle } from "../../reducers/layout";

const Widget = () => {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTitle(intl.formatMessage({ id: "pages.dashboard.wan.title" })));
  }, [dispatch, intl]);
  return <div>wan</div>;
};

export default Widget;
