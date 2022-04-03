import jwtDecode, { JwtPayload } from "jwt-decode";
import { ActionContext } from "vuex";

import { IState as IApplicationState } from ".";

export const SIGN_IN = "user.sign-in";
export const SIGN_OUT = "user.sign-out";

interface ISignInRequest {
  user: string;
  password: string;
  captcha: string;
}

interface ISignInResponse {
  token: string;
  logo: string;
  name: string;
}

const KEY = "token";

export const getToken = (): string | null => {
  return sessionStorage.getItem(KEY);
};

export const setToken = (token: string) => {
  sessionStorage.setItem(KEY, token);
};

export const destroyToken = () => {
  sessionStorage.removeItem(KEY);
};

export interface IState {
  uid?: string;
  name?: string;
  logo?: string;
}

const state = (): IState => ({});

const getters = {
  is_sign_in(state: IState): boolean {
    return state.uid !== undefined;
  },
};

type Context = ActionContext<IState, IApplicationState>;
const actions = {
  async [SIGN_IN]({ commit }: Context, form: ISignInRequest) {
    // TODO
    commit(SIGN_IN, {
      token: "change-me",
      name: "who-ami",
      logo: "aaa.png",
    });
  },
  async [SIGN_OUT]({ commit }: Context) {
    // TODO
    commit(SIGN_OUT);
  },
};

const mutations = {
  [SIGN_IN](state: IState, payload: ISignInResponse) {
    try {
      const it = jwtDecode<JwtPayload>(payload.token);
      if (typeof it.aud === "string") {
        state.uid = it.aud;
        state.name = payload.name;
        state.logo = payload.logo;
      }
    } catch (e) {
      console.error(e);
    }
  },

  [SIGN_OUT](state: IState) {
    state.uid = undefined;
    state.name = undefined;
    state.logo = undefined;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
