import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/not-found";
import Forbidden from "./pages/forbidden";
import Home from "./pages/home";
import SignIn from "./pages/anonymous/users/sign-in";
import Wan from "./pages/dashboard/wan";
import Lan from "./pages/dashboard/lan";
import Dmz from "./pages/dashboard/dmz";
import Nat from "./pages/dashboard/nat";
import Hosts from "./pages/dashboard/hosts";
import Status from "./pages/dashboard/status";
import InBound from "./pages/dashboard/in-bound";
import UserProfile from "./pages/dashboard/users/profile";
import Anonymous from "./layouts/anonymous";
import Dashboard from "./layouts/dashboard";

const Widget = () => {
  return (
    <Routes>
      <Route path="anonymous" element={<Anonymous />}>
        <Route path="users">
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Route>
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="wan" element={<Wan />} />
        <Route path="lan" element={<Lan />} />
        <Route path="dmz" element={<Dmz />} />
        <Route path="nat" element={<Nat />} />
        <Route path="hosts" element={<Hosts />} />
        <Route path="in-bound" element={<InBound />} />
        <Route path="status" element={<Status />} />
        <Route path="users">
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Route>

      <Route path="forbidden" element={<Forbidden />} />
      <Route path="" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Widget;
