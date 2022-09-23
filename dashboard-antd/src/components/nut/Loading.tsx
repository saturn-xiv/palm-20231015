import { useEffect } from "react";
import { useIntl } from "react-intl";

import loading from "../../assets/reload.svg";
import { useAppDispatch } from "../../hooks";
import Header from "../../layouts/Header";
import { setTitle } from "../../reducers/layout";

const Widget = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "nut.loading.title" });

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTitle(title));
  }, [dispatch, title]);

  return (
    <>
      <div>
        <img
          style={{
            display: "block",
            margin: "auto",
            width: "40%",
          }}
          alt={title}
          src={loading}
        />
      </div>
      <div>
        <Header />
      </div>
    </>
  );
};

export default Widget;
