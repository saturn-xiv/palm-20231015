import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { UserSignInResponse } from "../protocols/ops-router_pb";

import type { RootState } from "../store";

const KEY = "token";
export const DURATION = 60 * 60 * 1;
export const TO_PROFILE = "/dashboard/status";
export const TO_SIGN_IN = "/anonymous/users/sign-in";

export const get = (): string | null => {
  const token = sessionStorage.getItem(KEY);
  if (token) {
    return token;
  }

  return null;
};

const set = (token: string) => {
  sessionStorage.setItem(KEY, token);
};

const remove = () => {
  sessionStorage.removeItem(KEY);
  localStorage.removeItem(KEY);
};

export const to_user = (response: UserSignInResponse): IUser | undefined => {
  const decoded: any = jwtDecode<JwtPayload>(response.getToken());

  return {
    nickname: decoded.aud,
  };
};

export interface IUser {
  nickname: string;
}

interface IState {
  payload?: IUser;
}

const initialState: IState = {};

export const slice = createSlice({
  name: "current-user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<[IUser, string]>) => {
      state.payload = action.payload[0];
      set(action.payload[1]);
    },
    signOut: (state) => {
      state.payload = undefined;
      remove();
    },
  },
});

export const { signIn, signOut } = slice.actions;

export const currentUser = (state: RootState): IUser | undefined =>
  state.currentUser.payload;

export default slice.reducer;
