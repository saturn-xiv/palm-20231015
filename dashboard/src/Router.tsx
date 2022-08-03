import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Anonymous from "./layouts/Anonymous";
import Dashboard from "./layouts/dashboard";
import NutLoading from "./components/nut/Loading";

const NutHome = lazy(() => import("./components/nut/Home"));
const NutInstall = lazy(() => import("./components/nut/Install"));
const NutNotFound = lazy(() => import("./components/nut/NotFound"));
const NutSwitchLanguage = lazy(() => import("./components/nut/SwitchLanguage"));
const NutUsersSignIn = lazy(() => import("./components/nut/users/SignIn"));
const NutUsersSignUp = lazy(() => import("./components/nut/users/SignUp"));
const NutUsersConfirmNew = lazy(
  () => import("./components/nut/users/confirm/New")
);
const NutUsersConfirmVerify = lazy(
  () => import("./components/nut/users/confirm/Verify")
);
const NutUsersUnlockNew = lazy(
  () => import("./components/nut/users/unlock/New")
);
const NutUsersUnlockVerify = lazy(
  () => import("./components/nut/users/unlock/Verify")
);
const NutUsersForgotPassword = lazy(
  () => import("./components/nut/users/ForgotPassword")
);
const NutUsersResetPassword = lazy(
  () => import("./components/nut/users/ResetPassword")
);
const NutUsersChangePassword = lazy(
  () => import("./components/nut/users/ChangePassword")
);
const NutUsersLogs = lazy(() => import("./components/nut/users/Logs"));
const NutUsersAccountInfo = lazy(
  () => import("./components/nut/users/AccountInfo")
);
const NutLeaveWordsNew = lazy(() => import("./components/nut/leave-words/New"));
const NutAttachments = lazy(() => import("./components/nut/attachments"));
const NutAdminLeaveWords = lazy(
  () => import("./components/nut/admin/leave-words")
);
const NutAdminUsers = lazy(() => import("./components/nut/admin/users"));
const NutAdminLocales = lazy(() => import("./components/nut/admin/locales"));
const NutAdminSite = lazy(() => import("./components/nut/admin/site"));

const Widget = () => {
  return (
    <Routes>
      <Route path="anonymous" element={<Anonymous />}>
        <Route path="users">
          <Route path="sign-in" element={<NutUsersSignIn />} />
          <Route path="sign-up" element={<NutUsersSignUp />} />
          <Route path="confirm">
            <Route path="new" element={<NutUsersConfirmNew />} />
            <Route path="verify/:token" element={<NutUsersConfirmVerify />} />
          </Route>
          <Route path="unlock">
            <Route path="new" element={<NutUsersUnlockNew />} />
            <Route path="verify/:token" element={<NutUsersUnlockVerify />} />
          </Route>
          <Route
            path="reset-password/:token"
            element={<NutUsersResetPassword />}
          />
          <Route path="forgot-password" element={<NutUsersForgotPassword />} />
        </Route>

        <Route path="leave-words/new" element={<NutLeaveWordsNew />} />

        <Route path="install" element={<NutInstall />} />
      </Route>

      <Route path="dashboard" element={<Dashboard />}>
        <Route path="users">
          <Route path="change-password" element={<NutUsersChangePassword />} />
          <Route path="logs" element={<NutUsersLogs />} />
          <Route path="account-info" element={<NutUsersAccountInfo />} />
        </Route>
        <Route path="attachments" element={<NutAttachments />} />
        <Route path="admin">
          <Route path="leave-words" element={<NutAdminLeaveWords />} />
          <Route path="locales" element={<NutAdminLocales />} />
          <Route path="users" element={<NutAdminUsers />} />
          <Route path="site" element={<NutAdminSite />} />
        </Route>
      </Route>

      <Route path="switch-language" element={<NutSwitchLanguage />} />
      <Route path="loading" element={<NutLoading />} />
      <Route path="" element={<NutHome />} />
      <Route path="*" element={<NutNotFound />} />
    </Routes>
  );
};

export default Widget;
