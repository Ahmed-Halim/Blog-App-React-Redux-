import React from "react";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
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
    <CardActions>
      {Object.entries(reactionList).map(([reactionName, reactionValue]) => (
        <Button
          size="small"
          key={reactionName}
          onClick={() => dispatch(addReaction({ postId, reactionName }))}
        >
          {reactionValue} {postReaction[reactionName]}
        </Button>
      ))}
    </CardActions>
  );
}

export default Reaction;
