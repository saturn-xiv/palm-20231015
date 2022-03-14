import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export interface IState {
  title: string;
  subhead: string;
  copyright: string;
  languages: string[];
}

const initialState: IState = {
  title: "",
  subhead: "",
  copyright: "",
  languages: [],
};

const slice = createSlice({
  name: "site-info",
  initialState,
  reducers: {
    refresh: (state, action: PayloadAction<IState>) => {
      // console.log("refresh site-info", action.payload);
      state.title = action.payload.title;
      state.subhead = action.payload.subhead;
      state.copyright = action.payload.copyright;
      state.languages = action.payload.languages;
    },
  },
});

export const { refresh } = slice.actions;

export const selectSiteInfo = (state: RootState): IState => {
  return { ...state.siteInfo };
};

export default slice.reducer;
