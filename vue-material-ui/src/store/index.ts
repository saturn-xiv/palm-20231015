import { createStore } from "vuex";

import { ICurrentUser } from "./current-user";
import { ILayout } from "./layout";

export interface IState {
  currentUser: ICurrentUser;
  layout: ILayout;
}

const store = createStore<IState>({
  state() {
    return {
      currentUser: {},
      layout: {},
    };
  },
  mutations: {
    refresh(state, payload: ILayout) {
      // TODO
      state.layout = { ...payload };
    },
    signIn(state, token: string) {
      // TODO
    },
    signOut(state) {
      // TODO
    },
  },
});

export default store;
