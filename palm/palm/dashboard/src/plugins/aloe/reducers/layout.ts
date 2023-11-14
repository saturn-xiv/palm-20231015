import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

interface IState {
  title?: string;
}

const initialState: IState = {};

export const slice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = slice.actions;

export const pageTitle = (state: RootState): string | undefined =>
  state.layout.title;

export default slice.reducer;
