import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./Features/Posts/postsSlice";
import formReducers from "./Features/Form/formSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    form: formReducers,
  },
});
