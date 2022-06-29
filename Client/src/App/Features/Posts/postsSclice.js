import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(payload) {
        return {
          payload: {
            id: nanoid(),
            title: payload.title,
            category: payload.category,
            body: payload.body,
            reaction: {
              Like: 0,
              Love: 0,
              Haha: 0,
              Wow: 0,
              Sad: 0,
              Angry: 0,
            },
          },
        };
      },
    },
    addReaction: (state, action) => {
      const post = state.find((item) => item.id === action.payload.postId);
      post.reaction[action.payload.reactionName]++;
    },
  },
});

export const { addPost, addReaction } = postsSlice.actions;
export default postsSlice.reducer;
