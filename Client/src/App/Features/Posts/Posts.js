import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import PostForm from "./PostForm";
import Grid from "@mui/material/Grid";

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  return (
    <Grid container style={{ margin: "20px auto", maxWidth: "600px" }}>
      <Grid item xs={12}>
        <PostForm />
      </Grid>
      <Grid item xs={12}>
        {posts.map((post) => (
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
