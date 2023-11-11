import { useEffect } from "react";
import { useIntl } from "react-intl";

import { useAppDispatch } from "../../hooks";
import { setTitle } from "../../reducers/layout";

const Widget = () => {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setTitle(intl.formatMessage({ id: "pages.dashboard.hosts.title" }))
    );
  }, [dispatch, intl]);
  return <div>hosts</div>;
};

export default Widget;
