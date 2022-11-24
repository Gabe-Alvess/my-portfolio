import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type languageState = {
  value: string[];
};

const initialState: languageState = {
  value: ["EN"],
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    selectedLang: (state) => {
      state.value = ["EN", "NL", "FR", "PT"];
    },
  },
});

export const { selectedLang } = languageSlice.actions;
export const languageValue = (state: RootState) => state.language.value;
export default languageSlice.reducer;
