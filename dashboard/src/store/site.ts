import { ActionContext } from "vuex";

import { IState as IApplicationState } from ".";

export const REFRESH = "site.refresh";

export interface IState {
  title: string;
  subhead: string;
  author: IAuthor;
  keywords: string[];
  description: string;
  copyright: string;
  languages: string[];
  sideBar: IMenu[];
}

interface IAuthor {
  email: string;
  name: string;
}

interface IMenu {
  to: string;
  label: string;
  icon?: string;
  children: IMenu[];
}

const state = (): IState => ({
  title: "",
  subhead: "",
  keywords: [],
  author: { name: "", email: "" },
  description: "",
  copyright: "",
  languages: [],
  sideBar: [],
});

const getters = {};

type Context = ActionContext<IState, IApplicationState>;
const actions = {
  async [REFRESH]({ commit }: Context, lang: string) {
    // TODO
    commit(REFRESH, {});
  },
};

const mutations = {
  [REFRESH](state: IState, payload: IState) {
    state.title = payload.title;
    state.subhead = payload.subhead;
    state.description = payload.description;
    state.copyright = payload.copyright;
    state.keywords = [...payload.keywords];
    state.author = { ...payload.author };
    state.sideBar = [...payload.sideBar];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
