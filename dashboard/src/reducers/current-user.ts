import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

const KEY = "token";

export const getToken = () => {
  return sessionStorage.getItem(KEY);
};

export const setToken = (token: string) => {
  sessionStorage.setItem(KEY, token);
};

export const destroyToken = () => {
  sessionStorage.removeItem(KEY);
};

export interface IState {
  id?: string;
  profile?: IProfile;
}

export interface IProfile {
  name: string;
  lang: string;
  tz: string;
  logo: string;
  roles: string[];
}

const initialState: IState = {};

export const slice = createSlice({
  name: "current-user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<IState>) => {
      state.id = action.payload.id;
      state.profile = action.payload.profile;
    },
    signOut: (state) => {
      state.id = undefined;
      state.profile = undefined;
    },
  },
});

export const { signIn, signOut } = slice.actions;

const ADMINISTRATOR = "administrator";

export const isSignIn = (state: RootState): boolean =>
  state.currentUser.id !== undefined;
export const isAdministrtor = (state: RootState): boolean =>
  hasRole(state, ADMINISTRATOR);

export const hasRole = (state: RootState, role: string): boolean =>
  state.currentUser.profile?.roles !== undefined &&
  state.currentUser.profile?.roles.includes(role);

export default slice.reducer;
