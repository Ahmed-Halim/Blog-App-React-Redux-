import React, { memo } from "react";
import Reaction from "./Reaction.js";
function Post({ postId, title, category, body, reaction }) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{category}</p>
      <div>{body}</div>
      <Reaction postId={postId} postReaction={reaction} />
    </section>
  );
}

export default memo(Post);
