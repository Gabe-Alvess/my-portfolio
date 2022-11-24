import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type darkModeState = {
  value: boolean;
};

const initialState: darkModeState = {
  value: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    darkModeSwitch: (state) => {
      state.value = true;
    },
    lightModeSwitch: (state) => {
      state.value = false;
    },
  },
});

export const { darkModeSwitch, lightModeSwitch } = darkModeSlice.actions;
// selector
export const themeValue = (state: RootState) => state.darkMode.value;

export default darkModeSlice.reducer;
