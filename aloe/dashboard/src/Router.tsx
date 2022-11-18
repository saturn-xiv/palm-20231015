import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/not-found";
import Forbidden from "./pages/forbidden";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import Wan from "./pages/wan";
import Lan from "./pages/lan";
import Hosts from "./pages/hosts";
import Nat from "./pages/nat";

const Widget = () => {
  return (
    <Routes>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="wan" element={<Wan />} />
      <Route path="lan" element={<Lan />} />
      <Route path="hosts" element={<Hosts />} />
      <Route path="nat" element={<Nat />} />

      <Route path="forbidden" element={<Forbidden />} />
      <Route path="" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Widget;
