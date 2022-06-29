import React from "react";
import { useDispatch } from "react-redux";
import { addReaction } from "./postsSclice";

function Reaction({ postId, postReaction }) {
  const dispatch = useDispatch();
  const reactionList = {
    Like: "👍",
    Love: "❤️",
    Haha: "😂",
    Wow: "😯",
    Sad: "😢",
    Angry: "😡",
  };
  return (
    <>
      <div>
        Reaction:
        {Object.entries(reactionList).map(([reactionName, reactionValue]) => (
          <button
            key={reactionName}
            onClick={() => dispatch(addReaction({ postId, reactionName }))}
          >
            {reactionValue} {postReaction[reactionName]}
          </button>
        ))}
      </div>
    </>
  );
}

export default Reaction;
