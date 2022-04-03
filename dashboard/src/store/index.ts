import { createStore, createLogger } from "vuex";

import currentUser, { IState as ICurrentUser } from "./current-user";
import site, { IState as ISite } from "./site";

export interface IState {
  currentUser: ICurrentUser;
  site: ISite;
}

export default createStore<IState>({
  modules: {
    currentUser,
    site,
  },
  strict: import.meta.env.DEV,
  plugins: import.meta.env.DEV ? [createLogger()] : [],
});
