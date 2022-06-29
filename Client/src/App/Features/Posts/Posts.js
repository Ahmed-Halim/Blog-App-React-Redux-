import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import PostForm from "./PostForm";

export default function Posts() {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <PostForm />
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          title={post.title}
          category={post.category}
          body={post.body}
          reaction={post.reaction}
        />
      ))}
    </>
  );
}
