import { configureStore } from "@reduxjs/toolkit";

import currentUserReducer from "./reducers/current-user";
import layoutReducer from "./reducers/layout";

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    layout: layoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
