import { configureStore } from "@reduxjs/toolkit";

import currentUser from "./reducers/current-user";
import siteInfo from "./reducers/site-info";
import notificationBar from "./reducers/notification-bar";

const store = configureStore({
  reducer: {
    currentUser,
    siteInfo,
    notificationBar,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
