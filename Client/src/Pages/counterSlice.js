import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state, action) => {
      state.value += action.payload ? parseInt(action.payload) : 1;
    },
    decreament: (state, action) => {
      state.value -= action.payload ? parseInt(action.payload) : 1;
    },
  },
});

export const { increament, decreament } = counterSlice.actions;
export default counterSlice.reducer;
