import React from "react";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addReaction } from "./postsSlice";

function Reaction({ postId, postReaction }) {
  const dispatch = useDispatch();
  const reactionList = {
    Like: "👍",
    Love: "❤️",
    Fire: "🔥",
    Rocket: "🚀",
    Clap: "👏",
    Unicorn: "🦄",
  };
  return (
    <CardActions>
      {Object.entries(reactionList).map(([reactionName, reactionValue]) => (
        <Button
          size="large"
          key={reactionName}
          onClick={() => dispatch(addReaction({ postId, reactionName }))}
        >
          <span style={{ fontSize: "26px", marginRight: "10px" }}>
            {reactionValue}
          </span>
          {postReaction[reactionName]}
        </Button>
      ))}
    </CardActions>
  );
}

export default Reaction;
