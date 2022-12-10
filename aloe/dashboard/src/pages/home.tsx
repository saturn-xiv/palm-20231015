import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../hooks";
import { currentUser } from "../reducers/current-user";

const Widget = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(user ? "/dashboard/users/profile" : "/anonymous/users/sign-in");
  }, [dispatch, navigate, user]);

  return <div>home</div>;
};

export default Widget;
