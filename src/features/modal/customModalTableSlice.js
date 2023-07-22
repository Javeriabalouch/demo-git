// src/features/customModalTable/customModalTableSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalData: null,
};

const customModalTableSlice = createSlice({
  name: "customModalTable",
  initialState,
  reducers: {
    setModalData: (state, action) => {
      state.modalData = action.payload;
      debugger
    },
    clearModalData: (state) => {
      state.modalData = null;
    },
  },
});

export const { setModalData, clearModalData } = customModalTableSlice.actions;
export default customModalTableSlice.reducer;
