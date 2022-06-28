import React, { useContext } from "react";
import { TodoContext } from "./Home";
import {
  ListItemText,
  ListItemButton,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Task({ TaskInfo }) {
  const [TodoList, setTodoList] = useContext(TodoContext);

  const handleCompletedChange = () => {
    console.log("handleCompletedChange");
    setTodoList((prevState) =>
      prevState.map((item) =>
        item.id === TaskInfo.id
          ? { ...item, completed: !TaskInfo.completed }
          : item
      )
    );
  };

  const handleRemove = (e, idx) => {
    e.stopPropagation();
    setTodoList(TodoList.filter((item) => item.id !== idx));
  };

  return (
    <ListItemButton onClick={handleCompletedChange}>
      <Checkbox
        edge="start"
        checked={TaskInfo.completed}
        onChange={handleCompletedChange}
        tabIndex={-1}
        disableRipple
        inputProps={{ "aria-labelledby": TaskInfo.id }}
      />

      <ListItemText
        style={{
          textDecoration: TaskInfo.completed ? "line-through" : "none",
        }}
        id={TaskInfo.id}
        primary={TaskInfo.title}
      />

      <IconButton
        onClick={(e) => handleRemove(e, TaskInfo.id)}
        edge="end"
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    </ListItemButton>
  );
}
export default Task;
