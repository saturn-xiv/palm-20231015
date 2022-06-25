import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks";
import { TO_PROFILE, TO_SIGN_IN } from "../../reducers/current-user";

const Widget = () => {
  const navigate = useNavigate();
  const currentUser = useAppSelector((state) => state.currentUser);

  useEffect(() => {
    navigate(currentUser.uid ? TO_PROFILE : TO_SIGN_IN);
  }, [currentUser, navigate]);

  return <></>;
};

export default Widget;
