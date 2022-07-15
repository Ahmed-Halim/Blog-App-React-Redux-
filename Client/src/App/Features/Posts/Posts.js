import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import PostForm from "../Form/PostForm";
import Grid from "@mui/material/Grid";

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  return (
    <Grid container style={{ margin: "20px auto", maxWidth: "600px" }}>
      <Grid item xs={12}>
        <PostForm />
      </Grid>
      <Grid item xs={12}>
        {sortedPosts.map((post) => (
          <Post
            key={post.id}
            postId={post.id}
            date={post.date}
            title={post.title}
            category={post.category}
            body={post.body}
            reaction={post.reaction}
          />
        ))}
      </Grid>
    </Grid>
  );
}
