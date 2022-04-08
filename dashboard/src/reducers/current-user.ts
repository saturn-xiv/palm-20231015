import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

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
  id?: string;
  profile?: IProfile;
}

export interface IProfile {
  realName: string;
  nickName: string;
  email: string;
  lang: string;
  timeZone: string;
  logo: string;
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

export const selectCurrentUser = (state: RootState): IProfile | undefined =>
  state.currentUser.profile;

export const isSignIn = (state: RootState): boolean =>
  state.currentUser.id !== undefined;

export default slice.reducer;
