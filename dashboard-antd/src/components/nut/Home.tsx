import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks";
import {
  TO_PROFILE,
  TO_SIGN_IN,
  currentUser,
} from "../../reducers/current-user";

const Widget = () => {
  const navigate = useNavigate();
  const user = useAppSelector(currentUser);

  useEffect(() => {
    navigate(user ? TO_PROFILE : TO_SIGN_IN);
  }, [user, navigate]);

  return <></>;
};

export default Widget;
