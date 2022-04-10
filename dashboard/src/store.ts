import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import currentUser from "./reducers/current-user";
import siteInfo from "./reducers/site-info";
import sideBar from "./reducers/side-bar";
import snackBar from "./reducers/snack-bar";
import reload from "./sagas/reload";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    currentUser,
    siteInfo,
    sideBar,
    snackBar,
  },
  middleware: new MiddlewareArray().concat(sagaMiddleware),
});

sagaMiddleware.run(reload);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
