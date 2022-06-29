import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: false,
  reducers: {
    toggleForm: (state) => {
      return !state;
    },
  },
});

export const { toggleForm } = formSlice.actions;
export default formSlice.reducer;
