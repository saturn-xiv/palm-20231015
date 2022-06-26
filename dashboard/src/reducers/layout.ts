import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";
import { SiteLayoutResponse } from "../protocols/nut_pb";

export interface IAuthor {
  name: string;
  email: string;
}

export interface ISite {
  logo: string;
  title: string;
  subhead: string;
  keywords: string[];
  description: string;
  copyright: string;
  author: IAuthor;
}

interface IState {
  site?: ISite;
}

export const to_site = (response: SiteLayoutResponse): ISite | undefined => {
  let author = response.getAuthor();
  if (!author) {
    return;
  }
  return {
    logo: response.getLogo(),
    title: response.getTitle(),
    subhead: response.getSubhead(),
    keywords: response.getKeywordsList(),
    description: response.getDescription(),
    copyright: response.getCopyright(),
    author: {
      email: author.getEmail(),
      name: author.getName(),
    },
  };
};

const initialState: IState = {};

export const slice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    refresh: (state, action: PayloadAction<ISite>) => {
      state.site = action.payload;
    },
  },
});

export const { refresh } = slice.actions;

export const layout = (state: RootState): IState => state.layout;

export const siteInfo = (state: RootState): ISite | undefined =>
  state.layout.site;

export default slice.reducer;
