import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type modalState = {
  isOpen: boolean;
};

const initialState: modalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalState = (state: RootState) => state.modal.isOpen;

export default modalSlice.reducer;
