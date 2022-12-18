import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type themeState = {
  value: boolean;
};

const initialState: themeState = {
  value: true,
};

export const darkModeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    darkTheme: (state) => {
      state.value = true;
    },
    lightTheme: (state) => {
      state.value = false;
    },
  },
});

export const { darkTheme, lightTheme } = darkModeSlice.actions;
// selector
export const themeState = (state: RootState) => state.theme.value;

export default darkModeSlice.reducer;
