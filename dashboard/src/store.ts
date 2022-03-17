import { configureStore } from "@reduxjs/toolkit";

import currentUser from "./reducers/current-user";
import siteInfo from "./reducers/site-info";
import sideBar from "./reducers/side-bar";

const store = configureStore({
  reducer: {
    currentUser,
    siteInfo,
    sideBar,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
