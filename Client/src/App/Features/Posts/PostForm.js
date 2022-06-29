import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSclice";

export default function PostForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");

  const ResetForm = () => {
    setTitle("");
    setCategory("");
    setBody("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && category && body) {
      dispatch(addPost({ title, category, body }));
      ResetForm();
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title .."
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose category ..</option>
        <option value="Education">Education</option>
        <option value="Sport">Sport</option>
        <option value="Food">Food</option>
      </select>
      <textarea
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body .."
      ></textarea>
      <button type="submit">Save</button>
    </form>
  );
}
