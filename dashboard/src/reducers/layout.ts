import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";
import { SiteLayoutResponse } from "../protocols/nut_pb.d";

export interface IAuthor {
  name: string;
  email: string;
}

export interface IState {
  logo: string;
  title: string;
  subhead: string;
  keywords: string[];
  description: string;
  copyright: string;
  author: IAuthor;
}

const initialState: IState = {
  logo: "/favicon.png",
  title: "",
  subhead: "",
  keywords: [],
  description: "",
  copyright: "",
  author: {
    email: "",
    name: "",
  },
};

export const slice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    refresh: (state, action: PayloadAction<SiteLayoutResponse>) => {
      state.logo = action.payload.getLogo();
      state.title = action.payload.getTitle();
      state.subhead = action.payload.getSubhead();
      state.keywords = action.payload.getKeywordsList();
      state.description = action.payload.getDescription();
      state.copyright = action.payload.getCopyright();
      state.author.email = action.payload.getAuthor()?.getEmail() || "";
      state.author.name = action.payload.getAuthor()?.getName() || "";
    },
  },
});

export const { refresh } = slice.actions;

export const layout = (state: RootState): IState => state.layout;

export default slice.reducer;
