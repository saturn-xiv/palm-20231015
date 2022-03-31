import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export interface IState {
  title: string;
  keywords: string[];
  description: string;
  subhead: string;
  copyright: string;
  languages: string[];
  author: { name: string; email: string };
}

const initialState: IState = {
  title: "",
  subhead: "",
  keywords: [],
  copyright: "",
  description: "",
  languages: [],
  author: {
    name: "",
    email: "",
  },
};

const slice = createSlice({
  name: "site-info",
  initialState,
  reducers: {
    refresh: (state, action: PayloadAction<IState>) => {
      state.title = action.payload.title;
      state.subhead = action.payload.subhead;
      state.copyright = action.payload.copyright;
      state.languages = action.payload.languages;
      state.keywords = action.payload.keywords;
      state.author = action.payload.author;
      state.description = action.payload.description;
    },
  },
});

export const { refresh } = slice.actions;

export const selectSiteInfo = (state: RootState): IState => {
  return { ...state.siteInfo };
};

export default slice.reducer;
