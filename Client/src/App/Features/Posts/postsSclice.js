import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: [
    {
      id: "SHnH-TNeHqky5GVF5WOXr",
      title: "What is React?",
      category: "Education",
      body: "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.",
      reaction: {
        Like: 0,
        Love: 0,
        Haha: 0,
        Wow: 0,
        Sad: 0,
        Angry: 0,
      },
    },
  ],
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
