import React, { memo } from "react";
import Reaction from "./Reaction.js";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { parseISO, formatDistanceToNow } from "date-fns";

function Post({ postId, date, title, category, body, reaction }) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Chip label={category} variant="outlined" />
        <Typography
          sx={{ mt: 1, fontStyle: "italic", fontSize: 12 }}
          color="text.secondary"
        >
          {formatDistanceToNow(parseISO(date), {
            addSuffix: true,
            includeSeconds: true,
          })}
        </Typography>
        <Typography
          style={{ marginTop: "20px" }}
          variant="body2"
          color="text.secondary"
        >
          {body}
        </Typography>
      </CardContent>
      <Reaction postId={postId} postReaction={reaction} />
    </Card>
  );
}

export default memo(Post);
