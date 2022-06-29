import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../App/Features/Posts/postsSclice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
