import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Pages/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
